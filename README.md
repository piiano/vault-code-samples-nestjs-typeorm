<p>
  <a href="https://piiano.com/pii-data-privacy-vault/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://piiano.com/docs/img/logo-developers-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://piiano.com/docs/img/logo-developers.svg">
      <img alt="Piiano Vault" src="https://piiano.com/docs/img/logo-developers.svg" height="40" />
    </picture>
  </a>
</p>

_Piiano Vault: The secure home for sensitive personal data_  

*Safely store sensitive personal data in your own cloud environment with automated compliance controls.*

Vault NestJS/TypeORM Code Samples
=================================

## Background
Piiano Vault is the secure home for sensitive personal data. It allows you to safely store sensitive personal data in your own cloud environment with
automated compliance controls.
Vault is deployed within your own architecture, next to other DBs used by the applications, and should be used to store the most critical sensitive personal data, such as credit cards and bank account numbers, names, emails, national IDs (e.g. SSN), phone numbers, etc.
The main benefits are:
- Field level encryption, including key rotation.
- Searchability is allowed over the encrypted data.
- Full audit log for all data accesses.
- Granular access controls.
- Easy masking and tokenization of data.
- Out of the box privacy compliance functionality.

More details can be found [on our website](https://piiano.com/pii-data-privacy-vault/) and on the [developers portal](https://piiano.com/docs/).

## Installation

Requirements: [Docker](https://docs.docker.com/get-docker/), [yarn](https://github.com/yarnpkg/yarn)

`make app-run` - Start the application and its prerequisites (mainly MongoDB and Piiano Vault). 

`make app-test` - Test the high-level functionality of the CRUD as integrated with Piiano Vault.
  * `insert-get-delete`: Inserts a user, fetch it and then delete it. All protected properties are stored as tokens in the app's DB.
  * `search` - Search users by a protected property.
  * `list` - Lists all users that are partially protected by Piiano Vault. All the protected properties are detokenized.
  * `update`: Update a user with a nested protected property. The protected property is updated on Vault, and the resulting token is stored in the app's DB. Unmodified properties remain the same.
  
`make generate-sdk-ts` - The generated code is already committed in this repository. Use this option to re-generate the Typescript SDK from the [openapi.yaml](/pvault-sdk/openapi.yaml) file.

## Folder structure

This repo contains the following projects:

1. `pvault-sdk` - Piiano Vault auto-generated Typescript SDK.

2. `typeorm-vault` - Typescript library with helper functions to simplify the integration between TypeORM and Vault.
   
3. `demo-app` - NestJS/TypeORM/Mongo project that shows how `typeorm-vault` can be integrated in order to protect certain entity properties. It consists of two modules:
    * [users](/demo-app/src/users/) - A module without any Piiano Vault interaction.
    * [users-protected](/demo-app/src/users-protected/) - The same API, with one property protected in Vault.
  
    See [demo-app](/demo-app) for more details.

    :construction: This project is work in progress 


## Read more

* [How to integrate a NestJS/TypeORM project to use Vault](docs/integrate-with-vault.md)