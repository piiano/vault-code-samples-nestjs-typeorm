const PiianoVaultRestApi = require("./generated_javascript/dist");

const defaultClient = PiianoVaultRestApi.ApiClient.instance;

// Configure Bearer (JWT) access token for authorization: bearerAuth
const bearerAuth = defaultClient.authentications["bearerAuth"];
bearerAuth.accessToken = "pvaultauth";
defaultClient.basePath = "localhost:8123";

const collectionApi = new PiianoVaultRestApi.CollectionsApi();
const objectApi = new PiianoVaultRestApi.ObjectsApi();
const tokenApi = new PiianoVaultRestApi.TokensApi();

async function callAPI(func) {
  return new Promise((resolve, reject) => {
    function callback(error, data, response) {
      if (error) {
        reject(error.response.text);
      } else {
        //console.log('API called successfully. Returned data: ' + data);
        if ("application/pvschema" == response.headers["content-type"]) {
          data = response.body.toString();
        }
        resolve(data);
      }
    }

    func(callback);
  });
}

async function getAllCollections(reason = "AppFunctionality", format = "") {
  return callAPI(
    collectionApi.getAllCollections.bind(collectionApi, reason, { format })
  );
}

async function addCollection(
  name,
  type,
  props,
  reason = "AppFunctionality",
  format = ""
) {
  const addCollectionRequest = new PiianoVaultRestApi.ModelsCollection(
    name,
    type
  ); // {AddCollectionRequest} Details of the collection including its properties.
  addCollectionRequest.properties = props;

  return callAPI(
    collectionApi.addCollection.bind(
      collectionApi,
      reason,
      addCollectionRequest,
      { format }
    )
  );
}

async function addObject(collection, body, reason = "AppFunctionality") {
  return callAPI(
    objectApi.addObject.bind(objectApi, collection, reason, body, {})
  );
}

async function tokenize(
  collection,
  objectIds,
  props,
  type,
  reversible = false,
  reason = "AppFunctionality"
) {
  const req = new PiianoVaultRestApi.ModelsTokenizeRequest(
    objectIds,
    props,
    type
  );
  req.reversible = reversible;

  return callAPI(tokenApi.tokenize.bind(tokenApi, collection, reason, req, {}));
}

async function detokenize(collection, tokenId, reason = "AppFunctionality") {
  return callAPI(
    tokenApi.detokenize.bind(tokenApi, collection, reason, {
      tokenId,
    })
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  reason = "AppFunctionality";

  // Create new persons collection.
  const props = [
    new PiianoVaultRestApi.ModelsProperty(false, "email", "EMAIL"),
    new PiianoVaultRestApi.ModelsProperty(false, "country", "STRING"),
  ];
  props[0].is_encrypted = true; // email is encrypted.

  // await addCollection(
  //   "persons",
  //   "PERSONS",
  //   props,
  //   reason,
  //   (format = "pvschema")
  // );

  // console.log(JSON.stringify(await getAllCollections()));

  const obj = await addObject("persons", {
    email: "aaa@gmail.com",
    country: "GN",
  });

  const token = await tokenize(
    "persons",
    [obj._id],
    ["email"],
    "VALUE",
    (reversible = true)
  );
  console.log("Token", token);

  const res2 = await detokenize("persons", [token[0].token_id]);
  console.log("Detokenized", res2);
}

main();
