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
    var postsValues, creationDate, newPosts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, author, parentPost, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post, path, updatedPost;

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
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;
            _iterator = newPosts[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 79;
              break;
            }

            _post = _step.value;
            _context.prev = 12;
            _context.next = 15;
            return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserNickname(_post.author);

          case 15:
            author = _context.sent;

            if (author) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'cant find author'
            }));

          case 20:
            _post.author = author.nickname;

          case 21:
            _context.next = 29;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](12);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICKNAME');
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 29:
            if (!_post.parent) {
              _context.next = 49;
              break;
            }

            _context.prev = 30;
            _context.next = 33;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPostByIdAndThreadId(_post.parent, threadData.id);

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
            _context.next = 47;
            break;

          case 41:
            _context.prev = 41;
            _context.t1 = _context["catch"](30);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST PARENTS');
            console.log(_context.t1);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 47:
            _context.next = 50;
            break;

          case 49:
            _post.parent = null;

          case 50:
            _context.prev = 50;
            _context.next = 53;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPair(threadData.forum, _post.author);

          case 53:
            _context.next = 61;
            break;

          case 55:
            _context.prev = 55;
            _context.t2 = _context["catch"](50);
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING USER FORUM PAIR');
            console.log(_context.t2);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 61:
            _context.prev = 61;
            _context.next = 64;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(threadData.forum);

          case 64:
            _context.next = 72;
            break;

          case 66:
            _context.prev = 66;
            _context.t3 = _context["catch"](61);
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(_context.t3);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 72:
            _post.created = creationDate;
            _post.thread = threadData.id;
            _post.forum = threadData.forum;
            postsValues.push(_post);

          case 76:
            _iteratorNormalCompletion = true;
            _context.next = 10;
            break;

          case 79:
            _context.next = 85;
            break;

          case 81:
            _context.prev = 81;
            _context.t4 = _context["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context.t4;

          case 85:
            _context.prev = 85;
            _context.prev = 86;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 88:
            _context.prev = 88;

            if (!_didIteratorError) {
              _context.next = 91;
              break;
            }

            throw _iteratorError;

          case 91:
            return _context.finish(88);

          case 92:
            return _context.finish(85);

          case 93:
            // добавляем пост
            result = [];
            _context.prev = 94;
            columns = "(author, \"message\", parent, \"created\", thread, forum)";
            valuesInStringQuery = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["valStr"])(postsValues);
            query = "INSERT INTO posts " + columns + " VALUES " + valuesInStringQuery + " RETURNING *";
            _context.next = 100;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewPostsByQuery(query);

          case 100:
            addedPosts = _context.sent;
            // console.log('-------------------------------------------- BEFORE INSERT------------------------------------');
            // for (let post of addedPosts) {
            //     console.log(post.id);
            //     console.log(post.parent);
            //     console.log(post.pathtopost);
            // }
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 104;
            _iterator2 = addedPosts[Symbol.iterator]();

          case 106:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 121;
              break;
            }

            post = _step2.value;
            _context.next = 110;
            return constructPathToPost(post);

          case 110:
            path = _context.sent;
            _context.next = 113;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].setPathToPost(post.id, path);

          case 113:
            updatedPost = _context.sent;
            updatedPost.id = parseInt(updatedPost.id);
            updatedPost.thread = parseInt(updatedPost.thread);
            updatedPost.parent = parseInt(updatedPost.parent);
            result.push(updatedPost);

          case 118:
            _iteratorNormalCompletion2 = true;
            _context.next = 106;
            break;

          case 121:
            _context.next = 127;
            break;

          case 123:
            _context.prev = 123;
            _context.t5 = _context["catch"](104);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t5;

          case 127:
            _context.prev = 127;
            _context.prev = 128;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 130:
            _context.prev = 130;

            if (!_didIteratorError2) {
              _context.next = 133;
              break;
            }

            throw _iteratorError2;

          case 133:
            return _context.finish(130);

          case 134:
            return _context.finish(127);

          case 135:
            return _context.abrupt("return", res.status(201).json(result));

          case 138:
            _context.prev = 138;
            _context.t6 = _context["catch"](94);
            console.log('--------------------------------------------');
            console.log('ERROR IN ADDING NEW POST');
            console.log(_context.t6);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 144:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 81, 85, 93], [12, 23], [30, 41], [50, 55], [61, 66], [86,, 88, 92], [94, 138], [104, 123, 127, 135], [128,, 130, 134]]);
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
    // createForum (req, res) {
    // 	let user = req.body['user'];
    // 	const slug = req.body['slug'];
    // 	const title = req.body['title'];
    // 	UserModel.getUserNickname(user)
    // 		.then( data => {
    // 			if (data) {
    // 				user = data.nickname;
    // 				ForumModel.getForumBySlug(slug) // OPT можно делать селект только в случае если есть дубликаты
    // 					.then( data =>{
    // 						if (!data) {
    // 							const newForumData = [
    // 								slug,
    // 								title,
    // 								user
    // 							]
    // 							ForumModel.createNewForum(newForumData)
    // 								.then( data => {
    // 									return res.status(201).json(data);
    // 								})
    // 								.catch( error => {
    // 									console.log('--------------------------------------------');
    // 									console.log('ERROR IN CREATING Forum');
    // 									console.log(error);
    // 								});
    // 						} else {
    // 							return res.status(409).json(data);
    // 						}
    // 					})
    // 					.catch( error => {
    // 						console.log('--------------------------------------------');
    // 						console.log('ERROR IN GETTING FORUM BY SLUG');
    // 						console.log(error);
    // 						return res.status(500).json({ message : "crash" })
    // 					});
    // 			} else {
    // 				res.status(404).json({ message : "Can't find user" });
    // 			}              
    // 		})
    // 		.catch( error => {
    // 			console.log('--------------------------------------------');
    // 			console.log('ERROR IN GETTING USER BY NICK');
    // 			console.log(error);
    // 			return res.status(500).json({ message : "crash" });
    // 		});
    // }
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
    } // createThreadInForum (req, res) {
    // 	let author = req.body['author'];
    // 	let forumSlug = req.params['slug'];
    // 	//  есть ли пользователь с таким ником
    // 	UserModel.getUserNickname(author)
    // 		.then( data => {
    // 			if (data) {
    // 				author = data.nickname;
    // 			} else {
    // 				return res.status(404).json({ message : "Can't find user" });
    // 			}
    // 		})
    // 		.catch( error => {
    // 			console.log('--------------------------------------------');
    // 			console.log('ERROR IN GETTING USER BY NICK');
    // 			console.log(error);
    // 			return res.status(500).json({ message : "crash" })
    // 		});
    // 	// есть ли форум в котором хотят создать ветку 
    // 	ForumModel.getForumSlug(forumSlug)
    // 		.then( data => {
    // 			if (data) {
    // 				forumSlug = data.slug;
    // 				// существует ли ветка с таким название, если да то 409
    // 				ThreadModel.getThreadBySlug(req.body['slug'])
    // 					.then( thread => {
    // 						if (!thread) {
    // 							const keyValues = harvestKeyValues(req.body);
    // 							keyValues['author'] = author;
    // 							keyValues['forum'] = forumSlug;
    // 							const columns = harvestColumns(keyValues);
    // 							for (let i = 0; i < columns.length; i++) {
    // 								if (columns[i] === 'message' || columns[i] === 'created') {
    // 									columns[i] = '"' + columns[i] + '"';
    // 								}
    // 							}
    // 							const values = harvestValues(keyValues);
    // 							ThreadModel.createNewThread(columns, values)
    // 								.then( newThread => {
    // 									ForumModel.createForumUserPair(forumSlug, author)
    // 										.then( () => {
    // 											console.log('pair created');
    // 										})
    // 										.catch( error => {
    // 											console.log('--------------------------------------------');
    // 											console.log('ERROR IN creating pair');
    // 											console.log(error);
    // 											return res.status(500).json({ message : "crash" })
    // 										});
    // 									ForumModel.incrementThreads(forumSlug)
    // 										.then( () => {
    // 											newThread.id = parseInt(newThread.id); // pg-promise считает BIGSERIAL строкой хз почему
    // 											return res.status(201).json(newThread);
    // 										})
    // 										.catch( error => {
    // 											console.log('--------------------------------------------');
    // 											console.log('ERROR IN threads increment');
    // 											console.log(error);
    // 											return res.status(500).json({ message : "crash" })
    // 										});
    // 								})
    // 								.catch( error => {
    // 									console.log('--------------------------------------------');
    // 									console.log('ERROR IN CREATING THREAD');
    // 									console.log(error);
    // 									return res.status(500).json({ message : "crash" })
    // 								});	
    // 						} else {
    // 							thread.id = parseInt(thread.id); // pg-promise считает BIGSERIAL строкой хз почему
    // 							return res.status(409).json(thread);
    // 						}
    // 					})
    // 					.catch( error => {
    // 						console.log('--------------------------------------------');
    // 						console.log('ERROR IN GETTING USER BY NICK');
    // 						console.log(error);
    // 						return res.status(500).json({ message : "crash" })
    // 					});
    // 			} else {
    // 				return res.status(404).json({ message : "Can't find forum" });
    // 			}
    // 		})
    // 		.catch( error => {
    // 			console.log('--------------------------------------------');
    // 			console.log('ERROR IN GETTING FORUM BY SLUG');
    // 			console.log(error);
    // 			return res.status(500).json({ message : "crash" })
    // 		});
    // }

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
        var slugOrId, thread;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
    // createUser (req, res) {
    //     const nickname = req.params['nickname'];
    //     const email = req.body['email'];
    //     UserModel.getUserByNicknameOrEmail(nickname, email)
    //         .then( data => {
    //             if (data.length === 0) {
    //                 const newUserData = [
    //                     nickname,
    //                     req.body['fullname'],
    //                     req.body['about'],
    //                     req.body['email']
    //                 ];
    //                 UserModel.createNewUser(newUserData)
    //                     .then( data => {
    //                         return res.status(201).json(data);
    //                     })
    //                     .catch( error => {
    //                         console.log('--------------------------------------------');
    //                         console.log('ERROR IN CREATING');
    //                         console.log(error);
    //                     });
    //             } else {
    //                 return res.status(409).json(data);
    //             }
    //         })
    //         .catch( error => {
    //             console.log('--------------------------------------------');
    //             console.log('ERROR IN GETTING USER BY NICK OR EMAIL');
    //             console.log(error);
    //             return res.status(500).json({ message : "crash" })
    //         });
    // }    
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
    } // updateUser (req, res) {
    //     const nickname = req.params['nickname'];
    //     const newData = req.body;
    //     // console.log(Object.values(newData));
    //     UserModel.getUserByNickname(nickname) // существует ли пользователь
    //         .then( user => {
    //             if (!user) {
    //                 return res.status(404).json({ message : "Can't find user" })
    //             }                
    //         })
    //         .catch( error => {
    //             console.log('--------------------------------------------');
    //             console.log('ERROR IN GETTING USER BY NICK');
    //             console.log(error);
    //             return res.status(500).json({ message : "crash" })
    //         });
    //     if (Object.values(newData).length) { // если тело запроса не пустое 
    //         const columns = harvestColumns(newData);
    //         const keyValues = harvestKeyValues(newData);
    //         if (!columns.length) { // если все данные в столбцах были присланы как пустые строки
    //             UserModel.getUserByNickname(nickname) // просто возвращаем профиль
    //                 .then( user => {
    //                     return res.status(200).json(user);             
    //                 })
    //                 .catch( error => {
    //                     console.log('--------------------------------------------');
    //                     console.log('ERROR IN GETTING USER BY NICK');
    //                     console.log(error);
    //                     return res.status(500).json({ message : "crash" })
    //                 }); 
    //         } else { // если хотя бы какие-то данные были не пустые
    //             UserModel.getUserByNicknameOrEmail(newData['nickname'], newData['email'])
    //                 .then( data => {
    //                     if (data.length === 0) {
    //                         // console.log(nickname);
    //                         // console.log(columns);
    //                         // console.log(keyValues);
    //                         UserModel.updateUser(nickname,columns,keyValues)
    //                             .then(user => {
    //                                 return res.status(200).json(user);
    //                             })
    //                             .catch( error => {
    //                                 console.log('--------------------------------------------');
    //                                 console.log('ERROR IN UPDATING USER');
    //                                 console.log(error);
    //                                 return res.status(500).json({ message : "crash" })  
    //                             })
    //                     } else { // если есть конфликт данных
    //                         return res.status(409).json({ message : "User with such nickname or email already exists" });
    //                     }
    //                 })
    //                 .catch( error => {
    //                     console.log('--------------------------------------------');
    //                     console.log('ERROR IN GETTING USER BY NICKNAME OR EMAIL');
    //                     console.log(error);
    //                     return res.status(500).json({ message : "crash" })
    //                 });
    //         }
    //     } else { // если тело запроса пустое
    //         UserModel.getUserByNickname(nickname) // просто возвращаем профиль
    //             .then( user => {
    //                 return res.status(200).json(user);
    //             })
    //             .catch( error => {
    //                 console.log('--------------------------------------------');
    //                 console.log('ERROR IN GETTING USER BY NICK');
    //                 console.log(error);
    //                 return res.status(500).json({ message : "crash" })
    //             });
    //     }
    // } 

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
    key: "createForumUserPair",
    value: function createForumUserPair(forumSlug, nickname) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('INSERT INTO forumusers (forumslug, usernickname) VALUES ($1, $2) ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *', [forumSlug, nickname]);
    }
  }, {
    key: "incrementThreads",
    value: function incrementThreads(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('UPDATE forums SET threads = threads + 1 WHERE slug=$1 RETURNING *', [slug]);
    }
  }, {
    key: "incrementPosts",
    value: function incrementPosts(slug) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('UPDATE forums SET posts = posts + 1 WHERE slug=$1 RETURNING *', [slug]);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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
    value: function createNewPostsByQuery(query) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].manyOrNone(query);
    }
  }, {
    key: "getPostByIdAndThreadId",
    value: function getPostByIdAndThreadId(id, threadId) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM posts WHERE id=$1 AND thread=$2', [id, threadId]);
    }
  }, {
    key: "getPostById",
    value: function getPostById(id) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT * FROM posts WHERE id=$1', [id]);
    }
  }, {
    key: "updatePost",
    value: function updatePost(message, id) {
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('UPDATE posts SET "isEdited"=TRUE, "message"=$1 WHERE id=$2 RETURNING *', [message, id]);
    }
  }, {
    key: "setPathToPost",
    value: function setPathToPost(id, path) {
      // console.log(path);
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone("UPDATE posts SET pathtopost='$2:raw' WHERE id=$1 RETURNING *", [id, path]);
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
      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].oneOrNone('SELECT nickname FROM users WHERE nickname=$1', [nickname]);
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
    var val = " (";

    for (var j = 0; j < valuesInArray.length; j++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJuZXdQb3N0cyIsImJvZHkiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwicG9zdCIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsImF1dGhvciIsImpzb24iLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIiwicGFyZW50IiwiUG9zdE1vZGVsIiwiZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZCIsImlkIiwicGFyZW50UG9zdCIsIkZvcnVtTW9kZWwiLCJjcmVhdGVGb3J1bVVzZXJQYWlyIiwiZm9ydW0iLCJpbmNyZW1lbnRQb3N0cyIsImNyZWF0ZWQiLCJ0aHJlYWQiLCJwdXNoIiwicmVzdWx0IiwiY29sdW1ucyIsInZhbHVlc0luU3RyaW5nUXVlcnkiLCJ2YWxTdHIiLCJxdWVyeSIsImNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSIsImFkZGVkUG9zdHMiLCJjb25zdHJ1Y3RQYXRoVG9Qb3N0IiwicGF0aCIsInNldFBhdGhUb1Bvc3QiLCJ1cGRhdGVkUG9zdCIsInBhcnNlSW50IiwiaWRBcnJheSIsImlkU3RyaW5nIiwiY29uc3RydWN0UGF0aFN0cmluZyIsInBhdGh0b3Bvc3QiLCJnZXRQYXRoVG9Qb3N0IiwicGF0aFN0cmluZyIsIkZvcnVtQ29udHJvbGxlciIsInVzZXIiLCJzbHVnIiwidGl0bGUiLCJuZXdGb3J1bURhdGEiLCJjcmVhdGVOZXdGb3J1bSIsImdldEZvcnVtQnlTbHVnIiwiZXhzaXN0aW5nRm9ydW0iLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmb3J1bVNsdWciLCJnZXRGb3J1bVNsdWciLCJrZXlWYWx1ZXMiLCJoYXJ2ZXN0S2V5VmFsdWVzIiwiaGFydmVzdENvbHVtbnMiLCJpIiwidmFsdWVzIiwiaGFydmVzdFZhbHVlcyIsIlRocmVhZE1vZGVsIiwiY3JlYXRlTmV3VGhyZWFkIiwiaW5jcmVtZW50VGhyZWFkcyIsImdldFRocmVhZEJ5U2x1ZyIsImV4c2lzdGluZ1RocmVhZCIsInF1ZXJ5UGFyYW1zIiwiZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIiwiaWRUb0ludCIsImRlc2MiLCJnZXRVc2VycyIsIlBvc3RDb250cm9sbGVyIiwicG9zdElkIiwiZ2V0UG9zdEJ5SWQiLCJwb3N0RGF0YSIsInJlbGF0ZWRUbyIsInJlbGF0ZWRFbnRpdGllcyIsInNwbGl0IiwicmVsYXRlZEVudGl0eSIsImdldFVzZXJCeU5pY2tuYW1lIiwiZW50aXR5IiwiZ2V0VGhyZWFkQnlJZCIsIm5ld0RhdGEiLCJPYmplY3QiLCJ1cGRhdGVQb3N0IiwiU2VydmljZUNvbnRyb2xsZXIiLCJTZXJ2aWNlTW9kZWwiLCJjb3VudEFsbCIsImNsZWFyQWxsIiwiZW5kIiwiVGhyZWFkQ29udHJvbGxlciIsInNsdWdPcklkIiwidGVzdCIsIm1lc2FnZSIsInZvaWNlVmFsdWUiLCJ2b2ljZSIsIlZvdGVNb2RlbCIsInZvdGUiLCJ2b3RlZERhdGEiLCJleGlzdGVkIiwiaW5jcmVtZW50Vm90ZXNCeUlkIiwic29ydCIsImZsYXRTb3J0IiwidHJlZVNvcnQiLCJwYXJlbnRUcmVlU29ydCIsIm1hcCIsInJlc1Bvc3QiLCJ1cGRhdGVUaHJlYWQiLCJVc2VyQ29udHJvbGxlciIsImVtYWlsIiwibmV3VXNlckRhdGEiLCJjcmVhdGVOZXdVc2VyIiwiZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIiwiZXhpc3RpbmdVc2VyIiwidXBkYXRlVXNlciIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJ1c2VyUm91dGVyIiwiZm9ydW1Sb3V0ZXIiLCJ0aHJlYWRSb3V0ZXIiLCJwb3N0Um91dGVyIiwic2VydmljZVJvdXRlciIsImdldCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImRiSW5zdGFuY2UiLCJvbmVPck5vbmUiLCJzaW5jZSIsInBncCIsImFzIiwiZm9ybWF0IiwibWFueU9yTm9uZSIsInRvU3RyaW5nIiwibGltaXQiLCJjIiwidiIsIm9uZSIsInRocmVhZElkIiwicGF0aFNvcnRSdWxlIiwiaWRTb3J0UnVsZSIsImNvdW50Iiwibm9uZSIsImhlbHBlcnMiLCJ1cGRhdGUiLCJ0YWJsZSIsImVtcHR5VXBkYXRlIiwibmljayIsIm1haWwiLCJyZXF1aXJlIiwiZGJPcHRpb25zIiwiaG9zdCIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJSb3V0ZXIiLCJjcmVhdGVGb3J1bSIsImNyZWF0ZVRocmVhZEluRm9ydW0iLCJnZXREZXRhaWxzIiwiZ2V0VGhyZWFkcyIsInVwZGF0ZURldGFpbHMiLCJjcmVhdGVQb3N0Iiwidm90ZUZvclRocmVhZCIsImdldFBvc3RzIiwiY3JlYXRlVXNlciIsImdldFVzZXIiLCJrZXlzIiwia2V5IiwidmFsdWUiLCJhcnJheU9mUG9zdE9iamVjdHMiLCJyZXN1bHRRdWVyeSIsInZhbHVlc0luQXJyYXkiLCJ2YWwiLCJqIiwicGF0aEFycmF5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdB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QUMsRUFBdkMsRUFBMkM7QUFDdkNwQyxVQUFNLElBQUkwSixTQUFTLENBQUN0SCxDQUFELENBQW5COztBQUNBLFFBQUlBLENBQUMsS0FBS3NILFNBQVMsQ0FBQ2xMLE1BQVYsR0FBbUIsQ0FBN0IsRUFBZ0M7QUFDNUJ3QixZQUFNLFFBQU47QUFDSDtBQUNKOztBQUNEQSxRQUFNLE9BQU47QUFDQSxTQUFPQSxNQUFQO0FBQ0gsQ0FWTSxDOzs7Ozs7Ozs7OztBQ25FUCwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZm9ydW0vc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCB7IHZhbFN0ciwgY29uc3RydWN0UGF0aFN0cmluZyB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdHNMb29wID0gYXN5bmMgZnVuY3Rpb24gKHJlcSxyZXMsIHRocmVhZERhdGEpIHtcbiAgICBjb25zdCBwb3N0c1ZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcbiAgICBjb25zdCBuZXdQb3N0cyA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFuZXdQb3N0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKFtdKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShwb3N0LmF1dGhvcik7XG4gICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3N0LmF1dGhvciA9IGF1dGhvci5uaWNrbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQuyDQv9C10YDQtdC00LDQvSBpZCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YJcbiAgICAgICAgaWYgKHBvc3QucGFyZW50KSB7XG4gICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LXRgdGC0Ywg0LvQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YIg0LIg0YHQuNGB0YLQtdC80LUgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFBvc3QgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZChwb3N0LnBhcmVudCwgdGhyZWFkRGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnbm8gcGFyZW50IHBvc3RzJyB9KTsgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJlbnRQb3N0LmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBQQVJFTlRTJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Y7Qt9C10YDQsCDQsiDRhNC+0YDRg9C8IFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUiBGT1JVTSBQQUlSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQv9C+0YHRgtC+0LIg0LIg0YTQvtGA0YPQvNC1IFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRQb3N0cyh0aHJlYWREYXRhLmZvcnVtKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBwb3N0LmNyZWF0ZWQgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIHBvc3QudGhyZWFkID0gdGhyZWFkRGF0YS5pZDtcbiAgICAgICAgcG9zdC5mb3J1bSA9IHRocmVhZERhdGEuZm9ydW07XG4gICAgICAgIHBvc3RzVmFsdWVzLnB1c2gocG9zdCk7XG4gICAgfVxuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC/0L7RgdGCXG4gICAgY29uc3QgcmVzdWx0ID0gW107IFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBgKGF1dGhvciwgXCJtZXNzYWdlXCIsIHBhcmVudCwgXCJjcmVhdGVkXCIsIHRocmVhZCwgZm9ydW0pYFxuICAgICAgICBjb25zdCB2YWx1ZXNJblN0cmluZ1F1ZXJ5ID0gdmFsU3RyKHBvc3RzVmFsdWVzKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgSU5TRVJUIElOVE8gcG9zdHMgYCArIGNvbHVtbnMgKyBgIFZBTFVFUyBgICsgdmFsdWVzSW5TdHJpbmdRdWVyeSArIGAgUkVUVVJOSU5HICpgO1xuXG4gICAgICAgIGNvbnN0IGFkZGVkUG9zdHMgPSBhd2FpdCBQb3N0TW9kZWwuY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJFRk9SRSBJTlNFUlQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gZm9yIChsZXQgcG9zdCBvZiBhZGRlZFBvc3RzKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3N0LmlkKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHBvc3QucGFyZW50KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHBvc3QucGF0aHRvcG9zdCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZm9yIChsZXQgcG9zdCBvZiBhZGRlZFBvc3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgY29uc3RydWN0UGF0aFRvUG9zdChwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLnNldFBhdGhUb1Bvc3QocG9zdC5pZCwgcGF0aCk7XG4gICAgICAgICAgICB1cGRhdGVkUG9zdC5pZCA9IHBhcnNlSW50KHVwZGF0ZWRQb3N0LmlkKTtcbiAgICAgICAgICAgIHVwZGF0ZWRQb3N0LnRocmVhZCA9IHBhcnNlSW50KHVwZGF0ZWRQb3N0LnRocmVhZCk7XG4gICAgICAgICAgICB1cGRhdGVkUG9zdC5wYXJlbnQgPSBwYXJzZUludCh1cGRhdGVkUG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godXBkYXRlZFBvc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBRlRFUiBJTlNFUlQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gZm9yIChsZXQgcG9zdCBvZiByZXN1bHQpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHBvc3QuaWQpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocG9zdC5wYXJlbnQpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocG9zdC5wYXRodG9wb3N0KTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEFERElORyBORVcgUE9TVCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFBhdGhUb1Bvc3QgPSBhc3luYyBmdW5jdGlvbiAocG9zdCkge1xuICAgIGNvbnN0IGlkQXJyYXkgPSBbXTtcbiAgICBpZEFycmF5LnB1c2gocG9zdC5pZCk7XG4gICAgY29uc3QgaWRTdHJpbmcgPSBjb25zdHJ1Y3RQYXRoU3RyaW5nKGlkQXJyYXkpO1xuICAgIGxldCBwYXRodG9wb3N0O1xuICAgIGlmICghcG9zdC5wYXJlbnQpIHtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBpZFN0cmluZztcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UGF0aFRvUG9zdChwb3N0LnBhcmVudCk7XG4gICAgICAgIHBhdGgucGF0aHRvcG9zdC5wdXNoKHBvc3QuaWQpO1xuICAgICAgICBjb25zdCBwYXRoU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhwYXRoLnBhdGh0b3Bvc3QpO1xuICAgICAgICBwYXRodG9wb3N0ID0gcG9zdC5wYXRodG9wb3N0IHx8IHBhdGhTdHJpbmcgfHwgaWRTdHJpbmdcbiAgICB9XG4gICAgcmV0dXJuIHBhdGh0b3Bvc3Q7XG59IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5cblxuY2xhc3MgRm9ydW1Db250cm9sbGVyIHtcblxuICAgIC8vIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHQvLyBcdGxldCB1c2VyID0gcmVxLmJvZHlbJ3VzZXInXTtcblx0Ly8gXHRjb25zdCBzbHVnID0gcmVxLmJvZHlbJ3NsdWcnXTtcblx0Ly8gXHRjb25zdCB0aXRsZSA9IHJlcS5ib2R5Wyd0aXRsZSddO1xuXHQvLyBcdFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcilcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHR1c2VyID0gZGF0YS5uaWNrbmFtZTtcblx0Ly8gXHRcdFx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpIC8vIE9QVCDQvNC+0LbQvdC+INC00LXQu9Cw0YLRjCDRgdC10LvQtdC60YIg0YLQvtC70YzQutC+INCyINGB0LvRg9GH0LDQtSDQtdGB0LvQuCDQtdGB0YLRjCDQtNGD0LHQu9C40LrQsNGC0Ytcblx0Ly8gXHRcdFx0XHRcdC50aGVuKCBkYXRhID0+e1xuXHQvLyBcdFx0XHRcdFx0XHRpZiAoIWRhdGEpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRzbHVnLFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR1c2VyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XVxuXHQvLyBcdFx0XHRcdFx0XHRcdEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZGF0YSk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgRm9ydW0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZGF0YSk7XG5cdC8vIFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHR9KTtcblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pO1xuXHQvLyBcdFx0XHR9ICAgICAgICAgICAgICBcblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cblx0YXN5bmMgY3JlYXRlRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdFx0XHRzbHVnLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR1c2VyLm5pY2tuYW1lXG5cdFx0XVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKTtcblxuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XG5cdGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSk7XG5cblxuXHR9XG5cblx0Ly8gY3JlYXRlVGhyZWFkSW5Gb3J1bSAocmVxLCByZXMpIHtcblx0Ly8gXHRsZXQgYXV0aG9yID0gcmVxLmJvZHlbJ2F1dGhvciddO1xuXHQvLyBcdGxldCBmb3J1bVNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdC8vIFx0Ly8gINC10YHRgtGMINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0L3QuNC60L7QvFxuXHQvLyBcdFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKVxuXHQvLyBcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRpZiAoZGF0YSkge1xuXHQvLyBcdFx0XHRcdGF1dGhvciA9IGRhdGEubmlja25hbWU7XG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdH0pO1xuXHRcdFx0XG5cdC8vIFx0Ly8g0LXRgdGC0Ywg0LvQuCDRhNC+0YDRg9C8INCyINC60L7RgtC+0YDQvtC8INGF0L7RgtGP0YIg0YHQvtC30LTQsNGC0Ywg0LLQtdGC0LrRgyBcblx0Ly8gXHRGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpXG5cdC8vIFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdC8vIFx0XHRcdGlmIChkYXRhKSB7XG5cdC8vIFx0XHRcdFx0Zm9ydW1TbHVnID0gZGF0YS5zbHVnO1xuXHQvLyBcdFx0XHRcdC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0LLQtdGC0LrQsCDRgSDRgtCw0LrQuNC8INC90LDQt9Cy0LDQvdC40LUsINC10YHQu9C4INC00LAg0YLQviA0MDlcblx0Ly8gXHRcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSlcblx0Ly8gXHRcdFx0XHRcdC50aGVuKCB0aHJlYWQgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRpZiAoIXRocmVhZCkge1xuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLmJvZHkpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGtleVZhbHVlc1snYXV0aG9yJ10gPSBhdXRob3I7XG5cdC8vIFx0XHRcdFx0XHRcdFx0a2V5VmFsdWVzWydmb3J1bSddID0gZm9ydW1TbHVnO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHQudGhlbiggbmV3VGhyZWFkID0+IHtcblx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBhdXRob3IpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oICgpID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdwYWlyIGNyZWF0ZWQnKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gY3JlYXRpbmcgcGFpcicpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdEZvcnVtTW9kZWwuaW5jcmVtZW50VGhyZWFkcyhmb3J1bVNsdWcpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oICgpID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1RocmVhZC5pZCA9IHBhcnNlSW50KG5ld1RocmVhZC5pZCk7IC8vIHBnLXByb21pc2Ug0YHRh9C40YLQsNC10YIgQklHU0VSSUFMINGB0YLRgNC+0LrQvtC5INGF0Lcg0L/QvtGH0LXQvNGDXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3VGhyZWFkKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSk7XHRcblx0Ly8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHR0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpOyAvLyBwZy1wcm9taXNlINGB0YfQuNGC0LDQtdGCIEJJR1NFUklBTCDRgdGC0YDQvtC60L7QuSDRhdC3INC/0L7Rh9C10LzRg1xuXHQvLyBcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih0aHJlYWQpO1xuXHQvLyBcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHR9KTtcblxuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdH0pO1xuXHQvLyB9XG5cblx0YXN5bmMgY3JlYXRlVGhyZWFkSW5Gb3J1bSAocmVxLCByZXMpIHtcblx0XHRsZXQgYXV0aG9yID0gcmVxLmJvZHlbJ2F1dGhvciddO1xuXHRcdGxldCBmb3J1bVNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0bGV0IGZvcnVtO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcik7XG4gICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdHRyeSB7XG4gICAgICAgICAgICBmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKGZvcnVtU2x1Zyk7XG4gICAgICAgICAgICBpZiAoIWZvcnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblxuXG5cblx0XHRjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5ib2R5KTtcblx0XHRrZXlWYWx1ZXNbJ2F1dGhvciddID0gYXV0aG9yLm5pY2tuYW1lO1xuXHRcdGtleVZhbHVlc1snZm9ydW0nXSA9IGZvcnVtLnNsdWc7XG5cdFx0XG5cdFx0Y29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKGtleVZhbHVlcyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY29sdW1uc1tpXSA9PT0gJ21lc3NhZ2UnIHx8IGNvbHVtbnNbaV0gPT09ICdjcmVhdGVkJykge1xuXHRcdFx0XHRjb2x1bW5zW2ldID0gJ1wiJyArIGNvbHVtbnNbaV0gKyAnXCInO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCB2YWx1ZXMgPSBoYXJ2ZXN0VmFsdWVzKGtleVZhbHVlcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuY3JlYXRlTmV3VGhyZWFkKGNvbHVtbnMsIHZhbHVlcyk7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtLnNsdWcsIGF1dGhvci5uaWNrbmFtZSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gY3JlYXRpbmcgcGFpcicpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50VGhyZWFkcyhmb3J1bS5zbHVnKTtcblx0XHRcdFx0cmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ1RocmVhZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhyZXEuYm9keVsnc2x1ZyddKTtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkLmlkID0gcGFyc2VJbnQoZXhzaXN0aW5nVGhyZWFkLmlkKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGV4c2lzdGluZ1RocmVhZClcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRyAhISEhJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbiBcblx0XHRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRnZXRUaHJlYWRzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoc2x1Zylcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpe1xuXHRcdFx0XHRcdFRocmVhZE1vZGVsLmdldFRocmVhZHNCeUZvcnVtU2x1ZyhzbHVnLCBxdWVyeVBhcmFtcylcblx0XHRcdFx0XHRcdC50aGVuKCBkYXRhID0+e1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGEgPSBpZFRvSW50KGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEUyBPRiBGT1JVTScpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdFx0XHRcdH0pO1x0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSk7XHRcblx0fVxuXG5cdGFzeW5jIGdldFVzZXJzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0cXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJztcblx0XHRsZXQgZm9ydW07XG5cdFx0dHJ5IHtcblx0XHRcdGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0aWYgKCFmb3J1bSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdH0gXG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0VXNlcnMoZm9ydW0uc2x1ZywgcXVlcnlQYXJhbXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVJTIElOIEZPUlVNJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuXG5cdH0gXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtQ29udHJvbGxlcjsiLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5jbGFzcyBQb3N0Q29udHJvbGxlciB7XG4gICAgYXN5bmMgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGVkVG8gPSByZXEucXVlcnlbJ3JlbGF0ZWQnXTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuXG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8IG5ld0RhdGEubWVzc2FnZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7ICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChwb3N0RGF0YS5tZXNzYWdlICE9PSBuZXdEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnVwZGF0ZVBvc3QobmV3RGF0YS5tZXNzYWdlLCBwb3N0SWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkQgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gcGFyc2VJbnQocmVzdWx0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudCA/IHBhcnNlSW50KHJlc3VsdC5wYXJlbnQpIDogcmVzdWx0LnBhcmVudDsgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7IFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0Q29udHJvbGxlcjsiLCJpbXBvcnQgU2VydmljZU1vZGVsIGZyb20gJy4uL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5jbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjb3VudEFsbCAocmVxLCByZXMpIHtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNvdW50QWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNsZWFyQWxsIChyZXEsIHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyOyIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgVm90ZU1vZGVsIGZyb20gJy4uL21vZGVscy9Wb3RlTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0c0xvb3AgfSBmcm9tICcuL0NvbnRyb2xsZXJVdGlscy5qcyc7XG5cbmNsYXNzIFRocmVhZENvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlUG9zdCAocmVxLCByZXMpe1xuICAgICAgICBsZXQgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIHNsdWcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVQb3N0c0xvb3AocmVxLHJlcywgdGhyZWFkKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyB2b3RlRm9yVGhyZWFkIChyZXEgLHJlcykge1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBjb25zdCB2b2ljZVZhbHVlID0gcmVxLmJvZHkudm9pY2U7XG5cbiAgICAgICAgbGV0IGF1dGhvciA9IHJlcS5ib2R5Lm5pY2tuYW1lO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZvdGVkRGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZvdGVkRGF0YSA9IGF3YWl0IFZvdGVNb2RlbC52b3RlKHZvaWNlVmFsdWUsIHRocmVhZC5pZCwgYXV0aG9yLm5pY2tuYW1lKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gTUFLSU5HIFZPVEUnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZvdGVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZvdGVkRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgdm90ZWREYXRhLnZvaWNlID0gdm90ZWREYXRhLnZvaWNlID09PSAxID8gdm90ZWREYXRhLnZvaWNlICsgMSA6IHZvdGVkRGF0YS52b2ljZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuaW5jcmVtZW50Vm90ZXNCeUlkKHRocmVhZC5pZCwgdm90ZWREYXRhLnZvaWNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gaW5jcmVtZW50aW5nIHZvdGVzIGluIHRocmVhZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBnZXREZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSlcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UG9zdHMocmVxLCByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeVBhcmFtc1snZGVzYyddID0gcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9PT0gJ3RydWUnO1xuICAgICAgICBxdWVyeVBhcmFtc1snc2luY2UnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydzaW5jZSddKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAnZmxhdCcgfHwgIXF1ZXJ5UGFyYW1zLnNvcnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLmZsYXRTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGZsYXQgc29ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC50cmVlU29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0cmVlIHNvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdwYXJlbnRfdHJlZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnBhcmVudFRyZWVTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHBhcmVudCB0cmVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKCAocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzUG9zdCA9IHt9O1xuICAgICAgICAgICAgcmVzUG9zdFsnYXV0aG9yJ10gPSBwb3N0LmF1dGhvcjtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2NyZWF0ZWQnXSA9IHBvc3QuY3JlYXRlZDtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2ZvcnVtJ10gPSBwb3N0LmZvcnVtO1xuICAgICAgICAgICAgcmVzUG9zdFsnaWQnXSA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcmVzUG9zdFsnbWVzc2FnZSddID0gcG9zdC5tZXNzYWdlO1xuICAgICAgICAgICAgcmVzUG9zdFsncGFyZW50J10gPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXNQb3N0Wyd0aHJlYWQnXSA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc1Bvc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRocmVhZCAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC51cGRhdGVUaHJlYWQodGhyZWFkLnNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gICAgLy8gY3JlYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAvLyAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgIC8vICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5WydlbWFpbCddO1xuICAgIC8vICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbClcbiAgICAvLyAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXNlckRhdGEgPSBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlcS5ib2R5WydmdWxsbmFtZSddLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxLmJvZHlbJ2Fib3V0J10sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXEuYm9keVsnZW1haWwnXVxuICAgIC8vICAgICAgICAgICAgICAgICBdO1xuICAgIC8vICAgICAgICAgICAgICAgICBVc2VyTW9kZWwuY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZGF0YSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGRhdGEpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9ICAgIFxuXG4gICAgYXN5bmMgY3JlYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5WydlbWFpbCddO1xuICAgICAgICBjb25zdCBuZXdVc2VyRGF0YSA9IFtcbiAgICAgICAgICAgIG5pY2tuYW1lLFxuICAgICAgICAgICAgcmVxLmJvZHlbJ2Z1bGxuYW1lJ10sXG4gICAgICAgICAgICByZXEuYm9keVsnYWJvdXQnXSxcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdVc2VyO1xuICAgICAgICAgICAgdHJ5IHtcblx0XHRcdFx0ZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuaWNrbmFtZSwgZW1haWwpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhpc3RpbmdVc2VyKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0sgT1IgRU1BSUwnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIGdldFVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKVxuICAgICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0gIFxuICAgIFxuICAgIC8vIHVwZGF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgLy8gICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAvLyAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKG5ld0RhdGEpKTtcblxuICAgIC8vICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpIC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgLy8gICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgLy8gICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgaWYgKE9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoKSB7IC8vINC10YHQu9C4INGC0LXQu9C+INC30LDQv9GA0L7RgdCwINC90LUg0L/Rg9GB0YLQvtC1IFxuICAgIC8vICAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgIC8vICAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAvLyAgICAgICAgIGlmICghY29sdW1ucy5sZW5ndGgpIHsgLy8g0LXRgdC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsiDRgdGC0L7Qu9Cx0YbQsNGFINCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAvLyAgICAgICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpIC8vINC/0YDQvtGB0YLQviDQstC+0LfQstGA0LDRidCw0LXQvCDQv9GA0L7RhNC40LvRjFxuICAgIC8vICAgICAgICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7ICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pOyBcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7IC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0LrQsNC60LjQtS3RgtC+INC00LDQvdC90YvQtSDQsdGL0LvQuCDQvdC1INC/0YPRgdGC0YvQtVxuICAgIC8vICAgICAgICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmV3RGF0YVsnbmlja25hbWUnXSwgbmV3RGF0YVsnZW1haWwnXSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmlja25hbWUpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleVZhbHVlcyk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVVNFUicpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KSAgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQutC+0L3RhNC70LjQutGCINC00LDQvdC90YvRhVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiBcIlVzZXIgd2l0aCBzdWNoIG5pY2tuYW1lIG9yIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FIE9SIEVNQUlMJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfVxuXG5cbiAgICAvLyAgICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0YLQtdC70L4g0LfQsNC/0YDQvtGB0LAg0L/Rg9GB0YLQvtC1XG4gICAgLy8gICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpIC8vINC/0YDQvtGB0YLQviDQstC+0LfQstGA0LDRidCw0LXQvCDQv9GA0L7RhNC40LvRjFxuICAgIC8vICAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9IFxuXG4gICAgYXN5bmMgdXBkYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0LrQsNC60LjQtS3RgtC+INC00LDQvdC90YvQtSDQsdGL0LvQuCDQvdC1INC/0YPRgdGC0YvQtVxuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC51cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsa2V5VmFsdWVzKVxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6IFwiVXNlciB3aXRoIHN1Y2ggbmlja25hbWUgb3IgZW1haWwgYWxyZWFkeSBleGlzdHNcIiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyQ29udHJvbGxlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vcm91dGVycy9Vc2VyUm91dGVzLmpzJztcbmltcG9ydCBmb3J1bVJvdXRlciBmcm9tICcuL3JvdXRlcnMvRm9ydW1Sb3V0ZXMuanMnO1xuaW1wb3J0IHRocmVhZFJvdXRlciBmcm9tICcuL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzJztcbmltcG9ydCBwb3N0Um91dGVyIGZyb20gJy4vcm91dGVycy9Qb3N0Um91dGVzLmpzJztcbmltcG9ydCBzZXJ2aWNlUm91dGVyIGZyb20gJy4vcm91dGVycy9TZXJ2aWNlUm91dGVzLmpzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuYXBwLnVzZSgnL2FwaS91c2VyJywgdXNlclJvdXRlcik7XG5hcHAudXNlKCcvYXBpL2ZvcnVtJywgZm9ydW1Sb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS90aHJlYWQnLCB0aHJlYWRSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9wb3N0JywgcG9zdFJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3NlcnZpY2UnLCBzZXJ2aWNlUm91dGVyKTtcbmFwcC5nZXQoJy8nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbycpO1xufSlcblxuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBGb3J1bU1vZGVsIHtcblxuICAgIGdldEZvcnVtQnlTbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdGb3J1bSAobmV3Rm9ydW1EYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gZm9ydW1zIChzbHVnLCB0aXRsZSwgXCJ1c2VyXCIpIFZBTFVFUyAoJDEsICQyLCAkMykgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIG5ld0ZvcnVtRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcnVtU2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBzbHVnIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bVNsdWcsIG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDEsICQyKSBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqJywgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRUaHJlYWRzKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgZm9ydW1zIFNFVCB0aHJlYWRzID0gdGhyZWFkcyArIDEgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50UG9zdHMoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGdldFVzZXJzIChzbHVnLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBsZXQgcXVlcnk7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMSBBTkQgVS5uaWNrbmFtZT4kMlxuICAgICAgICAgICAgYCxbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDEgQU5EIFUubmlja25hbWU8JDJcbiAgICAgICAgICAgIGAsIFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMWAsIFtzbHVnXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGAkMTpyYXcgXG4gICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnVS5uaWNrbmFtZSBERVNDJyA6ICdVLm5pY2tuYW1lIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bU1vZGVsOyAiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgUG9zdE1vZGVsIHtcbiAgICBcbiAgICBjcmVhdGVOZXdQb3N0IChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYyArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGMgKz0gJyknO1xuXG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ICs9ICckJyArIChpKzEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHYgKz0gJyknO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyBwb3N0cyAnICsgYyArICcgVkFMVUVTICcgKyB2ICsgJyBSRVRVUk5JTkcgKic7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQb3N0c0J5UXVlcnkgKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUocXVlcnkpO1xuICAgIH1cblxuICAgIGdldFBvc3RCeUlkQW5kVGhyZWFkSWQgKGlkLCB0aHJlYWRJZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEgQU5EIHRocmVhZD0kMicsIFtpZCwgdGhyZWFkSWRdKVxuICAgIH1cblxuICAgIGdldFBvc3RCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3N0IChtZXNzYWdlLCBpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBwb3N0cyBTRVQgXCJpc0VkaXRlZFwiPVRSVUUsIFwibWVzc2FnZVwiPSQxIFdIRVJFIGlkPSQyIFJFVFVSTklORyAqJywgW21lc3NhZ2UsaWRdKTtcbiAgICB9XG5cbiAgICBzZXRQYXRoVG9Qb3N0IChpZCAsIHBhdGgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGF0aCk7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShcIlVQREFURSBwb3N0cyBTRVQgcGF0aHRvcG9zdD0nJDI6cmF3JyBXSEVSRSBpZD0kMSBSRVRVUk5JTkcgKlwiLCBbaWQsIHBhdGhdKTtcbiAgICB9XG5cbiAgICBnZXRQYXRoVG9Qb3N0IChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICBcbiAgICBmbGF0U29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGlmICggcXVlcnlQYXJhbXMuc2luY2UgKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxIEFORCBpZDwkMlxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDEgQU5EIGlkPiQyXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyZWVTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwYXRodG9wb3N0IERFU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3QgPiAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBcbiAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcGFyZW50VHJlZVNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BpZC5wYXJlbnRfaWQgREVTQywgcGF0aHRvcG9zdCBBU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgY29uc3QgaWRTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAnaWQgREVTQycgOiAnaWQgQVNDJ1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3RbMV0gPiAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0WzFdIDwgKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTsgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0TW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgU2VydmljZU1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjb3VudEFsbCgpIHtcbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIGZvcnVtcycpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBwb3N0cycpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHRocmVhZHMnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBwYXJzZUludChmb3J1bS5jb3VudCksXG4gICAgICAgICAgICBcInBvc3RcIjogcGFyc2VJbnQocG9zdC5jb3VudCksXG4gICAgICAgICAgICBcInRocmVhZFwiOiBwYXJzZUludCh0aHJlYWQuY291bnQpLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHBhcnNlSW50KHVzZXIuY291bnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhc3luYyBjbGVhckFsbCgpIHtcblxuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIGZvcnVtcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBwb3N0cyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHRocmVhZHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdXNlcnMgQ0FTQ0FERScpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IGZvcnVtLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBvc3QsXG4gICAgICAgICAgICBcInRocmVhZFwiOiB0aHJlYWQsXG4gICAgICAgICAgICBcInVzZXJcIjogdXNlclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmljZU1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBUaHJlYWRNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY3JlYXRlTmV3VGhyZWFkIChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYyArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGMgKz0gJyknO1xuXG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ICs9ICckJyArIChpKzEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHYgKz0gJyknO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gdGhyZWFkcyAnICsgYyArICcgVkFMVUVTICcgKyB2ICsgYCBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqYDtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkQnlTbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkQnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgaWQ9JDEnLCBbaWRdKVxuICAgIH1cblxuICAgIGdldFRocmVhZHNCeUZvcnVtU2x1ZyAoZm9ydW1TbHVnLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIj49JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPD0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkMycsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5U2x1ZyAoc2x1Zywgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Zyx2b2ljZV0pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlJZCAoaWQsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBpZD0kMSBSRVRVUk5JTkcgKicsIFtpZCx2b2ljZV0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRocmVhZCAoc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndGhyZWFkcyd9LG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcInNsdWdcXFwiID0gXFwnXCIgKyAgc2x1ZyArIFwiXFwnIFJFVFVSTklORyAqXCI7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRNb2RlbDtcbiIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgLy8gb25lT3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90YPQuyDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnLCBbbmlja25hbWVdKVxuICAgIH1cblxuICAgIGdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCAobmljaywgbWFpbCkgeyAvLyDQvNC+0LbQvdC+INC60LDQui3RgtC+INC90LUg0L/RgNC+0YXQvtC00LjRgtGM0YHRjyDQv9C+INCy0YHQtdC5INGC0LDQsdC70LjRhtC1LCDQsCDQvtGB0YLQsNC90LDQstC70LjQstCw0YLRgdGPINC60LDQuiDRgtC+0LvRjNC60L4g0L3QsNGI0LvQuCAxINCy0YXQvtC20LTQtdC90LjQtVxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IG5pY2sgfHwgJyc7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gbWFpbCB8fCAnJztcbiAgICAgICAgLy8gbWFueU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyINC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEgT1IgZW1haWw9JDInLCBbbmlja25hbWUsIGVtYWlsXSk7IFxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyB1c2VycyAobmlja25hbWUsIGZ1bGxuYW1lLCBhYm91dCwgZW1haWwpIFZBTFVFUyAoJDEsICQyLCAkMyAsJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdVc2VyRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlFVRVJZXCIsIHF1ZXJ5KTtcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAvLyB9XG5cblxuICAgIGFzeW5jIHVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucywga2V5VmFsdWVzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3VzZXJzJ30sIG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcIm5pY2tuYW1lXFxcIiA9IFxcJ1wiICsgIG5pY2tuYW1lICsgXCJcXCcgUkVUVVJOSU5HICpcIjsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0LvRgdC70Y/QvdC+0LUsINC90L4g0Y3RgtC+INC90YPQttC90L4g0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINC40LzRjyDQuNC80LXQvdC90L4g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC40YHQsNC90L5cbiAgICAvKlxuICAgINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDRgdC70Y/QvdC+0LUsINC90L4g0Y3RgtC+INC90YPQttC90L4g0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMXG4gICAg0LjQvNGPINGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQv9C40YHQsNC90L4g0LIg0YLQsNCx0LvQuNGG0LUgdXNlcnMgKNC90LUg0LIg0LLQtdGA0YXQvdC10Lwg0LjQu9C4INC90LjQttC90LXQvCDRgNC10LPQuNGB0YLRgNCw0YUpXG4gICAgKi9cbiAgICBnZXRVc2VyTmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnLCBbbmlja25hbWVdKVxuICAgIH1cblxuXG59IFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlck1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBWb3RlTW9kZWwge1xuXG4gICAgdm90ZSAodm9pY2UsIHRocmVhZElkLCBuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoYElOU0VSVCBJTlRPIHZvdGVzICh2b2ljZSwgdGhyZWFkLCBuaWNrbmFtZSkgVkFMVUVTICgkMSwgJDIsICQzKSBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZVRocmVhZE5pY2tuYW1lIERPIFxuICAgICAgICBVUERBVEUgU0VUIHZvaWNlPSQxIFdIRVJFIHZvdGVzLnZvaWNlPD4kMSBSRVRVUk5JTkcgKiwgKHhtYXg6OnRleHQ6OmludCA+IDApIGFzIGV4aXN0ZWRgLCBbdm9pY2UsIHRocmVhZElkLCBuaWNrbmFtZV0pOyBcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZvdGVNb2RlbDsgXG4iLCJleHBvcnQgY29uc3QgcGdwID0gcmVxdWlyZSgncGctcHJvbWlzZScpKCk7XG5cbmNvbnN0IGRiT3B0aW9ucyA9IHtcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiA1NDMyLFxuICAgIGRhdGFiYXNlOiAnZm9ydW0nLFxuICAgIHVzZXI6ICdlcm1ha2ZvcnVtJyxcbiAgICBwYXNzd29yZDogJzEyMydcbn1cblxuY29uc3QgZGJJbnN0YW5jZSA9IHBncChkYk9wdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgZGJJbnN0YW5jZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgRm9ydW1Db250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0ZvcnVtQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IGZvcnVtUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuZm9ydW1Sb3V0ZXIucG9zdCgnL2NyZWF0ZScsIEZvcnVtQ29udHJvbGxlci5jcmVhdGVGb3J1bSk7XG5mb3J1bVJvdXRlci5wb3N0KCcvOnNsdWcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZVRocmVhZEluRm9ydW0pO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvZGV0YWlscycsIEZvcnVtQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL3RocmVhZHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0VGhyZWFkcyk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy91c2VycycsIEZvcnVtQ29udHJvbGxlci5nZXRVc2Vycyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcnVtUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgUG9zdENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBwb3N0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucG9zdFJvdXRlci5nZXQoJy86aWQvZGV0YWlscycsIFBvc3RDb250cm9sbGVyLmdldERldGFpbHMpO1xucG9zdFJvdXRlci5wb3N0KCcvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci51cGRhdGVEZXRhaWxzKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFNlcnZpY2VDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1NlcnZpY2VDb250cm9sbGVyLmpzJztcblxuY29uc3Qgc2VydmljZVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnNlcnZpY2VSb3V0ZXIuZ2V0KCcvc3RhdHVzJywgU2VydmljZUNvbnRyb2xsZXIuY291bnRBbGwpO1xuc2VydmljZVJvdXRlci5wb3N0KCcvY2xlYXInLCBTZXJ2aWNlQ29udHJvbGxlci5jbGVhckFsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBUaHJlYWRDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMnO1xuXG5jb25zdCB0aHJlYWRSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG50aHJlYWRSb3V0ZXIucG9zdCgnLzpzbHVnX29yX2lkL2NyZWF0ZScsIFRocmVhZENvbnRyb2xsZXIuY3JlYXRlUG9zdCk7XG50aHJlYWRSb3V0ZXIucG9zdCgnLzpzbHVnX29yX2lkL3ZvdGUnLCBUaHJlYWRDb250cm9sbGVyLnZvdGVGb3JUaHJlYWQpO1xudGhyZWFkUm91dGVyLmdldCgnLzpzbHVnX29yX2lkL2RldGFpbHMnLCBUaHJlYWRDb250cm9sbGVyLmdldERldGFpbHMpO1xudGhyZWFkUm91dGVyLmdldCgnLzpzbHVnX29yX2lkL3Bvc3RzJywgVGhyZWFkQ29udHJvbGxlci5nZXRQb3N0cyk7XG50aHJlYWRSb3V0ZXIucG9zdCgnLzpzbHVnX29yX2lkL2RldGFpbHMnLCBUaHJlYWRDb250cm9sbGVyLnVwZGF0ZVRocmVhZCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgdGhyZWFkUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudXNlclJvdXRlci5wb3N0KCcvOm5pY2tuYW1lL2NyZWF0ZScsIFVzZXJDb250cm9sbGVyLmNyZWF0ZVVzZXIpO1xudXNlclJvdXRlci5wb3N0KCcvOm5pY2tuYW1lL3Byb2ZpbGUnLCBVc2VyQ29udHJvbGxlci51cGRhdGVVc2VyKTtcbnVzZXJSb3V0ZXIuZ2V0KCcvOm5pY2tuYW1lL3Byb2ZpbGUnLCBVc2VyQ29udHJvbGxlci5nZXRVc2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlclJvdXRlcjsiLCJleHBvcnQgY29uc3QgaGFydmVzdENvbHVtbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IGtleXMgPSBbXVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGZvciAobGV0IHZhbHVlIG9mIE9iamVjdC52YWx1ZXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RLZXlWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IGtleVZhbHVlcyA9IHt9XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlWYWx1ZXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5VmFsdWVzO1xufVxuXG5leHBvcnQgY29uc3QgaWRUb0ludCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGFbaV0uaWQgPSBwYXJzZUludChkYXRhW2ldLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBjb25zdCB2YWxTdHIgPSBmdW5jdGlvbiAoYXJyYXlPZlBvc3RPYmplY3RzKSB7XG4gICAgbGV0IHJlc3VsdFF1ZXJ5ID0gYGA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mUG9zdE9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWVzSW5BcnJheSA9IGhhcnZlc3RWYWx1ZXMoYXJyYXlPZlBvc3RPYmplY3RzW2ldKTtcbiAgICAgICAgbGV0IHZhbCA9IGAgKGA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVzSW5BcnJheS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICBpZiAoIGogIT09IDIpIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gXCInXCIgKyB2YWx1ZXNJbkFycmF5W2pdICsgXCInXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCArPSB2YWx1ZXNJbkFycmF5W2pdO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiAhPT0gdmFsdWVzSW5BcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRRdWVyeSArPSB2YWw7XG4gICAgICAgIGlmIChpID09PSBhcnJheU9mUG9zdE9iamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCkgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRRdWVyeTtcbn1cblxuXG5leHBvcnQgY29uc3QgY29uc3RydWN0UGF0aFN0cmluZyA9IGZ1bmN0aW9uIChwYXRoQXJyYXkpIHtcbiAgICBsZXQgcmVzdWx0ID0gYHtgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBwYXRoQXJyYXlbaV07XG4gICAgICAgIGlmIChpICE9PSBwYXRoQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGAsIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9IGB9YDtcbiAgICByZXR1cm4gcmVzdWx0O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGctcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==