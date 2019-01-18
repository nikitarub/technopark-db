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
    var postsValues, forumUserPairValues, creationDate, newPosts, author, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, parentPost, postId, path, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post, pairColumns, stringPairValues, pairQuery;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postsValues = [];
            forumUserPairValues = [];
            creationDate = new Date().toUTCString();
            newPosts = req.body;

            if (newPosts.length) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(201).send([]));

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

            return _context.abrupt("return", res.status(409).json({
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
            return _context.abrupt("return", res.status(500).json({
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
              _context.next = 112;
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
            pairQuery = "INSERT INTO forumusers " + pairColumns + " VALUES " + stringPairValues + " ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *";
            console.log(pairQuery); // await ForumModel.createForumUserPair(threadData.forum, author);

            _context.prev = 96;
            _context.next = 99;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(threadData.forum, newPosts.length);

          case 99:
            _context.next = 101;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPairByQuery(pairQuery);

          case 101:
            _context.next = 109;
            break;

          case 103:
            _context.prev = 103;
            _context.t3 = _context["catch"](96);
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(_context.t3);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 109:
            return _context.abrupt("return", res.status(201).json(result));

          case 112:
            return _context.abrupt("return", res.status(404).json({
              message: 'cant find author'
            }));

          case 113:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 53, 57, 65], [15, 26], [58,, 60, 64], [76, 80, 84, 92], [85,, 87, 91], [96, 103]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJmb3J1bVVzZXJQYWlyVmFsdWVzIiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwibmV3UG9zdHMiLCJib2R5IiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImF1dGhvciIsInBvc3QiLCJwYXJlbnQiLCJQb3N0TW9kZWwiLCJnZXRQb3N0QnlJZEFuZFRocmVhZElkIiwiaWQiLCJwYXJlbnRQb3N0IiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZvcnVtIiwiZ2V0SWRGb3JQb3N0IiwicG9zdElkIiwiY3JlYXRlZCIsInRocmVhZCIsInBhcnNlSW50IiwibmV4dHZhbCIsImNvbnN0cnVjdFBhdGhUb1Bvc3QiLCJwYXRoIiwicGF0aHRvcG9zdCIsInJlc3VsdCIsImNvbHVtbnMiLCJ2YWx1ZXNJblN0cmluZ1F1ZXJ5IiwidmFsU3RyIiwicXVlcnkiLCJjcmVhdGVOZXdQb3N0c0J5UXVlcnkiLCJhZGRlZFBvc3RzIiwicGFpckNvbHVtbnMiLCJzdHJpbmdQYWlyVmFsdWVzIiwiY3JlYXRlUGFpcmVRdWVyeSIsInBhaXJRdWVyeSIsIkZvcnVtTW9kZWwiLCJpbmNyZW1lbnRQb3N0cyIsImNyZWF0ZUZvcnVtVXNlclBhaXJCeVF1ZXJ5IiwiaWRBcnJheSIsImlkU3RyaW5nIiwiY29uc3RydWN0UGF0aFN0cmluZyIsImdldFBhdGhUb1Bvc3QiLCJwYXRoU3RyaW5nIiwiRm9ydW1Db250cm9sbGVyIiwidXNlciIsInNsdWciLCJ0aXRsZSIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsIm5ld0ZvcnVtRGF0YSIsIm5pY2tuYW1lIiwiY3JlYXRlTmV3Rm9ydW0iLCJnZXRGb3J1bUJ5U2x1ZyIsImV4c2lzdGluZ0ZvcnVtIiwicGFyYW1zIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZm9ydW1TbHVnIiwiZ2V0Rm9ydW1TbHVnIiwia2V5VmFsdWVzIiwiaGFydmVzdEtleVZhbHVlcyIsImhhcnZlc3RDb2x1bW5zIiwiaSIsInZhbHVlcyIsImhhcnZlc3RWYWx1ZXMiLCJUaHJlYWRNb2RlbCIsImNyZWF0ZU5ld1RocmVhZCIsImNyZWF0ZUZvcnVtVXNlclBhaXIiLCJpbmNyZW1lbnRUaHJlYWRzIiwiZ2V0VGhyZWFkQnlTbHVnIiwiZXhzaXN0aW5nVGhyZWFkIiwicXVlcnlQYXJhbXMiLCJnZXRUaHJlYWRzQnlGb3J1bVNsdWciLCJpZFRvSW50IiwibWVzYWdlIiwiZGVzYyIsImdldFVzZXJzIiwiZm9ydW1TZXJpYWxpemVyIiwiUG9zdENvbnRyb2xsZXIiLCJnZXRQb3N0QnlJZCIsInBvc3REYXRhIiwicmVsYXRlZFRvIiwicmVsYXRlZEVudGl0aWVzIiwic3BsaXQiLCJyZWxhdGVkRW50aXR5IiwiZ2V0VXNlckJ5Tmlja25hbWUiLCJlbnRpdHkiLCJnZXRUaHJlYWRCeUlkIiwibmV3RGF0YSIsIk9iamVjdCIsInVwZGF0ZVBvc3QiLCJTZXJ2aWNlQ29udHJvbGxlciIsIlNlcnZpY2VNb2RlbCIsImNvdW50QWxsIiwiY2xlYXJBbGwiLCJlbmQiLCJUaHJlYWRDb250cm9sbGVyIiwic2x1Z09ySWQiLCJ0ZXN0Iiwidm9pY2VWYWx1ZSIsInZvaWNlIiwiVm90ZU1vZGVsIiwidm90ZSIsInZvdGVkRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJpc0lkIiwic29ydCIsImZsYXRTb3J0IiwidHJlZVNvcnQiLCJwYXJlbnRUcmVlU29ydCIsIm1hcCIsInJlc1Bvc3QiLCJ1cGRhdGVUaHJlYWQiLCJVc2VyQ29udHJvbGxlciIsImVtYWlsIiwibmV3VXNlckRhdGEiLCJjcmVhdGVOZXdVc2VyIiwiZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIiwiZXhpc3RpbmdVc2VyIiwidXBkYXRlVXNlciIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJ1c2VyUm91dGVyIiwiZm9ydW1Sb3V0ZXIiLCJ0aHJlYWRSb3V0ZXIiLCJwb3N0Um91dGVyIiwic2VydmljZVJvdXRlciIsImdldCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImRiSW5zdGFuY2UiLCJvbmVPck5vbmUiLCJjbnQiLCJzaW5jZSIsInBncCIsImFzIiwiZm9ybWF0IiwibWFueU9yTm9uZSIsInRvU3RyaW5nIiwibGltaXQiLCJQUyIsInJlcXVpcmUiLCJQcmVwYXJlZFN0YXRlbWVudCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCIsImMiLCJ2Iiwib25lIiwidGhyZWFkSWQiLCJwYXRoU29ydFJ1bGUiLCJpZFNvcnRSdWxlIiwiY291bnQiLCJub25lIiwiaGVscGVycyIsInVwZGF0ZSIsInRhYmxlIiwiZW1wdHlVcGRhdGUiLCJnZXROaWNrbmFtZVN0YXRlbWVudCIsIm5pY2siLCJtYWlsIiwiZGJPcHRpb25zIiwiaG9zdCIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJSb3V0ZXIiLCJjcmVhdGVGb3J1bSIsImNyZWF0ZVRocmVhZEluRm9ydW0iLCJnZXREZXRhaWxzIiwiZ2V0VGhyZWFkcyIsInVwZGF0ZURldGFpbHMiLCJjcmVhdGVQb3N0Iiwidm90ZUZvclRocmVhZCIsImdldFBvc3RzIiwiY3JlYXRlVXNlciIsImdldFVzZXIiLCJrZXlzIiwia2V5IiwidmFsdWUiLCJhcnJheU9mUG9zdE9iamVjdHMiLCJyZXN1bHRRdWVyeSIsInZhbHVlc0luQXJyYXkiLCJ2YWwiLCJqIiwicGF0aEFycmF5IiwiZm9ydW1zQXJyYXkiLCJzZXJpYWxpemVkRm9ydW0iLCJhYm91dCIsImZ1bGxuYW1lIiwicGFpcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxpQkFBZ0JDLEdBQWhCLEVBQW9CQyxHQUFwQixFQUF5QkMsVUFBekI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMsdUJBRHFCLEdBQ1AsRUFETztBQUVyQkMsK0JBRnFCLEdBRUMsRUFGRDtBQUdyQkMsd0JBSHFCLEdBR04sSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBSE07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Q29DO0FBSkUsT0FBeEI7QUFNQTFCLFlBQU0sQ0FBQ1gsSUFBUCxDQUFZa0wsZUFBWjtBQUNIO0FBYmlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2xELFNBQU92SyxNQUFQO0FBQ0gsQ0FmTTtBQWlCQSxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQVVpSyxLQUFWLEVBQWlCO0FBQzdDLE1BQUlULFdBQVcsS0FBZjs7QUFDQSxPQUFLLElBQUl6SCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa0ksS0FBSyxDQUFDbk0sTUFBMUIsRUFBa0NpRSxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DeUgsZUFBVywyREFBb0RTLEtBQUssQ0FBQ2xJLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBcEQsa0JBQXVFa0ksS0FBSyxDQUFDbEksQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUF2RSxPQUFYOztBQUNBLFFBQUlBLENBQUMsS0FBS2tJLEtBQUssQ0FBQ25NLE1BQU4sR0FBZSxDQUF6QixFQUE0QjtBQUN4QjBMLGlCQUFXLFFBQVg7QUFDSDtBQUNKOztBQUNELFNBQU9BLFdBQVA7QUFDSCxDQVRNLEM7Ozs7Ozs7Ozs7O0FDcEdQLDJDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mb3J1bS9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHsgdmFsU3RyLCBjb25zdHJ1Y3RQYXRoU3RyaW5nLCBjcmVhdGVQYWlyZVF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0c0xvb3AgPSBhc3luYyBmdW5jdGlvbiAocmVxLHJlcywgdGhyZWFkRGF0YSkge1xuICAgIGNvbnN0IHBvc3RzVmFsdWVzID0gW107XG4gICAgY29uc3QgZm9ydW1Vc2VyUGFpclZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcbiAgICBjb25zdCBuZXdQb3N0cyA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFuZXdQb3N0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRob3IgPSBuZXdQb3N0c1swXS5hdXRob3I7XG4gICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4gICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCINCyINGB0LjRgdGC0LXQvNC1IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ25vIHBhcmVudCBwb3N0cycgfSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyZW50UG9zdC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgUEFSRU5UUycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGO0LfQtdGA0LAg0LIg0YTQvtGA0YPQvCBcbiAgICAgICAgZm9ydW1Vc2VyUGFpclZhbHVlcy5wdXNoKFtwb3N0LmF1dGhvciwgdGhyZWFkRGF0YS5mb3J1bV0pO1xuICAgICAgICAvLyBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpO1xuXG5cbiAgICAgICAgLy8gY29uc3QgcGFpciA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBwb3N0LmF1dGhvcik7ICAgICAgICBcbiAgICAgICAgY29uc3QgcG9zdElkID0gYXdhaXQgUG9zdE1vZGVsLmdldElkRm9yUG9zdCgpO1xuICAgICAgICBwb3N0LmNyZWF0ZWQgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIHBvc3QudGhyZWFkID0gdGhyZWFkRGF0YS5pZDtcbiAgICAgICAgcG9zdC5mb3J1bSA9IHRocmVhZERhdGEuZm9ydW07XG4gICAgICAgIHBvc3QuaWQgPSBwYXJzZUludChwb3N0SWQubmV4dHZhbCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBhd2FpdCBjb25zdHJ1Y3RQYXRoVG9Qb3N0KHBvc3QpO1xuICAgICAgICBwb3N0LnBhdGh0b3Bvc3QgPSBwYXRoO1xuICAgICAgICBwb3N0c1ZhbHVlcy5wdXNoKHBvc3QpO1xuICAgIH1cblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQv9C+0YHRglxuICAgIGNvbnN0IHJlc3VsdCA9IFtdOyBcbiAgICBjb25zdCBjb2x1bW5zID0gYChhdXRob3IsIFwibWVzc2FnZVwiLCBwYXJlbnQsIFwiY3JlYXRlZFwiLCB0aHJlYWQsIGZvcnVtLCBpZCwgcGF0aHRvcG9zdClgXG4gICAgY29uc3QgdmFsdWVzSW5TdHJpbmdRdWVyeSA9IHZhbFN0cihwb3N0c1ZhbHVlcyk7XG4gICAgY29uc3QgcXVlcnkgPSBgSU5TRVJUIElOVE8gcG9zdHMgYCArIGNvbHVtbnMgKyBgIFZBTFVFUyBgICsgdmFsdWVzSW5TdHJpbmdRdWVyeSArIGAgUkVUVVJOSU5HICpgO1xuICAgIGNvbnN0IGFkZGVkUG9zdHMgPSBhd2FpdCBQb3N0TW9kZWwuY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5KHF1ZXJ5KTtcbiAgICBpZiAoYWRkZWRQb3N0cykge1xuICAgICAgICBmb3IgKGxldCBwb3N0IG9mIGFkZGVkUG9zdHMpIHtcbiAgICAgICAgICAgIHBvc3QuaWQgPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHBvc3QudGhyZWFkID0gcGFyc2VJbnQocG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwb3N0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcGFpckNvbHVtbnMgPSBgKHVzZXJuaWNrbmFtZSwgZm9ydW1zbHVnKWA7XG4gICAgICAgIGNvbnN0IHN0cmluZ1BhaXJWYWx1ZXMgPSBjcmVhdGVQYWlyZVF1ZXJ5KGZvcnVtVXNlclBhaXJWYWx1ZXMpO1xuICAgICAgICBjb25zdCBwYWlyUXVlcnkgPSBgSU5TRVJUIElOVE8gZm9ydW11c2VycyBgICsgcGFpckNvbHVtbnMgKyBgIFZBTFVFUyBgICsgc3RyaW5nUGFpclZhbHVlcyArIGAgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVfZm9ydW11c2VyX3BhaXIgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhaXJRdWVyeSk7XG4gICAgICAgIC8vIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBhdXRob3IpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRQb3N0cyh0aHJlYWREYXRhLmZvcnVtLCBuZXdQb3N0cy5sZW5ndGgpO1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyQnlRdWVyeShwYWlyUXVlcnkpO1xuXG4gICAgICAgICAgICAvLyBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFBhdGhUb1Bvc3QgPSBhc3luYyBmdW5jdGlvbiAocG9zdCkge1xuICAgIGNvbnN0IGlkQXJyYXkgPSBbXTtcbiAgICBpZEFycmF5LnB1c2gocG9zdC5pZCk7XG4gICAgY29uc3QgaWRTdHJpbmcgPSBjb25zdHJ1Y3RQYXRoU3RyaW5nKGlkQXJyYXkpO1xuICAgIGxldCBwYXRodG9wb3N0O1xuICAgIGlmICghcG9zdC5wYXJlbnQpIHtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBpZFN0cmluZztcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UGF0aFRvUG9zdChwb3N0LnBhcmVudCk7XG4gICAgICAgIHBhdGgucGF0aHRvcG9zdC5wdXNoKHBvc3QuaWQpO1xuICAgICAgICBjb25zdCBwYXRoU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhwYXRoLnBhdGh0b3Bvc3QpO1xuICAgICAgICBwYXRodG9wb3N0ID0gcG9zdC5wYXRodG9wb3N0IHx8IHBhdGhTdHJpbmcgfHwgaWRTdHJpbmdcbiAgICB9XG4gICAgcmV0dXJuIHBhdGh0b3Bvc3Q7XG59IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQsIGZvcnVtU2VyaWFsaXplciB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5cblxuXG5jbGFzcyBGb3J1bUNvbnRyb2xsZXIge1xuXG5cdGFzeW5jIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdFx0XHRzbHVnLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR1c2VyLm5pY2tuYW1lXG5cdFx0XVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKTtcblxuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0Z2V0RGV0YWlscyAocmVxLCByZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKVxuXHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdmb3J1bSBnZXREZXRhaWxzJyxkYXRhKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgZm9ydW0nIH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRhc3luYyBjcmVhdGVUaHJlYWRJbkZvcnVtIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cdFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGxldCBmb3J1bTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cblxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvci5uaWNrbmFtZTtcblx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bS5zbHVnO1xuXHRcdFxuXHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bS5zbHVnLCBhdXRob3Iubmlja25hbWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW0uc2x1Zyk7XG5cdFx0XHRcdHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBleHNpc3RpbmdUaHJlYWQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSk7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZC5pZCA9IHBhcnNlSW50KGV4c2lzdGluZ1RocmVhZC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdUaHJlYWQpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcgISEhIScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gXG5cdFxuXHRhc3luYyBnZXRUaHJlYWRzIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdC8vIEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpXG5cdFx0Ly8gXHQudGhlbiggZGF0YSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChkYXRhKXtcblx0XHQvLyBcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRzQnlGb3J1bVNsdWcoc2x1ZywgcXVlcnlQYXJhbXMpXG5cdFx0Ly8gXHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0XHQvLyBcdFx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHQvLyBcdFx0XHRcdFx0XHRkYXRhID0gaWRUb0ludChkYXRhKTtcblx0XHQvLyBcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZm9ydW0gZ2V0VGhyZWFkcycsZGF0YSk7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuXHRcdC8vIFx0XHRcdFx0XHR9XG5cdFx0Ly8gXHRcdFx0XHR9KVxuXHRcdC8vIFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0Ly8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdC8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQURTIE9GIEZPUlVNJyk7XG5cdFx0Ly8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHQvLyBcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdC8vIFx0XHRcdFx0fSk7XHRcblx0XHQvLyBcdFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0pXG5cdFx0Ly8gXHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdC8vIFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0Ly8gXHR9KTtcdFxuXG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZHNCeUZvcnVtU2x1ZyhzbHVnLCBxdWVyeVBhcmFtcyk7XG5cdFx0cmVzdWx0ID0gaWRUb0ludChyZXN1bHQpO1xuXHRcdGlmICghcmVzdWx0IHx8ICFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgZm9ydW0nIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG5cblx0fVxuXG5cdGFzeW5jIGdldFVzZXJzIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSc7XG5cdFx0Ly8gbGV0IGZvcnVtO1xuXHRcdC8vIHRyeSB7XG5cdFx0Ly8gXHRmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0Ly8gfSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdC8vIFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdC8vIH1cblxuXHRcdC8vIGlmICghZm9ydW0pIHtcblx0XHQvLyBcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHQvLyB9IFxuXG5cdFx0Ly8gdHJ5IHtcblx0XHRsZXQgcmVzdWx0ID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRVc2VycyhzbHVnLCBxdWVyeVBhcmFtcyk7XG5cblx0XHRpZiAoIXJlc3VsdCB8fCAhcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1ZyhzbHVnKTtcbiAgICAgICAgICAgIGlmICghZm9ydW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdC8vIH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVJTIElOIEZPUlVNJyk7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0Ly8gfVxuXHRcdHJlc3VsdCA9IGZvcnVtU2VyaWFsaXplcihyZXN1bHQpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdmb3J1bSBnZXRVc2VycycscmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcblxuXHR9IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIGFzeW5jIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGVkVG8gPSByZXEucXVlcnlbJ3JlbGF0ZWQnXTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgIHBvc3REYXRhLnBhcmVudCA9IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCk7XG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb3N0IGdldERldGFpbHMnLHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgbmV3RGF0YS5tZXNzYWdlID09PSAnJykge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHBvc3REYXRhLm1lc3NhZ2UgIT09IG5ld0RhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwudXBkYXRlUG9zdChuZXdEYXRhLm1lc3NhZ2UsIHBvc3RJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORCBQT1NUJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdjb25mbGljdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBwYXJzZUludChyZXN1bHQudGhyZWFkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFyZW50ID8gcGFyc2VJbnQocmVzdWx0LnBhcmVudCkgOiByZXN1bHQucGFyZW50OyAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RDb250cm9sbGVyOyIsImltcG9ydCBTZXJ2aWNlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1NlcnZpY2VNb2RlbC5qcyc7XG5cbmNsYXNzIFNlcnZpY2VDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNvdW50QWxsIChyZXEsIHJlcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jb3VudEFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlcnZpY2UgY291bnRBbGwnLHJlc3VsdClcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjbGVhckFsbCAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyOyIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgVm90ZU1vZGVsIGZyb20gJy4uL21vZGVscy9Wb3RlTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0c0xvb3AgfSBmcm9tICcuL0NvbnRyb2xsZXJVdGlscy5qcyc7XG5cbmNsYXNzIFRocmVhZENvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlUG9zdCAocmVxLCByZXMpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGxldCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWQpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIHZvdGVGb3JUaHJlYWQgKHJlcSAscmVzKSB7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3Qgdm9pY2VWYWx1ZSA9IHJlcS5ib2R5LnZvaWNlO1xuXG4gICAgICAgIGxldCBhdXRob3IgPSByZXEuYm9keS5uaWNrbmFtZTtcblxuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBzbHVnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2b3RlZERhdGEgPSBhd2FpdCBWb3RlTW9kZWwudm90ZSh2b2ljZVZhbHVlLCB0aHJlYWQuaWQsIGF1dGhvcik7XG5cbiAgICAgICAgaWYgKHZvdGVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZvdGVkRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgdm90ZWREYXRhLnZvaWNlID0gdm90ZWREYXRhLnZvaWNlID09PSAxID8gdm90ZWREYXRhLnZvaWNlICsgMSA6IHZvdGVkRGF0YS52b2ljZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmluY3JlbWVudFZvdGVzQnlJZCh0aHJlYWQuaWQsIHZvdGVkRGF0YS52b2ljZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGluY3JlbWVudGluZyB2b3RlcyBpbiB0aHJlYWQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSlcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHJlYWQgZ2V0RGV0YWlscycsIHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RocmVhZCBnZXREZXRhaWxzJywgdGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQb3N0cyhyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeVBhcmFtc1snZGVzYyddID0gcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9PT0gJ3RydWUnO1xuICAgICAgICBxdWVyeVBhcmFtc1snc2luY2UnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydzaW5jZSddKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IGlzSWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgaXNJZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0lkID0gZmFsc2VcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdmbGF0JyB8fCAhcXVlcnlQYXJhbXMuc29ydCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLmZsYXRTb3J0KHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwudHJlZVNvcnQoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAncGFyZW50X3RyZWUnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwucGFyZW50VHJlZVNvcnQoc2x1Z09ySWQsIGlzSWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlYWQgPSBpc0lkID8gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpIDogYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcCggKHBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc1Bvc3QgPSB7fTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2F1dGhvciddID0gcG9zdC5hdXRob3I7XG4gICAgICAgICAgICByZXNQb3N0WydjcmVhdGVkJ10gPSBwb3N0LmNyZWF0ZWQ7XG4gICAgICAgICAgICByZXNQb3N0Wydmb3J1bSddID0gcG9zdC5mb3J1bTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2lkJ10gPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ21lc3NhZ2UnXSA9IHBvc3QubWVzc2FnZTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3BhcmVudCddID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzUG9zdFsndGhyZWFkJ10gPSBwYXJzZUludChwb3N0LnRocmVhZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNQb3N0O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUaHJlYWQgKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5vcmlnaW5hbFVybCwgcmVxLm1ldGhvZCk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC51cGRhdGVUaHJlYWQodGhyZWFkLnNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keVsnZW1haWwnXTtcbiAgICAgICAgY29uc3QgbmV3VXNlckRhdGEgPSBbXG4gICAgICAgICAgICBuaWNrbmFtZSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydmdWxsbmFtZSddLFxuICAgICAgICAgICAgcmVxLmJvZHlbJ2Fib3V0J10sXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV4aXN0aW5nVXNlcjtcbiAgICAgICAgICAgIHRyeSB7XG5cdFx0XHRcdGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmlja25hbWUsIGVtYWlsKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGV4aXN0aW5nVXNlcilcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLIE9SIEVNQUlMJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuXG5cbiAgICBnZXRVc2VyIChyZXEsIHJlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEub3JpZ2luYWxVcmwsIHJlcS5tZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKVxuICAgICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyJywgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0gIFxuXG4gICAgXG4gICAgYXN5bmMgdXBkYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLm9yaWdpbmFsVXJsLCByZXEubWV0aG9kKTtcblxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBcbiAgICAgICAgLy8g0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgbGV0IHVzZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcbiAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0YXQvtGC0Y8g0LHRiyDQutCw0LrQuNC1LdGC0L4g0LTQsNC90L3Ri9C1INCx0YvQu9C4INC90LUg0L/Rg9GB0YLRi9C1XG5cbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLnVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucyxrZXlWYWx1ZXMpXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogXCJVc2VyIHdpdGggc3VjaCBuaWNrbmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMnO1xuaW1wb3J0IGZvcnVtUm91dGVyIGZyb20gJy4vcm91dGVycy9Gb3J1bVJvdXRlcy5qcyc7XG5pbXBvcnQgdGhyZWFkUm91dGVyIGZyb20gJy4vcm91dGVycy9UaHJlYWRSb3V0ZXMuanMnO1xuaW1wb3J0IHBvc3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1Bvc3RSb3V0ZXMuanMnO1xuaW1wb3J0IHNlcnZpY2VSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuXG5hcHAudXNlKCcvYXBpL3VzZXInLCB1c2VyUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvZm9ydW0nLCBmb3J1bVJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3RocmVhZCcsIHRocmVhZFJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3Bvc3QnLCBwb3N0Um91dGVyKTtcbmFwcC51c2UoJy9hcGkvc2VydmljZScsIHNlcnZpY2VSb3V0ZXIpO1xuYXBwLmdldCgnLycsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59KVxuXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIEZvcnVtTW9kZWwge1xuXG4gICAgZ2V0Rm9ydW1CeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld0ZvcnVtIChuZXdGb3J1bURhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyBmb3J1bXMgKHNsdWcsIHRpdGxlLCBcInVzZXJcIikgVkFMVUVTICgkMSwgJDIsICQzKSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3Rm9ydW1EYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ydW1TbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIHNsdWcgRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtU2x1Zywgbmlja25hbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NFQVJDSCcsZm9ydW1TbHVnLCBuaWNrbmFtZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoYElOU0VSVCBJTlRPIGZvcnVtdXNlcnMgKGZvcnVtc2x1ZywgdXNlcm5pY2tuYW1lKSBWQUxVRVMgKCQxLFxuICAgICAgICAgICAgICAgIChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMikpXG4gICAgICAgICAgICAgICAgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVfZm9ydW11c2VyX3BhaXIgRE8gTk9USElORyBSRVRVUk5JTkcgKmAsIFtmb3J1bVNsdWcsbmlja25hbWVdKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXJCeVF1ZXJ5KHF1ZXJ5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTRUFSQ0gnLGZvcnVtU2x1Zywgbmlja25hbWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFRocmVhZHMoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBmb3J1bXMgU0VUIHRocmVhZHMgPSB0aHJlYWRzICsgMSBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWddKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRQb3N0cyhzbHVnLCBjbnQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGBVUERBVEUgZm9ydW1zIFNFVCBwb3N0cyA9IHBvc3RzICsgJDIgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKmAsIFtzbHVnLGNudF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFVzZXJzIChzbHVnLCBxdWVyeVBhcmFtcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2x1ZyA9IGAoU0VMRUNUIHNsdWcgRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0nJHtzbHVnfScpYFxuICAgICAgICAgICAgbGV0IHF1ZXJ5O1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMTpyYXcgQU5EIFUubmlja25hbWU+JDJcbiAgICAgICAgICAgICAgICBgLFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxOnJhdyBBTkQgVS5uaWNrbmFtZTwkMlxuICAgICAgICAgICAgICAgIGAsIFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxOnJhd2AsIFtzbHVnXSk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGAkMTpyYXcgXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1Uubmlja25hbWUgREVTQycgOiAnVS5uaWNrbmFtZSBBU0MnKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gZ2V0VXNlcnMnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtTW9kZWw7ICIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuY29uc3QgUFMgPSByZXF1aXJlKCdwZy1wcm9taXNlJykuUHJlcGFyZWRTdGF0ZW1lbnQ7XG5cbmNvbnN0IGdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCA9IG5ldyBQUygnZ2V0LXBvc3QnLCAnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMSBBTkQgdGhyZWFkPSQyJyk7XG5cbmNsYXNzIFBvc3RNb2RlbCB7XG4gICAgXG4gICAgY3JlYXRlTmV3UG9zdCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gcG9zdHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArICcgUkVUVVJOSU5HIConO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IChxdWVyeSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBQT1NUIE5PIEFVVEhPUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgdHJhbnNhY3RUZXN0IChxdWVyeSlcblxuICAgIGdldFBvc3RCeUlkQW5kVGhyZWFkSWQgKGlkLCB0aHJlYWRJZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50LCBbaWQsIHRocmVhZElkXSlcbiAgICB9XG5cbiAgICBnZXRQb3N0QnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgZ2V0SWRGb3JQb3N0ICgpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKFwiU0VMRUNUIG5leHR2YWwoJ3Bvc3RzX2lkX3NlcXVhbmNlJylcIik7IFxuICAgIH1cblxuICAgIHVwZGF0ZVBvc3QgKG1lc3NhZ2UsIGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIHBvc3RzIFNFVCBcImlzRWRpdGVkXCI9VFJVRSwgXCJtZXNzYWdlXCI9JDEgV0hFUkUgaWQ9JDIgUkVUVVJOSU5HIConLCBbbWVzc2FnZSxpZF0pO1xuICAgIH1cblxuICAgIGdldFBhdGhUb1Bvc3QgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMScsIFtpZF0pO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGZsYXRTb3J0IChzbHVnT3JJZCwgaXNJZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgdGhyZWFkSWQgPSBpc0lkID8gc2x1Z09ySWQgOiBgKFNFTEVDVCBpZCBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0nJHtzbHVnT3JJZH0nKWA7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aHJlYWRJZCk7XG5cbiAgICAgICAgICAgIGlmICggcXVlcnlQYXJhbXMuc2luY2UgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDE6cmF3IEFORCBpZDwkMlxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMTpyYXcgQU5EIGlkPiQyXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxOnJhd1xuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMTpyYXdcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGZsYXQgc29ydCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgdHJlZVNvcnQgKHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcykge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSWQgPyBzbHVnT3JJZCA6IGAoU0VMRUNUIGlkIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPScke3NsdWdPcklkfScpYDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVhZElkKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGF0aHRvcG9zdCBERVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxOnJhdyBBTkQgcGF0aHRvcG9zdCA+IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTsgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDE6cmF3IEFORCBwYXRodG9wb3N0IDwgKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMTpyYXcgXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHRyZWUgc29ydCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcGFyZW50VHJlZVNvcnQgKHNsdWdPcklkLCBpc0lkLCBxdWVyeVBhcmFtcykge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSWQgPyBzbHVnT3JJZCA6IGAoU0VMRUNUIGlkIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPScke3NsdWdPcklkfScpYDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVhZElkKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGlkLnBhcmVudF9pZCBERVNDLCBwYXRodG9wb3N0IEFTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICAgICAgY29uc3QgaWRTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAnaWQgREVTQycgOiAnaWQgQVNDJ1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3RbMV0gPiAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxOnJhdyBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMTpyYXcgQU5EIHBhdGh0b3Bvc3RbMV0gPCAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxOnJhdyBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKTsgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMTpyYXdcbiAgICAgICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxOnJhdyBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiB0cmVlIHNvcnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBTZXJ2aWNlTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNvdW50QWxsKCkge1xuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gZm9ydW1zJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHBvc3RzJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdGhyZWFkcycpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB1c2VycycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IHBhcnNlSW50KGZvcnVtLmNvdW50KSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwYXJzZUludChwb3N0LmNvdW50KSxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHBhcnNlSW50KHRocmVhZC5jb3VudCksXG4gICAgICAgICAgICBcInVzZXJcIjogcGFyc2VJbnQodXNlci5jb3VudClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIGNsZWFyQWxsKCkge1xuXG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgZm9ydW1zIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHBvc3RzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdGhyZWFkcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB1c2VycyBDQVNDQURFJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogZm9ydW0sXG4gICAgICAgICAgICBcInBvc3RcIjogcG9zdCxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHRocmVhZCxcbiAgICAgICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFRocmVhZE1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjcmVhdGVOZXdUaHJlYWQgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgYyA9ICcoJzsgXG4gICAgICAgIGxldCB2ID0gJygnO1xuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyB0aHJlYWRzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyBgIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBpZD0kMScsIFtpZF0pXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIChmb3J1bVNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnXG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPj0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIjw9JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkMycsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5U2x1ZyAoc2x1Zywgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Zyx2b2ljZV0pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlJZCAoaWQsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBpZD0kMSBSRVRVUk5JTkcgKicsIFtpZCx2b2ljZV0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRocmVhZCAoc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndGhyZWFkcyd9LG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcInNsdWdcXFwiID0gXFwnXCIgKyAgc2x1ZyArIFwiXFwnIFJFVFVSTklORyAqXCI7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRNb2RlbDtcbiIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5jb25zdCBQUyA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKS5QcmVwYXJlZFN0YXRlbWVudDtcblxuXG5jb25zdCBnZXROaWNrbmFtZVN0YXRlbWVudCA9IG5ldyBQUygnZ2V0LW5pY2snLCAnU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnKTtcblxuXG5jbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIC8vIG9uZU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQvdGD0Lsg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJywgW25pY2tuYW1lXSlcbiAgICB9XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwgKG5pY2ssIG1haWwpIHsgLy8g0LzQvtC20L3QviDQutCw0Lot0YLQviDQvdC1INC/0YDQvtGF0L7QtNC40YLRjNGB0Y8g0L/QviDQstGB0LXQuSDRgtCw0LHQu9C40YbQtSwg0LAg0L7RgdGC0LDQvdCw0LLQu9C40LLQsNGC0YHRjyDQutCw0Log0YLQvtC70YzQutC+INC90LDRiNC70LggMSDQstGF0L7QttC00LXQvdC40LVcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBuaWNrIHx8ICcnO1xuICAgICAgICBjb25zdCBlbWFpbCA9IG1haWwgfHwgJyc7XG4gICAgICAgIC8vIG1hbnlPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQsiDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxIE9SIGVtYWlsPSQyJywgW25pY2tuYW1lLCBlbWFpbF0pOyBcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gdXNlcnMgKG5pY2tuYW1lLCBmdWxsbmFtZSwgYWJvdXQsIGVtYWlsKSBWQUxVRVMgKCQxLCAkMiwgJDMgLCQ0KSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3VXNlckRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDQu9GB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LjQvNGPINC40LzQtdC90L3QviDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0LjRgdCw0L3QvlxuICAgIC8qXG4gICAg0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNGB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0YxcbiAgICDQuNC80Y8g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC/0LjRgdCw0L3QviDQsiDRgtCw0LHQu9C40YbQtSB1c2VycyAo0L3QtSDQsiDQstC10YDRhdC90LXQvCDQuNC70Lgg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LDRhSlcbiAgICAqL1xuICAgIGdldFVzZXJOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGdldE5pY2tuYW1lU3RhdGVtZW50LCBbbmlja25hbWVdKVxuICAgIH1cblxuXG59IFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlck1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBWb3RlTW9kZWwge1xuXG4gICAgYXN5bmMgdm90ZSAodm9pY2UsIHRocmVhZElkLCBuaWNrbmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKGBJTlNFUlQgSU5UTyB2b3RlcyAodm9pY2UsIHRocmVhZCwgbmlja25hbWUpIFZBTFVFUyAoJDEsICQyLCAoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JyR7bmlja25hbWV9JykpIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlVGhyZWFkTmlja25hbWUgRE8gXG4gICAgICAgICAgICBVUERBVEUgU0VUIHZvaWNlPSQxIFdIRVJFIHZvdGVzLnZvaWNlPD4kMSBSRVRVUk5JTkcgKiwgKHhtYXg6OnRleHQ6OmludCA+IDApIGFzIGV4aXN0ZWRgLCBbdm9pY2UsIHRocmVhZElkXSk7IFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWb3RlTW9kZWw7IFxuIiwiZXhwb3J0IGNvbnN0IHBncCA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKSgpO1xuXG5jb25zdCBkYk9wdGlvbnMgPSB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogNTQzMixcbiAgICBkYXRhYmFzZTogJ2ZvcnVtJyxcbiAgICB1c2VyOiAnZXJtYWtmb3J1bScsXG4gICAgcGFzc3dvcmQ6ICcxMjMnXG59XG5cbmNvbnN0IGRiSW5zdGFuY2UgPSBwZ3AoZGJPcHRpb25zKTtcbmV4cG9ydCBkZWZhdWx0IGRiSW5zdGFuY2U7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IEZvcnVtQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Gb3J1bUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBmb3J1bVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmZvcnVtUm91dGVyLnBvc3QoJy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlRm9ydW0pO1xuZm9ydW1Sb3V0ZXIucG9zdCgnLzpzbHVnL2NyZWF0ZScsIEZvcnVtQ29udHJvbGxlci5jcmVhdGVUaHJlYWRJbkZvcnVtKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL2RldGFpbHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy90aHJlYWRzJywgRm9ydW1Db250cm9sbGVyLmdldFRocmVhZHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdXNlcnMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0VXNlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J1bVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFBvc3RDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLmpzJztcblxuY29uc3QgcG9zdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBvc3RSb3V0ZXIuZ2V0KCcvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci5nZXREZXRhaWxzKTtcbnBvc3RSb3V0ZXIucG9zdCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIudXBkYXRlRGV0YWlscyk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBTZXJ2aWNlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9TZXJ2aWNlQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHNlcnZpY2VSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5zZXJ2aWNlUm91dGVyLmdldCgnL3N0YXR1cycsIFNlcnZpY2VDb250cm9sbGVyLmNvdW50QWxsKTtcbnNlcnZpY2VSb3V0ZXIucG9zdCgnL2NsZWFyJywgU2VydmljZUNvbnRyb2xsZXIuY2xlYXJBbGwpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVGhyZWFkQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9UaHJlYWRDb250cm9sbGVyLmpzJztcblxuY29uc3QgdGhyZWFkUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9jcmVhdGUnLCBUaHJlYWRDb250cm9sbGVyLmNyZWF0ZVBvc3QpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC92b3RlJywgVGhyZWFkQ29udHJvbGxlci52b3RlRm9yVGhyZWFkKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9wb3N0cycsIFRocmVhZENvbnRyb2xsZXIuZ2V0UG9zdHMpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci51cGRhdGVUaHJlYWQpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRocmVhZFJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzJztcblxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9jcmVhdGUnLCBVc2VyQ29udHJvbGxlci5jcmVhdGVVc2VyKTtcbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcik7XG51c2VyUm91dGVyLmdldCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIuZ2V0VXNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7IiwiZXhwb3J0IGNvbnN0IGhhcnZlc3RDb2x1bW5zID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlzID0gW11cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgY29uc3QgaGFydmVzdFZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBPYmplY3QudmFsdWVzKGRhdGEpKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0S2V5VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlWYWx1ZXMgPSB7fVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5VmFsdWVzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleVZhbHVlcztcbn1cblxuZXhwb3J0IGNvbnN0IGlkVG9JbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldLmlkID0gcGFyc2VJbnQoZGF0YVtpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgY29uc3QgdmFsU3RyID0gZnVuY3Rpb24gKGFycmF5T2ZQb3N0T2JqZWN0cykge1xuICAgIC8vIGxldCByZXN1bHRRdWVyeSA9IGBXSVRIIHBvc3RfYXV0aG9yIEFTIChcbiAgICAvLyAgICAgU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JHtuaWNrbmFtZX1cbiAgICAvLyAgICApIGA7XG4gICAgbGV0IHJlc3VsdFF1ZXJ5ID0gYGA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mUG9zdE9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWVzSW5BcnJheSA9IGhhcnZlc3RWYWx1ZXMoYXJyYXlPZlBvc3RPYmplY3RzW2ldKTtcbiAgICAgICAgbGV0IHZhbCA9IGAgKGA7XG4gICAgICAgIHZhbCArPSBgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSR7YCdgICsgdmFsdWVzSW5BcnJheVswXSArIGAnYH0pLCBgO1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHZhbHVlc0luQXJyYXkubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgaWYgKCBqICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IFwiJ1wiICsgdmFsdWVzSW5BcnJheVtqXSArIFwiJ1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gdmFsdWVzSW5BcnJheVtqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogIT09IHZhbHVlc0luQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHZhbCArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0UXVlcnkgKz0gdmFsO1xuICAgICAgICBpZiAoaSA9PT0gYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0UXVlcnk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFBhdGhTdHJpbmcgPSBmdW5jdGlvbiAocGF0aEFycmF5KSB7XG4gICAgbGV0IHJlc3VsdCA9IGB7YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gcGF0aEFycmF5W2ldO1xuICAgICAgICBpZiAoaSAhPT0gcGF0aEFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBgLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCArPSBgfWA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGZvcnVtU2VyaWFsaXplciA9IGZ1bmN0aW9uIChmb3J1bXNBcnJheSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiPz8/Pz8/Pz8/Pz8/Pz8/Pz8/XCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiIyMjXCIpXG4gICAgZm9yIChsZXQgZm9ydW0gb2YgZm9ydW1zQXJyYXkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyNcIitmb3J1bS5hYm91dCk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRGb3J1bSA9IHtcbiAgICAgICAgICAgIFwiYWJvdXRcIjogZm9ydW0uYWJvdXQsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGZvcnVtLmVtYWlsLFxuICAgICAgICAgICAgXCJmdWxsbmFtZVwiOiBmb3J1bS5mdWxsbmFtZSxcbiAgICAgICAgICAgIFwibmlja25hbWVcIjogZm9ydW0ubmlja25hbWVcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChzZXJpYWxpemVkRm9ydW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUGFpcmVRdWVyeSA9IGZ1bmN0aW9uIChwYWlycykge1xuICAgIGxldCByZXN1bHRRdWVyeSA9IGBgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCgoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JyR7cGFpcnNbaV1bMF19JyksICcke3BhaXJzW2ldWzFdfScpYDtcbiAgICAgICAgaWYgKGkgIT09IHBhaXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9YCwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0UXVlcnk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZy1wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9