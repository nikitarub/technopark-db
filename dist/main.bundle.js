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
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./forum/server/models/ThreadModel.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var createPostsLoop =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, slugOrId, isId) {
    var postsValues, creationDate, newPosts, thread, _thread, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, parentPost, postId, path, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postsValues = [];
            creationDate = new Date().toUTCString();
            newPosts = req.body;

            if (newPosts.length) {
              _context.next = 23;
              break;
            }

            if (!isId) {
              _context.next = 15;
              break;
            }

            _context.next = 7;
            return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_5__["default"].getThreadById(parseInt(slugOrId));

          case 7:
            thread = _context.sent;

            if (!thread) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(201).send([]));

          case 12:
            return _context.abrupt("return", res.status(404).json({
              message: 'cant find thread'
            }));

          case 13:
            _context.next = 23;
            break;

          case 15:
            _context.next = 17;
            return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_5__["default"].getThreadBySlug(slugOrId);

          case 17:
            _thread = _context.sent;

            if (!_thread) {
              _context.next = 22;
              break;
            }

            return _context.abrupt("return", res.status(201).send([]));

          case 22:
            return _context.abrupt("return", res.status(404).json({
              message: 'cant find thread'
            }));

          case 23:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 26;
            _iterator = newPosts[Symbol.iterator]();

          case 28:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 63;
              break;
            }

            _post = _step.value;

            if (!_post.parent) {
              _context.next = 41;
              break;
            }

            _context.next = 33;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPostByIdAndThreadId(_post.parent, slugOrId, isId);

          case 33:
            parentPost = _context.sent;

            if (parentPost) {
              _context.next = 38;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: 'no parent posts'
            }));

          case 38:
            _post.parent = parentPost.id;

          case 39:
            _context.next = 42;
            break;

          case 41:
            _post.parent = null;

          case 42:
            _context.next = 44;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPairUsingThread(_post.author, slugOrId, isId);

          case 44:
            _context.next = 46;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(slugOrId, isId);

          case 46:
            _context.next = 48;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIdForPost();

          case 48:
            postId = _context.sent;
            _post.author = "(SELECT nickname FROM users WHERE nickname=".concat("'" + _post.author + "'", ")");
            _post.message = "'" + _post.message + "'";
            _post.created = "'" + creationDate + "'";
            _post.thread = isId ? slugOrId : "(SELECT id FROM threads WHERE slug='".concat(slugOrId, "')");
            _post.forum = isId ? "(SELECT forum FROM threads WHERE id=".concat(slugOrId, ")") : "(SELECT forum FROM threads WHERE slug='".concat(slugOrId, "')");
            _post.id = parseInt(postId.nextval);
            _context.next = 57;
            return constructPathToPost(_post);

          case 57:
            path = _context.sent;
            _post.pathtopost = "'" + path + "'";
            postsValues.push(_post);

          case 60:
            _iteratorNormalCompletion = true;
            _context.next = 28;
            break;

          case 63:
            _context.next = 69;
            break;

          case 65:
            _context.prev = 65;
            _context.t0 = _context["catch"](26);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 69:
            _context.prev = 69;
            _context.prev = 70;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 72:
            _context.prev = 72;

            if (!_didIteratorError) {
              _context.next = 75;
              break;
            }

            throw _iteratorError;

          case 75:
            return _context.finish(72);

          case 76:
            return _context.finish(69);

          case 77:
            // добавляем пост
            result = [];
            columns = "(author, \"message\", parent, \"created\", thread, forum, id, pathtopost)";
            valuesInStringQuery = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["valStr"])(postsValues);
            query = "INSERT INTO posts " + columns + " VALUES " + valuesInStringQuery + " RETURNING *"; // console.log('NOT HERE');

            _context.next = 83;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewPostsByQuery(query);

          case 83:
            addedPosts = _context.sent;

            if (!addedPosts) {
              _context.next = 107;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 88;

            for (_iterator2 = addedPosts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              post = _step2.value;
              post.id = parseInt(post.id);
              post.thread = parseInt(post.thread);
              post.parent = parseInt(post.parent);
              result.push(post);
            }

            _context.next = 96;
            break;

          case 92:
            _context.prev = 92;
            _context.t1 = _context["catch"](88);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 96:
            _context.prev = 96;
            _context.prev = 97;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 99:
            _context.prev = 99;

            if (!_didIteratorError2) {
              _context.next = 102;
              break;
            }

            throw _iteratorError2;

          case 102:
            return _context.finish(99);

          case 103:
            return _context.finish(96);

          case 104:
            return _context.abrupt("return", res.status(201).json(result));

          case 107:
            return _context.abrupt("return", res.status(404).json({
              message: 'cant find author'
            }));

          case 108:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[26, 65, 69, 77], [70,, 72, 76], [88, 92, 96, 104], [97,, 99, 103]]);
  }));

  return function createPostsLoop(_x, _x2, _x3, _x4) {
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

  return function constructPathToPost(_x5) {
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
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_5__);
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
      regeneratorRuntime.mark(function _callee(req, res) {
        var user, slug, title, newForumData, result, exsistingForum;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = req.body['user'];
                slug = req.body['slug'];
                title = req.body['title'];
                _context.prev = 3;
                _context.next = 6;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserNickname(user);

              case 6:
                user = _context.sent;

                if (user) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
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
                return _context.abrupt("return", res.status(500).json({
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

                return _context.abrupt("return", res.status(201).json(result));

              case 25:
                _context.prev = 25;
                _context.next = 28;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(slug);

              case 28:
                exsistingForum = _context.sent;
                return _context.abrupt("return", res.status(409).json(exsistingForum));

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](25);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING FORUM BY SLUG');
                console.log(_context.t1);
                return _context.abrupt("return", res.status(500).json({
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
    value: function getDetails(req, res) {
      var slug = req.params['slug'];
      _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(slug).then(function (data) {
        if (data) {
          return res.status(200).json(data);
        }

        return res.status(404).json({
          message: 'cant find forum'
        });
      }).catch(function (error) {
        console.log('--------------------------------------------');
        console.log('ERROR IN GETTING FORUM BY SLUG');
        console.log(error);
        return res.status(500).json({
          message: "crash"
        });
      });
    }
  }, {
    key: "createThreadInForum",
    value: function () {
      var _createThreadInForum = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var author, forumSlug, forum, keyValues, columns, i, values, result, exsistingThread;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                author = req.body['author'];
                forumSlug = req.params['slug'];
                _context2.prev = 2;
                _context2.next = 5;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserNickname(author);

              case 5:
                author = _context2.sent;

                if (author) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
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
                return _context2.abrupt("return", res.status(500).json({
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

                return _context2.abrupt("return", res.status(404).json({
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
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 30:
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(req.body);
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
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPairUsingForum(forum.slug, author.nickname);

              case 43:
                _context2.next = 51;
                break;

              case 45:
                _context2.prev = 45;
                _context2.t2 = _context2["catch"](40);
                console.log('--------------------------------------------');
                console.log('ERROR IN creating pair');
                console.log(_context2.t2);
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 51:
                _context2.prev = 51;
                _context2.next = 54;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementThreads(forum.slug);

              case 54:
                result.id = parseInt(result.id);
                return _context2.abrupt("return", res.status(201).json(result));

              case 58:
                _context2.prev = 58;
                _context2.t3 = _context2["catch"](51);
                console.log('--------------------------------------------');
                console.log('ERROR IN threads increment');
                console.log(_context2.t3);
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 64:
                _context2.next = 80;
                break;

              case 66:
                _context2.prev = 66;
                _context2.next = 69;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(req.body['slug']);

              case 69:
                exsistingThread = _context2.sent;
                exsistingThread.id = parseInt(exsistingThread.id);
                return _context2.abrupt("return", res.status(409).json(exsistingThread));

              case 74:
                _context2.prev = 74;
                _context2.t4 = _context2["catch"](66);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING THREAD BY SLUG !!!!');
                console.log(_context2.t4);
                return _context2.abrupt("return", res.status(500).json({
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
    value: function getThreads(req, res) {
      var slug = req.params['slug'];
      var queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(req.query);

      if (!queryParams['limit']) {
        queryParams['limit'] = 10;
      } else {
        queryParams['limit'] = parseInt(queryParams['limit']);
      }

      _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumSlug(slug).then(function (data) {
        if (data) {
          _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadsByForumSlug(slug, queryParams).then(function (data) {
            if (data) {
              data = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["idToInt"])(data);
              return res.status(200).json(data);
            }
          }).catch(function (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING THREADS OF FORUM');
            console.log(error);
            return res.status(500).json({
              message: "crash"
            });
          });
        } else {
          return res.status(404).json({
            message: "Can't find forum"
          });
        }
      }).catch(function (error) {
        console.log('--------------------------------------------');
        console.log('ERROR IN GETTING FORUM BY SLUG');
        console.log(error);
        return res.status(500).json({
          message: "crash"
        });
      });
    }
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var slug, queryParams, forum, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                slug = req.params['slug'];
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(req.query);

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                }

                queryParams.desc = queryParams.desc === 'true';
                _context3.prev = 4;
                _context3.next = 7;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(slug);

              case 7:
                forum = _context3.sent;
                _context3.next = 16;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](4);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING FORUM BY SLUG');
                console.log(_context3.t0);
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 16:
                if (forum) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  message: "Can't find forum"
                }));

              case 18:
                result = [];
                _context3.prev = 19;
                _context3.next = 22;
                return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUsers(forum.slug, queryParams);

              case 22:
                result = _context3.sent;
                _context3.next = 31;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3["catch"](19);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USERS IN FORUM');
                console.log(_context3.t1);
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 31:
                return _context3.abrupt("return", res.status(200).json(result));

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 10], [19, 25]]);
      }));

      function getUsers(_x5, _x6) {
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
      regeneratorRuntime.mark(function _callee(req, res) {
        var postId, result, postData, relatedTo, entity, relatedEntities, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, relatedEntity;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postId = req.params['id'];
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

                return _context.abrupt("return", res.status(404).json({
                  message: 'cant find post'
                }));

              case 15:
                relatedTo = req.query['related'];

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
                result.post = postData;
                return _context.abrupt("return", res.status(200).json(result));

              case 90:
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
      regeneratorRuntime.mark(function _callee2(req, res) {
        var postId, newData, postData, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                postId = req.params['id'];
                newData = req.body;
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

                return _context2.abrupt("return", res.status(404).json({
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
                return _context2.abrupt("return", res.status(200).json(postData));

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

                return _context2.abrupt("return", res.status(409).json({
                  message: 'already existed data'
                }));

              case 36:
                result.id = parseInt(result.id);
                result.thread = parseInt(result.thread);
                result.parent ? parseInt(result.parent) : result.parent;
                return _context2.abrupt("return", res.status(200).json(result));

              case 40:
                _context2.next = 46;
                break;

              case 42:
                postData.id = parseInt(postData.id);
                postData.thread = parseInt(postData.thread);
                postData.parent ? parseInt(postData.parent) : postData.parent;
                return _context2.abrupt("return", res.status(200).json(postData));

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
      regeneratorRuntime.mark(function _callee(req, res) {
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
                return _context.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 12:
                return _context.abrupt("return", res.status(200).json(result));

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
      regeneratorRuntime.mark(function _callee2(req, res) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearAll();

              case 3:
                result = _context2.sent;
                _context2.next = 12;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log('--------------------------------------------');
                console.log(_context2.t0);
                console.log('ERROR IN COUNTING');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 12:
                return _context2.abrupt("return", res.status(200).end());

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
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
      regeneratorRuntime.mark(function _callee(req, res) {
        var slugOrId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                slugOrId = req.params['slug_or_id']; // let thread;

                if (!/^\d+$/.test(slugOrId)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return Object(_ControllerUtils_js__WEBPACK_IMPORTED_MODULE_5__["createPostsLoop"])(req, res, slugOrId, true);

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.next = 8;
                return Object(_ControllerUtils_js__WEBPACK_IMPORTED_MODULE_5__["createPostsLoop"])(req, res, slugOrId, false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
      regeneratorRuntime.mark(function _callee2(req, res) {
        var slugOrId, voiceValue, author, thread, votedData, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                slugOrId = req.params['slug_or_id'];
                voiceValue = req.body.voice;
                author = req.body.nickname;
                _context2.prev = 3;
                _context2.next = 6;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserNickname(author);

              case 6:
                author = _context2.sent;

                if (author) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  message: 'cant find author'
                }));

              case 9:
                _context2.next = 17;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICKNAME');
                console.log(_context2.t0);
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 17:
                if (!/^\d+$/.test(slugOrId)) {
                  _context2.next = 32;
                  break;
                }

                _context2.prev = 18;
                _context2.next = 21;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId));

              case 21:
                thread = _context2.sent;
                _context2.next = 30;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t1 = _context2["catch"](18);
                console.log('--------------------------------------------');
                console.log(_context2.t1);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 30:
                _context2.next = 44;
                break;

              case 32:
                _context2.prev = 32;
                _context2.next = 35;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId);

              case 35:
                thread = _context2.sent;
                _context2.next = 44;
                break;

              case 38:
                _context2.prev = 38;
                _context2.t2 = _context2["catch"](32);
                console.log('--------------------------------------------');
                console.log(_context2.t2);
                console.log('ERROR IN GETTING THREAD BY slug');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 44:
                if (thread) {
                  _context2.next = 46;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 46:
                _context2.prev = 46;
                _context2.next = 49;
                return _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].vote(voiceValue, thread.id, author.nickname);

              case 49:
                votedData = _context2.sent;
                _context2.next = 58;
                break;

              case 52:
                _context2.prev = 52;
                _context2.t3 = _context2["catch"](46);
                console.log('--------------------------------------------');
                console.log(_context2.t3);
                console.log('ERROR IN MAKING VOTE');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 58:
                if (!votedData) {
                  _context2.next = 62;
                  break;
                }

                if (votedData.existed) {
                  votedData.voice = votedData.voice === 1 ? votedData.voice + 1 : votedData.voice - 1;
                }

                _context2.next = 64;
                break;

              case 62:
                thread.id = parseInt(thread.id);
                return _context2.abrupt("return", res.status(200).json(thread));

              case 64:
                _context2.prev = 64;
                _context2.next = 67;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].incrementVotesById(thread.id, votedData.voice);

              case 67:
                result = _context2.sent;
                _context2.next = 76;
                break;

              case 70:
                _context2.prev = 70;
                _context2.t4 = _context2["catch"](64);
                console.log('--------------------------------------------');
                console.log(_context2.t4);
                console.log('ERROR IN incrementing votes in thread');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 76:
                result.id = parseInt(result.id);
                return _context2.abrupt("return", res.status(200).json(result));

              case 78:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11], [18, 24], [32, 38], [46, 52], [64, 70]]);
      }));

      function voteForThread(_x3, _x4) {
        return _voteForThread.apply(this, arguments);
      }

      return voteForThread;
    }()
  }, {
    key: "getDetails",
    value: function getDetails(req, res) {
      var slugOrId = req.params['slug_or_id'];

      if (/^\d+$/.test(slugOrId)) {
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId)).then(function (thread) {
          if (thread) {
            thread.id = parseInt(thread.id);
            return res.status(200).json(thread);
          } else {
            return res.status(404).json({
              mesage: 'cant find thread'
            });
          }
        }).catch(function (error) {
          console.log('--------------------------------------------');
          console.log(error);
          console.log('ERROR IN GETTING THREAD BY ID');
          return res.status(500).json({
            message: "crash"
          });
        });
      } else {
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId).then(function (thread) {
          if (thread) {
            thread.id = parseInt(thread.id);
            return res.status(200).json(thread);
          } else {
            return res.status(404).json({
              mesage: 'cant find thread'
            });
          }
        }).catch(function (error) {
          console.log('--------------------------------------------');
          console.log(error);
          console.log('ERROR IN GETTING THREAD BY SLUG');
          return res.status(500).json({
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
      regeneratorRuntime.mark(function _callee3(req, res) {
        var queryParams, result, slugOrId, thread;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestKeyValues"])(req.query);
                result = [];

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                }

                queryParams['desc'] = queryParams['desc'] === 'true';
                queryParams['since'] = parseInt(queryParams['since']);
                slugOrId = req.params['slug_or_id'];

                if (!/^\d+$/.test(slugOrId)) {
                  _context3.next = 21;
                  break;
                }

                _context3.prev = 7;
                _context3.next = 10;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId));

              case 10:
                thread = _context3.sent;
                _context3.next = 19;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](7);
                console.log('--------------------------------------------');
                console.log(_context3.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 19:
                _context3.next = 33;
                break;

              case 21:
                _context3.prev = 21;
                _context3.next = 24;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadBySlug(slugOrId);

              case 24:
                thread = _context3.sent;
                _context3.next = 33;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](21);
                console.log('--------------------------------------------');
                console.log(_context3.t1);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 33:
                if (thread) {
                  _context3.next = 35;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 35:
                if (!(queryParams.sort === 'flat' || !queryParams.sort)) {
                  _context3.next = 50;
                  break;
                }

                _context3.prev = 36;
                _context3.next = 39;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].flatSort(thread.id, queryParams);

              case 39:
                result = _context3.sent;
                _context3.next = 48;
                break;

              case 42:
                _context3.prev = 42;
                _context3.t2 = _context3["catch"](36);
                console.log('--------------------------------------------');
                console.log(_context3.t2);
                console.log('ERROR IN flat sort');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 48:
                _context3.next = 78;
                break;

              case 50:
                if (!(queryParams.sort === 'tree')) {
                  _context3.next = 65;
                  break;
                }

                _context3.prev = 51;
                _context3.next = 54;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].treeSort(thread.id, queryParams);

              case 54:
                result = _context3.sent;
                _context3.next = 63;
                break;

              case 57:
                _context3.prev = 57;
                _context3.t3 = _context3["catch"](51);
                console.log('--------------------------------------------');
                console.log(_context3.t3);
                console.log('ERROR IN tree sort');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 63:
                _context3.next = 78;
                break;

              case 65:
                if (!(queryParams.sort === 'parent_tree')) {
                  _context3.next = 78;
                  break;
                }

                _context3.prev = 66;
                _context3.next = 69;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].parentTreeSort(thread.id, queryParams);

              case 69:
                result = _context3.sent;
                _context3.next = 78;
                break;

              case 72:
                _context3.prev = 72;
                _context3.t4 = _context3["catch"](66);
                console.log('--------------------------------------------');
                console.log(_context3.t4);
                console.log('ERROR IN parent tree');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 78:
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
                return _context3.abrupt("return", res.status(200).json(result));

              case 80:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 13], [21, 27], [36, 42], [51, 57], [66, 72]]);
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
      regeneratorRuntime.mark(function _callee4(req, res) {
        var slugOrId, newData, keyValues, columns, thread, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                slugOrId = req.params['slug_or_id'];
                newData = req.body;
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
                return _context4.abrupt("return", res.status(500).json({
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
                return _context4.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 31:
                if (thread) {
                  _context4.next = 33;
                  break;
                }

                return _context4.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 33:
                if (!(!Object.values(newData).length || !columns.length)) {
                  _context4.next = 36;
                  break;
                }

                thread.id = parseInt(thread.id);
                return _context4.abrupt("return", res.status(200).json(thread));

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
                return _context4.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 48:
                if (!(result === 'conflict')) {
                  _context4.next = 52;
                  break;
                }

                return _context4.abrupt("return", res.status(409).json({
                  message: 'already existed data'
                }));

              case 52:
                result.id = parseInt(result.id);
                return _context4.abrupt("return", res.status(200).json(result));

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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);
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
      regeneratorRuntime.mark(function _callee(req, res) {
        var nickname, email, newUserData, result, existingUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nickname = req.params['nickname'];
                email = req.body['email'];
                newUserData = [nickname, req.body['fullname'], req.body['about'], email];
                _context.next = 5;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].createNewUser(newUserData);

              case 5:
                result = _context.sent;

                if (!result) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", res.status(201).json(result));

              case 10:
                _context.prev = 10;
                _context.next = 13;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserByNicknameOrEmail(nickname, email);

              case 13:
                existingUser = _context.sent;
                return _context.abrupt("return", res.status(409).json(existingUser));

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](10);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK OR EMAIL');
                console.log(_context.t0);
                return _context.abrupt("return", res.status(500).json({
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
    value: function getUser(req, res) {
      var nickname = req.params['nickname'];
      _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserByNickname(nickname).then(function (user) {
        if (user) {
          return res.status(200).json(user);
        }

        return res.status(404).json({
          message: "Can't find user"
        });
      }).catch(function (error) {
        console.log('--------------------------------------------');
        console.log('ERROR IN GETTING USER BY NICK');
        console.log(error);
        return res.status(500).json({
          message: "crash"
        });
      });
    }
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var nickname, newData, user, keyValues, columns, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                nickname = req.params['nickname'];
                newData = req.body; // существует ли пользователь

                _context2.prev = 2;
                _context2.next = 5;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserByNickname(nickname);

              case 5:
                user = _context2.sent;

                if (user) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
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
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 16:
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["harvestKeyValues"])(newData);
                columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["harvestColumns"])(newData);

                if (!(!Object.values(newData).length || !columns.length)) {
                  _context2.next = 20;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json(user));

              case 20:
                _context2.next = 22;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateUser(nickname, columns, keyValues);

              case 22:
                result = _context2.sent;

                if (result) {
                  _context2.next = 27;
                  break;
                }

                return _context2.abrupt("return", res.status(409).json({
                  message: "User with such nickname or email already exists"
                }));

              case 27:
                return _context2.abrupt("return", res.status(200).json(result));

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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routers_UserRoutes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routers/UserRoutes.js */ "./forum/server/routers/UserRoutes.js");
/* harmony import */ var _routers_ForumRoutes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers/ForumRoutes.js */ "./forum/server/routers/ForumRoutes.js");
/* harmony import */ var _routers_ThreadRoutes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/ThreadRoutes.js */ "./forum/server/routers/ThreadRoutes.js");
/* harmony import */ var _routers_PostRoutes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routers/PostRoutes.js */ "./forum/server/routers/PostRoutes.js");
/* harmony import */ var _routers_ServiceRoutes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routers/ServiceRoutes.js */ "./forum/server/routers/ServiceRoutes.js");






var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use('/api/user', _routers_UserRoutes_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use('/api/forum', _routers_ForumRoutes_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.use('/api/thread', _routers_ThreadRoutes_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.use('/api/post', _routers_PostRoutes_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use('/api/service', _routers_ServiceRoutes_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.get('/', function () {
  console.log('hello');
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
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
    key: "createForumUserPairUsingForum",
    value: function () {
      var _createForumUserPairUsingForum = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(forumSlug, nickname) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log('ERROR IN createForumUserPairUsingForum');
                forumSlug = "(SELECT slug FROM forums WHERE slug='".concat(forumSlug, "')");
                _context2.prev = 1;
                _context2.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("INSERT INTO forumusers (forumslug, usernickname) VALUES ($1:raw,\n                (SELECT nickname FROM users WHERE nickname=$2))\n                ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *", [forumSlug, nickname]);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING THREAD');
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function createForumUserPairUsingForum(_x, _x2) {
        return _createForumUserPairUsingForum.apply(this, arguments);
      }

      return createForumUserPairUsingForum;
    }()
  }, {
    key: "createForumUserPairUsingThread",
    value: function () {
      var _createForumUserPairUsingThread = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(nickname, threadSlugOrId, isId) {
        var forumSlug;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log('ERROR IN createForumUserPairUsingThread');
                forumSlug = isId ? "(SELECT forum FROM threads WHERE id=".concat(threadSlugOrId, ")") : "(SELECT forum FROM threads WHERE slug='".concat(threadSlugOrId, "')");
                _context3.prev = 1;
                _context3.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("INSERT INTO forumusers (forumslug, usernickname) VALUES ($1:raw,\n                (SELECT nickname FROM users WHERE nickname=$2))\n                ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *", [forumSlug, nickname]);

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING THREAD');
                console.log(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7]]);
      }));

      function createForumUserPairUsingThread(_x3, _x4, _x5) {
        return _createForumUserPairUsingThread.apply(this, arguments);
      }

      return createForumUserPairUsingThread;
    }()
  }, {
    key: "incrementThreads",
    value: function incrementThreads(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('UPDATE forums SET threads = threads + 1 WHERE slug=$1 RETURNING *', [slug]);
    }
  }, {
    key: "incrementPosts",
    value: function () {
      var _incrementPosts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(slugOrId, isId) {
        var forumSlug;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log('ERROR IN incrementPosts');
                forumSlug = isId ? "(SELECT forum FROM threads WHERE id=".concat(slugOrId, ")") : "(SELECT forum FROM threads WHERE slug='".concat(slugOrId, "')");
                _context4.prev = 1;
                _context4.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("UPDATE forums SET posts = posts + 1 WHERE slug=".concat(forumSlug));

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                console.log('--------------------------------------------');
                console.log('ERROR IN INCREMENTING POSTS');
                console.log(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      function incrementPosts(_x6, _x7) {
        return _incrementPosts.apply(this, arguments);
      }

      return incrementPosts;
    }()
  }, {
    key: "getUsers",
    value: function getUsers(slug, queryParams) {
      var query;

      if (queryParams.since && !queryParams.desc) {
        query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n            SELECT * FROM forumusers AS FU\n            JOIN users AS U ON FU.usernickname = U.nickname\n            WHERE FU.forumslug=$1 AND U.nickname>$2\n            ", [slug, queryParams.since]);
      } else if (queryParams.since && queryParams.desc) {
        query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n            SELECT * FROM forumusers AS FU\n            JOIN users AS U ON FU.usernickname = U.nickname\n            WHERE FU.forumslug=$1 AND U.nickname<$2\n            ", [slug, queryParams.since]);
      } else {
        query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n            SELECT * FROM forumusers AS FU\n            JOIN users AS U ON FU.usernickname = U.nickname\n            WHERE FU.forumslug=$1", [slug]);
      }

      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("$1:raw \n            ORDER BY $2:raw LIMIT $3", [query.toString(), queryParams.desc ? 'U.nickname DESC' : 'U.nickname ASC', queryParams.limit]);
    }
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
    }()
  }, {
    key: "getPostByIdAndThreadId",
    value: function () {
      var _getPostByIdAndThreadId = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id, slugOrId, isId) {
        var threadId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log('ERROR IN getPostByIdAndThreadId');
                threadId = isId ? slugOrId : "(SELECT id FROM threads WHERE slug='".concat(slugOrId, "')");
                _context2.prev = 1;
                _context2.next = 4;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("SELECT id FROM posts WHERE id=".concat(id, " AND thread=").concat(threadId));

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING POST BY ID AND THREADID');
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function getPostByIdAndThreadId(_x2, _x3, _x4) {
        return _getPostByIdAndThreadId.apply(this, arguments);
      }

      return getPostByIdAndThreadId;
    }()
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
    value: function flatSort(id, queryParams) {
      if (queryParams.since) {
        if (queryParams.desc) {
          return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1 AND id<$2\n                ORDER BY \"created\" DESC, id DESC LIMIT $3", [id, queryParams.since, queryParams.limit]);
        } else {
          return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1 AND id>$2\n                ORDER BY \"created\" ASC, id ASC LIMIT $3", [id, queryParams.since, queryParams.limit]);
        }
      } else {
        if (queryParams.desc) {
          return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1\n                ORDER BY \"created\" DESC, id DESC LIMIT $3", [id, queryParams.since, queryParams.limit]);
        } else {
          return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts WHERE thread=$1\n                ORDER BY \"created\" ASC, id ASC LIMIT $3", [id, queryParams.since, queryParams.limit]);
        }
      }
    }
  }, {
    key: "treeSort",
    value: function treeSort(id, queryParams) {
      var pathSortRule = queryParams.desc ? 'pathtopost DESC' : 'pathtopost ASC';

      if (queryParams.since && !queryParams.desc) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n            WHERE thread=$1 AND pathtopost > (SELECT pathtopost FROM posts WHERE id=$2)\n            ORDER BY $3:raw LIMIT $4", [id, queryParams.since, pathSortRule, queryParams.limit]);
      } else if (queryParams.since && queryParams.desc) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n            WHERE thread=$1 AND pathtopost < (SELECT pathtopost FROM posts WHERE id=$2)\n            ORDER BY $3:raw LIMIT $4", [id, queryParams.since, pathSortRule, queryParams.limit]);
      } else if (!queryParams.since) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n            WHERE thread=$1 \n            ORDER BY $2:raw LIMIT $3", [id, pathSortRule, queryParams.limit]);
      }
    }
  }, {
    key: "parentTreeSort",
    value: function parentTreeSort(id, queryParams) {
      var pathSortRule = queryParams.desc ? 'pid.parent_id DESC, pathtopost ASC' : 'pathtopost ASC';
      var idSortRule = queryParams.desc ? 'id DESC' : 'id ASC';

      if (queryParams.since && !queryParams.desc) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                JOIN (\n                    SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1 AND pathtopost[1] > (SELECT pathtopost[1] FROM posts WHERE id=$2)\n                    ORDER BY $3:raw LIMIT $4\n                ) AS pid\n                ON (thread=$1 AND pid.parent_id=pathtopost[1])\n                ORDER BY $5:raw\n                ", [id, queryParams.since, idSortRule, queryParams.limit, pathSortRule]);
      } else if (queryParams.since && queryParams.desc) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                JOIN (\n                    SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1 AND pathtopost[1] < (SELECT pathtopost[1] FROM posts WHERE id=$2)\n                    ORDER BY $3:raw LIMIT $4\n                ) AS pid\n                ON (thread=$1 AND pid.parent_id=pathtopost[1])\n                ORDER BY $5:raw\n                ", [id, queryParams.since, idSortRule, queryParams.limit, pathSortRule]);
      } else if (!queryParams.since) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("SELECT * FROM posts\n                JOIN (\n                    SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1\n                    ORDER BY $3:raw LIMIT $4\n                ) AS pid\n                ON (thread=$1 AND pid.parent_id=pathtopost[1])\n                ORDER BY $5:raw\n                ", [id, queryParams.since, idSortRule, queryParams.limit, pathSortRule]);
      }
    }
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
    value: function getThreadsByForumSlug(forumSlug, queryParams) {
      queryParams.desc = queryParams.desc === 'true';

      if (queryParams.since && !queryParams.desc) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM threads WHERE forum=$1 AND "created">=$2 ORDER BY $3:raw LIMIT $4', [forumSlug, queryParams.since, queryParams.desc ? '"created" DESC' : '"created" ASC', queryParams.limit]);
      } else if (queryParams.since && queryParams.desc) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM threads WHERE forum=$1 AND "created"<=$2 ORDER BY $3:raw LIMIT $4', [forumSlug, queryParams.since, queryParams.desc ? '"created" DESC' : '"created" ASC', queryParams.limit]);
      } else if (!queryParams.since) {
        return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone('SELECT * FROM threads WHERE forum=$1 ORDER BY $2:raw LIMIT $3', [forumSlug, queryParams.desc ? '"created" DESC' : '"created" ASC', queryParams.limit]);
      }
    }
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
    }() // async updateUser(nickname,columns, keyValues) {
    //     const query = pgp.helpers.update(keyValues, columns, {table: 'users'}, null, {emptyUpdate: 'conflict'}) + " WHERE \"nickname\" = \'" +  nickname + "\' RETURNING *";
    //     console.log("QUERY", query);
    //     return await dbInstance.oneOrNone(query);
    // }

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
    value: function vote(voice, threadId, nickname) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("INSERT INTO votes (voice, thread, nickname) VALUES ($1, $2, $3) ON CONFLICT ON CONSTRAINT uniqueThreadNickname DO \n        UPDATE SET voice=$1 WHERE votes.voice<>$1 RETURNING *, (xmax::text::int > 0) as existed", [voice, threadId, nickname]);
    }
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ForumController.js */ "./forum/server/controllers/ForumController.js");


var forumRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
forumRouter.post('/create', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createForum);
forumRouter.post('/:slug/create', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createThreadInForum);
forumRouter.get('/:slug/details', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails);
forumRouter.get('/:slug/threads', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreads);
forumRouter.get('/:slug/users', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUsers);
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/PostController.js */ "./forum/server/controllers/PostController.js");


var postRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
postRouter.get('/:id/details', _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails);
postRouter.post('/:id/details', _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDetails);
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ServiceController.js */ "./forum/server/controllers/ServiceController.js");


var serviceRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
serviceRouter.get('/status', _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_1__["default"].countAll);
serviceRouter.post('/clear', _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearAll);
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ThreadController.js */ "./forum/server/controllers/ThreadController.js");


var threadRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
threadRouter.post('/:slug_or_id/create', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPost);
threadRouter.post('/:slug_or_id/vote', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].voteForThread);
threadRouter.get('/:slug_or_id/details', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails);
threadRouter.get('/:slug_or_id/posts', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPosts);
threadRouter.post('/:slug_or_id/details', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateThread);
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/UserController.js */ "./forum/server/controllers/UserController.js");


var userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
userRouter.post('/:nickname/create', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createUser);
userRouter.post('/:nickname/profile', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateUser);
userRouter.get('/:nickname/profile', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUser);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),

/***/ "./forum/server/utils.js":
/*!*******************************!*\
  !*** ./forum/server/utils.js ***!
  \*******************************/
/*! exports provided: harvestColumns, harvestValues, harvestKeyValues, idToInt, valStr, constructPathString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestColumns", function() { return harvestColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestValues", function() { return harvestValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestKeyValues", function() { return harvestKeyValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idToInt", function() { return idToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valStr", function() { return valStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructPathString", function() { return constructPathString; });
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
  var resultQuery = "";

  for (var i = 0; i < arrayOfPostObjects.length; i++) {
    var valuesInArray = harvestValues(arrayOfPostObjects[i]);
    var val = " ("; // val += `(SELECT nickname FROM users WHERE nickname=${`'` + valuesInArray[0] + `'`})`;

    for (var j = 0; j < valuesInArray.length; j++) {
      // if ( j !== 2) {
      // val += "'" + valuesInArray[j] + "'";
      // } else {
      val += valuesInArray[j]; // }

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
}; // export const construnctPrepareStatementValues = function (len) {
//     let result = ``;
//     for (let i = 0; i < len; i++) {
//         // result += `(`;
//         // for (let j = 1; j <= 8; j++) {
//         //     if (j !== 8) {
//         //         result += `$` + `${j + i * 8}, `;
//         //     } else {
//         //         result += `$` + `${j + i * 8}`;
//         //     }
//         // }
//         // if (i !== len - 1) {
//         //     result += `), `;
//         // } else {
//         //     result += `) `;
//         // }
//         result += `(`;
//         if (i !== len - 1) {
//             result += `${i+1}, `;
//         } else {
//             result += `${i+1} `;
//         }
//         result += `)`;
//     }
//     // console.log(len, result);
//     return result;
// }

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJzbHVnT3JJZCIsImlzSWQiLCJwb3N0c1ZhbHVlcyIsImNyZWF0aW9uRGF0ZSIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsIm5ld1Bvc3RzIiwiYm9keSIsImxlbmd0aCIsIlRocmVhZE1vZGVsIiwiZ2V0VGhyZWFkQnlJZCIsInBhcnNlSW50IiwidGhyZWFkIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJtZXNzYWdlIiwiZ2V0VGhyZWFkQnlTbHVnIiwicG9zdCIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJwYXJlbnRQb3N0IiwiaWQiLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpclVzaW5nVGhyZWFkIiwiYXV0aG9yIiwiaW5jcmVtZW50UG9zdHMiLCJnZXRJZEZvclBvc3QiLCJwb3N0SWQiLCJjcmVhdGVkIiwiZm9ydW0iLCJuZXh0dmFsIiwiY29uc3RydWN0UGF0aFRvUG9zdCIsInBhdGgiLCJwYXRodG9wb3N0IiwicHVzaCIsInJlc3VsdCIsImNvbHVtbnMiLCJ2YWx1ZXNJblN0cmluZ1F1ZXJ5IiwidmFsU3RyIiwicXVlcnkiLCJjcmVhdGVOZXdQb3N0c0J5UXVlcnkiLCJhZGRlZFBvc3RzIiwiaWRBcnJheSIsImlkU3RyaW5nIiwiY29uc3RydWN0UGF0aFN0cmluZyIsImdldFBhdGhUb1Bvc3QiLCJwYXRoU3RyaW5nIiwiRm9ydW1Db250cm9sbGVyIiwidXNlciIsInNsdWciLCJ0aXRsZSIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdGb3J1bURhdGEiLCJuaWNrbmFtZSIsImNyZWF0ZU5ld0ZvcnVtIiwiZ2V0Rm9ydW1CeVNsdWciLCJleHNpc3RpbmdGb3J1bSIsInBhcmFtcyIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImZvcnVtU2x1ZyIsImdldEZvcnVtU2x1ZyIsImtleVZhbHVlcyIsImhhcnZlc3RLZXlWYWx1ZXMiLCJoYXJ2ZXN0Q29sdW1ucyIsImkiLCJ2YWx1ZXMiLCJoYXJ2ZXN0VmFsdWVzIiwiY3JlYXRlTmV3VGhyZWFkIiwiY3JlYXRlRm9ydW1Vc2VyUGFpclVzaW5nRm9ydW0iLCJpbmNyZW1lbnRUaHJlYWRzIiwiZXhzaXN0aW5nVGhyZWFkIiwicXVlcnlQYXJhbXMiLCJnZXRUaHJlYWRzQnlGb3J1bVNsdWciLCJpZFRvSW50IiwiZGVzYyIsImdldFVzZXJzIiwiUG9zdENvbnRyb2xsZXIiLCJnZXRQb3N0QnlJZCIsInBvc3REYXRhIiwicmVsYXRlZFRvIiwicmVsYXRlZEVudGl0aWVzIiwic3BsaXQiLCJyZWxhdGVkRW50aXR5IiwiZ2V0VXNlckJ5Tmlja25hbWUiLCJlbnRpdHkiLCJuZXdEYXRhIiwiT2JqZWN0IiwidXBkYXRlUG9zdCIsIlNlcnZpY2VDb250cm9sbGVyIiwiU2VydmljZU1vZGVsIiwiY291bnRBbGwiLCJjbGVhckFsbCIsImVuZCIsIlRocmVhZENvbnRyb2xsZXIiLCJ0ZXN0Iiwidm9pY2VWYWx1ZSIsInZvaWNlIiwibWVzYWdlIiwiVm90ZU1vZGVsIiwidm90ZSIsInZvdGVkRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJzb3J0IiwiZmxhdFNvcnQiLCJ0cmVlU29ydCIsInBhcmVudFRyZWVTb3J0IiwibWFwIiwicmVzUG9zdCIsInVwZGF0ZVRocmVhZCIsIlVzZXJDb250cm9sbGVyIiwiZW1haWwiLCJuZXdVc2VyRGF0YSIsImNyZWF0ZU5ld1VzZXIiLCJnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwiLCJleGlzdGluZ1VzZXIiLCJ1cGRhdGVVc2VyIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInVzZXJSb3V0ZXIiLCJmb3J1bVJvdXRlciIsInRocmVhZFJvdXRlciIsInBvc3RSb3V0ZXIiLCJzZXJ2aWNlUm91dGVyIiwiZ2V0IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZGJJbnN0YW5jZSIsIm9uZU9yTm9uZSIsInRocmVhZFNsdWdPcklkIiwic2luY2UiLCJwZ3AiLCJhcyIsImZvcm1hdCIsIm1hbnlPck5vbmUiLCJ0b1N0cmluZyIsImxpbWl0IiwiUFMiLCJyZXF1aXJlIiwiUHJlcGFyZWRTdGF0ZW1lbnQiLCJnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQiLCJjIiwidiIsIm9uZSIsInRocmVhZElkIiwicGF0aFNvcnRSdWxlIiwiaWRTb3J0UnVsZSIsImNvdW50Iiwibm9uZSIsImhlbHBlcnMiLCJ1cGRhdGUiLCJ0YWJsZSIsImVtcHR5VXBkYXRlIiwiZ2V0Tmlja25hbWVTdGF0ZW1lbnQiLCJuaWNrIiwibWFpbCIsImRiT3B0aW9ucyIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiUm91dGVyIiwiY3JlYXRlRm9ydW0iLCJjcmVhdGVUaHJlYWRJbkZvcnVtIiwiZ2V0RGV0YWlscyIsImdldFRocmVhZHMiLCJ1cGRhdGVEZXRhaWxzIiwiY3JlYXRlUG9zdCIsInZvdGVGb3JUaHJlYWQiLCJnZXRQb3N0cyIsImNyZWF0ZVVzZXIiLCJnZXRVc2VyIiwia2V5cyIsImtleSIsInZhbHVlIiwiYXJyYXlPZlBvc3RPYmplY3RzIiwicmVzdWx0UXVlcnkiLCJ2YWx1ZXNJbkFycmF5IiwidmFsIiwiaiIsInBhdGhBcnJheSJd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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUMxR0EsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2ZvcnVtL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgeyB2YWxTdHIsIGNvbnN0cnVjdFBhdGhTdHJpbmcgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdHNMb29wID0gYXN5bmMgZnVuY3Rpb24gKHJlcSxyZXMsIHNsdWdPcklkLCBpc0lkKSB7XG4gICAgY29uc3QgcG9zdHNWYWx1ZXMgPSBbXTtcbiAgICBjb25zdCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgY29uc3QgbmV3UG9zdHMgPSByZXEuYm9keTtcblxuICAgIGlmICghbmV3UG9zdHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpc0lkKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKFtdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoW10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C7INC/0LXRgNC10LTQsNC9IGlkINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQv9C+0YHRglxuICAgICAgICBpZiAocG9zdC5wYXJlbnQpIHtcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQtdGB0YLRjCDQu9C4INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQv9C+0YHRgiDQsiDRgdC40YHRgtC10LzQtSBcbiAgICAgICAgICAgIC8vIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHNsdWdPcklkLCBpc0lkKTtcbiAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnbm8gcGFyZW50IHBvc3RzJyB9KTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyZW50UG9zdC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBQQVJFTlRTJyk7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Y7Qt9C10YDQsCDQsiDRhNC+0YDRg9C8IFxuXG4gICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpclVzaW5nVGhyZWFkKHBvc3QuYXV0aG9yLCBzbHVnT3JJZCwgaXNJZCk7XG5cbiAgICAgICAgLy8g0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQv9C+0YHRgtC+0LIg0LIg0YTQvtGA0YPQvNC1IFxuICAgICAgICAvLyB0cnkge1xuICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFBvc3RzKHNsdWdPcklkLCBpc0lkKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIC8vIH1cblxuICAgICAgICBjb25zdCBwb3N0SWQgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0SWRGb3JQb3N0KCk7XG5cbiAgICAgICAgcG9zdC5hdXRob3IgPSBgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSR7YCdgICsgcG9zdC5hdXRob3IgKyBgJ2B9KWA7XG4gICAgICAgIHBvc3QubWVzc2FnZSA9IGAnYCArIHBvc3QubWVzc2FnZSArIGAnYDtcbiAgICAgICAgcG9zdC5jcmVhdGVkID0gYCdgICsgY3JlYXRpb25EYXRlICsgYCdgO1xuICAgICAgICBwb3N0LnRocmVhZCA9IGlzSWQgPyBzbHVnT3JJZCA6IGAoU0VMRUNUIGlkIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPScke3NsdWdPcklkfScpYDtcbiAgICAgICAgcG9zdC5mb3J1bSA9IGlzSWQgPyBgKFNFTEVDVCBmb3J1bSBGUk9NIHRocmVhZHMgV0hFUkUgaWQ9JHtzbHVnT3JJZH0pYCA6IGAoU0VMRUNUIGZvcnVtIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPScke3NsdWdPcklkfScpYFxuICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdElkLm5leHR2YWwpO1xuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgY29uc3RydWN0UGF0aFRvUG9zdChwb3N0KTtcbiAgICAgICAgcG9zdC5wYXRodG9wb3N0ID0gYCdgICsgcGF0aCArIGAnYDtcbiAgICAgICAgcG9zdHNWYWx1ZXMucHVzaChwb3N0KTtcbiAgICB9XG5cbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QvtGB0YJcbiAgICBjb25zdCByZXN1bHQgPSBbXTsgXG4gICAgY29uc3QgY29sdW1ucyA9IGAoYXV0aG9yLCBcIm1lc3NhZ2VcIiwgcGFyZW50LCBcImNyZWF0ZWRcIiwgdGhyZWFkLCBmb3J1bSwgaWQsIHBhdGh0b3Bvc3QpYFxuICAgIGNvbnN0IHZhbHVlc0luU3RyaW5nUXVlcnkgPSB2YWxTdHIocG9zdHNWYWx1ZXMpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBJTlRPIHBvc3RzIGAgKyBjb2x1bW5zICsgYCBWQUxVRVMgYCArIHZhbHVlc0luU3RyaW5nUXVlcnkgKyBgIFJFVFVSTklORyAqYDtcbiAgICAvLyBjb25zb2xlLmxvZygnTk9UIEhFUkUnKTtcbiAgICBjb25zdCBhZGRlZFBvc3RzID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZU5ld1Bvc3RzQnlRdWVyeShxdWVyeSk7XG4gICAgLy8gY29uc29sZS5sb2coJ0FEREVEREQgUE9TVFMnLCBhZGRlZFBvc3RzKTtcbiAgICBpZiAoYWRkZWRQb3N0cykge1xuICAgICAgICBmb3IgKGxldCBwb3N0IG9mIGFkZGVkUG9zdHMpIHtcbiAgICAgICAgICAgIHBvc3QuaWQgPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHBvc3QudGhyZWFkID0gcGFyc2VJbnQocG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwb3N0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoVG9Qb3N0ID0gYXN5bmMgZnVuY3Rpb24gKHBvc3QpIHtcbiAgICBjb25zdCBpZEFycmF5ID0gW107XG4gICAgaWRBcnJheS5wdXNoKHBvc3QuaWQpO1xuICAgIGNvbnN0IGlkU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhpZEFycmF5KTtcbiAgICBsZXQgcGF0aHRvcG9zdDtcbiAgICBpZiAoIXBvc3QucGFyZW50KSB7XG4gICAgICAgIHBhdGh0b3Bvc3QgPSBwb3N0LnBhdGh0b3Bvc3QgfHwgaWRTdHJpbmc7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgUG9zdE1vZGVsLmdldFBhdGhUb1Bvc3QocG9zdC5wYXJlbnQpO1xuICAgICAgICBwYXRoLnBhdGh0b3Bvc3QucHVzaChwb3N0LmlkKTtcbiAgICAgICAgY29uc3QgcGF0aFN0cmluZyA9IGNvbnN0cnVjdFBhdGhTdHJpbmcocGF0aC5wYXRodG9wb3N0KTtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBwYXRoU3RyaW5nIHx8IGlkU3RyaW5nXG4gICAgfVxuICAgIHJldHVybiBwYXRodG9wb3N0O1xufSIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuXG5cbmNsYXNzIEZvcnVtQ29udHJvbGxlciB7XG5cblx0YXN5bmMgY3JlYXRlRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdFx0XHRzbHVnLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR1c2VyLm5pY2tuYW1lXG5cdFx0XVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKTtcblxuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblxuXHRcblx0Z2V0RGV0YWlscyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zylcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgZm9ydW0nIH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXG5cdGFzeW5jIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGxldCBmb3J1bTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvci5uaWNrbmFtZTtcblx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bS5zbHVnO1xuXHRcdFxuXHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpclVzaW5nRm9ydW0oZm9ydW0uc2x1ZywgYXV0aG9yLm5pY2tuYW1lKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGluZyBwYWlyJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRUaHJlYWRzKGZvcnVtLnNsdWcpO1xuXHRcdFx0XHRyZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nVGhyZWFkO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcS5ib2R5WydzbHVnJ10pO1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQuaWQgPSBwYXJzZUludChleHNpc3RpbmdUaHJlYWQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhzaXN0aW5nVGhyZWFkKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHICEhISEnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuIFxuXHRnZXRUaHJlYWRzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoc2x1Zylcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpe1xuXHRcdFx0XHRcdFRocmVhZE1vZGVsLmdldFRocmVhZHNCeUZvcnVtU2x1ZyhzbHVnLCBxdWVyeVBhcmFtcylcblx0XHRcdFx0XHRcdC50aGVuKCBkYXRhID0+e1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGEgPSBpZFRvSW50KGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEUyBPRiBGT1JVTScpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdFx0XHRcdH0pO1x0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSk7XHRcblx0fVxuXG5cdGFzeW5jIGdldFVzZXJzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0cXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJztcblx0XHRsZXQgZm9ydW07XG5cdFx0dHJ5IHtcblx0XHRcdGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0aWYgKCFmb3J1bSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdH0gXG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0VXNlcnMoZm9ydW0uc2x1ZywgcXVlcnlQYXJhbXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVJTIElOIEZPUlVNJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuXG5cdH0gXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtQ29udHJvbGxlcjsiLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5jbGFzcyBQb3N0Q29udHJvbGxlciB7XG4gICAgYXN5bmMgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGVkVG8gPSByZXEucXVlcnlbJ3JlbGF0ZWQnXTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuXG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8IG5ld0RhdGEubWVzc2FnZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7ICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChwb3N0RGF0YS5tZXNzYWdlICE9PSBuZXdEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnVwZGF0ZVBvc3QobmV3RGF0YS5tZXNzYWdlLCBwb3N0SWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkQgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gcGFyc2VJbnQocmVzdWx0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudCA/IHBhcnNlSW50KHJlc3VsdC5wYXJlbnQpIDogcmVzdWx0LnBhcmVudDsgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7IFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0Q29udHJvbGxlcjsiLCJpbXBvcnQgU2VydmljZU1vZGVsIGZyb20gJy4uL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5jbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjb3VudEFsbCAocmVxLCByZXMpIHtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNvdW50QWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNsZWFyQWxsIChyZXEsIHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyOyIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgVm90ZU1vZGVsIGZyb20gJy4uL21vZGVscy9Wb3RlTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0c0xvb3AgfSBmcm9tICcuL0NvbnRyb2xsZXJVdGlscy5qcyc7XG5cbmNsYXNzIFRocmVhZENvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlUG9zdCAocmVxLCByZXMpe1xuICAgICAgICBsZXQgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIC8vIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUG9zdHNMb29wKHJlcSwgcmVzLCBzbHVnT3JJZCwgdHJ1ZSk7ICAgIFxuICAgICAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgICAgIC8vICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUG9zdHNMb29wKHJlcSwgcmVzLCBzbHVnT3JJZCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgICAgIC8vICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIHNsdWcnKTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjcmVhdGVQb3N0c0xvb3AocmVxLHJlcywgdGhyZWFkKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyB2b3RlRm9yVGhyZWFkIChyZXEgLHJlcykge1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBjb25zdCB2b2ljZVZhbHVlID0gcmVxLmJvZHkudm9pY2U7XG5cbiAgICAgICAgbGV0IGF1dGhvciA9IHJlcS5ib2R5Lm5pY2tuYW1lO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZvdGVkRGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZvdGVkRGF0YSA9IGF3YWl0IFZvdGVNb2RlbC52b3RlKHZvaWNlVmFsdWUsIHRocmVhZC5pZCwgYXV0aG9yLm5pY2tuYW1lKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gTUFLSU5HIFZPVEUnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZvdGVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZvdGVkRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgdm90ZWREYXRhLnZvaWNlID0gdm90ZWREYXRhLnZvaWNlID09PSAxID8gdm90ZWREYXRhLnZvaWNlICsgMSA6IHZvdGVkRGF0YS52b2ljZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuaW5jcmVtZW50Vm90ZXNCeUlkKHRocmVhZC5pZCwgdm90ZWREYXRhLnZvaWNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gaW5jcmVtZW50aW5nIHZvdGVzIGluIHRocmVhZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBnZXREZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSlcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UG9zdHMocmVxLCByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeVBhcmFtc1snZGVzYyddID0gcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9PT0gJ3RydWUnO1xuICAgICAgICBxdWVyeVBhcmFtc1snc2luY2UnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydzaW5jZSddKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAnZmxhdCcgfHwgIXF1ZXJ5UGFyYW1zLnNvcnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLmZsYXRTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGZsYXQgc29ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC50cmVlU29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0cmVlIHNvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdwYXJlbnRfdHJlZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnBhcmVudFRyZWVTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHBhcmVudCB0cmVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKCAocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzUG9zdCA9IHt9O1xuICAgICAgICAgICAgcmVzUG9zdFsnYXV0aG9yJ10gPSBwb3N0LmF1dGhvcjtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2NyZWF0ZWQnXSA9IHBvc3QuY3JlYXRlZDtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2ZvcnVtJ10gPSBwb3N0LmZvcnVtO1xuICAgICAgICAgICAgcmVzUG9zdFsnaWQnXSA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcmVzUG9zdFsnbWVzc2FnZSddID0gcG9zdC5tZXNzYWdlO1xuICAgICAgICAgICAgcmVzUG9zdFsncGFyZW50J10gPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXNQb3N0Wyd0aHJlYWQnXSA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc1Bvc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRocmVhZCAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC51cGRhdGVUaHJlYWQodGhyZWFkLnNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHlbJ2VtYWlsJ107XG4gICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgICAgICAgICAgbmlja25hbWUsXG4gICAgICAgICAgICByZXEuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydhYm91dCddLFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ1VzZXI7XG4gICAgICAgICAgICB0cnkge1xuXHRcdFx0XHRleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleGlzdGluZ1VzZXIpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuXG4gICAgZ2V0VXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpXG4gICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfSAgXG5cblxuICAgIGFzeW5jIHVwZGF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIFxuICAgICAgICAvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC60LDQutC40LUt0YLQviDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L3QtSDQv9GD0YHRgtGL0LVcblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiBcIlVzZXIgd2l0aCBzdWNoIG5pY2tuYW1lIG9yIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3JvdXRlcnMvVXNlclJvdXRlcy5qcyc7XG5pbXBvcnQgZm9ydW1Sb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL0ZvcnVtUm91dGVzLmpzJztcbmltcG9ydCB0aHJlYWRSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1RocmVhZFJvdXRlcy5qcyc7XG5pbXBvcnQgcG9zdFJvdXRlciBmcm9tICcuL3JvdXRlcnMvUG9zdFJvdXRlcy5qcyc7XG5pbXBvcnQgc2VydmljZVJvdXRlciBmcm9tICcuL3JvdXRlcnMvU2VydmljZVJvdXRlcy5qcyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC51c2UoJy9hcGkvdXNlcicsIHVzZXJSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9mb3J1bScsIGZvcnVtUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvdGhyZWFkJywgdGhyZWFkUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvcG9zdCcsIHBvc3RSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9zZXJ2aWNlJywgc2VydmljZVJvdXRlcik7XG5hcHAuZ2V0KCcvJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbn0pXG5cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgRm9ydW1Nb2RlbCB7XG5cbiAgICBnZXRGb3J1bUJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3Rm9ydW0gKG5ld0ZvcnVtRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtcyAoc2x1ZywgdGl0bGUsIFwidXNlclwiKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdGb3J1bURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3J1bVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXJVc2luZ0ZvcnVtIChmb3J1bVNsdWcsIG5pY2tuYW1lKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGVGb3J1bVVzZXJQYWlyVXNpbmdGb3J1bScpO1xuICAgICAgICBmb3J1bVNsdWcgPSBgKFNFTEVDVCBzbHVnIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JyR7Zm9ydW1TbHVnfScpYDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDE6cmF3LFxuICAgICAgICAgICAgICAgIChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMikpXG4gICAgICAgICAgICAgICAgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVfZm9ydW11c2VyX3BhaXIgRE8gTk9USElORyBSRVRVUk5JTkcgKmAsIFtmb3J1bVNsdWcsbmlja25hbWVdKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXJVc2luZ1RocmVhZCAobmlja25hbWUsIHRocmVhZFNsdWdPcklkLCBpc0lkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGVGb3J1bVVzZXJQYWlyVXNpbmdUaHJlYWQnKTtcbiAgICAgICAgY29uc3QgZm9ydW1TbHVnID0gaXNJZCA/IGAoU0VMRUNUIGZvcnVtIEZST00gdGhyZWFkcyBXSEVSRSBpZD0ke3RocmVhZFNsdWdPcklkfSlgIDogYChTRUxFQ1QgZm9ydW0gRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7dGhyZWFkU2x1Z09ySWR9JylgO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKGBJTlNFUlQgSU5UTyBmb3J1bXVzZXJzIChmb3J1bXNsdWcsIHVzZXJuaWNrbmFtZSkgVkFMVUVTICgkMTpyYXcsXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQyKSlcbiAgICAgICAgICAgICAgICBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqYCwgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VGhyZWFkcyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgdGhyZWFkcyA9IHRocmVhZHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGFzeW5jIGluY3JlbWVudFBvc3RzKHNsdWdPcklkLCBpc0lkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBpbmNyZW1lbnRQb3N0cycpO1xuICAgICAgICBjb25zdCBmb3J1bVNsdWcgPSBpc0lkID8gYChTRUxFQ1QgZm9ydW0gRlJPTSB0aHJlYWRzIFdIRVJFIGlkPSR7c2x1Z09ySWR9KWAgOiBgKFNFTEVDVCBmb3J1bSBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0nJHtzbHVnT3JJZH0nKWA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoYFVQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAxIFdIRVJFIHNsdWc9JHtmb3J1bVNsdWd9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBJTkNSRU1FTlRJTkcgUE9TVFMnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFVzZXJzIChzbHVnLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBsZXQgcXVlcnk7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMSBBTkQgVS5uaWNrbmFtZT4kMlxuICAgICAgICAgICAgYCxbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDEgQU5EIFUubmlja25hbWU8JDJcbiAgICAgICAgICAgIGAsIFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMWAsIFtzbHVnXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGAkMTpyYXcgXG4gICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnVS5uaWNrbmFtZSBERVNDJyA6ICdVLm5pY2tuYW1lIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bU1vZGVsOyAiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmNvbnN0IFBTID0gcmVxdWlyZSgncGctcHJvbWlzZScpLlByZXBhcmVkU3RhdGVtZW50O1xuXG5jb25zdCBnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQgPSBuZXcgUFMoJ2dldC1wb3N0JywgJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEgQU5EIHRocmVhZD0kMicpO1xuXG5jbGFzcyBQb3N0TW9kZWwge1xuICAgIFxuICAgIGNyZWF0ZU5ld1Bvc3QgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgYyA9ICcoJzsgXG4gICAgICAgIGxldCB2ID0gJygnO1xuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHBvc3RzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyAnIFJFVFVSTklORyAqJztcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSAocXVlcnkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocXVlcnkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUocXVlcnkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgUE9TVCBOTyBBVVRIT1InKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBvc3RCeUlkQW5kVGhyZWFkSWQgKGlkLCBzbHVnT3JJZCwgaXNJZCkge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBnZXRQb3N0QnlJZEFuZFRocmVhZElkJyk7XG4gICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgU0VMRUNUIGlkIEZST00gcG9zdHMgV0hFUkUgaWQ9JHtpZH0gQU5EIHRocmVhZD0ke3RocmVhZElkfWApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQgQU5EIFRIUkVBRElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7ICAgXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCwgW2lkLCB0aHJlYWRJZF0pXG4gICAgfVxuXG4gICAgZ2V0UG9zdEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMScsIFtpZF0pO1xuICAgIH1cblxuICAgIGdldElkRm9yUG9zdCAoKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShcIlNFTEVDVCBuZXh0dmFsKCdwb3N0c19pZF9zZXF1YW5jZScpXCIpOyBcbiAgICB9XG5cbiAgICB1cGRhdGVQb3N0IChtZXNzYWdlLCBpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBwb3N0cyBTRVQgXCJpc0VkaXRlZFwiPVRSVUUsIFwibWVzc2FnZVwiPSQxIFdIRVJFIGlkPSQyIFJFVFVSTklORyAqJywgW21lc3NhZ2UsaWRdKTtcbiAgICB9XG5cbiAgICBnZXRQYXRoVG9Qb3N0IChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICBcbiAgICBmbGF0U29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGlmICggcXVlcnlQYXJhbXMuc2luY2UgKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxIEFORCBpZDwkMlxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDEgQU5EIGlkPiQyXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyZWVTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwYXRodG9wb3N0IERFU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3QgPiAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBcbiAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcGFyZW50VHJlZVNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BpZC5wYXJlbnRfaWQgREVTQywgcGF0aHRvcG9zdCBBU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgY29uc3QgaWRTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAnaWQgREVTQycgOiAnaWQgQVNDJ1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3RbMV0gPiAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0WzFdIDwgKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTsgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0TW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgU2VydmljZU1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjb3VudEFsbCgpIHtcbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIGZvcnVtcycpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBwb3N0cycpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHRocmVhZHMnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBwYXJzZUludChmb3J1bS5jb3VudCksXG4gICAgICAgICAgICBcInBvc3RcIjogcGFyc2VJbnQocG9zdC5jb3VudCksXG4gICAgICAgICAgICBcInRocmVhZFwiOiBwYXJzZUludCh0aHJlYWQuY291bnQpLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHBhcnNlSW50KHVzZXIuY291bnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhc3luYyBjbGVhckFsbCgpIHtcblxuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIGZvcnVtcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBwb3N0cyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHRocmVhZHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdXNlcnMgQ0FTQ0FERScpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IGZvcnVtLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBvc3QsXG4gICAgICAgICAgICBcInRocmVhZFwiOiB0aHJlYWQsXG4gICAgICAgICAgICBcInVzZXJcIjogdXNlclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmljZU1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBUaHJlYWRNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY3JlYXRlTmV3VGhyZWFkIChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYyArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGMgKz0gJyknO1xuXG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ICs9ICckJyArIChpKzEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHYgKz0gJyknO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gdGhyZWFkcyAnICsgYyArICcgVkFMVUVTICcgKyB2ICsgYCBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqYDtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkQnlTbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkQnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgaWQ9JDEnLCBbaWRdKVxuICAgIH1cblxuICAgIGdldFRocmVhZHNCeUZvcnVtU2x1ZyAoZm9ydW1TbHVnLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIj49JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPD0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkMycsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5U2x1ZyAoc2x1Zywgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Zyx2b2ljZV0pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlJZCAoaWQsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBpZD0kMSBSRVRVUk5JTkcgKicsIFtpZCx2b2ljZV0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRocmVhZCAoc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndGhyZWFkcyd9LG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcInNsdWdcXFwiID0gXFwnXCIgKyAgc2x1ZyArIFwiXFwnIFJFVFVSTklORyAqXCI7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRNb2RlbDtcbiIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5jb25zdCBQUyA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKS5QcmVwYXJlZFN0YXRlbWVudDtcblxuXG5jb25zdCBnZXROaWNrbmFtZVN0YXRlbWVudCA9IG5ldyBQUygnZ2V0LW5pY2snLCAnU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnKTtcblxuXG5jbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIC8vIG9uZU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQvdGD0Lsg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJywgW25pY2tuYW1lXSlcbiAgICB9XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwgKG5pY2ssIG1haWwpIHsgLy8g0LzQvtC20L3QviDQutCw0Lot0YLQviDQvdC1INC/0YDQvtGF0L7QtNC40YLRjNGB0Y8g0L/QviDQstGB0LXQuSDRgtCw0LHQu9C40YbQtSwg0LAg0L7RgdGC0LDQvdCw0LLQu9C40LLQsNGC0YHRjyDQutCw0Log0YLQvtC70YzQutC+INC90LDRiNC70LggMSDQstGF0L7QttC00LXQvdC40LVcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBuaWNrIHx8ICcnO1xuICAgICAgICBjb25zdCBlbWFpbCA9IG1haWwgfHwgJyc7XG4gICAgICAgIC8vIG1hbnlPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQsiDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxIE9SIGVtYWlsPSQyJywgW25pY2tuYW1lLCBlbWFpbF0pOyBcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gdXNlcnMgKG5pY2tuYW1lLCBmdWxsbmFtZSwgYWJvdXQsIGVtYWlsKSBWQUxVRVMgKCQxLCAkMiwgJDMgLCQ0KSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3VXNlckRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcblxuICAgIC8vICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3VzZXJzJ30sIG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcIm5pY2tuYW1lXFxcIiA9IFxcJ1wiICsgIG5pY2tuYW1lICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJRVUVSWVwiLCBxdWVyeSk7XG4gICAgLy8gICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgLy8gfVxuXG5cbiAgICBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNC70YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQuNC80Y8g0LjQvNC10L3QvdC+INGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQuNGB0LDQvdC+XG4gICAgLypcbiAgICDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjFxuICAgINC40LzRjyDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0L/QuNGB0LDQvdC+INCyINGC0LDQsdC70LjRhtC1IHVzZXJzICjQvdC1INCyINCy0LXRgNGF0L3QtdC8INC40LvQuCDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQsNGFKVxuICAgICovXG4gICAgZ2V0VXNlck5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoZ2V0Tmlja25hbWVTdGF0ZW1lbnQsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG5cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFZvdGVNb2RlbCB7XG5cbiAgICB2b3RlICh2b2ljZSwgdGhyZWFkSWQsIG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gdm90ZXMgKHZvaWNlLCB0aHJlYWQsIG5pY2tuYW1lKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlVGhyZWFkTmlja25hbWUgRE8gXG4gICAgICAgIFVQREFURSBTRVQgdm9pY2U9JDEgV0hFUkUgdm90ZXMudm9pY2U8PiQxIFJFVFVSTklORyAqLCAoeG1heDo6dGV4dDo6aW50ID4gMCkgYXMgZXhpc3RlZGAsIFt2b2ljZSwgdGhyZWFkSWQsIG5pY2tuYW1lXSk7IFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVm90ZU1vZGVsOyBcbiIsImV4cG9ydCBjb25zdCBwZ3AgPSByZXF1aXJlKCdwZy1wcm9taXNlJykoKTtcblxuY29uc3QgZGJPcHRpb25zID0ge1xuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IDU0MzIsXG4gICAgZGF0YWJhc2U6ICdmb3J1bScsXG4gICAgdXNlcjogJ2VybWFrZm9ydW0nLFxuICAgIHBhc3N3b3JkOiAnMTIzJ1xufVxuXG5jb25zdCBkYkluc3RhbmNlID0gcGdwKGRiT3B0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBkYkluc3RhbmNlO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBGb3J1bUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzJztcblxuY29uc3QgZm9ydW1Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5mb3J1bVJvdXRlci5wb3N0KCcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZUZvcnVtKTtcbmZvcnVtUm91dGVyLnBvc3QoJy86c2x1Zy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlVGhyZWFkSW5Gb3J1bSk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy9kZXRhaWxzJywgRm9ydW1Db250cm9sbGVyLmdldERldGFpbHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdGhyZWFkcycsIEZvcnVtQ29udHJvbGxlci5nZXRUaHJlYWRzKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL3VzZXJzJywgRm9ydW1Db250cm9sbGVyLmdldFVzZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ydW1Sb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBQb3N0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHBvc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5wb3N0Um91dGVyLmdldCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5wb3N0Um91dGVyLnBvc3QoJy86aWQvZGV0YWlscycsIFBvc3RDb250cm9sbGVyLnVwZGF0ZURldGFpbHMpO1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Um91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBzZXJ2aWNlUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuc2VydmljZVJvdXRlci5nZXQoJy9zdGF0dXMnLCBTZXJ2aWNlQ29udHJvbGxlci5jb3VudEFsbCk7XG5zZXJ2aWNlUm91dGVyLnBvc3QoJy9jbGVhcicsIFNlcnZpY2VDb250cm9sbGVyLmNsZWFyQWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFRocmVhZENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVGhyZWFkQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHRocmVhZFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvY3JlYXRlJywgVGhyZWFkQ29udHJvbGxlci5jcmVhdGVQb3N0KTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvdm90ZScsIFRocmVhZENvbnRyb2xsZXIudm90ZUZvclRocmVhZCk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvcG9zdHMnLCBUaHJlYWRDb250cm9sbGVyLmdldFBvc3RzKTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIudXBkYXRlVGhyZWFkKTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aHJlYWRSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvY3JlYXRlJywgVXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcik7XG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xudXNlclJvdXRlci5nZXQoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLmdldFVzZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyOyIsImV4cG9ydCBjb25zdCBoYXJ2ZXN0Q29sdW1ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5cyA9IFtdXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhkYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5leHBvcnQgY29uc3QgaGFydmVzdEtleVZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5VmFsdWVzID0ge31cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleVZhbHVlc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlWYWx1ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBpZFRvSW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtpXS5pZCA9IHBhcnNlSW50KGRhdGFbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbFN0ciA9IGZ1bmN0aW9uIChhcnJheU9mUG9zdE9iamVjdHMpIHtcbiAgICBsZXQgcmVzdWx0UXVlcnkgPSBgYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZQb3N0T2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZXNJbkFycmF5ID0gaGFydmVzdFZhbHVlcyhhcnJheU9mUG9zdE9iamVjdHNbaV0pO1xuICAgICAgICBsZXQgdmFsID0gYCAoYDtcbiAgICAgICAgLy8gdmFsICs9IGAoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JHtgJ2AgKyB2YWx1ZXNJbkFycmF5WzBdICsgYCdgfSlgO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlc0luQXJyYXkubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgLy8gaWYgKCBqICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsICs9IFwiJ1wiICsgdmFsdWVzSW5BcnJheVtqXSArIFwiJ1wiO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbCArPSB2YWx1ZXNJbkFycmF5W2pdO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKGogIT09IHZhbHVlc0luQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHZhbCArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0UXVlcnkgKz0gdmFsO1xuICAgICAgICBpZiAoaSA9PT0gYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0UXVlcnk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFBhdGhTdHJpbmcgPSBmdW5jdGlvbiAocGF0aEFycmF5KSB7XG4gICAgbGV0IHJlc3VsdCA9IGB7YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gcGF0aEFycmF5W2ldO1xuICAgICAgICBpZiAoaSAhPT0gcGF0aEFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBgLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCArPSBgfWA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0IGNvbnN0IGNvbnN0cnVuY3RQcmVwYXJlU3RhdGVtZW50VmFsdWVzID0gZnVuY3Rpb24gKGxlbikge1xuLy8gICAgIGxldCByZXN1bHQgPSBgYDtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4vLyAgICAgICAgIC8vIHJlc3VsdCArPSBgKGA7XG4vLyAgICAgICAgIC8vIGZvciAobGV0IGogPSAxOyBqIDw9IDg7IGorKykge1xuLy8gICAgICAgICAvLyAgICAgaWYgKGogIT09IDgpIHtcbi8vICAgICAgICAgLy8gICAgICAgICByZXN1bHQgKz0gYCRgICsgYCR7aiArIGkgKiA4fSwgYDtcbi8vICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgcmVzdWx0ICs9IGAkYCArIGAke2ogKyBpICogOH1gO1xuLy8gICAgICAgICAvLyAgICAgfVxuLy8gICAgICAgICAvLyB9XG5cbi8vICAgICAgICAgLy8gaWYgKGkgIT09IGxlbiAtIDEpIHtcbi8vICAgICAgICAgLy8gICAgIHJlc3VsdCArPSBgKSwgYDtcbi8vICAgICAgICAgLy8gfSBlbHNlIHtcbi8vICAgICAgICAgLy8gICAgIHJlc3VsdCArPSBgKSBgO1xuLy8gICAgICAgICAvLyB9XG4vLyAgICAgICAgIHJlc3VsdCArPSBgKGA7XG4vLyAgICAgICAgIGlmIChpICE9PSBsZW4gLSAxKSB7XG4vLyAgICAgICAgICAgICByZXN1bHQgKz0gYCR7aSsxfSwgYDtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHJlc3VsdCArPSBgJHtpKzF9IGA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVzdWx0ICs9IGApYDtcbi8vICAgICB9XG4vLyAgICAgLy8gY29uc29sZS5sb2cobGVuLCByZXN1bHQpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZy1wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9