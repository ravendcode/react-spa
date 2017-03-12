/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.distClientDir=exports.locale=exports.host=exports.salt=exports.mongoDbUri=exports.httpsPort=exports.httpsOptions=exports.httpPort=exports.env=void 0;var _path=__webpack_require__(3),_path2=_interopRequireDefault(_path),_utils=__webpack_require__(9);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const env=process.env.NODE_ENV||'development',httpPort=(0,_utils.normalizePort)(process.env.PORT||80),httpsPort=443,distClientDir=_path2.default.join(__dirname,'../../dist/client');let httpsOptions,mongoDbName=process.env.MONGODB_NAME||'startexpress';'test'===process.env.NODE_ENV&&(mongoDbName+='_test',console.log(`env is ${env}`));const mongoDbUri=process.env.MONGODB_URI||`mongodb://localhost/${mongoDbName}`,salt=process.env.SALT||'$2a$10$gK5iJIrl2/drnIpSOLdWpO',host=process.env.HOST||'app.dev',locale='ru';exports.env=env,exports.httpPort=httpPort,exports.httpsOptions=httpsOptions,exports.httpsPort=httpsPort,exports.mongoDbUri=mongoDbUri,exports.salt=salt,exports.host=host,exports.locale=locale,exports.distClientDir=distClientDir;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("i18n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(13),__webpack_require__(12);const http=__webpack_require__(19),debug=__webpack_require__(18)('app:server'),app=__webpack_require__(5).default,config=__webpack_require__(1);let port=config.httpPort,server=http.createServer(app);app.set('port',port),server.listen(port),server.on('error',onError),server.on('listening',onListening);function onError(a){if('listen'!==a.syscall)throw a;var b='string'==typeof port?'Pipe '+port:'Port '+port;switch(a.code){case'EACCES':console.error(b+' requires elevated privileges'),process.exit(1);break;case'EADDRINUSE':console.error(b+' is already in use'),process.exit(1);break;default:throw a;}}function onListening(){debug(`env is ${config.env}`);var a=server.address(),b='string'==typeof a?'pipe '+a:'port '+a.port;debug('http server listening on '+b)}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _path=__webpack_require__(3),_path2=_interopRequireDefault(_path),_express=__webpack_require__(0),_express2=_interopRequireDefault(_express),_morgan=__webpack_require__(21),_morgan2=_interopRequireDefault(_morgan),_bodyParser=__webpack_require__(14),_bodyParser2=_interopRequireDefault(_bodyParser),_cookieParser=__webpack_require__(16),_cookieParser2=_interopRequireDefault(_cookieParser),_i18n=__webpack_require__(2),_i18n2=_interopRequireDefault(_i18n),_serveFavicon=__webpack_require__(22),_serveFavicon2=_interopRequireDefault(_serveFavicon),_compression=__webpack_require__(15),_compression2=_interopRequireDefault(_compression),_cors=__webpack_require__(17),_cors2=_interopRequireDefault(_cors),_config=__webpack_require__(1),config=_interopRequireWildcard(_config),_routes=__webpack_require__(7),_routes2=_interopRequireDefault(_routes);function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const app=(0,_express2.default)();app.use((0,_compression2.default)()),app.use((0,_cors2.default)()),'development'===config.env&&app.use((0,_morgan2.default)('dev')),_i18n2.default.configure({locales:['en','ru'],defaultLocale:config.locale,directory:_path2.default.join(__dirname,'locales'),queryParameter:'lang',register:global}),app.use(_i18n2.default.init),app.use(_bodyParser2.default.json()),app.use(_bodyParser2.default.urlencoded({extended:!1})),app.use((0,_cookieParser2.default)()),app.use(_express2.default.static(config.distClientDir)),app.use((0,_serveFavicon2.default)(config.distClientDir+'/assets/icons/favicon.ico')),app.use((a,b,c)=>{app.locals.app={env:config.env,httpPort:config.httpPort,httpsPort:config.httpsPort,host:config.host,locale:b.getLocale()},c()}),(0,_routes2.default)(app),app.get('*',(a,b)=>{b.sendFile(config.distClientDir+'/index.html')}),app.use((a,b,c)=>{let e=a.message,f=a.status||500,g={message:e,status:f};'development'===config.env&&404!==f&&(g.stack=a.stack),c.status(f).send({error:g})}),exports.default=app;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.todos=void 0;var _express=__webpack_require__(0),_express2=_interopRequireDefault(_express),_lodash=__webpack_require__(20),_lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const router=_express2.default.Router();let todos=exports.todos=[{id:1,name:'Learn JSX',isComplete:!1},{id:2,name:'Learn Unity',isComplete:!0},{id:3,name:'Ship It',isComplete:!1}];router.get('/',(a,b)=>{b.send({todos})}),router.get('/:id',(a,b)=>{b.send({todo:a.todo})}),router.post('/',(a,b)=>{let d=_lodash2.default.pick(a.body,['id','name','isComplete']),e=todos.push(d);b.status(201).send({todo:e})}),router.patch('/:id',(a,b)=>{let d=_lodash2.default.pick(a.body,['id','name','isComplete']);_lodash2.default.extend(a.todo,d),todos[a.todoIndex]=a.todo,b.send({todo:a.todo})}),router.delete('/:id',(a,b)=>{todos.splice(a.todoIndex,1),b.sendStatus(200)}),router.param('id',function(a,b,c,d){let e=parseInt(d,10),f=todos.findIndex((h)=>h.id===e);if(-1===f)return b.sendStatus(404);let g=todos.find((h)=>h.id===e);a.todo=g,a.todoIndex=f,c()}),exports.default=router;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=(a)=>{a.use('/',__webpack_require__(8).default),a.use('/api/todos',__webpack_require__(6).default)};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _express=__webpack_require__(0),_express2=_interopRequireDefault(_express);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const router=_express2.default.Router();router.get('/test',(a,b)=>{b.send(a.__('model.title'))}),router.get('/error',(a,b)=>{b.status(500).send({error:{message:'Error',status:500}})}),exports.default=router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _validation=__webpack_require__(11);Object.defineProperty(exports,'Validation',{enumerable:!0,get:function get(){return _validation.Validation}});var _normalize=__webpack_require__(10);Object.defineProperty(exports,'normalizePort',{enumerable:!0,get:function get(){return _normalize.normalizePort}});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});const normalizePort=exports.normalizePort=(a)=>{var b=parseInt(a,10);return isNaN(b)?a:!!(0<=b)&&b};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.Validation=void 0;var _validator=__webpack_require__(23),_validator2=_interopRequireDefault(_validator),_i18n=__webpack_require__(2),_i18n2=_interopRequireDefault(_i18n);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}class Validation{constructor(a,b){this.rawData=a,this.rules=b,this.errors={}}validate(){return this.check().then(()=>{if(0!==Object.keys(this.errors).length)return Promise.reject({errors:this.errors})})}check(){let a,b,c,d,e,f,g,h,i,j,k,l,m;for(let n in this.rules)for(let o in this.rules[n])switch(o){case'required':a=this.required(n,this.rawData[n],this.rules[n][o]);break;case'email':b=this.email(n,this.rawData[n],this.rules[n][o]);break;case'minlength':c=this.minlength(n,this.rawData[n],this.rules[n][o]);break;case'maxlength':d=this.maxlength(n,this.rawData[n],this.rules[n][o]);break;case'min':e=this.min(n,this.rawData[n],this.rules[n][o]);break;case'max':f=this.max(n,this.rawData[n],this.rules[n][o]);break;case'notIn':g=this.notIn(n,this.rawData[n],this.rules[n][o]);break;case'enum':h=this.enum(n,this.rawData[n],this.rules[n][o]);break;case'unique':i=this.unique(n,this.rawData[n],this.rules[n][o]);break;case'match':j=this.match(n,this.rawData[n],this.rules[n][o]);break;case'numeric':k=this.numeric(n,this.rawData[n],this.rules[n][o]);break;case'decimal':l=this.decimal(n,this.rawData[n],this.rules[n][o]);break;default:let p=`Rule ${o} for ${n} no implements in validation`;m=Promise.reject({error:{message:p}});}return Promise.all([a,b,c,d,e,f,g,h,i,j,k,l,m])}required(a,b,c){let d=_i18n2.default.__('validation.required %s',_i18n2.default.__(`model.${a}`));Array.isArray(c)?d=c.pop():!0!==c&&(d=c),(b===void 0||0>=b.length)&&(this.errors[a]={message:d})}email(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.email %s',_i18n2.default.__(`model.${a}`));Array.isArray(c)?d=c.pop():!0!==c&&(d=c),_validator2.default.isEmail(b)||(this.errors[a]={message:d})}}minlength(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.minlength %s %s',_i18n2.default.__(`model.${a}`),c),e=c;Array.isArray(c)&&(d=c.pop(),e=c[0]),b.length<e&&(this.errors[a]={message:d})}}maxlength(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.maxlength %s %s',_i18n2.default.__(`model.${a}`),c),e=c;Array.isArray(c)&&(d=c.pop(),e=c[0]),b.length>e&&(this.errors[a]={message:d})}}min(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.min %s %s',_i18n2.default.__(`model.${a}`),c),e=c;Array.isArray(c)&&(d=c.pop(),e=c[0]),b<e&&(this.errors[a]={message:d})}}max(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.max %s %s',_i18n2.default.__(`model.${a}`),c),e=c;Array.isArray(c)&&(d=c.pop(),e=c[0]),b>e&&(this.errors[a]={message:d})}}notIn(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.notIn %s',_i18n2.default.__(`model.${a}`)),e=c;Array.isArray(c)?(c[c.length-1]&&(d=c.pop()),e.some((f)=>f===b)&&(this.errors[a]={message:d})):b===e&&(this.errors[a]={message:d})}}enum(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.enum %s',_i18n2.default.__(`model.${a}`)),e=c;Array.isArray(c)?(c[c.length-1]&&(d=c.pop()),!e.includes(b)&&(this.errors[a]={message:d})):b!==e&&(this.errors[a]={message:d})}}numeric(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.numeric %s',_i18n2.default.__(`model.${a}`));Array.isArray(c)?d=c.pop():!0!==c&&(d=c),_validator2.default.isNumeric(b)||(this.errors[a]={message:d})}}decimal(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.decimal %s',_i18n2.default.__(`model.${a}`));Array.isArray(c)?d=c.pop():!0!==c&&(d=c),_validator2.default.isDecimal(b)||(this.errors[a]={message:d})}}match(a,b,c){if(b!==void 0){let d=_i18n2.default.__('validation.match %s',_i18n2.default.__(`model.${a}`)),e=c;Array.isArray(c)&&(d=c.pop(),e=c[0]),_validator2.default.matches(b,e)||(this.errors[a]={message:d})}}unique(a,b,c){if(b!==void 0&&''!==b){let d=_i18n2.default.__('validation.unique %s',_i18n2.default.__(`model.${a}`)),e=c;Array.isArray(c)&&(d=c.pop(),e=c[0]);let f={};f[a]=b;let g=this;return e.findOne(f).then((h)=>{h&&(g.errors[a]={message:d})})}}}exports.Validation=Validation;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);