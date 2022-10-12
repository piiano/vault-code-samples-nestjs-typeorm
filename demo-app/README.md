# Vault NestJS/TypeORM Code Samples - Demo Application

## Requirements

* [Docker](https://docs.docker.com/get-docker/)
* [yarn](https://github.com/yarnpkg/yarn)

## Installation

To run the Vault you will need to issue a free 30-days license from [get-started](https://piiano.com/docs/guides/get-started) and set it to an environment variable `PVAULT_SERVICE_LICENSE`. 

The easiest way to run the app is to use the Makefile at the root of the repository with the command `make app-run`.

Note: This is not a production ready application, but a showcase and code example only.

### Alternative Manual Instructions

* Build the application:
   1. Build the SDK: `yarn --cwd pvault-sdk`
   2. Build the library: `yarn --cwd typeorm-pvault`
   3. Prepare the demo app: `yarn --cwd demo-app`
   4. Build the demo app: `yarn --cwd demo-app build`

* Start MongoDB:
   ```bash
   docker run --rm -d -p 27017:27017 --name mongo \
		-e MONGO_INITDB_ROOT_USERNAME=appuser \
		-e MONGO_INITDB_ROOT_PASSWORD=pass \
		mongo
    ```
    The parameters themselves for the post, username and password should be in sync with [ormconfig.ts](/demo-app/ormconfig.ts)

* Start Piiano Vault:
  Install Piiano Vault - step 1 & 2 on [get-started](https://piiano.com/docs/guides/get-started), and create a collection for user's emails:
    ```bash
    pvault collection add --collection-pvschema "
      users PERSONS (
        email EMAIL,
        ssn SSN NULL,
      )"
    ```

* Run the appication: `cd demo-app && yarn start:dev`.