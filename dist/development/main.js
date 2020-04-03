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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DefaultConfig.mjs":
/*!*******************************!*\
  !*** ./src/DefaultConfig.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultConfig; });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * Path to the neo.mjs theme css files
     * See main.mixins.Stylesheet => createStyleSheet()
     * @default Neo.config.basePath + 'build/' + Neo.config.environment
     * @memberOf! module:Neo
     * @name [config.cssPath]
     * @optional
     * @type String|null
     */
    cssPath: null,
    /**
     * The current build => dist environment. Valid values: 'development', 'production'
     * Used for automatically including the matching theme files
     * @default 'production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'production',
    /**
     * Flag if Neo is running without any JS builds
     * @default false
     * @memberOf! module:Neo
     * @name config.isExperimental
     * @type Boolean
     */
    isExperimental: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCss4 === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if to load the files needed for working with amCharts
     * https://www.amcharts.com/docs/v4/
     * @default false
     * @memberOf! module:Neo
     * @name config.useAmCharts
     * @type Boolean
     */
    useAmCharts: false,
    /**
     * Flag if CSS4 stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCss4
     * @type Boolean
     */
    useCss4: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Required for the online examples
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: (Neo.config.basePath || DefaultConfig.basePath) + 'resources/',
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: (Neo.config.basePath || DefaultConfig.basePath) + 'src/worker/'
});



/***/ }),

/***/ "./src/Main.mjs":
/*!**********************!*\
  !*** ./src/Main.mjs ***!
  \**********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Neo.mjs */ "./src/Neo.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/_export.mjs */ "./src/core/_export.mjs");
/* harmony import */ var _main_AmCharts_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/AmCharts.mjs */ "./src/main/AmCharts.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/DomAccess.mjs */ "./src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/DomEvents.mjs */ "./src/main/DomEvents.mjs");
/* harmony import */ var _main_mixins_LocalStorage_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/mixins/LocalStorage.mjs */ "./src/main/mixins/LocalStorage.mjs");
/* harmony import */ var _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worker/Manager.mjs */ "./src/worker/Manager.mjs");








/**
 * @class Neo.Main
 * @extends Neo.core.Base
 * @singleton
 */
class Main extends _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__["Base"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.Main'
         * @private
         */
        className: 'Neo.Main',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Boolean} isReady=false
         * @private
         */
        isReady: false,
        /**
         * @member {boolean} logAnimationFrames=true
         */
        logAnimationFrames: true,
        /**
         * @member {Array} mixins=[LocalStorage]
         */
        mixins: [_main_mixins_LocalStorage_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]],
        /**
         * @member {String} mode='read'
         * @private
         */
        mode: 'read',
        /**
         * @member {Array} readQueue=[]
         * @private
         */
        readQueue: [],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @private
         */
        remote: {
            app: [
                'createLocalStorageItem',
                'destroyLocalStorageItem',
                'editRoute',
                'readLocalStorageItem',
                'setRoute',
                'updateLocalStorageItem'
            ]
        },
        /**
         * @member {Boolean} running=false
         * @private
         */
        running: false,
        /**
         * @member {Boolean} showFps=false
         */
        showFps: false,
        /**
         * @member {Number} timeLimit=15
         */
        timeLimit: 15,
        /**
         * should be dev only
         * @member {Number} totalFrameCount=0
         * @private
         */
        totalFrameCount: 0,
        /**
         * @member {Array} updateQueue=[]
         * @private
         */
        updateQueue: [],
        /**
         * @member {Array} writeQueue=[]
         * @private
         */
        writeQueue: []
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].on('domContentLoaded', me.onDomContentLoaded, me);

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].on({
            'automount'        : me.onRender,
            'message:mountDom' : me.onMountDom,
            'message:updateDom': me.onUpdateDom,
            'updateVdom'       : me.onUpdateVdom,
            scope              : me
        });
    }

    /**
     * Edit the location.hash value
     * @param {Object} data
     */
    editRoute(data) {
        let hashObj = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].parseHash(window.location.hash.substr(1)),
            hashArr = [];

        if (typeof data === 'string') {
            data = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].parseHash(data);
        }

        Object.assign(hashObj, data);

        Object.entries(hashObj).forEach(([key, value]) => {
            hashArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        });

        window.location.hash = hashArr.join('&');
    }

    /**
     *
     */
    onDomContentLoaded() {
        let me = this;

        me.isReady = true;

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.applyBodyCls) {
            _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].applyBodyCls({cls: ['neo-body']});
        }

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.useFontAwesome) {
            _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].createStyleSheet(null, null, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.basePath + 'node_modules/@fortawesome/fontawesome-free/css/all.min.css');
        }

        _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].insertTheme();

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.isInsideSiesta) {
            _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].adjustSiestaEnvironment();
        }

        // we can not use dynamic imports until webpack is ready to support it.
        // using a static import for now. see:
        // https://github.com/neomjs/neo/issues/393
        /*if (Neo.config.useAmCharts) {
            import('./main/AmCharts.mjs');
        }*/

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.useGoogleAnalytics) {
            _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].insertGoogleAnalyticsScript();
        }

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.appPath) {
            _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].loadApplication(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.appPath);
        }

        // not in use right now
        // window.addEventListener('resize', me['globalResizeListener'].bind(me));
    }

    // todo: https://developer.mozilla.org/en-US/docs/Web/Events/resize
    globalResizeListener(event) {
        console.log('globalResizeListener', event);
    }

    /**
     *
     * @param data
     */
    onMountDom(data) {
        this.queueWrite(data);

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param data
     */
    onRender(data) {
        data.data.replyId = data.replyId;
        this.queueWrite(data.data);
    }

    /**
     *
     * @param data
     */
    onUpdateDom(data) {
        this.queueUpdate(data);
    }

    /**
     *
     * @param data
     */
    onUpdateVdom(data) {
        data.data.replyId = data.replyId;
        this.queueUpdate(data.data);
    }

    /**
     *
     * @param queue
     * @param start
     * @returns {number}
     * @private
     */
    processQueue(queue, start) {
        let me    = this,
            limit = me.timeLimit,
            operation;

        while (operation = queue.shift()) {
            if (new Date() - start > limit) {
                queue.unshift(operation);
                return requestAnimationFrame(me.renderFrame.bind(me));
            } else {
                _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][me.mode](operation);
                _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].resolveDomOperationPromise(operation.replyId);
            }
        }
    }

    /**
     *
     * @param data
     * @private
     */
    queueRead(data) {
        let me = this;
        me.readQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     *
     * @param data
     * @private
     */
    queueUpdate(data) {
        let me = this;
        me.updateQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     *
     * @param data
     * @private
     */
    queueWrite(data) {
        let me = this;
        me.writeQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     * Triggers the different DOM operation queues
     * @private
     */
    renderFrame() {
        let me      = this,
            read    = me.readQueue,
            update  = me.updateQueue,
            write   = me.writeQueue,
            reading = me.mode === 'read',
            start   = new Date();

        if (me.logAnimationFrames) {
            me.totalFrameCount++;
            console.log('Total Frames: ' + me.totalFrameCount);
        }

        if (reading || !write.length) {
            me.mode = 'read';
            if (me.processQueue(read, start)) {
                return;
            }
        }

        if (update.length) {
            me.mode = 'update';
            if (me.processQueue(update, start)) {
                return;
            }
        }

        if (write.length) {
            me.mode = 'write';
            if (me.processQueue(write, start)) {
                return;
            }
        }

        me.running = false;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.value
     */
    setRoute(data) {
        window.location.hash = data.value;
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(Main);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(Main);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/Neo.mjs":
/*!*********************!*\
  !*** ./src/Neo.mjs ***!
  \*********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Neo; });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @private
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @private
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @private
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            config        = {},
            proto         = cls.prototype || cls,
            protos        = [],
            staticConfig  = {},
            ctor;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config, true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       ? baseCfg       : config;
        staticConfig = baseStaticCfg ? baseStaticCfg : staticConfig;

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig       && ctor.getConfig()       || {},
                staticCfg = ctor.getStaticConfig && ctor.getStaticConfig() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg && staticCfg.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length) {
                applyMixins(ctor, mixins);
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
        });
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize',
     *     decamel          : 'decamel',
     *     isArray          : 'isArray',
     *     isBoolean        : 'isBoolean',
     *     isDefined        : 'isDefined',
     *     isNumber         : 'isNumber',
     *     isObject         : 'isObject',
     *     isString         : 'isString',
     *     toArray          : 'toArray'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && config && typeof config === 'object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && defaults && typeof defaults === 'object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep, ignoreNeoInstances) {
        let out;

        if (Array.isArray(obj)) {
            return obj.map(val => {
                return Neo.clone(val, deep, ignoreNeoInstances);
            });
        }
        if (obj !== null && typeof obj === 'object') {
            if (obj.constructor.isClass && obj instanceof Neo.core.Base) {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            } else if(obj.constructor.isClass) {
                return obj;
            } else {
                out = {};
                Object.entries(obj).forEach(([key, value]) => {
                    if (deep) {
                        value = Neo.clone(value, deep, ignoreNeoInstances);
                    }
                    out[key] = value;
                });
                return out;
            }
        }
        return obj; // return all other data types
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};
        delete config._id;
        delete config.id;
        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from './Button.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from './Button.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.component.Button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.component.Button',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let cls, instance;

        if (typeof className === 'function' && undefined !== className.constructor) {
            cls = className;
        } else {
            if (typeof className === 'object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className ? config.className : config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls(config);

        instance.onConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.component.Button', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.component.Button = self.Neo.component.Button || {};
     * // return self.Neo.component.Button;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    },

    onStart: Neo.emptyFn
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key] && proto[key]._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                proto.className + ': Multiple mixins defining same property (' +
                mixinProto.className + ', ' +
                proto[key]._from + ') => ' +
                key
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = 'beforeGet' + Neo.capitalize(key),
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                }

                if (me[beforeGet] && typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = Neo.capitalize(key),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (me[beforeSet] && typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                // todo: we could compare objects & arrays for equality
                if (Neo.isObject(value) || Array.isArray(value) || value !== oldValue) {
                    if (me[afterSet] && typeof me[afterSet] === 'function') {
                        me[afterSet](value, oldValue);
                    }
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/core/Base.mjs":
/*!***************************!*\
  !*** ./src/core/Base.mjs ***!
  \***************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./src/core/IdGenerator.mjs");


const configSymbol = Symbol.for('configSymbol'),
      isInstance   = Symbol('isInstance');

/**
 * The base class for all classes inside the Neo namespace
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @private
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @private
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @private
         */
        ntype: 'base',
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null
    }}

    /**
     * Consumes the static getConfig() object
     * Applies the observable mixin if needed, grants remote access if needed
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        if (me.getStaticConfig('observable') || me.mixins && Neo.ns('Neo.core.Observable', me.mixins)) {
            me.initObservable(config);
        }

        me.initConfig(config);

        if (me.controller) {
            me.controller.parseConfig();
        }

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        if (me.remote) {
            setTimeout(me.initRemote.bind(me), 1);
        }
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Gets triggered after onConstructed is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {String} [staticName=name + 's'] name of the static config array
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError('Supported values for ' + name + ' are:', values.join(', '), this);
            return oldValue;
        }

        return value;
    }

    createId(id) {
        let me = this;

        if (!id) {
            id = _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(me.ntype);
        }

        me.id = id;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            if (!Neo.idMap) {
                Neo.idMap = {};
            }

            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        }

        Object.entries(me).forEach(key => {
            me[key] = null;
            delete me[key];
        });
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     *
     */
    processConfigs() {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (!me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs();
        }
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me        = this,
            remote    = me.remote,
            className = me.className,
            origin;

        if (!me.singleton) {
            throw new Error('Remote method access only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            Object.entries(remote).forEach(([worker, methods]) => {
                if (Neo.workerId !== worker) {
                    origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                    origin.sendMessage(worker, {
                        action      : 'registerRemote',
                        methods     : methods,
                        className   : className
                    });
                }
            });
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        // instead of using:
        // me[configSymbol] = values;
        // we keep the Object instance (defined via Object.defineProperties() => non enumerable)

        Object.keys(me[configSymbol]).forEach(key => {
            delete me[configSymbol][key];
        });

        Object.assign(me[configSymbol], values);

        me.processConfigs();
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.component.Button').toString() => "[object Neo.component.Button (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return this.className + ' (id:' + this.id + ')';
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;



/***/ }),

/***/ "./src/core/IdGenerator.mjs":
/*!**********************************!*\
  !*** ./src/core/IdGenerator.mjs ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @private
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @private
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @private
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    onConstructed() {}

    init() {}

    /**
     *
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/core/Logger.mjs":
/*!*****************************!*\
  !*** ./src/core/Logger.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @private
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @private
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @private
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
     * @param args
     * @private
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/core/Observable.mjs":
/*!*********************************!*\
  !*** ./src/core/Observable.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @private
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @private
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @private
         */
        mixin: true
    }}

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            me.addListener(listeners);
        }

        while (proto && proto.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     *
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me = this,
            listener, existing, eventConfig;

        if (typeof name === 'object') {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        eventConfig = {
            fn    : listener,
            scope : scope,
            data  : data,
            id    : eventId || Neo.getId('event')
        };

        if (existing = me.listeners && me.listeners[name]) {
            existing.forEach(cfg => {
                if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                    throw new Error('Duplicate event handler attached: ' + name);
                }
            });

            if (typeof order === 'number') {
                existing.splice(order, 0, eventConfig);
            } else if (order === 'before') {
                existing.unshift(eventConfig);
            } else {
                existing.push(eventConfig);
            }
        } else {
            me.listeners[name] = [eventConfig];
        }

        return eventConfig.id;
    }

    /**
     *
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    /**
     *
     * @param name
     * @param eventId
     */
    removeListener(name, eventId) {
        if (Neo.isString(eventId)) {
            let listeners   = this.listeners[name],
                match       = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     * Alias for removeListener
     * @param name
     * @param eventId
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);



/***/ }),

/***/ "./src/core/Util.mjs":
/*!***************************!*\
  !*** ./src/core/Util.mjs ***!
  \***************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @private
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @private
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @private
         */
        ntype: 'core-util',
    }}

    /**
     * Converts a syles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray'
}, true);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./src/core/_export.mjs":
/*!******************************!*\
  !*** ./src/core/_export.mjs ***!
  \******************************/
/*! exports provided: Base, Logger, Observable, Util */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/core/Base.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger.mjs */ "./src/core/Logger.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.mjs */ "./src/core/Observable.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.mjs */ "./src/core/Util.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _Util_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./src/main/AmCharts.mjs":
/*!*******************************!*\
  !*** ./src/main/AmCharts.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomAccess.mjs */ "./src/main/DomAccess.mjs");



/**
 * Helper class to include amCharts into your neo.mjs app
 * https://www.amcharts.com/docs/v4/
 * @class Neo.main.AmCharts
 * @extends Neo.core.Base
 * @singleton
 */
class AmCharts extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.AmCharts'
         * @private
         */
        className: 'Neo.main.AmCharts',
        /**
         * Stores all chart ids inside an object
         * @member {Object} charts={}
         * @private
         */
        charts: {},
        /**
         * Stores all chart config objects which arrived before the chart lib scripts got loaded
         * @member {Object[]} chartsToCreate=[]
         * @private
         */
        chartsToCreate: [],
        /**
         * Stores all chart data inside an object. key => chart id
         * No array since in case a chart gets loaded multiple times, we only want to apply the last data on mount.
         * @member {Object} charts={}
         * @private
         */
        dataMap: {},
        /**
         * @member {String} downLoadPath='https//www.amcharts.com/lib/4/'
         * @private
         */
        downLoadPath: 'https://www.amcharts.com/lib/4/',
        /**
         * @member {String} fallbackPath='https://neomjs.github.io/pages/resources/amCharts/'
         * @private
         */
        fallbackPath: 'https://neomjs.github.io/pages/resources/amCharts/',
        /**
         * @member {Boolean} scriptsLoaded_=true
         * @private
         */
        scriptsLoaded_: false,
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @private
         */
        remote: {
            app: [
                'create',
                'toggleLogarithmic',
                'updateData'
            ]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        if (Neo.config.useAmCharts) {
            this.insertAmChartsScripts();
        }
    }

    /**
     * Triggered after the scriptsLoaded config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetScriptsLoaded(value, oldValue) {
        if (value) {
            const me = this;

            me.chartsToCreate.forEach(config => {
                me.create(config);
            });

            me.chartsToCreate = [];

            setTimeout(() => {
                Object.entries(me.dataMap).forEach((key, dataValue) => {
                    me.updateData(dataValue);
                });

                me.dataMap = {};
            }, 1000);
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Object} data.config
     * @param {String} data.id
     * @param {String} data.package
     * @param {String} data.type='XYChart'
     */
    create(data) {
        const me = this;

        if (!me.scriptsLoaded) {
            me.chartsToCreate.push(data);
        } else {
            // todo: check if self[data.package] exists, if not load it and call create afterwards

            me.charts[data.id] = am4core.createFromConfig(data.config, data.id, self[data.package][data.type || 'XYChart']);

            // in case data has arrived before the chart got created, apply it now
            if (me.dataMap[data.id]) {
                me.updateData(me.dataMap[data.id]);
                delete me.dataMap[data.id];
            }
        }
    }

    /**
     *
     * @param {String} id
     * @return {Boolean}
     */
    hasChart(id) {
        return this.charts[id];
    }

    /**
     * Async approach
     * core.js has to arrive first or the other scripts will cause JS errors since they rely on it
     * => fetching the other files after core.js is loaded
     */
    insertAmChartsScripts(useFallback=false) {
        const me       = this,
              basePath = useFallback ? me.fallbackPath : me.downLoadPath;

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].loadScript(basePath + 'core.js').then(() => {
            Promise.all([
                _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].loadScript(basePath+ 'charts.js'),
                _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].loadScript(basePath + 'maps.js'),
                _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].loadScript(basePath + 'geodata/worldLow.js')
            ]).then(() => {
                me.scriptsLoaded = true;
            });
        }).catch(e => {
            console.log('Download from amcharts.com failed, switching to fallback', e);
            me.insertAmChartsScripts(true);
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {Boolean} data.value
     */
    toggleLogarithmic(data) {
        if (this.hasChart(data.id)) {
            this.charts[data.id].yAxes.values[0].logarithmic = data.value;
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Object} data.data
     * @param {String} data.dataPath
     * @param {String} data.id
     */
    updateData(data) {
        const me = this;

        if (!me.scriptsLoaded || !me.hasChart(data.id)) {
            me.dataMap[data.id] = data;
        } else {
            const chart = me.charts[data.id];

            if (data.dataPath === '') {
                chart.data = data.data;
            } else {
                Neo.ns(data.dataPath, false, chart).data = data.data;
            }
        }
    }
}

Neo.applyClassConfig(AmCharts);

let instance = Neo.create(AmCharts);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/main/DomAccess.mjs":
/*!********************************!*\
  !*** ./src/main/DomAccess.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _mixins_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/DeltaUpdates.mjs */ "./src/main/mixins/DeltaUpdates.mjs");
/* harmony import */ var _mixins_Markdown_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/Markdown.mjs */ "./src/main/mixins/Markdown.mjs");
/* harmony import */ var _mixins_GoogleAnalytics_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/GoogleAnalytics.mjs */ "./src/main/mixins/GoogleAnalytics.mjs");
/* harmony import */ var _mixins_Hljs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/Hljs.mjs */ "./src/main/mixins/Hljs.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");
/* harmony import */ var _mixins_Siesta_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/Siesta.mjs */ "./src/main/mixins/Siesta.mjs");
/* harmony import */ var _mixins_Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixins/Stylesheet.mjs */ "./src/main/mixins/Stylesheet.mjs");









/**
 * @class Neo.main.DomAccess
 * @extends Neo.core.Base
 * @singleton
 */
class DomAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.DomAccess'
         * @private
         */
        className: 'Neo.main.DomAccess',
        /**
         * @member {boolean} logDeltaUpdates=true
         */
        logDeltaUpdates: true,
        /**
         * @member {boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Array} mixins=[DeltaUpdates, GoogleAnalytics, Hljs, Markdown, Observable, Siesta, Stylesheet]
         */
        mixins: [
            _mixins_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            _mixins_GoogleAnalytics_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            _mixins_Hljs_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            _mixins_Markdown_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            _mixins_Siesta_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            _mixins_Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]
        ],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @private
         */
        remote: {
            app: [
                'addScript',
                'applyBodyCls',
                'execCommand',
                'focus',
                'getAttributes',
                'getBoundingClientRect',
                'markdownToHtml',
                'scrollIntoView',
                'scrollToTableRow',
                'selectNode',
                'swapStyleSheet',
                'windowScrollTo'
            ]
        },
        /**
         * Void attributes inside html tags
         * @member {String[]} voidAttributes
         * @private
         */
        voidAttributes: [
            'checked',
            'required'
        ]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        if (me.logDeltaUpdates) {
            me.countDeltas  = 0;
            me.countUpdates = 0;
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Boolean} data.async
     * @param {Boolean} data.defer
     * @param {String} data.src
     */
    addScript(data) {
        const script = document.createElement('script');

        Object.assign(script, data);

        document.head.appendChild(script);
    }

    /**
     *
     * @param {Object} data
     * @param {String[]} data.cls
     */
    applyBodyCls(data) {
        const cls = data.cls || [];
        document.body.classList.add(...cls);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.command
     * @returns {Object} data
     */
    execCommand(data) {
        document.execCommand(data.command);
        return data;
    }

    /**
     * Calls focus on a node for a given dom node id
     * @param {Object} data
     * @returns {Object} obj.id => the passed id
     */
    focus(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.focus();
        }

        return {id: data.id};
    }

    /**
     * Returns the attributes for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @param {Array|String} data.attributes either an attribute or an array of attributes
     * @returns {Array|Object} In case id is an array, an array of atrrbute objects is returned, otherwise an object
     */
    getAttributes(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getAttributes({
                    attributes: data.attributes,
                    id        : id
                }));
            });
        } else {
            let node = this.getElementOrBody(data.id);

            returnData = {};

            if (node) {
                if (!Array.isArray(data.attributes)) {
                    data.attributes = [data.attributes];

                    data.attributes.forEach(attribute => {
                        returnData[attribute] = node[attribute];
                    })
                }
            }
        }

        return returnData;
    }

    /**
     * Returns node.getBoundingClientRect() for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @returns {Array|Object} In case id is an array, an array of DomRects is returned, otherwise an DomRect object
     */
    getBoundingClientRect(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getBoundingClientRect({id: id}));
            });
        } else {
            let node = this.getElementOrBody(data.id),
                rect = {};

            returnData = {};

            if (node) {
                rect = node.getBoundingClientRect();

                // DomRect does not support spreading => {...DomRect} => {}
                Object.assign(returnData, {
                    bottom: rect.bottom,
                    height: rect.height,
                    left  : rect.left,
                    right : rect.right,
                    top   : rect.top,
                    width : rect.width,
                    x     : rect.x,
                    y     : rect.y
                });
            }
        }

        return returnData;
    }

    /**
     *
     * @param {String} nodeId
     * @return {HTMLElement}
     * @private
     */
    getElement(nodeId) {
        return document.getElementById(nodeId);
    }

    /**
     *
     * @param {String} [nodeId='body']
     * @return {HTMLElement}
     * @private
     */
    getElementOrBody(nodeId) {
        if (!nodeId || nodeId === 'body' || nodeId === 'document.body') {
            return document.body;
        }

        return this.getElement(nodeId);
    }

    /**
     * Include a script into the document.head
     * @param {String} src
     * @param {Boolean} [async=true]
     * @return {Promise<unknown>}
     */
    loadScript(src, async=true) {
        let script;

        return new Promise((resolve, reject) => {
            script = document.createElement('script');

            Object.assign(script, {
                async  : async,
                onerror: reject,
                onload : resolve,
                src    : src
            });

            document.head.appendChild(script);
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String[]} data.attributes
     * @param {Array} data.functions An array containing strings and/or objects
     * @param {String[]} data.styles
     * @param {String} data.vnodeId
     * @private
     */
    onReadDom(data) {
        let attributes    = data.attributes || [],
            functions     = data.functions  || [],
            styles        = data.styles     || [],
            vnodeId       = data.vnodeId,
            retAttributes = {},
            retFunctions  = {},
            retStyles     = {},
            element       = vnodeId ? this.getElement(vnodeId) : null,
            fnName, scope;

        attributes.forEach(key => {
            retAttributes[key] = element[key];
        });

        functions.forEach((key, index) => {
            if (Neo.isObject(key)) {
                key.params         = key.params         || [];
                key.paramIsDomNode = key.paramIsDomNode || [];

                scope = key.scope ? document[key.scope] : element;

                key.params.forEach((param, paramIndex) => {
                    if (key.paramIsDomNode[paramIndex] && key.paramIsDomNode[paramIndex] === true) {
                        key.params[paramIndex] = this.getElement(key.params[paramIndex]);
                    }
                });

                fnName = key.returnFnName ? key.returnFnName : index;
                retFunctions[fnName] = scope[key.fn](...key.params);

                if (key.returnValue) {
                    retFunctions[fnName] = retFunctions[fnName][key.returnValue];
                }
            } else {
                retFunctions[key] = element[key]();
            }
        });

        styles.forEach(key => {
            retStyles[key] = element.style[key];
        });

        Object.assign(data, {
            attributes: retAttributes,
            functions : retFunctions,
            styles    : retStyles
        });

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    onScrollIntoView(data) {
        let parentEl = this.getElement(data.vnodeId),
            el       = parentEl.querySelector('[data-list-header="' + data.text + '"]');

        if (el) {
            el.previousSibling.scrollIntoView({
                behavior: 'smooth',
                block   : 'start',
                inline  : 'nearest'
            });
        }
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    read(data) {
        if (typeof data === 'function') {
            data();
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.block='start']
     * @param {String} [data.inline='nearest']
     * @returns {Object} obj.id => the passed id
     */
    scrollIntoView(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.scrollIntoView({
                behavior: data.behavior || 'smooth',
                block   : data.block    || 'start',
                inline  : data.inline   || 'nearest'
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.offset=34]
     * @returns {Object} obj.id => the passed id
     */
    scrollToTableRow(data) {
        let node = this.getElement(data.id); // tr tag

        if (node) {
            let tableNode   = node.parentNode.parentNode,
                wrapperNode = tableNode.parentNode,
                tableTop    = tableNode.getBoundingClientRect().top,
                top         = node.getBoundingClientRect().top;

            wrapperNode.scrollTo({
                top     : top - tableTop - (data.hasOwnProperty('offset') ? data.offset : 34),
                behavior: data.behavior || 'smooth'
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {Number} [data.start=0]
     * @param {Number} [data.end=99999]
     * @returns {Object} obj.id => the passed id
     */
    selectNode(data) {
        let node  = this.getElement(data.id),
            start = Neo.isNumber(data.start) || 0,
            end   = Neo.isNumber(data.end)   || 99999;

        if (node) {
            node.select();
            node.setSelectionRange(start, end);
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} [data.behavior='smooth'] // auto or smooth
     * @param {String} [data.left=0]
     * @param {String} [data.top=0]
     */
    windowScrollTo(data) {
        window.scrollTo({
            behavior: data.behavior || 'smooth',
            left    : data.left     || 0,
            top     : data.top      || 0
        });
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    write(data) {
        let container   = this.getElementOrBody(data.parentId),
            countChilds = container.children.length,
            index       = data.parentIndex,
            html        = data.html || data.outerHTML;

        if (!data.parentIndex || countChilds < 1) {
            container.insertAdjacentHTML('beforeend', html);
        } else {
            if (countChilds > index) {
                container.children[index].insertAdjacentHTML('beforebegin', html);
            } else {
                container.children[countChilds - 1].insertAdjacentHTML('afterend', html);
            }
        }
    }
}

Neo.applyClassConfig(DomAccess);

let instance = Neo.create(DomAccess);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);


/***/ }),

/***/ "./src/main/DomEvents.mjs":
/*!********************************!*\
  !*** ./src/main/DomEvents.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");



const globalDomEvents = [
    {name: 'change',      handler: 'onChange'},
    {name: 'click',       handler: 'onClick'},
    {name: 'contextmenu', handler: 'onContextMenu'},
    {name: 'focusin',     handler: 'onFocusIn'},
    {name: 'focusout',    handler: 'onFocusOut'},
    {name: 'input',       handler: 'onChange'},
    {name: 'keydown',     handler: 'onKeyDown'},
    {name: 'keyup',       handler: 'onKeyUp'},
    {name: 'mouseenter',  handler: 'onMouseEnter', options: {capture: true}},
    {name: 'mouseleave',  handler: 'onMouseLeave', options: {capture: true}},
    {name: 'wheel',       handler: 'onWheel',      options: {passive: false}}
];

// wheel events fire very often, so we limit the targets to avoid unnecessary post messages from main to the app worker
const globalWheelTargets = [
    'neo-circle-component',
    'neo-dateselector',
    'neo-gallery',
    'neo-helix'
];

// separated from globalWheelTargets => performance
const globalWheelTargetsBuffer = {
    'neo-dateselector': 300 // buffer in ms
};

const lastWheelEvent = {
    date  : null,
    target: null
};

const preventClickTargets       = [],
      preventContextmenuTargets = [];

/**
 * @class Neo.main.DomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.DomEvents'
         * @private
         */
        className: 'Neo.main.DomEvents',
        /**
         * @member {boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: ['addDomListener']}
         * @private
         */
        remote: {
            app: [
                'addDomListener',
                'registerPreventDefaultTargets'
            ]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        document.addEventListener('DOMContentLoaded', me.onDomContentLoaded.bind(me));
        window  .addEventListener('hashchange',       me.onHashChange      .bind(me));
    }

    /**
     *
     * @param {Object} data
     */
    addDomListener(data) {
        let me  = this,
            i   = 0,
            len = data.events.length,
            event, id, targetNode;

        for (; i < len; i++) {
            event = data.events[i];

            if (!me[event.handler]) {
                me[event.handler] = Neo.emptyFn;
            }

            id = event.vnodeId || data.vnodeId;

            if (id === 'document.body') {
                targetNode = document.body;
            } else {
                targetNode = document.getElementById(id);
            }

            targetNode.addEventListener(event.name, me[event.handler].bind(me));
        }

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     */
    addGlobalDomListeners() {
        let me = this;

        globalDomEvents.forEach(event => {
            document.body.addEventListener(event.name, me[event.handler].bind(me), event.options);
        });
    }

    /**
     * Local domEvent listener
     * @param {Object} event
     */
    domEventListener(event) {
        let me     = this,
            target = event.target,
            config = {
                action   : 'domEvent',
                eventName: event.type,

                data: {
                    id   : target.id,
                    path : (event.path || event.composedPath()).map(e => e.id), // FF does not support composedPath()
                    value: target.value,
                }
            };

        // console.log('domEventListener', event.type, target.id, target.value, event);

        switch (event.type) {
            case 'dragend':
                me.dragElementId = null;
                break;
            case 'dragenter':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragleave':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragover':
                me.onDragOver(event);
                event.preventDefault();
                break;
            case 'dragstart':
                me.dragElementId = target.id;
                break;
            case 'drop':
                if (!me.dragElementId || this.dragElementId === target.id) {
                    return; // drop fires twice by default & drop should not trigger on the drag element
                }
                if (event.stopPropagation) {
                    event.stopPropagation(); // stops the browser from redirecting.
                }
                event.preventDefault();
                config.data.srcId = me.dragElementId;
                me.dragElementId = null;
                break;
            default:
                event.preventDefault();
                break;
        }

        Neo.worker.Manager.sendMessage('app', config);
    }

    getEventData(event) {
        let path = event.path || event.composedPath(); // FF does not support composedPath()

        return {
            path     : path.map(e => this.getTargetData(e)),
            target   : this.getTargetData(event.target),
            timeStamp: event.timeStamp,
            type     : event.type
        };
    }

    getKeyboardEventData(event) {
        const {altKey, code, ctrlKey, key, keyCode, metaKey, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey  : altKey,
            code    : code,
            ctrlKey : ctrlKey,
            key     : key,
            keyCode : keyCode,
            metaKey : metaKey,
            shiftKey: shiftKey
        };
    }

    getMouseEventData(event) {
        const {altKey, clientX, clientY, ctrlKey, metaKey, offsetX, offsetY, pageX, pageY, screenX, screenY, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey  : altKey,
            clientX : clientX,
            clientY : clientY,
            ctrlKey : ctrlKey,
            metaKey : metaKey,
            offsetX : offsetX,
            offsetY : offsetY,
            pageX   : pageX,
            pageY   : pageY,
            screenX : screenX,
            screenY : screenY,
            shiftKey: shiftKey
        };
    }

    /**
     *
     * @param {Object} node
     * @returns {Object}
     */
    getTargetData(node) {
        return {
            checked          : node.checked,
            childElementCount: node.childElementCount,
            clientHeight     : node.clientHeight,
            clientLeft       : node.clientLeft,
            clientTop        : node.clientTop,
            clientWidth      : node.clientWidth,
            cls              : node.classList ? [...node.classList] : [],
            data             : {...node.dataset},
            draggable        : node.draggable,
            hidden           : node.hidden,
            id               : node.id,
            inert            : node.inert,
            isConnected      : node.isConnected,
            isContentEditable: node.isContentEditable,
            nodeType         : node.nodeType,
            offsetHeight     : node.offsetHeight,
            offsetLeft       : node.offsetLeft,
            offsetTop        : node.offsetTop,
            offsetWidth      : node.offsetWidth,
            scrollHeight     : node.scrollHeight,
            scrollLeft       : node.scrollLeft,
            scrollTop        : node.scrollTop,
            scrollWidth      : node.scrollWidth,
            style            : node.style && node.style.cssText,
            tabIndex         : node.tabIndex,
            tagName          : node.tagName && node.tagName.toLowerCase()
        };
    }

    /**
     *
     * @param {Object} event
     */
    onChange(event) {
        this.sendMessageToApp({
            ...this.getEventData(event),
            valid: event.target.checkValidity(),
            value: event.target.value
        });
    }

    /**
     *
     * @param {Object} event
     */
    onClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventClickTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     * @param {Object} event
     */
    onContextMenu(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventContextmenuTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     */
    onDomContentLoaded() {
        this.addGlobalDomListeners();
        this.fire('domContentLoaded');
    }

    /**
     *
     * @param {Object} event
     */
    onDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
        //console.log('onDragOver', event);
    }

    /**
     *
     * @param {Object} event
     */
    onFocusIn(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onFocusOut(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     */
    onHashChange() {
        const hashString = location.hash.substr(1);

        Neo.worker.Manager.sendMessage('app', {
            action    : 'hashChange',
            hash      : this.parseHash(hashString),
            hashString: hashString
        });
    }

    /**
     *
     * @param {Object} event
     */
    onKeyDown(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));

        if (['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(event.key)) {
            event.preventDefault();
        }
    }

    /**
     *
     * @param {Object} event
     */
    onKeyUp(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onMouseEnter(event) {
        this.sendMessageToApp({
            ...this.getMouseEventData(event),
            fromElementId: event.fromElement && event.fromElement.id || null
        });
    }

    /**
     *
     * @param {Object} event
     */
    onMouseLeave(event) {
        this.sendMessageToApp({
            ...this.getMouseEventData(event),
            toElementId: event.toElement && event.toElement.id || null
        });
    }

    /**
     *
     * @param {Object} event
     */
    onWheel(event) {
        let targetCls     = this.testPathInclusion(event, globalWheelTargets),
            preventUpdate = false;

        if (targetCls) {
            if (globalWheelTargetsBuffer[targetCls]) {
                let date = new Date();

                if (lastWheelEvent.date && lastWheelEvent.target === targetCls && date - lastWheelEvent.date < globalWheelTargetsBuffer[targetCls]) {
                    preventUpdate = true;
                } else {
                    Object.assign(lastWheelEvent, {
                        date  : date,
                        target: targetCls
                    });
                }
            }

             if (!preventUpdate) {
                const {deltaX, deltaY, deltaZ} = event;

                this.sendMessageToApp({
                    ...this.getEventData(event),
                    deltaX: deltaX,
                    deltaY: deltaY,
                    deltaZ: deltaZ
                });
            }

            event.preventDefault();
        }
    }

    /**
     * Example for Array values: "categories[]=test1&categories[]=test2"
     * @param {String} str
     * @returns {Object}
     */
    parseHash(str) {
        if (str === '') {
            return {};
        }

        let pieces = str.split('&'),
            data   = {},
            i, key, parts, value;

        for (i = 0; i < pieces.length; i++) {
            parts = pieces[i].split('=');

            if (parts.length < 2) {
                parts.push('');
            }

            key   = decodeURIComponent(parts[0]);
            value = decodeURIComponent(parts[1]);

            if (key.indexOf('[]') !== -1) {
                key = key.substring(0, key.indexOf('[]'));

                if (typeof data[key] === 'undefined') {
                    data[key] = [];
                }

                data[key].push(this.parseValue(value));
            } else {
                data[key] = this.parseValue(value);
            }
        }

        return data;
    }

    /**
     * used by parseHash to convert tokens into boolean or number types if needed
     * @param {String} value
     * @returns {Boolean|Number|String}
     * @private
     */
    parseValue(value) {
        if (value == parseInt(value)) {
            value = parseInt(value);
        } else if (value === 'false') {
            value = false;
        } else if (value === 'true') {
            value = true;
        }

        return value;
    }

    /**
     *
     * @param {Object} data
     * @param {Array|String} data.cls
     * @param {String} data.name
     */
    registerPreventDefaultTargets(data) {
        let preventArray;

        if (!Array.isArray(data.cls)) {
            data.cls = [data.cls];
        }

        switch (data.name) {
            case 'click':
                preventArray = preventClickTargets;
                break;
            case 'contextmenu':
                preventArray = preventContextmenuTargets;
                break;
        }

        data.cls.forEach(cls => {
            if (!preventArray.includes(cls)) {
                preventArray.push(cls);
            }
        });
    }

    /**
     * Sends the parsed event data to the app worker
     * @param {Object} data
     * @private
     */
    sendMessageToApp(data) {
        Neo.worker.Manager.sendMessage('app', {
            action   : 'domEvent',
            eventName: data.type,
            data     : data
        });
    }



    /**
     *
     * @param {Object} event
     * @param {Object} targetArray
     * @returns {String|Boolean} target cls if found, false otherwise
     */
    testPathInclusion(event, targetArray) {
        let countTargets = targetArray.length,
            path         = event.path || event.composedPath(),
            i            = 0,
            len          = path.length,
            j, node;

        for (; i < len; i++) {
            node = path[i];

            for (j=0; j < countTargets; j++) {
                if (node.classList && node.classList.contains(targetArray[j])) {
                    return targetArray[j];
                }
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvents);

let instance = Neo.create(DomEvents);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);


/***/ }),

/***/ "./src/main/mixins/DeltaUpdates.mjs":
/*!******************************************!*\
  !*** ./src/main/mixins/DeltaUpdates.mjs ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeltaUpdates; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * Logic to apply the deltas generated by vdom.Helper to the real DOM
 * @class Neo.main.mixins.DeltaUpdates
 * @extends Neo.core.Base
 * @singleton
 */
class DeltaUpdates extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixins.DeltaUpdates'
         * @private
         */
        className: 'Neo.main.mixins.DeltaUpdates'
    }}

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     */
    du_focusNode(delta) {
        this.getElement(delta.id).focus();
    }

    /**
     * node.children contains the "real" nodes (tags)
     * node.childNodes contains texts & comments as nodes too
     * since every vtype:'text' is wrapped inside a comment block (as an id),
     * we need the amount of nodes which are not comments to get the "realIndex".
     * insertAdjacentHTML() is faster than creating a node (template), but only available
     * for children and not for childNodes.
     * In case there are no comments (=> vtype: 'text' nodes), we stick to it for performance reasons.
     *
     * @param {Object} delta
     * @param {String} delta.index
     * @param {String} delta.outerHTML
     * @param {String} delta.parentId
     */
    du_insertNode(delta) {
        let index         = delta.index,
            parentNode    = this.getElement(delta.parentId),
            countChildren = parentNode.childNodes.length,
            i             = 0,
            realIndex     = index,
            hasComments   = false,
            node;

        // console.log('insertNode', index, countChildren, delta.parentId);

        for (; i < countChildren; i++) {
            if (parentNode.childNodes[i].nodeType === 8) { // ignore comments
                if (i < realIndex) {
                    realIndex++;
                }

                hasComments = true;
            }
        }

        if (!hasComments) {
            countChildren = parentNode.children.length;

            if (countChildren > 0 && countChildren > index) {
                parentNode.children[index].insertAdjacentHTML('beforebegin', delta.outerHTML);
            } else if (countChildren > 0) {
                parentNode.children[countChildren - 1].insertAdjacentHTML('afterend', delta.outerHTML);
            } else {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
            }
        } else {
            node = this.htmlStringToElement(delta.outerHTML);

            if (countChildren > 0 && countChildren > realIndex) {
                parentNode.insertBefore(node, parentNode.childNodes[realIndex]);
            } else {
                parentNode.appendChild(node);
            }
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.index
     * @param {String} delta.parentId
     */
    du_moveNode(delta) {
        let index      = delta.index,
            node       = this.getElement(delta.id),
            parentNode = this.getElement(delta.parentId);

        if (index >= parentNode.children.length) {
            parentNode.appendChild(node);
        } else {
            //index++; // todo?: increase the index in case same parent, oldIndex < newIndex, direct swap
            if (node && parentNode.children[index].id !== delta.id) {
                parentNode.insertBefore(node, parentNode.children[index]);
            }
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     */
    du_removeNode(delta) {
        let node = this.getElement(delta.id);

        if (!node) {
            // console.warn('du_removeNode: dom node not found for id', delta.id);
        } else {
            node.parentNode.removeChild(node);
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.fromId
     * @param {String} delta.parentId
     * @param {String} delta.toId
     */
    du_replaceChild(delta) {
        let me   = this,
            node = me.getElement(delta.parentId);

        node.replaceChild(me.getElement(delta.toId), me.getElement(delta.fromId));
    }

    /**
     *
     * @param {Object} delta
     * @param {String} [delta.attributes]
     * @param {String} [delta.cls]
     * @param {String} [delta.id]
     * @param {String} [delta.innerHTML]
     * @param {String} [delta.outerHTML]
     * @param {String} [delta.style]
     */
    du_updateNode(delta) {
        let node = this.getElementOrBody(delta.id);

        if (!node) {
            console.warn('du_updateNode: node not found for id', delta.id);
        } else {
            Object.entries(delta).forEach(([prop, value]) => {
                switch(prop) {
                    case 'attributes':
                        Object.entries(value).forEach(([key, value]) => {
                            if (this.voidAttributes.includes(key)) {
                                node[key] = value === 'true'; // vnode attribute values get converted into strings
                            } else if (value === null || value === '') {
                                if (key === 'value') {
                                    node[key] = ''; // input fields => pseudo attribute can not be removed
                                } else {
                                    node.removeAttribute(key);
                                }
                            } else {
                                node[key] = value;
                            }
                        });
                        break;
                    case 'cls':
                        node.classList.add(...value.add || []);
                        node.classList.remove(...value.remove || []);
                        break;
                    case 'innerHTML':
                        node.innerHTML = value || '';
                        break;
                    case 'outerHTML':
                        node.outerHTML = data.outerHTML;
                        break;
                    case 'style':
                        if (Neo.isObject(value)) {
                            if (node) {
                                Object.keys(value).forEach(function(styleName) {
                                    node.style[styleName] = value[styleName];
                                });
                            }
                        }
                        break;
                }
            });
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     * @param {String} delta.value
     */
    du_updateVtext(delta) {
        let me        = this,
            node      = me.getElement(delta.parentId),
            innerHTML = node.innerHTML,
            startTag  = `<!-- ${delta.id} -->`,
            reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

        node.innerHTML = innerHTML.replace(reg, delta.value);
    }

    /**
     * @param {String} html representing a single element
     * @return {ChildNode}
     */
    htmlStringToElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    }

    /**
     *
     * @param {Object} data
     * @param {Object|Object[]} data.deltas
     * @param {String} data.id
     * @param {String} [data.origin='app']
     */
    update(data) {
        let me     = this,
            deltas = data.deltas,
            i      = 0,
            len;

        deltas = Array.isArray(deltas) ? deltas : [deltas];
        len    = deltas.length;

        if (me.logDeltaUpdates) {
            me.countDeltas += (data.deltas && data.deltas.length || 0);
            me.countUpdates++;
            console.log('update ' + me.countUpdates, 'total deltas ', me.countDeltas, Neo.clone(data, true));
        }

        const map = {
            focusNode   : me.du_focusNode,
            insertNode  : me.du_insertNode,
            moveNode    : me.du_moveNode,
            removeNode  : me.du_removeNode,
            replaceChild: me.du_replaceChild,
            updateVtext : me.du_updateVtext,
            default     : me.du_updateNode
        };

        for (; i < len; i++) {
            (map[deltas[i].action] || map['default']).call(me, deltas[i]);
        }

        Neo.worker.Manager.sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }
}

Neo.applyClassConfig(DeltaUpdates);



/***/ }),

/***/ "./src/main/mixins/GoogleAnalytics.mjs":
/*!*********************************************!*\
  !*** ./src/main/mixins/GoogleAnalytics.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleAnalytics; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * Required for the online version of the examples & docs app
 * @class Neo.main.mixins.GoogleAnalytics
 * @extends Neo.core.Base
 * @singleton
 */
class GoogleAnalytics extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.mixins.GoogleAnalytics'
             * @private
             */
            className: 'Neo.main.mixins.GoogleAnalytics'
        }
    }

    /**
     *
     * @private
     */
    insertGoogleAnalyticsScript() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-153734404-1');

        const script = document.createElement('script');

        Object.assign(script, {
            async: true,
            src  : 'https://www.googletagmanager.com/gtag/js?id=UA-153734404-1'
        });

        document.head.appendChild(script);
    }
}

Neo.applyClassConfig(GoogleAnalytics);



/***/ }),

/***/ "./src/main/mixins/Hljs.mjs":
/*!**********************************!*\
  !*** ./src/main/mixins/Hljs.mjs ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hljs; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * Required for the docs app which uses highlight.js for the source views
 * @class Neo.main.mixins.Hljs
 * @extends Neo.core.Base
 * @singleton
 */
class Hljs extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.mixins.Hljs'
             * @private
             */
            className: 'Neo.main.mixins.Hljs'
        }
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    onSyntaxHighlight(data) {
        if (hljs) {
            let node = document.getElementById(data.vnodeId);

            hljs.highlightBlock(node);
            hljs.lineNumbersBlock(node);

            Neo.worker.Manager.sendMessage(data.origin || 'app', {
                action : 'reply',
                replyId: data.id,
                success: true
            });
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    onSyntaxHighlightInit(data) {
        if (hljs) {
            let blocks = document.querySelectorAll('pre code:not(.hljs)');
            Array.prototype.forEach.call(blocks, hljs.highlightBlock);

            Neo.worker.Manager.sendMessage(data.origin || 'app', {
                action : 'reply',
                replyId: data.id,
                success: true
            });
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    onSyntaxHighlightLine(data) {
        let parentEl = document.getElementById(data.vnodeId),
            cls      = 'neo-highlighted-line',
            el;

        if (data.addLine) {
            el = parentEl.querySelector('[data-line-number="' + data.addLine + '"]');

            if (el) {
                el.parentNode.classList.add(cls);

                el.parentNode.scrollIntoView({
                    behavior: 'smooth',
                    block   : 'start',
                    inline  : 'nearest'
                });
            }
        }

        if (data.removeLine) {
            el = parentEl.querySelector('[data-line-number="' + data.removeLine + '"]');

            if (el) {
                el.parentNode.classList.remove(cls);
            }
        }
    }
}

Neo.applyClassConfig(Hljs);



/***/ }),

/***/ "./src/main/mixins/LocalStorage.mjs":
/*!******************************************!*\
  !*** ./src/main/mixins/LocalStorage.mjs ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * Basic CRUD support for window.localStorage
 * @class Neo.main.mixins.LocalStorage
 * @extends Neo.core.Base
 * @singleton
 */
class LocalStorage extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.mixins.LocalStorage'
             * @private
             */
            className: 'Neo.main.mixins.LocalStorage'
        }
    }

    /**
     * Creates a new item into window.localStorage
     * Uses updateLocalStorageItem() internally
     * @param {Object} opts
     * @param {String} opts.key
     * @param {String} opts.value
     */
    createLocalStorageItem(opts) {
        this.updateLocalStorageItem(opts);
    }

    /**
     * Removes an item from window.localStorage
     * @param {Object} opts
     * @param {String} opts.key
     */
    destroyLocalStorageItem(opts) {
        window.localStorage.removeItem(opts.key);
    }

    /**
     * Gets an item from window.localStorage
     * @param {Object} opts
     * @param {String} opts.key
     */
    readLocalStorageItem(opts) {
        return {
            key  : opts.key,
            value: window.localStorage.getItem(opts.key)
        }
    }

    /**
     * Reads an item from window.localStorage
     * @param {Object} opts
     * @param {String} opts.key
     * @param {String} opts.value
     */
    updateLocalStorageItem(opts) {
        window.localStorage.setItem(opts.key, opts.value);
    }
}

Neo.applyClassConfig(LocalStorage);



/***/ }),

/***/ "./src/main/mixins/Markdown.mjs":
/*!**************************************!*\
  !*** ./src/main/mixins/Markdown.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Markdown; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * A markdown mixin to convert markdown to html by using showdown.js
 * https://github.com/showdownjs/showdown
 * script tag with the markdown lib has to be added before the Main.mjs script tag in the index.html
 * <script src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>
 * @class Neo.main.mixins.Markdown
 * @extends Neo.core.Base
 * @singleton
 */
class Markdown extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.mixins.Markdown'
             * @private
             */
            className: 'Neo.main.mixins.Markdown'
        }
    }

    /**
     * Markdown to HTML converter
     * @param {String} markdown string to convert
     * @private
     */
    markdownToHtml(markdown) {
        let converter = new showdown.Converter();

        return converter.makeHtml(markdown);
    }
}

Neo.applyClassConfig(Markdown);




/***/ }),

/***/ "./src/main/mixins/Siesta.mjs":
/*!************************************!*\
  !*** ./src/main/mixins/Siesta.mjs ***!
  \************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Siesta; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * Required when running Neo Apps inside the Siesta browser harness (iframe)
 * @class Neo.main.mixins.Siesta
 * @extends Neo.core.Base
 * @singleton
 */
class Siesta extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.mixins.Siesta'
             * @private
             */
            className: 'Neo.main.mixins.Siesta'
        }
    }

    /**
     *
     * @private
     */
    adjustSiestaEnvironment() {
        let i   = 0,
            len = document.styleSheets.length,
            sheet;

        document.body.classList.add('neo-body', 'neo-body-viewport', 'neo-theme-dark');

        for (; i < len; i++) {
            sheet = document.styleSheets[i];
            if (sheet.href && sheet.href.includes('highlightjs')) {
                sheet.ownerNode.id = 'hljs-theme';
            }
        }
    }
}

Neo.applyClassConfig(Siesta);



/***/ }),

/***/ "./src/main/mixins/Stylesheet.mjs":
/*!****************************************!*\
  !*** ./src/main/mixins/Stylesheet.mjs ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stylesheet; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * Logic to work with stylesheets, e.g. apply & switch Neo based themes
 * @class Neo.main.mixins.Stylesheet
 * @extends Neo.core.Base
 * @singleton
 */
class Stylesheet extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.mixins.Stylesheet'
             * @private
             */
            className: 'Neo.main.mixins.Stylesheet'
        }
    }

    /**
     * Use either name for a neo theme (e.g. 'neo-theme-dark.css') or pass a href
     * @param {String} [name]
     * @param {String} [id]
     * @param {String} [href]
     */
    createStyleSheet(name, id, href) {
        if (!name && !href) {
            throw new Error('createStyleSheet: you need to either pass a name or a href');
        }

        const link = document.createElement('link'),
              url  = href ? href : Neo.config.cssPath
                  ? Neo.config.cssPath + name
                  : Neo.config.basePath + 'dist/' + Neo.config.environment + '/' + name;

        Object.assign(link, {
            href: url,
            rel : 'stylesheet',
            type: 'text/css'
        });

        if (id) {
            link.id = id;
        }

        document.head.appendChild(link);
    }

    /**
     *
     * @param {String} token
     * @returns {Boolean}
     */
    hasStyleSheet(token) {
        let i   = 0,
            len = document.styleSheets.length,
            sheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];
            if (sheet.href && sheet.href.includes(token)) {
                return true;
            }
        }

        return false;
    }

    /**
     *
     * @param {Object} data
     * @private
     */
    insertCssRules(data) {
        let styleEl = document.getElementById('neoDynamicStyleSheet'),
            i     = 0,
            len   = data.rules.length,
            styleSheet;

        if (!styleEl) {
            styleEl = document.createElement('style');

            styleEl.id = 'neoDynamicStyleSheet';
            document.head.appendChild(styleEl);
        }

        styleSheet = styleEl.sheet;

        for (; i < len; i++) {
            styleSheet.insertRule(data.rules[i], styleSheet.cssRules.length);
        }

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @private
     */
    insertTheme() {
        let me     = this,
            themes = Neo.config.themes;

        if (!Array.isArray(themes)) {
            themes = [themes];
        }

        document.body.classList.add(themes[0]);

        if (Neo.config.useCss4) {
            me.removeStyleSheets({
                included: ['neo-theme-', '-no-css4.css']
            });

            if (themes.length > 0 && !me.hasStyleSheet('neo-structure.css')) {
                me.createStyleSheet('neo-structure.css');
            }

            themes.forEach(theme => {
                if (!me.hasStyleSheet(theme + '.css')) {
                    me.createStyleSheet(theme + '.css');
                }
            });
        } else {
            me.removeStyleSheets({
                included: ['neo-structure.css']
            });

            me.removeStyleSheets({
                included: ['neo-theme-'],
                excluded: ['-no-css4.css']
            });

            if (themes.length > 0 && !me.hasStyleSheet(themes[0] + '-no-css4.css')) {
                me.createStyleSheet(themes[0] + '-no-css4.css', 'neo-theme');
            }
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {String[]} opts.included
     * @param {String[]} opts.excluded
     */
    removeStyleSheets(opts) {
        let i        = 0,
            len      = document.styleSheets.length,
            included = opts.included || [],
            excluded = opts.included || [],
            sheet, removeSheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];

            removeSheet = true;

            if (sheet.href) {
                excluded.forEach(name => {
                    if (sheet.href.includes(name)) {
                        removeSheet = false;
                    }
                });

                if (removeSheet) {
                    included.forEach(name => {
                        if (!sheet.href.includes(name)) {
                            removeSheet = false;
                        }
                    });

                    if (removeSheet) {
                        console.log('removeSheet', sheet.href);
                        sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
                    }
                }
            }
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.href
     * @param {String} data.id
     */
    swapStyleSheet(data) {
        document.getElementById(data.id).setAttribute('href', data.href);
    }
}

Neo.applyClassConfig(Stylesheet);



/***/ }),

/***/ "./src/worker/Manager.mjs":
/*!********************************!*\
  !*** ./src/worker/Manager.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/DomAccess.mjs */ "./src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/DomEvents.mjs */ "./src/main/DomEvents.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.mjs */ "./src/worker/Message.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");
/* harmony import */ var _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/RemoteMethodAccess.mjs */ "./src/worker/mixins/RemoteMethodAccess.mjs");







/**
 * The worker manager lives inside the main thread and creates the App, Data & VDom worker.
 * Also responsible for sending messages from the main thread to the different workers.
 * @class Neo.worker.Manager
 * @extends Neo.core.Base
 * @singleton
 */
class Manager extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Manager'
         * @private
         */
        className: 'Neo.worker.Manager',
        /**
         * @member {String} ntype='worker-manager'
         * @private
         */
        ntype: 'worker-manager',
        /**
         * @member {boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * The base path for the worker file URLs, can e.g. get set inside the index.html.
         * @member {String|null} basePath=Neo.config.workerBasePath || 'worker/'
         * @private
         */
        basePath: Neo.config.workerBasePath || 'worker/',
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]],
        /**
         * True in case the current browser supports window.SharedWorker.
         * @member {Boolean} sharedWorkersEnabled=false
         * @private
         */
        sharedWorkersEnabled: false,
        /**
         * Internal flag to stop the worker communication in case their creation fails
         * @member {Boolean} stopCommunication=false
         * @private
         */
        stopCommunication: false,
        /**
         * True in case the current browser supports window.Worker.
         * The neo.mjs framework is not able to run without web workers.
         * @member {Boolean} sharedWorkersEnabled=false
         * @private
         */
        webWorkersEnabled: false,
        /**
         * Contains the fileNames for the App, Data & Vdom workers
         * @member {Object} workers
         * @private
         */
        workers: {
            app: {
                fileName: Neo.config.isExperimental ? 'App.mjs'  : Neo.config.appPath
            },
            data: {
                fileName: Neo.config.isExperimental ? 'Data.mjs' : 'dataworker.js'
            },
            vdom: {
                fileName: Neo.config.isExperimental ? 'VDom.mjs' : 'vdomworker.js'
            }
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        const me = this;

        me.detectFeatures();

        if (!Neo.insideWorker) {
            me.createWorkers();
        }

        Neo.workerId = 'main';

        me.promises = {};

        me.on({
            'message:addDomListener'       : {fn: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].addDomListener,        scope: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]},
            'message:addGlobalDomListeners': {fn: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].addGlobalDomListeners, scope: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]},
            'message:insertCssRules'       : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].insertCssRules,        scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:readDom'              : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onReadDom,             scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:registerRemote'       : {fn: me.onRegisterRemote,             scope: me},
            'message:scrollIntoView'       : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onScrollIntoView,      scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:syntaxHighlight'      : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onSyntaxHighlight,     scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:syntaxHighlightInit'  : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onSyntaxHighlightInit, scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:syntaxHighlightLine'  : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onSyntaxHighlightLine, scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]}
        });
    }

    /**
     *
     */
    detectFeatures() {
        const me = this;

        if (window.Worker) {
            me.webWorkersEnabled = true;
        } else {
            throw new Error('Your browser does not support Web Workers');
        }

        if (window.SharedWorker) {
            me.sharedWorkersEnabled = true;
        }
    }

    /**
     *
     * @param {String|Worker} name
     * @returns {Worker}
     */
    getWorker(name) {
        return name instanceof Worker ? name : this.workers[name].worker;
    }

    /**
     * Creates a web worker using the passed options as well as adding error & message event listeners.
     * @param {Object} opts
     * @returns {Worker}
     */
    createWorker(opts) {
        const me       = this,
              filePath = (opts.basePath || me.basePath) + opts.fileName,
              worker   = !Neo.config.isExperimental ? // todo: switch to the new syntax to create a worker from a JS module once browsers are ready
                  new Worker(filePath) :
                  new Worker(filePath, {type: 'module'});

        worker.addEventListener('message', me.onWorkerMessage.bind(me));
        worker.addEventListener('error', me.onWorkerError.bind(me));

        return worker;
    }

    /**
     * Calls createWorker for each worker inside the this.workers config.
     */
    createWorkers() {
        let me      = this,
            hash    = location.hash,
            workers = Object.entries(me.workers),
            key, value;

        // pass the initial hash value as Neo.configs
        if (hash) {
            Neo.config.hash       = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parseHash(hash.substr(1));
            Neo.config.hashString = hash.substr(1);
        }

        for ([key, value] of workers) {
            try {
                value.worker = me.createWorker(value);
            } catch (e) {
                document.body.innerHTML = e;
                me.stopCommunication = true;
                break;
            }

            me.sendMessage(key, {
                action: 'registerNeoConfig',
                data  : Neo.config
            });
        }
    }

    /**
     * Handler method for worker error events
     * @param {Object} e
     */
    onWorkerError(e) {
        if (!Neo.config.isExperimental) { // starting a worker from a JS module will show JS errors in a correct way
            console.log('Worker Error:', e);
        }
    }

    /**
     * Handler method for worker message events
     * @param {Object} e
     */
    onWorkerMessage(e) {
        let me           = this,
            data         = e.data,
            delayPromise = false,
            promise;

        const {
             action,
             destination: dest,
             replyId
        } = data;

        // console.log('Main: Incoming Worker message: ' + data.origin + ':' + action, data);

        me.fire('message:'+action, data);

        if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.destination === 'main') {
                data = data.data;
            }

            if (data.reject) {
                promise.reject(data);
            } else {
                if (data.data) {
                    if (data.data.autoMount) {
                        me.fire('automount', data);
                        delayPromise = true;
                    }
                    if (data.data.updateVdom) {
                        me.fire('updateVdom', data);
                        delayPromise = true;
                    }
                }

                if (!delayPromise) {
                    promise.resolve(data);
                } else {
                    me.promises[replyId].data = data;
                }
            }

            if (!delayPromise) {
                delete me.promises[replyId];
            }
        }

        if (dest !== 'main' && action !== 'reply') {
            me.promiseMessage(dest, data).then(response => {
                me.sendMessage(response.destination, response);
            }).catch(err => {
                me.sendMessage(data.origin, {
                    action : 'reply',
                    reject : true,
                    replyId: data.id,
                    error  : err.message
                });
            });
        }

        else if (dest === 'main' && action === 'remoteMethod') {
            me.onRemoteMethod(data);
        }
    }

    /**
     *
     * @param {String} path
     */
    loadApplication(path) {
        this.sendMessage('app', {
            action       : 'loadApplication',
            path         : path,
            resourcesPath: Neo.config.resourcesPath
        });
    }

    /**
     * Sends a message to each worker defined inside the this.workers config.
     * @param msg
     */
    broadcast(msg) {
        Object.entries(this.workers).forEach(name => {
            this.sendMessage(name, msg);
        });
    }

    /**
     *
     * @param {String} replyId
     */
    resolveDomOperationPromise(replyId) {
        if (replyId) {
            let promise = this.promises[replyId];

            if (promise) {
                // console.log('resolveDomOperationPromise', replyId);

                promise.resolve(promise.data);
                delete this.promises[replyId];
            }
        }
    }

    /**
     *
     * @param {String} dest app, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @private
     */
    sendMessage(dest, opts, transfer) {
        if (!this.stopCommunication) {
            const worker = this.getWorker(dest);

            if (!worker) {
                throw new Error('Called sendMessage for a worker that does not exist: ' + dest);
            }

            opts.destination = dest;

            const message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](opts);
            // console.log('Main: Sending Worker message: ', message);

            worker.postMessage(message, transfer);
            return message;
        }
    }

    /**
     *
     * @param {String} dest app, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        const me = this;

        return new Promise((resolve, reject) => {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                reject : reject,
                resolve: resolve
            };
        });
    }
}

Neo.applyClassConfig(Manager);

let instance = Neo.create(Manager);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/worker/Message.mjs":
/*!********************************!*\
  !*** ./src/worker/Message.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;



/***/ }),

/***/ "./src/worker/mixins/RemoteMethodAccess.mjs":
/*!**************************************************!*\
  !*** ./src/worker/mixins/RemoteMethodAccess.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoteMethodAccess; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.worker.mixins.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixins.RemoteMethodAccess'
         * @private
         */
        className: 'Neo.worker.mixins.RemoteMethodAccess',
        /**
         * @member {String} ntype='mixin-remote-method-access'
         * @private
         */
        ntype: 'mixin-remote-method-access',
        /**
         * @member {Boolean} mixin=true
         * @private
         */
        mixin: true
    }}

    /**
     *
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data           : data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };
            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                pkg[method] = me.generateRemote(remote, method);
            });

            if (Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(function(data) {
                me.resolve(msg, data);
            })
            .catch(function(err) {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        this.sendMessage(msg.origin, {
            action : 'reply',
            data   : data,
            reject : true,
            replyId: msg.id
        });
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        this.sendMessage(msg.origin, {
            action : 'reply',
            data   : data,
            replyId: msg.id
        });
    }
}

Neo.applyClassConfig(RemoteMethodAccess);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovLy8uL3NyYy9NYWluLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTmVvLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9PYnNlcnZhYmxlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9BbUNoYXJ0cy5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vRG9tQWNjZXNzLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9Eb21FdmVudHMubWpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21peGlucy9EZWx0YVVwZGF0ZXMubWpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21peGlucy9Hb29nbGVBbmFseXRpY3MubWpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21peGlucy9IbGpzLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9taXhpbnMvTG9jYWxTdG9yYWdlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9taXhpbnMvTWFya2Rvd24ubWpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21peGlucy9TaWVzdGEubWpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21peGlucy9TdHlsZXNoZWV0Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyL01hbmFnZXIubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvTWVzc2FnZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci9taXhp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TztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL01haW4ubWpzXCIpO1xuIiwiY29uc3QgTmVvID0gc2VsZi5OZW8gfHwge307XHJcblxyXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXHJcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gKiBAbmFtZSBjb25maWdcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxyXG4gICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcclxuICAgICAqL1xyXG4gICAgYXBwUGF0aDogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcclxuICAgICAqIEBkZWZhdWx0ICcuLydcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgYmFzZVBhdGg6ICcuLycsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgdGhlbWUgY3NzIGZpbGVzXHJcbiAgICAgKiBTZWUgbWFpbi5taXhpbnMuU3R5bGVzaGVldCA9PiBjcmVhdGVTdHlsZVNoZWV0KClcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnYnVpbGQvJyArIE5lby5jb25maWcuZW52aXJvbm1lbnRcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgW2NvbmZpZy5jc3NQYXRoXVxyXG4gICAgICogQG9wdGlvbmFsXHJcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxyXG4gICAgICovXHJcbiAgICBjc3NQYXRoOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBidWlsZCA9PiBkaXN0IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ1xyXG4gICAgICogVXNlZCBmb3IgYXV0b21hdGljYWxseSBpbmNsdWRpbmcgdGhlIG1hdGNoaW5nIHRoZW1lIGZpbGVzXHJcbiAgICAgKiBAZGVmYXVsdCAncHJvZHVjdGlvbidcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZW52aXJvbm1lbnQ6ICdwcm9kdWN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpZiBOZW8gaXMgcnVubmluZyB3aXRob3V0IGFueSBKUyBidWlsZHNcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5pc0V4cGVyaW1lbnRhbFxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpc0V4cGVyaW1lbnRhbDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cclxuICAgICAqIElmIGNvbmZpZy51c2VDc3M0ID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxyXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxyXG4gICAgICovXHJcbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGlmIHRvIGxvYWQgdGhlIGZpbGVzIG5lZWRlZCBmb3Igd29ya2luZyB3aXRoIGFtQ2hhcnRzXHJcbiAgICAgKiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VBbUNoYXJ0c1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VBbUNoYXJ0czogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaWYgQ1NTNCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUNzczQ6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlXHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHJlc291cmNlc1BhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3Jlc291cmNlcy8nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHdvcmtlckJhc2VQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdzcmMvd29ya2VyLydcclxufSk7XHJcblxyXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE5lbyAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vTmVvLm1qcyc7XHJcbmltcG9ydCAqIGFzIGNvcmUgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvcmUvX2V4cG9ydC5tanMnO1xyXG5pbXBvcnQgQW1DaGFydHMgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9tYWluL0FtQ2hhcnRzLm1qcyc7XHJcbmltcG9ydCBEb21BY2Nlc3MgICAgICAgICAgICAgICAgICBmcm9tICcuL21haW4vRG9tQWNjZXNzLm1qcyc7XHJcbmltcG9ydCBEb21FdmVudHMgICAgICAgICAgICAgICAgICBmcm9tICcuL21haW4vRG9tRXZlbnRzLm1qcyc7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2UgICAgICAgICAgICAgICBmcm9tICcuL21haW4vbWl4aW5zL0xvY2FsU3RvcmFnZS5tanMnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgV29ya2VyTWFuYWdlcn0gZnJvbSAnLi93b3JrZXIvTWFuYWdlci5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uTWFpblxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBjb3JlLkJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uTWFpbidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5NYWluJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzUmVhZHk9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzUmVhZHk6IGZhbHNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGxvZ0FuaW1hdGlvbkZyYW1lcz10cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbG9nQW5pbWF0aW9uRnJhbWVzOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBtaXhpbnM9W0xvY2FsU3RvcmFnZV1cclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbnM6IFtMb2NhbFN0b3JhZ2VdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbW9kZT0ncmVhZCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1vZGU6ICdyZWFkJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gcmVhZFF1ZXVlPVtdXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkUXVldWU6IFtdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWy8vLi4uXX1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbW90ZToge1xyXG4gICAgICAgICAgICBhcHA6IFtcclxuICAgICAgICAgICAgICAgICdjcmVhdGVMb2NhbFN0b3JhZ2VJdGVtJyxcclxuICAgICAgICAgICAgICAgICdkZXN0cm95TG9jYWxTdG9yYWdlSXRlbScsXHJcbiAgICAgICAgICAgICAgICAnZWRpdFJvdXRlJyxcclxuICAgICAgICAgICAgICAgICdyZWFkTG9jYWxTdG9yYWdlSXRlbScsXHJcbiAgICAgICAgICAgICAgICAnc2V0Um91dGUnLFxyXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZUxvY2FsU3RvcmFnZUl0ZW0nXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJ1bm5pbmc9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dGcHM9ZmFsc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaG93RnBzOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRpbWVMaW1pdD0xNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRpbWVMaW1pdDogMTUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogc2hvdWxkIGJlIGRldiBvbmx5XHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0b3RhbEZyYW1lQ291bnQ9MFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG90YWxGcmFtZUNvdW50OiAwLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB1cGRhdGVRdWV1ZT1bXVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXBkYXRlUXVldWU6IFtdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB3cml0ZVF1ZXVlPVtdXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB3cml0ZVF1ZXVlOiBbXVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIERvbUV2ZW50cy5vbignZG9tQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZCwgbWUpO1xyXG5cclxuICAgICAgICBXb3JrZXJNYW5hZ2VyLm9uKHtcclxuICAgICAgICAgICAgJ2F1dG9tb3VudCcgICAgICAgIDogbWUub25SZW5kZXIsXHJcbiAgICAgICAgICAgICdtZXNzYWdlOm1vdW50RG9tJyA6IG1lLm9uTW91bnREb20sXHJcbiAgICAgICAgICAgICdtZXNzYWdlOnVwZGF0ZURvbSc6IG1lLm9uVXBkYXRlRG9tLFxyXG4gICAgICAgICAgICAndXBkYXRlVmRvbScgICAgICAgOiBtZS5vblVwZGF0ZVZkb20sXHJcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFZGl0IHRoZSBsb2NhdGlvbi5oYXNoIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICBlZGl0Um91dGUoZGF0YSkge1xyXG4gICAgICAgIGxldCBoYXNoT2JqID0gRG9tRXZlbnRzLnBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLFxyXG4gICAgICAgICAgICBoYXNoQXJyID0gW107XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZGF0YSA9IERvbUV2ZW50cy5wYXJzZUhhc2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKGhhc2hPYmosIGRhdGEpO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhoYXNoT2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaGFzaEFyci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaEFyci5qb2luKCcmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBvbkRvbUNvbnRlbnRMb2FkZWQoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuaXNSZWFkeSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmFwcGx5Qm9keUNscykge1xyXG4gICAgICAgICAgICBEb21BY2Nlc3MuYXBwbHlCb2R5Q2xzKHtjbHM6IFsnbmVvLWJvZHknXX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlRm9udEF3ZXNvbWUpIHtcclxuICAgICAgICAgICAgRG9tQWNjZXNzLmNyZWF0ZVN0eWxlU2hlZXQobnVsbCwgbnVsbCwgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEb21BY2Nlc3MuaW5zZXJ0VGhlbWUoKTtcclxuXHJcbiAgICAgICAgaWYgKE5lby5jb25maWcuaXNJbnNpZGVTaWVzdGEpIHtcclxuICAgICAgICAgICAgRG9tQWNjZXNzLmFkanVzdFNpZXN0YUVudmlyb25tZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3ZSBjYW4gbm90IHVzZSBkeW5hbWljIGltcG9ydHMgdW50aWwgd2VicGFjayBpcyByZWFkeSB0byBzdXBwb3J0IGl0LlxyXG4gICAgICAgIC8vIHVzaW5nIGEgc3RhdGljIGltcG9ydCBmb3Igbm93LiBzZWU6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzM5M1xyXG4gICAgICAgIC8qaWYgKE5lby5jb25maWcudXNlQW1DaGFydHMpIHtcclxuICAgICAgICAgICAgaW1wb3J0KCcuL21haW4vQW1DaGFydHMubWpzJyk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljcykge1xyXG4gICAgICAgICAgICBEb21BY2Nlc3MuaW5zZXJ0R29vZ2xlQW5hbHl0aWNzU2NyaXB0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5hcHBQYXRoKSB7XHJcbiAgICAgICAgICAgIFdvcmtlck1hbmFnZXIubG9hZEFwcGxpY2F0aW9uKE5lby5jb25maWcuYXBwUGF0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBub3QgaW4gdXNlIHJpZ2h0IG5vd1xyXG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZVsnZ2xvYmFsUmVzaXplTGlzdGVuZXInXS5iaW5kKG1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG9kbzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3Jlc2l6ZVxyXG4gICAgZ2xvYmFsUmVzaXplTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFsUmVzaXplTGlzdGVuZXInLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgb25Nb3VudERvbShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEpO1xyXG5cclxuICAgICAgICBXb3JrZXJNYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luIHx8ICdhcHAnLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBvblJlbmRlcihkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5kYXRhLnJlcGx5SWQgPSBkYXRhLnJlcGx5SWQ7XHJcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGVEb20oZGF0YSkge1xyXG4gICAgICAgIHRoaXMucXVldWVVcGRhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGVWZG9tKGRhdGEpIHtcclxuICAgICAgICBkYXRhLmRhdGEucmVwbHlJZCA9IGRhdGEucmVwbHlJZDtcclxuICAgICAgICB0aGlzLnF1ZXVlVXBkYXRlKGRhdGEuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHF1ZXVlXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcm9jZXNzUXVldWUocXVldWUsIHN0YXJ0KSB7XHJcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcclxuICAgICAgICAgICAgbGltaXQgPSBtZS50aW1lTGltaXQsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjtcclxuXHJcbiAgICAgICAgd2hpbGUgKG9wZXJhdGlvbiA9IHF1ZXVlLnNoaWZ0KCkpIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkgLSBzdGFydCA+IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZS51bnNoaWZ0KG9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERvbUFjY2Vzc1ttZS5tb2RlXShvcGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgV29ya2VyTWFuYWdlci5yZXNvbHZlRG9tT3BlcmF0aW9uUHJvbWlzZShvcGVyYXRpb24ucmVwbHlJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHF1ZXVlUmVhZChkYXRhKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgICBtZS5yZWFkUXVldWUucHVzaChkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZS5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcXVldWVVcGRhdGUoZGF0YSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcbiAgICAgICAgbWUudXBkYXRlUXVldWUucHVzaChkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZS5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcXVldWVXcml0ZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgICBtZS53cml0ZVF1ZXVlLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAgIGlmICghbWUucnVubmluZykge1xyXG4gICAgICAgICAgICBtZS5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VycyB0aGUgZGlmZmVyZW50IERPTSBvcGVyYXRpb24gcXVldWVzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICByZW5kZXJGcmFtZSgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHJlYWQgICAgPSBtZS5yZWFkUXVldWUsXHJcbiAgICAgICAgICAgIHVwZGF0ZSAgPSBtZS51cGRhdGVRdWV1ZSxcclxuICAgICAgICAgICAgd3JpdGUgICA9IG1lLndyaXRlUXVldWUsXHJcbiAgICAgICAgICAgIHJlYWRpbmcgPSBtZS5tb2RlID09PSAncmVhZCcsXHJcbiAgICAgICAgICAgIHN0YXJ0ICAgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAobWUubG9nQW5pbWF0aW9uRnJhbWVzKSB7XHJcbiAgICAgICAgICAgIG1lLnRvdGFsRnJhbWVDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG90YWwgRnJhbWVzOiAnICsgbWUudG90YWxGcmFtZUNvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZWFkaW5nIHx8ICF3cml0ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWUubW9kZSA9ICdyZWFkJztcclxuICAgICAgICAgICAgaWYgKG1lLnByb2Nlc3NRdWV1ZShyZWFkLCBzdGFydCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWUubW9kZSA9ICd1cGRhdGUnO1xyXG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHVwZGF0ZSwgc3RhcnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3cml0ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWUubW9kZSA9ICd3cml0ZSc7XHJcbiAgICAgICAgICAgIGlmIChtZS5wcm9jZXNzUXVldWUod3JpdGUsIHN0YXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXRSb3V0ZShkYXRhKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkYXRhLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluKTtcclxuXHJcbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTWFpbik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xyXG5cclxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXHJcbiAgICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxyXG4gKiBAbW9kdWxlIE5lb1xyXG4gKiBAc2luZ2xldG9uXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0IGFzIGNyZWF0ZVN0eWxlT2JqZWN0XHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQXJyYXkgICAgICAgICAgIGFzIGlzQXJyYXlcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ICAgICAgICAgIGFzIGlzT2JqZWN0XHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XHJcbiAqIEB0dXRvcmlhbCAwMV9Db25jZXB0XHJcbiAqL1xyXG5sZXQgTmVvID0gc2VsZi5OZW8gfHwge307XHJcblxyXG5OZW8gPSBzZWxmLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIG1hcCBjb250YWluaW5nIG50eXBlcyBhcyBrZXkgYW5kIE5lbyBjbGFzc2VzIG9yIHNpbmdsZXRvbnMgYXMgdmFsdWVzXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSBPYmplY3RcclxuICAgICAqL1xyXG4gICAgbnR5cGVNYXA6IHt9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBOZWVkZWQgZm9yIE5lby5jcmVhdGUuIEZhbHNlIGZvciB0aGUgbWFpbiB0aHJlYWQsIHRydWUgZm9yIHRoZSBBcHAsIERhdGEgJiBWZG9tIHdvcmtlclxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsbHkgdXNlZCBhdCB0aGUgZW5kIG9mIGVhY2ggY2xhc3MgLyBtb2R1bGUgZGVmaW5pdGlvblxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzIFRoZSBOZW8gY2xhc3MgdG8gYXBwbHkgY29uZmlncyB0b1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBhcHBseUNsYXNzQ29uZmlnKGNscykge1xyXG4gICAgICAgIGxldCBiYXNlQ2ZnICAgICAgID0gbnVsbCxcclxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXHJcbiAgICAgICAgICAgIGNvbmZpZyAgICAgICAgPSB7fSxcclxuICAgICAgICAgICAgcHJvdG8gICAgICAgICA9IGNscy5wcm90b3R5cGUgfHwgY2xzLFxyXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXHJcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgPSB7fSxcclxuICAgICAgICAgICAgY3RvcjtcclxuXHJcbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xyXG4gICAgICAgICAgICBjdG9yID0gcHJvdG8uY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3Rvci5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGJhc2VDZmcgICAgICAgPSBOZW8uY2xvbmUoY3Rvci5jb25maWcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xyXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZyAgICAgICA9IGJhc2VDZmcgICAgICAgPyBiYXNlQ2ZnICAgICAgIDogY29uZmlnO1xyXG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgPyBiYXNlU3RhdGljQ2ZnIDogc3RhdGljQ29uZmlnO1xyXG5cclxuICAgICAgICBwcm90b3MuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIGxldCBjZmcgICAgICAgPSBjdG9yLmdldENvbmZpZyAgICAgICAmJiBjdG9yLmdldENvbmZpZygpICAgICAgIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgc3RhdGljQ2ZnID0gY3Rvci5nZXRTdGF0aWNDb25maWcgJiYgY3Rvci5nZXRTdGF0aWNDb25maWcoKSB8fCB7fSxcclxuICAgICAgICAgICAgICAgIG1peGlucztcclxuXHJcbiAgICAgICAgICAgIGlmIChjZmcpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgtMSkgPT09ICdfJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2ZnW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZ1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9HZW5lcmF0ZUdldFNldChlbGVtZW50LCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBseSBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgbm8gc2V0dGVycyBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWhhc1Byb3BlcnR5U2V0dGVyKGVsZW1lbnQsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIGtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGUgIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCBzdGF0aWNDZmcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNmZy5oYXNPd25Qcm9wZXJ0eSgnbnR5cGUnKSkge1xyXG4gICAgICAgICAgICAgICAgTmVvLm50eXBlTWFwW2NmZy5udHlwZV0gPSBjZmcuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtaXhpbnMgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIGNvbmZpZy5taXhpbnMgfHwgW107XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGljQ2ZnICYmIHN0YXRpY0NmZy5vYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCgnTmVvLmNvcmUuT2JzZXJ2YWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdtaXhpbnMnKSAmJiBBcnJheS5pc0FycmF5KGNmZy5taXhpbnMpICYmIGNmZy5taXhpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBseU1peGlucyhjdG9yLCBtaXhpbnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgY2ZnLm1peGlucztcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5taXhpbnM7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgY2ZnKTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdGF0aWNDb25maWcsIHN0YXRpY0NmZyk7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzQ29uZmlnQXBwbGllZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBpc0NsYXNzICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDb25maWcgICAgICA6IE5lby5jbG9uZShzdGF0aWNDb25maWcsIHRydWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIGN0b3IuZ2V0Q29uZmlnO1xyXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5zaW5nbGV0b24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGEgY2xhc3MgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZS5cclxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcclxuICAgICAqL1xyXG4gICAgYXBwbHlUb0dsb2JhbE5zKGNscykge1xyXG4gICAgICAgIGxldCBwcm90byA9IHR5cGVvZiBjbHMgPT09ICdmdW5jdGlvbicgPyBjbHMucHJvdG90eXBlOiBjbHMsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcclxuXHJcbiAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnJlZ2lzdGVyVG9HbG9iYWxOcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgICAgIG5zQXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XHJcbiAgICAgICAgICAgIG5zICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG5zW2tleV0gPSBjbHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgbWV0aG9kcyBmcm9tIG9uZSBuYW1lc3BhY2UgdG8gYW5vdGhlciBvbmVcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyBhbGlhc2VzXHJcbiAgICAgKiBOZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XHJcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXHJcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxyXG4gICAgICogICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgKiAgICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcclxuICAgICAqICAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxyXG4gICAgICogICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcclxuICAgICAqICAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXHJcbiAgICAgKiAgICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXHJcbiAgICAgKiAgICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXHJcbiAgICAgKiAgICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXHJcbiAgICAgKiAgICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xyXG4gICAgICogfSwgdHJ1ZSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvfE5lby5jb3JlLkJhc2V9IHRhcmdldCBUaGUgdGFyZ2V0IGNsYXNzIG9yIHNpbmdsZXRvbiBJbnN0YW5jZSBvciBOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtiaW5kXSBzZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gYmluZCBtZXRob2RzIHRvIHRoZSBcImZyb21cIiBuYW1lc3BhY2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxyXG4gICAgICovXHJcbiAgICBhcHBseUZyb21Ocyh0YXJnZXQsIG5hbWVzcGFjZSwgY29uZmlnLCBiaW5kKSB7XHJcbiAgICAgICAgbGV0IGZuTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiBjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGZuTmFtZSA9IG5hbWVzcGFjZVt2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGJpbmQgPyBmbk5hbWUuYmluZChuYW1lc3BhY2UpIDogZm5OYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29waWVzIGFsbCBrZXlzIG9mIGRlZmF1bHRzIGludG8gdGFyZ2V0LCBpbiBjYXNlIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdFxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleXMgeW91IHdhbnQgdG8gY29weVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIGFzc2lnbkRlZmF1bHRzKHRhcmdldCwgZGVmYXVsdHMpIHtcclxuICAgICAgICBpZiAodGFyZ2V0ICYmIGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkZWVwPWZhbHNlXSBTZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY2xvbmUgbmVzdGVkIG9iamVjdHMgYXMgd2VsbFxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxyXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XHJcbiAgICAgKi9cclxuICAgIGNsb25lKG9iaiwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgbGV0IG91dDtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLm1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouY29uc3RydWN0b3IuaXNDbGFzcyAmJiBvYmogaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihvYmouY29uc3RydWN0b3IuaXNDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqOyAvLyByZXR1cm4gYWxsIG90aGVyIGRhdGEgdHlwZXNcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNsb25lTmVvSW5zdGFuY2UoaW5zdGFuY2UpIHtcclxuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcclxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcclxuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xyXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgTmVvLmNyZWF0ZSgpIGluc3RlYWQgb2YgXCJuZXdcIiB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIGFsbCBOZW8gY2xhc3Nlc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24ubWpzJztcclxuICAgICAqXHJcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24ubWpzJztcclxuICAgICAqXHJcbiAgICAgKiBOZW8uY3JlYXRlKHtcclxuICAgICAqICAgICBtb2R1bGUgOiBCdXR0b24sXHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmNvbXBvbmVudC5CdXR0b24nIHtcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8uY3JlYXRlKHtcclxuICAgICAqICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkJ1dHRvbicsXHJcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxOZW8uY29yZS5CYXNlfSBjbGFzc05hbWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xyXG4gICAgICAgIGxldCBjbHMsIGluc3RhbmNlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQgIT09IGNsYXNzTmFtZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjbGFzc05hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcuY2xhc3NOYW1lICYmICFjb25maWcubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgY29uc29sZS5lcnJvciBpbnN0ZWFkIG9mIHRocm93IHRvIHNob3cgdGhlIGNvbmZpZyBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb25maWcuY2xhc3NOYW1lID8gY29uZmlnLmNsYXNzTmFtZSA6IGNvbmZpZy5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFleGlzdHMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluc3RhbmNlID0gbmV3IGNscyhjb25maWcpO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5vbkNvbnN0cnVjdGVkKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGVtcHR5Rm4oKSB7fSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYSBjbGFzc05hbWUgc3RyaW5nIGludG8gYSBnbG9iYWwgbmFtZXNwYWNlXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogTmVvLm5zKCdOZW8uY29tcG9uZW50LkJ1dHRvbicsIHRydWUpO1xyXG4gICAgICogLy8gPT5cclxuICAgICAqIC8vIHNlbGYuTmVvID0gc2VsZi5OZW8gfHwge307XHJcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQgPSBzZWxmLk5lby5jb21wb25lbnQgfHwge307XHJcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uID0gc2VsZi5OZW8uY29tcG9uZW50LkJ1dHRvbiB8fCB7fTtcclxuICAgICAqIC8vIHJldHVybiBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uO1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gbmFtZXMgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjcmVhdGVdIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uIGV4aXN0aW5nIHBhcnRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgc2VsZlxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gcmVmZXJlbmNlIHRvIHRoZSB0b3BsZXZlbCBuYW1lc3BhY2VcclxuICAgICAqL1xyXG4gICAgbnMobmFtZXMsIGNyZWF0ZSwgc2NvcGUpIHtcclxuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcclxuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzY29wZSB8fCBzZWxmKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogTmVvLm50eXBlKCdidXR0b24nIHtcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnR5cGUoe1xyXG4gICAgICogICAgIG50eXBlICA6ICdidXR0b24nLFxyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XHJcbiAgICAgKiBAc2VlIHtAbGluayBtb2R1bGU6TmVvLmNyZWF0ZSBjcmVhdGV9XHJcbiAgICAgKi9cclxuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XHJcblxyXG4gICAgICAgIGlmICghY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3RhcnQ6IE5lby5lbXB0eUZuXHJcbn0sIE5lbyk7XHJcblxyXG4vKipcclxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xyXG4gKiBAdHlwZSB7c3RyaW5nW119XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCBpZ25vcmVNaXhpbiA9IFtcclxuICAgICdfbmFtZScsXHJcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcclxuICAgICdjbGFzc05hbWUnLFxyXG4gICAgJ2NvbnN0cnVjdG9yJyxcclxuICAgICdpc0NsYXNzJyxcclxuICAgICdtaXhpbicsXHJcbiAgICAnbnR5cGUnLFxyXG4gICAgJ29ic2VydmFibGUnLFxyXG4gICAgJ3JlZ2lzdGVyVG9HbG9iYWxOcydcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcclxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGV4aXN0cyhjbGFzc05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdO1xyXG4gICAgICAgIH0sIHNlbGYpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcclxuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNscztcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbWl4aW5Qcm90b1xyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgaWYgKH5pZ25vcmVNaXhpbi5pbmRleE9mKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvdG9ba2V5XSAmJiBwcm90b1trZXldLl9mcm9tKSB7XHJcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgcHJvdG8uY2xhc3NOYW1lICsgJzogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCcgK1xyXG4gICAgICAgICAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgIHByb3RvW2tleV0uX2Zyb20gKyAnKSA9PiAnICtcclxuICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcclxuICogQHBhcmFtIHtBcnJheX0gbWl4aW5zXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseU1peGlucyhjbHMsIG1peGlucykge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcclxuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcclxuICAgICAgICBsZW4gICAgICAgICAgPSBtaXhpbnMubGVuZ3RoLFxyXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxyXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcclxuXHJcbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xyXG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xyXG5cclxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xyXG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xyXG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluUHJvdG8uY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XHJcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbkNscy5wcm90b3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZShtaXhSZWR1Y2UobWl4aW5DbHMpLCBtaXhpbkNsYXNzZXMpO1xyXG5cclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzOyAvLyB0b2RvOiB3ZSBzaG91bGQgZG8gYSBkZWVwIG1lcmdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBzZXQgbWV0aG9kIGZvciBhIGdpdmVuIHByb3BlcnR5IGtleSBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcclxuICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgcHJvcGVydHkga2V5IHRvIHRlc3RcclxuICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSB7XHJcbiAgICBsZXQgZGVzY3JpcHRvcjtcclxuXHJcbiAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XHJcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRlc2NyaXB0b3Iuc2V0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XHJcbiAqIEBwcml2YXRlXHJcbiAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gKi9cclxuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcclxuICAgIGlmIChoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xyXG4gICAgICAgIHRocm93KCdDb25maWcgJyArIGtleSArICdfICgnICsgcHJvdG8uY2xhc3NOYW1lICsgJykgYWxyZWFkeSBoYXMgYSBzZXQgbWV0aG9kLCB1c2UgYmVmb3JlR2V0LCBiZWZvcmVTZXQgJiBhZnRlclNldCBpbnN0ZWFkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XHJcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XHJcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSAnYmVmb3JlR2V0JyArIE5lby5jYXBpdGFsaXplKGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSAgICA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgPSBoYXNOZXdLZXkgPyBuZXdLZXkgOiBtZVsnXycgKyBrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7IC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgc2V0dGVyID0+IGJlZm9yZVNldCwgYWZ0ZXJTZXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVbYmVmb3JlR2V0XSAmJiB0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgdUtleSAgICAgID0gTmVvLmNhcGl0YWxpemUoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZXQgPSAnYmVmb3JlU2V0JyArIHVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZXQgID0gJ2FmdGVyU2V0JyAgKyB1S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IHNldCBjYWxsIGhhcyB0byBkZWxldGUgdGhlIG1hdGNoaW5nIHN5bWJvbFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHN0b3JlIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGJlZm9yZVNldCBtb2RpZmljYXRpb24gYXMgd2VsbCxcclxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lW2JlZm9yZVNldF0gJiYgdHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZVNldF0odmFsdWUsIG9sZFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvZG86IHdlIGNvdWxkIGNvbXBhcmUgb2JqZWN0cyAmIGFycmF5cyBmb3IgZXF1YWxpdHlcclxuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZVthZnRlclNldF0gJiYgdHlwZW9mIG1lW2FmdGVyU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0odmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pO1xyXG59XHJcblxyXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuXHJcbk5lby5hc3NpZ25EZWZhdWx0cyhOZW8uY29uZmlnLCBEZWZhdWx0Q29uZmlnKTtcclxuXHJcbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcclxuXHJcbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxyXG4gICAgICBpc0luc3RhbmNlICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSB3aWxsIGdldCBhcHBsaWVkIHRvIHRoZSBjbGFzcyBjb25zdHJ1Y3RvclxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXHJcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdiYXNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW5zOiBudWxsXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZXMgdGhlIHN0YXRpYyBnZXRDb25maWcoKSBvYmplY3RcclxuICAgICAqIEFwcGxpZXMgdGhlIG9ic2VydmFibGUgbWl4aW4gaWYgbmVlZGVkLCBncmFudHMgcmVtb3RlIGFjY2VzcyBpZiBuZWVkZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xyXG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XHJcblxyXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSB8fCBtZS5taXhpbnMgJiYgTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgbWUubWl4aW5zKSkge1xyXG4gICAgICAgICAgICBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xyXG5cclxuICAgICAgICBpZiAobWUuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICBtZS5jb250cm9sbGVyLnBhcnNlQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBvbkNvbnN0cnVjdGVkKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaXMgZG9uZVxyXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1N1cHBvcnRlZCB2YWx1ZXMgZm9yICcgKyBuYW1lICsgJyBhcmU6JywgdmFsdWVzLmpvaW4oJywgJyksIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSWQoaWQpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIGlkID0gSWRHZW5lcmF0b3IuZ2V0SWQobWUubnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUuaWQgPSBpZDtcclxuXHJcbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIU5lby5pZE1hcCkge1xyXG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcclxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhtZSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBtZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcclxuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XHJcbiAgICAgICAgcmV0dXJuIChrZXkgPyBjZmdba2V5XSA6IGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIG1lLm1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSk7XHJcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByb2Nlc3NDb25maWdzKCkge1xyXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcclxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pO1xyXG5cclxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcclxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGdvdCBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcclxuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xyXG5cclxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxyXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXHJcbiAgICAgKi9cclxuICAgIGluaXRSZW1vdGUoKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHJlbW90ZSAgICA9IG1lLnJlbW90ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWUuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBvcmlnaW47XHJcblxyXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3Mgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy51bml0VGVzdE1vZGUgJiYgTmVvLmlzT2JqZWN0KHJlbW90ZSkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICAgICA6ICdyZWdpc3RlclJlbW90ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHMgICAgIDogbWV0aG9kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICAgOiBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIG1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XHJcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICAgICAgbWUub3JpZ2luYWxDb25maWcgPSBOZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxyXG4gICAgICovXHJcbiAgICBzZXQodmFsdWVzPXt9KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB1c2luZzpcclxuICAgICAgICAvLyBtZVtjb25maWdTeW1ib2xdID0gdmFsdWVzO1xyXG4gICAgICAgIC8vIHdlIGtlZXAgdGhlIE9iamVjdCBpbnN0YW5jZSAoZGVmaW5lZCB2aWEgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKSA9PiBub24gZW51bWVyYWJsZSlcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XHJcblxyXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cclxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5jb21wb25lbnQuQnV0dG9uIChuZW8tYnV0dG9uLTEpXVwiYFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZSArICcgKGlkOicgKyB0aGlzLmlkICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XHJcbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXHJcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cclxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxyXG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcclxuXHJcbkJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2U7XHJcblxyXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXHJcbiAqIEl0IGNvdWxkIGdldCBzaW1wbGlmaWVkIHRvIGp1c3QgYmVpbmcgYW4gb2JqZWN0IChuZWVkcyB0byBtYW51YWxseSBnZXQgcHV0IGludG8gdGhlIE5lbyBuYW1lc3BhY2UgaW4gdGhpcyBjYXNlKS5cclxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIElkR2VuZXJhdG9yIHtcclxuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xyXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naWQtZ2VuZXJhdG9yJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBiYXNlOiAnbmVvLScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPSd0cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gYWxpYXNcclxuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnN0cnVjdGVkKCkge31cclxuXHJcbiAgICBpbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0SWQobmFtZSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lIHx8ICduZW8nO1xyXG5cclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBtZS5pZENvdW50ZXIsXHJcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XHJcblxyXG4gICAgICAgIGNvdW50ZXJbbmFtZV0gPSArK2NvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJZEdlbmVyYXRvcik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuTG9nZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsb2dnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2xvZ2dlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2xvZydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldmVsOiAnbG9nJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIC8vIGFsaWFzZXNcclxuICAgICAgICBOZW8uYXBwbHlGcm9tTnMoTmVvLCB0aGlzLCB7XHJcbiAgICAgICAgICAgIGVycm9yICAgOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxyXG4gICAgICAgICAgICBsb2cgICAgIDogJ2xvZycsXHJcbiAgICAgICAgICAgIGxvZ0Vycm9yOiAnbG9nRXJyb3InLFxyXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGVycm9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBsb2coLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGluZm8oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnaW5mbyc7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBsb2dFcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdlcnJvcic7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICB3YXJuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gJ3dhcm4nO1xyXG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2dzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dnZXIpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShMb2dnZXIpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdtaXhpbi1vYnNlcnZhYmxlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxyXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcclxuICAgICAgICAgICAgbGlzdGVuZXJzO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcclxuXHJcbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm90by5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWcub2JzZXJ2YWJsZSAmJiAhcHJvdG8uY29uc3RydWN0b3IubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmUgICAgICAgICAgOiBtZS5maXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IG1lLnJlbW92ZUxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMuZm47XHJcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcclxuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0czsgLy8gVkMgaG9vaywgY2FuIGdldCBwYXJzZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpbiBjYXNlIHRoZSB2aWV3IHVzZXMgdGhlIHBhcmVudCBWQ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudENvbmZpZyA9IHtcclxuICAgICAgICAgICAgZm4gICAgOiBsaXN0ZW5lcixcclxuICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcclxuICAgICAgICAgICAgZGF0YSAgOiBkYXRhLFxyXG4gICAgICAgICAgICBpZCAgICA6IGV2ZW50SWQgfHwgTmVvLmdldElkKCdldmVudCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzICYmIG1lLmxpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgZXZlbnQgaGFuZGxlciBhdHRhY2hlZDogJyArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIGZpcmUobmFtZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBhcmdzICAgICAgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcclxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcclxuICAgICAgICAgICAgbGVuICAgID0gZXZlbnRzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcgPSBldmVudHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkKSB7XHJcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcclxuXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxpYXMgZm9yIGFkZExpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICBvbiguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICB1biguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XHJcblxyXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XHJcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWNhbWVsUmVnRXg6IC8oW2Etel0pKFtBLVpdKS9nXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBhIHN5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgVGhlIHN0eWxlcyBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBVdGlsLmlzU3RyaW5nKHN0cmluZykgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIGxvd2VyY2FzZS5cclxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFydHM7XHJcblxyXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xyXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXHJcblxyXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxyXG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxyXG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxyXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gaXRlcmFibGVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgbGV0IGxlbjtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xyXG5cclxuLy8gYWxpYXNlc1xyXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XHJcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcclxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcclxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXHJcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxyXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcclxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcclxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcclxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXHJcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxyXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXHJcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcclxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxyXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xyXG5pbXBvcnQgTG9nZ2VyICAgICAgZnJvbSAnLi9Mb2dnZXIubWpzJztcclxuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xyXG5pbXBvcnQgVXRpbCAgICAgICAgZnJvbSAnLi9VdGlsLm1qcyc7XHJcblxyXG5leHBvcnQge0Jhc2UsIExvZ2dlciwgT2JzZXJ2YWJsZSwgVXRpbH07IiwiaW1wb3J0IEJhc2UgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IERvbUFjY2VzcyBmcm9tICcuL0RvbUFjY2Vzcy5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB0byBpbmNsdWRlIGFtQ2hhcnRzIGludG8geW91ciBuZW8ubWpzIGFwcFxyXG4gKiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cclxuICogQGNsYXNzIE5lby5tYWluLkFtQ2hhcnRzXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgQW1DaGFydHMgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uQW1DaGFydHMnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5BbUNoYXJ0cycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcmVzIGFsbCBjaGFydCBpZHMgaW5zaWRlIGFuIG9iamVjdFxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhcnRzPXt9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjaGFydHM6IHt9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3JlcyBhbGwgY2hhcnQgY29uZmlnIG9iamVjdHMgd2hpY2ggYXJyaXZlZCBiZWZvcmUgdGhlIGNoYXJ0IGxpYiBzY3JpcHRzIGdvdCBsb2FkZWRcclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY2hhcnRzVG9DcmVhdGU9W11cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNoYXJ0c1RvQ3JlYXRlOiBbXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9yZXMgYWxsIGNoYXJ0IGRhdGEgaW5zaWRlIGFuIG9iamVjdC4ga2V5ID0+IGNoYXJ0IGlkXHJcbiAgICAgICAgICogTm8gYXJyYXkgc2luY2UgaW4gY2FzZSBhIGNoYXJ0IGdldHMgbG9hZGVkIG11bHRpcGxlIHRpbWVzLCB3ZSBvbmx5IHdhbnQgdG8gYXBwbHkgdGhlIGxhc3QgZGF0YSBvbiBtb3VudC5cclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0cz17fVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGF0YU1hcDoge30sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkb3duTG9hZFBhdGg9J2h0dHBzLy93d3cuYW1jaGFydHMuY29tL2xpYi80LydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRvd25Mb2FkUGF0aDogJ2h0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9saWIvNC8nLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZmFsbGJhY2tQYXRoPSdodHRwczovL25lb21qcy5naXRodWIuaW8vcGFnZXMvcmVzb3VyY2VzL2FtQ2hhcnRzLydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZhbGxiYWNrUGF0aDogJ2h0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby9wYWdlcy9yZXNvdXJjZXMvYW1DaGFydHMvJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzY3JpcHRzTG9hZGVkXz10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzY3JpcHRzTG9hZGVkXzogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZW1vdGU6IHtcclxuICAgICAgICAgICAgYXBwOiBbXHJcbiAgICAgICAgICAgICAgICAnY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICd0b2dnbGVMb2dhcml0aG1pYycsXHJcbiAgICAgICAgICAgICAgICAndXBkYXRlRGF0YSdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VBbUNoYXJ0cykge1xyXG4gICAgICAgICAgICB0aGlzLmluc2VydEFtQ2hhcnRzU2NyaXB0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2NyaXB0c0xvYWRlZCBjb25maWcgZ290IGNoYW5nZWRcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFmdGVyU2V0U2NyaXB0c0xvYWRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgbWUuY2hhcnRzVG9DcmVhdGUuZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbWUuY2hhcnRzVG9DcmVhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWUuZGF0YU1hcCkuZm9yRWFjaCgoa2V5LCBkYXRhVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZS51cGRhdGVEYXRhKGRhdGFWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtZS5kYXRhTWFwID0ge307XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEuY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEucGFja2FnZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudHlwZT0nWFlDaGFydCdcclxuICAgICAqL1xyXG4gICAgY3JlYXRlKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghbWUuc2NyaXB0c0xvYWRlZCkge1xyXG4gICAgICAgICAgICBtZS5jaGFydHNUb0NyZWF0ZS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGNoZWNrIGlmIHNlbGZbZGF0YS5wYWNrYWdlXSBleGlzdHMsIGlmIG5vdCBsb2FkIGl0IGFuZCBjYWxsIGNyZWF0ZSBhZnRlcndhcmRzXHJcblxyXG4gICAgICAgICAgICBtZS5jaGFydHNbZGF0YS5pZF0gPSBhbTRjb3JlLmNyZWF0ZUZyb21Db25maWcoZGF0YS5jb25maWcsIGRhdGEuaWQsIHNlbGZbZGF0YS5wYWNrYWdlXVtkYXRhLnR5cGUgfHwgJ1hZQ2hhcnQnXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpbiBjYXNlIGRhdGEgaGFzIGFycml2ZWQgYmVmb3JlIHRoZSBjaGFydCBnb3QgY3JlYXRlZCwgYXBwbHkgaXQgbm93XHJcbiAgICAgICAgICAgIGlmIChtZS5kYXRhTWFwW2RhdGEuaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVEYXRhKG1lLmRhdGFNYXBbZGF0YS5pZF0pO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLmRhdGFNYXBbZGF0YS5pZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBoYXNDaGFydChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0c1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBc3luYyBhcHByb2FjaFxyXG4gICAgICogY29yZS5qcyBoYXMgdG8gYXJyaXZlIGZpcnN0IG9yIHRoZSBvdGhlciBzY3JpcHRzIHdpbGwgY2F1c2UgSlMgZXJyb3JzIHNpbmNlIHRoZXkgcmVseSBvbiBpdFxyXG4gICAgICogPT4gZmV0Y2hpbmcgdGhlIG90aGVyIGZpbGVzIGFmdGVyIGNvcmUuanMgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGluc2VydEFtQ2hhcnRzU2NyaXB0cyh1c2VGYWxsYmFjaz1mYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IG1lICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHVzZUZhbGxiYWNrID8gbWUuZmFsbGJhY2tQYXRoIDogbWUuZG93bkxvYWRQYXRoO1xyXG5cclxuICAgICAgICBEb21BY2Nlc3MubG9hZFNjcmlwdChiYXNlUGF0aCArICdjb3JlLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIERvbUFjY2Vzcy5sb2FkU2NyaXB0KGJhc2VQYXRoKyAnY2hhcnRzLmpzJyksXHJcbiAgICAgICAgICAgICAgICBEb21BY2Nlc3MubG9hZFNjcmlwdChiYXNlUGF0aCArICdtYXBzLmpzJyksXHJcbiAgICAgICAgICAgICAgICBEb21BY2Nlc3MubG9hZFNjcmlwdChiYXNlUGF0aCArICdnZW9kYXRhL3dvcmxkTG93LmpzJylcclxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZS5zY3JpcHRzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEb3dubG9hZCBmcm9tIGFtY2hhcnRzLmNvbSBmYWlsZWQsIHN3aXRjaGluZyB0byBmYWxsYmFjaycsIGUpO1xyXG4gICAgICAgICAgICBtZS5pbnNlcnRBbUNoYXJ0c1NjcmlwdHModHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEudmFsdWVcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlTG9nYXJpdGhtaWMoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NoYXJ0KGRhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnRzW2RhdGEuaWRdLnlBeGVzLnZhbHVlc1swXS5sb2dhcml0aG1pYyA9IGRhdGEudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5kYXRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5kYXRhUGF0aFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcclxuICAgICAqL1xyXG4gICAgdXBkYXRlRGF0YShkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIW1lLnNjcmlwdHNMb2FkZWQgfHwgIW1lLmhhc0NoYXJ0KGRhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgIG1lLmRhdGFNYXBbZGF0YS5pZF0gPSBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gbWUuY2hhcnRzW2RhdGEuaWRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YVBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFydC5kYXRhID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTmVvLm5zKGRhdGEuZGF0YVBhdGgsIGZhbHNlLCBjaGFydCkuZGF0YSA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQW1DaGFydHMpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShBbUNoYXJ0cyk7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcbmltcG9ydCBEZWx0YVVwZGF0ZXMgICAgZnJvbSAnLi9taXhpbnMvRGVsdGFVcGRhdGVzLm1qcyc7XHJcbmltcG9ydCBNYXJrZG93biAgICAgICAgZnJvbSAnLi9taXhpbnMvTWFya2Rvd24ubWpzJztcclxuaW1wb3J0IEdvb2dsZUFuYWx5dGljcyBmcm9tICcuL21peGlucy9Hb29nbGVBbmFseXRpY3MubWpzJztcclxuaW1wb3J0IEhsanMgICAgICAgICAgICBmcm9tICcuL21peGlucy9IbGpzLm1qcyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XHJcbmltcG9ydCBTaWVzdGEgICAgICAgICAgZnJvbSAnLi9taXhpbnMvU2llc3RhLm1qcyc7XHJcbmltcG9ydCBTdHlsZXNoZWV0ICAgICAgZnJvbSAnLi9taXhpbnMvU3R5bGVzaGVldC5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8ubWFpbi5Eb21BY2Nlc3NcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBEb21BY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tQWNjZXNzJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uRG9tQWNjZXNzJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBsb2dEZWx0YVVwZGF0ZXM9dHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxvZ0RlbHRhVXBkYXRlczogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBtaXhpbnM9W0RlbHRhVXBkYXRlcywgR29vZ2xlQW5hbHl0aWNzLCBIbGpzLCBNYXJrZG93biwgT2JzZXJ2YWJsZSwgU2llc3RhLCBTdHlsZXNoZWV0XVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1peGluczogW1xyXG4gICAgICAgICAgICBEZWx0YVVwZGF0ZXMsXHJcbiAgICAgICAgICAgIEdvb2dsZUFuYWx5dGljcyxcclxuICAgICAgICAgICAgSGxqcyxcclxuICAgICAgICAgICAgTWFya2Rvd24sXHJcbiAgICAgICAgICAgIE9ic2VydmFibGUsXHJcbiAgICAgICAgICAgIFNpZXN0YSxcclxuICAgICAgICAgICAgU3R5bGVzaGVldFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbLy8uLi5dfVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVtb3RlOiB7XHJcbiAgICAgICAgICAgIGFwcDogW1xyXG4gICAgICAgICAgICAgICAgJ2FkZFNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAnYXBwbHlCb2R5Q2xzJyxcclxuICAgICAgICAgICAgICAgICdleGVjQ29tbWFuZCcsXHJcbiAgICAgICAgICAgICAgICAnZm9jdXMnLFxyXG4gICAgICAgICAgICAgICAgJ2dldEF0dHJpYnV0ZXMnLFxyXG4gICAgICAgICAgICAgICAgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXHJcbiAgICAgICAgICAgICAgICAnbWFya2Rvd25Ub0h0bWwnLFxyXG4gICAgICAgICAgICAgICAgJ3Njcm9sbEludG9WaWV3JyxcclxuICAgICAgICAgICAgICAgICdzY3JvbGxUb1RhYmxlUm93JyxcclxuICAgICAgICAgICAgICAgICdzZWxlY3ROb2RlJyxcclxuICAgICAgICAgICAgICAgICdzd2FwU3R5bGVTaGVldCcsXHJcbiAgICAgICAgICAgICAgICAnd2luZG93U2Nyb2xsVG8nXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZvaWQgYXR0cmlidXRlcyBpbnNpZGUgaHRtbCB0YWdzXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHZvaWRBdHRyaWJ1dGVzXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2b2lkQXR0cmlidXRlczogW1xyXG4gICAgICAgICAgICAnY2hlY2tlZCcsXHJcbiAgICAgICAgICAgICdyZXF1aXJlZCdcclxuICAgICAgICBdXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG1lLmxvZ0RlbHRhVXBkYXRlcykge1xyXG4gICAgICAgICAgICBtZS5jb3VudERlbHRhcyAgPSAwO1xyXG4gICAgICAgICAgICBtZS5jb3VudFVwZGF0ZXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLmFzeW5jXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEuZGVmZXJcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnNyY1xyXG4gICAgICovXHJcbiAgICBhZGRTY3JpcHQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHNjcmlwdCwgZGF0YSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5jbHNcclxuICAgICAqL1xyXG4gICAgYXBwbHlCb2R5Q2xzKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBjbHMgPSBkYXRhLmNscyB8fCBbXTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoLi4uY2xzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuY29tbWFuZFxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICBleGVjQ29tbWFuZChkYXRhKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoZGF0YS5jb21tYW5kKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIGZvY3VzIG9uIGEgbm9kZSBmb3IgYSBnaXZlbiBkb20gbm9kZSBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXHJcbiAgICAgKi9cclxuICAgIGZvY3VzKGRhdGEpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgbm9kZS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGVzIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuaWQgZWl0aGVyIGFuIGlkIG9yIGFuIGFycmF5IG9mIGlkc1xyXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuYXR0cmlidXRlcyBlaXRoZXIgYW4gYXR0cmlidXRlIG9yIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IEluIGNhc2UgaWQgaXMgYW4gYXJyYXksIGFuIGFycmF5IG9mIGF0cnJidXRlIG9iamVjdHMgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSBhbiBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0QXR0cmlidXRlcyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHJldHVybkRhdGE7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuaWQuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5EYXRhLnB1c2godGhpcy5nZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgIDogaWRcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGF0YS5pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm5EYXRhID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuYXR0cmlidXRlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMgPSBbZGF0YS5hdHRyaWJ1dGVzXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRGF0YVthdHRyaWJ1dGVdID0gbm9kZVthdHRyaWJ1dGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuaWQgZWl0aGVyIGFuIGlkIG9yIGFuIGFycmF5IG9mIGlkc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH0gSW4gY2FzZSBpZCBpcyBhbiBhcnJheSwgYW4gYXJyYXkgb2YgRG9tUmVjdHMgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSBhbiBEb21SZWN0IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZGF0YSkge1xyXG4gICAgICAgIGxldCByZXR1cm5EYXRhO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm5EYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmlkLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtpZDogaWR9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpLFxyXG4gICAgICAgICAgICAgICAgcmVjdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERvbVJlY3QgZG9lcyBub3Qgc3VwcG9ydCBzcHJlYWRpbmcgPT4gey4uLkRvbVJlY3R9ID0+IHt9XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHJlY3QuYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCAgOiByZWN0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgOiByZWN0LnJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCAgIDogcmVjdC50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggOiByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHggICAgIDogcmVjdC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHkgICAgIDogcmVjdC55XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVJZFxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBnZXRFbGVtZW50KG5vZGVJZCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbm9kZUlkPSdib2R5J11cclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudE9yQm9keShub2RlSWQpIHtcclxuICAgICAgICBpZiAoIW5vZGVJZCB8fCBub2RlSWQgPT09ICdib2R5JyB8fCBub2RlSWQgPT09ICdkb2N1bWVudC5ib2R5Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQobm9kZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluY2x1ZGUgYSBzY3JpcHQgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNyY1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYXN5bmM9dHJ1ZV1cclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dW5rbm93bj59XHJcbiAgICAgKi9cclxuICAgIGxvYWRTY3JpcHQoc3JjLCBhc3luYz10cnVlKSB7XHJcbiAgICAgICAgbGV0IHNjcmlwdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNjcmlwdCwge1xyXG4gICAgICAgICAgICAgICAgYXN5bmMgIDogYXN5bmMsXHJcbiAgICAgICAgICAgICAgICBvbmVycm9yOiByZWplY3QsXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQgOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgc3JjICAgIDogc3JjXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmF0dHJpYnV0ZXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEuZnVuY3Rpb25zIEFuIGFycmF5IGNvbnRhaW5pbmcgc3RyaW5ncyBhbmQvb3Igb2JqZWN0c1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5zdHlsZXNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZub2RlSWRcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uUmVhZERvbShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXMgICAgPSBkYXRhLmF0dHJpYnV0ZXMgfHwgW10sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9ucyAgICAgPSBkYXRhLmZ1bmN0aW9ucyAgfHwgW10sXHJcbiAgICAgICAgICAgIHN0eWxlcyAgICAgICAgPSBkYXRhLnN0eWxlcyAgICAgfHwgW10sXHJcbiAgICAgICAgICAgIHZub2RlSWQgICAgICAgPSBkYXRhLnZub2RlSWQsXHJcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXMgPSB7fSxcclxuICAgICAgICAgICAgcmV0RnVuY3Rpb25zICA9IHt9LFxyXG4gICAgICAgICAgICByZXRTdHlsZXMgICAgID0ge30sXHJcbiAgICAgICAgICAgIGVsZW1lbnQgICAgICAgPSB2bm9kZUlkID8gdGhpcy5nZXRFbGVtZW50KHZub2RlSWQpIDogbnVsbCxcclxuICAgICAgICAgICAgZm5OYW1lLCBzY29wZTtcclxuXHJcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXNba2V5XSA9IGVsZW1lbnRba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb25zLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1zICAgICAgICAgPSBrZXkucGFyYW1zICAgICAgICAgfHwgW107XHJcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1Jc0RvbU5vZGUgPSBrZXkucGFyYW1Jc0RvbU5vZGUgfHwgW107XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBrZXkuc2NvcGUgPyBkb2N1bWVudFtrZXkuc2NvcGVdIDogZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1zLmZvckVhY2goKHBhcmFtLCBwYXJhbUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5wYXJhbUlzRG9tTm9kZVtwYXJhbUluZGV4XSAmJiBrZXkucGFyYW1Jc0RvbU5vZGVbcGFyYW1JbmRleF0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnBhcmFtc1twYXJhbUluZGV4XSA9IHRoaXMuZ2V0RWxlbWVudChrZXkucGFyYW1zW3BhcmFtSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBrZXkucmV0dXJuRm5OYW1lID8ga2V5LnJldHVybkZuTmFtZSA6IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0RnVuY3Rpb25zW2ZuTmFtZV0gPSBzY29wZVtrZXkuZm5dKC4uLmtleS5wYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChrZXkucmV0dXJuVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRGdW5jdGlvbnNbZm5OYW1lXSA9IHJldEZ1bmN0aW9uc1tmbk5hbWVdW2tleS5yZXR1cm5WYWx1ZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXRGdW5jdGlvbnNba2V5XSA9IGVsZW1lbnRba2V5XSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldFN0eWxlc1trZXldID0gZWxlbWVudC5zdHlsZVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogcmV0QXR0cmlidXRlcyxcclxuICAgICAgICAgICAgZnVuY3Rpb25zIDogcmV0RnVuY3Rpb25zLFxyXG4gICAgICAgICAgICBzdHlsZXMgICAgOiByZXRTdHlsZXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb25TY3JvbGxJbnRvVmlldyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gdGhpcy5nZXRFbGVtZW50KGRhdGEudm5vZGVJZCksXHJcbiAgICAgICAgICAgIGVsICAgICAgID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtbGlzdC1oZWFkZXI9XCInICsgZGF0YS50ZXh0ICsgJ1wiXScpO1xyXG5cclxuICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmlvdXNTaWJsaW5nLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIGJsb2NrICAgOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgaW5saW5lICA6ICduZWFyZXN0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHJlYWQoZGF0YSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBkYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmJlaGF2aW9yPSdzbW9vdGgnXVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmJsb2NrPSdzdGFydCddXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuaW5saW5lPSduZWFyZXN0J11cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbEludG9WaWV3KGRhdGEpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgbm9kZS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogZGF0YS5iZWhhdmlvciB8fCAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIGJsb2NrICAgOiBkYXRhLmJsb2NrICAgIHx8ICdzdGFydCcsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmUgIDogZGF0YS5pbmxpbmUgICB8fCAnbmVhcmVzdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5iZWhhdmlvcj0nc21vb3RoJ11cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5vZmZzZXQ9MzRdXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUb1RhYmxlUm93KGRhdGEpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTsgLy8gdHIgdGFnXHJcblxyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZU5vZGUgICA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlck5vZGUgPSB0YWJsZU5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgIHRhYmxlVG9wICAgID0gdGFibGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgICAgICAgICB3cmFwcGVyTm9kZS5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICB0b3AgICAgIDogdG9wIC0gdGFibGVUb3AgLSAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0JykgPyBkYXRhLm9mZnNldCA6IDM0KSxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBkYXRhLmJlaGF2aW9yIHx8ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RhdGEuc3RhcnQ9MF1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS5lbmQ9OTk5OTldXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxyXG4gICAgICovXHJcbiAgICBzZWxlY3ROb2RlKGRhdGEpIHtcclxuICAgICAgICBsZXQgbm9kZSAgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCksXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gTmVvLmlzTnVtYmVyKGRhdGEuc3RhcnQpIHx8IDAsXHJcbiAgICAgICAgICAgIGVuZCAgID0gTmVvLmlzTnVtYmVyKGRhdGEuZW5kKSAgIHx8IDk5OTk5O1xyXG5cclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBub2RlLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICBub2RlLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5iZWhhdmlvcj0nc21vb3RoJ10gLy8gYXV0byBvciBzbW9vdGhcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5sZWZ0PTBdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEudG9wPTBdXHJcbiAgICAgKi9cclxuICAgIHdpbmRvd1Njcm9sbFRvKGRhdGEpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICBiZWhhdmlvcjogZGF0YS5iZWhhdmlvciB8fCAnc21vb3RoJyxcclxuICAgICAgICAgICAgbGVmdCAgICA6IGRhdGEubGVmdCAgICAgfHwgMCxcclxuICAgICAgICAgICAgdG9wICAgICA6IGRhdGEudG9wICAgICAgfHwgMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB3cml0ZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciAgID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEucGFyZW50SWQpLFxyXG4gICAgICAgICAgICBjb3VudENoaWxkcyA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGluZGV4ICAgICAgID0gZGF0YS5wYXJlbnRJbmRleCxcclxuICAgICAgICAgICAgaHRtbCAgICAgICAgPSBkYXRhLmh0bWwgfHwgZGF0YS5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wYXJlbnRJbmRleCB8fCBjb3VudENoaWxkcyA8IDEpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRzID4gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGh0bWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkcmVuW2NvdW50Q2hpbGRzIC0gMV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEb21BY2Nlc3MpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShEb21BY2Nlc3MpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xyXG5cclxuY29uc3QgZ2xvYmFsRG9tRXZlbnRzID0gW1xyXG4gICAge25hbWU6ICdjaGFuZ2UnLCAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxyXG4gICAge25hbWU6ICdjbGljaycsICAgICAgIGhhbmRsZXI6ICdvbkNsaWNrJ30sXHJcbiAgICB7bmFtZTogJ2NvbnRleHRtZW51JywgaGFuZGxlcjogJ29uQ29udGV4dE1lbnUnfSxcclxuICAgIHtuYW1lOiAnZm9jdXNpbicsICAgICBoYW5kbGVyOiAnb25Gb2N1c0luJ30sXHJcbiAgICB7bmFtZTogJ2ZvY3Vzb3V0JywgICAgaGFuZGxlcjogJ29uRm9jdXNPdXQnfSxcclxuICAgIHtuYW1lOiAnaW5wdXQnLCAgICAgICBoYW5kbGVyOiAnb25DaGFuZ2UnfSxcclxuICAgIHtuYW1lOiAna2V5ZG93bicsICAgICBoYW5kbGVyOiAnb25LZXlEb3duJ30sXHJcbiAgICB7bmFtZTogJ2tleXVwJywgICAgICAgaGFuZGxlcjogJ29uS2V5VXAnfSxcclxuICAgIHtuYW1lOiAnbW91c2VlbnRlcicsICBoYW5kbGVyOiAnb25Nb3VzZUVudGVyJywgb3B0aW9uczoge2NhcHR1cmU6IHRydWV9fSxcclxuICAgIHtuYW1lOiAnbW91c2VsZWF2ZScsICBoYW5kbGVyOiAnb25Nb3VzZUxlYXZlJywgb3B0aW9uczoge2NhcHR1cmU6IHRydWV9fSxcclxuICAgIHtuYW1lOiAnd2hlZWwnLCAgICAgICBoYW5kbGVyOiAnb25XaGVlbCcsICAgICAgb3B0aW9uczoge3Bhc3NpdmU6IGZhbHNlfX1cclxuXTtcclxuXHJcbi8vIHdoZWVsIGV2ZW50cyBmaXJlIHZlcnkgb2Z0ZW4sIHNvIHdlIGxpbWl0IHRoZSB0YXJnZXRzIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHBvc3QgbWVzc2FnZXMgZnJvbSBtYWluIHRvIHRoZSBhcHAgd29ya2VyXHJcbmNvbnN0IGdsb2JhbFdoZWVsVGFyZ2V0cyA9IFtcclxuICAgICduZW8tY2lyY2xlLWNvbXBvbmVudCcsXHJcbiAgICAnbmVvLWRhdGVzZWxlY3RvcicsXHJcbiAgICAnbmVvLWdhbGxlcnknLFxyXG4gICAgJ25lby1oZWxpeCdcclxuXTtcclxuXHJcbi8vIHNlcGFyYXRlZCBmcm9tIGdsb2JhbFdoZWVsVGFyZ2V0cyA9PiBwZXJmb3JtYW5jZVxyXG5jb25zdCBnbG9iYWxXaGVlbFRhcmdldHNCdWZmZXIgPSB7XHJcbiAgICAnbmVvLWRhdGVzZWxlY3Rvcic6IDMwMCAvLyBidWZmZXIgaW4gbXNcclxufTtcclxuXHJcbmNvbnN0IGxhc3RXaGVlbEV2ZW50ID0ge1xyXG4gICAgZGF0ZSAgOiBudWxsLFxyXG4gICAgdGFyZ2V0OiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBwcmV2ZW50Q2xpY2tUYXJnZXRzICAgICAgID0gW10sXHJcbiAgICAgIHByZXZlbnRDb250ZXh0bWVudVRhcmdldHMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLm1haW4uRG9tRXZlbnRzXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgRG9tRXZlbnRzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLkRvbUV2ZW50cydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLkRvbUV2ZW50cycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsnYWRkRG9tTGlzdGVuZXInXX1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbW90ZToge1xyXG4gICAgICAgICAgICBhcHA6IFtcclxuICAgICAgICAgICAgICAgICdhZGREb21MaXN0ZW5lcicsXHJcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZC5iaW5kKG1lKSk7XHJcbiAgICAgICAgd2luZG93ICAuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICAgICAgIG1lLm9uSGFzaENoYW5nZSAgICAgIC5iaW5kKG1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqL1xyXG4gICAgYWRkRG9tTGlzdGVuZXIoZGF0YSkge1xyXG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gPSBkYXRhLmV2ZW50cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGV2ZW50LCBpZCwgdGFyZ2V0Tm9kZTtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBldmVudCA9IGRhdGEuZXZlbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZVtldmVudC5oYW5kbGVyXSkge1xyXG4gICAgICAgICAgICAgICAgbWVbZXZlbnQuaGFuZGxlcl0gPSBOZW8uZW1wdHlGbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWQgPSBldmVudC52bm9kZUlkIHx8IGRhdGEudm5vZGVJZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2RvY3VtZW50LmJvZHknKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBtZVtldmVudC5oYW5kbGVyXS5iaW5kKG1lKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcclxuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcclxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGdsb2JhbERvbUV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50Lm5hbWUsIG1lW2V2ZW50LmhhbmRsZXJdLmJpbmQobWUpLCBldmVudC5vcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvY2FsIGRvbUV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgZG9tRXZlbnRMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQsXHJcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ2RvbUV2ZW50JyxcclxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnQudHlwZSxcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoIDogKGV2ZW50LnBhdGggfHwgZXZlbnQuY29tcG9zZWRQYXRoKCkpLm1hcChlID0+IGUuaWQpLCAvLyBGRiBkb2VzIG5vdCBzdXBwb3J0IGNvbXBvc2VkUGF0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RvbUV2ZW50TGlzdGVuZXInLCBldmVudC50eXBlLCB0YXJnZXQuaWQsIHRhcmdldC52YWx1ZSwgZXZlbnQpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgICAgICAgICBtZS5kcmFnRWxlbWVudElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICAgICAgaWYgKG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlIHRhcmdldCBhbmQgc291cmNlIHRvIGJlIHRoZSBzYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgICAgICAgICAgIGlmIChtZS5kcmFnRWxlbWVudElkID09PSB0YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZSB0YXJnZXQgYW5kIHNvdXJjZSB0byBiZSB0aGUgc2FtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgICAgICAgICAgIG1lLm9uRHJhZ092ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICAgICAgICAgICAgbWUuZHJhZ0VsZW1lbnRJZCA9IHRhcmdldC5pZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkcm9wJzpcclxuICAgICAgICAgICAgICAgIGlmICghbWUuZHJhZ0VsZW1lbnRJZCB8fCB0aGlzLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZHJvcCBmaXJlcyB0d2ljZSBieSBkZWZhdWx0ICYgZHJvcCBzaG91bGQgbm90IHRyaWdnZXIgb24gdGhlIGRyYWcgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wcyB0aGUgYnJvd3NlciBmcm9tIHJlZGlyZWN0aW5nLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5kYXRhLnNyY0lkID0gbWUuZHJhZ0VsZW1lbnRJZDtcclxuICAgICAgICAgICAgICAgIG1lLmRyYWdFbGVtZW50SWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXZlbnREYXRhKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpOyAvLyBGRiBkb2VzIG5vdCBzdXBwb3J0IGNvbXBvc2VkUGF0aCgpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhdGggICAgIDogcGF0aC5tYXAoZSA9PiB0aGlzLmdldFRhcmdldERhdGEoZSkpLFxyXG4gICAgICAgICAgICB0YXJnZXQgICA6IHRoaXMuZ2V0VGFyZ2V0RGF0YShldmVudC50YXJnZXQpLFxyXG4gICAgICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcCxcclxuICAgICAgICAgICAgdHlwZSAgICAgOiBldmVudC50eXBlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXlib2FyZEV2ZW50RGF0YShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHthbHRLZXksIGNvZGUsIGN0cmxLZXksIGtleSwga2V5Q29kZSwgbWV0YUtleSwgc2hpZnRLZXl9ID0gZXZlbnQ7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcclxuICAgICAgICAgICAgYWx0S2V5ICA6IGFsdEtleSxcclxuICAgICAgICAgICAgY29kZSAgICA6IGNvZGUsXHJcbiAgICAgICAgICAgIGN0cmxLZXkgOiBjdHJsS2V5LFxyXG4gICAgICAgICAgICBrZXkgICAgIDoga2V5LFxyXG4gICAgICAgICAgICBrZXlDb2RlIDoga2V5Q29kZSxcclxuICAgICAgICAgICAgbWV0YUtleSA6IG1ldGFLZXksXHJcbiAgICAgICAgICAgIHNoaWZ0S2V5OiBzaGlmdEtleVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7YWx0S2V5LCBjbGllbnRYLCBjbGllbnRZLCBjdHJsS2V5LCBtZXRhS2V5LCBvZmZzZXRYLCBvZmZzZXRZLCBwYWdlWCwgcGFnZVksIHNjcmVlblgsIHNjcmVlblksIHNoaWZ0S2V5fSA9IGV2ZW50O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXHJcbiAgICAgICAgICAgIGFsdEtleSAgOiBhbHRLZXksXHJcbiAgICAgICAgICAgIGNsaWVudFggOiBjbGllbnRYLFxyXG4gICAgICAgICAgICBjbGllbnRZIDogY2xpZW50WSxcclxuICAgICAgICAgICAgY3RybEtleSA6IGN0cmxLZXksXHJcbiAgICAgICAgICAgIG1ldGFLZXkgOiBtZXRhS2V5LFxyXG4gICAgICAgICAgICBvZmZzZXRYIDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgb2Zmc2V0WSA6IG9mZnNldFksXHJcbiAgICAgICAgICAgIHBhZ2VYICAgOiBwYWdlWCxcclxuICAgICAgICAgICAgcGFnZVkgICA6IHBhZ2VZLFxyXG4gICAgICAgICAgICBzY3JlZW5YIDogc2NyZWVuWCxcclxuICAgICAgICAgICAgc2NyZWVuWSA6IHNjcmVlblksXHJcbiAgICAgICAgICAgIHNoaWZ0S2V5OiBzaGlmdEtleVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldFRhcmdldERhdGEobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgICAgOiBub2RlLmNoZWNrZWQsXHJcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudENvdW50OiBub2RlLmNoaWxkRWxlbWVudENvdW50LFxyXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQgICAgIDogbm9kZS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgIGNsaWVudExlZnQgICAgICAgOiBub2RlLmNsaWVudExlZnQsXHJcbiAgICAgICAgICAgIGNsaWVudFRvcCAgICAgICAgOiBub2RlLmNsaWVudFRvcCxcclxuICAgICAgICAgICAgY2xpZW50V2lkdGggICAgICA6IG5vZGUuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBub2RlLmNsYXNzTGlzdCA/IFsuLi5ub2RlLmNsYXNzTGlzdF0gOiBbXSxcclxuICAgICAgICAgICAgZGF0YSAgICAgICAgICAgICA6IHsuLi5ub2RlLmRhdGFzZXR9LFxyXG4gICAgICAgICAgICBkcmFnZ2FibGUgICAgICAgIDogbm9kZS5kcmFnZ2FibGUsXHJcbiAgICAgICAgICAgIGhpZGRlbiAgICAgICAgICAgOiBub2RlLmhpZGRlbixcclxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICA6IG5vZGUuaWQsXHJcbiAgICAgICAgICAgIGluZXJ0ICAgICAgICAgICAgOiBub2RlLmluZXJ0LFxyXG4gICAgICAgICAgICBpc0Nvbm5lY3RlZCAgICAgIDogbm9kZS5pc0Nvbm5lY3RlZCxcclxuICAgICAgICAgICAgaXNDb250ZW50RWRpdGFibGU6IG5vZGUuaXNDb250ZW50RWRpdGFibGUsXHJcbiAgICAgICAgICAgIG5vZGVUeXBlICAgICAgICAgOiBub2RlLm5vZGVUeXBlLFxyXG4gICAgICAgICAgICBvZmZzZXRIZWlnaHQgICAgIDogbm9kZS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIG9mZnNldExlZnQgICAgICAgOiBub2RlLm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIG9mZnNldFRvcCAgICAgICAgOiBub2RlLm9mZnNldFRvcCxcclxuICAgICAgICAgICAgb2Zmc2V0V2lkdGggICAgICA6IG5vZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCAgICAgOiBub2RlLnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdCAgICAgICA6IG5vZGUuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgICAgc2Nyb2xsVG9wICAgICAgICA6IG5vZGUuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCAgICAgIDogbm9kZS5zY3JvbGxXaWR0aCxcclxuICAgICAgICAgICAgc3R5bGUgICAgICAgICAgICA6IG5vZGUuc3R5bGUgJiYgbm9kZS5zdHlsZS5jc3NUZXh0LFxyXG4gICAgICAgICAgICB0YWJJbmRleCAgICAgICAgIDogbm9kZS50YWJJbmRleCxcclxuICAgICAgICAgICAgdGFnTmFtZSAgICAgICAgICA6IG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxyXG4gICAgICAgICAgICB2YWxpZDogZXZlbnQudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSxcclxuICAgICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICovXHJcbiAgICBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xyXG5cclxuICAgICAgICBpZiAobWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDbGlja1RhcmdldHMpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICovXHJcbiAgICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xyXG5cclxuICAgICAgICBpZiAobWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDb250ZXh0bWVudVRhcmdldHMpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgb25Eb21Db250ZW50TG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5maXJlKCdkb21Db250ZW50TG9hZGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG9uRHJhZ092ZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbkRyYWdPdmVyJywgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICovXHJcbiAgICBvbkZvY3VzSW4oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25Gb2N1c091dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc2hTdHJpbmcgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cigxKTtcclxuXHJcbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKCdhcHAnLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiAgICA6ICdoYXNoQ2hhbmdlJyxcclxuICAgICAgICAgICAgaGFzaCAgICAgIDogdGhpcy5wYXJzZUhhc2goaGFzaFN0cmluZyksXHJcbiAgICAgICAgICAgIGhhc2hTdHJpbmc6IGhhc2hTdHJpbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpKTtcclxuXHJcbiAgICAgICAgaWYgKFsnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICovXHJcbiAgICBvbktleVVwKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCksXHJcbiAgICAgICAgICAgIGZyb21FbGVtZW50SWQ6IGV2ZW50LmZyb21FbGVtZW50ICYmIGV2ZW50LmZyb21FbGVtZW50LmlkIHx8IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCksXHJcbiAgICAgICAgICAgIHRvRWxlbWVudElkOiBldmVudC50b0VsZW1lbnQgJiYgZXZlbnQudG9FbGVtZW50LmlkIHx8IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25XaGVlbChldmVudCkge1xyXG4gICAgICAgIGxldCB0YXJnZXRDbHMgICAgID0gdGhpcy50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgZ2xvYmFsV2hlZWxUYXJnZXRzKSxcclxuICAgICAgICAgICAgcHJldmVudFVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Q2xzKSB7XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxXaGVlbFRhcmdldHNCdWZmZXJbdGFyZ2V0Q2xzXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYXN0V2hlZWxFdmVudC5kYXRlICYmIGxhc3RXaGVlbEV2ZW50LnRhcmdldCA9PT0gdGFyZ2V0Q2xzICYmIGRhdGUgLSBsYXN0V2hlZWxFdmVudC5kYXRlIDwgZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyW3RhcmdldENsc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsYXN0V2hlZWxFdmVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlICA6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0Q2xzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBpZiAoIXByZXZlbnRVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtkZWx0YVgsIGRlbHRhWSwgZGVsdGFafSA9IGV2ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWjogZGVsdGFaXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGFtcGxlIGZvciBBcnJheSB2YWx1ZXM6IFwiY2F0ZWdvcmllc1tdPXRlc3QxJmNhdGVnb3JpZXNbXT10ZXN0MlwiXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBwYXJzZUhhc2goc3RyKSB7XHJcbiAgICAgICAgaWYgKHN0ciA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHN0ci5zcGxpdCgnJicpLFxyXG4gICAgICAgICAgICBkYXRhICAgPSB7fSxcclxuICAgICAgICAgICAgaSwga2V5LCBwYXJ0cywgdmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGFydHMgPSBwaWVjZXNbaV0uc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAga2V5ICAgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1tdJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIGtleS5pbmRleE9mKCdbXScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0ucHVzaCh0aGlzLnBhcnNlVmFsdWUodmFsdWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXNlZCBieSBwYXJzZUhhc2ggdG8gY29udmVydCB0b2tlbnMgaW50byBib29sZWFuIG9yIG51bWJlciB0eXBlcyBpZiBuZWVkZWRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58TnVtYmVyfFN0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gcGFyc2VJbnQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5jbHNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm5hbWVcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoZGF0YSkge1xyXG4gICAgICAgIGxldCBwcmV2ZW50QXJyYXk7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmNscykpIHtcclxuICAgICAgICAgICAgZGF0YS5jbHMgPSBbZGF0YS5jbHNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChkYXRhLm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgcHJldmVudEFycmF5ID0gcHJldmVudENsaWNrVGFyZ2V0cztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50QXJyYXkgPSBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNscy5mb3JFYWNoKGNscyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJldmVudEFycmF5LmluY2x1ZGVzKGNscykpIHtcclxuICAgICAgICAgICAgICAgIHByZXZlbnRBcnJheS5wdXNoKGNscyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIHRoZSBwYXJzZWQgZXZlbnQgZGF0YSB0byB0aGUgYXBwIHdvcmtlclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHNlbmRNZXNzYWdlVG9BcHAoZGF0YSkge1xyXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xyXG4gICAgICAgICAgICBhY3Rpb24gICA6ICdkb21FdmVudCcsXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZGF0YS50eXBlLFxyXG4gICAgICAgICAgICBkYXRhICAgICA6IGRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEFycmF5XHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfEJvb2xlYW59IHRhcmdldCBjbHMgaWYgZm91bmQsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICB0ZXN0UGF0aEluY2x1c2lvbihldmVudCwgdGFyZ2V0QXJyYXkpIHtcclxuICAgICAgICBsZXQgY291bnRUYXJnZXRzID0gdGFyZ2V0QXJyYXkubGVuZ3RoLFxyXG4gICAgICAgICAgICBwYXRoICAgICAgICAgPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpLFxyXG4gICAgICAgICAgICBpICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gICAgICAgICAgPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICAgICAgaiwgbm9kZTtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBub2RlID0gcGF0aFtpXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRUYXJnZXRzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyh0YXJnZXRBcnJheVtqXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0QXJyYXlbal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tRXZlbnRzKTtcclxuXHJcbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRG9tRXZlbnRzKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIExvZ2ljIHRvIGFwcGx5IHRoZSBkZWx0YXMgZ2VuZXJhdGVkIGJ5IHZkb20uSGVscGVyIHRvIHRoZSByZWFsIERPTVxyXG4gKiBAY2xhc3MgTmVvLm1haW4ubWl4aW5zLkRlbHRhVXBkYXRlc1xyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIERlbHRhVXBkYXRlcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5taXhpbnMuRGVsdGFVcGRhdGVzJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4ubWl4aW5zLkRlbHRhVXBkYXRlcydcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaWRcclxuICAgICAqL1xyXG4gICAgZHVfZm9jdXNOb2RlKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KGRlbHRhLmlkKS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbm9kZS5jaGlsZHJlbiBjb250YWlucyB0aGUgXCJyZWFsXCIgbm9kZXMgKHRhZ3MpXHJcbiAgICAgKiBub2RlLmNoaWxkTm9kZXMgY29udGFpbnMgdGV4dHMgJiBjb21tZW50cyBhcyBub2RlcyB0b29cclxuICAgICAqIHNpbmNlIGV2ZXJ5IHZ0eXBlOid0ZXh0JyBpcyB3cmFwcGVkIGluc2lkZSBhIGNvbW1lbnQgYmxvY2sgKGFzIGFuIGlkKSxcclxuICAgICAqIHdlIG5lZWQgdGhlIGFtb3VudCBvZiBub2RlcyB3aGljaCBhcmUgbm90IGNvbW1lbnRzIHRvIGdldCB0aGUgXCJyZWFsSW5kZXhcIi5cclxuICAgICAqIGluc2VydEFkamFjZW50SFRNTCgpIGlzIGZhc3RlciB0aGFuIGNyZWF0aW5nIGEgbm9kZSAodGVtcGxhdGUpLCBidXQgb25seSBhdmFpbGFibGVcclxuICAgICAqIGZvciBjaGlsZHJlbiBhbmQgbm90IGZvciBjaGlsZE5vZGVzLlxyXG4gICAgICogSW4gY2FzZSB0aGVyZSBhcmUgbm8gY29tbWVudHMgKD0+IHZ0eXBlOiAndGV4dCcgbm9kZXMpLCB3ZSBzdGljayB0byBpdCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLm91dGVySFRNTFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXHJcbiAgICAgKi9cclxuICAgIGR1X2luc2VydE5vZGUoZGVsdGEpIHtcclxuICAgICAgICBsZXQgaW5kZXggICAgICAgICA9IGRlbHRhLmluZGV4LFxyXG4gICAgICAgICAgICBwYXJlbnROb2RlICAgID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKSxcclxuICAgICAgICAgICAgY291bnRDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICByZWFsSW5kZXggICAgID0gaW5kZXgsXHJcbiAgICAgICAgICAgIGhhc0NvbW1lbnRzICAgPSBmYWxzZSxcclxuICAgICAgICAgICAgbm9kZTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luc2VydE5vZGUnLCBpbmRleCwgY291bnRDaGlsZHJlbiwgZGVsdGEucGFyZW50SWQpO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50Q2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09PSA4KSB7IC8vIGlnbm9yZSBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCByZWFsSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoYXNDb21tZW50cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFzQ29tbWVudHMpIHtcclxuICAgICAgICAgICAgY291bnRDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGRlbHRhLm91dGVySFRNTCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRDaGlsZHJlbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5bY291bnRDaGlsZHJlbiAtIDFdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRlbHRhLm91dGVySFRNTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5odG1sU3RyaW5nVG9FbGVtZW50KGRlbHRhLm91dGVySFRNTCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnRDaGlsZHJlbiA+IDAgJiYgY291bnRDaGlsZHJlbiA+IHJlYWxJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50Tm9kZS5jaGlsZE5vZGVzW3JlYWxJbmRleF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmluZGV4XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcclxuICAgICAqL1xyXG4gICAgZHVfbW92ZU5vZGUoZGVsdGEpIHtcclxuICAgICAgICBsZXQgaW5kZXggICAgICA9IGRlbHRhLmluZGV4LFxyXG4gICAgICAgICAgICBub2RlICAgICAgID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLmlkKSxcclxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+PSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vaW5kZXgrKzsgLy8gdG9kbz86IGluY3JlYXNlIHRoZSBpbmRleCBpbiBjYXNlIHNhbWUgcGFyZW50LCBvbGRJbmRleCA8IG5ld0luZGV4LCBkaXJlY3Qgc3dhcFxyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBwYXJlbnROb2RlLmNoaWxkcmVuW2luZGV4XS5pZCAhPT0gZGVsdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxyXG4gICAgICovXHJcbiAgICBkdV9yZW1vdmVOb2RlKGRlbHRhKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpO1xyXG5cclxuICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdkdV9yZW1vdmVOb2RlOiBkb20gbm9kZSBub3QgZm91bmQgZm9yIGlkJywgZGVsdGEuaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuZnJvbUlkXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS50b0lkXHJcbiAgICAgKi9cclxuICAgIGR1X3JlcGxhY2VDaGlsZChkZWx0YSkge1xyXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcclxuICAgICAgICAgICAgbm9kZSA9IG1lLmdldEVsZW1lbnQoZGVsdGEucGFyZW50SWQpO1xyXG5cclxuICAgICAgICBub2RlLnJlcGxhY2VDaGlsZChtZS5nZXRFbGVtZW50KGRlbHRhLnRvSWQpLCBtZS5nZXRFbGVtZW50KGRlbHRhLmZyb21JZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5hdHRyaWJ1dGVzXVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5jbHNdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlkXVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5pbm5lckhUTUxdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLm91dGVySFRNTF1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuc3R5bGVdXHJcbiAgICAgKi9cclxuICAgIGR1X3VwZGF0ZU5vZGUoZGVsdGEpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShkZWx0YS5pZCk7XHJcblxyXG4gICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2R1X3VwZGF0ZU5vZGU6IG5vZGUgbm90IGZvdW5kIGZvciBpZCcsIGRlbHRhLmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWx0YSkuZm9yRWFjaCgoW3Byb3AsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudm9pZEF0dHJpYnV0ZXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbHVlID09PSAndHJ1ZSc7IC8vIHZub2RlIGF0dHJpYnV0ZSB2YWx1ZXMgZ2V0IGNvbnZlcnRlZCBpbnRvIHN0cmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSAnJzsgLy8gaW5wdXQgZmllbGRzID0+IHBzZXVkbyBhdHRyaWJ1dGUgY2FuIG5vdCBiZSByZW1vdmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLnZhbHVlLmFkZCB8fCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi52YWx1ZS5yZW1vdmUgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbm5lckhUTUwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IHZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdvdXRlckhUTUwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm91dGVySFRNTCA9IGRhdGEub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW3N0eWxlTmFtZV0gPSB2YWx1ZVtzdHlsZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaWRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnZhbHVlXHJcbiAgICAgKi9cclxuICAgIGR1X3VwZGF0ZVZ0ZXh0KGRlbHRhKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5vZGUgICAgICA9IG1lLmdldEVsZW1lbnQoZGVsdGEucGFyZW50SWQpLFxyXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBub2RlLmlubmVySFRNTCxcclxuICAgICAgICAgICAgc3RhcnRUYWcgID0gYDwhLS0gJHtkZWx0YS5pZH0gLS0+YCxcclxuICAgICAgICAgICAgcmVnICAgICAgID0gbmV3IFJlZ0V4cChzdGFydFRhZyArICdbXFxcXHNcXFxcU10qPzwhLS0gXFwvbmVvLXZ0ZXh0IC0tPicpO1xyXG5cclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKHJlZywgZGVsdGEudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4ge0NoaWxkTm9kZX1cclxuICAgICAqL1xyXG4gICAgaHRtbFN0cmluZ1RvRWxlbWVudChodG1sKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGRhdGEuZGVsdGFzXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLm9yaWdpbj0nYXBwJ11cclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGRhdGEpIHtcclxuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgZGVsdGFzID0gZGF0YS5kZWx0YXMsXHJcbiAgICAgICAgICAgIGkgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbjtcclxuXHJcbiAgICAgICAgZGVsdGFzID0gQXJyYXkuaXNBcnJheShkZWx0YXMpID8gZGVsdGFzIDogW2RlbHRhc107XHJcbiAgICAgICAgbGVuICAgID0gZGVsdGFzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG1lLmxvZ0RlbHRhVXBkYXRlcykge1xyXG4gICAgICAgICAgICBtZS5jb3VudERlbHRhcyArPSAoZGF0YS5kZWx0YXMgJiYgZGF0YS5kZWx0YXMubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgICBtZS5jb3VudFVwZGF0ZXMrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSAnICsgbWUuY291bnRVcGRhdGVzLCAndG90YWwgZGVsdGFzICcsIG1lLmNvdW50RGVsdGFzLCBOZW8uY2xvbmUoZGF0YSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0ge1xyXG4gICAgICAgICAgICBmb2N1c05vZGUgICA6IG1lLmR1X2ZvY3VzTm9kZSxcclxuICAgICAgICAgICAgaW5zZXJ0Tm9kZSAgOiBtZS5kdV9pbnNlcnROb2RlLFxyXG4gICAgICAgICAgICBtb3ZlTm9kZSAgICA6IG1lLmR1X21vdmVOb2RlLFxyXG4gICAgICAgICAgICByZW1vdmVOb2RlICA6IG1lLmR1X3JlbW92ZU5vZGUsXHJcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZDogbWUuZHVfcmVwbGFjZUNoaWxkLFxyXG4gICAgICAgICAgICB1cGRhdGVWdGV4dCA6IG1lLmR1X3VwZGF0ZVZ0ZXh0LFxyXG4gICAgICAgICAgICBkZWZhdWx0ICAgICA6IG1lLmR1X3VwZGF0ZU5vZGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIChtYXBbZGVsdGFzW2ldLmFjdGlvbl0gfHwgbWFwWydkZWZhdWx0J10pLmNhbGwobWUsIGRlbHRhc1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4gfHwgJ2FwcCcsIHtcclxuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEZWx0YVVwZGF0ZXMpO1xyXG5cclxuZXhwb3J0IHtEZWx0YVVwZGF0ZXMgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgdmVyc2lvbiBvZiB0aGUgZXhhbXBsZXMgJiBkb2NzIGFwcFxyXG4gKiBAY2xhc3MgTmVvLm1haW4ubWl4aW5zLkdvb2dsZUFuYWx5dGljc1xyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIEdvb2dsZUFuYWx5dGljcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGlucy5Hb29nbGVBbmFseXRpY3MnXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbnMuR29vZ2xlQW5hbHl0aWNzJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbnNlcnRHb29nbGVBbmFseXRpY3NTY3JpcHQoKSB7XHJcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGd0YWcoKSB7XHJcbiAgICAgICAgICAgIGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIGd0YWcoJ2NvbmZpZycsICdVQS0xNTM3MzQ0MDQtMScpO1xyXG5cclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzY3JpcHQsIHtcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIHNyYyAgOiAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0xNTM3MzQ0MDQtMSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhHb29nbGVBbmFseXRpY3MpO1xyXG5cclxuZXhwb3J0IHtHb29nbGVBbmFseXRpY3MgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogUmVxdWlyZWQgZm9yIHRoZSBkb2NzIGFwcCB3aGljaCB1c2VzIGhpZ2hsaWdodC5qcyBmb3IgdGhlIHNvdXJjZSB2aWV3c1xyXG4gKiBAY2xhc3MgTmVvLm1haW4ubWl4aW5zLkhsanNcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBIbGpzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4ubWl4aW5zLkhsanMnXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbnMuSGxqcydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uU3ludGF4SGlnaGxpZ2h0KGRhdGEpIHtcclxuICAgICAgICBpZiAoaGxqcykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudm5vZGVJZCk7XHJcblxyXG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKG5vZGUpO1xyXG4gICAgICAgICAgICBobGpzLmxpbmVOdW1iZXJzQmxvY2sobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4gfHwgJ2FwcCcsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdoaWdobGlnaHQuanMgaXMgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvblN5bnRheEhpZ2hsaWdodEluaXQoZGF0YSkge1xyXG4gICAgICAgIGlmIChobGpzKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZTpub3QoLmhsanMpJyk7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYmxvY2tzLCBobGpzLmhpZ2hsaWdodEJsb2NrKTtcclxuXHJcbiAgICAgICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiB8fCAnYXBwJywge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2hpZ2hsaWdodC5qcyBpcyBub3QgaW5jbHVkZWQgaW5zaWRlIHRoZSBtYWluIHRocmVhZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uU3ludGF4SGlnaGxpZ2h0TGluZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS52bm9kZUlkKSxcclxuICAgICAgICAgICAgY2xzICAgICAgPSAnbmVvLWhpZ2hsaWdodGVkLWxpbmUnLFxyXG4gICAgICAgICAgICBlbDtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuYWRkTGluZSkge1xyXG4gICAgICAgICAgICBlbCA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpbmUtbnVtYmVyPVwiJyArIGRhdGEuYWRkTGluZSArICdcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrICAgOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZSAgOiAnbmVhcmVzdCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZW1vdmVMaW5lKSB7XHJcbiAgICAgICAgICAgIGVsID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtbGluZS1udW1iZXI9XCInICsgZGF0YS5yZW1vdmVMaW5lICsgJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGxqcyk7XHJcblxyXG5leHBvcnQge0hsanMgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQmFzaWMgQ1JVRCBzdXBwb3J0IGZvciB3aW5kb3cubG9jYWxTdG9yYWdlXHJcbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbnMuTG9jYWxTdG9yYWdlXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgTG9jYWxTdG9yYWdlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4ubWl4aW5zLkxvY2FsU3RvcmFnZSdcclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLm1peGlucy5Mb2NhbFN0b3JhZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpdGVtIGludG8gd2luZG93LmxvY2FsU3RvcmFnZVxyXG4gICAgICogVXNlcyB1cGRhdGVMb2NhbFN0b3JhZ2VJdGVtKCkgaW50ZXJuYWxseVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmtleVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMudmFsdWVcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTG9jYWxTdG9yYWdlSXRlbShvcHRzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2VJdGVtKG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gd2luZG93LmxvY2FsU3RvcmFnZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmtleVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95TG9jYWxTdG9yYWdlSXRlbShvcHRzKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9wdHMua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gaXRlbSBmcm9tIHdpbmRvdy5sb2NhbFN0b3JhZ2VcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5rZXlcclxuICAgICAqL1xyXG4gICAgcmVhZExvY2FsU3RvcmFnZUl0ZW0ob3B0cykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleSAgOiBvcHRzLmtleSxcclxuICAgICAgICAgICAgdmFsdWU6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRzLmtleSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkcyBhbiBpdGVtIGZyb20gd2luZG93LmxvY2FsU3RvcmFnZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmtleVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMudmFsdWVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlSXRlbShvcHRzKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdHMua2V5LCBvcHRzLnZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTG9jYWxTdG9yYWdlKTtcclxuXHJcbmV4cG9ydCB7TG9jYWxTdG9yYWdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgbWFya2Rvd24gbWl4aW4gdG8gY29udmVydCBtYXJrZG93biB0byBodG1sIGJ5IHVzaW5nIHNob3dkb3duLmpzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zaG93ZG93bmpzL3Nob3dkb3duXHJcbiAqIHNjcmlwdCB0YWcgd2l0aCB0aGUgbWFya2Rvd24gbGliIGhhcyB0byBiZSBhZGRlZCBiZWZvcmUgdGhlIE1haW4ubWpzIHNjcmlwdCB0YWcgaW4gdGhlIGluZGV4Lmh0bWxcclxuICogPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3Nob3dkb3duQDEuOS4xL2Rpc3Qvc2hvd2Rvd24ubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbnMuTWFya2Rvd25cclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGlucy5NYXJrZG93bidcclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLm1peGlucy5NYXJrZG93bidcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrZG93biB0byBIVE1MIGNvbnZlcnRlclxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1hcmtkb3duIHN0cmluZyB0byBjb252ZXJ0XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBtYXJrZG93blRvSHRtbChtYXJrZG93bikge1xyXG4gICAgICAgIGxldCBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZXIubWFrZUh0bWwobWFya2Rvd24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYXJrZG93bik7XHJcblxyXG5leHBvcnQge01hcmtkb3duIGFzIGRlZmF1bHR9O1xyXG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBSZXF1aXJlZCB3aGVuIHJ1bm5pbmcgTmVvIEFwcHMgaW5zaWRlIHRoZSBTaWVzdGEgYnJvd3NlciBoYXJuZXNzIChpZnJhbWUpXHJcbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbnMuU2llc3RhXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgU2llc3RhIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4ubWl4aW5zLlNpZXN0YSdcclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLm1peGlucy5TaWVzdGEnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFkanVzdFNpZXN0YUVudmlyb25tZW50KCkge1xyXG4gICAgICAgIGxldCBpICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gPSBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHNoZWV0O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25lby1ib2R5JywgJ25lby1ib2R5LXZpZXdwb3J0JywgJ25lby10aGVtZS1kYXJrJyk7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcclxuICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYgJiYgc2hlZXQuaHJlZi5pbmNsdWRlcygnaGlnaGxpZ2h0anMnKSkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXQub3duZXJOb2RlLmlkID0gJ2hsanMtdGhlbWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTaWVzdGEpO1xyXG5cclxuZXhwb3J0IHtTaWVzdGEgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogTG9naWMgdG8gd29yayB3aXRoIHN0eWxlc2hlZXRzLCBlLmcuIGFwcGx5ICYgc3dpdGNoIE5lbyBiYXNlZCB0aGVtZXNcclxuICogQGNsYXNzIE5lby5tYWluLm1peGlucy5TdHlsZXNoZWV0XHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgU3R5bGVzaGVldCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGlucy5TdHlsZXNoZWV0J1xyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4ubWl4aW5zLlN0eWxlc2hlZXQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIGVpdGhlciBuYW1lIGZvciBhIG5lbyB0aGVtZSAoZS5nLiAnbmVvLXRoZW1lLWRhcmsuY3NzJykgb3IgcGFzcyBhIGhyZWZcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbaWRdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2hyZWZdXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVN0eWxlU2hlZXQobmFtZSwgaWQsIGhyZWYpIHtcclxuICAgICAgICBpZiAoIW5hbWUgJiYgIWhyZWYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHlsZVNoZWV0OiB5b3UgbmVlZCB0byBlaXRoZXIgcGFzcyBhIG5hbWUgb3IgYSBocmVmJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpLFxyXG4gICAgICAgICAgICAgIHVybCAgPSBocmVmID8gaHJlZiA6IE5lby5jb25maWcuY3NzUGF0aFxyXG4gICAgICAgICAgICAgICAgICA/IE5lby5jb25maWcuY3NzUGF0aCArIG5hbWVcclxuICAgICAgICAgICAgICAgICAgOiBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ2Rpc3QvJyArIE5lby5jb25maWcuZW52aXJvbm1lbnQgKyAnLycgKyBuYW1lO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKGxpbmssIHtcclxuICAgICAgICAgICAgaHJlZjogdXJsLFxyXG4gICAgICAgICAgICByZWwgOiAnc3R5bGVzaGVldCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0L2NzcydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGxpbmsuaWQgPSBpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRva2VuXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaGFzU3R5bGVTaGVldCh0b2tlbikge1xyXG4gICAgICAgIGxldCBpICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gPSBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHNoZWV0O1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XHJcbiAgICAgICAgICAgIGlmIChzaGVldC5ocmVmICYmIHNoZWV0LmhyZWYuaW5jbHVkZXModG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbnNlcnRDc3NSdWxlcyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmVvRHluYW1pY1N0eWxlU2hlZXQnKSxcclxuICAgICAgICAgICAgaSAgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gICA9IGRhdGEucnVsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0O1xyXG5cclxuICAgICAgICBpZiAoIXN0eWxlRWwpIHtcclxuICAgICAgICAgICAgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgICAgICBzdHlsZUVsLmlkID0gJ25lb0R5bmFtaWNTdHlsZVNoZWV0JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0eWxlU2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShkYXRhLnJ1bGVzW2ldLCBzdHlsZVNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcclxuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcclxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGluc2VydFRoZW1lKCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICB0aGVtZXMgPSBOZW8uY29uZmlnLnRoZW1lcztcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoZW1lcykpIHtcclxuICAgICAgICAgICAgdGhlbWVzID0gW3RoZW1lc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhlbWVzWzBdKTtcclxuXHJcbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlQ3NzNCkge1xyXG4gICAgICAgICAgICBtZS5yZW1vdmVTdHlsZVNoZWV0cyh7XHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlZDogWyduZW8tdGhlbWUtJywgJy1uby1jc3M0LmNzcyddXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoZW1lcy5sZW5ndGggPiAwICYmICFtZS5oYXNTdHlsZVNoZWV0KCduZW8tc3RydWN0dXJlLmNzcycpKSB7XHJcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVTdHlsZVNoZWV0KCduZW8tc3RydWN0dXJlLmNzcycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGVtZXMuZm9yRWFjaCh0aGVtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1N0eWxlU2hlZXQodGhlbWUgKyAnLmNzcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlU3R5bGVTaGVldCh0aGVtZSArICcuY3NzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLnJlbW92ZVN0eWxlU2hlZXRzKHtcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVkOiBbJ25lby1zdHJ1Y3R1cmUuY3NzJ11cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtZS5yZW1vdmVTdHlsZVNoZWV0cyh7XHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlZDogWyduZW8tdGhlbWUtJ10sXHJcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogWyctbm8tY3NzNC5jc3MnXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGVtZXMubGVuZ3RoID4gMCAmJiAhbWUuaGFzU3R5bGVTaGVldCh0aGVtZXNbMF0gKyAnLW5vLWNzczQuY3NzJykpIHtcclxuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVN0eWxlU2hlZXQodGhlbWVzWzBdICsgJy1uby1jc3M0LmNzcycsICduZW8tdGhlbWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb3B0cy5pbmNsdWRlZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb3B0cy5leGNsdWRlZFxyXG4gICAgICovXHJcbiAgICByZW1vdmVTdHlsZVNoZWV0cyhvcHRzKSB7XHJcbiAgICAgICAgbGV0IGkgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgPSBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGluY2x1ZGVkID0gb3B0cy5pbmNsdWRlZCB8fCBbXSxcclxuICAgICAgICAgICAgZXhjbHVkZWQgPSBvcHRzLmluY2x1ZGVkIHx8IFtdLFxyXG4gICAgICAgICAgICBzaGVldCwgcmVtb3ZlU2hlZXQ7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZVNoZWV0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaGVldC5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICBleGNsdWRlZC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGVldC5ocmVmLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZVNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWQuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGVldC5ocmVmLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVTaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlU2hlZXQnLCBzaGVldC5ocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXQub3duZXJOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2hlZXQub3duZXJOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmhyZWZcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXHJcbiAgICAgKi9cclxuICAgIHN3YXBTdHlsZVNoZWV0KGRhdGEpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLmlkKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBkYXRhLmhyZWYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTdHlsZXNoZWV0KTtcclxuXHJcbmV4cG9ydCB7U3R5bGVzaGVldCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgRG9tQWNjZXNzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tQWNjZXNzLm1qcyc7XHJcbmltcG9ydCBEb21FdmVudHMgICAgICAgICAgZnJvbSAnLi4vbWFpbi9Eb21FdmVudHMubWpzJztcclxuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcclxuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyBmcm9tICcuL21peGlucy9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgd29ya2VyIG1hbmFnZXIgbGl2ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZCBhbmQgY3JlYXRlcyB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXIuXHJcbiAqIEFsc28gcmVzcG9uc2libGUgZm9yIHNlbmRpbmcgbWVzc2FnZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWQgdG8gdGhlIGRpZmZlcmVudCB3b3JrZXJzLlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NYW5hZ2VyXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgTWFuYWdlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLk1hbmFnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLk1hbmFnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3dvcmtlci1tYW5hZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICd3b3JrZXItbWFuYWdlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgYmFzZSBwYXRoIGZvciB0aGUgd29ya2VyIGZpbGUgVVJMcywgY2FuIGUuZy4gZ2V0IHNldCBpbnNpZGUgdGhlIGluZGV4Lmh0bWwuXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJhc2VQYXRoPU5lby5jb25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBiYXNlUGF0aDogTmVvLmNvbmZpZy53b3JrZXJCYXNlUGF0aCB8fCAnd29ya2VyLycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1bT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1peGluczogW09ic2VydmFibGUsIFJlbW90ZU1ldGhvZEFjY2Vzc10sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LlNoYXJlZFdvcmtlci5cclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaGFyZWRXb3JrZXJzRW5hYmxlZD1mYWxzZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hhcmVkV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdG8gc3RvcCB0aGUgd29ya2VyIGNvbW11bmljYXRpb24gaW4gY2FzZSB0aGVpciBjcmVhdGlvbiBmYWlsc1xyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0b3BDb21tdW5pY2F0aW9uPWZhbHNlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdG9wQ29tbXVuaWNhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgd2luZG93Lldvcmtlci5cclxuICAgICAgICAgKiBUaGUgbmVvLm1qcyBmcmFtZXdvcmsgaXMgbm90IGFibGUgdG8gcnVuIHdpdGhvdXQgd2ViIHdvcmtlcnMuXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdlYldvcmtlcnNFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyB0aGUgZmlsZU5hbWVzIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJzXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB3b3JrZXJzXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB3b3JrZXJzOiB7XHJcbiAgICAgICAgICAgIGFwcDoge1xyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IE5lby5jb25maWcuaXNFeHBlcmltZW50YWwgPyAnQXBwLm1qcycgIDogTmVvLmNvbmZpZy5hcHBQYXRoXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBOZW8uY29uZmlnLmlzRXhwZXJpbWVudGFsID8gJ0RhdGEubWpzJyA6ICdkYXRhd29ya2VyLmpzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZG9tOiB7XHJcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCA/ICdWRG9tLm1qcycgOiAndmRvbXdvcmtlci5qcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLmRldGVjdEZlYXR1cmVzKCk7XHJcblxyXG4gICAgICAgIGlmICghTmVvLmluc2lkZVdvcmtlcikge1xyXG4gICAgICAgICAgICBtZS5jcmVhdGVXb3JrZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOZW8ud29ya2VySWQgPSAnbWFpbic7XHJcblxyXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XHJcblxyXG4gICAgICAgIG1lLm9uKHtcclxuICAgICAgICAgICAgJ21lc3NhZ2U6YWRkRG9tTGlzdGVuZXInICAgICAgIDoge2ZuOiBEb21FdmVudHMuYWRkRG9tTGlzdGVuZXIsICAgICAgICBzY29wZTogRG9tRXZlbnRzfSxcclxuICAgICAgICAgICAgJ21lc3NhZ2U6YWRkR2xvYmFsRG9tTGlzdGVuZXJzJzoge2ZuOiBEb21FdmVudHMuYWRkR2xvYmFsRG9tTGlzdGVuZXJzLCBzY29wZTogRG9tRXZlbnRzfSxcclxuICAgICAgICAgICAgJ21lc3NhZ2U6aW5zZXJ0Q3NzUnVsZXMnICAgICAgIDoge2ZuOiBEb21BY2Nlc3MuaW5zZXJ0Q3NzUnVsZXMsICAgICAgICBzY29wZTogRG9tQWNjZXNzfSxcclxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVhZERvbScgICAgICAgICAgICAgIDoge2ZuOiBEb21BY2Nlc3Mub25SZWFkRG9tLCAgICAgICAgICAgICBzY29wZTogRG9tQWNjZXNzfSxcclxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVnaXN0ZXJSZW1vdGUnICAgICAgIDoge2ZuOiBtZS5vblJlZ2lzdGVyUmVtb3RlLCAgICAgICAgICAgICBzY29wZTogbWV9LFxyXG4gICAgICAgICAgICAnbWVzc2FnZTpzY3JvbGxJbnRvVmlldycgICAgICAgOiB7Zm46IERvbUFjY2Vzcy5vblNjcm9sbEludG9WaWV3LCAgICAgIHNjb3BlOiBEb21BY2Nlc3N9LFxyXG4gICAgICAgICAgICAnbWVzc2FnZTpzeW50YXhIaWdobGlnaHQnICAgICAgOiB7Zm46IERvbUFjY2Vzcy5vblN5bnRheEhpZ2hsaWdodCwgICAgIHNjb3BlOiBEb21BY2Nlc3N9LFxyXG4gICAgICAgICAgICAnbWVzc2FnZTpzeW50YXhIaWdobGlnaHRJbml0JyAgOiB7Zm46IERvbUFjY2Vzcy5vblN5bnRheEhpZ2hsaWdodEluaXQsIHNjb3BlOiBEb21BY2Nlc3N9LFxyXG4gICAgICAgICAgICAnbWVzc2FnZTpzeW50YXhIaWdobGlnaHRMaW5lJyAgOiB7Zm46IERvbUFjY2Vzcy5vblN5bnRheEhpZ2hsaWdodExpbmUsIHNjb3BlOiBEb21BY2Nlc3N9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBkZXRlY3RGZWF0dXJlcygpIHtcclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XHJcbiAgICAgICAgICAgIG1lLndlYldvcmtlcnNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYiBXb3JrZXJzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LlNoYXJlZFdvcmtlcikge1xyXG4gICAgICAgICAgICBtZS5zaGFyZWRXb3JrZXJzRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFdvcmtlcn0gbmFtZVxyXG4gICAgICogQHJldHVybnMge1dvcmtlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0V29ya2VyKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZSBpbnN0YW5jZW9mIFdvcmtlciA/IG5hbWUgOiB0aGlzLndvcmtlcnNbbmFtZV0ud29ya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHdlYiB3b3JrZXIgdXNpbmcgdGhlIHBhc3NlZCBvcHRpb25zIGFzIHdlbGwgYXMgYWRkaW5nIGVycm9yICYgbWVzc2FnZSBldmVudCBsaXN0ZW5lcnMuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHJldHVybnMge1dvcmtlcn1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlV29ya2VyKG9wdHMpIHtcclxuICAgICAgICBjb25zdCBtZSAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgZmlsZVBhdGggPSAob3B0cy5iYXNlUGF0aCB8fCBtZS5iYXNlUGF0aCkgKyBvcHRzLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICAgIHdvcmtlciAgID0gIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwgPyAvLyB0b2RvOiBzd2l0Y2ggdG8gdGhlIG5ldyBzeW50YXggdG8gY3JlYXRlIGEgd29ya2VyIGZyb20gYSBKUyBtb2R1bGUgb25jZSBicm93c2VycyBhcmUgcmVhZHlcclxuICAgICAgICAgICAgICAgICAgbmV3IFdvcmtlcihmaWxlUGF0aCkgOlxyXG4gICAgICAgICAgICAgICAgICBuZXcgV29ya2VyKGZpbGVQYXRoLCB7dHlwZTogJ21vZHVsZSd9KTtcclxuXHJcbiAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZS5vbldvcmtlck1lc3NhZ2UuYmluZChtZSkpO1xyXG4gICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG1lLm9uV29ya2VyRXJyb3IuYmluZChtZSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gd29ya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbHMgY3JlYXRlV29ya2VyIGZvciBlYWNoIHdvcmtlciBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVdvcmtlcnMoKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBoYXNoICAgID0gbG9jYXRpb24uaGFzaCxcclxuICAgICAgICAgICAgd29ya2VycyA9IE9iamVjdC5lbnRyaWVzKG1lLndvcmtlcnMpLFxyXG4gICAgICAgICAgICBrZXksIHZhbHVlO1xyXG5cclxuICAgICAgICAvLyBwYXNzIHRoZSBpbml0aWFsIGhhc2ggdmFsdWUgYXMgTmVvLmNvbmZpZ3NcclxuICAgICAgICBpZiAoaGFzaCkge1xyXG4gICAgICAgICAgICBOZW8uY29uZmlnLmhhc2ggICAgICAgPSBEb21FdmVudHMucGFyc2VIYXNoKGhhc2guc3Vic3RyKDEpKTtcclxuICAgICAgICAgICAgTmVvLmNvbmZpZy5oYXNoU3RyaW5nID0gaGFzaC5zdWJzdHIoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKFtrZXksIHZhbHVlXSBvZiB3b3JrZXJzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS53b3JrZXIgPSBtZS5jcmVhdGVXb3JrZXIodmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGU7XHJcbiAgICAgICAgICAgICAgICBtZS5zdG9wQ29tbXVuaWNhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2Uoa2V5LCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3Rlck5lb0NvbmZpZycsXHJcbiAgICAgICAgICAgICAgICBkYXRhICA6IE5lby5jb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlciBtZXRob2QgZm9yIHdvcmtlciBlcnJvciBldmVudHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXHJcbiAgICAgKi9cclxuICAgIG9uV29ya2VyRXJyb3IoZSkge1xyXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCkgeyAvLyBzdGFydGluZyBhIHdvcmtlciBmcm9tIGEgSlMgbW9kdWxlIHdpbGwgc2hvdyBKUyBlcnJvcnMgaW4gYSBjb3JyZWN0IHdheVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIEVycm9yOicsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXIgbWV0aG9kIGZvciB3b3JrZXIgbWVzc2FnZSBldmVudHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXHJcbiAgICAgKi9cclxuICAgIG9uV29ya2VyTWVzc2FnZShlKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGRhdGEgICAgICAgICA9IGUuZGF0YSxcclxuICAgICAgICAgICAgZGVsYXlQcm9taXNlID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHByb21pc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0LFxyXG4gICAgICAgICAgICAgcmVwbHlJZFxyXG4gICAgICAgIH0gPSBkYXRhO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFpbjogSW5jb21pbmcgV29ya2VyIG1lc3NhZ2U6ICcgKyBkYXRhLm9yaWdpbiArICc6JyArIGFjdGlvbiwgZGF0YSk7XHJcblxyXG4gICAgICAgIG1lLmZpcmUoJ21lc3NhZ2U6JythY3Rpb24sIGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAocHJvbWlzZSA9IGFjdGlvbiA9PT0gJ3JlcGx5JyAmJiBtZS5wcm9taXNlc1tyZXBseUlkXSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kZXN0aW5hdGlvbiA9PT0gJ21haW4nKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuYXV0b01vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmZpcmUoJ2F1dG9tb3VudCcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheVByb21pc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLnVwZGF0ZVZkb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZmlyZSgndXBkYXRlVmRvbScsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheVByb21pc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRlbGF5UHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUucHJvbWlzZXNbcmVwbHlJZF0uZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGVsYXlQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgbWUucHJvbWlzZXNbcmVwbHlJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZXN0ICE9PSAnbWFpbicgJiYgYWN0aW9uICE9PSAncmVwbHknKSB7XHJcbiAgICAgICAgICAgIG1lLnByb21pc2VNZXNzYWdlKGRlc3QsIGRhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2UocmVzcG9uc2UuZGVzdGluYXRpb24sIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgIDogZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGRlc3QgPT09ICdtYWluJyAmJiBhY3Rpb24gPT09ICdyZW1vdGVNZXRob2QnKSB7XHJcbiAgICAgICAgICAgIG1lLm9uUmVtb3RlTWV0aG9kKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxyXG4gICAgICovXHJcbiAgICBsb2FkQXBwbGljYXRpb24ocGF0aCkge1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcclxuICAgICAgICAgICAgYWN0aW9uICAgICAgIDogJ2xvYWRBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgICAgIHBhdGggICAgICAgICA6IHBhdGgsXHJcbiAgICAgICAgICAgIHJlc291cmNlc1BhdGg6IE5lby5jb25maWcucmVzb3VyY2VzUGF0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIGVhY2ggd29ya2VyIGRlZmluZWQgaW5zaWRlIHRoZSB0aGlzLndvcmtlcnMgY29uZmlnLlxyXG4gICAgICogQHBhcmFtIG1zZ1xyXG4gICAgICovXHJcbiAgICBicm9hZGNhc3QobXNnKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy53b3JrZXJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG5hbWUsIG1zZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcGx5SWRcclxuICAgICAqL1xyXG4gICAgcmVzb2x2ZURvbU9wZXJhdGlvblByb21pc2UocmVwbHlJZCkge1xyXG4gICAgICAgIGlmIChyZXBseUlkKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gdGhpcy5wcm9taXNlc1tyZXBseUlkXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzb2x2ZURvbU9wZXJhdGlvblByb21pc2UnLCByZXBseUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUocHJvbWlzZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb21pc2VzW3JlcGx5SWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSBvciB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxyXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXHJcbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxyXG4gICAgICogQHJldHVybnMge05lby53b3JrZXIuTWVzc2FnZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BDb21tdW5pY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlciA9IHRoaXMuZ2V0V29ya2VyKGRlc3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3b3JrZXIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHNlbmRNZXNzYWdlIGZvciBhIHdvcmtlciB0aGF0IGRvZXMgbm90IGV4aXN0OiAnICsgZGVzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdHMuZGVzdGluYXRpb24gPSBkZXN0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFpbjogU2VuZGluZyBXb3JrZXIgbWVzc2FnZTogJywgbWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSwgdHJhbnNmZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhIG9yIHZkb21cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXHJcbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cclxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xyXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXHJcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcclxuXHJcbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCA6IHJlamVjdCxcclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFuYWdlcik7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKE1hbmFnZXIpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi4vY29yZS9JZEdlbmVyYXRvci5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgd3JhcHBlciBmb3Igd29ya2VyIHBvc3QgbWVzc2FnZXMgc2VudCBiZXR3ZWVuIHRoZSBBcHAsIERhdGEsIFZEb20gd29ya2VyICYgdGhlIG1haW4gdGhyZWFkLlxyXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXHJcbiAqL1xyXG5jbGFzcyBNZXNzYWdlIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpZD1JZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xyXG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xyXG4gICAgICAgIGNvbmZpZy5vcmlnaW4gICAgICA9IGNvbmZpZy5vcmlnaW4gICAgICB8fCBOZW8ud29ya2VySWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbnMgPSBOZW8ubnMoJ05lby53b3JrZXInLCB0cnVlKTtcclxubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XHJcblxyXG5leHBvcnQge01lc3NhZ2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW5zLlJlbW90ZU1ldGhvZEFjY2Vzc1xyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnbWl4aW4tcmVtb3RlLW1ldGhvZC1hY2Nlc3MnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1peGluOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcclxuICAgICAqIEBwYXJhbSBtZXRob2RcclxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9yaWdpbiA9IHJlbW90ZS5vcmlnaW47XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcclxuICAgICAgICAgICAgbGV0IG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgICAgOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdGVNZXRob2QgICA6IG1ldGhvZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxyXG4gICAgICovXHJcbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xyXG4gICAgICAgIGlmIChyZW1vdGUuZGVzdGluYXRpb24gPT09IE5lby53b3JrZXJJZCkge1xyXG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHJlbW90ZS5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICBtZXRob2RzICAgPSByZW1vdGUubWV0aG9kcyxcclxuICAgICAgICAgICAgICAgIHBrZyAgICAgICA9IE5lby5ucyhjbGFzc05hbWUsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBrZ1ttZXRob2RdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09ICdtYWluJykge1xyXG4gICAgICAgICAgICAgICAgbWUuZmlyZSgncmVtb3RlcmVnaXN0ZXJlZCcsIHJlbW90ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xyXG4gICAgICovXHJcbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcclxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcclxuICAgICAgICAgICAgcGtnID0gTmVvLm5zKG1zZy5yZW1vdGVDbGFzc05hbWUpLFxyXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcclxuXHJcbiAgICAgICAgaWYgKCFwa2cpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xyXG5cclxuICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xyXG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIC4uLm1zZy5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIG91dC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlamVjdGVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICByZWplY3QobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICByZXNvbHZlKG1zZywgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xyXG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxyXG4gICAgICAgICAgICBkYXRhICAgOiBkYXRhLFxyXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmVtb3RlTWV0aG9kQWNjZXNzKTtcclxuXHJcbmV4cG9ydCB7UmVtb3RlTWV0aG9kQWNjZXNzIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=