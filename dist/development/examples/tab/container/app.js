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
/******/ 	return __webpack_require__(__webpack_require__.s = "./buildScripts/webpack/entrypoints/examples/tab/Container.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./buildScripts/webpack/entrypoints/examples/tab/Container.mjs":
/*!*********************************************************************!*\
  !*** ./buildScripts/webpack/entrypoints/examples/tab/Container.mjs ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_worker_App_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/worker/App.mjs */ "./src/worker/App.mjs");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../examples/tab/container/app.mjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/***/ }),

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

/***/ "./src/collection/Base.mjs":
/*!*********************************!*\
  !*** ./src/collection/Base.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.mjs */ "./src/collection/Filter.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.mjs */ "./src/core/Logger.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sorter.mjs */ "./src/collection/Sorter.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Util.mjs */ "./src/core/Util.mjs");







const countMutations   = Symbol('countMutations'),
      isFiltered       = Symbol('isFiltered'),
      isSorted         = Symbol('isSorted'),
      silentUpdateMode = Symbol('silentUpdateMode'),
      toAddArray       = Symbol('toAddArray'),
      toRemoveArray    = Symbol('toRemoveArray'),
      updatingIndex    = Symbol('updatingIndex');

/**
 * @class Neo.collection.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='Neo.collection.Base'
         * @private
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @private
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems
         * @private
         */
        allItems: null,
        /**
         * True to sort the collection items when adding / inserting new ones
         * @member {Boolean} autoSort
         */
        autoSort: true,
        /**
         * Use 'primitive' for default filters, use 'advanced' for filters using a filterBy method
         * which need to iterate over other collection items
         * @member {String} filterMode='primitive'
         */
        filterMode: 'primitive',
        /**
         * An Array containing Neo.util.Filter config objects or instances
         * @member {Array} filters_=[]
         */
        filters_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {Array} items_=[]
         */
        items_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {string} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * A map containing the key & reference of each collection item for faster access
         * @member {Map} map_=null
         */
        map_: null,
        /**
         * An internal Array of the sort directions for faster access
         * @member {Array} sortDirections=null
         * @private
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @private
         */
        sortProperties: null,
        /**
         * An Array containing Neo.util.Sorter config objects or instances
         * @member {Array} sorters_=[]
         */
        sorters_: [],
        /**
         * The id of another collection instance to use as this data source
         * @member {String|null} sourceId_=null
         */
        sourceId_: null
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me           = this,
            symbolConfig = {enumerable: false, writable: true};

        Object.defineProperties(me, {
            [countMutations]  : {...symbolConfig, value: false},
            [isFiltered]      : {...symbolConfig, value: false},
            [isSorted]        : {...symbolConfig, value: false},
            [silentUpdateMode]: {...symbolConfig, value: false},
            [toAddArray]      : {...symbolConfig, value: []},
            [toRemoveArray]   : {...symbolConfig, value: []},
            [updatingIndex]   : {...symbolConfig, value: 0}
        });

        if (me.autoSort && me._sorters.length > 0) {
            me.doSort();
        }
    }

    /**
     * Adds one or more items to the end of the collection and returns the new length of the collection.
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    add(item) {
        this.splice(0, null, item);
        return this.getCount();
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetFilters(value, oldValue) {
        let me = this;

        value.forEach(filter => {
            if (filter.listenerApplied === false) {
                filter.on('change', me.onFilterChange, me);
                filter.listenerApplied = true;
            }
        });

        if (oldValue) {
            me.filter();
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetItems(value, oldValue) {
        let me          = this,
            keyProperty = me.keyProperty,
            i           = 0,
            len         = value.length,
            item;

        for (; i < len; i++) {
            item = value[i];
            me.map.set(item[keyProperty], item);
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetSorters(value, oldValue) {
        let me = this;

        me.applySorterConfigs();

        value.forEach(sorter => {
            if (sorter.listenerApplied === false) {
                sorter.on('change', me.onSorterChange, me);
                sorter.listenerApplied = true;
            }
        });

        if (oldValue && me.autoSort) {
            me.doSort();
        }
    }

    /**
     *
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @private
     */
    afterSetSourceId(value, oldValue) {
        if (value) {
            let me     = this,
                source = Neo.get(value);

            me._items = [...source._items];
            me.map    = new Map(source.map); // creates a clone of the original map

            const listenersConfig = {
                mutate: me.onMutate,
                scope : me
            };

            source.on(listenersConfig);

            // console.log('afterSetSourceId', source);

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig); // todo: core.Observable.un needs to support this syntax
            }
        }
    }

    /**
     * Saves the sort property & direction multiplier of each sorter inside 2 arrays for faster access when sorting
     * @private
     */
    applySorterConfigs() {
        let me = this;

        me.sortDirections = [];
        me.sortProperties = [];

        me.sorters.forEach(sorter => {//console.log('forEach', sorter);
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property);
        });
    }

    /**
     *
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @private
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (!(key instanceof _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                if (oldValue) {
                    hasMatch = false;
                    i        = 0;

                    for (; i < len; i++) {
                        if (oldValue[i].operator === (key.operator || '===') &&
                            oldValue[i].property === key.property &&
                            oldValue[i].value    === key.value
                        ) {
                            value[index] = oldValue[i];
                            hasMatch = true;
                            oldValue.splice(i, 1);
                            len--;
                            break;
                        }
                    }
                }

                if (!hasMatch) {
                    value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key);
                }
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (!(key instanceof _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                if (oldValue) {
                    hasMatch = false;
                    i        = 0;

                    for (; i < len; i++) {
                        if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                            value[index] = oldValue[i];
                            hasMatch = true;
                            oldValue.splice(i, 1);
                            len--;
                            break;
                        }
                    }
                }

                if (!hasMatch) {
                    value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], key);
                }
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param opts
     * @private
     */
    cacheUpdate(opts) {
        console.log('cacheUpdate', opts, this[toAddArray]);return;

        let me          = this,
            keyProperty = me.keyProperty,
            index, toAddMap, toRemoveMap;

        if (!me[silentUpdateMode]) {
            toAddMap    = me[toAddArray]   .map(e => e[keyProperty]);
            toRemoveMap = me[toRemoveArray].map(e => e[keyProperty]);

            opts.addedItems.forEach(item => {
                if (index = toRemoveMap.indexOf(item[keyProperty]) > - 1) {
                    me[toRemoveArray].splice(index, 1);
                } else if (toAddMap.indexOf(item[keyProperty]) < 0) {
                    me[toAddArray].push(item);
                }
            });

            opts.removedItems.forEach(item => {
                if (index = toAddMap.indexOf(item[keyProperty]) > - 1) {
                    me[toAddArray].splice(index, 1);
                } else if (toRemoveMap.indexOf(item[keyProperty]) < 0) {
                    me[toRemoveArray].push(item);
                }
            });
        }
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear();
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null;
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null;
    }

    /**
     *
     * @returns {Neo.collection.Base} The cloned collection
     */
    clone() {
        let me      = this,
            config  = Neo.clone(me.originalConfig, true),
            filters = me._filters || [],
            sorters = me._sorters || [];

        delete config.id;
        delete config.filters;
        delete config.items;
        delete config.sorters;

        if (me._items.length > 0) {
            config.items = [...me._items];
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig);
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig);
        });

        return Neo.create(Base, config);
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me.items.splice(0, me._items.length);
        me.map.clear();

        super.destroy();
    }

    /**
     * @private
     */
    doSort() {
        let me                = this,
            items             = me._items,
            sorters           = me.sorters,
            sortDirections    = me.sortDirections,
            sortProperties    = me.sortProperties,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true;
                }

                if (key.useTransformValue) {
                    hasTransformValue = true;
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue;
                        }
                    }

                    return 0;
                });
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index: index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]]);
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]];
                            }
                        }

                        return obj;
                    });
                } else {
                    mappedItems = items;
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i];
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i];
                        }
                    }

                    return 0;
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index];
                    });
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (me[updatingIndex] === 0) {
            me.fire('sort');
        }
    }

    /**
     * Resumes the collection events.
     * If you started an update using the startSilentUpdateMode flag,
     * you must use the endSilentUpdateMode param for this call.
     * Using the endSilentUpdateMode param will not fire a mutation event.
     * @param {Boolean} [endSilentUpdateMode]
     * @see {@link Neo.collection.Base#startUpdate startUpdate}
     */
    endUpdate(endSilentUpdateMode) {
        const me = this;

        if (me[updatingIndex] > 0) {
            me[updatingIndex]--;
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false;
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length);
        }
    }

    /**
     * @private
     */
    filter() {
        let me              = this,
            filters         = me._filters,
            countAllFilters = filters.length,
            countFilters    = 0,
            items           = me.allItems && me.allItems._items || me._items,
            i               = 0,
            countItems      = items.length,
            filteredItems   = [],
            config, isIncluded, item, j, tmpItems;

        for (; i < countAllFilters; i++) {
            if (!filters[i].disabled) {
                countFilters++;
            }
        }

        if (countFilters === 0 && me.allItems) {
            me.clear();

            me.items = [...me.allItems._items];
            me.map.set(...me.allItems.map);
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Base, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                });

                // console.log('child collection', me.allItems);
            }

            me.map.clear();

            if (me.filterMode === 'primitive') {
                // using for loops on purpose -> performance
                for (i = 0; i < countItems; i++) {
                    isIncluded = true;
                    item       = items[i];
                    j          = 0;

                    for (; j < countAllFilters; j++) {
                        if (filters[j].isFiltered(item, items, items)) {
                            isIncluded = false;
                            break;
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item);
                    }
                }

                me._items = filteredItems; // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i]);
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length;
                }

                me.items = filteredItems; // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        me.fire('filter');
    }

    /**
     * Returns all items which match the property and value
     * @param {Object|String} property
     * @param {String|Number} value
     * @returns {Array} Returns an empty Array in case no items are found
     */
    find(property, value) {
        let me               = this,
            items            = [],
            isObjectProperty = Neo.isObject(property),
            matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        me.items.forEach(item => {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (item[key] === value) {
                        matchArray.push(true);
                    }
                });

                if (matchArray.length === propertiesLength) {
                    items.push(item);
                }
            }
            else if (item[property] === value) {
                items.push(item);
            }
        });

        return items;
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} [scope=this] The scope in which the passed function gets executed
     * @param {Number} [start=0] The start index
     * @param {Number} [end=this.getCount()] The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope, start, end) {
        let me    = this,
            items = [],
            i     = start || 0,
            len   = end   || me.getCount();

        scope = scope || me;

        for (; i < len; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i]);
            }
        }

        return items;
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0];
    }

    /**
     * Returns the object associated to the key, or undefined if there is none.
     * @param key
     * @returns {Object|undefined}
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index];
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length;
    }

    /**
     *
     * @return {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @return {Neo.collection.Filter|null}
     */
    getFilter(property) {
        let filters = this.filters || [],
            i       = 0,
            len     = filters.length;

        for (; i < len; i++) {
            if (filters[i].property === property) {
                return filters[i];
            }
        }

        return null;
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item && item[this.keyProperty];
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end);
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId);
    }

    /**
     *
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key);
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty]);
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        return this._items.indexOf(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(key) ? key : this.map.get(key));
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item);
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key));
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Number} the collection count
     */
    insert(index, item) {
        this.splice(index, 0, item);
        return this.getCount();
    }

    /**
     *
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered];
    }

    /**
     *
     * @param {Object} item
     * @returns {boolean}
     * @private
     */
    isFilteredItem(item) {
        let me         = this,
            filters    = me._filters,
            i          = 0,
            len        = filters.length,
            isFiltered = false;

        for (; i < len; i++) {
            if (filters[i].isFiltered(item)) {
                isFiltered = true;
                break;
            }
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted];
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1];
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onMutate(opts) {
        let me = this;

        if (opts.preventBubbleUp) {
            me.preventBubbleUp = true;
        }

        me.splice(null, opts.removedItems, opts.addedItems);

        // console.log('onMutate', me.getCount(), me.id, opts);
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort();
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0];
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount();
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount();
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse();
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0];
    }

    /**
     *
     * @param {function} callback Function to test for each item, taking three parameters:
     * @param {Object}   callback.item The current collection item being processed
     * @param {Number}  [callback.index] The index of the current item being processed
     * @param {Array}   [callback.items] The items array of the collection
     *
     * @param {Object} [scope] Value to use as "this" when executing the callback
     * @returns {boolean} true if the callback function returns a truthy value for any collection item, otherwise false
     */
    some(...args) {
        return this._items.some(...args);
    }

    /**
     * Removes items from and/or adds items to this collection
     * If the toRemoveArray is used, then the index is not used for removing, the entries are found by key and removed from where they are.
     * If index is not passed, toAddArray is appended to the Collection.
     * @param {Number|null} index
     * @param {Number|Array} [removeCountOrToRemoveArray]
     * @param {Array| Object} [toAddArray]
     * @returns {Object} An object containing the addedItems & removedItems arrays
     */
    splice(index, removeCountOrToRemoveArray, toAddArray) {
        let me                 = this,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            keyProperty        = me.keyProperty,
            map                = me.map,
            removedItems       = [],
            removeCountAtIndex = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!index && removeCountAtIndex) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].error(me.id + ': If index is not passed, removeCountAtIndex cannot be used');
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty]);
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key);
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty]);
            });
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item);
                }
            }

            if (addedItems.length > 0) {
                items.splice(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(index) ? index : items.length, 0, ...addedItems);

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort();
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true;
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true);
            }

            delete source.preventBubbleUp;
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++;
        }

        if(me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            });

        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems  : addedItems,
                removedItems: removedItems
            });
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp;
        }

        return {
            addedItems  : addedItems,
            removedItems: removedItems
        };
    }

    /**
     * Prevents the collection from firing events until endUpdate gets called.
     * If you start an update using the startSilentUpdateMode param,
     * the mutation event will not fire after using endUpdate()
     * (you must use the endSilentUpdateMode param for the endUpdate call in case you used
     * startSilentUpdateMode here)
     * @param {Boolean} [startSilentUpdateMode]
     * @see {@link Neo.collection.Base#endUpdate endUpdate}
     */
    startUpdate(startSilentUpdateMode) {
        if (startSilentUpdateMode) {
            this[silentUpdateMode] = true;
        }

        this[updatingIndex]++;
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount();
    }
}

/**
 * The mutate event fires after every splice call (invoked by all methods which change the content of the items array).
 * @event mutate
 * @param {Object[]} addedItems
 * @param {Boolean} preventBubbleUp private
 * @param {Object[]} removedItems
 * @returns {Object}
 */

Neo.applyClassConfig(Base);

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./src/collection/Filter.mjs":
/*!***********************************!*\
  !*** ./src/collection/Filter.mjs ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");



/**
 * @class Neo.collection.Filter
 * @extends Neo.core.Base
 */
class Filter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * Valid values for the operator config:<br>
         * ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
         * @member {String[]} operators
         * @private
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @private
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @private
         */
        ntype: 'filter',
        /**
         * Setting disabled to true will exclude this filter from the collection filtering logic
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * Provide a custom filtering function, has a higher priority than property, operator & value
         * @member {Function|null} filterBy_=null
         */
        filterBy_: null,
        /**
         * True means not filtering out items in case the value is '', null, [] or {}
         * @member {Boolean} includeEmptyValues=false
         */
        includeEmptyValues: false,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @private
         */
        listenerApplied: false,
        /**
         * The operator to filter by (use the combination of property, operator & value)
         * Valid values:
         *
         * == (not recommended)
         * ===
         * != (not recommended)
         * !==
         * <
         * >=
         * >
         * >=
         * like (collectionValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
         * included (expects value to be an array)
         * excluded (expects value to be an array)
         * @member {String} operator='==='
         */
        operator_: '===',
        /**
         * The property to filter by (use the combination of property, operator & value)
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * The scope to use for the filterBy method, in case it is provided. Defaults to this instance.
         * @member {Object|null} scope=null
         */
        scope: null,
        /**
         * The value to filter by (use the combination of property, operator & value)
         * @member {String} value_=null
         */
        value_: null
    }}

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        if (value === false) {
            this.fireChangeEvent(value, oldValue);
        }
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args);
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue;
        }

        return value;
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @private
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator');
    }

    /**
     *
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            me.fire('change', {
                operator: me.operator,
                property: me.property,
                value   : me.value
            });
        }
    }

    /**
     * Checks if a colletion item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this;

        if (me._disabled) {
            return false;
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, item, filteredItems, allItems);
        } else {
            return !Filter[me._operator](item[me._property], me._value);
        }
    }

    static ['=='] (a, b) {return a == b;}
    static ['==='](a, b) {return a === b;}
    static ['!='] (a, b) {return a != b;}
    static ['!=='](a, b) {return a !== b;}
    static ['<']  (a, b) {return a < b;}
    static ['<='] (a, b) {return a <= b;}
    static ['>']  (a, b) {return a > b;}
    static ['>='] (a, b) {return a >= b;}

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0;
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1;
    }

    static ['isDefined'](a, b) {
        return a !== undefined;
    }

    static ['isUndefined'](a, b) {
        return a === undefined;
    }

    static ['like'](a, b) {
        return a.toLowerCase().includes(b.toLowerCase());
    }
}

Neo.applyClassConfig(Filter);

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/collection/Sorter.mjs":
/*!***********************************!*\
  !*** ./src/collection/Sorter.mjs ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");



/**
 * @class Neo.collection.Sorter
 * @extends Neo.core.Base
 */
class Sorter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='Neo.collection.Sorter'
         * @private
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @private
         */
        ntype: 'sorter',
        /**
         * Internal config which mapps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @private
         */
        directionMultiplier: 1,
        /**
         * The sort direction when using a property.
         * @member {String} direction_='ASC'
         */
        direction_: 'ASC',
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {boolean} listenerApplied=false
         * @private
         */
        listenerApplied: false,
        /**
         * The property to sort by.
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * Provide a custom sorting function, has a higher priority than property & direction
         * @member {Function|null} sortBy=null
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         */
        sortBy: null,
        /**
         * True to use the transformValue method for each item (the method can get overridden)
         * @member {Boolean} useTransformValue=true
         * @private
         */
        useTransformValue: true
    }}

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetDirection(value, oldValue) {
        let me = this;

        me.directionMultiplier = value === 'ASC' ? 1 : -1;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetProperty(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * Default sorter function which gets used by collections in case at least one sorter has a real sortBy method
     * @param a
     * @param b
     */
    defaultSortBy(a, b) {
        let me = this;

        a = a[me.property];
        b = b[me.property];

        if (me.useTransformValue) {
            a = me.transformValue(a);
            b = me.transformValue(b);
        }

        if (a > b) {
            return 1 * me.directionMultiplier;
        }

        if (a < b) {
            return -1 * me.directionMultiplier;
        }

        return 0;
    }

    /**
     *
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }

        return value;
    }
}

Neo.applyClassConfig(Sorter);

/* harmony default export */ __webpack_exports__["default"] = (Sorter);

/***/ }),

/***/ "./src/controller/Application.mjs":
/*!****************************************!*\
  !*** ./src/controller/Application.mjs ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/controller/Base.mjs");


/**
 * @class Neo.controller.Application
 * @extends Neo.controller.Base
 */
class Application extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Application'
         * @private
         */
        className: 'Neo.controller.Application',
        /**
         * @member {Boolean} createMainView=true
         */
        createMainView: true,
        /**
         * @member {Neo.component.Base} mainView_=null
         */
        mainView_: null,
        /**
         * @member {String} name='MyApp'
         */
        name: 'MyApp',
        /**
         * @member {String} parentId='document.body'
         */
        parentId: 'document.body',
        /**
         * @member {Boolean} rendered=false
         * @private
         */
        rendered: false,
        /**
         * @member {Boolean} rendering=false
         * @private
         */
        rendering: false
    }}

    constructor(config) {
        super(config);

        let me = this;

        Neo.apps = Neo.apps || {};

        Neo.apps[me.name] = me;

        if (me.createMainView) {
            me.renderMainView(config);
        }
    }

    renderMainView() {
        let me = this;

        me.mainViewInstance = Neo.create(me.mainView, {
            appName   : me.name,
            autoRender: true,
            parentId  : me.parentId
        });
    }
}

Neo.applyClassConfig(Application);

// shortcut
Neo.app = config => Neo.create(Application, config);



/***/ }),

/***/ "./src/controller/Base.mjs":
/*!*********************************!*\
  !*** ./src/controller/Base.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./src/util/HashHistory.mjs");



/**
 * @class Neo.controller.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Base'
         * @private
         */
        className: 'Neo.controller.Base',
        /**
         * @member {String} ntype='controller'
         * @private
         */
        ntype: 'controller'
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('change', this.onHashChange, this);
    }

    /**
     * Placeholder method which gets triggered when the hash inside the browser url changes
     * @param {Object} value
     * @param {Object} oldValue
     * @param {String} hashString
     */
    onHashChange(value, oldValue, hashString) {

    }
}

Neo.applyClassConfig(Base);



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

/***/ "./src/manager/Base.mjs":
/*!******************************!*\
  !*** ./src/manager/Base.mjs ***!
  \******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./src/collection/Base.mjs");


/**
 * Abstract base class for the other manager classes
 * @class Neo.manager.Base
 * @extends Neo.collection.Base
 */
class Base extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]{
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Base'
         * @private
         */
        className: 'Neo.manager.Base',
        /**
         * @member {String} ntype='base-manager'
         * @private
         */
        ntype: 'base-manager'
    }}

    /**
     *
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return this.get(id);
    }

    /**
     *
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id));
        } else {
            me.push(item);
        }
    }

    /**
     *
     * @param {Object} item
     */
    unregister(item) {
        this.remove(item);
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./src/manager/Component.mjs":
/*!***********************************!*\
  !*** ./src/manager/Component.mjs ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/manager/Base.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VDom.mjs */ "./src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VNode.mjs */ "./src/util/VNode.mjs");




/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Component'
         * @private
         */
        className: 'Neo.manager.Component',
        /**
         * @member {String} ntype='component-manager'
         * @private
         */
        ntype: 'component-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        Neo.getComponent = this.getById.bind(this); // alias
    }

    /**
     * Returns the first component which matches the config-selector moving down the component items tree
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    down(componentId, config) {
        let me          = this,
            component   = me.getById(componentId),
            matchArray  = [],
            returnValue = null,
            i           = 0,
            len         = component.items && component.items.length || 0,
            configArray, configLength;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        configArray.forEach(([key, value]) => {
            if (component.hasOwnProperty(key) && component[key] === value) {
                matchArray.push(true);
            }
        });

        if (matchArray.length === configLength) {
            return component;
        }

        for (; i < len; i++) {
            returnValue = me.down(component.items[i].id, config);
            if (returnValue !== null) {
                return returnValue;
            }
        }

        return null;
    }

    /**
     *
     * @param {Array} path
     * @returns {String|null} the component id in case there is a match
     */
    findParentComponent(path) {
        let me  = this,
            i   = 0,
            len = path && path.length || 0,
            id;

        for (; i < len; i++) {
            id = path[i];

            if (id && me.has(id)) {
                return id;
            }
        }

        return null;
    }

    /**
     * todo: replace all calls of this method to calls using the util.VNode class
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param childIds
     * @returns {Array} childIds
     */
    getChildIds(vnode, childIds) {
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(vnode, childIds);
    }

    /**
     * Returns all child components found inside the vdom tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(component.vnode),
            childComponent;

        childNodes.forEach(node => {
            childComponent = this.get(node);

            if (childComponent) {
                childComponents.push(childComponent);
            }
        });

        return childComponents;
    }

    /**
     * Returns an Array containing the ids of all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {String[]} parentIds
     */
    getParentIds(component) {
        let parentIds = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parentIds.push(component.id);
            }
        }

        return parentIds;
    }

    /**
     *
     * @param {Array} path
     * @returns {Array}
     */
    getParentPath(path) {
        let me            = this,
            componentPath = [],
            i             = 0,
            len           = path && path.length || 0;

        for (; i < len; i++) {
            if (me.has(path[i])) {
                componentPath.push(path[i]);
            }
        }

        return componentPath;
    }

    /**
     * Returns an Array containing all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} parents
     */
    getParents(component) {
        let parents = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parents.push(component);
            }
        }

        return parents;
    }

    /**
     * Returns the first component which matches the config-selector
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    up(componentId, config) {
        let component = this.getById(componentId),
            configArray, configLength, matchArray;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (!component) {
                return null;
            }

            matchArray = [];

            configArray.forEach(([key, value]) => {
                if (component.hasOwnProperty(key) && component[key] === value) {
                    matchArray.push(true);
                }
            });

            if (matchArray.length === configLength) {
                return component;
            }
        }
    }
}

Neo.applyClassConfig(Component);

let instance = Neo.create(Component);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/manager/DomEvent.mjs":
/*!**********************************!*\
  !*** ./src/manager/DomEvent.mjs ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.mjs */ "./src/manager/Component.mjs");
/* harmony import */ var _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Focus.mjs */ "./src/manager/Focus.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./src/util/VDom.mjs");







const eventConfigKeys = [
    'bubble',
    'delegate',
    'local',
    'scope',
    'vnodeId'
];

const globalDomEvents = [
    'change',
    'click',
    'contextmenu',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mouseenter',
    'mouseleave',
    'wheel'
];

/**
 * @class Neo.manager.DomEvent
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvent extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.DomEvent'
         * @private
         */
        className: 'Neo.manager.DomEvent',
        /**
         * @member {String} ntype='dom-event-manager'
         * @private
         */
        ntype: 'dom-event-manager',
        /**
         * @member {Object} listeners={}
         * @private
         */
        items: {},
        /**
         * @member {Object} map={}
         * @private
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} event
     * @private
     */
    fire(event) {
        let me         = this,
            bubble     = true,
            data       = event.data || {},
            eventName  = event.eventName,
            i          = 0,
            listeners  = null,
            pathIds    = data.path.map(e => e.id),
            path       = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len        = path.length,
            component, delegationVdom, delegationTargetId, id, preventFire, targetId;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (!component || component.disabled) {
                break;
            }

            listeners = me.items[id] && me.items[id][eventName];

            if (listeners) {
                // console.log('fire', eventName, data, listeners, path);

                if (Array.isArray(listeners)) {
                    listeners.forEach(listener => {
                        if (listener && listener.fn) {
                            delegationTargetId = me.verifyDelegationPath(listener, data.path);

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    targetId = eventName === 'mouseenter' ? data.fromElementId : data.toElementId;
                                    // console.log(targetId, delegationTargetId);

                                    if (targetId && targetId !== delegationTargetId) {
                                        delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(component.vdom, delegationTargetId);

                                        if (delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(delegationVdom.vdom, targetId)) {
                                            preventFire = true;
                                        }
                                    }
                                }

                                if (!preventFire) {
                                    // console.log(Neo.get(id));
                                    data.component = component;
                                    listener.fn.apply(listener.scope || self, [data]);

                                    if (!listener.bubble) {
                                        bubble = false;
                                    }
                                }
                            }
                        }
                    });
                }
            }

            // we do want to trigger the FocusManager after normal domListeners on these events got executed
            if (eventName === 'focusin' || eventName === 'focusout') {
                _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]['on' + Neo.capitalize(eventName)]({
                    componentPath: path,
                    data         : data
                });

                break;
            }

            if (!bubble) {
                break;
            }
        }
    }

    /**
     *
     * @param config
     * @param scope
     * @returns {Object}
     */
    generateListenerConfig(config, scope) {
        return {
            delegate : config.delegate,
            eventName: config.eventName,
            id       : scope.id,
            opts     : config,
            scope    : config.scope   || scope,
            vnodeId  : config.vnodeId || scope.id
        };
    }

    getEventName(config) {
        let eventName = null;

        if (Neo.isObject(config)) {
            Object.keys(config).forEach(key => {
                if (!eventConfigKeys.includes(key)) {
                    eventName = key;
                }
            });
        }

        return eventName;
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Object}
     */
    getListener(config) {
        let listeners = this.items,
            event;

        if (listeners && listeners[config.id]) {
            event = listeners[config.id][config.eventName];

            if (event) {
                console.log(event);
            }
        }
    }

    /**
     * Mounts local domEvent listeners for a given component
     * @param {Neo.component.Base} component
     * @private
     */
    mountDomListeners(component) {
        let listeners   = component.domListeners,
            localEvents = [],
            event, eventName;

        Object.keys(listeners).forEach(eventId => {
            event     = listeners[eventId];
            eventName = event.eventName;

            if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                console.log('localEvents', eventName);

                localEvents.push({
                    name   : eventName,
                    handler: 'domEventListener',
                    vnodeId: event.vnodeId
                });
            }
        });

        if (localEvents.length > 0) {
            Neo.worker.App.promiseMessage('main', {
                action : 'addDomListener',
                appName: component.appName,
                events : localEvents
            }).then(data => {
                // console.log('added domListener', data);
            }).catch(err => {
                console.log('App: Got error attempting to add a domListener', err);
            });
        }
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Boolean} config.local
     * @param {Number} config.opts
     * @param {Number} config.originalConfig
     * @param {Number} config.priority
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Boolean} true if the listener got registered successfully (false in case it was already there)
     */
    register(config) {
        let alreadyRegistered = false,
            eventName         = config.eventName,
            id                = config.id,
            listeners         = this.items,
            opts              = config.opts,
            scope             = config.scope,
            fnType            = typeof opts,
            fn, listener, listenerConfig, listenerId;

        if (fnType === 'function' || fnType === 'string') {
            fn = opts;
        } else {
            fn    = opts.fn;
            scope = opts.scope || scope;
        }

        if (!listeners[id]) {
            listeners[id] = {};
        }

        if (listeners[id][eventName]) {
            listener = listeners[id][eventName];

            Object.keys(listener).forEach(key => {
                if (
                    listener[key].fn.toString() === fn.toString() && // todo: add a better check
                    listener[key].scope         === scope &&
                    listener[key].delegate      === config.delegate
                ) {
                    alreadyRegistered = true;
                }
            });
        } else {
            listeners[id][eventName] = [];
        }

        if (alreadyRegistered === true) {
            return false;
        }

        // console.log('manager.DomEvent register', eventName, config);

        listenerId = Neo.getId('dom-event');

        config.listenerId = listenerId;

        listenerConfig = {
            bubble        : config.hasOwnProperty('bubble') ? config.bubble : opts.hasOwnProperty('bubble') ? opts.bubble : true,
            delegate      : config.delegate,
            fn            : fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            priority      : config.priority || 1,
            scope         : scope,
            vnodeId       : config.vnodeId
        };

        this.map[listenerId] = listenerConfig;

        listeners[id][eventName].push(listenerConfig);

        listeners[id][eventName].sort((a, b) => a.priority > b.priority);

        // console.log(this.map);

        return true;
    }

    /**
     * @param {Object} config
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @param {Object} scope
     * @returns {Boolean} true in case the listener did exist and got removed
     */
    unregister(config, scope) {
        console.log('unregister', config);
        console.log(this.generateListenerConfig(config, scope));
        return;

        let listener = this.getListener(config);

        if (listener) {
            console.log('listener found', listener);
        }
    }

    updateDomListeners(component, domListeners, oldDomListeners) {
        let me                  = this,
            registeredListeners = me.items[component.id] || {},
            i, len, listeners;

        if (Array.isArray(domListeners)) {
            if (Array.isArray(oldDomListeners)) {
                oldDomListeners.forEach(oldDomListener => {
                    // find & remove no longer existing listeners
                    if (!domListeners.includes(oldDomListener)) {
                        listeners = registeredListeners[me.getEventName(oldDomListener)] || [];
                        i         = 0;
                        len       = listeners.length;

                        for (; i < len; i++) {
                            if (listeners[i].originalConfig === oldDomListener) {
                                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].remove(listeners, listeners[i]);
                                break;
                            }
                        }
                    }
                });
            }

            // add new listeners
            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    if (!eventConfigKeys.includes(key)) {
                        me.register({
                            delegate      : value.delegate || domListener.delegate || '#' + component.id,
                            eventName     : key,
                            id            : component.id,
                            opts          : value,
                            originalConfig: domListener,
                            scope         : domListener.scope || component,
                            vnodeId       : value.vnodeId || component.id
                        });
                    }
                });
            });

            if (component.mounted) {
                me.mountDomListeners(component);
            }
        } else {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Component.domListeners have to be an array', component);
        }
    }

    /**
     * Intended for Neo.controller.Component to replace listener placeholders provided as a string
     * @param {Object} config
     * @param {String} config.componentId
     * @param {Function} config.eventHandlerMethod
     * @param {String} config.eventHandlerName
     * @param {String} config.eventName
     * @param {Neo.core.Base} config.scope
     */
    updateListenerPlaceholder(config) {
        let me             = this,
            items          = me.items[config.componentId] || {},
            eventListeners = items[config.eventName] || [],
            i              = 0,
            len            = eventListeners.length,
            listener;

        for (; i < len; i++) {
            listener = eventListeners[i];

            if (listener.fn === config.eventHandlerName) {
                listener.fn    = config.eventHandlerMethod;
                listener.scope = config.scope;
                break;
            }
        }
    }

    /**
     *
     * @param {Object} listener
     * @param {Array} path
     * @returns {Boolean|String} true in case the delegation string matches the event path
     */
    verifyDelegationPath(listener, path) {
        let delegationArray = listener.delegate.split(' '),
            j               = 0,
            len             = delegationArray.length,
            pathLen         = path.length,
            hasMatch, i, item, isId, targetId;

        for (i=len-1; i >= 0; i--) {
            hasMatch = false;
            item     = delegationArray[i];
            isId     = item.startsWith('#');

            if (isId || item.startsWith('.')) {
                item = item.substr(1);
            }

            for (; j < pathLen; j++) {
                if (
                    (isId && path[j].id === item) ||
                    path[j].cls.includes(item)
                ) {
                    hasMatch = true;
                    targetId = path[j].id;
                    break;
                }
            }

            if (!hasMatch) {
                return false;
            }
        }

        // ensure the delegation path is a child of the owner components root node
        for (; j < pathLen; j++) {
            if (path[j].id === listener.vnodeId) {
                return targetId;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvent);

let instance = Neo.create(DomEvent);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/manager/Focus.mjs":
/*!*******************************!*\
  !*** ./src/manager/Focus.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./src/util/Array.mjs");



/**
 * @class Neo.manager.Focus
 * @extends Neo.core.Base
 * @singleton
 */
class Focus extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Focus'
         * @private
         */
        className: 'Neo.manager.Focus',
        /**
         * @member {String} ntype='focus-manager'
         * @private
         */
        ntype: 'focus-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * An array containing opts objects.
         * opts.componentPath
         * opts.data
         * @member {Object[]} history=[]
         */
        history: [],
        /**
         * The Date object when the last focusin event has occured
         * @member {Date|null} lastFocusInDate=null
         * @private
         */
        lastFocusInDate: null,
        /**
         * The Date object when the last focusout event has occured
         * @member {Date|null} lastFocusInDate=null
         * @private
         */
        lastFocusOutDate: null,
        /**
         * The amount of time for a focusIn to occur after the last focusOut
         * to be threated as a focusmove
         * @member {Number} maxFocusInOutGap=10
         */
        maxFocusInOutGap: 10,
        /**
         * The maximum amount of items stored inside the history array
         * @member {Number} maxHistoryLength=20
         */
        maxHistoryLength: 20
    }}

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    addToHistory(opts) {
        let history = this.history;

        history.unshift(opts);

        if (history.length >= this.maxHistoryLength) {
            history.pop();
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusEnter(opts) {
        this.setComponentFocus(opts, true);
        this.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusMove(opts) {
        let me               = this,
            history          = me.history,
            newComponentPath = opts.componentPath,
            oldComponentPath = history[0].componentPath,
            focusEnter       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(newComponentPath, oldComponentPath),
            focusLeave       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(oldComponentPath, newComponentPath),
            focusMove        = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].intersection(newComponentPath, oldComponentPath),
            component, data;

        me.setComponentFocus({componentPath: focusEnter, data: opts.data}, true);
        me.setComponentFocus({componentPath: focusLeave, data: opts.data}, false);

        focusMove.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                data = {
                    newPath: opts.data.path,
                    oldPath: history[0].data.path
                };

                if (typeof component.onFocusMove === 'function') {
                    component.onFocusMove(data);
                }

                component.fire('focusMove', data);
            }
        });

        me.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    onFocusin(opts) {
        let me = this;

        me.lastFocusInDate = new Date();

        if (me.lastFocusOutDate && me.lastFocusInDate - me.lastFocusOutDate < me.maxFocusInOutGap) {
            me.focusMove(opts);
        } else {
            me.focusEnter(opts);
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    onFocusout(opts) {
        let me = this;

        me.lastFocusOutDate = new Date();

        setTimeout(() => {
            if (me.lastFocusOutDate > me.lastFocusInDate) {
                me.focusLeave(opts);
            }
        }, me.maxFocusInOutGap);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @param {Boolean} containsFocus
     * @private
     */
    setComponentFocus(opts, containsFocus) {
        let component, handler;

        opts.componentPath.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                component.containsFocus = containsFocus;

                handler = containsFocus ? 'onFocusEnter' : 'onFocusLeave';

                if (typeof component[handler] === 'function') {
                    component[handler](opts.data.path);
                }

                component.fire(containsFocus ? 'focusEnter' : 'focusLeave', opts.data.path);
            }
        });
    }
}

Neo.applyClassConfig(Focus);

let instance = Neo.create(Focus);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/manager/Instance.mjs":
/*!**********************************!*\
  !*** ./src/manager/Instance.mjs ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/manager/Base.mjs");
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");



/**
 * @class Neo.manager.Instance
 * @extends Neo.manager.Base
 * @singleton
 */
class Instance extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Instance'
         * @private
         */
        className: 'Neo.manager.Instance',
        /**
         * @member {String} ntype='instance-manager'
         * @private
         */
        ntype: 'instance-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].instanceManagerAvailable = true;

        me.consumeNeoIdMap();

        Neo.get = me.get.bind(me); // alias
    }

    /**
     * Register all ids which got applied to the Neo namespace before this instance got created
     * @private
     */
    consumeNeoIdMap() {
        if (Neo.idMap) {
            this.add(Object.values(Neo.idMap));
            delete Neo.idMap;
        }
    }
}

Neo.applyClassConfig(Instance);

let instance = Neo.create(Instance);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/util/Array.mjs":
/*!****************************!*\
  !*** ./src/util/Array.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.util.Array
 * @extends Neo.core.Base
 */
class NeoArray extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Array'
         * @private
         */
        className: 'Neo.util.Array'
    }}

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static add(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        });
    }

    /**
     * Returns an array of items which are present in array1, but not in array2
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static difference(array1=[], array2=[]) {
        return array1.filter(item => !array2.includes(item));
    }

    /**
     * Checks if the index of item is > -1
     * @param {Array} arr
     * @param {*} item
     */
    static hasItem(arr, item) {
        return arr.includes(item);
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static intersection(array1=[], array2=[]) {
        return array1.filter(item => array2.includes(item));
    }

    /**
     * Returns true if all items of array1 are present in array 2
     * Supports Arrays containing Objects, not Arrays containing Arrays
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Boolean}
     */
    static isEqual(array1=[], array2=[]) {
        let i    = 0,
            len  = array1.length,
            len2 = array2.length,
            hasObject, j, value;

        for (; i < len; i++) {
            value = array1[i];

            if (Neo.isObject(value)) {
                hasObject = false;
                j         = 0;

                for (; j < len2; j++) {
                    if (Neo.isObject(array2[j]) && Neo.util.Object.isEqual(value, array2[j])) {
                        hasObject = true;
                        break;
                    }
                }

                if (!hasObject) {
                    return false;
                }
            }

            else if (!array2.includes(value)) {
                return false;
            }
        }

        return array1.length === array2.length;
    }

    /**
     * Moves an item inside arr from fromIndex to toIndex
     * @param {Array} arr
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    static move(arr, fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return arr;
        }

        if (fromIndex >= arr.length) {
            fromIndex = arr.length - 1;
        }

        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr;
    }

    /**
     * Removes an item or array of items from an array. Only primitive items will get found
     * @param {Array} arr
     * @param {*} items
     */
    static remove(arr, items) {
        let index;

        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            index = arr.indexOf(item);

            if (index > -1) {
                arr.splice(index, 1);
            }
        });
    }

    /**
     * Removes an item from an array in case it does  exist, otherwise adds it
     * @param {Array} arr
     * @param {*} item
     */
    static toggle(arr, item) {
        if (this.hasItem(arr, item)) {
            this.remove(arr, item);
        } else {
            this.add(arr, item);
        }
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1
     * @param {Array} array2
     * @returns {Array}
     */
    static union(array1, array2) {
        let result = [],
            merge  = array1.concat(array2),
            len    = merge.length,
            assoc  = {},
            item;

        while (len--) {
            item = merge[len];

            if (!assoc[item]) {
                result.unshift(item);
                assoc[item] = true;
            }
        }

        return result;
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static unshift(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        });
    }
}

Neo.applyClassConfig(NeoArray);

/* harmony default export */ __webpack_exports__["default"] = (NeoArray);

/***/ }),

/***/ "./src/util/HashHistory.mjs":
/*!**********************************!*\
  !*** ./src/util/HashHistory.mjs ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.util.HashHistory
 * @extends Neo.core.Base
 * @singleton
 */
class HashHistory extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='Neo.util.ClassSystem'
         * @private
         */
        className: 'Neo.util.HashHistory',
        /**
         * @member {String} ntype='hash-history'
         * @private
         */
        ntype: 'hash-history',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Array} stack=[]
         * @private
         */
        stack: []
    }}

    /**
     *
     * @returns {Object}
     */
    first() {
        return this.stack[0];
    }

    /**
     *
     * @returns {Number}
     */
    getCount() {
        return this.stack.length;
    }

    /**
     *
     * @param {Object} hash
     * @param {String} hashString
     */
    push(hash, hashString) {
        let me = this;

        me.stack.unshift(hash);
        me.fire('change', hash, me.stack[1], hashString);
    }
}

Neo.applyClassConfig(HashHistory);

let instance = Neo.create(HashHistory);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/util/VDom.mjs":
/*!***************************!*\
  !*** ./src/util/VDom.mjs ***!
  \***************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.util.VDom
 * @extends Neo.core.Base
 */
class VDom extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VDom'
         * @private
         */
        className: 'Neo.util.VDom'
    }}

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} vdom
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vdom
     */
    static findVdomChild(vdom, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id:opts};

        let child      = null,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vdom.cn && vdom.cn.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vdom.hasOwnProperty(key)) {
                switch(key) {
                    case 'cls':
                        if (typeof value === 'string' && Neo.isArray(vdom[key])) {
                            if (vdom[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vdom[key])) {
                            // todo: either search the vdom array for all keys or compare if the arrays are equal.
                            throw new Error('findVdomChild: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isObject(value) && Neo.isObject(vdom[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vdom[key].hasOwnProperty(styleKey) && vdom[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        } else {
                            throw new Error('findVdomChild: style matching not supported for mixed target & source types (Object VS String)');
                        }
                        break;
                    default:
                        if (vdom[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vdom      : vdom
            };
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                if (vdom.cn[i]) {
                    subChild = VDom.findVdomChild(vdom.cn[i], opts, i, vdom);

                    if (subChild) {
                        child = {
                            index     : subChild.index,
                            parentNode: subChild.parentNode,
                            vdom      : subChild.vdom
                        };
                        break;
                    }
                }
            }
        }

        return child;
    }

    /**
     * Convenience shortcut for findVdomChild(vdom, {flag: flag});
     * @param {Object} vdom
     * @param {String} flag The flag reference specified on the target vdom child node
     * @returns {Object} vdom
     */
    static getByFlag(vdom, flag) {
        let node = VDom.findVdomChild(vdom, {flag: flag});
        return node && node.vdom;
    }

    /**
     * Get the ids of all child nodes of the given vdom tree
     * @param vdom
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vdom, childIds=[]) {
        let childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VDom.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodes(vdom, index) {
        let columnNodes = [];

        if (vdom.cn) {
            vdom.cn.forEach(row => {
                if (row.cn && row.cn[index]) {
                    columnNodes.push(row.cn[index]);
                }
            });
        }

        return columnNodes;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodesIds(vdom, index) {
        return VDom.getColumnNodes(vdom, index).map(e => e.id);
    }

    /**
     *
     * @param {Object} vdom
     * @param {String} flag
     * @param {Array} [matchArray]
     * @return {Array} an array of vdom nodes which match the flag
     */
    static getFlags(vdom, flag, matchArray) {
        if (!matchArray) {
            matchArray = [];

            if (vdom.flag === flag) {
                matchArray.push(vdom);
            }
        }

        const childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.flag === flag) {
                matchArray.push(childNode);
            }

            matchArray = VDom.getFlags(childNode, flag, matchArray);
        });

        return matchArray;
    }

    /**
     * Insert a given nodeToInsert after a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertAfterNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, false);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertBeforeNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, true);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @param {Boolean} insertBefore true inserts the new node at the same index, index+1 otherwise
     * @returns {Boolean}
     */
    static insertNode(vdom, nodeToInsert, targetNodeId, insertBefore) {
        if (Neo.isObject(targetNodeId)) {
            targetNodeId = targetNodeId.id;
        }

        let targetNode = VDom.findVdomChild(vdom, {id: targetNodeId}),
            index;

        if (targetNode) {
            index = insertBefore ? targetNode.index : targetNode.index + 1;
            targetNode.parentNode.cn.splice(index, 0, nodeToInsert);
            return true;
        }

        return false;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} [vdom]
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @returns {Boolean} true in case the node was found & removed
     */
    static removeVdomChild(vdom, opts) {
        let child = VDom.findVdomChild(vdom, opts);

        if (child) {
            child.parentNode.cn.splice(child.index, 1);
            return true;
        }

        return false;
    }

    /**
     * Replaces a child node inside a vdom tree by a given id
     * @param {Object} vdom
     * @param {String} id
     * @param {Object} newChildNode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceVdomChild(vdom, id, newChildNode) {
        let cn  = vdom.cn || [],
            i   = 0,
            len = cn.length,
            childNode;

        if (vdom.id === id) {
            throw new Error('replaceVdomChild: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = cn[i];

            if (childNode.id === id) {
                cn[i] = newChildNode;
                return true;
            }

            if (VDom.replaceVdomChild(childNode, id, newChildNode)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Neo.vdom.Helper will create ids for each vnode, so we need to sync them into the vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {Object} vdom
     */
    static syncVdomIds(vnode, vdom) {
        if (vnode && vdom) {
            let childNodes = vdom.childNodes || vdom.cn,
                cn, i, len;

            if (vnode.id && vnode.id !== vdom.id) {
                vdom.id = vnode.id;
                // console.log('vdom id set to', vnode.id);
            }

            if (childNodes) {
                cn   = childNodes.filter(item => item.removeDom !== true);
                i    = 0;
                len  = cn && cn.length || 0;

                for (; i < len; i++) {
                    if (vnode.childNodes) {
                        VDom.syncVdomIds(vnode.childNodes[i], cn[i]);
                    }
                }
            }
        }
    }
}

Neo.applyClassConfig(VDom);

/* harmony default export */ __webpack_exports__["default"] = (VDom);

/***/ }),

/***/ "./src/util/VNode.mjs":
/*!****************************!*\
  !*** ./src/util/VNode.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.util.VNode
 * @extends Neo.core.Base
 */
class VNode extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VNode'
         * @private
         */
        className: 'Neo.util.VNode'
    }}

    /**
     * Search vnode child nodes by id or opts object for a given vdom tree
     * @param {Object} vnode
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vnode
     */
    static findChildVnode(vnode, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id: opts};

        let child      = null,
            attrMatch  = true,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vnode.childNodes && vnode.childNodes.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vnode.hasOwnProperty(key)) {
                switch(key) {
                    case 'attributes':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([attrKey, attrValue]) => {
                                if (!(vnode[key].hasOwnProperty(attrKey) && vnode[key][attrKey] === attrValue)) {
                                    attrMatch = false;
                                }
                            });

                            if (attrMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    case 'className':
                        if (typeof value === 'string' && Neo.isArray(vnode[key])) {
                            if (vnode[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vnode[key] === 'string') {
                            if (vnode[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vnode[key])) {
                            // todo: either search the vnode array for all keys or compare if the arrays are equal.
                            throw new Error('findChildVnode: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vnode[key].hasOwnProperty(styleKey) && vnode[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    default:
                        if (vnode[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vnode     : vnode
            };
        }

        if (vnode.childNodes) {
            for (; i < len; i++) {
                subChild = VNode.findChildVnode(vnode.childNodes[i], opts, i, vnode);

                if (subChild) {
                    child = {
                        index     : subChild.index,
                        parentNode: subChild.parentNode,
                        vnode     : subChild.vnode
                    };
                    break;
                }
            }
        }

        return child;
    }

    /**
     * Finds a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String|null} id
     * @returns {Object|null} child vnode or null
     */
    static findChildVnodeById(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            return vnode;
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                return childNode
            }

            childNode = VNode.findChildVnodeById(childNode, id);

            if (childNode) {
                return childNode;
            }
        }

        return null;
    }

    /**
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vnode, childIds=[]) {
        let childNodes = vnode && vnode.childNodes || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VNode.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     * Replaces a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @param {Object} newChildVnode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceChildVnode(vnode, id, newChildVnode) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('replaceChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes[i] = newChildVnode;
                return true;
            }

            if (VNode.replaceChildVnode(childNode, id, newChildVnode)) {
                return true;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(VNode);

/* harmony default export */ __webpack_exports__["default"] = (VNode);

/***/ }),

/***/ "./src/worker/App.mjs":
/*!****************************!*\
  !*** ./src/worker/App.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./src/core/_export.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./src/manager/DomEvent.mjs");
/* harmony import */ var _manager_Instance_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/Instance.mjs */ "./src/manager/Instance.mjs");
/* harmony import */ var _controller_Application_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/Application.mjs */ "./src/controller/Application.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./src/util/HashHistory.mjs");








/**
 * The App worker contains most parts of the framework as well as all apps which get created.
 * See the tutorials for further infos.
 * @class Neo.worker.App
 * @extends Neo.worker.Base
 * @singleton
 */
class App extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.App'
         * @private
         */
        className: 'Neo.worker.App',
        /**
         * @member {String} ntype='app-worker'
         * @private
         */
        ntype: 'app-worker',
        /**
         * @member {Object|null} data=null
         * @private
         */
        data: null,
        /**
         * @member {Number} dataRemotesRegistered=0
         * @private
         */
        dataRemotesRegistered: 0,
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Number} vdomRemotesRegistered=0
         * @private
         */
        vdomRemotesRegistered: 0,
        /**
         * @member {String} workerId='app'
         * @private
         */
        workerId: 'app',

        /**
         * todo: App needs to know how many singletons have remotes registered here to ensure a correct starting point
         * @member {Number} countDataRemotes=2
         * @private
         */
        countDataRemotes: 2,
        /**
         * todo: App needs to know how many singletons have remotes registered here to ensure a correct starting point
         * @member {Number} countVdomRemotes=1
         * @private
         */
        countVdomRemotes: 1
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;
        me.on('remoteregistered', me.onRemoteRegistered, me);
    }

    /**
     * Every dom event will get forwarded as a worker message from main and ends up here first
     * @param {Object} data useful event properties, differs for different event types. See Neo.main.DomEvents.
     */
    onDomEvent(data) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].fire(data);
    }

    /**
     * Every URL hash-change will create a post message in main and end up here first.
     * @param {Object} data parsed key-value pairs for each hash value
     */
    onHashChange(data) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(data.hash, data.hashString);
    }

    /**
     * The starting point for apps
     * @param {Object} data
     */
    onLoadApplication(data) {
        let me = this;

        if (data) {
            me.data = data;
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.resourcesPath = data.resourcesPath;
        }

        if (
            me.dataRemotesRegistered === me.countDataRemotes &&
            me.vdomRemotesRegistered === me.countVdomRemotes
        ) {
            if (!_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.isExperimental) {
                _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].onStart();

                if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                    _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hashString);
                }
            } else {
                // todo: in case FF still does not support dynamic imports, remove the dynamic import call for FF dev builds

                import(
                    /* webpackIgnore: true */
                    '../../' + me.data.path).then((module) => {
                        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].onStart();

                        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                            _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hashString);
                        }
                    }
                );
            }
        }
    }

    /**
     * Each registered remote method will trigger this receiver
     * @param {Object} remote
     */
    onRemoteRegistered(remote) {
        let me = this;

        switch(remote.origin) {
            case 'data':
                me.dataRemotesRegistered++;
                break;
            case 'vdom':
                me.vdomRemotesRegistered++;
                break;
        }

        me.onLoadApplication();
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(App);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(App);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/worker/Base.mjs":
/*!*****************************!*\
  !*** ./src/worker/Base.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./src/core/Observable.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.mjs */ "./src/worker/Message.mjs");
/* harmony import */ var _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/RemoteMethodAccess.mjs */ "./src/worker/mixins/RemoteMethodAccess.mjs");





/**
 * The abstract base class for the App, Data & VDom worker
 * @class Neo.worker.Base
 * @extends Neo.core.Base
 * @abstract
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Worker'
         * @private
         */
        className: 'Neo.worker.Worker',
        /**
         * @member {String} ntype='worker'
         * @private
         */
        ntype: 'worker',
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
        /**
         * @member {String|null} workerId=null
         * @private
         */
        workerId: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        super(config);

        let me = this;

        me.promises = {};

        self.addEventListener('message', me.onMessage.bind(me), false);

        Neo.workerId      = me.workerId;
        Neo.currentWorker = me;
    }

    /**
     *
     * @param {Object} e
     */
    onMessage(e) {
        let me      = this,
            data    = e.data,
            action  = data.action,
            replyId = data.replyId,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id);
        }

        if (action !== 'reply') {
            try {
                this['on' + Neo.capitalize(action)](data);
            } catch(err) {
                console.log('error', data, err, e);

                this.reject(data.id, {
                    error : err.message
                });
            }
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data);
            } else {
                promise.resolve(data.data);
            }

            delete me.promises[replyId];
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     *
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise(function(resolve, reject) {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                resolve: resolve,
                reject : reject
            };
        });
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @private
     */
    sendMessage(dest, opts, transfer) {
        opts.destination = dest;

        let message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](opts);

        self.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL3dlYnBhY2svZW50cnlwb2ludHMvZXhhbXBsZXMvdGFiL0NvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovLy8uL3NyYy9OZW8ubWpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsZWN0aW9uL0ZpbHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxlY3Rpb24vU29ydGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSWRHZW5lcmF0b3IubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0xvZ2dlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvX2V4cG9ydC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIvQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlci9Eb21FdmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIvRm9jdXMubWpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VyL0luc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvSGFzaEhpc3RvcnkubWpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1ZEb20ubWpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1ZOb2RlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyL0FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMkM7Ozs7Ozs7Ozs7Ozs7QUNBM0M7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JKRDtBQUFBO0FBQUE7QUFBZ0Q7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiIvZXhhbXBsZXMvdGFiL2NvbnRhaW5lci9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1aWxkU2NyaXB0cy93ZWJwYWNrL2VudHJ5cG9pbnRzL2V4YW1wbGVzL3RhYi9Db250YWluZXIubWpzXCIpO1xuIiwiaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2VyL0FwcC5tanMnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2V4YW1wbGVzL3RhYi9jb250YWluZXIvYXBwLm1qcyc7IiwiY29uc3QgTmVvID0gc2VsZi5OZW8gfHwge307XHJcblxyXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXHJcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gKiBAbmFtZSBjb25maWdcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxyXG4gICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcclxuICAgICAqL1xyXG4gICAgYXBwUGF0aDogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcclxuICAgICAqIEBkZWZhdWx0ICcuLydcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgYmFzZVBhdGg6ICcuLycsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgdGhlbWUgY3NzIGZpbGVzXHJcbiAgICAgKiBTZWUgbWFpbi5taXhpbnMuU3R5bGVzaGVldCA9PiBjcmVhdGVTdHlsZVNoZWV0KClcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnYnVpbGQvJyArIE5lby5jb25maWcuZW52aXJvbm1lbnRcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgW2NvbmZpZy5jc3NQYXRoXVxyXG4gICAgICogQG9wdGlvbmFsXHJcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxyXG4gICAgICovXHJcbiAgICBjc3NQYXRoOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBidWlsZCA9PiBkaXN0IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ1xyXG4gICAgICogVXNlZCBmb3IgYXV0b21hdGljYWxseSBpbmNsdWRpbmcgdGhlIG1hdGNoaW5nIHRoZW1lIGZpbGVzXHJcbiAgICAgKiBAZGVmYXVsdCAncHJvZHVjdGlvbidcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZW52aXJvbm1lbnQ6ICdwcm9kdWN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpZiBOZW8gaXMgcnVubmluZyB3aXRob3V0IGFueSBKUyBidWlsZHNcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5pc0V4cGVyaW1lbnRhbFxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpc0V4cGVyaW1lbnRhbDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cclxuICAgICAqIElmIGNvbmZpZy51c2VDc3M0ID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxyXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxyXG4gICAgICovXHJcbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGlmIHRvIGxvYWQgdGhlIGZpbGVzIG5lZWRlZCBmb3Igd29ya2luZyB3aXRoIGFtQ2hhcnRzXHJcbiAgICAgKiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VBbUNoYXJ0c1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VBbUNoYXJ0czogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaWYgQ1NTNCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUNzczQ6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlXHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHJlc291cmNlc1BhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3Jlc291cmNlcy8nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHdvcmtlckJhc2VQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdzcmMvd29ya2VyLydcclxufSk7XHJcblxyXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XHJcblxyXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcclxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXHJcbiAqIEBtb2R1bGUgTmVvXHJcbiAqIEBzaW5nbGV0b25cclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcclxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcclxuICovXHJcbmxldCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcclxuXHJcbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAvKipcclxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIE9iamVjdFxyXG4gICAgICovXHJcbiAgICBudHlwZU1hcDoge30sXHJcbiAgICAvKipcclxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIGFwcGx5Q2xhc3NDb25maWcoY2xzKSB7XHJcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxyXG4gICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gbnVsbCxcclxuICAgICAgICAgICAgY29uZmlnICAgICAgICA9IHt9LFxyXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXHJcbiAgICAgICAgICAgIHByb3RvcyAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgc3RhdGljQ29uZmlnICA9IHt9LFxyXG4gICAgICAgICAgICBjdG9yO1xyXG5cclxuICAgICAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XHJcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdG9yLmhhc093blByb3BlcnR5KCdjbGFzc0NvbmZpZ0FwcGxpZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gTmVvLmNsb25lKGN0b3Iuc3RhdGljQ29uZmlnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm90b3MudW5zaGlmdChwcm90byk7XHJcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICA/IGJhc2VDZmcgICAgICAgOiBjb25maWc7XHJcbiAgICAgICAgc3RhdGljQ29uZmlnID0gYmFzZVN0YXRpY0NmZyA/IGJhc2VTdGF0aWNDZmcgOiBzdGF0aWNDb25maWc7XHJcblxyXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgbGV0IGNmZyAgICAgICA9IGN0b3IuZ2V0Q29uZmlnICAgICAgICYmIGN0b3IuZ2V0Q29uZmlnKCkgICAgICAgfHwge30sXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgbWl4aW5zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNmZykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaGFzUHJvcGVydHlTZXR0ZXIoZWxlbWVudCwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdudHlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0aWNDZmcgJiYgc3RhdGljQ2ZnLm9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCguLi5jZmcubWl4aW5zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBjZmcubWl4aW5zO1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpO1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgOiBOZW8uY2xvbmUoY29uZmlnLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGlzQ2xhc3MgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjdG9yLmdldFN0YXRpY0NvbmZpZztcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvR2xvYmFsTnMoY2xzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxyXG4gICAgICogQ2FuIGdldCBjYWxsZWQgZm9yIGNsYXNzZXMgYW5kIHNpbmdsZXRvbiBpbnN0YW5jZXNcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xyXG4gICAgICovXHJcbiAgICBhcHBseVRvR2xvYmFsTnMoY2xzKSB7XHJcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLCBuc0FycmF5LCBrZXksIG5zO1xyXG5cclxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3RvLmlzQ2xhc3MgPyBwcm90by5jb25maWcuY2xhc3NOYW1lIDogcHJvdG8uY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBrZXkgICAgID0gbnNBcnJheS5wb3AoKTtcclxuICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcclxuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBtZXRob2RzIGZyb20gb25lIG5hbWVzcGFjZSB0byBhbm90aGVyIG9uZVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIGFsaWFzZXNcclxuICAgICAqIE5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcclxuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcclxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXHJcbiAgICAgKiAgICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcclxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxyXG4gICAgICogICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXHJcbiAgICAgKiAgICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxyXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcclxuICAgICAqICAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcclxuICAgICAqICAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcclxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcclxuICAgICAqICAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXHJcbiAgICAgKiB9LCB0cnVlKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcclxuICAgICAgICBsZXQgZm5OYW1lO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm5OYW1lID0gbmFtZXNwYWNlW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgZGVmYXVsdHMgJiYgdHlwZW9mIGRlZmF1bHRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheXwqfSBvYmpcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fEFycmF5fCp9IHRoZSBjbG9uZWQgaW5wdXRcclxuICAgICAqL1xyXG4gICAgY2xvbmUob2JqLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpIHtcclxuICAgICAgICBsZXQgb3V0O1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoubWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIG9iaiBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZ25vcmVOZW9JbnN0YW5jZXMgPyBvYmogOiB0aGlzLmNsb25lTmVvSW5zdGFuY2Uob2JqKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0ID0ge307XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xyXG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XHJcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoaW5zdGFuY2UuY2xhc3NOYW1lLCBjb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xyXG4gICAgICpcclxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xyXG4gICAgICpcclxuICAgICAqIE5lby5jcmVhdGUoe1xyXG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE5lby5jcmVhdGUoe1xyXG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQnV0dG9uJyxcclxuICAgICAqICAgICBpY29uQ2xzICA6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZXxudWxsfSBUaGUgbmV3IGNsYXNzIGluc3RhbmNlXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGNscywgaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZCAhPT0gY2xhc3NOYW1lLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGFzc05hbWUgJiYgIWNvbmZpZy5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsYXNzIGNyZWF0ZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIGNsYXNzTmFtZSBvciBtb2R1bGUgcHJvcGVydHknLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgPyBjb25maWcuY2xhc3NOYW1lIDogY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcclxuICAgICAgICBpbnN0YW5jZS5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH0sXHJcblxyXG4gICAgZW1wdHlGbigpIHt9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnMoJ05lby5jb21wb25lbnQuQnV0dG9uJywgdHJ1ZSk7XHJcbiAgICAgKiAvLyA9PlxyXG4gICAgICogLy8gc2VsZi5OZW8gPSBzZWxmLk5lbyB8fCB7fTtcclxuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcclxuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b24gPSBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uIHx8IHt9O1xyXG4gICAgICogLy8gcmV0dXJuIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b247XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBzZWxmXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxyXG4gICAgICovXHJcbiAgICBucyhuYW1lcywgY3JlYXRlLCBzY29wZSkge1xyXG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcmV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE5lby5udHlwZSh7XHJcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBudHlwZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX1cclxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cclxuICAgICAqL1xyXG4gICAgbnR5cGUobnR5cGUsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBkZWZpbmVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBudHlwZSBwcm9wZXJ0eS4gJyArIGNvbmZpZy5udHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnR5cGUgPSBjb25maWcubnR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdGFydDogTmVvLmVtcHR5Rm5cclxufSwgTmVvKTtcclxuXHJcbi8qKlxyXG4gKiBMaXN0IG9mIGNsYXNzIHByb3BlcnRpZXMgd2hpY2ggYXJlIG5vdCBzdXBwb3NlZCB0byBnZXQgbWl4ZWQgaW50byBvdGhlciBjbGFzc2VzXHJcbiAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IGlnbm9yZU1peGluID0gW1xyXG4gICAgJ19uYW1lJyxcclxuICAgICdjbGFzc0NvbmZpZ0FwcGxpZWQnLFxyXG4gICAgJ2NsYXNzTmFtZScsXHJcbiAgICAnY29uc3RydWN0b3InLFxyXG4gICAgJ2lzQ2xhc3MnLFxyXG4gICAgJ21peGluJyxcclxuICAgICdudHlwZScsXHJcbiAgICAnb2JzZXJ2YWJsZScsXHJcbiAgICAncmVnaXN0ZXJUb0dsb2JhbE5zJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gISFjbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XHJcbiAgICAgICAgfSwgc2VsZik7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xyXG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm90b1trZXldICYmIHByb3RvW2tleV0uX2Zyb20pIHtcclxuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01peGluIHNldCBtdWx0aXBsZSB0aW1lcyBvciBhbHJlYWR5IGRlZmluZWQgb24gYSBCYXNlIENsYXNzJywgcHJvdG8uY2xhc3NOYW1lLCBtaXhpblByb3RvLmNsYXNzTmFtZSwga2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBwcm90by5jbGFzc05hbWUgKyAnOiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJyArXHJcbiAgICAgICAgICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgcHJvdG9ba2V5XS5fZnJvbSArICcpID0+ICcgK1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xyXG5cclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBtaXhpbnNcclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xyXG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXHJcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXHJcbiAgICAgICAgbWl4aW4sIG1peGluQ2xzLCBtaXhpblByb3RvO1xyXG5cclxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XHJcbiAgICAgICAgbWl4aW4gPSBtaXhpbnNbaV07XHJcblxyXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbi5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIG1peGluIGFuIHVuZGVmaW5lZCBjbGFzczogJyArIG1peGluICsgJywgJyArIGNscy5wcm90b3R5cGUuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluKTtcclxuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluUHJvdG8pLmZvckVhY2gobWl4aW5Qcm9wZXJ0eShjbHMucHJvdG90eXBlLCBtaXhpblByb3RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXM7IC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2VcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBwcm9wZXJ0eSBrZXkgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcclxuICAgIGxldCBkZXNjcmlwdG9yO1xyXG5cclxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcclxuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcclxuICogQHByaXZhdGVcclxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAqL1xyXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVHZXRTZXQocHJvdG8sIGtleSkge1xyXG4gICAgaWYgKGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XHJcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcclxuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcclxuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0gPSB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUdldCA9ICdiZWZvcmVHZXQnICsgTmVvLmNhcGl0YWxpemUoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBtZVtjb25maWdTeW1ib2xdLmhhc093blByb3BlcnR5KGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5ICAgID0gbWVbY29uZmlnU3ltYm9sXVtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc05ld0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVHZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVHZXRdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9rZXkgICAgICA9ICdfJyArIGtleSxcclxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBOZW8uY2FwaXRhbGl6ZShrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVbYmVmb3JlU2V0XSAmJiB0eXBlb2YgbWVbYmVmb3JlU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGV5IGRvbid0IHJldHVybiBhIHZhbHVlLCB0aGF0IG1lYW5zIG5vIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogd2UgY291bGQgY29tcGFyZSBvYmplY3RzICYgYXJyYXlzIGZvciBlcXVhbGl0eVxyXG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lW2FmdGVyU2V0XSAmJiB0eXBlb2YgbWVbYWZ0ZXJTZXRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSk7XHJcbn1cclxuXHJcbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xyXG5cclxuTmVvLmFzc2lnbkRlZmF1bHRzKE5lby5jb25maWcsIERlZmF1bHRDb25maWcpO1xyXG5cclxuZXhwb3J0IHtOZW8gYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvcmVCYXNlICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcbmltcG9ydCBGaWx0ZXIgICAgIGZyb20gJy4vRmlsdGVyLm1qcyc7XHJcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XHJcbmltcG9ydCBTb3J0ZXIgICAgIGZyb20gJy4vU29ydGVyLm1qcyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xyXG5pbXBvcnQgVXRpbCAgICAgICBmcm9tICcuLi9jb3JlL1V0aWwubWpzJztcclxuXHJcbmNvbnN0IGNvdW50TXV0YXRpb25zICAgPSBTeW1ib2woJ2NvdW50TXV0YXRpb25zJyksXHJcbiAgICAgIGlzRmlsdGVyZWQgICAgICAgPSBTeW1ib2woJ2lzRmlsdGVyZWQnKSxcclxuICAgICAgaXNTb3J0ZWQgICAgICAgICA9IFN5bWJvbCgnaXNTb3J0ZWQnKSxcclxuICAgICAgc2lsZW50VXBkYXRlTW9kZSA9IFN5bWJvbCgnc2lsZW50VXBkYXRlTW9kZScpLFxyXG4gICAgICB0b0FkZEFycmF5ICAgICAgID0gU3ltYm9sKCd0b0FkZEFycmF5JyksXHJcbiAgICAgIHRvUmVtb3ZlQXJyYXkgICAgPSBTeW1ib2woJ3RvUmVtb3ZlQXJyYXknKSxcclxuICAgICAgdXBkYXRpbmdJbmRleCAgICA9IFN5bWJvbCgndXBkYXRpbmdJbmRleCcpO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5CYXNlXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLkJhc2UnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5CYXNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb2xsZWN0aW9uJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdjb2xsZWN0aW9uJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIGZpbHRlcmluZyB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIGFsbEl0ZW1zIHdpbGwgYmVjb21lIGEgbmV3IGNvbGxlY3Rpb24gZm9yIHRoZSB1bmZpbHRlcmVkXHJcbiAgICAgICAgICogc3RhdGUsIHVzaW5nIHRoaXMgaWQgYXMgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZFxyXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb2xsZWN0aW9uLkJhc2V8bnVsbH0gYWxsSXRlbXNcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFsbEl0ZW1zOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgdG8gc29ydCB0aGUgY29sbGVjdGlvbiBpdGVtcyB3aGVuIGFkZGluZyAvIGluc2VydGluZyBuZXcgb25lc1xyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Tb3J0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXV0b1NvcnQ6IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXNlICdwcmltaXRpdmUnIGZvciBkZWZhdWx0IGZpbHRlcnMsIHVzZSAnYWR2YW5jZWQnIGZvciBmaWx0ZXJzIHVzaW5nIGEgZmlsdGVyQnkgbWV0aG9kXHJcbiAgICAgICAgICogd2hpY2ggbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgY29sbGVjdGlvbiBpdGVtc1xyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZmlsdGVyTW9kZT0ncHJpbWl0aXZlJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZpbHRlck1vZGU6ICdwcmltaXRpdmUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuRmlsdGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBmaWx0ZXJzXz1bXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZpbHRlcnNfOiBbXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc189W11cclxuICAgICAgICAgKi9cclxuICAgICAgICBpdGVtc186IFtdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXHJcbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBtYXAgY29udGFpbmluZyB0aGUga2V5ICYgcmVmZXJlbmNlIG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtIGZvciBmYXN0ZXIgYWNjZXNzXHJcbiAgICAgICAgICogQG1lbWJlciB7TWFwfSBtYXBfPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBtYXBfOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGludGVybmFsIEFycmF5IG9mIHRoZSBzb3J0IGRpcmVjdGlvbnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydERpcmVjdGlvbnM9bnVsbFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydERpcmVjdGlvbnM6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgcHJvcGVydGllcyBmb3IgZmFzdGVyIGFjY2Vzc1xyXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0UHJvcGVydGllcz1udWxsXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBBcnJheSBjb250YWluaW5nIE5lby51dGlsLlNvcnRlciBjb25maWcgb2JqZWN0cyBvciBpbnN0YW5jZXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3J0ZXJzXzogW10sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGlkIG9mIGFub3RoZXIgY29sbGVjdGlvbiBpbnN0YW5jZSB0byB1c2UgYXMgdGhpcyBkYXRhIHNvdXJjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBzb3VyY2VJZF89bnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNvdXJjZUlkXzogbnVsbFxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBzeW1ib2xDb25maWcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcclxuICAgICAgICAgICAgW2NvdW50TXV0YXRpb25zXSAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxyXG4gICAgICAgICAgICBbaXNGaWx0ZXJlZF0gICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXHJcbiAgICAgICAgICAgIFtpc1NvcnRlZF0gICAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcclxuICAgICAgICAgICAgW3NpbGVudFVwZGF0ZU1vZGVdOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxyXG4gICAgICAgICAgICBbdG9BZGRBcnJheV0gICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBbXX0sXHJcbiAgICAgICAgICAgIFt0b1JlbW92ZUFycmF5XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IFtdfSxcclxuICAgICAgICAgICAgW3VwZGF0aW5nSW5kZXhdICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogMH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1lLmF1dG9Tb3J0ICYmIG1lLl9zb3J0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbWUuZG9Tb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxyXG4gICAgICovXHJcbiAgICBhZGQoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIG51bGwsIGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFsdWUuZm9yRWFjaChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5vbignY2hhbmdlJywgbWUub25GaWx0ZXJDaGFuZ2UsIG1lKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICBtZS5maWx0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXHJcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICAgPSB2YWx1ZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGl0ZW07XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IHZhbHVlW2ldO1xyXG4gICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1ba2V5UHJvcGVydHldLCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldFNvcnRlcnModmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuYXBwbHlTb3J0ZXJDb25maWdzKCk7XHJcblxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcclxuICAgICAgICAgICAgaWYgKHNvcnRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzb3J0ZXIub24oJ2NoYW5nZScsIG1lLm9uU29ydGVyQ2hhbmdlLCBtZSk7XHJcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgJiYgbWUuYXV0b1NvcnQpIHtcclxuICAgICAgICAgICAgbWUuZG9Tb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFmdGVyU2V0U291cmNlSWQodmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBtZS5faXRlbXMgPSBbLi4uc291cmNlLl9pdGVtc107XHJcbiAgICAgICAgICAgIG1lLm1hcCAgICA9IG5ldyBNYXAoc291cmNlLm1hcCk7IC8vIGNyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgbWFwXHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnNDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdGU6IG1lLm9uTXV0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc291cmNlLm9uKGxpc3RlbmVyc0NvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXJTZXRTb3VyY2VJZCcsIHNvdXJjZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlLnVuKGxpc3RlbmVyc0NvbmZpZyk7IC8vIHRvZG86IGNvcmUuT2JzZXJ2YWJsZS51biBuZWVkcyB0byBzdXBwb3J0IHRoaXMgc3ludGF4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlcyB0aGUgc29ydCBwcm9wZXJ0eSAmIGRpcmVjdGlvbiBtdWx0aXBsaWVyIG9mIGVhY2ggc29ydGVyIGluc2lkZSAyIGFycmF5cyBmb3IgZmFzdGVyIGFjY2VzcyB3aGVuIHNvcnRpbmdcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFwcGx5U29ydGVyQ29uZmlncygpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzID0gW107XHJcblxyXG4gICAgICAgIG1lLnNvcnRlcnMuZm9yRWFjaChzb3J0ZXIgPT4gey8vY29uc29sZS5sb2coJ2ZvckVhY2gnLCBzb3J0ZXIpO1xyXG4gICAgICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucy5wdXNoKHNvcnRlci5kaXJlY3Rpb25NdWx0aXBsaWVyKTtcclxuICAgICAgICAgICAgbWUuc29ydFByb3BlcnRpZXMucHVzaChzb3J0ZXIucHJvcGVydHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYmVmb3JlU2V0TWFwKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhdmFsdWUgPyBuZXcgTWFwKCkgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICBoYXNNYXRjaCwgaTtcclxuXHJcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW5zdGFuY2VvZiBTb3J0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgICAgICAgID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWVbaV0ub3BlcmF0b3IgPT09IChrZXkub3BlcmF0b3IgfHwgJz09PScpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS52YWx1ZSAgICA9PT0ga2V5LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKEZpbHRlciwga2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAga2V5LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBiZWZvcmVTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcclxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XHJcblxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluc3RhbmNlb2YgU29ydGVyKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiYgb2xkVmFsdWVbaV0uZGlyZWN0aW9uID09PSBrZXkuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBvbGRWYWx1ZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoU29ydGVyLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xyXG4gICAgICAgICAgICBvbGRWYWx1ZS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb3B0c1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY2FjaGVVcGRhdGUob3B0cykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZVVwZGF0ZScsIG9wdHMsIHRoaXNbdG9BZGRBcnJheV0pO3JldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAga2V5UHJvcGVydHkgPSBtZS5rZXlQcm9wZXJ0eSxcclxuICAgICAgICAgICAgaW5kZXgsIHRvQWRkTWFwLCB0b1JlbW92ZU1hcDtcclxuXHJcbiAgICAgICAgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xyXG4gICAgICAgICAgICB0b0FkZE1hcCAgICA9IG1lW3RvQWRkQXJyYXldICAgLm1hcChlID0+IGVba2V5UHJvcGVydHldKTtcclxuICAgICAgICAgICAgdG9SZW1vdmVNYXAgPSBtZVt0b1JlbW92ZUFycmF5XS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XHJcblxyXG4gICAgICAgICAgICBvcHRzLmFkZGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9BZGRNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBvcHRzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID0gdG9BZGRNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPiAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBhbmQgY2xlYXJzIHRoZSBtYXBcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuX2l0ZW1zLnNwbGljZSgwLCBtZS5nZXRDb3VudCgpKTtcclxuICAgICAgICBtZS5tYXAuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBmaWx0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVzdG9yZU9yaWdpbmFsRmlsdGVycz1mYWxzZV1cclxuICAgICAqL1xyXG4gICAgY2xlYXJGaWx0ZXJzKHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSByZXN0b3JlT3JpZ2luYWxGaWx0ZXJzID8gTmVvLmNsb25lKHRoaXMub3JpZ2luYWxDb25maWcuZmlsdGVycywgdHJ1ZSwgdHJ1ZSkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIGFsbCBjdXJyZW50IHNvcnRlcnMgYW5kIG9wdGlvbmFsbHkgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIG9uZXMgaW4gY2FzZSB0aGV5IGV4aXN0ZWQuXHJcbiAgICAgKiBXaXRob3V0IHJlc3RvcmVJbml0aWFsU3RhdGUgYXMgdHJ1ZSB0aGlzIHdpbGwgbm90IGFmZmVjdCB0aGUgY3VycmVudCBzb3J0aW5nIG9mIHRoaXMgY29sbGVjdGlvbi5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbFNvcnRlcnM9ZmFsc2VdXHJcbiAgICAgKi9cclxuICAgIGNsZWFyU29ydGVycyhyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0ZXJzID0gcmVzdG9yZU9yaWdpbmFsU29ydGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLnNvcnRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gVGhlIGNsb25lZCBjb2xsZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgY29uZmlnICA9IE5lby5jbG9uZShtZS5vcmlnaW5hbENvbmZpZywgdHJ1ZSksXHJcbiAgICAgICAgICAgIGZpbHRlcnMgPSBtZS5fZmlsdGVycyB8fCBbXSxcclxuICAgICAgICAgICAgc29ydGVycyA9IG1lLl9zb3J0ZXJzIHx8IFtdO1xyXG5cclxuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcclxuICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1zO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcclxuXHJcbiAgICAgICAgaWYgKG1lLl9pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pdGVtcyA9IFsuLi5tZS5faXRlbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnLmZpbHRlcnMgPSBbXTtcclxuICAgICAgICBjb25maWcuc29ydGVycyA9IFtdO1xyXG5cclxuICAgICAgICAvLyB0b2RvOiBmaWx0ZXJzICYgc29ydGVycyBzaG91bGQgcHVzaCB0aGVpciBjdXJyZW50IHN0YXRlIGFuZCBub3QgdGhlIG9yaWdpbmFsIG9uZVxyXG5cclxuICAgICAgICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5maWx0ZXJzLnB1c2goZmlsdGVyLm9yaWdpbmFsQ29uZmlnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ydGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNvcnRlcikge1xyXG4gICAgICAgICAgICBjb25maWcuc29ydGVycy5wdXNoKHNvcnRlci5vcmlnaW5hbENvbmZpZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKEJhc2UsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIG1hcCAmIGl0ZW1zIGFycmF5IGJlZm9yZSB0aGUgc3VwZXIgY2FsbFxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5faXRlbXMubGVuZ3RoKTtcclxuICAgICAgICBtZS5tYXAuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZG9Tb3J0KCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxyXG4gICAgICAgICAgICBzb3J0ZXJzICAgICAgICAgICA9IG1lLnNvcnRlcnMsXHJcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zICAgID0gbWUuc29ydERpcmVjdGlvbnMsXHJcbiAgICAgICAgICAgIHNvcnRQcm9wZXJ0aWVzICAgID0gbWUuc29ydFByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIGNvdW50U29ydGVycyAgICAgID0gc29ydFByb3BlcnRpZXMubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIGhhc1NvcnRCeU1ldGhvZCAgID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGksIG1hcHBlZEl0ZW1zLCBvYmosIHNvcnRlciwgc29ydFByb3BlcnR5LCBzb3J0VmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChjb3VudFNvcnRlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgIHNvcnRlcnMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChrZXkudXNlVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhc1NvcnRCeU1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZXIgICAgPSBzb3J0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0VmFsdWUgPSBzb3J0ZXJbc29ydGVyLnNvcnRCeSA/ICdzb3J0QnknIDogJ2RlZmF1bHRTb3J0QnknXShhLCBiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0VmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0I1NvcnRpbmdfd2l0aF9tYXBcclxuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge2luZGV4OiBpbmRleH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydGVyc1tpXS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBzb3J0ZXJzW2ldLnRyYW5zZm9ybVZhbHVlKGl0ZW1bc29ydFByb3BlcnRpZXNbaV1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3NvcnRQcm9wZXJ0aWVzW2ldXSA9IGl0ZW1bc29ydFByb3BlcnRpZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcGVydHkgPSBzb3J0UHJvcGVydGllc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPiBiW3NvcnRQcm9wZXJ0eV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxICogc29ydERpcmVjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPCBiW3NvcnRQcm9wZXJ0eV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAqIHNvcnREaXJlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUcmFuc2Zvcm1WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IG1hcHBlZEl0ZW1zLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtc1tlbC5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lW2lzU29ydGVkXSA9IGNvdW50U29ydGVycyA+IDA7XHJcblxyXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xyXG4gICAgICAgICAgICBtZS5maXJlKCdzb3J0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdW1lcyB0aGUgY29sbGVjdGlvbiBldmVudHMuXHJcbiAgICAgKiBJZiB5b3Ugc3RhcnRlZCBhbiB1cGRhdGUgdXNpbmcgdGhlIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBmbGFnLFxyXG4gICAgICogeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGlzIGNhbGwuXHJcbiAgICAgKiBVc2luZyB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSB3aWxsIG5vdCBmaXJlIGEgbXV0YXRpb24gZXZlbnQuXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtlbmRTaWxlbnRVcGRhdGVNb2RlXVxyXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNzdGFydFVwZGF0ZSBzdGFydFVwZGF0ZX1cclxuICAgICAqL1xyXG4gICAgZW5kVXBkYXRlKGVuZFNpbGVudFVwZGF0ZU1vZGUpIHtcclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA+IDApIHtcclxuICAgICAgICAgICAgbWVbdXBkYXRpbmdJbmRleF0tLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XHJcbiAgICAgICAgICAgIG1lW3NpbGVudFVwZGF0ZU1vZGVdID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBtZVt0b0FkZEFycmF5XSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtczogbWVbdG9SZW1vdmVBcnJheV1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtZVt0b0FkZEFycmF5XSAgIC5zcGxpY2UoMCwgbWVbdG9BZGRBcnJheV0gICAubGVuZ3RoKTtcclxuICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKDAsIG1lW3RvUmVtb3ZlQXJyYXldLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBmaWx0ZXJzICAgICAgICAgPSBtZS5fZmlsdGVycyxcclxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGNvdW50RmlsdGVycyAgICA9IDAsXHJcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICA9IG1lLmFsbEl0ZW1zICYmIG1lLmFsbEl0ZW1zLl9pdGVtcyB8fCBtZS5faXRlbXMsXHJcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGNvdW50SXRlbXMgICAgICA9IGl0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyAgID0gW10sXHJcbiAgICAgICAgICAgIGNvbmZpZywgaXNJbmNsdWRlZCwgaXRlbSwgaiwgdG1wSXRlbXM7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgY291bnRBbGxGaWx0ZXJzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2ldLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudEZpbHRlcnMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50RmlsdGVycyA9PT0gMCAmJiBtZS5hbGxJdGVtcykge1xyXG4gICAgICAgICAgICBtZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgbWUuaXRlbXMgPSBbLi4ubWUuYWxsSXRlbXMuX2l0ZW1zXTtcclxuICAgICAgICAgICAgbWUubWFwLnNldCguLi5tZS5hbGxJdGVtcy5tYXApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbWUuYWxsSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5maWx0ZXJzO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcclxuXHJcbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQmFzZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLk5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleVByb3BlcnR5OiBtZS5rZXlQcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZCBjb2xsZWN0aW9uJywgbWUuYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZS5maWx0ZXJNb2RlID09PSAncHJpbWl0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0luY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaiAgICAgICAgICA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcnNbal0uaXNGaWx0ZXJlZChpdGVtLCBpdGVtcywgaXRlbXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luY2x1ZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5jbHVkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1bbWUua2V5UHJvcGVydHldLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zID0gZmlsdGVyZWRJdGVtczsgLy8gc2lsZW50IHVwZGF0ZSwgdGhlIG1hcCBpcyBhbHJlYWR5IGluIHBsYWNlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGo9MDsgaiA8IGNvdW50QWxsRmlsdGVyczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50SXRlbXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEl0ZW1zLnB1c2goZmlsdGVyZWRJdGVtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSBbLi4udG1wSXRlbXNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHVwZGF0ZSB0aGUgbWFwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lW2lzRmlsdGVyZWRdID0gY291bnRGaWx0ZXJzICE9PSAwO1xyXG5cclxuICAgICAgICBtZS5maXJlKCdmaWx0ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIGl0ZW1zIHdoaWNoIG1hdGNoIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbiBlbXB0eSBBcnJheSBpbiBjYXNlIG5vIGl0ZW1zIGFyZSBmb3VuZFxyXG4gICAgICovXHJcbiAgICBmaW5kKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICA9IFtdLFxyXG4gICAgICAgICAgICBpc09iamVjdFByb3BlcnR5ID0gTmVvLmlzT2JqZWN0KHByb3BlcnR5KSxcclxuICAgICAgICAgICAgbWF0Y2hBcnJheSwgcHJvcGVydGllc0FycmF5LCBwcm9wZXJ0aWVzTGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMocHJvcGVydHkpO1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzTGVuZ3RoID0gcHJvcGVydGllc0FycmF5Lmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IHByb3BlcnRpZXNMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW1bcHJvcGVydHldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBmb3Igd2hpY2ggdGhlIHBhc3NlZCBmdW5jdGlvbiByZXR1cm5zIHRydWVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggaXRlbSBpbnNpZGUgdGhlIHN0YXJ0LWVuZCByYW5nZS4gUmV0dXJuIHRydWUgZm9yIGEgbWF0Y2guXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZm4uaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGU9dGhpc10gVGhlIHNjb3BlIGluIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gZ2V0cyBleGVjdXRlZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPXRoaXMuZ2V0Q291bnQoKV0gVGhlIGVuZCBpbmRleCAodXAgdG8sIGxhc3QgdmFsdWUgZXhjbHVkZWQpXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcclxuICAgICAqL1xyXG4gICAgZmluZEJ5KGZuLCBzY29wZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGl0ZW1zID0gW10sXHJcbiAgICAgICAgICAgIGkgICAgID0gc3RhcnQgfHwgMCxcclxuICAgICAgICAgICAgbGVuICAgPSBlbmQgICB8fCBtZS5nZXRDb3VudCgpO1xyXG5cclxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG1lO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmbi5jYWxsKHNjb3BlLCBtZS5pdGVtc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobWUuaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgZmlyc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgdG8gdGhlIGtleSwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vbmUuXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgZ2V0KGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGl0ZW0gZm9yIGEgZ2l2ZW4gaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxyXG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGdldEF0KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgaW50ZXJuYWwgaXRlbXMgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRDb3VudE11dGF0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tjb3VudE11dGF0aW9uc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRjaGluZyBmaWx0ZXIgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybiB7TmVvLmNvbGxlY3Rpb24uRmlsdGVyfG51bGx9XHJcbiAgICAgKi9cclxuICAgIGdldEZpbHRlcihwcm9wZXJ0eSkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gdGhpcy5maWx0ZXJzIHx8IFtdLFxyXG4gICAgICAgICAgICBpICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICA9IGZpbHRlcnMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLnByb3BlcnR5ID09PSBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUga2V5IGZvciBhIGdpdmVuIGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgZ2V0S2V5QXQoaW5kZXgpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiBpdGVtW3RoaXMua2V5UHJvcGVydHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHNoYWxsb3cgY29weSBvZiBhIHBvcnRpb24gb2YgdGhlIGl0ZW1zIGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSBaZXJvLWJhc2VkIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIGV4dHJhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZF0gWmVyby1iYXNlZCBpbmRleCBiZWZvcmUgd2hpY2ggdG8gZW5kIGV4dHJhY3Rpb24gKGV4dHJhY3RzIHVwIHRvIGJ1dCBub3QgaW5jbHVkaW5nIGVuZCkuXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zbGljZVxyXG4gICAgICovXHJcbiAgICBnZXRSYW5nZShzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgU291cmNlIENvbGxlY3Rpb24gaW4gY2FzZSB0aGUgc291cmNlQ29sbGVjdGlvbklkIGNvbmZpZyB3YXMgc2V0XHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZXx1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGdldFNvdXJjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VJZCAmJiBOZW8uZ2V0KHRoaXMuc291cmNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGEgdmFsdWUgaGFzIGJlZW4gYXNzb2NpYXRlZCB0byB0aGUga2V5IGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBoYXMoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gYXNzZXJ0aW5nIHdoZXRoZXIgYW4gaXRlbSBleGlzdHMgaW4gdGhlIENvbGxlY3Rpb24gb3Igbm90XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGhhc0l0ZW0oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoaXRlbVt0aGlzLmtleVByb3BlcnR5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXkgb3IgaXRlbVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcclxuICAgICAqL1xyXG4gICAgaW5kZXhPZihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihVdGlsLmlzT2JqZWN0KGtleSkgPyBrZXkgOiB0aGlzLm1hcC5nZXQoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBpdGVtXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXHJcbiAgICAgKi9cclxuICAgIGluZGV4T2ZJdGVtKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGZvciBhIGdpdmVuIGtleVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxyXG4gICAgICovXHJcbiAgICBpbmRleE9mS2V5KGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKHRoaXMubWFwLmdldChrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhbiBhcnJheSBvZiBpdGVtcyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxyXG4gICAgICovXHJcbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIGZpbHRlcmVkXHJcbiAgICAgKi9cclxuICAgIGlzRmlsdGVyZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNGaWx0ZXJlZF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaXNGaWx0ZXJlZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgZmlsdGVycyAgICA9IG1lLl9maWx0ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IGZpbHRlcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc0ZpbHRlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0uaXNGaWx0ZXJlZChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGlzRmlsdGVyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBzb3J0ZWRcclxuICAgICAqL1xyXG4gICAgaXNTb3J0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNTb3J0ZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgbGFzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNbdGhpcy5nZXRDb3VudCgpIC0xXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb25GaWx0ZXJDaGFuZ2Uob3B0cykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uTXV0YXRlKG9wdHMpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAob3B0cy5wcmV2ZW50QnViYmxlVXApIHtcclxuICAgICAgICAgICAgbWUucHJldmVudEJ1YmJsZVVwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lLnNwbGljZShudWxsLCBvcHRzLnJlbW92ZWRJdGVtcywgb3B0cy5hZGRlZEl0ZW1zKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uTXV0YXRlJywgbWUuZ2V0Q291bnQoKSwgbWUuaWQsIG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvblNvcnRlckNoYW5nZShvcHRzKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseVNvcnRlckNvbmZpZ3MoKTtcclxuICAgICAgICB0aGlzLmRvU29ydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBwb3AoKSB7XHJcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UodGhpcy5nZXRDb3VudCgpIC0xLCAxKTtcclxuICAgICAgICByZXR1cm4gbXV0YXRpb24ucmVtb3ZlZEl0ZW1zWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgaXRlbXMgY291bnRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgcHVzaChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIGdpdmVuIGtleSwgaXRlbSBvciBBcnJheSBjb250YWluaW5nIGtleXN8aXRlbXNcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl9IGtleVxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIEFycmF5LmlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQXQoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldmVyc2VzIHRoZSBpdGVtcyBhcnJheSBpbiBwbGFjZS5cclxuICAgICAqIEludGVuZGVkIGZvciBjb2xsZWN0aW9ucyB3aXRob3V0IHNvcnRlcnMuXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlbW92ZWQgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uOyB1bmRlZmluZWQgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5hZGRlZEl0ZW1zWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggaXRlbSwgdGFraW5nIHRocmVlIHBhcmFtZXRlcnM6XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjYWxsYmFjay5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbSBiZWluZyBwcm9jZXNzZWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgW2NhbGxiYWNrLmluZGV4XSBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaXRlbSBiZWluZyBwcm9jZXNzZWRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICAgW2NhbGxiYWNrLml0ZW1zXSBUaGUgaXRlbXMgYXJyYXkgb2YgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBWYWx1ZSB0byB1c2UgYXMgXCJ0aGlzXCIgd2hlbiBleGVjdXRpbmcgdGhlIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBmb3IgYW55IGNvbGxlY3Rpb24gaXRlbSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHNvbWUoLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zb21lKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBpdGVtcyBmcm9tIGFuZC9vciBhZGRzIGl0ZW1zIHRvIHRoaXMgY29sbGVjdGlvblxyXG4gICAgICogSWYgdGhlIHRvUmVtb3ZlQXJyYXkgaXMgdXNlZCwgdGhlbiB0aGUgaW5kZXggaXMgbm90IHVzZWQgZm9yIHJlbW92aW5nLCB0aGUgZW50cmllcyBhcmUgZm91bmQgYnkga2V5IGFuZCByZW1vdmVkIGZyb20gd2hlcmUgdGhleSBhcmUuXHJcbiAgICAgKiBJZiBpbmRleCBpcyBub3QgcGFzc2VkLCB0b0FkZEFycmF5IGlzIGFwcGVuZGVkIHRvIHRoZSBDb2xsZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fSBbcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXldXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fCBPYmplY3R9IFt0b0FkZEFycmF5XVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkZGVkSXRlbXMgJiByZW1vdmVkSXRlbXMgYXJyYXlzXHJcbiAgICAgKi9cclxuICAgIHNwbGljZShpbmRleCwgcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXksIHRvQWRkQXJyYXkpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgc291cmNlICAgICAgICAgICAgID0gbWUuZ2V0U291cmNlKCksXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgICAgICA9IFtdLFxyXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgPSBtZS5faXRlbXMsXHJcbiAgICAgICAgICAgIGtleVByb3BlcnR5ICAgICAgICA9IG1lLmtleVByb3BlcnR5LFxyXG4gICAgICAgICAgICBtYXAgICAgICAgICAgICAgICAgPSBtZS5tYXAsXHJcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgICAgICA9IFtdLFxyXG4gICAgICAgICAgICByZW1vdmVDb3VudEF0SW5kZXggPSBVdGlsLmlzTnVtYmVyKHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5KSA/IHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5IDogbnVsbCxcclxuICAgICAgICAgICAgdG9SZW1vdmVBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheShyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXHJcbiAgICAgICAgICAgIGksIGl0ZW0sIGtleSwgbGVuLCB0b0FkZE1hcDtcclxuXHJcbiAgICAgICAgaWYgKCFpbmRleCAmJiByZW1vdmVDb3VudEF0SW5kZXgpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKG1lLmlkICsgJzogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgcmVtb3ZlQ291bnRBdEluZGV4IGNhbm5vdCBiZSB1c2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b0FkZEFycmF5ID0gdG9BZGRBcnJheSAmJiAhQXJyYXkuaXNBcnJheSh0b0FkZEFycmF5KSA/IFt0b0FkZEFycmF5XSA6IHRvQWRkQXJyYXk7XHJcblxyXG4gICAgICAgIGlmICh0b1JlbW92ZUFycmF5ICYmIChsZW4gPSB0b1JlbW92ZUFycmF5Lmxlbmd0aCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0b0FkZEFycmF5ICYmIHRvQWRkQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdG9BZGRNYXAgPSB0b0FkZEFycmF5Lm1hcChlID0+IGVba2V5UHJvcGVydHldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRvUmVtb3ZlQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b0FkZE1hcCB8fCAodG9BZGRNYXAgJiYgdG9BZGRNYXAuaW5kZXhPZihrZXkpIDwgMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goaXRlbXMuc3BsaWNlKG1lLmluZGV4T2ZLZXkoa2V5KSwgMSlbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVDb3VudEF0SW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaCguLi5pdGVtcy5zcGxpY2UoaW5kZXgsIHJlbW92ZUNvdW50QXRJbmRleCkpO1xyXG4gICAgICAgICAgICByZW1vdmVkSXRlbXMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoZVtrZXlQcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b0FkZEFycmF5ICYmIChsZW4gPSB0b0FkZEFycmF5Lmxlbmd0aCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b0FkZEFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAga2V5ICA9IFV0aWwuaXNPYmplY3QoaXRlbSkgPyBpdGVtW2tleVByb3BlcnR5XSA6IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleSkgJiYgIW1lLmlzRmlsdGVyZWRJdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKFV0aWwuaXNOdW1iZXIoaW5kZXgpID8gaW5kZXggOiBpdGVtcy5sZW5ndGgsIDAsIC4uLmFkZGVkSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuZG9Tb3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKCFzb3VyY2UuZ2V0U291cmNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lLnByZXZlbnRCdWJibGVVcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdXJjZSBzcGxpY2UnLCBzb3VyY2UuaWQsICdhZGRlZDonLCAuLi50b0FkZEFycmF5LCAncmVtb3ZlZDonLCAuLi5yZW1vdmVkSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbWUuc3RhcnRVcGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKG51bGwsIHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zLCB0b0FkZEFycmF5KTtcclxuICAgICAgICAgICAgICAgIG1lLmVuZFVwZGF0ZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5wcmV2ZW50QnViYmxlVXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWRkZWRJdGVtcy5sZW5ndGggPiAwIHx8IHJlbW92ZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG1lW2NvdW50TXV0YXRpb25zXSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgOiB0b0FkZEFycmF5LFxyXG4gICAgICAgICAgICAgICAgcHJldmVudEJ1YmJsZVVwOiBtZS5wcmV2ZW50QnViYmxlVXAsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMgICA6IHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xyXG4gICAgICAgICAgICBtZS5jYWNoZVVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zICA6IGFkZGVkSXRlbXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgbWUucHJldmVudEJ1YmJsZVVwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxyXG4gICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50cyB0aGUgY29sbGVjdGlvbiBmcm9tIGZpcmluZyBldmVudHMgdW50aWwgZW5kVXBkYXRlIGdldHMgY2FsbGVkLlxyXG4gICAgICogSWYgeW91IHN0YXJ0IGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtLFxyXG4gICAgICogdGhlIG11dGF0aW9uIGV2ZW50IHdpbGwgbm90IGZpcmUgYWZ0ZXIgdXNpbmcgZW5kVXBkYXRlKClcclxuICAgICAqICh5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoZSBlbmRVcGRhdGUgY2FsbCBpbiBjYXNlIHlvdSB1c2VkXHJcbiAgICAgKiBzdGFydFNpbGVudFVwZGF0ZU1vZGUgaGVyZSlcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0YXJ0U2lsZW50VXBkYXRlTW9kZV1cclxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb2xsZWN0aW9uLkJhc2UjZW5kVXBkYXRlIGVuZFVwZGF0ZX1cclxuICAgICAqL1xyXG4gICAgc3RhcnRVcGRhdGUoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzW3NpbGVudFVwZGF0ZU1vZGVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXNbdXBkYXRpbmdJbmRleF0rKztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgZWxlbWVudHMgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGl0ZW1zIGNvdW50XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHVuc2hpZnQoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIDAsIGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgbXV0YXRlIGV2ZW50IGZpcmVzIGFmdGVyIGV2ZXJ5IHNwbGljZSBjYWxsIChpbnZva2VkIGJ5IGFsbCBtZXRob2RzIHdoaWNoIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgaXRlbXMgYXJyYXkpLlxyXG4gKiBAZXZlbnQgbXV0YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0W119IGFkZGVkSXRlbXNcclxuICogQHBhcmFtIHtCb29sZWFufSBwcmV2ZW50QnViYmxlVXAgcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSByZW1vdmVkSXRlbXNcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5GaWx0ZXJcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBvcGVyYXRvciBjb25maWc6PGJyPlxyXG4gICAgICAgICAqIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnZXhjbHVkZWQnLCAnaW5jbHVkZWQnLCAnaXNEZWZpbmVkJywgJ2lzVW5kZWZpbmVkJywgJ2xpa2UnXVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBvcGVyYXRvcnNcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBvcGVyYXRvcnM6IFsnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnZXhjbHVkZWQnLCAnaW5jbHVkZWQnLCAnaXNEZWZpbmVkJywgJ2lzVW5kZWZpbmVkJywgJ2xpa2UnXVxyXG4gICAgfX1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLkZpbHRlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkZpbHRlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZmlsdGVyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdmaWx0ZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHRpbmcgZGlzYWJsZWQgdG8gdHJ1ZSB3aWxsIGV4Y2x1ZGUgdGhpcyBmaWx0ZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmaWx0ZXJpbmcgbG9naWNcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNhYmxlZF86IGZhbHNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb3ZpZGUgYSBjdXN0b20gZmlsdGVyaW5nIGZ1bmN0aW9uLCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IGZpbHRlckJ5Xz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmlsdGVyQnlfOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgbWVhbnMgbm90IGZpbHRlcmluZyBvdXQgaXRlbXMgaW4gY2FzZSB0aGUgdmFsdWUgaXMgJycsIG51bGwsIFtdIG9yIHt9XHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaW5jbHVkZUVtcHR5VmFsdWVzPWZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhpcyBmbGFnIHRvIHRydWUgYmVmb3JlIHN0YXJ0aW5nIGJ1bGsgdXBkYXRlcyAoZS5nLiBjaGFuZ2luZyBwcm9wZXJ0eSAmIHZhbHVlKVxyXG4gICAgICAgICAqIHRvIHByZXZlbnQgbXVsdGlwbGUgY2hhbmdlIGV2ZW50c1xyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVXBkYXRpbmdfPWZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNVcGRhdGluZ186IGZhbHNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvd25lciB1dGlsLkNvbGxlY3Rpb24gbmVlZHMgdG8gYXBwbHkgYW4gb25DaGFuZ2UgbGlzdGVuZXIgb25jZVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3BlcmF0b3IgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxyXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczpcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqID09IChub3QgcmVjb21tZW5kZWQpXHJcbiAgICAgICAgICogPT09XHJcbiAgICAgICAgICogIT0gKG5vdCByZWNvbW1lbmRlZClcclxuICAgICAgICAgKiAhPT1cclxuICAgICAgICAgKiA8XHJcbiAgICAgICAgICogPj1cclxuICAgICAgICAgKiA+XHJcbiAgICAgICAgICogPj1cclxuICAgICAgICAgKiBsaWtlIChjb2xsZWN0aW9uVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpXHJcbiAgICAgICAgICogaW5jbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXHJcbiAgICAgICAgICogZXhjbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcGVyYXRvcj0nPT09J1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9wZXJhdG9yXzogJz09PScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBzY29wZSB0byB1c2UgZm9yIHRoZSBmaWx0ZXJCeSBtZXRob2QsIGluIGNhc2UgaXQgaXMgcHJvdmlkZWQuIERlZmF1bHRzIHRvIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHNjb3BlPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBzY29wZTogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdmFsdWUgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdmFsdWVfPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YWx1ZV86IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJTZXRGaWx0ZXJCeSh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAvLyB0b2RvXHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJTZXRJc1VwZGF0aW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQodmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJTZXRPcGVyYXRvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJTZXRWYWx1ZSguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2ZpbHRlckJ5IGhhcyB0byBiZSBhIGZ1bmN0aW9uJywgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIG9wZXJhdG9yIGNvbmZpZyBnZXRzIGNoYW5nZWQuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYmVmb3JlU2V0T3BlcmF0b3IodmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ29wZXJhdG9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcclxuICAgICAqL1xyXG4gICAgZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1lLmlzVXBkYXRpbmcgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IG1lLm9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG1lLnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiBhIGNvbGxldGlvbiBpdGVtIG1hdGNoZXMgdGhpcyBmaWx0ZXJcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyZWRJdGVtcyBJZiB0aGUgY29sbGVjdGlvbiBmaWx0ZXJNb2RlIGlzIG5vdCBwcmltaXRpdmUgY29udGFpbnMgdGhlIGl0ZW1zIHdoaWNoIHBhc3NlZFxyXG4gICAgICogdGhlIHByZXZpb3VzIGZpbHRlcnMsIG90aGVyd2lzZSBhbGwgY29sbGVjdGlvbiBpdGVtc1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYWxsSXRlbXMgYWxsIGNvbGxlY3Rpb24gaXRlbXNcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0ZpbHRlcmVkKGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG1lLl9kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWUuaW5jbHVkZUVtcHR5VmFsdWVzICYmIChtZS5fdmFsdWUgPT09IG51bGwgfHwgTmVvLmlzRW1wdHkobWUuX3ZhbHVlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lLl9maWx0ZXJCeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWUuZmlsdGVyQnkuY2FsbChtZS5zY29wZSB8fCBtZSwgaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhRmlsdGVyW21lLl9vcGVyYXRvcl0oaXRlbVttZS5fcHJvcGVydHldLCBtZS5fdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgWyc9PSddIChhLCBiKSB7cmV0dXJuIGEgPT0gYjt9XHJcbiAgICBzdGF0aWMgWyc9PT0nXShhLCBiKSB7cmV0dXJuIGEgPT09IGI7fVxyXG4gICAgc3RhdGljIFsnIT0nXSAoYSwgYikge3JldHVybiBhICE9IGI7fVxyXG4gICAgc3RhdGljIFsnIT09J10oYSwgYikge3JldHVybiBhICE9PSBiO31cclxuICAgIHN0YXRpYyBbJzwnXSAgKGEsIGIpIHtyZXR1cm4gYSA8IGI7fVxyXG4gICAgc3RhdGljIFsnPD0nXSAoYSwgYikge3JldHVybiBhIDw9IGI7fVxyXG4gICAgc3RhdGljIFsnPiddICAoYSwgYikge3JldHVybiBhID4gYjt9XHJcbiAgICBzdGF0aWMgWyc+PSddIChhLCBiKSB7cmV0dXJuIGEgPj0gYjt9XHJcblxyXG4gICAgc3RhdGljIFsnZXhjbHVkZWQnXShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFsnaW5jbHVkZWQnXShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBbJ2lzRGVmaW5lZCddKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBbJ2lzVW5kZWZpbmVkJ10oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFsnbGlrZSddKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEZpbHRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5Tb3J0ZXJcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgU29ydGVyIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLlNvcnRlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLlNvcnRlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc29ydGVyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdzb3J0ZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludGVybmFsIGNvbmZpZyB3aGljaCBtYXBwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRpcmVjdGlvbk11bHRpcGxpZXI9MVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlyZWN0aW9uTXVsdGlwbGllcjogMSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgc29ydCBkaXJlY3Rpb24gd2hlbiB1c2luZyBhIHByb3BlcnR5LlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uXz0nQVNDJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpcmVjdGlvbl86ICdBU0MnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvd25lciB1dGlsLkNvbGxlY3Rpb24gbmVlZHMgdG8gYXBwbHkgYW4gb25DaGFuZ2UgbGlzdGVuZXIgb25jZVxyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gc29ydCBieS5cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb3ZpZGUgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHkgJiBkaXJlY3Rpb25cclxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzb3J0Qnk9bnVsbFxyXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQ29sbGF0b3JcclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3J0Qnk6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSB0byB1c2UgdGhlIHRyYW5zZm9ybVZhbHVlIG1ldGhvZCBmb3IgZWFjaCBpdGVtICh0aGUgbWV0aG9kIGNhbiBnZXQgb3ZlcnJpZGRlbilcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VUcmFuc2Zvcm1WYWx1ZT10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB1c2VUcmFuc2Zvcm1WYWx1ZTogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldERpcmVjdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyID0gdmFsdWUgPT09ICdBU0MnID8gMSA6IC0xO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBtZS5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldFByb3BlcnR5KHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5IDogbWUucHJvcGVydHlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBzb3J0ZXIgZnVuY3Rpb24gd2hpY2ggZ2V0cyB1c2VkIGJ5IGNvbGxlY3Rpb25zIGluIGNhc2UgYXQgbGVhc3Qgb25lIHNvcnRlciBoYXMgYSByZWFsIHNvcnRCeSBtZXRob2RcclxuICAgICAqIEBwYXJhbSBhXHJcbiAgICAgKiBAcGFyYW0gYlxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0U29ydEJ5KGEsIGIpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBhID0gYVttZS5wcm9wZXJ0eV07XHJcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xyXG5cclxuICAgICAgICBpZiAobWUudXNlVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xyXG4gICAgICAgICAgICBiID0gbWUudHJhbnNmb3JtVmFsdWUoYik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYSA+IGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgKiBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEgPCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFNvcnRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0ZXI7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uXHJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkJhc2VcclxuICovXHJcbmNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb24nLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNyZWF0ZU1haW5WaWV3PXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjcmVhdGVNYWluVmlldzogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkJhc2V9IG1haW5WaWV3Xz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFpblZpZXdfOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbmFtZT0nTXlBcHAnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbmFtZTogJ015QXBwJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHBhcmVudElkPSdkb2N1bWVudC5ib2R5J1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBhcmVudElkOiAnZG9jdW1lbnQuYm9keScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyZWQ9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbmRlcmVkOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW5kZXJpbmc9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbmRlcmluZzogZmFsc2VcclxuICAgIH19XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgTmVvLmFwcHMgPSBOZW8uYXBwcyB8fCB7fTtcclxuXHJcbiAgICAgICAgTmVvLmFwcHNbbWUubmFtZV0gPSBtZTtcclxuXHJcbiAgICAgICAgaWYgKG1lLmNyZWF0ZU1haW5WaWV3KSB7XHJcbiAgICAgICAgICAgIG1lLnJlbmRlck1haW5WaWV3KGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1haW5WaWV3KCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLm1haW5WaWV3SW5zdGFuY2UgPSBOZW8uY3JlYXRlKG1lLm1haW5WaWV3LCB7XHJcbiAgICAgICAgICAgIGFwcE5hbWUgICA6IG1lLm5hbWUsXHJcbiAgICAgICAgICAgIGF1dG9SZW5kZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmVudElkICA6IG1lLnBhcmVudElkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwcGxpY2F0aW9uKTtcclxuXHJcbi8vIHNob3J0Y3V0XHJcbk5lby5hcHAgPSBjb25maWcgPT4gTmVvLmNyZWF0ZShBcHBsaWNhdGlvbiwgY29uZmlnKTtcclxuXHJcbmV4cG9ydCB7QXBwbGljYXRpb24gYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvcmVCYXNlfSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IEhhc2hIaXN0b3J5ICAgICAgICAgICBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb250cm9sbGVyLkJhc2VcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udHJvbGxlci5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRyb2xsZXIuQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29udHJvbGxlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29udHJvbGxlcidcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICBIYXNoSGlzdG9yeS5vbignY2hhbmdlJywgdGhpcy5vbkhhc2hDaGFuZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGhhc2ggaW5zaWRlIHRoZSBicm93c2VyIHVybCBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhc2hTdHJpbmdcclxuICAgICAqL1xyXG4gICAgb25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSwgaGFzaFN0cmluZykge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XHJcblxyXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xyXG5cclxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXHJcbiAgICAgIGlzSW5zdGFuY2UgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcclxuICogQGNsYXNzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIEJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcclxuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkJhc2UnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgY2xhc3Mgc2hvcnRjdXQtbmFtZSB0byB1c2UgZm9yIGUuZy4gY3JlYXRpbmcgY2hpbGQgY29tcG9uZW50cyBpbnNpZGUgYSBKU09OLWZvcm1hdFxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2Jhc2UnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbnM6IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lcyB0aGUgc3RhdGljIGdldENvbmZpZygpIG9iamVjdFxyXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XHJcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcclxuXHJcbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xyXG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpIHx8IG1lLm1peGlucyAmJiBOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBtZS5taXhpbnMpKSB7XHJcbiAgICAgICAgICAgIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGlmIChtZS5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIG1lLmNvbnRyb2xsZXIucGFyc2VDb25maWcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZSwgJ2NvbmZpZ3NBcHBsaWVkJywge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWUucmVtb3RlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgYWxsIGNvbnN0cnVjdG9ycyBhcmUgZG9uZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpcyBkb25lXHJcbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29yZS5CYXNlI29uQ29uc3RydWN0ZWQgb25Db25zdHJ1Y3RlZH1cclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBpbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG9sZFZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcclxuICAgICAqL1xyXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignU3VwcG9ydGVkIHZhbHVlcyBmb3IgJyArIG5hbWUgKyAnIGFyZTonLCB2YWx1ZXMuam9pbignLCAnKSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJZChpZCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgaWQgPSBJZEdlbmVyYXRvci5nZXRJZChtZS5udHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5pZCA9IGlkO1xyXG5cclxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UucmVnaXN0ZXIobWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghTmVvLmlkTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBOZW8uaWRNYXAgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTmVvLmlkTWFwW21lLmlkXSA9IG1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxyXG4gICAgICogYW5kIHJlbW92ZXMgYWxsIG9iamVjdCBlbnRyaWVzIGZyb20gdGhpcyBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1lKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIG1lW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgbWVba2V5XTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xyXG4gICAgICAgIGxldCBjZmcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcclxuICAgICAgICByZXR1cm4gKGtleSA/IGNmZ1trZXldIDogY2ZnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgYWxsIGNsYXNzIGNvbmZpZ3MgdG8gdGhpcyBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcclxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJvY2Vzc0NvbmZpZ3MoKSB7XHJcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XHJcblxyXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBpcyBpbnRlbmRlZCBmb3IgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZVxyXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgZ290IGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcclxuICAgICAgICAgICAgaWYgKCFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgbWVba2V5c1swXV0gPSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGRlbGV0ZSBjYWxsIGluc2lkZSB0aGUgY29uZmlnIGdldHRlciBhcyB3ZWxsIChOZW8ubWpzID0+IGF1dG9HZW5lcmF0ZUdldFNldCgpKVxyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBvbmUgZm9yIGNvbmZpZ3MsIHdoaWNoIGRvIG5vdCB1c2UgZ2V0dGVycyAobm8gdHJhaWxpbmcgdW5kZXJzY29yZSlcclxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XHJcblxyXG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXHJcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcclxuICAgICAqL1xyXG4gICAgaW5pdFJlbW90ZSgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgcmVtb3RlICAgID0gbWUucmVtb3RlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZS5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIG9yaWdpbjtcclxuXHJcbiAgICAgICAgaWYgKCFtZS5zaW5nbGV0b24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW4uc2VuZE1lc3NhZ2Uod29ya2VyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgIDogJ3JlZ2lzdGVyUmVtb3RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kcyAgICAgOiBtZXRob2RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgICA6IGNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGN0b3IgPSBtZS5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lby5hcHBseUNsYXNzQ29uZmlnIGhhcyBub3QgYmVlbiBydW4gb24gJyArIG1lLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXByZXZlbnRPcmlnaW5hbENvbmZpZykge1xyXG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XHJcbiAgICAgKi9cclxuICAgIHNldCh2YWx1ZXM9e30pIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nOlxyXG4gICAgICAgIC8vIG1lW2NvbmZpZ1N5bWJvbF0gPSB2YWx1ZXM7XHJcbiAgICAgICAgLy8gd2Uga2VlcCB0aGUgT2JqZWN0IGluc3RhbmNlIChkZWZpbmVkIHZpYSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygpID0+IG5vbiBlbnVtZXJhYmxlKVxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcclxuXHJcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcclxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxyXG4gICAgICogYE5lby5jcmVhdGUoJ05lby5jb21wb25lbnQuQnV0dG9uJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmNvbXBvbmVudC5CdXR0b24gKG5lby1idXR0b24tMSldXCJgXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lICsgJyAoaWQ6JyArIHRoaXMuaWQgKyAnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cclxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcclxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxyXG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XHJcbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xyXG5cclxuQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCIvKipcclxuICogVGhpcyBjbGFzcyBnZXRzIHVzZWQgYnkgY29yZS5CYXNlLCBzbyBpdCBjYW4gbm90IGV4dGVuZCBpdC5cclxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgSWRHZW5lcmF0b3Ige1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXHJcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5JZEdlbmVyYXRvcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2lkLWdlbmVyYXRvcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYXNlPSduZW8tJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJhc2U6ICduZW8tJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLmlkQ291bnRlciA9IHt9O1xyXG5cclxuICAgICAgICAvLyBhbGlhc1xyXG4gICAgICAgIE5lby5nZXRJZCA9IG1lLmdldElkLmJpbmQobWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxyXG5cclxuICAgIGluaXQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRJZChuYW1lKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XHJcblxyXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcclxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcclxuXHJcbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XHJcblxyXG4gICAgICAgIHJldHVybiBtZS5iYXNlICsgKG5hbWUgPT09ICduZW8nID8gJycgOiBuYW1lICsgJy0nKSArIGNvdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJZEdlbmVyYXRvcik7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb3JlLkxvZ2dlclxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIExvZ2dlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Mb2dnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Mb2dnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnbG9nZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhpcyBjb25maWcgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgbG9nZ2luZ1xyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGVuYWJsZUxvZ3M6IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV2ZWw6ICdsb2cnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgLy8gYWxpYXNlc1xyXG4gICAgICAgIE5lby5hcHBseUZyb21OcyhOZW8sIHRoaXMsIHtcclxuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGluZm8gICAgOiAnaW5mbycsXHJcbiAgICAgICAgICAgIGxvZyAgICAgOiAnbG9nJyxcclxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXHJcbiAgICAgICAgICAgIHdhcm4gICAgOiAnd2FybidcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgZXJyb3IodmFsdWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGxvZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdsb2cnO1xyXG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqL1xyXG4gICAgaW5mbyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdpbmZvJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGxvZ0Vycm9yKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIHdhcm4oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgd3JpdGUoLi4uYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZVt0aGlzLmxldmVsXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKExvZ2dlcik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLk9ic2VydmFibGUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1peGluOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIGluaXRPYnNlcnZhYmxlKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXHJcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxyXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIG1lLmxpc3RlbmVycyA9IGNvbmZpZy5saXN0ZW5lcnM7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xyXG5cclxuICAgICAgICBtZS5saXN0ZW5lcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKHByb3RvICYmIHByb3RvLmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcclxuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lciAgIDogbWUuYWRkTGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uICAgICAgICAgICAgOiBtZS5vbixcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcclxuICAgICAqL1xyXG4gICAgYWRkTGlzdGVuZXIobmFtZSwgb3B0cywgc2NvcGUsIGV2ZW50SWQsIGRhdGEsIG9yZGVyKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcclxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnc2NvcGUnKSkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIoa2V5LCB2YWx1ZSwgc2NvcGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG9wdHMuc2NvcGU7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcclxuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xyXG4gICAgICAgICAgICBldmVudElkID0gZXZlbnRJZCB8fCBvcHRzLmV2ZW50SWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFkZExpc3RlbmVyIGNhbGw6ICcgKyBuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50Q29uZmlnID0ge1xyXG4gICAgICAgICAgICBmbiAgICA6IGxpc3RlbmVyLFxyXG4gICAgICAgICAgICBzY29wZSA6IHNjb3BlLFxyXG4gICAgICAgICAgICBkYXRhICA6IGRhdGEsXHJcbiAgICAgICAgICAgIGlkICAgIDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZXhpc3RpbmcgPSBtZS5saXN0ZW5lcnMgJiYgbWUubGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nLmZvckVhY2goY2ZnID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOiAnICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnNwbGljZShvcmRlciwgMCwgZXZlbnRDb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqL1xyXG4gICAgZmlyZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxyXG4gICAgICAgICAgICBldmVudENvbmZpZywgZXZlbnRzLCBpLCBsZW47XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50cyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xyXG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZy5mbi5hcHBseShldmVudENvbmZpZy5zY29wZSB8fCBtZSwgZXZlbnRDb25maWcuZGF0YSA/IGFyZ3MuY29uY2F0KGV2ZW50Q29uZmlnLmRhdGEpIDogYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQpIHtcclxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lcnMgICA9IHRoaXMubGlzdGVuZXJzW25hbWVdLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2ggICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBpZHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIG9uKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsaWFzIGZvciByZW1vdmVMaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIHVuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhPYnNlcnZhYmxlKTtcclxuXHJcbmV4cG9ydCB7T2JzZXJ2YWJsZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcclxuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGRlY2FtZWxSZWdFeD0vKFthLXpdKShbQS1aXSkvZ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlY2FtZWxSZWdFeDogLyhbYS16XSkoW0EtWl0pL2dcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5VdGlsJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29yZS11dGlsJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnLFxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgc3lsZXMgb2JqZWN0IHdoaWNoIGNhbiB1c2UgY2FtZWxjYXNlIHN5bnRheCBpbnRvIGEgc3R5bGVzIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IFV0aWwuZGVjYW1lbChrZXkpICsgJzonICsgdmFsdWUgKyAnOyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNhcGl0YWxpemUoc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWwuaXNTdHJpbmcoc3RyaW5nKSAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxyXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtcyBhIHN0eWxlcyBzdHJpbmcgaW50byBhIHN0eWxlcyBvYmplY3QgdXNpbmcgY2FtZWxjYXNlIHN5bnRheFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3R5bGVzIHN0cmluZyB0byBwYXJzZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTdHlsZU9iamVjdChzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJ0cztcclxuXHJcbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXHJcbiAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwuLi5cclxuXHJcbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgvOyg/PVteXFwpXSooPzpcXCh8JCkpL2cpLnJlZHVjZSgob2JqLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IGJ5IHRoZSBmaXJzdCBjb2xvbiBvbmx5XHJcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXHJcbiAgICAgICAgICAgIHBhcnRzID0gZWwuc3BsaXQoKC86KC4rKS8pKS5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUZsb2F0KHgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IG51bSA/IG51bSA6IHgudHJpbSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvLShbYS16XSkvZywgKHN0ciwgbGV0dGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvYmpbcGFydHNbMF1dID0gcGFydHNbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGVtcHR5IEFycmF5LCBPYmplY3Qgb3IgU3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpe1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYW55IGl0ZXJhYmxlIChzdHJpbmdzLCBudW1lcmljIGluZGljZXMgYW5kIGEgbGVuZ3RoIHByb3BlcnR5KSBpbnRvIGEgdHJ1ZSBhcnJheVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9aXRlcmFibGUubGVuZ3RoXSBlbmQgaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRvQXJyYXkoaXRlcmFibGUsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBsZXQgbGVuO1xyXG5cclxuICAgICAgICBpZiAoIWl0ZXJhYmxlIHx8ICEobGVuID0gaXRlcmFibGUubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XHJcblxyXG4vLyBhbGlhc2VzXHJcbk5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcclxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxyXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxyXG4gICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcclxuICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXHJcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxyXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxyXG4gICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxyXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcclxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXHJcbiAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcclxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxyXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXHJcbiAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXHJcbn0sIHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgQmFzZSAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XHJcbmltcG9ydCBMb2dnZXIgICAgICBmcm9tICcuL0xvZ2dlci5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSAgZnJvbSAnLi9PYnNlcnZhYmxlLm1qcyc7XHJcbmltcG9ydCBVdGlsICAgICAgICBmcm9tICcuL1V0aWwubWpzJztcclxuXHJcbmV4cG9ydCB7QmFzZSwgTG9nZ2VyLCBPYnNlcnZhYmxlLCBVdGlsfTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29sbGVjdGlvbkJhc2V9IGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBvdGhlciBtYW5hZ2VyIGNsYXNzZXNcclxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkJhc2VcclxuICogQGV4dGVuZHMgTmVvLmNvbGxlY3Rpb24uQmFzZVxyXG4gKi9cclxuY2xhc3MgQmFzZSBleHRlbmRzIENvbGxlY3Rpb25CYXNle1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZS1tYW5hZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdiYXNlLW1hbmFnZXInXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldEJ5SWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGl0ZW0pIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAobWUuZ2V0KGl0ZW0uaWQpKSB7XHJcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignVHJ5aW5nIHRvIGNyZWF0ZSBhbiBpdGVtIHdpdGggYW4gYWxyZWFkeSBleGlzdGluZyBpZCcsIGl0ZW0sIG1lLmdldChpdGVtLmlkKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWUucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xyXG5cclxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgVkRvbVV0aWx9ICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIFZOb2RlVXRpbH0gZnJvbSAnLi4vdXRpbC9WTm9kZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Db21wb25lbnRcclxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQ29tcG9uZW50J1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuQ29tcG9uZW50JyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb21wb25lbnQtbWFuYWdlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29tcG9uZW50LW1hbmFnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIE5lby5nZXRDb21wb25lbnQgPSB0aGlzLmdldEJ5SWQuYmluZCh0aGlzKTsgLy8gYWxpYXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3IgbW92aW5nIGRvd24gdGhlIGNvbXBvbmVudCBpdGVtcyB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XHJcbiAgICAgKi9cclxuICAgIGRvd24oY29tcG9uZW50SWQsIGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCAgID0gbWUuZ2V0QnlJZChjb21wb25lbnRJZCksXHJcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgID0gW10sXHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gbnVsbCxcclxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IGNvbXBvbmVudC5pdGVtcyAmJiBjb21wb25lbnQuaXRlbXMubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29uZmlnKSkge1xyXG4gICAgICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWdBcnJheSAgPSBPYmplY3QuZW50cmllcyhjb25maWcpO1xyXG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgY29uZmlnQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IGNvbmZpZ0xlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1lLmRvd24oY29tcG9uZW50Lml0ZW1zW2ldLmlkLCBjb25maWcpO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB0aGUgY29tcG9uZW50IGlkIGluIGNhc2UgdGhlcmUgaXMgYSBtYXRjaFxyXG4gICAgICovXHJcbiAgICBmaW5kUGFyZW50Q29tcG9uZW50KHBhdGgpIHtcclxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcclxuICAgICAgICAgICAgaSAgID0gMCxcclxuICAgICAgICAgICAgbGVuID0gcGF0aCAmJiBwYXRoLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICBpZDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZCA9IHBhdGhbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoaWQgJiYgbWUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRvZG86IHJlcGxhY2UgYWxsIGNhbGxzIG9mIHRoaXMgbWV0aG9kIHRvIGNhbGxzIHVzaW5nIHRoZSB1dGlsLlZOb2RlIGNsYXNzXHJcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXHJcbiAgICAgKiBAcGFyYW0gdm5vZGVcclxuICAgICAqIEBwYXJhbSBjaGlsZElkc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xyXG4gICAgICovXHJcbiAgICBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpIHtcclxuICAgICAgICByZXR1cm4gVk5vZGVVdGlsLmdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBjaGlsZCBjb21wb25lbnRzIGZvdW5kIGluc2lkZSB0aGUgdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IGNoaWxkQ29tcG9uZW50c1xyXG4gICAgICovXHJcbiAgICBnZXRDaGlsZHJlbihjb21wb25lbnQpIHtcclxuICAgICAgICBsZXQgY2hpbGRDb21wb25lbnRzID0gW10sXHJcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgICAgICA9IFZOb2RlVXRpbC5nZXRDaGlsZElkcyhjb21wb25lbnQudm5vZGUpLFxyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudCA9IHRoaXMuZ2V0KG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbXBvbmVudHMucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gQXJyYXkgY29udGFpbmluZyB0aGUgaWRzIG9mIGFsbCBwYXJlbnQgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBjb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX0gcGFyZW50SWRzXHJcbiAgICAgKi9cclxuICAgIGdldFBhcmVudElkcyhjb21wb25lbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50SWRzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50SWRzLnB1c2goY29tcG9uZW50LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudElkcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGdldFBhcmVudFBhdGgocGF0aCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgY29tcG9uZW50UGF0aCA9IFtdLFxyXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICAgICA9IHBhdGggJiYgcGF0aC5sZW5ndGggfHwgMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobWUuaGFzKHBhdGhbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQYXRoLnB1c2gocGF0aFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIGFsbCBwYXJlbnQgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBjb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcclxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gcGFyZW50c1xyXG4gICAgICovXHJcbiAgICBnZXRQYXJlbnRzKGNvbXBvbmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIGNvbmZpZy1zZWxlY3RvclxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xyXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxyXG4gICAgICovXHJcbiAgICB1cChjb21wb25lbnRJZCwgY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnRJZCksXHJcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGgsIG1hdGNoQXJyYXk7XHJcblxyXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29uZmlnKSkge1xyXG4gICAgICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWdBcnJheSAgPSBPYmplY3QuZW50cmllcyhjb25maWcpO1xyXG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IGNvbmZpZ0xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29tcG9uZW50KTtcclxuXHJcbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQ29tcG9uZW50KTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgQ29tcG9uZW50TWFuYWdlcn0gZnJvbSAnLi9Db21wb25lbnQubWpzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIEZvY3VzTWFuYWdlcn0gICAgIGZyb20gJy4vRm9jdXMubWpzJztcclxuaW1wb3J0IExvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XHJcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBWRG9tVXRpbH0gICAgICAgICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcclxuXHJcbmNvbnN0IGV2ZW50Q29uZmlnS2V5cyA9IFtcclxuICAgICdidWJibGUnLFxyXG4gICAgJ2RlbGVnYXRlJyxcclxuICAgICdsb2NhbCcsXHJcbiAgICAnc2NvcGUnLFxyXG4gICAgJ3Zub2RlSWQnXHJcbl07XHJcblxyXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXHJcbiAgICAnY2hhbmdlJyxcclxuICAgICdjbGljaycsXHJcbiAgICAnY29udGV4dG1lbnUnLFxyXG4gICAgJ2ZvY3VzaW4nLFxyXG4gICAgJ2ZvY3Vzb3V0JyxcclxuICAgICdpbnB1dCcsXHJcbiAgICAna2V5ZG93bicsXHJcbiAgICAna2V5dXAnLFxyXG4gICAgJ21vdXNlZW50ZXInLFxyXG4gICAgJ21vdXNlbGVhdmUnLFxyXG4gICAgJ3doZWVsJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Eb21FdmVudFxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIERvbUV2ZW50IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkRvbUV2ZW50J1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuRG9tRXZlbnQnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvbS1ldmVudC1tYW5hZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdkb20tZXZlbnQtbWFuYWdlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsaXN0ZW5lcnM9e31cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGl0ZW1zOiB7fSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcD17fVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFwOiB7fSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZmlyZShldmVudCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgYnViYmxlICAgICA9IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGEgICAgICAgPSBldmVudC5kYXRhIHx8IHt9LFxyXG4gICAgICAgICAgICBldmVudE5hbWUgID0gZXZlbnQuZXZlbnROYW1lLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGlzdGVuZXJzICA9IG51bGwsXHJcbiAgICAgICAgICAgIHBhdGhJZHMgICAgPSBkYXRhLnBhdGgubWFwKGUgPT4gZS5pZCksXHJcbiAgICAgICAgICAgIHBhdGggICAgICAgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudFBhdGgocGF0aElkcyksXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICAgICAgY29tcG9uZW50LCBkZWxlZ2F0aW9uVmRvbSwgZGVsZWdhdGlvblRhcmdldElkLCBpZCwgcHJldmVudEZpcmUsIHRhcmdldElkO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkICAgICAgICA9IHBhdGhbaV07XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQgfHwgY29tcG9uZW50LmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUuaXRlbXNbaWRdICYmIG1lLml0ZW1zW2lkXVtldmVudE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpcmUnLCBldmVudE5hbWUsIGRhdGEsIGxpc3RlbmVycywgcGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmZuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0aW9uVGFyZ2V0SWQgPSBtZS52ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgZGF0YS5wYXRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGlvblRhcmdldElkICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCBtb3VzZWVudGVyICYgbGVhdmUgdG8gZmlyZSBvbiB0aGVpciB0b3AgbGV2ZWwgbm9kZXMsIG5vdCBmb3IgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgfHwgZXZlbnROYW1lID09PSAnbW91c2VsZWF2ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBldmVudE5hbWUgPT09ICdtb3VzZWVudGVyJyA/IGRhdGEuZnJvbUVsZW1lbnRJZCA6IGRhdGEudG9FbGVtZW50SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldElkLCBkZWxlZ2F0aW9uVGFyZ2V0SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldElkICYmIHRhcmdldElkICE9PSBkZWxlZ2F0aW9uVGFyZ2V0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRpb25WZG9tID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChjb21wb25lbnQudmRvbSwgZGVsZWdhdGlvblRhcmdldElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGlvblZkb20udmRvbSAmJiBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKGRlbGVnYXRpb25WZG9tLnZkb20sIHRhcmdldElkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50RmlyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhOZW8uZ2V0KGlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbi5hcHBseShsaXN0ZW5lci5zY29wZSB8fCBzZWxmLCBbZGF0YV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lci5idWJibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgRm9jdXNNYW5hZ2VyIGFmdGVyIG5vcm1hbCBkb21MaXN0ZW5lcnMgb24gdGhlc2UgZXZlbnRzIGdvdCBleGVjdXRlZFxyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnZm9jdXNpbicgfHwgZXZlbnROYW1lID09PSAnZm9jdXNvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBGb2N1c01hbmFnZXJbJ29uJyArIE5lby5jYXBpdGFsaXplKGV2ZW50TmFtZSldKHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICA6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ1YmJsZSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHNjb3BlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZWxlZ2F0ZSA6IGNvbmZpZy5kZWxlZ2F0ZSxcclxuICAgICAgICAgICAgZXZlbnROYW1lOiBjb25maWcuZXZlbnROYW1lLFxyXG4gICAgICAgICAgICBpZCAgICAgICA6IHNjb3BlLmlkLFxyXG4gICAgICAgICAgICBvcHRzICAgICA6IGNvbmZpZyxcclxuICAgICAgICAgICAgc2NvcGUgICAgOiBjb25maWcuc2NvcGUgICB8fCBzY29wZSxcclxuICAgICAgICAgICAgdm5vZGVJZCAgOiBjb25maWcudm5vZGVJZCB8fCBzY29wZS5pZFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXZlbnROYW1lKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBldmVudE5hbWUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGNvbmZpZykpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Q29uZmlnS2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmRlbGVnYXRlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldExpc3RlbmVyKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLml0ZW1zLFxyXG4gICAgICAgICAgICBldmVudDtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbY29uZmlnLmlkXSkge1xyXG4gICAgICAgICAgICBldmVudCA9IGxpc3RlbmVyc1tjb25maWcuaWRdW2NvbmZpZy5ldmVudE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3VudHMgbG9jYWwgZG9tRXZlbnQgbGlzdGVuZXJzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgbW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gY29tcG9uZW50LmRvbUxpc3RlbmVycyxcclxuICAgICAgICAgICAgbG9jYWxFdmVudHMgPSBbXSxcclxuICAgICAgICAgICAgZXZlbnQsIGV2ZW50TmFtZTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdGVuZXJzKS5mb3JFYWNoKGV2ZW50SWQgPT4ge1xyXG4gICAgICAgICAgICBldmVudCAgICAgPSBsaXN0ZW5lcnNbZXZlbnRJZF07XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50TmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgJiYgKGV2ZW50LmxvY2FsIHx8ICFnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbEV2ZW50cycsIGV2ZW50TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgIDogZXZlbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdkb21FdmVudExpc3RlbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB2bm9kZUlkOiBldmVudC52bm9kZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobG9jYWxFdmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBOZW8ud29ya2VyLkFwcC5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICdhZGREb21MaXN0ZW5lcicsXHJcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBjb21wb25lbnQuYXBwTmFtZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50cyA6IGxvY2FsRXZlbnRzXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkZWQgZG9tTGlzdGVuZXInLCBkYXRhKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHA6IEdvdCBlcnJvciBhdHRlbXB0aW5nIHRvIGFkZCBhIGRvbUxpc3RlbmVyJywgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5kZWxlZ2F0ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmxvY2FsXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLm9wdHNcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcub3JpZ2luYWxDb25maWdcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcucHJpb3JpdHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc2NvcGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGxpc3RlbmVyIGdvdCByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSAoZmFsc2UgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB0aGVyZSlcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIoY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGFscmVhZHlSZWdpc3RlcmVkID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgICAgID0gY29uZmlnLmV2ZW50TmFtZSxcclxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgPSBjb25maWcuaWQsXHJcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgICAgID0gdGhpcy5pdGVtcyxcclxuICAgICAgICAgICAgb3B0cyAgICAgICAgICAgICAgPSBjb25maWcub3B0cyxcclxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSBjb25maWcuc2NvcGUsXHJcbiAgICAgICAgICAgIGZuVHlwZSAgICAgICAgICAgID0gdHlwZW9mIG9wdHMsXHJcbiAgICAgICAgICAgIGZuLCBsaXN0ZW5lciwgbGlzdGVuZXJDb25maWcsIGxpc3RlbmVySWQ7XHJcblxyXG4gICAgICAgIGlmIChmblR5cGUgPT09ICdmdW5jdGlvbicgfHwgZm5UeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBmbiA9IG9wdHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm4gICAgPSBvcHRzLmZuO1xyXG4gICAgICAgICAgICBzY29wZSA9IG9wdHMuc2NvcGUgfHwgc2NvcGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tpZF0pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW2lkXSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5mbi50b1N0cmluZygpID09PSBmbi50b1N0cmluZygpICYmIC8vIHRvZG86IGFkZCBhIGJldHRlciBjaGVja1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uc2NvcGUgICAgICAgICA9PT0gc2NvcGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLmRlbGVnYXRlICAgICAgPT09IGNvbmZpZy5kZWxlZ2F0ZVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbHJlYWR5UmVnaXN0ZXJlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFuYWdlci5Eb21FdmVudCByZWdpc3RlcicsIGV2ZW50TmFtZSwgY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGlzdGVuZXJJZCA9IE5lby5nZXRJZCgnZG9tLWV2ZW50Jyk7XHJcblxyXG4gICAgICAgIGNvbmZpZy5saXN0ZW5lcklkID0gbGlzdGVuZXJJZDtcclxuXHJcbiAgICAgICAgbGlzdGVuZXJDb25maWcgPSB7XHJcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgICAgOiBjb25maWcuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gY29uZmlnLmJ1YmJsZSA6IG9wdHMuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gb3B0cy5idWJibGUgOiB0cnVlLFxyXG4gICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogY29uZmlnLmRlbGVnYXRlLFxyXG4gICAgICAgICAgICBmbiAgICAgICAgICAgIDogZm4sXHJcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBsaXN0ZW5lcklkLFxyXG4gICAgICAgICAgICBtb3VudGVkICAgICAgIDogIWNvbmZpZy5sb2NhbCAmJiBnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSxcclxuICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGNvbmZpZy5vcmlnaW5hbENvbmZpZyxcclxuICAgICAgICAgICAgcHJpb3JpdHkgICAgICA6IGNvbmZpZy5wcmlvcml0eSB8fCAxLFxyXG4gICAgICAgICAgICBzY29wZSAgICAgICAgIDogc2NvcGUsXHJcbiAgICAgICAgICAgIHZub2RlSWQgICAgICAgOiBjb25maWcudm5vZGVJZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubWFwW2xpc3RlbmVySWRdID0gbGlzdGVuZXJDb25maWc7XHJcblxyXG4gICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXS5wdXNoKGxpc3RlbmVyQ29uZmlnKTtcclxuXHJcbiAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgPiBiLnByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9wdHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc2NvcGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBsaXN0ZW5lciBkaWQgZXhpc3QgYW5kIGdvdCByZW1vdmVkXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIoY29uZmlnLCBzY29wZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bnJlZ2lzdGVyJywgY29uZmlnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdlbmVyYXRlTGlzdGVuZXJDb25maWcoY29uZmlnLCBzY29wZSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihjb25maWcpO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3RlbmVyIGZvdW5kJywgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEb21MaXN0ZW5lcnMoY29tcG9uZW50LCBkb21MaXN0ZW5lcnMsIG9sZERvbUxpc3RlbmVycykge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgcmVnaXN0ZXJlZExpc3RlbmVycyA9IG1lLml0ZW1zW2NvbXBvbmVudC5pZF0gfHwge30sXHJcbiAgICAgICAgICAgIGksIGxlbiwgbGlzdGVuZXJzO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZERvbUxpc3RlbmVycykpIHtcclxuICAgICAgICAgICAgICAgIG9sZERvbUxpc3RlbmVycy5mb3JFYWNoKG9sZERvbUxpc3RlbmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kICYgcmVtb3ZlIG5vIGxvbmdlciBleGlzdGluZyBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbUxpc3RlbmVycy5pbmNsdWRlcyhvbGREb21MaXN0ZW5lcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gcmVnaXN0ZXJlZExpc3RlbmVyc1ttZS5nZXRFdmVudE5hbWUob2xkRG9tTGlzdGVuZXIpXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuICAgICAgID0gbGlzdGVuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub3JpZ2luYWxDb25maWcgPT09IG9sZERvbUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVycywgbGlzdGVuZXJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGxpc3RlbmVyc1xyXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMuZm9yRWFjaChkb21MaXN0ZW5lciA9PiB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudENvbmZpZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5yZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogdmFsdWUuZGVsZWdhdGUgfHwgZG9tTGlzdGVuZXIuZGVsZWdhdGUgfHwgJyMnICsgY29tcG9uZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lICAgICA6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBjb21wb25lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgICAgIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbENvbmZpZzogZG9tTGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgIDogZG9tTGlzdGVuZXIuc2NvcGUgfHwgY29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgICAgICA6IHZhbHVlLnZub2RlSWQgfHwgY29tcG9uZW50LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgbWUubW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignQ29tcG9uZW50LmRvbUxpc3RlbmVycyBoYXZlIHRvIGJlIGFuIGFycmF5JywgY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlbmRlZCBmb3IgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50IHRvIHJlcGxhY2UgbGlzdGVuZXIgcGxhY2Vob2xkZXJzIHByb3ZpZGVkIGFzIGEgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmNvbXBvbmVudElkXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50SGFuZGxlck5hbWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNvbmZpZy5zY29wZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVMaXN0ZW5lclBsYWNlaG9sZGVyKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgID0gbWUuaXRlbXNbY29uZmlnLmNvbXBvbmVudElkXSB8fCB7fSxcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSBpdGVtc1tjb25maWcuZXZlbnROYW1lXSB8fCBbXSxcclxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICA9IGV2ZW50TGlzdGVuZXJzLmxlbmd0aCxcclxuICAgICAgICAgICAgbGlzdGVuZXI7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBldmVudExpc3RlbmVyc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5mbiA9PT0gY29uZmlnLmV2ZW50SGFuZGxlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuICAgID0gY29uZmlnLmV2ZW50SGFuZGxlck1ldGhvZDtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlID0gY29uZmlnLnNjb3BlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IHRydWUgaW4gY2FzZSB0aGUgZGVsZWdhdGlvbiBzdHJpbmcgbWF0Y2hlcyB0aGUgZXZlbnQgcGF0aFxyXG4gICAgICovXHJcbiAgICB2ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgcGF0aCkge1xyXG4gICAgICAgIGxldCBkZWxlZ2F0aW9uQXJyYXkgPSBsaXN0ZW5lci5kZWxlZ2F0ZS5zcGxpdCgnICcpLFxyXG4gICAgICAgICAgICBqICAgICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICAgPSBkZWxlZ2F0aW9uQXJyYXkubGVuZ3RoLFxyXG4gICAgICAgICAgICBwYXRoTGVuICAgICAgICAgPSBwYXRoLmxlbmd0aCxcclxuICAgICAgICAgICAgaGFzTWF0Y2gsIGksIGl0ZW0sIGlzSWQsIHRhcmdldElkO1xyXG5cclxuICAgICAgICBmb3IgKGk9bGVuLTE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW0gICAgID0gZGVsZWdhdGlvbkFycmF5W2ldO1xyXG4gICAgICAgICAgICBpc0lkICAgICA9IGl0ZW0uc3RhcnRzV2l0aCgnIycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzSWQgfHwgaXRlbS5zdGFydHNXaXRoKCcuJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICg7IGogPCBwYXRoTGVuOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAoaXNJZCAmJiBwYXRoW2pdLmlkID09PSBpdGVtKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhbal0uY2xzLmluY2x1ZGVzKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBwYXRoW2pdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgZGVsZWdhdGlvbiBwYXRoIGlzIGEgY2hpbGQgb2YgdGhlIG93bmVyIGNvbXBvbmVudHMgcm9vdCBub2RlXHJcbiAgICAgICAgZm9yICg7IGogPCBwYXRoTGVuOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhdGhbal0uaWQgPT09IGxpc3RlbmVyLnZub2RlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEb21FdmVudCk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERvbUV2ZW50KTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Gb2N1c1xyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIEZvY3VzIGV4dGVuZHMgQ29yZUJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Gb2N1cydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkZvY3VzJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdmb2N1cy1tYW5hZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdmb2N1cy1tYW5hZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb3B0cyBvYmplY3RzLlxyXG4gICAgICAgICAqIG9wdHMuY29tcG9uZW50UGF0aFxyXG4gICAgICAgICAqIG9wdHMuZGF0YVxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBoaXN0b3J5PVtdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaGlzdG9yeTogW10sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIERhdGUgb2JqZWN0IHdoZW4gdGhlIGxhc3QgZm9jdXNpbiBldmVudCBoYXMgb2NjdXJlZFxyXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxhc3RGb2N1c0luRGF0ZTogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgRGF0ZSBvYmplY3Qgd2hlbiB0aGUgbGFzdCBmb2N1c291dCBldmVudCBoYXMgb2NjdXJlZFxyXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxhc3RGb2N1c091dERhdGU6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGFtb3VudCBvZiB0aW1lIGZvciBhIGZvY3VzSW4gdG8gb2NjdXIgYWZ0ZXIgdGhlIGxhc3QgZm9jdXNPdXRcclxuICAgICAgICAgKiB0byBiZSB0aHJlYXRlZCBhcyBhIGZvY3VzbW92ZVxyXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4Rm9jdXNJbk91dEdhcD0xMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1heEZvY3VzSW5PdXRHYXA6IDEwLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBpdGVtcyBzdG9yZWQgaW5zaWRlIHRoZSBoaXN0b3J5IGFycmF5XHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhIaXN0b3J5TGVuZ3RoPTIwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWF4SGlzdG9yeUxlbmd0aDogMjBcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWRkVG9IaXN0b3J5KG9wdHMpIHtcclxuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcclxuXHJcbiAgICAgICAgaGlzdG9yeS51bnNoaWZ0KG9wdHMpO1xyXG5cclxuICAgICAgICBpZiAoaGlzdG9yeS5sZW5ndGggPj0gdGhpcy5tYXhIaXN0b3J5TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZvY3VzRW50ZXIob3B0cykge1xyXG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0hpc3Rvcnkob3B0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZm9jdXNMZWF2ZShvcHRzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZm9jdXNNb3ZlKG9wdHMpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGhpc3RvcnkgICAgICAgICAgPSBtZS5oaXN0b3J5LFxyXG4gICAgICAgICAgICBuZXdDb21wb25lbnRQYXRoID0gb3B0cy5jb21wb25lbnRQYXRoLFxyXG4gICAgICAgICAgICBvbGRDb21wb25lbnRQYXRoID0gaGlzdG9yeVswXS5jb21wb25lbnRQYXRoLFxyXG4gICAgICAgICAgICBmb2N1c0VudGVyICAgICAgID0gTmVvQXJyYXkuZGlmZmVyZW5jZShuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcclxuICAgICAgICAgICAgZm9jdXNMZWF2ZSAgICAgICA9IE5lb0FycmF5LmRpZmZlcmVuY2Uob2xkQ29tcG9uZW50UGF0aCwgbmV3Q29tcG9uZW50UGF0aCksXHJcbiAgICAgICAgICAgIGZvY3VzTW92ZSAgICAgICAgPSBOZW9BcnJheS5pbnRlcnNlY3Rpb24obmV3Q29tcG9uZW50UGF0aCwgb2xkQ29tcG9uZW50UGF0aCksXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCwgZGF0YTtcclxuXHJcbiAgICAgICAgbWUuc2V0Q29tcG9uZW50Rm9jdXMoe2NvbXBvbmVudFBhdGg6IGZvY3VzRW50ZXIsIGRhdGE6IG9wdHMuZGF0YX0sIHRydWUpO1xyXG4gICAgICAgIG1lLnNldENvbXBvbmVudEZvY3VzKHtjb21wb25lbnRQYXRoOiBmb2N1c0xlYXZlLCBkYXRhOiBvcHRzLmRhdGF9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGZvY3VzTW92ZS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhdGg6IG9wdHMuZGF0YS5wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFBhdGg6IGhpc3RvcnlbMF0uZGF0YS5wYXRoXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Lm9uRm9jdXNNb3ZlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm9uRm9jdXNNb3ZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKCdmb2N1c01vdmUnLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZS5hZGRUb0hpc3Rvcnkob3B0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb25Gb2N1c2luKG9wdHMpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5sYXN0Rm9jdXNJbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSAmJiBtZS5sYXN0Rm9jdXNJbkRhdGUgLSBtZS5sYXN0Rm9jdXNPdXREYXRlIDwgbWUubWF4Rm9jdXNJbk91dEdhcCkge1xyXG4gICAgICAgICAgICBtZS5mb2N1c01vdmUob3B0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWUuZm9jdXNFbnRlcihvcHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb25Gb2N1c291dChvcHRzKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUubGFzdEZvY3VzT3V0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSA+IG1lLmxhc3RGb2N1c0luRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgbWUuZm9jdXNMZWF2ZShvcHRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG1lLm1heEZvY3VzSW5PdXRHYXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udGFpbnNGb2N1c1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgY29udGFpbnNGb2N1cykge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQsIGhhbmRsZXI7XHJcblxyXG4gICAgICAgIG9wdHMuY29tcG9uZW50UGF0aC5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuY29udGFpbnNGb2N1cyA9IGNvbnRhaW5zRm9jdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGNvbnRhaW5zRm9jdXMgPyAnb25Gb2N1c0VudGVyJyA6ICdvbkZvY3VzTGVhdmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W2hhbmRsZXJdKG9wdHMuZGF0YS5wYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZShjb250YWluc0ZvY3VzID8gJ2ZvY3VzRW50ZXInIDogJ2ZvY3VzTGVhdmUnLCBvcHRzLmRhdGEucGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRm9jdXMpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShGb2N1cyk7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcclxuaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5JbnN0YW5jZVxyXG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkluc3RhbmNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuSW5zdGFuY2UnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2luc3RhbmNlLW1hbmFnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2luc3RhbmNlLW1hbmFnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBDb3JlQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBtZS5jb25zdW1lTmVvSWRNYXAoKTtcclxuXHJcbiAgICAgICAgTmVvLmdldCA9IG1lLmdldC5iaW5kKG1lKTsgLy8gYWxpYXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFsbCBpZHMgd2hpY2ggZ290IGFwcGxpZWQgdG8gdGhlIE5lbyBuYW1lc3BhY2UgYmVmb3JlIHRoaXMgaW5zdGFuY2UgZ290IGNyZWF0ZWRcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN1bWVOZW9JZE1hcCgpIHtcclxuICAgICAgICBpZiAoTmVvLmlkTWFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKE9iamVjdC52YWx1ZXMoTmVvLmlkTWFwKSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJbnN0YW5jZSk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEluc3RhbmNlKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkFycmF5J1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQXJyYXknXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kIGFzIGR1cGxpY2F0ZXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkKGFyciwgaXRlbXMpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEsIGJ1dCBub3QgaW4gYXJyYXkyXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlmZmVyZW5jZShhcnJheTE9W10sIGFycmF5Mj1bXSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTEuZmlsdGVyKGl0ZW0gPT4gIWFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGluZGV4IG9mIGl0ZW0gaXMgPiAtMVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGhhc0l0ZW0oYXJyLCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5pbmNsdWRlcyhpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxIGFuZCBhcnJheTJcclxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW50ZXJzZWN0aW9uKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBvZiBhcnJheTEgYXJlIHByZXNlbnQgaW4gYXJyYXkgMlxyXG4gICAgICogU3VwcG9ydHMgQXJyYXlzIGNvbnRhaW5pbmcgT2JqZWN0cywgbm90IEFycmF5cyBjb250YWluaW5nIEFycmF5c1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcXVhbChhcnJheTE9W10sIGFycmF5Mj1bXSkge1xyXG4gICAgICAgIGxldCBpICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICA9IGFycmF5MS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbjIgPSBhcnJheTIubGVuZ3RoLFxyXG4gICAgICAgICAgICBoYXNPYmplY3QsIGosIHZhbHVlO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gYXJyYXkxW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGhhc09iamVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaiAgICAgICAgID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QoYXJyYXkyW2pdKSAmJiBOZW8udXRpbC5PYmplY3QuaXNFcXVhbCh2YWx1ZSwgYXJyYXkyW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFhcnJheTIuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW92ZXMgYW4gaXRlbSBpbnNpZGUgYXJyIGZyb20gZnJvbUluZGV4IHRvIHRvSW5kZXhcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1vdmUoYXJyLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcclxuICAgICAgICBpZiAoZnJvbUluZGV4ID09PSB0b0luZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZnJvbUluZGV4ID49IGFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5LiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZW1vdmUoYXJyLCBpdGVtcykge1xyXG4gICAgICAgIGxldCBpbmRleDtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xyXG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgIGV4aXN0LCBvdGhlcndpc2UgYWRkcyBpdFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRvZ2dsZShhcnIsIGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNJdGVtKGFyciwgaXRlbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoYXJyLCBpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZChhcnIsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxIGFuZCBhcnJheTJcclxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTFcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MlxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdW5pb24oYXJyYXkxLCBhcnJheTIpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW10sXHJcbiAgICAgICAgICAgIG1lcmdlICA9IGFycmF5MS5jb25jYXQoYXJyYXkyKSxcclxuICAgICAgICAgICAgbGVuICAgID0gbWVyZ2UubGVuZ3RoLFxyXG4gICAgICAgICAgICBhc3NvYyAgPSB7fSxcclxuICAgICAgICAgICAgaXRlbTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBtZXJnZVtsZW5dO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhc3NvY1tpdGVtXSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBhc3NvY1tpdGVtXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb3IgQXJyYXkgb2YgaXRlbXMgdG8gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB1bnNoaWZ0KGFyciwgaXRlbXMpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIudW5zaGlmdChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOZW9BcnJheSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZW9BcnJheTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLnV0aWwuSGFzaEhpc3RvcnlcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBIYXNoSGlzdG9yeSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5DbGFzc1N5c3RlbSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkhhc2hIaXN0b3J5JyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoYXNoLWhpc3RvcnknXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2hhc2gtaGlzdG9yeScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc3RhY2s9W11cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YWNrOiBbXVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBmaXJzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhhc2hcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoYXNoU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1c2goaGFzaCwgaGFzaFN0cmluZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLnN0YWNrLnVuc2hpZnQoaGFzaCk7XHJcbiAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywgaGFzaCwgbWUuc3RhY2tbMV0sIGhhc2hTdHJpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIYXNoSGlzdG9yeSk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEhhc2hIaXN0b3J5KTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby51dGlsLlZEb21cclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WRG9tJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuVkRvbSdcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcclxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxyXG4gICAgICogICAgIHtPYmplY3R9IHZkb21cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpbmRWZG9tQ2hpbGQodmRvbSwgb3B0cywgaW5kZXgsIHBhcmVudE5vZGUpIHtcclxuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XHJcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOm9wdHN9O1xyXG5cclxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXHJcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXSxcclxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXHJcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gICAgICAgID0gdmRvbS5jbiAmJiB2ZG9tLmNuLmxlbmd0aCxcclxuICAgICAgICAgICAgb3B0c0FycmF5LCBvcHRzTGVuZ3RoLCBzdWJDaGlsZDtcclxuXHJcbiAgICAgICAgb3B0c0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKG9wdHMpO1xyXG4gICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICBvcHRzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2ZG9tLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodmRvbVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogZWl0aGVyIHNlYXJjaCB0aGUgdmRvbSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2ZG9tW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZkb21ba2V5XS5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkgJiYgdmRvbVtrZXldW3N0eWxlS2V5XSA9PT0gc3R5bGVWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kVmRvbUNoaWxkOiBzdHlsZSBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciBtaXhlZCB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgKE9iamVjdCBWUyBTdHJpbmcpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IG9wdHNMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHZkb21cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ZG9tLmNuW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbS5jbltpXSwgb3B0cywgaSwgdmRvbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IHN1YkNoaWxkLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHN1YkNoaWxkLnZkb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCBmb3IgZmluZFZkb21DaGlsZCh2ZG9tLCB7ZmxhZzogZmxhZ30pO1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmbGFnIFRoZSBmbGFnIHJlZmVyZW5jZSBzcGVjaWZpZWQgb24gdGhlIHRhcmdldCB2ZG9tIGNoaWxkIG5vZGVcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEJ5RmxhZyh2ZG9tLCBmbGFnKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcclxuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnZkb207XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZkb20gdHJlZVxyXG4gICAgICogQHBhcmFtIHZkb21cclxuICAgICAqIEBwYXJhbSBbY2hpbGRJZHM9W11dXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2ZG9tLCBjaGlsZElkcz1bXSkge1xyXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbSAmJiB2ZG9tLmNuIHx8IFtdO1xyXG5cclxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaGlsZElkcyA9IFZEb20uZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDb2x1bW5Ob2Rlcyh2ZG9tLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBjb2x1bW5Ob2RlcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodmRvbS5jbikge1xyXG4gICAgICAgICAgICB2ZG9tLmNuLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cuY24gJiYgcm93LmNuW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbk5vZGVzLnB1c2gocm93LmNuW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbHVtbk5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENvbHVtbk5vZGVzSWRzKHZkb20sIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIFZEb20uZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpLm1hcChlID0+IGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmxhZ1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gW21hdGNoQXJyYXldXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgb2YgdmRvbSBub2RlcyB3aGljaCBtYXRjaCB0aGUgZmxhZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0RmxhZ3ModmRvbSwgZmxhZywgbWF0Y2hBcnJheSkge1xyXG4gICAgICAgIGlmICghbWF0Y2hBcnJheSkge1xyXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAodmRvbS5mbGFnID09PSBmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godmRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB2ZG9tICYmIHZkb20uY24gfHwgW107XHJcblxyXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmZsYWcgPT09IGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gVkRvbS5nZXRGbGFncyhjaGlsZE5vZGUsIGZsYWcsIG1hdGNoQXJyYXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBhZnRlciBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc2VydEFmdGVyTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xyXG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnNlcnRCZWZvcmVOb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIFZEb20uaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYmVmb3JlIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zZXJ0QmVmb3JlIHRydWUgaW5zZXJ0cyB0aGUgbmV3IG5vZGUgYXQgdGhlIHNhbWUgaW5kZXgsIGluZGV4KzEgb3RoZXJ3aXNlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGluc2VydEJlZm9yZSkge1xyXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodGFyZ2V0Tm9kZUlkKSkge1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlSWQgPSB0YXJnZXROb2RlSWQuaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IFZEb20uZmluZFZkb21DaGlsZCh2ZG9tLCB7aWQ6IHRhcmdldE5vZGVJZH0pLFxyXG4gICAgICAgICAgICBpbmRleDtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldE5vZGUpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpbnNlcnRCZWZvcmUgPyB0YXJnZXROb2RlLmluZGV4IDogdGFyZ2V0Tm9kZS5pbmRleCArIDE7XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5jbi5zcGxpY2UoaW5kZXgsIDAsIG5vZGVUb0luc2VydCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21dXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCAmIHJlbW92ZWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlbW92ZVZkb21DaGlsZCh2ZG9tLCBvcHRzKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIG9wdHMpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5jbi5zcGxpY2UoY2hpbGQuaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2VzIGEgY2hpbGQgbm9kZSBpbnNpZGUgYSB2ZG9tIHRyZWUgYnkgYSBnaXZlbiBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld0NoaWxkTm9kZVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZXBsYWNlVmRvbUNoaWxkKHZkb20sIGlkLCBuZXdDaGlsZE5vZGUpIHtcclxuICAgICAgICBsZXQgY24gID0gdmRvbS5jbiB8fCBbXSxcclxuICAgICAgICAgICAgaSAgID0gMCxcclxuICAgICAgICAgICAgbGVuID0gY24ubGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGlsZE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh2ZG9tLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VWZG9tQ2hpbGQ6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjbltpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjbltpXSA9IG5ld0NoaWxkTm9kZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoVkRvbS5yZXBsYWNlVmRvbUNoaWxkKGNoaWxkTm9kZSwgaWQsIG5ld0NoaWxkTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOZW8udmRvbS5IZWxwZXIgd2lsbCBjcmVhdGUgaWRzIGZvciBlYWNoIHZub2RlLCBzbyB3ZSBuZWVkIHRvIHN5bmMgdGhlbSBpbnRvIHRoZSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSB2bm9kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN5bmNWZG9tSWRzKHZub2RlLCB2ZG9tKSB7XHJcbiAgICAgICAgaWYgKHZub2RlICYmIHZkb20pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2ZG9tLmNoaWxkTm9kZXMgfHwgdmRvbS5jbixcclxuICAgICAgICAgICAgICAgIGNuLCBpLCBsZW47XHJcblxyXG4gICAgICAgICAgICBpZiAodm5vZGUuaWQgJiYgdm5vZGUuaWQgIT09IHZkb20uaWQpIHtcclxuICAgICAgICAgICAgICAgIHZkb20uaWQgPSB2bm9kZS5pZDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZG9tIGlkIHNldCB0bycsIHZub2RlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGNuICAgPSBjaGlsZE5vZGVzLmZpbHRlcihpdGVtID0+IGl0ZW0ucmVtb3ZlRG9tICE9PSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGkgICAgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGVuICA9IGNuICYmIGNuLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGUuY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWRG9tLnN5bmNWZG9tSWRzKHZub2RlLmNoaWxkTm9kZXNbaV0sIGNuW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFZEb20pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVkRvbTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLnV0aWwuVk5vZGVcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgVk5vZGUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVk5vZGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WTm9kZSdcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggdm5vZGUgY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxyXG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXHJcbiAgICAgKiAgICAge09iamVjdH0gdm5vZGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpbmRDaGlsZFZub2RlKHZub2RlLCBvcHRzLCBpbmRleCwgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcclxuICAgICAgICBvcHRzICA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6IG9wdHN9O1xyXG5cclxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJNYXRjaCAgPSB0cnVlLFxyXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXHJcbiAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSB0cnVlLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZub2RlLmNoaWxkTm9kZXMgJiYgdm5vZGUuY2hpbGROb2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XHJcblxyXG4gICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKTtcclxuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbYXR0cktleSwgYXR0clZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoYXR0cktleSkgJiYgdm5vZGVba2V5XVthdHRyS2V5XSA9PT0gYXR0clZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygdm5vZGVba2V5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGVpdGhlciBzZWFyY2ggdGhlIHZub2RlIGFycmF5IGZvciBhbGwga2V5cyBvciBjb21wYXJlIGlmIHRoZSBhcnJheXMgYXJlIGVxdWFsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kQ2hpbGRWbm9kZTogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2bm9kZVtrZXldW3N0eWxlS2V5XSA9PT0gc3R5bGVWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxyXG4gICAgICAgICAgICAgICAgdm5vZGUgICAgIDogdm5vZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVk5vZGUuZmluZENoaWxkVm5vZGUodm5vZGUuY2hpbGROb2Rlc1tpXSwgb3B0cywgaSwgdm5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBzdWJDaGlsZC5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGUgICAgIDogc3ViQ2hpbGQudm5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBpZFxyXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBjaGlsZCB2bm9kZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmaW5kQ2hpbGRWbm9kZUJ5SWQodm5vZGUsIGlkKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGlsZE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZmluZENoaWxkVm5vZGVCeUlkKGNoaWxkTm9kZSwgaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXHJcbiAgICAgKiBAcGFyYW0gdm5vZGVcclxuICAgICAqIEBwYXJhbSBbY2hpbGRJZHM9W11dXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHM9W10pIHtcclxuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlICYmIHZub2RlLmNoaWxkTm9kZXMgfHwgW107XHJcblxyXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNoaWxkSWRzID0gVk5vZGUuZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2VzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld0NoaWxkVm5vZGVcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVwbGFjZUNoaWxkVm5vZGUodm5vZGUsIGlkLCBuZXdDaGlsZFZub2RlKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGlsZE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1tpXSA9IG5ld0NoaWxkVm5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFZOb2RlLnJlcGxhY2VDaGlsZFZub2RlKGNoaWxkTm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWTm9kZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWTm9kZTsiLCJpbXBvcnQgTmVvICAgICAgICAgICAgIGZyb20gJy4uL05lby5tanMnO1xyXG5pbXBvcnQgQmFzZSAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xyXG5pbXBvcnQgKiBhcyBjb3JlICAgICAgIGZyb20gJy4uL2NvcmUvX2V4cG9ydC5tanMnO1xyXG5pbXBvcnQgRG9tRXZlbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcclxuaW1wb3J0IEluc3RhbmNlICAgICAgICBmcm9tICcuLi9tYW5hZ2VyL0luc3RhbmNlLm1qcyc7XHJcbmltcG9ydCBBcHBsaWNhdGlvbiAgICAgZnJvbSAnLi4vY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMnO1xyXG5pbXBvcnQgSGFzaEhpc3RvcnkgICAgIGZyb20gJy4uL3V0aWwvSGFzaEhpc3RvcnkubWpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgQXBwIHdvcmtlciBjb250YWlucyBtb3N0IHBhcnRzIG9mIHRoZSBmcmFtZXdvcmsgYXMgd2VsbCBhcyBhbGwgYXBwcyB3aGljaCBnZXQgY3JlYXRlZC5cclxuICogU2VlIHRoZSB0dXRvcmlhbHMgZm9yIGZ1cnRoZXIgaW5mb3MuXHJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLkFwcFxyXG4gKiBAZXh0ZW5kcyBOZW8ud29ya2VyLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgQXBwIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuQXBwJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5BcHAnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2FwcC13b3JrZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2FwcC13b3JrZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBkYXRhPW51bGxcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkYXRhUmVtb3Rlc1JlZ2lzdGVyZWQ9MFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGF0YVJlbW90ZXNSZWdpc3RlcmVkOiAwLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB2ZG9tUmVtb3Rlc1JlZ2lzdGVyZWQ9MFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmRvbVJlbW90ZXNSZWdpc3RlcmVkOiAwLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2FwcCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdvcmtlcklkOiAnYXBwJyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdG9kbzogQXBwIG5lZWRzIHRvIGtub3cgaG93IG1hbnkgc2luZ2xldG9ucyBoYXZlIHJlbW90ZXMgcmVnaXN0ZXJlZCBoZXJlIHRvIGVuc3VyZSBhIGNvcnJlY3Qgc3RhcnRpbmcgcG9pbnRcclxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50RGF0YVJlbW90ZXM9MlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY291bnREYXRhUmVtb3RlczogMixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0b2RvOiBBcHAgbmVlZHMgdG8ga25vdyBob3cgbWFueSBzaW5nbGV0b25zIGhhdmUgcmVtb3RlcyByZWdpc3RlcmVkIGhlcmUgdG8gZW5zdXJlIGEgY29ycmVjdCBzdGFydGluZyBwb2ludFxyXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRWZG9tUmVtb3Rlcz0xXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb3VudFZkb21SZW1vdGVzOiAxXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgICBtZS5vbigncmVtb3RlcmVnaXN0ZXJlZCcsIG1lLm9uUmVtb3RlUmVnaXN0ZXJlZCwgbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlcnkgZG9tIGV2ZW50IHdpbGwgZ2V0IGZvcndhcmRlZCBhcyBhIHdvcmtlciBtZXNzYWdlIGZyb20gbWFpbiBhbmQgZW5kcyB1cCBoZXJlIGZpcnN0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB1c2VmdWwgZXZlbnQgcHJvcGVydGllcywgZGlmZmVycyBmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzLiBTZWUgTmVvLm1haW4uRG9tRXZlbnRzLlxyXG4gICAgICovXHJcbiAgICBvbkRvbUV2ZW50KGRhdGEpIHtcclxuICAgICAgICBEb21FdmVudE1hbmFnZXIuZmlyZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZXJ5IFVSTCBoYXNoLWNoYW5nZSB3aWxsIGNyZWF0ZSBhIHBvc3QgbWVzc2FnZSBpbiBtYWluIGFuZCBlbmQgdXAgaGVyZSBmaXJzdC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHBhcnNlZCBrZXktdmFsdWUgcGFpcnMgZm9yIGVhY2ggaGFzaCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBvbkhhc2hDaGFuZ2UoZGF0YSkge1xyXG4gICAgICAgIEhhc2hIaXN0b3J5LnB1c2goZGF0YS5oYXNoLCBkYXRhLmhhc2hTdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0YXJ0aW5nIHBvaW50IGZvciBhcHBzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICBvbkxvYWRBcHBsaWNhdGlvbihkYXRhKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgbWUuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIE5lby5jb25maWcucmVzb3VyY2VzUGF0aCA9IGRhdGEucmVzb3VyY2VzUGF0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbWUuZGF0YVJlbW90ZXNSZWdpc3RlcmVkID09PSBtZS5jb3VudERhdGFSZW1vdGVzICYmXHJcbiAgICAgICAgICAgIG1lLnZkb21SZW1vdGVzUmVnaXN0ZXJlZCA9PT0gbWUuY291bnRWZG9tUmVtb3Rlc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcclxuICAgICAgICAgICAgICAgIE5lby5vblN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKE5lby5jb25maWcuaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEhhc2hIaXN0b3J5LnB1c2goTmVvLmNvbmZpZy5oYXNoLCBOZW8uY29uZmlnLmhhc2hTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogaW4gY2FzZSBGRiBzdGlsbCBkb2VzIG5vdCBzdXBwb3J0IGR5bmFtaWMgaW1wb3J0cywgcmVtb3ZlIHRoZSBkeW5hbWljIGltcG9ydCBjYWxsIGZvciBGRiBkZXYgYnVpbGRzXHJcblxyXG4gICAgICAgICAgICAgICAgaW1wb3J0KFxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cclxuICAgICAgICAgICAgICAgICAgICAnLi4vLi4vJyArIG1lLmRhdGEucGF0aCkudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5vblN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmNvbmZpZy5oYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYXNoSGlzdG9yeS5wdXNoKE5lby5jb25maWcuaGFzaCwgTmVvLmNvbmZpZy5oYXNoU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFYWNoIHJlZ2lzdGVyZWQgcmVtb3RlIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhpcyByZWNlaXZlclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxyXG4gICAgICovXHJcbiAgICBvblJlbW90ZVJlZ2lzdGVyZWQocmVtb3RlKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgc3dpdGNoKHJlbW90ZS5vcmlnaW4pIHtcclxuICAgICAgICAgICAgY2FzZSAnZGF0YSc6XHJcbiAgICAgICAgICAgICAgICBtZS5kYXRhUmVtb3Rlc1JlZ2lzdGVyZWQrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd2ZG9tJzpcclxuICAgICAgICAgICAgICAgIG1lLnZkb21SZW1vdGVzUmVnaXN0ZXJlZCsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5vbkxvYWRBcHBsaWNhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBcHApO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShBcHApO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29yZUJhc2V9IGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xyXG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xyXG5pbXBvcnQgUmVtb3RlTWV0aG9kQWNjZXNzICAgIGZyb20gJy4vbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBhYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXJcclxuICogQGNsYXNzIE5lby53b3JrZXIuQmFzZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5Xb3JrZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLldvcmtlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nd29ya2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICd3b3JrZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9W09ic2VydmFibGUsIFJlbW90ZU1ldGhvZEFjY2Vzc11cclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3b3JrZXJJZD1udWxsXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB3b3JrZXJJZDogbnVsbFxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUucHJvbWlzZXMgPSB7fTtcclxuXHJcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWUub25NZXNzYWdlLmJpbmQobWUpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIE5lby53b3JrZXJJZCAgICAgID0gbWUud29ya2VySWQ7XHJcbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIgPSBtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxyXG4gICAgICovXHJcbiAgICBvbk1lc3NhZ2UoZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgZGF0YSAgICA9IGUuZGF0YSxcclxuICAgICAgICAgICAgYWN0aW9uICA9IGRhdGEuYWN0aW9uLFxyXG4gICAgICAgICAgICByZXBseUlkID0gZGF0YS5yZXBseUlkLFxyXG4gICAgICAgICAgICBwcm9taXNlO1xyXG5cclxuICAgICAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdyZXBseScpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXNbJ29uJyArIE5lby5jYXBpdGFsaXplKGFjdGlvbildKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZGF0YSwgZXJyLCBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChkYXRhLmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBlcnIubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcm9taXNlc1tyZXBseUlkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xyXG4gICAgICovXHJcbiAgICBvblBpbmcobXNnKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKG1zZywge1xyXG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqL1xyXG4gICAgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpIHtcclxuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKE5lby5jb25maWcsIG1zZy5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXHJcbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cclxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXHJcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcclxuXHJcbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICByZWplY3QgOiByZWplY3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSwgbWFpbiBvciB2ZG9tIChleGNsdWRpbmcgdGhlIGN1cnJlbnQgd29ya2VyKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cclxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxyXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cclxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xyXG4gICAgICAgIG9wdHMuZGVzdGluYXRpb24gPSBkZXN0O1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xyXG5cclxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XHJcblxyXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcclxuXHJcbi8qKlxyXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cclxuICogWW91IGNhbiBhZGQgb3B0aW9uYWwgcGFyYW1zIGFzIG5lZWRlZC5cclxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gKi9cclxuY2xhc3MgTWVzc2FnZSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aW9uXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9yaWdpbj1OZW8ud29ya2VySWRcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgY29uZmlnLmRlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uIHx8ICdtYWluJztcclxuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcclxuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8ud29ya2VyJywgdHJ1ZSk7XHJcbm5zWydNZXNzYWdlJ10gPSBNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHtNZXNzYWdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3NcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgUmVtb3RlTWV0aG9kQWNjZXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIubWl4aW5zLlJlbW90ZU1ldGhvZEFjY2VzcydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIubWl4aW5zLlJlbW90ZU1ldGhvZEFjY2VzcycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWl4aW4tcmVtb3RlLW1ldGhvZC1hY2Nlc3MnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ21peGluLXJlbW90ZS1tZXRob2QtYWNjZXNzJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kXHJcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogUHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCkge1xyXG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBvcmlnaW4gPSByZW1vdGUub3JpZ2luO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICAgICAgOiAncmVtb3RlTWV0aG9kJyxcclxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgIDogZGF0YSxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uICAgIDogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lLnByb21pc2VNZXNzYWdlKG9yaWdpbiwgb3B0cywgYnVmZmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcclxuICAgICAqL1xyXG4gICAgb25SZWdpc3RlclJlbW90ZShyZW1vdGUpIHtcclxuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcclxuICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSByZW1vdGUuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kcyAgID0gcmVtb3RlLm1ldGhvZHMsXHJcbiAgICAgICAgICAgICAgICBwa2cgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwa2dbbWV0aG9kXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIHJlbW90ZSBtZXRob2QgZGVmaW5pdGlvbiAnICsgY2xhc3NOYW1lICsgJy4nICsgbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwa2dbbWV0aG9kXSA9IG1lLmdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSAnbWFpbicpIHtcclxuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3JlbW90ZXJlZ2lzdGVyZWQnLCByZW1vdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqL1xyXG4gICAgb25SZW1vdGVNZXRob2QobXNnKSB7XHJcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcclxuICAgICAgICAgICAgb3V0LCBtZXRob2Q7XHJcblxyXG4gICAgICAgIGlmICghcGtnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbmFtZXNwYWNlIFwiJyArIG1zZy5yZW1vdGVDbGFzc05hbWUgKyAnXCInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZCA9IHBrZ1ttc2cucmVtb3RlTWV0aG9kXTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBtZXRob2QgbmFtZSBcIicgKyBtc2cucmVtb3RlTWV0aG9kICsgJ1wiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cuZGF0YSkpIHtcclxuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCBtc2cuZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICBvdXQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgICAgIG1lLnJlamVjdChtc2csIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBvdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZWplY3RlZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqL1xyXG4gICAgcmVqZWN0KG1zZywgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xyXG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxyXG4gICAgICAgICAgICBkYXRhICAgOiBkYXRhLFxyXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqL1xyXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIHtcclxuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcclxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XHJcblxyXG5leHBvcnQge1JlbW90ZU1ldGhvZEFjY2VzcyBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9