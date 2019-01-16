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
    value: function getThreads(req, res) {
      // console.log(req.originalUrl, req.method);
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
              data = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["idToInt"])(data); // console.log('forum getThreads',data);

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
                // console.log(req.originalUrl, req.method);
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
                result = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["forumSerializer"])(result); // console.log('forum getUsers',result);

                return _context3.abrupt("return", res.status(200).json(result));

              case 33:
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
                author = req.body.nickname; // try {
                //     author = await UserModel.getUserNickname(author);
                //     if (!author) {
                //         return res.status(404).json({ message : 'cant find author' }); 
                //     }
                // } catch (error) {
                //     console.log('--------------------------------------------');
                //     console.log('ERROR IN GETTING USER BY NICKNAME');
                //     console.log(error);
                //     return res.status(500).json({ message : "crash" })
                // }

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
        var queryParams, result, slugOrId, thread;
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
                }); // console.log('thread getPosts',result);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJuZXdQb3N0cyIsImJvZHkiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwiYXV0aG9yIiwicG9zdCIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJpZCIsInBhcmVudFBvc3QiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImZvcnVtIiwiZ2V0SWRGb3JQb3N0IiwicG9zdElkIiwiY3JlYXRlZCIsInRocmVhZCIsInBhcnNlSW50IiwibmV4dHZhbCIsImNvbnN0cnVjdFBhdGhUb1Bvc3QiLCJwYXRoIiwicGF0aHRvcG9zdCIsInB1c2giLCJyZXN1bHQiLCJjb2x1bW5zIiwidmFsdWVzSW5TdHJpbmdRdWVyeSIsInZhbFN0ciIsInF1ZXJ5IiwiY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IiwiYWRkZWRQb3N0cyIsImluY3JlbWVudFBvc3RzIiwiaWRBcnJheSIsImlkU3RyaW5nIiwiY29uc3RydWN0UGF0aFN0cmluZyIsImdldFBhdGhUb1Bvc3QiLCJwYXRoU3RyaW5nIiwiRm9ydW1Db250cm9sbGVyIiwidXNlciIsInNsdWciLCJ0aXRsZSIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsIm5ld0ZvcnVtRGF0YSIsIm5pY2tuYW1lIiwiY3JlYXRlTmV3Rm9ydW0iLCJnZXRGb3J1bUJ5U2x1ZyIsImV4c2lzdGluZ0ZvcnVtIiwicGFyYW1zIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZm9ydW1TbHVnIiwiZ2V0Rm9ydW1TbHVnIiwia2V5VmFsdWVzIiwiaGFydmVzdEtleVZhbHVlcyIsImhhcnZlc3RDb2x1bW5zIiwiaSIsInZhbHVlcyIsImhhcnZlc3RWYWx1ZXMiLCJUaHJlYWRNb2RlbCIsImNyZWF0ZU5ld1RocmVhZCIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsImdldFRocmVhZHNCeUZvcnVtU2x1ZyIsImlkVG9JbnQiLCJkZXNjIiwiZ2V0VXNlcnMiLCJmb3J1bVNlcmlhbGl6ZXIiLCJQb3N0Q29udHJvbGxlciIsImdldFBvc3RCeUlkIiwicG9zdERhdGEiLCJyZWxhdGVkVG8iLCJyZWxhdGVkRW50aXRpZXMiLCJzcGxpdCIsInJlbGF0ZWRFbnRpdHkiLCJnZXRVc2VyQnlOaWNrbmFtZSIsImVudGl0eSIsImdldFRocmVhZEJ5SWQiLCJuZXdEYXRhIiwiT2JqZWN0IiwidXBkYXRlUG9zdCIsIlNlcnZpY2VDb250cm9sbGVyIiwiU2VydmljZU1vZGVsIiwiY291bnRBbGwiLCJjbGVhckFsbCIsImVuZCIsIlRocmVhZENvbnRyb2xsZXIiLCJzbHVnT3JJZCIsInRlc3QiLCJtZXNhZ2UiLCJ2b2ljZVZhbHVlIiwidm9pY2UiLCJWb3RlTW9kZWwiLCJ2b3RlIiwidm90ZWREYXRhIiwiZXhpc3RlZCIsImluY3JlbWVudFZvdGVzQnlJZCIsInNvcnQiLCJmbGF0U29ydCIsInRyZWVTb3J0IiwicGFyZW50VHJlZVNvcnQiLCJtYXAiLCJyZXNQb3N0IiwidXBkYXRlVGhyZWFkIiwiVXNlckNvbnRyb2xsZXIiLCJlbWFpbCIsIm5ld1VzZXJEYXRhIiwiY3JlYXRlTmV3VXNlciIsImdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCIsImV4aXN0aW5nVXNlciIsInVwZGF0ZVVzZXIiLCJhcHAiLCJleHByZXNzIiwidXNlIiwidXNlclJvdXRlciIsImZvcnVtUm91dGVyIiwidGhyZWFkUm91dGVyIiwicG9zdFJvdXRlciIsInNlcnZpY2VSb3V0ZXIiLCJnZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJkYkluc3RhbmNlIiwib25lT3JOb25lIiwiY250Iiwic2luY2UiLCJwZ3AiLCJhcyIsImZvcm1hdCIsIm1hbnlPck5vbmUiLCJ0b1N0cmluZyIsImxpbWl0IiwiUFMiLCJyZXF1aXJlIiwiUHJlcGFyZWRTdGF0ZW1lbnQiLCJnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQiLCJjIiwidiIsIm9uZSIsInRocmVhZElkIiwicGF0aFNvcnRSdWxlIiwiaWRTb3J0UnVsZSIsImNvdW50Iiwibm9uZSIsImhlbHBlcnMiLCJ1cGRhdGUiLCJ0YWJsZSIsImVtcHR5VXBkYXRlIiwiZ2V0Tmlja25hbWVTdGF0ZW1lbnQiLCJuaWNrIiwibWFpbCIsImRiT3B0aW9ucyIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiUm91dGVyIiwiY3JlYXRlRm9ydW0iLCJjcmVhdGVUaHJlYWRJbkZvcnVtIiwiZ2V0RGV0YWlscyIsImdldFRocmVhZHMiLCJ1cGRhdGVEZXRhaWxzIiwiY3JlYXRlUG9zdCIsInZvdGVGb3JUaHJlYWQiLCJnZXRQb3N0cyIsImNyZWF0ZVVzZXIiLCJnZXRVc2VyIiwia2V5cyIsImtleSIsInZhbHVlIiwiYXJyYXlPZlBvc3RPYmplY3RzIiwicmVzdWx0UXVlcnkiLCJ2YWx1ZXNJbkFycmF5IiwidmFsIiwiaiIsInBhdGhBcnJheSIsImZvcnVtc0FycmF5Iiwic2VyaWFsaXplZEZvcnVt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O0FBQ0g7QUFDSjs7QUFDREEsUUFBTSxPQUFOO0FBQ0EsU0FBT0EsTUFBUDtBQUNILENBVk07QUFZQSxJQUFNK0MsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFVK0csV0FBVixFQUF1QjtBQUNsRCxNQUFNOUosTUFBTSxHQUFHLEVBQWYsQ0FEa0QsQ0FFbEQ7QUFDQTs7QUFIa0Q7QUFBQTtBQUFBOztBQUFBO0FBSWxELHlCQUFrQjhKLFdBQWxCLDhIQUErQjtBQUFBLFVBQXRCekssS0FBc0I7QUFDM0I7QUFDQSxVQUFNMEssZUFBZSxHQUFHO0FBQ3BCLGlCQUFTMUssS0FBSyxDQUFDMkssS0FESztBQUVwQixpQkFBUzNLLEtBQUssQ0FBQ2dHLEtBRks7QUFHcEIsb0JBQVloRyxLQUFLLENBQUM0SyxRQUhFO0FBSXBCLG9CQUFZNUssS0FBSyxDQUFDK0I7QUFKRSxPQUF4QjtBQU1BcEIsWUFBTSxDQUFDRCxJQUFQLENBQVlnSyxlQUFaO0FBQ0g7QUFiaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjbEQsU0FBTy9KLE1BQVA7QUFDSCxDQWZNLEM7Ozs7Ozs7Ozs7O0FDbkZQLDJDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mb3J1bS9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHsgdmFsU3RyLCBjb25zdHJ1Y3RQYXRoU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0c0xvb3AgPSBhc3luYyBmdW5jdGlvbiAocmVxLHJlcywgdGhyZWFkRGF0YSkge1xuICAgIGNvbnN0IHBvc3RzVmFsdWVzID0gW107XG4gICAgY29uc3QgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgIGNvbnN0IG5ld1Bvc3RzID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIW5ld1Bvc3RzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoW10pO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhvciA9IG5ld1Bvc3RzWzBdLmF1dGhvcjtcbiAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQuyDQv9C10YDQtdC00LDQvSBpZCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YJcbiAgICAgICAgaWYgKHBvc3QucGFyZW50KSB7XG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LXRgdGC0Ywg0LvQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YIg0LIg0YHQuNGB0YLQtdC80LUgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFBvc3QgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZChwb3N0LnBhcmVudCwgdGhyZWFkRGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnbm8gcGFyZW50IHBvc3RzJyB9KTsgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJlbnRQb3N0LmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBQQVJFTlRTJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Y7Qt9C10YDQsCDQsiDRhNC+0YDRg9C8IFxuICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpO1xuXG4gICAgICAgIC8vIGNvbnN0IHBhaXIgPSBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpOyAgICAgICAgXG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IGF3YWl0IFBvc3RNb2RlbC5nZXRJZEZvclBvc3QoKTtcbiAgICAgICAgcG9zdC5jcmVhdGVkID0gY3JlYXRpb25EYXRlO1xuICAgICAgICBwb3N0LnRocmVhZCA9IHRocmVhZERhdGEuaWQ7XG4gICAgICAgIHBvc3QuZm9ydW0gPSB0aHJlYWREYXRhLmZvcnVtO1xuICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdElkLm5leHR2YWwpO1xuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgY29uc3RydWN0UGF0aFRvUG9zdChwb3N0KTtcbiAgICAgICAgcG9zdC5wYXRodG9wb3N0ID0gcGF0aDtcbiAgICAgICAgcG9zdHNWYWx1ZXMucHVzaChwb3N0KTtcbiAgICB9XG5cbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QvtGB0YJcbiAgICBjb25zdCByZXN1bHQgPSBbXTsgXG4gICAgY29uc3QgY29sdW1ucyA9IGAoYXV0aG9yLCBcIm1lc3NhZ2VcIiwgcGFyZW50LCBcImNyZWF0ZWRcIiwgdGhyZWFkLCBmb3J1bSwgaWQsIHBhdGh0b3Bvc3QpYFxuICAgIGNvbnN0IHZhbHVlc0luU3RyaW5nUXVlcnkgPSB2YWxTdHIocG9zdHNWYWx1ZXMpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBJTlRPIHBvc3RzIGAgKyBjb2x1bW5zICsgYCBWQUxVRVMgYCArIHZhbHVlc0luU3RyaW5nUXVlcnkgKyBgIFJFVFVSTklORyAqYDtcbiAgICBjb25zdCBhZGRlZFBvc3RzID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZU5ld1Bvc3RzQnlRdWVyeShxdWVyeSk7XG4gICAgaWYgKGFkZGVkUG9zdHMpIHtcbiAgICAgICAgZm9yIChsZXQgcG9zdCBvZiBhZGRlZFBvc3RzKSB7XG4gICAgICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICBwb3N0LnRocmVhZCA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocG9zdCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBhdXRob3IpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRQb3N0cyh0aHJlYWREYXRhLmZvcnVtLCBuZXdQb3N0cy5sZW5ndGgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFBhdGhUb1Bvc3QgPSBhc3luYyBmdW5jdGlvbiAocG9zdCkge1xuICAgIGNvbnN0IGlkQXJyYXkgPSBbXTtcbiAgICBpZEFycmF5LnB1c2gocG9zdC5pZCk7XG4gICAgY29uc3QgaWRTdHJpbmcgPSBjb25zdHJ1Y3RQYXRoU3RyaW5nKGlkQXJyYXkpO1xuICAgIGxldCBwYXRodG9wb3N0O1xuICAgIGlmICghcG9zdC5wYXJlbnQpIHtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBpZFN0cmluZztcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UGF0aFRvUG9zdChwb3N0LnBhcmVudCk7XG4gICAgICAgIHBhdGgucGF0aHRvcG9zdC5wdXNoKHBvc3QuaWQpO1xuICAgICAgICBjb25zdCBwYXRoU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhwYXRoLnBhdGh0b3Bvc3QpO1xuICAgICAgICBwYXRodG9wb3N0ID0gcG9zdC5wYXRodG9wb3N0IHx8IHBhdGhTdHJpbmcgfHwgaWRTdHJpbmdcbiAgICB9XG4gICAgcmV0dXJuIHBhdGh0b3Bvc3Q7XG59IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQsIGZvcnVtU2VyaWFsaXplciB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5cblxuXG5jbGFzcyBGb3J1bUNvbnRyb2xsZXIge1xuXG5cdGFzeW5jIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdFx0XHRzbHVnLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR1c2VyLm5pY2tuYW1lXG5cdFx0XVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKTtcblxuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblxuXHRcblx0Z2V0RGV0YWlscyAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKVxuXHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdmb3J1bSBnZXREZXRhaWxzJyxkYXRhKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgZm9ydW0nIH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRhc3luYyBjcmVhdGVUaHJlYWRJbkZvcnVtIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGxldCBmb3J1bTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cblxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvci5uaWNrbmFtZTtcblx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bS5zbHVnO1xuXHRcdFxuXHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bS5zbHVnLCBhdXRob3Iubmlja25hbWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW0uc2x1Zyk7XG5cdFx0XHRcdHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBleHNpc3RpbmdUaHJlYWQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSk7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZC5pZCA9IHBhcnNlSW50KGV4c2lzdGluZ1RocmVhZC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdUaHJlYWQpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcgISEhIScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gXG5cdFxuXHRnZXRUaHJlYWRzIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKXtcblx0XHRcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRzQnlGb3J1bVNsdWcoc2x1ZywgcXVlcnlQYXJhbXMpXG5cdFx0XHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhID0gaWRUb0ludChkYXRhKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZm9ydW0gZ2V0VGhyZWFkcycsZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQURTIE9GIEZPUlVNJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0XHRcdFx0fSk7XHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcdFxuXHR9XG5cblx0YXN5bmMgZ2V0VXNlcnMgKHJlcSwgcmVzKSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0cXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJztcblx0XHRsZXQgZm9ydW07XG5cdFx0dHJ5IHtcblx0XHRcdGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0aWYgKCFmb3J1bSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdH0gXG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0VXNlcnMoZm9ydW0uc2x1ZywgcXVlcnlQYXJhbXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVJTIElOIEZPUlVNJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXHRcdHJlc3VsdCA9IGZvcnVtU2VyaWFsaXplcihyZXN1bHQpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdmb3J1bSBnZXRVc2VycycscmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcblxuXHR9IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIGFzeW5jIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGVkVG8gPSByZXEucXVlcnlbJ3JlbGF0ZWQnXTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgIHBvc3REYXRhLnBhcmVudCA9IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCk7XG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb3N0IGdldERldGFpbHMnLHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgbmV3RGF0YS5tZXNzYWdlID09PSAnJykge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHBvc3REYXRhLm1lc3NhZ2UgIT09IG5ld0RhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwudXBkYXRlUG9zdChuZXdEYXRhLm1lc3NhZ2UsIHBvc3RJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORCBQT1NUJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdjb25mbGljdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBwYXJzZUludChyZXN1bHQudGhyZWFkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFyZW50ID8gcGFyc2VJbnQocmVzdWx0LnBhcmVudCkgOiByZXN1bHQucGFyZW50OyAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RDb250cm9sbGVyOyIsImltcG9ydCBTZXJ2aWNlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1NlcnZpY2VNb2RlbC5qcyc7XG5cbmNsYXNzIFNlcnZpY2VDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNvdW50QWxsIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jb3VudEFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlcnZpY2UgY291bnRBbGwnLHJlc3VsdClcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjbGVhckFsbCAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyOyIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgVm90ZU1vZGVsIGZyb20gJy4uL21vZGVscy9Wb3RlTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0c0xvb3AgfSBmcm9tICcuL0NvbnRyb2xsZXJVdGlscy5qcyc7XG5cbmNsYXNzIFRocmVhZENvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlUG9zdCAocmVxLCByZXMpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGxldCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWQpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIHZvdGVGb3JUaHJlYWQgKHJlcSAscmVzKSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3Qgdm9pY2VWYWx1ZSA9IHJlcS5ib2R5LnZvaWNlO1xuXG4gICAgICAgIGxldCBhdXRob3IgPSByZXEuYm9keS5uaWNrbmFtZTtcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgLy8gICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgLy8gICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTsgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIHNsdWcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCB2b3RlZERhdGE7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGNvbnN0IHZvdGVkRGF0YSA9IGF3YWl0IFZvdGVNb2RlbC52b3RlKHZvaWNlVmFsdWUsIHRocmVhZC5pZCwgYXV0aG9yKTtcbiAgICAgICAgLy8gaWYgKCF2b3RlZERhdGEpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZSA6ICdjYW50IGZpbmQgdXNlcid9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gTUFLSU5HIFZPVEUnKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHZvdGVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZvdGVkRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgdm90ZWREYXRhLnZvaWNlID0gdm90ZWREYXRhLnZvaWNlID09PSAxID8gdm90ZWREYXRhLnZvaWNlICsgMSA6IHZvdGVkRGF0YS52b2ljZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmluY3JlbWVudFZvdGVzQnlJZCh0aHJlYWQuaWQsIHZvdGVkRGF0YS52b2ljZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGluY3JlbWVudGluZyB2b3RlcyBpbiB0aHJlYWQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSlcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHJlYWQgZ2V0RGV0YWlscycsIHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RocmVhZCBnZXREZXRhaWxzJywgdGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQb3N0cyhyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeVBhcmFtc1snZGVzYyddID0gcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9PT0gJ3RydWUnO1xuICAgICAgICBxdWVyeVBhcmFtc1snc2luY2UnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydzaW5jZSddKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAnZmxhdCcgfHwgIXF1ZXJ5UGFyYW1zLnNvcnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLmZsYXRTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGZsYXQgc29ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC50cmVlU29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0cmVlIHNvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdwYXJlbnRfdHJlZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnBhcmVudFRyZWVTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHBhcmVudCB0cmVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKCAocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzUG9zdCA9IHt9O1xuICAgICAgICAgICAgcmVzUG9zdFsnYXV0aG9yJ10gPSBwb3N0LmF1dGhvcjtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2NyZWF0ZWQnXSA9IHBvc3QuY3JlYXRlZDtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2ZvcnVtJ10gPSBwb3N0LmZvcnVtO1xuICAgICAgICAgICAgcmVzUG9zdFsnaWQnXSA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcmVzUG9zdFsnbWVzc2FnZSddID0gcG9zdC5tZXNzYWdlO1xuICAgICAgICAgICAgcmVzUG9zdFsncGFyZW50J10gPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXNQb3N0Wyd0aHJlYWQnXSA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc1Bvc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHJlYWQgZ2V0UG9zdHMnLHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRocmVhZCAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLnVwZGF0ZVRocmVhZCh0aHJlYWQuc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09ICdjb25mbGljdCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnYWxyZWFkeSBleGlzdGVkIGRhdGEnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZENvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcyB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNyZWF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5WydlbWFpbCddO1xuICAgICAgICBjb25zdCBuZXdVc2VyRGF0YSA9IFtcbiAgICAgICAgICAgIG5pY2tuYW1lLFxuICAgICAgICAgICAgcmVxLmJvZHlbJ2Z1bGxuYW1lJ10sXG4gICAgICAgICAgICByZXEuYm9keVsnYWJvdXQnXSxcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdVc2VyO1xuICAgICAgICAgICAgdHJ5IHtcblx0XHRcdFx0ZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuaWNrbmFtZSwgZW1haWwpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhpc3RpbmdVc2VyKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0sgT1IgRU1BSUwnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG5cblxuICAgIGdldFVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpXG4gICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldFVzZXInLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfSAgXG5cbiAgICBcbiAgICBhc3luYyB1cGRhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIFxuICAgICAgICAvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC60LDQutC40LUt0YLQviDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L3QtSDQv9GD0YHRgtGL0LVcblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiBcIlVzZXIgd2l0aCBzdWNoIG5pY2tuYW1lIG9yIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3JvdXRlcnMvVXNlclJvdXRlcy5qcyc7XG5pbXBvcnQgZm9ydW1Sb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL0ZvcnVtUm91dGVzLmpzJztcbmltcG9ydCB0aHJlYWRSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1RocmVhZFJvdXRlcy5qcyc7XG5pbXBvcnQgcG9zdFJvdXRlciBmcm9tICcuL3JvdXRlcnMvUG9zdFJvdXRlcy5qcyc7XG5pbXBvcnQgc2VydmljZVJvdXRlciBmcm9tICcuL3JvdXRlcnMvU2VydmljZVJvdXRlcy5qcyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC51c2UoJy9hcGkvdXNlcicsIHVzZXJSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9mb3J1bScsIGZvcnVtUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvdGhyZWFkJywgdGhyZWFkUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvcG9zdCcsIHBvc3RSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9zZXJ2aWNlJywgc2VydmljZVJvdXRlcik7XG5hcHAuZ2V0KCcvJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbn0pXG5cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgRm9ydW1Nb2RlbCB7XG5cbiAgICBnZXRGb3J1bUJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3Rm9ydW0gKG5ld0ZvcnVtRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtcyAoc2x1ZywgdGl0bGUsIFwidXNlclwiKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdGb3J1bURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3J1bVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBuaWNrbmFtZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VBUkNIJyxmb3J1bVNsdWcsIG5pY2tuYW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDEsXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQyKSlcbiAgICAgICAgICAgICAgICBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqYCwgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VGhyZWFkcyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgdGhyZWFkcyA9IHRocmVhZHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFBvc3RzKHNsdWcsIGNudCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoYFVQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqYCwgW3NsdWcsY250XSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMgKHNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGxldCBxdWVyeTtcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxIEFORCBVLm5pY2tuYW1lPiQyXG4gICAgICAgICAgICBgLFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMSBBTkQgVS5uaWNrbmFtZTwkMlxuICAgICAgICAgICAgYCwgW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxYCwgW3NsdWddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYCQxOnJhdyBcbiAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgcXVlcnkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdVLm5pY2tuYW1lIERFU0MnIDogJ1Uubmlja25hbWUgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcblxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtTW9kZWw7ICIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuY29uc3QgUFMgPSByZXF1aXJlKCdwZy1wcm9taXNlJykuUHJlcGFyZWRTdGF0ZW1lbnQ7XG5cbmNvbnN0IGdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCA9IG5ldyBQUygnZ2V0LXBvc3QnLCAnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMSBBTkQgdGhyZWFkPSQyJyk7XG5cbmNsYXNzIFBvc3RNb2RlbCB7XG4gICAgXG4gICAgY3JlYXRlTmV3UG9zdCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gcG9zdHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArICcgUkVUVVJOSU5HIConO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IChxdWVyeSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBQT1NUIE5PIEFVVEhPUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgdHJhbnNhY3RUZXN0IChxdWVyeSlcblxuICAgIGdldFBvc3RCeUlkQW5kVGhyZWFkSWQgKGlkLCB0aHJlYWRJZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50LCBbaWQsIHRocmVhZElkXSlcbiAgICB9XG5cbiAgICBnZXRQb3N0QnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgZ2V0SWRGb3JQb3N0ICgpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKFwiU0VMRUNUIG5leHR2YWwoJ3Bvc3RzX2lkX3NlcXVhbmNlJylcIik7IFxuICAgIH1cblxuICAgIHVwZGF0ZVBvc3QgKG1lc3NhZ2UsIGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIHBvc3RzIFNFVCBcImlzRWRpdGVkXCI9VFJVRSwgXCJtZXNzYWdlXCI9JDEgV0hFUkUgaWQ9JDIgUkVUVVJOSU5HIConLCBbbWVzc2FnZSxpZF0pO1xuICAgIH1cblxuICAgIGdldFBhdGhUb1Bvc3QgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMScsIFtpZF0pO1xuICAgIH1cblxuICAgIFxuICAgIGZsYXRTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgaWYgKCBxdWVyeVBhcmFtcy5zaW5jZSApIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDEgQU5EIGlkPCQyXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMSBBTkQgaWQ+JDJcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJlZVNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BhdGh0b3Bvc3QgREVTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdCA+IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdCA8IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIFxuICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwYXJlbnRUcmVlU29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGlkLnBhcmVudF9pZCBERVNDLCBwYXRodG9wb3N0IEFTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICBjb25zdCBpZFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdpZCBERVNDJyA6ICdpZCBBU0MnXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdFsxXSA+IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3RbMV0gPCAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApOyAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBTZXJ2aWNlTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNvdW50QWxsKCkge1xuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gZm9ydW1zJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHBvc3RzJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdGhyZWFkcycpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB1c2VycycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IHBhcnNlSW50KGZvcnVtLmNvdW50KSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwYXJzZUludChwb3N0LmNvdW50KSxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHBhcnNlSW50KHRocmVhZC5jb3VudCksXG4gICAgICAgICAgICBcInVzZXJcIjogcGFyc2VJbnQodXNlci5jb3VudClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIGNsZWFyQWxsKCkge1xuXG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgZm9ydW1zIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHBvc3RzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdGhyZWFkcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB1c2VycyBDQVNDQURFJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogZm9ydW0sXG4gICAgICAgICAgICBcInBvc3RcIjogcG9zdCxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHRocmVhZCxcbiAgICAgICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFRocmVhZE1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjcmVhdGVOZXdUaHJlYWQgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgYyA9ICcoJzsgXG4gICAgICAgIGxldCB2ID0gJygnO1xuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyB0aHJlYWRzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyBgIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBpZD0kMScsIFtpZF0pXG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIChmb3J1bVNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSdcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPj0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI8PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzJywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlTbHVnIChzbHVnLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeUlkIChpZCwgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIGlkPSQxIFJFVFVSTklORyAqJywgW2lkLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGhyZWFkIChzbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd0aHJlYWRzJ30sbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwic2x1Z1xcXCIgPSBcXCdcIiArICBzbHVnICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZE1vZGVsO1xuIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmNvbnN0IFBTID0gcmVxdWlyZSgncGctcHJvbWlzZScpLlByZXBhcmVkU3RhdGVtZW50O1xuXG5cbmNvbnN0IGdldE5pY2tuYW1lU3RhdGVtZW50ID0gbmV3IFBTKCdnZXQtbmljaycsICdTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScpO1xuXG5cbmNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgLy8gb25lT3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90YPQuyDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnLCBbbmlja25hbWVdKVxuICAgIH1cblxuICAgIGdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCAobmljaywgbWFpbCkgeyAvLyDQvNC+0LbQvdC+INC60LDQui3RgtC+INC90LUg0L/RgNC+0YXQvtC00LjRgtGM0YHRjyDQv9C+INCy0YHQtdC5INGC0LDQsdC70LjRhtC1LCDQsCDQvtGB0YLQsNC90LDQstC70LjQstCw0YLRgdGPINC60LDQuiDRgtC+0LvRjNC60L4g0L3QsNGI0LvQuCAxINCy0YXQvtC20LTQtdC90LjQtVxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IG5pY2sgfHwgJyc7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gbWFpbCB8fCAnJztcbiAgICAgICAgLy8gbWFueU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyINC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEgT1IgZW1haWw9JDInLCBbbmlja25hbWUsIGVtYWlsXSk7IFxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyB1c2VycyAobmlja25hbWUsIGZ1bGxuYW1lLCBhYm91dCwgZW1haWwpIFZBTFVFUyAoJDEsICQyLCAkMyAsJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdVc2VyRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlFVRVJZXCIsIHF1ZXJ5KTtcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAvLyB9XG5cblxuICAgIGFzeW5jIHVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucywga2V5VmFsdWVzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3VzZXJzJ30sIG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcIm5pY2tuYW1lXFxcIiA9IFxcJ1wiICsgIG5pY2tuYW1lICsgXCJcXCcgUkVUVVJOSU5HICpcIjsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0LvRgdC70Y/QvdC+0LUsINC90L4g0Y3RgtC+INC90YPQttC90L4g0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINC40LzRjyDQuNC80LXQvdC90L4g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC40YHQsNC90L5cbiAgICAvKlxuICAgINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDRgdC70Y/QvdC+0LUsINC90L4g0Y3RgtC+INC90YPQttC90L4g0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMXG4gICAg0LjQvNGPINGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQv9C40YHQsNC90L4g0LIg0YLQsNCx0LvQuNGG0LUgdXNlcnMgKNC90LUg0LIg0LLQtdGA0YXQvdC10Lwg0LjQu9C4INC90LjQttC90LXQvCDRgNC10LPQuNGB0YLRgNCw0YUpXG4gICAgKi9cbiAgICBnZXRVc2VyTmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShnZXROaWNrbmFtZVN0YXRlbWVudCwgW25pY2tuYW1lXSlcbiAgICB9XG5cblxufSBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVm90ZU1vZGVsIHtcblxuICAgIGFzeW5jIHZvdGUgKHZvaWNlLCB0aHJlYWRJZCwgbmlja25hbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gdm90ZXMgKHZvaWNlLCB0aHJlYWQsIG5pY2tuYW1lKSBWQUxVRVMgKCQxLCAkMiwgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPScke25pY2tuYW1lfScpKSBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZVRocmVhZE5pY2tuYW1lIERPIFxuICAgICAgICAgICAgVVBEQVRFIFNFVCB2b2ljZT0kMSBXSEVSRSB2b3Rlcy52b2ljZTw+JDEgUkVUVVJOSU5HICosICh4bWF4Ojp0ZXh0OjppbnQgPiAwKSBhcyBleGlzdGVkYCwgW3ZvaWNlLCB0aHJlYWRJZF0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFVTRVInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVm90ZU1vZGVsOyBcbiIsImV4cG9ydCBjb25zdCBwZ3AgPSByZXF1aXJlKCdwZy1wcm9taXNlJykoKTtcblxuY29uc3QgZGJPcHRpb25zID0ge1xuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IDU0MzIsXG4gICAgZGF0YWJhc2U6ICdmb3J1bScsXG4gICAgdXNlcjogJ2VybWFrZm9ydW0nLFxuICAgIHBhc3N3b3JkOiAnMTIzJ1xufVxuXG5jb25zdCBkYkluc3RhbmNlID0gcGdwKGRiT3B0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBkYkluc3RhbmNlO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBGb3J1bUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzJztcblxuY29uc3QgZm9ydW1Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5mb3J1bVJvdXRlci5wb3N0KCcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZUZvcnVtKTtcbmZvcnVtUm91dGVyLnBvc3QoJy86c2x1Zy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlVGhyZWFkSW5Gb3J1bSk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy9kZXRhaWxzJywgRm9ydW1Db250cm9sbGVyLmdldERldGFpbHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdGhyZWFkcycsIEZvcnVtQ29udHJvbGxlci5nZXRUaHJlYWRzKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL3VzZXJzJywgRm9ydW1Db250cm9sbGVyLmdldFVzZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ydW1Sb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBQb3N0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHBvc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5wb3N0Um91dGVyLmdldCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5wb3N0Um91dGVyLnBvc3QoJy86aWQvZGV0YWlscycsIFBvc3RDb250cm9sbGVyLnVwZGF0ZURldGFpbHMpO1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Um91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBzZXJ2aWNlUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuc2VydmljZVJvdXRlci5nZXQoJy9zdGF0dXMnLCBTZXJ2aWNlQ29udHJvbGxlci5jb3VudEFsbCk7XG5zZXJ2aWNlUm91dGVyLnBvc3QoJy9jbGVhcicsIFNlcnZpY2VDb250cm9sbGVyLmNsZWFyQWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFRocmVhZENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVGhyZWFkQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHRocmVhZFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvY3JlYXRlJywgVGhyZWFkQ29udHJvbGxlci5jcmVhdGVQb3N0KTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvdm90ZScsIFRocmVhZENvbnRyb2xsZXIudm90ZUZvclRocmVhZCk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvcG9zdHMnLCBUaHJlYWRDb250cm9sbGVyLmdldFBvc3RzKTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIudXBkYXRlVGhyZWFkKTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aHJlYWRSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvY3JlYXRlJywgVXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcik7XG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xudXNlclJvdXRlci5nZXQoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLmdldFVzZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyOyIsImV4cG9ydCBjb25zdCBoYXJ2ZXN0Q29sdW1ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5cyA9IFtdXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhkYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5leHBvcnQgY29uc3QgaGFydmVzdEtleVZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5VmFsdWVzID0ge31cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleVZhbHVlc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlWYWx1ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBpZFRvSW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtpXS5pZCA9IHBhcnNlSW50KGRhdGFbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbFN0ciA9IGZ1bmN0aW9uIChhcnJheU9mUG9zdE9iamVjdHMpIHtcbiAgICAvLyBsZXQgcmVzdWx0UXVlcnkgPSBgV0lUSCBwb3N0X2F1dGhvciBBUyAoXG4gICAgLy8gICAgIFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSR7bmlja25hbWV9XG4gICAgLy8gICAgKSBgO1xuICAgIGxldCByZXN1bHRRdWVyeSA9IGBgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlc0luQXJyYXkgPSBoYXJ2ZXN0VmFsdWVzKGFycmF5T2ZQb3N0T2JqZWN0c1tpXSk7XG4gICAgICAgIGxldCB2YWwgPSBgIChgO1xuICAgICAgICB2YWwgKz0gYChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0ke2AnYCArIHZhbHVlc0luQXJyYXlbMF0gKyBgJ2B9KSwgYDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB2YWx1ZXNJbkFycmF5Lmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGlmICggaiAhPT0gMikge1xuICAgICAgICAgICAgICAgIHZhbCArPSBcIidcIiArIHZhbHVlc0luQXJyYXlbal0gKyBcIidcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IHZhbHVlc0luQXJyYXlbal07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqICE9PSB2YWx1ZXNJbkFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFF1ZXJ5ICs9IHZhbDtcbiAgICAgICAgaWYgKGkgPT09IGFycmF5T2ZQb3N0T2JqZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCksIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFF1ZXJ5O1xufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoU3RyaW5nID0gZnVuY3Rpb24gKHBhdGhBcnJheSkge1xuICAgIGxldCByZXN1bHQgPSBge2A7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHBhdGhBcnJheVtpXTtcbiAgICAgICAgaWYgKGkgIT09IHBhdGhBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYCwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gYH1gO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBmb3J1bVNlcmlhbGl6ZXIgPSBmdW5jdGlvbiAoZm9ydW1zQXJyYXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIj8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIiMjI1wiKVxuICAgIGZvciAobGV0IGZvcnVtIG9mIGZvcnVtc0FycmF5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIyMjXCIrZm9ydW0uYWJvdXQpO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkRm9ydW0gPSB7XG4gICAgICAgICAgICBcImFib3V0XCI6IGZvcnVtLmFib3V0LFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBmb3J1bS5lbWFpbCxcbiAgICAgICAgICAgIFwiZnVsbG5hbWVcIjogZm9ydW0uZnVsbG5hbWUsXG4gICAgICAgICAgICBcIm5pY2tuYW1lXCI6IGZvcnVtLm5pY2tuYW1lXG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goc2VyaWFsaXplZEZvcnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnLXByb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=