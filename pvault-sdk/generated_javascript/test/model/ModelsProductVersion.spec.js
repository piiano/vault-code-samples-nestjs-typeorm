/**
 * Piiano Vault REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PiianoVaultRestApi);
  }
}(this, function(expect, PiianoVaultRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PiianoVaultRestApi.ModelsProductVersion();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ModelsProductVersion', function() {
    it('should create an instance of ModelsProductVersion', function() {
      // uncomment below and update the code to test ModelsProductVersion
      //var instance = new PiianoVaultRestApi.ModelsProductVersion();
      //expect(instance).to.be.a(PiianoVaultRestApi.ModelsProductVersion);
    });

    it('should have the property dbSchemaVersion (base name: "db_schema_version")', function() {
      // uncomment below and update the code to test the property dbSchemaVersion
      //var instance = new PiianoVaultRestApi.ModelsProductVersion();
      //expect(instance).to.be();
    });

    it('should have the property vaultId (base name: "vault_id")', function() {
      // uncomment below and update the code to test the property vaultId
      //var instance = new PiianoVaultRestApi.ModelsProductVersion();
      //expect(instance).to.be();
    });

    it('should have the property vaultVersion (base name: "vault_version")', function() {
      // uncomment below and update the code to test the property vaultVersion
      //var instance = new PiianoVaultRestApi.ModelsProductVersion();
      //expect(instance).to.be();
    });

  });

}));
