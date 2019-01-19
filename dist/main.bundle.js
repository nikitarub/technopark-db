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
}, function (request, body, done) {
  try {
    var json = JSON.parse(body);
    done(null, json);
  } catch (err) {
    done(null, undefined);
  }
});
fastify.listen(port, function (err, address) {
  console.log("Server listening on port ".concat(port));
});

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
            fastify.get('/api/service/status', _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_0__["default"].countAll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXF1ZXN0IiwicmVwbHkiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJmb3J1bVVzZXJQYWlyVmFsdWVzIiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwibmV3UG9zdHMiLCJib2R5IiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImF1dGhvciIsInBvc3QiLCJwYXJlbnQiLCJQb3N0TW9kZWwiLCJnZXRQb3N0QnlJZEFuZFRocmVhZElkIiwiaWQiLCJwYXJlbnRQb3N0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZm9ydW0iLCJnZXRJZEZvclBvc3QiLCJwb3N0SWQiLCJjcmVhdGVkIiwidGhyZWFkIiwicGFyc2VJbnQiLCJuZXh0dmFsIiwiY29uc3RydWN0UGF0aFRvUG9zdCIsInBhdGgiLCJwYXRodG9wb3N0IiwicmVzdWx0IiwiY29sdW1ucyIsInZhbHVlc0luU3RyaW5nUXVlcnkiLCJ2YWxTdHIiLCJxdWVyeSIsImNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSIsImFkZGVkUG9zdHMiLCJwYWlyQ29sdW1ucyIsInN0cmluZ1BhaXJWYWx1ZXMiLCJjcmVhdGVQYWlyZVF1ZXJ5IiwicGFpclF1ZXJ5IiwiRm9ydW1Nb2RlbCIsImluY3JlbWVudFBvc3RzIiwiY3JlYXRlRm9ydW1Vc2VyUGFpckJ5UXVlcnkiLCJpZEFycmF5IiwiaWRTdHJpbmciLCJjb25zdHJ1Y3RQYXRoU3RyaW5nIiwiZ2V0UGF0aFRvUG9zdCIsInBhdGhTdHJpbmciLCJGb3J1bUNvbnRyb2xsZXIiLCJ1c2VyIiwic2x1ZyIsInRpdGxlIiwiVXNlck1vZGVsIiwiZ2V0VXNlck5pY2tuYW1lIiwibmV3Rm9ydW1EYXRhIiwibmlja25hbWUiLCJjcmVhdGVOZXdGb3J1bSIsImdldEZvcnVtQnlTbHVnIiwiZXhzaXN0aW5nRm9ydW0iLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmb3J1bVNsdWciLCJnZXRGb3J1bVNsdWciLCJrZXlWYWx1ZXMiLCJoYXJ2ZXN0S2V5VmFsdWVzIiwiaGFydmVzdENvbHVtbnMiLCJpIiwidmFsdWVzIiwiaGFydmVzdFZhbHVlcyIsIlRocmVhZE1vZGVsIiwiY3JlYXRlTmV3VGhyZWFkIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsImdldFRocmVhZHNCeUZvcnVtU2x1ZyIsImlkVG9JbnQiLCJtZXNhZ2UiLCJkZXNjIiwiZ2V0VXNlcnMiLCJmb3J1bVNlcmlhbGl6ZXIiLCJQb3N0Q29udHJvbGxlciIsImdldFBvc3RCeUlkIiwicG9zdERhdGEiLCJyZWxhdGVkVG8iLCJyZWxhdGVkRW50aXRpZXMiLCJzcGxpdCIsInJlbGF0ZWRFbnRpdHkiLCJnZXRVc2VyQnlOaWNrbmFtZSIsImVudGl0eSIsImdldFRocmVhZEJ5SWQiLCJuZXdEYXRhIiwiT2JqZWN0IiwidXBkYXRlUG9zdCIsIlNlcnZpY2VDb250cm9sbGVyIiwiU2VydmljZU1vZGVsIiwiY291bnRBbGwiLCJjbGVhckFsbCIsInR5cGUiLCJUaHJlYWRDb250cm9sbGVyIiwic2x1Z09ySWQiLCJ0ZXN0Iiwidm9pY2VWYWx1ZSIsInZvaWNlIiwiVm90ZU1vZGVsIiwidm90ZSIsInZvdGVkRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJpc0lkIiwic29ydCIsImZsYXRTb3J0IiwidHJlZVNvcnQiLCJwYXJlbnRUcmVlU29ydCIsIm1hcCIsInJlc1Bvc3QiLCJ1cGRhdGVUaHJlYWQiLCJVc2VyQ29udHJvbGxlciIsImVtYWlsIiwibmV3VXNlckRhdGEiLCJjcmVhdGVOZXdVc2VyIiwiZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIiwiZXhpc3RpbmdVc2VyIiwidXBkYXRlVXNlciIsImZhc3RpZnkiLCJyZXF1aXJlIiwibG9nZ2VyIiwicmVnaXN0ZXIiLCJ1c2VyUm91dGVyIiwiZm9ydW1Sb3V0ZXIiLCJ0aHJlYWRSb3V0ZXIiLCJwb3N0Um91dGVyIiwic2VydmljZVJvdXRlciIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFkZENvbnRlbnRUeXBlUGFyc2VyIiwicGFyc2VBcyIsImRvbmUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwidW5kZWZpbmVkIiwibGlzdGVuIiwiYWRkcmVzcyIsImRiSW5zdGFuY2UiLCJvbmVPck5vbmUiLCJjbnQiLCJzaW5jZSIsInBncCIsImFzIiwiZm9ybWF0IiwibWFueU9yTm9uZSIsInRvU3RyaW5nIiwibGltaXQiLCJQUyIsIlByZXBhcmVkU3RhdGVtZW50IiwiZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50IiwiYyIsInYiLCJvbmUiLCJ0aHJlYWRJZCIsInBhdGhTb3J0UnVsZSIsImlkU29ydFJ1bGUiLCJjb3VudCIsIm5vbmUiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsImdldE5pY2tuYW1lU3RhdGVtZW50IiwibmljayIsIm1haWwiLCJkYk9wdGlvbnMiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsIm9wdGlvbnMiLCJjcmVhdGVGb3J1bSIsImNyZWF0ZVRocmVhZEluRm9ydW0iLCJnZXQiLCJnZXREZXRhaWxzIiwiZ2V0VGhyZWFkcyIsInVwZGF0ZURldGFpbHMiLCJjcmVhdGVQb3N0Iiwidm90ZUZvclRocmVhZCIsImdldFBvc3RzIiwiY3JlYXRlVXNlciIsImdldFVzZXIiLCJrZXlzIiwia2V5IiwidmFsdWUiLCJhcnJheU9mUG9zdE9iamVjdHMiLCJyZXN1bHRRdWVyeSIsInZhbHVlc0luQXJyYXkiLCJ2YWwiLCJqIiwicGF0aEFycmF5IiwiZm9ydW1zQXJyYXkiLCJzZXJpYWxpemVkRm9ydW0iLCJhYm91dCIsImZ1bGxuYW1lIiwicGFpcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxpQkFBZ0JDLE9BQWhCLEVBQXlCQyxLQUF6QixFQUFnQ0MsVUFBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7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LGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVTBLLEtBQVYsRUFBaUI7QUFDN0MsTUFBSVQsV0FBVyxLQUFmOztBQUNBLE9BQUssSUFBSWxJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcySSxLQUFLLENBQUMzTSxNQUExQixFQUFrQ2dFLENBQUMsRUFBbkMsRUFBdUM7QUFDbkNrSSxlQUFXLDJEQUFvRFMsS0FBSyxDQUFDM0ksQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUFwRCxrQkFBdUUySSxLQUFLLENBQUMzSSxDQUFELENBQUwsQ0FBUyxDQUFULENBQXZFLE9BQVg7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLMkksS0FBSyxDQUFDM00sTUFBTixHQUFlLENBQXpCLEVBQTRCO0FBQ3hCa00saUJBQVcsUUFBWDtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsV0FBUDtBQUNILENBVE0sQzs7Ozs7Ozs7Ozs7QUNwR1AsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2ZvcnVtL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgeyB2YWxTdHIsIGNvbnN0cnVjdFBhdGhTdHJpbmcsIGNyZWF0ZVBhaXJlUXVlcnkgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RzTG9vcCA9IGFzeW5jIGZ1bmN0aW9uIChyZXF1ZXN0LCByZXBseSwgdGhyZWFkRGF0YSkge1xuICAgIGNvbnN0IHBvc3RzVmFsdWVzID0gW107XG4gICAgY29uc3QgZm9ydW1Vc2VyUGFpclZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcbiAgICBjb25zdCBuZXdQb3N0cyA9IHJlcXVlc3QuYm9keTtcblxuICAgIGlmICghbmV3UG9zdHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAxKS5zZW5kKFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRob3IgPSBuZXdQb3N0c1swXS5hdXRob3I7XG4gICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4gICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCINCyINGB0LjRgdGC0LXQvNC1IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwOSkuc2VuZCh7IG1lc3NhZ2UgOiAnbm8gcGFyZW50IHBvc3RzJyB9KTsgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJlbnRQb3N0LmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBQQVJFTlRTJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRjtC30LXRgNCwINCyINGE0L7RgNGD0LwgXG4gICAgICAgIGZvcnVtVXNlclBhaXJWYWx1ZXMucHVzaChbcG9zdC5hdXRob3IsIHRocmVhZERhdGEuZm9ydW1dKTtcbiAgICAgICAgLy8gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTtcblxuXG4gICAgICAgIC8vIGNvbnN0IHBhaXIgPSBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpOyAgICAgICAgXG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IGF3YWl0IFBvc3RNb2RlbC5nZXRJZEZvclBvc3QoKTtcbiAgICAgICAgcG9zdC5jcmVhdGVkID0gY3JlYXRpb25EYXRlO1xuICAgICAgICBwb3N0LnRocmVhZCA9IHRocmVhZERhdGEuaWQ7XG4gICAgICAgIHBvc3QuZm9ydW0gPSB0aHJlYWREYXRhLmZvcnVtO1xuICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdElkLm5leHR2YWwpO1xuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgY29uc3RydWN0UGF0aFRvUG9zdChwb3N0KTtcbiAgICAgICAgcG9zdC5wYXRodG9wb3N0ID0gcGF0aDtcbiAgICAgICAgcG9zdHNWYWx1ZXMucHVzaChwb3N0KTtcbiAgICB9XG5cbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QvtGB0YJcbiAgICBjb25zdCByZXN1bHQgPSBbXTsgXG4gICAgY29uc3QgY29sdW1ucyA9IGAoYXV0aG9yLCBcIm1lc3NhZ2VcIiwgcGFyZW50LCBcImNyZWF0ZWRcIiwgdGhyZWFkLCBmb3J1bSwgaWQsIHBhdGh0b3Bvc3QpYFxuICAgIGNvbnN0IHZhbHVlc0luU3RyaW5nUXVlcnkgPSB2YWxTdHIocG9zdHNWYWx1ZXMpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBJTlRPIHBvc3RzIGAgKyBjb2x1bW5zICsgYCBWQUxVRVMgYCArIHZhbHVlc0luU3RyaW5nUXVlcnkgKyBgIFJFVFVSTklORyAqYDtcbiAgICBjb25zdCBhZGRlZFBvc3RzID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZU5ld1Bvc3RzQnlRdWVyeShxdWVyeSk7XG4gICAgaWYgKGFkZGVkUG9zdHMpIHtcbiAgICAgICAgZm9yIChsZXQgcG9zdCBvZiBhZGRlZFBvc3RzKSB7XG4gICAgICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICBwb3N0LnRocmVhZCA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocG9zdCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHBhaXJDb2x1bW5zID0gYCh1c2Vybmlja25hbWUsIGZvcnVtc2x1ZylgO1xuICAgICAgICBjb25zdCBzdHJpbmdQYWlyVmFsdWVzID0gY3JlYXRlUGFpcmVRdWVyeShmb3J1bVVzZXJQYWlyVmFsdWVzKTtcbiAgICAgICAgY29uc3QgcGFpclF1ZXJ5ID0gYElOU0VSVCBJTlRPIGZvcnVtdXNlcnMgYCArIHBhaXJDb2x1bW5zICsgYCBWQUxVRVMgYCArIHN0cmluZ1BhaXJWYWx1ZXMgKyBgIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlX2ZvcnVtdXNlcl9wYWlyIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgO1xuICAgICAgICAvLyBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgYXV0aG9yKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50UG9zdHModGhyZWFkRGF0YS5mb3J1bSwgbmV3UG9zdHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpckJ5UXVlcnkocGFpclF1ZXJ5KTtcbiAgICAgICAgICAgIC8vIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBwb3N0LmF1dGhvcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMSkuc2VuZChyZXN1bHQpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgY29uc3RydWN0UGF0aFRvUG9zdCA9IGFzeW5jIGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgY29uc3QgaWRBcnJheSA9IFtdO1xuICAgIGlkQXJyYXkucHVzaChwb3N0LmlkKTtcbiAgICBjb25zdCBpZFN0cmluZyA9IGNvbnN0cnVjdFBhdGhTdHJpbmcoaWRBcnJheSk7XG4gICAgbGV0IHBhdGh0b3Bvc3Q7XG4gICAgaWYgKCFwb3N0LnBhcmVudCkge1xuICAgICAgICBwYXRodG9wb3N0ID0gcG9zdC5wYXRodG9wb3N0IHx8IGlkU3RyaW5nO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQYXRoVG9Qb3N0KHBvc3QucGFyZW50KTtcbiAgICAgICAgcGF0aC5wYXRodG9wb3N0LnB1c2gocG9zdC5pZCk7XG4gICAgICAgIGNvbnN0IHBhdGhTdHJpbmcgPSBjb25zdHJ1Y3RQYXRoU3RyaW5nKHBhdGgucGF0aHRvcG9zdCk7XG4gICAgICAgIHBhdGh0b3Bvc3QgPSBwb3N0LnBhdGh0b3Bvc3QgfHwgcGF0aFN0cmluZyB8fCBpZFN0cmluZ1xuICAgIH1cbiAgICByZXR1cm4gcGF0aHRvcG9zdDtcbn0iLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0VmFsdWVzLCBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcywgaWRUb0ludCwgZm9ydW1TZXJpYWxpemVyIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuXG5cbmNsYXNzIEZvcnVtQ29udHJvbGxlciB7XG5cblx0YXN5bmMgY3JlYXRlRm9ydW0gKHJlcXVlc3QsIHJlcGx5KSB7XG5cdFx0bGV0IHVzZXIgPSByZXF1ZXN0LmJvZHlbJ3VzZXInXTtcblx0XHRjb25zdCBzbHVnID0gcmVxdWVzdC5ib2R5WydzbHVnJ107XG5cdFx0Y29uc3QgdGl0bGUgPSByZXF1ZXN0LmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Rm9ydW1EYXRhID0gW1xuXHRcdFx0c2x1Zyxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dXNlci5uaWNrbmFtZVxuXHRcdF1cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZU5ld0ZvcnVtKG5ld0ZvcnVtRGF0YSk7XG5cblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDIwMSkuc2VuZChyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoNDA5KS5zZW5kKGV4c2lzdGluZ0ZvcnVtKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGdldERldGFpbHMgKHJlcXVlc3QsIHJlcGx5KSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblx0XHRjb25zdCBzbHVnID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWcnXTtcblx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2ZvcnVtIGdldERldGFpbHMnLGRhdGEpO1xuXHRcdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgZm9ydW0nIH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGFzeW5jIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcXVlc3QsIHJlcGx5KSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblx0XHRsZXQgYXV0aG9yID0gcmVxdWVzdC5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWcnXTtcblx0XHRsZXQgZm9ydW07XG5cbiAgICAgICAgdHJ5IHtcblx0XHRcdGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKGZvcnVtU2x1Zyk7XG4gICAgICAgICAgICBpZiAoIWZvcnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXF1ZXN0LmJvZHkpO1xuXHRcdGtleVZhbHVlc1snYXV0aG9yJ10gPSBhdXRob3Iubmlja25hbWU7XG5cdFx0a2V5VmFsdWVzWydmb3J1bSddID0gZm9ydW0uc2x1Zztcblx0XHRcblx0XHRjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG5cdFx0XHRcdGNvbHVtbnNbaV0gPSAnXCInICsgY29sdW1uc1tpXSArICdcIic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC5jcmVhdGVOZXdUaHJlYWQoY29sdW1ucywgdmFsdWVzKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW0uc2x1ZywgYXV0aG9yLm5pY2tuYW1lKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGluZyBwYWlyJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW0uc2x1Zyk7XG5cdFx0XHRcdHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoMjAxKS5zZW5kKHJlc3VsdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nVGhyZWFkO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcXVlc3QuYm9keVsnc2x1ZyddKTtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkLmlkID0gcGFyc2VJbnQoZXhzaXN0aW5nVGhyZWFkLmlkKTtcblx0XHRcdFx0cmV0dXJuIHJlcGx5LnN0YXR1cyg0MDkpLnNlbmQoZXhzaXN0aW5nVGhyZWFkKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHICEhISEnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gXG5cdFxuXHRhc3luYyBnZXRUaHJlYWRzIChyZXF1ZXN0LCByZXBseSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cblx0XHRjb25zdCBzbHVnID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWcnXTtcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxdWVzdC5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnKHNsdWcsIHF1ZXJ5UGFyYW1zKTtcblx0XHRyZXN1bHQgPSBpZFRvSW50KHJlc3VsdCk7XG5cdFx0aWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoc2x1Zyk7XG4gICAgICAgICAgICBpZiAoIWZvcnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcblxuXHR9XG5cblx0YXN5bmMgZ2V0VXNlcnMgKHJlcXVlc3QsIHJlcGx5KSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuXHRcdGNvbnN0IHNsdWcgPSByZXF1ZXN0LnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXF1ZXN0LnF1ZXJ5KTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuXHRcdH1cblx0XHRxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnO1xuXG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0VXNlcnMoc2x1ZywgcXVlcnlQYXJhbXMpO1xuXG5cdFx0aWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoc2x1Zyk7XG4gICAgICAgICAgICBpZiAoIWZvcnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cblx0XHRyZXN1bHQgPSBmb3J1bVNlcmlhbGl6ZXIocmVzdWx0KTtcblx0XHQvLyBjb25zb2xlLmxvZygnZm9ydW0gZ2V0VXNlcnMnLHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcblxuXHR9IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIGFzeW5jIGdldERldGFpbHMgKHJlcXVlc3QsIHJlcGx5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3Qub3JpZ2luYWxVcmwsIHJlcXVlc3QubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBwb3N0SWQgPSByZXF1ZXN0LnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUbyA9IHJlcXVlc3QucXVlcnlbJ3JlbGF0ZWQnXTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgIHBvc3REYXRhLnBhcmVudCA9IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCk7XG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb3N0IGdldERldGFpbHMnLHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlRGV0YWlscyAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdC5vcmlnaW5hbFVybCwgcmVxdWVzdC5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcXVlc3QucGFyYW1zWydpZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxdWVzdC5ib2R5O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCBuZXdEYXRhLm1lc3NhZ2UgPT09ICcnKSB7XG4gICAgICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPyBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpIDogcG9zdERhdGEucGFyZW50OyAgICBcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHBvc3REYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChwb3N0RGF0YS5tZXNzYWdlICE9PSBuZXdEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnVwZGF0ZVBvc3QobmV3RGF0YS5tZXNzYWdlLCBwb3N0SWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkQgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDkpLnNlbmQoeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBwYXJzZUludChyZXN1bHQudGhyZWFkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFyZW50ID8gcGFyc2VJbnQocmVzdWx0LnBhcmVudCkgOiByZXN1bHQucGFyZW50OyAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPyBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpIDogcG9zdERhdGEucGFyZW50OyBcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0Q29udHJvbGxlcjsiLCJpbXBvcnQgU2VydmljZU1vZGVsIGZyb20gJy4uL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5jbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjb3VudEFsbCAocmVxdWVzdCwgcmVwbHkpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBTZXJ2aWNlTW9kZWwuY291bnRBbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlcnZpY2UgY291bnRBbGwnLHJlc3VsdClcbiAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNsZWFyQWxsIChyZXF1ZXN0LCByZXBseSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuICAgICAgICBjb25zb2xlLmxvZygnUkVRVUVTVCcscmVxdWVzdCk7XG5cbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIGF3YWl0IFNlcnZpY2VNb2RlbC5jbGVhckFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXBseS50eXBlKCdhcHBsaWNhdGlvbi9qc29uJykuc3RhdHVzKDIwMCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyOyIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgVm90ZU1vZGVsIGZyb20gJy4uL21vZGVscy9Wb3RlTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0c0xvb3AgfSBmcm9tICcuL0NvbnRyb2xsZXJVdGlscy5qcyc7XG5cbmNsYXNzIFRocmVhZENvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlUG9zdCAocmVxdWVzdCwgcmVwbHkpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0Lm9yaWdpbmFsVXJsLCByZXF1ZXN0Lm1ldGhvZCk7XG5cbiAgICAgICAgbGV0IHNsdWdPcklkID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBzbHVnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXF1ZXN0LHJlcGx5LCB0aHJlYWQpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIHZvdGVGb3JUaHJlYWQgKHJlcXVlc3QsIHJlcGx5KSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxdWVzdC5vcmlnaW5hbFVybCwgcmVxdWVzdC5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3Qgdm9pY2VWYWx1ZSA9IHJlcXVlc3QuYm9keS52b2ljZTtcblxuICAgICAgICBsZXQgYXV0aG9yID0gcmVxdWVzdC5ib2R5Lm5pY2tuYW1lO1xuXG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZvdGVkRGF0YSA9IGF3YWl0IFZvdGVNb2RlbC52b3RlKHZvaWNlVmFsdWUsIHRocmVhZC5pZCwgYXV0aG9yKTtcblxuICAgICAgICBpZiAodm90ZWREYXRhKSB7XG4gICAgICAgICAgICBpZiAodm90ZWREYXRhLmV4aXN0ZWQpIHtcbiAgICAgICAgICAgICAgICB2b3RlZERhdGEudm9pY2UgPSB2b3RlZERhdGEudm9pY2UgPT09IDEgPyB2b3RlZERhdGEudm9pY2UgKyAxIDogdm90ZWREYXRhLnZvaWNlIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTsgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQodGhyZWFkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuaW5jcmVtZW50Vm90ZXNCeUlkKHRocmVhZC5pZCwgdm90ZWREYXRhLnZvaWNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gaW5jcmVtZW50aW5nIHZvdGVzIGluIHRocmVhZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0RGV0YWlscyAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdC5vcmlnaW5hbFVybCwgcmVxdWVzdC5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxdWVzdC5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSlcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHJlYWQgZ2V0RGV0YWlscycsIHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZCh0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RocmVhZCBnZXREZXRhaWxzJywgdGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQb3N0cyhyZXF1ZXN0LCByZXBseSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0Lm9yaWdpbmFsVXJsLCByZXF1ZXN0Lm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcXVlc3QucXVlcnkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeVBhcmFtc1snZGVzYyddID0gcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9PT0gJ3RydWUnO1xuICAgICAgICBxdWVyeVBhcmFtc1snc2luY2UnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydzaW5jZSddKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcXVlc3QucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCBpc0lkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIGlzSWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNJZCA9IGZhbHNlXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAnZmxhdCcgfHwgIXF1ZXJ5UGFyYW1zLnNvcnQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5mbGF0U29ydChzbHVnT3JJZCwgaXNJZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICd0cmVlJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnRyZWVTb3J0KHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3BhcmVudF90cmVlJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnBhcmVudFRyZWVTb3J0KHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdGhyZWFkID0gaXNJZCA/IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKSA6IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKCAocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzUG9zdCA9IHt9O1xuICAgICAgICAgICAgcmVzUG9zdFsnYXV0aG9yJ10gPSBwb3N0LmF1dGhvcjtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2NyZWF0ZWQnXSA9IHBvc3QuY3JlYXRlZDtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2ZvcnVtJ10gPSBwb3N0LmZvcnVtO1xuICAgICAgICAgICAgcmVzUG9zdFsnaWQnXSA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcmVzUG9zdFsnbWVzc2FnZSddID0gcG9zdC5tZXNzYWdlO1xuICAgICAgICAgICAgcmVzUG9zdFsncGFyZW50J10gPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXNQb3N0Wyd0aHJlYWQnXSA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc1Bvc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVGhyZWFkIChyZXF1ZXN0LCByZXBseSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0Lm9yaWdpbmFsVXJsLCByZXF1ZXN0Lm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXF1ZXN0LnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxdWVzdC5ib2R5O1xuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZCh0aHJlYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwudXBkYXRlVGhyZWFkKHRocmVhZC5zbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwOSkuc2VuZCh7IG1lc3NhZ2UgOiAnYWxyZWFkeSBleGlzdGVkIGRhdGEnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkQ29udHJvbGxlcjsiLCJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjcmVhdGVVc2VyIChyZXF1ZXN0LCByZXBseSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcXVlc3QucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcXVlc3QuYm9keVsnZW1haWwnXTtcbiAgICAgICAgY29uc3QgbmV3VXNlckRhdGEgPSBbXG4gICAgICAgICAgICBuaWNrbmFtZSxcbiAgICAgICAgICAgIHJlcXVlc3QuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAgICAgICAgIHJlcXVlc3QuYm9keVsnYWJvdXQnXSxcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDEpLnNlbmQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ1VzZXI7XG4gICAgICAgICAgICB0cnkge1xuXHRcdFx0XHRleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbCk7XG5cdFx0XHRcdHJldHVybiByZXBseS5zdGF0dXMoNDA5KS5zZW5kKGV4aXN0aW5nVXNlcilcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLIE9SIEVNQUlMJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG5cblxuICAgIGdldFVzZXIgKHJlcXVlc3QsIHJlcGx5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXF1ZXN0LnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKVxuICAgICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyJywgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0gIFxuXG4gICAgXG4gICAgYXN5bmMgdXBkYXRlVXNlciAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcXVlc3QucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxdWVzdC5ib2R5O1xuXG4gICAgICAgIC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0LrQsNC60LjQtS3RgtC+INC00LDQvdC90YvQtSDQsdGL0LvQuCDQvdC1INC/0YPRgdGC0YvQtVxuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC51cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsa2V5VmFsdWVzKVxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDkpLnNlbmQoeyBtZXNzYWdlIDogXCJVc2VyIHdpdGggc3VjaCBuaWNrbmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiY29uc3QgZmFzdGlmeSA9IHJlcXVpcmUoJ2Zhc3RpZnknKSh7XG4gIGxvZ2dlcjogZmFsc2Vcbn0pO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMnO1xuaW1wb3J0IGZvcnVtUm91dGVyIGZyb20gJy4vcm91dGVycy9Gb3J1bVJvdXRlcy5qcyc7XG5pbXBvcnQgdGhyZWFkUm91dGVyIGZyb20gJy4vcm91dGVycy9UaHJlYWRSb3V0ZXMuanMnO1xuaW1wb3J0IHBvc3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1Bvc3RSb3V0ZXMuanMnO1xuaW1wb3J0IHNlcnZpY2VSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMnO1xuaW1wb3J0IFNlcnZpY2VNb2RlbCBmcm9tICcuL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5cbmZhc3RpZnkucmVnaXN0ZXIodXNlclJvdXRlcik7XG5mYXN0aWZ5LnJlZ2lzdGVyKGZvcnVtUm91dGVyKTtcbmZhc3RpZnkucmVnaXN0ZXIodGhyZWFkUm91dGVyKTtcbmZhc3RpZnkucmVnaXN0ZXIocG9zdFJvdXRlcik7XG5mYXN0aWZ5LnJlZ2lzdGVyKHNlcnZpY2VSb3V0ZXIpO1xuXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5cbmZhc3RpZnkucG9zdCgnL2FwaS9zZXJ2aWNlL2NsZWFyJywgYXN5bmMgKHJlcXVlc3QsIHJlcGx5KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdHRyeSB7ICAgXG5cdFx0YXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuXHRcdHJldHVybiByZXBseS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcblx0fVxuXHRyZXBseS50eXBlKCdhcHBsaWNhdGlvbi9qc29uJykuc3RhdHVzKDIwMCk7XG5cdHJldHVybiBudWxsO1xufSk7XG5cblxuZmFzdGlmeS5hZGRDb250ZW50VHlwZVBhcnNlcignYXBwbGljYXRpb24vanNvbicsIHsgcGFyc2VBczogJ3N0cmluZycgfSwgZnVuY3Rpb24gKHJlcXVlc3QsIGJvZHksIGRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICBkb25lKG51bGwsIGpzb24pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkb25lKG51bGwsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9KTtcblxuZmFzdGlmeS5saXN0ZW4ocG9ydCwgKGVycixhZGRyZXNzKSA9PiB7XG5cdGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgRm9ydW1Nb2RlbCB7XG5cbiAgICBnZXRGb3J1bUJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3Rm9ydW0gKG5ld0ZvcnVtRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtcyAoc2x1ZywgdGl0bGUsIFwidXNlclwiKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdGb3J1bURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3J1bVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBuaWNrbmFtZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VBUkNIJyxmb3J1bVNsdWcsIG5pY2tuYW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDEsXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQyKSlcbiAgICAgICAgICAgICAgICBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqYCwgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlRm9ydW1Vc2VyUGFpckJ5UXVlcnkocXVlcnkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NFQVJDSCcsZm9ydW1TbHVnLCBuaWNrbmFtZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VGhyZWFkcyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgdGhyZWFkcyA9IHRocmVhZHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFBvc3RzKHNsdWcsIGNudCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoYFVQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqYCwgW3NsdWcsY250XSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlcnMgKHNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzbHVnID0gYChTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPScke3NsdWd9JylgXG4gICAgICAgICAgICBsZXQgcXVlcnk7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxOnJhdyBBTkQgVS5uaWNrbmFtZT4kMlxuICAgICAgICAgICAgICAgIGAsW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDE6cmF3IEFORCBVLm5pY2tuYW1lPCQyXG4gICAgICAgICAgICAgICAgYCwgW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDE6cmF3YCwgW3NsdWddKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYCQxOnJhdyBcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnVS5uaWNrbmFtZSBERVNDJyA6ICdVLm5pY2tuYW1lIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgIFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBnZXRVc2VycycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Nb2RlbDsgIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5jb25zdCBQUyA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKS5QcmVwYXJlZFN0YXRlbWVudDtcblxuY29uc3QgZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50ID0gbmV3IFBTKCdnZXQtcG9zdCcsICdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxIEFORCB0aHJlYWQ9JDInKTtcblxuY2xhc3MgUG9zdE1vZGVsIHtcbiAgICBcbiAgICBjcmVhdGVOZXdQb3N0IChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYyArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGMgKz0gJyknO1xuXG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ICs9ICckJyArIChpKzEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHYgKz0gJyknO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyBwb3N0cyAnICsgYyArICcgVkFMVUVTICcgKyB2ICsgJyBSRVRVUk5JTkcgKic7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdQb3N0c0J5UXVlcnkgKHF1ZXJ5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAgYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKHF1ZXJ5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFBPU1QgTk8gQVVUSE9SJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3luYyB0cmFuc2FjdFRlc3QgKHF1ZXJ5KVxuXG4gICAgZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZCAoaWQsIHRocmVhZElkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQsIFtpZCwgdGhyZWFkSWRdKVxuICAgIH1cblxuICAgIGdldFBvc3RCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICBnZXRJZEZvclBvc3QgKCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoXCJTRUxFQ1QgbmV4dHZhbCgncG9zdHNfaWRfc2VxdWFuY2UnKVwiKTsgXG4gICAgfVxuXG4gICAgdXBkYXRlUG9zdCAobWVzc2FnZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgcG9zdHMgU0VUIFwiaXNFZGl0ZWRcIj1UUlVFLCBcIm1lc3NhZ2VcIj0kMSBXSEVSRSBpZD0kMiBSRVRVUk5JTkcgKicsIFttZXNzYWdlLGlkXSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aFRvUG9zdCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgXG4gICAgYXN5bmMgZmxhdFNvcnQgKHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSWQgPyBzbHVnT3JJZCA6IGAoU0VMRUNUIGlkIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPScke3NsdWdPcklkfScpYDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVhZElkKTtcblxuICAgICAgICAgICAgaWYgKCBxdWVyeVBhcmFtcy5zaW5jZSApIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIGlkPCQyXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgaWQ+JDJcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDE6cmF3XG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhd1xuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZmxhdCBzb3J0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB0cmVlU29ydCAoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkSWQpO1xuICAgICAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwYXRodG9wb3N0IERFU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDE6cmF3IEFORCBwYXRodG9wb3N0ID4gKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxOnJhdyBcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gdHJlZSBzb3J0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwYXJlbnRUcmVlU29ydCAoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkSWQpO1xuICAgICAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwaWQucGFyZW50X2lkIERFU0MsIHBhdGh0b3Bvc3QgQVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgICAgICBjb25zdCBpZFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdpZCBERVNDJyA6ICdpZCBBU0MnXG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdFsxXSA+IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDE6cmF3IEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdFsxXSA8IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDE6cmF3IEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApOyAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhd1xuICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDE6cmF3IEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHRyZWUgc29ydCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdE1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFNlcnZpY2VNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY291bnRBbGwoKSB7XG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBmb3J1bXMnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gcG9zdHMnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB0aHJlYWRzJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHVzZXJzJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogcGFyc2VJbnQoZm9ydW0uY291bnQpLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBhcnNlSW50KHBvc3QuY291bnQpLFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogcGFyc2VJbnQodGhyZWFkLmNvdW50KSxcbiAgICAgICAgICAgIFwidXNlclwiOiBwYXJzZUludCh1c2VyLmNvdW50KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xlYXJBbGwoKSB7XG5cbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBmb3J1bXMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgcG9zdHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB0aHJlYWRzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHVzZXJzIENBU0NBREUnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBmb3J1bSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwb3N0LFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogdGhyZWFkLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHVzZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVGhyZWFkTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNyZWF0ZU5ld1RocmVhZCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHRocmVhZHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArIGAgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGlkPSQxJywgW2lkXSlcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUaHJlYWRzQnlGb3J1bVNsdWcgKGZvcnVtU2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSdcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI+PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPD0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzJywgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBnZXRUaHJlYWRzQnlGb3J1bVNsdWcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlTbHVnIChzbHVnLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeUlkIChpZCwgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIGlkPSQxIFJFVFVSTklORyAqJywgW2lkLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGhyZWFkIChzbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd0aHJlYWRzJ30sbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwic2x1Z1xcXCIgPSBcXCdcIiArICBzbHVnICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZE1vZGVsO1xuIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmNvbnN0IFBTID0gcmVxdWlyZSgncGctcHJvbWlzZScpLlByZXBhcmVkU3RhdGVtZW50O1xuXG5cbmNvbnN0IGdldE5pY2tuYW1lU3RhdGVtZW50ID0gbmV3IFBTKCdnZXQtbmljaycsICdTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScpO1xuXG5cbmNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgLy8gb25lT3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90YPQuyDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnLCBbbmlja25hbWVdKVxuICAgIH1cblxuICAgIGdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCAobmljaywgbWFpbCkgeyAvLyDQvNC+0LbQvdC+INC60LDQui3RgtC+INC90LUg0L/RgNC+0YXQvtC00LjRgtGM0YHRjyDQv9C+INCy0YHQtdC5INGC0LDQsdC70LjRhtC1LCDQsCDQvtGB0YLQsNC90LDQstC70LjQstCw0YLRgdGPINC60LDQuiDRgtC+0LvRjNC60L4g0L3QsNGI0LvQuCAxINCy0YXQvtC20LTQtdC90LjQtVxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IG5pY2sgfHwgJyc7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gbWFpbCB8fCAnJztcbiAgICAgICAgLy8gbWFueU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyINC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEgT1IgZW1haWw9JDInLCBbbmlja25hbWUsIGVtYWlsXSk7IFxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyB1c2VycyAobmlja25hbWUsIGZ1bGxuYW1lLCBhYm91dCwgZW1haWwpIFZBTFVFUyAoJDEsICQyLCAkMyAsJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdVc2VyRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNC70YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQuNC80Y8g0LjQvNC10L3QvdC+INGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQuNGB0LDQvdC+XG4gICAgLypcbiAgICDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjFxuICAgINC40LzRjyDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0L/QuNGB0LDQvdC+INCyINGC0LDQsdC70LjRhtC1IHVzZXJzICjQvdC1INCyINCy0LXRgNGF0L3QtdC8INC40LvQuCDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQsNGFKVxuICAgICovXG4gICAgZ2V0VXNlck5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoZ2V0Tmlja25hbWVTdGF0ZW1lbnQsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG5cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFZvdGVNb2RlbCB7XG5cbiAgICBhc3luYyB2b3RlICh2b2ljZSwgdGhyZWFkSWQsIG5pY2tuYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoYElOU0VSVCBJTlRPIHZvdGVzICh2b2ljZSwgdGhyZWFkLCBuaWNrbmFtZSkgVkFMVUVTICgkMSwgJDIsIChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0nJHtuaWNrbmFtZX0nKSkgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVUaHJlYWROaWNrbmFtZSBETyBcbiAgICAgICAgICAgIFVQREFURSBTRVQgdm9pY2U9JDEgV0hFUkUgdm90ZXMudm9pY2U8PiQxIFJFVFVSTklORyAqLCAoeG1heDo6dGV4dDo6aW50ID4gMCkgYXMgZXhpc3RlZGAsIFt2b2ljZSwgdGhyZWFkSWRdKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZvdGVNb2RlbDsgXG4iLCJleHBvcnQgY29uc3QgcGdwID0gcmVxdWlyZSgncGctcHJvbWlzZScpKCk7XG5cbmNvbnN0IGRiT3B0aW9ucyA9IHtcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiA1NDMyLFxuICAgIGRhdGFiYXNlOiAnZm9ydW0nLFxuICAgIHVzZXI6ICdlcm1ha2ZvcnVtJyxcbiAgICBwYXNzd29yZDogJzEyMydcbn1cblxuY29uc3QgZGJJbnN0YW5jZSA9IHBncChkYk9wdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgZGJJbnN0YW5jZTtcbiIsImltcG9ydCBGb3J1bUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gZm9ydW1Sb3V0ZXIgKGZhc3RpZnksIG9wdGlvbnMpIHtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvZm9ydW0vY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZUZvcnVtKTtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvZm9ydW0vOnNsdWcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZVRocmVhZEluRm9ydW0pO1xuICAgIGZhc3RpZnkuZ2V0KCcvYXBpL2ZvcnVtLzpzbHVnL2RldGFpbHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG4gICAgZmFzdGlmeS5nZXQoJy9hcGkvZm9ydW0vOnNsdWcvdGhyZWFkcycsIEZvcnVtQ29udHJvbGxlci5nZXRUaHJlYWRzKTtcbiAgICBmYXN0aWZ5LmdldCgnL2FwaS9mb3J1bS86c2x1Zy91c2VycycsIEZvcnVtQ29udHJvbGxlci5nZXRVc2Vycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcnVtUm91dGVyOyIsImltcG9ydCBQb3N0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RSb3V0ZXIgKGZhc3RpZnksIG9wdGlvbnMpIHtcbiAgICBmYXN0aWZ5LmdldCgnL2FwaS9wb3N0LzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG4gICAgZmFzdGlmeS5wb3N0KCcvYXBpL3Bvc3QvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci51cGRhdGVEZXRhaWxzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJvdXRlcjsiLCJpbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBzZXJ2aWNlUm91dGVyIChmYXN0aWZ5LCBvcHRpb25zKSB7XG4gICAgZmFzdGlmeS5nZXQoJy9hcGkvc2VydmljZS9zdGF0dXMnLCBTZXJ2aWNlQ29udHJvbGxlci5jb3VudEFsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VSb3V0ZXI7IiwiaW1wb3J0IFRocmVhZENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVGhyZWFkQ29udHJvbGxlci5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHRocmVhZFJvdXRlciAoZmFzdGlmeSwgb3B0aW9ucykge1xuICAgIGZhc3RpZnkucG9zdCgnL2FwaS90aHJlYWQvOnNsdWdfb3JfaWQvY3JlYXRlJywgVGhyZWFkQ29udHJvbGxlci5jcmVhdGVQb3N0KTtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvdGhyZWFkLzpzbHVnX29yX2lkL3ZvdGUnLCBUaHJlYWRDb250cm9sbGVyLnZvdGVGb3JUaHJlYWQpO1xuICAgIGZhc3RpZnkuZ2V0KCcvYXBpL3RocmVhZC86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbiAgICBmYXN0aWZ5LmdldCgnL2FwaS90aHJlYWQvOnNsdWdfb3JfaWQvcG9zdHMnLCBUaHJlYWRDb250cm9sbGVyLmdldFBvc3RzKTtcbiAgICBmYXN0aWZ5LnBvc3QoJy9hcGkvdGhyZWFkLzpzbHVnX29yX2lkL2RldGFpbHMnLCBUaHJlYWRDb250cm9sbGVyLnVwZGF0ZVRocmVhZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRocmVhZFJvdXRlcjsiLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMnO1xuXG5hc3luYyBmdW5jdGlvbiB1c2VyUm91dGVyIChmYXN0aWZ5LCBvcHRpb25zKSB7XG4gICAgZmFzdGlmeS5wb3N0KCcvYXBpL3VzZXIvOm5pY2tuYW1lL2NyZWF0ZScsIFVzZXJDb250cm9sbGVyLmNyZWF0ZVVzZXIpO1xuICAgIGZhc3RpZnkucG9zdCgnL2FwaS91c2VyLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcik7XG5cdGZhc3RpZnkuZ2V0KCcvYXBpL3VzZXIvOm5pY2tuYW1lL3Byb2ZpbGUnLCBVc2VyQ29udHJvbGxlci5nZXRVc2VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclJvdXRlcjsiLCJleHBvcnQgY29uc3QgaGFydmVzdENvbHVtbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IGtleXMgPSBbXVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGZvciAobGV0IHZhbHVlIG9mIE9iamVjdC52YWx1ZXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RLZXlWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IGtleVZhbHVlcyA9IHt9XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlWYWx1ZXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5VmFsdWVzO1xufVxuXG5leHBvcnQgY29uc3QgaWRUb0ludCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGFbaV0uaWQgPSBwYXJzZUludChkYXRhW2ldLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBjb25zdCB2YWxTdHIgPSBmdW5jdGlvbiAoYXJyYXlPZlBvc3RPYmplY3RzKSB7XG4gICAgLy8gbGV0IHJlc3VsdFF1ZXJ5ID0gYFdJVEggcG9zdF9hdXRob3IgQVMgKFxuICAgIC8vICAgICBTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0ke25pY2tuYW1lfVxuICAgIC8vICAgICkgYDtcbiAgICBsZXQgcmVzdWx0UXVlcnkgPSBgYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZQb3N0T2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZXNJbkFycmF5ID0gaGFydmVzdFZhbHVlcyhhcnJheU9mUG9zdE9iamVjdHNbaV0pO1xuICAgICAgICBsZXQgdmFsID0gYCAoYDtcbiAgICAgICAgdmFsICs9IGAoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JHtgJ2AgKyB2YWx1ZXNJbkFycmF5WzBdICsgYCdgfSksIGA7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdmFsdWVzSW5BcnJheS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICBpZiAoIGogIT09IDIpIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gXCInXCIgKyB2YWx1ZXNJbkFycmF5W2pdICsgXCInXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCArPSB2YWx1ZXNJbkFycmF5W2pdO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiAhPT0gdmFsdWVzSW5BcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRRdWVyeSArPSB2YWw7XG4gICAgICAgIGlmIChpID09PSBhcnJheU9mUG9zdE9iamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCkgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRRdWVyeTtcbn1cblxuXG5leHBvcnQgY29uc3QgY29uc3RydWN0UGF0aFN0cmluZyA9IGZ1bmN0aW9uIChwYXRoQXJyYXkpIHtcbiAgICBsZXQgcmVzdWx0ID0gYHtgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBwYXRoQXJyYXlbaV07XG4gICAgICAgIGlmIChpICE9PSBwYXRoQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGAsIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9IGB9YDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3QgZm9ydW1TZXJpYWxpemVyID0gZnVuY3Rpb24gKGZvcnVtc0FycmF5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coXCI/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cIik7XG4gICAgLy8gY29uc29sZS5sb2coXCIjIyNcIilcbiAgICBmb3IgKGxldCBmb3J1bSBvZiBmb3J1bXNBcnJheSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiMjI1wiK2ZvcnVtLmFib3V0KTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZEZvcnVtID0ge1xuICAgICAgICAgICAgXCJhYm91dFwiOiBmb3J1bS5hYm91dCxcbiAgICAgICAgICAgIFwiZW1haWxcIjogZm9ydW0uZW1haWwsXG4gICAgICAgICAgICBcImZ1bGxuYW1lXCI6IGZvcnVtLmZ1bGxuYW1lLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiOiBmb3J1bS5uaWNrbmFtZVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHNlcmlhbGl6ZWRGb3J1bSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQYWlyZVF1ZXJ5ID0gZnVuY3Rpb24gKHBhaXJzKSB7XG4gICAgbGV0IHJlc3VsdFF1ZXJ5ID0gYGA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRRdWVyeSArPSBgKChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0nJHtwYWlyc1tpXVswXX0nKSwgJyR7cGFpcnNbaV1bMV19JylgO1xuICAgICAgICBpZiAoaSAhPT0gcGFpcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz1gLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRRdWVyeTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnLXByb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=