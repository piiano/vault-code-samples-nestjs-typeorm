MONGO_PORT			?= 27017
MONGO_USER			?= appuser
MONGO_PASS			?= pass

PVAULT_DOCKER_NAME	:= pvault-dev
MONGO_DOCKER_NAME	:= mongo

APP_DIR				:= ./app
SDK_DIR				:= ./pvault-sdk

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
			   --name $(PVAULT_DOCKER_NAME) \
			   piiano/pvault-dev:0.9.5

.PHONY: pvault-stop
pvault-stop:
	docker rm -f $(PVAULT_DOCKER_NAME)

###### APP ######
.PHONY: app-run
app-run: mongo-run pvault-run
	yarn --cwd $(APP_DIR) start:dev


###### SDK TYPESCRIPT ######
IN_DOCKER_PWD	:= /local
OPENAPI_YAML	:= $(SDK_DIR)/openapi.yaml

$(SDK_DIR)/generated/index.ts:
	yarn --cwd $(SDK_DIR) generate

.PHONY: generate-sdk-ts
generate-sdk-ts: $(SDK_DIR)/generated/index.ts
