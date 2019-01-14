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
    var postsValues, creationDate, newPosts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, parentPost, pair, postId, path, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post;

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
              _context.next = 62;
              break;
            }

            _post = _step.value;

            if (!_post.parent) {
              _context.next = 32;
              break;
            }

            _context.prev = 13;
            _context.next = 16;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPostByIdAndThreadId(_post.parent, threadData.id);

          case 16:
            parentPost = _context.sent;

            if (parentPost) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: 'no parent posts'
            }));

          case 21:
            _post.parent = parentPost.id;

          case 22:
            _context.next = 30;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](13);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST PARENTS');
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 30:
            _context.next = 33;
            break;

          case 32:
            _post.parent = null;

          case 33:
            _context.next = 35;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPair(threadData.forum, _post.author);

          case 35:
            pair = _context.sent;
            _context.prev = 36;
            _context.next = 39;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(threadData.forum);

          case 39:
            _context.next = 47;
            break;

          case 41:
            _context.prev = 41;
            _context.t1 = _context["catch"](36);
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(_context.t1);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 47:
            _context.next = 49;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIdForPost();

          case 49:
            postId = _context.sent;
            _post.created = creationDate;
            _post.thread = threadData.id;
            _post.forum = threadData.forum;
            _post.id = parseInt(postId.nextval);
            _context.next = 56;
            return constructPathToPost(_post);

          case 56:
            path = _context.sent;
            _post.pathtopost = path;
            postsValues.push(_post);

          case 59:
            _iteratorNormalCompletion = true;
            _context.next = 10;
            break;

          case 62:
            _context.next = 68;
            break;

          case 64:
            _context.prev = 64;
            _context.t2 = _context["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 68:
            _context.prev = 68;
            _context.prev = 69;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 71:
            _context.prev = 71;

            if (!_didIteratorError) {
              _context.next = 74;
              break;
            }

            throw _iteratorError;

          case 74:
            return _context.finish(71);

          case 75:
            return _context.finish(68);

          case 76:
            // добавляем пост
            result = [];
            columns = "(author, \"message\", parent, \"created\", thread, forum, id, pathtopost)";
            valuesInStringQuery = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["valStr"])(postsValues);
            query = "INSERT INTO posts " + columns + " VALUES " + valuesInStringQuery + " RETURNING *"; // console.log('NOT HERE');

            _context.next = 82;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewPostsByQuery(query);

          case 82:
            addedPosts = _context.sent;

            if (!addedPosts) {
              _context.next = 106;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 87;

            for (_iterator2 = addedPosts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              post = _step2.value;
              post.id = parseInt(post.id);
              post.thread = parseInt(post.thread);
              post.parent = parseInt(post.parent);
              result.push(post);
            }

            _context.next = 95;
            break;

          case 91:
            _context.prev = 91;
            _context.t3 = _context["catch"](87);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t3;

          case 95:
            _context.prev = 95;
            _context.prev = 96;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 98:
            _context.prev = 98;

            if (!_didIteratorError2) {
              _context.next = 101;
              break;
            }

            throw _iteratorError2;

          case 101:
            return _context.finish(98);

          case 102:
            return _context.finish(95);

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
    }, _callee, this, [[8, 64, 68, 76], [13, 24], [36, 41], [69,, 71, 75], [87, 91, 95, 103], [96,, 98, 102]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJuZXdQb3N0cyIsImJvZHkiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwicG9zdCIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJpZCIsInBhcmVudFBvc3QiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImZvcnVtIiwiYXV0aG9yIiwicGFpciIsImluY3JlbWVudFBvc3RzIiwiZ2V0SWRGb3JQb3N0IiwicG9zdElkIiwiY3JlYXRlZCIsInRocmVhZCIsInBhcnNlSW50IiwibmV4dHZhbCIsImNvbnN0cnVjdFBhdGhUb1Bvc3QiLCJwYXRoIiwicGF0aHRvcG9zdCIsInB1c2giLCJyZXN1bHQiLCJjb2x1bW5zIiwidmFsdWVzSW5TdHJpbmdRdWVyeSIsInZhbFN0ciIsInF1ZXJ5IiwiY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IiwiYWRkZWRQb3N0cyIsImlkQXJyYXkiLCJpZFN0cmluZyIsImNvbnN0cnVjdFBhdGhTdHJpbmciLCJnZXRQYXRoVG9Qb3N0IiwicGF0aFN0cmluZyIsIkZvcnVtQ29udHJvbGxlciIsInVzZXIiLCJzbHVnIiwidGl0bGUiLCJVc2VyTW9kZWwiLCJnZXRVc2VyTmlja25hbWUiLCJuZXdGb3J1bURhdGEiLCJuaWNrbmFtZSIsImNyZWF0ZU5ld0ZvcnVtIiwiZ2V0Rm9ydW1CeVNsdWciLCJleHNpc3RpbmdGb3J1bSIsInBhcmFtcyIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImZvcnVtU2x1ZyIsImdldEZvcnVtU2x1ZyIsImtleVZhbHVlcyIsImhhcnZlc3RLZXlWYWx1ZXMiLCJoYXJ2ZXN0Q29sdW1ucyIsImkiLCJ2YWx1ZXMiLCJoYXJ2ZXN0VmFsdWVzIiwiVGhyZWFkTW9kZWwiLCJjcmVhdGVOZXdUaHJlYWQiLCJpbmNyZW1lbnRUaHJlYWRzIiwiZ2V0VGhyZWFkQnlTbHVnIiwiZXhzaXN0aW5nVGhyZWFkIiwicXVlcnlQYXJhbXMiLCJnZXRUaHJlYWRzQnlGb3J1bVNsdWciLCJpZFRvSW50IiwiZGVzYyIsImdldFVzZXJzIiwiUG9zdENvbnRyb2xsZXIiLCJnZXRQb3N0QnlJZCIsInBvc3REYXRhIiwicmVsYXRlZFRvIiwicmVsYXRlZEVudGl0aWVzIiwic3BsaXQiLCJyZWxhdGVkRW50aXR5IiwiZ2V0VXNlckJ5Tmlja25hbWUiLCJlbnRpdHkiLCJnZXRUaHJlYWRCeUlkIiwibmV3RGF0YSIsIk9iamVjdCIsInVwZGF0ZVBvc3QiLCJTZXJ2aWNlQ29udHJvbGxlciIsIlNlcnZpY2VNb2RlbCIsImNvdW50QWxsIiwiY2xlYXJBbGwiLCJlbmQiLCJUaHJlYWRDb250cm9sbGVyIiwic2x1Z09ySWQiLCJ0ZXN0IiwibWVzYWdlIiwidm9pY2VWYWx1ZSIsInZvaWNlIiwiVm90ZU1vZGVsIiwidm90ZSIsInZvdGVkRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJzb3J0IiwiZmxhdFNvcnQiLCJ0cmVlU29ydCIsInBhcmVudFRyZWVTb3J0IiwibWFwIiwicmVzUG9zdCIsInVwZGF0ZVRocmVhZCIsIlVzZXJDb250cm9sbGVyIiwiZW1haWwiLCJuZXdVc2VyRGF0YSIsImNyZWF0ZU5ld1VzZXIiLCJnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwiLCJleGlzdGluZ1VzZXIiLCJ1cGRhdGVVc2VyIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInVzZXJSb3V0ZXIiLCJmb3J1bVJvdXRlciIsInRocmVhZFJvdXRlciIsInBvc3RSb3V0ZXIiLCJzZXJ2aWNlUm91dGVyIiwiZ2V0IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZGJJbnN0YW5jZSIsIm9uZU9yTm9uZSIsInNpbmNlIiwicGdwIiwiYXMiLCJmb3JtYXQiLCJtYW55T3JOb25lIiwidG9TdHJpbmciLCJsaW1pdCIsIlBTIiwicmVxdWlyZSIsIlByZXBhcmVkU3RhdGVtZW50IiwiZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50IiwiYyIsInYiLCJvbmUiLCJ0aHJlYWRJZCIsInBhdGhTb3J0UnVsZSIsImlkU29ydFJ1bGUiLCJjb3VudCIsIm5vbmUiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsImdldE5pY2tuYW1lU3RhdGVtZW50IiwibmljayIsIm1haWwiLCJkYk9wdGlvbnMiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsIlJvdXRlciIsImNyZWF0ZUZvcnVtIiwiY3JlYXRlVGhyZWFkSW5Gb3J1bSIsImdldERldGFpbHMiLCJnZXRUaHJlYWRzIiwidXBkYXRlRGV0YWlscyIsImNyZWF0ZVBvc3QiLCJ2b3RlRm9yVGhyZWFkIiwiZ2V0UG9zdHMiLCJjcmVhdGVVc2VyIiwiZ2V0VXNlciIsImtleXMiLCJrZXkiLCJ2YWx1ZSIsImFycmF5T2ZQb3N0T2JqZWN0cyIsInJlc3VsdFF1ZXJ5IiwidmFsdWVzSW5BcnJheSIsInZhbCIsImoiLCJwYXRoQXJyYXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0o7O0FBRURGLGVBQVcsSUFBSUUsR0FBZjs7QUFDQSxRQUFJdkgsQ0FBQyxLQUFLb0gsa0JBQWtCLENBQUNsTCxNQUFuQixHQUE0QixDQUF0QyxFQUF5QztBQUNyQ21MLGlCQUFXLFFBQVg7QUFDSCxLQUZELE1BRU87QUFDSEEsaUJBQVcsU0FBWDtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsV0FBUDtBQUNILENBOUJNO0FBaUNBLElBQU03SSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVVpSixTQUFWLEVBQXFCO0FBQ3BELE1BQUkxSixNQUFNLE1BQVY7O0FBQ0EsT0FBSyxJQUFJaUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lILFNBQVMsQ0FBQ3ZMLE1BQTlCLEVBQXNDOEQsQ0FBQyxFQUF2QyxFQUEyQztBQUN2Q2pDLFVBQU0sSUFBSTBKLFNBQVMsQ0FBQ3pILENBQUQsQ0FBbkI7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLeUgsU0FBUyxDQUFDdkwsTUFBVixHQUFtQixDQUE3QixFQUFnQztBQUM1QjZCLFlBQU0sUUFBTjtBQUNIO0FBQ0o7O0FBQ0RBLFFBQU0sT0FBTjtBQUNBLFNBQU9BLE1BQVA7QUFDSCxDQVZNLEMsQ0FZUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUM5R0EsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2ZvcnVtL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgeyB2YWxTdHIsIGNvbnN0cnVjdFBhdGhTdHJpbmcgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RzTG9vcCA9IGFzeW5jIGZ1bmN0aW9uIChyZXEscmVzLCB0aHJlYWREYXRhKSB7XG4gICAgY29uc3QgcG9zdHNWYWx1ZXMgPSBbXTtcbiAgICBjb25zdCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgY29uc3QgbmV3UG9zdHMgPSByZXEuYm9keTtcblxuICAgIGlmICghbmV3UG9zdHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZChbXSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuICAgICAgICBcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUocG9zdC5hdXRob3IpO1xuICAgICAgICAvLyAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgcG9zdC5hdXRob3IgPSBhdXRob3Iubmlja25hbWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4gICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCINCyINGB0LjRgdGC0LXQvNC1IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ25vIHBhcmVudCBwb3N0cycgfSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyZW50UG9zdC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgUEFSRU5UUycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGO0LfQtdGA0LAg0LIg0YTQvtGA0YPQvCBcblxuICAgICAgICBjb25zdCBwYWlyID0gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1BBSVInLCBwYWlyKTtcbiAgICAgICAgLy8gaWYgKCFwYWlyKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJyEhISBjYW50IGZpbmQgYXV0aG9yJyB9KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vINGD0LLQtdC70LjRh9C40LLQsNC10Lwg0YHRh9C10YLRh9C40Log0L/QvtGB0YLQvtCyINCyINGE0L7RgNGD0LzQtSBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50UG9zdHModGhyZWFkRGF0YS5mb3J1bSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTSElUIEhFUkUnKTtcblxuICAgICAgICBjb25zdCBwb3N0SWQgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0SWRGb3JQb3N0KCk7XG5cbiAgICAgICAgcG9zdC5jcmVhdGVkID0gY3JlYXRpb25EYXRlO1xuICAgICAgICBwb3N0LnRocmVhZCA9IHRocmVhZERhdGEuaWQ7XG4gICAgICAgIHBvc3QuZm9ydW0gPSB0aHJlYWREYXRhLmZvcnVtO1xuICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdElkLm5leHR2YWwpO1xuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgY29uc3RydWN0UGF0aFRvUG9zdChwb3N0KTtcbiAgICAgICAgcG9zdC5wYXRodG9wb3N0ID0gcGF0aDtcbiAgICAgICAgcG9zdHNWYWx1ZXMucHVzaChwb3N0KTtcbiAgICB9XG5cbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QvtGB0YJcbiAgICBjb25zdCByZXN1bHQgPSBbXTsgXG4gICAgY29uc3QgY29sdW1ucyA9IGAoYXV0aG9yLCBcIm1lc3NhZ2VcIiwgcGFyZW50LCBcImNyZWF0ZWRcIiwgdGhyZWFkLCBmb3J1bSwgaWQsIHBhdGh0b3Bvc3QpYFxuICAgIGNvbnN0IHZhbHVlc0luU3RyaW5nUXVlcnkgPSB2YWxTdHIocG9zdHNWYWx1ZXMpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBJTlRPIHBvc3RzIGAgKyBjb2x1bW5zICsgYCBWQUxVRVMgYCArIHZhbHVlc0luU3RyaW5nUXVlcnkgKyBgIFJFVFVSTklORyAqYDtcbiAgICAvLyBjb25zb2xlLmxvZygnTk9UIEhFUkUnKTtcbiAgICBjb25zdCBhZGRlZFBvc3RzID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZU5ld1Bvc3RzQnlRdWVyeShxdWVyeSk7XG4gICAgLy8gY29uc29sZS5sb2coYWRkZWRQb3N0cyk7XG4gICAgaWYgKGFkZGVkUG9zdHMpIHtcbiAgICAgICAgZm9yIChsZXQgcG9zdCBvZiBhZGRlZFBvc3RzKSB7XG4gICAgICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICBwb3N0LnRocmVhZCA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocG9zdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgY29uc3RydWN0UGF0aFRvUG9zdCA9IGFzeW5jIGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgY29uc3QgaWRBcnJheSA9IFtdO1xuICAgIGlkQXJyYXkucHVzaChwb3N0LmlkKTtcbiAgICBjb25zdCBpZFN0cmluZyA9IGNvbnN0cnVjdFBhdGhTdHJpbmcoaWRBcnJheSk7XG4gICAgbGV0IHBhdGh0b3Bvc3Q7XG4gICAgaWYgKCFwb3N0LnBhcmVudCkge1xuICAgICAgICBwYXRodG9wb3N0ID0gcG9zdC5wYXRodG9wb3N0IHx8IGlkU3RyaW5nO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQYXRoVG9Qb3N0KHBvc3QucGFyZW50KTtcbiAgICAgICAgcGF0aC5wYXRodG9wb3N0LnB1c2gocG9zdC5pZCk7XG4gICAgICAgIGNvbnN0IHBhdGhTdHJpbmcgPSBjb25zdHJ1Y3RQYXRoU3RyaW5nKHBhdGgucGF0aHRvcG9zdCk7XG4gICAgICAgIHBhdGh0b3Bvc3QgPSBwb3N0LnBhdGh0b3Bvc3QgfHwgcGF0aFN0cmluZyB8fCBpZFN0cmluZ1xuICAgIH1cbiAgICByZXR1cm4gcGF0aHRvcG9zdDtcbn0iLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0VmFsdWVzLCBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcywgaWRUb0ludCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5cblxuXG5jbGFzcyBGb3J1bUNvbnRyb2xsZXIge1xuXG4gICAgLy8gY3JlYXRlRm9ydW0gKHJlcSwgcmVzKSB7XG5cdC8vIFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHQvLyBcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHQvLyBcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cdC8vIFx0VXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZSh1c2VyKVxuXHQvLyBcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRpZiAoZGF0YSkge1xuXHQvLyBcdFx0XHRcdHVzZXIgPSBkYXRhLm5pY2tuYW1lO1xuXHQvLyBcdFx0XHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1ZykgLy8gT1BUINC80L7QttC90L4g0LTQtdC70LDRgtGMINGB0LXQu9C10LrRgiDRgtC+0LvRjNC60L4g0LIg0YHQu9GD0YfQsNC1INC10YHQu9C4INC10YHRgtGMINC00YPQsdC70LjQutCw0YLRi1xuXHQvLyBcdFx0XHRcdFx0LnRoZW4oIGRhdGEgPT57XG5cdC8vIFx0XHRcdFx0XHRcdGlmICghZGF0YSkge1xuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0ZvcnVtRGF0YSA9IFtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdHNsdWcsXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdHVzZXJcblx0Ly8gXHRcdFx0XHRcdFx0XHRdXG5cdC8vIFx0XHRcdFx0XHRcdFx0Rm9ydW1Nb2RlbC5jcmVhdGVOZXdGb3J1bShuZXdGb3J1bURhdGEpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihkYXRhKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBGb3J1bScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihkYXRhKTtcblx0Ly8gXHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdH0pO1xuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSk7XG5cdC8vIFx0XHRcdH0gICAgICAgICAgICAgIFxuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcblx0Ly8gXHRcdH0pO1xuXHQvLyB9XG5cblxuXHRhc3luYyBjcmVhdGVGb3J1bSAocmVxLCByZXMpIHtcblx0XHRsZXQgdXNlciA9IHJlcS5ib2R5Wyd1c2VyJ107XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5ib2R5WydzbHVnJ107XG5cdFx0Y29uc3QgdGl0bGUgPSByZXEuYm9keVsndGl0bGUnXTtcblxuXHRcdHRyeSB7XG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZSh1c2VyKTtcbiAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0ZvcnVtRGF0YSA9IFtcblx0XHRcdHNsdWcsXG5cdFx0XHR0aXRsZSxcblx0XHRcdHVzZXIubmlja25hbWVcblx0XHRdXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVOZXdGb3J1bShuZXdGb3J1bURhdGEpO1xuXG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBleHNpc3RpbmdGb3J1bTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGV4c2lzdGluZ0ZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGV4c2lzdGluZ0ZvcnVtKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRcblx0Z2V0RGV0YWlscyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zylcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgZm9ydW0nIH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHQvLyBjcmVhdGVUaHJlYWRJbkZvcnVtIChyZXEsIHJlcykge1xuXHQvLyBcdGxldCBhdXRob3IgPSByZXEuYm9keVsnYXV0aG9yJ107XG5cdC8vIFx0bGV0IGZvcnVtU2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0Ly8gXHQvLyAg0LXRgdGC0Ywg0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDQvdC40LrQvtC8XG5cdC8vIFx0VXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpXG5cdC8vIFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdC8vIFx0XHRcdGlmIChkYXRhKSB7XG5cdC8vIFx0XHRcdFx0YXV0aG9yID0gZGF0YS5uaWNrbmFtZTtcblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0fSk7XG5cdFx0XHRcblx0Ly8gXHQvLyDQtdGB0YLRjCDQu9C4INGE0L7RgNGD0Lwg0LIg0LrQvtGC0L7RgNC+0Lwg0YXQvtGC0Y/RgiDRgdC+0LfQtNCw0YLRjCDQstC10YLQutGDIFxuXHQvLyBcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKGZvcnVtU2x1Zylcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHRmb3J1bVNsdWcgPSBkYXRhLnNsdWc7XG5cdC8vIFx0XHRcdFx0Ly8g0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LvQuCDQstC10YLQutCwINGBINGC0LDQutC40Lwg0L3QsNC30LLQsNC90LjQtSwg0LXRgdC70Lgg0LTQsCDRgtC+IDQwOVxuXHQvLyBcdFx0XHRcdFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhyZXEuYm9keVsnc2x1ZyddKVxuXHQvLyBcdFx0XHRcdFx0LnRoZW4oIHRocmVhZCA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdGlmICghdGhyZWFkKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvcjtcblx0Ly8gXHRcdFx0XHRcdFx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bVNsdWc7XG5cdC8vIFx0XHRcdFx0XHRcdFx0Y29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKGtleVZhbHVlcyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRpZiAoY29sdW1uc1tpXSA9PT0gJ21lc3NhZ2UnIHx8IGNvbHVtbnNbaV0gPT09ICdjcmVhdGVkJykge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb2x1bW5zW2ldID0gJ1wiJyArIGNvbHVtbnNbaV0gKyAnXCInO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSBoYXJ2ZXN0VmFsdWVzKGtleVZhbHVlcyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0VGhyZWFkTW9kZWwuY3JlYXRlTmV3VGhyZWFkKGNvbHVtbnMsIHZhbHVlcylcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC50aGVuKCBuZXdUaHJlYWQgPT4ge1xuXHRcdFx0XHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bVNsdWcsIGF1dGhvcilcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQudGhlbiggKCkgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3BhaXIgY3JlYXRlZCcpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGluZyBwYWlyJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Rm9ydW1Nb2RlbC5pbmNyZW1lbnRUaHJlYWRzKGZvcnVtU2x1Zylcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQudGhlbiggKCkgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3VGhyZWFkLmlkID0gcGFyc2VJbnQobmV3VGhyZWFkLmlkKTsgLy8gcGctcHJvbWlzZSDRgdGH0LjRgtCw0LXRgiBCSUdTRVJJQUwg0YHRgtGA0L7QutC+0Lkg0YXQtyDQv9C+0YfQtdC80YNcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdUaHJlYWQpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KTtcdFxuXHQvLyBcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdFx0XHRcdHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7IC8vIHBnLXByb21pc2Ug0YHRh9C40YLQsNC10YIgQklHU0VSSUFMINGB0YLRgNC+0LrQvtC5INGF0Lcg0L/QvtGH0LXQvNGDXG5cdC8vIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHRocmVhZCk7XG5cdC8vIFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdH0pO1xuXG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0fSk7XG5cdC8vIH1cblxuXHRhc3luYyBjcmVhdGVUaHJlYWRJbkZvcnVtIChyZXEsIHJlcykge1xuXHRcdGxldCBhdXRob3IgPSByZXEuYm9keVsnYXV0aG9yJ107XG5cdFx0bGV0IGZvcnVtU2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRsZXQgZm9ydW07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoZm9ydW1TbHVnKTtcbiAgICAgICAgICAgIGlmICghZm9ydW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXG5cblxuXHRcdGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLmJvZHkpO1xuXHRcdGtleVZhbHVlc1snYXV0aG9yJ10gPSBhdXRob3Iubmlja25hbWU7XG5cdFx0a2V5VmFsdWVzWydmb3J1bSddID0gZm9ydW0uc2x1Zztcblx0XHRcblx0XHRjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG5cdFx0XHRcdGNvbHVtbnNbaV0gPSAnXCInICsgY29sdW1uc1tpXSArICdcIic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC5jcmVhdGVOZXdUaHJlYWQoY29sdW1ucywgdmFsdWVzKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW0uc2x1ZywgYXV0aG9yLm5pY2tuYW1lKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBjcmVhdGluZyBwYWlyJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRUaHJlYWRzKGZvcnVtLnNsdWcpO1xuXHRcdFx0XHRyZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nVGhyZWFkO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcS5ib2R5WydzbHVnJ10pO1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQuaWQgPSBwYXJzZUludChleHNpc3RpbmdUaHJlYWQuaWQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhzaXN0aW5nVGhyZWFkKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHICEhISEnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuIFxuXHRcdFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdGdldFRocmVhZHMgKHJlcSwgcmVzKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuXHRcdH1cblx0XHRGb3J1bU1vZGVsLmdldEZvcnVtU2x1ZyhzbHVnKVxuXHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSl7XG5cdFx0XHRcdFx0VGhyZWFkTW9kZWwuZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnKHNsdWcsIHF1ZXJ5UGFyYW1zKVxuXHRcdFx0XHRcdFx0LnRoZW4oIGRhdGEgPT57XG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YSA9IGlkVG9JbnQoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQURTIE9GIEZPUlVNJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0XHRcdFx0fSk7XHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9KTtcdFxuXHR9XG5cblx0YXN5bmMgZ2V0VXNlcnMgKHJlcSwgcmVzKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuXHRcdH1cblx0XHRxdWVyeVBhcmFtcy5kZXNjID0gcXVlcnlQYXJhbXMuZGVzYyA9PT0gJ3RydWUnO1xuXHRcdGxldCBmb3J1bTtcblx0XHR0cnkge1xuXHRcdFx0Zm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRpZiAoIWZvcnVtKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdFx0fSBcblxuXHRcdGxldCByZXN1bHQgPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0cmVzdWx0ID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRVc2Vycyhmb3J1bS5zbHVnLCBxdWVyeVBhcmFtcyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUlMgSU4gRk9SVU0nKTtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG5cblx0fSBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Db250cm9sbGVyOyIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0VmFsdWVzLCBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcywgaWRUb0ludCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5cbmNsYXNzIFBvc3RDb250cm9sbGVyIHtcbiAgICBhc3luYyBnZXREZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSByZXEucGFyYW1zWydpZCddO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUbyA9IHJlcS5xdWVyeVsncmVsYXRlZCddO1xuICAgICAgICBsZXQgZW50aXR5O1xuICAgICAgICBpZiAocmVsYXRlZFRvKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkRW50aXRpZXMgPSByZWxhdGVkVG8uc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJlbGF0ZWRFbnRpdHkgb2YgcmVsYXRlZEVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWRFbnRpdHkgPT09ICd1c2VyJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKHBvc3REYXRhLmF1dGhvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXV0aG9yID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlbGF0ZWRFbnRpdHkgPT09ICd0aHJlYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuaWQgPSBwYXJzZUludChlbnRpdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRocmVhZCA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlbGF0ZWRFbnRpdHkgPT09ICdmb3J1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcocG9zdERhdGEuZm9ydW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mb3J1bSA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG5cbiAgICAgICAgcmVzdWx0LnBvc3QgPSBwb3N0RGF0YTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlRGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgbmV3RGF0YS5tZXNzYWdlID09PSAnJykge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHBvc3REYXRhLm1lc3NhZ2UgIT09IG5ld0RhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwudXBkYXRlUG9zdChuZXdEYXRhLm1lc3NhZ2UsIHBvc3RJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORCBQT1NUJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdjb25mbGljdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBwYXJzZUludChyZXN1bHQudGhyZWFkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFyZW50ID8gcGFyc2VJbnQocmVzdWx0LnBhcmVudCkgOiByZXN1bHQucGFyZW50OyAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdERhdGEuaWQgPSBwYXJzZUludChwb3N0RGF0YS5pZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgcG9zdERhdGEucGFyZW50ID8gcGFyc2VJbnQocG9zdERhdGEucGFyZW50KSA6IHBvc3REYXRhLnBhcmVudDsgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RDb250cm9sbGVyOyIsImltcG9ydCBTZXJ2aWNlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1NlcnZpY2VNb2RlbC5qcyc7XG5cbmNsYXNzIFNlcnZpY2VDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNvdW50QWxsIChyZXEsIHJlcykge1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBTZXJ2aWNlTW9kZWwuY291bnRBbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY2xlYXJBbGwgKHJlcSwgcmVzKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBTZXJ2aWNlTW9kZWwuY2xlYXJBbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmljZUNvbnRyb2xsZXI7IiwiaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCBWb3RlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1ZvdGVNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcyB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IGNyZWF0ZVBvc3RzTG9vcCB9IGZyb20gJy4vQ29udHJvbGxlclV0aWxzLmpzJztcblxuY2xhc3MgVGhyZWFkQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjcmVhdGVQb3N0IChyZXEsIHJlcyl7XG4gICAgICAgIGxldCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWQpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIHZvdGVGb3JUaHJlYWQgKHJlcSAscmVzKSB7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IHZvaWNlVmFsdWUgPSByZXEuYm9keS52b2ljZTtcblxuICAgICAgICBsZXQgYXV0aG9yID0gcmVxLmJvZHkubmlja25hbWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcik7XG4gICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBzbHVnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdm90ZWREYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdm90ZWREYXRhID0gYXdhaXQgVm90ZU1vZGVsLnZvdGUodm9pY2VWYWx1ZSwgdGhyZWFkLmlkLCBhdXRob3Iubmlja25hbWUpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBNQUtJTkcgVk9URScpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm90ZWREYXRhKSB7XG4gICAgICAgICAgICBpZiAodm90ZWREYXRhLmV4aXN0ZWQpIHtcbiAgICAgICAgICAgICAgICB2b3RlZERhdGEudm9pY2UgPSB2b3RlZERhdGEudm9pY2UgPT09IDEgPyB2b3RlZERhdGEudm9pY2UgKyAxIDogdm90ZWREYXRhLnZvaWNlIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC5pbmNyZW1lbnRWb3Rlc0J5SWQodGhyZWFkLmlkLCB2b3RlZERhdGEudm9pY2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBpbmNyZW1lbnRpbmcgdm90ZXMgaW4gdGhyZWFkJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZClcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQb3N0cyhyZXEsIHJlcykge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5UGFyYW1zWydkZXNjJ10gPSBxdWVyeVBhcmFtc1snZGVzYyddID09PSAndHJ1ZSc7XG4gICAgICAgIHF1ZXJ5UGFyYW1zWydzaW5jZSddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ3NpbmNlJ10pO1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdmbGF0JyB8fCAhcXVlcnlQYXJhbXMuc29ydCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwuZmxhdFNvcnQodGhyZWFkLmlkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gZmxhdCBzb3J0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAndHJlZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnRyZWVTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRyZWUgc29ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3BhcmVudF90cmVlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwucGFyZW50VHJlZVNvcnQodGhyZWFkLmlkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gcGFyZW50IHRyZWUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoIChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNQb3N0ID0ge307XG4gICAgICAgICAgICByZXNQb3N0WydhdXRob3InXSA9IHBvc3QuYXV0aG9yO1xuICAgICAgICAgICAgcmVzUG9zdFsnY3JlYXRlZCddID0gcG9zdC5jcmVhdGVkO1xuICAgICAgICAgICAgcmVzUG9zdFsnZm9ydW0nXSA9IHBvc3QuZm9ydW07XG4gICAgICAgICAgICByZXNQb3N0WydpZCddID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICByZXNQb3N0WydtZXNzYWdlJ10gPSBwb3N0Lm1lc3NhZ2U7XG4gICAgICAgICAgICByZXNQb3N0WydwYXJlbnQnXSA9IHBhcnNlSW50KHBvc3QucGFyZW50KTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3RocmVhZCddID0gcGFyc2VJbnQocG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzUG9zdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVGhyZWFkIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLnVwZGF0ZVRocmVhZCh0aHJlYWQuc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09ICdjb25mbGljdCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnYWxyZWFkeSBleGlzdGVkIGRhdGEnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZENvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcyB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgICAvLyBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgIC8vICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgLy8gICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHlbJ2VtYWlsJ107XG4gICAgLy8gICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmlja25hbWUsIGVtYWlsKVxuICAgIC8vICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBuZXdVc2VyRGF0YSA9IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxLmJvZHlbJ2Z1bGxuYW1lJ10sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXEuYm9keVsnYWJvdXQnXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlcS5ib2R5WydlbWFpbCddXG4gICAgLy8gICAgICAgICAgICAgICAgIF07XG4gICAgLy8gICAgICAgICAgICAgICAgIFVzZXJNb2RlbC5jcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihkYXRhKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZGF0YSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLIE9SIEVNQUlMJyk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vIH0gICAgXG5cbiAgICBhc3luYyBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHlbJ2VtYWlsJ107XG4gICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgICAgICAgICAgbmlja25hbWUsXG4gICAgICAgICAgICByZXEuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydhYm91dCddLFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ1VzZXI7XG4gICAgICAgICAgICB0cnkge1xuXHRcdFx0XHRleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleGlzdGluZ1VzZXIpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuXG4gICAgZ2V0VXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpXG4gICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfSAgXG5cbiAgICBcbiAgICBhc3luYyB1cGRhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBcbiAgICAgICAgLy8g0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgbGV0IHVzZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcbiAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0YXQvtGC0Y8g0LHRiyDQutCw0LrQuNC1LdGC0L4g0LTQsNC90L3Ri9C1INCx0YvQu9C4INC90LUg0L/Rg9GB0YLRi9C1XG5cbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLnVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucyxrZXlWYWx1ZXMpXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogXCJVc2VyIHdpdGggc3VjaCBuaWNrbmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMnO1xuaW1wb3J0IGZvcnVtUm91dGVyIGZyb20gJy4vcm91dGVycy9Gb3J1bVJvdXRlcy5qcyc7XG5pbXBvcnQgdGhyZWFkUm91dGVyIGZyb20gJy4vcm91dGVycy9UaHJlYWRSb3V0ZXMuanMnO1xuaW1wb3J0IHBvc3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1Bvc3RSb3V0ZXMuanMnO1xuaW1wb3J0IHNlcnZpY2VSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuXG5hcHAudXNlKCcvYXBpL3VzZXInLCB1c2VyUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvZm9ydW0nLCBmb3J1bVJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3RocmVhZCcsIHRocmVhZFJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3Bvc3QnLCBwb3N0Um91dGVyKTtcbmFwcC51c2UoJy9hcGkvc2VydmljZScsIHNlcnZpY2VSb3V0ZXIpO1xuYXBwLmdldCgnLycsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59KVxuXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIEZvcnVtTW9kZWwge1xuXG4gICAgZ2V0Rm9ydW1CeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld0ZvcnVtIChuZXdGb3J1bURhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyBmb3J1bXMgKHNsdWcsIHRpdGxlLCBcInVzZXJcIikgVkFMVUVTICgkMSwgJDIsICQzKSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3Rm9ydW1EYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ydW1TbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIHNsdWcgRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtU2x1Zywgbmlja25hbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NFQVJDSCcsZm9ydW1TbHVnLCBuaWNrbmFtZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoYElOU0VSVCBJTlRPIGZvcnVtdXNlcnMgKGZvcnVtc2x1ZywgdXNlcm5pY2tuYW1lKSBWQUxVRVMgKCQxLFxuICAgICAgICAgICAgICAgIChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMikpXG4gICAgICAgICAgICAgICAgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVfZm9ydW11c2VyX3BhaXIgRE8gTk9USElORyBSRVRVUk5JTkcgKmAsIFtmb3J1bVNsdWcsbmlja25hbWVdKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFRocmVhZHMoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBmb3J1bXMgU0VUIHRocmVhZHMgPSB0aHJlYWRzICsgMSBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWddKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRQb3N0cyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgcG9zdHMgPSBwb3N0cyArIDEgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnXSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMgKHNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGxldCBxdWVyeTtcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxIEFORCBVLm5pY2tuYW1lPiQyXG4gICAgICAgICAgICBgLFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMSBBTkQgVS5uaWNrbmFtZTwkMlxuICAgICAgICAgICAgYCwgW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxYCwgW3NsdWddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYCQxOnJhdyBcbiAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgcXVlcnkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdVLm5pY2tuYW1lIERFU0MnIDogJ1Uubmlja25hbWUgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcblxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtTW9kZWw7ICIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuY29uc3QgUFMgPSByZXF1aXJlKCdwZy1wcm9taXNlJykuUHJlcGFyZWRTdGF0ZW1lbnQ7XG5cbmNvbnN0IGdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCA9IG5ldyBQUygnZ2V0LXBvc3QnLCAnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMSBBTkQgdGhyZWFkPSQyJyk7XG5cbmNsYXNzIFBvc3RNb2RlbCB7XG4gICAgXG4gICAgY3JlYXRlTmV3UG9zdCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gcG9zdHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArICcgUkVUVVJOSU5HIConO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IChxdWVyeSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBQT1NUIE5PIEFVVEhPUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZCAoaWQsIHRocmVhZElkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQsIFtpZCwgdGhyZWFkSWRdKVxuICAgIH1cblxuICAgIGdldFBvc3RCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICBnZXRJZEZvclBvc3QgKCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoXCJTRUxFQ1QgbmV4dHZhbCgncG9zdHNfaWRfc2VxdWFuY2UnKVwiKTsgXG4gICAgfVxuXG4gICAgdXBkYXRlUG9zdCAobWVzc2FnZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgcG9zdHMgU0VUIFwiaXNFZGl0ZWRcIj1UUlVFLCBcIm1lc3NhZ2VcIj0kMSBXSEVSRSBpZD0kMiBSRVRVUk5JTkcgKicsIFttZXNzYWdlLGlkXSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aFRvUG9zdCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgXG4gICAgZmxhdFNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBpZiAoIHF1ZXJ5UGFyYW1zLnNpbmNlICkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMSBBTkQgaWQ8JDJcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxIEFORCBpZD4kMlxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmVlU29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGF0aHRvcG9zdCBERVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0ID4gKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0IDwgKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgXG4gICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBhcmVudFRyZWVTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwaWQucGFyZW50X2lkIERFU0MsIHBhdGh0b3Bvc3QgQVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgIGNvbnN0IGlkU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ2lkIERFU0MnIDogJ2lkIEFTQydcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0WzFdID4gKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdFsxXSA8IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTsgICBcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7ICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdE1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFNlcnZpY2VNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY291bnRBbGwoKSB7XG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBmb3J1bXMnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gcG9zdHMnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB0aHJlYWRzJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHVzZXJzJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogcGFyc2VJbnQoZm9ydW0uY291bnQpLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBhcnNlSW50KHBvc3QuY291bnQpLFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogcGFyc2VJbnQodGhyZWFkLmNvdW50KSxcbiAgICAgICAgICAgIFwidXNlclwiOiBwYXJzZUludCh1c2VyLmNvdW50KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xlYXJBbGwoKSB7XG5cbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBmb3J1bXMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgcG9zdHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB0aHJlYWRzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHVzZXJzIENBU0NBREUnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBmb3J1bSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwb3N0LFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogdGhyZWFkLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHVzZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVGhyZWFkTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNyZWF0ZU5ld1RocmVhZCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHRocmVhZHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArIGAgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGlkPSQxJywgW2lkXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRzQnlGb3J1bVNsdWcgKGZvcnVtU2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJ1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI+PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIjw9JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDMnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeVNsdWcgKHNsdWcsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWcsdm9pY2VdKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5SWQgKGlkLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgaWQ9JDEgUkVUVVJOSU5HIConLCBbaWQsdm9pY2VdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUaHJlYWQgKHNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3RocmVhZHMnfSxudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJzbHVnXFxcIiA9IFxcJ1wiICsgIHNsdWcgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkTW9kZWw7XG4iLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuY29uc3QgUFMgPSByZXF1aXJlKCdwZy1wcm9taXNlJykuUHJlcGFyZWRTdGF0ZW1lbnQ7XG5cblxuY29uc3QgZ2V0Tmlja25hbWVTdGF0ZW1lbnQgPSBuZXcgUFMoJ2dldC1uaWNrJywgJ1NFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJyk7XG5cblxuY2xhc3MgVXNlck1vZGVsIHtcblxuICAgIGdldFVzZXJCeU5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICAvLyBvbmVPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L3Rg9C7INC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIChuaWNrLCBtYWlsKSB7IC8vINC80L7QttC90L4g0LrQsNC6LdGC0L4g0L3QtSDQv9GA0L7RhdC+0LTQuNGC0YzRgdGPINC/0L4g0LLRgdC10Lkg0YLQsNCx0LvQuNGG0LUsINCwINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDRgtGB0Y8g0LrQsNC6INGC0L7Qu9GM0LrQviDQvdCw0YjQu9C4IDEg0LLRhdC+0LbQtNC10L3QuNC1XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gbmljayB8fCAnJztcbiAgICAgICAgY29uc3QgZW1haWwgPSBtYWlsIHx8ICcnO1xuICAgICAgICAvLyBtYW55T3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LIg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMSBPUiBlbWFpbD0kMicsIFtuaWNrbmFtZSwgZW1haWxdKTsgXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIHVzZXJzIChuaWNrbmFtZSwgZnVsbG5hbWUsIGFib3V0LCBlbWFpbCkgVkFMVUVTICgkMSwgJDIsICQzICwkNCkgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIG5ld1VzZXJEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFVTRVInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFzeW5jIHVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucywga2V5VmFsdWVzKSB7XG5cbiAgICAvLyAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUVVFUllcIiwgcXVlcnkpO1xuICAgIC8vICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIC8vIH1cblxuXG4gICAgYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDQu9GB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LjQvNGPINC40LzQtdC90L3QviDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0LjRgdCw0L3QvlxuICAgIC8qXG4gICAg0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNGB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0YxcbiAgICDQuNC80Y8g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC/0LjRgdCw0L3QviDQsiDRgtCw0LHQu9C40YbQtSB1c2VycyAo0L3QtSDQsiDQstC10YDRhdC90LXQvCDQuNC70Lgg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LDRhSlcbiAgICAqL1xuICAgIGdldFVzZXJOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGdldE5pY2tuYW1lU3RhdGVtZW50LCBbbmlja25hbWVdKVxuICAgIH1cblxuXG59IFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlck1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBWb3RlTW9kZWwge1xuXG4gICAgdm90ZSAodm9pY2UsIHRocmVhZElkLCBuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoYElOU0VSVCBJTlRPIHZvdGVzICh2b2ljZSwgdGhyZWFkLCBuaWNrbmFtZSkgVkFMVUVTICgkMSwgJDIsICQzKSBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZVRocmVhZE5pY2tuYW1lIERPIFxuICAgICAgICBVUERBVEUgU0VUIHZvaWNlPSQxIFdIRVJFIHZvdGVzLnZvaWNlPD4kMSBSRVRVUk5JTkcgKiwgKHhtYXg6OnRleHQ6OmludCA+IDApIGFzIGV4aXN0ZWRgLCBbdm9pY2UsIHRocmVhZElkLCBuaWNrbmFtZV0pOyBcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZvdGVNb2RlbDsgXG4iLCJleHBvcnQgY29uc3QgcGdwID0gcmVxdWlyZSgncGctcHJvbWlzZScpKCk7XG5cbmNvbnN0IGRiT3B0aW9ucyA9IHtcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiA1NDMyLFxuICAgIGRhdGFiYXNlOiAnZm9ydW0nLFxuICAgIHVzZXI6ICdlcm1ha2ZvcnVtJyxcbiAgICBwYXNzd29yZDogJzEyMydcbn1cblxuY29uc3QgZGJJbnN0YW5jZSA9IHBncChkYk9wdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgZGJJbnN0YW5jZTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgRm9ydW1Db250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0ZvcnVtQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IGZvcnVtUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuZm9ydW1Sb3V0ZXIucG9zdCgnL2NyZWF0ZScsIEZvcnVtQ29udHJvbGxlci5jcmVhdGVGb3J1bSk7XG5mb3J1bVJvdXRlci5wb3N0KCcvOnNsdWcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZVRocmVhZEluRm9ydW0pO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvZGV0YWlscycsIEZvcnVtQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL3RocmVhZHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0VGhyZWFkcyk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy91c2VycycsIEZvcnVtQ29udHJvbGxlci5nZXRVc2Vycyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcnVtUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgUG9zdENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBwb3N0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucG9zdFJvdXRlci5nZXQoJy86aWQvZGV0YWlscycsIFBvc3RDb250cm9sbGVyLmdldERldGFpbHMpO1xucG9zdFJvdXRlci5wb3N0KCcvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci51cGRhdGVEZXRhaWxzKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFNlcnZpY2VDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1NlcnZpY2VDb250cm9sbGVyLmpzJztcblxuY29uc3Qgc2VydmljZVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnNlcnZpY2VSb3V0ZXIuZ2V0KCcvc3RhdHVzJywgU2VydmljZUNvbnRyb2xsZXIuY291bnRBbGwpO1xuc2VydmljZVJvdXRlci5wb3N0KCcvY2xlYXInLCBTZXJ2aWNlQ29udHJvbGxlci5jbGVhckFsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBUaHJlYWRDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMnO1xuXG5jb25zdCB0aHJlYWRSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG50aHJlYWRSb3V0ZXIucG9zdCgnLzpzbHVnX29yX2lkL2NyZWF0ZScsIFRocmVhZENvbnRyb2xsZXIuY3JlYXRlUG9zdCk7XG50aHJlYWRSb3V0ZXIucG9zdCgnLzpzbHVnX29yX2lkL3ZvdGUnLCBUaHJlYWRDb250cm9sbGVyLnZvdGVGb3JUaHJlYWQpO1xudGhyZWFkUm91dGVyLmdldCgnLzpzbHVnX29yX2lkL2RldGFpbHMnLCBUaHJlYWRDb250cm9sbGVyLmdldERldGFpbHMpO1xudGhyZWFkUm91dGVyLmdldCgnLzpzbHVnX29yX2lkL3Bvc3RzJywgVGhyZWFkQ29udHJvbGxlci5nZXRQb3N0cyk7XG50aHJlYWRSb3V0ZXIucG9zdCgnLzpzbHVnX29yX2lkL2RldGFpbHMnLCBUaHJlYWRDb250cm9sbGVyLnVwZGF0ZVRocmVhZCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgdGhyZWFkUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudXNlclJvdXRlci5wb3N0KCcvOm5pY2tuYW1lL2NyZWF0ZScsIFVzZXJDb250cm9sbGVyLmNyZWF0ZVVzZXIpO1xudXNlclJvdXRlci5wb3N0KCcvOm5pY2tuYW1lL3Byb2ZpbGUnLCBVc2VyQ29udHJvbGxlci51cGRhdGVVc2VyKTtcbnVzZXJSb3V0ZXIuZ2V0KCcvOm5pY2tuYW1lL3Byb2ZpbGUnLCBVc2VyQ29udHJvbGxlci5nZXRVc2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlclJvdXRlcjsiLCJleHBvcnQgY29uc3QgaGFydmVzdENvbHVtbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IGtleXMgPSBbXVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGZvciAobGV0IHZhbHVlIG9mIE9iamVjdC52YWx1ZXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RLZXlWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IGtleVZhbHVlcyA9IHt9XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlWYWx1ZXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5VmFsdWVzO1xufVxuXG5leHBvcnQgY29uc3QgaWRUb0ludCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGFbaV0uaWQgPSBwYXJzZUludChkYXRhW2ldLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBjb25zdCB2YWxTdHIgPSBmdW5jdGlvbiAoYXJyYXlPZlBvc3RPYmplY3RzKSB7XG4gICAgLy8gbGV0IHJlc3VsdFF1ZXJ5ID0gYFdJVEggcG9zdF9hdXRob3IgQVMgKFxuICAgIC8vICAgICBTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0ke25pY2tuYW1lfVxuICAgIC8vICAgICkgYDtcbiAgICBsZXQgcmVzdWx0UXVlcnkgPSBgYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZQb3N0T2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZXNJbkFycmF5ID0gaGFydmVzdFZhbHVlcyhhcnJheU9mUG9zdE9iamVjdHNbaV0pO1xuICAgICAgICBsZXQgdmFsID0gYCAoYDtcbiAgICAgICAgdmFsICs9IGAoU0VMRUNUIG5pY2tuYW1lIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JHtgJ2AgKyB2YWx1ZXNJbkFycmF5WzBdICsgYCdgfSksIGA7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdmFsdWVzSW5BcnJheS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICBpZiAoIGogIT09IDIpIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gXCInXCIgKyB2YWx1ZXNJbkFycmF5W2pdICsgXCInXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCArPSB2YWx1ZXNJbkFycmF5W2pdO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiAhPT0gdmFsdWVzSW5BcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRRdWVyeSArPSB2YWw7XG4gICAgICAgIGlmIChpID09PSBhcnJheU9mUG9zdE9iamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCkgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApLCBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRRdWVyeTtcbn1cblxuXG5leHBvcnQgY29uc3QgY29uc3RydWN0UGF0aFN0cmluZyA9IGZ1bmN0aW9uIChwYXRoQXJyYXkpIHtcbiAgICBsZXQgcmVzdWx0ID0gYHtgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBwYXRoQXJyYXlbaV07XG4gICAgICAgIGlmIChpICE9PSBwYXRoQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGAsIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9IGB9YDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnQgY29uc3QgY29uc3RydW5jdFByZXBhcmVTdGF0ZW1lbnRWYWx1ZXMgPSBmdW5jdGlvbiAobGVuKSB7XG4vLyAgICAgbGV0IHJlc3VsdCA9IGBgO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbi8vICAgICAgICAgLy8gcmVzdWx0ICs9IGAoYDtcbi8vICAgICAgICAgLy8gZm9yIChsZXQgaiA9IDE7IGogPD0gODsgaisrKSB7XG4vLyAgICAgICAgIC8vICAgICBpZiAoaiAhPT0gOCkge1xuLy8gICAgICAgICAvLyAgICAgICAgIHJlc3VsdCArPSBgJGAgKyBgJHtqICsgaSAqIDh9LCBgO1xuLy8gICAgICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgLy8gICAgICAgICByZXN1bHQgKz0gYCRgICsgYCR7aiArIGkgKiA4fWA7XG4vLyAgICAgICAgIC8vICAgICB9XG4vLyAgICAgICAgIC8vIH1cblxuLy8gICAgICAgICAvLyBpZiAoaSAhPT0gbGVuIC0gMSkge1xuLy8gICAgICAgICAvLyAgICAgcmVzdWx0ICs9IGApLCBgO1xuLy8gICAgICAgICAvLyB9IGVsc2Uge1xuLy8gICAgICAgICAvLyAgICAgcmVzdWx0ICs9IGApIGA7XG4vLyAgICAgICAgIC8vIH1cbi8vICAgICAgICAgcmVzdWx0ICs9IGAoYDtcbi8vICAgICAgICAgaWYgKGkgIT09IGxlbiAtIDEpIHtcbi8vICAgICAgICAgICAgIHJlc3VsdCArPSBgJHtpKzF9LCBgO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgcmVzdWx0ICs9IGAke2krMX0gYDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXN1bHQgKz0gYClgO1xuLy8gICAgIH1cbi8vICAgICAvLyBjb25zb2xlLmxvZyhsZW4sIHJlc3VsdCk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnLXByb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=