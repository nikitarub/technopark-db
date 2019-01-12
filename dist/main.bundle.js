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
/*! exports provided: createPostsLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostsLoop", function() { return createPostsLoop; });
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
    var postsValues, creationDate, newPosts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _post, author, parentPost, result, columns, valuesInStringQuery, query, addedPosts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, post;

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
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 104;

            for (_iterator2 = addedPosts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              post = _step2.value;
              post.id = parseInt(post.id);
              post.thread = parseInt(post.thread);
              post.parent = parseInt(post.parent);
              result.push(post);
            }

            _context.next = 112;
            break;

          case 108:
            _context.prev = 108;
            _context.t5 = _context["catch"](104);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t5;

          case 112:
            _context.prev = 112;
            _context.prev = 113;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 115:
            _context.prev = 115;

            if (!_didIteratorError2) {
              _context.next = 118;
              break;
            }

            throw _iteratorError2;

          case 118:
            return _context.finish(115);

          case 119:
            return _context.finish(112);

          case 120:
            return _context.abrupt("return", res.status(201).json(result));

          case 123:
            _context.prev = 123;
            _context.t6 = _context["catch"](94);
            console.log('--------------------------------------------');
            console.log('ERROR IN ADDING NEW POST');
            console.log(_context.t6);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 129:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 81, 85, 93], [12, 23], [30, 41], [50, 55], [61, 66], [86,, 88, 92], [94, 123], [104, 108, 112, 120], [113,, 115, 119]]);
  }));

  return function createPostsLoop(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
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
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./forum/server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./forum/server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./forum/server/models/ThreadModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/PostModel.js */ "./forum/server/models/PostModel.js");
/* harmony import */ var _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/VoteModel.js */ "./forum/server/models/VoteModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ "./forum/server/utils.js");
/* harmony import */ var _ControllerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ControllerUtils.js */ "./forum/server/controllers/ControllerUtils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_7__);
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
        var newPosts, slugOrId, thread;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const result = []
                // const creationDate = new Date();
                newPosts = req.body;
                slugOrId = req.params['slug_or_id']; // let threadData = {}
                // есть ли такая ветка в базе 
                // if (/^\d+$/.test(threadSlug)) {
                //     ThreadModel.getThreadById(parseInt(threadSlug))
                //         .then( data => {
                //             if (data) {
                //                 threadData = data;
                //                 createPostsLoop(req,res, threadData);
                //             } else {
                //                 return res.status(404).json({ message : 'cant find thread' });
                //             }
                //         })  
                //         .catch( error => {
                //             console.log('--------------------------------------------');
                //             console.log('ERROR IN GETTING THREAD BY ID');
                //             console.log(error);
                //             return res.status(500).json({ message : "crash" });
                //         });
                // } else {
                //     ThreadModel.getThreadBySlug(threadSlug)
                //         .then( data => {
                //             if (data) {
                //                 threadData = data;
                //                 createPostsLoop(req,res, threadData);
                //             } else {
                //                 return res.status(404).json({ message : 'cant find thread' });                    
                //             }
                //         }) 
                //         .catch( error => {
                //             console.log('--------------------------------------------');
                //             console.log(error);
                //             console.log('ERROR IN GETTING THREAD BY SLUG');
                //             return res.status(500).json({ message : "crash" });
                //         });
                // }

                if (!/^\d+$/.test(slugOrId)) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadById(parseInt(slugOrId));

              case 6:
                thread = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                console.log('--------------------------------------------');
                console.log(_context.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 15:
                _context.next = 29;
                break;

              case 17:
                _context.prev = 17;
                _context.next = 20;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(slugOrId);

              case 20:
                thread = _context.sent;
                _context.next = 29;
                break;

              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](17);
                console.log('--------------------------------------------');
                console.log(_context.t1);
                console.log('ERROR IN GETTING THREAD BY slug');
                return _context.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 29:
                if (thread) {
                  _context.next = 31;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 31:
                Object(_ControllerUtils_js__WEBPACK_IMPORTED_MODULE_6__["createPostsLoop"])(req, res, thread); // если было прислано 0 постов

                if (newPosts.length) {
                  _context.next = 34;
                  break;
                }

                return _context.abrupt("return", res.status(201).json(newPosts));

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9], [17, 23]]);
      }));

      function createPost(_x, _x2) {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }()
  }, {
    key: "voteForThread",
    value: function voteForThread(req, res) {
      var initVoteData = req.body;
      var threadSlug = req.params['slug_or_id'];
      _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserByNickname(initVoteData.nickname).then(function (user) {
        if (user) {
          // есть ли такая ветка в базе 
          if (/^\d+$/.test(threadSlug)) {
            _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadById(parseInt(threadSlug)).then(function (thread) {
              if (thread) {
                _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_4__["default"].vote(initVoteData.voice, thread.id, user.nickname).then(function (voteData) {
                  if (voteData) {
                    var voice = voteData.voice;

                    if (voteData.existed) {
                      voice = voice === 1 ? voice + 1 : voice - 1;
                    }

                    _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].incrementVotesById(thread.id, voice).then(function (updateThread) {
                      updateThread.id = parseInt(updateThread.id);
                      return res.status(200).json(updateThread);
                    }).catch(function (error) {
                      console.log('--------------------------------------------');
                      console.log('*** ERROR IN UPDATING THREAD VOTES');
                      console.log(error);
                      return res.status(500).json({
                        message: "crash"
                      });
                    });
                  } else {
                    thread.id = parseInt(thread.id);
                    return res.status(200).json(thread);
                  }
                }).catch(function (error) {
                  console.log('--------------------------------------------');
                  console.log('ERROR IN MAKING VOTE');
                  console.log(error);
                  return res.status(500).json({
                    message: "crash"
                  });
                });
              } else {
                return res.status(404).json({
                  message: 'cant find thread'
                });
              }
            }).catch(function (error) {
              console.log('--------------------------------------------');
              console.log('ERROR IN GETTING THREAD BY ID');
              console.log(error);
              return res.status(500).json({
                message: "crash"
              });
            });
          } else {
            _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(threadSlug).then(function (thread) {
              if (thread) {
                _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_4__["default"].vote(initVoteData.voice, thread.id, user.nickname).then(function (voteData) {
                  if (voteData) {
                    var voice = voteData.voice;

                    if (voteData.existed) {
                      voice = voice === 1 ? voice + 1 : voice - 1;
                    }

                    _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].incrementVotesBySlug(thread.slug, voice).then(function (updateThread) {
                      updateThread.id = parseInt(updateThread.id);
                      return res.status(200).json(updateThread);
                    }).catch(function (error) {
                      console.log('--------------------------------------------');
                      console.log('ERROR IN UPDATING THREAD VOTES');
                      console.log(error);
                      return res.status(500).json({
                        message: "crash"
                      });
                    });
                  } else {
                    thread.id = parseInt(thread.id);
                    return res.status(200).json(thread);
                  }
                }).catch(function (error) {
                  console.log('--------------------------------------------');
                  console.log('ERROR IN MAKING VOTE');
                  console.log(error);
                  return res.status(500).json({
                    message: "crash"
                  });
                });
              } else {
                return res.status(404).json({
                  message: 'cant find thread'
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
        } else {
          return res.status(404).json({
            message: 'cant find author'
          });
        }
      });
    }
  }, {
    key: "getDetails",
    value: function getDetails(req, res) {
      var slugOrId = req.params['slug_or_id'];

      if (/^\d+$/.test(slugOrId)) {
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadById(parseInt(slugOrId)).then(function (thread) {
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
        _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(slugOrId).then(function (thread) {
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
      regeneratorRuntime.mark(function _callee2(req, res) {
        var queryParams, result, slugOrId, thread;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryParams = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["harvestKeyValues"])(req.query);
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
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 7;
                _context2.next = 10;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadById(parseInt(slugOrId));

              case 10:
                thread = _context2.sent;
                _context2.next = 19;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](7);
                console.log('--------------------------------------------');
                console.log(_context2.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 19:
                _context2.next = 33;
                break;

              case 21:
                _context2.prev = 21;
                _context2.next = 24;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(slugOrId);

              case 24:
                thread = _context2.sent;
                _context2.next = 33;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t1 = _context2["catch"](21);
                console.log('--------------------------------------------');
                console.log(_context2.t1);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 33:
                if (thread) {
                  _context2.next = 35;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 35:
                if (!(queryParams.sort === 'flat' || !queryParams.sort)) {
                  _context2.next = 50;
                  break;
                }

                _context2.prev = 36;
                _context2.next = 39;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].flatSort(thread.id, queryParams);

              case 39:
                result = _context2.sent;
                _context2.next = 48;
                break;

              case 42:
                _context2.prev = 42;
                _context2.t2 = _context2["catch"](36);
                console.log('--------------------------------------------');
                console.log(_context2.t2);
                console.log('ERROR IN flat sort');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 48:
                _context2.next = 78;
                break;

              case 50:
                if (!(queryParams.sort === 'tree')) {
                  _context2.next = 65;
                  break;
                }

                _context2.prev = 51;
                _context2.next = 54;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].treeSort(thread.id, queryParams);

              case 54:
                result = _context2.sent;
                _context2.next = 63;
                break;

              case 57:
                _context2.prev = 57;
                _context2.t3 = _context2["catch"](51);
                console.log('--------------------------------------------');
                console.log(_context2.t3);
                console.log('ERROR IN tree sort');
                return _context2.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 63:
                _context2.next = 78;
                break;

              case 65:
                if (!(queryParams.sort === 'parent_tree')) {
                  _context2.next = 78;
                  break;
                }

                _context2.prev = 66;
                _context2.next = 69;
                return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__["default"].parentTreeSort(thread.id, queryParams);

              case 69:
                result = _context2.sent;
                _context2.next = 78;
                break;

              case 72:
                _context2.prev = 72;
                _context2.t4 = _context2["catch"](66);
                console.log('--------------------------------------------');
                console.log(_context2.t4);
                console.log('ERROR IN parent tree');
                return _context2.abrupt("return", res.status(500).json({
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
                return _context2.abrupt("return", res.status(200).json(result));

              case 80:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 13], [21, 27], [36, 42], [51, 57], [66, 72]]);
      }));

      function getPosts(_x3, _x4) {
        return _getPosts.apply(this, arguments);
      }

      return getPosts;
    }()
  }, {
    key: "updateThread",
    value: function () {
      var _updateThread = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var slugOrId, newData, keyValues, columns, thread, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                slugOrId = req.params['slug_or_id'];
                newData = req.body;
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["harvestKeyValues"])(newData);
                columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["harvestColumns"])(newData);

                if (!/^\d+$/.test(slugOrId)) {
                  _context3.next = 19;
                  break;
                }

                _context3.prev = 5;
                _context3.next = 8;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadById(parseInt(slugOrId));

              case 8:
                thread = _context3.sent;
                _context3.next = 17;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](5);
                console.log('--------------------------------------------');
                console.log(_context3.t0);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 17:
                _context3.next = 31;
                break;

              case 19:
                _context3.prev = 19;
                _context3.next = 22;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getThreadBySlug(slugOrId);

              case 22:
                thread = _context3.sent;
                _context3.next = 31;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3["catch"](19);
                console.log('--------------------------------------------');
                console.log(_context3.t1);
                console.log('ERROR IN GETTING THREAD BY ID');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 31:
                if (thread) {
                  _context3.next = 33;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  mesage: 'cant find thread'
                }));

              case 33:
                if (!(!Object.values(newData).length || !columns.length)) {
                  _context3.next = 36;
                  break;
                }

                thread.id = parseInt(thread.id);
                return _context3.abrupt("return", res.status(200).json(thread));

              case 36:
                _context3.prev = 36;
                _context3.next = 39;
                return _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateThread(thread.slug, columns, keyValues);

              case 39:
                result = _context3.sent;
                _context3.next = 48;
                break;

              case 42:
                _context3.prev = 42;
                _context3.t2 = _context3["catch"](36);
                console.log('--------------------------------------------');
                console.log(_context3.t2);
                console.log('ERROR IN UPDATING THREAD');
                return _context3.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 48:
                if (!(result === 'conflict')) {
                  _context3.next = 52;
                  break;
                }

                return _context3.abrupt("return", res.status(409).json({
                  message: 'already existed data'
                }));

              case 52:
                result.id = parseInt(result.id);
                return _context3.abrupt("return", res.status(200).json(result));

              case 54:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 11], [19, 25], [36, 42]]);
      }));

      function updateThread(_x5, _x6) {
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
/*! exports provided: harvestColumns, harvestValues, harvestKeyValues, idToInt, valStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestColumns", function() { return harvestColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestValues", function() { return harvestValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "harvestKeyValues", function() { return harvestKeyValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idToInt", function() { return idToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valStr", function() { return valStr; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicG9zdHNWYWx1ZXMiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJuZXdQb3N0cyIsImJvZHkiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwicG9zdCIsIlVzZXJNb2RlbCIsImdldFVzZXJOaWNrbmFtZSIsImF1dGhvciIsImpzb24iLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIiwicGFyZW50IiwiUG9zdE1vZGVsIiwiZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZCIsImlkIiwicGFyZW50UG9zdCIsIkZvcnVtTW9kZWwiLCJjcmVhdGVGb3J1bVVzZXJQYWlyIiwiZm9ydW0iLCJpbmNyZW1lbnRQb3N0cyIsImNyZWF0ZWQiLCJ0aHJlYWQiLCJwdXNoIiwicmVzdWx0IiwiY29sdW1ucyIsInZhbHVlc0luU3RyaW5nUXVlcnkiLCJ2YWxTdHIiLCJxdWVyeSIsImNyZWF0ZU5ld1Bvc3RzQnlRdWVyeSIsImFkZGVkUG9zdHMiLCJwYXJzZUludCIsIkZvcnVtQ29udHJvbGxlciIsInVzZXIiLCJzbHVnIiwidGl0bGUiLCJuZXdGb3J1bURhdGEiLCJjcmVhdGVOZXdGb3J1bSIsImdldEZvcnVtQnlTbHVnIiwiZXhzaXN0aW5nRm9ydW0iLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmb3J1bVNsdWciLCJnZXRGb3J1bVNsdWciLCJrZXlWYWx1ZXMiLCJoYXJ2ZXN0S2V5VmFsdWVzIiwiaGFydmVzdENvbHVtbnMiLCJpIiwidmFsdWVzIiwiaGFydmVzdFZhbHVlcyIsIlRocmVhZE1vZGVsIiwiY3JlYXRlTmV3VGhyZWFkIiwiaW5jcmVtZW50VGhyZWFkcyIsImdldFRocmVhZEJ5U2x1ZyIsImV4c2lzdGluZ1RocmVhZCIsInF1ZXJ5UGFyYW1zIiwiZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIiwiaWRUb0ludCIsImRlc2MiLCJnZXRVc2VycyIsIlBvc3RDb250cm9sbGVyIiwicG9zdElkIiwiZ2V0UG9zdEJ5SWQiLCJwb3N0RGF0YSIsInJlbGF0ZWRUbyIsInJlbGF0ZWRFbnRpdGllcyIsInNwbGl0IiwicmVsYXRlZEVudGl0eSIsImdldFVzZXJCeU5pY2tuYW1lIiwiZW50aXR5IiwiZ2V0VGhyZWFkQnlJZCIsIm5ld0RhdGEiLCJPYmplY3QiLCJ1cGRhdGVQb3N0IiwiU2VydmljZUNvbnRyb2xsZXIiLCJTZXJ2aWNlTW9kZWwiLCJjb3VudEFsbCIsImNsZWFyQWxsIiwiZW5kIiwiVGhyZWFkQ29udHJvbGxlciIsInNsdWdPcklkIiwidGVzdCIsIm1lc2FnZSIsImluaXRWb3RlRGF0YSIsInRocmVhZFNsdWciLCJWb3RlTW9kZWwiLCJ2b3RlIiwidm9pY2UiLCJ2b3RlRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJ1cGRhdGVUaHJlYWQiLCJpbmNyZW1lbnRWb3Rlc0J5U2x1ZyIsInNvcnQiLCJmbGF0U29ydCIsInRyZWVTb3J0IiwicGFyZW50VHJlZVNvcnQiLCJtYXAiLCJyZXNQb3N0IiwiVXNlckNvbnRyb2xsZXIiLCJlbWFpbCIsIm5ld1VzZXJEYXRhIiwiY3JlYXRlTmV3VXNlciIsImdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbCIsImV4aXN0aW5nVXNlciIsInVwZGF0ZVVzZXIiLCJhcHAiLCJleHByZXNzIiwidXNlIiwidXNlclJvdXRlciIsImZvcnVtUm91dGVyIiwidGhyZWFkUm91dGVyIiwicG9zdFJvdXRlciIsInNlcnZpY2VSb3V0ZXIiLCJnZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJkYkluc3RhbmNlIiwib25lT3JOb25lIiwic2luY2UiLCJwZ3AiLCJhcyIsImZvcm1hdCIsIm1hbnlPck5vbmUiLCJ0b1N0cmluZyIsImxpbWl0IiwiYyIsInYiLCJvbmUiLCJ0aHJlYWRJZCIsInBhdGhTb3J0UnVsZSIsImlkU29ydFJ1bGUiLCJjb3VudCIsIm5vbmUiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsIm5pY2siLCJtYWlsIiwicmVxdWlyZSIsImRiT3B0aW9ucyIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiUm91dGVyIiwiY3JlYXRlRm9ydW0iLCJjcmVhdGVUaHJlYWRJbkZvcnVtIiwiZ2V0RGV0YWlscyIsImdldFRocmVhZHMiLCJ1cGRhdGVEZXRhaWxzIiwiY3JlYXRlUG9zdCIsInZvdGVGb3JUaHJlYWQiLCJnZXRQb3N0cyIsImNyZWF0ZVVzZXIiLCJnZXRVc2VyIiwia2V5cyIsImtleSIsInZhbHVlIiwiYXJyYXlPZlBvc3RPYmplY3RzIiwicmVzdWx0UXVlcnkiLCJ2YWx1ZXNJbkFycmF5IiwidmFsIiwiaiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FB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Q0EsUUFBSXNILEdBQUcsT0FBUDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLGFBQWEsQ0FBQ3ZLLE1BQWxDLEVBQTBDeUssQ0FBQyxFQUEzQyxFQUErQztBQUUzQyxVQUFLQSxDQUFDLEtBQUssQ0FBWCxFQUFjO0FBQ1ZELFdBQUcsSUFBSSxNQUFNRCxhQUFhLENBQUNFLENBQUQsQ0FBbkIsR0FBeUIsR0FBaEM7QUFDSCxPQUZELE1BRU87QUFDSEQsV0FBRyxJQUFJRCxhQUFhLENBQUNFLENBQUQsQ0FBcEI7QUFFSDs7QUFDRCxVQUFJQSxDQUFDLEtBQUtGLGFBQWEsQ0FBQ3ZLLE1BQWQsR0FBdUIsQ0FBakMsRUFBb0M7QUFDaEN3SyxXQUFHLElBQUksSUFBUDtBQUNIO0FBQ0o7O0FBRURGLGVBQVcsSUFBSUUsR0FBZjs7QUFDQSxRQUFJdEgsQ0FBQyxLQUFLbUgsa0JBQWtCLENBQUNySyxNQUFuQixHQUE0QixDQUF0QyxFQUF5QztBQUNyQ3NLLGlCQUFXLFFBQVg7QUFDSCxLQUZELE1BRU87QUFDSEEsaUJBQVcsU0FBWDtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsV0FBUDtBQUNILENBMUJNLEM7Ozs7Ozs7Ozs7O0FDdENQLDJDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mb3J1bS9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHsgdmFsU3RyIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0c0xvb3AgPSBhc3luYyBmdW5jdGlvbiAocmVxLHJlcywgdGhyZWFkRGF0YSkge1xuICAgIGNvbnN0IHBvc3RzVmFsdWVzID0gW107XG4gICAgY29uc3QgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgIGNvbnN0IG5ld1Bvc3RzID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIW5ld1Bvc3RzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoW10pO1xuICAgIH1cblxuICAgIGZvciAobGV0IHBvc3Qgb2YgbmV3UG9zdHMpIHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHBvc3QuYXV0aG9yKTtcbiAgICAgICAgICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc3QuYXV0aG9yID0gYXV0aG9yLm5pY2tuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C7INC/0LXRgNC10LTQsNC9IGlkINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQv9C+0YHRglxuICAgICAgICBpZiAocG9zdC5wYXJlbnQpIHtcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQtdGB0YLRjCDQu9C4INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQv9C+0YHRgiDQsiDRgdC40YHRgtC10LzQtSBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50UG9zdCA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZEFuZFRocmVhZElkKHBvc3QucGFyZW50LCB0aHJlYWREYXRhLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdubyBwYXJlbnQgcG9zdHMnIH0pOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3N0LnBhcmVudCA9IHBhcmVudFBvc3QuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIFBBUkVOVFMnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRjtC30LXRgNCwINCyINGE0L7RgNGD0LwgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUiBGT1JVTSBQQUlSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQv9C+0YHRgtC+0LIg0LIg0YTQvtGA0YPQvNC1IFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5pbmNyZW1lbnRQb3N0cyh0aHJlYWREYXRhLmZvcnVtKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBwb3N0LmNyZWF0ZWQgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIHBvc3QudGhyZWFkID0gdGhyZWFkRGF0YS5pZDtcbiAgICAgICAgcG9zdC5mb3J1bSA9IHRocmVhZERhdGEuZm9ydW07XG4gICAgICAgIHBvc3RzVmFsdWVzLnB1c2gocG9zdCk7XG4gICAgfVxuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC/0L7RgdGCXG4gICAgY29uc3QgcmVzdWx0ID0gW107IFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBgKGF1dGhvciwgXCJtZXNzYWdlXCIsIHBhcmVudCwgXCJjcmVhdGVkXCIsIHRocmVhZCwgZm9ydW0pYFxuICAgICAgICBjb25zdCB2YWx1ZXNJblN0cmluZ1F1ZXJ5ID0gdmFsU3RyKHBvc3RzVmFsdWVzKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgSU5TRVJUIElOVE8gcG9zdHMgYCArIGNvbHVtbnMgKyBgIFZBTFVFUyBgICsgdmFsdWVzSW5TdHJpbmdRdWVyeSArIGAgUkVUVVJOSU5HICpgO1xuXG4gICAgICAgIGNvbnN0IGFkZGVkUG9zdHMgPSBhd2FpdCBQb3N0TW9kZWwuY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgZm9yIChsZXQgcG9zdCBvZiBhZGRlZFBvc3RzKSB7XG4gICAgICAgICAgICBwb3N0LmlkID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICBwb3N0LnRocmVhZCA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocG9zdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBBRERJTkcgTkVXIFBPU1QnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5cblxuY2xhc3MgRm9ydW1Db250cm9sbGVyIHtcblxuICAgIC8vIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHQvLyBcdGxldCB1c2VyID0gcmVxLmJvZHlbJ3VzZXInXTtcblx0Ly8gXHRjb25zdCBzbHVnID0gcmVxLmJvZHlbJ3NsdWcnXTtcblx0Ly8gXHRjb25zdCB0aXRsZSA9IHJlcS5ib2R5Wyd0aXRsZSddO1xuXHQvLyBcdFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcilcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHR1c2VyID0gZGF0YS5uaWNrbmFtZTtcblx0Ly8gXHRcdFx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpIC8vIE9QVCDQvNC+0LbQvdC+INC00LXQu9Cw0YLRjCDRgdC10LvQtdC60YIg0YLQvtC70YzQutC+INCyINGB0LvRg9GH0LDQtSDQtdGB0LvQuCDQtdGB0YLRjCDQtNGD0LHQu9C40LrQsNGC0Ytcblx0Ly8gXHRcdFx0XHRcdC50aGVuKCBkYXRhID0+e1xuXHQvLyBcdFx0XHRcdFx0XHRpZiAoIWRhdGEpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRzbHVnLFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR1c2VyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XVxuXHQvLyBcdFx0XHRcdFx0XHRcdEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZGF0YSk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgRm9ydW0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZGF0YSk7XG5cdC8vIFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHR9KTtcblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pO1xuXHQvLyBcdFx0XHR9ICAgICAgICAgICAgICBcblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cblx0YXN5bmMgY3JlYXRlRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdFx0XHRzbHVnLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR1c2VyLm5pY2tuYW1lXG5cdFx0XVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKTtcblxuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XG5cdGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGZvcnVtJyB9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSk7XG5cblxuXHR9XG5cblx0Ly8gY3JlYXRlVGhyZWFkSW5Gb3J1bSAocmVxLCByZXMpIHtcblx0Ly8gXHRsZXQgYXV0aG9yID0gcmVxLmJvZHlbJ2F1dGhvciddO1xuXHQvLyBcdGxldCBmb3J1bVNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdC8vIFx0Ly8gINC10YHRgtGMINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0L3QuNC60L7QvFxuXHQvLyBcdFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUoYXV0aG9yKVxuXHQvLyBcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRpZiAoZGF0YSkge1xuXHQvLyBcdFx0XHRcdGF1dGhvciA9IGRhdGEubmlja25hbWU7XG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdH0pO1xuXHRcdFx0XG5cdC8vIFx0Ly8g0LXRgdGC0Ywg0LvQuCDRhNC+0YDRg9C8INCyINC60L7RgtC+0YDQvtC8INGF0L7RgtGP0YIg0YHQvtC30LTQsNGC0Ywg0LLQtdGC0LrRgyBcblx0Ly8gXHRGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpXG5cdC8vIFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdC8vIFx0XHRcdGlmIChkYXRhKSB7XG5cdC8vIFx0XHRcdFx0Zm9ydW1TbHVnID0gZGF0YS5zbHVnO1xuXHQvLyBcdFx0XHRcdC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0LLQtdGC0LrQsCDRgSDRgtCw0LrQuNC8INC90LDQt9Cy0LDQvdC40LUsINC10YHQu9C4INC00LAg0YLQviA0MDlcblx0Ly8gXHRcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSlcblx0Ly8gXHRcdFx0XHRcdC50aGVuKCB0aHJlYWQgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRpZiAoIXRocmVhZCkge1xuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLmJvZHkpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGtleVZhbHVlc1snYXV0aG9yJ10gPSBhdXRob3I7XG5cdC8vIFx0XHRcdFx0XHRcdFx0a2V5VmFsdWVzWydmb3J1bSddID0gZm9ydW1TbHVnO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHQudGhlbiggbmV3VGhyZWFkID0+IHtcblx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBhdXRob3IpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oICgpID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdwYWlyIGNyZWF0ZWQnKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gY3JlYXRpbmcgcGFpcicpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdEZvcnVtTW9kZWwuaW5jcmVtZW50VGhyZWFkcyhmb3J1bVNsdWcpXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oICgpID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1RocmVhZC5pZCA9IHBhcnNlSW50KG5ld1RocmVhZC5pZCk7IC8vIHBnLXByb21pc2Ug0YHRh9C40YLQsNC10YIgQklHU0VSSUFMINGB0YLRgNC+0LrQvtC5INGF0Lcg0L/QvtGH0LXQvNGDXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3VGhyZWFkKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSk7XHRcblx0Ly8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHR0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpOyAvLyBwZy1wcm9taXNlINGB0YfQuNGC0LDQtdGCIEJJR1NFUklBTCDRgdGC0YDQvtC60L7QuSDRhdC3INC/0L7Rh9C10LzRg1xuXHQvLyBcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih0aHJlYWQpO1xuXHQvLyBcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHR9KTtcblxuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdH0pO1xuXHQvLyB9XG5cblx0YXN5bmMgY3JlYXRlVGhyZWFkSW5Gb3J1bSAocmVxLCByZXMpIHtcblx0XHRsZXQgYXV0aG9yID0gcmVxLmJvZHlbJ2F1dGhvciddO1xuXHRcdGxldCBmb3J1bVNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0bGV0IGZvcnVtO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcik7XG4gICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdHRyeSB7XG4gICAgICAgICAgICBmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKGZvcnVtU2x1Zyk7XG4gICAgICAgICAgICBpZiAoIWZvcnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblxuXG5cblx0XHRjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5ib2R5KTtcblx0XHRrZXlWYWx1ZXNbJ2F1dGhvciddID0gYXV0aG9yLm5pY2tuYW1lO1xuXHRcdGtleVZhbHVlc1snZm9ydW0nXSA9IGZvcnVtLnNsdWc7XG5cdFx0XG5cdFx0Y29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKGtleVZhbHVlcyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY29sdW1uc1tpXSA9PT0gJ21lc3NhZ2UnIHx8IGNvbHVtbnNbaV0gPT09ICdjcmVhdGVkJykge1xuXHRcdFx0XHRjb2x1bW5zW2ldID0gJ1wiJyArIGNvbHVtbnNbaV0gKyAnXCInO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCB2YWx1ZXMgPSBoYXJ2ZXN0VmFsdWVzKGtleVZhbHVlcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwuY3JlYXRlTmV3VGhyZWFkKGNvbHVtbnMsIHZhbHVlcyk7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtLnNsdWcsIGF1dGhvci5uaWNrbmFtZSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gY3JlYXRpbmcgcGFpcicpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50VGhyZWFkcyhmb3J1bS5zbHVnKTtcblx0XHRcdFx0cmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSBcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ1RocmVhZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhyZXEuYm9keVsnc2x1ZyddKTtcblx0XHRcdFx0ZXhzaXN0aW5nVGhyZWFkLmlkID0gcGFyc2VJbnQoZXhzaXN0aW5nVGhyZWFkLmlkKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGV4c2lzdGluZ1RocmVhZClcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRyAhISEhJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbiBcblx0XHRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRnZXRUaHJlYWRzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoc2x1Zylcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKGRhdGEpe1xuXHRcdFx0XHRcdFRocmVhZE1vZGVsLmdldFRocmVhZHNCeUZvcnVtU2x1ZyhzbHVnLCBxdWVyeVBhcmFtcylcblx0XHRcdFx0XHRcdC50aGVuKCBkYXRhID0+e1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGEgPSBpZFRvSW50KGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEUyBPRiBGT1JVTScpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdFx0XHRcdH0pO1x0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fSk7XHRcblx0fVxuXG5cdGFzeW5jIGdldFVzZXJzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcblx0XHR9XG5cdFx0cXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJztcblx0XHRsZXQgZm9ydW07XG5cdFx0dHJ5IHtcblx0XHRcdGZvcnVtID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0aWYgKCFmb3J1bSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCBmb3J1bVwiIH0pO1xuXHRcdH0gXG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0VXNlcnMoZm9ydW0uc2x1ZywgcXVlcnlQYXJhbXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVJTIElOIEZPUlVNJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuXG5cdH0gXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvcnVtQ29udHJvbGxlcjsiLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5jbGFzcyBQb3N0Q29udHJvbGxlciB7XG4gICAgYXN5bmMgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gcmVxLnBhcmFtc1snaWQnXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGVkVG8gPSByZXEucXVlcnlbJ3JlbGF0ZWQnXTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuXG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8IG5ld0RhdGEubWVzc2FnZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7ICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChwb3N0RGF0YS5tZXNzYWdlICE9PSBuZXdEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnVwZGF0ZVBvc3QobmV3RGF0YS5tZXNzYWdlLCBwb3N0SWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkQgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gcGFyc2VJbnQocmVzdWx0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudCA/IHBhcnNlSW50KHJlc3VsdC5wYXJlbnQpIDogcmVzdWx0LnBhcmVudDsgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7IFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0Q29udHJvbGxlcjsiLCJpbXBvcnQgU2VydmljZU1vZGVsIGZyb20gJy4uL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5jbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjb3VudEFsbCAocmVxLCByZXMpIHtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNvdW50QWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNsZWFyQWxsIChyZXEsIHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNsZWFyQWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDT1VOVElORycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyOyIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgVm90ZU1vZGVsIGZyb20gJy4uL21vZGVscy9Wb3RlTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0c0xvb3AgfSBmcm9tICcuL0NvbnRyb2xsZXJVdGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5cbmNsYXNzIFRocmVhZENvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY3JlYXRlUG9zdCAocmVxLCByZXMpe1xuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBbXVxuICAgICAgICAvLyBjb25zdCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBuZXdQb3N0cyA9IHJlcS5ib2R5O1xuICAgICAgICBsZXQgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIC8vIGxldCB0aHJlYWREYXRhID0ge31cbiAgICAgICAgXG4gICAgICAgIC8vINC10YHRgtGMINC70Lgg0YLQsNC60LDRjyDQstC10YLQutCwINCyINCx0LDQt9C1IFxuICAgICAgICAvLyBpZiAoL15cXGQrJC8udGVzdCh0aHJlYWRTbHVnKSkge1xuICAgICAgICAvLyAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludCh0aHJlYWRTbHVnKSlcbiAgICAgICAgLy8gICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aHJlYWREYXRhID0gZGF0YTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWREYXRhKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KSAgXG4gICAgICAgIC8vICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHRocmVhZFNsdWcpXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhyZWFkRGF0YSA9IGRhdGE7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjcmVhdGVQb3N0c0xvb3AocmVxLHJlcywgdGhyZWFkRGF0YSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KSBcbiAgICAgICAgLy8gICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgc2x1ZycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWQpO1xuXG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviAwINC/0L7RgdGC0L7QslxuICAgICAgICBpZiAoIW5ld1Bvc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1Bvc3RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZvdGVGb3JUaHJlYWQgKHJlcSAscmVzKSB7XG4gICAgICAgIGxldCBpbml0Vm90ZURhdGEgPSByZXEuYm9keTtcbiAgICAgICAgbGV0IHRocmVhZFNsdWcgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG5cbiAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKGluaXRWb3RlRGF0YS5uaWNrbmFtZSlcbiAgICAgICAgICAgIC50aGVuICggdXNlciA9PntcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyDQtdGB0YLRjCDQu9C4INGC0LDQutCw0Y8g0LLQtdGC0LrQsCDQsiDQsdCw0LfQtSBcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodGhyZWFkU2x1ZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQodGhyZWFkU2x1ZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGVNb2RlbC52b3RlKCBpbml0Vm90ZURhdGEudm9pY2UsIHRocmVhZC5pZCwgdXNlci5uaWNrbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdm90ZURhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm90ZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2b2ljZSA9IHZvdGVEYXRhLnZvaWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGVEYXRhLmV4aXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2ljZSA9IHZvaWNlID09PSAxID8gdm9pY2UgKyAxIDogdm9pY2UgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhyZWFkTW9kZWwuaW5jcmVtZW50Vm90ZXNCeUlkKHRocmVhZC5pZCwgdm9pY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIHVwZGF0ZVRocmVhZCA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGhyZWFkLmlkID0gcGFyc2VJbnQodXBkYXRlVGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZVRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogRVJST1IgSU4gVVBEQVRJTkcgVEhSRUFEIFZPVEVTJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBNQUtJTkcgVk9URScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1Zyh0aHJlYWRTbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3RlTW9kZWwudm90ZSggaW5pdFZvdGVEYXRhLnZvaWNlLCB0aHJlYWQuaWQsIHVzZXIubmlja25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIHZvdGVEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdm9pY2UgPSB2b3RlRGF0YS52b2ljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b3RlRGF0YS5leGlzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pY2UgPSB2b2ljZSA9PT0gMSA/IHZvaWNlICsgMSA6IHZvaWNlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRocmVhZE1vZGVsLmluY3JlbWVudFZvdGVzQnlTbHVnKHRocmVhZC5zbHVnLCB2b2ljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdXBkYXRlVGhyZWFkID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaHJlYWQuaWQgPSBwYXJzZUludCh1cGRhdGVUaHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXBkYXRlVGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5HIFRIUkVBRCBWT1RFUycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gTUFLSU5HIFZPVEUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZ2V0RGV0YWlscyAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBvc3RzKHJlcSwgcmVzKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGhhcnZlc3RLZXlWYWx1ZXMocmVxLnF1ZXJ5KTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9IHF1ZXJ5UGFyYW1zWydkZXNjJ10gPT09ICd0cnVlJztcbiAgICAgICAgcXVlcnlQYXJhbXNbJ3NpbmNlJ10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snc2luY2UnXSk7XG5cbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ2ZsYXQnIHx8ICFxdWVyeVBhcmFtcy5zb3J0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5mbGF0U29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBmbGF0IHNvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICd0cmVlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwudHJlZVNvcnQodGhyZWFkLmlkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gdHJlZSBzb3J0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAncGFyZW50X3RyZWUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC5wYXJlbnRUcmVlU29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBwYXJlbnQgdHJlZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcCggKHBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc1Bvc3QgPSB7fTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2F1dGhvciddID0gcG9zdC5hdXRob3I7XG4gICAgICAgICAgICByZXNQb3N0WydjcmVhdGVkJ10gPSBwb3N0LmNyZWF0ZWQ7XG4gICAgICAgICAgICByZXNQb3N0Wydmb3J1bSddID0gcG9zdC5mb3J1bTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2lkJ10gPSBwYXJzZUludChwb3N0LmlkKTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ21lc3NhZ2UnXSA9IHBvc3QubWVzc2FnZTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3BhcmVudCddID0gcGFyc2VJbnQocG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVzUG9zdFsndGhyZWFkJ10gPSBwYXJzZUludChwb3N0LnRocmVhZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNQb3N0O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUaHJlYWQgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgVGhyZWFkTW9kZWwudXBkYXRlVGhyZWFkKHRocmVhZC5zbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkQ29udHJvbGxlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICAgIC8vIGNyZWF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgLy8gICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAvLyAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keVsnZW1haWwnXTtcbiAgICAvLyAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuaWNrbmFtZSwgZW1haWwpXG4gICAgLy8gICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmlja25hbWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXEuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlcS5ib2R5WydhYm91dCddLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxLmJvZHlbJ2VtYWlsJ11cbiAgICAvLyAgICAgICAgICAgICAgICAgXTtcbiAgICAvLyAgICAgICAgICAgICAgICAgVXNlck1vZGVsLmNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORycpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihkYXRhKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0sgT1IgRU1BSUwnKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfSAgICBcblxuICAgIGFzeW5jIGNyZWF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keVsnZW1haWwnXTtcbiAgICAgICAgY29uc3QgbmV3VXNlckRhdGEgPSBbXG4gICAgICAgICAgICBuaWNrbmFtZSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydmdWxsbmFtZSddLFxuICAgICAgICAgICAgcmVxLmJvZHlbJ2Fib3V0J10sXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV4aXN0aW5nVXNlcjtcbiAgICAgICAgICAgIHRyeSB7XG5cdFx0XHRcdGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmlja25hbWUsIGVtYWlsKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGV4aXN0aW5nVXNlcilcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLIE9SIEVNQUlMJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBnZXRVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSlcbiAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9ICBcbiAgICBcbiAgICAvLyB1cGRhdGVVc2VyIChyZXEsIHJlcykge1xuICAgIC8vICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgLy8gICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhuZXdEYXRhKSk7XG5cbiAgICAvLyAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKSAvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxuICAgIC8vICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgIC8vICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgIGlmIChPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCkgeyAvLyDQtdGB0LvQuCDRgtC10LvQviDQt9Cw0L/RgNC+0YHQsCDQvdC1INC/0YPRgdGC0L7QtSBcbiAgICAvLyAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgLy8gICAgICAgICBpZiAoIWNvbHVtbnMubGVuZ3RoKSB7IC8vINC10YHQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LIg0YHRgtC+0LvQsdGG0LDRhSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgLy8gICAgICAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKSAvLyDQv9GA0L7RgdGC0L4g0LLQvtC30LLRgNCw0YnQsNC10Lwg0L/RgNC+0YTQuNC70YxcbiAgICAvLyAgICAgICAgICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpOyAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9KTsgXG4gICAgLy8gICAgICAgICB9IGVsc2UgeyAvLyDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC60LDQutC40LUt0YLQviDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L3QtSDQv9GD0YHRgtGL0LVcbiAgICAvLyAgICAgICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5ld0RhdGFbJ25pY2tuYW1lJ10sIG5ld0RhdGFbJ2VtYWlsJ10pXG4gICAgLy8gICAgICAgICAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5pY2tuYW1lKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW5zKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXlWYWx1ZXMpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgVXNlck1vZGVsLnVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucyxrZXlWYWx1ZXMpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5HIFVTRVInKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSkgIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0LXRgdGC0Ywg0LrQvtC90YTQu9C40LrRgiDQtNCw0L3QvdGL0YVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogXCJVc2VyIHdpdGggc3VjaCBuaWNrbmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRSBPUiBFTUFJTCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH1cblxuXG4gICAgLy8gICAgIH0gZWxzZSB7IC8vINC10YHQu9C4INGC0LXQu9C+INC30LDQv9GA0L7RgdCwINC/0YPRgdGC0L7QtVxuICAgIC8vICAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKSAvLyDQv9GA0L7RgdGC0L4g0LLQvtC30LLRgNCw0YnQsNC10Lwg0L/RgNC+0YTQuNC70YxcbiAgICAvLyAgICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSBcblxuICAgIGFzeW5jIHVwZGF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIFxuICAgICAgICAvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC60LDQutC40LUt0YLQviDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L3QtSDQv9GD0YHRgtGL0LVcblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiBcIlVzZXIgd2l0aCBzdWNoIG5pY2tuYW1lIG9yIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3JvdXRlcnMvVXNlclJvdXRlcy5qcyc7XG5pbXBvcnQgZm9ydW1Sb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL0ZvcnVtUm91dGVzLmpzJztcbmltcG9ydCB0aHJlYWRSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1RocmVhZFJvdXRlcy5qcyc7XG5pbXBvcnQgcG9zdFJvdXRlciBmcm9tICcuL3JvdXRlcnMvUG9zdFJvdXRlcy5qcyc7XG5pbXBvcnQgc2VydmljZVJvdXRlciBmcm9tICcuL3JvdXRlcnMvU2VydmljZVJvdXRlcy5qcyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC51c2UoJy9hcGkvdXNlcicsIHVzZXJSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9mb3J1bScsIGZvcnVtUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvdGhyZWFkJywgdGhyZWFkUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvcG9zdCcsIHBvc3RSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9zZXJ2aWNlJywgc2VydmljZVJvdXRlcik7XG5hcHAuZ2V0KCcvJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbn0pXG5cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgRm9ydW1Nb2RlbCB7XG5cbiAgICBnZXRGb3J1bUJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3Rm9ydW0gKG5ld0ZvcnVtRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtcyAoc2x1ZywgdGl0bGUsIFwidXNlclwiKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBuZXdGb3J1bURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb3J1bVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgc2x1ZyBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGNyZWF0ZUZvcnVtVXNlclBhaXIoZm9ydW1TbHVnLCBuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIGZvcnVtdXNlcnMgKGZvcnVtc2x1ZywgdXNlcm5pY2tuYW1lKSBWQUxVRVMgKCQxLCAkMikgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVfZm9ydW11c2VyX3BhaXIgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIFtmb3J1bVNsdWcsbmlja25hbWVdKTsgXG4gICAgfVxuXG4gICAgaW5jcmVtZW50VGhyZWFkcyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgdGhyZWFkcyA9IHRocmVhZHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGluY3JlbWVudFBvc3RzKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgZm9ydW1zIFNFVCBwb3N0cyA9IHBvc3RzICsgMSBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWddKTtcbiAgICB9XG5cbiAgICBnZXRVc2VycyAoc2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgbGV0IHF1ZXJ5O1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDEgQU5EIFUubmlja25hbWU+JDJcbiAgICAgICAgICAgIGAsW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxIEFORCBVLm5pY2tuYW1lPCQyXG4gICAgICAgICAgICBgLCBbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDFgLCBbc2x1Z10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgJDE6cmF3IFxuICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBxdWVyeS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1Uubmlja25hbWUgREVTQycgOiAnVS5uaWNrbmFtZSBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Nb2RlbDsgIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFBvc3RNb2RlbCB7XG4gICAgXG4gICAgY3JlYXRlTmV3UG9zdCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gcG9zdHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArICcgUkVUVVJOSU5HIConO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5IChxdWVyeSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBnZXRQb3N0QnlJZEFuZFRocmVhZElkIChpZCwgdGhyZWFkSWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxIEFORCB0aHJlYWQ9JDInLCBbaWQsIHRocmVhZElkXSlcbiAgICB9XG5cbiAgICBnZXRQb3N0QnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIGlkPSQxJywgW2lkXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zdCAobWVzc2FnZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgcG9zdHMgU0VUIFwiaXNFZGl0ZWRcIj1UUlVFLCBcIm1lc3NhZ2VcIj0kMSBXSEVSRSBpZD0kMiBSRVRVUk5JTkcgKicsIFttZXNzYWdlLGlkXSk7XG4gICAgfVxuXG4gICAgXG4gICAgZmxhdFNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBpZiAoIHF1ZXJ5UGFyYW1zLnNpbmNlICkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMSBBTkQgaWQ8JDJcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxIEFORCBpZD4kMlxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIEFTQywgaWQgQVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmVlU29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGF0aHRvcG9zdCBERVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0ID4gKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0IDwgKFNFTEVDVCBwYXRodG9wb3N0IEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgXG4gICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7ICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBhcmVudFRyZWVTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwaWQucGFyZW50X2lkIERFU0MsIHBhdGh0b3Bvc3QgQVNDJyA6ICdwYXRodG9wb3N0IEFTQyc7XG4gICAgICAgIGNvbnN0IGlkU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ2lkIERFU0MnIDogJ2lkIEFTQydcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0WzFdID4gKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2Mpe1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdFsxXSA8IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTsgICBcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7ICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdE1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFNlcnZpY2VNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY291bnRBbGwoKSB7XG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBmb3J1bXMnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gcG9zdHMnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB0aHJlYWRzJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHVzZXJzJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogcGFyc2VJbnQoZm9ydW0uY291bnQpLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBhcnNlSW50KHBvc3QuY291bnQpLFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogcGFyc2VJbnQodGhyZWFkLmNvdW50KSxcbiAgICAgICAgICAgIFwidXNlclwiOiBwYXJzZUludCh1c2VyLmNvdW50KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xlYXJBbGwoKSB7XG5cbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBmb3J1bXMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgcG9zdHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB0aHJlYWRzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHVzZXJzIENBU0NBREUnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBmb3J1bSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwb3N0LFxuICAgICAgICAgICAgXCJ0aHJlYWRcIjogdGhyZWFkLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHVzZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVGhyZWFkTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNyZWF0ZU5ld1RocmVhZCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHRocmVhZHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArIGAgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGlkPSQxJywgW2lkXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRzQnlGb3J1bVNsdWcgKGZvcnVtU2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJ1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI+PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIjw9JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDMnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeVNsdWcgKHNsdWcsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWcsdm9pY2VdKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5SWQgKGlkLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgaWQ9JDEgUkVUVVJOSU5HIConLCBbaWQsdm9pY2VdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUaHJlYWQgKHNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3RocmVhZHMnfSxudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJzbHVnXFxcIiA9IFxcJ1wiICsgIHNsdWcgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkTW9kZWw7XG4iLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIC8vIG9uZU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQvdGD0Lsg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJywgW25pY2tuYW1lXSlcbiAgICB9XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwgKG5pY2ssIG1haWwpIHsgLy8g0LzQvtC20L3QviDQutCw0Lot0YLQviDQvdC1INC/0YDQvtGF0L7QtNC40YLRjNGB0Y8g0L/QviDQstGB0LXQuSDRgtCw0LHQu9C40YbQtSwg0LAg0L7RgdGC0LDQvdCw0LLQu9C40LLQsNGC0YHRjyDQutCw0Log0YLQvtC70YzQutC+INC90LDRiNC70LggMSDQstGF0L7QttC00LXQvdC40LVcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBuaWNrIHx8ICcnO1xuICAgICAgICBjb25zdCBlbWFpbCA9IG1haWwgfHwgJyc7XG4gICAgICAgIC8vIG1hbnlPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQsiDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxIE9SIGVtYWlsPSQyJywgW25pY2tuYW1lLCBlbWFpbF0pOyBcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gdXNlcnMgKG5pY2tuYW1lLCBmdWxsbmFtZSwgYWJvdXQsIGVtYWlsKSBWQUxVRVMgKCQxLCAkMiwgJDMgLCQ0KSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3VXNlckRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcblxuICAgIC8vICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3VzZXJzJ30sIG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcIm5pY2tuYW1lXFxcIiA9IFxcJ1wiICsgIG5pY2tuYW1lICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJRVUVSWVwiLCBxdWVyeSk7XG4gICAgLy8gICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgLy8gfVxuXG5cbiAgICBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNC70YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQuNC80Y8g0LjQvNC10L3QvdC+INGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQuNGB0LDQvdC+XG4gICAgLypcbiAgICDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjFxuICAgINC40LzRjyDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0L/QuNGB0LDQvdC+INCyINGC0LDQsdC70LjRhtC1IHVzZXJzICjQvdC1INCyINCy0LXRgNGF0L3QtdC8INC40LvQuCDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQsNGFKVxuICAgICovXG4gICAgZ2V0VXNlck5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJywgW25pY2tuYW1lXSlcbiAgICB9XG5cblxufSBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVm90ZU1vZGVsIHtcblxuICAgIHZvdGUgKHZvaWNlLCB0aHJlYWRJZCwgbmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGBJTlNFUlQgSU5UTyB2b3RlcyAodm9pY2UsIHRocmVhZCwgbmlja25hbWUpIFZBTFVFUyAoJDEsICQyLCAkMykgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVUaHJlYWROaWNrbmFtZSBETyBcbiAgICAgICAgVVBEQVRFIFNFVCB2b2ljZT0kMSBXSEVSRSB2b3Rlcy52b2ljZTw+JDEgUkVUVVJOSU5HICosICh4bWF4Ojp0ZXh0OjppbnQgPiAwKSBhcyBleGlzdGVkYCwgW3ZvaWNlLCB0aHJlYWRJZCwgbmlja25hbWVdKTsgXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWb3RlTW9kZWw7IFxuIiwiZXhwb3J0IGNvbnN0IHBncCA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKSgpO1xuXG5jb25zdCBkYk9wdGlvbnMgPSB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogNTQzMixcbiAgICBkYXRhYmFzZTogJ2ZvcnVtJyxcbiAgICB1c2VyOiAnZXJtYWtmb3J1bScsXG4gICAgcGFzc3dvcmQ6ICcxMjMnXG59XG5cbmNvbnN0IGRiSW5zdGFuY2UgPSBwZ3AoZGJPcHRpb25zKTtcbmV4cG9ydCBkZWZhdWx0IGRiSW5zdGFuY2U7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IEZvcnVtQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Gb3J1bUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBmb3J1bVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmZvcnVtUm91dGVyLnBvc3QoJy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlRm9ydW0pO1xuZm9ydW1Sb3V0ZXIucG9zdCgnLzpzbHVnL2NyZWF0ZScsIEZvcnVtQ29udHJvbGxlci5jcmVhdGVUaHJlYWRJbkZvcnVtKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL2RldGFpbHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy90aHJlYWRzJywgRm9ydW1Db250cm9sbGVyLmdldFRocmVhZHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdXNlcnMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0VXNlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J1bVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFBvc3RDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLmpzJztcblxuY29uc3QgcG9zdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBvc3RSb3V0ZXIuZ2V0KCcvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci5nZXREZXRhaWxzKTtcbnBvc3RSb3V0ZXIucG9zdCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIudXBkYXRlRGV0YWlscyk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBTZXJ2aWNlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9TZXJ2aWNlQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHNlcnZpY2VSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5zZXJ2aWNlUm91dGVyLmdldCgnL3N0YXR1cycsIFNlcnZpY2VDb250cm9sbGVyLmNvdW50QWxsKTtcbnNlcnZpY2VSb3V0ZXIucG9zdCgnL2NsZWFyJywgU2VydmljZUNvbnRyb2xsZXIuY2xlYXJBbGwpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVGhyZWFkQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9UaHJlYWRDb250cm9sbGVyLmpzJztcblxuY29uc3QgdGhyZWFkUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9jcmVhdGUnLCBUaHJlYWRDb250cm9sbGVyLmNyZWF0ZVBvc3QpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC92b3RlJywgVGhyZWFkQ29udHJvbGxlci52b3RlRm9yVGhyZWFkKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9wb3N0cycsIFRocmVhZENvbnRyb2xsZXIuZ2V0UG9zdHMpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci51cGRhdGVUaHJlYWQpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRocmVhZFJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzJztcblxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9jcmVhdGUnLCBVc2VyQ29udHJvbGxlci5jcmVhdGVVc2VyKTtcbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcik7XG51c2VyUm91dGVyLmdldCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIuZ2V0VXNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7IiwiZXhwb3J0IGNvbnN0IGhhcnZlc3RDb2x1bW5zID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlzID0gW11cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgY29uc3QgaGFydmVzdFZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBPYmplY3QudmFsdWVzKGRhdGEpKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0S2V5VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlWYWx1ZXMgPSB7fVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5VmFsdWVzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleVZhbHVlcztcbn1cblxuZXhwb3J0IGNvbnN0IGlkVG9JbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldLmlkID0gcGFyc2VJbnQoZGF0YVtpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgY29uc3QgdmFsU3RyID0gZnVuY3Rpb24gKGFycmF5T2ZQb3N0T2JqZWN0cykge1xuICAgIGxldCByZXN1bHRRdWVyeSA9IGBgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlc0luQXJyYXkgPSBoYXJ2ZXN0VmFsdWVzKGFycmF5T2ZQb3N0T2JqZWN0c1tpXSk7XG4gICAgICAgIGxldCB2YWwgPSBgIChgO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlc0luQXJyYXkubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgaWYgKCBqICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IFwiJ1wiICsgdmFsdWVzSW5BcnJheVtqXSArIFwiJ1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0gdmFsdWVzSW5BcnJheVtqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGogIT09IHZhbHVlc0luQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHZhbCArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0UXVlcnkgKz0gdmFsO1xuICAgICAgICBpZiAoaSA9PT0gYXJyYXlPZlBvc3RPYmplY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGApIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgKSwgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0UXVlcnk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnLXByb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=