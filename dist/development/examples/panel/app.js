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
/******/ 	return __webpack_require__(__webpack_require__.s = "./buildScripts/webpack/entrypoints/examples/Panel.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./buildScripts/webpack/entrypoints/examples/Panel.mjs":
/*!*************************************************************!*\
  !*** ./buildScripts/webpack/entrypoints/examples/Panel.mjs ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_worker_App_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/worker/App.mjs */ "./src/worker/App.mjs");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../examples/panel/app.mjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL3dlYnBhY2svZW50cnlwb2ludHMvZXhhbXBsZXMvUGFuZWwubWpzIiwid2VicGFjazovLy8uL3NyYy9EZWZhdWx0Q29uZmlnLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTmVvLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGVjdGlvbi9GaWx0ZXIubWpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsZWN0aW9uL1NvcnRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvQXBwbGljYXRpb24ubWpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0Jhc2UubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Mb2dnZXIubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL09ic2VydmFibGUubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL19leHBvcnQubWpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VyL0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIvRG9tRXZlbnQubWpzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VyL0ZvY3VzLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlci9JbnN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQXJyYXkubWpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0hhc2hIaXN0b3J5Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9WRG9tLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9WTm9kZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci9BcHAubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci9NZXNzYWdlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyL21peGlucy9SZW1vdGVNZXRob2RBY2Nlc3MubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQXdDOzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNySkQ7QUFBQTtBQUFBO0FBQWdEOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJB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O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoiL2V4YW1wbGVzL3BhbmVsL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnVpbGRTY3JpcHRzL3dlYnBhY2svZW50cnlwb2ludHMvZXhhbXBsZXMvUGFuZWwubWpzXCIpO1xuIiwiaW1wb3J0ICcuLi8uLi8uLi8uLi9zcmMvd29ya2VyL0FwcC5tanMnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uL2V4YW1wbGVzL3BhbmVsL2FwcC5tanMnOyIsImNvbnN0IE5lbyA9IHNlbGYuTmVvIHx8IHt9O1xyXG5cclxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XHJcblxyXG4vKipcclxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xyXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgY29uZmlncywgZS5nLiBpbnNpZGUgdGhlIGluZGV4Lmh0bWwgb2YgeW91ciBhcHBcclxuICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICogQG5hbWUgY29uZmlnXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKi9cclxuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICduZW8tYm9keScgdG8gdGhlIGRvY3VtZW50LmJvZHkgY2xhc3NMaXN0XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUJvZHlDbHNcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cclxuICAgICAqIEBkZWZhdWx0IG51bGxcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcclxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXHJcbiAgICAgKi9cclxuICAgIGFwcFBhdGg6IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgZGlyZWN0b3J5XHJcbiAgICAgKiBAZGVmYXVsdCAnLi8nXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5iYXNlUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGJhc2VQYXRoOiAnLi8nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXRoIHRvIHRoZSBuZW8ubWpzIHRoZW1lIGNzcyBmaWxlc1xyXG4gICAgICogU2VlIG1haW4ubWl4aW5zLlN0eWxlc2hlZXQgPT4gY3JlYXRlU3R5bGVTaGVldCgpXHJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ2J1aWxkLycgKyBOZW8uY29uZmlnLmVudmlyb25tZW50XHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIFtjb25maWcuY3NzUGF0aF1cclxuICAgICAqIEBvcHRpb25hbFxyXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcclxuICAgICAqL1xyXG4gICAgY3NzUGF0aDogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgYnVpbGQgPT4gZGlzdCBlbnZpcm9ubWVudC4gVmFsaWQgdmFsdWVzOiAnZGV2ZWxvcG1lbnQnLCAncHJvZHVjdGlvbidcclxuICAgICAqIFVzZWQgZm9yIGF1dG9tYXRpY2FsbHkgaW5jbHVkaW5nIHRoZSBtYXRjaGluZyB0aGVtZSBmaWxlc1xyXG4gICAgICogQGRlZmF1bHQgJ3Byb2R1Y3Rpb24nXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5lbnZpcm9ubWVudFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGVudmlyb25tZW50OiAncHJvZHVjdGlvbicsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaWYgTmVvIGlzIHJ1bm5pbmcgd2l0aG91dCBhbnkgSlMgYnVpbGRzXHJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcuaXNFeHBlcmltZW50YWxcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgaXNFeHBlcmltZW50YWw6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIHRoZSBOZW8gbWFpbiB0aHJlYWQgaW5zaWRlIGFuIGlmcmFtZSAoU2llc3RhIEJyb3dzZXIgSGFybmVzcylcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5pc0luc2lkZVNpZXN0YVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpc0luc2lkZVNpZXN0YTogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XHJcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxyXG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5sb2NhbGVcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBsb2NhbGU6ICdkZWZhdWx0JyxcclxuICAgIC8qKlxyXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXHJcbiAgICAgKiBJZiBjb25maWcudXNlQ3NzNCA9PT0gdHJ1ZSwgb3RoZXIgdGhlbWUgdmFyaWFibGVzIHdpbGwgZ2V0IGluY2x1ZGVkIGFzIHdlbGxcclxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ11cclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnRoZW1lc1xyXG4gICAgICogQHR5cGUgU3RyaW5nW11cclxuICAgICAqL1xyXG4gICAgdGhlbWVzOiBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpZiB0byBsb2FkIHRoZSBmaWxlcyBuZWVkZWQgZm9yIHdvcmtpbmcgd2l0aCBhbUNoYXJ0c1xyXG4gICAgICogaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXHJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcudXNlQW1DaGFydHNcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgdXNlQW1DaGFydHM6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGlmIENTUzQgc3R5bGVzaGVldHMgYXJlIGluIHVzZSAoaW1wb3J0YW50IGZvciBzd2l0Y2hpbmcgdGhlbWVzKVxyXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ3NzNFxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VDc3M0OiB0cnVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIHdpbGwgYXV0b21hdGljYWxseSBpbmNsdWRlIHRoZSBzdHlsZXNoZWV0XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VGb250QXdlc29tZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VGb250QXdlc29tZTogdHJ1ZSxcclxuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXNcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcclxuICAgICAqIEB0eXBlIEJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZVxyXG59O1xyXG5cclxuT2JqZWN0LmFzc2lnbihEZWZhdWx0Q29uZmlnLCB7XHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAncmVzb3VyY2VzLydcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICovXHJcbiAgICByZXNvdXJjZXNQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdyZXNvdXJjZXMvJyxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRlZmF1bHQgYmFzZSBVUkwgZm9yIHdlYiB3b3JrZXIgZW50cnkgcG9pbnRzIChBcHAsIERhdGEsIFZkb20pXHJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3NyYy93b3JrZXIvJ1xyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcud29ya2VyQmFzZVBhdGhcclxuICAgICAqIEB0eXBlIFN0cmluZ1xyXG4gICAgICovXHJcbiAgICB3b3JrZXJCYXNlUGF0aDogKE5lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aCkgKyAnc3JjL3dvcmtlci8nXHJcbn0pO1xyXG5cclxuZXhwb3J0IHtEZWZhdWx0Q29uZmlnIGFzIGRlZmF1bHR9OyIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xyXG5cclxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXHJcbiAgICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxyXG4gKiBAbW9kdWxlIE5lb1xyXG4gKiBAc2luZ2xldG9uXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0IGFzIGNyZWF0ZVN0eWxlT2JqZWN0XHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQXJyYXkgICAgICAgICAgIGFzIGlzQXJyYXlcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ICAgICAgICAgIGFzIGlzT2JqZWN0XHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XHJcbiAqIEB0dXRvcmlhbCAwMV9Db25jZXB0XHJcbiAqL1xyXG5sZXQgTmVvID0gc2VsZi5OZW8gfHwge307XHJcblxyXG5OZW8gPSBzZWxmLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIG1hcCBjb250YWluaW5nIG50eXBlcyBhcyBrZXkgYW5kIE5lbyBjbGFzc2VzIG9yIHNpbmdsZXRvbnMgYXMgdmFsdWVzXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSBPYmplY3RcclxuICAgICAqL1xyXG4gICAgbnR5cGVNYXA6IHt9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBOZWVkZWQgZm9yIE5lby5jcmVhdGUuIEZhbHNlIGZvciB0aGUgbWFpbiB0aHJlYWQsIHRydWUgZm9yIHRoZSBBcHAsIERhdGEgJiBWZG9tIHdvcmtlclxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsbHkgdXNlZCBhdCB0aGUgZW5kIG9mIGVhY2ggY2xhc3MgLyBtb2R1bGUgZGVmaW5pdGlvblxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzIFRoZSBOZW8gY2xhc3MgdG8gYXBwbHkgY29uZmlncyB0b1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBhcHBseUNsYXNzQ29uZmlnKGNscykge1xyXG4gICAgICAgIGxldCBiYXNlQ2ZnICAgICAgID0gbnVsbCxcclxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXHJcbiAgICAgICAgICAgIGNvbmZpZyAgICAgICAgPSB7fSxcclxuICAgICAgICAgICAgcHJvdG8gICAgICAgICA9IGNscy5wcm90b3R5cGUgfHwgY2xzLFxyXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXHJcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgPSB7fSxcclxuICAgICAgICAgICAgY3RvcjtcclxuXHJcbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xyXG4gICAgICAgICAgICBjdG9yID0gcHJvdG8uY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3Rvci5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcclxuICAgICAgICAgICAgICAgIGJhc2VDZmcgICAgICAgPSBOZW8uY2xvbmUoY3Rvci5jb25maWcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xyXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZyAgICAgICA9IGJhc2VDZmcgICAgICAgPyBiYXNlQ2ZnICAgICAgIDogY29uZmlnO1xyXG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgPyBiYXNlU3RhdGljQ2ZnIDogc3RhdGljQ29uZmlnO1xyXG5cclxuICAgICAgICBwcm90b3MuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIGxldCBjZmcgICAgICAgPSBjdG9yLmdldENvbmZpZyAgICAgICAmJiBjdG9yLmdldENvbmZpZygpICAgICAgIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgc3RhdGljQ2ZnID0gY3Rvci5nZXRTdGF0aWNDb25maWcgJiYgY3Rvci5nZXRTdGF0aWNDb25maWcoKSB8fCB7fSxcclxuICAgICAgICAgICAgICAgIG1peGlucztcclxuXHJcbiAgICAgICAgICAgIGlmIChjZmcpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgtMSkgPT09ICdfJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2ZnW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZ1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9HZW5lcmF0ZUdldFNldChlbGVtZW50LCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBseSBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgbm8gc2V0dGVycyBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWhhc1Byb3BlcnR5U2V0dGVyKGVsZW1lbnQsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIGtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGUgIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCBzdGF0aWNDZmcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNmZy5oYXNPd25Qcm9wZXJ0eSgnbnR5cGUnKSkge1xyXG4gICAgICAgICAgICAgICAgTmVvLm50eXBlTWFwW2NmZy5udHlwZV0gPSBjZmcuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtaXhpbnMgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIGNvbmZpZy5taXhpbnMgfHwgW107XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGljQ2ZnICYmIHN0YXRpY0NmZy5vYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCgnTmVvLmNvcmUuT2JzZXJ2YWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdtaXhpbnMnKSAmJiBBcnJheS5pc0FycmF5KGNmZy5taXhpbnMpICYmIGNmZy5taXhpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBseU1peGlucyhjdG9yLCBtaXhpbnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgY2ZnLm1peGlucztcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5taXhpbnM7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgY2ZnKTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdGF0aWNDb25maWcsIHN0YXRpY0NmZyk7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzQ29uZmlnQXBwbGllZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBpc0NsYXNzICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDb25maWcgICAgICA6IE5lby5jbG9uZShzdGF0aWNDb25maWcsIHRydWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIGN0b3IuZ2V0Q29uZmlnO1xyXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5zaW5nbGV0b24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGEgY2xhc3MgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZS5cclxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcclxuICAgICAqL1xyXG4gICAgYXBwbHlUb0dsb2JhbE5zKGNscykge1xyXG4gICAgICAgIGxldCBwcm90byA9IHR5cGVvZiBjbHMgPT09ICdmdW5jdGlvbicgPyBjbHMucHJvdG90eXBlOiBjbHMsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcclxuXHJcbiAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnJlZ2lzdGVyVG9HbG9iYWxOcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgICAgIG5zQXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XHJcbiAgICAgICAgICAgIG5zICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG5zW2tleV0gPSBjbHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgbWV0aG9kcyBmcm9tIG9uZSBuYW1lc3BhY2UgdG8gYW5vdGhlciBvbmVcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyBhbGlhc2VzXHJcbiAgICAgKiBOZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XHJcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXHJcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxyXG4gICAgICogICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXHJcbiAgICAgKiAgICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcclxuICAgICAqICAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxyXG4gICAgICogICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcclxuICAgICAqICAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXHJcbiAgICAgKiAgICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXHJcbiAgICAgKiAgICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXHJcbiAgICAgKiAgICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXHJcbiAgICAgKiAgICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xyXG4gICAgICogfSwgdHJ1ZSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvfE5lby5jb3JlLkJhc2V9IHRhcmdldCBUaGUgdGFyZ2V0IGNsYXNzIG9yIHNpbmdsZXRvbiBJbnN0YW5jZSBvciBOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtiaW5kXSBzZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gYmluZCBtZXRob2RzIHRvIHRoZSBcImZyb21cIiBuYW1lc3BhY2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxyXG4gICAgICovXHJcbiAgICBhcHBseUZyb21Ocyh0YXJnZXQsIG5hbWVzcGFjZSwgY29uZmlnLCBiaW5kKSB7XHJcbiAgICAgICAgbGV0IGZuTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiBjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGZuTmFtZSA9IG5hbWVzcGFjZVt2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGJpbmQgPyBmbk5hbWUuYmluZChuYW1lc3BhY2UpIDogZm5OYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29waWVzIGFsbCBrZXlzIG9mIGRlZmF1bHRzIGludG8gdGFyZ2V0LCBpbiBjYXNlIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdFxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleXMgeW91IHdhbnQgdG8gY29weVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIGFzc2lnbkRlZmF1bHRzKHRhcmdldCwgZGVmYXVsdHMpIHtcclxuICAgICAgICBpZiAodGFyZ2V0ICYmIGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkZWVwPWZhbHNlXSBTZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY2xvbmUgbmVzdGVkIG9iamVjdHMgYXMgd2VsbFxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxyXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XHJcbiAgICAgKi9cclxuICAgIGNsb25lKG9iaiwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgbGV0IG91dDtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLm1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouY29uc3RydWN0b3IuaXNDbGFzcyAmJiBvYmogaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihvYmouY29uc3RydWN0b3IuaXNDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqOyAvLyByZXR1cm4gYWxsIG90aGVyIGRhdGEgdHlwZXNcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNsb25lTmVvSW5zdGFuY2UoaW5zdGFuY2UpIHtcclxuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcclxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcclxuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xyXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgTmVvLmNyZWF0ZSgpIGluc3RlYWQgb2YgXCJuZXdcIiB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIGFsbCBOZW8gY2xhc3Nlc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24ubWpzJztcclxuICAgICAqXHJcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24ubWpzJztcclxuICAgICAqXHJcbiAgICAgKiBOZW8uY3JlYXRlKHtcclxuICAgICAqICAgICBtb2R1bGUgOiBCdXR0b24sXHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmNvbXBvbmVudC5CdXR0b24nIHtcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8uY3JlYXRlKHtcclxuICAgICAqICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkJ1dHRvbicsXHJcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxOZW8uY29yZS5CYXNlfSBjbGFzc05hbWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xyXG4gICAgICAgIGxldCBjbHMsIGluc3RhbmNlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQgIT09IGNsYXNzTmFtZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjbGFzc05hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcuY2xhc3NOYW1lICYmICFjb25maWcubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgY29uc29sZS5lcnJvciBpbnN0ZWFkIG9mIHRocm93IHRvIHNob3cgdGhlIGNvbmZpZyBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb25maWcuY2xhc3NOYW1lID8gY29uZmlnLmNsYXNzTmFtZSA6IGNvbmZpZy5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFleGlzdHMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluc3RhbmNlID0gbmV3IGNscyhjb25maWcpO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5vbkNvbnN0cnVjdGVkKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGVtcHR5Rm4oKSB7fSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYSBjbGFzc05hbWUgc3RyaW5nIGludG8gYSBnbG9iYWwgbmFtZXNwYWNlXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogTmVvLm5zKCdOZW8uY29tcG9uZW50LkJ1dHRvbicsIHRydWUpO1xyXG4gICAgICogLy8gPT5cclxuICAgICAqIC8vIHNlbGYuTmVvID0gc2VsZi5OZW8gfHwge307XHJcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQgPSBzZWxmLk5lby5jb21wb25lbnQgfHwge307XHJcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uID0gc2VsZi5OZW8uY29tcG9uZW50LkJ1dHRvbiB8fCB7fTtcclxuICAgICAqIC8vIHJldHVybiBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uO1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gbmFtZXMgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjcmVhdGVdIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uIGV4aXN0aW5nIHBhcnRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgc2VsZlxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gcmVmZXJlbmNlIHRvIHRoZSB0b3BsZXZlbCBuYW1lc3BhY2VcclxuICAgICAqL1xyXG4gICAgbnMobmFtZXMsIGNyZWF0ZSwgc2NvcGUpIHtcclxuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcclxuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzY29wZSB8fCBzZWxmKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogTmVvLm50eXBlKCdidXR0b24nIHtcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnR5cGUoe1xyXG4gICAgICogICAgIG50eXBlICA6ICdidXR0b24nLFxyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XHJcbiAgICAgKiBAc2VlIHtAbGluayBtb2R1bGU6TmVvLmNyZWF0ZSBjcmVhdGV9XHJcbiAgICAgKi9cclxuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XHJcblxyXG4gICAgICAgIGlmICghY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3RhcnQ6IE5lby5lbXB0eUZuXHJcbn0sIE5lbyk7XHJcblxyXG4vKipcclxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xyXG4gKiBAdHlwZSB7c3RyaW5nW119XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCBpZ25vcmVNaXhpbiA9IFtcclxuICAgICdfbmFtZScsXHJcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcclxuICAgICdjbGFzc05hbWUnLFxyXG4gICAgJ2NvbnN0cnVjdG9yJyxcclxuICAgICdpc0NsYXNzJyxcclxuICAgICdtaXhpbicsXHJcbiAgICAnbnR5cGUnLFxyXG4gICAgJ29ic2VydmFibGUnLFxyXG4gICAgJ3JlZ2lzdGVyVG9HbG9iYWxOcydcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcclxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGV4aXN0cyhjbGFzc05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdO1xyXG4gICAgICAgIH0sIHNlbGYpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcclxuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNscztcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbWl4aW5Qcm90b1xyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgaWYgKH5pZ25vcmVNaXhpbi5pbmRleE9mKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvdG9ba2V5XSAmJiBwcm90b1trZXldLl9mcm9tKSB7XHJcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgcHJvdG8uY2xhc3NOYW1lICsgJzogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCcgK1xyXG4gICAgICAgICAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgIHByb3RvW2tleV0uX2Zyb20gKyAnKSA9PiAnICtcclxuICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcclxuICogQHBhcmFtIHtBcnJheX0gbWl4aW5zXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseU1peGlucyhjbHMsIG1peGlucykge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcclxuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcclxuICAgICAgICBsZW4gICAgICAgICAgPSBtaXhpbnMubGVuZ3RoLFxyXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxyXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcclxuXHJcbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xyXG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xyXG5cclxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xyXG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xyXG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluUHJvdG8uY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XHJcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbkNscy5wcm90b3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZShtaXhSZWR1Y2UobWl4aW5DbHMpLCBtaXhpbkNsYXNzZXMpO1xyXG5cclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzOyAvLyB0b2RvOiB3ZSBzaG91bGQgZG8gYSBkZWVwIG1lcmdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBzZXQgbWV0aG9kIGZvciBhIGdpdmVuIHByb3BlcnR5IGtleSBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcclxuICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgcHJvcGVydHkga2V5IHRvIHRlc3RcclxuICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSB7XHJcbiAgICBsZXQgZGVzY3JpcHRvcjtcclxuXHJcbiAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XHJcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRlc2NyaXB0b3Iuc2V0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XHJcbiAqIEBwcml2YXRlXHJcbiAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gKi9cclxuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcclxuICAgIGlmIChoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xyXG4gICAgICAgIHRocm93KCdDb25maWcgJyArIGtleSArICdfICgnICsgcHJvdG8uY2xhc3NOYW1lICsgJykgYWxyZWFkeSBoYXMgYSBzZXQgbWV0aG9kLCB1c2UgYmVmb3JlR2V0LCBiZWZvcmVTZXQgJiBhZnRlclNldCBpbnN0ZWFkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XHJcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XHJcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSAnYmVmb3JlR2V0JyArIE5lby5jYXBpdGFsaXplKGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSAgICA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgPSBoYXNOZXdLZXkgPyBuZXdLZXkgOiBtZVsnXycgKyBrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7IC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgc2V0dGVyID0+IGJlZm9yZVNldCwgYWZ0ZXJTZXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVbYmVmb3JlR2V0XSAmJiB0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgdUtleSAgICAgID0gTmVvLmNhcGl0YWxpemUoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZXQgPSAnYmVmb3JlU2V0JyArIHVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZXQgID0gJ2FmdGVyU2V0JyAgKyB1S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IHNldCBjYWxsIGhhcyB0byBkZWxldGUgdGhlIG1hdGNoaW5nIHN5bWJvbFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHN0b3JlIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGJlZm9yZVNldCBtb2RpZmljYXRpb24gYXMgd2VsbCxcclxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lW2JlZm9yZVNldF0gJiYgdHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZVNldF0odmFsdWUsIG9sZFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvZG86IHdlIGNvdWxkIGNvbXBhcmUgb2JqZWN0cyAmIGFycmF5cyBmb3IgZXF1YWxpdHlcclxuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZVthZnRlclNldF0gJiYgdHlwZW9mIG1lW2FmdGVyU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0odmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pO1xyXG59XHJcblxyXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuXHJcbk5lby5hc3NpZ25EZWZhdWx0cyhOZW8uY29uZmlnLCBEZWZhdWx0Q29uZmlnKTtcclxuXHJcbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3JlQmFzZSAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgRmlsdGVyICAgICBmcm9tICcuL0ZpbHRlci5tanMnO1xyXG5pbXBvcnQgTG9nZ2VyICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xyXG5pbXBvcnQgU29ydGVyICAgICBmcm9tICcuL1NvcnRlci5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuaW1wb3J0IFV0aWwgICAgICAgZnJvbSAnLi4vY29yZS9VdGlsLm1qcyc7XHJcblxyXG5jb25zdCBjb3VudE11dGF0aW9ucyAgID0gU3ltYm9sKCdjb3VudE11dGF0aW9ucycpLFxyXG4gICAgICBpc0ZpbHRlcmVkICAgICAgID0gU3ltYm9sKCdpc0ZpbHRlcmVkJyksXHJcbiAgICAgIGlzU29ydGVkICAgICAgICAgPSBTeW1ib2woJ2lzU29ydGVkJyksXHJcbiAgICAgIHNpbGVudFVwZGF0ZU1vZGUgPSBTeW1ib2woJ3NpbGVudFVwZGF0ZU1vZGUnKSxcclxuICAgICAgdG9BZGRBcnJheSAgICAgICA9IFN5bWJvbCgndG9BZGRBcnJheScpLFxyXG4gICAgICB0b1JlbW92ZUFycmF5ICAgID0gU3ltYm9sKCd0b1JlbW92ZUFycmF5JyksXHJcbiAgICAgIHVwZGF0aW5nSW5kZXggICAgPSBTeW1ib2woJ3VwZGF0aW5nSW5kZXgnKTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uQmFzZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29sbGVjdGlvbidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiBmaWx0ZXJpbmcgdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lLCBhbGxJdGVtcyB3aWxsIGJlY29tZSBhIG5ldyBjb2xsZWN0aW9uIGZvciB0aGUgdW5maWx0ZXJlZFxyXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcclxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfG51bGx9IGFsbEl0ZW1zXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBhbGxJdGVtczogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvU29ydFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGF1dG9Tb3J0OiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVzZSAncHJpbWl0aXZlJyBmb3IgZGVmYXVsdCBmaWx0ZXJzLCB1c2UgJ2FkdmFuY2VkJyBmb3IgZmlsdGVycyB1c2luZyBhIGZpbHRlckJ5IG1ldGhvZFxyXG4gICAgICAgICAqIHdoaWNoIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIGNvbGxlY3Rpb24gaXRlbXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1vZGU9J3ByaW1pdGl2ZSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBmaWx0ZXJNb2RlOiAncHJpbWl0aXZlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBBcnJheSBjb250YWluaW5nIE5lby51dGlsLkZpbHRlciBjb25maWcgb2JqZWN0cyBvciBpbnN0YW5jZXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gZmlsdGVyc189W11cclxuICAgICAgICAgKi9cclxuICAgICAgICBmaWx0ZXJzXzogW10sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHVuaXF1ZSghKSBrZXkgcHJvcGVydHkgb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW1cclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNfPVtdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXRlbXNfOiBbXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxyXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgdGhlIGtleSAmIHJlZmVyZW5jZSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbSBmb3IgZmFzdGVyIGFjY2Vzc1xyXG4gICAgICAgICAqIEBtZW1iZXIge01hcH0gbWFwXz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFwXzogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBkaXJlY3Rpb25zIGZvciBmYXN0ZXIgYWNjZXNzXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnREaXJlY3Rpb25zPW51bGxcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNvcnREaXJlY3Rpb25zOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGludGVybmFsIEFycmF5IG9mIHRoZSBzb3J0IHByb3BlcnRpZXMgZm9yIGZhc3RlciBhY2Nlc3NcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydFByb3BlcnRpZXM9bnVsbFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydFByb3BlcnRpZXM6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5Tb3J0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnRlcnNfPVtdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydGVyc186IFtdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc291cmNlSWRfPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3VyY2VJZF86IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgc3ltYm9sQ29uZmlnID0ge2VudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX07XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XHJcbiAgICAgICAgICAgIFtjb3VudE11dGF0aW9uc10gIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcclxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxyXG4gICAgICAgICAgICBbaXNTb3J0ZWRdICAgICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXHJcbiAgICAgICAgICAgIFtzaWxlbnRVcGRhdGVNb2RlXTogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcclxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxyXG4gICAgICAgICAgICBbdG9SZW1vdmVBcnJheV0gICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBbXX0sXHJcbiAgICAgICAgICAgIFt1cGRhdGluZ0luZGV4XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IDB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cclxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgYWRkKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNwbGljZSgwLCBudWxsLCBpdGVtKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goZmlsdGVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIub24oJ2NoYW5nZScsIG1lLm9uRmlsdGVyQ2hhbmdlLCBtZSk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgbWUuZmlsdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSA9IG1lLmtleVByb3BlcnR5LFxyXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gdmFsdWUubGVuZ3RoLFxyXG4gICAgICAgICAgICBpdGVtO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVtpXTtcclxuICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW2tleVByb3BlcnR5XSwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xyXG5cclxuICAgICAgICB2YWx1ZS5mb3JFYWNoKHNvcnRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc29ydGVyLm9uKCdjaGFuZ2UnLCBtZS5vblNvcnRlckNoYW5nZSwgbWUpO1xyXG4gICAgICAgICAgICAgICAgc29ydGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICYmIG1lLmF1dG9Tb3J0KSB7XHJcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldFNvdXJjZUlkKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgbWUuX2l0ZW1zID0gWy4uLnNvdXJjZS5faXRlbXNdO1xyXG4gICAgICAgICAgICBtZS5tYXAgICAgPSBuZXcgTWFwKHNvdXJjZS5tYXApOyAvLyBjcmVhdGVzIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIG1hcFxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRlOiBtZS5vbk11dGF0ZSxcclxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNvdXJjZS5vbihsaXN0ZW5lcnNDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyU2V0U291cmNlSWQnLCBzb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBOZW8uZ2V0KG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS51bihsaXN0ZW5lcnNDb25maWcpOyAvLyB0b2RvOiBjb3JlLk9ic2VydmFibGUudW4gbmVlZHMgdG8gc3VwcG9ydCB0aGlzIHN5bnRheFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZXMgdGhlIHNvcnQgcHJvcGVydHkgJiBkaXJlY3Rpb24gbXVsdGlwbGllciBvZiBlYWNoIHNvcnRlciBpbnNpZGUgMiBhcnJheXMgZm9yIGZhc3RlciBhY2Nlc3Mgd2hlbiBzb3J0aW5nXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhcHBseVNvcnRlckNvbmZpZ3MoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuc29ydERpcmVjdGlvbnMgPSBbXTtcclxuICAgICAgICBtZS5zb3J0UHJvcGVydGllcyA9IFtdO1xyXG5cclxuICAgICAgICBtZS5zb3J0ZXJzLmZvckVhY2goc29ydGVyID0+IHsvL2NvbnNvbGUubG9nKCdmb3JFYWNoJywgc29ydGVyKTtcclxuICAgICAgICAgICAgbWUuc29ydERpcmVjdGlvbnMucHVzaChzb3J0ZXIuZGlyZWN0aW9uTXVsdGlwbGllcik7XHJcbiAgICAgICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzLnB1c2goc29ydGVyLnByb3BlcnR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gb2xkVmFsdWVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIXZhbHVlID8gbmV3IE1hcCgpIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcclxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XHJcblxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluc3RhbmNlb2YgU29ydGVyKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldLm9wZXJhdG9yID09PSAoa2V5Lm9wZXJhdG9yIHx8ICc9PT0nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0ucHJvcGVydHkgPT09IGtleS5wcm9wZXJ0eSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0udmFsdWUgICAgPT09IGtleS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IG9sZFZhbHVlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShGaWx0ZXIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2xkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYmVmb3JlU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBbdmFsdWVdIDogW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVuID0gb2xkVmFsdWUgJiYgb2xkVmFsdWUubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xyXG5cclxuICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGtleSBpbnN0YW5jZW9mIFNvcnRlcikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmIG9sZFZhbHVlW2ldLmRpcmVjdGlvbiA9PT0ga2V5LmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKFNvcnRlciwga2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAga2V5LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdHNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNhY2hlVXBkYXRlKG9wdHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVVcGRhdGUnLCBvcHRzLCB0aGlzW3RvQWRkQXJyYXldKTtyZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXHJcbiAgICAgICAgICAgIGluZGV4LCB0b0FkZE1hcCwgdG9SZW1vdmVNYXA7XHJcblxyXG4gICAgICAgIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcclxuICAgICAgICAgICAgdG9BZGRNYXAgICAgPSBtZVt0b0FkZEFycmF5XSAgIC5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIHRvUmVtb3ZlTWFwID0gbWVbdG9SZW1vdmVBcnJheV0ubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgb3B0cy5hZGRlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3B0cy5yZW1vdmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgYW5kIGNsZWFycyB0aGUgbWFwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuZ2V0Q291bnQoKSk7XHJcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgZmlsdGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbEZpbHRlcnM9ZmFsc2VdXHJcbiAgICAgKi9cclxuICAgIGNsZWFyRmlsdGVycyhyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gcmVzdG9yZU9yaWdpbmFsRmlsdGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLmZpbHRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBzb3J0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxyXG4gICAgICogV2l0aG91dCByZXN0b3JlSW5pdGlhbFN0YXRlIGFzIHRydWUgdGhpcyB3aWxsIG5vdCBhZmZlY3QgdGhlIGN1cnJlbnQgc29ydGluZyBvZiB0aGlzIGNvbGxlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzPWZhbHNlXVxyXG4gICAgICovXHJcbiAgICBjbGVhclNvcnRlcnMocmVzdG9yZU9yaWdpbmFsU29ydGVycykge1xyXG4gICAgICAgIHRoaXMuc29ydGVycyA9IHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5zb3J0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V9IFRoZSBjbG9uZWQgY29sbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBjbG9uZSgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvbmZpZyAgPSBOZW8uY2xvbmUobWUub3JpZ2luYWxDb25maWcsIHRydWUpLFxyXG4gICAgICAgICAgICBmaWx0ZXJzID0gbWUuX2ZpbHRlcnMgfHwgW10sXHJcbiAgICAgICAgICAgIHNvcnRlcnMgPSBtZS5fc29ydGVycyB8fCBbXTtcclxuXHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcclxuICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcclxuICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XHJcblxyXG4gICAgICAgIGlmIChtZS5faXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25maWcuaXRlbXMgPSBbLi4ubWUuX2l0ZW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZy5maWx0ZXJzID0gW107XHJcbiAgICAgICAgY29uZmlnLnNvcnRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gdG9kbzogZmlsdGVycyAmIHNvcnRlcnMgc2hvdWxkIHB1c2ggdGhlaXIgY3VycmVudCBzdGF0ZSBhbmQgbm90IHRoZSBvcmlnaW5hbCBvbmVcclxuXHJcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xyXG4gICAgICAgICAgICBjb25maWcuZmlsdGVycy5wdXNoKGZpbHRlci5vcmlnaW5hbENvbmZpZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvcnRlcnMuZm9yRWFjaChmdW5jdGlvbihzb3J0ZXIpIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRlcnMucHVzaChzb3J0ZXIub3JpZ2luYWxDb25maWcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShCYXNlLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIHRoZSBtYXAgJiBpdGVtcyBhcnJheSBiZWZvcmUgdGhlIHN1cGVyIGNhbGxcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuX2l0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGRvU29ydCgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICA9IG1lLl9pdGVtcyxcclxuICAgICAgICAgICAgc29ydGVycyAgICAgICAgICAgPSBtZS5zb3J0ZXJzLFxyXG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9ucyAgICA9IG1lLnNvcnREaXJlY3Rpb25zLFxyXG4gICAgICAgICAgICBzb3J0UHJvcGVydGllcyAgICA9IG1lLnNvcnRQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBjb3VudFNvcnRlcnMgICAgICA9IHNvcnRQcm9wZXJ0aWVzLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgICA9IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IGZhbHNlLFxyXG4gICAgICAgICAgICBpLCBtYXBwZWRJdGVtcywgb2JqLCBzb3J0ZXIsIHNvcnRQcm9wZXJ0eSwgc29ydFZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoY291bnRTb3J0ZXJzID4gMCkge1xyXG4gICAgICAgICAgICBzb3J0ZXJzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc29ydEJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnVzZVRyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNTb3J0QnlNZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyICAgID0gc29ydGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlID0gc29ydGVyW3NvcnRlci5zb3J0QnkgPyAnc29ydEJ5JyA6ICdkZWZhdWx0U29ydEJ5J10oYSwgYik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCNTb3J0aW5nX3dpdGhfbWFwXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtpbmRleDogaW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlcnNbaV0udXNlVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbc29ydFByb3BlcnRpZXNbaV1dID0gc29ydGVyc1tpXS50cmFuc2Zvcm1WYWx1ZShpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMgPSBpdGVtcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnRpZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVtzb3J0UHJvcGVydHldID4gYltzb3J0UHJvcGVydHldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSAqIHNvcnREaXJlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVtzb3J0UHJvcGVydHldIDwgYltzb3J0UHJvcGVydHldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBtYXBwZWRJdGVtcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZVtpc1NvcnRlZF0gPSBjb3VudFNvcnRlcnMgPiAwO1xyXG5cclxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3VtZXMgdGhlIGNvbGxlY3Rpb24gZXZlbnRzLlxyXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcclxuICAgICAqIHlvdSBtdXN0IHVzZSB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSBmb3IgdGhpcyBjYWxsLlxyXG4gICAgICogVXNpbmcgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gd2lsbCBub3QgZmlyZSBhIG11dGF0aW9uIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cclxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb2xsZWN0aW9uLkJhc2Ujc3RhcnRVcGRhdGUgc3RhcnRVcGRhdGV9XHJcbiAgICAgKi9cclxuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XHJcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XHJcbiAgICAgICAgICAgIG1lW3VwZGF0aW5nSW5kZXhdLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5kU2lsZW50VXBkYXRlTW9kZSkge1xyXG4gICAgICAgICAgICBtZVtzaWxlbnRVcGRhdGVNb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ211dGF0ZScsIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogbWVbdG9BZGRBcnJheV0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IG1lW3RvUmVtb3ZlQXJyYXldXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0gICAuc3BsaWNlKDAsIG1lW3RvQWRkQXJyYXldICAgLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZSgwLCBtZVt0b1JlbW92ZUFycmF5XS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgZmlsdGVycyAgICAgICAgID0gbWUuX2ZpbHRlcnMsXHJcbiAgICAgICAgICAgIGNvdW50QWxsRmlsdGVycyA9IGZpbHRlcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxyXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgPSBtZS5hbGxJdGVtcyAmJiBtZS5hbGxJdGVtcy5faXRlbXMgfHwgbWUuX2l0ZW1zLFxyXG4gICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgICA9IFtdLFxyXG4gICAgICAgICAgICBjb25maWcsIGlzSW5jbHVkZWQsIGl0ZW0sIGosIHRtcEl0ZW1zO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50QWxsRmlsdGVyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlsdGVyc1tpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudEZpbHRlcnMgPT09IDAgJiYgbWUuYWxsSXRlbXMpIHtcclxuICAgICAgICAgICAgbWUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIG1lLml0ZW1zID0gWy4uLm1lLmFsbEl0ZW1zLl9pdGVtc107XHJcbiAgICAgICAgICAgIG1lLm1hcC5zZXQoLi4ubWUuYWxsSXRlbXMubWFwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW1lLmFsbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcgPSB7Li4ubWUub3JpZ2luYWxDb25maWd9O1xyXG5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuYWxsSXRlbXMgPSBOZW8uY3JlYXRlKEJhc2UsIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0eTogbWUua2V5UHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlSWQgICA6IG1lLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hpbGQgY29sbGVjdGlvbicsIG1lLmFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWUubWFwLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWUuZmlsdGVyTW9kZSA9PT0gJ3ByaW1pdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGZvciBsb29wcyBvbiBwdXJwb3NlIC0+IHBlcmZvcm1hbmNlXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSAgICAgICA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IGNvdW50QWxsRmlsdGVyczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW21lLmtleVByb3BlcnR5XSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi5pdGVtc107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb3VudEFsbEZpbHRlcnM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoZmlsdGVyZWRJdGVtc1tpXSwgZmlsdGVyZWRJdGVtcywgaXRlbXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLnRtcEl0ZW1zXTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudEl0ZW1zICAgID0gZmlsdGVyZWRJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuaXRlbXMgPSBmaWx0ZXJlZEl0ZW1zOyAvLyB1cGRhdGUgdGhlIG1hcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcclxuXHJcbiAgICAgICAgbWUuZmlyZSgnZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcclxuICAgICAqL1xyXG4gICAgZmluZChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgaXNPYmplY3RQcm9wZXJ0eSA9IE5lby5pc09iamVjdChwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGlzT2JqZWN0UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgcHJvcGVydGllc0xlbmd0aCA9IHByb3BlcnRpZXNBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBwcm9wZXJ0aWVzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIGl0ZW0gaW5zaWRlIHRoZSBzdGFydC1lbmQgcmFuZ2UuIFJldHVybiB0cnVlIGZvciBhIG1hdGNoLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZuLml0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlPXRoaXNdIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD10aGlzLmdldENvdW50KCldIFRoZSBlbmQgaW5kZXggKHVwIHRvLCBsYXN0IHZhbHVlIGV4Y2x1ZGVkKVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXHJcbiAgICAgKi9cclxuICAgIGZpbmRCeShmbiwgc2NvcGUsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpdGVtcyA9IFtdLFxyXG4gICAgICAgICAgICBpICAgICA9IHN0YXJ0IHx8IDAsXHJcbiAgICAgICAgICAgIGxlbiAgID0gZW5kICAgfHwgbWUuZ2V0Q291bnQoKTtcclxuXHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBtZTtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZm4uY2FsbChzY29wZSwgbWUuaXRlbXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGZpcnN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBrZXksIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lLlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGdldChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGZvciBhIGdpdmVuIGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBnZXRBdChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q291bnRNdXRhdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbY291bnRNdXRhdGlvbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmlsdGVyIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEByZXR1cm4ge05lby5jb2xsZWN0aW9uLkZpbHRlcnxudWxsfVxyXG4gICAgICovXHJcbiAgICBnZXRGaWx0ZXIocHJvcGVydHkpIHtcclxuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBbXSxcclxuICAgICAgICAgICAgaSAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgPSBmaWx0ZXJzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyc1tpXS5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgYSBnaXZlbiBpbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGdldEtleUF0KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtc1tpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbVt0aGlzLmtleVByb3BlcnR5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIHRoZSBpdGVtcyBhcnJheVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gWmVyby1iYXNlZCBpbmRleCBhdCB3aGljaCB0byBiZWdpbiBleHRyYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmRdIFplcm8tYmFzZWQgaW5kZXggYmVmb3JlIHdoaWNoIHRvIGVuZCBleHRyYWN0aW9uIChleHRyYWN0cyB1cCB0byBidXQgbm90IGluY2x1ZGluZyBlbmQpLlxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc2xpY2VcclxuICAgICAqL1xyXG4gICAgZ2V0UmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFNvdXJjZSBDb2xsZWN0aW9uIGluIGNhc2UgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZCBjb25maWcgd2FzIHNldFxyXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V8dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBnZXRTb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSWQgJiYgTmVvLmdldCh0aGlzLnNvdXJjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhIHZhbHVlIGhhcyBiZWVuIGFzc29jaWF0ZWQgdG8gdGhlIGtleSBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaGFzKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGFuIGl0ZW0gZXhpc3RzIGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBoYXNJdGVtKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGl0ZW1bdGhpcy5rZXlQcm9wZXJ0eV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5IG9yIGl0ZW1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGtleVxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXHJcbiAgICAgKi9cclxuICAgIGluZGV4T2Yoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoVXRpbC5pc09iamVjdChrZXkpID8ga2V5IDogdGhpcy5tYXAuZ2V0KGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gaXRlbVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxyXG4gICAgICovXHJcbiAgICBpbmRleE9mSXRlbShpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXlcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcclxuICAgICAqL1xyXG4gICAgaW5kZXhPZktleShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZih0aGlzLm1hcC5nZXQoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbVxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0KGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBmaWx0ZXJlZFxyXG4gICAgICovXHJcbiAgICBpc0ZpbHRlcmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW2lzRmlsdGVyZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGlzRmlsdGVyZWRJdGVtKGl0ZW0pIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGZpbHRlcnMgICAgPSBtZS5fZmlsdGVycyxcclxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBmaWx0ZXJzLmxlbmd0aCxcclxuICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLmlzRmlsdGVyZWQoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc0ZpbHRlcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkXHJcbiAgICAgKi9cclxuICAgIGlzU29ydGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW2lzU29ydGVkXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGxhc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RoaXMuZ2V0Q291bnQoKSAtMV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uRmlsdGVyQ2hhbmdlKG9wdHMpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvbk11dGF0ZShvcHRzKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG9wdHMucHJldmVudEJ1YmJsZVVwKSB7XHJcbiAgICAgICAgICAgIG1lLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5zcGxpY2UobnVsbCwgb3B0cy5yZW1vdmVkSXRlbXMsIG9wdHMuYWRkZWRJdGVtcyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbk11dGF0ZScsIG1lLmdldENvdW50KCksIG1lLmlkLCBvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb25Tb3J0ZXJDaGFuZ2Uob3B0cykge1xyXG4gICAgICAgIHRoaXMuYXBwbHlTb3J0ZXJDb25maWdzKCk7XHJcbiAgICAgICAgdGhpcy5kb1NvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBpdGVtcyBhcnJheSBhbmQgcmV0dXJucyB0aGlzIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKHRoaXMuZ2V0Q291bnQoKSAtMSwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGl0ZW1zIGNvdW50XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHB1c2goaXRlbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBnaXZlbiBrZXksIGl0ZW0gb3IgQXJyYXkgY29udGFpbmluZyBrZXlzfGl0ZW1zXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZShrZXkpIHtcclxuICAgICAgICB0aGlzLnNwbGljZSgwLCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUF0KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXHJcbiAgICAgKiBJbnRlbmRlZCBmb3IgY29sbGVjdGlvbnMgd2l0aG91dCBzb3J0ZXJzLlxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBpdGVtc1xyXG4gICAgICovXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICBsZXQgbXV0YXRpb24gPSB0aGlzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICByZXR1cm4gbXV0YXRpb24uYWRkZWRJdGVtc1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byB0ZXN0IGZvciBlYWNoIGl0ZW0sIHRha2luZyB0aHJlZSBwYXJhbWV0ZXJzOlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY2FsbGJhY2suaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIFtjYWxsYmFjay5pbmRleF0gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgIFtjYWxsYmFjay5pdGVtc10gVGhlIGl0ZW1zIGFycmF5IG9mIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gVmFsdWUgdG8gdXNlIGFzIFwidGhpc1wiIHdoZW4gZXhlY3V0aW5nIHRoZSBjYWxsYmFja1xyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUgZm9yIGFueSBjb2xsZWN0aW9uIGl0ZW0sIG90aGVyd2lzZSBmYWxzZVxyXG4gICAgICovXHJcbiAgICBzb21lKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc29tZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgaXRlbXMgZnJvbSBhbmQvb3IgYWRkcyBpdGVtcyB0byB0aGlzIGNvbGxlY3Rpb25cclxuICAgICAqIElmIHRoZSB0b1JlbW92ZUFycmF5IGlzIHVzZWQsIHRoZW4gdGhlIGluZGV4IGlzIG5vdCB1c2VkIGZvciByZW1vdmluZywgdGhlIGVudHJpZXMgYXJlIGZvdW5kIGJ5IGtleSBhbmQgcmVtb3ZlZCBmcm9tIHdoZXJlIHRoZXkgYXJlLlxyXG4gICAgICogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgdG9BZGRBcnJheSBpcyBhcHBlbmRlZCB0byB0aGUgQ29sbGVjdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxBcnJheX0gW3JlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5XVxyXG4gICAgICogQHBhcmFtIHtBcnJheXwgT2JqZWN0fSBbdG9BZGRBcnJheV1cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBhZGRlZEl0ZW1zICYgcmVtb3ZlZEl0ZW1zIGFycmF5c1xyXG4gICAgICovXHJcbiAgICBzcGxpY2UoaW5kZXgsIHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5LCB0b0FkZEFycmF5KSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNvdXJjZSAgICAgICAgICAgICA9IG1lLmdldFNvdXJjZSgpLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zICAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxyXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSAgICAgICAgPSBtZS5rZXlQcm9wZXJ0eSxcclxuICAgICAgICAgICAgbWFwICAgICAgICAgICAgICAgID0gbWUubWFwLFxyXG4gICAgICAgICAgICByZW1vdmVkSXRlbXMgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gVXRpbC5pc051bWJlcihyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXHJcbiAgICAgICAgICAgIHRvUmVtb3ZlQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXkocmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkpID8gcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkgOiBudWxsLFxyXG4gICAgICAgICAgICBpLCBpdGVtLCBrZXksIGxlbiwgdG9BZGRNYXA7XHJcblxyXG4gICAgICAgIGlmICghaW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4KSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihtZS5pZCArICc6IElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHJlbW92ZUNvdW50QXRJbmRleCBjYW5ub3QgYmUgdXNlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9BZGRBcnJheSA9IHRvQWRkQXJyYXkgJiYgIUFycmF5LmlzQXJyYXkodG9BZGRBcnJheSkgPyBbdG9BZGRBcnJheV0gOiB0b0FkZEFycmF5O1xyXG5cclxuICAgICAgICBpZiAodG9SZW1vdmVBcnJheSAmJiAobGVuID0gdG9SZW1vdmVBcnJheS5sZW5ndGgpID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodG9BZGRBcnJheSAmJiB0b0FkZEFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b1JlbW92ZUFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAga2V5ICA9IFV0aWwuaXNPYmplY3QoaXRlbSkgPyBpdGVtW2tleVByb3BlcnR5XSA6IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9BZGRNYXAgfHwgKHRvQWRkTWFwICYmIHRvQWRkTWFwLmluZGV4T2Yoa2V5KSA8IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVtb3ZlQ291bnRBdEluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcclxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGVba2V5UHJvcGVydHldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9BZGRBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIGtleSAgPSBVdGlsLmlzT2JqZWN0KGl0ZW0pID8gaXRlbVtrZXlQcm9wZXJ0eV0gOiBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpICYmICFtZS5pc0ZpbHRlcmVkSXRlbShpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhZGRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShVdGlsLmlzTnVtYmVyKGluZGV4KSA/IGluZGV4IDogaXRlbXMubGVuZ3RoLCAwLCAuLi5hZGRlZEl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLmRvU29ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghc291cmNlLmdldFNvdXJjZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UucHJldmVudEJ1YmJsZVVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtZS5wcmV2ZW50QnViYmxlVXApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VyY2Ugc3BsaWNlJywgc291cmNlLmlkLCAnYWRkZWQ6JywgLi4udG9BZGRBcnJheSwgJ3JlbW92ZWQ6JywgLi4ucmVtb3ZlZEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1lLnN0YXJ0VXBkYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlLnNwbGljZShudWxsLCB0b1JlbW92ZUFycmF5IHx8IHJlbW92ZWRJdGVtcywgdG9BZGRBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2UucHJldmVudEJ1YmJsZVVwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCB8fCByZW1vdmVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtZVtjb3VudE11dGF0aW9uc10rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ211dGF0ZScsIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgIDogdG9BZGRBcnJheSxcclxuICAgICAgICAgICAgICAgIHByZXZlbnRCdWJibGVVcDogbWUucHJldmVudEJ1YmJsZVVwLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zICAgOiB0b1JlbW92ZUFycmF5IHx8IHJlbW92ZWRJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcclxuICAgICAgICAgICAgbWUuY2FjaGVVcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiByZW1vdmVkSXRlbXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogYWRkZWRJdGVtcyxcclxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiByZW1vdmVkSXRlbXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJldmVudHMgdGhlIGNvbGxlY3Rpb24gZnJvbSBmaXJpbmcgZXZlbnRzIHVudGlsIGVuZFVwZGF0ZSBnZXRzIGNhbGxlZC5cclxuICAgICAqIElmIHlvdSBzdGFydCBhbiB1cGRhdGUgdXNpbmcgdGhlIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBwYXJhbSxcclxuICAgICAqIHRoZSBtdXRhdGlvbiBldmVudCB3aWxsIG5vdCBmaXJlIGFmdGVyIHVzaW5nIGVuZFVwZGF0ZSgpXHJcbiAgICAgKiAoeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGUgZW5kVXBkYXRlIGNhbGwgaW4gY2FzZSB5b3UgdXNlZFxyXG4gICAgICogc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGhlcmUpXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFydFNpbGVudFVwZGF0ZU1vZGVdXHJcbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI2VuZFVwZGF0ZSBlbmRVcGRhdGV9XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0VXBkYXRlKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xyXG4gICAgICAgIGlmIChzdGFydFNpbGVudFVwZGF0ZU1vZGUpIHtcclxuICAgICAgICAgICAgdGhpc1tzaWxlbnRVcGRhdGVNb2RlXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzW3VwZGF0aW5nSW5kZXhdKys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxyXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxyXG4gICAgICovXHJcbiAgICB1bnNoaWZ0KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNwbGljZSgwLCAwLCBpdGVtKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIG11dGF0ZSBldmVudCBmaXJlcyBhZnRlciBldmVyeSBzcGxpY2UgY2FsbCAoaW52b2tlZCBieSBhbGwgbWV0aG9kcyB3aGljaCBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGl0ZW1zIGFycmF5KS5cclxuICogQGV2ZW50IG11dGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBhZGRlZEl0ZW1zXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJldmVudEJ1YmJsZVVwIHByaXZhdGVcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVtb3ZlZEl0ZW1zXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uRmlsdGVyXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB0aGUgb3BlcmF0b3IgY29uZmlnOjxicj5cclxuICAgICAgICAgKiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb3BlcmF0b3JzOiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5GaWx0ZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnZmlsdGVyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR0aW5nIGRpc2FibGVkIHRvIHRydWUgd2lsbCBleGNsdWRlIHRoaXMgZmlsdGVyIGZyb20gdGhlIGNvbGxlY3Rpb24gZmlsdGVyaW5nIGxvZ2ljXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZWRfPWZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlzYWJsZWRfOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWVcclxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBmaWx0ZXJCeV89bnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZpbHRlckJ5XzogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIG1lYW5zIG5vdCBmaWx0ZXJpbmcgb3V0IGl0ZW1zIGluIGNhc2UgdGhlIHZhbHVlIGlzICcnLCBudWxsLCBbXSBvciB7fVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluY2x1ZGVFbXB0eVZhbHVlcz1mYWxzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluY2x1ZGVFbXB0eVZhbHVlczogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgZmxhZyB0byB0cnVlIGJlZm9yZSBzdGFydGluZyBidWxrIHVwZGF0ZXMgKGUuZy4gY2hhbmdpbmcgcHJvcGVydHkgJiB2YWx1ZSlcclxuICAgICAgICAgKiB0byBwcmV2ZW50IG11bHRpcGxlIGNoYW5nZSBldmVudHNcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzVXBkYXRpbmdfOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBsaXN0ZW5lckFwcGxpZWQ9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wZXJhdG9yIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcclxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiA9PSAobm90IHJlY29tbWVuZGVkKVxyXG4gICAgICAgICAqID09PVxyXG4gICAgICAgICAqICE9IChub3QgcmVjb21tZW5kZWQpXHJcbiAgICAgICAgICogIT09XHJcbiAgICAgICAgICogPFxyXG4gICAgICAgICAqID49XHJcbiAgICAgICAgICogPlxyXG4gICAgICAgICAqID49XHJcbiAgICAgICAgICogbGlrZSAoY29sbGVjdGlvblZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxyXG4gICAgICAgICAqIGluY2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxyXG4gICAgICAgICAqIGV4Y2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3BlcmF0b3I9Jz09PSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBvcGVyYXRvcl86ICc9PT0nLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgc2NvcGUgdG8gdXNlIGZvciB0aGUgZmlsdGVyQnkgbWV0aG9kLCBpbiBjYXNlIGl0IGlzIHByb3ZpZGVkLiBEZWZhdWx0cyB0byB0aGlzIGluc3RhbmNlLlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzY29wZT1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2NvcGU6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHZhbHVlIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFsdWVfOiBudWxsXHJcbiAgICB9fVxyXG5cclxuICAgIGFmdGVyU2V0RGlzYWJsZWQoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgLy8gdG9kb1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0SXNVcGRhdGluZyh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0T3BlcmF0b3IoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0UHJvcGVydHkoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0VmFsdWUoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVNldEZpbHRlckJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdmaWx0ZXJCeSBoYXMgdG8gYmUgYSBmdW5jdGlvbicsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBvcGVyYXRvciBjb25maWcgZ2V0cyBjaGFuZ2VkLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldE9wZXJhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXHJcbiAgICAgKi9cclxuICAgIGZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBtZS5pc1VwZGF0aW5nICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBtZS5vcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtZS5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZXRpb24gaXRlbSBtYXRjaGVzIHRoaXMgZmlsdGVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmVkSXRlbXMgSWYgdGhlIGNvbGxlY3Rpb24gZmlsdGVyTW9kZSBpcyBub3QgcHJpbWl0aXZlIGNvbnRhaW5zIHRoZSBpdGVtcyB3aGljaCBwYXNzZWRcclxuICAgICAqIHRoZSBwcmV2aW91cyBmaWx0ZXJzLCBvdGhlcndpc2UgYWxsIGNvbGxlY3Rpb24gaXRlbXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFsbEl0ZW1zIGFsbCBjb2xsZWN0aW9uIGl0ZW1zXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGaWx0ZXJlZChpdGVtLCBmaWx0ZXJlZEl0ZW1zLCBhbGxJdGVtcykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChtZS5fZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lLmluY2x1ZGVFbXB0eVZhbHVlcyAmJiAobWUuX3ZhbHVlID09PSBudWxsIHx8IE5lby5pc0VtcHR5KG1lLl92YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZS5fZmlsdGVyQnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lLmZpbHRlckJ5LmNhbGwobWUuc2NvcGUgfHwgbWUsIGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gIUZpbHRlclttZS5fb3BlcmF0b3JdKGl0ZW1bbWUuX3Byb3BlcnR5XSwgbWUuX3ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFsnPT0nXSAoYSwgYikge3JldHVybiBhID09IGI7fVxyXG4gICAgc3RhdGljIFsnPT09J10oYSwgYikge3JldHVybiBhID09PSBiO31cclxuICAgIHN0YXRpYyBbJyE9J10gKGEsIGIpIHtyZXR1cm4gYSAhPSBiO31cclxuICAgIHN0YXRpYyBbJyE9PSddKGEsIGIpIHtyZXR1cm4gYSAhPT0gYjt9XHJcbiAgICBzdGF0aWMgWyc8J10gIChhLCBiKSB7cmV0dXJuIGEgPCBiO31cclxuICAgIHN0YXRpYyBbJzw9J10gKGEsIGIpIHtyZXR1cm4gYSA8PSBiO31cclxuICAgIHN0YXRpYyBbJz4nXSAgKGEsIGIpIHtyZXR1cm4gYSA+IGI7fVxyXG4gICAgc3RhdGljIFsnPj0nXSAoYSwgYikge3JldHVybiBhID49IGI7fVxyXG5cclxuICAgIHN0YXRpYyBbJ2V4Y2x1ZGVkJ10oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBbJ2luY2x1ZGVkJ10oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgWydpc0RlZmluZWQnXShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgWydpc1VuZGVmaW5lZCddKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBbJ2xpa2UnXShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhiLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaWx0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uU29ydGVyXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFNvcnRlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NvcnRlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnRlcm5hbCBjb25maWcgd2hpY2ggbWFwcHMgdGhlIGRpcmVjdGlvbiBBU0MgdG8gMSwgLTEgb3RoZXJ3aXNlXHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpcmVjdGlvbk11bHRpcGxpZXI6IDEsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHNvcnQgZGlyZWN0aW9uIHdoZW4gdXNpbmcgYSBwcm9wZXJ0eS5cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbl89J0FTQydcclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXJlY3Rpb25fOiAnQVNDJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBsaXN0ZW5lckFwcGxpZWQ9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIHNvcnQgYnkuXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24sIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5ICYgZGlyZWN0aW9uXHJcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gc29ydEJ5PW51bGxcclxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0NvbGxhdG9yXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydEJ5OiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgdG8gdXNlIHRoZSB0cmFuc2Zvcm1WYWx1ZSBtZXRob2QgZm9yIGVhY2ggaXRlbSAodGhlIG1ldGhvZCBjYW4gZ2V0IG92ZXJyaWRkZW4pXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlVHJhbnNmb3JtVmFsdWU9dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXNlVHJhbnNmb3JtVmFsdWU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbWUuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgOiBtZS5wcm9wZXJ0eVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBtZS5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXHJcbiAgICAgKiBAcGFyYW0gYVxyXG4gICAgICogQHBhcmFtIGJcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdFNvcnRCeShhLCBiKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgYSA9IGFbbWUucHJvcGVydHldO1xyXG4gICAgICAgIGIgPSBiW21lLnByb3BlcnR5XTtcclxuXHJcbiAgICAgICAgaWYgKG1lLnVzZVRyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGEgPSBtZS50cmFuc2Zvcm1WYWx1ZShhKTtcclxuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxICogbWUuZGlyZWN0aW9uTXVsdGlwbGllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhIDwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gLTEgKiBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgeyp9IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybVZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTb3J0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvblxyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5CYXNlXHJcbiAqL1xyXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvbidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjcmVhdGVNYWluVmlldz10cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY3JlYXRlTWFpblZpZXc6IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5CYXNlfSBtYWluVmlld189bnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1haW5WaWV3XzogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG5hbWU9J015QXBwJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG5hbWU6ICdNeUFwcCcsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYXJlbnRJZD0nZG9jdW1lbnQuYm9keSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXJlbnRJZDogJ2RvY3VtZW50LmJvZHknLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlcmVkPWZhbHNlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZW5kZXJlZDogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nPWZhbHNlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZW5kZXJpbmc6IGZhbHNlXHJcbiAgICB9fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIE5lby5hcHBzID0gTmVvLmFwcHMgfHwge307XHJcblxyXG4gICAgICAgIE5lby5hcHBzW21lLm5hbWVdID0gbWU7XHJcblxyXG4gICAgICAgIGlmIChtZS5jcmVhdGVNYWluVmlldykge1xyXG4gICAgICAgICAgICBtZS5yZW5kZXJNYWluVmlldyhjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNYWluVmlldygpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5tYWluVmlld0luc3RhbmNlID0gTmVvLmNyZWF0ZShtZS5tYWluVmlldywge1xyXG4gICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5uYW1lLFxyXG4gICAgICAgICAgICBhdXRvUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJlbnRJZCAgOiBtZS5wYXJlbnRJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBcHBsaWNhdGlvbik7XHJcblxyXG4vLyBzaG9ydGN1dFxyXG5OZW8uYXBwID0gY29uZmlnID0+IE5lby5jcmVhdGUoQXBwbGljYXRpb24sIGNvbmZpZyk7XHJcblxyXG5leHBvcnQge0FwcGxpY2F0aW9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb3JlQmFzZX0gZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcbmltcG9ydCBIYXNoSGlzdG9yeSAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9IYXNoSGlzdG9yeS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5CYXNlXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQmFzZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkJhc2UnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbnRyb2xsZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2NvbnRyb2xsZXInXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgSGFzaEhpc3Rvcnkub24oJ2NoYW5nZScsIHRoaXMub25IYXNoQ2hhbmdlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYWNlaG9sZGVyIG1ldGhvZCB3aGljaCBnZXRzIHRyaWdnZXJlZCB3aGVuIHRoZSBoYXNoIGluc2lkZSB0aGUgYnJvd3NlciB1cmwgY2hhbmdlc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoYXNoU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIG9uSGFzaENoYW5nZSh2YWx1ZSwgb2xkVmFsdWUsIGhhc2hTdHJpbmcpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xyXG5cclxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcclxuXHJcbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxyXG4gICAgICBpc0luc3RhbmNlICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSB3aWxsIGdldCBhcHBsaWVkIHRvIHRoZSBjbGFzcyBjb25zdHJ1Y3RvclxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXHJcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdiYXNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW5zOiBudWxsXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZXMgdGhlIHN0YXRpYyBnZXRDb25maWcoKSBvYmplY3RcclxuICAgICAqIEFwcGxpZXMgdGhlIG9ic2VydmFibGUgbWl4aW4gaWYgbmVlZGVkLCBncmFudHMgcmVtb3RlIGFjY2VzcyBpZiBuZWVkZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xyXG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XHJcblxyXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSB8fCBtZS5taXhpbnMgJiYgTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgbWUubWl4aW5zKSkge1xyXG4gICAgICAgICAgICBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xyXG5cclxuICAgICAgICBpZiAobWUuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICBtZS5jb250cm9sbGVyLnBhcnNlQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBvbkNvbnN0cnVjdGVkKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaXMgZG9uZVxyXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1N1cHBvcnRlZCB2YWx1ZXMgZm9yICcgKyBuYW1lICsgJyBhcmU6JywgdmFsdWVzLmpvaW4oJywgJyksIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSWQoaWQpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIGlkID0gSWRHZW5lcmF0b3IuZ2V0SWQobWUubnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUuaWQgPSBpZDtcclxuXHJcbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIU5lby5pZE1hcCkge1xyXG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcclxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhtZSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBtZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcclxuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XHJcbiAgICAgICAgcmV0dXJuIChrZXkgPyBjZmdba2V5XSA6IGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIG1lLm1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSk7XHJcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByb2Nlc3NDb25maWdzKCkge1xyXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcclxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pO1xyXG5cclxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcclxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGdvdCBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcclxuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xyXG5cclxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxyXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXHJcbiAgICAgKi9cclxuICAgIGluaXRSZW1vdGUoKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHJlbW90ZSAgICA9IG1lLnJlbW90ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWUuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBvcmlnaW47XHJcblxyXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3Mgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy51bml0VGVzdE1vZGUgJiYgTmVvLmlzT2JqZWN0KHJlbW90ZSkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICAgICA6ICdyZWdpc3RlclJlbW90ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHMgICAgIDogbWV0aG9kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICAgOiBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIG1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XHJcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICAgICAgbWUub3JpZ2luYWxDb25maWcgPSBOZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxyXG4gICAgICovXHJcbiAgICBzZXQodmFsdWVzPXt9KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB1c2luZzpcclxuICAgICAgICAvLyBtZVtjb25maWdTeW1ib2xdID0gdmFsdWVzO1xyXG4gICAgICAgIC8vIHdlIGtlZXAgdGhlIE9iamVjdCBpbnN0YW5jZSAoZGVmaW5lZCB2aWEgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKSA9PiBub24gZW51bWVyYWJsZSlcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XHJcblxyXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cclxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5jb21wb25lbnQuQnV0dG9uIChuZW8tYnV0dG9uLTEpXVwiYFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZSArICcgKGlkOicgKyB0aGlzLmlkICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XHJcbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXHJcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cclxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxyXG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcclxuXHJcbkJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2U7XHJcblxyXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXHJcbiAqIEl0IGNvdWxkIGdldCBzaW1wbGlmaWVkIHRvIGp1c3QgYmVpbmcgYW4gb2JqZWN0IChuZWVkcyB0byBtYW51YWxseSBnZXQgcHV0IGludG8gdGhlIE5lbyBuYW1lc3BhY2UgaW4gdGhpcyBjYXNlKS5cclxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIElkR2VuZXJhdG9yIHtcclxuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xyXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naWQtZ2VuZXJhdG9yJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBiYXNlOiAnbmVvLScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPSd0cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gYWxpYXNcclxuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnN0cnVjdGVkKCkge31cclxuXHJcbiAgICBpbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0SWQobmFtZSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lIHx8ICduZW8nO1xyXG5cclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBtZS5pZENvdW50ZXIsXHJcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XHJcblxyXG4gICAgICAgIGNvdW50ZXJbbmFtZV0gPSArK2NvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJZEdlbmVyYXRvcik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuTG9nZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsb2dnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2xvZ2dlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2xvZydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldmVsOiAnbG9nJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIC8vIGFsaWFzZXNcclxuICAgICAgICBOZW8uYXBwbHlGcm9tTnMoTmVvLCB0aGlzLCB7XHJcbiAgICAgICAgICAgIGVycm9yICAgOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxyXG4gICAgICAgICAgICBsb2cgICAgIDogJ2xvZycsXHJcbiAgICAgICAgICAgIGxvZ0Vycm9yOiAnbG9nRXJyb3InLFxyXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGVycm9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBsb2coLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGluZm8oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnaW5mbyc7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBsb2dFcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdlcnJvcic7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICB3YXJuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gJ3dhcm4nO1xyXG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2dzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dnZXIpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShMb2dnZXIpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdtaXhpbi1vYnNlcnZhYmxlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxyXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcclxuICAgICAgICAgICAgbGlzdGVuZXJzO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcclxuXHJcbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm90by5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWcub2JzZXJ2YWJsZSAmJiAhcHJvdG8uY29uc3RydWN0b3IubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmUgICAgICAgICAgOiBtZS5maXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IG1lLnJlbW92ZUxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMuZm47XHJcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcclxuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0czsgLy8gVkMgaG9vaywgY2FuIGdldCBwYXJzZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpbiBjYXNlIHRoZSB2aWV3IHVzZXMgdGhlIHBhcmVudCBWQ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudENvbmZpZyA9IHtcclxuICAgICAgICAgICAgZm4gICAgOiBsaXN0ZW5lcixcclxuICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcclxuICAgICAgICAgICAgZGF0YSAgOiBkYXRhLFxyXG4gICAgICAgICAgICBpZCAgICA6IGV2ZW50SWQgfHwgTmVvLmdldElkKCdldmVudCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzICYmIG1lLmxpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgZXZlbnQgaGFuZGxlciBhdHRhY2hlZDogJyArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIGZpcmUobmFtZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBhcmdzICAgICAgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcclxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcclxuICAgICAgICAgICAgbGVuICAgID0gZXZlbnRzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcgPSBldmVudHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkKSB7XHJcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcclxuXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxpYXMgZm9yIGFkZExpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICBvbiguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICB1biguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XHJcblxyXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XHJcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWNhbWVsUmVnRXg6IC8oW2Etel0pKFtBLVpdKS9nXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBhIHN5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgVGhlIHN0eWxlcyBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBVdGlsLmlzU3RyaW5nKHN0cmluZykgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIGxvd2VyY2FzZS5cclxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFydHM7XHJcblxyXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xyXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXHJcblxyXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxyXG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxyXG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxyXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gaXRlcmFibGVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgbGV0IGxlbjtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xyXG5cclxuLy8gYWxpYXNlc1xyXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XHJcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcclxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcclxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXHJcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxyXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcclxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcclxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcclxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXHJcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxyXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXHJcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcclxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxyXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xyXG5pbXBvcnQgTG9nZ2VyICAgICAgZnJvbSAnLi9Mb2dnZXIubWpzJztcclxuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xyXG5pbXBvcnQgVXRpbCAgICAgICAgZnJvbSAnLi9VdGlsLm1qcyc7XHJcblxyXG5leHBvcnQge0Jhc2UsIExvZ2dlciwgT2JzZXJ2YWJsZSwgVXRpbH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvbGxlY3Rpb25CYXNlfSBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgb3RoZXIgbWFuYWdlciBjbGFzc2VzXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5CYXNlXHJcbiAqIEBleHRlbmRzIE5lby5jb2xsZWN0aW9uLkJhc2VcclxuICovXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb2xsZWN0aW9uQmFzZXtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQmFzZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkJhc2UnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UtbWFuYWdlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnYmFzZS1tYW5hZ2VyJ1xyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBnZXRCeUlkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihpdGVtKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG1lLmdldChpdGVtLmlkKSkge1xyXG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYW4gaXRlbSB3aXRoIGFuIGFscmVhZHkgZXhpc3RpbmcgaWQnLCBpdGVtLCBtZS5nZXQoaXRlbS5pZCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIoaXRlbSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcclxuXHJcbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIFZEb21VdGlsfSAgZnJvbSAnLi4vdXRpbC9WRG9tLm1qcyc7XHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBWTm9kZVV0aWx9IGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuQ29tcG9uZW50XHJcbiAqIEBleHRlbmRzIE5lby5tYW5hZ2VyLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkNvbXBvbmVudCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkNvbXBvbmVudCcsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29tcG9uZW50LW1hbmFnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2NvbXBvbmVudC1tYW5hZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICBOZW8uZ2V0Q29tcG9uZW50ID0gdGhpcy5nZXRCeUlkLmJpbmQodGhpcyk7IC8vIGFsaWFzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBjb21wb25lbnQgd2hpY2ggbWF0Y2hlcyB0aGUgY29uZmlnLXNlbGVjdG9yIG1vdmluZyBkb3duIHRoZSBjb21wb25lbnQgaXRlbXMgdHJlZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xyXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxyXG4gICAgICovXHJcbiAgICBkb3duKGNvbXBvbmVudElkLCBjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBjb21wb25lbnQgICA9IG1lLmdldEJ5SWQoY29tcG9uZW50SWQpLFxyXG4gICAgICAgICAgICBtYXRjaEFycmF5ICA9IFtdLFxyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG51bGwsXHJcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICAgPSBjb21wb25lbnQuaXRlbXMgJiYgY29tcG9uZW50Lml0ZW1zLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcclxuICAgICAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnQXJyYXkgID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKTtcclxuICAgICAgICBjb25maWdMZW5ndGggPSBjb25maWdBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lmhhc093blByb3BlcnR5KGtleSkgJiYgY29tcG9uZW50W2tleV0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBtZS5kb3duKGNvbXBvbmVudC5pdGVtc1tpXS5pZCwgY29uZmlnKTtcclxuICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdGhlIGNvbXBvbmVudCBpZCBpbiBjYXNlIHRoZXJlIGlzIGEgbWF0Y2hcclxuICAgICAqL1xyXG4gICAgZmluZFBhcmVudENvbXBvbmVudChwYXRoKSB7XHJcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGkgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiA9IHBhdGggJiYgcGF0aC5sZW5ndGggfHwgMCxcclxuICAgICAgICAgICAgaWQ7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWQgPSBwYXRoW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkICYmIG1lLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0b2RvOiByZXBsYWNlIGFsbCBjYWxscyBvZiB0aGlzIG1ldGhvZCB0byBjYWxscyB1c2luZyB0aGUgdXRpbC5WTm9kZSBjbGFzc1xyXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxyXG4gICAgICogQHBhcmFtIHZub2RlXHJcbiAgICAgKiBAcGFyYW0gY2hpbGRJZHNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcclxuICAgICAqL1xyXG4gICAgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzKSB7XHJcbiAgICAgICAgcmV0dXJuIFZOb2RlVXRpbC5nZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgY2hpbGQgY29tcG9uZW50cyBmb3VuZCBpbnNpZGUgdGhlIHZkb20gdHJlZVxyXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxyXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfSBjaGlsZENvbXBvbmVudHNcclxuICAgICAqL1xyXG4gICAgZ2V0Q2hpbGRyZW4oY29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50cyA9IFtdLFxyXG4gICAgICAgICAgICBjaGlsZE5vZGVzICAgICAgPSBWTm9kZVV0aWwuZ2V0Q2hpbGRJZHMoY29tcG9uZW50LnZub2RlKSxcclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQ7XHJcblxyXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQgPSB0aGlzLmdldChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIGlkcyBvZiBhbGwgcGFyZW50IGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119IHBhcmVudElkc1xyXG4gICAgICovXHJcbiAgICBnZXRQYXJlbnRJZHMoY29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudElkcyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5wYXJlbnRJZCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudElkcy5wdXNoKGNvbXBvbmVudC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJlbnRJZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBnZXRQYXJlbnRQYXRoKHBhdGgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudFBhdGggPSBbXSxcclxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgPSBwYXRoICYmIHBhdGgubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1lLmhhcyhwYXRoW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aC5wdXNoKHBhdGhbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50UGF0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gQXJyYXkgY29udGFpbmluZyBhbGwgcGFyZW50IGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IHBhcmVudHNcclxuICAgICAqL1xyXG4gICAgZ2V0UGFyZW50cyhjb21wb25lbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50cyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5wYXJlbnRJZCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBjb25maWdcclxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdXAoY29tcG9uZW50SWQsIGNvbmZpZykge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50SWQpLFxyXG4gICAgICAgICAgICBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoLCBtYXRjaEFycmF5O1xyXG5cclxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcclxuICAgICAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnQXJyYXkgID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKTtcclxuICAgICAgICBjb25maWdMZW5ndGggPSBjb25maWdBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25maWdBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKENvbXBvbmVudCk7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIENvbXBvbmVudE1hbmFnZXJ9IGZyb20gJy4vQ29tcG9uZW50Lm1qcyc7XHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBGb2N1c01hbmFnZXJ9ICAgICBmcm9tICcuL0ZvY3VzLm1qcyc7XHJcbmltcG9ydCBMb2dnZXIgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xyXG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgVkRvbVV0aWx9ICAgICAgICAgZnJvbSAnLi4vdXRpbC9WRG9tLm1qcyc7XHJcblxyXG5jb25zdCBldmVudENvbmZpZ0tleXMgPSBbXHJcbiAgICAnYnViYmxlJyxcclxuICAgICdkZWxlZ2F0ZScsXHJcbiAgICAnbG9jYWwnLFxyXG4gICAgJ3Njb3BlJyxcclxuICAgICd2bm9kZUlkJ1xyXG5dO1xyXG5cclxuY29uc3QgZ2xvYmFsRG9tRXZlbnRzID0gW1xyXG4gICAgJ2NoYW5nZScsXHJcbiAgICAnY2xpY2snLFxyXG4gICAgJ2NvbnRleHRtZW51JyxcclxuICAgICdmb2N1c2luJyxcclxuICAgICdmb2N1c291dCcsXHJcbiAgICAnaW5wdXQnLFxyXG4gICAgJ2tleWRvd24nLFxyXG4gICAgJ2tleXVwJyxcclxuICAgICdtb3VzZWVudGVyJyxcclxuICAgICdtb3VzZWxlYXZlJyxcclxuICAgICd3aGVlbCdcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuRG9tRXZlbnRcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBEb21FdmVudCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Eb21FdmVudCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkRvbUV2ZW50JyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkb20tZXZlbnQtbWFuYWdlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnZG9tLWV2ZW50LW1hbmFnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGlzdGVuZXJzPXt9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBpdGVtczoge30sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBtYXA9e31cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1hcDoge30sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZpcmUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgPSB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhICAgICAgID0gZXZlbnQuZGF0YSB8fCB7fSxcclxuICAgICAgICAgICAgZXZlbnROYW1lICA9IGV2ZW50LmV2ZW50TmFtZSxcclxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxpc3RlbmVycyAgPSBudWxsLFxyXG4gICAgICAgICAgICBwYXRoSWRzICAgID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpLFxyXG4gICAgICAgICAgICBwYXRoICAgICAgID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRQYXRoKHBhdGhJZHMpLFxyXG4gICAgICAgICAgICBsZW4gICAgICAgID0gcGF0aC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCwgZGVsZWdhdGlvblZkb20sIGRlbGVnYXRpb25UYXJnZXRJZCwgaWQsIHByZXZlbnRGaXJlLCB0YXJnZXRJZDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZCAgICAgICAgPSBwYXRoW2ldO1xyXG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50IHx8IGNvbXBvbmVudC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLml0ZW1zW2lkXSAmJiBtZS5pdGVtc1tpZF1bZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJlJywgZXZlbnROYW1lLCBkYXRhLCBsaXN0ZW5lcnMsIHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBsaXN0ZW5lci5mbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGlvblRhcmdldElkID0gbWUudmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIGRhdGEucGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRpb25UYXJnZXRJZCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgbW91c2VlbnRlciAmIGxlYXZlIHRvIGZpcmUgb24gdGhlaXIgdG9wIGxldmVsIG5vZGVzLCBub3QgZm9yIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ21vdXNlZW50ZXInIHx8IGV2ZW50TmFtZSA9PT0gJ21vdXNlbGVhdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgPyBkYXRhLmZyb21FbGVtZW50SWQgOiBkYXRhLnRvRWxlbWVudElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRJZCwgZGVsZWdhdGlvblRhcmdldElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJZCAmJiB0YXJnZXRJZCAhPT0gZGVsZWdhdGlvblRhcmdldElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0aW9uVmRvbSA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQoY29tcG9uZW50LnZkb20sIGRlbGVnYXRpb25UYXJnZXRJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRpb25WZG9tLnZkb20gJiYgVkRvbVV0aWwuZmluZFZkb21DaGlsZChkZWxlZ2F0aW9uVmRvbS52ZG9tLCB0YXJnZXRJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudEZpcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTmVvLmdldChpZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4uYXBwbHkobGlzdGVuZXIuc2NvcGUgfHwgc2VsZiwgW2RhdGFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXIuYnViYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIEZvY3VzTWFuYWdlciBhZnRlciBub3JtYWwgZG9tTGlzdGVuZXJzIG9uIHRoZXNlIGV2ZW50cyBnb3QgZXhlY3V0ZWRcclxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2ZvY3VzaW4nIHx8IGV2ZW50TmFtZSA9PT0gJ2ZvY3Vzb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgRm9jdXNNYW5hZ2VyWydvbicgKyBOZW8uY2FwaXRhbGl6ZShldmVudE5hbWUpXSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFidWJibGUpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb25maWdcclxuICAgICAqIEBwYXJhbSBzY29wZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVMaXN0ZW5lckNvbmZpZyhjb25maWcsIHNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGVsZWdhdGUgOiBjb25maWcuZGVsZWdhdGUsXHJcbiAgICAgICAgICAgIGV2ZW50TmFtZTogY29uZmlnLmV2ZW50TmFtZSxcclxuICAgICAgICAgICAgaWQgICAgICAgOiBzY29wZS5pZCxcclxuICAgICAgICAgICAgb3B0cyAgICAgOiBjb25maWcsXHJcbiAgICAgICAgICAgIHNjb3BlICAgIDogY29uZmlnLnNjb3BlICAgfHwgc2NvcGUsXHJcbiAgICAgICAgICAgIHZub2RlSWQgIDogY29uZmlnLnZub2RlSWQgfHwgc2NvcGUuaWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV2ZW50TmFtZShjb25maWcpIHtcclxuICAgICAgICBsZXQgZXZlbnROYW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKE5lby5pc09iamVjdChjb25maWcpKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudENvbmZpZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5kZWxlZ2F0ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcub3B0c1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBnZXRMaXN0ZW5lcihjb25maWcpIHtcclxuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5pdGVtcyxcclxuICAgICAgICAgICAgZXZlbnQ7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW2NvbmZpZy5pZF0pIHtcclxuICAgICAgICAgICAgZXZlbnQgPSBsaXN0ZW5lcnNbY29uZmlnLmlkXVtjb25maWcuZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW91bnRzIGxvY2FsIGRvbUV2ZW50IGxpc3RlbmVycyBmb3IgYSBnaXZlbiBjb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudCkge1xyXG4gICAgICAgIGxldCBsaXN0ZW5lcnMgICA9IGNvbXBvbmVudC5kb21MaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgIGxvY2FsRXZlbnRzID0gW10sXHJcbiAgICAgICAgICAgIGV2ZW50LCBldmVudE5hbWU7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycykuZm9yRWFjaChldmVudElkID0+IHtcclxuICAgICAgICAgICAgZXZlbnQgICAgID0gbGlzdGVuZXJzW2V2ZW50SWRdO1xyXG4gICAgICAgICAgICBldmVudE5hbWUgPSBldmVudC5ldmVudE5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lICYmIChldmVudC5sb2NhbCB8fCAhZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxFdmVudHMnLCBldmVudE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvY2FsRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgICA6IGV2ZW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnZG9tRXZlbnRMaXN0ZW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdm5vZGVJZDogZXZlbnQudm5vZGVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGxvY2FsRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgTmVvLndvcmtlci5BcHAucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAnYWRkRG9tTGlzdGVuZXInLFxyXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogY29tcG9uZW50LmFwcE5hbWUsXHJcbiAgICAgICAgICAgICAgICBldmVudHMgOiBsb2NhbEV2ZW50c1xyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGVkIGRvbUxpc3RlbmVyJywgZGF0YSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwOiBHb3QgZXJyb3IgYXR0ZW1wdGluZyB0byBhZGQgYSBkb21MaXN0ZW5lcicsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZGVsZWdhdGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5sb2NhbFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5vcHRzXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLm9yaWdpbmFsQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnByaW9yaXR5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBsaXN0ZW5lciBnb3QgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkgKGZhbHNlIGluIGNhc2UgaXQgd2FzIGFscmVhZHkgdGhlcmUpXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBhbHJlYWR5UmVnaXN0ZXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA9IGNvbmZpZy5ldmVudE5hbWUsXHJcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgID0gY29uZmlnLmlkLFxyXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgICAgICA9IHRoaXMuaXRlbXMsXHJcbiAgICAgICAgICAgIG9wdHMgICAgICAgICAgICAgID0gY29uZmlnLm9wdHMsXHJcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgID0gY29uZmlnLnNjb3BlLFxyXG4gICAgICAgICAgICBmblR5cGUgICAgICAgICAgICA9IHR5cGVvZiBvcHRzLFxyXG4gICAgICAgICAgICBmbiwgbGlzdGVuZXIsIGxpc3RlbmVyQ29uZmlnLCBsaXN0ZW5lcklkO1xyXG5cclxuICAgICAgICBpZiAoZm5UeXBlID09PSAnZnVuY3Rpb24nIHx8IGZuVHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZm4gPSBvcHRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZuICAgID0gb3B0cy5mbjtcclxuICAgICAgICAgICAgc2NvcGUgPSBvcHRzLnNjb3BlIHx8IHNjb3BlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaWRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpZF0gPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV07XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0ZW5lcikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uZm4udG9TdHJpbmcoKSA9PT0gZm4udG9TdHJpbmcoKSAmJiAvLyB0b2RvOiBhZGQgYSBiZXR0ZXIgY2hlY2tcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLnNjb3BlICAgICAgICAgPT09IHNjb3BlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5kZWxlZ2F0ZSAgICAgID09PSBjb25maWcuZGVsZWdhdGVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWxyZWFkeVJlZ2lzdGVyZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21hbmFnZXIuRG9tRXZlbnQgcmVnaXN0ZXInLCBldmVudE5hbWUsIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxpc3RlbmVySWQgPSBOZW8uZ2V0SWQoJ2RvbS1ldmVudCcpO1xyXG5cclxuICAgICAgICBjb25maWcubGlzdGVuZXJJZCA9IGxpc3RlbmVySWQ7XHJcblxyXG4gICAgICAgIGxpc3RlbmVyQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBidWJibGUgICAgICAgIDogY29uZmlnLmhhc093blByb3BlcnR5KCdidWJibGUnKSA/IGNvbmZpZy5idWJibGUgOiBvcHRzLmhhc093blByb3BlcnR5KCdidWJibGUnKSA/IG9wdHMuYnViYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IGNvbmZpZy5kZWxlZ2F0ZSxcclxuICAgICAgICAgICAgZm4gICAgICAgICAgICA6IGZuLFxyXG4gICAgICAgICAgICBpZCAgICAgICAgICAgIDogbGlzdGVuZXJJZCxcclxuICAgICAgICAgICAgbW91bnRlZCAgICAgICA6ICFjb25maWcubG9jYWwgJiYgZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSksXHJcbiAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnOiBjb25maWcub3JpZ2luYWxDb25maWcsXHJcbiAgICAgICAgICAgIHByaW9yaXR5ICAgICAgOiBjb25maWcucHJpb3JpdHkgfHwgMSxcclxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IHNjb3BlLFxyXG4gICAgICAgICAgICB2bm9kZUlkICAgICAgIDogY29uZmlnLnZub2RlSWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1hcFtsaXN0ZW5lcklkXSA9IGxpc3RlbmVyQ29uZmlnO1xyXG5cclxuICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lckNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXS5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5ID4gYi5wcmlvcml0eSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbGlzdGVuZXIgZGlkIGV4aXN0IGFuZCBnb3QgcmVtb3ZlZFxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKGNvbmZpZywgc2NvcGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndW5yZWdpc3RlcicsIGNvbmZpZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW5lciBmb3VuZCcsIGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRG9tTGlzdGVuZXJzKGNvbXBvbmVudCwgZG9tTGlzdGVuZXJzLCBvbGREb21MaXN0ZW5lcnMpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRMaXN0ZW5lcnMgPSBtZS5pdGVtc1tjb21wb25lbnQuaWRdIHx8IHt9LFxyXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVycztcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9tTGlzdGVuZXJzKSkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGREb21MaXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvbGREb21MaXN0ZW5lcnMuZm9yRWFjaChvbGREb21MaXN0ZW5lciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCAmIHJlbW92ZSBubyBsb25nZXIgZXhpc3RpbmcgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb21MaXN0ZW5lcnMuaW5jbHVkZXMob2xkRG9tTGlzdGVuZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHJlZ2lzdGVyZWRMaXN0ZW5lcnNbbWUuZ2V0RXZlbnROYW1lKG9sZERvbUxpc3RlbmVyKV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLm9yaWdpbmFsQ29uZmlnID09PSBvbGREb21MaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShsaXN0ZW5lcnMsIGxpc3RlbmVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLmZvckVhY2goZG9tTGlzdGVuZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZG9tTGlzdGVuZXIpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRDb25maWdLZXlzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IHZhbHVlLmRlbGVnYXRlIHx8IGRvbUxpc3RlbmVyLmRlbGVnYXRlIHx8ICcjJyArIGNvbXBvbmVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgIDogY29tcG9uZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cyAgICAgICAgICA6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGRvbUxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IGRvbUxpc3RlbmVyLnNjb3BlIHx8IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICAgICAgOiB2YWx1ZS52bm9kZUlkIHx8IGNvbXBvbmVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgIG1lLm1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ0NvbXBvbmVudC5kb21MaXN0ZW5lcnMgaGF2ZSB0byBiZSBhbiBhcnJheScsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZW5kZWQgZm9yIE5lby5jb250cm9sbGVyLkNvbXBvbmVudCB0byByZXBsYWNlIGxpc3RlbmVyIHBsYWNlaG9sZGVycyBwcm92aWRlZCBhcyBhIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5jb21wb25lbnRJZFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZmlnLmV2ZW50SGFuZGxlck1ldGhvZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjb25maWcuc2NvcGVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlTGlzdGVuZXJQbGFjZWhvbGRlcihjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICA9IG1lLml0ZW1zW2NvbmZpZy5jb21wb25lbnRJZF0gfHwge30sXHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gaXRlbXNbY29uZmlnLmV2ZW50TmFtZV0gfHwgW10sXHJcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBldmVudExpc3RlbmVycy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZXZlbnRMaXN0ZW5lcnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZm4gPT09IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbiAgICA9IGNvbmZpZy5ldmVudEhhbmRsZXJNZXRob2Q7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5zY29wZSA9IGNvbmZpZy5zY29wZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSB0cnVlIGluIGNhc2UgdGhlIGRlbGVnYXRpb24gc3RyaW5nIG1hdGNoZXMgdGhlIGV2ZW50IHBhdGhcclxuICAgICAqL1xyXG4gICAgdmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIHBhdGgpIHtcclxuICAgICAgICBsZXQgZGVsZWdhdGlvbkFycmF5ID0gbGlzdGVuZXIuZGVsZWdhdGUuc3BsaXQoJyAnKSxcclxuICAgICAgICAgICAgaiAgICAgICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgID0gZGVsZWdhdGlvbkFycmF5Lmxlbmd0aCxcclxuICAgICAgICAgICAgcGF0aExlbiAgICAgICAgID0gcGF0aC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhc01hdGNoLCBpLCBpdGVtLCBpc0lkLCB0YXJnZXRJZDtcclxuXHJcbiAgICAgICAgZm9yIChpPWxlbi0xOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtICAgICA9IGRlbGVnYXRpb25BcnJheVtpXTtcclxuICAgICAgICAgICAgaXNJZCAgICAgPSBpdGVtLnN0YXJ0c1dpdGgoJyMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0lkIHx8IGl0ZW0uc3RhcnRzV2l0aCgnLicpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGlzSWQgJiYgcGF0aFtqXS5pZCA9PT0gaXRlbSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoW2pdLmNscy5pbmNsdWRlcyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gcGF0aFtqXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbnN1cmUgdGhlIGRlbGVnYXRpb24gcGF0aCBpcyBhIGNoaWxkIG9mIHRoZSBvd25lciBjb21wb25lbnRzIHJvb3Qgbm9kZVxyXG4gICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoW2pdLmlkID09PSBsaXN0ZW5lci52bm9kZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tRXZlbnQpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShEb21FdmVudCk7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuRm9jdXNcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBGb2N1cyBleHRlbmRzIENvcmVCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuRm9jdXMnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Gb2N1cycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZm9jdXMtbWFuYWdlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnZm9jdXMtbWFuYWdlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIG9wdHMgb2JqZWN0cy5cclxuICAgICAgICAgKiBvcHRzLmNvbXBvbmVudFBhdGhcclxuICAgICAgICAgKiBvcHRzLmRhdGFcclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaGlzdG9yeT1bXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGhpc3Rvcnk6IFtdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3VzaW4gZXZlbnQgaGFzIG9jY3VyZWRcclxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGxhc3RGb2N1c0luRGF0ZT1udWxsXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBsYXN0Rm9jdXNJbkRhdGU6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIERhdGUgb2JqZWN0IHdoZW4gdGhlIGxhc3QgZm9jdXNvdXQgZXZlbnQgaGFzIG9jY3VyZWRcclxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGxhc3RGb2N1c0luRGF0ZT1udWxsXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBsYXN0Rm9jdXNPdXREYXRlOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBmb3IgYSBmb2N1c0luIHRvIG9jY3VyIGFmdGVyIHRoZSBsYXN0IGZvY3VzT3V0XHJcbiAgICAgICAgICogdG8gYmUgdGhyZWF0ZWQgYXMgYSBmb2N1c21vdmVcclxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEZvY3VzSW5PdXRHYXA9MTBcclxuICAgICAgICAgKi9cclxuICAgICAgICBtYXhGb2N1c0luT3V0R2FwOiAxMCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWF4aW11bSBhbW91bnQgb2YgaXRlbXMgc3RvcmVkIGluc2lkZSB0aGUgaGlzdG9yeSBhcnJheVxyXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4SGlzdG9yeUxlbmd0aD0yMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1heEhpc3RvcnlMZW5ndGg6IDIwXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFkZFRvSGlzdG9yeShvcHRzKSB7XHJcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB0aGlzLmhpc3Rvcnk7XHJcblxyXG4gICAgICAgIGhpc3RvcnkudW5zaGlmdChvcHRzKTtcclxuXHJcbiAgICAgICAgaWYgKGhpc3RvcnkubGVuZ3RoID49IHRoaXMubWF4SGlzdG9yeUxlbmd0aCkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmb2N1c0VudGVyKG9wdHMpIHtcclxuICAgICAgICB0aGlzLnNldENvbXBvbmVudEZvY3VzKG9wdHMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9IaXN0b3J5KG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZvY3VzTGVhdmUob3B0cykge1xyXG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZvY3VzTW92ZShvcHRzKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBoaXN0b3J5ICAgICAgICAgID0gbWUuaGlzdG9yeSxcclxuICAgICAgICAgICAgbmV3Q29tcG9uZW50UGF0aCA9IG9wdHMuY29tcG9uZW50UGF0aCxcclxuICAgICAgICAgICAgb2xkQ29tcG9uZW50UGF0aCA9IGhpc3RvcnlbMF0uY29tcG9uZW50UGF0aCxcclxuICAgICAgICAgICAgZm9jdXNFbnRlciAgICAgICA9IE5lb0FycmF5LmRpZmZlcmVuY2UobmV3Q29tcG9uZW50UGF0aCwgb2xkQ29tcG9uZW50UGF0aCksXHJcbiAgICAgICAgICAgIGZvY3VzTGVhdmUgICAgICAgPSBOZW9BcnJheS5kaWZmZXJlbmNlKG9sZENvbXBvbmVudFBhdGgsIG5ld0NvbXBvbmVudFBhdGgpLFxyXG4gICAgICAgICAgICBmb2N1c01vdmUgICAgICAgID0gTmVvQXJyYXkuaW50ZXJzZWN0aW9uKG5ld0NvbXBvbmVudFBhdGgsIG9sZENvbXBvbmVudFBhdGgpLFxyXG4gICAgICAgICAgICBjb21wb25lbnQsIGRhdGE7XHJcblxyXG4gICAgICAgIG1lLnNldENvbXBvbmVudEZvY3VzKHtjb21wb25lbnRQYXRoOiBmb2N1c0VudGVyLCBkYXRhOiBvcHRzLmRhdGF9LCB0cnVlKTtcclxuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNMZWF2ZSwgZGF0YTogb3B0cy5kYXRhfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBmb2N1c01vdmUuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQYXRoOiBvcHRzLmRhdGEucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBvbGRQYXRoOiBoaXN0b3J5WzBdLmRhdGEucGF0aFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudC5vbkZvY3VzTW92ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vbkZvY3VzTW92ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZSgnZm9jdXNNb3ZlJywgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWUuYWRkVG9IaXN0b3J5KG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uRm9jdXNpbihvcHRzKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUubGFzdEZvY3VzSW5EYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgJiYgbWUubGFzdEZvY3VzSW5EYXRlIC0gbWUubGFzdEZvY3VzT3V0RGF0ZSA8IG1lLm1heEZvY3VzSW5PdXRHYXApIHtcclxuICAgICAgICAgICAgbWUuZm9jdXNNb3ZlKG9wdHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLmZvY3VzRW50ZXIob3B0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uRm9jdXNvdXQob3B0cykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLmxhc3RGb2N1c091dERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgPiBtZS5sYXN0Rm9jdXNJbkRhdGUpIHtcclxuICAgICAgICAgICAgICAgIG1lLmZvY3VzTGVhdmUob3B0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBtZS5tYXhGb2N1c0luT3V0R2FwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnRhaW5zRm9jdXNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHNldENvbXBvbmVudEZvY3VzKG9wdHMsIGNvbnRhaW5zRm9jdXMpIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50LCBoYW5kbGVyO1xyXG5cclxuICAgICAgICBvcHRzLmNvbXBvbmVudFBhdGguZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNvbnRhaW5zRm9jdXMgPSBjb250YWluc0ZvY3VzO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBjb250YWluc0ZvY3VzID8gJ29uRm9jdXNFbnRlcicgOiAnb25Gb2N1c0xlYXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtoYW5kbGVyXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtoYW5kbGVyXShvcHRzLmRhdGEucGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoY29udGFpbnNGb2N1cyA/ICdmb2N1c0VudGVyJyA6ICdmb2N1c0xlYXZlJywgb3B0cy5kYXRhLnBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEZvY3VzKTtcclxuXHJcbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRm9jdXMpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XHJcbmltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuSW5zdGFuY2VcclxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5JbnN0YW5jZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkluc3RhbmNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpbnN0YW5jZS1tYW5hZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdpbnN0YW5jZS1tYW5hZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgQ29yZUJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbWUuY29uc3VtZU5lb0lkTWFwKCk7XHJcblxyXG4gICAgICAgIE5lby5nZXQgPSBtZS5nZXQuYmluZChtZSk7IC8vIGFsaWFzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbGwgaWRzIHdoaWNoIGdvdCBhcHBsaWVkIHRvIHRoZSBOZW8gbmFtZXNwYWNlIGJlZm9yZSB0aGlzIGluc3RhbmNlIGdvdCBjcmVhdGVkXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdW1lTmVvSWRNYXAoKSB7XHJcbiAgICAgICAgaWYgKE5lby5pZE1hcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZChPYmplY3QudmFsdWVzKE5lby5pZE1hcCkpO1xyXG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSW5zdGFuY2UpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJbnN0YW5jZSk7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8udXRpbC5BcnJheVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBOZW9BcnJheSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5BcnJheSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkFycmF5J1xyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZChhcnIsIGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xyXG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxLCBidXQgbm90IGluIGFycmF5MlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpZmZlcmVuY2UoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+ICFhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpbmRleCBvZiBpdGVtIGlzID4gLTFcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNJdGVtKGFyciwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXHJcbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGludGVyc2VjdGlvbihhcnJheTE9W10sIGFycmF5Mj1bXSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheTEuZmlsdGVyKGl0ZW0gPT4gYXJyYXkyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgb2YgYXJyYXkxIGFyZSBwcmVzZW50IGluIGFycmF5IDJcclxuICAgICAqIFN1cHBvcnRzIEFycmF5cyBjb250YWluaW5nIE9iamVjdHMsIG5vdCBBcnJheXMgY29udGFpbmluZyBBcnJheXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXF1YWwoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcclxuICAgICAgICBsZXQgaSAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgPSBhcnJheTEubGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW4yID0gYXJyYXkyLmxlbmd0aCxcclxuICAgICAgICAgICAgaGFzT2JqZWN0LCBqLCB2YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGFycmF5MVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGogICAgICAgICA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGFycmF5MltqXSkgJiYgTmVvLnV0aWwuT2JqZWN0LmlzRXF1YWwodmFsdWUsIGFycmF5MltqXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaGFzT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmICghYXJyYXkyLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdmVzIGFuIGl0ZW0gaW5zaWRlIGFyciBmcm9tIGZyb21JbmRleCB0byB0b0luZGV4XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtb3ZlKGFyciwgZnJvbUluZGV4LCB0b0luZGV4KSB7XHJcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZyb21JbmRleCA+PSBhcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyLnNwbGljZSh0b0luZGV4LCAwLCBhcnIuc3BsaWNlKGZyb21JbmRleCwgMSlbMF0pO1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgZnJvbSBhbiBhcnJheS4gT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVtb3ZlKGFyciwgaXRlbXMpIHtcclxuICAgICAgICBsZXQgaW5kZXg7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcclxuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzICBleGlzdCwgb3RoZXJ3aXNlIGFkZHMgaXRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0b2dnbGUoYXJyLCBpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGFyciwgaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGQoYXJyLCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXHJcbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTJcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHVuaW9uKGFycmF5MSwgYXJyYXkyKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdLFxyXG4gICAgICAgICAgICBtZXJnZSAgPSBhcnJheTEuY29uY2F0KGFycmF5MiksXHJcbiAgICAgICAgICAgIGxlbiAgICA9IG1lcmdlLmxlbmd0aCxcclxuICAgICAgICAgICAgYXNzb2MgID0ge30sXHJcbiAgICAgICAgICAgIGl0ZW07XHJcblxyXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xyXG4gICAgICAgICAgICBpdGVtID0gbWVyZ2VbbGVuXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXNzb2NbaXRlbV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgYXNzb2NbaXRlbV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kIGFzIGR1cGxpY2F0ZXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xyXG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTmVvQXJyYXkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmVvQXJyYXk7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby51dGlsLkhhc2hIaXN0b3J5XHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgSGFzaEhpc3RvcnkgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQ2xhc3NTeXN0ZW0nXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5IYXNoSGlzdG9yeScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naGFzaC1oaXN0b3J5J1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdoYXNoLWhpc3RvcnknLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHN0YWNrPVtdXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGFjazogW11cclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgZmlyc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaGFzaFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdXNoKGhhc2gsIGhhc2hTdHJpbmcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5zdGFjay51bnNoaWZ0KGhhc2gpO1xyXG4gICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIGhhc2gsIG1lLnN0YWNrWzFdLCBoYXNoU3RyaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGFzaEhpc3RvcnkpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShIYXNoSGlzdG9yeSk7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8udXRpbC5WRG9tXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFZEb20gZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVkRvbSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlZEb20nXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJlbnROb2RlXSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcclxuICAgICAqICAgICB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmaW5kVmRvbUNoaWxkKHZkb20sIG9wdHMsIGluZGV4LCBwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xyXG4gICAgICAgIG9wdHMgID0gdHlwZW9mIG9wdHMgIT09ICdzdHJpbmcnID8gb3B0cyA6IHtpZDpvcHRzfTtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkICAgICAgPSBudWxsLFxyXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXHJcbiAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSB0cnVlLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZkb20uY24gJiYgdmRvbS5jbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XHJcblxyXG4gICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKTtcclxuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmRvbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgTmVvLmlzQXJyYXkodmRvbVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGVpdGhlciBzZWFyY2ggdGhlIHZkb20gYXJyYXkgZm9yIGFsbCBrZXlzIG9yIGNvbXBhcmUgaWYgdGhlIGFycmF5cyBhcmUgZXF1YWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRWZG9tQ2hpbGQ6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3QodmRvbVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2ZG9tW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZkb21ba2V5XVtzdHlsZUtleV0gPT09IHN0eWxlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogc3R5bGUgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgbWl4ZWQgdGFyZ2V0ICYgc291cmNlIHR5cGVzIChPYmplY3QgVlMgU3RyaW5nKScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBvcHRzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBpbmRleCxcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXHJcbiAgICAgICAgICAgICAgICB2ZG9tICAgICAgOiB2ZG9tXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmRvbS5jbikge1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmRvbS5jbltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20uY25baV0sIG9wdHMsIGksIHZkb20pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViQ2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBzdWJDaGlsZC5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHN1YkNoaWxkLnBhcmVudE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZG9tICAgICAgOiBzdWJDaGlsZC52ZG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgZm9yIGZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmxhZyBUaGUgZmxhZyByZWZlcmVuY2Ugc3BlY2lmaWVkIG9uIHRoZSB0YXJnZXQgdmRvbSBjaGlsZCBub2RlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCeUZsYWcodmRvbSwgZmxhZykge1xyXG4gICAgICAgIGxldCBub2RlID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIHtmbGFnOiBmbGFnfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS52ZG9tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2ZG9tIHRyZWVcclxuICAgICAqIEBwYXJhbSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModmRvbSwgY2hpbGRJZHM9W10pIHtcclxuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZkb20gJiYgdmRvbS5jbiB8fCBbXTtcclxuXHJcbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGROb2RlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hpbGRJZHMgPSBWRG9tLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgY29sdW1uTm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHZkb20uY24pIHtcclxuICAgICAgICAgICAgdmRvbS5jbi5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93LmNuICYmIHJvdy5jbltpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5Ob2Rlcy5wdXNoKHJvdy5jbltpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2x1bW5Ob2RlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDb2x1bW5Ob2Rlc0lkcyh2ZG9tLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBWRG9tLmdldENvbHVtbk5vZGVzKHZkb20sIGluZGV4KS5tYXAoZSA9PiBlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWdcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFttYXRjaEFycmF5XVxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IG9mIHZkb20gbm9kZXMgd2hpY2ggbWF0Y2ggdGhlIGZsYWdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEZsYWdzKHZkb20sIGZsYWcsIG1hdGNoQXJyYXkpIHtcclxuICAgICAgICBpZiAoIW1hdGNoQXJyYXkpIHtcclxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZkb20uZmxhZyA9PT0gZmxhZykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHZkb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gdmRvbSAmJiB2ZG9tLmNuIHx8IFtdO1xyXG5cclxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5mbGFnID09PSBmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2goY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFZEb20uZ2V0RmxhZ3MoY2hpbGROb2RlLCBmbGFnLCBtYXRjaEFycmF5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYWZ0ZXIgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnNlcnRBZnRlck5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQpIHtcclxuICAgICAgICByZXR1cm4gVkRvbS5pbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYmVmb3JlIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zZXJ0QmVmb3JlTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xyXG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGJlZm9yZSBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc2VydEJlZm9yZSB0cnVlIGluc2VydHMgdGhlIG5ldyBub2RlIGF0IHRoZSBzYW1lIGluZGV4LCBpbmRleCsxIG90aGVyd2lzZVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCBpbnNlcnRCZWZvcmUpIHtcclxuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHRhcmdldE5vZGVJZCkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZUlkID0gdGFyZ2V0Tm9kZUlkLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2lkOiB0YXJnZXROb2RlSWR9KSxcclxuICAgICAgICAgICAgaW5kZXg7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXROb2RlKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaW5zZXJ0QmVmb3JlID8gdGFyZ2V0Tm9kZS5pbmRleCA6IHRhcmdldE5vZGUuaW5kZXggKyAxO1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlLnBhcmVudE5vZGUuY24uc3BsaWNlKGluZGV4LCAwLCBub2RlVG9JbnNlcnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCB2ZG9tIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgJiByZW1vdmVkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZW1vdmVWZG9tQ2hpbGQodmRvbSwgb3B0cykge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IFZEb20uZmluZFZkb21DaGlsZCh2ZG9tLCBvcHRzKTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUuY24uc3BsaWNlKGNoaWxkLmluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW5zaWRlIGEgdmRvbSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZE5vZGVcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVwbGFjZVZkb21DaGlsZCh2ZG9tLCBpZCwgbmV3Q2hpbGROb2RlKSB7XHJcbiAgICAgICAgbGV0IGNuICA9IHZkb20uY24gfHwgW10sXHJcbiAgICAgICAgICAgIGkgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiA9IGNuLmxlbmd0aCxcclxuICAgICAgICAgICAgY2hpbGROb2RlO1xyXG5cclxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlVmRvbUNoaWxkOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY2hpbGROb2RlID0gY25baV07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgY25baV0gPSBuZXdDaGlsZE5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFZEb20ucmVwbGFjZVZkb21DaGlsZChjaGlsZE5vZGUsIGlkLCBuZXdDaGlsZE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmVvLnZkb20uSGVscGVyIHdpbGwgY3JlYXRlIGlkcyBmb3IgZWFjaCB2bm9kZSwgc28gd2UgbmVlZCB0byBzeW5jIHRoZW0gaW50byB0aGUgdmRvbVxyXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gdm5vZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzeW5jVmRvbUlkcyh2bm9kZSwgdmRvbSkge1xyXG4gICAgICAgIGlmICh2bm9kZSAmJiB2ZG9tKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbS5jaGlsZE5vZGVzIHx8IHZkb20uY24sXHJcbiAgICAgICAgICAgICAgICBjbiwgaSwgbGVuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZub2RlLmlkICYmIHZub2RlLmlkICE9PSB2ZG9tLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB2ZG9tLmlkID0gdm5vZGUuaWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmRvbSBpZCBzZXQgdG8nLCB2bm9kZS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjbiAgID0gY2hpbGROb2Rlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlbW92ZURvbSAhPT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpICAgID0gMDtcclxuICAgICAgICAgICAgICAgIGxlbiAgPSBjbiAmJiBjbi5sZW5ndGggfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkRvbS5zeW5jVmRvbUlkcyh2bm9kZS5jaGlsZE5vZGVzW2ldLCBjbltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWRG9tKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZEb207IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby51dGlsLlZOb2RlXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFZOb2RlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlZOb2RlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuVk5vZGUnXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoIHZub2RlIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcclxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxyXG4gICAgICogICAgIHtPYmplY3R9IHZub2RlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmaW5kQ2hpbGRWbm9kZSh2bm9kZSwgb3B0cywgaW5kZXgsIHBhcmVudE5vZGUpIHtcclxuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XHJcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOiBvcHRzfTtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkICAgICAgPSBudWxsLFxyXG4gICAgICAgICAgICBhdHRyTWF0Y2ggID0gdHJ1ZSxcclxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxyXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcclxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2bm9kZS5jaGlsZE5vZGVzICYmIHZub2RlLmNoaWxkTm9kZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBvcHRzQXJyYXksIG9wdHNMZW5ndGgsIHN1YkNoaWxkO1xyXG5cclxuICAgICAgICBvcHRzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMob3B0cyk7XHJcbiAgICAgICAgb3B0c0xlbmd0aCA9IG9wdHNBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgIG9wdHNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHZub2RlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgTmVvLmlzT2JqZWN0KHZub2RlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2F0dHJLZXksIGF0dHJWYWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KGF0dHJLZXkpICYmIHZub2RlW2tleV1bYXR0cktleV0gPT09IGF0dHJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ck1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZub2RlW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2bm9kZSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZENoaWxkVm5vZGU6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkgJiYgdm5vZGVba2V5XVtzdHlsZUtleV0gPT09IHN0eWxlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IG9wdHNMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHZub2RlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodm5vZGUuY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZCA9IFZOb2RlLmZpbmRDaGlsZFZub2RlKHZub2RlLmNoaWxkTm9kZXNbaV0sIG9wdHMsIGksIHZub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViQ2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgIDogc3ViQ2hpbGQuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHN1YkNoaWxkLnBhcmVudE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHN1YkNoaWxkLnZub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZHMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gaWRcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gY2hpbGQgdm5vZGUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGVCeUlkKHZub2RlLCBpZCkge1xyXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUuY2hpbGROb2RlcyB8fCBbXSxcclxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgY2hpbGROb2RlO1xyXG5cclxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IFZOb2RlLmZpbmRDaGlsZFZub2RlQnlJZChjaGlsZE5vZGUsIGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxyXG4gICAgICogQHBhcmFtIHZub2RlXHJcbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzPVtdKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZSAmJiB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdO1xyXG5cclxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaGlsZElkcyA9IFZOb2RlLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZFZub2RlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCBhbmQgcmVwbGFjZWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlcGxhY2VDaGlsZFZub2RlKHZub2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkge1xyXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUuY2hpbGROb2RlcyB8fCBbXSxcclxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgY2hpbGROb2RlO1xyXG5cclxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwbGFjZUNoaWxkVm5vZGU6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNbaV0gPSBuZXdDaGlsZFZub2RlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChWTm9kZS5yZXBsYWNlQ2hpbGRWbm9kZShjaGlsZE5vZGUsIGlkLCBuZXdDaGlsZFZub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVk5vZGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVk5vZGU7IiwiaW1wb3J0IE5lbyAgICAgICAgICAgICBmcm9tICcuLi9OZW8ubWpzJztcclxuaW1wb3J0IEJhc2UgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcclxuaW1wb3J0ICogYXMgY29yZSAgICAgICBmcm9tICcuLi9jb3JlL19leHBvcnQubWpzJztcclxuaW1wb3J0IERvbUV2ZW50TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyc7XHJcbmltcG9ydCBJbnN0YW5jZSAgICAgICAgZnJvbSAnLi4vbWFuYWdlci9JbnN0YW5jZS5tanMnO1xyXG5pbXBvcnQgQXBwbGljYXRpb24gICAgIGZyb20gJy4uL2NvbnRyb2xsZXIvQXBwbGljYXRpb24ubWpzJztcclxuaW1wb3J0IEhhc2hIaXN0b3J5ICAgICBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XHJcblxyXG4vKipcclxuICogVGhlIEFwcCB3b3JrZXIgY29udGFpbnMgbW9zdCBwYXJ0cyBvZiB0aGUgZnJhbWV3b3JrIGFzIHdlbGwgYXMgYWxsIGFwcHMgd2hpY2ggZ2V0IGNyZWF0ZWQuXHJcbiAqIFNlZSB0aGUgdHV0b3JpYWxzIGZvciBmdXJ0aGVyIGluZm9zLlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5BcHBcclxuICogQGV4dGVuZHMgTmVvLndvcmtlci5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIEFwcCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLkFwcCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuQXBwJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhcHAtd29ya2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdhcHAtd29ya2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0YT1udWxsXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGF0YVJlbW90ZXNSZWdpc3RlcmVkPTBcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRhdGFSZW1vdGVzUmVnaXN0ZXJlZDogMCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdmRvbVJlbW90ZXNSZWdpc3RlcmVkPTBcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZkb21SZW1vdGVzUmVnaXN0ZXJlZDogMCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdvcmtlcklkPSdhcHAnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB3b3JrZXJJZDogJ2FwcCcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRvZG86IEFwcCBuZWVkcyB0byBrbm93IGhvdyBtYW55IHNpbmdsZXRvbnMgaGF2ZSByZW1vdGVzIHJlZ2lzdGVyZWQgaGVyZSB0byBlbnN1cmUgYSBjb3JyZWN0IHN0YXJ0aW5nIHBvaW50XHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudERhdGFSZW1vdGVzPTJcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvdW50RGF0YVJlbW90ZXM6IDIsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdG9kbzogQXBwIG5lZWRzIHRvIGtub3cgaG93IG1hbnkgc2luZ2xldG9ucyBoYXZlIHJlbW90ZXMgcmVnaXN0ZXJlZCBoZXJlIHRvIGVuc3VyZSBhIGNvcnJlY3Qgc3RhcnRpbmcgcG9pbnRcclxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50VmRvbVJlbW90ZXM9MVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY291bnRWZG9tUmVtb3RlczogMVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcbiAgICAgICAgbWUub24oJ3JlbW90ZXJlZ2lzdGVyZWQnLCBtZS5vblJlbW90ZVJlZ2lzdGVyZWQsIG1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZXJ5IGRvbSBldmVudCB3aWxsIGdldCBmb3J3YXJkZWQgYXMgYSB3b3JrZXIgbWVzc2FnZSBmcm9tIG1haW4gYW5kIGVuZHMgdXAgaGVyZSBmaXJzdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdXNlZnVsIGV2ZW50IHByb3BlcnRpZXMsIGRpZmZlcnMgZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcy4gU2VlIE5lby5tYWluLkRvbUV2ZW50cy5cclxuICAgICAqL1xyXG4gICAgb25Eb21FdmVudChkYXRhKSB7XHJcbiAgICAgICAgRG9tRXZlbnRNYW5hZ2VyLmZpcmUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVyeSBVUkwgaGFzaC1jaGFuZ2Ugd2lsbCBjcmVhdGUgYSBwb3N0IG1lc3NhZ2UgaW4gbWFpbiBhbmQgZW5kIHVwIGhlcmUgZmlyc3QuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBwYXJzZWQga2V5LXZhbHVlIHBhaXJzIGZvciBlYWNoIGhhc2ggdmFsdWVcclxuICAgICAqL1xyXG4gICAgb25IYXNoQ2hhbmdlKGRhdGEpIHtcclxuICAgICAgICBIYXNoSGlzdG9yeS5wdXNoKGRhdGEuaGFzaCwgZGF0YS5oYXNoU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdGFydGluZyBwb2ludCBmb3IgYXBwc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqL1xyXG4gICAgb25Mb2FkQXBwbGljYXRpb24oZGF0YSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIG1lLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICBOZW8uY29uZmlnLnJlc291cmNlc1BhdGggPSBkYXRhLnJlc291cmNlc1BhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG1lLmRhdGFSZW1vdGVzUmVnaXN0ZXJlZCA9PT0gbWUuY291bnREYXRhUmVtb3RlcyAmJlxyXG4gICAgICAgICAgICBtZS52ZG9tUmVtb3Rlc1JlZ2lzdGVyZWQgPT09IG1lLmNvdW50VmRvbVJlbW90ZXNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCFOZW8uY29uZmlnLmlzRXhwZXJpbWVudGFsKSB7XHJcbiAgICAgICAgICAgICAgICBOZW8ub25TdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChOZW8uY29uZmlnLmhhc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBIYXNoSGlzdG9yeS5wdXNoKE5lby5jb25maWcuaGFzaCwgTmVvLmNvbmZpZy5oYXNoU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRvZG86IGluIGNhc2UgRkYgc3RpbGwgZG9lcyBub3Qgc3VwcG9ydCBkeW5hbWljIGltcG9ydHMsIHJlbW92ZSB0aGUgZHluYW1pYyBpbXBvcnQgY2FsbCBmb3IgRkYgZGV2IGJ1aWxkc1xyXG5cclxuICAgICAgICAgICAgICAgIGltcG9ydChcclxuICAgICAgICAgICAgICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXHJcbiAgICAgICAgICAgICAgICAgICAgJy4uLy4uLycgKyBtZS5kYXRhLnBhdGgpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8ub25TdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5jb25maWcuaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGFzaEhpc3RvcnkucHVzaChOZW8uY29uZmlnLmhhc2gsIE5lby5jb25maWcuaGFzaFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWFjaCByZWdpc3RlcmVkIHJlbW90ZSBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoaXMgcmVjZWl2ZXJcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcclxuICAgICAqL1xyXG4gICAgb25SZW1vdGVSZWdpc3RlcmVkKHJlbW90ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaChyZW1vdGUub3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhdGEnOlxyXG4gICAgICAgICAgICAgICAgbWUuZGF0YVJlbW90ZXNSZWdpc3RlcmVkKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndmRvbSc6XHJcbiAgICAgICAgICAgICAgICBtZS52ZG9tUmVtb3Rlc1JlZ2lzdGVyZWQrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUub25Mb2FkQXBwbGljYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBwKTtcclxuXHJcbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQXBwKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvcmVCYXNlfSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcclxuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyAgICBmcm9tICcuL21peGlucy9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyXHJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLkJhc2VcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAYWJzdHJhY3RcclxuICovXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuV29ya2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5Xb3JrZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3dvcmtlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnd29ya2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gd29ya2VySWQ9bnVsbFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd29ya2VySWQ6IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XHJcblxyXG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lLm9uTWVzc2FnZS5iaW5kKG1lKSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBOZW8ud29ya2VySWQgICAgICA9IG1lLndvcmtlcklkO1xyXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyID0gbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcclxuICAgICAqL1xyXG4gICAgb25NZXNzYWdlKGUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGRhdGEgICAgPSBlLmRhdGEsXHJcbiAgICAgICAgICAgIGFjdGlvbiAgPSBkYXRhLmFjdGlvbixcclxuICAgICAgICAgICAgcmVwbHlJZCA9IGRhdGEucmVwbHlJZCxcclxuICAgICAgICAgICAgcHJvbWlzZTtcclxuXHJcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGFjdGlvbiBpcyBtaXNzaW5nOiAnICsgZGF0YS5pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uICE9PSAncmVwbHknKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzWydvbicgKyBOZW8uY2FwaXRhbGl6ZShhY3Rpb24pXShkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGRhdGEsIGVyciwgZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3QoZGF0YS5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgbWUucHJvbWlzZXNbcmVwbHlJZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqL1xyXG4gICAgb25QaW5nKG1zZykge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZShtc2csIHtcclxuICAgICAgICAgICAgb3JpZ2luTXNnOiBtc2dcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKi9cclxuICAgIG9uUmVnaXN0ZXJOZW9Db25maWcobXNnKSB7XHJcbiAgICAgICAgTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxyXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXHJcbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgICAqL1xyXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbWUuc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpLFxyXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XHJcblxyXG4gICAgICAgICAgICBtZS5wcm9taXNlc1ttc2dJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0IDogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXHJcbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cclxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcclxuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcclxuXHJcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xyXG5cclxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XHJcblxyXG4vKipcclxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXHJcbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXHJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1lc3NhZ2VcclxuICovXHJcbmNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFjdGlvblxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRlc3RpbmF0aW9uPSdtYWluJ1xyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcmlnaW49TmVvLndvcmtlcklkXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIGNvbmZpZy5kZXN0aW5hdGlvbiA9IGNvbmZpZy5kZXN0aW5hdGlvbiB8fCAnbWFpbic7XHJcbiAgICAgICAgY29uZmlnLmlkICAgICAgICAgID0gY29uZmlnLmlkICAgICAgICAgIHx8IElkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZCk7XHJcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xyXG5uc1snTWVzc2FnZSddID0gTWVzc2FnZTtcclxuXHJcbmV4cG9ydCB7TWVzc2FnZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3MnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3MnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLXJlbW90ZS1tZXRob2QtYWNjZXNzJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW46IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxyXG4gICAgICogQHBhcmFtIG1ldGhvZFxyXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6IFByb21pc2U8YW55Pn1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcclxuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgb3JpZ2luID0gcmVtb3RlLm9yaWdpbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEsIGJ1ZmZlcikge1xyXG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICA6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIHJlbW90ZUNsYXNzTmFtZTogcmVtb3RlLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXHJcbiAgICAgKi9cclxuICAgIG9uUmVnaXN0ZXJSZW1vdGUocmVtb3RlKSB7XHJcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XHJcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcmVtb3RlLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMgICA9IHJlbW90ZS5tZXRob2RzLFxyXG4gICAgICAgICAgICAgICAgcGtnICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGtnW21ldGhvZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPSBtZS5nZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nKSB7XHJcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdyZW1vdGVyZWdpc3RlcmVkJywgcmVtb3RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKi9cclxuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xyXG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxyXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXHJcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xyXG5cclxuICAgICAgICBpZiAoIXBrZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XHJcblxyXG4gICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgLi4ubXNnLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgb3V0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBtZS5yZWplY3QobXNnLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHJlamVjdChtc2csIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIHtcclxuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcclxuICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVzb2x2ZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xyXG5cclxuZXhwb3J0IHtSZW1vdGVNZXRob2RBY2Nlc3MgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==