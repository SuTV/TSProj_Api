// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.courses.findById() instead.
        "prototype$__findById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/courses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.courses.destroyById() instead.
        "prototype$__destroyById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/courses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.courses.updateById() instead.
        "prototype$__updateById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/courses/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for examResults.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for examResults
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__examResults": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/examResults/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for examResults.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for examResults
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__examResults": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/examResults/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for examResults.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for examResults
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__examResults": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/examResults/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.feedbacks.findById() instead.
        "prototype$__findById__feedbacks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/feedbacks/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.feedbacks.destroyById() instead.
        "prototype$__destroyById__feedbacks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/feedbacks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.feedbacks.updateById() instead.
        "prototype$__updateById__feedbacks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/feedbacks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.reports.findById() instead.
        "prototype$__findById__reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reports/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.reports.destroyById() instead.
        "prototype$__destroyById__reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.reports.updateById() instead.
        "prototype$__updateById__reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.reactions.findById() instead.
        "prototype$__findById__reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reactions/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.reactions.destroyById() instead.
        "prototype$__destroyById__reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reactions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.reactions.updateById() instead.
        "prototype$__updateById__reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reactions/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use User.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/users/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use User.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/users/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use User.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/users/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use User.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/users/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use User.courses() instead.
        "prototype$__get__courses": {
          isArray: true,
          url: urlBase + "/users/:id/courses",
          method: "GET"
        },

        // INTERNAL. Use User.courses.create() instead.
        "prototype$__create__courses": {
          url: urlBase + "/users/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use User.courses.destroyAll() instead.
        "prototype$__delete__courses": {
          url: urlBase + "/users/:id/courses",
          method: "DELETE"
        },

        // INTERNAL. Use User.courses.count() instead.
        "prototype$__count__courses": {
          url: urlBase + "/users/:id/courses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries examResults of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__examResults": {
          isArray: true,
          url: urlBase + "/users/:id/examResults",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in examResults of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__examResults": {
          url: urlBase + "/users/:id/examResults",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all examResults of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__examResults": {
          url: urlBase + "/users/:id/examResults",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__examResults
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts examResults of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__examResults": {
          url: urlBase + "/users/:id/examResults/count",
          method: "GET"
        },

        // INTERNAL. Use User.feedbacks() instead.
        "prototype$__get__feedbacks": {
          isArray: true,
          url: urlBase + "/users/:id/feedbacks",
          method: "GET"
        },

        // INTERNAL. Use User.feedbacks.create() instead.
        "prototype$__create__feedbacks": {
          url: urlBase + "/users/:id/feedbacks",
          method: "POST"
        },

        // INTERNAL. Use User.feedbacks.destroyAll() instead.
        "prototype$__delete__feedbacks": {
          url: urlBase + "/users/:id/feedbacks",
          method: "DELETE"
        },

        // INTERNAL. Use User.feedbacks.count() instead.
        "prototype$__count__feedbacks": {
          url: urlBase + "/users/:id/feedbacks/count",
          method: "GET"
        },

        // INTERNAL. Use User.reports() instead.
        "prototype$__get__reports": {
          isArray: true,
          url: urlBase + "/users/:id/reports",
          method: "GET"
        },

        // INTERNAL. Use User.reports.create() instead.
        "prototype$__create__reports": {
          url: urlBase + "/users/:id/reports",
          method: "POST"
        },

        // INTERNAL. Use User.reports.destroyAll() instead.
        "prototype$__delete__reports": {
          url: urlBase + "/users/:id/reports",
          method: "DELETE"
        },

        // INTERNAL. Use User.reports.count() instead.
        "prototype$__count__reports": {
          url: urlBase + "/users/:id/reports/count",
          method: "GET"
        },

        // INTERNAL. Use User.reactions() instead.
        "prototype$__get__reactions": {
          isArray: true,
          url: urlBase + "/users/:id/reactions",
          method: "GET"
        },

        // INTERNAL. Use User.reactions.create() instead.
        "prototype$__create__reactions": {
          url: urlBase + "/users/:id/reactions",
          method: "POST"
        },

        // INTERNAL. Use User.reactions.destroyAll() instead.
        "prototype$__delete__reactions": {
          url: urlBase + "/users/:id/reactions",
          method: "DELETE"
        },

        // INTERNAL. Use User.reactions.count() instead.
        "prototype$__count__reactions": {
          url: urlBase + "/users/:id/reactions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#requestNewPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Request new password for user who received password reset email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object}` - New password info.
         *
         *  - `access_token` – `{string}` - Received accessToken.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "requestNewPassword": {
          url: urlBase + "/users/requestNewPassword",
          method: "POST"
        },

        // INTERNAL. Use Category.user() instead.
        "::get::category::user": {
          url: urlBase + "/categories/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Course.user() instead.
        "::get::course::user": {
          url: urlBase + "/courses/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comment.user() instead.
        "::get::comment::user": {
          url: urlBase + "/comments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Feedback.user() instead.
        "::get::feedback::user": {
          url: urlBase + "/feedbacks/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Feedback.admin() instead.
        "::get::feedback::admin": {
          url: urlBase + "/feedbacks/:id/admin",
          method: "GET"
        },

        // INTERNAL. Use Report.user() instead.
        "::get::report::user": {
          url: urlBase + "/reports/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Reaction.user() instead.
        "::get::reaction::user": {
          url: urlBase + "/reactions/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.categories
     * @header lbServices.User.categories
     * @object
     * @description
     *
     * The object `User.categories` groups methods
     * manipulating `Category` instances related to `User`.
     *
     * Call {@link lbServices.User#categories User.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#categories
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries categories of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#count
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Counts categories of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#create
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#createMany
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#destroyAll
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#destroyById
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#findById
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::user::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.categories#updateById
         * @methodOf lbServices.User.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::user::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.courses
     * @header lbServices.User.courses
     * @object
     * @description
     *
     * The object `User.courses` groups methods
     * manipulating `Course` instances related to `User`.
     *
     * Call {@link lbServices.User#courses User.courses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#courses
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries courses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#count
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Counts courses of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.courses.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#create
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Creates a new instance in courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#createMany
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Creates a new instance in courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#destroyAll
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Deletes all courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.courses.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#destroyById
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Delete a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.courses.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#findById
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Find a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::user::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.courses#updateById
         * @methodOf lbServices.User.courses
         *
         * @description
         *
         * Update a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::user::courses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.feedbacks
     * @header lbServices.User.feedbacks
     * @object
     * @description
     *
     * The object `User.feedbacks` groups methods
     * manipulating `Feedback` instances related to `User`.
     *
     * Call {@link lbServices.User#feedbacks User.feedbacks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#feedbacks
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries feedbacks of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R.feedbacks = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::get::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#count
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Counts feedbacks of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.feedbacks.count = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::count::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#create
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Creates a new instance in feedbacks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R.feedbacks.create = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::create::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#createMany
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Creates a new instance in feedbacks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R.feedbacks.createMany = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::createMany::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#destroyAll
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Deletes all feedbacks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feedbacks.destroyAll = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::delete::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#destroyById
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Delete a related item by id for feedbacks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for feedbacks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feedbacks.destroyById = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::destroyById::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#findById
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Find a related item by id for feedbacks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for feedbacks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R.feedbacks.findById = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::findById::user::feedbacks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.feedbacks#updateById
         * @methodOf lbServices.User.feedbacks
         *
         * @description
         *
         * Update a related item by id for feedbacks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for feedbacks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R.feedbacks.updateById = function() {
          var TargetResource = $injector.get("Feedback");
          var action = TargetResource["::updateById::user::feedbacks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.reports
     * @header lbServices.User.reports
     * @object
     * @description
     *
     * The object `User.reports` groups methods
     * manipulating `Report` instances related to `User`.
     *
     * Call {@link lbServices.User#reports User.reports()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#reports
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries reports of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::get::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#count
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Counts reports of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reports.count = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::count::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#create
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Creates a new instance in reports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.create = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::create::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#createMany
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Creates a new instance in reports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.createMany = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::createMany::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#destroyAll
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Deletes all reports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reports.destroyAll = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::delete::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#destroyById
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Delete a related item by id for reports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reports.destroyById = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::destroyById::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#findById
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Find a related item by id for reports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.findById = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::findById::user::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reports#updateById
         * @methodOf lbServices.User.reports
         *
         * @description
         *
         * Update a related item by id for reports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reports
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.updateById = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::updateById::user::reports"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.reactions
     * @header lbServices.User.reactions
     * @object
     * @description
     *
     * The object `User.reactions` groups methods
     * manipulating `Reaction` instances related to `User`.
     *
     * Call {@link lbServices.User#reactions User.reactions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#reactions
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries reactions of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::get::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#count
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Counts reactions of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reactions.count = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::count::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#create
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Creates a new instance in reactions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.create = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::create::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#createMany
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Creates a new instance in reactions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.createMany = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::createMany::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#destroyAll
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Deletes all reactions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reactions.destroyAll = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::delete::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#destroyById
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Delete a related item by id for reactions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reactions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reactions.destroyById = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::destroyById::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#findById
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Find a related item by id for reactions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reactions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.findById = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::findById::user::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.reactions#updateById
         * @methodOf lbServices.User.reactions
         *
         * @description
         *
         * Update a related item by id for reactions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for reactions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.updateById = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::updateById::user::reactions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/categories/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Category.courses.findById() instead.
        "prototype$__findById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/courses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.courses.destroyById() instead.
        "prototype$__destroyById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/courses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.courses.updateById() instead.
        "prototype$__updateById__courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/courses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.courses() instead.
        "prototype$__get__courses": {
          isArray: true,
          url: urlBase + "/categories/:id/courses",
          method: "GET"
        },

        // INTERNAL. Use Category.courses.create() instead.
        "prototype$__create__courses": {
          url: urlBase + "/categories/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use Category.courses.destroyAll() instead.
        "prototype$__delete__courses": {
          url: urlBase + "/categories/:id/courses",
          method: "DELETE"
        },

        // INTERNAL. Use Category.courses.count() instead.
        "prototype$__count__courses": {
          url: urlBase + "/categories/:id/courses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/categories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createChangeStream
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/categories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.categories.findById() instead.
        "::findById::user::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.categories.destroyById() instead.
        "::destroyById::user::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.categories.updateById() instead.
        "::updateById::user::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.categories() instead.
        "::get::user::categories": {
          isArray: true,
          url: urlBase + "/users/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use User.categories.create() instead.
        "::create::user::categories": {
          url: urlBase + "/users/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use User.categories.createMany() instead.
        "::createMany::user::categories": {
          isArray: true,
          url: urlBase + "/users/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use User.categories.destroyAll() instead.
        "::delete::user::categories": {
          url: urlBase + "/users/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use User.categories.count() instead.
        "::count::user::categories": {
          url: urlBase + "/users/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Course.category() instead.
        "::get::course::category": {
          url: urlBase + "/courses/:id/category",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";


        /**
         * @ngdoc method
         * @name lbServices.Category#user
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::category::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.courses
     * @header lbServices.Category.courses
     * @object
     * @description
     *
     * The object `Category.courses` groups methods
     * manipulating `Course` instances related to `Category`.
     *
     * Call {@link lbServices.Category#courses Category.courses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#courses
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries courses of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#count
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Counts courses of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.courses.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#create
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Creates a new instance in courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#createMany
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Creates a new instance in courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#destroyAll
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Deletes all courses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.courses.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#destroyById
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Delete a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.courses.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#findById
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Find a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::category::courses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.courses#updateById
         * @methodOf lbServices.Category.courses
         *
         * @description
         *
         * Update a related item by id for courses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.courses.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::category::courses"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Course
 * @header lbServices.Course
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Course` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Course",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/courses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Course.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/courses/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Course.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/courses/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Course.plans.findById() instead.
        "prototype$__findById__plans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/plans/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.plans.destroyById() instead.
        "prototype$__destroyById__plans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/plans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.plans.updateById() instead.
        "prototype$__updateById__plans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/plans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.streamlines.findById() instead.
        "prototype$__findById__streamlines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/streamlines/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.streamlines.destroyById() instead.
        "prototype$__destroyById__streamlines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/streamlines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.streamlines.updateById() instead.
        "prototype$__updateById__streamlines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/streamlines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.exams.findById() instead.
        "prototype$__findById__exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/exams/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.exams.destroyById() instead.
        "prototype$__destroyById__exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/exams/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.exams.updateById() instead.
        "prototype$__updateById__exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/exams/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.attachments.findById() instead.
        "prototype$__findById__attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/attachments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.attachments.destroyById() instead.
        "prototype$__destroyById__attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/attachments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.attachments.updateById() instead.
        "prototype$__updateById__attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/attachments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.reports.findById() instead.
        "prototype$__findById__reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reports/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.reports.destroyById() instead.
        "prototype$__destroyById__reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reports.updateById() instead.
        "prototype$__updateById__reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.reactions.findById() instead.
        "prototype$__findById__reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reactions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.reactions.destroyById() instead.
        "prototype$__destroyById__reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reactions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reactions.updateById() instead.
        "prototype$__updateById__reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reactions/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__findById__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find a related item by id for courseTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courseTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__findById__courseTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/courseTags/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__destroyById__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a related item by id for courseTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courseTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__courseTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/courseTags/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__updateById__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update a related item by id for courseTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courseTags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__updateById__courseTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/courseTags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.plans() instead.
        "prototype$__get__plans": {
          isArray: true,
          url: urlBase + "/courses/:id/plans",
          method: "GET"
        },

        // INTERNAL. Use Course.plans.create() instead.
        "prototype$__create__plans": {
          url: urlBase + "/courses/:id/plans",
          method: "POST"
        },

        // INTERNAL. Use Course.plans.destroyAll() instead.
        "prototype$__delete__plans": {
          url: urlBase + "/courses/:id/plans",
          method: "DELETE"
        },

        // INTERNAL. Use Course.plans.count() instead.
        "prototype$__count__plans": {
          url: urlBase + "/courses/:id/plans/count",
          method: "GET"
        },

        // INTERNAL. Use Course.streamlines() instead.
        "prototype$__get__streamlines": {
          isArray: true,
          url: urlBase + "/courses/:id/streamlines",
          method: "GET"
        },

        // INTERNAL. Use Course.streamlines.create() instead.
        "prototype$__create__streamlines": {
          url: urlBase + "/courses/:id/streamlines",
          method: "POST"
        },

        // INTERNAL. Use Course.streamlines.destroyAll() instead.
        "prototype$__delete__streamlines": {
          url: urlBase + "/courses/:id/streamlines",
          method: "DELETE"
        },

        // INTERNAL. Use Course.streamlines.count() instead.
        "prototype$__count__streamlines": {
          url: urlBase + "/courses/:id/streamlines/count",
          method: "GET"
        },

        // INTERNAL. Use Course.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/courses/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Course.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/courses/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Course.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/courses/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Course.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/courses/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Course.exams() instead.
        "prototype$__get__exams": {
          isArray: true,
          url: urlBase + "/courses/:id/exams",
          method: "GET"
        },

        // INTERNAL. Use Course.exams.create() instead.
        "prototype$__create__exams": {
          url: urlBase + "/courses/:id/exams",
          method: "POST"
        },

        // INTERNAL. Use Course.exams.destroyAll() instead.
        "prototype$__delete__exams": {
          url: urlBase + "/courses/:id/exams",
          method: "DELETE"
        },

        // INTERNAL. Use Course.exams.count() instead.
        "prototype$__count__exams": {
          url: urlBase + "/courses/:id/exams/count",
          method: "GET"
        },

        // INTERNAL. Use Course.attachments() instead.
        "prototype$__get__attachments": {
          isArray: true,
          url: urlBase + "/courses/:id/attachments",
          method: "GET"
        },

        // INTERNAL. Use Course.attachments.create() instead.
        "prototype$__create__attachments": {
          url: urlBase + "/courses/:id/attachments",
          method: "POST"
        },

        // INTERNAL. Use Course.attachments.destroyAll() instead.
        "prototype$__delete__attachments": {
          url: urlBase + "/courses/:id/attachments",
          method: "DELETE"
        },

        // INTERNAL. Use Course.attachments.count() instead.
        "prototype$__count__attachments": {
          url: urlBase + "/courses/:id/attachments/count",
          method: "GET"
        },

        // INTERNAL. Use Course.reports() instead.
        "prototype$__get__reports": {
          isArray: true,
          url: urlBase + "/courses/:id/reports",
          method: "GET"
        },

        // INTERNAL. Use Course.reports.create() instead.
        "prototype$__create__reports": {
          url: urlBase + "/courses/:id/reports",
          method: "POST"
        },

        // INTERNAL. Use Course.reports.destroyAll() instead.
        "prototype$__delete__reports": {
          url: urlBase + "/courses/:id/reports",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reports.count() instead.
        "prototype$__count__reports": {
          url: urlBase + "/courses/:id/reports/count",
          method: "GET"
        },

        // INTERNAL. Use Course.reactions() instead.
        "prototype$__get__reactions": {
          isArray: true,
          url: urlBase + "/courses/:id/reactions",
          method: "GET"
        },

        // INTERNAL. Use Course.reactions.create() instead.
        "prototype$__create__reactions": {
          url: urlBase + "/courses/:id/reactions",
          method: "POST"
        },

        // INTERNAL. Use Course.reactions.destroyAll() instead.
        "prototype$__delete__reactions": {
          url: urlBase + "/courses/:id/reactions",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reactions.count() instead.
        "prototype$__count__reactions": {
          url: urlBase + "/courses/:id/reactions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__get__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries courseTags of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__get__courseTags": {
          isArray: true,
          url: urlBase + "/courses/:id/courseTags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__create__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Creates a new instance in courseTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$__create__courseTags": {
          url: urlBase + "/courses/:id/courseTags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__delete__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Deletes all courseTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__courseTags": {
          url: urlBase + "/courses/:id/courseTags",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$__count__courseTags
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Counts courseTags of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__courseTags": {
          url: urlBase + "/courses/:id/courseTags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#create
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#createMany
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#upsert
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/courses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#exists
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/courses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#findById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/courses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#find
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/courses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#findOne
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/courses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#updateAll
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/courses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#deleteById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/courses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#count
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/courses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$updateAttributes
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/courses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#createChangeStream
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/courses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.courses.findById() instead.
        "::findById::user::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/courses/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.courses.destroyById() instead.
        "::destroyById::user::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/courses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.courses.updateById() instead.
        "::updateById::user::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/courses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.courses() instead.
        "::get::user::courses": {
          isArray: true,
          url: urlBase + "/users/:id/courses",
          method: "GET"
        },

        // INTERNAL. Use User.courses.create() instead.
        "::create::user::courses": {
          url: urlBase + "/users/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use User.courses.createMany() instead.
        "::createMany::user::courses": {
          isArray: true,
          url: urlBase + "/users/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use User.courses.destroyAll() instead.
        "::delete::user::courses": {
          url: urlBase + "/users/:id/courses",
          method: "DELETE"
        },

        // INTERNAL. Use User.courses.count() instead.
        "::count::user::courses": {
          url: urlBase + "/users/:id/courses/count",
          method: "GET"
        },

        // INTERNAL. Use Category.courses.findById() instead.
        "::findById::category::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/courses/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.courses.destroyById() instead.
        "::destroyById::category::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/courses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.courses.updateById() instead.
        "::updateById::category::courses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/courses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.courses() instead.
        "::get::category::courses": {
          isArray: true,
          url: urlBase + "/categories/:id/courses",
          method: "GET"
        },

        // INTERNAL. Use Category.courses.create() instead.
        "::create::category::courses": {
          url: urlBase + "/categories/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use Category.courses.createMany() instead.
        "::createMany::category::courses": {
          isArray: true,
          url: urlBase + "/categories/:id/courses",
          method: "POST"
        },

        // INTERNAL. Use Category.courses.destroyAll() instead.
        "::delete::category::courses": {
          url: urlBase + "/categories/:id/courses",
          method: "DELETE"
        },

        // INTERNAL. Use Category.courses.count() instead.
        "::count::category::courses": {
          url: urlBase + "/categories/:id/courses/count",
          method: "GET"
        },

        // INTERNAL. Use Plan.course() instead.
        "::get::plan::course": {
          url: urlBase + "/plans/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Streamline.course() instead.
        "::get::streamline::course": {
          url: urlBase + "/streamlines/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Comment.course() instead.
        "::get::comment::course": {
          url: urlBase + "/comments/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Exam.course() instead.
        "::get::exam::course": {
          url: urlBase + "/exams/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Attachment.course() instead.
        "::get::attachment::course": {
          url: urlBase + "/attachments/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Report.course() instead.
        "::get::report::course": {
          url: urlBase + "/reports/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Reaction.course() instead.
        "::get::reaction::course": {
          url: urlBase + "/reactions/:id/course",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Course#updateOrCreate
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Course#update
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Course#destroyById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Course#removeById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Course#modelName
    * @propertyOf lbServices.Course
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Course`.
    */
    R.modelName = "Course";


        /**
         * @ngdoc method
         * @name lbServices.Course#user
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::course::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course#category
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Fetches belongsTo relation category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::course::category"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.plans
     * @header lbServices.Course.plans
     * @object
     * @description
     *
     * The object `Course.plans` groups methods
     * manipulating `Plan` instances related to `Course`.
     *
     * Call {@link lbServices.Course#plans Course.plans()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#plans
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries plans of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plans = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::get::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#count
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Counts plans of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.plans.count = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::count::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#create
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Creates a new instance in plans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plans.create = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::create::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#createMany
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Creates a new instance in plans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plans.createMany = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::createMany::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#destroyAll
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Deletes all plans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.plans.destroyAll = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::delete::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#destroyById
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Delete a related item by id for plans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for plans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.plans.destroyById = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::destroyById::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#findById
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Find a related item by id for plans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for plans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plans.findById = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::findById::course::plans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.plans#updateById
         * @methodOf lbServices.Course.plans
         *
         * @description
         *
         * Update a related item by id for plans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for plans
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plans.updateById = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::updateById::course::plans"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.streamlines
     * @header lbServices.Course.streamlines
     * @object
     * @description
     *
     * The object `Course.streamlines` groups methods
     * manipulating `Streamline` instances related to `Course`.
     *
     * Call {@link lbServices.Course#streamlines Course.streamlines()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#streamlines
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries streamlines of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R.streamlines = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::get::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#count
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Counts streamlines of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.streamlines.count = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::count::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#create
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Creates a new instance in streamlines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R.streamlines.create = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::create::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#createMany
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Creates a new instance in streamlines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R.streamlines.createMany = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::createMany::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#destroyAll
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Deletes all streamlines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.streamlines.destroyAll = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::delete::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#destroyById
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Delete a related item by id for streamlines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streamlines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.streamlines.destroyById = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::destroyById::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#findById
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Find a related item by id for streamlines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streamlines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R.streamlines.findById = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::findById::course::streamlines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.streamlines#updateById
         * @methodOf lbServices.Course.streamlines
         *
         * @description
         *
         * Update a related item by id for streamlines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for streamlines
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R.streamlines.updateById = function() {
          var TargetResource = $injector.get("Streamline");
          var action = TargetResource["::updateById::course::streamlines"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.comments
     * @header lbServices.Course.comments
     * @object
     * @description
     *
     * The object `Course.comments` groups methods
     * manipulating `Comment` instances related to `Course`.
     *
     * Call {@link lbServices.Course#comments Course.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#comments
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries comments of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#count
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Counts comments of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#create
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#createMany
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#destroyAll
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#destroyById
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#findById
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::course::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.comments#updateById
         * @methodOf lbServices.Course.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::course::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.exams
     * @header lbServices.Course.exams
     * @object
     * @description
     *
     * The object `Course.exams` groups methods
     * manipulating `Exam` instances related to `Course`.
     *
     * Call {@link lbServices.Course#exams Course.exams()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#exams
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries exams of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::get::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#count
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Counts exams of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.exams.count = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::count::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#create
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Creates a new instance in exams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.create = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::create::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#createMany
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Creates a new instance in exams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.createMany = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::createMany::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#destroyAll
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Deletes all exams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.exams.destroyAll = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::delete::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#destroyById
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Delete a related item by id for exams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for exams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.exams.destroyById = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::destroyById::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#findById
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Find a related item by id for exams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for exams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.findById = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::findById::course::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.exams#updateById
         * @methodOf lbServices.Course.exams
         *
         * @description
         *
         * Update a related item by id for exams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for exams
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.updateById = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::updateById::course::exams"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.attachments
     * @header lbServices.Course.attachments
     * @object
     * @description
     *
     * The object `Course.attachments` groups methods
     * manipulating `Attachment` instances related to `Course`.
     *
     * Call {@link lbServices.Course#attachments Course.attachments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#attachments
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries attachments of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::get::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#count
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Counts attachments of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.attachments.count = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::count::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#create
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Creates a new instance in attachments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.create = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::create::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#createMany
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Creates a new instance in attachments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.createMany = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::createMany::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#destroyAll
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Deletes all attachments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attachments.destroyAll = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::delete::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#destroyById
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Delete a related item by id for attachments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attachments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attachments.destroyById = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::destroyById::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#findById
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Find a related item by id for attachments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attachments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.findById = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::findById::course::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.attachments#updateById
         * @methodOf lbServices.Course.attachments
         *
         * @description
         *
         * Update a related item by id for attachments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attachments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.updateById = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::updateById::course::attachments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.reports
     * @header lbServices.Course.reports
     * @object
     * @description
     *
     * The object `Course.reports` groups methods
     * manipulating `Report` instances related to `Course`.
     *
     * Call {@link lbServices.Course#reports Course.reports()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#reports
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries reports of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::get::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#count
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Counts reports of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reports.count = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::count::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#create
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Creates a new instance in reports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.create = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::create::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#createMany
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Creates a new instance in reports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.createMany = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::createMany::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#destroyAll
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Deletes all reports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reports.destroyAll = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::delete::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#destroyById
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Delete a related item by id for reports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reports.destroyById = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::destroyById::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#findById
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Find a related item by id for reports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.findById = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::findById::course::reports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reports#updateById
         * @methodOf lbServices.Course.reports
         *
         * @description
         *
         * Update a related item by id for reports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reports
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R.reports.updateById = function() {
          var TargetResource = $injector.get("Report");
          var action = TargetResource["::updateById::course::reports"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.reactions
     * @header lbServices.Course.reactions
     * @object
     * @description
     *
     * The object `Course.reactions` groups methods
     * manipulating `Reaction` instances related to `Course`.
     *
     * Call {@link lbServices.Course#reactions Course.reactions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#reactions
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries reactions of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::get::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#count
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Counts reactions of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reactions.count = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::count::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#create
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Creates a new instance in reactions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.create = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::create::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#createMany
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Creates a new instance in reactions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.createMany = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::createMany::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#destroyAll
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Deletes all reactions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reactions.destroyAll = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::delete::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#destroyById
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Delete a related item by id for reactions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reactions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reactions.destroyById = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::destroyById::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#findById
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Find a related item by id for reactions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reactions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.findById = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::findById::course::reactions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.reactions#updateById
         * @methodOf lbServices.Course.reactions
         *
         * @description
         *
         * Update a related item by id for reactions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reactions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R.reactions.updateById = function() {
          var TargetResource = $injector.get("Reaction");
          var action = TargetResource["::updateById::course::reactions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Plan
 * @header lbServices.Plan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Plan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Plan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/plans/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Plan.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/plans/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Plan.lectures.findById() instead.
        "prototype$__findById__lectures": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/plans/:id/lectures/:fk",
          method: "GET"
        },

        // INTERNAL. Use Plan.lectures.destroyById() instead.
        "prototype$__destroyById__lectures": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/plans/:id/lectures/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.lectures.updateById() instead.
        "prototype$__updateById__lectures": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/plans/:id/lectures/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Plan.lectures() instead.
        "prototype$__get__lectures": {
          isArray: true,
          url: urlBase + "/plans/:id/lectures",
          method: "GET"
        },

        // INTERNAL. Use Plan.lectures.create() instead.
        "prototype$__create__lectures": {
          url: urlBase + "/plans/:id/lectures",
          method: "POST"
        },

        // INTERNAL. Use Plan.lectures.destroyAll() instead.
        "prototype$__delete__lectures": {
          url: urlBase + "/plans/:id/lectures",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.lectures.count() instead.
        "prototype$__count__lectures": {
          url: urlBase + "/plans/:id/lectures/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#exists
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/plans/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#findById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/plans/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#findOne
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/plans/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#deleteById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/plans/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#prototype$updateAttributes
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/plans/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#createChangeStream
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/plans/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Course.plans.findById() instead.
        "::findById::course::plans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/plans/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.plans.destroyById() instead.
        "::destroyById::course::plans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/plans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.plans.updateById() instead.
        "::updateById::course::plans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/plans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.plans() instead.
        "::get::course::plans": {
          isArray: true,
          url: urlBase + "/courses/:id/plans",
          method: "GET"
        },

        // INTERNAL. Use Course.plans.create() instead.
        "::create::course::plans": {
          url: urlBase + "/courses/:id/plans",
          method: "POST"
        },

        // INTERNAL. Use Course.plans.createMany() instead.
        "::createMany::course::plans": {
          isArray: true,
          url: urlBase + "/courses/:id/plans",
          method: "POST"
        },

        // INTERNAL. Use Course.plans.destroyAll() instead.
        "::delete::course::plans": {
          url: urlBase + "/courses/:id/plans",
          method: "DELETE"
        },

        // INTERNAL. Use Course.plans.count() instead.
        "::count::course::plans": {
          url: urlBase + "/courses/:id/plans/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.plan() instead.
        "::get::lecture::plan": {
          url: urlBase + "/lectures/:id/plan",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Plan#destroyById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Plan#removeById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Plan#modelName
    * @propertyOf lbServices.Plan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Plan`.
    */
    R.modelName = "Plan";


        /**
         * @ngdoc method
         * @name lbServices.Plan#course
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::plan::course"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Plan.lectures
     * @header lbServices.Plan.lectures
     * @object
     * @description
     *
     * The object `Plan.lectures` groups methods
     * manipulating `Lecture` instances related to `Plan`.
     *
     * Call {@link lbServices.Plan#lectures Plan.lectures()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Plan#lectures
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Queries lectures of plan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lectures = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::get::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#count
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Counts lectures of plan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lectures.count = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::count::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#create
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Creates a new instance in lectures of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lectures.create = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::create::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#createMany
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Creates a new instance in lectures of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lectures.createMany = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::createMany::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#destroyAll
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Deletes all lectures of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectures.destroyAll = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::delete::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#destroyById
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Delete a related item by id for lectures.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lectures
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lectures.destroyById = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::destroyById::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#findById
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Find a related item by id for lectures.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lectures
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lectures.findById = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::findById::plan::lectures"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.lectures#updateById
         * @methodOf lbServices.Plan.lectures
         *
         * @description
         *
         * Update a related item by id for lectures.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lectures
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lectures.updateById = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::updateById::plan::lectures"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Streamline
 * @header lbServices.Streamline
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Streamline` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Streamline",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/streamlines/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Streamline.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/streamlines/:id/course",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#exists
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/streamlines/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#findById
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/streamlines/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#find
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/streamlines",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#findOne
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/streamlines/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#deleteById
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/streamlines/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#prototype$updateAttributes
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/streamlines/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Streamline#createChangeStream
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/streamlines/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Course.streamlines.findById() instead.
        "::findById::course::streamlines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/streamlines/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.streamlines.destroyById() instead.
        "::destroyById::course::streamlines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/streamlines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.streamlines.updateById() instead.
        "::updateById::course::streamlines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/streamlines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.streamlines() instead.
        "::get::course::streamlines": {
          isArray: true,
          url: urlBase + "/courses/:id/streamlines",
          method: "GET"
        },

        // INTERNAL. Use Course.streamlines.create() instead.
        "::create::course::streamlines": {
          url: urlBase + "/courses/:id/streamlines",
          method: "POST"
        },

        // INTERNAL. Use Course.streamlines.createMany() instead.
        "::createMany::course::streamlines": {
          isArray: true,
          url: urlBase + "/courses/:id/streamlines",
          method: "POST"
        },

        // INTERNAL. Use Course.streamlines.destroyAll() instead.
        "::delete::course::streamlines": {
          url: urlBase + "/courses/:id/streamlines",
          method: "DELETE"
        },

        // INTERNAL. Use Course.streamlines.count() instead.
        "::count::course::streamlines": {
          url: urlBase + "/courses/:id/streamlines/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Streamline#destroyById
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Streamline#removeById
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Streamline` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Streamline#modelName
    * @propertyOf lbServices.Streamline
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Streamline`.
    */
    R.modelName = "Streamline";


        /**
         * @ngdoc method
         * @name lbServices.Streamline#course
         * @methodOf lbServices.Streamline
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::streamline::course"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Lecture
 * @header lbServices.Lecture
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Lecture` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Lecture",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/lectures/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Lecture.plan() instead.
        "prototype$__get__plan": {
          url: urlBase + "/lectures/:id/plan",
          method: "GET"
        },

        // INTERNAL. Use Lecture.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.embeddings.findById() instead.
        "prototype$__findById__embeddings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/embeddings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.embeddings.destroyById() instead.
        "prototype$__destroyById__embeddings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/embeddings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.embeddings.updateById() instead.
        "prototype$__updateById__embeddings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/embeddings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.exams.findById() instead.
        "prototype$__findById__exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/exams/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.exams.destroyById() instead.
        "prototype$__destroyById__exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/exams/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.exams.updateById() instead.
        "prototype$__updateById__exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/exams/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.attachments.findById() instead.
        "prototype$__findById__attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/attachments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.attachments.destroyById() instead.
        "prototype$__destroyById__attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/attachments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.attachments.updateById() instead.
        "prototype$__updateById__attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/attachments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/lectures/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Lecture.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/lectures/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Lecture.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/lectures/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/lectures/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.embeddings() instead.
        "prototype$__get__embeddings": {
          isArray: true,
          url: urlBase + "/lectures/:id/embeddings",
          method: "GET"
        },

        // INTERNAL. Use Lecture.embeddings.create() instead.
        "prototype$__create__embeddings": {
          url: urlBase + "/lectures/:id/embeddings",
          method: "POST"
        },

        // INTERNAL. Use Lecture.embeddings.destroyAll() instead.
        "prototype$__delete__embeddings": {
          url: urlBase + "/lectures/:id/embeddings",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.embeddings.count() instead.
        "prototype$__count__embeddings": {
          url: urlBase + "/lectures/:id/embeddings/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.exams() instead.
        "prototype$__get__exams": {
          isArray: true,
          url: urlBase + "/lectures/:id/exams",
          method: "GET"
        },

        // INTERNAL. Use Lecture.exams.create() instead.
        "prototype$__create__exams": {
          url: urlBase + "/lectures/:id/exams",
          method: "POST"
        },

        // INTERNAL. Use Lecture.exams.destroyAll() instead.
        "prototype$__delete__exams": {
          url: urlBase + "/lectures/:id/exams",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.exams.count() instead.
        "prototype$__count__exams": {
          url: urlBase + "/lectures/:id/exams/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.attachments() instead.
        "prototype$__get__attachments": {
          isArray: true,
          url: urlBase + "/lectures/:id/attachments",
          method: "GET"
        },

        // INTERNAL. Use Lecture.attachments.create() instead.
        "prototype$__create__attachments": {
          url: urlBase + "/lectures/:id/attachments",
          method: "POST"
        },

        // INTERNAL. Use Lecture.attachments.destroyAll() instead.
        "prototype$__delete__attachments": {
          url: urlBase + "/lectures/:id/attachments",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.attachments.count() instead.
        "prototype$__count__attachments": {
          url: urlBase + "/lectures/:id/attachments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#exists
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/lectures/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#findById
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/lectures/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#findOne
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/lectures/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#deleteById
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/lectures/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#prototype$updateAttributes
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/lectures/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lecture#createChangeStream
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/lectures/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Plan.lectures.findById() instead.
        "::findById::plan::lectures": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/plans/:id/lectures/:fk",
          method: "GET"
        },

        // INTERNAL. Use Plan.lectures.destroyById() instead.
        "::destroyById::plan::lectures": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/plans/:id/lectures/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.lectures.updateById() instead.
        "::updateById::plan::lectures": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/plans/:id/lectures/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Plan.lectures() instead.
        "::get::plan::lectures": {
          isArray: true,
          url: urlBase + "/plans/:id/lectures",
          method: "GET"
        },

        // INTERNAL. Use Plan.lectures.create() instead.
        "::create::plan::lectures": {
          url: urlBase + "/plans/:id/lectures",
          method: "POST"
        },

        // INTERNAL. Use Plan.lectures.createMany() instead.
        "::createMany::plan::lectures": {
          isArray: true,
          url: urlBase + "/plans/:id/lectures",
          method: "POST"
        },

        // INTERNAL. Use Plan.lectures.destroyAll() instead.
        "::delete::plan::lectures": {
          url: urlBase + "/plans/:id/lectures",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.lectures.count() instead.
        "::count::plan::lectures": {
          url: urlBase + "/plans/:id/lectures/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.lecture() instead.
        "::get::comment::lecture": {
          url: urlBase + "/comments/:id/lecture",
          method: "GET"
        },

        // INTERNAL. Use Embedding.lecture() instead.
        "::get::embedding::lecture": {
          url: urlBase + "/embeddings/:id/lecture",
          method: "GET"
        },

        // INTERNAL. Use Exam.lecture() instead.
        "::get::exam::lecture": {
          url: urlBase + "/exams/:id/lecture",
          method: "GET"
        },

        // INTERNAL. Use Attachment.lecture() instead.
        "::get::attachment::lecture": {
          url: urlBase + "/attachments/:id/lecture",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Lecture#destroyById
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Lecture#removeById
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Lecture#modelName
    * @propertyOf lbServices.Lecture
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Lecture`.
    */
    R.modelName = "Lecture";


        /**
         * @ngdoc method
         * @name lbServices.Lecture#plan
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Fetches belongsTo relation plan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plan = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::get::lecture::plan"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lecture.comments
     * @header lbServices.Lecture.comments
     * @object
     * @description
     *
     * The object `Lecture.comments` groups methods
     * manipulating `Comment` instances related to `Lecture`.
     *
     * Call {@link lbServices.Lecture#comments Lecture.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lecture#comments
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Queries comments of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#count
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Counts comments of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#create
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#createMany
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#destroyAll
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#destroyById
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#findById
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::lecture::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.comments#updateById
         * @methodOf lbServices.Lecture.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::lecture::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lecture.embeddings
     * @header lbServices.Lecture.embeddings
     * @object
     * @description
     *
     * The object `Lecture.embeddings` groups methods
     * manipulating `Embedding` instances related to `Lecture`.
     *
     * Call {@link lbServices.Lecture#embeddings Lecture.embeddings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lecture#embeddings
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Queries embeddings of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R.embeddings = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::get::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#count
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Counts embeddings of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.embeddings.count = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::count::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#create
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Creates a new instance in embeddings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R.embeddings.create = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::create::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#createMany
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Creates a new instance in embeddings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R.embeddings.createMany = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::createMany::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#destroyAll
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Deletes all embeddings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.embeddings.destroyAll = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::delete::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#destroyById
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Delete a related item by id for embeddings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for embeddings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.embeddings.destroyById = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::destroyById::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#findById
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Find a related item by id for embeddings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for embeddings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R.embeddings.findById = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::findById::lecture::embeddings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.embeddings#updateById
         * @methodOf lbServices.Lecture.embeddings
         *
         * @description
         *
         * Update a related item by id for embeddings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for embeddings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R.embeddings.updateById = function() {
          var TargetResource = $injector.get("Embedding");
          var action = TargetResource["::updateById::lecture::embeddings"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lecture.exams
     * @header lbServices.Lecture.exams
     * @object
     * @description
     *
     * The object `Lecture.exams` groups methods
     * manipulating `Exam` instances related to `Lecture`.
     *
     * Call {@link lbServices.Lecture#exams Lecture.exams()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lecture#exams
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Queries exams of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::get::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#count
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Counts exams of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.exams.count = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::count::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#create
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Creates a new instance in exams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.create = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::create::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#createMany
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Creates a new instance in exams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.createMany = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::createMany::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#destroyAll
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Deletes all exams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.exams.destroyAll = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::delete::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#destroyById
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Delete a related item by id for exams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for exams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.exams.destroyById = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::destroyById::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#findById
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Find a related item by id for exams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for exams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.findById = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::findById::lecture::exams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.exams#updateById
         * @methodOf lbServices.Lecture.exams
         *
         * @description
         *
         * Update a related item by id for exams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for exams
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exams.updateById = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::updateById::lecture::exams"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lecture.attachments
     * @header lbServices.Lecture.attachments
     * @object
     * @description
     *
     * The object `Lecture.attachments` groups methods
     * manipulating `Attachment` instances related to `Lecture`.
     *
     * Call {@link lbServices.Lecture#attachments Lecture.attachments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Lecture#attachments
         * @methodOf lbServices.Lecture
         *
         * @description
         *
         * Queries attachments of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::get::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#count
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Counts attachments of lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.attachments.count = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::count::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#create
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Creates a new instance in attachments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.create = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::create::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#createMany
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Creates a new instance in attachments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.createMany = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::createMany::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#destroyAll
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Deletes all attachments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attachments.destroyAll = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::delete::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#destroyById
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Delete a related item by id for attachments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attachments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.attachments.destroyById = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::destroyById::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#findById
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Find a related item by id for attachments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attachments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.findById = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::findById::lecture::attachments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lecture.attachments#updateById
         * @methodOf lbServices.Lecture.attachments
         *
         * @description
         *
         * Update a related item by id for attachments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for attachments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R.attachments.updateById = function() {
          var TargetResource = $injector.get("Attachment");
          var action = TargetResource["::updateById::lecture::attachments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Comment
 * @header lbServices.Comment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/comments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comment.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/comments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comment.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/comments/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Comment.lecture() instead.
        "prototype$__get__lecture": {
          url: urlBase + "/comments/:id/lecture",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#exists
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/comments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#findById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/comments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#findOne
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/comments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#deleteById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/comments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#prototype$updateAttributes
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/comments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#createChangeStream
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/comments/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Course.comments.findById() instead.
        "::findById::course::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.comments.destroyById() instead.
        "::destroyById::course::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.comments.updateById() instead.
        "::updateById::course::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.comments() instead.
        "::get::course::comments": {
          isArray: true,
          url: urlBase + "/courses/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Course.comments.create() instead.
        "::create::course::comments": {
          url: urlBase + "/courses/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Course.comments.createMany() instead.
        "::createMany::course::comments": {
          isArray: true,
          url: urlBase + "/courses/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Course.comments.destroyAll() instead.
        "::delete::course::comments": {
          url: urlBase + "/courses/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Course.comments.count() instead.
        "::count::course::comments": {
          url: urlBase + "/courses/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.comments.findById() instead.
        "::findById::lecture::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.comments.destroyById() instead.
        "::destroyById::lecture::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.comments.updateById() instead.
        "::updateById::lecture::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.comments() instead.
        "::get::lecture::comments": {
          isArray: true,
          url: urlBase + "/lectures/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Lecture.comments.create() instead.
        "::create::lecture::comments": {
          url: urlBase + "/lectures/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Lecture.comments.createMany() instead.
        "::createMany::lecture::comments": {
          isArray: true,
          url: urlBase + "/lectures/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Lecture.comments.destroyAll() instead.
        "::delete::lecture::comments": {
          url: urlBase + "/lectures/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.comments.count() instead.
        "::count::lecture::comments": {
          url: urlBase + "/lectures/:id/comments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Comment#destroyById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#removeById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Comment#modelName
    * @propertyOf lbServices.Comment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comment`.
    */
    R.modelName = "Comment";


        /**
         * @ngdoc method
         * @name lbServices.Comment#user
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::comment::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment#course
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::comment::course"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment#lecture
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::get::comment::lecture"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Embedding
 * @header lbServices.Embedding
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Embedding` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Embedding",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/embeddings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Embedding.lecture() instead.
        "prototype$__get__lecture": {
          url: urlBase + "/embeddings/:id/lecture",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Embedding#exists
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/embeddings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Embedding#findById
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/embeddings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Embedding#findOne
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/embeddings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Embedding#deleteById
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/embeddings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Embedding#prototype$updateAttributes
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/embeddings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Embedding#createChangeStream
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/embeddings/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Lecture.embeddings.findById() instead.
        "::findById::lecture::embeddings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/embeddings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.embeddings.destroyById() instead.
        "::destroyById::lecture::embeddings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/embeddings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.embeddings.updateById() instead.
        "::updateById::lecture::embeddings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/embeddings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.embeddings() instead.
        "::get::lecture::embeddings": {
          isArray: true,
          url: urlBase + "/lectures/:id/embeddings",
          method: "GET"
        },

        // INTERNAL. Use Lecture.embeddings.create() instead.
        "::create::lecture::embeddings": {
          url: urlBase + "/lectures/:id/embeddings",
          method: "POST"
        },

        // INTERNAL. Use Lecture.embeddings.createMany() instead.
        "::createMany::lecture::embeddings": {
          isArray: true,
          url: urlBase + "/lectures/:id/embeddings",
          method: "POST"
        },

        // INTERNAL. Use Lecture.embeddings.destroyAll() instead.
        "::delete::lecture::embeddings": {
          url: urlBase + "/lectures/:id/embeddings",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.embeddings.count() instead.
        "::count::lecture::embeddings": {
          url: urlBase + "/lectures/:id/embeddings/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Embedding#destroyById
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Embedding#removeById
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Embedding` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Embedding#modelName
    * @propertyOf lbServices.Embedding
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Embedding`.
    */
    R.modelName = "Embedding";


        /**
         * @ngdoc method
         * @name lbServices.Embedding#lecture
         * @methodOf lbServices.Embedding
         *
         * @description
         *
         * Fetches belongsTo relation lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::get::embedding::lecture"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Exam
 * @header lbServices.Exam
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Exam` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Exam",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/exams/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Exam.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/exams/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Exam.lecture() instead.
        "prototype$__get__lecture": {
          url: urlBase + "/exams/:id/lecture",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__findById__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Find a related item by id for examResults.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for examResults
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "prototype$__findById__examResults": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/examResults/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__destroyById__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Delete a related item by id for examResults.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for examResults
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__examResults": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/examResults/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__updateById__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Update a related item by id for examResults.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for examResults
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "prototype$__updateById__examResults": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/examResults/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Exam.questions.findById() instead.
        "prototype$__findById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Exam.questions.destroyById() instead.
        "prototype$__destroyById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Exam.questions.updateById() instead.
        "prototype$__updateById__questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/questions/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__get__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Queries examResults of exam.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "prototype$__get__examResults": {
          isArray: true,
          url: urlBase + "/exams/:id/examResults",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__create__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Creates a new instance in examResults of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "prototype$__create__examResults": {
          url: urlBase + "/exams/:id/examResults",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__delete__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Deletes all examResults of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__examResults": {
          url: urlBase + "/exams/:id/examResults",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$__count__examResults
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Counts examResults of exam.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__examResults": {
          url: urlBase + "/exams/:id/examResults/count",
          method: "GET"
        },

        // INTERNAL. Use Exam.questions() instead.
        "prototype$__get__questions": {
          isArray: true,
          url: urlBase + "/exams/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Exam.questions.create() instead.
        "prototype$__create__questions": {
          url: urlBase + "/exams/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Exam.questions.destroyAll() instead.
        "prototype$__delete__questions": {
          url: urlBase + "/exams/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Exam.questions.count() instead.
        "prototype$__count__questions": {
          url: urlBase + "/exams/:id/questions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#exists
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/exams/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#findById
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/exams/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#findOne
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/exams/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#deleteById
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/exams/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#prototype$updateAttributes
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/exams/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Exam#createChangeStream
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/exams/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Course.exams.findById() instead.
        "::findById::course::exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/exams/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.exams.destroyById() instead.
        "::destroyById::course::exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/exams/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.exams.updateById() instead.
        "::updateById::course::exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/exams/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.exams() instead.
        "::get::course::exams": {
          isArray: true,
          url: urlBase + "/courses/:id/exams",
          method: "GET"
        },

        // INTERNAL. Use Course.exams.create() instead.
        "::create::course::exams": {
          url: urlBase + "/courses/:id/exams",
          method: "POST"
        },

        // INTERNAL. Use Course.exams.createMany() instead.
        "::createMany::course::exams": {
          isArray: true,
          url: urlBase + "/courses/:id/exams",
          method: "POST"
        },

        // INTERNAL. Use Course.exams.destroyAll() instead.
        "::delete::course::exams": {
          url: urlBase + "/courses/:id/exams",
          method: "DELETE"
        },

        // INTERNAL. Use Course.exams.count() instead.
        "::count::course::exams": {
          url: urlBase + "/courses/:id/exams/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.exams.findById() instead.
        "::findById::lecture::exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/exams/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.exams.destroyById() instead.
        "::destroyById::lecture::exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/exams/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.exams.updateById() instead.
        "::updateById::lecture::exams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/exams/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.exams() instead.
        "::get::lecture::exams": {
          isArray: true,
          url: urlBase + "/lectures/:id/exams",
          method: "GET"
        },

        // INTERNAL. Use Lecture.exams.create() instead.
        "::create::lecture::exams": {
          url: urlBase + "/lectures/:id/exams",
          method: "POST"
        },

        // INTERNAL. Use Lecture.exams.createMany() instead.
        "::createMany::lecture::exams": {
          isArray: true,
          url: urlBase + "/lectures/:id/exams",
          method: "POST"
        },

        // INTERNAL. Use Lecture.exams.destroyAll() instead.
        "::delete::lecture::exams": {
          url: urlBase + "/lectures/:id/exams",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.exams.count() instead.
        "::count::lecture::exams": {
          url: urlBase + "/lectures/:id/exams/count",
          method: "GET"
        },

        // INTERNAL. Use Question.exam() instead.
        "::get::question::exam": {
          url: urlBase + "/questions/:id/exam",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Exam#destroyById
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Exam#removeById
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Exam#modelName
    * @propertyOf lbServices.Exam
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Exam`.
    */
    R.modelName = "Exam";


        /**
         * @ngdoc method
         * @name lbServices.Exam#course
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::exam::course"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam#lecture
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Fetches belongsTo relation lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::get::exam::lecture"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Exam.questions
     * @header lbServices.Exam.questions
     * @object
     * @description
     *
     * The object `Exam.questions` groups methods
     * manipulating `Question` instances related to `Exam`.
     *
     * Call {@link lbServices.Exam#questions Exam.questions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Exam#questions
         * @methodOf lbServices.Exam
         *
         * @description
         *
         * Queries questions of exam.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#count
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Counts questions of exam.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#create
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#createMany
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#destroyAll
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Deletes all questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#destroyById
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Delete a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#findById
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Find a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::exam::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Exam.questions#updateById
         * @methodOf lbServices.Exam.questions
         *
         * @description
         *
         * Update a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::exam::questions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Question
 * @header lbServices.Question
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Question` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Question",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/questions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Question.exam() instead.
        "prototype$__get__exam": {
          url: urlBase + "/questions/:id/exam",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.findById() instead.
        "prototype$__findById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/questions/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.destroyById() instead.
        "prototype$__destroyById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/questions/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.updateById() instead.
        "prototype$__updateById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/questions/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers() instead.
        "prototype$__get__answers": {
          isArray: true,
          url: urlBase + "/questions/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.create() instead.
        "prototype$__create__answers": {
          url: urlBase + "/questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.destroyAll() instead.
        "prototype$__delete__answers": {
          url: urlBase + "/questions/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.count() instead.
        "prototype$__count__answers": {
          url: urlBase + "/questions/:id/answers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#exists
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/questions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#findById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/questions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#findOne
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/questions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#deleteById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/questions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#prototype$updateAttributes
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/questions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#createChangeStream
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/questions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Exam.questions.findById() instead.
        "::findById::exam::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Exam.questions.destroyById() instead.
        "::destroyById::exam::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Exam.questions.updateById() instead.
        "::updateById::exam::questions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/exams/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Exam.questions() instead.
        "::get::exam::questions": {
          isArray: true,
          url: urlBase + "/exams/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Exam.questions.create() instead.
        "::create::exam::questions": {
          url: urlBase + "/exams/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Exam.questions.createMany() instead.
        "::createMany::exam::questions": {
          isArray: true,
          url: urlBase + "/exams/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Exam.questions.destroyAll() instead.
        "::delete::exam::questions": {
          url: urlBase + "/exams/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Exam.questions.count() instead.
        "::count::exam::questions": {
          url: urlBase + "/exams/:id/questions/count",
          method: "GET"
        },

        // INTERNAL. Use Answer.question() instead.
        "::get::answer::question": {
          url: urlBase + "/answers/:id/question",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Question#destroyById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Question#removeById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Question#modelName
    * @propertyOf lbServices.Question
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Question`.
    */
    R.modelName = "Question";


        /**
         * @ngdoc method
         * @name lbServices.Question#exam
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Fetches belongsTo relation exam.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Exam` object.)
         * </em>
         */
        R.exam = function() {
          var TargetResource = $injector.get("Exam");
          var action = TargetResource["::get::question::exam"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.answers
     * @header lbServices.Question.answers
     * @object
     * @description
     *
     * The object `Question.answers` groups methods
     * manipulating `Answer` instances related to `Question`.
     *
     * Call {@link lbServices.Question#answers Question.answers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#answers
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries answers of question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#count
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Counts answers of question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answers.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#create
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#createMany
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#destroyAll
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Deletes all answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#destroyById
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Delete a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#findById
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Find a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#updateById
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Update a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::question::answers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Answer
 * @header lbServices.Answer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Answer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Answer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/answers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Answer.question() instead.
        "prototype$__get__question": {
          url: urlBase + "/answers/:id/question",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#exists
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/answers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#findById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/answers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#findOne
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/answers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#deleteById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/answers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#prototype$updateAttributes
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/answers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#createChangeStream
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/answers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.findById() instead.
        "::findById::question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/questions/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.destroyById() instead.
        "::destroyById::question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/questions/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.updateById() instead.
        "::updateById::question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/questions/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers() instead.
        "::get::question::answers": {
          isArray: true,
          url: urlBase + "/questions/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.create() instead.
        "::create::question::answers": {
          url: urlBase + "/questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.createMany() instead.
        "::createMany::question::answers": {
          isArray: true,
          url: urlBase + "/questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.destroyAll() instead.
        "::delete::question::answers": {
          url: urlBase + "/questions/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.count() instead.
        "::count::question::answers": {
          url: urlBase + "/questions/:id/answers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Answer#destroyById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Answer#removeById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Answer#modelName
    * @propertyOf lbServices.Answer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Answer`.
    */
    R.modelName = "Answer";


        /**
         * @ngdoc method
         * @name lbServices.Answer#question
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Fetches belongsTo relation question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::answer::question"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Attachment
 * @header lbServices.Attachment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Attachment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Attachment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/attachments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Attachment.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/attachments/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Attachment.lecture() instead.
        "prototype$__get__lecture": {
          url: urlBase + "/attachments/:id/lecture",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#exists
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/attachments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#findById
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/attachments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#findOne
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/attachments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#deleteById
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/attachments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#prototype$updateAttributes
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/attachments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#createChangeStream
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/attachments/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#increaseDownloadCount
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Increase download count, plus 1.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{string}` - Attachment id.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "increaseDownloadCount": {
          url: urlBase + "/attachments/:id/increaseDownloadCount",
          method: "GET"
        },

        // INTERNAL. Use Course.attachments.findById() instead.
        "::findById::course::attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/attachments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.attachments.destroyById() instead.
        "::destroyById::course::attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/attachments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.attachments.updateById() instead.
        "::updateById::course::attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/attachments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.attachments() instead.
        "::get::course::attachments": {
          isArray: true,
          url: urlBase + "/courses/:id/attachments",
          method: "GET"
        },

        // INTERNAL. Use Course.attachments.create() instead.
        "::create::course::attachments": {
          url: urlBase + "/courses/:id/attachments",
          method: "POST"
        },

        // INTERNAL. Use Course.attachments.createMany() instead.
        "::createMany::course::attachments": {
          isArray: true,
          url: urlBase + "/courses/:id/attachments",
          method: "POST"
        },

        // INTERNAL. Use Course.attachments.destroyAll() instead.
        "::delete::course::attachments": {
          url: urlBase + "/courses/:id/attachments",
          method: "DELETE"
        },

        // INTERNAL. Use Course.attachments.count() instead.
        "::count::course::attachments": {
          url: urlBase + "/courses/:id/attachments/count",
          method: "GET"
        },

        // INTERNAL. Use Lecture.attachments.findById() instead.
        "::findById::lecture::attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/attachments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lecture.attachments.destroyById() instead.
        "::destroyById::lecture::attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/attachments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.attachments.updateById() instead.
        "::updateById::lecture::attachments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/lectures/:id/attachments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lecture.attachments() instead.
        "::get::lecture::attachments": {
          isArray: true,
          url: urlBase + "/lectures/:id/attachments",
          method: "GET"
        },

        // INTERNAL. Use Lecture.attachments.create() instead.
        "::create::lecture::attachments": {
          url: urlBase + "/lectures/:id/attachments",
          method: "POST"
        },

        // INTERNAL. Use Lecture.attachments.createMany() instead.
        "::createMany::lecture::attachments": {
          isArray: true,
          url: urlBase + "/lectures/:id/attachments",
          method: "POST"
        },

        // INTERNAL. Use Lecture.attachments.destroyAll() instead.
        "::delete::lecture::attachments": {
          url: urlBase + "/lectures/:id/attachments",
          method: "DELETE"
        },

        // INTERNAL. Use Lecture.attachments.count() instead.
        "::count::lecture::attachments": {
          url: urlBase + "/lectures/:id/attachments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Attachment#destroyById
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Attachment#removeById
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Attachment#modelName
    * @propertyOf lbServices.Attachment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Attachment`.
    */
    R.modelName = "Attachment";


        /**
         * @ngdoc method
         * @name lbServices.Attachment#course
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::attachment::course"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Attachment#lecture
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * Fetches belongsTo relation lecture.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lecture` object.)
         * </em>
         */
        R.lecture = function() {
          var TargetResource = $injector.get("Lecture");
          var action = TargetResource["::get::attachment::lecture"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Feedback
 * @header lbServices.Feedback
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Feedback` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Feedback",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/feedbacks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Feedback.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/feedbacks/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Feedback.admin() instead.
        "prototype$__get__admin": {
          url: urlBase + "/feedbacks/:id/admin",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#create
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/feedbacks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#createMany
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/feedbacks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#upsert
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/feedbacks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#exists
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/feedbacks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#findById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/feedbacks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#find
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/feedbacks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#findOne
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/feedbacks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#updateAll
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/feedbacks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#deleteById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/feedbacks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#count
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/feedbacks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#prototype$updateAttributes
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/feedbacks/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#createChangeStream
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/feedbacks/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.feedbacks.findById() instead.
        "::findById::user::feedbacks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/feedbacks/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.feedbacks.destroyById() instead.
        "::destroyById::user::feedbacks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/feedbacks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.feedbacks.updateById() instead.
        "::updateById::user::feedbacks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/feedbacks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.feedbacks() instead.
        "::get::user::feedbacks": {
          isArray: true,
          url: urlBase + "/users/:id/feedbacks",
          method: "GET"
        },

        // INTERNAL. Use User.feedbacks.create() instead.
        "::create::user::feedbacks": {
          url: urlBase + "/users/:id/feedbacks",
          method: "POST"
        },

        // INTERNAL. Use User.feedbacks.createMany() instead.
        "::createMany::user::feedbacks": {
          isArray: true,
          url: urlBase + "/users/:id/feedbacks",
          method: "POST"
        },

        // INTERNAL. Use User.feedbacks.destroyAll() instead.
        "::delete::user::feedbacks": {
          url: urlBase + "/users/:id/feedbacks",
          method: "DELETE"
        },

        // INTERNAL. Use User.feedbacks.count() instead.
        "::count::user::feedbacks": {
          url: urlBase + "/users/:id/feedbacks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Feedback#updateOrCreate
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Feedback#update
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Feedback#destroyById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Feedback#removeById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Feedback#modelName
    * @propertyOf lbServices.Feedback
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Feedback`.
    */
    R.modelName = "Feedback";


        /**
         * @ngdoc method
         * @name lbServices.Feedback#user
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::feedback::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feedback#admin
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Fetches belongsTo relation admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.admin = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::feedback::admin"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Report
 * @header lbServices.Report
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Report` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Report",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/reports/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Report.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/reports/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Report.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/reports/:id/course",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#create
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/reports",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#createMany
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/reports",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#upsert
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/reports",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#exists
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/reports/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#findById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/reports/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#find
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/reports",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#findOne
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/reports/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#updateAll
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/reports/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#deleteById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/reports/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#count
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/reports/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#prototype$updateAttributes
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reports/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#createChangeStream
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/reports/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.reports.findById() instead.
        "::findById::user::reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reports/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.reports.destroyById() instead.
        "::destroyById::user::reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.reports.updateById() instead.
        "::updateById::user::reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.reports() instead.
        "::get::user::reports": {
          isArray: true,
          url: urlBase + "/users/:id/reports",
          method: "GET"
        },

        // INTERNAL. Use User.reports.create() instead.
        "::create::user::reports": {
          url: urlBase + "/users/:id/reports",
          method: "POST"
        },

        // INTERNAL. Use User.reports.createMany() instead.
        "::createMany::user::reports": {
          isArray: true,
          url: urlBase + "/users/:id/reports",
          method: "POST"
        },

        // INTERNAL. Use User.reports.destroyAll() instead.
        "::delete::user::reports": {
          url: urlBase + "/users/:id/reports",
          method: "DELETE"
        },

        // INTERNAL. Use User.reports.count() instead.
        "::count::user::reports": {
          url: urlBase + "/users/:id/reports/count",
          method: "GET"
        },

        // INTERNAL. Use Course.reports.findById() instead.
        "::findById::course::reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reports/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.reports.destroyById() instead.
        "::destroyById::course::reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reports.updateById() instead.
        "::updateById::course::reports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.reports() instead.
        "::get::course::reports": {
          isArray: true,
          url: urlBase + "/courses/:id/reports",
          method: "GET"
        },

        // INTERNAL. Use Course.reports.create() instead.
        "::create::course::reports": {
          url: urlBase + "/courses/:id/reports",
          method: "POST"
        },

        // INTERNAL. Use Course.reports.createMany() instead.
        "::createMany::course::reports": {
          isArray: true,
          url: urlBase + "/courses/:id/reports",
          method: "POST"
        },

        // INTERNAL. Use Course.reports.destroyAll() instead.
        "::delete::course::reports": {
          url: urlBase + "/courses/:id/reports",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reports.count() instead.
        "::count::course::reports": {
          url: urlBase + "/courses/:id/reports/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Report#updateOrCreate
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Report#update
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Report#destroyById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Report#removeById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Report#modelName
    * @propertyOf lbServices.Report
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Report`.
    */
    R.modelName = "Report";


        /**
         * @ngdoc method
         * @name lbServices.Report#user
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::report::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Report#course
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::report::course"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tag
 * @header lbServices.Tag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tags/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__findById__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find a related item by id for courseTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courseTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$__findById__courseTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/courseTags/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__destroyById__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a related item by id for courseTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courseTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__courseTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/courseTags/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__updateById__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update a related item by id for courseTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for courseTags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$__updateById__courseTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/courseTags/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__get__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Queries courseTags of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$__get__courseTags": {
          isArray: true,
          url: urlBase + "/tags/:id/courseTags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__create__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Creates a new instance in courseTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$__create__courseTags": {
          url: urlBase + "/tags/:id/courseTags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__delete__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Deletes all courseTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__courseTags": {
          url: urlBase + "/tags/:id/courseTags",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$__count__courseTags
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Counts courseTags of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__courseTags": {
          url: urlBase + "/tags/:id/courseTags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#create
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createMany
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#upsert
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#exists
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#find
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findOne
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#updateAll
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#deleteById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#count
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$updateAttributes
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createChangeStream
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tags/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tag#updateOrCreate
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#update
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#destroyById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#removeById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tag#modelName
    * @propertyOf lbServices.Tag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tag`.
    */
    R.modelName = "Tag";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Reaction
 * @header lbServices.Reaction
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reaction` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reaction",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/reactions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Reaction.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/reactions/:id/course",
          method: "GET"
        },

        // INTERNAL. Use Reaction.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/reactions/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reaction#exists
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/reactions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reaction#findById
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/reactions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reaction#findOne
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/reactions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reaction#deleteById
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/reactions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reaction#prototype$updateAttributes
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reactions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reaction#createChangeStream
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/reactions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.reactions.findById() instead.
        "::findById::user::reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reactions/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.reactions.destroyById() instead.
        "::destroyById::user::reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reactions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.reactions.updateById() instead.
        "::updateById::user::reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/reactions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.reactions() instead.
        "::get::user::reactions": {
          isArray: true,
          url: urlBase + "/users/:id/reactions",
          method: "GET"
        },

        // INTERNAL. Use User.reactions.create() instead.
        "::create::user::reactions": {
          url: urlBase + "/users/:id/reactions",
          method: "POST"
        },

        // INTERNAL. Use User.reactions.createMany() instead.
        "::createMany::user::reactions": {
          isArray: true,
          url: urlBase + "/users/:id/reactions",
          method: "POST"
        },

        // INTERNAL. Use User.reactions.destroyAll() instead.
        "::delete::user::reactions": {
          url: urlBase + "/users/:id/reactions",
          method: "DELETE"
        },

        // INTERNAL. Use User.reactions.count() instead.
        "::count::user::reactions": {
          url: urlBase + "/users/:id/reactions/count",
          method: "GET"
        },

        // INTERNAL. Use Course.reactions.findById() instead.
        "::findById::course::reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reactions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.reactions.destroyById() instead.
        "::destroyById::course::reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reactions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reactions.updateById() instead.
        "::updateById::course::reactions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/reactions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.reactions() instead.
        "::get::course::reactions": {
          isArray: true,
          url: urlBase + "/courses/:id/reactions",
          method: "GET"
        },

        // INTERNAL. Use Course.reactions.create() instead.
        "::create::course::reactions": {
          url: urlBase + "/courses/:id/reactions",
          method: "POST"
        },

        // INTERNAL. Use Course.reactions.createMany() instead.
        "::createMany::course::reactions": {
          isArray: true,
          url: urlBase + "/courses/:id/reactions",
          method: "POST"
        },

        // INTERNAL. Use Course.reactions.destroyAll() instead.
        "::delete::course::reactions": {
          url: urlBase + "/courses/:id/reactions",
          method: "DELETE"
        },

        // INTERNAL. Use Course.reactions.count() instead.
        "::count::course::reactions": {
          url: urlBase + "/courses/:id/reactions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Reaction#destroyById
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reaction#removeById
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reaction` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Reaction#modelName
    * @propertyOf lbServices.Reaction
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Reaction`.
    */
    R.modelName = "Reaction";


        /**
         * @ngdoc method
         * @name lbServices.Reaction#course
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::reaction::course"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reaction#user
         * @methodOf lbServices.Reaction
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::reaction::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
