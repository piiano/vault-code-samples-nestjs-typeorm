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
    instance = new PiianoVaultRestApi.ConfigService();
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

  describe('ConfigService', function() {
    it('should create an instance of ConfigService', function() {
      // uncomment below and update the code to test ConfigService
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be.a(PiianoVaultRestApi.ConfigService);
    });

    it('should have the property adminApiKey (base name: "admin_api_key")', function() {
      // uncomment below and update the code to test the property adminApiKey
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property adminMayReadData (base name: "admin_may_read_data")', function() {
      // uncomment below and update the code to test the property adminMayReadData
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property defaultPageSize (base name: "default_page_size")', function() {
      // uncomment below and update the code to test the property defaultPageSize
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property forceAccessReason (base name: "force_access_reason")', function() {
      // uncomment below and update the code to test the property forceAccessReason
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property listenAddr (base name: "listen_addr")', function() {
      // uncomment below and update the code to test the property listenAddr
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property maxPageSize (base name: "max_page_size")', function() {
      // uncomment below and update the code to test the property maxPageSize
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property timeoutSeconds (base name: "timeout_seconds")', function() {
      // uncomment below and update the code to test the property timeoutSeconds
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property cacheRefreshIntervalSeconds (base name: "cache_refresh_interval_seconds")', function() {
      // uncomment below and update the code to test the property cacheRefreshIntervalSeconds
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

    it('should have the property license (base name: "license")', function() {
      // uncomment below and update the code to test the property license
      //var instance = new PiianoVaultRestApi.ConfigService();
      //expect(instance).to.be();
    });

  });

}));