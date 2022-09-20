MONGO_PORT			?= 27017
MONGO_USER			?= appuser
MONGO_PASS			?= pass
MONGO_DOCKER_NAME	:= mongo

APP_DIR				:= ./app


mongo-run: mongo-stop
	docker run --rm -d -p $(MONGO_PORT):27017 --name mongo \
		-e MONGO_INITDB_ROOT_USERNAME=$(MONGO_USER) \
		-e MONGO_INITDB_ROOT_PASSWORD=$(MONGO_PASS) \
		$(MONGO_DOCKER_NAME)

mongo-stop:
	docker rm -f $(MONGO_DOCKER_NAME)

app-run: mongo-run
	yarn --cwd $(APP_DIR) start:dev