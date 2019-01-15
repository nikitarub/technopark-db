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
              _context.next = 49;
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
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIdForPost();

          case 36:
            postId = _context.sent;
            _post.created = creationDate;
            _post.thread = threadData.id;
            _post.forum = threadData.forum;
            _post.id = parseInt(postId.nextval);
            _context.next = 43;
            return constructPathToPost(_post);

          case 43:
            path = _context.sent;
            _post.pathtopost = path;
            postsValues.push(_post);

          case 46:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 49:
            _context.next = 55;
            break;

          case 51:
            _context.prev = 51;
            _context.t1 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 55:
            _context.prev = 55;
            _context.prev = 56;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 58:
            _context.prev = 58;

            if (!_didIteratorError) {
              _context.next = 61;
              break;
            }

            throw _iteratorError;

          case 61:
            return _context.finish(58);

          case 62:
            return _context.finish(55);

          case 63:
            // добавляем пост
            result = [];
            columns = "(author, \"message\", parent, \"created\", thread, forum, id, pathtopost)";
            valuesInStringQuery = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["valStr"])(postsValues);
            query = "INSERT INTO posts " + columns + " VALUES " + valuesInStringQuery + " RETURNING *";
            _context.next = 69;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewPostsByQuery(query);

          case 69:
            addedPosts = _context.sent;

            if (!addedPosts) {
              _context.next = 106;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 74;

            for (_iterator2 = addedPosts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              post = _step2.value;
              post.id = parseInt(post.id);
              post.thread = parseInt(post.thread);
              post.parent = parseInt(post.parent);
              result.push(post);
            }

            _context.next = 82;
            break;

          case 78:
            _context.prev = 78;
            _context.t2 = _context["catch"](74);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t2;

          case 82:
            _context.prev = 82;
            _context.prev = 83;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 85:
            _context.prev = 85;

            if (!_didIteratorError2) {
              _context.next = 88;
              break;
            }

            throw _iteratorError2;

          case 88:
            return _context.finish(85);

          case 89:
            return _context.finish(82);

          case 90:
            _context.next = 92;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPair(threadData.forum, author);

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
    }, _callee, this, [[9, 51, 55, 63], [14, 25], [56,, 58, 62], [74, 78, 82, 90], [83,, 85, 89], [92, 97]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJuZXdQb3N0cyIsImJvZHkiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwiYXV0aG9yIiwicG9zdCIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJpZCIsInBhcmVudFBvc3QiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRJZEZvclBvc3QiLCJwb3N0SWQiLCJjcmVhdGVkIiwidGhyZWFkIiwiZm9ydW0iLCJwYXJzZUludCIsIm5leHR2YWwiLCJjb25zdHJ1Y3RQYXRoVG9Qb3N0IiwicGF0aCIsInBhdGh0b3Bvc3QiLCJwdXNoIiwicmVzdWx0IiwiY29sdW1ucyIsInZhbHVlc0luU3RyaW5nUXVlcnkiLCJ2YWxTdHIiLCJxdWVyeSIsImNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSIsImFkZGVkUG9zdHMiLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImluY3JlbWVudFBvc3RzIiwiaWRBcnJheSIsImlkU3RyaW5nIiwiY29uc3RydWN0UGF0aFN0cmluZyIsImdldFBhdGhUb1Bvc3QiLCJwYXRoU3RyaW5nIiwiRm9ydW1Db250cm9sbGVyIiwidXNlciIsInNsdWciLCJ0aXRsZSIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsIm5ld0ZvcnVtRGF0YSIsIm5pY2tuYW1lIiwiY3JlYXRlTmV3Rm9ydW0iLCJnZXRGb3J1bUJ5U2x1ZyIsImV4c2lzdGluZ0ZvcnVtIiwicGFyYW1zIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZm9ydW1TbHVnIiwiZ2V0Rm9ydW1TbHVnIiwia2V5VmFsdWVzIiwiaGFydmVzdEtleVZhbHVlcyIsImhhcnZlc3RDb2x1bW5zIiwiaSIsInZhbHVlcyIsImhhcnZlc3RWYWx1ZXMiLCJUaHJlYWRNb2RlbCIsImNyZWF0ZU5ld1RocmVhZCIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsImdldFRocmVhZHNCeUZvcnVtU2x1ZyIsImlkVG9JbnQiLCJkZXNjIiwiZ2V0VXNlcnMiLCJQb3N0Q29udHJvbGxlciIsImdldFBvc3RCeUlkIiwicG9zdERhdGEiLCJyZWxhdGVkVG8iLCJyZWxhdGVkRW50aXRpZXMiLCJzcGxpdCIsInJlbGF0ZWRFbnRpdHkiLCJnZXRVc2VyQnlOaWNrbmFtZSIsImVudGl0eSIsImdldFRocmVhZEJ5SWQiLCJuZXdEYXRhIiwiT2JqZWN0IiwidXBkYXRlUG9zdCIsIlNlcnZpY2VDb250cm9sbGVyIiwiU2VydmljZU1vZGVsIiwiY291bnRBbGwiLCJjbGVhckFsbCIsImVuZCIsIlRocmVhZENvbnRyb2xsZXIiLCJzbHVnT3JJZCIsInRlc3QiLCJtZXNhZ2UiLCJ2b2ljZVZhbHVlIiwidm9pY2UiLCJWb3RlTW9kZWwiLCJ2b3RlIiwidm90ZWREYXRhIiwiZXhpc3RlZCIsImluY3JlbWVudFZvdGVzQnlJZCIsInNvcnQiLCJmbGF0U29ydCIsInRyZWVTb3J0IiwicGFyZW50VHJlZVNvcnQiLCJtYXAiLCJyZXNQb3N0IiwidXBkYXRlVGhyZWFkIiwiVXNlckNvbnRyb2xsZXIiLCJlbWFpbCIsIm5ld1VzZXJEYXRhIiwiY3JlYXRlTmV3VXNlciIsImdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCIsImV4aXN0aW5nVXNlciIsInVwZGF0ZVVzZXIiLCJhcHAiLCJleHByZXNzIiwidXNlIiwidXNlclJvdXRlciIsImZvcnVtUm91dGVyIiwidGhyZWFkUm91dGVyIiwicG9zdFJvdXRlciIsInNlcnZpY2VSb3V0ZXIiLCJnZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJkYkluc3RhbmNlIiwib25lT3JOb25lIiwiY250Iiwic2luY2UiLCJwZ3AiLCJhcyIsImZvcm1hdCIsIm1hbnlPck5vbmUiLCJ0b1N0cmluZyIsImxpbWl0IiwiUFMiLCJyZXF1aXJlIiwiUHJlcGFyZWRTdGF0ZW1lbnQiLCJnZXRQb3N0QnlJZEFuZFRocmVhZElkU3RhdG1lbnQiLCJjIiwidiIsIm9uZSIsInRocmVhZElkIiwicGF0aFNvcnRSdWxlIiwiaWRTb3J0UnVsZSIsImNvdW50Iiwibm9uZSIsImhlbHBlcnMiLCJ1cGRhdGUiLCJ0YWJsZSIsImVtcHR5VXBkYXRlIiwiZ2V0Tmlja25hbWVTdGF0ZW1lbnQiLCJuaWNrIiwibWFpbCIsImRiT3B0aW9ucyIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiUm91dGVyIiwiY3JlYXRlRm9ydW0iLCJjcmVhdGVUaHJlYWRJbkZvcnVtIiwiZ2V0RGV0YWlscyIsImdldFRocmVhZHMiLCJ1cGRhdGVEZXRhaWxzIiwiY3JlYXRlUG9zdCIsInZvdGVGb3JUaHJlYWQiLCJnZXRQb3N0cyIsImNyZWF0ZVVzZXIiLCJnZXRVc2VyIiwia2V5cyIsImtleSIsInZhbHVlIiwiYXJyYXlPZlBvc3RPYmplY3RzIiwicmVzdWx0UXVlcnkiLCJ2YWx1ZXNJbkFycmF5IiwidmFsIiwiaiIsInBhdGhBcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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QUFmOztBQUNBLFFBQUl4SCxDQUFDLEtBQUtxSCxrQkFBa0IsQ0FBQ2xMLE1BQW5CLEdBQTRCLENBQXRDLEVBQXlDO0FBQ3JDbUwsaUJBQVcsUUFBWDtBQUNILEtBRkQsTUFFTztBQUNIQSxpQkFBVyxTQUFYO0FBQ0g7QUFDSjs7QUFDRCxTQUFPQSxXQUFQO0FBQ0gsQ0E5Qk07QUFpQ0EsSUFBTTlJLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBVWtKLFNBQVYsRUFBcUI7QUFDcEQsTUFBSTlKLE1BQU0sTUFBVjs7QUFDQSxPQUFLLElBQUlvQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEgsU0FBUyxDQUFDdkwsTUFBOUIsRUFBc0M2RCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDcEMsVUFBTSxJQUFJOEosU0FBUyxDQUFDMUgsQ0FBRCxDQUFuQjs7QUFDQSxRQUFJQSxDQUFDLEtBQUswSCxTQUFTLENBQUN2TCxNQUFWLEdBQW1CLENBQTdCLEVBQWdDO0FBQzVCeUIsWUFBTSxRQUFOO0FBQ0g7QUFDSjs7QUFDREEsUUFBTSxPQUFOO0FBQ0EsU0FBT0EsTUFBUDtBQUNILENBVk0sQyxDQVlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQzlHQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZm9ydW0vc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCB7IHZhbFN0ciwgY29uc3RydWN0UGF0aFN0cmluZyB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdHNMb29wID0gYXN5bmMgZnVuY3Rpb24gKHJlcSxyZXMsIHRocmVhZERhdGEpIHtcbiAgICBjb25zdCBwb3N0c1ZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcbiAgICBjb25zdCBuZXdQb3N0cyA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFuZXdQb3N0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRob3IgPSBuZXdQb3N0c1swXS5hdXRob3I7XG4gICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4gICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCINCyINGB0LjRgdGC0LXQvNC1IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ25vIHBhcmVudCBwb3N0cycgfSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyZW50UG9zdC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgUEFSRU5UUycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGO0LfQtdGA0LAg0LIg0YTQvtGA0YPQvCBcblxuICAgICAgICAvLyBjb25zdCBwYWlyID0gYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTsgICAgICAgIFxuICAgICAgICBjb25zdCBwb3N0SWQgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0SWRGb3JQb3N0KCk7XG4gICAgICAgIHBvc3QuY3JlYXRlZCA9IGNyZWF0aW9uRGF0ZTtcbiAgICAgICAgcG9zdC50aHJlYWQgPSB0aHJlYWREYXRhLmlkO1xuICAgICAgICBwb3N0LmZvcnVtID0gdGhyZWFkRGF0YS5mb3J1bTtcbiAgICAgICAgcG9zdC5pZCA9IHBhcnNlSW50KHBvc3RJZC5uZXh0dmFsKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGF3YWl0IGNvbnN0cnVjdFBhdGhUb1Bvc3QocG9zdCk7XG4gICAgICAgIHBvc3QucGF0aHRvcG9zdCA9IHBhdGg7XG4gICAgICAgIHBvc3RzVmFsdWVzLnB1c2gocG9zdCk7XG4gICAgfVxuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC/0L7RgdGCXG4gICAgY29uc3QgcmVzdWx0ID0gW107IFxuICAgIGNvbnN0IGNvbHVtbnMgPSBgKGF1dGhvciwgXCJtZXNzYWdlXCIsIHBhcmVudCwgXCJjcmVhdGVkXCIsIHRocmVhZCwgZm9ydW0sIGlkLCBwYXRodG9wb3N0KWBcbiAgICBjb25zdCB2YWx1ZXNJblN0cmluZ1F1ZXJ5ID0gdmFsU3RyKHBvc3RzVmFsdWVzKTtcbiAgICBjb25zdCBxdWVyeSA9IGBJTlNFUlQgSU5UTyBwb3N0cyBgICsgY29sdW1ucyArIGAgVkFMVUVTIGAgKyB2YWx1ZXNJblN0cmluZ1F1ZXJ5ICsgYCBSRVRVUk5JTkcgKmA7XG4gICAgY29uc3QgYWRkZWRQb3N0cyA9IGF3YWl0IFBvc3RNb2RlbC5jcmVhdGVOZXdQb3N0c0J5UXVlcnkocXVlcnkpO1xuICAgIGlmIChhZGRlZFBvc3RzKSB7XG4gICAgICAgIGZvciAobGV0IHBvc3Qgb2YgYWRkZWRQb3N0cykge1xuICAgICAgICAgICAgcG9zdC5pZCA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcG9zdC50aHJlYWQgPSBwYXJzZUludChwb3N0LnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0LnBhcmVudCA9IHBhcnNlSW50KHBvc3QucGFyZW50KTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBvc3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgYXV0aG9yKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50UG9zdHModGhyZWFkRGF0YS5mb3J1bSwgbmV3UG9zdHMubGVuZ3RoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoVG9Qb3N0ID0gYXN5bmMgZnVuY3Rpb24gKHBvc3QpIHtcbiAgICBjb25zdCBpZEFycmF5ID0gW107XG4gICAgaWRBcnJheS5wdXNoKHBvc3QuaWQpO1xuICAgIGNvbnN0IGlkU3RyaW5nID0gY29uc3RydWN0UGF0aFN0cmluZyhpZEFycmF5KTtcbiAgICBsZXQgcGF0aHRvcG9zdDtcbiAgICBpZiAoIXBvc3QucGFyZW50KSB7XG4gICAgICAgIHBhdGh0b3Bvc3QgPSBwb3N0LnBhdGh0b3Bvc3QgfHwgaWRTdHJpbmc7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgUG9zdE1vZGVsLmdldFBhdGhUb1Bvc3QocG9zdC5wYXJlbnQpO1xuICAgICAgICBwYXRoLnBhdGh0b3Bvc3QucHVzaChwb3N0LmlkKTtcbiAgICAgICAgY29uc3QgcGF0aFN0cmluZyA9IGNvbnN0cnVjdFBhdGhTdHJpbmcocGF0aC5wYXRodG9wb3N0KTtcbiAgICAgICAgcGF0aHRvcG9zdCA9IHBvc3QucGF0aHRvcG9zdCB8fCBwYXRoU3RyaW5nIHx8IGlkU3RyaW5nXG4gICAgfVxuICAgIHJldHVybiBwYXRodG9wb3N0O1xufSIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuXG5cbmNsYXNzIEZvcnVtQ29udHJvbGxlciB7XG5cbiAgICAvLyBjcmVhdGVGb3J1bSAocmVxLCByZXMpIHtcblx0Ly8gXHRsZXQgdXNlciA9IHJlcS5ib2R5Wyd1c2VyJ107XG5cdC8vIFx0Y29uc3Qgc2x1ZyA9IHJlcS5ib2R5WydzbHVnJ107XG5cdC8vIFx0Y29uc3QgdGl0bGUgPSByZXEuYm9keVsndGl0bGUnXTtcblx0Ly8gXHRVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHVzZXIpXG5cdC8vIFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdC8vIFx0XHRcdGlmIChkYXRhKSB7XG5cdC8vIFx0XHRcdFx0dXNlciA9IGRhdGEubmlja25hbWU7XG5cdC8vIFx0XHRcdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKSAvLyBPUFQg0LzQvtC20L3QviDQtNC10LvQsNGC0Ywg0YHQtdC70LXQutGCINGC0L7Qu9GM0LrQviDQsiDRgdC70YPRh9Cw0LUg0LXRgdC70Lgg0LXRgdGC0Ywg0LTRg9Cx0LvQuNC60LDRgtGLXG5cdC8vIFx0XHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0Ly8gXHRcdFx0XHRcdFx0aWYgKCFkYXRhKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3Rm9ydW1EYXRhID0gW1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0c2x1Zyxcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0dXNlclxuXHQvLyBcdFx0XHRcdFx0XHRcdF1cblx0Ly8gXHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmNyZWF0ZU5ld0ZvcnVtKG5ld0ZvcnVtRGF0YSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIEZvcnVtJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGRhdGEpO1xuXHQvLyBcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0fSk7XG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0cmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KTtcblx0Ly8gXHRcdFx0fSAgICAgICAgICAgICAgXG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuXHQvLyBcdFx0fSk7XG5cdC8vIH1cblxuXG5cdGFzeW5jIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHRcdGxldCB1c2VyID0gcmVxLmJvZHlbJ3VzZXInXTtcblx0XHRjb25zdCBzbHVnID0gcmVxLmJvZHlbJ3NsdWcnXTtcblx0XHRjb25zdCB0aXRsZSA9IHJlcS5ib2R5Wyd0aXRsZSddO1xuXG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHVzZXIpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Rm9ydW1EYXRhID0gW1xuXHRcdFx0c2x1Zyxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dXNlci5uaWNrbmFtZVxuXHRcdF1cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZU5ld0ZvcnVtKG5ld0ZvcnVtRGF0YSk7XG5cblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ0ZvcnVtO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nRm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhzaXN0aW5nRm9ydW0pXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFxuXHRnZXREZXRhaWxzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKVxuXHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBmb3J1bScgfSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdC8vIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdC8vIFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0Ly8gXHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHQvLyBcdC8vICDQtdGB0YLRjCDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INC90LjQutC+0Lxcblx0Ly8gXHRVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcilcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHRhdXRob3IgPSBkYXRhLm5pY2tuYW1lO1xuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHR9KTtcblx0XHRcdFxuXHQvLyBcdC8vINC10YHRgtGMINC70Lgg0YTQvtGA0YPQvCDQsiDQutC+0YLQvtGA0L7QvCDRhdC+0YLRj9GCINGB0L7Qt9C00LDRgtGMINCy0LXRgtC60YMgXG5cdC8vIFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoZm9ydW1TbHVnKVxuXHQvLyBcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRpZiAoZGF0YSkge1xuXHQvLyBcdFx0XHRcdGZvcnVtU2x1ZyA9IGRhdGEuc2x1Zztcblx0Ly8gXHRcdFx0XHQvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INCy0LXRgtC60LAg0YEg0YLQsNC60LjQvCDQvdCw0LfQstCw0L3QuNC1LCDQtdGB0LvQuCDQtNCwINGC0L4gNDA5XG5cdC8vIFx0XHRcdFx0VGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcS5ib2R5WydzbHVnJ10pXG5cdC8vIFx0XHRcdFx0XHQudGhlbiggdGhyZWFkID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0aWYgKCF0aHJlYWQpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5ib2R5KTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRrZXlWYWx1ZXNbJ2F1dGhvciddID0gYXV0aG9yO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGtleVZhbHVlc1snZm9ydW0nXSA9IGZvcnVtU2x1Zztcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbHVtbnNbaV0gPSAnXCInICsgY29sdW1uc1tpXSArICdcIic7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRUaHJlYWRNb2RlbC5jcmVhdGVOZXdUaHJlYWQoY29sdW1ucywgdmFsdWVzKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIG5ld1RocmVhZCA9PiB7XG5cdFx0XHRcdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Rm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtU2x1ZywgYXV0aG9yKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC50aGVuKCAoKSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygncGFpciBjcmVhdGVkJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW1TbHVnKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC50aGVuKCAoKSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdUaHJlYWQuaWQgPSBwYXJzZUludChuZXdUaHJlYWQuaWQpOyAvLyBwZy1wcm9taXNlINGB0YfQuNGC0LDQtdGCIEJJR1NFUklBTCDRgdGC0YDQvtC60L7QuSDRhdC3INC/0L7Rh9C10LzRg1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1RocmVhZCk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pO1x0XG5cdC8vIFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0dGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTsgLy8gcGctcHJvbWlzZSDRgdGH0LjRgtCw0LXRgiBCSUdTRVJJQUwg0YHRgtGA0L7QutC+0Lkg0YXQtyDQv9C+0YfQtdC80YNcblx0Ly8gXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24odGhyZWFkKTtcblx0Ly8gXHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0fSk7XG5cblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdGFzeW5jIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGxldCBmb3J1bTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cblxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvci5uaWNrbmFtZTtcblx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bS5zbHVnO1xuXHRcdFxuXHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bS5zbHVnLCBhdXRob3Iubmlja25hbWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW0uc2x1Zyk7XG5cdFx0XHRcdHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBleHNpc3RpbmdUaHJlYWQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSk7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZC5pZCA9IHBhcnNlSW50KGV4c2lzdGluZ1RocmVhZC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdUaHJlYWQpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcgISEhIScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gXG5cdFx0XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0Z2V0VGhyZWFkcyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKXtcblx0XHRcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRzQnlGb3J1bVNsdWcoc2x1ZywgcXVlcnlQYXJhbXMpXG5cdFx0XHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhID0gaWRUb0ludChkYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRFMgT0YgRk9SVU0nKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHRcdFx0XHR9KTtcdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1x0XG5cdH1cblxuXHRhc3luYyBnZXRVc2VycyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSc7XG5cdFx0bGV0IGZvcnVtO1xuXHRcdHRyeSB7XG5cdFx0XHRmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdGlmICghZm9ydW0pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHR9IFxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmdldFVzZXJzKGZvcnVtLnNsdWcsIHF1ZXJ5UGFyYW1zKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSUyBJTiBGT1JVTScpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcblxuXHR9IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIGFzeW5jIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRvID0gcmVxLnF1ZXJ5WydyZWxhdGVkJ107XG4gICAgICAgIGxldCBlbnRpdHk7XG4gICAgICAgIGlmIChyZWxhdGVkVG8pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRFbnRpdGllcyA9IHJlbGF0ZWRUby5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgcmVsYXRlZEVudGl0eSBvZiByZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3VzZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUocG9zdERhdGEuYXV0aG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdXRob3IgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3RocmVhZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ2ZvcnVtJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1Zyhwb3N0RGF0YS5mb3J1bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRpdHkuaWQgPSBwYXJzZUludChlbnRpdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvcnVtID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcblxuICAgICAgICByZXN1bHQucG9zdCA9IHBvc3REYXRhO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVEZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSByZXEucGFyYW1zWydpZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCBuZXdEYXRhLm1lc3NhZ2UgPT09ICcnKSB7XG4gICAgICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPyBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpIDogcG9zdERhdGEucGFyZW50OyAgICBcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocG9zdERhdGEubWVzc2FnZSAhPT0gbmV3RGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC51cGRhdGVQb3N0KG5ld0RhdGEubWVzc2FnZSwgcG9zdElkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5EIFBPU1QnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnYWxyZWFkeSBleGlzdGVkIGRhdGEnfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnRocmVhZCA9IHBhcnNlSW50KHJlc3VsdC50aHJlYWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJlbnQgPyBwYXJzZUludChyZXN1bHQucGFyZW50KSA6IHJlc3VsdC5wYXJlbnQ7ICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPyBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpIDogcG9zdERhdGEucGFyZW50OyBcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdENvbnRyb2xsZXI7IiwiaW1wb3J0IFNlcnZpY2VNb2RlbCBmcm9tICcuLi9tb2RlbHMvU2VydmljZU1vZGVsLmpzJztcblxuY2xhc3MgU2VydmljZUNvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY291bnRBbGwgKHJlcSwgcmVzKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jb3VudEFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjbGVhckFsbCAocmVxLCByZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jbGVhckFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlQ29udHJvbGxlcjsiLCJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IFZvdGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvVm90ZU1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY3JlYXRlUG9zdHNMb29wIH0gZnJvbSAnLi9Db250cm9sbGVyVXRpbHMuanMnO1xuXG5jbGFzcyBUaHJlYWRDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNyZWF0ZVBvc3QgKHJlcSwgcmVzKXtcbiAgICAgICAgbGV0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBzbHVnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlUG9zdHNMb29wKHJlcSxyZXMsIHRocmVhZCk7XG4gICAgfVxuXG4gICAgXG4gICAgYXN5bmMgdm90ZUZvclRocmVhZCAocmVxICxyZXMpIHtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3Qgdm9pY2VWYWx1ZSA9IHJlcS5ib2R5LnZvaWNlO1xuXG4gICAgICAgIGxldCBhdXRob3IgPSByZXEuYm9keS5uaWNrbmFtZTtcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgLy8gICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgLy8gICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTsgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIHNsdWcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCB2b3RlZERhdGE7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGNvbnN0IHZvdGVkRGF0YSA9IGF3YWl0IFZvdGVNb2RlbC52b3RlKHZvaWNlVmFsdWUsIHRocmVhZC5pZCwgYXV0aG9yKTtcbiAgICAgICAgLy8gaWYgKCF2b3RlZERhdGEpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZSA6ICdjYW50IGZpbmQgdXNlcid9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gTUFLSU5HIFZPVEUnKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHZvdGVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZvdGVkRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgdm90ZWREYXRhLnZvaWNlID0gdm90ZWREYXRhLnZvaWNlID09PSAxID8gdm90ZWREYXRhLnZvaWNlICsgMSA6IHZvdGVkRGF0YS52b2ljZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmluY3JlbWVudFZvdGVzQnlJZCh0aHJlYWQuaWQsIHZvdGVkRGF0YS52b2ljZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGluY3JlbWVudGluZyB2b3RlcyBpbiB0aHJlYWQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBvc3RzKHJlcSwgcmVzKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9IHF1ZXJ5UGFyYW1zWydkZXNjJ10gPT09ICd0cnVlJztcbiAgICAgICAgcXVlcnlQYXJhbXNbJ3NpbmNlJ10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snc2luY2UnXSk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ2ZsYXQnIHx8ICFxdWVyeVBhcmFtcy5zb3J0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5mbGF0U29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBmbGF0IHNvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICd0cmVlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwudHJlZVNvcnQodGhyZWFkLmlkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gdHJlZSBzb3J0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAncGFyZW50X3RyZWUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5wYXJlbnRUcmVlU29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBwYXJlbnQgdHJlZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcCggKHBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc1Bvc3QgPSB7fTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2F1dGhvciddID0gcG9zdC5hdXRob3I7XG4gICAgICAgICAgICByZXNQb3N0WydjcmVhdGVkJ10gPSBwb3N0LmNyZWF0ZWQ7XG4gICAgICAgICAgICByZXNQb3N0Wydmb3J1bSddID0gcG9zdC5mb3J1bTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2lkJ10gPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ21lc3NhZ2UnXSA9IHBvc3QubWVzc2FnZTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3BhcmVudCddID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzUG9zdFsndGhyZWFkJ10gPSBwYXJzZUludChwb3N0LnRocmVhZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNQb3N0O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUaHJlYWQgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwudXBkYXRlVGhyZWFkKHRocmVhZC5zbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkQ29udHJvbGxlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICAgIC8vIGNyZWF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgLy8gICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAvLyAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keVsnZW1haWwnXTtcbiAgICAvLyAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuaWNrbmFtZSwgZW1haWwpXG4gICAgLy8gICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmlja25hbWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXEuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlcS5ib2R5WydhYm91dCddLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxLmJvZHlbJ2VtYWlsJ11cbiAgICAvLyAgICAgICAgICAgICAgICAgXTtcbiAgICAvLyAgICAgICAgICAgICAgICAgVXNlck1vZGVsLmNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORycpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihkYXRhKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0sgT1IgRU1BSUwnKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfSAgICBcblxuICAgIGFzeW5jIGNyZWF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keVsnZW1haWwnXTtcbiAgICAgICAgY29uc3QgbmV3VXNlckRhdGEgPSBbXG4gICAgICAgICAgICBuaWNrbmFtZSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydmdWxsbmFtZSddLFxuICAgICAgICAgICAgcmVxLmJvZHlbJ2Fib3V0J10sXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV4aXN0aW5nVXNlcjtcbiAgICAgICAgICAgIHRyeSB7XG5cdFx0XHRcdGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmlja25hbWUsIGVtYWlsKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGV4aXN0aW5nVXNlcilcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLIE9SIEVNQUlMJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuXG5cbiAgICBnZXRVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSlcbiAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9ICBcblxuICAgIFxuICAgIGFzeW5jIHVwZGF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIFxuICAgICAgICAvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC60LDQutC40LUt0YLQviDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L3QtSDQv9GD0YHRgtGL0LVcblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiBcIlVzZXIgd2l0aCBzdWNoIG5pY2tuYW1lIG9yIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3JvdXRlcnMvVXNlclJvdXRlcy5qcyc7XG5pbXBvcnQgZm9ydW1Sb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL0ZvcnVtUm91dGVzLmpzJztcbmltcG9ydCB0aHJlYWRSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1RocmVhZFJvdXRlcy5qcyc7XG5pbXBvcnQgcG9zdFJvdXRlciBmcm9tICcuL3JvdXRlcnMvUG9zdFJvdXRlcy5qcyc7XG5pbXBvcnQgc2VydmljZVJvdXRlciBmcm9tICcuL3JvdXRlcnMvU2VydmljZVJvdXRlcy5qcyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC51c2UoJy9hcGkvdXNlcicsIHVzZXJSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9mb3J1bScsIGZvcnVtUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvdGhyZWFkJywgdGhyZWFkUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvcG9zdCcsIHBvc3RSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9zZXJ2aWNlJywgc2VydmljZVJvdXRlcik7XG5hcHAuZ2V0KCcvJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbn0pXG5cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgRm9ydW1Nb2RlbCB7XG5cbiAgICBnZXRGb3J1bUJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3Rm9ydW0gKG5ld0ZvcnVtRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtcyAoc2x1ZywgdGl0bGUsIFwidXNlclwiKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdGb3J1bURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3J1bVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBuaWNrbmFtZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VBUkNIJyxmb3J1bVNsdWcsIG5pY2tuYW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDEsXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQyKSlcbiAgICAgICAgICAgICAgICBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqYCwgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VGhyZWFkcyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgdGhyZWFkcyA9IHRocmVhZHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFBvc3RzKHNsdWcsIGNudCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoYFVQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqYCwgW3NsdWcsY250XSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMgKHNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGxldCBxdWVyeTtcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxIEFORCBVLm5pY2tuYW1lPiQyXG4gICAgICAgICAgICBgLFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMSBBTkQgVS5uaWNrbmFtZTwkMlxuICAgICAgICAgICAgYCwgW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxYCwgW3NsdWddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYCQxOnJhdyBcbiAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgcXVlcnkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdVLm5pY2tuYW1lIERFU0MnIDogJ1Uubmlja25hbWUgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcblxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtTW9kZWw7ICIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuY29uc3QgUFMgPSByZXF1aXJlKCdwZy1wcm9taXNlJykuUHJlcGFyZWRTdGF0ZW1lbnQ7XG5cbmNvbnN0IGdldFBvc3RCeUlkQW5kVGhyZWFkSWRTdGF0bWVudCA9IG5ldyBQUygnZ2V0LXBvc3QnLCAnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMSBBTkQgdGhyZWFkPSQyJyk7XG5cbmNsYXNzIFBvc3RNb2RlbCB7XG4gICAgXG4gICAgY3JlYXRlTmV3UG9zdCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gcG9zdHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArICcgUkVUVVJOSU5HIConO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IChxdWVyeSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gIGF3YWl0IGRiSW5zdGFuY2UubWFueU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBQT1NUIE5PIEFVVEhPUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgdHJhbnNhY3RUZXN0IChxdWVyeSlcblxuICAgIGdldFBvc3RCeUlkQW5kVGhyZWFkSWQgKGlkLCB0aHJlYWRJZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZFN0YXRtZW50LCBbaWQsIHRocmVhZElkXSlcbiAgICB9XG5cbiAgICBnZXRQb3N0QnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgZ2V0SWRGb3JQb3N0ICgpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKFwiU0VMRUNUIG5leHR2YWwoJ3Bvc3RzX2lkX3NlcXVhbmNlJylcIik7IFxuICAgIH1cblxuICAgIHVwZGF0ZVBvc3QgKG1lc3NhZ2UsIGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIHBvc3RzIFNFVCBcImlzRWRpdGVkXCI9VFJVRSwgXCJtZXNzYWdlXCI9JDEgV0hFUkUgaWQ9JDIgUkVUVVJOSU5HIConLCBbbWVzc2FnZSxpZF0pO1xuICAgIH1cblxuICAgIGdldFBhdGhUb1Bvc3QgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMScsIFtpZF0pO1xuICAgIH1cblxuICAgIFxuICAgIGZsYXRTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgaWYgKCBxdWVyeVBhcmFtcy5zaW5jZSApIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDEgQU5EIGlkPCQyXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMSBBTkQgaWQ+JDJcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJlZVNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BhdGh0b3Bvc3QgREVTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdCA+IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdCA8IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIFxuICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwYXJlbnRUcmVlU29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGlkLnBhcmVudF9pZCBERVNDLCBwYXRodG9wb3N0IEFTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICBjb25zdCBpZFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdpZCBERVNDJyA6ICdpZCBBU0MnXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdFsxXSA+IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3RbMV0gPCAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApOyAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBTZXJ2aWNlTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNvdW50QWxsKCkge1xuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gZm9ydW1zJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHBvc3RzJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdGhyZWFkcycpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB1c2VycycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IHBhcnNlSW50KGZvcnVtLmNvdW50KSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwYXJzZUludChwb3N0LmNvdW50KSxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHBhcnNlSW50KHRocmVhZC5jb3VudCksXG4gICAgICAgICAgICBcInVzZXJcIjogcGFyc2VJbnQodXNlci5jb3VudClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIGNsZWFyQWxsKCkge1xuXG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgZm9ydW1zIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHBvc3RzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdGhyZWFkcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB1c2VycyBDQVNDQURFJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogZm9ydW0sXG4gICAgICAgICAgICBcInBvc3RcIjogcG9zdCxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHRocmVhZCxcbiAgICAgICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFRocmVhZE1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjcmVhdGVOZXdUaHJlYWQgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgYyA9ICcoJzsgXG4gICAgICAgIGxldCB2ID0gJygnO1xuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyB0aHJlYWRzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyBgIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBpZD0kMScsIFtpZF0pXG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIChmb3J1bVNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSdcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPj0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI8PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzJywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlTbHVnIChzbHVnLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeUlkIChpZCwgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIGlkPSQxIFJFVFVSTklORyAqJywgW2lkLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGhyZWFkIChzbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd0aHJlYWRzJ30sbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwic2x1Z1xcXCIgPSBcXCdcIiArICBzbHVnICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZE1vZGVsO1xuIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmNvbnN0IFBTID0gcmVxdWlyZSgncGctcHJvbWlzZScpLlByZXBhcmVkU3RhdGVtZW50O1xuXG5cbmNvbnN0IGdldE5pY2tuYW1lU3RhdGVtZW50ID0gbmV3IFBTKCdnZXQtbmljaycsICdTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScpO1xuXG5cbmNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgLy8gb25lT3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90YPQuyDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEnLCBbbmlja25hbWVdKVxuICAgIH1cblxuICAgIGdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCAobmljaywgbWFpbCkgeyAvLyDQvNC+0LbQvdC+INC60LDQui3RgtC+INC90LUg0L/RgNC+0YXQvtC00LjRgtGM0YHRjyDQv9C+INCy0YHQtdC5INGC0LDQsdC70LjRhtC1LCDQsCDQvtGB0YLQsNC90LDQstC70LjQstCw0YLRgdGPINC60LDQuiDRgtC+0LvRjNC60L4g0L3QsNGI0LvQuCAxINCy0YXQvtC20LTQtdC90LjQtVxuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IG5pY2sgfHwgJyc7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gbWFpbCB8fCAnJztcbiAgICAgICAgLy8gbWFueU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyINC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbmlja25hbWU9JDEgT1IgZW1haWw9JDInLCBbbmlja25hbWUsIGVtYWlsXSk7IFxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyB1c2VycyAobmlja25hbWUsIGZ1bGxuYW1lLCBhYm91dCwgZW1haWwpIFZBTFVFUyAoJDEsICQyLCAkMyAsJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdVc2VyRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlFVRVJZXCIsIHF1ZXJ5KTtcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAvLyB9XG5cblxuICAgIGFzeW5jIHVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucywga2V5VmFsdWVzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3VzZXJzJ30sIG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcIm5pY2tuYW1lXFxcIiA9IFxcJ1wiICsgIG5pY2tuYW1lICsgXCJcXCcgUkVUVVJOSU5HICpcIjsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0LvRgdC70Y/QvdC+0LUsINC90L4g0Y3RgtC+INC90YPQttC90L4g0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINC40LzRjyDQuNC80LXQvdC90L4g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC40YHQsNC90L5cbiAgICAvKlxuICAgINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDRgdC70Y/QvdC+0LUsINC90L4g0Y3RgtC+INC90YPQttC90L4g0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMXG4gICAg0LjQvNGPINGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQv9C40YHQsNC90L4g0LIg0YLQsNCx0LvQuNGG0LUgdXNlcnMgKNC90LUg0LIg0LLQtdGA0YXQvdC10Lwg0LjQu9C4INC90LjQttC90LXQvCDRgNC10LPQuNGB0YLRgNCw0YUpXG4gICAgKi9cbiAgICBnZXRVc2VyTmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShnZXROaWNrbmFtZVN0YXRlbWVudCwgW25pY2tuYW1lXSlcbiAgICB9XG5cblxufSBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVm90ZU1vZGVsIHtcblxuICAgIGFzeW5jIHZvdGUgKHZvaWNlLCB0aHJlYWRJZCwgbmlja25hbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gdm90ZXMgKHZvaWNlLCB0aHJlYWQsIG5pY2tuYW1lKSBWQUxVRVMgKCQxLCAkMiwgKFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPScke25pY2tuYW1lfScpKSBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZVRocmVhZE5pY2tuYW1lIERPIFxuICAgICAgICAgICAgVVBEQVRFIFNFVCB2b2ljZT0kMSBXSEVSRSB2b3Rlcy52b2ljZTw+JDEgUkVUVVJOSU5HICosICh4bWF4Ojp0ZXh0OjppbnQgPiAwKSBhcyBleGlzdGVkYCwgW3ZvaWNlLCB0aHJlYWRJZF0pOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFVTRVInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVm90ZU1vZGVsOyBcbiIsImV4cG9ydCBjb25zdCBwZ3AgPSByZXF1aXJlKCdwZy1wcm9taXNlJykoKTtcblxuY29uc3QgZGJPcHRpb25zID0ge1xuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IDU0MzIsXG4gICAgZGF0YWJhc2U6ICdmb3J1bScsXG4gICAgdXNlcjogJ2VybWFrZm9ydW0nLFxuICAgIHBhc3N3b3JkOiAnMTIzJ1xufVxuXG5jb25zdCBkYkluc3RhbmNlID0gcGdwKGRiT3B0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBkYkluc3RhbmNlO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBGb3J1bUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzJztcblxuY29uc3QgZm9ydW1Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5mb3J1bVJvdXRlci5wb3N0KCcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZUZvcnVtKTtcbmZvcnVtUm91dGVyLnBvc3QoJy86c2x1Zy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlVGhyZWFkSW5Gb3J1bSk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy9kZXRhaWxzJywgRm9ydW1Db250cm9sbGVyLmdldERldGFpbHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdGhyZWFkcycsIEZvcnVtQ29udHJvbGxlci5nZXRUaHJlYWRzKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL3VzZXJzJywgRm9ydW1Db250cm9sbGVyLmdldFVzZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ydW1Sb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBQb3N0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHBvc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5wb3N0Um91dGVyLmdldCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5wb3N0Um91dGVyLnBvc3QoJy86aWQvZGV0YWlscycsIFBvc3RDb250cm9sbGVyLnVwZGF0ZURldGFpbHMpO1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Um91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBzZXJ2aWNlUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuc2VydmljZVJvdXRlci5nZXQoJy9zdGF0dXMnLCBTZXJ2aWNlQ29udHJvbGxlci5jb3VudEFsbCk7XG5zZXJ2aWNlUm91dGVyLnBvc3QoJy9jbGVhcicsIFNlcnZpY2VDb250cm9sbGVyLmNsZWFyQWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFRocmVhZENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVGhyZWFkQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHRocmVhZFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvY3JlYXRlJywgVGhyZWFkQ29udHJvbGxlci5jcmVhdGVQb3N0KTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvdm90ZScsIFRocmVhZENvbnRyb2xsZXIudm90ZUZvclRocmVhZCk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvcG9zdHMnLCBUaHJlYWRDb250cm9sbGVyLmdldFBvc3RzKTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIudXBkYXRlVGhyZWFkKTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aHJlYWRSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvY3JlYXRlJywgVXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcik7XG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xudXNlclJvdXRlci5nZXQoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLmdldFVzZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyOyIsImV4cG9ydCBjb25zdCBoYXJ2ZXN0Q29sdW1ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5cyA9IFtdXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhkYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5leHBvcnQgY29uc3QgaGFydmVzdEtleVZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5VmFsdWVzID0ge31cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleVZhbHVlc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlWYWx1ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBpZFRvSW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtpXS5pZCA9IHBhcnNlSW50KGRhdGFbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbFN0ciA9IGZ1bmN0aW9uIChhcnJheU9mUG9zdE9iamVjdHMpIHtcbiAgICAvLyBsZXQgcmVzdWx0UXVlcnkgPSBgV0lUSCBwb3N0X2F1dGhvciBBUyAoXG4gICAgLy8gICAgIFNFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSR7bmlja25hbWV9XG4gICAgLy8gICAgKSBgO1xuICAgIGxldCByZXN1bHRRdWVyeSA9IGBgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlc0luQXJyYXkgPSBoYXJ2ZXN0VmFsdWVzKGFycmF5T2ZQb3N0T2JqZWN0c1tpXSk7XG4gICAgICAgIGxldCB2YWwgPSBgIChgO1xuICAgICAgICB2YWwgKz0gYChTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0ke2AnYCArIHZhbHVlc0luQXJyYXlbMF0gKyBgJ2B9KSwgYDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB2YWx1ZXNJbkFycmF5Lmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGlmICggaiAhPT0gMikge1xuICAgICAgICAgICAgICAgIHZhbCArPSBcIidcIiArIHZhbHVlc0luQXJyYXlbal0gKyBcIidcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IHZhbHVlc0luQXJyYXlbal07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqICE9PSB2YWx1ZXNJbkFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFF1ZXJ5ICs9IHZhbDtcbiAgICAgICAgaWYgKGkgPT09IGFycmF5T2ZQb3N0T2JqZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gYCksIGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFF1ZXJ5O1xufVxuXG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RQYXRoU3RyaW5nID0gZnVuY3Rpb24gKHBhdGhBcnJheSkge1xuICAgIGxldCByZXN1bHQgPSBge2A7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHBhdGhBcnJheVtpXTtcbiAgICAgICAgaWYgKGkgIT09IHBhdGhBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYCwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gYH1gO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydCBjb25zdCBjb25zdHJ1bmN0UHJlcGFyZVN0YXRlbWVudFZhbHVlcyA9IGZ1bmN0aW9uIChsZW4pIHtcbi8vICAgICBsZXQgcmVzdWx0ID0gYGA7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuLy8gICAgICAgICAvLyByZXN1bHQgKz0gYChgO1xuLy8gICAgICAgICAvLyBmb3IgKGxldCBqID0gMTsgaiA8PSA4OyBqKyspIHtcbi8vICAgICAgICAgLy8gICAgIGlmIChqICE9PSA4KSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgcmVzdWx0ICs9IGAkYCArIGAke2ogKyBpICogOH0sIGA7XG4vLyAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAvLyAgICAgICAgIHJlc3VsdCArPSBgJGAgKyBgJHtqICsgaSAqIDh9YDtcbi8vICAgICAgICAgLy8gICAgIH1cbi8vICAgICAgICAgLy8gfVxuXG4vLyAgICAgICAgIC8vIGlmIChpICE9PSBsZW4gLSAxKSB7XG4vLyAgICAgICAgIC8vICAgICByZXN1bHQgKz0gYCksIGA7XG4vLyAgICAgICAgIC8vIH0gZWxzZSB7XG4vLyAgICAgICAgIC8vICAgICByZXN1bHQgKz0gYCkgYDtcbi8vICAgICAgICAgLy8gfVxuLy8gICAgICAgICByZXN1bHQgKz0gYChgO1xuLy8gICAgICAgICBpZiAoaSAhPT0gbGVuIC0gMSkge1xuLy8gICAgICAgICAgICAgcmVzdWx0ICs9IGAke2krMX0sIGA7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICByZXN1bHQgKz0gYCR7aSsxfSBgO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlc3VsdCArPSBgKWA7XG4vLyAgICAgfVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGxlbiwgcmVzdWx0KTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGctcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==