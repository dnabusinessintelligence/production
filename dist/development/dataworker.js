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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker/Data.mjs");
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

/***/ "./src/Xhr.mjs":
/*!*********************!*\
  !*** ./src/Xhr.mjs ***!
  \*********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_connection_Xhr_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/connection/Xhr.mjs */ "./src/data/connection/Xhr.mjs");


/**
 * @class Neo.Xhr
 * @extends Neo.data.connection.Xhr
 * @singleton
 */
class Xhr extends _data_connection_Xhr_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.Xhr'
         * @private
         */
        className: 'Neo.Xhr',
        /**
         * @member {String} ntype='xhr'
         * @private
         */
        ntype: 'xhr',
        /**
         * @member {Object} remote={app:['promiseRequest','promiseJson']}
         * @private
         */
        remote: {
            app: ['promiseRequest', 'promiseJson']
        },
        /**
         * @member {boolean} singleton=true
         * @private
         */
        singleton: true
    }}
}

Neo.applyClassConfig(Xhr);

let instance = Neo.create(Xhr);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

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

/***/ "./src/data/connection/Xhr.mjs":
/*!*************************************!*\
  !*** ./src/data/connection/Xhr.mjs ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Xhr; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.data.connection.Xhr
 * @extends Neo.core.Base
 */
class Xhr extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.data.connection.Xhr'
         * @private
         */
        className: 'Neo.data.connection.Xhr',
        /**
         * @member {String} ntype='xhr'
         * @private
         */
        ntype: 'xhr-connection',
        /**
         * @member {Function} callback=null
         */
        callback: null,
        /**
         * @member {Object} requests={}
         */
        requests: {},
        /**
         * @member {Object} scope=null
         */
        scope: null,
        /**
         * @member {Number} timeout=5000
         */
        timeout: 5000
    }}

    /**
     *
     * @param {Object} opts
     * @param {Function} opts.callback
     * @param {Object} opts.data
     * @param {Object} opts.headers
     * @param {Boolean} opts.insideNeo true for calls with relative URLs inside the framework scope
     * @param {String} opts.method DELETE, GET, POST, PUT
     * @param {Object} opts.params
     * @param {String} opts.responseType
     * @param {Object} opts.scope
     * @param {String} opts.url
     * @returns {XMLHttpRequest}
     * @private
     */
    request(opts) {
        let me      = this,
            headers = opts.headers || {},
            id      = Neo.getId('xhr-request'),
            method  = opts.method || 'GET',
            xhr     = new XMLHttpRequest();

        if (!opts.url) {
            console.error('Neo.Xhr.request without a given url' + JSON.stringify(opts));
        } else {
            if (!opts.insideNeo && location.href.includes('/node_modules/neo.mjs/') && !location.href.includes('https://neomjs.github.io/')) {
                if (opts.url.startsWith('./') || opts.url.startsWith('../')) {
                    opts.url = '../../' + opts.url;
                }
            }

            if (opts.params) {
                opts.url += ('?' + new URLSearchParams(opts.params).toString());
            }

            xhr.neoId = id;

            me.requests[id] = {
                callback: typeof opts.callback === 'function' && opts.callback,
                scope   : opts.scope,
                xhr     : xhr
            };

            xhr.responseType = opts.responseType || 'text';
            xhr.timeout      = me.timeout;

            xhr.addEventListener('abort',    me.onError.bind(me));
            xhr.addEventListener('error',    me.onError.bind(me));
            xhr.addEventListener('load',     me.onLoad.bind(me));
            xhr.addEventListener('progress', me.onProgress.bind(me));

            xhr.open(method, opts.url, true);

            Object.entries(headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.send(opts.data);

            return xhr;
        }
    }

    /**
     *
     * @param form
     * @param {Object} opts
     * @returns {XMLHttpRequest}
     */
    sendForm(form, opts) {
        opts.data = new FormData(form);

        return this.request(opts);
    }

    /**
     *
     * @param {Object} e
     */
    onLoad(e) {
        let me      = this,
            id      = e.currentTarget.neoId,
            request = me.requests[id],
            cb      = request.callback;

        cb && cb.apply(request.scope || me, [me.getResponse(e), true]);

        Object.entries(request).forEach(([key, value]) => {
            request[key] = null;
        });

        delete me.requests[id];
    }

    /**
     *
     * @param {Object} e
     */
    onError(e) {
        let me      = this,
            id      = e.currentTarget.neoId,
            request = me.requests[id],
            cb      = request.callback;

        cb && cb.apply(request.scope || me, [me.getResponse(e), false]);

        Object.entries(request).forEach(([key, value]) => {
            request[key] = null;
        });

        delete me.requests[id];
    }

    /**
     * We cannot clone event objects across messaging
     * @param {Object} e
     */
    getResponse(e) {
        let target = e.target;

        return {
            readyState: target.readyState,
            response  : target.response,
            status    : target.status,
            statusText: target.statusText,
            headers   : target.getAllResponseHeaders()
        };
    }

    /**
     *
     */
    onProgress() {

    }

    /**
     *
     * @param {Object} opts
     * @returns {Promise<any>}
     */
    promiseRequest(opts) {
        let me = this;

        return new Promise((resolve, reject) => {
            opts.callback = function(data, success) {
                if (success) {
                    resolve(data);
                } else {
                    reject(data);
                }
            };
            me.request(opts);
        });
    }

    /**
     *
     * @param {Object} opts
     * @returns {Promise<any>}
     */
    promiseJson(opts) {
        let me = this;

        return new Promise((resolve, reject) => {
            opts.callback = function(data, success) {
                if (success) {
                    let json;
                    try {
                        json = JSON.parse(data.response);

                        resolve(Object.assign(data, {
                            json: json
                        }));
                    } catch(err) {
                        reject({
                            reject : true,
                            error  : err.message
                        });
                    }
                } else {
                    reject(data);
                }
            };
            me.request(opts);
        });
    }
}

Neo.applyClassConfig(Xhr);



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

/***/ "./src/manager/Store.mjs":
/*!*******************************!*\
  !*** ./src/manager/Store.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./src/manager/Base.mjs");


/**
 * todo: except createRandomData a legacy class, since stores live directly inside the app worker
 * @class Neo.manager.Store
 * @extends Neo.manager.Base
 * @singleton
 */
class Store extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Store'
         * @private
         */
        className: 'Neo.manager.Store',
        /**
         * @member {String} ntype='store-manager'
         * @private
         */
        ntype: 'store-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Object} listeners={}
         * @private
         */
        listeners: {},
        /**
         * @member {Object} remote={app: ['createRandomData', 'filter', 'load', 'sort']}
         * @private
         */
        remote: {
            app: ['createRandomData', 'filter', 'load', 'sort']
        }
    }}

    /**
     *
     * Dummy method until we have a data package in place
     * @param {Number} amountColumns
     * @param {Number} amountRows
     */
    createRandomData(amountColumns, amountRows) {
        let data = [],
            i    = 0,
            j;

        for (; i < amountRows; i++) {
            data.push({});

            j = 0;

            for (; j < amountColumns; j++) {
                data[i]['column' + j] = 'Column' + (j + 1) + ' - ' + Math.round(Math.random() / 1.5);
                data[i]['column' + j + 'style'] = Math.round(Math.random() / 1.7) > 0 ? 'brown' : i%2 ? '#3c3f41' : '#323232';
            }
        }

        return data;
    }

    /**
     *
     * @param storeId
     * @param fieldName
     * @param value
     */
    filter(storeId, fieldName, value) {

    }

    /**
     *
     * @param storeId
     * @param params
     */
    load(storeId, params) {

    }

    /**
     *
     * @param storeId
     * @param fieldName
     * @param value
     */
    sort(storeId, fieldName, value) {

    }
}

Neo.applyClassConfig(Store);

let instance = Neo.create(Store);

Neo.applyToGlobalNs(instance);

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

/***/ "./src/worker/Data.mjs":
/*!*****************************!*\
  !*** ./src/worker/Data.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./src/worker/Base.mjs");
/* harmony import */ var _manager_Store_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/Store.mjs */ "./src/manager/Store.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Util.mjs */ "./src/core/Util.mjs");
/* harmony import */ var _Xhr_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Xhr.mjs */ "./src/Xhr.mjs");






/**
 * The Data worker is responsible to handle all of the communication to the backend (e.g. Ajax-calls).
 * See the tutorials for further infos.
 * @class Neo.worker.Data
 * @extends Neo.worker.Base
 * @singleton
 */
class Data extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Data'
         * @private
         */
        className: 'Neo.worker.Data',
        /**
         * @member {String} ntype='data-worker'
         * @private
         */
        ntype: 'data-worker',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {String} workerId='data'
         * @private
         */
        workerId: 'data'
    }}

    /**
     *
     */
    onLoad() {
        console.log('worker.Data onLoad');
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(Data);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(Data);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovLy8uL3NyYy9OZW8ubWpzIiwid2VicGFjazovLy8uL3NyYy9YaHIubWpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsZWN0aW9uL0ZpbHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxlY3Rpb24vU29ydGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9PYnNlcnZhYmxlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb25uZWN0aW9uL1hoci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIvU3RvcmUubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci9EYXRhLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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O0FBQUE7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNEQUFJO0FBQ3JDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiJkYXRhd29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd29ya2VyL0RhdGEubWpzXCIpO1xuIiwiY29uc3QgTmVvID0gc2VsZi5OZW8gfHwge307XHJcblxyXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXHJcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gKiBAbmFtZSBjb25maWdcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxyXG4gICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcclxuICAgICAqL1xyXG4gICAgYXBwUGF0aDogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcclxuICAgICAqIEBkZWZhdWx0ICcuLydcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgYmFzZVBhdGg6ICcuLycsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgdGhlbWUgY3NzIGZpbGVzXHJcbiAgICAgKiBTZWUgbWFpbi5taXhpbnMuU3R5bGVzaGVldCA9PiBjcmVhdGVTdHlsZVNoZWV0KClcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnYnVpbGQvJyArIE5lby5jb25maWcuZW52aXJvbm1lbnRcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgW2NvbmZpZy5jc3NQYXRoXVxyXG4gICAgICogQG9wdGlvbmFsXHJcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxyXG4gICAgICovXHJcbiAgICBjc3NQYXRoOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBidWlsZCA9PiBkaXN0IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ1xyXG4gICAgICogVXNlZCBmb3IgYXV0b21hdGljYWxseSBpbmNsdWRpbmcgdGhlIG1hdGNoaW5nIHRoZW1lIGZpbGVzXHJcbiAgICAgKiBAZGVmYXVsdCAncHJvZHVjdGlvbidcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZW52aXJvbm1lbnQ6ICdwcm9kdWN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpZiBOZW8gaXMgcnVubmluZyB3aXRob3V0IGFueSBKUyBidWlsZHNcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5pc0V4cGVyaW1lbnRhbFxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpc0V4cGVyaW1lbnRhbDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cclxuICAgICAqIElmIGNvbmZpZy51c2VDc3M0ID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxyXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxyXG4gICAgICovXHJcbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGlmIHRvIGxvYWQgdGhlIGZpbGVzIG5lZWRlZCBmb3Igd29ya2luZyB3aXRoIGFtQ2hhcnRzXHJcbiAgICAgKiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VBbUNoYXJ0c1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VBbUNoYXJ0czogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaWYgQ1NTNCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUNzczQ6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlXHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHJlc291cmNlc1BhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3Jlc291cmNlcy8nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHdvcmtlckJhc2VQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdzcmMvd29ya2VyLydcclxufSk7XHJcblxyXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XHJcblxyXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcclxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXHJcbiAqIEBtb2R1bGUgTmVvXHJcbiAqIEBzaW5nbGV0b25cclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcclxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcclxuICovXHJcbmxldCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcclxuXHJcbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAvKipcclxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIE9iamVjdFxyXG4gICAgICovXHJcbiAgICBudHlwZU1hcDoge30sXHJcbiAgICAvKipcclxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIGFwcGx5Q2xhc3NDb25maWcoY2xzKSB7XHJcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxyXG4gICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gbnVsbCxcclxuICAgICAgICAgICAgY29uZmlnICAgICAgICA9IHt9LFxyXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXHJcbiAgICAgICAgICAgIHByb3RvcyAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgc3RhdGljQ29uZmlnICA9IHt9LFxyXG4gICAgICAgICAgICBjdG9yO1xyXG5cclxuICAgICAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XHJcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdG9yLmhhc093blByb3BlcnR5KCdjbGFzc0NvbmZpZ0FwcGxpZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gTmVvLmNsb25lKGN0b3Iuc3RhdGljQ29uZmlnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm90b3MudW5zaGlmdChwcm90byk7XHJcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICA/IGJhc2VDZmcgICAgICAgOiBjb25maWc7XHJcbiAgICAgICAgc3RhdGljQ29uZmlnID0gYmFzZVN0YXRpY0NmZyA/IGJhc2VTdGF0aWNDZmcgOiBzdGF0aWNDb25maWc7XHJcblxyXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgbGV0IGNmZyAgICAgICA9IGN0b3IuZ2V0Q29uZmlnICAgICAgICYmIGN0b3IuZ2V0Q29uZmlnKCkgICAgICAgfHwge30sXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgbWl4aW5zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNmZykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaGFzUHJvcGVydHlTZXR0ZXIoZWxlbWVudCwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdudHlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0aWNDZmcgJiYgc3RhdGljQ2ZnLm9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCguLi5jZmcubWl4aW5zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBjZmcubWl4aW5zO1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpO1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgOiBOZW8uY2xvbmUoY29uZmlnLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGlzQ2xhc3MgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjdG9yLmdldFN0YXRpY0NvbmZpZztcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvR2xvYmFsTnMoY2xzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxyXG4gICAgICogQ2FuIGdldCBjYWxsZWQgZm9yIGNsYXNzZXMgYW5kIHNpbmdsZXRvbiBpbnN0YW5jZXNcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xyXG4gICAgICovXHJcbiAgICBhcHBseVRvR2xvYmFsTnMoY2xzKSB7XHJcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLCBuc0FycmF5LCBrZXksIG5zO1xyXG5cclxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3RvLmlzQ2xhc3MgPyBwcm90by5jb25maWcuY2xhc3NOYW1lIDogcHJvdG8uY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBrZXkgICAgID0gbnNBcnJheS5wb3AoKTtcclxuICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcclxuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBtZXRob2RzIGZyb20gb25lIG5hbWVzcGFjZSB0byBhbm90aGVyIG9uZVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIGFsaWFzZXNcclxuICAgICAqIE5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcclxuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcclxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXHJcbiAgICAgKiAgICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcclxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxyXG4gICAgICogICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXHJcbiAgICAgKiAgICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxyXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcclxuICAgICAqICAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcclxuICAgICAqICAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcclxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcclxuICAgICAqICAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXHJcbiAgICAgKiB9LCB0cnVlKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcclxuICAgICAgICBsZXQgZm5OYW1lO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm5OYW1lID0gbmFtZXNwYWNlW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgZGVmYXVsdHMgJiYgdHlwZW9mIGRlZmF1bHRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheXwqfSBvYmpcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fEFycmF5fCp9IHRoZSBjbG9uZWQgaW5wdXRcclxuICAgICAqL1xyXG4gICAgY2xvbmUob2JqLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpIHtcclxuICAgICAgICBsZXQgb3V0O1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoubWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIG9iaiBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZ25vcmVOZW9JbnN0YW5jZXMgPyBvYmogOiB0aGlzLmNsb25lTmVvSW5zdGFuY2Uob2JqKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0ID0ge307XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xyXG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XHJcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoaW5zdGFuY2UuY2xhc3NOYW1lLCBjb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xyXG4gICAgICpcclxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xyXG4gICAgICpcclxuICAgICAqIE5lby5jcmVhdGUoe1xyXG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE5lby5jcmVhdGUoe1xyXG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQnV0dG9uJyxcclxuICAgICAqICAgICBpY29uQ2xzICA6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZXxudWxsfSBUaGUgbmV3IGNsYXNzIGluc3RhbmNlXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGNscywgaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZCAhPT0gY2xhc3NOYW1lLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGFzc05hbWUgJiYgIWNvbmZpZy5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsYXNzIGNyZWF0ZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIGNsYXNzTmFtZSBvciBtb2R1bGUgcHJvcGVydHknLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgPyBjb25maWcuY2xhc3NOYW1lIDogY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcclxuICAgICAgICBpbnN0YW5jZS5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH0sXHJcblxyXG4gICAgZW1wdHlGbigpIHt9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnMoJ05lby5jb21wb25lbnQuQnV0dG9uJywgdHJ1ZSk7XHJcbiAgICAgKiAvLyA9PlxyXG4gICAgICogLy8gc2VsZi5OZW8gPSBzZWxmLk5lbyB8fCB7fTtcclxuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcclxuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b24gPSBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uIHx8IHt9O1xyXG4gICAgICogLy8gcmV0dXJuIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b247XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBzZWxmXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxyXG4gICAgICovXHJcbiAgICBucyhuYW1lcywgY3JlYXRlLCBzY29wZSkge1xyXG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcmV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE5lby5udHlwZSh7XHJcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBudHlwZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX1cclxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cclxuICAgICAqL1xyXG4gICAgbnR5cGUobnR5cGUsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBkZWZpbmVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBudHlwZSBwcm9wZXJ0eS4gJyArIGNvbmZpZy5udHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnR5cGUgPSBjb25maWcubnR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdGFydDogTmVvLmVtcHR5Rm5cclxufSwgTmVvKTtcclxuXHJcbi8qKlxyXG4gKiBMaXN0IG9mIGNsYXNzIHByb3BlcnRpZXMgd2hpY2ggYXJlIG5vdCBzdXBwb3NlZCB0byBnZXQgbWl4ZWQgaW50byBvdGhlciBjbGFzc2VzXHJcbiAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IGlnbm9yZU1peGluID0gW1xyXG4gICAgJ19uYW1lJyxcclxuICAgICdjbGFzc0NvbmZpZ0FwcGxpZWQnLFxyXG4gICAgJ2NsYXNzTmFtZScsXHJcbiAgICAnY29uc3RydWN0b3InLFxyXG4gICAgJ2lzQ2xhc3MnLFxyXG4gICAgJ21peGluJyxcclxuICAgICdudHlwZScsXHJcbiAgICAnb2JzZXJ2YWJsZScsXHJcbiAgICAncmVnaXN0ZXJUb0dsb2JhbE5zJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gISFjbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XHJcbiAgICAgICAgfSwgc2VsZik7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xyXG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm90b1trZXldICYmIHByb3RvW2tleV0uX2Zyb20pIHtcclxuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01peGluIHNldCBtdWx0aXBsZSB0aW1lcyBvciBhbHJlYWR5IGRlZmluZWQgb24gYSBCYXNlIENsYXNzJywgcHJvdG8uY2xhc3NOYW1lLCBtaXhpblByb3RvLmNsYXNzTmFtZSwga2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBwcm90by5jbGFzc05hbWUgKyAnOiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJyArXHJcbiAgICAgICAgICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgcHJvdG9ba2V5XS5fZnJvbSArICcpID0+ICcgK1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xyXG5cclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBtaXhpbnNcclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xyXG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXHJcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXHJcbiAgICAgICAgbWl4aW4sIG1peGluQ2xzLCBtaXhpblByb3RvO1xyXG5cclxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XHJcbiAgICAgICAgbWl4aW4gPSBtaXhpbnNbaV07XHJcblxyXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbi5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIG1peGluIGFuIHVuZGVmaW5lZCBjbGFzczogJyArIG1peGluICsgJywgJyArIGNscy5wcm90b3R5cGUuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluKTtcclxuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluUHJvdG8pLmZvckVhY2gobWl4aW5Qcm9wZXJ0eShjbHMucHJvdG90eXBlLCBtaXhpblByb3RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXM7IC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2VcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBwcm9wZXJ0eSBrZXkgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcclxuICAgIGxldCBkZXNjcmlwdG9yO1xyXG5cclxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcclxuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcclxuICogQHByaXZhdGVcclxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAqL1xyXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVHZXRTZXQocHJvdG8sIGtleSkge1xyXG4gICAgaWYgKGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XHJcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcclxuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcclxuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0gPSB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUdldCA9ICdiZWZvcmVHZXQnICsgTmVvLmNhcGl0YWxpemUoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBtZVtjb25maWdTeW1ib2xdLmhhc093blByb3BlcnR5KGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5ICAgID0gbWVbY29uZmlnU3ltYm9sXVtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc05ld0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVHZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVHZXRdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9rZXkgICAgICA9ICdfJyArIGtleSxcclxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBOZW8uY2FwaXRhbGl6ZShrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVbYmVmb3JlU2V0XSAmJiB0eXBlb2YgbWVbYmVmb3JlU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGV5IGRvbid0IHJldHVybiBhIHZhbHVlLCB0aGF0IG1lYW5zIG5vIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogd2UgY291bGQgY29tcGFyZSBvYmplY3RzICYgYXJyYXlzIGZvciBlcXVhbGl0eVxyXG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lW2FmdGVyU2V0XSAmJiB0eXBlb2YgbWVbYWZ0ZXJTZXRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSk7XHJcbn1cclxuXHJcbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xyXG5cclxuTmVvLmFzc2lnbkRlZmF1bHRzKE5lby5jb25maWcsIERlZmF1bHRDb25maWcpO1xyXG5cclxuZXhwb3J0IHtOZW8gYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIFhockNvbm5lY3Rpb259IGZyb20gJy4vZGF0YS9jb25uZWN0aW9uL1hoci5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uWGhyXHJcbiAqIEBleHRlbmRzIE5lby5kYXRhLmNvbm5lY3Rpb24uWGhyXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIFhociBleHRlbmRzIFhockNvbm5lY3Rpb24ge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uWGhyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLlhocicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0neGhyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICd4aHInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6Wydwcm9taXNlUmVxdWVzdCcsJ3Byb21pc2VKc29uJ119XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZW1vdGU6IHtcclxuICAgICAgICAgICAgYXBwOiBbJ3Byb21pc2VSZXF1ZXN0JywgJ3Byb21pc2VKc29uJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWVcclxuICAgIH19XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFhocik7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFhocik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgRmlsdGVyICAgICBmcm9tICcuL0ZpbHRlci5tanMnO1xyXG5pbXBvcnQgTG9nZ2VyICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xyXG5pbXBvcnQgU29ydGVyICAgICBmcm9tICcuL1NvcnRlci5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuaW1wb3J0IFV0aWwgICAgICAgZnJvbSAnLi4vY29yZS9VdGlsLm1qcyc7XHJcblxyXG5jb25zdCBjb3VudE11dGF0aW9ucyAgID0gU3ltYm9sKCdjb3VudE11dGF0aW9ucycpLFxyXG4gICAgICBpc0ZpbHRlcmVkICAgICAgID0gU3ltYm9sKCdpc0ZpbHRlcmVkJyksXHJcbiAgICAgIGlzU29ydGVkICAgICAgICAgPSBTeW1ib2woJ2lzU29ydGVkJyksXHJcbiAgICAgIHNpbGVudFVwZGF0ZU1vZGUgPSBTeW1ib2woJ3NpbGVudFVwZGF0ZU1vZGUnKSxcclxuICAgICAgdG9BZGRBcnJheSAgICAgICA9IFN5bWJvbCgndG9BZGRBcnJheScpLFxyXG4gICAgICB0b1JlbW92ZUFycmF5ICAgID0gU3ltYm9sKCd0b1JlbW92ZUFycmF5JyksXHJcbiAgICAgIHVwZGF0aW5nSW5kZXggICAgPSBTeW1ib2woJ3VwZGF0aW5nSW5kZXgnKTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uQmFzZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29sbGVjdGlvbidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiBmaWx0ZXJpbmcgdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lLCBhbGxJdGVtcyB3aWxsIGJlY29tZSBhIG5ldyBjb2xsZWN0aW9uIGZvciB0aGUgdW5maWx0ZXJlZFxyXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcclxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfG51bGx9IGFsbEl0ZW1zXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBhbGxJdGVtczogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvU29ydFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGF1dG9Tb3J0OiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVzZSAncHJpbWl0aXZlJyBmb3IgZGVmYXVsdCBmaWx0ZXJzLCB1c2UgJ2FkdmFuY2VkJyBmb3IgZmlsdGVycyB1c2luZyBhIGZpbHRlckJ5IG1ldGhvZFxyXG4gICAgICAgICAqIHdoaWNoIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIGNvbGxlY3Rpb24gaXRlbXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1vZGU9J3ByaW1pdGl2ZSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBmaWx0ZXJNb2RlOiAncHJpbWl0aXZlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBBcnJheSBjb250YWluaW5nIE5lby51dGlsLkZpbHRlciBjb25maWcgb2JqZWN0cyBvciBpbnN0YW5jZXNcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gZmlsdGVyc189W11cclxuICAgICAgICAgKi9cclxuICAgICAgICBmaWx0ZXJzXzogW10sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHVuaXF1ZSghKSBrZXkgcHJvcGVydHkgb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW1cclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNfPVtdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXRlbXNfOiBbXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxyXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgdGhlIGtleSAmIHJlZmVyZW5jZSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbSBmb3IgZmFzdGVyIGFjY2Vzc1xyXG4gICAgICAgICAqIEBtZW1iZXIge01hcH0gbWFwXz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFwXzogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBkaXJlY3Rpb25zIGZvciBmYXN0ZXIgYWNjZXNzXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnREaXJlY3Rpb25zPW51bGxcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNvcnREaXJlY3Rpb25zOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGludGVybmFsIEFycmF5IG9mIHRoZSBzb3J0IHByb3BlcnRpZXMgZm9yIGZhc3RlciBhY2Nlc3NcclxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydFByb3BlcnRpZXM9bnVsbFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydFByb3BlcnRpZXM6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5Tb3J0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnRlcnNfPVtdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydGVyc186IFtdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc291cmNlSWRfPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3VyY2VJZF86IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgc3ltYm9sQ29uZmlnID0ge2VudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX07XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XHJcbiAgICAgICAgICAgIFtjb3VudE11dGF0aW9uc10gIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcclxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxyXG4gICAgICAgICAgICBbaXNTb3J0ZWRdICAgICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXHJcbiAgICAgICAgICAgIFtzaWxlbnRVcGRhdGVNb2RlXTogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcclxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxyXG4gICAgICAgICAgICBbdG9SZW1vdmVBcnJheV0gICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBbXX0sXHJcbiAgICAgICAgICAgIFt1cGRhdGluZ0luZGV4XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IDB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cclxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgYWRkKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNwbGljZSgwLCBudWxsLCBpdGVtKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goZmlsdGVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIub24oJ2NoYW5nZScsIG1lLm9uRmlsdGVyQ2hhbmdlLCBtZSk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgbWUuZmlsdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSA9IG1lLmtleVByb3BlcnR5LFxyXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gdmFsdWUubGVuZ3RoLFxyXG4gICAgICAgICAgICBpdGVtO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVtpXTtcclxuICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW2tleVByb3BlcnR5XSwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xyXG5cclxuICAgICAgICB2YWx1ZS5mb3JFYWNoKHNvcnRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc29ydGVyLm9uKCdjaGFuZ2UnLCBtZS5vblNvcnRlckNoYW5nZSwgbWUpO1xyXG4gICAgICAgICAgICAgICAgc29ydGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICYmIG1lLmF1dG9Tb3J0KSB7XHJcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhZnRlclNldFNvdXJjZUlkKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgbWUuX2l0ZW1zID0gWy4uLnNvdXJjZS5faXRlbXNdO1xyXG4gICAgICAgICAgICBtZS5tYXAgICAgPSBuZXcgTWFwKHNvdXJjZS5tYXApOyAvLyBjcmVhdGVzIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIG1hcFxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRlOiBtZS5vbk11dGF0ZSxcclxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNvdXJjZS5vbihsaXN0ZW5lcnNDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyU2V0U291cmNlSWQnLCBzb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBOZW8uZ2V0KG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS51bihsaXN0ZW5lcnNDb25maWcpOyAvLyB0b2RvOiBjb3JlLk9ic2VydmFibGUudW4gbmVlZHMgdG8gc3VwcG9ydCB0aGlzIHN5bnRheFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZXMgdGhlIHNvcnQgcHJvcGVydHkgJiBkaXJlY3Rpb24gbXVsdGlwbGllciBvZiBlYWNoIHNvcnRlciBpbnNpZGUgMiBhcnJheXMgZm9yIGZhc3RlciBhY2Nlc3Mgd2hlbiBzb3J0aW5nXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhcHBseVNvcnRlckNvbmZpZ3MoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuc29ydERpcmVjdGlvbnMgPSBbXTtcclxuICAgICAgICBtZS5zb3J0UHJvcGVydGllcyA9IFtdO1xyXG5cclxuICAgICAgICBtZS5zb3J0ZXJzLmZvckVhY2goc29ydGVyID0+IHsvL2NvbnNvbGUubG9nKCdmb3JFYWNoJywgc29ydGVyKTtcclxuICAgICAgICAgICAgbWUuc29ydERpcmVjdGlvbnMucHVzaChzb3J0ZXIuZGlyZWN0aW9uTXVsdGlwbGllcik7XHJcbiAgICAgICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzLnB1c2goc29ydGVyLnByb3BlcnR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gb2xkVmFsdWVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIXZhbHVlID8gbmV3IE1hcCgpIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcclxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XHJcblxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluc3RhbmNlb2YgU29ydGVyKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldLm9wZXJhdG9yID09PSAoa2V5Lm9wZXJhdG9yIHx8ICc9PT0nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0ucHJvcGVydHkgPT09IGtleS5wcm9wZXJ0eSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0udmFsdWUgICAgPT09IGtleS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IG9sZFZhbHVlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShGaWx0ZXIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2xkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYmVmb3JlU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBbdmFsdWVdIDogW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVuID0gb2xkVmFsdWUgJiYgb2xkVmFsdWUubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xyXG5cclxuICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGtleSBpbnN0YW5jZW9mIFNvcnRlcikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmIG9sZFZhbHVlW2ldLmRpcmVjdGlvbiA9PT0ga2V5LmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKFNvcnRlciwga2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAga2V5LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdHNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNhY2hlVXBkYXRlKG9wdHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVVcGRhdGUnLCBvcHRzLCB0aGlzW3RvQWRkQXJyYXldKTtyZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXHJcbiAgICAgICAgICAgIGluZGV4LCB0b0FkZE1hcCwgdG9SZW1vdmVNYXA7XHJcblxyXG4gICAgICAgIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcclxuICAgICAgICAgICAgdG9BZGRNYXAgICAgPSBtZVt0b0FkZEFycmF5XSAgIC5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIHRvUmVtb3ZlTWFwID0gbWVbdG9SZW1vdmVBcnJheV0ubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xyXG5cclxuICAgICAgICAgICAgb3B0cy5hZGRlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3B0cy5yZW1vdmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgYW5kIGNsZWFycyB0aGUgbWFwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuZ2V0Q291bnQoKSk7XHJcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgZmlsdGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbEZpbHRlcnM9ZmFsc2VdXHJcbiAgICAgKi9cclxuICAgIGNsZWFyRmlsdGVycyhyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gcmVzdG9yZU9yaWdpbmFsRmlsdGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLmZpbHRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBzb3J0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxyXG4gICAgICogV2l0aG91dCByZXN0b3JlSW5pdGlhbFN0YXRlIGFzIHRydWUgdGhpcyB3aWxsIG5vdCBhZmZlY3QgdGhlIGN1cnJlbnQgc29ydGluZyBvZiB0aGlzIGNvbGxlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzPWZhbHNlXVxyXG4gICAgICovXHJcbiAgICBjbGVhclNvcnRlcnMocmVzdG9yZU9yaWdpbmFsU29ydGVycykge1xyXG4gICAgICAgIHRoaXMuc29ydGVycyA9IHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5zb3J0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V9IFRoZSBjbG9uZWQgY29sbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBjbG9uZSgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvbmZpZyAgPSBOZW8uY2xvbmUobWUub3JpZ2luYWxDb25maWcsIHRydWUpLFxyXG4gICAgICAgICAgICBmaWx0ZXJzID0gbWUuX2ZpbHRlcnMgfHwgW10sXHJcbiAgICAgICAgICAgIHNvcnRlcnMgPSBtZS5fc29ydGVycyB8fCBbXTtcclxuXHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcclxuICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcclxuICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XHJcblxyXG4gICAgICAgIGlmIChtZS5faXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25maWcuaXRlbXMgPSBbLi4ubWUuX2l0ZW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZy5maWx0ZXJzID0gW107XHJcbiAgICAgICAgY29uZmlnLnNvcnRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gdG9kbzogZmlsdGVycyAmIHNvcnRlcnMgc2hvdWxkIHB1c2ggdGhlaXIgY3VycmVudCBzdGF0ZSBhbmQgbm90IHRoZSBvcmlnaW5hbCBvbmVcclxuXHJcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xyXG4gICAgICAgICAgICBjb25maWcuZmlsdGVycy5wdXNoKGZpbHRlci5vcmlnaW5hbENvbmZpZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvcnRlcnMuZm9yRWFjaChmdW5jdGlvbihzb3J0ZXIpIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRlcnMucHVzaChzb3J0ZXIub3JpZ2luYWxDb25maWcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShCYXNlLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIHRoZSBtYXAgJiBpdGVtcyBhcnJheSBiZWZvcmUgdGhlIHN1cGVyIGNhbGxcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuX2l0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGRvU29ydCgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICA9IG1lLl9pdGVtcyxcclxuICAgICAgICAgICAgc29ydGVycyAgICAgICAgICAgPSBtZS5zb3J0ZXJzLFxyXG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9ucyAgICA9IG1lLnNvcnREaXJlY3Rpb25zLFxyXG4gICAgICAgICAgICBzb3J0UHJvcGVydGllcyAgICA9IG1lLnNvcnRQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBjb3VudFNvcnRlcnMgICAgICA9IHNvcnRQcm9wZXJ0aWVzLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgICA9IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IGZhbHNlLFxyXG4gICAgICAgICAgICBpLCBtYXBwZWRJdGVtcywgb2JqLCBzb3J0ZXIsIHNvcnRQcm9wZXJ0eSwgc29ydFZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoY291bnRTb3J0ZXJzID4gMCkge1xyXG4gICAgICAgICAgICBzb3J0ZXJzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc29ydEJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnVzZVRyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNTb3J0QnlNZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyICAgID0gc29ydGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlID0gc29ydGVyW3NvcnRlci5zb3J0QnkgPyAnc29ydEJ5JyA6ICdkZWZhdWx0U29ydEJ5J10oYSwgYik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCNTb3J0aW5nX3dpdGhfbWFwXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtpbmRleDogaW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlcnNbaV0udXNlVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbc29ydFByb3BlcnRpZXNbaV1dID0gc29ydGVyc1tpXS50cmFuc2Zvcm1WYWx1ZShpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMgPSBpdGVtcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnRpZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVtzb3J0UHJvcGVydHldID4gYltzb3J0UHJvcGVydHldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSAqIHNvcnREaXJlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVtzb3J0UHJvcGVydHldIDwgYltzb3J0UHJvcGVydHldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBtYXBwZWRJdGVtcy5tYXAoZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZVtpc1NvcnRlZF0gPSBjb3VudFNvcnRlcnMgPiAwO1xyXG5cclxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3VtZXMgdGhlIGNvbGxlY3Rpb24gZXZlbnRzLlxyXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcclxuICAgICAqIHlvdSBtdXN0IHVzZSB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSBmb3IgdGhpcyBjYWxsLlxyXG4gICAgICogVXNpbmcgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gd2lsbCBub3QgZmlyZSBhIG11dGF0aW9uIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cclxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb2xsZWN0aW9uLkJhc2Ujc3RhcnRVcGRhdGUgc3RhcnRVcGRhdGV9XHJcbiAgICAgKi9cclxuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XHJcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XHJcbiAgICAgICAgICAgIG1lW3VwZGF0aW5nSW5kZXhdLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5kU2lsZW50VXBkYXRlTW9kZSkge1xyXG4gICAgICAgICAgICBtZVtzaWxlbnRVcGRhdGVNb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ211dGF0ZScsIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogbWVbdG9BZGRBcnJheV0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IG1lW3RvUmVtb3ZlQXJyYXldXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0gICAuc3BsaWNlKDAsIG1lW3RvQWRkQXJyYXldICAgLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZSgwLCBtZVt0b1JlbW92ZUFycmF5XS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgZmlsdGVycyAgICAgICAgID0gbWUuX2ZpbHRlcnMsXHJcbiAgICAgICAgICAgIGNvdW50QWxsRmlsdGVycyA9IGZpbHRlcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxyXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgPSBtZS5hbGxJdGVtcyAmJiBtZS5hbGxJdGVtcy5faXRlbXMgfHwgbWUuX2l0ZW1zLFxyXG4gICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgICA9IFtdLFxyXG4gICAgICAgICAgICBjb25maWcsIGlzSW5jbHVkZWQsIGl0ZW0sIGosIHRtcEl0ZW1zO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50QWxsRmlsdGVyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghZmlsdGVyc1tpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudEZpbHRlcnMgPT09IDAgJiYgbWUuYWxsSXRlbXMpIHtcclxuICAgICAgICAgICAgbWUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIG1lLml0ZW1zID0gWy4uLm1lLmFsbEl0ZW1zLl9pdGVtc107XHJcbiAgICAgICAgICAgIG1lLm1hcC5zZXQoLi4ubWUuYWxsSXRlbXMubWFwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW1lLmFsbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcgPSB7Li4ubWUub3JpZ2luYWxDb25maWd9O1xyXG5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuYWxsSXRlbXMgPSBOZW8uY3JlYXRlKEJhc2UsIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0eTogbWUua2V5UHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlSWQgICA6IG1lLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hpbGQgY29sbGVjdGlvbicsIG1lLmFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWUubWFwLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWUuZmlsdGVyTW9kZSA9PT0gJ3ByaW1pdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGZvciBsb29wcyBvbiBwdXJwb3NlIC0+IHBlcmZvcm1hbmNlXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSAgICAgICA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IGNvdW50QWxsRmlsdGVyczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW21lLmtleVByb3BlcnR5XSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi5pdGVtc107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb3VudEFsbEZpbHRlcnM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoZmlsdGVyZWRJdGVtc1tpXSwgZmlsdGVyZWRJdGVtcywgaXRlbXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLnRtcEl0ZW1zXTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudEl0ZW1zICAgID0gZmlsdGVyZWRJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWUuaXRlbXMgPSBmaWx0ZXJlZEl0ZW1zOyAvLyB1cGRhdGUgdGhlIG1hcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcclxuXHJcbiAgICAgICAgbWUuZmlyZSgnZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcclxuICAgICAqL1xyXG4gICAgZmluZChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgaXNPYmplY3RQcm9wZXJ0eSA9IE5lby5pc09iamVjdChwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGlzT2JqZWN0UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgcHJvcGVydGllc0xlbmd0aCA9IHByb3BlcnRpZXNBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBwcm9wZXJ0aWVzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIGl0ZW0gaW5zaWRlIHRoZSBzdGFydC1lbmQgcmFuZ2UuIFJldHVybiB0cnVlIGZvciBhIG1hdGNoLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZuLml0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlPXRoaXNdIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD10aGlzLmdldENvdW50KCldIFRoZSBlbmQgaW5kZXggKHVwIHRvLCBsYXN0IHZhbHVlIGV4Y2x1ZGVkKVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXHJcbiAgICAgKi9cclxuICAgIGZpbmRCeShmbiwgc2NvcGUsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpdGVtcyA9IFtdLFxyXG4gICAgICAgICAgICBpICAgICA9IHN0YXJ0IHx8IDAsXHJcbiAgICAgICAgICAgIGxlbiAgID0gZW5kICAgfHwgbWUuZ2V0Q291bnQoKTtcclxuXHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBtZTtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZm4uY2FsbChzY29wZSwgbWUuaXRlbXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGZpcnN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBrZXksIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lLlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGdldChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGZvciBhIGdpdmVuIGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBnZXRBdChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q291bnRNdXRhdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbY291bnRNdXRhdGlvbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmlsdGVyIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEByZXR1cm4ge05lby5jb2xsZWN0aW9uLkZpbHRlcnxudWxsfVxyXG4gICAgICovXHJcbiAgICBnZXRGaWx0ZXIocHJvcGVydHkpIHtcclxuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBbXSxcclxuICAgICAgICAgICAgaSAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgPSBmaWx0ZXJzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyc1tpXS5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgYSBnaXZlbiBpbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGdldEtleUF0KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtc1tpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbVt0aGlzLmtleVByb3BlcnR5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIHRoZSBpdGVtcyBhcnJheVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gWmVyby1iYXNlZCBpbmRleCBhdCB3aGljaCB0byBiZWdpbiBleHRyYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmRdIFplcm8tYmFzZWQgaW5kZXggYmVmb3JlIHdoaWNoIHRvIGVuZCBleHRyYWN0aW9uIChleHRyYWN0cyB1cCB0byBidXQgbm90IGluY2x1ZGluZyBlbmQpLlxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc2xpY2VcclxuICAgICAqL1xyXG4gICAgZ2V0UmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFNvdXJjZSBDb2xsZWN0aW9uIGluIGNhc2UgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZCBjb25maWcgd2FzIHNldFxyXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V8dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBnZXRTb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSWQgJiYgTmVvLmdldCh0aGlzLnNvdXJjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhIHZhbHVlIGhhcyBiZWVuIGFzc29jaWF0ZWQgdG8gdGhlIGtleSBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaGFzKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGFuIGl0ZW0gZXhpc3RzIGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBoYXNJdGVtKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGl0ZW1bdGhpcy5rZXlQcm9wZXJ0eV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5IG9yIGl0ZW1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGtleVxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXHJcbiAgICAgKi9cclxuICAgIGluZGV4T2Yoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoVXRpbC5pc09iamVjdChrZXkpID8ga2V5IDogdGhpcy5tYXAuZ2V0KGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gaXRlbVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxyXG4gICAgICovXHJcbiAgICBpbmRleE9mSXRlbShpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXlcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcclxuICAgICAqL1xyXG4gICAgaW5kZXhPZktleShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZih0aGlzLm1hcC5nZXQoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbVxyXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0KGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBmaWx0ZXJlZFxyXG4gICAgICovXHJcbiAgICBpc0ZpbHRlcmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW2lzRmlsdGVyZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGlzRmlsdGVyZWRJdGVtKGl0ZW0pIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGZpbHRlcnMgICAgPSBtZS5fZmlsdGVycyxcclxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBmaWx0ZXJzLmxlbmd0aCxcclxuICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLmlzRmlsdGVyZWQoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc0ZpbHRlcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkXHJcbiAgICAgKi9cclxuICAgIGlzU29ydGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW2lzU29ydGVkXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGxhc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RoaXMuZ2V0Q291bnQoKSAtMV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9uRmlsdGVyQ2hhbmdlKG9wdHMpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvbk11dGF0ZShvcHRzKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG9wdHMucHJldmVudEJ1YmJsZVVwKSB7XHJcbiAgICAgICAgICAgIG1lLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5zcGxpY2UobnVsbCwgb3B0cy5yZW1vdmVkSXRlbXMsIG9wdHMuYWRkZWRJdGVtcyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbk11dGF0ZScsIG1lLmdldENvdW50KCksIG1lLmlkLCBvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb25Tb3J0ZXJDaGFuZ2Uob3B0cykge1xyXG4gICAgICAgIHRoaXMuYXBwbHlTb3J0ZXJDb25maWdzKCk7XHJcbiAgICAgICAgdGhpcy5kb1NvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBpdGVtcyBhcnJheSBhbmQgcmV0dXJucyB0aGlzIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKHRoaXMuZ2V0Q291bnQoKSAtMSwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGl0ZW1zIGNvdW50XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHB1c2goaXRlbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBnaXZlbiBrZXksIGl0ZW0gb3IgQXJyYXkgY29udGFpbmluZyBrZXlzfGl0ZW1zXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZShrZXkpIHtcclxuICAgICAgICB0aGlzLnNwbGljZSgwLCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUF0KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXHJcbiAgICAgKiBJbnRlbmRlZCBmb3IgY29sbGVjdGlvbnMgd2l0aG91dCBzb3J0ZXJzLlxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBpdGVtc1xyXG4gICAgICovXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICBsZXQgbXV0YXRpb24gPSB0aGlzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICByZXR1cm4gbXV0YXRpb24uYWRkZWRJdGVtc1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byB0ZXN0IGZvciBlYWNoIGl0ZW0sIHRha2luZyB0aHJlZSBwYXJhbWV0ZXJzOlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY2FsbGJhY2suaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIFtjYWxsYmFjay5pbmRleF0gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgIFtjYWxsYmFjay5pdGVtc10gVGhlIGl0ZW1zIGFycmF5IG9mIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gVmFsdWUgdG8gdXNlIGFzIFwidGhpc1wiIHdoZW4gZXhlY3V0aW5nIHRoZSBjYWxsYmFja1xyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUgZm9yIGFueSBjb2xsZWN0aW9uIGl0ZW0sIG90aGVyd2lzZSBmYWxzZVxyXG4gICAgICovXHJcbiAgICBzb21lKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc29tZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgaXRlbXMgZnJvbSBhbmQvb3IgYWRkcyBpdGVtcyB0byB0aGlzIGNvbGxlY3Rpb25cclxuICAgICAqIElmIHRoZSB0b1JlbW92ZUFycmF5IGlzIHVzZWQsIHRoZW4gdGhlIGluZGV4IGlzIG5vdCB1c2VkIGZvciByZW1vdmluZywgdGhlIGVudHJpZXMgYXJlIGZvdW5kIGJ5IGtleSBhbmQgcmVtb3ZlZCBmcm9tIHdoZXJlIHRoZXkgYXJlLlxyXG4gICAgICogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgdG9BZGRBcnJheSBpcyBhcHBlbmRlZCB0byB0aGUgQ29sbGVjdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxBcnJheX0gW3JlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5XVxyXG4gICAgICogQHBhcmFtIHtBcnJheXwgT2JqZWN0fSBbdG9BZGRBcnJheV1cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBhZGRlZEl0ZW1zICYgcmVtb3ZlZEl0ZW1zIGFycmF5c1xyXG4gICAgICovXHJcbiAgICBzcGxpY2UoaW5kZXgsIHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5LCB0b0FkZEFycmF5KSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNvdXJjZSAgICAgICAgICAgICA9IG1lLmdldFNvdXJjZSgpLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zICAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxyXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSAgICAgICAgPSBtZS5rZXlQcm9wZXJ0eSxcclxuICAgICAgICAgICAgbWFwICAgICAgICAgICAgICAgID0gbWUubWFwLFxyXG4gICAgICAgICAgICByZW1vdmVkSXRlbXMgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gVXRpbC5pc051bWJlcihyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXHJcbiAgICAgICAgICAgIHRvUmVtb3ZlQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXkocmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkpID8gcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkgOiBudWxsLFxyXG4gICAgICAgICAgICBpLCBpdGVtLCBrZXksIGxlbiwgdG9BZGRNYXA7XHJcblxyXG4gICAgICAgIGlmICghaW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4KSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihtZS5pZCArICc6IElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHJlbW92ZUNvdW50QXRJbmRleCBjYW5ub3QgYmUgdXNlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9BZGRBcnJheSA9IHRvQWRkQXJyYXkgJiYgIUFycmF5LmlzQXJyYXkodG9BZGRBcnJheSkgPyBbdG9BZGRBcnJheV0gOiB0b0FkZEFycmF5O1xyXG5cclxuICAgICAgICBpZiAodG9SZW1vdmVBcnJheSAmJiAobGVuID0gdG9SZW1vdmVBcnJheS5sZW5ndGgpID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodG9BZGRBcnJheSAmJiB0b0FkZEFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b1JlbW92ZUFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAga2V5ICA9IFV0aWwuaXNPYmplY3QoaXRlbSkgPyBpdGVtW2tleVByb3BlcnR5XSA6IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9BZGRNYXAgfHwgKHRvQWRkTWFwICYmIHRvQWRkTWFwLmluZGV4T2Yoa2V5KSA8IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVtb3ZlQ291bnRBdEluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcclxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGVba2V5UHJvcGVydHldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9BZGRBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIGtleSAgPSBVdGlsLmlzT2JqZWN0KGl0ZW0pID8gaXRlbVtrZXlQcm9wZXJ0eV0gOiBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpICYmICFtZS5pc0ZpbHRlcmVkSXRlbShpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXAuc2V0KGtleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhZGRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShVdGlsLmlzTnVtYmVyKGluZGV4KSA/IGluZGV4IDogaXRlbXMubGVuZ3RoLCAwLCAuLi5hZGRlZEl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLmRvU29ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghc291cmNlLmdldFNvdXJjZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UucHJldmVudEJ1YmJsZVVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtZS5wcmV2ZW50QnViYmxlVXApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VyY2Ugc3BsaWNlJywgc291cmNlLmlkLCAnYWRkZWQ6JywgLi4udG9BZGRBcnJheSwgJ3JlbW92ZWQ6JywgLi4ucmVtb3ZlZEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1lLnN0YXJ0VXBkYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlLnNwbGljZShudWxsLCB0b1JlbW92ZUFycmF5IHx8IHJlbW92ZWRJdGVtcywgdG9BZGRBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2UucHJldmVudEJ1YmJsZVVwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCB8fCByZW1vdmVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtZVtjb3VudE11dGF0aW9uc10rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ211dGF0ZScsIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgIDogdG9BZGRBcnJheSxcclxuICAgICAgICAgICAgICAgIHByZXZlbnRCdWJibGVVcDogbWUucHJldmVudEJ1YmJsZVVwLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zICAgOiB0b1JlbW92ZUFycmF5IHx8IHJlbW92ZWRJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcclxuICAgICAgICAgICAgbWUuY2FjaGVVcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiByZW1vdmVkSXRlbXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogYWRkZWRJdGVtcyxcclxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiByZW1vdmVkSXRlbXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJldmVudHMgdGhlIGNvbGxlY3Rpb24gZnJvbSBmaXJpbmcgZXZlbnRzIHVudGlsIGVuZFVwZGF0ZSBnZXRzIGNhbGxlZC5cclxuICAgICAqIElmIHlvdSBzdGFydCBhbiB1cGRhdGUgdXNpbmcgdGhlIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBwYXJhbSxcclxuICAgICAqIHRoZSBtdXRhdGlvbiBldmVudCB3aWxsIG5vdCBmaXJlIGFmdGVyIHVzaW5nIGVuZFVwZGF0ZSgpXHJcbiAgICAgKiAoeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGUgZW5kVXBkYXRlIGNhbGwgaW4gY2FzZSB5b3UgdXNlZFxyXG4gICAgICogc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGhlcmUpXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFydFNpbGVudFVwZGF0ZU1vZGVdXHJcbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI2VuZFVwZGF0ZSBlbmRVcGRhdGV9XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0VXBkYXRlKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xyXG4gICAgICAgIGlmIChzdGFydFNpbGVudFVwZGF0ZU1vZGUpIHtcclxuICAgICAgICAgICAgdGhpc1tzaWxlbnRVcGRhdGVNb2RlXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzW3VwZGF0aW5nSW5kZXhdKys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxyXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxyXG4gICAgICovXHJcbiAgICB1bnNoaWZ0KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNwbGljZSgwLCAwLCBpdGVtKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIG11dGF0ZSBldmVudCBmaXJlcyBhZnRlciBldmVyeSBzcGxpY2UgY2FsbCAoaW52b2tlZCBieSBhbGwgbWV0aG9kcyB3aGljaCBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGl0ZW1zIGFycmF5KS5cclxuICogQGV2ZW50IG11dGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBhZGRlZEl0ZW1zXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJldmVudEJ1YmJsZVVwIHByaXZhdGVcclxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVtb3ZlZEl0ZW1zXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uRmlsdGVyXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB0aGUgb3BlcmF0b3IgY29uZmlnOjxicj5cclxuICAgICAgICAgKiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb3BlcmF0b3JzOiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5GaWx0ZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnZmlsdGVyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXR0aW5nIGRpc2FibGVkIHRvIHRydWUgd2lsbCBleGNsdWRlIHRoaXMgZmlsdGVyIGZyb20gdGhlIGNvbGxlY3Rpb24gZmlsdGVyaW5nIGxvZ2ljXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZWRfPWZhbHNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlzYWJsZWRfOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWVcclxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBmaWx0ZXJCeV89bnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZpbHRlckJ5XzogbnVsbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIG1lYW5zIG5vdCBmaWx0ZXJpbmcgb3V0IGl0ZW1zIGluIGNhc2UgdGhlIHZhbHVlIGlzICcnLCBudWxsLCBbXSBvciB7fVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluY2x1ZGVFbXB0eVZhbHVlcz1mYWxzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluY2x1ZGVFbXB0eVZhbHVlczogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgZmxhZyB0byB0cnVlIGJlZm9yZSBzdGFydGluZyBidWxrIHVwZGF0ZXMgKGUuZy4gY2hhbmdpbmcgcHJvcGVydHkgJiB2YWx1ZSlcclxuICAgICAgICAgKiB0byBwcmV2ZW50IG11bHRpcGxlIGNoYW5nZSBldmVudHNcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzVXBkYXRpbmdfOiBmYWxzZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBsaXN0ZW5lckFwcGxpZWQ9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wZXJhdG9yIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcclxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiA9PSAobm90IHJlY29tbWVuZGVkKVxyXG4gICAgICAgICAqID09PVxyXG4gICAgICAgICAqICE9IChub3QgcmVjb21tZW5kZWQpXHJcbiAgICAgICAgICogIT09XHJcbiAgICAgICAgICogPFxyXG4gICAgICAgICAqID49XHJcbiAgICAgICAgICogPlxyXG4gICAgICAgICAqID49XHJcbiAgICAgICAgICogbGlrZSAoY29sbGVjdGlvblZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxyXG4gICAgICAgICAqIGluY2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxyXG4gICAgICAgICAqIGV4Y2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3BlcmF0b3I9Jz09PSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBvcGVyYXRvcl86ICc9PT0nLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgc2NvcGUgdG8gdXNlIGZvciB0aGUgZmlsdGVyQnkgbWV0aG9kLCBpbiBjYXNlIGl0IGlzIHByb3ZpZGVkLiBEZWZhdWx0cyB0byB0aGlzIGluc3RhbmNlLlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzY29wZT1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2NvcGU6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHZhbHVlIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFsdWVfOiBudWxsXHJcbiAgICB9fVxyXG5cclxuICAgIGFmdGVyU2V0RGlzYWJsZWQoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgLy8gdG9kb1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0SXNVcGRhdGluZyh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0T3BlcmF0b3IoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0UHJvcGVydHkoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyU2V0VmFsdWUoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVNldEZpbHRlckJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdmaWx0ZXJCeSBoYXMgdG8gYmUgYSBmdW5jdGlvbicsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBvcGVyYXRvciBjb25maWcgZ2V0cyBjaGFuZ2VkLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldE9wZXJhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXHJcbiAgICAgKi9cclxuICAgIGZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBtZS5pc1VwZGF0aW5nICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBtZS5vcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtZS5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZXRpb24gaXRlbSBtYXRjaGVzIHRoaXMgZmlsdGVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmVkSXRlbXMgSWYgdGhlIGNvbGxlY3Rpb24gZmlsdGVyTW9kZSBpcyBub3QgcHJpbWl0aXZlIGNvbnRhaW5zIHRoZSBpdGVtcyB3aGljaCBwYXNzZWRcclxuICAgICAqIHRoZSBwcmV2aW91cyBmaWx0ZXJzLCBvdGhlcndpc2UgYWxsIGNvbGxlY3Rpb24gaXRlbXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFsbEl0ZW1zIGFsbCBjb2xsZWN0aW9uIGl0ZW1zXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGaWx0ZXJlZChpdGVtLCBmaWx0ZXJlZEl0ZW1zLCBhbGxJdGVtcykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChtZS5fZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lLmluY2x1ZGVFbXB0eVZhbHVlcyAmJiAobWUuX3ZhbHVlID09PSBudWxsIHx8IE5lby5pc0VtcHR5KG1lLl92YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZS5fZmlsdGVyQnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lLmZpbHRlckJ5LmNhbGwobWUuc2NvcGUgfHwgbWUsIGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gIUZpbHRlclttZS5fb3BlcmF0b3JdKGl0ZW1bbWUuX3Byb3BlcnR5XSwgbWUuX3ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFsnPT0nXSAoYSwgYikge3JldHVybiBhID09IGI7fVxyXG4gICAgc3RhdGljIFsnPT09J10oYSwgYikge3JldHVybiBhID09PSBiO31cclxuICAgIHN0YXRpYyBbJyE9J10gKGEsIGIpIHtyZXR1cm4gYSAhPSBiO31cclxuICAgIHN0YXRpYyBbJyE9PSddKGEsIGIpIHtyZXR1cm4gYSAhPT0gYjt9XHJcbiAgICBzdGF0aWMgWyc8J10gIChhLCBiKSB7cmV0dXJuIGEgPCBiO31cclxuICAgIHN0YXRpYyBbJzw9J10gKGEsIGIpIHtyZXR1cm4gYSA8PSBiO31cclxuICAgIHN0YXRpYyBbJz4nXSAgKGEsIGIpIHtyZXR1cm4gYSA+IGI7fVxyXG4gICAgc3RhdGljIFsnPj0nXSAoYSwgYikge3JldHVybiBhID49IGI7fVxyXG5cclxuICAgIHN0YXRpYyBbJ2V4Y2x1ZGVkJ10oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBbJ2luY2x1ZGVkJ10oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgWydpc0RlZmluZWQnXShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgWydpc1VuZGVmaW5lZCddKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBbJ2xpa2UnXShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhiLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaWx0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uU29ydGVyXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFNvcnRlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NvcnRlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnRlcm5hbCBjb25maWcgd2hpY2ggbWFwcHMgdGhlIGRpcmVjdGlvbiBBU0MgdG8gMSwgLTEgb3RoZXJ3aXNlXHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpcmVjdGlvbk11bHRpcGxpZXI6IDEsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHNvcnQgZGlyZWN0aW9uIHdoZW4gdXNpbmcgYSBwcm9wZXJ0eS5cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbl89J0FTQydcclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXJlY3Rpb25fOiAnQVNDJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBsaXN0ZW5lckFwcGxpZWQ9ZmFsc2VcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIHNvcnQgYnkuXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24sIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5ICYgZGlyZWN0aW9uXHJcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gc29ydEJ5PW51bGxcclxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0NvbGxhdG9yXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydEJ5OiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgdG8gdXNlIHRoZSB0cmFuc2Zvcm1WYWx1ZSBtZXRob2QgZm9yIGVhY2ggaXRlbSAodGhlIG1ldGhvZCBjYW4gZ2V0IG92ZXJyaWRkZW4pXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlVHJhbnNmb3JtVmFsdWU9dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXNlVHJhbnNmb3JtVmFsdWU6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbWUuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgOiBtZS5wcm9wZXJ0eVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBtZS5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXHJcbiAgICAgKiBAcGFyYW0gYVxyXG4gICAgICogQHBhcmFtIGJcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdFNvcnRCeShhLCBiKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgYSA9IGFbbWUucHJvcGVydHldO1xyXG4gICAgICAgIGIgPSBiW21lLnByb3BlcnR5XTtcclxuXHJcbiAgICAgICAgaWYgKG1lLnVzZVRyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGEgPSBtZS50cmFuc2Zvcm1WYWx1ZShhKTtcclxuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxICogbWUuZGlyZWN0aW9uTXVsdGlwbGllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhIDwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gLTEgKiBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgeyp9IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybVZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTb3J0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcclxuXHJcbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxyXG4gICAgICBpc0luc3RhbmNlICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSB3aWxsIGdldCBhcHBsaWVkIHRvIHRoZSBjbGFzcyBjb25zdHJ1Y3RvclxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXHJcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdiYXNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW5zOiBudWxsXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZXMgdGhlIHN0YXRpYyBnZXRDb25maWcoKSBvYmplY3RcclxuICAgICAqIEFwcGxpZXMgdGhlIG9ic2VydmFibGUgbWl4aW4gaWYgbmVlZGVkLCBncmFudHMgcmVtb3RlIGFjY2VzcyBpZiBuZWVkZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xyXG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XHJcblxyXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSB8fCBtZS5taXhpbnMgJiYgTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgbWUubWl4aW5zKSkge1xyXG4gICAgICAgICAgICBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xyXG5cclxuICAgICAgICBpZiAobWUuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICBtZS5jb250cm9sbGVyLnBhcnNlQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBvbkNvbnN0cnVjdGVkKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaXMgZG9uZVxyXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1N1cHBvcnRlZCB2YWx1ZXMgZm9yICcgKyBuYW1lICsgJyBhcmU6JywgdmFsdWVzLmpvaW4oJywgJyksIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSWQoaWQpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIGlkID0gSWRHZW5lcmF0b3IuZ2V0SWQobWUubnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWUuaWQgPSBpZDtcclxuXHJcbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIU5lby5pZE1hcCkge1xyXG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcclxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhtZSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBtZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcclxuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XHJcbiAgICAgICAgcmV0dXJuIChrZXkgPyBjZmdba2V5XSA6IGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIG1lLm1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSk7XHJcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByb2Nlc3NDb25maWdzKCkge1xyXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcclxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pO1xyXG5cclxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcclxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGdvdCBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcclxuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xyXG5cclxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxyXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXHJcbiAgICAgKi9cclxuICAgIGluaXRSZW1vdGUoKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHJlbW90ZSAgICA9IG1lLnJlbW90ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWUuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBvcmlnaW47XHJcblxyXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3Mgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy51bml0VGVzdE1vZGUgJiYgTmVvLmlzT2JqZWN0KHJlbW90ZSkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICAgICA6ICdyZWdpc3RlclJlbW90ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHMgICAgIDogbWV0aG9kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICAgOiBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIG1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XHJcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICAgICAgbWUub3JpZ2luYWxDb25maWcgPSBOZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxyXG4gICAgICovXHJcbiAgICBzZXQodmFsdWVzPXt9KSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB1c2luZzpcclxuICAgICAgICAvLyBtZVtjb25maWdTeW1ib2xdID0gdmFsdWVzO1xyXG4gICAgICAgIC8vIHdlIGtlZXAgdGhlIE9iamVjdCBpbnN0YW5jZSAoZGVmaW5lZCB2aWEgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKSA9PiBub24gZW51bWVyYWJsZSlcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XHJcblxyXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cclxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5jb21wb25lbnQuQnV0dG9uIChuZW8tYnV0dG9uLTEpXVwiYFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZSArICcgKGlkOicgKyB0aGlzLmlkICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XHJcbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXHJcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cclxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxyXG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcclxuXHJcbkJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2U7XHJcblxyXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXHJcbiAqIEl0IGNvdWxkIGdldCBzaW1wbGlmaWVkIHRvIGp1c3QgYmVpbmcgYW4gb2JqZWN0IChuZWVkcyB0byBtYW51YWxseSBnZXQgcHV0IGludG8gdGhlIE5lbyBuYW1lc3BhY2UgaW4gdGhpcyBjYXNlKS5cclxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIElkR2VuZXJhdG9yIHtcclxuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xyXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naWQtZ2VuZXJhdG9yJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcclxuICAgICAgICAgKi9cclxuICAgICAgICBiYXNlOiAnbmVvLScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPSd0cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gYWxpYXNcclxuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnN0cnVjdGVkKCkge31cclxuXHJcbiAgICBpbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0SWQobmFtZSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lIHx8ICduZW8nO1xyXG5cclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBtZS5pZENvdW50ZXIsXHJcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XHJcblxyXG4gICAgICAgIGNvdW50ZXJbbmFtZV0gPSArK2NvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJZEdlbmVyYXRvcik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuTG9nZ2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsb2dnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2xvZ2dlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2xvZydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldmVsOiAnbG9nJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIC8vIGFsaWFzZXNcclxuICAgICAgICBOZW8uYXBwbHlGcm9tTnMoTmVvLCB0aGlzLCB7XHJcbiAgICAgICAgICAgIGVycm9yICAgOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxyXG4gICAgICAgICAgICBsb2cgICAgIDogJ2xvZycsXHJcbiAgICAgICAgICAgIGxvZ0Vycm9yOiAnbG9nRXJyb3InLFxyXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGVycm9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBsb2coLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGluZm8oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnaW5mbyc7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBsb2dFcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdlcnJvcic7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICB3YXJuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gJ3dhcm4nO1xyXG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2dzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dnZXIpO1xyXG5cclxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShMb2dnZXIpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdtaXhpbi1vYnNlcnZhYmxlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxyXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcclxuICAgICAgICAgICAgbGlzdGVuZXJzO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcclxuXHJcbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm90by5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWcub2JzZXJ2YWJsZSAmJiAhcHJvdG8uY29uc3RydWN0b3IubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmUgICAgICAgICAgOiBtZS5maXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IG1lLnJlbW92ZUxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMuZm47XHJcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcclxuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0czsgLy8gVkMgaG9vaywgY2FuIGdldCBwYXJzZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpbiBjYXNlIHRoZSB2aWV3IHVzZXMgdGhlIHBhcmVudCBWQ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudENvbmZpZyA9IHtcclxuICAgICAgICAgICAgZm4gICAgOiBsaXN0ZW5lcixcclxuICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcclxuICAgICAgICAgICAgZGF0YSAgOiBkYXRhLFxyXG4gICAgICAgICAgICBpZCAgICA6IGV2ZW50SWQgfHwgTmVvLmdldElkKCdldmVudCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzICYmIG1lLmxpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgZXZlbnQgaGFuZGxlciBhdHRhY2hlZDogJyArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIGZpcmUobmFtZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBhcmdzICAgICAgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcclxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcclxuICAgICAgICAgICAgbGVuICAgID0gZXZlbnRzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcgPSBldmVudHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkKSB7XHJcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcclxuXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxpYXMgZm9yIGFkZExpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICBvbiguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxyXG4gICAgICovXHJcbiAgICB1biguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XHJcblxyXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XHJcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWNhbWVsUmVnRXg6IC8oW2Etel0pKFtBLVpdKS9nXHJcbiAgICB9fVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBhIHN5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgVGhlIHN0eWxlcyBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBVdGlsLmlzU3RyaW5nKHN0cmluZykgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIGxvd2VyY2FzZS5cclxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFydHM7XHJcblxyXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xyXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXHJcblxyXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxyXG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxyXG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxyXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gaXRlcmFibGVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgbGV0IGxlbjtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xyXG5cclxuLy8gYWxpYXNlc1xyXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XHJcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcclxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcclxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXHJcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxyXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcclxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcclxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcclxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXHJcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxyXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXHJcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcclxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxyXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5kYXRhLmNvbm5lY3Rpb24uWGhyXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFhociBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZGF0YS5jb25uZWN0aW9uLlhocidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5kYXRhLmNvbm5lY3Rpb24uWGhyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd4aHInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ3hoci1jb25uZWN0aW9uJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbn0gY2FsbGJhY2s9bnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVxdWVzdHM9e31cclxuICAgICAgICAgKi9cclxuICAgICAgICByZXF1ZXN0czoge30sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzY29wZT1udWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2NvcGU6IG51bGwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0aW1lb3V0PTUwMDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aW1lb3V0OiA1MDAwXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRzLmNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5oZWFkZXJzXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdHMuaW5zaWRlTmVvIHRydWUgZm9yIGNhbGxzIHdpdGggcmVsYXRpdmUgVVJMcyBpbnNpZGUgdGhlIGZyYW1ld29yayBzY29wZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMubWV0aG9kIERFTEVURSwgR0VULCBQT1NULCBQVVRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnBhcmFtc1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMucmVzcG9uc2VUeXBlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5zY29wZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMudXJsXHJcbiAgICAgKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG9wdHMpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBvcHRzLmhlYWRlcnMgfHwge30sXHJcbiAgICAgICAgICAgIGlkICAgICAgPSBOZW8uZ2V0SWQoJ3hoci1yZXF1ZXN0JyksXHJcbiAgICAgICAgICAgIG1ldGhvZCAgPSBvcHRzLm1ldGhvZCB8fCAnR0VUJyxcclxuICAgICAgICAgICAgeGhyICAgICA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBpZiAoIW9wdHMudXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05lby5YaHIucmVxdWVzdCB3aXRob3V0IGEgZ2l2ZW4gdXJsJyArIEpTT04uc3RyaW5naWZ5KG9wdHMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW9wdHMuaW5zaWRlTmVvICYmIGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJy9ub2RlX21vZHVsZXMvbmVvLm1qcy8nKSAmJiAhbG9jYXRpb24uaHJlZi5pbmNsdWRlcygnaHR0cHM6Ly9uZW9tanMuZ2l0aHViLmlvLycpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0cy51cmwuc3RhcnRzV2l0aCgnLi8nKSB8fCBvcHRzLnVybC5zdGFydHNXaXRoKCcuLi8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMudXJsID0gJy4uLy4uLycgKyBvcHRzLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9wdHMucGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRzLnVybCArPSAoJz8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhvcHRzLnBhcmFtcykudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhoci5uZW9JZCA9IGlkO1xyXG5cclxuICAgICAgICAgICAgbWUucmVxdWVzdHNbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHR5cGVvZiBvcHRzLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmIG9wdHMuY2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogb3B0cy5zY29wZSxcclxuICAgICAgICAgICAgICAgIHhociAgICAgOiB4aHJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRzLnJlc3BvbnNlVHlwZSB8fCAndGV4dCc7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ICAgICAgPSBtZS50aW1lb3V0O1xyXG5cclxuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgICAgbWUub25FcnJvci5iaW5kKG1lKSk7XHJcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICAgIG1lLm9uRXJyb3IuYmluZChtZSkpO1xyXG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICAgICBtZS5vbkxvYWQuYmluZChtZSkpO1xyXG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBtZS5vblByb2dyZXNzLmJpbmQobWUpKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgb3B0cy51cmwsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaGVhZGVycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB4aHIuc2VuZChvcHRzLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHhocjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZvcm1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAgKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XHJcbiAgICAgKi9cclxuICAgIHNlbmRGb3JtKGZvcm0sIG9wdHMpIHtcclxuICAgICAgICBvcHRzLmRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcclxuICAgICAqL1xyXG4gICAgb25Mb2FkKGUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGlkICAgICAgPSBlLmN1cnJlbnRUYXJnZXQubmVvSWQsXHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSBtZS5yZXF1ZXN0c1tpZF0sXHJcbiAgICAgICAgICAgIGNiICAgICAgPSByZXF1ZXN0LmNhbGxiYWNrO1xyXG5cclxuICAgICAgICBjYiAmJiBjYi5hcHBseShyZXF1ZXN0LnNjb3BlIHx8IG1lLCBbbWUuZ2V0UmVzcG9uc2UoZSksIHRydWVdKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVxdWVzdCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Rba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBtZS5yZXF1ZXN0c1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcclxuICAgICAqL1xyXG4gICAgb25FcnJvcihlKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBpZCAgICAgID0gZS5jdXJyZW50VGFyZ2V0Lm5lb0lkLFxyXG4gICAgICAgICAgICByZXF1ZXN0ID0gbWUucmVxdWVzdHNbaWRdLFxyXG4gICAgICAgICAgICBjYiAgICAgID0gcmVxdWVzdC5jYWxsYmFjaztcclxuXHJcbiAgICAgICAgY2IgJiYgY2IuYXBwbHkocmVxdWVzdC5zY29wZSB8fCBtZSwgW21lLmdldFJlc3BvbnNlKGUpLCBmYWxzZV0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXF1ZXN0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdFtrZXldID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGVsZXRlIG1lLnJlcXVlc3RzW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlIGNhbm5vdCBjbG9uZSBldmVudCBvYmplY3RzIGFjcm9zcyBtZXNzYWdpbmdcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXHJcbiAgICAgKi9cclxuICAgIGdldFJlc3BvbnNlKGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlYWR5U3RhdGU6IHRhcmdldC5yZWFkeVN0YXRlLFxyXG4gICAgICAgICAgICByZXNwb25zZSAgOiB0YXJnZXQucmVzcG9uc2UsXHJcbiAgICAgICAgICAgIHN0YXR1cyAgICA6IHRhcmdldC5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHRhcmdldC5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICBoZWFkZXJzICAgOiB0YXJnZXQuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgb25Qcm9ncmVzcygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIHByb21pc2VSZXF1ZXN0KG9wdHMpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBvcHRzLmNhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSwgc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG1lLnJlcXVlc3Qob3B0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIHByb21pc2VKc29uKG9wdHMpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBvcHRzLmNhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSwgc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbjtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uOiBqc29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yICA6IGVyci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBtZS5yZXF1ZXN0KG9wdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhYaHIpO1xyXG5cclxuZXhwb3J0IHtYaHIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvbGxlY3Rpb25CYXNlfSBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgb3RoZXIgbWFuYWdlciBjbGFzc2VzXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5CYXNlXHJcbiAqIEBleHRlbmRzIE5lby5jb2xsZWN0aW9uLkJhc2VcclxuICovXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb2xsZWN0aW9uQmFzZXtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQmFzZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkJhc2UnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UtbWFuYWdlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnYmFzZS1tYW5hZ2VyJ1xyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBnZXRCeUlkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihpdGVtKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG1lLmdldChpdGVtLmlkKSkge1xyXG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYW4gaXRlbSB3aXRoIGFuIGFscmVhZHkgZXhpc3RpbmcgaWQnLCBpdGVtLCBtZS5nZXQoaXRlbS5pZCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIoaXRlbSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcclxuXHJcbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiB0b2RvOiBleGNlcHQgY3JlYXRlUmFuZG9tRGF0YSBhIGxlZ2FjeSBjbGFzcywgc2luY2Ugc3RvcmVzIGxpdmUgZGlyZWN0bHkgaW5zaWRlIHRoZSBhcHAgd29ya2VyXHJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5TdG9yZVxyXG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIFN0b3JlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLlN0b3JlJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuU3RvcmUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3N0b3JlLW1hbmFnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ3N0b3JlLW1hbmFnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsaXN0ZW5lcnM9e31cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxpc3RlbmVyczoge30sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWydjcmVhdGVSYW5kb21EYXRhJywgJ2ZpbHRlcicsICdsb2FkJywgJ3NvcnQnXX1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbW90ZToge1xyXG4gICAgICAgICAgICBhcHA6IFsnY3JlYXRlUmFuZG9tRGF0YScsICdmaWx0ZXInLCAnbG9hZCcsICdzb3J0J11cclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIER1bW15IG1ldGhvZCB1bnRpbCB3ZSBoYXZlIGEgZGF0YSBwYWNrYWdlIGluIHBsYWNlXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50Q29sdW1uc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudFJvd3NcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUmFuZG9tRGF0YShhbW91bnRDb2x1bW5zLCBhbW91bnRSb3dzKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXSxcclxuICAgICAgICAgICAgaSAgICA9IDAsXHJcbiAgICAgICAgICAgIGo7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgYW1vdW50Um93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7fSk7XHJcblxyXG4gICAgICAgICAgICBqID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoOyBqIDwgYW1vdW50Q29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjb2x1bW4nICsgal0gPSAnQ29sdW1uJyArIChqICsgMSkgKyAnIC0gJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAvIDEuNSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjb2x1bW4nICsgaiArICdzdHlsZSddID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpIC8gMS43KSA+IDAgPyAnYnJvd24nIDogaSUyID8gJyMzYzNmNDEnIDogJyMzMjMyMzInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVJZFxyXG4gICAgICogQHBhcmFtIGZpZWxkTmFtZVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGZpbHRlcihzdG9yZUlkLCBmaWVsZE5hbWUsIHZhbHVlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdG9yZUlkXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGxvYWQoc3RvcmVJZCwgcGFyYW1zKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdG9yZUlkXHJcbiAgICAgKiBAcGFyYW0gZmllbGROYW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgc29ydChzdG9yZUlkLCBmaWVsZE5hbWUsIHZhbHVlKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTdG9yZSk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFN0b3JlKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvcmVCYXNlfSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcclxuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcclxuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyAgICBmcm9tICcuL21peGlucy9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyXHJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLkJhc2VcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKiBAYWJzdHJhY3RcclxuICovXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuV29ya2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5Xb3JrZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3dvcmtlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnd29ya2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gd29ya2VySWQ9bnVsbFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd29ya2VySWQ6IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XHJcblxyXG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lLm9uTWVzc2FnZS5iaW5kKG1lKSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBOZW8ud29ya2VySWQgICAgICA9IG1lLndvcmtlcklkO1xyXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyID0gbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcclxuICAgICAqL1xyXG4gICAgb25NZXNzYWdlKGUpIHtcclxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGRhdGEgICAgPSBlLmRhdGEsXHJcbiAgICAgICAgICAgIGFjdGlvbiAgPSBkYXRhLmFjdGlvbixcclxuICAgICAgICAgICAgcmVwbHlJZCA9IGRhdGEucmVwbHlJZCxcclxuICAgICAgICAgICAgcHJvbWlzZTtcclxuXHJcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGFjdGlvbiBpcyBtaXNzaW5nOiAnICsgZGF0YS5pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uICE9PSAncmVwbHknKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzWydvbicgKyBOZW8uY2FwaXRhbGl6ZShhY3Rpb24pXShkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGRhdGEsIGVyciwgZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3QoZGF0YS5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgbWUucHJvbWlzZXNbcmVwbHlJZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqL1xyXG4gICAgb25QaW5nKG1zZykge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZShtc2csIHtcclxuICAgICAgICAgICAgb3JpZ2luTXNnOiBtc2dcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKi9cclxuICAgIG9uUmVnaXN0ZXJOZW9Db25maWcobXNnKSB7XHJcbiAgICAgICAgTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxyXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXHJcbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgICAqL1xyXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbWUuc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpLFxyXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XHJcblxyXG4gICAgICAgICAgICBtZS5wcm9taXNlc1ttc2dJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0IDogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXHJcbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cclxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcclxuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcclxuXHJcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xyXG5cclxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBOZW8gICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL05lby5tanMnO1xyXG5pbXBvcnQgQmFzZSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIFN0b3JlTWFuYWdlcn0gZnJvbSAnLi4vbWFuYWdlci9TdG9yZS5tanMnO1xyXG5pbXBvcnQgVXRpbCAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL1V0aWwubWpzJztcclxuaW1wb3J0IFhociAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vWGhyLm1qcyc7XHJcblxyXG4vKipcclxuICogVGhlIERhdGEgd29ya2VyIGlzIHJlc3BvbnNpYmxlIHRvIGhhbmRsZSBhbGwgb2YgdGhlIGNvbW11bmljYXRpb24gdG8gdGhlIGJhY2tlbmQgKGUuZy4gQWpheC1jYWxscykuXHJcbiAqIFNlZSB0aGUgdHV0b3JpYWxzIGZvciBmdXJ0aGVyIGluZm9zLlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5EYXRhXHJcbiAqIEBleHRlbmRzIE5lby53b3JrZXIuQmFzZVxyXG4gKiBAc2luZ2xldG9uXHJcbiAqL1xyXG5jbGFzcyBEYXRhIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuRGF0YSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuRGF0YScsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZGF0YS13b3JrZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2RhdGEtd29ya2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2RhdGEnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB3b3JrZXJJZDogJ2RhdGEnXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3b3JrZXIuRGF0YSBvbkxvYWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGF0YSk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERhdGEpO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi4vY29yZS9JZEdlbmVyYXRvci5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgd3JhcHBlciBmb3Igd29ya2VyIHBvc3QgbWVzc2FnZXMgc2VudCBiZXR3ZWVuIHRoZSBBcHAsIERhdGEsIFZEb20gd29ya2VyICYgdGhlIG1haW4gdGhyZWFkLlxyXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXHJcbiAqL1xyXG5jbGFzcyBNZXNzYWdlIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpZD1JZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xyXG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xyXG4gICAgICAgIGNvbmZpZy5vcmlnaW4gICAgICA9IGNvbmZpZy5vcmlnaW4gICAgICB8fCBOZW8ud29ya2VySWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbnMgPSBOZW8ubnMoJ05lby53b3JrZXInLCB0cnVlKTtcclxubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XHJcblxyXG5leHBvcnQge01lc3NhZ2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW5zLlJlbW90ZU1ldGhvZEFjY2Vzc1xyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcydcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnbWl4aW4tcmVtb3RlLW1ldGhvZC1hY2Nlc3MnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1peGluOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcclxuICAgICAqIEBwYXJhbSBtZXRob2RcclxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9yaWdpbiA9IHJlbW90ZS5vcmlnaW47XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcclxuICAgICAgICAgICAgbGV0IG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgICAgOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdGVNZXRob2QgICA6IG1ldGhvZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxyXG4gICAgICovXHJcbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xyXG4gICAgICAgIGlmIChyZW1vdGUuZGVzdGluYXRpb24gPT09IE5lby53b3JrZXJJZCkge1xyXG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHJlbW90ZS5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICBtZXRob2RzICAgPSByZW1vdGUubWV0aG9kcyxcclxuICAgICAgICAgICAgICAgIHBrZyAgICAgICA9IE5lby5ucyhjbGFzc05hbWUsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBrZ1ttZXRob2RdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09ICdtYWluJykge1xyXG4gICAgICAgICAgICAgICAgbWUuZmlyZSgncmVtb3RlcmVnaXN0ZXJlZCcsIHJlbW90ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xyXG4gICAgICovXHJcbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcclxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcclxuICAgICAgICAgICAgcGtnID0gTmVvLm5zKG1zZy5yZW1vdGVDbGFzc05hbWUpLFxyXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcclxuXHJcbiAgICAgICAgaWYgKCFwa2cpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xyXG5cclxuICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xyXG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIC4uLm1zZy5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIG91dC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlamVjdGVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICByZWplY3QobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICByZXNvbHZlKG1zZywgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xyXG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxyXG4gICAgICAgICAgICBkYXRhICAgOiBkYXRhLFxyXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmVtb3RlTWV0aG9kQWNjZXNzKTtcclxuXHJcbmV4cG9ydCB7UmVtb3RlTWV0aG9kQWNjZXNzIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=