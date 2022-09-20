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
    instance = new PiianoVaultRestApi.ConfigFeatures();
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

  describe('ConfigFeatures', function() {
    it('should create an instance of ConfigFeatures', function() {
      // uncomment below and update the code to test ConfigFeatures
      //var instance = new PiianoVaultRestApi.ConfigFeatures();
      //expect(instance).to.be.a(PiianoVaultRestApi.ConfigFeatures);
    });

    it('should have the property apiKeyHashing (base name: "api_key_hashing")', function() {
      // uncomment below and update the code to test the property apiKeyHashing
      //var instance = new PiianoVaultRestApi.ConfigFeatures();
      //expect(instance).to.be();
    });

    it('should have the property encryption (base name: "encryption")', function() {
      // uncomment below and update the code to test the property encryption
      //var instance = new PiianoVaultRestApi.ConfigFeatures();
      //expect(instance).to.be();
    });

    it('should have the property policyEnforcement (base name: "policy_enforcement")', function() {
      // uncomment below and update the code to test the property policyEnforcement
      //var instance = new PiianoVaultRestApi.ConfigFeatures();
      //expect(instance).to.be();
    });

  });

}));
