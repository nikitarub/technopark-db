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
    var result, creationDate, newPosts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, post, author, parentPost, keyValues, columns, i, values, addedPost;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = [];
            creationDate = new Date();
            newPosts = req.body;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 6;
            _iterator = newPosts[Symbol.iterator]();

          case 8:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 100;
              break;
            }

            post = _step.value;

            if (!post.author) {
              _context.next = 96;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUserNickname(post.author);

          case 14:
            author = _context.sent;

            if (author) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'cant find author'
            }));

          case 19:
            post.author = author.nickname;

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](11);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICKNAME');
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 28:
            if (!post.parent) {
              _context.next = 48;
              break;
            }

            _context.prev = 29;
            _context.next = 32;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].getPostByIdAndThreadId(post.parent, threadData.id);

          case 32:
            parentPost = _context.sent;

            if (parentPost) {
              _context.next = 37;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: 'no parent posts'
            }));

          case 37:
            post.parent = parentPost.id;

          case 38:
            _context.next = 46;
            break;

          case 40:
            _context.prev = 40;
            _context.t1 = _context["catch"](29);
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST PARENTS');
            console.log(_context.t1);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 46:
            _context.next = 49;
            break;

          case 48:
            post.parent = null;

          case 49:
            _context.prev = 49;
            keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestKeyValues"])(post);
            keyValues['created'] = creationDate;
            keyValues['thread'] = threadData.id;
            keyValues['forum'] = threadData.forum;
            columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestColumns"])(keyValues);

            for (i = 0; i < columns.length; i++) {
              if (columns[i] === 'message' || columns[i] === 'created') {
                columns[i] = '"' + columns[i] + '"';
              }
            }

            values = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["harvestValues"])(keyValues);
            _context.next = 59;
            return _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNewPost(columns, values);

          case 59:
            addedPost = _context.sent;
            addedPost.id = parseInt(addedPost.id); // pg-promise считает BIGSERIAL строкой хз почему

            addedPost.thread = parseInt(addedPost.thread);
            addedPost.parent = parseInt(addedPost.parent);
            result.push(addedPost);
            _context.next = 72;
            break;

          case 66:
            _context.prev = 66;
            _context.t2 = _context["catch"](49);
            console.log('--------------------------------------------');
            console.log('ERROR IN ADDING NEW POST');
            console.log(_context.t2);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 72:
            _context.prev = 72;
            _context.next = 75;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].createForumUserPair(threadData.forum, post.author);

          case 75:
            _context.next = 83;
            break;

          case 77:
            _context.prev = 77;
            _context.t3 = _context["catch"](72);
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING USER FORUM PAIR');
            console.log(_context.t3);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 83:
            _context.prev = 83;
            _context.next = 86;
            return _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__["default"].incrementPosts(threadData.forum);

          case 86:
            _context.next = 94;
            break;

          case 88:
            _context.prev = 88;
            _context.t4 = _context["catch"](83);
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(_context.t4);
            return _context.abrupt("return", res.status(500).json({
              message: "crash"
            }));

          case 94:
            _context.next = 97;
            break;

          case 96:
            return _context.abrupt("return", res.status(404).json({
              message: 'cant find author'
            }));

          case 97:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 100:
            _context.next = 106;
            break;

          case 102:
            _context.prev = 102;
            _context.t5 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t5;

          case 106:
            _context.prev = 106;
            _context.prev = 107;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 109:
            _context.prev = 109;

            if (!_didIteratorError) {
              _context.next = 112;
              break;
            }

            throw _iteratorError;

          case 112:
            return _context.finish(109);

          case 113:
            return _context.finish(106);

          case 114:
            return _context.abrupt("return", res.status(201).send(result));

          case 115:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 102, 106, 114], [11, 22], [29, 40], [49, 66], [72, 77], [83, 88], [107,, 109, 113]]);
  }));

  return function createPostsLoop(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // const columns = `(author, "message", parent, "created", thread, forum)`;
// export const createPostsLoop = async function (req,res, threadData) {
//     const creationDate = new Date();
//     const newPosts = req.body;
//     let batches = '';
//     let batch = '';
//     const columnsSet = ` (author, "message", parent, "created", thread, forum) `;
//     const postAmount = newPosts.length;
//     let flag = 0;
//     // console.log('IN INIT',flag, postAmount);
//     for (let post of newPosts) {
//         // есть ли такой автор в базе
//         try {
//             const author = await UserModel.getUserNickname(post.author);
//             if (!author) {
//                 return res.status(404).json({ message : 'cant find author' }); 
//             } else {
//                 post.author = author.nickname;
//             }
//         } catch (error) {
//             console.log('--------------------------------------------');
//             console.log('ERROR IN GETTING USER BY NICKNAME');
//             console.log(error);
//             return res.status(500).json({ message : "crash" })
//         }
//         // если был передан id родительский пост
//         if (post.parent) {
//             // проверяем есть ли родительский пост в системе 
//             try {
//                 const parentPost = await PostModel.getPostByIdAndThreadId(post.parent, threadData.id);
//                 if (!parentPost) {
//                     return res.status(409).json({ message : 'no parent posts' }); 
//                 } else {
//                     post.parent = parentPost.id;
//                 }
//             } catch (error) {
//                 console.log('--------------------------------------------');
//                 console.log('ERROR IN GETTING POST PARENTS');
//                 console.log(error);
//                 return res.status(500).json({ message : "crash" })
//             }
//         } else {
//             post.parent = null;
//         }
//         post.created = creationDate;
//         post.thread = threadData.id;
//         post.forum = threadData.forum;
//         const values = harvestValues(post);
//         console.log(flag, postAmount);
//         if (flag === postAmount - 1) {
//             batch = valStr(values, true);    
//         } else {
//             batch = valStr(values, false);
//         }
//         console.log('I AM BATCH', batch);
//         batches += batch;
//         flag += 1;
//     }
//     const query = `INSERT INTO posts` + columnsSet + `VALUES` + batches + ` RETURNING *`;
//     try {
//         const result = await PostModel.createNewPostsByQuery(query);
//     } catch (error) {
//         console.log('--------------------------------------------');
//         console.log('ERROR IN ADDING NEW POST');
//         console.log(error);
//         return res.status(500).json({ message : "crash" })
//     }
//     for (let post of newPosts) {
//             // добавляем юзера в форум 
//         try {
//             await ForumModel.createForumUserPair(threadData.forum, post.author);
//         } catch (error) {
//             console.log('--------------------------------------------');
//             console.log('ERROR IN CREATING USER FORUM PAIR');
//             console.log(error);
//             return res.status(500).json({ message : "crash" })
//         }
//         // увеличиваем счетчик постов в форуме 
//         try {
//             await ForumModel.incrementPosts(threadData.forum);
//         } catch (error) {
//             console.log('--------------------------------------------');
//             console.log('ERROR IN threads increment');
//             console.log(error);
//             return res.status(500).json({ message : "crash" })
//         }
//     }
//     return res.status(201).send(result);
// }

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
                console.log('ERROR IN GETTING THREAD BY ID');
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
                  if (columns[i] === 'slug') {
                    remember = i;
                  }

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
var valStr = function valStr(values, noDot) {
  var v = ' (';

  for (var i = 0; i < values.length; i++) {
    if (i !== 2) {
      v += "'" + values[i] + "'";
    } else {
      v += values[i];
    }

    if (i !== values.length - 1) {
      v += ', ';
    }
  }

  if (noDot) {
    v += ') ';
  } else {
    v += '), ';
  }

  return v;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mb3J1bS9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL2ZvcnVtL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZm9ydW0vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicmVzdWx0IiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsIm5ld1Bvc3RzIiwiYm9keSIsInBvc3QiLCJhdXRob3IiLCJVc2VyTW9kZWwiLCJnZXRVc2VyTmlja25hbWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJpZCIsInBhcmVudFBvc3QiLCJrZXlWYWx1ZXMiLCJoYXJ2ZXN0S2V5VmFsdWVzIiwiZm9ydW0iLCJjb2x1bW5zIiwiaGFydmVzdENvbHVtbnMiLCJpIiwibGVuZ3RoIiwidmFsdWVzIiwiaGFydmVzdFZhbHVlcyIsImNyZWF0ZU5ld1Bvc3QiLCJhZGRlZFBvc3QiLCJwYXJzZUludCIsInRocmVhZCIsInB1c2giLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImluY3JlbWVudFBvc3RzIiwic2VuZCIsIkZvcnVtQ29udHJvbGxlciIsInVzZXIiLCJzbHVnIiwidGl0bGUiLCJuZXdGb3J1bURhdGEiLCJjcmVhdGVOZXdGb3J1bSIsImdldEZvcnVtQnlTbHVnIiwiZXhzaXN0aW5nRm9ydW0iLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmb3J1bVNsdWciLCJnZXRGb3J1bVNsdWciLCJUaHJlYWRNb2RlbCIsImNyZWF0ZU5ld1RocmVhZCIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsInF1ZXJ5IiwiZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIiwiaWRUb0ludCIsImRlc2MiLCJnZXRVc2VycyIsIlBvc3RDb250cm9sbGVyIiwicG9zdElkIiwiZ2V0UG9zdEJ5SWQiLCJwb3N0RGF0YSIsInJlbGF0ZWRUbyIsInJlbGF0ZWRFbnRpdGllcyIsInNwbGl0IiwicmVsYXRlZEVudGl0eSIsImdldFVzZXJCeU5pY2tuYW1lIiwiZW50aXR5IiwiZ2V0VGhyZWFkQnlJZCIsIm5ld0RhdGEiLCJPYmplY3QiLCJ1cGRhdGVQb3N0IiwiU2VydmljZUNvbnRyb2xsZXIiLCJTZXJ2aWNlTW9kZWwiLCJjb3VudEFsbCIsImNsZWFyQWxsIiwiZW5kIiwiVGhyZWFkQ29udHJvbGxlciIsInNsdWdPcklkIiwidGVzdCIsIm1lc2FnZSIsImluaXRWb3RlRGF0YSIsInRocmVhZFNsdWciLCJWb3RlTW9kZWwiLCJ2b3RlIiwidm9pY2UiLCJ2b3RlRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJ1cGRhdGVUaHJlYWQiLCJpbmNyZW1lbnRWb3Rlc0J5U2x1ZyIsInNvcnQiLCJmbGF0U29ydCIsInRyZWVTb3J0IiwicGFyZW50VHJlZVNvcnQiLCJtYXAiLCJyZXNQb3N0IiwiY3JlYXRlZCIsIlVzZXJDb250cm9sbGVyIiwiZW1haWwiLCJuZXdVc2VyRGF0YSIsImNyZWF0ZU5ld1VzZXIiLCJnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwiLCJleGlzdGluZ1VzZXIiLCJ1cGRhdGVVc2VyIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInVzZXJSb3V0ZXIiLCJmb3J1bVJvdXRlciIsInRocmVhZFJvdXRlciIsInBvc3RSb3V0ZXIiLCJzZXJ2aWNlUm91dGVyIiwiZ2V0IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZGJJbnN0YW5jZSIsIm9uZU9yTm9uZSIsInNpbmNlIiwicGdwIiwiYXMiLCJmb3JtYXQiLCJtYW55T3JOb25lIiwidG9TdHJpbmciLCJsaW1pdCIsImMiLCJ2Iiwib25lIiwidGhyZWFkSWQiLCJwYXRoU29ydFJ1bGUiLCJpZFNvcnRSdWxlIiwiY291bnQiLCJub25lIiwicmVtZW1iZXIiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsIm5pY2siLCJtYWlsIiwicmVxdWlyZSIsImRiT3B0aW9ucyIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiUm91dGVyIiwiY3JlYXRlRm9ydW0iLCJjcmVhdGVUaHJlYWRJbkZvcnVtIiwiZ2V0RGV0YWlscyIsImdldFRocmVhZHMiLCJ1cGRhdGVEZXRhaWxzIiwiY3JlYXRlUG9zdCIsInZvdGVGb3JUaHJlYWQiLCJnZXRQb3N0cyIsImNyZWF0ZVVzZXIiLCJnZXRVc2VyIiwia2V5cyIsImtleSIsInZhbHVlIiwidmFsU3RyIiwibm9Eb3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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LENBQUN0QixNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ3VCLFFBQUksQ0FBQ3ZCLENBQUQsQ0FBSixDQUFRUCxFQUFSLEdBQWFhLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ3ZCLENBQUQsQ0FBSixDQUFRUCxFQUFULENBQXJCO0FBQ0g7O0FBQ0QsU0FBTzhCLElBQVA7QUFDSCxDQUxNO0FBT0EsSUFBTXdILE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVU3SSxNQUFWLEVBQWtCOEksS0FBbEIsRUFBeUI7QUFDM0MsTUFBSWxDLENBQUMsR0FBRyxJQUFSOztBQUNBLE9BQUssSUFBSTlHLENBQUMsR0FBRSxDQUFaLEVBQWdCQSxDQUFDLEdBQUdFLE1BQU0sQ0FBQ0QsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsUUFBS0EsQ0FBQyxLQUFLLENBQVgsRUFBYztBQUNWOEcsT0FBQyxJQUFJLE1BQU01RyxNQUFNLENBQUNGLENBQUQsQ0FBWixHQUFrQixHQUF2QjtBQUNILEtBRkQsTUFFTztBQUNIOEcsT0FBQyxJQUFJNUcsTUFBTSxDQUFDRixDQUFELENBQVg7QUFFSDs7QUFDRCxRQUFJQSxDQUFDLEtBQUtFLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixDQUExQixFQUE2QjtBQUN6QjZHLE9BQUMsSUFBSSxJQUFMO0FBQ0g7QUFDSjs7QUFDRCxNQUFJa0MsS0FBSixFQUFXO0FBQ1BsQyxLQUFDLElBQUksSUFBTDtBQUVILEdBSEQsTUFHTztBQUNIQSxLQUFDLElBQUksS0FBTDtBQUNIOztBQUNELFNBQU9BLENBQVA7QUFDSCxDQXBCTSxDOzs7Ozs7Ozs7OztBQ3RDUCwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZm9ydW0vc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBQb3N0TW9kZWwgZnJvbSAnLi4vbW9kZWxzL1Bvc3RNb2RlbC5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCB2YWxTdHIgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0c0xvb3AgPSBhc3luYyBmdW5jdGlvbiAocmVxLHJlcywgdGhyZWFkRGF0YSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgY29uc3QgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBuZXdQb3N0cyA9IHJlcS5ib2R5O1xuXG4gICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuICAgICAgICBcbiAgICAgICAgaWYgKHBvc3QuYXV0aG9yKSB7XG4gICAgICAgICAgICAvLyDQtdGB0YLRjCDQu9C4INGC0LDQutC+0Lkg0LDQstGC0L7RgCDQsiDQsdCw0LfQtVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRob3IgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHBvc3QuYXV0aG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3N0LmF1dGhvciA9IGF1dGhvci5uaWNrbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4gICAgICAgICAgICBpZiAocG9zdC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LXRgdGC0Ywg0LvQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YIg0LIg0YHQuNGB0YLQtdC80LUgXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50UG9zdCA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZEFuZFRocmVhZElkKHBvc3QucGFyZW50LCB0aHJlYWREYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ25vIHBhcmVudCBwb3N0cycgfSk7IFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJlbnRQb3N0LmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgUEFSRU5UUycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC/0L7RgdGCIFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHBvc3QpO1xuICAgICAgICAgICAgICAgIGtleVZhbHVlc1snY3JlYXRlZCddID0gY3JlYXRpb25EYXRlO1xuICAgICAgICAgICAgICAgIGtleVZhbHVlc1sndGhyZWFkJ10gPSB0aHJlYWREYXRhLmlkO1xuICAgICAgICAgICAgICAgIGtleVZhbHVlc1snZm9ydW0nXSA9IHRocmVhZERhdGEuZm9ydW07XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKGtleVZhbHVlcyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uc1tpXSA9PT0gJ21lc3NhZ2UnIHx8IGNvbHVtbnNbaV0gPT09ICdjcmVhdGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBoYXJ2ZXN0VmFsdWVzKGtleVZhbHVlcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZGRlZFBvc3QgPSBhd2FpdCBQb3N0TW9kZWwuY3JlYXRlTmV3UG9zdChjb2x1bW5zLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIGFkZGVkUG9zdC5pZCA9IHBhcnNlSW50KGFkZGVkUG9zdC5pZCk7IC8vIHBnLXByb21pc2Ug0YHRh9C40YLQsNC10YIgQklHU0VSSUFMINGB0YLRgNC+0LrQvtC5INGF0Lcg0L/QvtGH0LXQvNGDXG4gICAgICAgICAgICAgICAgYWRkZWRQb3N0LnRocmVhZCA9IHBhcnNlSW50KGFkZGVkUG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgICAgIGFkZGVkUG9zdC5wYXJlbnQgPSBwYXJzZUludChhZGRlZFBvc3QucGFyZW50KTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhZGRlZFBvc3QpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBBRERJTkcgTkVXIFBPU1QnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Y7Qt9C10YDQsCDQsiDRhNC+0YDRg9C8IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZUZvcnVtVXNlclBhaXIodGhyZWFkRGF0YS5mb3J1bSwgcG9zdC5hdXRob3IpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUiBGT1JVTSBQQUlSJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQv9C+0YHRgtC+0LIg0LIg0YTQvtGA0YPQvNC1IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFBvc3RzKHRocmVhZERhdGEuZm9ydW0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgYXV0aG9yJyB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQocmVzdWx0KTtcbn1cblxuXG5cbi8vIGNvbnN0IGNvbHVtbnMgPSBgKGF1dGhvciwgXCJtZXNzYWdlXCIsIHBhcmVudCwgXCJjcmVhdGVkXCIsIHRocmVhZCwgZm9ydW0pYDtcblxuXG4vLyBleHBvcnQgY29uc3QgY3JlYXRlUG9zdHNMb29wID0gYXN5bmMgZnVuY3Rpb24gKHJlcSxyZXMsIHRocmVhZERhdGEpIHtcbi8vICAgICBjb25zdCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gICAgIGNvbnN0IG5ld1Bvc3RzID0gcmVxLmJvZHk7XG4vLyAgICAgbGV0IGJhdGNoZXMgPSAnJztcbi8vICAgICBsZXQgYmF0Y2ggPSAnJztcbi8vICAgICBjb25zdCBjb2x1bW5zU2V0ID0gYCAoYXV0aG9yLCBcIm1lc3NhZ2VcIiwgcGFyZW50LCBcImNyZWF0ZWRcIiwgdGhyZWFkLCBmb3J1bSkgYDtcbi8vICAgICBjb25zdCBwb3N0QW1vdW50ID0gbmV3UG9zdHMubGVuZ3RoO1xuLy8gICAgIGxldCBmbGFnID0gMDtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnSU4gSU5JVCcsZmxhZywgcG9zdEFtb3VudCk7XG5cbiAgICBcbi8vICAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG4vLyAgICAgICAgIC8vINC10YHRgtGMINC70Lgg0YLQsNC60L7QuSDQsNCy0YLQvtGAINCyINCx0LDQt9C1XG5cbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUocG9zdC5hdXRob3IpO1xuLy8gICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgcG9zdC5hdXRob3IgPSBhdXRob3Iubmlja25hbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0L/QtdGA0LXQtNCw0L0gaWQg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCXG4vLyAgICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuLy8gICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC/0L7RgdGCINCyINGB0LjRgdGC0LXQvNC1IFxuLy8gICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuLy8gICAgICAgICAgICAgICAgIGlmICghcGFyZW50UG9zdCkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ25vIHBhcmVudCBwb3N0cycgfSk7IFxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gcGFyZW50UG9zdC5pZDtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgUEFSRU5UUycpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBwb3N0LnBhcmVudCA9IG51bGw7XG4vLyAgICAgICAgIH1cblxuXG4vLyAgICAgICAgIHBvc3QuY3JlYXRlZCA9IGNyZWF0aW9uRGF0ZTtcbi8vICAgICAgICAgcG9zdC50aHJlYWQgPSB0aHJlYWREYXRhLmlkO1xuLy8gICAgICAgICBwb3N0LmZvcnVtID0gdGhyZWFkRGF0YS5mb3J1bTtcblxuLy8gICAgICAgICBjb25zdCB2YWx1ZXMgPSBoYXJ2ZXN0VmFsdWVzKHBvc3QpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhmbGFnLCBwb3N0QW1vdW50KTtcbi8vICAgICAgICAgaWYgKGZsYWcgPT09IHBvc3RBbW91bnQgLSAxKSB7XG4vLyAgICAgICAgICAgICBiYXRjaCA9IHZhbFN0cih2YWx1ZXMsIHRydWUpOyAgICBcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGJhdGNoID0gdmFsU3RyKHZhbHVlcywgZmFsc2UpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdJIEFNIEJBVENIJywgYmF0Y2gpO1xuLy8gICAgICAgICBiYXRjaGVzICs9IGJhdGNoO1xuLy8gICAgICAgICBmbGFnICs9IDE7XG4vLyAgICAgfVxuXG5cbi8vICAgICBjb25zdCBxdWVyeSA9IGBJTlNFUlQgSU5UTyBwb3N0c2AgKyBjb2x1bW5zU2V0ICsgYFZBTFVFU2AgKyBiYXRjaGVzICsgYCBSRVRVUk5JTkcgKmA7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZU5ld1Bvc3RzQnlRdWVyeShxdWVyeSk7XG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBBRERJTkcgTkVXIFBPU1QnKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgZm9yIChsZXQgcG9zdCBvZiBuZXdQb3N0cykge1xuLy8gICAgICAgICAgICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGO0LfQtdGA0LAg0LIg0YTQvtGA0YPQvCBcbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBwb3N0LmF1dGhvcik7XG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSIEZPUlVNIFBBSVInKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAvLyDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INGB0YfQtdGC0YfQuNC6INC/0L7RgdGC0L7QsiDQsiDRhNC+0YDRg9C80LUgXG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICBhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFBvc3RzKHRocmVhZERhdGEuZm9ydW0pO1xuLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gdGhyZWFkcyBpbmNyZW1lbnQnKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQocmVzdWx0KTtcbi8vIH1cbiIsImltcG9ydCBGb3J1bU1vZGVsIGZyb20gJy4uL21vZGVscy9Gb3J1bU1vZGVsLmpzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgVGhyZWFkTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1RocmVhZE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuXG5cbmNsYXNzIEZvcnVtQ29udHJvbGxlciB7XG5cbiAgICAvLyBjcmVhdGVGb3J1bSAocmVxLCByZXMpIHtcblx0Ly8gXHRsZXQgdXNlciA9IHJlcS5ib2R5Wyd1c2VyJ107XG5cdC8vIFx0Y29uc3Qgc2x1ZyA9IHJlcS5ib2R5WydzbHVnJ107XG5cdC8vIFx0Y29uc3QgdGl0bGUgPSByZXEuYm9keVsndGl0bGUnXTtcblx0Ly8gXHRVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHVzZXIpXG5cdC8vIFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdC8vIFx0XHRcdGlmIChkYXRhKSB7XG5cdC8vIFx0XHRcdFx0dXNlciA9IGRhdGEubmlja25hbWU7XG5cdC8vIFx0XHRcdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKSAvLyBPUFQg0LzQvtC20L3QviDQtNC10LvQsNGC0Ywg0YHQtdC70LXQutGCINGC0L7Qu9GM0LrQviDQsiDRgdC70YPRh9Cw0LUg0LXRgdC70Lgg0LXRgdGC0Ywg0LTRg9Cx0LvQuNC60LDRgtGLXG5cdC8vIFx0XHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0Ly8gXHRcdFx0XHRcdFx0aWYgKCFkYXRhKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3Rm9ydW1EYXRhID0gW1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0c2x1Zyxcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0dXNlclxuXHQvLyBcdFx0XHRcdFx0XHRcdF1cblx0Ly8gXHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmNyZWF0ZU5ld0ZvcnVtKG5ld0ZvcnVtRGF0YSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIEZvcnVtJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XG5cdC8vIFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGRhdGEpO1xuXHQvLyBcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0fSk7XG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0cmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KTtcblx0Ly8gXHRcdFx0fSAgICAgICAgICAgICAgXG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuXHQvLyBcdFx0fSk7XG5cdC8vIH1cblxuXG5cdGFzeW5jIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHRcdGxldCB1c2VyID0gcmVxLmJvZHlbJ3VzZXInXTtcblx0XHRjb25zdCBzbHVnID0gcmVxLmJvZHlbJ3NsdWcnXTtcblx0XHRjb25zdCB0aXRsZSA9IHJlcS5ib2R5Wyd0aXRsZSddO1xuXG5cdFx0dHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKHVzZXIpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Rm9ydW1EYXRhID0gW1xuXHRcdFx0c2x1Zyxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dXNlci5uaWNrbmFtZVxuXHRcdF1cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmNyZWF0ZU5ld0ZvcnVtKG5ld0ZvcnVtRGF0YSk7XG5cblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGV4c2lzdGluZ0ZvcnVtO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZXhzaXN0aW5nRm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhzaXN0aW5nRm9ydW0pXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFxuXHRnZXREZXRhaWxzIChyZXEsIHJlcykge1xuXHRcdGNvbnN0IHNsdWcgPSByZXEucGFyYW1zWydzbHVnJ107XG5cdFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1ZyhzbHVnKVxuXHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBmb3J1bScgfSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdC8vIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdC8vIFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0Ly8gXHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHQvLyBcdC8vICDQtdGB0YLRjCDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INC90LjQutC+0Lxcblx0Ly8gXHRVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcilcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHRhdXRob3IgPSBkYXRhLm5pY2tuYW1lO1xuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHR9KTtcblx0XHRcdFxuXHQvLyBcdC8vINC10YHRgtGMINC70Lgg0YTQvtGA0YPQvCDQsiDQutC+0YLQvtGA0L7QvCDRhdC+0YLRj9GCINGB0L7Qt9C00LDRgtGMINCy0LXRgtC60YMgXG5cdC8vIFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoZm9ydW1TbHVnKVxuXHQvLyBcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRpZiAoZGF0YSkge1xuXHQvLyBcdFx0XHRcdGZvcnVtU2x1ZyA9IGRhdGEuc2x1Zztcblx0Ly8gXHRcdFx0XHQvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INCy0LXRgtC60LAg0YEg0YLQsNC60LjQvCDQvdCw0LfQstCw0L3QuNC1LCDQtdGB0LvQuCDQtNCwINGC0L4gNDA5XG5cdC8vIFx0XHRcdFx0VGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcS5ib2R5WydzbHVnJ10pXG5cdC8vIFx0XHRcdFx0XHQudGhlbiggdGhyZWFkID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0aWYgKCF0aHJlYWQpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5ib2R5KTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRrZXlWYWx1ZXNbJ2F1dGhvciddID0gYXV0aG9yO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGtleVZhbHVlc1snZm9ydW0nXSA9IGZvcnVtU2x1Zztcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbHVtbnNbaV0gPSAnXCInICsgY29sdW1uc1tpXSArICdcIic7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRUaHJlYWRNb2RlbC5jcmVhdGVOZXdUaHJlYWQoY29sdW1ucywgdmFsdWVzKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIG5ld1RocmVhZCA9PiB7XG5cdFx0XHRcdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Rm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtU2x1ZywgYXV0aG9yKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC50aGVuKCAoKSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygncGFpciBjcmVhdGVkJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW1TbHVnKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC50aGVuKCAoKSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdUaHJlYWQuaWQgPSBwYXJzZUludChuZXdUaHJlYWQuaWQpOyAvLyBwZy1wcm9taXNlINGB0YfQuNGC0LDQtdGCIEJJR1NFUklBTCDRgdGC0YDQvtC60L7QuSDRhdC3INC/0L7Rh9C10LzRg1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1RocmVhZCk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pO1x0XG5cdC8vIFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0dGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTsgLy8gcGctcHJvbWlzZSDRgdGH0LjRgtCw0LXRgiBCSUdTRVJJQUwg0YHRgtGA0L7QutC+0Lkg0YXQtyDQv9C+0YfQtdC80YNcblx0Ly8gXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24odGhyZWFkKTtcblx0Ly8gXHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0fSk7XG5cblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdGFzeW5jIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGxldCBmb3J1bTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cblxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvci5uaWNrbmFtZTtcblx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bS5zbHVnO1xuXHRcdFxuXHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bS5zbHVnLCBhdXRob3Iubmlja25hbWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW0uc2x1Zyk7XG5cdFx0XHRcdHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBleHNpc3RpbmdUaHJlYWQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSk7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZC5pZCA9IHBhcnNlSW50KGV4c2lzdGluZ1RocmVhZC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdUaHJlYWQpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcgISEhIScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gXG5cdFx0XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0Z2V0VGhyZWFkcyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKXtcblx0XHRcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRzQnlGb3J1bVNsdWcoc2x1ZywgcXVlcnlQYXJhbXMpXG5cdFx0XHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhID0gaWRUb0ludChkYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRFMgT0YgRk9SVU0nKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHRcdFx0XHR9KTtcdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1x0XG5cdH1cblxuXHRhc3luYyBnZXRVc2VycyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSc7XG5cdFx0bGV0IGZvcnVtO1xuXHRcdHRyeSB7XG5cdFx0XHRmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdGlmICghZm9ydW0pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHR9IFxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmdldFVzZXJzKGZvcnVtLnNsdWcsIHF1ZXJ5UGFyYW1zKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSUyBJTiBGT1JVTScpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcblxuXHR9IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIGFzeW5jIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRvID0gcmVxLnF1ZXJ5WydyZWxhdGVkJ107XG4gICAgICAgIGxldCBlbnRpdHk7XG4gICAgICAgIGlmIChyZWxhdGVkVG8pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRFbnRpdGllcyA9IHJlbGF0ZWRUby5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgcmVsYXRlZEVudGl0eSBvZiByZWxhdGVkRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3VzZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUocG9zdERhdGEuYXV0aG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdXRob3IgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ3RocmVhZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRlZEVudGl0eSA9PT0gJ2ZvcnVtJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgRm9ydW1Nb2RlbC5nZXRGb3J1bUJ5U2x1Zyhwb3N0RGF0YS5mb3J1bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRpdHkuaWQgPSBwYXJzZUludChlbnRpdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvcnVtID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcblxuICAgICAgICByZXN1bHQucG9zdCA9IHBvc3REYXRhO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVEZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSByZXEucGFyYW1zWydpZCddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgICAgbGV0IHBvc3REYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9zdERhdGEgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWQocG9zdElkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBCWSBJRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgcG9zdCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCBuZXdEYXRhLm1lc3NhZ2UgPT09ICcnKSB7XG4gICAgICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPyBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpIDogcG9zdERhdGEucGFyZW50OyAgICBcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocG9zdERhdGEubWVzc2FnZSAhPT0gbmV3RGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC51cGRhdGVQb3N0KG5ld0RhdGEubWVzc2FnZSwgcG9zdElkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5EIFBPU1QnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbmZsaWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnYWxyZWFkeSBleGlzdGVkIGRhdGEnfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnRocmVhZCA9IHBhcnNlSW50KHJlc3VsdC50aHJlYWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJlbnQgPyBwYXJzZUludChyZXN1bHQucGFyZW50KSA6IHJlc3VsdC5wYXJlbnQ7ICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3N0RGF0YS5pZCA9IHBhcnNlSW50KHBvc3REYXRhLmlkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnRocmVhZCA9IHBhcnNlSW50KHBvc3REYXRhLnRocmVhZCk7XG4gICAgICAgICAgICBwb3N0RGF0YS5wYXJlbnQgPyBwYXJzZUludChwb3N0RGF0YS5wYXJlbnQpIDogcG9zdERhdGEucGFyZW50OyBcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zdENvbnRyb2xsZXI7IiwiaW1wb3J0IFNlcnZpY2VNb2RlbCBmcm9tICcuLi9tb2RlbHMvU2VydmljZU1vZGVsLmpzJztcblxuY2xhc3MgU2VydmljZUNvbnRyb2xsZXIge1xuXG4gICAgYXN5bmMgY291bnRBbGwgKHJlcSwgcmVzKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jb3VudEFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjbGVhckFsbCAocmVxLCByZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHsgICBcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFNlcnZpY2VNb2RlbC5jbGVhckFsbCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ09VTlRJTkcnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlQ29udHJvbGxlcjsiLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFRocmVhZE1vZGVsIGZyb20gJy4uL21vZGVscy9UaHJlYWRNb2RlbC5qcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuaW1wb3J0IFZvdGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvVm90ZU1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY3JlYXRlUG9zdHNMb29wIH0gZnJvbSAnLi9Db250cm9sbGVyVXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuXG5jbGFzcyBUaHJlYWRDb250cm9sbGVyIHtcblxuICAgIGFzeW5jIGNyZWF0ZVBvc3QgKHJlcSwgcmVzKXtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gW11cbiAgICAgICAgLy8gY29uc3QgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbmV3UG9zdHMgPSByZXEuYm9keTtcbiAgICAgICAgbGV0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICAvLyBsZXQgdGhyZWFkRGF0YSA9IHt9XG4gICAgICAgIFxuICAgICAgICAvLyDQtdGB0YLRjCDQu9C4INGC0LDQutCw0Y8g0LLQtdGC0LrQsCDQsiDQsdCw0LfQtSBcbiAgICAgICAgLy8gaWYgKC9eXFxkKyQvLnRlc3QodGhyZWFkU2x1ZykpIHtcbiAgICAgICAgLy8gICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQodGhyZWFkU2x1ZykpXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhyZWFkRGF0YSA9IGRhdGE7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjcmVhdGVQb3N0c0xvb3AocmVxLHJlcywgdGhyZWFkRGF0YSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSkgIFxuICAgICAgICAvLyAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1Zyh0aHJlYWRTbHVnKVxuICAgICAgICAvLyAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRocmVhZERhdGEgPSBkYXRhO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY3JlYXRlUG9zdHNMb29wKHJlcSxyZXMsIHRocmVhZERhdGEpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSkgXG4gICAgICAgIC8vICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlUG9zdHNMb29wKHJlcSxyZXMsIHRocmVhZCk7XG5cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+IDAg0L/QvtGB0YLQvtCyXG4gICAgICAgIGlmICghbmV3UG9zdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3UG9zdHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdm90ZUZvclRocmVhZCAocmVxICxyZXMpIHtcbiAgICAgICAgbGV0IGluaXRWb3RlRGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICBsZXQgdGhyZWFkU2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcblxuICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUoaW5pdFZvdGVEYXRhLm5pY2tuYW1lKVxuICAgICAgICAgICAgLnRoZW4gKCB1c2VyID0+e1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINC10YHRgtGMINC70Lgg0YLQsNC60LDRjyDQstC10YLQutCwINCyINCx0LDQt9C1IFxuICAgICAgICAgICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh0aHJlYWRTbHVnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludCh0aHJlYWRTbHVnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90ZU1vZGVsLnZvdGUoIGluaXRWb3RlRGF0YS52b2ljZSwgdGhyZWFkLmlkLCB1c2VyLm5pY2tuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCB2b3RlRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b3RlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZvaWNlID0gdm90ZURhdGEudm9pY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm90ZURhdGEuZXhpc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWNlID0gdm9pY2UgPT09IDEgPyB2b2ljZSArIDEgOiB2b2ljZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHJlYWRNb2RlbC5pbmNyZW1lbnRWb3Rlc0J5SWQodGhyZWFkLmlkLCB2b2ljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdXBkYXRlVGhyZWFkID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaHJlYWQuaWQgPSBwYXJzZUludCh1cGRhdGVUaHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXBkYXRlVGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKiBFUlJPUiBJTiBVUERBVElORyBUSFJFQUQgVk9URVMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIE1BS0lORyBWT1RFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHRocmVhZFNsdWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGVNb2RlbC52b3RlKCBpbml0Vm90ZURhdGEudm9pY2UsIHRocmVhZC5pZCwgdXNlci5uaWNrbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdm90ZURhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm90ZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2b2ljZSA9IHZvdGVEYXRhLnZvaWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGVEYXRhLmV4aXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2ljZSA9IHZvaWNlID09PSAxID8gdm9pY2UgKyAxIDogdm9pY2UgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhyZWFkTW9kZWwuaW5jcmVtZW50Vm90ZXNCeVNsdWcodGhyZWFkLnNsdWcsIHZvaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCB1cGRhdGVUaHJlYWQgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRocmVhZC5pZCA9IHBhcnNlSW50KHVwZGF0ZVRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVUaHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVEhSRUFEIFZPVEVTJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBNQUtJTkcgVk9URScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBnZXREZXRhaWxzIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSlcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UG9zdHMocmVxLCByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKCFxdWVyeVBhcmFtc1snbGltaXQnXSkge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSAxMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydsaW1pdCddKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeVBhcmFtc1snZGVzYyddID0gcXVlcnlQYXJhbXNbJ2Rlc2MnXSA9PT0gJ3RydWUnO1xuICAgICAgICBxdWVyeVBhcmFtc1snc2luY2UnXSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zWydzaW5jZSddKTtcblxuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgbGV0IHRocmVhZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3Qoc2x1Z09ySWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocmVhZCA9IGF3YWl0IFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAnZmxhdCcgfHwgIXF1ZXJ5UGFyYW1zLnNvcnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLmZsYXRTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGZsYXQgc29ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFBvc3RNb2RlbC50cmVlU29ydCh0aHJlYWQuaWQsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0cmVlIHNvcnQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdwYXJlbnRfdHJlZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnBhcmVudFRyZWVTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHBhcmVudCB0cmVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSByZXN1bHQubWFwKCAocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzUG9zdCA9IHt9O1xuICAgICAgICAgICAgcmVzUG9zdFsnYXV0aG9yJ10gPSBwb3N0LmF1dGhvcjtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2NyZWF0ZWQnXSA9IHBvc3QuY3JlYXRlZDtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ2ZvcnVtJ10gPSBwb3N0LmZvcnVtO1xuICAgICAgICAgICAgcmVzUG9zdFsnaWQnXSA9IHBhcnNlSW50KHBvc3QuaWQpO1xuICAgICAgICAgICAgcmVzUG9zdFsnbWVzc2FnZSddID0gcG9zdC5tZXNzYWdlO1xuICAgICAgICAgICAgcmVzUG9zdFsncGFyZW50J10gPSBwYXJzZUludChwb3N0LnBhcmVudCk7XG4gICAgICAgICAgICByZXNQb3N0Wyd0aHJlYWQnXSA9IHBhcnNlSW50KHBvc3QudGhyZWFkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc1Bvc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRocmVhZCAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgc2x1Z09ySWQgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviDQv9GD0YHRgtC+0LUgYm9keVxuICAgICAgICAvLyDQuNC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsdGL0LvQuCDQv9GA0LjRgdC70LDQvdGLINC60LDQuiDQv9GD0YHRgtGL0LUg0YHRgtGA0L7QutC4XG4gICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGggfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBUaHJlYWRNb2RlbC51cGRhdGVUaHJlYWQodGhyZWFkLnNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogJ2FscmVhZHkgZXhpc3RlZCBkYXRhJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaHJlYWRDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gICAgLy8gY3JlYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAvLyAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgIC8vICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5WydlbWFpbCddO1xuICAgIC8vICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbClcbiAgICAvLyAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXNlckRhdGEgPSBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlcS5ib2R5WydmdWxsbmFtZSddLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxLmJvZHlbJ2Fib3V0J10sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXEuYm9keVsnZW1haWwnXVxuICAgIC8vICAgICAgICAgICAgICAgICBdO1xuICAgIC8vICAgICAgICAgICAgICAgICBVc2VyTW9kZWwuY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZGF0YSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKGRhdGEpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9ICAgIFxuXG4gICAgYXN5bmMgY3JlYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5WydlbWFpbCddO1xuICAgICAgICBjb25zdCBuZXdVc2VyRGF0YSA9IFtcbiAgICAgICAgICAgIG5pY2tuYW1lLFxuICAgICAgICAgICAgcmVxLmJvZHlbJ2Z1bGxuYW1lJ10sXG4gICAgICAgICAgICByZXEuYm9keVsnYWJvdXQnXSxcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdVc2VyO1xuICAgICAgICAgICAgdHJ5IHtcblx0XHRcdFx0ZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuaWNrbmFtZSwgZW1haWwpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZXhpc3RpbmdVc2VyKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0sgT1IgRU1BSUwnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIGdldFVzZXIgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKVxuICAgICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0gIFxuICAgIFxuICAgIC8vIHVwZGF0ZVVzZXIgKHJlcSwgcmVzKSB7XG4gICAgLy8gICAgIGNvbnN0IG5pY2tuYW1lID0gcmVxLnBhcmFtc1snbmlja25hbWUnXTtcbiAgICAvLyAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKG5ld0RhdGEpKTtcblxuICAgIC8vICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpIC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgLy8gICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgLy8gICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgaWYgKE9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoKSB7IC8vINC10YHQu9C4INGC0LXQu9C+INC30LDQv9GA0L7RgdCwINC90LUg0L/Rg9GB0YLQvtC1IFxuICAgIC8vICAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgIC8vICAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAvLyAgICAgICAgIGlmICghY29sdW1ucy5sZW5ndGgpIHsgLy8g0LXRgdC70Lgg0LLRgdC1INC00LDQvdC90YvQtSDQsiDRgdGC0L7Qu9Cx0YbQsNGFINCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAvLyAgICAgICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpIC8vINC/0YDQvtGB0YLQviDQstC+0LfQstGA0LDRidCw0LXQvCDQv9GA0L7RhNC40LvRjFxuICAgIC8vICAgICAgICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7ICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pOyBcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7IC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0LrQsNC60LjQtS3RgtC+INC00LDQvdC90YvQtSDQsdGL0LvQuCDQvdC1INC/0YPRgdGC0YvQtVxuICAgIC8vICAgICAgICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmV3RGF0YVsnbmlja25hbWUnXSwgbmV3RGF0YVsnZW1haWwnXSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmlja25hbWUpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleVZhbHVlcyk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTW9kZWwudXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLGtleVZhbHVlcylcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkcgVVNFUicpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KSAgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQutC+0L3RhNC70LjQutGCINC00LDQvdC90YvRhVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiBcIlVzZXIgd2l0aCBzdWNoIG5pY2tuYW1lIG9yIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0tOQU1FIE9SIEVNQUlMJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfVxuXG5cbiAgICAvLyAgICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0YLQtdC70L4g0LfQsNC/0YDQvtGB0LAg0L/Rg9GB0YLQvtC1XG4gICAgLy8gICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpIC8vINC/0YDQvtGB0YLQviDQstC+0LfQstGA0LDRidCw0LXQvCDQv9GA0L7RhNC40LvRjFxuICAgIC8vICAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9IFxuXG4gICAgYXN5bmMgdXBkYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhuZXdEYXRhKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0LrQsNC60LjQtS3RgtC+INC00LDQvdC90YvQtSDQsdGL0LvQuCDQvdC1INC/0YPRgdGC0YvQtVxuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC51cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsa2V5VmFsdWVzKVxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6IFwiVXNlciB3aXRoIHN1Y2ggbmlja25hbWUgb3IgZW1haWwgYWxyZWFkeSBleGlzdHNcIiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyQ29udHJvbGxlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vcm91dGVycy9Vc2VyUm91dGVzLmpzJztcbmltcG9ydCBmb3J1bVJvdXRlciBmcm9tICcuL3JvdXRlcnMvRm9ydW1Sb3V0ZXMuanMnO1xuaW1wb3J0IHRocmVhZFJvdXRlciBmcm9tICcuL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzJztcbmltcG9ydCBwb3N0Um91dGVyIGZyb20gJy4vcm91dGVycy9Qb3N0Um91dGVzLmpzJztcbmltcG9ydCBzZXJ2aWNlUm91dGVyIGZyb20gJy4vcm91dGVycy9TZXJ2aWNlUm91dGVzLmpzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuYXBwLnVzZSgnL2FwaS91c2VyJywgdXNlclJvdXRlcik7XG5hcHAudXNlKCcvYXBpL2ZvcnVtJywgZm9ydW1Sb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS90aHJlYWQnLCB0aHJlYWRSb3V0ZXIpO1xuYXBwLnVzZSgnL2FwaS9wb3N0JywgcG9zdFJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3NlcnZpY2UnLCBzZXJ2aWNlUm91dGVyKTtcbmFwcC5nZXQoJy8nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbycpO1xufSlcblxuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBGb3J1bU1vZGVsIHtcblxuICAgIGdldEZvcnVtQnlTbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdGb3J1bSAobmV3Rm9ydW1EYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gZm9ydW1zIChzbHVnLCB0aXRsZSwgXCJ1c2VyXCIpIFZBTFVFUyAoJDEsICQyLCAkMykgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIG5ld0ZvcnVtRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcnVtU2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBzbHVnIEZST00gZm9ydW1zIFdIRVJFIHNsdWc9JDEnLCBbc2x1Z10pXG4gICAgfVxuXG4gICAgY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bVNsdWcsIG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gZm9ydW11c2VycyAoZm9ydW1zbHVnLCB1c2Vybmlja25hbWUpIFZBTFVFUyAoJDEsICQyKSBPTiBDT05GTElDVCBPTiBDT05TVFJBSU5UIHVuaXF1ZV9mb3J1bXVzZXJfcGFpciBETyBOT1RISU5HIFJFVFVSTklORyAqJywgW2ZvcnVtU2x1ZyxuaWNrbmFtZV0pOyBcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRUaHJlYWRzKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdVUERBVEUgZm9ydW1zIFNFVCB0aHJlYWRzID0gdGhyZWFkcyArIDEgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50UG9zdHMoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBmb3J1bXMgU0VUIHBvc3RzID0gcG9zdHMgKyAxIFdIRVJFIHNsdWc9JDEgUkVUVVJOSU5HIConLCBbc2x1Z10pO1xuICAgIH1cblxuICAgIGdldFVzZXJzIChzbHVnLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBsZXQgcXVlcnk7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMSBBTkQgVS5uaWNrbmFtZT4kMlxuICAgICAgICAgICAgYCxbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDEgQU5EIFUubmlja25hbWU8JDJcbiAgICAgICAgICAgIGAsIFtzbHVnLCBxdWVyeVBhcmFtcy5zaW5jZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBwZ3AuYXMuZm9ybWF0KGBcbiAgICAgICAgICAgIFNFTEVDVCAqIEZST00gZm9ydW11c2VycyBBUyBGVVxuICAgICAgICAgICAgSk9JTiB1c2VycyBBUyBVIE9OIEZVLnVzZXJuaWNrbmFtZSA9IFUubmlja25hbWVcbiAgICAgICAgICAgIFdIRVJFIEZVLmZvcnVtc2x1Zz0kMWAsIFtzbHVnXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGAkMTpyYXcgXG4gICAgICAgICAgICBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDNgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnVS5uaWNrbmFtZSBERVNDJyA6ICdVLm5pY2tuYW1lIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bU1vZGVsOyAiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgUG9zdE1vZGVsIHtcbiAgICBcbiAgICBjcmVhdGVOZXdQb3N0IChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYyArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGMgKz0gJyknO1xuXG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ICs9ICckJyArIChpKzEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHYgKz0gJyknO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyBwb3N0cyAnICsgYyArICcgVkFMVUVTICcgKyB2ICsgJyBSRVRVUk5JTkcgKic7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQb3N0c0J5UXVlcnkgKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUocXVlcnkpO1xuICAgIH1cblxuICAgIGdldFBvc3RCeUlkQW5kVGhyZWFkSWQgKGlkLCB0aHJlYWRJZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEgQU5EIHRocmVhZD0kMicsIFtpZCwgdGhyZWFkSWRdKVxuICAgIH1cblxuICAgIGdldFBvc3RCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgaWQ9JDEnLCBbaWRdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3N0IChtZXNzYWdlLCBpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBwb3N0cyBTRVQgXCJpc0VkaXRlZFwiPVRSVUUsIFwibWVzc2FnZVwiPSQxIFdIRVJFIGlkPSQyIFJFVFVSTklORyAqJywgW21lc3NhZ2UsaWRdKTtcbiAgICB9XG5cbiAgICBcbiAgICBmbGF0U29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGlmICggcXVlcnlQYXJhbXMuc2luY2UgKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxIEFORCBpZDwkMlxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDEgQU5EIGlkPiQyXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBERVNDLCBpZCBERVNDIExJTUlUICQzYCwgXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHMgV0hFUkUgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgQVNDLCBpZCBBU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyZWVTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcGF0aFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdwYXRodG9wb3N0IERFU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3QgPiAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICBXSEVSRSB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3QgPCAoU0VMRUNUIHBhdGh0b3Bvc3QgRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNGAsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBcbiAgICAgICAgICAgIE9SREVSIEJZICQyOnJhdyBMSU1JVCAkM2AsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTsgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcGFyZW50VHJlZVNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BpZC5wYXJlbnRfaWQgREVTQywgcGF0aHRvcG9zdCBBU0MnIDogJ3BhdGh0b3Bvc3QgQVNDJztcbiAgICAgICAgY29uc3QgaWRTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAnaWQgREVTQycgOiAnaWQgQVNDJ1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3RbMV0gPiAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxIEFORCBwYXRodG9wb3N0WzFdIDwgKFNFTEVDVCBwYXRodG9wb3N0WzFdIEZST00gcG9zdHMgV0hFUkUgaWQ9JDIpXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTsgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0TW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgU2VydmljZU1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjb3VudEFsbCgpIHtcbiAgICAgICAgbGV0IGZvcnVtID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIGZvcnVtcycpO1xuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSBwb3N0cycpO1xuICAgICAgICBsZXQgdGhyZWFkID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHRocmVhZHMnKTtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXCJmb3J1bVwiOiBwYXJzZUludChmb3J1bS5jb3VudCksXG4gICAgICAgICAgICBcInBvc3RcIjogcGFyc2VJbnQocG9zdC5jb3VudCksXG4gICAgICAgICAgICBcInRocmVhZFwiOiBwYXJzZUludCh0aHJlYWQuY291bnQpLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IHBhcnNlSW50KHVzZXIuY291bnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhc3luYyBjbGVhckFsbCgpIHtcblxuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIGZvcnVtcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSBwb3N0cyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHRocmVhZHMgQ0FTQ0FERScpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdXNlcnMgQ0FTQ0FERScpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IGZvcnVtLFxuICAgICAgICAgICAgXCJwb3N0XCI6IHBvc3QsXG4gICAgICAgICAgICBcInRocmVhZFwiOiB0aHJlYWQsXG4gICAgICAgICAgICBcInVzZXJcIjogdXNlclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmljZU1vZGVsOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuXG5jbGFzcyBUaHJlYWRNb2RlbCB7XG4gICAgXG4gICAgYXN5bmMgY3JlYXRlTmV3VGhyZWFkIChjb2x1bW5zLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGMgPSAnKCc7IFxuICAgICAgICBsZXQgdiA9ICcoJztcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uc1tpXSA9PT0gJ3NsdWcnKSB7XG4gICAgICAgICAgICAgICAgcmVtZW1iZXIgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHRocmVhZHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArIGAgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKmA7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnksIHZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBUSFJFQUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5U2x1ZyAoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGdldFRocmVhZEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGlkPSQxJywgW2lkXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRzQnlGb3J1bVNsdWcgKGZvcnVtU2x1ZywgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMuZGVzYyA9IHF1ZXJ5UGFyYW1zLmRlc2MgPT09ICd0cnVlJ1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI+PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB0aHJlYWRzIFdIRVJFIGZvcnVtPSQxIEFORCBcImNyZWF0ZWRcIjw9JDIgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0JywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmICghcXVlcnlQYXJhbXMuc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBPUkRFUiBCWSAkMjpyYXcgTElNSVQgJDMnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeVNsdWcgKHNsdWcsIHZvaWNlKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZSgnVVBEQVRFIHRocmVhZHMgU0VUIHZvdGVzID0gdm90ZXMgKyAkMiBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWcsdm9pY2VdKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRWb3Rlc0J5SWQgKGlkLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgaWQ9JDEgUkVUVVJOSU5HIConLCBbaWQsdm9pY2VdKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUaHJlYWQgKHNsdWcsIGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3RocmVhZHMnfSxudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJzbHVnXFxcIiA9IFxcJ1wiICsgIHNsdWcgKyBcIlxcJyBSRVRVUk5JTkcgKlwiO1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGhyZWFkTW9kZWw7XG4iLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWUgKG5pY2tuYW1lKSB7XG4gICAgICAgIC8vIG9uZU9yTm9uZSDQstC+0LfQstGA0LDRidCw0LXRgiDQvdGD0Lsg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJywgW25pY2tuYW1lXSlcbiAgICB9XG5cbiAgICBnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwgKG5pY2ssIG1haWwpIHsgLy8g0LzQvtC20L3QviDQutCw0Lot0YLQviDQvdC1INC/0YDQvtGF0L7QtNC40YLRjNGB0Y8g0L/QviDQstGB0LXQuSDRgtCw0LHQu9C40YbQtSwg0LAg0L7RgdGC0LDQvdCw0LLQu9C40LLQsNGC0YHRjyDQutCw0Log0YLQvtC70YzQutC+INC90LDRiNC70LggMSDQstGF0L7QttC00LXQvdC40LVcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBuaWNrIHx8ICcnO1xuICAgICAgICBjb25zdCBlbWFpbCA9IG1haWwgfHwgJyc7XG4gICAgICAgIC8vIG1hbnlPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQsiDQtdGB0LvQuCDQvdC10YIg0YHRgtGA0L7QulxuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxIE9SIGVtYWlsPSQyJywgW25pY2tuYW1lLCBlbWFpbF0pOyBcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhID0gW10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZSgnSU5TRVJUIElOVE8gdXNlcnMgKG5pY2tuYW1lLCBmdWxsbmFtZSwgYWJvdXQsIGVtYWlsKSBWQUxVRVMgKCQxLCAkMiwgJDMgLCQ0KSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3VXNlckRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVVNFUicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcblxuICAgIC8vICAgICBjb25zdCBxdWVyeSA9IHBncC5oZWxwZXJzLnVwZGF0ZShrZXlWYWx1ZXMsIGNvbHVtbnMsIHt0YWJsZTogJ3VzZXJzJ30sIG51bGwsIHtlbXB0eVVwZGF0ZTogJ2NvbmZsaWN0J30pICsgXCIgV0hFUkUgXFxcIm5pY2tuYW1lXFxcIiA9IFxcJ1wiICsgIG5pY2tuYW1lICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJRVUVSWVwiLCBxdWVyeSk7XG4gICAgLy8gICAgIHJldHVybiBhd2FpdCBkYkluc3RhbmNlLm9uZU9yTm9uZShxdWVyeSk7XG4gICAgLy8gfVxuXG5cbiAgICBhc3luYyB1cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsIGtleVZhbHVlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNC70YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQuNC80Y8g0LjQvNC10L3QvdC+INGC0LDQuiDQutCw0Log0L7QvdC+INCx0YvQu9C+INC30LDQuNGB0LDQvdC+XG4gICAgLypcbiAgICDQutCw0LfQsNC70L7RgdGMINCx0Ysg0LzQsNGB0LvQviDQvNCw0YHQu9GP0L3QvtC1LCDQvdC+INGN0YLQviDQvdGD0LbQvdC+INGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjFxuICAgINC40LzRjyDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0L/QuNGB0LDQvdC+INCyINGC0LDQsdC70LjRhtC1IHVzZXJzICjQvdC1INCyINCy0LXRgNGF0L3QtdC8INC40LvQuCDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQsNGFKVxuICAgICovXG4gICAgZ2V0VXNlck5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCBuaWNrbmFtZSBGUk9NIHVzZXJzIFdIRVJFIG5pY2tuYW1lPSQxJywgW25pY2tuYW1lXSlcbiAgICB9XG5cblxufSBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcblxuY2xhc3MgVm90ZU1vZGVsIHtcblxuICAgIHZvdGUgKHZvaWNlLCB0aHJlYWRJZCwgbmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKGBJTlNFUlQgSU5UTyB2b3RlcyAodm9pY2UsIHRocmVhZCwgbmlja25hbWUpIFZBTFVFUyAoJDEsICQyLCAkMykgT04gQ09ORkxJQ1QgT04gQ09OU1RSQUlOVCB1bmlxdWVUaHJlYWROaWNrbmFtZSBETyBcbiAgICAgICAgVVBEQVRFIFNFVCB2b2ljZT0kMSBXSEVSRSB2b3Rlcy52b2ljZTw+JDEgUkVUVVJOSU5HICosICh4bWF4Ojp0ZXh0OjppbnQgPiAwKSBhcyBleGlzdGVkYCwgW3ZvaWNlLCB0aHJlYWRJZCwgbmlja25hbWVdKTsgXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWb3RlTW9kZWw7IFxuIiwiZXhwb3J0IGNvbnN0IHBncCA9IHJlcXVpcmUoJ3BnLXByb21pc2UnKSgpO1xuXG5jb25zdCBkYk9wdGlvbnMgPSB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogNTQzMixcbiAgICBkYXRhYmFzZTogJ2ZvcnVtJyxcbiAgICB1c2VyOiAnZXJtYWtmb3J1bScsXG4gICAgcGFzc3dvcmQ6ICcxMjMnXG59XG5cbmNvbnN0IGRiSW5zdGFuY2UgPSBwZ3AoZGJPcHRpb25zKTtcbmV4cG9ydCBkZWZhdWx0IGRiSW5zdGFuY2U7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IEZvcnVtQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Gb3J1bUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBmb3J1bVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmZvcnVtUm91dGVyLnBvc3QoJy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlRm9ydW0pO1xuZm9ydW1Sb3V0ZXIucG9zdCgnLzpzbHVnL2NyZWF0ZScsIEZvcnVtQ29udHJvbGxlci5jcmVhdGVUaHJlYWRJbkZvcnVtKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL2RldGFpbHMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy90aHJlYWRzJywgRm9ydW1Db250cm9sbGVyLmdldFRocmVhZHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdXNlcnMnLCBGb3J1bUNvbnRyb2xsZXIuZ2V0VXNlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J1bVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFBvc3RDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLmpzJztcblxuY29uc3QgcG9zdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBvc3RSb3V0ZXIuZ2V0KCcvOmlkL2RldGFpbHMnLCBQb3N0Q29udHJvbGxlci5nZXREZXRhaWxzKTtcbnBvc3RSb3V0ZXIucG9zdCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIudXBkYXRlRGV0YWlscyk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBTZXJ2aWNlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9TZXJ2aWNlQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHNlcnZpY2VSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5zZXJ2aWNlUm91dGVyLmdldCgnL3N0YXR1cycsIFNlcnZpY2VDb250cm9sbGVyLmNvdW50QWxsKTtcbnNlcnZpY2VSb3V0ZXIucG9zdCgnL2NsZWFyJywgU2VydmljZUNvbnRyb2xsZXIuY2xlYXJBbGwpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlUm91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgVGhyZWFkQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9UaHJlYWRDb250cm9sbGVyLmpzJztcblxuY29uc3QgdGhyZWFkUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9jcmVhdGUnLCBUaHJlYWRDb250cm9sbGVyLmNyZWF0ZVBvc3QpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC92b3RlJywgVGhyZWFkQ29udHJvbGxlci52b3RlRm9yVGhyZWFkKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci5nZXREZXRhaWxzKTtcbnRocmVhZFJvdXRlci5nZXQoJy86c2x1Z19vcl9pZC9wb3N0cycsIFRocmVhZENvbnRyb2xsZXIuZ2V0UG9zdHMpO1xudGhyZWFkUm91dGVyLnBvc3QoJy86c2x1Z19vcl9pZC9kZXRhaWxzJywgVGhyZWFkQ29udHJvbGxlci51cGRhdGVUaHJlYWQpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRocmVhZFJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzJztcblxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9jcmVhdGUnLCBVc2VyQ29udHJvbGxlci5jcmVhdGVVc2VyKTtcbnVzZXJSb3V0ZXIucG9zdCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcik7XG51c2VyUm91dGVyLmdldCgnLzpuaWNrbmFtZS9wcm9maWxlJywgVXNlckNvbnRyb2xsZXIuZ2V0VXNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7IiwiZXhwb3J0IGNvbnN0IGhhcnZlc3RDb2x1bW5zID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlzID0gW11cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgY29uc3QgaGFydmVzdFZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBPYmplY3QudmFsdWVzKGRhdGEpKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5cbmV4cG9ydCBjb25zdCBoYXJ2ZXN0S2V5VmFsdWVzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCBrZXlWYWx1ZXMgPSB7fVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICAgICAga2V5VmFsdWVzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleVZhbHVlcztcbn1cblxuZXhwb3J0IGNvbnN0IGlkVG9JbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldLmlkID0gcGFyc2VJbnQoZGF0YVtpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgY29uc3QgdmFsU3RyID0gZnVuY3Rpb24gKHZhbHVlcywgbm9Eb3QpIHtcbiAgICBsZXQgdiA9ICcgKCc7XG4gICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCBpICE9PSAyKSB7XG4gICAgICAgICAgICB2ICs9IFwiJ1wiICsgdmFsdWVzW2ldICsgXCInXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ICs9IHZhbHVlc1tpXTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChpICE9PSB2YWx1ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdiArPSAnLCAnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChub0RvdCkge1xuICAgICAgICB2ICs9ICcpICc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB2ICs9ICcpLCAnOyBcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZy1wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9