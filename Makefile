MONGO_PORT			?= 27017
MONGO_USER			?= appuser
MONGO_PASS			?= pass

PVAULT_DOCKER_NAME	:= pvault-dev
MONGO_DOCKER_NAME	:= mongo

PVAULT_DOCKER_TAG	?= piiano/pvault-dev:0.9.7-poc-221012

APP_DIR				:= ./demo-app
SDK_DIR				:= ./pvault-sdk
LIB_DIR				:= ./typeorm-pvault

###### MONGO ######
.PHONY: mongo-run
mongo-run: mongo-stop
	docker run --rm -d -p $(MONGO_PORT):27017 --name mongo \
		-e MONGO_INITDB_ROOT_USERNAME=$(MONGO_USER) \
		-e MONGO_INITDB_ROOT_PASSWORD=$(MONGO_PASS) \
		$(MONGO_DOCKER_NAME)

.PHONY: mongo-stop
mongo-stop:
	docker rm -f $(MONGO_DOCKER_NAME)

###### PVAULT ######
.PHONY: pvault-run
pvault-run: pvault-stop
	docker run -d -it \
			   -e PVAULT_LOG_DATADOG_ENABLE=false \
			   -e PVAULT_SENTRY_ENABLE=false \
			   -e PVAULT_SERVICE_LICENSE=$(PVAULT_SERVICE_LICENSE) \
			   -e PVAULT_DEVMODE=1 \
			   -p 8123:8123 \
			   -p 5432:5432 \
			   --name $(PVAULT_DOCKER_NAME) \
			   $(PVAULT_DOCKER_TAG)
	
	sleep 3
	docker exec -i pvault-dev pvault collection add --collection-pvschema " \
		users PERSONS ( 	\
			email EMAIL,	\
			ssn SSN NULL,	\
		)"

.PHONY: pvault-stop
pvault-stop:
	docker rm -f $(PVAULT_DOCKER_NAME)

###### APP ######
.PHONY: prepare-sdk
prepare-sdk: $(SDK_DIR)/dist/index.js

$(SDK_DIR)/dist/index.js: $(SDK_DIR)/package.json $(SDK_DIR)/openapi.yaml
	yarn --cwd $(SDK_DIR)

.PHONY: prepare-lib
prepare-lib: prepare-sdk $(LIB_DIR)/dist/index.js

$(LIB_DIR)/dist/index.js: $(LIB_DIR)/package.json
	yarn --cwd $(LIB_DIR)

.PHONY: prepare-app
prepare-app: prepare-lib $(APP_DIR)/dist/ormconfig.js

$(APP_DIR)/dist/ormconfig.js: $(APP_DIR)/package.json
	yarn --cwd $(APP_DIR)
	yarn --cwd $(APP_DIR) build

.PHONY: prepare
prepare: prepare-app

.PHONY: app-run
app-run: prepare mongo-run pvault-run
	yarn --cwd $(APP_DIR) start:dev

.PHONY: app-test
app-test: prepare
	yarn --cwd $(APP_DIR) test

###### SDK TYPESCRIPT ######
IN_DOCKER_PWD	:= /local
OPENAPI_YAML	:= $(SDK_DIR)/openapi.yaml

$(SDK_DIR)/generated/index.ts: $(OPENAPI_YAML)
	yarn --cwd $(SDK_DIR) generate

.PHONY: generate-sdk-ts
generate-sdk-ts: $(SDK_DIR)/generated/index.ts
