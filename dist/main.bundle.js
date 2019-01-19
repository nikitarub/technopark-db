/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum/server/controllers/ControllerUtils.js":
/*!*****************************************************!*\
  !*** ./forum/server/controllers/ControllerUtils.js ***!
  \*****************************************************/
/*! exports provided: createPostsLoop, constructPathToPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostsLoop", function() { return createPostsLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructPathToPost", function() { return constructPathToPost; });
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./forum/server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/PostModel.js */ "./forum/server/models/PostModel.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var createPostsLoop =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, reply, threadData) {
    var postsValues, forumUserPairValues, creationDate, newPosts, author, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, parentPost, postId, path, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post, pairColumns, stringPairValues, pairQuery;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postsValues = [];
            forumUserPairValues = [];
            creationDate = new Date().toUTCString();
            newPosts = request.body;

            if (newPosts.length) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", reply.status(201).send([]));

          case 6:
            author = newPosts[0].author;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = newPosts[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 51;
              break;
            }

            _post = _step.value;

            if (!_post.parent) {
              _context.next = 34;
              break;
            }

            _context.prev = 15;
            _context.next = 18;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPostByIdAndThreadId(_post.parent, threadData.id);

          case 18:
            parentPost = _context.sent;

            if (parentPost) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", reply.status(409).send({
              message: 'no parent posts'
            }));

          case 23:
            _post.parent = parentPost.id;

          case 24:
            _context.next = 32;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](15);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST PARENTS');
            console.log(_context.t0);
            return _context.abrupt("return", reply.status(500).send({
              message: "crash"
            }));

          case 32:
            _context.next = 35;
            break;

          case 34:
            _post.parent = null;

          case 35:
            // добавляем юзера в форум 
            forumUserPairValues.push([_post.author, threadData.forum]); // await ForumModel.createForumUserPair(threadData.forum, post.author);
            // const pair = await ForumModel.createForumUserPair(threadData.forum, post.author);        

            _context.next = 38;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIdForPost();

          case 38:
            postId = _context.sent;
            _post.created = creationDate;
            _post.thread = threadData.id;
            _post.forum = threadData.forum;
            _post.id = parseInt(postId.nextval);
            _context.next = 45;
            return constructPathToPost(_post);

          case 45:
            path = _context.sent;
            _post.pathtopost = path;
            postsValues.push(_post);

          case 48:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 51:
            _context.next = 57;
            break;

          case 53:
            _context.prev = 53;
            _context.t1 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 57:
            _context.prev = 57;
            _context.prev = 58;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 60:
            _context.prev = 60;

            if (!_didIteratorError) {
              _context.next = 63;
              break;
            }

            throw _iteratorError;

          case 63:
            return _context.finish(60);

          case 64:
            return _context.finish(57);

          case 65:
            // добавляем пост
            result = [];
            columns = "(author, \"message\", parent, \"created\", thread, forum, id, pathtopost)";
            valuesInStringQuery = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["valStr"])(postsValues);
            query = "INSERT INTO posts " + columns + " VALUES " + valuesInStringQuery + " RETURNING *";
            _context.next = 71;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewPostsByQuery(query);

          case 71:
            addedPosts = _context.sent;

            if (!addedPosts) {
              _context.next = 111;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 76;

            for (_iterator2 = addedPosts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              post = _step2.value;
              post.id = parseInt(post.id);
              post.thread = parseInt(post.thread);
              post.parent = parseInt(post.parent);
              result.push(post);
            }

            _context.next = 84;
            break;

          case 80:
            _context.prev = 80;
            _context.t2 = _context["catch"](76);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t2;

          case 84:
            _context.prev = 84;
            _context.prev = 85;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 87:
            _context.prev = 87;

            if (!_didIteratorError2) {
              _context.next = 90;
              break;
            }

            throw _iteratorError2;

          case 90:
            return _context.finish(87);

          case 91:
            return _context.finish(84);

          case 92:
            pairColumns = "(usernickname, forumslug)";
            stringPairValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createPaireQuery"])(forumUserPairValues);
            pairQuery = "INSERT INTO forumusers " + pairColumns + " VALUES " + stringPairValues + " ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *"; // await ForumModel.createForumUserPair(threadData.forum, author);

            _context.prev = 95;
            _context.next = 98;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(threadData.forum, newPosts.length);

          case 98:
            _context.next = 100;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPairByQuery(pairQuery);

          case 100:
            _context.next = 108;
            break;

          case 102:
            _context.prev = 102;
            _context.t3 = _context["catch"](95);
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(_context.t3);
            return _context.abrupt("return", reply.status(500).send({
              message: "crash"
            }));

          case 108:
            return _context.abrupt("return", reply.status(201).send(result));

          case 111:
            return _context.abrupt("return", reply.status(404).send({
              message: 'cant find author'
            }));

          case 112:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 53, 57, 65], [15, 26], [58,, 60, 64], [76, 80, 84, 92], [85,, 87, 91], [95, 102]]);
  }));

  return function createPostsLoop(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var constructPathToPost =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(post) {
    var idArray, idString, pathtopost, path, pathString;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idArray = [];
            idArray.push(post.id);
            idString = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["constructPathString"])(idArray);

            if (post.parent) {
              _context2.next = 7;
              break;
            }

            pathtopost = post.pathtopost || idString;
            _context2.next = 13;
            break;

          case 7:
            _context2.next = 9;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPathToPost(post.parent);

          case 9:
            path = _context2.sent;
            path.pathtopost.push(post.id);
            pathString = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["constructPathString"])(path.pathtopost);
            pathtopost = post.pathtopost || pathString || idString;

          case 13:
            return _context2.abrupt("return", pathtopost);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function constructPathToPost(_x4) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./forum/server/controllers/ForumController.js":
/*!*****************************************************!*\
  !*** ./forum/server/controllers/ForumController.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./forum/server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./forum/server/models/ThreadModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var ForumController =
/*#__PURE__*/
function () {
  function ForumController() {
    _classCallCheck(this, ForumController);
  }

  _createClass(ForumController, [{
    key: "createForum",
    value: function () {
      var _createForum = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, reply) {
        var user, slug, title, newForumData, result, exsistingForum;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                user = request.body['user'];
                slug = request.body['slug'];
                title = request.body['title'];
                _context.prev = 3;
                _context.next = 6;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserNickname(user);

              case 6:
                user = _context.sent;

                if (user) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", reply.status(404).send({
                  message: "Can't find user"
                }));

              case 9:
                _context.next = 17;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK');
                console.log(_context.t0);
                return _context.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 17:
                newForumData = [slug, title, user.nickname];
                _context.next = 20;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createNewForum(newForumData);

              case 20:
                result = _context.sent;

                if (!result) {
                  _context.next = 25;
                  break;
                }

                return _context.abrupt("return", reply.status(201).send(result));

              case 25:
                _context.prev = 25;
                _context.next = 28;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(slug);

              case 28:
                exsistingForum = _context.sent;
                return _context.abrupt("return", reply.status(409).send(exsistingForum));

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](25);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING FORUM BY SLUG');
                console.log(_context.t1);
                return _context.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11], [25, 32]]);
      }));

      function createForum(_x, _x2) {
        return _createForum.apply(this, arguments);
      }

      return createForum;
    }()
  }, {
    key: "getDetails",
    value: function getDetails(request, reply) {
      // console.log(req.originalUrl, req.method);
      var slug = request.params['slug'];
      _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(slug).then(function (data) {
        if (data) {
          // console.log('forum getDetails',data);
          return reply.status(200).send(data);
        }

        return reply.status(404).send({
          message: 'cant find forum'
        });
      }).catch(function (error) {
        console.log('--------------------------------------------');
        console.log('ERROR IN GETTING FORUM BY SLUG');
        console.log(error);
        return reply.status(500).send({
          message: "crash"
        });
      });
    }
  }, {
    key: "createThreadInForum",
    value: function () {
      var _createThreadInForum = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, reply) {
        var author, forumSlug, forum, keyValues, columns, i, values, result, exsistingThread;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                author = request.body['author'];
                forumSlug = request.params['slug'];
                _context2.prev = 2;
                _context2.next = 5;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserNickname(author);

              case 5:
                author = _context2.sent;

                if (author) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", reply.status(404).send({
                  message: "Can't find user"
                }));

              case 8:
                _context2.next = 16;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK');
                console.log(_context2.t0);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 16:
                _context2.prev = 16;
                _context2.next = 19;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumSlug(forumSlug);

              case 19:
                forum = _context2.sent;

                if (forum) {
                  _context2.next = 22;
                  break;
                }

                return _context2.abrupt("return", reply.status(404).send({
                  message: "Can't find forum"
                }));

              case 22:
                _context2.next = 30;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t1 = _context2["catch"](16);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING FORUM BY SLUG');
                console.log(_context2.t1);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 30:
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(request.body);
                keyValues['author'] = author.nickname;
                keyValues['forum'] = forum.slug;
                columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestColumns"])(keyValues);

                for (i = 0; i < columns.length; i++) {
                  if (columns[i] === 'message' || columns[i] === 'created') {
                    columns[i] = '"' + columns[i] + '"';
                  }
                }

                values = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestValues"])(keyValues);
                _context2.next = 38;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewThread(columns, values);

              case 38:
                result = _context2.sent;

                if (!result) {
                  _context2.next = 66;
                  break;
                }

                _context2.prev = 40;
                _context2.next = 43;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPair(forum.slug, author.nickname);

              case 43:
                _context2.next = 51;
                break;

              case 45:
                _context2.prev = 45;
                _context2.t2 = _context2["catch"](40);
                console.log('--------------------------------------------');
                console.log('ERROR IN creating pair');
                console.log(_context2.t2);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 51:
                _context2.prev = 51;
                _context2.next = 54;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementThreads(forum.slug);

              case 54:
                result.id = parseInt(result.id);
                return _context2.abrupt("return", reply.status(201).send(result));

              case 58:
                _context2.prev = 58;
                _context2.t3 = _context2["catch"](51);
                console.log('--------------------------------------------');
                console.log('ERROR IN threads increment');
                console.log(_context2.t3);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 64:
                _context2.next = 80;
                break;

              case 66:
                _context2.prev = 66;
                _context2.next = 69;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(request.body['slug']);

              case 69:
                exsistingThread = _context2.sent;
                exsistingThread.id = parseInt(exsistingThread.id);
                return _context2.abrupt("return", reply.status(409).send(exsistingThread));

              case 74:
                _context2.prev = 74;
                _context2.t4 = _context2["catch"](66);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING THREAD BY SLUG !!!!');
                console.log(_context2.t4);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 80:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10], [16, 24], [40, 45], [51, 58], [66, 74]]);
      }));

      function createThreadInForum(_x3, _x4) {
        return _createThreadInForum.apply(this, arguments);
      }

      return createThreadInForum;
    }()
  }, {
    key: "getThreads",
    value: function () {
      var _getThreads = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(request, reply) {
        var slug, queryParams, result, forum;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                slug = request.params['slug'];
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(request.query);

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                }

                _context3.next = 5;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadsByForumSlug(slug, queryParams);

              case 5:
                result = _context3.sent;
                result = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["idToInt"])(result);

                if (!(!result || !result.length)) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 10;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumSlug(slug);

              case 10:
                forum = _context3.sent;

                if (forum) {
                  _context3.next = 15;
                  break;
                }

                return _context3.abrupt("return", reply.status(404).send({
                  mesage: 'cant find forum'
                }));

              case 15:
                return _context3.abrupt("return", reply.status(200).send(result));

              case 16:
                return _context3.abrupt("return", reply.status(200).send(result));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getThreads(_x5, _x6) {
        return _getThreads.apply(this, arguments);
      }

      return getThreads;
    }()
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(request, reply) {
        var slug, queryParams, result, forum;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                slug = request.params['slug'];
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(request.query);

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                }

                queryParams.desc = queryParams.desc === 'true';
                _context4.next = 6;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUsers(slug, queryParams);

              case 6:
                result = _context4.sent;

                if (!(!result || !result.length)) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 10;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumSlug(slug);

              case 10:
                forum = _context4.sent;

                if (forum) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt("return", reply.status(404).send({
                  mesage: 'cant find forum'
                }));

              case 15:
                return _context4.abrupt("return", reply.status(200).send(result));

              case 16:
                result = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["forumSerializer"])(result); // console.log('forum getUsers',result);

                return _context4.abrupt("return", reply.status(200).send(result));

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUsers(_x7, _x8) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
  }]);

  return ForumController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ForumController());

/***/ }),

/***/ "./forum/server/controllers/PostController.js":
/*!****************************************************!*\
  !*** ./forum/server/controllers/PostController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./forum/server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./forum/server/models/ThreadModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/PostModel.js */ "./forum/server/models/PostModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_6__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var PostController =
/*#__PURE__*/
function () {
  function PostController() {
    _classCallCheck(this, PostController);
  }

  _createClass(PostController, [{
    key: "getDetails",
    value: function () {
      var _getDetails = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, reply) {
        var postId, result, postData, relatedTo, entity, relatedEntities, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, relatedEntity;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(request.originalUrl, request.method);
                postId = request.params['id'];
                result = {};
                _context.prev = 2;
                _context.next = 5;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPostById(postId);

              case 5:
                postData = _context.sent;
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING POST BY ID');
                console.log(_context.t0);

              case 13:
                if (postData) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", reply.status(404).send({
                  message: 'cant find post'
                }));

              case 15:
                relatedTo = request.query['related'];

                if (!relatedTo) {
                  _context.next = 86;
                  break;
                }

                relatedEntities = relatedTo.split(',');
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 21;
                _iterator = relatedEntities[Symbol.iterator]();

              case 23:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 72;
                  break;
                }

                relatedEntity = _step.value;

                if (!(relatedEntity === 'user')) {
                  _context.next = 40;
                  break;
                }

                _context.prev = 26;
                _context.next = 29;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserByNickname(postData.author);

              case 29:
                entity = _context.sent;
                result.author = entity;
                _context.next = 38;
                break;

              case 33:
                _context.prev = 33;
                _context.t1 = _context["catch"](26);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICKNAME');
                console.log(_context.t1);

              case 38:
                _context.next = 69;
                break;

              case 40:
                if (!(relatedEntity === 'thread')) {
                  _context.next = 56;
                  break;
                }

                _context.prev = 41;
                _context.next = 44;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadById(postData.thread);

              case 44:
                entity = _context.sent;
                entity.id = parseInt(entity.id);
                result.thread = entity;
                _context.next = 54;
                break;

              case 49:
                _context.prev = 49;
                _context.t2 = _context["catch"](41);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING THREAD BY ID');
                console.log(_context.t2);

              case 54:
                _context.next = 69;
                break;

              case 56:
                if (!(relatedEntity === 'forum')) {
                  _context.next = 69;
                  break;
                }

                _context.prev = 57;
                _context.next = 60;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(postData.forum);

              case 60:
                entity = _context.sent;
                // entity.id = parseInt(entity.id);
                result.forum = entity;
                _context.next = 69;
                break;

              case 64:
                _context.prev = 64;
                _context.t3 = _context["catch"](57);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING THREAD BY ID');
                console.log(_context.t3);

              case 69:
                _iteratorNormalCompletion = true;
                _context.next = 23;
                break;

              case 72:
                _context.next = 78;
                break;

              case 74:
                _context.prev = 74;
                _context.t4 = _context["catch"](21);
                _didIteratorError = true;
                _iteratorError = _context.t4;

              case 78:
                _context.prev = 78;
                _context.prev = 79;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 81:
                _context.prev = 81;

                if (!_didIteratorError) {
                  _context.next = 84;
                  break;
                }

                throw _iteratorError;

              case 84:
                return _context.finish(81);

              case 85:
                return _context.finish(78);

              case 86:
                postData.id = parseInt(postData.id);
                postData.thread = parseInt(postData.thread);
                postData.parent = parseInt(postData.parent);
                result.post = postData; // console.log('post getDetails',result);

                return _context.abrupt("return", reply.status(200).send(result));

              case 91:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8], [21, 74, 78, 86], [26, 33], [41, 49], [57, 64], [79,, 81, 85]]);
      }));

      function getDetails(_x, _x2) {
        return _getDetails.apply(this, arguments);
      }

      return getDetails;
    }()
  }, {
    key: "updateDetails",
    value: function () {
      var _updateDetails = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, reply) {
        var postId, newData, postData, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(request.originalUrl, request.method);
                postId = request.params['id'];
                newData = request.body;
                _context2.prev = 2;
                _context2.next = 5;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPostById(postId);

              case 5:
                postData = _context2.sent;
                _context2.next = 13;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING POST BY ID');
                console.log(_context2.t0);

              case 13:
                if (postData) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", reply.status(404).send({
                  message: 'cant find post'
                }));

              case 15:
                if (!(!Object.values(newData).length || newData.message === '')) {
                  _context2.next = 20;
                  break;
                }

                postData.id = parseInt(postData.id);
                postData.thread = parseInt(postData.thread);
                postData.parent ? parseInt(postData.parent) : postData.parent;
                return _context2.abrupt("return", reply.status(200).send(postData));

              case 20:
                if (!(postData.message !== newData.message)) {
                  _context2.next = 42;
                  break;
                }

                _context2.prev = 21;
                _context2.next = 24;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].updatePost(newData.message, postId);

              case 24:
                result = _context2.sent;
                _context2.next = 32;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t1 = _context2["catch"](21);
                console.log('--------------------------------------------');
                console.log('ERROR IN UPDATIND POST');
                console.log(_context2.t1);

              case 32:
                if (!(result === 'conflict')) {
                  _context2.next = 36;
                  break;
                }

                return _context2.abrupt("return", reply.status(409).send({
                  message: 'already existed data'
                }));

              case 36:
                result.id = parseInt(result.id);
                result.thread = parseInt(result.thread);
                result.parent ? parseInt(result.parent) : result.parent;
                return _context2.abrupt("return", reply.status(200).send(result));

              case 40:
                _context2.next = 46;
                break;

              case 42:
                postData.id = parseInt(postData.id);
                postData.thread = parseInt(postData.thread);
                postData.parent ? parseInt(postData.parent) : postData.parent;
                return _context2.abrupt("return", reply.status(200).send(postData));

              case 46:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8], [21, 27]]);
      }));

      function updateDetails(_x3, _x4) {
        return _updateDetails.apply(this, arguments);
      }

      return updateDetails;
    }()
  }]);

  return PostController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PostController());

/***/ }),

/***/ "./forum/server/controllers/ServiceController.js":
/*!*******************************************************!*\
  !*** ./forum/server/controllers/ServiceController.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ServiceModel.js */ "./forum/server/models/ServiceModel.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ServiceController =
/*#__PURE__*/
function () {
  function ServiceController() {
    _classCallCheck(this, ServiceController);
  }

  _createClass(ServiceController, [{
    key: "countAll",
    value: function () {
      var _countAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, reply) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].countAll();

              case 3:
                result = _context.sent;
                _context.next = 12;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log('--------------------------------------------');
                console.log(_context.t0);
                console.log('ERROR IN COUNTING');
                return _context.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 12:
                return _context.abrupt("return", reply.status(200).send(result));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function countAll(_x, _x2) {
        return _countAll.apply(this, arguments);
      }

      return countAll;
    }()
  }, {
    key: "clearAll",
    value: function () {
      var _clearAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, reply) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                console.log('REQUEST', request);
                _context2.prev = 1;
                _context2.next = 4;
                return _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearAll();

              case 4:
                _context2.next = 12;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                console.log('--------------------------------------------');
                console.log(_context2.t0);
                console.log('ERROR IN COUNTING');
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 12:
                reply.type('application/json').status(200);
                return _context2.abrupt("return", null);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 6]]);
      }));

      function clearAll(_x3, _x4) {
        return _clearAll.apply(this, arguments);
      }

      return clearAll;
    }()
  }]);

  return ServiceController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ServiceController());

/***/ }),

/***/ "./forum/server/controllers/ThreadController.js":
/*!******************************************************!*\
  !*** ./forum/server/controllers/ThreadController.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./forum/server/models/ThreadModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/PostModel.js */ "./forum/server/models/PostModel.js");
/* harmony import */ var _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/VoteModel.js */ "./forum/server/models/VoteModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
/* harmony import */ var _ControllerUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ControllerUtils.js */ "./forum/server/controllers/ControllerUtils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ThreadController =
/*#__PURE__*/
function () {
  function ThreadController() {
    _classCallCheck(this, ThreadController);
  }

  _createClass(ThreadController, [{
    key: "createPost",
    value: function () {
      var _createPost = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, reply) {
        var slugOrId, thread;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(request.originalUrl, request.method);
                slugOrId = request.params['slug_or_id'];

                if (!/^\d+$/.test(slugOrId)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId));

              case 5:
                thread = _context.sent;
                _context.next = 14;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.log('--------------------------------------------');
                console.log(_context.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 14:
                _context.next = 28;
                break;

              case 16:
                _context.prev = 16;
                _context.next = 19;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId);

              case 19:
                thread = _context.sent;
                _context.next = 28;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context["catch"](16);
                console.log('--------------------------------------------');
                console.log(_context.t1);
                console.log('ERROR IN GETTING THREAD BY slug');
                return _context.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 28:
                if (thread) {
                  _context.next = 30;
                  break;
                }

                return _context.abrupt("return", reply.status(404).send({
                  mesage: 'cant find thread'
                }));

              case 30:
                Object(_ControllerUtils_js__WEBPACK_IMPORTED_MODULE_5__["createPostsLoop"])(request, reply, thread);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8], [16, 22]]);
      }));

      function createPost(_x, _x2) {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }()
  }, {
    key: "voteForThread",
    value: function () {
      var _voteForThread = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, reply) {
        var slugOrId, voiceValue, author, thread, votedData, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(request.originalUrl, request.method);
                slugOrId = request.params['slug_or_id'];
                voiceValue = request.body.voice;
                author = request.body.nickname;

                if (!/^\d+$/.test(slugOrId)) {
                  _context2.next = 18;
                  break;
                }

                _context2.prev = 4;
                _context2.next = 7;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId));

              case 7:
                thread = _context2.sent;
                _context2.next = 16;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](4);
                console.log('--------------------------------------------');
                console.log(_context2.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 16:
                _context2.next = 30;
                break;

              case 18:
                _context2.prev = 18;
                _context2.next = 21;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId);

              case 21:
                thread = _context2.sent;
                _context2.next = 30;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t1 = _context2["catch"](18);
                console.log('--------------------------------------------');
                console.log(_context2.t1);
                console.log('ERROR IN GETTING THREAD BY slug');
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 30:
                if (thread) {
                  _context2.next = 32;
                  break;
                }

                return _context2.abrupt("return", reply.status(404).send({
                  mesage: 'cant find thread'
                }));

              case 32:
                _context2.next = 34;
                return _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].vote(voiceValue, thread.id, author);

              case 34:
                votedData = _context2.sent;

                if (!votedData) {
                  _context2.next = 39;
                  break;
                }

                if (votedData.existed) {
                  votedData.voice = votedData.voice === 1 ? votedData.voice + 1 : votedData.voice - 1;
                }

                _context2.next = 57;
                break;

              case 39:
                _context2.prev = 39;
                _context2.next = 42;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserNickname(author);

              case 42:
                author = _context2.sent;

                if (author) {
                  _context2.next = 47;
                  break;
                }

                return _context2.abrupt("return", reply.status(404).send({
                  message: 'cant find author'
                }));

              case 47:
                thread.id = parseInt(thread.id);
                return _context2.abrupt("return", reply.status(200).send(thread));

              case 49:
                _context2.next = 57;
                break;

              case 51:
                _context2.prev = 51;
                _context2.t2 = _context2["catch"](39);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICKNAME');
                console.log(_context2.t2);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 57:
                _context2.prev = 57;
                _context2.next = 60;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].incrementVotesById(thread.id, votedData.voice);

              case 60:
                result = _context2.sent;
                _context2.next = 69;
                break;

              case 63:
                _context2.prev = 63;
                _context2.t3 = _context2["catch"](57);
                console.log('--------------------------------------------');
                console.log(_context2.t3);
                console.log('ERROR IN incrementing votes in thread');
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 69:
                result.id = parseInt(result.id);
                return _context2.abrupt("return", reply.status(200).send(result));

              case 71:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 10], [18, 24], [39, 51], [57, 63]]);
      }));

      function voteForThread(_x3, _x4) {
        return _voteForThread.apply(this, arguments);
      }

      return voteForThread;
    }()
  }, {
    key: "getDetails",
    value: function getDetails(request, reply) {
      // console.log(request.originalUrl, request.method);
      var slugOrId = request.params['slug_or_id'];

      if (/^\d+$/.test(slugOrId)) {
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId)).then(function (thread) {
          if (thread) {
            thread.id = parseInt(thread.id); // console.log('thread getDetails', thread);

            return reply.status(200).send(thread);
          } else {
            return reply.status(404).send({
              mesage: 'cant find thread'
            });
          }
        }).catch(function (error) {
          console.log('--------------------------------------------');
          console.log(error);
          console.log('ERROR IN GETTING THREAD BY ID');
          return reply.status(500).send({
            message: "crash"
          });
        });
      } else {
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId).then(function (thread) {
          if (thread) {
            thread.id = parseInt(thread.id); // console.log('thread getDetails', thread);

            return reply.status(200).send(thread);
          } else {
            return reply.status(404).send({
              mesage: 'cant find thread'
            });
          }
        }).catch(function (error) {
          console.log('--------------------------------------------');
          console.log(error);
          console.log('ERROR IN GETTING THREAD BY SLUG');
          return reply.status(500).send({
            message: "crash"
          });
        });
      }
    }
  }, {
    key: "getPosts",
    value: function () {
      var _getPosts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(request, reply) {
        var queryParams, result, slugOrId, isId, thread;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(request.originalUrl, request.method);
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestKeyValues"])(request.query);
                result = [];

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                }

                queryParams['desc'] = queryParams['desc'] === 'true';
                queryParams['since'] = parseInt(queryParams['since']);
                slugOrId = request.params['slug_or_id'];

                if (/^\d+$/.test(slugOrId)) {
                  isId = true;
                } else {
                  isId = false;
                }

                if (!(queryParams.sort === 'flat' || !queryParams.sort)) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 10;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].flatSort(slugOrId, isId, queryParams);

              case 10:
                result = _context3.sent;
                _context3.next = 23;
                break;

              case 13:
                if (!(queryParams.sort === 'tree')) {
                  _context3.next = 19;
                  break;
                }

                _context3.next = 16;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].treeSort(slugOrId, isId, queryParams);

              case 16:
                result = _context3.sent;
                _context3.next = 23;
                break;

              case 19:
                if (!(queryParams.sort === 'parent_tree')) {
                  _context3.next = 23;
                  break;
                }

                _context3.next = 22;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].parentTreeSort(slugOrId, isId, queryParams);

              case 22:
                result = _context3.sent;

              case 23:
                if (!(!result || !result.length)) {
                  _context3.next = 39;
                  break;
                }

                if (!isId) {
                  _context3.next = 30;
                  break;
                }

                _context3.next = 27;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId));

              case 27:
                _context3.t0 = _context3.sent;
                _context3.next = 33;
                break;

              case 30:
                _context3.next = 32;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId);

              case 32:
                _context3.t0 = _context3.sent;

              case 33:
                thread = _context3.t0;

                if (thread) {
                  _context3.next = 38;
                  break;
                }

                return _context3.abrupt("return", reply.status(404).send({
                  mesage: 'cant find thread'
                }));

              case 38:
                return _context3.abrupt("return", reply.status(200).send(result));

              case 39:
                result = result.map(function (post) {
                  var resPost = {};
                  resPost['author'] = post.author;
                  resPost['created'] = post.created;
                  resPost['forum'] = post.forum;
                  resPost['id'] = parseInt(post.id);
                  resPost['message'] = post.message;
                  resPost['parent'] = parseInt(post.parent);
                  resPost['thread'] = parseInt(post.thread);
                  return resPost;
                });
                return _context3.abrupt("return", reply.status(200).send(result));

              case 41:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getPosts(_x5, _x6) {
        return _getPosts.apply(this, arguments);
      }

      return getPosts;
    }()
  }, {
    key: "updateThread",
    value: function () {
      var _updateThread = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(request, reply) {
        var slugOrId, newData, keyValues, columns, thread, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log(request.originalUrl, request.method);
                slugOrId = request.params['slug_or_id'];
                newData = request.body;
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestKeyValues"])(newData);
                columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestColumns"])(newData);

                if (!/^\d+$/.test(slugOrId)) {
                  _context4.next = 19;
                  break;
                }

                _context4.prev = 5;
                _context4.next = 8;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId));

              case 8:
                thread = _context4.sent;
                _context4.next = 17;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](5);
                console.log('--------------------------------------------');
                console.log(_context4.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context4.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 17:
                _context4.next = 31;
                break;

              case 19:
                _context4.prev = 19;
                _context4.next = 22;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId);

              case 22:
                thread = _context4.sent;
                _context4.next = 31;
                break;

              case 25:
                _context4.prev = 25;
                _context4.t1 = _context4["catch"](19);
                console.log('--------------------------------------------');
                console.log(_context4.t1);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context4.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 31:
                if (thread) {
                  _context4.next = 33;
                  break;
                }

                return _context4.abrupt("return", reply.status(404).send({
                  mesage: 'cant find thread'
                }));

              case 33:
                if (!(!Object.values(newData).length || !columns.length)) {
                  _context4.next = 36;
                  break;
                }

                thread.id = parseInt(thread.id);
                return _context4.abrupt("return", reply.status(200).send(thread));

              case 36:
                _context4.prev = 36;
                _context4.next = 39;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateThread(thread.slug, columns, keyValues);

              case 39:
                result = _context4.sent;
                _context4.next = 48;
                break;

              case 42:
                _context4.prev = 42;
                _context4.t2 = _context4["catch"](36);
                console.log('--------------------------------------------');
                console.log(_context4.t2);
                console.log('ERROR IN UPDATING THREAD');
                return _context4.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 48:
                if (!(result === 'conflict')) {
                  _context4.next = 52;
                  break;
                }

                return _context4.abrupt("return", reply.status(409).send({
                  message: 'already existed data'
                }));

              case 52:
                result.id = parseInt(result.id);
                return _context4.abrupt("return", reply.status(200).send(result));

              case 54:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 11], [19, 25], [36, 42]]);
      }));

      function updateThread(_x7, _x8) {
        return _updateThread.apply(this, arguments);
      }

      return updateThread;
    }()
  }]);

  return ThreadController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ThreadController());

/***/ }),

/***/ "./forum/server/controllers/UserController.js":
/*!****************************************************!*\
  !*** ./forum/server/controllers/UserController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, reply) {
        var nickname, email, newUserData, result, existingUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                nickname = request.params['nickname'];
                email = request.body['email'];
                newUserData = [nickname, request.body['fullname'], request.body['about'], email];
                _context.next = 5;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createNewUser(newUserData);

              case 5:
                result = _context.sent;

                if (!result) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", reply.status(201).send(result));

              case 10:
                _context.prev = 10;
                _context.next = 13;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserByNicknameOrEmail(nickname, email);

              case 13:
                existingUser = _context.sent;
                return _context.abrupt("return", reply.status(409).send(existingUser));

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](10);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK OR EMAIL');
                console.log(_context.t0);
                return _context.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 17]]);
      }));

      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "getUser",
    value: function getUser(request, reply) {
      // console.log(req.originalUrl, req.method);
      var nickname = request.params['nickname'];
      _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserByNickname(nickname).then(function (user) {
        if (user) {
          // console.log('getUser', user);
          return reply.status(200).send(user);
        }

        return reply.status(404).send({
          message: "Can't find user"
        });
      }).catch(function (error) {
        console.log('--------------------------------------------');
        console.log('ERROR IN GETTING USER BY NICK');
        console.log(error);
        return reply.status(500).send({
          message: "crash"
        });
      });
    }
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, reply) {
        var nickname, newData, user, keyValues, columns, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                nickname = request.params['nickname'];
                newData = request.body; // существует ли пользователь

                _context2.prev = 2;
                _context2.next = 5;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserByNickname(nickname);

              case 5:
                user = _context2.sent;

                if (user) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", reply.status(404).send({
                  message: "Can't find user"
                }));

              case 8:
                _context2.next = 16;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK');
                console.log(_context2.t0);
                return _context2.abrupt("return", reply.status(500).send({
                  message: "crash"
                }));

              case 16:
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["harvestKeyValues"])(newData);
                columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["harvestColumns"])(newData);

                if (!(!Object.values(newData).length || !columns.length)) {
                  _context2.next = 20;
                  break;
                }

                return _context2.abrupt("return", reply.status(200).send(user));

              case 20:
                _context2.next = 22;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateUser(nickname, columns, keyValues);

              case 22:
                result = _context2.sent;

                if (result) {
                  _context2.next = 27;
                  break;
                }

                return _context2.abrupt("return", reply.status(409).send({
                  message: "User with such nickname or email already exists"
                }));

              case 27:
                return _context2.abrupt("return", reply.status(200).send(result));

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      function updateUser(_x3, _x4) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }]);

  return UserController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserController());

/***/ }),

/***/ "./forum/server/index.js":
/*!*******************************!*\
  !*** ./forum/server/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routers_UserRoutes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routers/UserRoutes.js */ "./forum/server/routers/UserRoutes.js");
/* harmony import */ var _routers_ForumRoutes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routers/ForumRoutes.js */ "./forum/server/routers/ForumRoutes.js");
/* harmony import */ var _routers_ThreadRoutes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers/ThreadRoutes.js */ "./forum/server/routers/ThreadRoutes.js");
/* harmony import */ var _routers_PostRoutes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/PostRoutes.js */ "./forum/server/routers/PostRoutes.js");
/* harmony import */ var _routers_ServiceRoutes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routers/ServiceRoutes.js */ "./forum/server/routers/ServiceRoutes.js");
/* harmony import */ var _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/ServiceModel.js */ "./forum/server/models/ServiceModel.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import express from 'express';
var fastify = __webpack_require__(/*! fastify */ "fastify")({
  logger: false
});







fastify.register(_routers_UserRoutes_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
fastify.register(_routers_ForumRoutes_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
fastify.register(_routers_ThreadRoutes_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
fastify.register(_routers_PostRoutes_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
fastify.register(_routers_ServiceRoutes_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
var port = process.env.PORT || 5000;
fastify.post('/api/service/clear',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, reply) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_5__["default"].clearAll();

          case 3:
            _context.next = 11;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log('--------------------------------------------');
            console.log(_context.t0);
            console.log('ERROR IN COUNTING');
            return _context.abrupt("return", reply.status(500).send({
              message: "crash"
            }));

          case 11:
            reply.type('application/json').status(200);
            return _context.abrupt("return", null);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 5]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
fastify.addContentTypeParser('application/json', {
  parseAs: 'string'
}, function (req, body, done) {
  try {
    var json = JSON.parse(body);
    done(null, json);
  } catch (err) {
    //   err.statusCode = 400
    done(null, undefined);
  }
});
fastify.listen(port, function (err, address) {
  console.log("Server listening on port ".concat(port));
}); // const app = express();
// app.use(express.json());
// app.use('/api/user', userRouter);
// app.use('/api/forum', forumRouter);
// app.use('/api/thread', threadRouter);
// app.use('/api/post', postRouter);
// app.use('/api/service', serviceRouter);
// app.get('/', () => {
//   console.log('hello');
// })
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });

/***/ }),

/***/ "./forum/server/models/ForumModel.js":
/*!*******************************************!*\
  !*** ./forum/server/models/ForumModel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./forum/server/modules/DataBaseModule.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ForumModel =
/*#__PURE__*/
function () {
  function ForumModel() {
    _classCallCheck(this, ForumModel);
  }

  _createClass(ForumModel, [{
    key: "getForumBySlug",
    value: function getForumBySlug(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM forums WHERE slug=$1', [slug]);
    }
  }, {
    key: "createNewForum",
    value: function () {
      var _createNewForum = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var newForumData,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newForumData = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
                _context.prev = 1;
                _context.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('INSERT INTO forums (slug, title, "user") VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING *', newForumData);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING THREAD');
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function createNewForum() {
        return _createNewForum.apply(this, arguments);
      }

      return createNewForum;
    }()
  }, {
    key: "getForumSlug",
    value: function getForumSlug(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT slug FROM forums WHERE slug=$1', [slug]);
    }
  }, {
    key: "createForumUserPair",
    value: function () {
      var _createForumUserPair = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(forumSlug, nickname) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("INSERT INTO forumusers (forumslug, usernickname) VALUES ($1,\n                (SELECT nickname FROM users WHERE nickname=$2))\n                ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *", [forumSlug, nickname]);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING THREAD');
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function createForumUserPair(_x, _x2) {
        return _createForumUserPair.apply(this, arguments);
      }

      return createForumUserPair;
    }()
  }, {
    key: "createForumUserPairByQuery",
    value: function () {
      var _createForumUserPairByQuery = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(query) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone(query);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING THREAD');
                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function createForumUserPairByQuery(_x3) {
        return _createForumUserPairByQuery.apply(this, arguments);
      }

      return createForumUserPairByQuery;
    }()
  }, {
    key: "incrementThreads",
    value: function incrementThreads(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('UPDATE forums SET threads = threads + 1 WHERE slug=$1 RETURNING *', [slug]);
    }
  }, {
    key: "incrementPosts",
    value: function incrementPosts(slug, cnt) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("UPDATE forums SET posts = posts + $2 WHERE slug=$1 RETURNING *", [slug, cnt]);
    }
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(slug, queryParams) {
        var query;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                slug = "(SELECT slug FROM forums WHERE slug='".concat(slug, "')");

                if (queryParams.since && !queryParams.desc) {
                  query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n                SELECT * FROM forumusers AS FU\n                JOIN users AS U ON FU.usernickname = U.nickname\n                WHERE FU.forumslug=$1:raw AND U.nickname>$2\n                ", [slug, queryParams.since]);
                } else if (queryParams.since && queryParams.desc) {
                  query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n                SELECT * FROM forumusers AS FU\n                JOIN users AS U ON FU.usernickname = U.nickname\n                WHERE FU.forumslug=$1:raw AND U.nickname<$2\n                ", [slug, queryParams.since]);
                } else {
                  query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n                SELECT * FROM forumusers AS FU\n                JOIN users AS U ON FU.usernickname = U.nickname\n                WHERE FU.forumslug=$1:raw", [slug]);
                }

                _context4.next = 5;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("$1:raw \n                ORDER BY $2:raw LIMIT $3", [query.toString(), queryParams.desc ? 'U.nickname DESC' : 'U.nickname ASC', queryParams.limit]);

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN getUsers');
                console.log(_context4.t0);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function getUsers(_x4, _x5) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
  }]);

  return ForumModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ForumModel());

/***/ }),

/***/ "./forum/server/models/PostModel.js":
/*!******************************************!*\
  !*** ./forum/server/models/PostModel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./forum/server/modules/DataBaseModule.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PS = __webpack_require__(/*! pg-promise */ "pg-promise").PreparedStatement;

var getPostByIdAndThreadIdStatment = new PS('get-post', 'SELECT * FROM posts WHERE id=$1 AND thread=$2');

var PostModel =
/*#__PURE__*/
function () {
  function PostModel() {
    _classCallCheck(this, PostModel);
  }

  _createClass(PostModel, [{
    key: "createNewPost",
    value: function createNewPost(columns, values) {
      var c = '(';
      var v = '(';

      for (var i = 0; i < columns.length; i++) {
        c += columns[i];

        if (i !== columns.length - 1) {
          c += ', ';
        }
      }

      c += ')';

      for (var _i = 0; _i < values.length; _i++) {
        v += '$' + (_i + 1).toString();

        if (_i !== columns.length - 1) {
          v += ', ';
        }
      }

      v += ')';
      var query = 'INSERT INTO posts ' + c + ' VALUES ' + v + ' RETURNING *';
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one(query, values);
    }
  }, {
    key: "createNewPostsByQuery",
    value: function () {
      var _createNewPostsByQuery = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone(query);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING POST NO AUTHOR');
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function createNewPostsByQuery(_x) {
        return _createNewPostsByQuery.apply(this, arguments);
      }

      return createNewPostsByQuery;
    }() // async transactTest (query)

  }, {
    key: "getPostByIdAndThreadId",
    value: function getPostByIdAndThreadId(id, threadId) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone(getPostByIdAndThreadIdStatment, [id, threadId]);
    }
  }, {
    key: "getPostById",
    value: function getPostById(id) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM posts WHERE id=$1', [id]);
    }
  }, {
    key: "getIdForPost",
    value: function getIdForPost() {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one("SELECT nextval('posts_id_sequance')");
    }
  }, {
    key: "updatePost",
    value: function updatePost(message, id) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('UPDATE posts SET "isEdited"=TRUE, "message"=$1 WHERE id=$2 RETURNING *', [message, id]);
    }
  }, {
    key: "getPathToPost",
    value: function getPathToPost(id) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT pathtopost FROM posts WHERE id=$1', [id]);
    }
  }, {
    key: "flatSort",
    value: function () {
      var _flatSort = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(slugOrId, isId, queryParams) {
        var threadId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                threadId = isId ? slugOrId : "(SELECT id FROM threads WHERE slug='".concat(slugOrId, "')"); // console.log(threadId);

                if (!queryParams.since) {
                  _context2.next = 14;
                  break;
                }

                if (!queryParams.desc) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1:raw AND id<$2\n                    ORDER BY \"created\" DESC, id DESC LIMIT $3", [threadId, queryParams.since, queryParams.limit]);

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 9:
                _context2.next = 11;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1:raw AND id>$2\n                    ORDER BY \"created\" ASC, id ASC LIMIT $3", [threadId, queryParams.since, queryParams.limit]);

              case 11:
                return _context2.abrupt("return", _context2.sent);

              case 12:
                _context2.next = 23;
                break;

              case 14:
                if (!queryParams.desc) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 17;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1:raw\n                    ORDER BY \"created\" DESC, id DESC LIMIT $3", [threadId, queryParams.since, queryParams.limit]);

              case 17:
                return _context2.abrupt("return", _context2.sent);

              case 20:
                _context2.next = 22;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1:raw\n                    ORDER BY \"created\" ASC, id ASC LIMIT $3", [threadId, queryParams.since, queryParams.limit]);

              case 22:
                return _context2.abrupt("return", _context2.sent);

              case 23:
                _context2.next = 30;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](0);
                console.log('-----------------------');
                console.log('Error in flat sort');
                console.log(_context2.t0);

              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 25]]);
      }));

      function flatSort(_x2, _x3, _x4) {
        return _flatSort.apply(this, arguments);
      }

      return flatSort;
    }()
  }, {
    key: "treeSort",
    value: function () {
      var _treeSort = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(slugOrId, isId, queryParams) {
        var threadId, pathSortRule;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                threadId = isId ? slugOrId : "(SELECT id FROM threads WHERE slug='".concat(slugOrId, "')"); // console.log(threadId);

                pathSortRule = queryParams.desc ? 'pathtopost DESC' : 'pathtopost ASC';

                if (!(queryParams.since && !queryParams.desc)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 6;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                WHERE thread=$1:raw AND pathtopost > (SELECT pathtopost FROM posts WHERE id=$2)\n                ORDER BY $3:raw LIMIT $4", [threadId, queryParams.since, pathSortRule, queryParams.limit]);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 9:
                if (!(queryParams.since && queryParams.desc)) {
                  _context3.next = 15;
                  break;
                }

                _context3.next = 12;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                WHERE thread=$1:raw AND pathtopost < (SELECT pathtopost FROM posts WHERE id=$2)\n                ORDER BY $3:raw LIMIT $4", [threadId, queryParams.since, pathSortRule, queryParams.limit]);

              case 12:
                return _context3.abrupt("return", _context3.sent);

              case 15:
                if (queryParams.since) {
                  _context3.next = 19;
                  break;
                }

                _context3.next = 18;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                WHERE thread=$1:raw \n                ORDER BY $2:raw LIMIT $3", [threadId, pathSortRule, queryParams.limit]);

              case 18:
                return _context3.abrupt("return", _context3.sent);

              case 19:
                _context3.next = 26;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](0);
                console.log('-----------------------');
                console.log('Error in tree sort');
                console.log(_context3.t0);

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 21]]);
      }));

      function treeSort(_x5, _x6, _x7) {
        return _treeSort.apply(this, arguments);
      }

      return treeSort;
    }()
  }, {
    key: "parentTreeSort",
    value: function () {
      var _parentTreeSort = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(slugOrId, isId, queryParams) {
        var threadId, pathSortRule, idSortRule;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                threadId = isId ? slugOrId : "(SELECT id FROM threads WHERE slug='".concat(slugOrId, "')"); // console.log(threadId);

                pathSortRule = queryParams.desc ? 'pid.parent_id DESC, pathtopost ASC' : 'pathtopost ASC';
                idSortRule = queryParams.desc ? 'id DESC' : 'id ASC';

                if (!(queryParams.since && !queryParams.desc)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                    JOIN (\n                        SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1:raw AND pathtopost[1] > (SELECT pathtopost[1] FROM posts WHERE id=$2)\n                        ORDER BY $3:raw LIMIT $4\n                    ) AS pid\n                    ON (thread=$1:raw AND pid.parent_id=pathtopost[1])\n                    ORDER BY $5:raw\n                    ", [threadId, queryParams.since, idSortRule, queryParams.limit, pathSortRule]));

              case 8:
                if (!(queryParams.since && queryParams.desc)) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt("return", _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                    JOIN (\n                        SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1:raw AND pathtopost[1] < (SELECT pathtopost[1] FROM posts WHERE id=$2)\n                        ORDER BY $3:raw LIMIT $4\n                    ) AS pid\n                    ON (thread=$1:raw AND pid.parent_id=pathtopost[1])\n                    ORDER BY $5:raw\n                    ", [threadId, queryParams.since, idSortRule, queryParams.limit, pathSortRule]));

              case 12:
                if (queryParams.since) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt("return", _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                    JOIN (\n                        SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1:raw\n                        ORDER BY $3:raw LIMIT $4\n                    ) AS pid\n                    ON (thread=$1:raw AND pid.parent_id=pathtopost[1])\n                    ORDER BY $5:raw\n                    ", [threadId, queryParams.since, idSortRule, queryParams.limit, pathSortRule]));

              case 14:
                _context4.next = 21;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                console.log('-----------------------');
                console.log('Error in tree sort');
                console.log(_context4.t0);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16]]);
      }));

      function parentTreeSort(_x8, _x9, _x10) {
        return _parentTreeSort.apply(this, arguments);
      }

      return parentTreeSort;
    }()
  }]);

  return PostModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PostModel());

/***/ }),

/***/ "./forum/server/models/ServiceModel.js":
/*!*********************************************!*\
  !*** ./forum/server/models/ServiceModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./forum/server/modules/DataBaseModule.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ServiceModel =
/*#__PURE__*/
function () {
  function ServiceModel() {
    _classCallCheck(this, ServiceModel);
  }

  _createClass(ServiceModel, [{
    key: "countAll",
    value: function () {
      var _countAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var forum, post, thread, user, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one('SELECT COUNT(*) FROM forums');

              case 2:
                forum = _context.sent;
                _context.next = 5;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one('SELECT COUNT(*) FROM posts');

              case 5:
                post = _context.sent;
                _context.next = 8;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one('SELECT COUNT(*) FROM threads');

              case 8:
                thread = _context.sent;
                _context.next = 11;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one('SELECT COUNT(*) FROM users');

              case 11:
                user = _context.sent;
                result = {
                  "forum": parseInt(forum.count),
                  "post": parseInt(post.count),
                  "thread": parseInt(thread.count),
                  "user": parseInt(user.count)
                };
                return _context.abrupt("return", result);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function countAll() {
        return _countAll.apply(this, arguments);
      }

      return countAll;
    }()
  }, {
    key: "clearAll",
    value: function () {
      var _clearAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var forum, post, thread, user, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].none('TRUNCATE TABLE forums CASCADE');

              case 2:
                forum = _context2.sent;
                _context2.next = 5;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].none('TRUNCATE TABLE posts CASCADE');

              case 5:
                post = _context2.sent;
                _context2.next = 8;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].none('TRUNCATE TABLE threads CASCADE');

              case 8:
                thread = _context2.sent;
                _context2.next = 11;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].none('TRUNCATE TABLE users CASCADE');

              case 11:
                user = _context2.sent;
                result = {
                  "forum": forum,
                  "post": post,
                  "thread": thread,
                  "user": user
                };
                return _context2.abrupt("return", result);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clearAll() {
        return _clearAll.apply(this, arguments);
      }

      return clearAll;
    }()
  }]);

  return ServiceModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ServiceModel());

/***/ }),

/***/ "./forum/server/models/ThreadModel.js":
/*!********************************************!*\
  !*** ./forum/server/models/ThreadModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./forum/server/modules/DataBaseModule.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ThreadModel =
/*#__PURE__*/
function () {
  function ThreadModel() {
    _classCallCheck(this, ThreadModel);
  }

  _createClass(ThreadModel, [{
    key: "createNewThread",
    value: function () {
      var _createNewThread = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(columns, values) {
        var c, v, i, _i, query;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                c = '(';
                v = '(';

                for (i = 0; i < columns.length; i++) {
                  c += columns[i];

                  if (i !== columns.length - 1) {
                    c += ', ';
                  }
                }

                c += ')';

                for (_i = 0; _i < values.length; _i++) {
                  v += '$' + (_i + 1).toString();

                  if (_i !== columns.length - 1) {
                    v += ', ';
                  }
                }

                v += ')';
                _context.prev = 6;
                query = 'INSERT INTO threads ' + c + ' VALUES ' + v + " ON CONFLICT DO NOTHING RETURNING *";
                _context.next = 10;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone(query, values);

              case 10:
                return _context.abrupt("return", _context.sent);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING THREAD');
                console.log(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 13]]);
      }));

      function createNewThread(_x, _x2) {
        return _createNewThread.apply(this, arguments);
      }

      return createNewThread;
    }()
  }, {
    key: "getThreadBySlug",
    value: function getThreadBySlug(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM threads WHERE slug=$1', [slug]);
    }
  }, {
    key: "getThreadById",
    value: function getThreadById(id) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM threads WHERE id=$1', [id]);
    }
  }, {
    key: "getThreadsByForumSlug",
    value: function () {
      var _getThreadsByForumSlug = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(forumSlug, queryParams) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                queryParams.desc = queryParams.desc === 'true';

                if (!(queryParams.since && !queryParams.desc)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM threads WHERE forum=$1 AND "created">=$2 ORDER BY $3:raw LIMIT $4', [forumSlug, queryParams.since, queryParams.desc ? '"created" DESC' : '"created" ASC', queryParams.limit]);

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 8:
                if (!(queryParams.since && queryParams.desc)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 11;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM threads WHERE forum=$1 AND "created"<=$2 ORDER BY $3:raw LIMIT $4', [forumSlug, queryParams.since, queryParams.desc ? '"created" DESC' : '"created" ASC', queryParams.limit]);

              case 11:
                return _context2.abrupt("return", _context2.sent);

              case 14:
                if (queryParams.since) {
                  _context2.next = 18;
                  break;
                }

                _context2.next = 17;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM threads WHERE forum=$1 ORDER BY $2:raw LIMIT $3', [forumSlug, queryParams.desc ? '"created" DESC' : '"created" ASC', queryParams.limit]);

              case 17:
                return _context2.abrupt("return", _context2.sent);

              case 18:
                _context2.next = 25;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN getThreadsByForumSlug');
                console.log(_context2.t0);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 20]]);
      }));

      function getThreadsByForumSlug(_x3, _x4) {
        return _getThreadsByForumSlug.apply(this, arguments);
      }

      return getThreadsByForumSlug;
    }()
  }, {
    key: "incrementVotesBySlug",
    value: function incrementVotesBySlug(slug, voice) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one('UPDATE threads SET votes = votes + $2 WHERE slug=$1 RETURNING *', [slug, voice]);
    }
  }, {
    key: "incrementVotesById",
    value: function incrementVotesById(id, voice) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one('UPDATE threads SET votes = votes + $2 WHERE id=$1 RETURNING *', [id, voice]);
    }
  }, {
    key: "updateThread",
    value: function updateThread(slug, columns, keyValues) {
      var query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].helpers.update(keyValues, columns, {
        table: 'threads'
      }, null, {
        emptyUpdate: 'conflict'
      }) + " WHERE \"slug\" = \'" + slug + "\' RETURNING *";
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone(query);
    }
  }]);

  return ThreadModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ThreadModel());

/***/ }),

/***/ "./forum/server/models/UserModel.js":
/*!******************************************!*\
  !*** ./forum/server/models/UserModel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./forum/server/modules/DataBaseModule.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PS = __webpack_require__(/*! pg-promise */ "pg-promise").PreparedStatement;

var getNicknameStatement = new PS('get-nick', 'SELECT nickname FROM users WHERE nickname=$1');

var UserModel =
/*#__PURE__*/
function () {
  function UserModel() {
    _classCallCheck(this, UserModel);
  }

  _createClass(UserModel, [{
    key: "getUserByNickname",
    value: function getUserByNickname(nickname) {
      // oneOrNone возвращает нул если нет строк
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM users WHERE nickname=$1', [nickname]);
    }
  }, {
    key: "getUserByNicknameOrEmail",
    value: function getUserByNicknameOrEmail(nick, mail) {
      // можно как-то не проходиться по всей таблице, а останавливатся как только нашли 1 вхождение
      var nickname = nick || '';
      var email = mail || ''; // manyOrNone возвращает пустой массив если нет строк

      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM users WHERE nickname=$1 OR email=$2', [nickname, email]);
    }
  }, {
    key: "createNewUser",
    value: function () {
      var _createNewUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var newUserData,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newUserData = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
                _context.prev = 1;
                _context.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('INSERT INTO users (nickname, fullname, about, email) VALUES ($1, $2, $3 ,$4) ON CONFLICT DO NOTHING RETURNING *', newUserData);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING USER');
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function createNewUser() {
        return _createNewUser.apply(this, arguments);
      }

      return createNewUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(nickname, columns, keyValues) {
        var query;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].helpers.update(keyValues, columns, {
                  table: 'users'
                }, null, {
                  emptyUpdate: 'conflict'
                }) + " WHERE \"nickname\" = \'" + nickname + "\' RETURNING *";
                _context2.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone(query);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function updateUser(_x, _x2, _x3) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }() // казалось бы масло малсляное, но это нужно чтобы получить имя именно так как оно было заисано

    /*
    казалось бы масло масляное, но это нужно чтобы получить
    имя так как оно было записано в таблице users (не в верхнем или нижнем регистрах)
    */

  }, {
    key: "getUserNickname",
    value: function getUserNickname(nickname) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone(getNicknameStatement, [nickname]);
    }
  }]);

  return UserModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserModel());

/***/ }),

/***/ "./forum/server/models/VoteModel.js":
/*!******************************************!*\
  !*** ./forum/server/models/VoteModel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./forum/server/modules/DataBaseModule.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var VoteModel =
/*#__PURE__*/
function () {
  function VoteModel() {
    _classCallCheck(this, VoteModel);
  }

  _createClass(VoteModel, [{
    key: "vote",
    value: function () {
      var _vote = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(voice, threadId, nickname) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("INSERT INTO votes (voice, thread, nickname) VALUES ($1, $2, (SELECT nickname FROM users WHERE nickname='".concat(nickname, "')) ON CONFLICT ON CONSTRAINT uniqueThreadNickname DO \n            UPDATE SET voice=$1 WHERE votes.voice<>$1 RETURNING *, (xmax::text::int > 0) as existed"), [voice, threadId]);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING USER');
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function vote(_x, _x2, _x3) {
        return _vote.apply(this, arguments);
      }

      return vote;
    }()
  }]);

  return VoteModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new VoteModel());

/***/ }),

/***/ "./forum/server/modules/DataBaseModule.js":
/*!************************************************!*\
  !*** ./forum/server/modules/DataBaseModule.js ***!
  \************************************************/
/*! exports provided: pgp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgp", function() { return pgp; });
var pgp = __webpack_require__(/*! pg-promise */ "pg-promise")();
var dbOptions = {
  host: 'localhost',
  port: 5432,
  database: 'forum',
  user: 'ermakforum',
  password: '123'
};
var dbInstance = pgp(dbOptions);
/* harmony default export */ __webpack_exports__["default"] = (dbInstance);

/***/ }),

/***/ "./forum/server/routers/ForumRoutes.js":
/*!*********************************************!*\
  !*** ./forum/server/routers/ForumRoutes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/ForumController.js */ "./forum/server/controllers/ForumController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function forumRouter(_x, _x2) {
  return _forumRouter.apply(this, arguments);
}

function _forumRouter() {
  _forumRouter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(fastify, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fastify.post('/api/forum/create', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForum);
            fastify.post('/api/forum/:slug/create', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_0__["default"].createThreadInForum);
            fastify.get('/api/forum/:slug/details', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDetails);
            fastify.get('/api/forum/:slug/threads', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getThreads);
            fastify.get('/api/forum/:slug/users', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUsers);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _forumRouter.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (forumRouter);

/***/ }),

/***/ "./forum/server/routers/PostRoutes.js":
/*!********************************************!*\
  !*** ./forum/server/routers/PostRoutes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/PostController.js */ "./forum/server/controllers/PostController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function postRouter(_x, _x2) {
  return _postRouter.apply(this, arguments);
}

function _postRouter() {
  _postRouter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(fastify, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fastify.get('/api/post/:id/details', _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDetails);
            fastify.post('/api/post/:id/details', _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateDetails);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _postRouter.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (postRouter);

/***/ }),

/***/ "./forum/server/routers/ServiceRoutes.js":
/*!***********************************************!*\
  !*** ./forum/server/routers/ServiceRoutes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/ServiceController.js */ "./forum/server/controllers/ServiceController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function serviceRouter(_x, _x2) {
  return _serviceRouter.apply(this, arguments);
}

function _serviceRouter() {
  _serviceRouter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(fastify, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fastify.get('/api/service/status', _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_0__["default"].countAll); // fastify.delete('/api/service/clear', ServiceController.clearAll);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _serviceRouter.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (serviceRouter);

/***/ }),

/***/ "./forum/server/routers/ThreadRoutes.js":
/*!**********************************************!*\
  !*** ./forum/server/routers/ThreadRoutes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/ThreadController.js */ "./forum/server/controllers/ThreadController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function threadRouter(_x, _x2) {
  return _threadRouter.apply(this, arguments);
}

function _threadRouter() {
  _threadRouter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(fastify, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fastify.post('/api/thread/:slug_or_id/create', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_0__["default"].createPost);
            fastify.post('/api/thread/:slug_or_id/vote', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_0__["default"].voteForThread);
            fastify.get('/api/thread/:slug_or_id/details', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDetails);
            fastify.get('/api/thread/:slug_or_id/posts', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPosts);
            fastify.post('/api/thread/:slug_or_id/details', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateThread);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _threadRouter.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (threadRouter);

/***/ }),

/***/ "./forum/server/routers/UserRoutes.js":
/*!********************************************!*\
  !*** ./forum/server/routers/UserRoutes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/UserController.js */ "./forum/server/controllers/UserController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function userRouter(_x, _x2) {
  return _userRouter.apply(this, arguments);
}

function _userRouter() {
  _userRouter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(fastify, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fastify.post('/api/user/:nickname/create', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_0__["default"].createUser);
            fastify.post('/api/user/:nickname/profile', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateUser);
            fastify.get('/api/user/:nickname/profile', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUser);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _userRouter.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),

/***/ "./forum/server/utils.js":
/*!*******************************!*\
  !*** ./forum/server/utils.js ***!
  \*******************************/
/*! exports provided: harvestColumns, harvestValues, harvestKeyValues, idToInt, valStr, constructPathString, forumSerializer, createPaireQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestColumns", function() { return harvestColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestValues", function() { return harvestValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestKeyValues", function() { return harvestKeyValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idToInt", function() { return idToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valStr", function() { return valStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructPathString", function() { return constructPathString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forumSerializer", function() { return forumSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPaireQuery", function() { return createPaireQuery; });
var harvestColumns = function harvestColumns(data) {
  var keys = [];

  var _arr = Object.keys(data);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (data[key] !== '') {
      keys.push(key);
    }
  }

  return keys;
};
var harvestValues = function harvestValues(data) {
  var values = [];

  var _arr2 = Object.values(data);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var value = _arr2[_i2];

    if (value !== '') {
      values.push(value);
    }
  }

  return values;
};
var harvestKeyValues = function harvestKeyValues(data) {
  var keyValues = {};

  var _arr3 = Object.keys(data);

  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    var key = _arr3[_i3];

    if (data[key] !== '') {
      keyValues[key] = data[key];
    }
  }

  return keyValues;
};
var idToInt = function idToInt(data) {
  for (var i = 0; i < data.length; i++) {
    data[i].id = parseInt(data[i].id);
  }

  return data;
};
var valStr = function valStr(arrayOfPostObjects) {
  // let resultQuery = `WITH post_author AS (
  //     SELECT nickname FROM users WHERE nickname=${nickname}
  //    ) `;
  var resultQuery = "";

  for (var i = 0; i < arrayOfPostObjects.length; i++) {
    var valuesInArray = harvestValues(arrayOfPostObjects[i]);
    var val = " (";
    val += "(SELECT nickname FROM users WHERE nickname=".concat("'" + valuesInArray[0] + "'", "), ");

    for (var j = 1; j < valuesInArray.length; j++) {
      if (j !== 2) {
        val += "'" + valuesInArray[j] + "'";
      } else {
        val += valuesInArray[j];
      }

      if (j !== valuesInArray.length - 1) {
        val += ', ';
      }
    }

    resultQuery += val;

    if (i === arrayOfPostObjects.length - 1) {
      resultQuery += ") ";
    } else {
      resultQuery += "), ";
    }
  }

  return resultQuery;
};
var constructPathString = function constructPathString(pathArray) {
  var result = "{";

  for (var i = 0; i < pathArray.length; i++) {
    result += pathArray[i];

    if (i !== pathArray.length - 1) {
      result += ", ";
    }
  }

  result += "}";
  return result;
};
var forumSerializer = function forumSerializer(forumsArray) {
  var result = []; // console.log("??????????????????");
  // console.log("###")

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = forumsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var forum = _step.value;
      // console.log("###"+forum.about);
      var serializedForum = {
        "about": forum.about,
        "email": forum.email,
        "fullname": forum.fullname,
        "nickname": forum.nickname
      };
      result.push(serializedForum);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};
var createPaireQuery = function createPaireQuery(pairs) {
  var resultQuery = "";

  for (var i = 0; i < pairs.length; i++) {
    resultQuery += "((SELECT nickname FROM users WHERE nickname='".concat(pairs[i][0], "'), '").concat(pairs[i][1], "')");

    if (i !== pairs.length - 1) {
      resultQuery += ", ";
    }
  }

  return resultQuery;
};

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fastify");

/***/ }),

/***/ "pg-promise":
/*!*****************************!*\
  !*** external "pg-promise" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg-promise");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXF1ZXN0IiwicmVwbHkiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJmb3J1bVVzZXJQYWlyVmFsdWVzIiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwibmV3UG9zdHMiLCJib2R5IiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImF1dGhvciIsInBvc3QiLCJwYXJlbnQiLCJQb3N0TW9kZWwiLCJnZXRQb3N0QnlJZEFuZFRocmVhZElkIiwiaWQiLCJwYXJlbnRQb3N0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZm9ydW0iLCJnZXRJZEZvclBvc3QiLCJwb3N0SWQiLCJjcmVhdGVkIiwidGhyZWFkIiwicGFyc2VJbnQiLCJuZXh0dmFsIiwiY29uc3RydWN0UGF0aFRvUG9zdCIsInBhdGgiLCJwYXRodG9wb3N0IiwicmVzdWx0IiwiY29sdW1ucyIsInZhbHVlc0luU3RyaW5nUXVlcnkiLCJ2YWxTdHIiLCJxdWVyeSIsImNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSIsImFkZGVkUG9zdHMiLCJwYWlyQ29sdW1ucyIsInN0cmluZ1BhaXJWYWx1ZXMiLCJjcmVhdGVQYWlyZVF1ZXJ5IiwicGFpclF1ZXJ5IiwiRm9ydW1Nb2RlbCIsImluY3JlbWVudFBvc3RzIiwiY3JlYXRlRm9ydW1Vc2VyUGFpckJ5UXVlcnkiLCJpZEFycmF5IiwiaWRTdHJpbmciLCJjb25zdHJ1Y3RQYXRoU3RyaW5nIiwiZ2V0UGF0aFRvUG9zdCIsInBhdGhTdHJpbmciLCJGb3J1bUNvbnRyb2xsZXIiLCJ1c2VyIiwic2x1ZyIsInRpdGxlIiwiVXNlck1vZGVsIiwiZ2V0VXNlck5pY2tuYW1lIiwibmV3Rm9ydW1EYXRhIiwibmlja25hbWUiLCJjcmVhdGVOZXdGb3J1bSIsImdldEZvcnVtQnlTbHVnIiwiZXhzaXN0aW5nRm9ydW0iLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmb3J1bVNsdWciLCJnZXRGb3J1bVNsdWciLCJrZXlWYWx1ZXMiLCJoYXJ2ZXN0S2V5VmFsdWVzIiwiaGFydmVzdENvbHVtbnMiLCJpIiwidmFsdWVzIiwiaGFydmVzdFZhbHVlcyIsIlRocmVhZE1vZGVsIiwiY3JlYXRlTmV3VGhyZWFkIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsImdldFRocmVhZHNCeUZvcnVtU2x1ZyIsImlkVG9JbnQiLCJtZXNhZ2UiLCJkZXNjIiwiZ2V0VXNlcnMiLCJmb3J1bVNlcmlhbGl6ZXIiLCJQb3N0Q29udHJvbGxlciIsImdldFBvc3RCeUlkIiwicG9zdERhdGEiLCJyZWxhdGVkVG8iLCJyZWxhdGVkRW50aXRpZXMiLCJzcGxpdCIsInJlbGF0ZWRFbnRpdHkiLCJnZXRVc2VyQnlOaWNrbmFtZSIsImVudGl0eSIsImdldFRocmVhZEJ5SWQiLCJuZXdEYXRhIiwiT2JqZWN0IiwidXBkYXRlUG9zdCIsIlNlcnZpY2VDb250cm9sbGVyIiwiU2VydmljZU1vZGVsIiwiY291bnRBbGwiLCJjbGVhckFsbCIsInR5cGUiLCJUaHJlYWRDb250cm9sbGVyIiwic2x1Z09ySWQiLCJ0ZXN0Iiwidm9pY2VWYWx1ZSIsInZvaWNlIiwiVm90ZU1vZGVsIiwidm90ZSIsInZvdGVkRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJpc0lkIiwic29ydCIsImZsYXRTb3J0IiwidHJlZVNvcnQiLCJwYXJlbnRUcmVlU29ydCIsIm1hcCIsInJlc1Bvc3QiLCJ1cGRhdGVUaHJlYWQiLCJVc2VyQ29udHJvbGxlciIsImVtYWlsIiwibmV3VXNlckRhdGEiLCJjcmVhdGVOZXdVc2VyIiwiZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIiwiZXhpc3RpbmdVc2VyIiwidXBkYXRlVXNlciIsImZhc3RpZnkiLCJyZXF1aXJlIiwibG9nZ2VyIiwicmVnaXN0ZXIiLCJ1c2VyUm91dGVyIiwiZm9ydW1Sb3V0ZXIiLCJ0aHJlYWRSb3V0ZXIiLCJwb3N0Um91dGVyIiwic2VydmljZVJvdXRlciIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFkZENvbnRlbnRUeXBlUGFyc2VyIiwicGFyc2VBcyIsInJlcSIsImRvbmUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwidW5kZWZpbmVkIiwibGlzdGVuIiwiYWRkcmVzcyIsImRiSW5zdGFuY2UiLCJvbmVPck5vbmUiLCJjbnQiLCJzaW5jZSIsInBncCIsImFzIiwiZm9ybWF0IiwibWFueU9yTm9uZSIsInRvU3RyaW5nIiwibGltaXQiLCJQUyIsIlByZXBhcmVkU3RhdGVtZW50IiwiZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50IiwiYyIsInYiLCJvbmUiLCJ0aHJlYWRJZCIsInBhdGhTb3J0UnVsZSIsImlkU29ydFJ1bGUiLCJjb3VudCIsIm5vbmUiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsImdldE5pY2tuYW1lU3RhdGVtZW50IiwibmljayIsIm1haWwiLCJkYk9wdGlvbnMiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsIm9wdGlvbnMiLCJjcmVhdGVGb3J1bSIsImNyZWF0ZVRocmVhZEluRm9ydW0iLCJnZXQiLCJnZXREZXRhaWxzIiwiZ2V0VGhyZWFkcyIsInVwZGF0ZURldGFpbHMiLCJjcmVhdGVQb3N0Iiwidm90ZUZvclRocmVhZCIsImdldFBvc3RzIiwiY3JlYXRlVXNlciIsImdldFVzZXIiLCJrZXlzIiwia2V5IiwidmFsdWUiLCJhcnJheU9mUG9zdE9iamVjdHMiLCJyZXN1bHRRdWVyeSIsInZhbHVlc0luQXJyYXkiLCJ2YWwiLCJqIiwicGF0aEFycmF5IiwiZm9ydW1zQXJyYXkiLCJzZXJpYWxpemVkRm9ydW0iLCJhYm91dCIsImZ1bGxuYW1lIiwicGFpcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxpQkFBZ0JDLE9BQWhCLEVBQXlCQyxLQUF6QixFQUFnQ0MsVUFBaEM7QUFBQTs7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNsRCxTQUFPakwsTUFBUDtBQUNILENBZk07QUFpQkEsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVMkssS0FBVixFQUFpQjtBQUM3QyxNQUFJVCxXQUFXLEtBQWY7O0FBQ0EsT0FBSyxJQUFJbkksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRJLEtBQUssQ0FBQzVNLE1BQTFCLEVBQWtDZ0UsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ21JLGVBQVcsMkRBQW9EUyxLQUFLLENBQUM1SSxDQUFELENBQUwsQ0FBUyxDQUFULENBQXBELGtCQUF1RTRJLEtBQUssQ0FBQzVJLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBdkUsT0FBWDs7QUFDQSxRQUFJQSxDQUFDLEtBQUs0SSxLQUFLLENBQUM1TSxNQUFOLEdBQWUsQ0FBekIsRUFBNEI7QUFDeEJtTSxpQkFBVyxRQUFYO0FBQ0g7QUFDSjs7QUFDRCxTQUFPQSxXQUFQO0FBQ0gsQ0FUTSxDOzs7Ozs7Ozs7OztBQ3BHUCwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZm9ydW0vc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCB7IHZhbFN0ciwgY29uc3RydWN0UGF0aFN0cmluZywgY3JlYXRlUGFpcmVRdWVyeSB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdHNMb29wID0gYXN5bmMgZnVuY3Rpb24gKHJlcXVlc3QsIHJlcGx5LCB0aHJlYWREYXRhKSB7XG4gICAgY29uc3QgcG9zdHNWYWx1ZXMgPSBbXTtcbiAgICBjb25zdCBmb3J1bVVzZXJQYWlyVmFsdWVzID0gW107XG4gICAgY29uc3QgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgIGNvbnN0IG5ld1Bvc3RzID0gcmVxdWVzdC5ib2R5O1xuXG4gICAgaWYgKCFuZXdQb3N0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDEpLnNlbmQoW10pO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhvciA9IG5ld1Bvc3RzWzBdLmF1dGhvcjtcbiAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQuyDQv9C10YDQtdC00LDQvSBpZCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YJcbiAgICAgICAgaWYgKHBvc3QucGFyZW50KSB7XG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LXRgdGC0Ywg0LvQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YIg0LIg0YHQuNGB0YLQtdC80LUgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFBvc3QgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZChwb3N0LnBhcmVudCwgdGhyZWFkRGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA5KS5zZW5kKHsgbWVzc2FnZSA6ICdubyBwYXJlbnQgcG9zdHMnIH0pOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3N0LnBhcmVudCA9IHBhcmVudFBvc3QuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIFBBUkVOVFMnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGO0LfQtdGA0LAg0LIg0YTQvtGA0YPQvCBcbiAgICAgICAgZm9ydW1Vc2VyUGFpclZhbHVlcy5wdXNoKFtwb3N0LmF1dGhvciwgdGhyZWFkRGF0YS5mb3J1bV0pO1xuICAgICAgICAvLyBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpO1xuXG5cbiAgICAgICAgLy8gY29uc3QgcGFpciA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBwb3N0LmF1dGhvcik7ICAgICAgICBcbiAgICAgICAgY29uc3QgcG9zdElkID0gYXdhaXQgUG9zdE1vZGVsLmdldElkRm9yUG9zdCgpO1xuICAgICAgICBwb3N0LmNyZWF0ZWQgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIHBvc3QudGhyZWFkID0gdGhyZWFkRGF0YS5pZDtcbiAgICAgICAgcG9zdC5mb3J1bSA9IHRocmVhZERhdGEuZm9ydW07XG4gICAgICAgIHBvc3QuaWQgPSBwYXJzZUludChwb3N0SWQubmV4dHZhbCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBhd2FpdCBjb25zdHJ1Y3RQYXRoVG9Qb3N0KHBvc3QpO1xuICAgICAgICBwb3N0LnBhdGh0b3Bvc3QgPSBwYXRoO1xuICAgICAgICBwb3N0c1ZhbHVlcy5wdXNoKHBvc3QpO1xuICAgIH1cblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQv9C+0YHRglxuICAgIGNvbnN0IHJlc3VsdCA9IFtdOyBcbiAgICBjb25zdCBjb2x1bW5zID0gYChhdXRob3IsIFwibWVzc2FnZVwiLCBwYXJlbnQsIFwiY3JlYXRlZFwiLCB0aHJlYWQsIGZvcnVtLCBpZCwgcGF0aHRvcG9zdClgXG4gICAgY29uc3QgdmFsdWVzSW5TdHJpbmdRdWVyeSA9IHZhbFN0cihwb3N0c1ZhbHVlcyk7XG4gICAgY29uc3QgcXVlcnkgPSBgSU5TRVJUIElOVE8gcG9zdHMgYCArIGNvbHVtbnMgKyBgIFZBTFVFUyBgICsgdmFsdWVzSW5TdHJpbmdRdWVyeSArIGAgUkVUVVJOSU5HICpgO1xuICAgIGNvbnN0IGFkZGVkUG9zdHMgPSBhd2FpdCBQb3N0TW9kZWwuY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5KHF1ZXJ5KTtcbiAgICBpZiAoYWRkZWRQb3N0cykge1xuICAgICAgICBmb3IgKGxldCBwb3N0IG9mIGFkZGVkUG9zdHMpIHtcbiAgICAgICAgICAgIHBvc3QuaWQgPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHBvc3QudGhyZWFkID0gcGFyc2VJbnQocG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwb3N0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcGFpckNvbHVtbnMgPSBgKHVzZXJuaWNrbmFtZSwgZm9ydW1zbHVnKWA7XG4gICAgICAgIGNvbnN0IHN0cmluZ1BhaXJWYWx1ZXMgPSBjcmVhdGVQYWlyZVF1ZXJ5KGZvcnVtVXNlclBhaXJWYWx1ZXMpO1xuICAgICAgICBjb25zdCBwYWlyUXVlcnkgPSBgSU5TRVJUIElOVE8gZm9ydW11c2VycyBgICsgcGFpckNvbHVtbnMgKyBgIFZBTFVFUyBgICsgc3RyaW5nUGFpclZhbHVlcyArIGAgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVfZm9ydW11c2VyX3BhaXIgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgIC8vIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBhdXRob3IpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRQb3N0cyh0aHJlYWREYXRhLmZvcnVtLCBuZXdQb3N0cy5sZW5ndGgpO1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyQnlRdWVyeShwYWlyUXVlcnkpO1xuICAgICAgICAgICAgLy8gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAxKS5zZW5kKHJlc3VsdCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoVG9Qb3N0ID0gYXN5bmMgZnVuY3Rpb24gKHBvc3QpIHtcbiAgICBjb25zdCBpZEFycmF5ID0gW107XG4gICAgaWRBcnJheS5wdXNoKHBvc3QuaWQpO1xuICAgIGNvbnN0IGlkU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhpZEFycmF5KTtcbiAgICBsZXQgcGF0aHRvcG9zdDtcbiAgICBpZiAoIXBvc3QucGFyZW50KSB7XG4gICAgICAgIHBhdGh0b3Bvc3QgPSBwb3N0LnBhdGh0b3Bvc3QgfHwgaWRTdHJpbmc7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgUG9zdE1vZGVsLmdldFBhdGhUb1Bvc3QocG9zdC5wYXJlbnQpO1xuICAgICAgICBwYXRoLnBhdGh0b3Bvc3QucHVzaChwb3N0LmlkKTtcbiAgICAgICAgY29uc3QgcGF0aFN0cmluZyA9IGNvbnN0cnVjdFBhdGhTdHJpbmcocGF0aC5wYXRodG9wb3N0KTtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBwYXRoU3RyaW5nIHx8IGlkU3RyaW5nXG4gICAgfVxuICAgIHJldHVybiBwYXRodG9wb3N0O1xufSIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50LCBmb3J1bVNlcmlhbGl6ZXIgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5cblxuY2xhc3MgRm9ydW1Db250cm9sbGVyIHtcblxuXHRhc3luYyBjcmVhdGVGb3J1bSAocmVxdWVzdCwgcmVwbHkpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXHRcdGxldCB1c2VyID0gcmVxdWVzdC5ib2R5Wyd1c2VyJ107XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcXVlc3QuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxdWVzdC5ib2R5Wyd0aXRsZSddO1xuXG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHVzZXIpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0ZvcnVtRGF0YSA9IFtcblx0XHRcdHNsdWcsXG5cdFx0XHR0aXRsZSxcblx0XHRcdHVzZXIubmlja25hbWVcblx0XHRdXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVOZXdGb3J1bShuZXdGb3J1bURhdGEpO1xuXG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0cmV0dXJuIHJlcGx5LnN0YXR1cygyMDEpLnNlbmQocmVzdWx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ0ZvcnVtO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nRm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpO1xuXHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDQwOSkuc2VuZChleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRnZXREZXRhaWxzIChyZXF1ZXN0LCByZXBseSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcXVlc3QucGFyYW1zWydzbHVnJ107XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKVxuXHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdmb3J1bSBnZXREZXRhaWxzJyxkYXRhKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRhc3luYyBjcmVhdGVUaHJlYWRJbkZvcnVtIChyZXF1ZXN0LCByZXBseSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdFx0bGV0IGF1dGhvciA9IHJlcXVlc3QuYm9keVsnYXV0aG9yJ107XG5cdFx0bGV0IGZvcnVtU2x1ZyA9IHJlcXVlc3QucGFyYW1zWydzbHVnJ107XG5cdFx0bGV0IGZvcnVtO1xuXG4gICAgICAgIHRyeSB7XG5cdFx0XHRhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcik7XG4gICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Zm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxdWVzdC5ib2R5KTtcblx0XHRrZXlWYWx1ZXNbJ2F1dGhvciddID0gYXV0aG9yLm5pY2tuYW1lO1xuXHRcdGtleVZhbHVlc1snZm9ydW0nXSA9IGZvcnVtLnNsdWc7XG5cdFx0XG5cdFx0Y29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKGtleVZhbHVlcyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY29sdW1uc1tpXSA9PT0gJ21lc3NhZ2UnIHx8IGNvbHVtbnNbaV0gPT09ICdjcmVhdGVkJykge1xuXHRcdFx0XHRjb2x1bW5zW2ldID0gJ1wiJyArIGNvbHVtbnNbaV0gKyAnXCInO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCB2YWx1ZXMgPSBoYXJ2ZXN0VmFsdWVzKGtleVZhbHVlcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuY3JlYXRlTmV3VGhyZWFkKGNvbHVtbnMsIHZhbHVlcyk7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtLnNsdWcsIGF1dGhvci5uaWNrbmFtZSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gY3JlYXRpbmcgcGFpcicpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRUaHJlYWRzKGZvcnVtLnNsdWcpO1xuXHRcdFx0XHRyZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDIwMSkuc2VuZChyZXN1bHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ1RocmVhZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhyZXF1ZXN0LmJvZHlbJ3NsdWcnXSk7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZC5pZCA9IHBhcnNlSW50KGV4c2lzdGluZ1RocmVhZC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoNDA5KS5zZW5kKGV4c2lzdGluZ1RocmVhZClcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRyAhISEhJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuIFxuXHRcblx0YXN5bmMgZ2V0VGhyZWFkcyAocmVxdWVzdCwgcmVwbHkpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcXVlc3QucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcXVlc3QucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZHNCeUZvcnVtU2x1ZyhzbHVnLCBxdWVyeVBhcmFtcyk7XG5cdFx0cmVzdWx0ID0gaWRUb0ludChyZXN1bHQpO1xuXHRcdGlmICghcmVzdWx0IHx8ICFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzYWdlIDogJ2NhbnQgZmluZCBmb3J1bScgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG5cblx0fVxuXG5cdGFzeW5jIGdldFVzZXJzIChyZXF1ZXN0LCByZXBseSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cblx0XHRjb25zdCBzbHVnID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWcnXTtcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxdWVzdC5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0cXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJztcblxuXHRcdGxldCByZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmdldFVzZXJzKHNsdWcsIHF1ZXJ5UGFyYW1zKTtcblxuXHRcdGlmICghcmVzdWx0IHx8ICFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzYWdlIDogJ2NhbnQgZmluZCBmb3J1bScgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gZm9ydW1TZXJpYWxpemVyKHJlc3VsdCk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2ZvcnVtIGdldFVzZXJzJyxyZXN1bHQpO1xuXHRcdHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG5cblx0fSBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Db250cm9sbGVyOyIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0VmFsdWVzLCBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcywgaWRUb0ludCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5cbmNsYXNzIFBvc3RDb250cm9sbGVyIHtcbiAgICBhc3luYyBnZXREZXRhaWxzIChyZXF1ZXN0LCByZXBseSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0Lm9yaWdpbmFsVXJsLCByZXF1ZXN0Lm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxdWVzdC5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGVkVG8gPSByZXF1ZXN0LnF1ZXJ5WydyZWxhdGVkJ107XG4gICAgICAgIGxldCBlbnRpdHk7XG4gICAgICAgIGlmIChyZWxhdGVkVG8pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRFbnRpdGllcyA9IHJlbGF0ZWRUby5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgcmVsYXRlZEVudGl0eSBvZiByZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3VzZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUocG9zdERhdGEuYXV0aG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdXRob3IgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3RocmVhZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ2ZvcnVtJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1Zyhwb3N0RGF0YS5mb3J1bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRpdHkuaWQgPSBwYXJzZUludChlbnRpdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvcnVtID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPSBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpO1xuICAgICAgICByZXN1bHQucG9zdCA9IHBvc3REYXRhO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncG9zdCBnZXREZXRhaWxzJyxyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcXVlc3QsIHJlcGx5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3Qub3JpZ2luYWxVcmwsIHJlcXVlc3QubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBwb3N0SWQgPSByZXF1ZXN0LnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcXVlc3QuYm9keTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgbmV3RGF0YS5tZXNzYWdlID09PSAnJykge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChwb3N0RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocG9zdERhdGEubWVzc2FnZSAhPT0gbmV3RGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC51cGRhdGVQb3N0KG5ld0RhdGEubWVzc2FnZSwgcG9zdElkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5EIFBPU1QnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA5KS5zZW5kKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gcGFyc2VJbnQocmVzdWx0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudCA/IHBhcnNlSW50KHJlc3VsdC5wYXJlbnQpIDogcmVzdWx0LnBhcmVudDsgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgXG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChwb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdENvbnRyb2xsZXI7IiwiaW1wb3J0IFNlcnZpY2VNb2RlbCBmcm9tICcuLi9tb2RlbHMvU2VydmljZU1vZGVsLmpzJztcblxuY2xhc3MgU2VydmljZUNvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY291bnRBbGwgKHJlcXVlc3QsIHJlcGx5KSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNvdW50QWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlIGNvdW50QWxsJyxyZXN1bHQpXG4gICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjbGVhckFsbCAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1QnLHJlcXVlc3QpO1xuXG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICBhd2FpdCBTZXJ2aWNlTW9kZWwuY2xlYXJBbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVwbHkudHlwZSgnYXBwbGljYXRpb24vanNvbicpLnN0YXR1cygyMDApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlQ29udHJvbGxlcjsiLCJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IFZvdGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvVm90ZU1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY3JlYXRlUG9zdHNMb29wIH0gZnJvbSAnLi9Db250cm9sbGVyVXRpbHMuanMnO1xuXG5jbGFzcyBUaHJlYWRDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNyZWF0ZVBvc3QgKHJlcXVlc3QsIHJlcGx5KXtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdC5vcmlnaW5hbFVybCwgcmVxdWVzdC5tZXRob2QpO1xuXG4gICAgICAgIGxldCBzbHVnT3JJZCA9IHJlcXVlc3QucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVQb3N0c0xvb3AocmVxdWVzdCxyZXBseSwgdGhyZWFkKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyB2b3RlRm9yVGhyZWFkIChyZXF1ZXN0LCByZXBseSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcXVlc3Qub3JpZ2luYWxVcmwsIHJlcXVlc3QubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcXVlc3QucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IHZvaWNlVmFsdWUgPSByZXF1ZXN0LmJvZHkudm9pY2U7XG5cbiAgICAgICAgbGV0IGF1dGhvciA9IHJlcXVlc3QuYm9keS5uaWNrbmFtZTtcblxuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIHNsdWcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2b3RlZERhdGEgPSBhd2FpdCBWb3RlTW9kZWwudm90ZSh2b2ljZVZhbHVlLCB0aHJlYWQuaWQsIGF1dGhvcik7XG5cbiAgICAgICAgaWYgKHZvdGVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZvdGVkRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgdm90ZWREYXRhLnZvaWNlID0gdm90ZWREYXRhLnZvaWNlID09PSAxID8gdm90ZWREYXRhLnZvaWNlICsgMSA6IHZvdGVkRGF0YS52b2ljZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmluY3JlbWVudFZvdGVzQnlJZCh0aHJlYWQuaWQsIHZvdGVkRGF0YS52b2ljZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGluY3JlbWVudGluZyB2b3RlcyBpbiB0aHJlYWQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChyZXN1bHQpO1xuICAgIH1cblxuICAgIGdldERldGFpbHMgKHJlcXVlc3QsIHJlcGx5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3Qub3JpZ2luYWxVcmwsIHJlcXVlc3QubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcXVlc3QucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhyZWFkIGdldERldGFpbHMnLCB0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQodGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZClcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHJlYWQgZ2V0RGV0YWlscycsIHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZCh0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UG9zdHMocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdC5vcmlnaW5hbFVybCwgcmVxdWVzdC5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXF1ZXN0LnF1ZXJ5KTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9IHF1ZXJ5UGFyYW1zWydkZXNjJ10gPT09ICd0cnVlJztcbiAgICAgICAgcXVlcnlQYXJhbXNbJ3NpbmNlJ10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snc2luY2UnXSk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXF1ZXN0LnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBsZXQgaXNJZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBpc0lkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzSWQgPSBmYWxzZVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ2ZsYXQnIHx8ICFxdWVyeVBhcmFtcy5zb3J0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwuZmxhdFNvcnQoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAndHJlZScpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC50cmVlU29ydChzbHVnT3JJZCwgaXNJZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdwYXJlbnRfdHJlZScpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5wYXJlbnRUcmVlU29ydChzbHVnT3JJZCwgaXNJZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRocmVhZCA9IGlzSWQgPyBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSkgOiBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcCggKHBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc1Bvc3QgPSB7fTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2F1dGhvciddID0gcG9zdC5hdXRob3I7XG4gICAgICAgICAgICByZXNQb3N0WydjcmVhdGVkJ10gPSBwb3N0LmNyZWF0ZWQ7XG4gICAgICAgICAgICByZXNQb3N0Wydmb3J1bSddID0gcG9zdC5mb3J1bTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2lkJ10gPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ21lc3NhZ2UnXSA9IHBvc3QubWVzc2FnZTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3BhcmVudCddID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzUG9zdFsndGhyZWFkJ10gPSBwYXJzZUludChwb3N0LnRocmVhZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNQb3N0O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRocmVhZCAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdC5vcmlnaW5hbFVybCwgcmVxdWVzdC5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcXVlc3QuYm9keTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQodGhyZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLnVwZGF0ZVRocmVhZCh0aHJlYWQuc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDkpLnNlbmQoeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZENvbnRyb2xsZXI7IiwiaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlVXNlciAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXF1ZXN0LnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgZW1haWwgPSByZXF1ZXN0LmJvZHlbJ2VtYWlsJ107XG4gICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgICAgICAgICAgbmlja25hbWUsXG4gICAgICAgICAgICByZXF1ZXN0LmJvZHlbJ2Z1bGxuYW1lJ10sXG4gICAgICAgICAgICByZXF1ZXN0LmJvZHlbJ2Fib3V0J10sXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAxKS5zZW5kKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdVc2VyO1xuICAgICAgICAgICAgdHJ5IHtcblx0XHRcdFx0ZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuaWNrbmFtZSwgZW1haWwpO1xuXHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDQwOSkuc2VuZChleGlzdGluZ1VzZXIpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuXG5cbiAgICBnZXRVc2VyIChyZXF1ZXN0LCByZXBseSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxdWVzdC5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSlcbiAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0VXNlcicsIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9ICBcblxuICAgIFxuICAgIGFzeW5jIHVwZGF0ZVVzZXIgKHJlcXVlc3QsIHJlcGx5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXF1ZXN0LnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcXVlc3QuYm9keTtcblxuICAgICAgICAvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQodXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC60LDQutC40LUt0YLQviDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L3QtSDQv9GD0YHRgtGL0LVcblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA5KS5zZW5kKHsgbWVzc2FnZSA6IFwiVXNlciB3aXRoIHN1Y2ggbmlja25hbWUgb3IgZW1haWwgYWxyZWFkeSBleGlzdHNcIiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyOyIsIi8vIGltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3QgZmFzdGlmeSA9IHJlcXVpcmUoJ2Zhc3RpZnknKSh7XG4gIGxvZ2dlcjogZmFsc2Vcbn0pO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMnO1xuaW1wb3J0IGZvcnVtUm91dGVyIGZyb20gJy4vcm91dGVycy9Gb3J1bVJvdXRlcy5qcyc7XG5pbXBvcnQgdGhyZWFkUm91dGVyIGZyb20gJy4vcm91dGVycy9UaHJlYWRSb3V0ZXMuanMnO1xuaW1wb3J0IHBvc3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1Bvc3RSb3V0ZXMuanMnO1xuaW1wb3J0IHNlcnZpY2VSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMnO1xuaW1wb3J0IFNlcnZpY2VNb2RlbCBmcm9tICcuL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5cbmZhc3RpZnkucmVnaXN0ZXIodXNlclJvdXRlcik7XG5mYXN0aWZ5LnJlZ2lzdGVyKGZvcnVtUm91dGVyKTtcbmZhc3RpZnkucmVnaXN0ZXIodGhyZWFkUm91dGVyKTtcbmZhc3RpZnkucmVnaXN0ZXIocG9zdFJvdXRlcik7XG5mYXN0aWZ5LnJlZ2lzdGVyKHNlcnZpY2VSb3V0ZXIpO1xuXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5cbmZhc3RpZnkucG9zdCgnL2FwaS9zZXJ2aWNlL2NsZWFyJywgYXN5bmMgKHJlcXVlc3QsIHJlcGx5KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdHRyeSB7ICAgXG5cdFx0YXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuXHRcdHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcblx0fVxuXHRyZXBseS50eXBlKCdhcHBsaWNhdGlvbi9qc29uJykuc3RhdHVzKDIwMCk7XG5cdHJldHVybiBudWxsO1xufSk7XG5cblxuZmFzdGlmeS5hZGRDb250ZW50VHlwZVBhcnNlcignYXBwbGljYXRpb24vanNvbicsIHsgcGFyc2VBczogJ3N0cmluZycgfSwgZnVuY3Rpb24gKHJlcSwgYm9keSwgZG9uZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoYm9keSlcbiAgICAgIGRvbmUobnVsbCwganNvbilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgIGVyci5zdGF0dXNDb2RlID0gNDAwXG4gICAgICBkb25lKG51bGwsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9KTtcblxuZmFzdGlmeS5saXN0ZW4ocG9ydCwgKGVycixhZGRyZXNzKSA9PiB7XG5cdGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG5cblxuXG5cbi8vIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbi8vIGFwcC51c2UoJy9hcGkvdXNlcicsIHVzZXJSb3V0ZXIpO1xuLy8gYXBwLnVzZSgnL2FwaS9mb3J1bScsIGZvcnVtUm91dGVyKTtcbi8vIGFwcC51c2UoJy9hcGkvdGhyZWFkJywgdGhyZWFkUm91dGVyKTtcbi8vIGFwcC51c2UoJy9hcGkvcG9zdCcsIHBvc3RSb3V0ZXIpO1xuLy8gYXBwLnVzZSgnL2FwaS9zZXJ2aWNlJywgc2VydmljZVJvdXRlcik7XG4vLyBhcHAuZ2V0KCcvJywgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbi8vIH0pXG5cblxuLy8gY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xuLy8gfSk7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgRm9ydW1Nb2RlbCB7XG5cbiAgICBnZXRGb3J1bUJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3Rm9ydW0gKG5ld0ZvcnVtRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtcyAoc2x1ZywgdGl0bGUsIFwidXNlclwiKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdGb3J1bURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3J1bVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBuaWNrbmFtZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VBUkNIJyxmb3J1bVNsdWcsIG5pY2tuYW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDEsXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQyKSlcbiAgICAgICAgICAgICAgICBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqYCwgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlRm9ydW1Vc2VyUGFpckJ5UXVlcnkocXVlcnkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NFQVJDSCcsZm9ydW1TbHVnLCBuaWNrbmFtZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VGhyZWFkcyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgdGhyZWFkcyA9IHRocmVhZHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFBvc3RzKHNsdWcsIGNudCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoYFVQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqYCwgW3NsdWcsY250XSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlcnMgKHNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzbHVnID0gYChTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPScke3NsdWd9JylgXG4gICAgICAgICAgICBsZXQgcXVlcnk7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxOnJhdyBBTkQgVS5uaWNrbmFtZT4kMlxuICAgICAgICAgICAgICAgIGAsW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDE6cmF3IEFORCBVLm5pY2tuYW1lPCQyXG4gICAgICAgICAgICAgICAgYCwgW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDE6cmF3YCwgW3NsdWddKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYCQxOnJhdyBcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnVS5uaWNrbmFtZSBERVNDJyA6ICdVLm5pY2tuYW1lIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgIFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBnZXRVc2VycycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Nb2RlbDsgIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5jb25zdCBQUyA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKS5QcmVwYXJlZFN0YXRlbWVudDtcblxuY29uc3QgZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50ID0gbmV3IFBTKCdnZXQtcG9zdCcsICdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxIEFORCB0aHJlYWQ9JDInKTtcblxuY2xhc3MgUG9zdE1vZGVsIHtcbiAgICBcbiAgICBjcmVhdGVOZXdQb3N0IChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYyArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGMgKz0gJyknO1xuXG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ICs9ICckJyArIChpKzEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHYgKz0gJyknO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyBwb3N0cyAnICsgYyArICcgVkFMVUVTICcgKyB2ICsgJyBSRVRVUk5JTkcgKic7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdQb3N0c0J5UXVlcnkgKHF1ZXJ5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAgYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKHF1ZXJ5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFBPU1QgTk8gQVVUSE9SJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3luYyB0cmFuc2FjdFRlc3QgKHF1ZXJ5KVxuXG4gICAgZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZCAoaWQsIHRocmVhZElkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQsIFtpZCwgdGhyZWFkSWRdKVxuICAgIH1cblxuICAgIGdldFBvc3RCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICBnZXRJZEZvclBvc3QgKCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoXCJTRUxFQ1QgbmV4dHZhbCgncG9zdHNfaWRfc2VxdWFuY2UnKVwiKTsgXG4gICAgfVxuXG4gICAgdXBkYXRlUG9zdCAobWVzc2FnZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgcG9zdHMgU0VUIFwiaXNFZGl0ZWRcIj1UUlVFLCBcIm1lc3NhZ2VcIj0kMSBXSEVSRSBpZD0kMiBSRVRVUk5JTkcgKicsIFttZXNzYWdlLGlkXSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aFRvUG9zdCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgXG4gICAgYXN5bmMgZmxhdFNvcnQgKHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSWQgPyBzbHVnT3JJZCA6IGAoU0VMRUNUIGlkIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPScke3NsdWdPcklkfScpYDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVhZElkKTtcblxuICAgICAgICAgICAgaWYgKCBxdWVyeVBhcmFtcy5zaW5jZSApIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIGlkPCQyXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgaWQ+JDJcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDE6cmF3XG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhd1xuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZmxhdCBzb3J0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB0cmVlU29ydCAoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkSWQpO1xuICAgICAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwYXRodG9wb3N0IERFU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDE6cmF3IEFORCBwYXRodG9wb3N0ID4gKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxOnJhdyBcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gdHJlZSBzb3J0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwYXJlbnRUcmVlU29ydCAoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkSWQpO1xuICAgICAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwaWQucGFyZW50X2lkIERFU0MsIHBhdGh0b3Bvc3QgQVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgICAgICBjb25zdCBpZFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdpZCBERVNDJyA6ICdpZCBBU0MnXG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdFsxXSA+IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDE6cmF3IEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdFsxXSA8IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDE6cmF3IEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApOyAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhd1xuICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDE6cmF3IEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHRyZWUgc29ydCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdE1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFNlcnZpY2VNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY291bnRBbGwoKSB7XG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBmb3J1bXMnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gcG9zdHMnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB0aHJlYWRzJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHVzZXJzJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogcGFyc2VJbnQoZm9ydW0uY291bnQpLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBhcnNlSW50KHBvc3QuY291bnQpLFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogcGFyc2VJbnQodGhyZWFkLmNvdW50KSxcbiAgICAgICAgICAgIFwidXNlclwiOiBwYXJzZUludCh1c2VyLmNvdW50KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xlYXJBbGwoKSB7XG5cbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBmb3J1bXMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgcG9zdHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB0aHJlYWRzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHVzZXJzIENBU0NBREUnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBmb3J1bSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwb3N0LFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogdGhyZWFkLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHVzZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVGhyZWFkTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNyZWF0ZU5ld1RocmVhZCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHRocmVhZHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArIGAgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGlkPSQxJywgW2lkXSlcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUaHJlYWRzQnlGb3J1bVNsdWcgKGZvcnVtU2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSdcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI+PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPD0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzJywgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBnZXRUaHJlYWRzQnlGb3J1bVNsdWcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlTbHVnIChzbHVnLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeUlkIChpZCwgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIGlkPSQxIFJFVFVSTklORyAqJywgW2lkLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGhyZWFkIChzbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd0aHJlYWRzJ30sbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwic2x1Z1xcXCIgPSBcXCdcIiArICBzbHVnICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZE1vZGVsO1xuIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmNvbnN0IFBTID0gcmVxdWlyZSgncGctcHJvbWlzZScpLlByZXBhcmVkU3RhdGVtZW50O1xuXG5cbmNvbnN0IGdldE5pY2tuYW1lU3RhdGVtZW50ID0gbmV3IFBTKCdnZXQtbmljaycsICdTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScpO1xuXG5cbmNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgLy8gb25lT3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90YPQuyDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnLCBbbmlja25hbWVdKVxuICAgIH1cblxuICAgIGdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCAobmljaywgbWFpbCkgeyAvLyDQvNC+0LbQvdC+INC60LDQui3RgtC+INC90LUg0L/RgNC+0YXQvtC00LjRgtGM0YHRjyDQv9C+INCy0YHQtdC5INGC0LDQsdC70LjRhtC1LCDQsCDQvtGB0YLQsNC90LDQstC70LjQstCw0YLRgdGPINC60LDQuiDRgtC+0LvRjNC60L4g0L3QsNGI0LvQuCAxINCy0YXQvtC20LTQtdC90LjQtVxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IG5pY2sgfHwgJyc7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gbWFpbCB8fCAnJztcbiAgICAgICAgLy8gbWFueU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyINC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEgT1IgZW1haWw9JDInLCBbbmlja25hbWUsIGVtYWlsXSk7IFxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyB1c2VycyAobmlja25hbWUsIGZ1bGxuYW1lLCBhYm91dCwgZW1haWwpIFZBTFVFUyAoJDEsICQyLCAkMyAsJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdVc2VyRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNC70YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQuNC80Y8g0LjQvNC10L3QvdC+INGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQuNGB0LDQvdC+XG4gICAgLypcbiAgICDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjFxuICAgINC40LzRjyDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0L/QuNGB0LDQvdC+INCyINGC0LDQsdC70LjRhtC1IHVzZXJzICjQvdC1INCyINCy0LXRgNGF0L3QtdC8INC40LvQuCDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQsNGFKVxuICAgICovXG4gICAgZ2V0VXNlck5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoZ2V0Tmlja25hbWVTdGF0ZW1lbnQsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG5cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFZvdGVNb2RlbCB7XG5cbiAgICBhc3luYyB2b3RlICh2b2ljZSwgdGhyZWFkSWQsIG5pY2tuYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoYElOU0VSVCBJTlRPIHZvdGVzICh2b2ljZSwgdGhyZWFkLCBuaWNrbmFtZSkgVkFMVUVTICgkMSwgJDIsIChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0nJHtuaWNrbmFtZX0nKSkgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVUaHJlYWROaWNrbmFtZSBETyBcbiAgICAgICAgICAgIFVQREFURSBTRVQgdm9pY2U9JDEgV0hFUkUgdm90ZXMudm9pY2U8PiQxIFJFVFVSTklORyAqLCAoeG1heDo6dGV4dDo6aW50ID4gMCkgYXMgZXhpc3RlZGAsIFt2b2ljZSwgdGhyZWFkSWRdKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZvdGVNb2RlbDsgXG4iLCJleHBvcnQgY29uc3QgcGdwID0gcmVxdWlyZSgncGctcHJvbWlzZScpKCk7XG5cbmNvbnN0IGRiT3B0aW9ucyA9IHtcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiA1NDMyLFxuICAgIGRhdGFiYXNlOiAnZm9ydW0nLFxuICAgIHVzZXI6ICdlcm1ha2ZvcnVtJyxcbiAgICBwYXNzd29yZDogJzEyMydcbn1cblxuY29uc3QgZGJJbnN0YW5jZSA9IHBncChkYk9wdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgZGJJbnN0YW5jZTtcbiIsImltcG9ydCBGb3J1bUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gZm9ydW1Sb3V0ZXIgKGZhc3RpZnksIG9wdGlvbnMpIHtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvZm9ydW0vY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZUZvcnVtKTtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvZm9ydW0vOnNsdWcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZVRocmVhZEluRm9ydW0pO1xuICAgIGZhc3RpZnkuZ2V0KCcvYXBpL2ZvcnVtLzpzbHVnL2RldGFpbHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG4gICAgZmFzdGlmeS5nZXQoJy9hcGkvZm9ydW0vOnNsdWcvdGhyZWFkcycsIEZvcnVtQ29udHJvbGxlci5nZXRUaHJlYWRzKTtcbiAgICBmYXN0aWZ5LmdldCgnL2FwaS9mb3J1bS86c2x1Zy91c2VycycsIEZvcnVtQ29udHJvbGxlci5nZXRVc2Vycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcnVtUm91dGVyOyIsImltcG9ydCBQb3N0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RSb3V0ZXIgKGZhc3RpZnksIG9wdGlvbnMpIHtcbiAgICBmYXN0aWZ5LmdldCgnL2FwaS9wb3N0LzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG4gICAgZmFzdGlmeS5wb3N0KCcvYXBpL3Bvc3QvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci51cGRhdGVEZXRhaWxzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJvdXRlcjsiLCJpbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBzZXJ2aWNlUm91dGVyIChmYXN0aWZ5LCBvcHRpb25zKSB7XG4gICAgZmFzdGlmeS5nZXQoJy9hcGkvc2VydmljZS9zdGF0dXMnLCBTZXJ2aWNlQ29udHJvbGxlci5jb3VudEFsbCk7XG4gICAgLy8gZmFzdGlmeS5kZWxldGUoJy9hcGkvc2VydmljZS9jbGVhcicsIFNlcnZpY2VDb250cm9sbGVyLmNsZWFyQWxsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZVJvdXRlcjsiLCJpbXBvcnQgVGhyZWFkQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9UaHJlYWRDb250cm9sbGVyLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gdGhyZWFkUm91dGVyIChmYXN0aWZ5LCBvcHRpb25zKSB7XG4gICAgZmFzdGlmeS5wb3N0KCcvYXBpL3RocmVhZC86c2x1Z19vcl9pZC9jcmVhdGUnLCBUaHJlYWRDb250cm9sbGVyLmNyZWF0ZVBvc3QpO1xuICAgIGZhc3RpZnkucG9zdCgnL2FwaS90aHJlYWQvOnNsdWdfb3JfaWQvdm90ZScsIFRocmVhZENvbnRyb2xsZXIudm90ZUZvclRocmVhZCk7XG4gICAgZmFzdGlmeS5nZXQoJy9hcGkvdGhyZWFkLzpzbHVnX29yX2lkL2RldGFpbHMnLCBUaHJlYWRDb250cm9sbGVyLmdldERldGFpbHMpO1xuICAgIGZhc3RpZnkuZ2V0KCcvYXBpL3RocmVhZC86c2x1Z19vcl9pZC9wb3N0cycsIFRocmVhZENvbnRyb2xsZXIuZ2V0UG9zdHMpO1xuICAgIGZhc3RpZnkucG9zdCgnL2FwaS90aHJlYWQvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIudXBkYXRlVGhyZWFkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhyZWFkUm91dGVyOyIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHVzZXJSb3V0ZXIgKGZhc3RpZnksIG9wdGlvbnMpIHtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvdXNlci86bmlja25hbWUvY3JlYXRlJywgVXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcik7XG4gICAgZmFzdGlmeS5wb3N0KCcvYXBpL3VzZXIvOm5pY2tuYW1lL3Byb2ZpbGUnLCBVc2VyQ29udHJvbGxlci51cGRhdGVVc2VyKTtcblx0ZmFzdGlmeS5nZXQoJy9hcGkvdXNlci86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLmdldFVzZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyOyIsImV4cG9ydCBjb25zdCBoYXJ2ZXN0Q29sdW1ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5cyA9IFtdXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhkYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5leHBvcnQgY29uc3QgaGFydmVzdEtleVZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5VmFsdWVzID0ge31cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleVZhbHVlc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlWYWx1ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBpZFRvSW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtpXS5pZCA9IHBhcnNlSW50KGRhdGFbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbFN0ciA9IGZ1bmN0aW9uIChhcnJheU9mUG9zdE9iamVjdHMpIHtcbiAgICAvLyBsZXQgcmVzdWx0UXVlcnkgPSBgV0lUSCBwb3N0X2F1dGhvciBBUyAoXG4gICAgLy8gICAgIFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSR7bmlja25hbWV9XG4gICAgLy8gICAgKSBgO1xuICAgIGxldCByZXN1bHRRdWVyeSA9IGBgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlc0luQXJyYXkgPSBoYXJ2ZXN0VmFsdWVzKGFycmF5T2ZQb3N0T2JqZWN0c1tpXSk7XG4gICAgICAgIGxldCB2YWwgPSBgIChgO1xuICAgICAgICB2YWwgKz0gYChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0ke2AnYCArIHZhbHVlc0luQXJyYXlbMF0gKyBgJ2B9KSwgYDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB2YWx1ZXNJbkFycmF5Lmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGlmICggaiAhPT0gMikge1xuICAgICAgICAgICAgICAgIHZhbCArPSBcIidcIiArIHZhbHVlc0luQXJyYXlbal0gKyBcIidcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IHZhbHVlc0luQXJyYXlbal07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqICE9PSB2YWx1ZXNJbkFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFF1ZXJ5ICs9IHZhbDtcbiAgICAgICAgaWYgKGkgPT09IGFycmF5T2ZQb3N0T2JqZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCksIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFF1ZXJ5O1xufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoU3RyaW5nID0gZnVuY3Rpb24gKHBhdGhBcnJheSkge1xuICAgIGxldCByZXN1bHQgPSBge2A7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHBhdGhBcnJheVtpXTtcbiAgICAgICAgaWYgKGkgIT09IHBhdGhBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYCwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gYH1gO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBmb3J1bVNlcmlhbGl6ZXIgPSBmdW5jdGlvbiAoZm9ydW1zQXJyYXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIj8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIiMjI1wiKVxuICAgIGZvciAobGV0IGZvcnVtIG9mIGZvcnVtc0FycmF5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIyMjXCIrZm9ydW0uYWJvdXQpO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkRm9ydW0gPSB7XG4gICAgICAgICAgICBcImFib3V0XCI6IGZvcnVtLmFib3V0LFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBmb3J1bS5lbWFpbCxcbiAgICAgICAgICAgIFwiZnVsbG5hbWVcIjogZm9ydW0uZnVsbG5hbWUsXG4gICAgICAgICAgICBcIm5pY2tuYW1lXCI6IGZvcnVtLm5pY2tuYW1lXG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goc2VyaWFsaXplZEZvcnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhaXJlUXVlcnkgPSBmdW5jdGlvbiAocGFpcnMpIHtcbiAgICBsZXQgcmVzdWx0UXVlcnkgPSBgYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGAoKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPScke3BhaXJzW2ldWzBdfScpLCAnJHtwYWlyc1tpXVsxXX0nKWA7XG4gICAgICAgIGlmIChpICE9PSBwYWlycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPWAsIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFF1ZXJ5O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGctcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==