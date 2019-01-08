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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/controllers/ControllerUtils.js":
/*!***********************************************!*\
  !*** ./server/controllers/ControllerUtils.js ***!
  \***********************************************/
/*! exports provided: createPostsLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostsLoop", function() { return createPostsLoop; });
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./server/models/UserModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/PostModel.js */ "./server/models/PostModel.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./server/utils.js");
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

/***/ "./server/controllers/ForumController.js":
/*!***********************************************!*\
  !*** ./server/controllers/ForumController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./server/models/ThreadModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./server/utils.js");
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
        // console.log('GETTED DATA', data);
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

/***/ "./server/controllers/PostController.js":
/*!**********************************************!*\
  !*** ./server/controllers/PostController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./server/models/ThreadModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/PostModel.js */ "./server/models/PostModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./server/utils.js");
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
                relatedTo = req.query['related']; // console.log('RELATION', typeof(relatedTo));

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
                console.log('RELATION', relatedTo);
                postData.id = parseInt(postData.id);
                postData.thread = parseInt(postData.thread);
                result.post = postData;
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

/***/ "./server/controllers/ServiceController.js":
/*!*************************************************!*\
  !*** ./server/controllers/ServiceController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ServiceModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ServiceModel.js */ "./server/models/ServiceModel.js");
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
                console.log('-------', result);
                _context.next = 13;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('--------------------------------------------');
                console.log(_context.t0);
                console.log('ERROR IN COUNTING');
                return _context.abrupt("return", res.status(500).json({
                  message: "crash"
                }));

              case 13:
                console.log(result);
                return _context.abrupt("return", res.status(200).json(result));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
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
                console.log(result);
                return _context2.abrupt("return", res.status(200).end());

              case 14:
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

/***/ "./server/controllers/ThreadController.js":
/*!************************************************!*\
  !*** ./server/controllers/ThreadController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ForumModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ForumModel.js */ "./server/models/ForumModel.js");
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./server/models/UserModel.js");
/* harmony import */ var _models_ThreadModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ThreadModel.js */ "./server/models/ThreadModel.js");
/* harmony import */ var _models_PostModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/PostModel.js */ "./server/models/PostModel.js");
/* harmony import */ var _models_VoteModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/VoteModel.js */ "./server/models/VoteModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ "./server/utils.js");
/* harmony import */ var _ControllerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ControllerUtils.js */ "./server/controllers/ControllerUtils.js");
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
                    } // console.log(thread);


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

/***/ "./server/controllers/UserController.js":
/*!**********************************************!*\
  !*** ./server/controllers/UserController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel.js */ "./server/models/UserModel.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./server/utils.js");
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
                console.log(newData, nickname);
                console.log(user);
                keyValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["harvestKeyValues"])(newData);
                columns = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["harvestColumns"])(newData);

                if (!(!Object.values(newData).length || !columns.length)) {
                  _context2.next = 22;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json(user));

              case 22:
                _context2.next = 24;
                return _models_UserModel_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateUser(nickname, columns, keyValues);

              case 24:
                result = _context2.sent;

                if (result) {
                  _context2.next = 29;
                  break;
                }

                return _context2.abrupt("return", res.status(409).json({
                  message: "User with such nickname or email already exists"
                }));

              case 29:
                return _context2.abrupt("return", res.status(200).json(result));

              case 30:
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

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routers_UserRoutes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routers/UserRoutes.js */ "./server/routers/UserRoutes.js");
/* harmony import */ var _routers_ForumRoutes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers/ForumRoutes.js */ "./server/routers/ForumRoutes.js");
/* harmony import */ var _routers_ThreadRoutes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/ThreadRoutes.js */ "./server/routers/ThreadRoutes.js");
/* harmony import */ var _routers_PostRoutes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routers/PostRoutes.js */ "./server/routers/PostRoutes.js");
/* harmony import */ var _routers_ServiceRoutes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routers/ServiceRoutes.js */ "./server/routers/ServiceRoutes.js");






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

/***/ "./server/models/ForumModel.js":
/*!*************************************!*\
  !*** ./server/models/ForumModel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./server/modules/DataBaseModule.js");
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
      console.log(queryParams);

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

/***/ "./server/models/PostModel.js":
/*!************************************!*\
  !*** ./server/models/PostModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./server/modules/DataBaseModule.js");
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
      var query = 'INSERT INTO posts ' + c + ' VALUES ' + v + ' RETURNING *'; // console.log(query);

      return _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__["default"].one(query, values);
    }
  }, {
    key: "createNewPostsByQuery",
    value: function createNewPostsByQuery(query) {
      console.log(query);
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

/***/ "./server/models/ServiceModel.js":
/*!***************************************!*\
  !*** ./server/models/ServiceModel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./server/modules/DataBaseModule.js");
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
                console.log(result);
                return _context.abrupt("return", result);

              case 15:
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
                console.log(result);
                return _context2.abrupt("return", result);

              case 15:
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

/***/ "./server/models/ThreadModel.js":
/*!**************************************!*\
  !*** ./server/models/ThreadModel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./server/modules/DataBaseModule.js");
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
        var remember, c, v, i, _i, query;

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

/***/ "./server/models/UserModel.js":
/*!************************************!*\
  !*** ./server/models/UserModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./server/modules/DataBaseModule.js");
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

/***/ "./server/models/VoteModel.js":
/*!************************************!*\
  !*** ./server/models/VoteModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DataBaseModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataBaseModule.js */ "./server/modules/DataBaseModule.js");
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

/***/ "./server/modules/DataBaseModule.js":
/*!******************************************!*\
  !*** ./server/modules/DataBaseModule.js ***!
  \******************************************/
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

/***/ "./server/routers/ForumRoutes.js":
/*!***************************************!*\
  !*** ./server/routers/ForumRoutes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ForumController.js */ "./server/controllers/ForumController.js");


var forumRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
forumRouter.post('/create', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createForum);
forumRouter.post('/:slug/create', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createThreadInForum);
forumRouter.get('/:slug/details', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails);
forumRouter.get('/:slug/threads', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getThreads);
forumRouter.get('/:slug/users', _controllers_ForumController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUsers);
/* harmony default export */ __webpack_exports__["default"] = (forumRouter);

/***/ }),

/***/ "./server/routers/PostRoutes.js":
/*!**************************************!*\
  !*** ./server/routers/PostRoutes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/PostController.js */ "./server/controllers/PostController.js");


var postRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
postRouter.get('/:id/details', _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails);
postRouter.post('/:id/details', _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDetails);
/* harmony default export */ __webpack_exports__["default"] = (postRouter);

/***/ }),

/***/ "./server/routers/ServiceRoutes.js":
/*!*****************************************!*\
  !*** ./server/routers/ServiceRoutes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ServiceController.js */ "./server/controllers/ServiceController.js");


var serviceRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
serviceRouter.get('/status', _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_1__["default"].countAll);
serviceRouter.post('/clear', _controllers_ServiceController_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearAll);
/* harmony default export */ __webpack_exports__["default"] = (serviceRouter);

/***/ }),

/***/ "./server/routers/ThreadRoutes.js":
/*!****************************************!*\
  !*** ./server/routers/ThreadRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ThreadController.js */ "./server/controllers/ThreadController.js");


var threadRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
threadRouter.post('/:slug_or_id/create', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPost);
threadRouter.post('/:slug_or_id/vote', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].voteForThread);
threadRouter.get('/:slug_or_id/details', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetails);
threadRouter.get('/:slug_or_id/posts', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPosts);
threadRouter.post('/:slug_or_id/details', _controllers_ThreadController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateThread);
/* harmony default export */ __webpack_exports__["default"] = (threadRouter);

/***/ }),

/***/ "./server/routers/UserRoutes.js":
/*!**************************************!*\
  !*** ./server/routers/UserRoutes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/UserController.js */ "./server/controllers/UserController.js");


var userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
userRouter.post('/:nickname/create', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__["default"].createUser);
userRouter.post('/:nickname/profile', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateUser);
userRouter.get('/:nickname/profile', _controllers_UserController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUser);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),

/***/ "./server/utils.js":
/*!*************************!*\
  !*** ./server/utils.js ***!
  \*************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL1RocmVhZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL0ZvcnVtTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9Qb3N0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9TZXJ2aWNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9UaHJlYWRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL1ZvdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVycy9Gb3J1bVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVycy9Qb3N0Um91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcnMvVGhyZWFkUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjcmVhdGVQb3N0c0xvb3AiLCJyZXEiLCJyZXMiLCJ0aHJlYWREYXRhIiwicmVzdWx0IiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsIm5ld1Bvc3RzIiwiYm9keSIsInBvc3QiLCJhdXRob3IiLCJVc2VyTW9kZWwiLCJnZXRVc2VyTmlja25hbWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyIsInBhcmVudCIsIlBvc3RNb2RlbCIsImdldFBvc3RCeUlkQW5kVGhyZWFkSWQiLCJpZCIsInBhcmVudFBvc3QiLCJrZXlWYWx1ZXMiLCJoYXJ2ZXN0S2V5VmFsdWVzIiwiZm9ydW0iLCJjb2x1bW5zIiwiaGFydmVzdENvbHVtbnMiLCJpIiwibGVuZ3RoIiwidmFsdWVzIiwiaGFydmVzdFZhbHVlcyIsImNyZWF0ZU5ld1Bvc3QiLCJhZGRlZFBvc3QiLCJwYXJzZUludCIsInRocmVhZCIsInB1c2giLCJGb3J1bU1vZGVsIiwiY3JlYXRlRm9ydW1Vc2VyUGFpciIsImluY3JlbWVudFBvc3RzIiwic2VuZCIsIkZvcnVtQ29udHJvbGxlciIsInVzZXIiLCJzbHVnIiwidGl0bGUiLCJuZXdGb3J1bURhdGEiLCJjcmVhdGVOZXdGb3J1bSIsImdldEZvcnVtQnlTbHVnIiwiZXhzaXN0aW5nRm9ydW0iLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmb3J1bVNsdWciLCJnZXRGb3J1bVNsdWciLCJUaHJlYWRNb2RlbCIsImNyZWF0ZU5ld1RocmVhZCIsImluY3JlbWVudFRocmVhZHMiLCJnZXRUaHJlYWRCeVNsdWciLCJleHNpc3RpbmdUaHJlYWQiLCJxdWVyeVBhcmFtcyIsInF1ZXJ5IiwiZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIiwiaWRUb0ludCIsImRlc2MiLCJnZXRVc2VycyIsIlBvc3RDb250cm9sbGVyIiwicG9zdElkIiwiZ2V0UG9zdEJ5SWQiLCJwb3N0RGF0YSIsInJlbGF0ZWRUbyIsInJlbGF0ZWRFbnRpdGllcyIsInNwbGl0IiwicmVsYXRlZEVudGl0eSIsImdldFVzZXJCeU5pY2tuYW1lIiwiZW50aXR5IiwiZ2V0VGhyZWFkQnlJZCIsIm5ld0RhdGEiLCJPYmplY3QiLCJ1cGRhdGVQb3N0IiwiU2VydmljZUNvbnRyb2xsZXIiLCJTZXJ2aWNlTW9kZWwiLCJjb3VudEFsbCIsImNsZWFyQWxsIiwiZW5kIiwiVGhyZWFkQ29udHJvbGxlciIsInNsdWdPcklkIiwidGVzdCIsIm1lc2FnZSIsImluaXRWb3RlRGF0YSIsInRocmVhZFNsdWciLCJWb3RlTW9kZWwiLCJ2b3RlIiwidm9pY2UiLCJ2b3RlRGF0YSIsImV4aXN0ZWQiLCJpbmNyZW1lbnRWb3Rlc0J5SWQiLCJ1cGRhdGVUaHJlYWQiLCJpbmNyZW1lbnRWb3Rlc0J5U2x1ZyIsInNvcnQiLCJmbGF0U29ydCIsInRyZWVTb3J0IiwicGFyZW50VHJlZVNvcnQiLCJtYXAiLCJyZXNQb3N0IiwiY3JlYXRlZCIsIlVzZXJDb250cm9sbGVyIiwiZW1haWwiLCJuZXdVc2VyRGF0YSIsImNyZWF0ZU5ld1VzZXIiLCJnZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwiLCJleGlzdGluZ1VzZXIiLCJ1cGRhdGVVc2VyIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInVzZXJSb3V0ZXIiLCJmb3J1bVJvdXRlciIsInRocmVhZFJvdXRlciIsInBvc3RSb3V0ZXIiLCJzZXJ2aWNlUm91dGVyIiwiZ2V0IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZGJJbnN0YW5jZSIsIm9uZU9yTm9uZSIsInNpbmNlIiwicGdwIiwiYXMiLCJmb3JtYXQiLCJtYW55T3JOb25lIiwidG9TdHJpbmciLCJsaW1pdCIsImMiLCJ2Iiwib25lIiwidGhyZWFkSWQiLCJwYXRoU29ydFJ1bGUiLCJpZFNvcnRSdWxlIiwiY291bnQiLCJub25lIiwicmVtZW1iZXIiLCJoZWxwZXJzIiwidXBkYXRlIiwidGFibGUiLCJlbXB0eVVwZGF0ZSIsIm5pY2siLCJtYWlsIiwicmVxdWlyZSIsImRiT3B0aW9ucyIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiUm91dGVyIiwiY3JlYXRlRm9ydW0iLCJjcmVhdGVUaHJlYWRJbkZvcnVtIiwiZ2V0RGV0YWlscyIsImdldFRocmVhZHMiLCJ1cGRhdGVEZXRhaWxzIiwiY3JlYXRlUG9zdCIsInZvdGVGb3JUaHJlYWQiLCJnZXRQb3N0cyIsImNyZWF0ZVVzZXIiLCJnZXRVc2VyIiwia2V5cyIsImtleSIsInZhbHVlIiwidmFsU3RyIiwibm9Eb3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FB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LE1BQUlrQyxLQUFKLEVBQVc7QUFDUGxDLEtBQUMsSUFBSSxJQUFMO0FBRUgsR0FIRCxNQUdPO0FBQ0hBLEtBQUMsSUFBSSxLQUFMO0FBQ0g7O0FBQ0QsU0FBT0EsQ0FBUDtBQUNILENBcEJNLEM7Ozs7Ozs7Ozs7O0FDdENQLDJDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRm9ydW1Nb2RlbCBmcm9tICcuLi9tb2RlbHMvRm9ydW1Nb2RlbC5qcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIHZhbFN0ciB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RzTG9vcCA9IGFzeW5jIGZ1bmN0aW9uIChyZXEscmVzLCB0aHJlYWREYXRhKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBjb25zdCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5ld1Bvc3RzID0gcmVxLmJvZHk7XG5cbiAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAocG9zdC5hdXRob3IpIHtcbiAgICAgICAgICAgIC8vINC10YHRgtGMINC70Lgg0YLQsNC60L7QuSDQsNCy0YLQvtGAINCyINCx0LDQt9C1XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUocG9zdC5hdXRob3IpO1xuICAgICAgICAgICAgICAgIGlmICghYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QuYXV0aG9yID0gYXV0aG9yLm5pY2tuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINC10YHQu9C4INCx0YvQuyDQv9C10YDQtdC00LDQvSBpZCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YJcbiAgICAgICAgICAgIGlmIChwb3N0LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQtdGB0YLRjCDQu9C4INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQv9C+0YHRgiDQsiDRgdC40YHRgtC10LzQtSBcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRQb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkQW5kVGhyZWFkSWQocG9zdC5wYXJlbnQsIHRocmVhZERhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnbm8gcGFyZW50IHBvc3RzJyB9KTsgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnBhcmVudCA9IHBhcmVudFBvc3QuaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBQQVJFTlRTJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QvtGB0YIgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IGhhcnZlc3RLZXlWYWx1ZXMocG9zdCk7XG4gICAgICAgICAgICAgICAga2V5VmFsdWVzWydjcmVhdGVkJ10gPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgICAgICAgICAga2V5VmFsdWVzWyd0aHJlYWQnXSA9IHRocmVhZERhdGEuaWQ7XG4gICAgICAgICAgICAgICAga2V5VmFsdWVzWydmb3J1bSddID0gdGhyZWFkRGF0YS5mb3J1bTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zW2ldID0gJ1wiJyArIGNvbHVtbnNbaV0gKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZGVkUG9zdCA9IGF3YWl0IFBvc3RNb2RlbC5jcmVhdGVOZXdQb3N0KGNvbHVtbnMsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgYWRkZWRQb3N0LmlkID0gcGFyc2VJbnQoYWRkZWRQb3N0LmlkKTsgLy8gcGctcHJvbWlzZSDRgdGH0LjRgtCw0LXRgiBCSUdTRVJJQUwg0YHRgtGA0L7QutC+0Lkg0YXQtyDQv9C+0YfQtdC80YNcbiAgICAgICAgICAgICAgICBhZGRlZFBvc3QudGhyZWFkID0gcGFyc2VJbnQoYWRkZWRQb3N0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgYWRkZWRQb3N0LnBhcmVudCA9IHBhcnNlSW50KGFkZGVkUG9zdC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFkZGVkUG9zdCk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEFERElORyBORVcgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRjtC30LXRgNCwINCyINGE0L7RgNGD0LwgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcih0aHJlYWREYXRhLmZvcnVtLCBwb3N0LmF1dGhvcik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBDUkVBVElORyBVU0VSIEZPUlVNIFBBSVInKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INGB0YfQtdGC0YfQuNC6INC/0L7RgdGC0L7QsiDQsiDRhNC+0YDRg9C80LUgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50UG9zdHModGhyZWFkRGF0YS5mb3J1bSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBhdXRob3InIH0pOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZChyZXN1bHQpO1xufVxuXG5cblxuLy8gY29uc3QgY29sdW1ucyA9IGAoYXV0aG9yLCBcIm1lc3NhZ2VcIiwgcGFyZW50LCBcImNyZWF0ZWRcIiwgdGhyZWFkLCBmb3J1bSlgO1xuXG5cbi8vIGV4cG9ydCBjb25zdCBjcmVhdGVQb3N0c0xvb3AgPSBhc3luYyBmdW5jdGlvbiAocmVxLHJlcywgdGhyZWFkRGF0YSkge1xuLy8gICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyAgICAgY29uc3QgbmV3UG9zdHMgPSByZXEuYm9keTtcbi8vICAgICBsZXQgYmF0Y2hlcyA9ICcnO1xuLy8gICAgIGxldCBiYXRjaCA9ICcnO1xuLy8gICAgIGNvbnN0IGNvbHVtbnNTZXQgPSBgIChhdXRob3IsIFwibWVzc2FnZVwiLCBwYXJlbnQsIFwiY3JlYXRlZFwiLCB0aHJlYWQsIGZvcnVtKSBgO1xuLy8gICAgIGNvbnN0IHBvc3RBbW91bnQgPSBuZXdQb3N0cy5sZW5ndGg7XG4vLyAgICAgbGV0IGZsYWcgPSAwO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdJTiBJTklUJyxmbGFnLCBwb3N0QW1vdW50KTtcblxuICAgIFxuLy8gICAgIGZvciAobGV0IHBvc3Qgb2YgbmV3UG9zdHMpIHtcbi8vICAgICAgICAgLy8g0LXRgdGC0Ywg0LvQuCDRgtCw0LrQvtC5INCw0LLRgtC+0YAg0LIg0LHQsNC30LVcblxuLy8gICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgY29uc3QgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShwb3N0LmF1dGhvcik7XG4vLyAgICAgICAgICAgICBpZiAoIWF1dGhvcikge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7IFxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBwb3N0LmF1dGhvciA9IGF1dGhvci5uaWNrbmFtZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8vINC10YHQu9C4INCx0YvQuyDQv9C10YDQtdC00LDQvSBpZCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YJcbi8vICAgICAgICAgaWYgKHBvc3QucGFyZW50KSB7XG4vLyAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LXRgdGC0Ywg0LvQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0L/QvtGB0YIg0LIg0YHQuNGB0YLQtdC80LUgXG4vLyAgICAgICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFBvc3QgPSBhd2FpdCBQb3N0TW9kZWwuZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZChwb3N0LnBhcmVudCwgdGhyZWFkRGF0YS5pZCk7XG4vLyAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRQb3N0KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnbm8gcGFyZW50IHBvc3RzJyB9KTsgXG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zdC5wYXJlbnQgPSBwYXJlbnRQb3N0LmlkO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgUE9TVCBQQVJFTlRTJyk7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHBvc3QucGFyZW50ID0gbnVsbDtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgcG9zdC5jcmVhdGVkID0gY3JlYXRpb25EYXRlO1xuLy8gICAgICAgICBwb3N0LnRocmVhZCA9IHRocmVhZERhdGEuaWQ7XG4vLyAgICAgICAgIHBvc3QuZm9ydW0gPSB0aHJlYWREYXRhLmZvcnVtO1xuXG4vLyAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMocG9zdCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGZsYWcsIHBvc3RBbW91bnQpO1xuLy8gICAgICAgICBpZiAoZmxhZyA9PT0gcG9zdEFtb3VudCAtIDEpIHtcbi8vICAgICAgICAgICAgIGJhdGNoID0gdmFsU3RyKHZhbHVlcywgdHJ1ZSk7ICAgIFxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgYmF0Y2ggPSB2YWxTdHIodmFsdWVzLCBmYWxzZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coJ0kgQU0gQkFUQ0gnLCBiYXRjaCk7XG4vLyAgICAgICAgIGJhdGNoZXMgKz0gYmF0Y2g7XG4vLyAgICAgICAgIGZsYWcgKz0gMTtcbi8vICAgICB9XG5cblxuLy8gICAgIGNvbnN0IHF1ZXJ5ID0gYElOU0VSVCBJTlRPIHBvc3RzYCArIGNvbHVtbnNTZXQgKyBgVkFMVUVTYCArIGJhdGNoZXMgKyBgIFJFVFVSTklORyAqYDtcbi8vICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwuY3JlYXRlTmV3UG9zdHNCeVF1ZXJ5KHF1ZXJ5KTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEFERElORyBORVcgUE9TVCcpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbi8vICAgICB9XG5cbi8vICAgICBmb3IgKGxldCBwb3N0IG9mIG5ld1Bvc3RzKSB7XG4vLyAgICAgICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Y7Qt9C10YDQsCDQsiDRhNC+0YDRg9C8IFxuLy8gICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgYXdhaXQgRm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKHRocmVhZERhdGEuZm9ydW0sIHBvc3QuYXV0aG9yKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFVTRVIgRk9SVU0gUEFJUicpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8vINGD0LLQtdC70LjRh9C40LLQsNC10Lwg0YHRh9C10YLRh9C40Log0L/QvtGB0YLQvtCyINCyINGE0L7RgNGD0LzQtSBcbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgIGF3YWl0IEZvcnVtTW9kZWwuaW5jcmVtZW50UG9zdHModGhyZWFkRGF0YS5mb3J1bSk7XG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZChyZXN1bHQpO1xuLy8gfVxuIiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IHsgaGFydmVzdFZhbHVlcywgaGFydmVzdENvbHVtbnMsIGhhcnZlc3RLZXlWYWx1ZXMsIGlkVG9JbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuXG5cblxuY2xhc3MgRm9ydW1Db250cm9sbGVyIHtcblxuICAgIC8vIGNyZWF0ZUZvcnVtIChyZXEsIHJlcykge1xuXHQvLyBcdGxldCB1c2VyID0gcmVxLmJvZHlbJ3VzZXInXTtcblx0Ly8gXHRjb25zdCBzbHVnID0gcmVxLmJvZHlbJ3NsdWcnXTtcblx0Ly8gXHRjb25zdCB0aXRsZSA9IHJlcS5ib2R5Wyd0aXRsZSddO1xuXHQvLyBcdFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcilcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHR1c2VyID0gZGF0YS5uaWNrbmFtZTtcblx0Ly8gXHRcdFx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpIC8vIE9QVCDQvNC+0LbQvdC+INC00LXQu9Cw0YLRjCDRgdC10LvQtdC60YIg0YLQvtC70YzQutC+INCyINGB0LvRg9GH0LDQtSDQtdGB0LvQuCDQtdGB0YLRjCDQtNGD0LHQu9C40LrQsNGC0Ytcblx0Ly8gXHRcdFx0XHRcdC50aGVuKCBkYXRhID0+e1xuXHQvLyBcdFx0XHRcdFx0XHRpZiAoIWRhdGEpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRzbHVnLFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR1c2VyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XVxuXHQvLyBcdFx0XHRcdFx0XHRcdEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZGF0YSk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgRm9ydW0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZGF0YSk7XG5cdC8vIFx0XHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHRcdH0pXG5cdC8vIFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHR9KTtcblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pO1xuXHQvLyBcdFx0XHR9ICAgICAgICAgICAgICBcblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cblx0YXN5bmMgY3JlYXRlRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IHVzZXIgPSByZXEuYm9keVsndXNlciddO1xuXHRcdGNvbnN0IHNsdWcgPSByZXEuYm9keVsnc2x1ZyddO1xuXHRcdGNvbnN0IHRpdGxlID0gcmVxLmJvZHlbJ3RpdGxlJ107XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyTmlja25hbWUodXNlcik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdGb3J1bURhdGEgPSBbXG5cdFx0XHRzbHVnLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR1c2VyLm5pY2tuYW1lXG5cdFx0XVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlTmV3Rm9ydW0obmV3Rm9ydW1EYXRhKTtcblxuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgZXhzaXN0aW5nRm9ydW07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdGb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdGb3J1bSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XG5cdGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHJlcS5wYXJhbXNbJ3NsdWcnXTtcblx0XHRGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHRVRURUQgREFUQScsIGRhdGEpO1xuXHRcdFx0XHRpZiAoZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBmb3J1bScgfSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdC8vIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdC8vIFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0Ly8gXHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHQvLyBcdC8vICDQtdGB0YLRjCDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INC90LjQutC+0Lxcblx0Ly8gXHRVc2VyTW9kZWwuZ2V0VXNlck5pY2tuYW1lKGF1dGhvcilcblx0Ly8gXHRcdC50aGVuKCBkYXRhID0+IHtcblx0Ly8gXHRcdFx0aWYgKGRhdGEpIHtcblx0Ly8gXHRcdFx0XHRhdXRob3IgPSBkYXRhLm5pY2tuYW1lO1xuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHR9KTtcblx0XHRcdFxuXHQvLyBcdC8vINC10YHRgtGMINC70Lgg0YTQvtGA0YPQvCDQsiDQutC+0YLQvtGA0L7QvCDRhdC+0YLRj9GCINGB0L7Qt9C00LDRgtGMINCy0LXRgtC60YMgXG5cdC8vIFx0Rm9ydW1Nb2RlbC5nZXRGb3J1bVNsdWcoZm9ydW1TbHVnKVxuXHQvLyBcdFx0LnRoZW4oIGRhdGEgPT4ge1xuXHQvLyBcdFx0XHRpZiAoZGF0YSkge1xuXHQvLyBcdFx0XHRcdGZvcnVtU2x1ZyA9IGRhdGEuc2x1Zztcblx0Ly8gXHRcdFx0XHQvLyDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INCy0LXRgtC60LAg0YEg0YLQsNC60LjQvCDQvdCw0LfQstCw0L3QuNC1LCDQtdGB0LvQuCDQtNCwINGC0L4gNDA5XG5cdC8vIFx0XHRcdFx0VGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHJlcS5ib2R5WydzbHVnJ10pXG5cdC8vIFx0XHRcdFx0XHQudGhlbiggdGhyZWFkID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0aWYgKCF0aHJlYWQpIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5ib2R5KTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRrZXlWYWx1ZXNbJ2F1dGhvciddID0gYXV0aG9yO1xuXHQvLyBcdFx0XHRcdFx0XHRcdGtleVZhbHVlc1snZm9ydW0nXSA9IGZvcnVtU2x1Zztcblx0Ly8gXHRcdFx0XHRcdFx0XHRjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMoa2V5VmFsdWVzKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdGlmIChjb2x1bW5zW2ldID09PSAnbWVzc2FnZScgfHwgY29sdW1uc1tpXSA9PT0gJ2NyZWF0ZWQnKSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbHVtbnNbaV0gPSAnXCInICsgY29sdW1uc1tpXSArICdcIic7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IGhhcnZlc3RWYWx1ZXMoa2V5VmFsdWVzKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRUaHJlYWRNb2RlbC5jcmVhdGVOZXdUaHJlYWQoY29sdW1ucywgdmFsdWVzKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIG5ld1RocmVhZCA9PiB7XG5cdFx0XHRcdFx0XHRcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Rm9ydW1Nb2RlbC5jcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtU2x1ZywgYXV0aG9yKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC50aGVuKCAoKSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygncGFpciBjcmVhdGVkJyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW1TbHVnKVxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdC50aGVuKCAoKSA9PiB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdUaHJlYWQuaWQgPSBwYXJzZUludChuZXdUaHJlYWQuaWQpOyAvLyBwZy1wcm9taXNlINGB0YfQuNGC0LDQtdGCIEJJR1NFUklBTCDRgdGC0YDQvtC60L7QuSDRhdC3INC/0L7Rh9C10LzRg1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1RocmVhZCk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIHRocmVhZHMgaW5jcmVtZW50Jyk7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdH0pO1x0XG5cdC8vIFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRcdFx0dGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTsgLy8gcGctcHJvbWlzZSDRgdGH0LjRgtCw0LXRgiBCSUdTRVJJQUwg0YHRgtGA0L7QutC+0Lkg0YXQtyDQv9C+0YfQtdC80YNcblx0Ly8gXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24odGhyZWFkKTtcblx0Ly8gXHRcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLJyk7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHQvLyBcdFx0XHRcdFx0fSk7XG5cblx0Ly8gXHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIGZvcnVtXCIgfSk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0pXG5cdC8vIFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIEZPUlVNIEJZIFNMVUcnKTtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHQvLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdGFzeW5jIGNyZWF0ZVRocmVhZEluRm9ydW0gKHJlcSwgcmVzKSB7XG5cdFx0bGV0IGF1dGhvciA9IHJlcS5ib2R5WydhdXRob3InXTtcblx0XHRsZXQgZm9ydW1TbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGxldCBmb3J1bTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXV0aG9yID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJOaWNrbmFtZShhdXRob3IpO1xuICAgICAgICAgICAgaWYgKCFhdXRob3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogXCJDYW4ndCBmaW5kIHVzZXJcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHR9XG5cblx0XHR0cnkge1xuICAgICAgICAgICAgZm9ydW0gPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtU2x1Zyhmb3J1bVNsdWcpO1xuICAgICAgICAgICAgaWYgKCFmb3J1bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBGT1JVTSBCWSBTTFVHJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0fVxuXG5cblxuXG5cdFx0Y29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhyZXEuYm9keSk7XG5cdFx0a2V5VmFsdWVzWydhdXRob3InXSA9IGF1dGhvci5uaWNrbmFtZTtcblx0XHRrZXlWYWx1ZXNbJ2ZvcnVtJ10gPSBmb3J1bS5zbHVnO1xuXHRcdFxuXHRcdGNvbnN0IGNvbHVtbnMgPSBoYXJ2ZXN0Q29sdW1ucyhrZXlWYWx1ZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbHVtbnNbaV0gPT09ICdtZXNzYWdlJyB8fCBjb2x1bW5zW2ldID09PSAnY3JlYXRlZCcpIHtcblx0XHRcdFx0Y29sdW1uc1tpXSA9ICdcIicgKyBjb2x1bW5zW2ldICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gaGFydmVzdFZhbHVlcyhrZXlWYWx1ZXMpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLmNyZWF0ZU5ld1RocmVhZChjb2x1bW5zLCB2YWx1ZXMpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IEZvcnVtTW9kZWwuY3JlYXRlRm9ydW1Vc2VyUGFpcihmb3J1bS5zbHVnLCBhdXRob3Iubmlja25hbWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIGNyZWF0aW5nIHBhaXInKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHR9IFxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBGb3J1bU1vZGVsLmluY3JlbWVudFRocmVhZHMoZm9ydW0uc2x1Zyk7XG5cdFx0XHRcdHJlc3VsdC5pZCA9IHBhcnNlSW50KHJlc3VsdC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihyZXN1bHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiB0aHJlYWRzIGluY3JlbWVudCcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0gXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBleHNpc3RpbmdUaHJlYWQ7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRleHNpc3RpbmdUaHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcocmVxLmJvZHlbJ3NsdWcnXSk7XG5cdFx0XHRcdGV4c2lzdGluZ1RocmVhZC5pZCA9IHBhcnNlSW50KGV4c2lzdGluZ1RocmVhZC5pZCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleHNpc3RpbmdUaHJlYWQpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcgISEhIScpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gXG5cdFx0XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0Z2V0VGhyZWFkcyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdEZvcnVtTW9kZWwuZ2V0Rm9ydW1TbHVnKHNsdWcpXG5cdFx0XHQudGhlbiggZGF0YSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhKXtcblx0XHRcdFx0XHRUaHJlYWRNb2RlbC5nZXRUaHJlYWRzQnlGb3J1bVNsdWcoc2x1ZywgcXVlcnlQYXJhbXMpXG5cdFx0XHRcdFx0XHQudGhlbiggZGF0YSA9Pntcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhID0gaWRUb0ludChkYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRFMgT0YgRk9SVU0nKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG5cdFx0XHRcdFx0XHR9KTtcdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcblx0XHRcdH0pO1x0XG5cdH1cblxuXHRhc3luYyBnZXRVc2VycyAocmVxLCByZXMpIHtcblx0XHRjb25zdCBzbHVnID0gcmVxLnBhcmFtc1snc2x1ZyddO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gaGFydmVzdEtleVZhbHVlcyhyZXEucXVlcnkpO1xuXHRcdGlmICghcXVlcnlQYXJhbXNbJ2xpbWl0J10pIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gMTBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlQYXJhbXNbJ2xpbWl0J10gPSBwYXJzZUludChxdWVyeVBhcmFtc1snbGltaXQnXSk7XG5cdFx0fVxuXHRcdHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSc7XG5cdFx0bGV0IGZvcnVtO1xuXHRcdHRyeSB7XG5cdFx0XHRmb3J1bSA9IGF3YWl0IEZvcnVtTW9kZWwuZ2V0Rm9ydW1CeVNsdWcoc2x1Zyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXHRcdFx0Y29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgRk9SVU0gQlkgU0xVRycpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblxuXHRcdGlmICghZm9ydW0pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgZm9ydW1cIiB9KTtcblx0XHR9IFxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSBhd2FpdCBGb3J1bU1vZGVsLmdldFVzZXJzKGZvcnVtLnNsdWcsIHF1ZXJ5UGFyYW1zKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSUyBJTiBGT1JVTScpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcblxuXHR9IFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb3J1bUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCB7IGhhcnZlc3RWYWx1ZXMsIGhhcnZlc3RDb2x1bW5zLCBoYXJ2ZXN0S2V5VmFsdWVzLCBpZFRvSW50IH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICd1cmwnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cblxuY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICAgIGFzeW5jIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGxldCBwb3N0RGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdE1vZGVsLmdldFBvc3RCeUlkKHBvc3RJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFBPU1QgQlkgSUQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHBvc3QnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRvID0gcmVxLnF1ZXJ5WydyZWxhdGVkJ107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdSRUxBVElPTicsIHR5cGVvZihyZWxhdGVkVG8pKTtcbiAgICAgICAgbGV0IGVudGl0eTtcbiAgICAgICAgaWYgKHJlbGF0ZWRUbykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEVudGl0aWVzID0gcmVsYXRlZFRvLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCByZWxhdGVkRW50aXR5IG9mIHJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRW50aXR5ID09PSAndXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eSA9IGF3YWl0IFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShwb3N0RGF0YS5hdXRob3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF1dGhvciA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLTkFNRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAndGhyZWFkJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5ID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwb3N0RGF0YS50aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmlkID0gcGFyc2VJbnQoZW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aHJlYWQgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGVkRW50aXR5ID09PSAnZm9ydW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkgPSBhd2FpdCBGb3J1bU1vZGVsLmdldEZvcnVtQnlTbHVnKHBvc3REYXRhLmZvcnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGl0eS5pZCA9IHBhcnNlSW50KGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9ydW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdSRUxBVElPTicsIHJlbGF0ZWRUbyk7XG4gICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICBwb3N0RGF0YS50aHJlYWQgPSBwYXJzZUludChwb3N0RGF0YS50aHJlYWQpO1xuXG4gICAgICAgIHJlc3VsdC5wb3N0ID0gcG9zdERhdGE7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZURldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5wYXJhbXNbJ2lkJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBsZXQgcG9zdERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IFBvc3RNb2RlbC5nZXRQb3N0QnlJZChwb3N0SWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBQT1NUIEJZIElEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc3REYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCBwb3N0JyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC10YHQu9C4INCx0YvQu9C+INC/0YDQuNGB0LvQsNC90L4g0L/Rg9GB0YLQvtC1IGJvZHlcbiAgICAgICAgLy8g0LjQu9C4INCy0YHQtSDQtNCw0L3QvdGL0LUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8IG5ld0RhdGEubWVzc2FnZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7ICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChwb3N0RGF0YS5tZXNzYWdlICE9PSBuZXdEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnVwZGF0ZVBvc3QobmV3RGF0YS5tZXNzYWdlLCBwb3N0SWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gVVBEQVRJTkQgUE9TVCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnY29uZmxpY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6ICdhbHJlYWR5IGV4aXN0ZWQgZGF0YSd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gcGFyc2VJbnQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudGhyZWFkID0gcGFyc2VJbnQocmVzdWx0LnRocmVhZCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudCA/IHBhcnNlSW50KHJlc3VsdC5wYXJlbnQpIDogcmVzdWx0LnBhcmVudDsgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3REYXRhLmlkID0gcGFyc2VJbnQocG9zdERhdGEuaWQpO1xuICAgICAgICAgICAgcG9zdERhdGEudGhyZWFkID0gcGFyc2VJbnQocG9zdERhdGEudGhyZWFkKTtcbiAgICAgICAgICAgIHBvc3REYXRhLnBhcmVudCA/IHBhcnNlSW50KHBvc3REYXRhLnBhcmVudCkgOiBwb3N0RGF0YS5wYXJlbnQ7IFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0Q29udHJvbGxlcjsiLCJpbXBvcnQgU2VydmljZU1vZGVsIGZyb20gJy4uL21vZGVscy9TZXJ2aWNlTW9kZWwuanMnO1xuXG5jbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjb3VudEFsbCAocmVxLCByZXMpIHtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkgeyAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgU2VydmljZU1vZGVsLmNvdW50QWxsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLScscmVzdWx0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY2xlYXJBbGwgKHJlcSwgcmVzKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBTZXJ2aWNlTW9kZWwuY2xlYXJBbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENPVU5USU5HJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmljZUNvbnRyb2xsZXI7IiwiaW1wb3J0IEZvcnVtTW9kZWwgZnJvbSAnLi4vbW9kZWxzL0ZvcnVtTW9kZWwuanMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvVXNlck1vZGVsLmpzJztcbmltcG9ydCBUaHJlYWRNb2RlbCBmcm9tICcuLi9tb2RlbHMvVGhyZWFkTW9kZWwuanMnO1xuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcbmltcG9ydCBWb3RlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1ZvdGVNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0VmFsdWVzLCBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcyB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IGNyZWF0ZVBvc3RzTG9vcCB9IGZyb20gJy4vQ29udHJvbGxlclV0aWxzLmpzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcblxuY2xhc3MgVGhyZWFkQ29udHJvbGxlciB7XG5cbiAgICBhc3luYyBjcmVhdGVQb3N0IChyZXEsIHJlcyl7XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgICAgIC8vIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IG5ld1Bvc3RzID0gcmVxLmJvZHk7XG4gICAgICAgIGxldCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgLy8gbGV0IHRocmVhZERhdGEgPSB7fVxuICAgICAgICBcbiAgICAgICAgLy8g0LXRgdGC0Ywg0LvQuCDRgtCw0LrQsNGPINCy0LXRgtC60LAg0LIg0LHQsNC30LUgXG4gICAgICAgIC8vIGlmICgvXlxcZCskLy50ZXN0KHRocmVhZFNsdWcpKSB7XG4gICAgICAgIC8vICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHRocmVhZFNsdWcpKVxuICAgICAgICAvLyAgICAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRocmVhZERhdGEgPSBkYXRhO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY3JlYXRlUG9zdHNMb29wKHJlcSxyZXMsIHRocmVhZERhdGEpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0pICBcbiAgICAgICAgLy8gICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcodGhyZWFkU2x1ZylcbiAgICAgICAgLy8gICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aHJlYWREYXRhID0gZGF0YTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWREYXRhKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0pIFxuICAgICAgICAvLyAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgU0xVRycpO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvc3RzTG9vcChyZXEscmVzLCB0aHJlYWQpO1xuXG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0LHRi9C70L4g0L/RgNC40YHQu9Cw0L3QviAwINC/0L7RgdGC0L7QslxuICAgICAgICBpZiAoIW5ld1Bvc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1Bvc3RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZvdGVGb3JUaHJlYWQgKHJlcSAscmVzKSB7XG4gICAgICAgIGxldCBpbml0Vm90ZURhdGEgPSByZXEuYm9keTtcbiAgICAgICAgbGV0IHRocmVhZFNsdWcgPSByZXEucGFyYW1zWydzbHVnX29yX2lkJ107XG5cbiAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKGluaXRWb3RlRGF0YS5uaWNrbmFtZSlcbiAgICAgICAgICAgIC50aGVuICggdXNlciA9PntcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyDQtdGB0YLRjCDQu9C4INGC0LDQutCw0Y8g0LLQtdGC0LrQsCDQsiDQsdCw0LfQtSBcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodGhyZWFkU2x1ZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQodGhyZWFkU2x1ZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIHRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGVNb2RlbC52b3RlKCBpbml0Vm90ZURhdGEudm9pY2UsIHRocmVhZC5pZCwgdXNlci5uaWNrbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdm90ZURhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm90ZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2b2ljZSA9IHZvdGVEYXRhLnZvaWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvdGVEYXRhLmV4aXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2ljZSA9IHZvaWNlID09PSAxID8gdm9pY2UgKyAxIDogdm9pY2UgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRocmVhZE1vZGVsLmluY3JlbWVudFZvdGVzQnlJZCh0aHJlYWQuaWQsIHZvaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCB1cGRhdGVUaHJlYWQgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRocmVhZC5pZCA9IHBhcnNlSW50KHVwZGF0ZVRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVUaHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqIEVSUk9SIElOIFVQREFUSU5HIFRIUkVBRCBWT1RFUycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gTUFLSU5HIFZPVEUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6ICdjYW50IGZpbmQgdGhyZWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcodGhyZWFkU2x1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90ZU1vZGVsLnZvdGUoIGluaXRWb3RlRGF0YS52b2ljZSwgdGhyZWFkLmlkLCB1c2VyLm5pY2tuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCB2b3RlRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b3RlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZvaWNlID0gdm90ZURhdGEudm9pY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm90ZURhdGEuZXhpc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWNlID0gdm9pY2UgPT09IDEgPyB2b2ljZSArIDEgOiB2b2ljZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHJlYWRNb2RlbC5pbmNyZW1lbnRWb3Rlc0J5U2x1Zyh0aHJlYWQuc2x1Zywgdm9pY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIHVwZGF0ZVRocmVhZCA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGhyZWFkLmlkID0gcGFyc2VJbnQodXBkYXRlVGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZVRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORyBUSFJFQUQgVk9URVMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIE1BS0lORyBWT1RFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiAnY2FudCBmaW5kIGF1dGhvcicgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGdldERldGFpbHMgKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5SWQocGFyc2VJbnQoc2x1Z09ySWQpKVxuICAgICAgICAgICAgICAgIC50aGVuKCB0aHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuaWQgPSBwYXJzZUludCh0aHJlYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRocmVhZE1vZGVsLmdldFRocmVhZEJ5U2x1ZyhzbHVnT3JJZClcbiAgICAgICAgICAgICAgICAudGhlbiggdGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkLmlkID0gcGFyc2VJbnQodGhyZWFkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0aHJlYWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIFNMVUcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQb3N0cyhyZXEsIHJlcykge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKHJlcS5xdWVyeSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblx0XHRpZiAoIXF1ZXJ5UGFyYW1zWydsaW1pdCddKSB7XG5cdFx0XHRxdWVyeVBhcmFtc1snbGltaXQnXSA9IDEwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHF1ZXJ5UGFyYW1zWydsaW1pdCddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ2xpbWl0J10pO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5UGFyYW1zWydkZXNjJ10gPSBxdWVyeVBhcmFtc1snZGVzYyddID09PSAndHJ1ZSc7XG4gICAgICAgIHF1ZXJ5UGFyYW1zWydzaW5jZSddID0gcGFyc2VJbnQocXVlcnlQYXJhbXNbJ3NpbmNlJ10pO1xuXG4gICAgICAgIGNvbnN0IHNsdWdPcklkID0gcmVxLnBhcmFtc1snc2x1Z19vcl9pZCddO1xuICAgICAgICBsZXQgdGhyZWFkO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdChzbHVnT3JJZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlJZChwYXJzZUludChzbHVnT3JJZCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkID0gYXdhaXQgVGhyZWFkTW9kZWwuZ2V0VGhyZWFkQnlTbHVnKHNsdWdPcklkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFRIUkVBRCBCWSBJRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzYWdlIDogJ2NhbnQgZmluZCB0aHJlYWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNvcnQgPT09ICdmbGF0JyB8fCAhcXVlcnlQYXJhbXMuc29ydCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwuZmxhdFNvcnQodGhyZWFkLmlkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gZmxhdCBzb3J0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zb3J0ID09PSAndHJlZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgUG9zdE1vZGVsLnRyZWVTb3J0KHRocmVhZC5pZCwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIHRyZWUgc29ydCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc29ydCA9PT0gJ3BhcmVudF90cmVlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBQb3N0TW9kZWwucGFyZW50VHJlZVNvcnQodGhyZWFkLmlkLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gcGFyZW50IHRyZWUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoIChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNQb3N0ID0ge307XG4gICAgICAgICAgICByZXNQb3N0WydhdXRob3InXSA9IHBvc3QuYXV0aG9yO1xuICAgICAgICAgICAgcmVzUG9zdFsnY3JlYXRlZCddID0gcG9zdC5jcmVhdGVkO1xuICAgICAgICAgICAgcmVzUG9zdFsnZm9ydW0nXSA9IHBvc3QuZm9ydW07XG4gICAgICAgICAgICByZXNQb3N0WydpZCddID0gcGFyc2VJbnQocG9zdC5pZCk7XG4gICAgICAgICAgICByZXNQb3N0WydtZXNzYWdlJ10gPSBwb3N0Lm1lc3NhZ2U7XG4gICAgICAgICAgICByZXNQb3N0WydwYXJlbnQnXSA9IHBhcnNlSW50KHBvc3QucGFyZW50KTtcbiAgICAgICAgICAgIHJlc1Bvc3RbJ3RocmVhZCddID0gcGFyc2VJbnQocG9zdC50aHJlYWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzUG9zdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVGhyZWFkIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBzbHVnT3JJZCA9IHJlcS5wYXJhbXNbJ3NsdWdfb3JfaWQnXTtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgICAgIGxldCB0aHJlYWQ7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHNsdWdPcklkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeUlkKHBhcnNlSW50KHNsdWdPcklkKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBUSFJFQUQgQlkgSUQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBhd2FpdCBUaHJlYWRNb2RlbC5nZXRUaHJlYWRCeVNsdWcoc2x1Z09ySWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVEhSRUFEIEJZIElEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNhZ2UgOiAnY2FudCBmaW5kIHRocmVhZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0LvQviDQv9GA0LjRgdC70LDQvdC+INC/0YPRgdGC0L7QtSBib2R5XG4gICAgICAgIC8vINC40LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCx0YvQu9C4INC/0YDQuNGB0LvQsNC90Ysg0LrQsNC6INC/0YPRgdGC0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKG5ld0RhdGEpLmxlbmd0aCB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocmVhZC5pZCA9IHBhcnNlSW50KHRocmVhZC5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odGhyZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFRocmVhZE1vZGVsLnVwZGF0ZVRocmVhZCh0aHJlYWQuc2x1ZywgY29sdW1ucywga2V5VmFsdWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIFVQREFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09ICdjb25mbGljdCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2UgOiAnYWxyZWFkeSBleGlzdGVkIGRhdGEnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuaWQgPSBwYXJzZUludChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZENvbnRyb2xsZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1VzZXJNb2RlbC5qcyc7XG5pbXBvcnQgeyBoYXJ2ZXN0Q29sdW1ucywgaGFydmVzdEtleVZhbHVlcyB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgICAvLyBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgIC8vICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgLy8gICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHlbJ2VtYWlsJ107XG4gICAgLy8gICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZU9yRW1haWwobmlja25hbWUsIGVtYWlsKVxuICAgIC8vICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBuZXdVc2VyRGF0YSA9IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxLmJvZHlbJ2Z1bGxuYW1lJ10sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXEuYm9keVsnYWJvdXQnXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlcS5ib2R5WydlbWFpbCddXG4gICAgLy8gICAgICAgICAgICAgICAgIF07XG4gICAgLy8gICAgICAgICAgICAgICAgIFVzZXJNb2RlbC5jcmVhdGVOZXdVc2VyKG5ld1VzZXJEYXRhKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihkYXRhKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oZGF0YSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIEdFVFRJTkcgVVNFUiBCWSBOSUNLIE9SIEVNQUlMJyk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vIH0gICAgXG5cbiAgICBhc3luYyBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHlbJ2VtYWlsJ107XG4gICAgICAgIGNvbnN0IG5ld1VzZXJEYXRhID0gW1xuICAgICAgICAgICAgbmlja25hbWUsXG4gICAgICAgICAgICByZXEuYm9keVsnZnVsbG5hbWUnXSxcbiAgICAgICAgICAgIHJlcS5ib2R5WydhYm91dCddLFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZU5ld1VzZXIobmV3VXNlckRhdGEpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ1VzZXI7XG4gICAgICAgICAgICB0cnkge1xuXHRcdFx0XHRleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsKG5pY2tuYW1lLCBlbWFpbCk7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbihleGlzdGluZ1VzZXIpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSyBPUiBFTUFJTCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgZ2V0VXNlciAocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgICAgICBVc2VyTW9kZWwuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpXG4gICAgICAgICAgICAudGhlbiggdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfSAgXG4gICAgXG4gICAgLy8gdXBkYXRlVXNlciAocmVxLCByZXMpIHtcbiAgICAvLyAgICAgY29uc3Qgbmlja25hbWUgPSByZXEucGFyYW1zWyduaWNrbmFtZSddO1xuICAgIC8vICAgICBjb25zdCBuZXdEYXRhID0gcmVxLmJvZHk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMobmV3RGF0YSkpO1xuXG4gICAgLy8gICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSkgLy8g0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAvLyAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZSA6IFwiQ2FuJ3QgZmluZCB1c2VyXCIgfSlcbiAgICAvLyAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pXG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICBpZiAoT2JqZWN0LnZhbHVlcyhuZXdEYXRhKS5sZW5ndGgpIHsgLy8g0LXRgdC70Lgg0YLQtdC70L4g0LfQsNC/0YDQvtGB0LAg0L3QtSDQv9GD0YHRgtC+0LUgXG4gICAgLy8gICAgICAgICBjb25zdCBjb2x1bW5zID0gaGFydmVzdENvbHVtbnMobmV3RGF0YSk7XG4gICAgLy8gICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSBoYXJ2ZXN0S2V5VmFsdWVzKG5ld0RhdGEpO1xuICAgIC8vICAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkgeyAvLyDQtdGB0LvQuCDQstGB0LUg0LTQsNC90L3Ri9C1INCyINGB0YLQvtC70LHRhtCw0YUg0LHRi9C70Lgg0L/RgNC40YHQu9Cw0L3RiyDQutCw0Log0L/Rg9GB0YLRi9C1INGB0YLRgNC+0LrQuFxuICAgIC8vICAgICAgICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSkgLy8g0L/RgNC+0YHRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC/0YDQvtGE0LjQu9GMXG4gICAgLy8gICAgICAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTsgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gR0VUVElORyBVU0VSIEJZIE5JQ0snKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7IFxuICAgIC8vICAgICAgICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0YXQvtGC0Y8g0LHRiyDQutCw0LrQuNC1LdGC0L4g0LTQsNC90L3Ri9C1INCx0YvQu9C4INC90LUg0L/Rg9GB0YLRi9C1XG4gICAgLy8gICAgICAgICAgICAgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lT3JFbWFpbChuZXdEYXRhWyduaWNrbmFtZSddLCBuZXdEYXRhWydlbWFpbCddKVxuICAgIC8vICAgICAgICAgICAgICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuaWNrbmFtZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1ucyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5VmFsdWVzKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNb2RlbC51cGRhdGVVc2VyKG5pY2tuYW1lLGNvbHVtbnMsa2V5VmFsdWVzKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBVUERBVElORyBVU0VSJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlIDogXCJjcmFzaFwiIH0pICBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vINC10YHQu9C4INC10YHRgtGMINC60L7QvdGE0LvQuNC60YIg0LTQsNC90L3Ri9GFXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZSA6IFwiVXNlciB3aXRoIHN1Y2ggbmlja25hbWUgb3IgZW1haWwgYWxyZWFkeSBleGlzdHNcIiB9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDS05BTUUgT1IgRU1BSUwnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICB9XG5cblxuICAgIC8vICAgICB9IGVsc2UgeyAvLyDQtdGB0LvQuCDRgtC10LvQviDQt9Cw0L/RgNC+0YHQsCDQv9GD0YHRgtC+0LVcbiAgICAvLyAgICAgICAgIFVzZXJNb2RlbC5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSkgLy8g0L/RgNC+0YHRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC/0YDQvtGE0LjQu9GMXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oIHVzZXIgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2UgOiBcImNyYXNoXCIgfSlcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0gXG5cbiAgICBhc3luYyB1cGRhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHJlcS5wYXJhbXNbJ25pY2tuYW1lJ107XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBcbiAgICAgICAgLy8g0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgbGV0IHVzZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcbiAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2UgOiBcIkNhbid0IGZpbmQgdXNlclwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVRUSU5HIFVTRVIgQlkgTklDSycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZSA6IFwiY3Jhc2hcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YSwgbmlja25hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gaGFydmVzdEtleVZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGhhcnZlc3RDb2x1bW5zKG5ld0RhdGEpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMobmV3RGF0YSkubGVuZ3RoIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0LXRgdC70Lgg0YXQvtGC0Y8g0LHRiyDQutCw0LrQuNC1LdGC0L4g0LTQsNC90L3Ri9C1INCx0YvQu9C4INC90LUg0L/Rg9GB0YLRi9C1XG5cbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLnVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucyxrZXlWYWx1ZXMpXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBtZXNzYWdlIDogXCJVc2VyIHdpdGggc3VjaCBuaWNrbmFtZSBvciBlbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1VzZXJSb3V0ZXMuanMnO1xuaW1wb3J0IGZvcnVtUm91dGVyIGZyb20gJy4vcm91dGVycy9Gb3J1bVJvdXRlcy5qcyc7XG5pbXBvcnQgdGhyZWFkUm91dGVyIGZyb20gJy4vcm91dGVycy9UaHJlYWRSb3V0ZXMuanMnO1xuaW1wb3J0IHBvc3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1Bvc3RSb3V0ZXMuanMnO1xuaW1wb3J0IHNlcnZpY2VSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL1NlcnZpY2VSb3V0ZXMuanMnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuXG5hcHAudXNlKCcvYXBpL3VzZXInLCB1c2VyUm91dGVyKTtcbmFwcC51c2UoJy9hcGkvZm9ydW0nLCBmb3J1bVJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3RocmVhZCcsIHRocmVhZFJvdXRlcik7XG5hcHAudXNlKCcvYXBpL3Bvc3QnLCBwb3N0Um91dGVyKTtcbmFwcC51c2UoJy9hcGkvc2VydmljZScsIHNlcnZpY2VSb3V0ZXIpO1xuYXBwLmdldCgnLycsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59KVxuXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pOyIsImltcG9ydCBkYkluc3RhbmNlLCB7IHBncCB9IGZyb20gJy4uL21vZHVsZXMvRGF0YUJhc2VNb2R1bGUuanMnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmNsYXNzIEZvcnVtTW9kZWwge1xuXG4gICAgZ2V0Rm9ydW1CeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIGZvcnVtcyBXSEVSRSBzbHVnPSQxJywgW3NsdWddKVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZU5ld0ZvcnVtIChuZXdGb3J1bURhdGEgPSBbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyBmb3J1bXMgKHNsdWcsIHRpdGxlLCBcInVzZXJcIikgVkFMVUVTICgkMSwgJDIsICQzKSBPTiBDT05GTElDVCBETyBOT1RISU5HIFJFVFVSTklORyAqJywgbmV3Rm9ydW1EYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFRIUkVBRCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ydW1TbHVnIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUIHNsdWcgRlJPTSBmb3J1bXMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBjcmVhdGVGb3J1bVVzZXJQYWlyKGZvcnVtU2x1Zywgbmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdJTlNFUlQgSU5UTyBmb3J1bXVzZXJzIChmb3J1bXNsdWcsIHVzZXJuaWNrbmFtZSkgVkFMVUVTICgkMSwgJDIpIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlX2ZvcnVtdXNlcl9wYWlyIERPIE5PVEhJTkcgUkVUVVJOSU5HIConLCBbZm9ydW1TbHVnLG5pY2tuYW1lXSk7IFxuICAgIH1cblxuICAgIGluY3JlbWVudFRocmVhZHMoc2x1Zykge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1VQREFURSBmb3J1bXMgU0VUIHRocmVhZHMgPSB0aHJlYWRzICsgMSBXSEVSRSBzbHVnPSQxIFJFVFVSTklORyAqJywgW3NsdWddKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRQb3N0cyhzbHVnKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIGZvcnVtcyBTRVQgcG9zdHMgPSBwb3N0cyArIDEgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnXSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMgKHNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGxldCBxdWVyeTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnlQYXJhbXMpO1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDEgQU5EIFUubmlja25hbWU+JDJcbiAgICAgICAgICAgIGAsW3NsdWcsIHF1ZXJ5UGFyYW1zLnNpbmNlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgcXVlcnlQYXJhbXMuZGVzYyl7XG4gICAgICAgICAgICBxdWVyeSA9IHBncC5hcy5mb3JtYXQoYFxuICAgICAgICAgICAgU0VMRUNUICogRlJPTSBmb3J1bXVzZXJzIEFTIEZVXG4gICAgICAgICAgICBKT0lOIHVzZXJzIEFTIFUgT04gRlUudXNlcm5pY2tuYW1lID0gVS5uaWNrbmFtZVxuICAgICAgICAgICAgV0hFUkUgRlUuZm9ydW1zbHVnPSQxIEFORCBVLm5pY2tuYW1lPCQyXG4gICAgICAgICAgICBgLCBbc2x1ZywgcXVlcnlQYXJhbXMuc2luY2VdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcGdwLmFzLmZvcm1hdChgXG4gICAgICAgICAgICBTRUxFQ1QgKiBGUk9NIGZvcnVtdXNlcnMgQVMgRlVcbiAgICAgICAgICAgIEpPSU4gdXNlcnMgQVMgVSBPTiBGVS51c2Vybmlja25hbWUgPSBVLm5pY2tuYW1lXG4gICAgICAgICAgICBXSEVSRSBGVS5mb3J1bXNsdWc9JDFgLCBbc2x1Z10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgJDE6cmF3IFxuICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBxdWVyeS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1Uubmlja25hbWUgREVTQycgOiAnVS5uaWNrbmFtZSBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9ydW1Nb2RlbDsgIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFBvc3RNb2RlbCB7XG4gICAgXG4gICAgY3JlYXRlTmV3UG9zdCAoY29sdW1ucywgdmFsdWVzKSB7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYyArPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGMgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjICs9ICcpJztcblxuICAgICAgICBmb3IgKGxldCBpID0wIDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdiArPSAnJCcgKyAoaSsxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGkgIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9ICcpJztcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnSU5TRVJUIElOVE8gcG9zdHMgJyArIGMgKyAnIFZBTFVFUyAnICsgdiArICcgUkVUVVJOSU5HIConO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZShxdWVyeSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQb3N0c0J5UXVlcnkgKHF1ZXJ5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShxdWVyeSk7XG4gICAgfVxuXG4gICAgZ2V0UG9zdEJ5SWRBbmRUaHJlYWRJZCAoaWQsIHRocmVhZElkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMSBBTkQgdGhyZWFkPSQyJywgW2lkLCB0aHJlYWRJZF0pXG4gICAgfVxuXG4gICAgZ2V0UG9zdEJ5SWQgKGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSBpZD0kMScsIFtpZF0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc3QgKG1lc3NhZ2UsIGlkKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnVVBEQVRFIHBvc3RzIFNFVCBcImlzRWRpdGVkXCI9VFJVRSwgXCJtZXNzYWdlXCI9JDEgV0hFUkUgaWQ9JDIgUkVUVVJOSU5HIConLCBbbWVzc2FnZSxpZF0pO1xuICAgIH1cblxuICAgIFxuICAgIGZsYXRTb3J0IChpZCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgaWYgKCBxdWVyeVBhcmFtcy5zaW5jZSApIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDEgQU5EIGlkPCQyXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgXCJjcmVhdGVkXCIgREVTQywgaWQgREVTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMSBBTkQgaWQ+JDJcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKGBTRUxFQ1QgKiBGUk9NIHBvc3RzIFdIRVJFIHRocmVhZD0kMVxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwiY3JlYXRlZFwiIERFU0MsIGlkIERFU0MgTElNSVQgJDNgLCBcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0cyBXSEVSRSB0aHJlYWQ9JDFcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSBcImNyZWF0ZWRcIiBBU0MsIGlkIEFTQyBMSU1JVCAkM2AsIFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJlZVNvcnQgKGlkLCBxdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXRoU29ydFJ1bGUgPSBxdWVyeVBhcmFtcy5kZXNjID8gJ3BhdGh0b3Bvc3QgREVTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuc2luY2UgJiYgIXF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdCA+IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgIFdIRVJFIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdCA8IChTRUxFQ1QgcGF0aHRvcG9zdCBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0YCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9IGVsc2UgaWYgKCFxdWVyeVBhcmFtcy5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgV0hFUkUgdGhyZWFkPSQxIFxuICAgICAgICAgICAgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzYCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pOyAgIFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwYXJlbnRUcmVlU29ydCAoaWQsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHBhdGhTb3J0UnVsZSA9IHF1ZXJ5UGFyYW1zLmRlc2MgPyAncGlkLnBhcmVudF9pZCBERVNDLCBwYXRodG9wb3N0IEFTQycgOiAncGF0aHRvcG9zdCBBU0MnO1xuICAgICAgICBjb25zdCBpZFNvcnRSdWxlID0gcXVlcnlQYXJhbXMuZGVzYyA/ICdpZCBERVNDJyA6ICdpZCBBU0MnXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiAhcXVlcnlQYXJhbXMuZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZShcbiAgICAgICAgICAgICAgICBgU0VMRUNUICogRlJPTSBwb3N0c1xuICAgICAgICAgICAgICAgIEpPSU4gKFxuICAgICAgICAgICAgICAgICAgICBTRUxFQ1QgaWQgQVMgcGFyZW50X2lkIEZST00gcG9zdHMgV0hFUkUgcGFyZW50IElTIE5VTEwgQU5EIHRocmVhZD0kMSBBTkQgcGF0aHRvcG9zdFsxXSA+IChTRUxFQ1QgcGF0aHRvcG9zdFsxXSBGUk9NIHBvc3RzIFdIRVJFIGlkPSQyKVxuICAgICAgICAgICAgICAgICAgICBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDRcbiAgICAgICAgICAgICAgICApIEFTIHBpZFxuICAgICAgICAgICAgICAgIE9OICh0aHJlYWQ9JDEgQU5EIHBpZC5wYXJlbnRfaWQ9cGF0aHRvcG9zdFsxXSlcbiAgICAgICAgICAgICAgICBPUkRFUiBCWSAkNTpyYXdcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnNpbmNlLFxuICAgICAgICAgICAgICAgICAgICBpZFNvcnRSdWxlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNvcnRSdWxlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVBhcmFtcy5zaW5jZSAmJiBxdWVyeVBhcmFtcy5kZXNjKXtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoXG4gICAgICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gcG9zdHNcbiAgICAgICAgICAgICAgICBKT0lOIChcbiAgICAgICAgICAgICAgICAgICAgU0VMRUNUIGlkIEFTIHBhcmVudF9pZCBGUk9NIHBvc3RzIFdIRVJFIHBhcmVudCBJUyBOVUxMIEFORCB0aHJlYWQ9JDEgQU5EIHBhdGh0b3Bvc3RbMV0gPCAoU0VMRUNUIHBhdGh0b3Bvc3RbMV0gRlJPTSBwb3N0cyBXSEVSRSBpZD0kMilcbiAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgJDM6cmF3IExJTUlUICQ0XG4gICAgICAgICAgICAgICAgKSBBUyBwaWRcbiAgICAgICAgICAgICAgICBPTiAodGhyZWFkPSQxIEFORCBwaWQucGFyZW50X2lkPXBhdGh0b3Bvc3RbMV0pXG4gICAgICAgICAgICAgICAgT1JERVIgQlkgJDU6cmF3XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaWRTb3J0UnVsZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTb3J0UnVsZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7ICAgXG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKFxuICAgICAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIHBvc3RzXG4gICAgICAgICAgICAgICAgSk9JTiAoXG4gICAgICAgICAgICAgICAgICAgIFNFTEVDVCBpZCBBUyBwYXJlbnRfaWQgRlJPTSBwb3N0cyBXSEVSRSBwYXJlbnQgSVMgTlVMTCBBTkQgdGhyZWFkPSQxXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNFxuICAgICAgICAgICAgICAgICkgQVMgcGlkXG4gICAgICAgICAgICAgICAgT04gKHRocmVhZD0kMSBBTkQgcGlkLnBhcmVudF9pZD1wYXRodG9wb3N0WzFdKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZICQ1OnJhd1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgICAgIGlkU29ydFJ1bGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBwYXRoU29ydFJ1bGVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApOyAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RNb2RlbDsiLCJpbXBvcnQgZGJJbnN0YW5jZSwgeyBwZ3AgfSBmcm9tICcuLi9tb2R1bGVzL0RhdGFCYXNlTW9kdWxlLmpzJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG5jbGFzcyBTZXJ2aWNlTW9kZWwge1xuICAgIFxuICAgIGFzeW5jIGNvdW50QWxsKCkge1xuICAgICAgICBsZXQgZm9ydW0gPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gZm9ydW1zJyk7XG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgZGJJbnN0YW5jZS5vbmUoJ1NFTEVDVCBDT1VOVCgqKSBGUk9NIHBvc3RzJyk7XG4gICAgICAgIGxldCB0aHJlYWQgPSBhd2FpdCBkYkluc3RhbmNlLm9uZSgnU0VMRUNUIENPVU5UKCopIEZST00gdGhyZWFkcycpO1xuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IGRiSW5zdGFuY2Uub25lKCdTRUxFQ1QgQ09VTlQoKikgRlJPTSB1c2VycycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBcImZvcnVtXCI6IHBhcnNlSW50KGZvcnVtLmNvdW50KSxcbiAgICAgICAgICAgIFwicG9zdFwiOiBwYXJzZUludChwb3N0LmNvdW50KSxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHBhcnNlSW50KHRocmVhZC5jb3VudCksXG4gICAgICAgICAgICBcInVzZXJcIjogcGFyc2VJbnQodXNlci5jb3VudClcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIGNsZWFyQWxsKCkge1xuXG4gICAgICAgIGxldCBmb3J1bSA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgZm9ydW1zIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHBvc3QgPSBhd2FpdCBkYkluc3RhbmNlLm5vbmUoJ1RSVU5DQVRFIFRBQkxFIHBvc3RzIENBU0NBREUnKTtcbiAgICAgICAgbGV0IHRocmVhZCA9IGF3YWl0IGRiSW5zdGFuY2Uubm9uZSgnVFJVTkNBVEUgVEFCTEUgdGhyZWFkcyBDQVNDQURFJyk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGJJbnN0YW5jZS5ub25lKCdUUlVOQ0FURSBUQUJMRSB1c2VycyBDQVNDQURFJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIFwiZm9ydW1cIjogZm9ydW0sXG4gICAgICAgICAgICBcInBvc3RcIjogcG9zdCxcbiAgICAgICAgICAgIFwidGhyZWFkXCI6IHRocmVhZCxcbiAgICAgICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFRocmVhZE1vZGVsIHtcbiAgICBcbiAgICBhc3luYyBjcmVhdGVOZXdUaHJlYWQgKGNvbHVtbnMsIHZhbHVlcykge1xuICAgICAgICBsZXQgcmVtZW1iZXI7XG4gICAgICAgIGxldCBjID0gJygnOyBcbiAgICAgICAgbGV0IHYgPSAnKCc7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnNbaV0gPT09ICdzbHVnJykge1xuICAgICAgICAgICAgICAgIHJlbWVtYmVyID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgKz0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYyArPSAnKSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHYgKz0gJyQnICsgKGkrMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2ICs9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdiArPSAnKSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICdJTlNFUlQgSU5UTyB0aHJlYWRzICcgKyBjICsgJyBWQUxVRVMgJyArIHYgKyBgIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HICpgO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgSU4gQ1JFQVRJTkcgVEhSRUFEJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeVNsdWcgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgc2x1Zz0kMScsIFtzbHVnXSlcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRCeUlkIChpZCkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmVPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBpZD0kMScsIFtpZF0pXG4gICAgfVxuXG4gICAgZ2V0VGhyZWFkc0J5Rm9ydW1TbHVnIChmb3J1bVNsdWcsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmRlc2MgPSBxdWVyeVBhcmFtcy5kZXNjID09PSAndHJ1ZSdcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmICFxdWVyeVBhcmFtcy5kZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgQU5EIFwiY3JlYXRlZFwiPj0kMiBPUkRFUiBCWSAkMzpyYXcgTElNSVQgJDQnLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBmb3J1bVNsdWcsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuc2luY2UsXG4gICAgICAgICAgICAgICAgKHF1ZXJ5UGFyYW1zLmRlc2MgPyAnXCJjcmVhdGVkXCIgREVTQycgOiAnXCJjcmVhdGVkXCIgQVNDJyksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMubGltaXRcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLnNpbmNlICYmIHF1ZXJ5UGFyYW1zLmRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkluc3RhbmNlLm1hbnlPck5vbmUoJ1NFTEVDVCAqIEZST00gdGhyZWFkcyBXSEVSRSBmb3J1bT0kMSBBTkQgXCJjcmVhdGVkXCI8PSQyIE9SREVSIEJZICQzOnJhdyBMSU1JVCAkNCcsIFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGZvcnVtU2x1ZyxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5zaW5jZSxcbiAgICAgICAgICAgICAgICAocXVlcnlQYXJhbXMuZGVzYyA/ICdcImNyZWF0ZWRcIiBERVNDJyA6ICdcImNyZWF0ZWRcIiBBU0MnKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5saW1pdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXF1ZXJ5UGFyYW1zLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5tYW55T3JOb25lKCdTRUxFQ1QgKiBGUk9NIHRocmVhZHMgV0hFUkUgZm9ydW09JDEgT1JERVIgQlkgJDI6cmF3IExJTUlUICQzJywgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZm9ydW1TbHVnLFxuICAgICAgICAgICAgICAgIChxdWVyeVBhcmFtcy5kZXNjID8gJ1wiY3JlYXRlZFwiIERFU0MnIDogJ1wiY3JlYXRlZFwiIEFTQycpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFZvdGVzQnlTbHVnIChzbHVnLCB2b2ljZSkge1xuICAgICAgICByZXR1cm4gZGJJbnN0YW5jZS5vbmUoJ1VQREFURSB0aHJlYWRzIFNFVCB2b3RlcyA9IHZvdGVzICsgJDIgV0hFUkUgc2x1Zz0kMSBSRVRVUk5JTkcgKicsIFtzbHVnLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50Vm90ZXNCeUlkIChpZCwgdm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lKCdVUERBVEUgdGhyZWFkcyBTRVQgdm90ZXMgPSB2b3RlcyArICQyIFdIRVJFIGlkPSQxIFJFVFVSTklORyAqJywgW2lkLHZvaWNlXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGhyZWFkIChzbHVnLCBjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd0aHJlYWRzJ30sbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwic2x1Z1xcXCIgPSBcXCdcIiArICBzbHVnICsgXCJcXCcgUkVUVVJOSU5HICpcIjtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRocmVhZE1vZGVsO1xuIiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuY2xhc3MgVXNlck1vZGVsIHtcblxuICAgIGdldFVzZXJCeU5pY2tuYW1lIChuaWNrbmFtZSkge1xuICAgICAgICAvLyBvbmVPck5vbmUg0LLQvtC30LLRgNCw0YnQsNC10YIg0L3Rg9C7INC10YHQu9C4INC90LXRgiDRgdGC0YDQvtC6XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5Tmlja25hbWVPckVtYWlsIChuaWNrLCBtYWlsKSB7IC8vINC80L7QttC90L4g0LrQsNC6LdGC0L4g0L3QtSDQv9GA0L7RhdC+0LTQuNGC0YzRgdGPINC/0L4g0LLRgdC10Lkg0YLQsNCx0LvQuNGG0LUsINCwINC+0YHRgtCw0L3QsNCy0LvQuNCy0LDRgtGB0Y8g0LrQsNC6INGC0L7Qu9GM0LrQviDQvdCw0YjQu9C4IDEg0LLRhdC+0LbQtNC10L3QuNC1XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gbmljayB8fCAnJztcbiAgICAgICAgY29uc3QgZW1haWwgPSBtYWlsIHx8ICcnO1xuICAgICAgICAvLyBtYW55T3JOb25lINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LIg0LXRgdC70Lgg0L3QtdGCINGB0YLRgNC+0LpcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2UubWFueU9yTm9uZSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMSBPUiBlbWFpbD0kMicsIFtuaWNrbmFtZSwgZW1haWxdKTsgXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3VXNlcihuZXdVc2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUoJ0lOU0VSVCBJTlRPIHVzZXJzIChuaWNrbmFtZSwgZnVsbG5hbWUsIGFib3V0LCBlbWFpbCkgVkFMVUVTICgkMSwgJDIsICQzICwkNCkgT04gQ09ORkxJQ1QgRE8gTk9USElORyBSRVRVUk5JTkcgKicsIG5ld1VzZXJEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIElOIENSRUFUSU5HIFVTRVInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFzeW5jIHVwZGF0ZVVzZXIobmlja25hbWUsY29sdW1ucywga2V5VmFsdWVzKSB7XG5cbiAgICAvLyAgICAgY29uc3QgcXVlcnkgPSBwZ3AuaGVscGVycy51cGRhdGUoa2V5VmFsdWVzLCBjb2x1bW5zLCB7dGFibGU6ICd1c2Vycyd9LCBudWxsLCB7ZW1wdHlVcGRhdGU6ICdjb25mbGljdCd9KSArIFwiIFdIRVJFIFxcXCJuaWNrbmFtZVxcXCIgPSBcXCdcIiArICBuaWNrbmFtZSArIFwiXFwnIFJFVFVSTklORyAqXCI7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUVVFUllcIiwgcXVlcnkpO1xuICAgIC8vICAgICByZXR1cm4gYXdhaXQgZGJJbnN0YW5jZS5vbmVPck5vbmUocXVlcnkpO1xuICAgIC8vIH1cblxuXG4gICAgYXN5bmMgdXBkYXRlVXNlcihuaWNrbmFtZSxjb2x1bW5zLCBrZXlWYWx1ZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGdwLmhlbHBlcnMudXBkYXRlKGtleVZhbHVlcywgY29sdW1ucywge3RhYmxlOiAndXNlcnMnfSwgbnVsbCwge2VtcHR5VXBkYXRlOiAnY29uZmxpY3QnfSkgKyBcIiBXSEVSRSBcXFwibmlja25hbWVcXFwiID0gXFwnXCIgKyAgbmlja25hbWUgKyBcIlxcJyBSRVRVUk5JTkcgKlwiOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRiSW5zdGFuY2Uub25lT3JOb25lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vINC60LDQt9Cw0LvQvtGB0Ywg0LHRiyDQvNCw0YHQu9C+INC80LDQu9GB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LjQvNGPINC40LzQtdC90L3QviDRgtCw0Log0LrQsNC6INC+0L3QviDQsdGL0LvQviDQt9Cw0LjRgdCw0L3QvlxuICAgIC8qXG4gICAg0LrQsNC30LDQu9C+0YHRjCDQsdGLINC80LDRgdC70L4g0LzQsNGB0LvRj9C90L7QtSwg0L3QviDRjdGC0L4g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0YxcbiAgICDQuNC80Y8g0YLQsNC6INC60LDQuiDQvtC90L4g0LHRi9C70L4g0LfQsNC/0LjRgdCw0L3QviDQsiDRgtCw0LHQu9C40YbQtSB1c2VycyAo0L3QtSDQsiDQstC10YDRhdC90LXQvCDQuNC70Lgg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LDRhSlcbiAgICAqL1xuICAgIGdldFVzZXJOaWNrbmFtZSAobmlja25hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRiSW5zdGFuY2Uub25lT3JOb25lKCdTRUxFQ1Qgbmlja25hbWUgRlJPTSB1c2VycyBXSEVSRSBuaWNrbmFtZT0kMScsIFtuaWNrbmFtZV0pXG4gICAgfVxuXG5cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyTW9kZWw7IiwiaW1wb3J0IGRiSW5zdGFuY2UsIHsgcGdwIH0gZnJvbSAnLi4vbW9kdWxlcy9EYXRhQmFzZU1vZHVsZS5qcyc7XG5cbmNsYXNzIFZvdGVNb2RlbCB7XG5cbiAgICB2b3RlICh2b2ljZSwgdGhyZWFkSWQsIG5pY2tuYW1lKSB7XG4gICAgICAgIHJldHVybiBkYkluc3RhbmNlLm9uZU9yTm9uZShgSU5TRVJUIElOVE8gdm90ZXMgKHZvaWNlLCB0aHJlYWQsIG5pY2tuYW1lKSBWQUxVRVMgKCQxLCAkMiwgJDMpIE9OIENPTkZMSUNUIE9OIENPTlNUUkFJTlQgdW5pcXVlVGhyZWFkTmlja25hbWUgRE8gXG4gICAgICAgIFVQREFURSBTRVQgdm9pY2U9JDEgV0hFUkUgdm90ZXMudm9pY2U8PiQxIFJFVFVSTklORyAqLCAoeG1heDo6dGV4dDo6aW50ID4gMCkgYXMgZXhpc3RlZGAsIFt2b2ljZSwgdGhyZWFkSWQsIG5pY2tuYW1lXSk7IFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVm90ZU1vZGVsOyBcbiIsImV4cG9ydCBjb25zdCBwZ3AgPSByZXF1aXJlKCdwZy1wcm9taXNlJykoKTtcblxuY29uc3QgZGJPcHRpb25zID0ge1xuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IDU0MzIsXG4gICAgZGF0YWJhc2U6ICdmb3J1bScsXG4gICAgdXNlcjogJ2VybWFrZm9ydW0nLFxuICAgIHBhc3N3b3JkOiAnMTIzJ1xufVxuXG5jb25zdCBkYkluc3RhbmNlID0gcGdwKGRiT3B0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBkYkluc3RhbmNlO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBGb3J1bUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRm9ydW1Db250cm9sbGVyLmpzJztcblxuY29uc3QgZm9ydW1Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5mb3J1bVJvdXRlci5wb3N0KCcvY3JlYXRlJywgRm9ydW1Db250cm9sbGVyLmNyZWF0ZUZvcnVtKTtcbmZvcnVtUm91dGVyLnBvc3QoJy86c2x1Zy9jcmVhdGUnLCBGb3J1bUNvbnRyb2xsZXIuY3JlYXRlVGhyZWFkSW5Gb3J1bSk7XG5mb3J1bVJvdXRlci5nZXQoJy86c2x1Zy9kZXRhaWxzJywgRm9ydW1Db250cm9sbGVyLmdldERldGFpbHMpO1xuZm9ydW1Sb3V0ZXIuZ2V0KCcvOnNsdWcvdGhyZWFkcycsIEZvcnVtQ29udHJvbGxlci5nZXRUaHJlYWRzKTtcbmZvcnVtUm91dGVyLmdldCgnLzpzbHVnL3VzZXJzJywgRm9ydW1Db250cm9sbGVyLmdldFVzZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ydW1Sb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBQb3N0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHBvc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5wb3N0Um91dGVyLmdldCgnLzppZC9kZXRhaWxzJywgUG9zdENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG5wb3N0Um91dGVyLnBvc3QoJy86aWQvZGV0YWlscycsIFBvc3RDb250cm9sbGVyLnVwZGF0ZURldGFpbHMpO1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Um91dGVyOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2VydmljZUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBzZXJ2aWNlUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuc2VydmljZVJvdXRlci5nZXQoJy9zdGF0dXMnLCBTZXJ2aWNlQ29udHJvbGxlci5jb3VudEFsbCk7XG5zZXJ2aWNlUm91dGVyLnBvc3QoJy9jbGVhcicsIFNlcnZpY2VDb250cm9sbGVyLmNsZWFyQWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZVJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFRocmVhZENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVGhyZWFkQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHRocmVhZFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvY3JlYXRlJywgVGhyZWFkQ29udHJvbGxlci5jcmVhdGVQb3N0KTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvdm90ZScsIFRocmVhZENvbnRyb2xsZXIudm90ZUZvclRocmVhZCk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIuZ2V0RGV0YWlscyk7XG50aHJlYWRSb3V0ZXIuZ2V0KCcvOnNsdWdfb3JfaWQvcG9zdHMnLCBUaHJlYWRDb250cm9sbGVyLmdldFBvc3RzKTtcbnRocmVhZFJvdXRlci5wb3N0KCcvOnNsdWdfb3JfaWQvZGV0YWlscycsIFRocmVhZENvbnRyb2xsZXIudXBkYXRlVGhyZWFkKTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aHJlYWRSb3V0ZXI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvY3JlYXRlJywgVXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcik7XG51c2VyUm91dGVyLnBvc3QoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xudXNlclJvdXRlci5nZXQoJy86bmlja25hbWUvcHJvZmlsZScsIFVzZXJDb250cm9sbGVyLmdldFVzZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyOyIsImV4cG9ydCBjb25zdCBoYXJ2ZXN0Q29sdW1ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5cyA9IFtdXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09ICcnKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGNvbnN0IGhhcnZlc3RWYWx1ZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhkYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5leHBvcnQgY29uc3QgaGFydmVzdEtleVZhbHVlcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3Qga2V5VmFsdWVzID0ge31cbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgICAgIGtleVZhbHVlc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlWYWx1ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBpZFRvSW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtpXS5pZCA9IHBhcnNlSW50KGRhdGFbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbFN0ciA9IGZ1bmN0aW9uICh2YWx1ZXMsIG5vRG90KSB7XG4gICAgbGV0IHYgPSAnICgnO1xuICAgIGZvciAobGV0IGkgPTAgOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICggaSAhPT0gMikge1xuICAgICAgICAgICAgdiArPSBcIidcIiArIHZhbHVlc1tpXSArIFwiJ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdiArPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAhPT0gdmFsdWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHYgKz0gJywgJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9Eb3QpIHtcbiAgICAgICAgdiArPSAnKSAnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdiArPSAnKSwgJzsgXG4gICAgfVxuICAgIHJldHVybiB2O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGctcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==