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
  regeneratorRuntime.mark(function _callee(req, res, threadData) {
    var postsValues, creationDate, newPosts, author, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, parentPost, postId, path, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postsValues = [];
            creationDate = new Date().toUTCString();
            newPosts = req.body;

            if (newPosts.length) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(201).send([]));

          case 5:
            author = newPosts[0].author;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = newPosts[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 51;
              break;
            }

            _post = _step.value;

            if (!_post.parent) {
              _context.next = 33;
              break;
            }

            _context.prev = 14;
            _context.next = 17;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPostByIdAndThreadId(_post.parent, threadData.id);

          case 17:
            parentPost = _context.sent;

            if (parentPost) {
              _context.next = 22;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: 'no parent posts'
            }));

          case 22:
            _post.parent = parentPost.id;

          case 23:
            _context.next = 31;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](14);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST PARENTS');
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 31:
            _context.next = 34;
            break;

          case 33:
            _post.parent = null;

          case 34:
            _context.next = 36;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPair(threadData.forum, _post.author);

          case 36:
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
            _context.next = 11;
            break;

          case 51:
            _context.next = 57;
            break;

          case 53:
            _context.prev = 53;
            _context.t1 = _context["catch"](9);
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
              _context.next = 106;
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
            } // await ForumModel.createForumUserPair(threadData.forum, author);


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
            _context.prev = 92;
            _context.next = 95;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(threadData.forum, newPosts.length);

          case 95:
            _context.next = 103;
            break;

          case 97:
            _context.prev = 97;
            _context.t3 = _context["catch"](92);
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(_context.t3);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 103:
            return _context.abrupt("return", res.status(201).json(result));

          case 106:
            return _context.abrupt("return", res.status(404).json({
              message: 'cant find author'
            }));

          case 107:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[9, 53, 57, 65], [14, 25], [58,, 60, 64], [76, 80, 84, 92], [85,, 87, 91], [92, 97]]);
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
                // console.log(req.originalUrl, req.method);
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
      // console.log(req.originalUrl, req.method);
      var slug = req.params['slug'];
      _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].getForumBySlug(slug).then(function (data) {
        if (data) {
          // console.log('forum getDetails',data);
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
                // console.log(req.originalUrl, req.method);
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
    value: function () {
      var _getThreads = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var slug, queryParams, result, forum;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                slug = req.params['slug'];
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(req.query);

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                } // ForumModel.getForumSlug(slug)
                // 	.then( data => {
                // 		if (data){
                // 			ThreadModel.getThreadsByForumSlug(slug, queryParams)
                // 				.then( data =>{
                // 					if (data) {
                // 						data = idToInt(data);
                // 						// console.log('forum getThreads',data);
                // 						return res.status(200).json(data);
                // 					}
                // 				})
                // 				.catch( error => {
                // 					console.log('--------------------------------------------');
                // 					console.log('ERROR IN GETTING THREADS OF FORUM');
                // 					console.log(error);
                // 					return res.status(500).json({ message : "crash" })
                // 				});	
                // 		} else {
                // 			return res.status(404).json({ message : "Can't find forum" });
                // 		}
                // 	})
                // 	.catch( error => {
                // 		console.log('--------------------------------------------');
                // 		console.log('ERROR IN GETTING FORUM BY SLUG');
                // 		console.log(error);
                // 		return res.status(500).json({ message : "crash" })
                // 	});	


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

                return _context3.abrupt("return", res.status(404).json({
                  mesage: 'cant find forum'
                }));

              case 15:
                return _context3.abrupt("return", res.status(200).json(result));

              case 16:
                return _context3.abrupt("return", res.status(200).json(result));

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
      regeneratorRuntime.mark(function _callee4(req, res) {
        var slug, queryParams, result, forum;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                slug = req.params['slug'];
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["harvestKeyValues"])(req.query);

                if (!queryParams['limit']) {
                  queryParams['limit'] = 10;
                } else {
                  queryParams['limit'] = parseInt(queryParams['limit']);
                }

                queryParams.desc = queryParams.desc === 'true'; // let forum;
                // try {
                // 	forum = await ForumModel.getForumBySlug(slug);
                // } catch (error) {
                // 	console.log('--------------------------------------------');
                // 	console.log('ERROR IN GETTING FORUM BY SLUG');
                // 	console.log(error);
                // 	return res.status(500).json({ message : "crash" })
                // }
                // if (!forum) {
                // 	return res.status(404).json({ message : "Can't find forum" });
                // } 
                // try {

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

                return _context4.abrupt("return", res.status(404).json({
                  mesage: 'cant find forum'
                }));

              case 15:
                return _context4.abrupt("return", res.status(200).json(result));

              case 16:
                // } catch (error) {
                // 	console.log('--------------------------------------------');
                // 	console.log('ERROR IN GETTING USERS IN FORUM');
                // 	console.log(error);
                // 	return res.status(500).json({ message : "crash" })
                // }
                result = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["forumSerializer"])(result); // console.log('forum getUsers',result);

                return _context4.abrupt("return", res.status(200).json(result));

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
      regeneratorRuntime.mark(function _callee(req, res) {
        var postId, result, postData, relatedTo, entity, relatedEntities, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, relatedEntity;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
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
                postData.parent = parseInt(postData.parent);
                result.post = postData; // console.log('post getDetails',result);

                return _context.abrupt("return", res.status(200).json(result));

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
      regeneratorRuntime.mark(function _callee2(req, res) {
        var postId, newData, postData, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
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
        var slugOrId, thread;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                slugOrId = req.params['slug_or_id'];

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
                return _context.abrupt("return", res.status(500).json({
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
                return _context.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 28:
                if (thread) {
                  _context.next = 30;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 30:
                Object(_ControllerUtils_js__WEBPACK_IMPORTED_MODULE_5__["createPostsLoop"])(req, res, thread);

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
      regeneratorRuntime.mark(function _callee2(req, res) {
        var slugOrId, voiceValue, author, thread, votedData, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
                slugOrId = req.params['slug_or_id'];
                voiceValue = req.body.voice;
                author = req.body.nickname;

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
                return _context2.abrupt("return", res.status(500).json({
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
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 30:
                if (thread) {
                  _context2.next = 32;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
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

                return _context2.abrupt("return", res.status(404).json({
                  message: 'cant find author'
                }));

              case 47:
                thread.id = parseInt(thread.id);
                return _context2.abrupt("return", res.status(200).json(thread));

              case 49:
                _context2.next = 57;
                break;

              case 51:
                _context2.prev = 51;
                _context2.t2 = _context2["catch"](39);
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICKNAME');
                console.log(_context2.t2);
                return _context2.abrupt("return", res.status(500).json({
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
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 69:
                result.id = parseInt(result.id);
                return _context2.abrupt("return", res.status(200).json(result));

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
    value: function getDetails(req, res) {
      // console.log(req.originalUrl, req.method);
      var slugOrId = req.params['slug_or_id'];

      if (/^\d+$/.test(slugOrId)) {
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreadById(parseInt(slugOrId)).then(function (thread) {
          if (thread) {
            thread.id = parseInt(thread.id); // console.log('thread getDetails', thread);

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
            thread.id = parseInt(thread.id); // console.log('thread getDetails', thread);

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
        var queryParams, result, slugOrId, isId, thread;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
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

                return _context3.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 38:
                return _context3.abrupt("return", res.status(200).json(result));

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
                return _context3.abrupt("return", res.status(200).json(result));

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
      regeneratorRuntime.mark(function _callee4(req, res) {
        var slugOrId, newData, keyValues, columns, thread, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log(req.originalUrl, req.method);
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
                // console.log(req.originalUrl, req.method);
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
      // console.log(req.originalUrl, req.method);
      var nickname = req.params['nickname'];
      _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserByNickname(nickname).then(function (user) {
        if (user) {
          // console.log('getUser', user);
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
                // console.log(req.originalUrl, req.method);
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
      regeneratorRuntime.mark(function _callee3(slug, queryParams) {
        var query;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                slug = "(SELECT slug FROM forums WHERE slug='".concat(slug, "')");

                if (queryParams.since && !queryParams.desc) {
                  query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n                SELECT * FROM forumusers AS FU\n                JOIN users AS U ON FU.usernickname = U.nickname\n                WHERE FU.forumslug=$1:raw AND U.nickname>$2\n                ", [slug, queryParams.since]);
                } else if (queryParams.since && queryParams.desc) {
                  query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n                SELECT * FROM forumusers AS FU\n                JOIN users AS U ON FU.usernickname = U.nickname\n                WHERE FU.forumslug=$1:raw AND U.nickname<$2\n                ", [slug, queryParams.since]);
                } else {
                  query = _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["pgp"].as.format("\n                SELECT * FROM forumusers AS FU\n                JOIN users AS U ON FU.usernickname = U.nickname\n                WHERE FU.forumslug=$1:raw", [slug]);
                }

                _context3.next = 5;
                return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone("$1:raw \n                ORDER BY $2:raw LIMIT $3", [query.toString(), queryParams.desc ? 'U.nickname DESC' : 'U.nickname ASC', queryParams.limit]);

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log('--------------------------------------------');
                console.log('ERROR IN getUsers');
                console.log(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function getUsers(_x3, _x4) {
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
/*! exports provided: harvestColumns, harvestValues, harvestKeyValues, idToInt, valStr, constructPathString, forumSerializer */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJuZXdQb3N0cyIsImJvZHkiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwiYXV0aG9yIiwicG9zdCIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJpZCIsInBhcmVudFBvc3QiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImZvcnVtIiwiZ2V0SWRGb3JQb3N0IiwicG9zdElkIiwiY3JlYXRlZCIsInRocmVhZCIsInBhcnNlSW50IiwibmV4dHZhbCIsImNvbnN0cnVjdFBhdGhUb1Bvc3QiLCJwYXRoIiwicGF0aHRvcG9zdCIsInB1c2giLCJyZXN1bHQiLCJjb2x1bW5zIiwidmFsdWVzSW5TdHJpbmdRdWVyeSIsInZhbFN0ciIsInF1ZXJ5IiwiY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IiwiYWRkZWRQb3N0cyIsImluY3JlbWVudFBvc3RzIiwiaWRBcnJheSIsImlkU3RyaW5nIiwiY29uc3RydWN0UGF0aFN0cmluZyIsImdldFBhdGhUb1Bvc3QiLCJwYXRoU3RyaW5nIiwiRm9ydW1Db250cm9sbGVyIiwidXNlciIsInNsdWciLCJ0aXRsZSIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsIm5ld0ZvcnVtRGF0YSIsIm5pY2tuYW1lIiwiY3JlYXRlTmV3Rm9ydW0iLCJnZXRGb3J1bUJ5U2x1ZyIsImV4c2lzdGluZ0ZvcnVtIiwicGFyYW1zIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZm9ydW1TbHVnIiwiZ2V0Rm9ydW1TbHVnIiwia2V5VmFsdWVzIiwiaGFydmVzdEtleVZhbHVlcyIsImhhcnZlc3RDb2x1bW5zIiwiaSIsInZhbHVlcyIsImhhcnZlc3RWYWx1ZXMiLCJUaHJlYWRNb2RlbCIsImNyZWF0ZU5ld1RocmVhZCIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsImdldFRocmVhZHNCeUZvcnVtU2x1ZyIsImlkVG9JbnQiLCJtZXNhZ2UiLCJkZXNjIiwiZ2V0VXNlcnMiLCJmb3J1bVNlcmlhbGl6ZXIiLCJQb3N0Q29udHJvbGxlciIsImdldFBvc3RCeUlkIiwicG9zdERhdGEiLCJyZWxhdGVkVG8iLCJyZWxhdGVkRW50aXRpZXMiLCJzcGxpdCIsInJlbGF0ZWRFbnRpdHkiLCJnZXRVc2VyQnlOaWNrbmFtZSIsImVudGl0eSIsImdldFRocmVhZEJ5SWQiLCJuZXdEYXRhIiwiT2JqZWN0IiwidXBkYXRlUG9zdCIsIlNlcnZpY2VDb250cm9sbGVyIiwiU2VydmljZU1vZGVsIiwiY291bnRBbGwiLCJjbGVhckFsbCIsImVuZCIsIlRocmVhZENvbnRyb2xsZXIiLCJzbHVnT3JJZCIsInRlc3QiLCJ2b2ljZVZhbHVlIiwidm9pY2UiLCJWb3RlTW9kZWwiLCJ2b3RlIiwidm90ZWREYXRhIiwiZXhpc3RlZCIsImluY3JlbWVudFZvdGVzQnlJZCIsImlzSWQiLCJzb3J0IiwiZmxhdFNvcnQiLCJ0cmVlU29ydCIsInBhcmVudFRyZWVTb3J0IiwibWFwIiwicmVzUG9zdCIsInVwZGF0ZVRocmVhZCIsIlVzZXJDb250cm9sbGVyIiwiZW1haWwiLCJuZXdVc2VyRGF0YSIsImNyZWF0ZU5ld1VzZXIiLCJnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwiLCJleGlzdGluZ1VzZXIiLCJ1cGRhdGVVc2VyIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInVzZXJSb3V0ZXIiLCJmb3J1bVJvdXRlciIsInRocmVhZFJvdXRlciIsInBvc3RSb3V0ZXIiLCJzZXJ2aWNlUm91dGVyIiwiZ2V0IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZGJJbnN0YW5jZSIsIm9uZU9yTm9uZSIsImNudCIsInNpbmNlIiwicGdwIiwiYXMiLCJmb3JtYXQiLCJtYW55T3JOb25lIiwidG9TdHJpbmciLCJsaW1pdCIsIlBTIiwicmVxdWlyZSIsIlByZXBhcmVkU3RhdGVtZW50IiwiZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50IiwiYyIsInYiLCJvbmUiLCJ0aHJlYWRJZCIsInBhdGhTb3J0UnVsZSIsImlkU29ydFJ1bGUiLCJjb3VudCIsIm5vbmUiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsImdldE5pY2tuYW1lU3RhdGVtZW50IiwibmljayIsIm1haWwiLCJkYk9wdGlvbnMiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsIlJvdXRlciIsImNyZWF0ZUZvcnVtIiwiY3JlYXRlVGhyZWFkSW5Gb3J1bSIsImdldERldGFpbHMiLCJnZXRUaHJlYWRzIiwidXBkYXRlRGV0YWlscyIsImNyZWF0ZVBvc3QiLCJ2b3RlRm9yVGhyZWFkIiwiZ2V0UG9zdHMiLCJjcmVhdGVVc2VyIiwiZ2V0VXNlciIsImtleXMiLCJrZXkiLCJ2YWx1ZSIsImFycmF5T2ZQb3N0T2JqZWN0cyIsInJlc3VsdFF1ZXJ5IiwidmFsdWVzSW5BcnJheSIsInZhbCIsImoiLCJwYXRoQXJyYXkiLCJmb3J1bXNBcnJheSIsInNlcmlhbGl6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QU0sUUFBTjtBQUNIO0FBQ0o7O0FBQ0RBLFFBQU0sT0FBTjtBQUNBLFNBQU9BLE1BQVA7QUFDSCxDQVZNO0FBWUEsSUFBTWdELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVStHLFdBQVYsRUFBdUI7QUFDbEQsTUFBTS9KLE1BQU0sR0FBRyxFQUFmLENBRGtELENBRWxEO0FBQ0E7O0FBSGtEO0FBQUE7QUFBQTs7QUFBQTtBQUlsRCx5QkFBa0IrSixXQUFsQiw4SEFBK0I7QUFBQSxVQUF0QjFLLEtBQXNCO0FBQzNCO0FBQ0EsVUFBTTJLLGVBQWUsR0FBRztBQUNwQixpQkFBUzNLLEtBQUssQ0FBQzRLLEtBREs7QUFFcEIsaUJBQVM1SyxLQUFLLENBQUNpRyxLQUZLO0FBR3BCLG9CQUFZakcsS0FBSyxDQUFDNkssUUFIRTtBQUlwQixvQkFBWTdLLEtBQUssQ0FBQytCO0FBSkUsT0FBeEI7QUFNQXBCLFlBQU0sQ0FBQ0QsSUFBUCxDQUFZaUssZUFBWjtBQUNIO0FBYmlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2xELFNBQU9oSyxNQUFQO0FBQ0gsQ0FmTSxDOzs7Ozs7Ozs7OztBQ25GUCwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZm9ydW0vc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCB7IHZhbFN0ciwgY29uc3RydWN0UGF0aFN0cmluZyB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdHNMb29wID0gYXN5bmMgZnVuY3Rpb24gKHJlcSxyZXMsIHRocmVhZERhdGEpIHtcbiAgICBjb25zdCBwb3N0c1ZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcbiAgICBjb25zdCBuZXdQb3N0cyA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFuZXdQb3N0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRob3IgPSBuZXdQb3N0c1swXS5hdXRob3I7XG4gICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4gICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCINCyINGB0LjRgdGC0LXQvNC1IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ25vIHBhcmVudCBwb3N0cycgfSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyZW50UG9zdC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgUEFSRU5UUycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGO0LfQtdGA0LAg0LIg0YTQvtGA0YPQvCBcbiAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTtcblxuICAgICAgICAvLyBjb25zdCBwYWlyID0gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTsgICAgICAgIFxuICAgICAgICBjb25zdCBwb3N0SWQgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0SWRGb3JQb3N0KCk7XG4gICAgICAgIHBvc3QuY3JlYXRlZCA9IGNyZWF0aW9uRGF0ZTtcbiAgICAgICAgcG9zdC50aHJlYWQgPSB0aHJlYWREYXRhLmlkO1xuICAgICAgICBwb3N0LmZvcnVtID0gdGhyZWFkRGF0YS5mb3J1bTtcbiAgICAgICAgcG9zdC5pZCA9IHBhcnNlSW50KHBvc3RJZC5uZXh0dmFsKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGF3YWl0IGNvbnN0cnVjdFBhdGhUb1Bvc3QocG9zdCk7XG4gICAgICAgIHBvc3QucGF0aHRvcG9zdCA9IHBhdGg7XG4gICAgICAgIHBvc3RzVmFsdWVzLnB1c2gocG9zdCk7XG4gICAgfVxuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC/0L7RgdGCXG4gICAgY29uc3QgcmVzdWx0ID0gW107IFxuICAgIGNvbnN0IGNvbHVtbnMgPSBgKGF1dGhvciwgXCJtZXNzYWdlXCIsIHBhcmVudCwgXCJjcmVhdGVkXCIsIHRocmVhZCwgZm9ydW0sIGlkLCBwYXRodG9wb3N0KWBcbiAgICBjb25zdCB2YWx1ZXNJblN0cmluZ1F1ZXJ5ID0gdmFsU3RyKHBvc3RzVmFsdWVzKTtcbiAgICBjb25zdCBxdWVyeSA9IGBJTlNFUlQgSU5UTyBwb3N0cyBgICsgY29sdW1ucyArIGAgVkFMVUVTIGAgKyB2YWx1ZXNJblN0cmluZ1F1ZXJ5ICsgYCBSRVRVUk5JTkcgKmA7XG4gICAgY29uc3QgYWRkZWRQb3N0cyA9IGF3YWl0IFBvc3RNb2RlbC5jcmVhdGVOZXdQb3N0c0J5UXVlcnkocXVlcnkpO1xuICAgIGlmIChhZGRlZFBvc3RzKSB7XG4gICAgICAgIGZvciAobGV0IHBvc3Qgb2YgYWRkZWRQb3N0cykge1xuICAgICAgICAgICAgcG9zdC5pZCA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcG9zdC50aHJlYWQgPSBwYXJzZUludChwb3N0LnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IHBhcnNlSW50KHBvc3QucGFyZW50KTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBvc3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgYXV0aG9yKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50UG9zdHModGhyZWFkRGF0YS5mb3J1bSwgbmV3UG9zdHMubGVuZ3RoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoVG9Qb3N0ID0gYXN5bmMgZnVuY3Rpb24gKHBvc3QpIHtcbiAgICBjb25zdCBpZEFycmF5ID0gW107XG4gICAgaWRBcnJheS5wdXNoKHBvc3QuaWQpO1xuICAgIGNvbnN0IGlkU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhpZEFycmF5KTtcbiAgICBsZXQgcGF0aHRvcG9zdDtcbiAgICBpZiAoIXBvc3QucGFyZW50KSB7XG4gICAgICAgIHBhdGh0b3Bvc3QgPSBwb3N0LnBhdGh0b3Bvc3QgfHwgaWRTdHJpbmc7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgUG9zdE1vZGVsLmdldFBhdGhUb1Bvc3QocG9zdC5wYXJlbnQpO1xuICAgICAgICBwYXRoLnBhdGh0b3Bvc3QucHVzaChwb3N0LmlkKTtcbiAgICAgICAgY29uc3QgcGF0aFN0cmluZyA9IGNvbnN0cnVjdFBhdGhTdHJpbmcocGF0aC5wYXRodG9wb3N0KTtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBwYXRoU3RyaW5nIHx8IGlkU3RyaW5nXG4gICAgfVxuICAgIHJldHVybiBwYXRodG9wb3N0O1xufSIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50LCBmb3J1bVNlcmlhbGl6ZXIgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5cblxuY2xhc3MgRm9ydW1Db250cm9sbGVyIHtcblxuXHRhc3luYyBjcmVhdGVGb3J1bSAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXHRcdGxldCB1c2VyID0gcmVxLmJvZHlbJ3VzZXInXTtcblx0XHRjb25zdCBzbHVnID0gcmVxLmJvZHlbJ3NsdWcnXTtcblx0XHRjb25zdCB0aXRsZSA9IHJlcS5ib2R5Wyd0aXRsZSddO1xuXG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHVzZXIpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Rm9ydW1EYXRhID0gW1xuXHRcdFx0c2x1Zyxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dXNlci5uaWNrbmFtZVxuXHRcdF1cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZU5ld0ZvcnVtKG5ld0ZvcnVtRGF0YSk7XG5cblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ0ZvcnVtO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nRm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhzaXN0aW5nRm9ydW0pXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zylcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZm9ydW0gZ2V0RGV0YWlscycsZGF0YSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSk7XG5cblxuXHR9XG5cblx0YXN5bmMgY3JlYXRlVGhyZWFkSW5Gb3J1bSAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXHRcdGxldCBhdXRob3IgPSByZXEuYm9keVsnYXV0aG9yJ107XG5cdFx0bGV0IGZvcnVtU2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRsZXQgZm9ydW07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoZm9ydW1TbHVnKTtcbiAgICAgICAgICAgIGlmICghZm9ydW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXG5cblxuXHRcdGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLmJvZHkpO1xuXHRcdGtleVZhbHVlc1snYXV0aG9yJ10gPSBhdXRob3Iubmlja25hbWU7XG5cdFx0a2V5VmFsdWVzWydmb3J1bSddID0gZm9ydW0uc2x1Zztcblx0XHRcblx0XHRjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG5cdFx0XHRcdGNvbHVtbnNbaV0gPSAnXCInICsgY29sdW1uc1tpXSArICdcIic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC5jcmVhdGVOZXdUaHJlYWQoY29sdW1ucywgdmFsdWVzKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW0uc2x1ZywgYXV0aG9yLm5pY2tuYW1lKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGluZyBwYWlyJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRUaHJlYWRzKGZvcnVtLnNsdWcpO1xuXHRcdFx0XHRyZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nVGhyZWFkO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcS5ib2R5WydzbHVnJ10pO1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQuaWQgPSBwYXJzZUludChleHNpc3RpbmdUaHJlYWQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhzaXN0aW5nVGhyZWFkKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHICEhISEnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuIFxuXHRcblx0YXN5bmMgZ2V0VGhyZWFkcyAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuXHRcdH1cblx0XHQvLyBGb3J1bU1vZGVsLmdldEZvcnVtU2x1ZyhzbHVnKVxuXHRcdC8vIFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdC8vIFx0XHRpZiAoZGF0YSl7XG5cdFx0Ly8gXHRcdFx0VGhyZWFkTW9kZWwuZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnKHNsdWcsIHF1ZXJ5UGFyYW1zKVxuXHRcdC8vIFx0XHRcdFx0LnRoZW4oIGRhdGEgPT57XG5cdFx0Ly8gXHRcdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0ZGF0YSA9IGlkVG9JbnQoZGF0YSk7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2ZvcnVtIGdldFRocmVhZHMnLGRhdGEpO1xuXHRcdC8vIFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHQvLyBcdFx0XHRcdFx0fVxuXHRcdC8vIFx0XHRcdFx0fSlcblx0XHQvLyBcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdC8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHQvLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEUyBPRiBGT1JVTScpO1xuXHRcdC8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0Ly8gXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHQvLyBcdFx0XHRcdH0pO1x0XG5cdFx0Ly8gXHRcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KVxuXHRcdC8vIFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHQvLyBcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdC8vIFx0fSk7XHRcblxuXHRcdGxldCByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRzQnlGb3J1bVNsdWcoc2x1ZywgcXVlcnlQYXJhbXMpO1xuXHRcdHJlc3VsdCA9IGlkVG9JbnQocmVzdWx0KTtcblx0XHRpZiAoIXJlc3VsdCB8fCAhcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1ZyhzbHVnKTtcbiAgICAgICAgICAgIGlmICghZm9ydW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuXG5cdH1cblxuXHRhc3luYyBnZXRVc2VycyAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuXHRcdH1cblx0XHRxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnO1xuXHRcdC8vIGxldCBmb3J1bTtcblx0XHQvLyB0cnkge1xuXHRcdC8vIFx0Zm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpO1xuXHRcdC8vIH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHQvLyBcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHQvLyB9XG5cblx0XHQvLyBpZiAoIWZvcnVtKSB7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdFx0Ly8gfSBcblxuXHRcdC8vIHRyeSB7XG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0VXNlcnMoc2x1ZywgcXVlcnlQYXJhbXMpO1xuXG5cdFx0aWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoc2x1Zyk7XG4gICAgICAgICAgICBpZiAoIWZvcnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCBmb3J1bScgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSUyBJTiBGT1JVTScpO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdC8vIH1cblx0XHRyZXN1bHQgPSBmb3J1bVNlcmlhbGl6ZXIocmVzdWx0KTtcblx0XHQvLyBjb25zb2xlLmxvZygnZm9ydW0gZ2V0VXNlcnMnLHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG5cblx0fSBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Db250cm9sbGVyOyIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0VmFsdWVzLCBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcywgaWRUb0ludCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5cbmNsYXNzIFBvc3RDb250cm9sbGVyIHtcbiAgICBhc3luYyBnZXREZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRvID0gcmVxLnF1ZXJ5WydyZWxhdGVkJ107XG4gICAgICAgIGxldCBlbnRpdHk7XG4gICAgICAgIGlmIChyZWxhdGVkVG8pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRFbnRpdGllcyA9IHJlbGF0ZWRUby5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgcmVsYXRlZEVudGl0eSBvZiByZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3VzZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUocG9zdERhdGEuYXV0aG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdXRob3IgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3RocmVhZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ2ZvcnVtJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1Zyhwb3N0RGF0YS5mb3J1bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRpdHkuaWQgPSBwYXJzZUludChlbnRpdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvcnVtID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPSBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpO1xuICAgICAgICByZXN1bHQucG9zdCA9IHBvc3REYXRhO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncG9zdCBnZXREZXRhaWxzJyxyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVEZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8IG5ld0RhdGEubWVzc2FnZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7ICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChwb3N0RGF0YS5tZXNzYWdlICE9PSBuZXdEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnVwZGF0ZVBvc3QobmV3RGF0YS5tZXNzYWdlLCBwb3N0SWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkQgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gcGFyc2VJbnQocmVzdWx0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudCA/IHBhcnNlSW50KHJlc3VsdC5wYXJlbnQpIDogcmVzdWx0LnBhcmVudDsgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7IFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0Q29udHJvbGxlcjsiLCJpbXBvcnQgU2VydmljZU1vZGVsIGZyb20gJy4uL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5jbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjb3VudEFsbCAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBTZXJ2aWNlTW9kZWwuY291bnRBbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlIGNvdW50QWxsJyxyZXN1bHQpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY2xlYXJBbGwgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jbGVhckFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlQ29udHJvbGxlcjsiLCJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IFZvdGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvVm90ZU1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY3JlYXRlUG9zdHNMb29wIH0gZnJvbSAnLi9Db250cm9sbGVyVXRpbHMuanMnO1xuXG5jbGFzcyBUaHJlYWRDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNyZWF0ZVBvc3QgKHJlcSwgcmVzKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBsZXQgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIHNsdWcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVQb3N0c0xvb3AocmVxLHJlcywgdGhyZWFkKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyB2b3RlRm9yVGhyZWFkIChyZXEgLHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IHZvaWNlVmFsdWUgPSByZXEuYm9keS52b2ljZTtcblxuICAgICAgICBsZXQgYXV0aG9yID0gcmVxLmJvZHkubmlja25hbWU7XG5cbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgdm90ZWREYXRhID0gYXdhaXQgVm90ZU1vZGVsLnZvdGUodm9pY2VWYWx1ZSwgdGhyZWFkLmlkLCBhdXRob3IpO1xuXG4gICAgICAgIGlmICh2b3RlZERhdGEpIHtcbiAgICAgICAgICAgIGlmICh2b3RlZERhdGEuZXhpc3RlZCkge1xuICAgICAgICAgICAgICAgIHZvdGVkRGF0YS52b2ljZSA9IHZvdGVkRGF0YS52b2ljZSA9PT0gMSA/IHZvdGVkRGF0YS52b2ljZSArIDEgOiB2b3RlZERhdGEudm9pY2UgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTsgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC5pbmNyZW1lbnRWb3Rlc0J5SWQodGhyZWFkLmlkLCB2b3RlZERhdGEudm9pY2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBpbmNyZW1lbnRpbmcgdm90ZXMgaW4gdGhyZWFkJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhyZWFkIGdldERldGFpbHMnLCB0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZClcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHJlYWQgZ2V0RGV0YWlscycsIHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UG9zdHMocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9IHF1ZXJ5UGFyYW1zWydkZXNjJ10gPT09ICd0cnVlJztcbiAgICAgICAgcXVlcnlQYXJhbXNbJ3NpbmNlJ10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snc2luY2UnXSk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCBpc0lkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIGlzSWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNJZCA9IGZhbHNlXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAnZmxhdCcgfHwgIXF1ZXJ5UGFyYW1zLnNvcnQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5mbGF0U29ydChzbHVnT3JJZCwgaXNJZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICd0cmVlJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnRyZWVTb3J0KHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3BhcmVudF90cmVlJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnBhcmVudFRyZWVTb3J0KHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdGhyZWFkID0gaXNJZCA/IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKSA6IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoIChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNQb3N0ID0ge307XG4gICAgICAgICAgICByZXNQb3N0WydhdXRob3InXSA9IHBvc3QuYXV0aG9yO1xuICAgICAgICAgICAgcmVzUG9zdFsnY3JlYXRlZCddID0gcG9zdC5jcmVhdGVkO1xuICAgICAgICAgICAgcmVzUG9zdFsnZm9ydW0nXSA9IHBvc3QuZm9ydW07XG4gICAgICAgICAgICByZXNQb3N0WydpZCddID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICByZXNQb3N0WydtZXNzYWdlJ10gPSBwb3N0Lm1lc3NhZ2U7XG4gICAgICAgICAgICByZXNQb3N0WydwYXJlbnQnXSA9IHBhcnNlSW50KHBvc3QucGFyZW50KTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3RocmVhZCddID0gcGFyc2VJbnQocG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzUG9zdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVGhyZWFkIChyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwudXBkYXRlVGhyZWFkKHRocmVhZC5zbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkQ29udHJvbGxlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHlbJ2VtYWlsJ107XG4gICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgICAgICAgICAgbmlja25hbWUsXG4gICAgICAgICAgICByZXEuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydhYm91dCddLFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ1VzZXI7XG4gICAgICAgICAgICB0cnkge1xuXHRcdFx0XHRleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleGlzdGluZ1VzZXIpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuXG4gICAgZ2V0VXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSlcbiAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0VXNlcicsIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9ICBcblxuICAgIFxuICAgIGFzeW5jIHVwZGF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0LrQsNC60LjQtS3RgtC+INC00LDQvdC90YvQtSDQsdGL0LvQuCDQvdC1INC/0YPRgdGC0YvQtVxuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC51cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsa2V5VmFsdWVzKVxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6IFwiVXNlciB3aXRoIHN1Y2ggbmlja25hbWUgb3IgZW1haWwgYWxyZWFkeSBleGlzdHNcIiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyQ29udHJvbGxlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vcm91dGVycy9Vc2VyUm91dGVzLmpzJztcbmltcG9ydCBmb3J1bVJvdXRlciBmcm9tICcuL3JvdXRlcnMvRm9ydW1Sb3V0ZXMuanMnO1xuaW1wb3J0IHRocmVhZFJvdXRlciBmcm9tICcuL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzJztcbmltcG9ydCBwb3N0Um91dGVyIGZyb20gJy4vcm91dGVycy9Qb3N0Um91dGVzLmpzJztcbmltcG9ydCBzZXJ2aWNlUm91dGVyIGZyb20gJy4vcm91dGVycy9TZXJ2aWNlUm91dGVzLmpzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuYXBwLnVzZSgnL2FwaS91c2VyJywgdXNlclJvdXRlcik7XG5hcHAudXNlKCcvYXBpL2ZvcnVtJywgZm9ydW1Sb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS90aHJlYWQnLCB0aHJlYWRSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9wb3N0JywgcG9zdFJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3NlcnZpY2UnLCBzZXJ2aWNlUm91dGVyKTtcbmFwcC5nZXQoJy8nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbycpO1xufSlcblxuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBGb3J1bU1vZGVsIHtcblxuICAgIGdldEZvcnVtQnlTbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdGb3J1bSAobmV3Rm9ydW1EYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gZm9ydW1zIChzbHVnLCB0aXRsZSwgXCJ1c2VyXCIpIFZBTFVFUyAoJDEsICQyLCAkMykgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIG5ld0ZvcnVtRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcnVtU2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBzbHVnIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bVNsdWcsIG5pY2tuYW1lKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTRUFSQ0gnLGZvcnVtU2x1Zywgbmlja25hbWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKGBJTlNFUlQgSU5UTyBmb3J1bXVzZXJzIChmb3J1bXNsdWcsIHVzZXJuaWNrbmFtZSkgVkFMVUVTICgkMSxcbiAgICAgICAgICAgICAgICAoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDIpKVxuICAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlX2ZvcnVtdXNlcl9wYWlyIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgLCBbZm9ydW1TbHVnLG5pY2tuYW1lXSk7IFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnRUaHJlYWRzKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgZm9ydW1zIFNFVCB0aHJlYWRzID0gdGhyZWFkcyArIDEgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50UG9zdHMoc2x1ZywgY250KSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShgVVBEQVRFIGZvcnVtcyBTRVQgcG9zdHMgPSBwb3N0cyArICQyIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HICpgLCBbc2x1ZyxjbnRdKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRVc2VycyAoc2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNsdWcgPSBgKFNFTEVDVCBzbHVnIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JyR7c2x1Z30nKWBcbiAgICAgICAgICAgIGxldCBxdWVyeTtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDE6cmF3IEFORCBVLm5pY2tuYW1lPiQyXG4gICAgICAgICAgICAgICAgYCxbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMTpyYXcgQU5EIFUubmlja25hbWU8JDJcbiAgICAgICAgICAgICAgICBgLCBbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMTpyYXdgLCBbc2x1Z10pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgJDE6cmF3IFxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdVLm5pY2tuYW1lIERFU0MnIDogJ1Uubmlja25hbWUgQVNDJyksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGdldFVzZXJzJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2x1ZyA9IGAoU0VMRUNUIHNsdWcgRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0nJHtzbHVnfScpYFxuICAgICAgICAvLyBsZXQgcXVlcnk7XG4gICAgICAgIC8vIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAvLyAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgLy8gICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAvLyAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgLy8gICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMTpyYXcgQU5EIFUubmlja25hbWU+JDJcbiAgICAgICAgLy8gICAgIGAsW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgIC8vICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAvLyAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgIC8vICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAvLyAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxOnJhdyBBTkQgVS5uaWNrbmFtZTwkMlxuICAgICAgICAvLyAgICAgYCwgW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAvLyAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgIC8vICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAvLyAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxOnJhd2AsIFtzbHVnXSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGAkMTpyYXcgXG4gICAgICAgIC8vICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAvLyAgICAgW1xuICAgICAgICAvLyAgICAgICAgIHF1ZXJ5LnRvU3RyaW5nKCksXG4gICAgICAgIC8vICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnVS5uaWNrbmFtZSBERVNDJyA6ICdVLm5pY2tuYW1lIEFTQycpLFxuICAgICAgICAvLyAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG5cbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bU1vZGVsOyAiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmNvbnN0IFBTID0gcmVxdWlyZSgncGctcHJvbWlzZScpLlByZXBhcmVkU3RhdGVtZW50O1xuXG5jb25zdCBnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQgPSBuZXcgUFMoJ2dldC1wb3N0JywgJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEgQU5EIHRocmVhZD0kMicpO1xuXG5jbGFzcyBQb3N0TW9kZWwge1xuICAgIFxuICAgIGNyZWF0ZU5ld1Bvc3QgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgYyA9ICcoJzsgXG4gICAgICAgIGxldCB2ID0gJygnO1xuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHBvc3RzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyAnIFJFVFVSTklORyAqJztcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSAocXVlcnkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocXVlcnkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUocXVlcnkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgUE9TVCBOTyBBVVRIT1InKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFzeW5jIHRyYW5zYWN0VGVzdCAocXVlcnkpXG5cbiAgICBnZXRQb3N0QnlJZEFuZFRocmVhZElkIChpZCwgdGhyZWFkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCwgW2lkLCB0aHJlYWRJZF0pXG4gICAgfVxuXG4gICAgZ2V0UG9zdEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMScsIFtpZF0pO1xuICAgIH1cblxuICAgIGdldElkRm9yUG9zdCAoKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShcIlNFTEVDVCBuZXh0dmFsKCdwb3N0c19pZF9zZXF1YW5jZScpXCIpOyBcbiAgICB9XG5cbiAgICB1cGRhdGVQb3N0IChtZXNzYWdlLCBpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBwb3N0cyBTRVQgXCJpc0VkaXRlZFwiPVRSVUUsIFwibWVzc2FnZVwiPSQxIFdIRVJFIGlkPSQyIFJFVFVSTklORyAqJywgW21lc3NhZ2UsaWRdKTtcbiAgICB9XG5cbiAgICBnZXRQYXRoVG9Qb3N0IChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyBmbGF0U29ydCAoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkSWQpO1xuXG4gICAgICAgICAgICBpZiAoIHF1ZXJ5UGFyYW1zLnNpbmNlICkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgaWQ8JDJcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDE6cmF3IEFORCBpZD4kMlxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMTpyYXdcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDE6cmF3XG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBmbGF0IHNvcnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gY29uc3QgdGhyZWFkSWQgPSBpc0lkID8gc2x1Z09ySWQgOiBgKFNFTEVDVCBpZCBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0nJHtzbHVnT3JJZH0pJ2A7XG4gICAgICAgIC8vIGlmICggcXVlcnlQYXJhbXMuc2luY2UgKSB7XG4gICAgICAgIC8vICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgaWQ8JDJcbiAgICAgICAgLy8gICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgIC8vICAgICAgICAgW1xuICAgICAgICAvLyAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgIC8vICAgICAgICAgXSk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgaWQ+JDJcbiAgICAgICAgLy8gICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAvLyAgICAgICAgIFtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAvLyAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAvLyAgICAgICAgIF0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMTpyYXdcbiAgICAgICAgLy8gICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgIC8vICAgICAgICAgW1xuICAgICAgICAvLyAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgIC8vICAgICAgICAgXSk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhd1xuICAgICAgICAvLyAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgIC8vICAgICAgICAgW1xuICAgICAgICAvLyAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgIC8vICAgICAgICAgXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBhc3luYyB0cmVlU29ydCAoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJZCA/IHNsdWdPcklkIDogYChTRUxFQ1QgaWQgRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JyR7c2x1Z09ySWR9JylgO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkSWQpO1xuICAgICAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwYXRodG9wb3N0IERFU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDE6cmF3IEFORCBwYXRodG9wb3N0ID4gKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxOnJhdyBcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gdHJlZSBzb3J0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gY29uc3QgdGhyZWFkSWQgPSBpc0lkID8gc2x1Z09ySWQgOiBgKFNFTEVDVCBpZCBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0nJHtzbHVnT3JJZH0nKWA7XG4gICAgICAgIC8vIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGF0aHRvcG9zdCBERVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgIC8vIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAvLyAgICAgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdCA+IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAvLyAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgLy8gICAgIFtcbiAgICAgICAgLy8gICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgLy8gICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgLy8gICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgIC8vICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgLy8gICAgIF0pOyAgIFxuICAgICAgICAvLyB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgLy8gICAgIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgLy8gICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgIC8vICAgICBbXG4gICAgICAgIC8vICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgIC8vICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgIC8vICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAvLyAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgIC8vICAgICBdKTsgICBcbiAgICAgICAgLy8gfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgLy8gICAgIFdIRVJFIHRocmVhZD0kMTpyYXcgXG4gICAgICAgIC8vICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAvLyAgICAgW1xuICAgICAgICAvLyAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAvLyAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgLy8gICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAvLyAgICAgXSk7ICAgXG4gICAgICAgIC8vIH1cblxuICAgIH1cblxuICAgIGFzeW5jIHBhcmVudFRyZWVTb3J0IChzbHVnT3JJZCwgaXNJZCwgcXVlcnlQYXJhbXMpIHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGhyZWFkSWQgPSBpc0lkID8gc2x1Z09ySWQgOiBgKFNFTEVDVCBpZCBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0nJHtzbHVnT3JJZH0nKWA7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aHJlYWRJZCk7XG4gICAgICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BpZC5wYXJlbnRfaWQgREVTQywgcGF0aHRvcG9zdCBBU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgICAgIGNvbnN0IGlkU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ2lkIERFU0MnIDogJ2lkIEFTQydcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDE6cmF3IEFORCBwYXRodG9wb3N0WzFdID4gKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMTpyYXcgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDE6cmF3IEFORCBwYXRodG9wb3N0WzFdIDwgKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMTpyYXcgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICk7ICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDE6cmF3XG4gICAgICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMTpyYXcgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICk7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gdHJlZSBzb3J0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gY29uc3QgdGhyZWFkSWQgPSBpc0lkID8gc2x1Z09ySWQgOiBgKFNFTEVDVCBpZCBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0nJHtzbHVnT3JJZH0nKWA7XG4gICAgICAgIC8vIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGlkLnBhcmVudF9pZCBERVNDLCBwYXRodG9wb3N0IEFTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICAvLyBjb25zdCBpZFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdpZCBERVNDJyA6ICdpZCBBU0MnXG4gICAgICAgIC8vIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgLy8gICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAvLyAgICAgICAgIEpPSU4gKFxuICAgICAgICAvLyAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3RbMV0gPiAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgLy8gICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgIC8vICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgLy8gICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgIC8vICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgIC8vICAgICAgICAgYCxcbiAgICAgICAgLy8gICAgICAgICBbXG4gICAgICAgIC8vICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAvLyAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAvLyAgICAgICAgIF1cbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgIC8vICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAvLyAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgIC8vICAgICAgICAgSk9JTiAoXG4gICAgICAgIC8vICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdFsxXSA8IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAvLyAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgLy8gICAgICAgICApIEFTIHBpZFxuICAgICAgICAvLyAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgLy8gICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgLy8gICAgICAgICBgLFxuICAgICAgICAvLyAgICAgICAgIFtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAvLyAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAvLyAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgLy8gICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgIC8vICAgICAgICAgXVxuICAgICAgICAvLyAgICAgKTsgICBcbiAgICAgICAgLy8gfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgIC8vICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgLy8gICAgICAgICBKT0lOIChcbiAgICAgICAgLy8gICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDE6cmF3XG4gICAgICAgIC8vICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAvLyAgICAgICAgICkgQVMgcGlkXG4gICAgICAgIC8vICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAvLyAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAvLyAgICAgICAgIGAsXG4gICAgICAgIC8vICAgICAgICAgW1xuICAgICAgICAvLyAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAvLyAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgLy8gICAgICAgICBdXG4gICAgICAgIC8vICAgICApOyAgICBcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBTZXJ2aWNlTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNvdW50QWxsKCkge1xuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gZm9ydW1zJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHBvc3RzJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdGhyZWFkcycpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB1c2VycycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IHBhcnNlSW50KGZvcnVtLmNvdW50KSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwYXJzZUludChwb3N0LmNvdW50KSxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHBhcnNlSW50KHRocmVhZC5jb3VudCksXG4gICAgICAgICAgICBcInVzZXJcIjogcGFyc2VJbnQodXNlci5jb3VudClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIGNsZWFyQWxsKCkge1xuXG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgZm9ydW1zIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHBvc3RzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdGhyZWFkcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB1c2VycyBDQVNDQURFJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogZm9ydW0sXG4gICAgICAgICAgICBcInBvc3RcIjogcG9zdCxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHRocmVhZCxcbiAgICAgICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFRocmVhZE1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjcmVhdGVOZXdUaHJlYWQgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgYyA9ICcoJzsgXG4gICAgICAgIGxldCB2ID0gJygnO1xuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyB0aHJlYWRzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyBgIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBpZD0kMScsIFtpZF0pXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIChmb3J1bVNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnXG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPj0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIjw9JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkMycsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJ1xuICAgICAgICAvLyBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI+PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAvLyAgICAgW1xuICAgICAgICAvLyAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgLy8gICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgLy8gICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgLy8gICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAvLyAgICAgXSk7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIjw9JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgIC8vICAgICBbXG4gICAgICAgIC8vICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAvLyAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAvLyAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAvLyAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgIC8vICAgICBdKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDMnLCBcbiAgICAgICAgLy8gICAgIFtcbiAgICAgICAgLy8gICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgIC8vICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgIC8vICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgLy8gICAgIF0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeVNsdWcgKHNsdWcsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWcsdm9pY2VdKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5SWQgKGlkLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgaWQ9JDEgUkVUVVJOSU5HIConLCBbaWQsdm9pY2VdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUaHJlYWQgKHNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3RocmVhZHMnfSxudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJzbHVnXFxcIiA9IFxcJ1wiICsgIHNsdWcgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkTW9kZWw7XG4iLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuY29uc3QgUFMgPSByZXF1aXJlKCdwZy1wcm9taXNlJykuUHJlcGFyZWRTdGF0ZW1lbnQ7XG5cblxuY29uc3QgZ2V0Tmlja25hbWVTdGF0ZW1lbnQgPSBuZXcgUFMoJ2dldC1uaWNrJywgJ1NFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJyk7XG5cblxuY2xhc3MgVXNlck1vZGVsIHtcblxuICAgIGdldFVzZXJCeU5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICAvLyBvbmVPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L3Rg9C7INC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIChuaWNrLCBtYWlsKSB7IC8vINC80L7QttC90L4g0LrQsNC6LdGC0L4g0L3QtSDQv9GA0L7RhdC+0LTQuNGC0YzRgdGPINC/0L4g0LLRgdC10Lkg0YLQsNCx0LvQuNGG0LUsINCwINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDRgtGB0Y8g0LrQsNC6INGC0L7Qu9GM0LrQviDQvdCw0YjQu9C4IDEg0LLRhdC+0LbQtNC10L3QuNC1XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gbmljayB8fCAnJztcbiAgICAgICAgY29uc3QgZW1haWwgPSBtYWlsIHx8ICcnO1xuICAgICAgICAvLyBtYW55T3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LIg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMSBPUiBlbWFpbD0kMicsIFtuaWNrbmFtZSwgZW1haWxdKTsgXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIHVzZXJzIChuaWNrbmFtZSwgZnVsbG5hbWUsIGFib3V0LCBlbWFpbCkgVkFMVUVTICgkMSwgJDIsICQzICwkNCkgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIG5ld1VzZXJEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFVTRVInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFzeW5jIHVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucywga2V5VmFsdWVzKSB7XG5cbiAgICAvLyAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUVVFUllcIiwgcXVlcnkpO1xuICAgIC8vICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIC8vIH1cblxuXG4gICAgYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDQu9GB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LjQvNGPINC40LzQtdC90L3QviDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0LjRgdCw0L3QvlxuICAgIC8qXG4gICAg0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNGB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0YxcbiAgICDQuNC80Y8g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC/0LjRgdCw0L3QviDQsiDRgtCw0LHQu9C40YbQtSB1c2VycyAo0L3QtSDQsiDQstC10YDRhdC90LXQvCDQuNC70Lgg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LDRhSlcbiAgICAqL1xuICAgIGdldFVzZXJOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGdldE5pY2tuYW1lU3RhdGVtZW50LCBbbmlja25hbWVdKVxuICAgIH1cblxuXG59IFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlck1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBWb3RlTW9kZWwge1xuXG4gICAgYXN5bmMgdm90ZSAodm9pY2UsIHRocmVhZElkLCBuaWNrbmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKGBJTlNFUlQgSU5UTyB2b3RlcyAodm9pY2UsIHRocmVhZCwgbmlja25hbWUpIFZBTFVFUyAoJDEsICQyLCAoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JyR7bmlja25hbWV9JykpIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlVGhyZWFkTmlja25hbWUgRE8gXG4gICAgICAgICAgICBVUERBVEUgU0VUIHZvaWNlPSQxIFdIRVJFIHZvdGVzLnZvaWNlPD4kMSBSRVRVUk5JTkcgKiwgKHhtYXg6OnRleHQ6OmludCA+IDApIGFzIGV4aXN0ZWRgLCBbdm9pY2UsIHRocmVhZElkXSk7IFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWb3RlTW9kZWw7IFxuIiwiZXhwb3J0IGNvbnN0IHBncCA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKSgpO1xuXG5jb25zdCBkYk9wdGlvbnMgPSB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogNTQzMixcbiAgICBkYXRhYmFzZTogJ2ZvcnVtJyxcbiAgICB1c2VyOiAnZXJtYWtmb3J1bScsXG4gICAgcGFzc3dvcmQ6ICcxMjMnXG59XG5cbmNvbnN0IGRiSW5zdGFuY2UgPSBwZ3AoZGJPcHRpb25zKTtcbmV4cG9ydCBkZWZhdWx0IGRiSW5zdGFuY2U7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IEZvcnVtQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Gb3J1bUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBmb3J1bVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmZvcnVtUm91dGVyLnBvc3QoJy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlRm9ydW0pO1xuZm9ydW1Sb3V0ZXIucG9zdCgnLzpzbHVnL2NyZWF0ZScsIEZvcnVtQ29udHJvbGxlci5jcmVhdGVUaHJlYWRJbkZvcnVtKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL2RldGFpbHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy90aHJlYWRzJywgRm9ydW1Db250cm9sbGVyLmdldFRocmVhZHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdXNlcnMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0VXNlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J1bVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFBvc3RDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLmpzJztcblxuY29uc3QgcG9zdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBvc3RSb3V0ZXIuZ2V0KCcvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci5nZXREZXRhaWxzKTtcbnBvc3RSb3V0ZXIucG9zdCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIudXBkYXRlRGV0YWlscyk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBTZXJ2aWNlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9TZXJ2aWNlQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHNlcnZpY2VSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5zZXJ2aWNlUm91dGVyLmdldCgnL3N0YXR1cycsIFNlcnZpY2VDb250cm9sbGVyLmNvdW50QWxsKTtcbnNlcnZpY2VSb3V0ZXIucG9zdCgnL2NsZWFyJywgU2VydmljZUNvbnRyb2xsZXIuY2xlYXJBbGwpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVGhyZWFkQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9UaHJlYWRDb250cm9sbGVyLmpzJztcblxuY29uc3QgdGhyZWFkUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9jcmVhdGUnLCBUaHJlYWRDb250cm9sbGVyLmNyZWF0ZVBvc3QpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC92b3RlJywgVGhyZWFkQ29udHJvbGxlci52b3RlRm9yVGhyZWFkKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9wb3N0cycsIFRocmVhZENvbnRyb2xsZXIuZ2V0UG9zdHMpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci51cGRhdGVUaHJlYWQpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRocmVhZFJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzJztcblxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9jcmVhdGUnLCBVc2VyQ29udHJvbGxlci5jcmVhdGVVc2VyKTtcbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcik7XG51c2VyUm91dGVyLmdldCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIuZ2V0VXNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7IiwiZXhwb3J0IGNvbnN0IGhhcnZlc3RDb2x1bW5zID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlzID0gW11cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgY29uc3QgaGFydmVzdFZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBPYmplY3QudmFsdWVzKGRhdGEpKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0S2V5VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlWYWx1ZXMgPSB7fVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5VmFsdWVzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleVZhbHVlcztcbn1cblxuZXhwb3J0IGNvbnN0IGlkVG9JbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldLmlkID0gcGFyc2VJbnQoZGF0YVtpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgY29uc3QgdmFsU3RyID0gZnVuY3Rpb24gKGFycmF5T2ZQb3N0T2JqZWN0cykge1xuICAgIC8vIGxldCByZXN1bHRRdWVyeSA9IGBXSVRIIHBvc3RfYXV0aG9yIEFTIChcbiAgICAvLyAgICAgU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JHtuaWNrbmFtZX1cbiAgICAvLyAgICApIGA7XG4gICAgbGV0IHJlc3VsdFF1ZXJ5ID0gYGA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mUG9zdE9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWVzSW5BcnJheSA9IGhhcnZlc3RWYWx1ZXMoYXJyYXlPZlBvc3RPYmplY3RzW2ldKTtcbiAgICAgICAgbGV0IHZhbCA9IGAgKGA7XG4gICAgICAgIHZhbCArPSBgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSR7YCdgICsgdmFsdWVzSW5BcnJheVswXSArIGAnYH0pLCBgO1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHZhbHVlc0luQXJyYXkubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgaWYgKCBqICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IFwiJ1wiICsgdmFsdWVzSW5BcnJheVtqXSArIFwiJ1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gdmFsdWVzSW5BcnJheVtqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogIT09IHZhbHVlc0luQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHZhbCArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0UXVlcnkgKz0gdmFsO1xuICAgICAgICBpZiAoaSA9PT0gYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0UXVlcnk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFBhdGhTdHJpbmcgPSBmdW5jdGlvbiAocGF0aEFycmF5KSB7XG4gICAgbGV0IHJlc3VsdCA9IGB7YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gcGF0aEFycmF5W2ldO1xuICAgICAgICBpZiAoaSAhPT0gcGF0aEFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBgLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCArPSBgfWA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGZvcnVtU2VyaWFsaXplciA9IGZ1bmN0aW9uIChmb3J1bXNBcnJheSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiPz8/Pz8/Pz8/Pz8/Pz8/Pz8/XCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiIyMjXCIpXG4gICAgZm9yIChsZXQgZm9ydW0gb2YgZm9ydW1zQXJyYXkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyNcIitmb3J1bS5hYm91dCk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRGb3J1bSA9IHtcbiAgICAgICAgICAgIFwiYWJvdXRcIjogZm9ydW0uYWJvdXQsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGZvcnVtLmVtYWlsLFxuICAgICAgICAgICAgXCJmdWxsbmFtZVwiOiBmb3J1bS5mdWxsbmFtZSxcbiAgICAgICAgICAgIFwibmlja25hbWVcIjogZm9ydW0ubmlja25hbWVcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChzZXJpYWxpemVkRm9ydW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGctcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==