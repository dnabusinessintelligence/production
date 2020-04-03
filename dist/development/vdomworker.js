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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker/VDom.mjs");
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

/***/ "./src/util/Style.mjs":
/*!****************************!*\
  !*** ./src/util/Style.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");


/**
 * @class Neo.util.Style
 * @extends Neo.core.Base
 */
class Style extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Style'
         * @private
         */
        className: 'Neo.util.Style'
    }}

    /**
     * Creates an delta object, containing the styles of newStyle which are not included or different than in oldStyle
     * Styles included in oldStyle but missing in newStyle will get a value of null
     * see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     * @param {Object|String} newStyle
     * @param {Object|String} oldStyle
     * @returns {Object} style delta
     */
    static compareStyles(newStyle, oldStyle) {
        let styles = {};

        if (Neo.isString(newStyle)) {
            newStyle = Neo.core.Util.createStyleObject(newStyle);
        }

        if (Neo.isString(oldStyle)) {
            oldStyle = Neo.core.Util.createStyleObject(oldStyle);
        }

        if (!newStyle && !oldStyle) {
            return null;
        } else if (!oldStyle) {
            return Neo.clone(newStyle);
        } else if (!newStyle) {
            Object.keys(oldStyle).forEach(function(style) {
                styles[style] = null;
            });
        } else {
            Object.keys(newStyle).forEach(function(style) {
                if (!oldStyle.hasOwnProperty(style) || oldStyle[style] !== newStyle[style]) {
                    styles[style] = newStyle[style];
                }
            });

            Object.keys(oldStyle).forEach(function(style) {
                if (!newStyle.hasOwnProperty(style)) {
                    styles[style] = null;
                }
            });

            if (Object.keys(styles).length > 0) {
                return styles;
            }

            return null;
        }
    }
}

Neo.applyClassConfig(Style);

/* harmony default export */ __webpack_exports__["default"] = (Style);

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

/***/ "./src/vdom/Helper.mjs":
/*!*****************************!*\
  !*** ./src/vdom/Helper.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./src/core/Base.mjs");
/* harmony import */ var _VNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VNode.mjs */ "./src/vdom/VNode.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VNode.mjs */ "./src/util/VNode.mjs");




/**
 * The central class for the VDom worker to create vnodes & delta updates.
 * @class Neo.vdom.Helper
 * @extends Neo.core.Base
 * @singleton
 */
class Helper extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.vdom.Helper'
         * @private
         */
        className: 'Neo.vdom.Helper',
        /**
         * @member {String} ntype='vdom-helper'
         * @private
         */
        ntype: 'vdom-helper',
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: ['create', 'update']}
         * @private
         */
        remote: {
            app: ['create', 'update']
        },
        /**
         * @member {Boolean} returnChildNodeOuterHtml=false
         */
        returnChildNodeOuterHtml: false,
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * Void attributes inside html tags
         * @member {String[]} voidAttributes
         * @private
         */
        voidAttributes: [
            'checked',
            'required'
        ],
        /**
         * Void html tags
         * @member {String[]} voidElements
         * @private
         */
        voidElements: [
            'area',
            'base',
            'br',
            'col',
            'command',
            'embed',
            'hr',
            'img',
            'input',
            'keygen',
            'link',
            'meta',
            'param',
            'source',
            'track',
            'wbr'
        ]
    }}

    /**
     * Creates a Neo.vdom.VNode tree for the given vdom template.
     * The top level vnode contains the outerHTML as a string.
     * @param {Object} opts
     * @param {Object} opts.vdom
     * @returns {Neo.vdom.VNode}
     */
    create(opts) {
        let me          = this,
            autoMount   = opts.autoMount === true,
            parentId    = opts.parentId,
            parentIndex = opts.parentIndex,
            node;

        delete opts.autoMount;
        delete opts.parentId;
        delete opts.parentIndex;

        node           = me.parseHelper(opts);
        node.outerHTML = me.createStringFromVnode(node);

        if (autoMount) {
            node.autoMount   = true;
            node.parentId    = parentId;
            node.parentIndex = parentIndex;
        }

        return node;
    }

    /**
     * Creates a Neo.vdom.VNode tree for the given vdom template and compares the new vnode with the current one
     * to calculate the vdom deltas.
     * @param {Object} opts
     * @param {Object} opts.vdom
     * @param {Object} opts.vnode
     * @returns {Object}
     */
    update(opts) {
        let me     = this,
            node   = me.parseHelper(opts.vdom),
            deltas = me.createDeltas({
                newVnode: node,
                oldVnode: opts.vnode
            });

        return {
            deltas    : deltas,
            updateVdom: true,
            vnode     : node
        };
    }

    /**
     *
     * @param {Object} vnode
     */
    createStringFromVnode(vnode) {
        let me = this;

        switch (vnode.vtype) {
            case 'root':
                return me.createStringFromVnode(vnode.childNodes[0]);
            case 'text':
                return vnode.innerHTML === undefined ? '' : String(vnode.innerHTML);
            case 'vnode':
                return me.createOpenTag(vnode) + me.createTagContent(vnode) + me.createCloseTag(vnode);
            default:
                return '';
        }
    }

    /**
     * @param {Object} vnode
     * @private
     */
    createOpenTag(vnode) {
        let string     = '<' + vnode.nodeName,
            attributes = vnode.attributes,
            cls        = vnode.className,
            style;

        if (vnode.style) {
            style = Neo.createStyles(vnode.style);

            if (style !== '') {
                string += ' style="' + style + '"';
            }
        }

        if (cls) {
            if (Neo.isArray(cls)) {
                cls = cls.join(' ');
            }

            if (cls !== '') {
                string += ' class="' + cls + '"';
            }
        }

        if (vnode.id) {
            string += ' id="' + vnode.id + '"';
        }

        Object.entries(attributes).forEach(([key, value]) => {
            if (this.voidAttributes.includes(key)) {
                if (value === 'true') { // vnode attribute values get converted into strings
                    string += (' ' + key);
                }
            } else if (key !== 'removeDom') {
                string += (' ' + key + '="' + value + '"');
            }
        });

        return string + '>';
    }

    /**
     * @param {Object} vnode
     * @private
     */
    createTagContent(vnode) {
        if (vnode.innerHTML) {
            return vnode.innerHTML;
        }

        let string = '',
            len    = vnode.childNodes ? vnode.childNodes.length : 0,
            i      = 0,
            childNode, outerHTML;

        for (; i < len; i++) {
            childNode = vnode.childNodes[i];

            outerHTML = this.createStringFromVnode(childNode);

            if (childNode.innerHTML !== outerHTML) {
                if (this.returnChildNodeOuterHtml) {
                    childNode.outerHTML = outerHTML;
                }
            }

            string += outerHTML;
        }

        return string;
    }

    /**
     * @param {Object} vnode
     * @private
     */
    createCloseTag(vnode) {
        return this.voidElements.indexOf(vnode.nodeName) > -1 ? '' : '</' + vnode.nodeName + '>';
    }

    /**
     *
     * @param {Object} opts
     * @returns {Object|Neo.vdom.VNode|null}
     */
    parseHelper(opts) {
        if (opts.removeDom === true) {
            return null;
        }

        if (typeof opts === 'string') {

        }

        if (opts.vtype === 'text') {
            if (!opts.id) {
                opts.id = Neo.getId('vtext'); // adding an id to be able to find vtype='text' items inside the vnode tree
            }

            opts.innerHTML = `<!-- ${opts.id} -->${opts.html || ''}<!-- /neo-vtext -->`;
            delete opts.html;
            return opts;
        }

        let me   = this,
            node = {attributes: {}, childNodes: [], style: {}},
            potentialNode;

        if (!opts.tag) {
            opts.tag = 'div';
        }

        Object.entries(opts).forEach(([key, value]) => {
            let hasUnit, newValue, style;

            if (value !== undefined && value !== null && key !== 'flag') {
                switch (key) {
                    case 'tag':
                    case 'nodeName':
                        node.nodeName = value;
                        break;
                    case 'html':
                    case 'innerHTML':
                        node.innerHTML = value.toString(); // support for numbers
                        break;
                    case 'children':
                    case 'childNodes':
                    case 'cn':
                        if (!Neo.isArray(value)) {
                            value = [value];
                        }

                        newValue = [];

                        value.forEach(item => {
                            if (item.removeDom !== true) {
                                delete item.removeDom; // could be false
                                potentialNode = me.parseHelper(item);

                                if (potentialNode) { // don't add null values
                                    newValue.push(potentialNode);
                                }
                            }
                        });

                        node.childNodes = newValue;
                        break;
                    case 'cls':
                        if (value && !Array.isArray(value)) {
                            node.className = [value];
                        } else if (!(Neo.isArray(value) && value.length < 1)) {
                            node.className = value;
                        }
                        break;
                    case 'height':
                    case 'maxHeight':
                    case 'maxWidth':
                    case 'minHeight':
                    case 'minWidth':
                    case 'width':
                        hasUnit = value != parseInt(value);
                        node.style[key] = value + (hasUnit ? '' : 'px');
                        break;
                    case 'id':
                        node.id = value;
                        break;
                    case 'style':
                        style = node.style;
                        if (Neo.isString(value)) {
                            node.style = Object.assign(style, Neo.core.Util.createStyleObject(value));
                        } else {
                            node.style = Object.assign(style, value);
                        }
                        break;
                    default:
                        node.attributes[key] = value + '';
                        break;
                }
            }
        });

        return new _VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](node);
    }

    /**
     * @param {Object} config
     * @param {Array} config.deltas
     * @param {Number} config.index
     * @param {Object} config.newVnode
     * @param {Object} config.newVnodeRoot
     * @param {Object} config.oldVnode
     * @param {Object} config.oldVnodeRoot
     * @param {String} config.parentId
     * @returns {Array} deltas
     */
    createDeltas(config) {
        let me            = this,
            deltas        = config.deltas || [],
            index         = config.index,
            newVnode      = config.newVnode,
            newVnodeRoot  = config.newVnodeRoot || newVnode,
            oldVnode      = config.oldVnode,
            oldVnodeRoot  = config.oldVnodeRoot || oldVnode,
            parentId      = config.parentId,
            attributes, delta, value, i, indexDelta, keys, len, movedNode, movedOldNode, styles, add, remove, returnValue, tmp, wrappedNode;

        // console.log('createDeltas', newVnode && newVnode.id, oldVnode && oldVnode.id, newVnode, oldVnode);

        if (newVnode && !oldVnode) { // new node at top level or at the end of a child array
            // console.log('insertNode', newVnode);

            deltas.push({
                action   : 'insertNode',
                id       : newVnode.id,
                index    : index,
                outerHTML: me.createStringFromVnode(newVnode),
                parentId : parentId
            });
        } else if (!newVnode && oldVnode) {
            // console.log('top level removed node', oldVnode.id, oldVnode);

            deltas.push({
                action: 'removeNode',
                id    : oldVnode.id
            });
        } else {
            if (newVnode && oldVnode && newVnode.id !== oldVnode.id) {
                movedNode    = me.findVnode(newVnodeRoot, oldVnode.id, newVnode);
                movedOldNode = me.findVnode(oldVnodeRoot, newVnode.id, oldVnode);

                 // console.log('movedNode', movedNode);
                 // console.log('movedOldNode', movedOldNode);

                if (!movedNode && !movedOldNode) {
                    // console.log('replace node', oldVnode.id, '('+newVnode.id+')');

                    deltas.push({
                        action: 'removeNode',
                        id    : oldVnode.id,
                    });

                    deltas.push({
                        action   : 'insertNode',
                        id       : newVnode.id,
                        index    : index,
                        outerHTML: me.createStringFromVnode(newVnode),
                        parentId : parentId
                    });

                    return {
                        indexDelta: 0
                    }
                } else if (!movedNode && movedOldNode) {
                    if (newVnode.id === movedOldNode.vnode.id) {
                        indexDelta = 0;

                        if (_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnodeById(oldVnode, newVnode.id)) {
                            // the old vnode replaced a parent vnode
                            // e.g.: vdom.cn[1] = vdom.cn[1].cn[0];

                            deltas.push({
                                action  : 'replaceChild',
                                fromId  : oldVnode.id,
                                parentId: parentId,
                                toId    : newVnode.id
                            });
                        } else {
                            // the old vnode got moved into a different higher level branch
                            // and its parent got removed
                            // e.g.:
                            // vdom.cn[1] = vdom.cn[2].cn[0];
                            // vdom.cn.splice(2, 1);

                            let movedOldNodeDetails = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(oldVnodeRoot, movedOldNode.vnode.id),
                                oldVnodeDetails     = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(oldVnodeRoot, oldVnode.id);

                            indexDelta = 1;

                            if (movedOldNodeDetails.parentNode.id === oldVnodeDetails.parentNode.id) {
                                // console.log('potential move node', index, movedOldNodeDetails.index);

                                let newVnodeDetails = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeRoot, newVnode.id),
                                    targetIndex = index + 1; // +1 since the current index will already get removed

                                // console.log(newVnodeDetails.parentNode);

                                i   = index + 1;
                                tmp = oldVnodeDetails.parentNode.childNodes;
                                len = movedOldNodeDetails.index;

                                for (; i < len; i++) {
                                    // console.log(tmp[i]);
                                    if (!_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeDetails.parentNode, tmp[i].id)) {
                                        // console.log('not found');
                                        targetIndex ++;
                                    }
                                }

                                // console.log(movedOldNodeDetails.index, targetIndex);

                                movedOldNodeDetails.parentNode.childNodes.splice(movedOldNodeDetails.index, 1);

                                // do not move a node in case its previous sibbling nodes will get removed
                                if (movedOldNodeDetails.index !== targetIndex) {
                                    deltas.push({
                                        action: 'moveNode',
                                        id      : movedOldNode.vnode.id,
                                        index   : index,
                                        parentId: parentId
                                    });
                                }

                                // console.log(movedOldNodeDetails);

                                indexDelta = 0;
                            }

                            deltas.push({
                                action: 'removeNode',
                                id    : oldVnode.id
                            });
                        }

                        me.createDeltas({
                            deltas      : deltas,
                            newVnode    : newVnode,
                            newVnodeRoot: newVnodeRoot,
                            oldVnode    : movedOldNode.vnode,
                            oldVnodeRoot: oldVnodeRoot,
                            parentId    : parentId
                        });

                        return {
                            indexDelta: indexDelta
                        };
                    } else {
                        // console.log('removed node', oldVnode.id, '('+newVnode.id+')');

                        deltas.push({
                            action: 'removeNode',
                            id    : oldVnode.id
                        });

                        return {
                            indexDelta: 1
                        };
                    }
                } else if (!movedOldNode) {
                    // new node inside of a child array
                    // console.log('new node', index, parentId, newVnode);

                    wrappedNode = movedNode && _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnodeById(newVnode, oldVnode.id);

                    if (wrappedNode) {
                        // an existing vnode got wrapped into a new vnode
                        // => we need to remove the old one, since it will get recreated

                        // console.log('movedNode removeNode', movedNode.vnode.id);

                        deltas.push({
                            action: 'removeNode',
                            id    : movedNode.vnode.id
                        });
                    }

                    deltas.push({
                        action   : 'insertNode',
                        id       : newVnode.id,
                        index    : index,
                        outerHTML: me.createStringFromVnode(newVnode),
                        parentId : parentId
                    });

                    return {
                        indexDelta: wrappedNode ? 0 : -1
                    }
                } else if (movedNode) {
                    indexDelta = 0;

                    // check if the vnode got moved inside the vnode tree

                    let newVnodeDetails = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeRoot, newVnode.id);

                    if (newVnodeDetails.parentNode.id === movedNode.parentNode.id) {
                        // console.log(newVnodeDetails.index, movedNode.index);

                        if (newVnodeDetails.index > movedNode.index) {
                            // todo: needs testing => index gaps > 1
                            indexDelta = newVnodeDetails.index - movedNode.index;
                        }
                    }

                    deltas.push({
                        action: 'moveNode',
                        id      : movedNode.vnode.id,
                        index   : movedNode.index,
                        parentId: movedNode.parentNode.id
                    });

                    me.createDeltas({
                        deltas      : deltas,
                        newVnode    : movedNode.vnode,
                        newVnodeRoot: newVnodeRoot,
                        oldVnode    : oldVnode,
                        oldVnodeRoot: oldVnodeRoot,
                        parentId    : movedNode.parentNode.id
                    });

                    return {
                        indexDelta: 0
                    }
                }
            }

            if (newVnode && oldVnode && newVnode.id === oldVnode.id) {
                if (newVnode.vtype === 'text' && newVnode.innerHTML !== oldVnode.innerHTML) {
                    deltas.push({
                        action  : 'updateVtext',
                        id      : newVnode.id,
                        parentId: _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeRoot, newVnode.id).parentNode.id,
                        value   : newVnode.innerHTML
                    })
                } else {
                    keys = Object.keys(newVnode);

                    Object.keys(oldVnode).forEach(prop => {
                        if (!newVnode.hasOwnProperty(prop)) {
                            keys.push(prop);
                        } else if (prop === 'attributes') { // find removed attributes
                            Object.keys(oldVnode[prop]).forEach(attr => {
                                if (!newVnode[prop].hasOwnProperty(attr)) {
                                    newVnode[prop][attr] = null;
                                }
                            });
                        }
                    });

                    keys.forEach(prop => {
                        delta = {};
                        value = newVnode[prop];

                        switch (prop) {
                            case 'attributes':
                                attributes = {};

                                Object.entries(value).forEach(([key, value]) => {
                                    if (!(oldVnode.attributes.hasOwnProperty(key) && oldVnode.attributes[key] === value)) {
                                        if (value !== '' && Neo.isEmpty(value)) {
                                            // ignore empty arrays & objects
                                        } else {
                                            attributes[key] = value;
                                        }
                                    }
                                });

                                if (Object.keys(attributes).length > 0) {
                                    delta.attributes = attributes;

                                    Object.entries(attributes).forEach(([key, value]) => {
                                        if (value === null) {
                                            delete newVnode.attributes[key];
                                        }
                                    });
                                }
                                break;
                            case 'childNodes':
                                i          = 0;
                                indexDelta = 0;
                                len        = Math.max(value.length, oldVnode.childNodes.length);

                                for (; i < len; i++) {
                                    returnValue = me.createDeltas({
                                        deltas      : deltas,
                                        index       : i,
                                        newVnode    : value[i],
                                        newVnodeRoot: newVnodeRoot,
                                        oldVnode    : oldVnode.childNodes[i + indexDelta],
                                        oldVnodeRoot: oldVnodeRoot,
                                        parentId    : newVnode.id
                                    });

                                    if (returnValue && returnValue.indexDelta) {
                                        indexDelta += returnValue.indexDelta;
                                    }
                                }
                                break;
                            case 'nodeName':
                            case 'innerHTML':
                                if (value !== oldVnode[prop]) {
                                    delta[prop] = value;
                                }
                                break;
                            case 'style':
                                styles = Neo.util.Style.compareStyles(value, oldVnode.style);
                                if (styles) {
                                    delta.style = styles;
                                }
                                break;
                            case 'className':
                                if (oldVnode.className) {
                                    add    = Neo.util.Array.difference(value, oldVnode.className);
                                    remove = Neo.util.Array.difference(oldVnode.className, value);
                                } else {
                                    add    =  value;
                                    remove = [];
                                }

                                if (add.length > 0 || remove.length > 0) {
                                    delta.cls = {
                                        add   : add,
                                        remove: remove
                                    };
                                }
                                break;
                        }

                        if (Object.keys(delta).length > 0) {
                            delta.id = newVnode.id;
                            deltas.push(delta);
                        }
                    });
                }
            }
        }

        return deltas;
    }

    /**
     *
     * @param {Neo.vdom.VNode} vnode
     * @param {String} id
     * @param {Neo.vdom.VNode} parentNode
     * @param {Number} index
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Neo.vdom.VNode} vnode
     */
    findVnode(vnode, id, parentNode, index) {
        if (!index) {
            index = 0;
        }

        let returnValue = null,
            children, childValue, i, len;

        if (vnode.id === id) {
            returnValue = {
                index     : index,
                parentNode: parentNode,
                vnode     : vnode
            };
        } else if (vnode.vtype !== 'text') {
            children = vnode.childNodes;
            i        = 0;
            len      = children && children.length || 0;

            for (; i < len; i++) {
                childValue = this.findVnode(children[i], id, vnode, i);

                if (childValue && childValue.vnode.id === id) {
                    returnValue = childValue;
                    break;
                }
            }
        }

        if (returnValue && returnValue.parentId === 'root') {
            returnValue.index = null;
        }

        return returnValue;
    }
}

Neo.applyClassConfig(Helper);

let instance = Neo.create(Helper);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/vdom/VNode.mjs":
/*!****************************!*\
  !*** ./src/vdom/VNode.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VNode; });
/**
 * Wrapper class for vnode objects. See the tutorials for further infos.
 * @class Neo.vdom.VNode
 */
class VNode {
    /**
     *
     * @param config
     */
    constructor(config) {
        /**
         * @member {Array} attributes=[]
         */

        /**
         * @member {Array} childNodes=[]
         */

        /**
         * @member {Array} className=[]
         */

        /**
         * @member {String} id=Neo.getId('vnode')
         */

        /**
         * @member {String} innerHTML
         */

        /**
         * @member {String} nodeName
         */

        /**
         * @member {Object} style
         */

        /**
         * @member {String} vtype='vnode'
         */

        Object.assign(this, {
            attributes: config.attributes || [],
            childNodes: config.childNodes || [],
            className : config.className  || [],
            id        : config.id         || Neo.getId('vnode'),
            innerHTML : config.innerHTML,
            nodeName  : config.nodeName,
            style     : config.style,
            vtype     : config.vtype      || 'vnode'
        });
    }
}

const ns = Neo.ns('Neo.vdom', true);
ns['VNode'] = VNode;



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

/***/ "./src/worker/VDom.mjs":
/*!*****************************!*\
  !*** ./src/worker/VDom.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./src/core/_export.mjs");
/* harmony import */ var _vdom_Helper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vdom/Helper.mjs */ "./src/vdom/Helper.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./src/util/Array.mjs");
/* harmony import */ var _util_Style_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Style.mjs */ "./src/util/Style.mjs");







/**
 * The Vdom worker converts vdom templates into vnodes, as well as creating delta-updates.
 * See the tutorials for further infos.
 * @class Neo.worker.VDom
 * @extends Neo.worker.Base
 * @singleton
 */
class VDom extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.VDom'
         * @private
         */
        className: 'Neo.worker.VDom',
        /**
         * @member {String} ntype='vdom-worker'
         * @private
         */
        ntype: 'vdom-worker',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {String} workerId='vdom'
         * @private
         */
        workerId: 'vdom'
    }}
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(VDom);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(VDom);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovLy8uL3NyYy9OZW8ubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0Jhc2UubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Mb2dnZXIubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL09ic2VydmFibGUubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL19leHBvcnQubWpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9TdHlsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVk5vZGUubWpzIiwid2VicGFjazovLy8uL3NyYy92ZG9tL0hlbHBlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zkb20vVk5vZGUubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci9NZXNzYWdlLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyL1ZEb20ubWpzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXIvbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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LE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZG9td29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd29ya2VyL1ZEb20ubWpzXCIpO1xuIiwiY29uc3QgTmVvID0gc2VsZi5OZW8gfHwge307XHJcblxyXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXHJcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gKiBAbmFtZSBjb25maWdcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxyXG4gICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcclxuICAgICAqL1xyXG4gICAgYXBwUGF0aDogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcclxuICAgICAqIEBkZWZhdWx0ICcuLydcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgYmFzZVBhdGg6ICcuLycsXHJcbiAgICAvKipcclxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgdGhlbWUgY3NzIGZpbGVzXHJcbiAgICAgKiBTZWUgbWFpbi5taXhpbnMuU3R5bGVzaGVldCA9PiBjcmVhdGVTdHlsZVNoZWV0KClcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnYnVpbGQvJyArIE5lby5jb25maWcuZW52aXJvbm1lbnRcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgW2NvbmZpZy5jc3NQYXRoXVxyXG4gICAgICogQG9wdGlvbmFsXHJcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxyXG4gICAgICovXHJcbiAgICBjc3NQYXRoOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBidWlsZCA9PiBkaXN0IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ1xyXG4gICAgICogVXNlZCBmb3IgYXV0b21hdGljYWxseSBpbmNsdWRpbmcgdGhlIG1hdGNoaW5nIHRoZW1lIGZpbGVzXHJcbiAgICAgKiBAZGVmYXVsdCAncHJvZHVjdGlvbidcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XHJcbiAgICAgKiBAdHlwZSBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgZW52aXJvbm1lbnQ6ICdwcm9kdWN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpZiBOZW8gaXMgcnVubmluZyB3aXRob3V0IGFueSBKUyBidWlsZHNcclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy5pc0V4cGVyaW1lbnRhbFxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICBpc0V4cGVyaW1lbnRhbDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cclxuICAgICAqIElmIGNvbmZpZy51c2VDc3M0ID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxyXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXHJcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxyXG4gICAgICovXHJcbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGlmIHRvIGxvYWQgdGhlIGZpbGVzIG5lZWRlZCBmb3Igd29ya2luZyB3aXRoIGFtQ2hhcnRzXHJcbiAgICAgKiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cclxuICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VBbUNoYXJ0c1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VBbUNoYXJ0czogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaWYgQ1NTNCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUNzczQ6IHRydWUsXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlc1xyXG4gICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICovXHJcbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlXHJcbn07XHJcblxyXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcclxuICAgIC8qKlxyXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXHJcbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHJlc291cmNlc1BhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3Jlc291cmNlcy8nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxyXG4gICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHdvcmtlckJhc2VQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdzcmMvd29ya2VyLydcclxufSk7XHJcblxyXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XHJcblxyXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcclxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXHJcbiAqIEBtb2R1bGUgTmVvXHJcbiAqIEBzaW5nbGV0b25cclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXHJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcclxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcclxuICovXHJcbmxldCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcclxuXHJcbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAvKipcclxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIE9iamVjdFxyXG4gICAgICovXHJcbiAgICBudHlwZU1hcDoge30sXHJcbiAgICAvKipcclxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXHJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSBCb29sZWFuXHJcbiAgICAgKi9cclxuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIGFwcGx5Q2xhc3NDb25maWcoY2xzKSB7XHJcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxyXG4gICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gbnVsbCxcclxuICAgICAgICAgICAgY29uZmlnICAgICAgICA9IHt9LFxyXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXHJcbiAgICAgICAgICAgIHByb3RvcyAgICAgICAgPSBbXSxcclxuICAgICAgICAgICAgc3RhdGljQ29uZmlnICA9IHt9LFxyXG4gICAgICAgICAgICBjdG9yO1xyXG5cclxuICAgICAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XHJcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdG9yLmhhc093blByb3BlcnR5KCdjbGFzc0NvbmZpZ0FwcGxpZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gTmVvLmNsb25lKGN0b3Iuc3RhdGljQ29uZmlnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm90b3MudW5zaGlmdChwcm90byk7XHJcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICA/IGJhc2VDZmcgICAgICAgOiBjb25maWc7XHJcbiAgICAgICAgc3RhdGljQ29uZmlnID0gYmFzZVN0YXRpY0NmZyA/IGJhc2VTdGF0aWNDZmcgOiBzdGF0aWNDb25maWc7XHJcblxyXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgbGV0IGNmZyAgICAgICA9IGN0b3IuZ2V0Q29uZmlnICAgICAgICYmIGN0b3IuZ2V0Q29uZmlnKCkgICAgICAgfHwge30sXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgbWl4aW5zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNmZykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaGFzUHJvcGVydHlTZXR0ZXIoZWxlbWVudCwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdudHlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0aWNDZmcgJiYgc3RhdGljQ2ZnLm9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCguLi5jZmcubWl4aW5zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBjZmcubWl4aW5zO1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpO1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgOiBOZW8uY2xvbmUoY29uZmlnLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGlzQ2xhc3MgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjdG9yLmdldFN0YXRpY0NvbmZpZztcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvR2xvYmFsTnMoY2xzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxyXG4gICAgICogQ2FuIGdldCBjYWxsZWQgZm9yIGNsYXNzZXMgYW5kIHNpbmdsZXRvbiBpbnN0YW5jZXNcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xyXG4gICAgICovXHJcbiAgICBhcHBseVRvR2xvYmFsTnMoY2xzKSB7XHJcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLCBuc0FycmF5LCBrZXksIG5zO1xyXG5cclxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3RvLmlzQ2xhc3MgPyBwcm90by5jb25maWcuY2xhc3NOYW1lIDogcHJvdG8uY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBrZXkgICAgID0gbnNBcnJheS5wb3AoKTtcclxuICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcclxuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBtZXRob2RzIGZyb20gb25lIG5hbWVzcGFjZSB0byBhbm90aGVyIG9uZVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIGFsaWFzZXNcclxuICAgICAqIE5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcclxuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcclxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXHJcbiAgICAgKiAgICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcclxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxyXG4gICAgICogICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXHJcbiAgICAgKiAgICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxyXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcclxuICAgICAqICAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcclxuICAgICAqICAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcclxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcclxuICAgICAqICAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXHJcbiAgICAgKiB9LCB0cnVlKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcclxuICAgICAgICBsZXQgZm5OYW1lO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm5OYW1lID0gbmFtZXNwYWNlW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgZGVmYXVsdHMgJiYgdHlwZW9mIGRlZmF1bHRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheXwqfSBvYmpcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fEFycmF5fCp9IHRoZSBjbG9uZWQgaW5wdXRcclxuICAgICAqL1xyXG4gICAgY2xvbmUob2JqLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpIHtcclxuICAgICAgICBsZXQgb3V0O1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoubWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIG9iaiBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZ25vcmVOZW9JbnN0YW5jZXMgPyBvYmogOiB0aGlzLmNsb25lTmVvSW5zdGFuY2Uob2JqKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0ID0ge307XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xyXG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XHJcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoaW5zdGFuY2UuY2xhc3NOYW1lLCBjb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xyXG4gICAgICpcclxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xyXG4gICAgICpcclxuICAgICAqIE5lby5jcmVhdGUoe1xyXG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcclxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXHJcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE5lby5jcmVhdGUoe1xyXG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQnV0dG9uJyxcclxuICAgICAqICAgICBpY29uQ2xzICA6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZXxudWxsfSBUaGUgbmV3IGNsYXNzIGluc3RhbmNlXHJcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGNscywgaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZCAhPT0gY2xhc3NOYW1lLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGFzc05hbWUgJiYgIWNvbmZpZy5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsYXNzIGNyZWF0ZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIGNsYXNzTmFtZSBvciBtb2R1bGUgcHJvcGVydHknLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgPyBjb25maWcuY2xhc3NOYW1lIDogY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcclxuICAgICAgICBpbnN0YW5jZS5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH0sXHJcblxyXG4gICAgZW1wdHlGbigpIHt9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnMoJ05lby5jb21wb25lbnQuQnV0dG9uJywgdHJ1ZSk7XHJcbiAgICAgKiAvLyA9PlxyXG4gICAgICogLy8gc2VsZi5OZW8gPSBzZWxmLk5lbyB8fCB7fTtcclxuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcclxuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b24gPSBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uIHx8IHt9O1xyXG4gICAgICogLy8gcmV0dXJuIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b247XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cclxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBzZWxmXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxyXG4gICAgICovXHJcbiAgICBucyhuYW1lcywgY3JlYXRlLCBzY29wZSkge1xyXG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcmV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xyXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcclxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcclxuICAgICAqIH0pO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIE5lby5udHlwZSh7XHJcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXHJcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxyXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBudHlwZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX1cclxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cclxuICAgICAqL1xyXG4gICAgbnR5cGUobnR5cGUsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBkZWZpbmVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBudHlwZSBwcm9wZXJ0eS4gJyArIGNvbmZpZy5udHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnR5cGUgPSBjb25maWcubnR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdGFydDogTmVvLmVtcHR5Rm5cclxufSwgTmVvKTtcclxuXHJcbi8qKlxyXG4gKiBMaXN0IG9mIGNsYXNzIHByb3BlcnRpZXMgd2hpY2ggYXJlIG5vdCBzdXBwb3NlZCB0byBnZXQgbWl4ZWQgaW50byBvdGhlciBjbGFzc2VzXHJcbiAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IGlnbm9yZU1peGluID0gW1xyXG4gICAgJ19uYW1lJyxcclxuICAgICdjbGFzc0NvbmZpZ0FwcGxpZWQnLFxyXG4gICAgJ2NsYXNzTmFtZScsXHJcbiAgICAnY29uc3RydWN0b3InLFxyXG4gICAgJ2lzQ2xhc3MnLFxyXG4gICAgJ21peGluJyxcclxuICAgICdudHlwZScsXHJcbiAgICAnb2JzZXJ2YWJsZScsXHJcbiAgICAncmVnaXN0ZXJUb0dsb2JhbE5zJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gISFjbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XHJcbiAgICAgICAgfSwgc2VsZik7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xyXG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cclxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm90b1trZXldICYmIHByb3RvW2tleV0uX2Zyb20pIHtcclxuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01peGluIHNldCBtdWx0aXBsZSB0aW1lcyBvciBhbHJlYWR5IGRlZmluZWQgb24gYSBCYXNlIENsYXNzJywgcHJvdG8uY2xhc3NOYW1lLCBtaXhpblByb3RvLmNsYXNzTmFtZSwga2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBwcm90by5jbGFzc05hbWUgKyAnOiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJyArXHJcbiAgICAgICAgICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgcHJvdG9ba2V5XS5fZnJvbSArICcpID0+ICcgK1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xyXG5cclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBtaXhpbnNcclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xyXG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXHJcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXHJcbiAgICAgICAgbWl4aW4sIG1peGluQ2xzLCBtaXhpblByb3RvO1xyXG5cclxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XHJcbiAgICAgICAgbWl4aW4gPSBtaXhpbnNbaV07XHJcblxyXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbi5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIG1peGluIGFuIHVuZGVmaW5lZCBjbGFzczogJyArIG1peGluICsgJywgJyArIGNscy5wcm90b3R5cGUuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluKTtcclxuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluUHJvdG8pLmZvckVhY2gobWl4aW5Qcm9wZXJ0eShjbHMucHJvdG90eXBlLCBtaXhpblByb3RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXM7IC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2VcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBwcm9wZXJ0eSBrZXkgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcclxuICAgIGxldCBkZXNjcmlwdG9yO1xyXG5cclxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcclxuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxyXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcclxuICogQHByaXZhdGVcclxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAqL1xyXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVHZXRTZXQocHJvdG8sIGtleSkge1xyXG4gICAgaWYgKGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XHJcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcclxuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcclxuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0gPSB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUdldCA9ICdiZWZvcmVHZXQnICsgTmVvLmNhcGl0YWxpemUoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBtZVtjb25maWdTeW1ib2xdLmhhc093blByb3BlcnR5KGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5ICAgID0gbWVbY29uZmlnU3ltYm9sXVtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc05ld0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVHZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVHZXRdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9rZXkgICAgICA9ICdfJyArIGtleSxcclxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBOZW8uY2FwaXRhbGl6ZShrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xyXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVbYmVmb3JlU2V0XSAmJiB0eXBlb2YgbWVbYmVmb3JlU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGV5IGRvbid0IHJldHVybiBhIHZhbHVlLCB0aGF0IG1lYW5zIG5vIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogd2UgY291bGQgY29tcGFyZSBvYmplY3RzICYgYXJyYXlzIGZvciBlcXVhbGl0eVxyXG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lW2FmdGVyU2V0XSAmJiB0eXBlb2YgbWVbYWZ0ZXJTZXRdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSk7XHJcbn1cclxuXHJcbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xyXG5cclxuTmVvLmFzc2lnbkRlZmF1bHRzKE5lby5jb25maWcsIERlZmF1bHRDb25maWcpO1xyXG5cclxuZXhwb3J0IHtOZW8gYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xyXG5cclxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXHJcbiAgICAgIGlzSW5zdGFuY2UgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcclxuICogQGNsYXNzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIEJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcclxuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkJhc2UnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgY2xhc3Mgc2hvcnRjdXQtbmFtZSB0byB1c2UgZm9yIGUuZy4gY3JlYXRpbmcgY2hpbGQgY29tcG9uZW50cyBpbnNpZGUgYSBKU09OLWZvcm1hdFxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2Jhc2UnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPW51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbnM6IG51bGxcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lcyB0aGUgc3RhdGljIGdldENvbmZpZygpIG9iamVjdFxyXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XHJcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcclxuXHJcbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xyXG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpIHx8IG1lLm1peGlucyAmJiBOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBtZS5taXhpbnMpKSB7XHJcbiAgICAgICAgICAgIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGlmIChtZS5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIG1lLmNvbnRyb2xsZXIucGFyc2VDb25maWcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZSwgJ2NvbmZpZ3NBcHBsaWVkJywge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWUucmVtb3RlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgYWxsIGNvbnN0cnVjdG9ycyBhcmUgZG9uZVxyXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpcyBkb25lXHJcbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29yZS5CYXNlI29uQ29uc3RydWN0ZWQgb25Db25zdHJ1Y3RlZH1cclxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxyXG4gICAgICovXHJcbiAgICBpbml0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG9sZFZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcclxuICAgICAqL1xyXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignU3VwcG9ydGVkIHZhbHVlcyBmb3IgJyArIG5hbWUgKyAnIGFyZTonLCB2YWx1ZXMuam9pbignLCAnKSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJZChpZCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgaWQgPSBJZEdlbmVyYXRvci5nZXRJZChtZS5udHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZS5pZCA9IGlkO1xyXG5cclxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UucmVnaXN0ZXIobWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghTmVvLmlkTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBOZW8uaWRNYXAgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTmVvLmlkTWFwW21lLmlkXSA9IG1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxyXG4gICAgICogYW5kIHJlbW92ZXMgYWxsIG9iamVjdCBlbnRyaWVzIGZyb20gdGhpcyBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1lKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIG1lW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgbWVba2V5XTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xyXG4gICAgICAgIGxldCBjZmcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcclxuICAgICAgICByZXR1cm4gKGtleSA/IGNmZ1trZXldIDogY2ZnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgYWxsIGNsYXNzIGNvbmZpZ3MgdG8gdGhpcyBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcclxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJvY2Vzc0NvbmZpZ3MoKSB7XHJcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XHJcblxyXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBpcyBpbnRlbmRlZCBmb3IgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZVxyXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgZ290IGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcclxuICAgICAgICAgICAgaWYgKCFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgbWVba2V5c1swXV0gPSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGRlbGV0ZSBjYWxsIGluc2lkZSB0aGUgY29uZmlnIGdldHRlciBhcyB3ZWxsIChOZW8ubWpzID0+IGF1dG9HZW5lcmF0ZUdldFNldCgpKVxyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBvbmUgZm9yIGNvbmZpZ3MsIHdoaWNoIGRvIG5vdCB1c2UgZ2V0dGVycyAobm8gdHJhaWxpbmcgdW5kZXJzY29yZSlcclxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XHJcblxyXG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXHJcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcclxuICAgICAqL1xyXG4gICAgaW5pdFJlbW90ZSgpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgcmVtb3RlICAgID0gbWUucmVtb3RlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZS5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIG9yaWdpbjtcclxuXHJcbiAgICAgICAgaWYgKCFtZS5zaW5nbGV0b24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW4uc2VuZE1lc3NhZ2Uod29ya2VyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgIDogJ3JlZ2lzdGVyUmVtb3RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kcyAgICAgOiBtZXRob2RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgICA6IGNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGN0b3IgPSBtZS5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lby5hcHBseUNsYXNzQ29uZmlnIGhhcyBub3QgYmVlbiBydW4gb24gJyArIG1lLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXByZXZlbnRPcmlnaW5hbENvbmZpZykge1xyXG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XHJcbiAgICAgKi9cclxuICAgIHNldCh2YWx1ZXM9e30pIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nOlxyXG4gICAgICAgIC8vIG1lW2NvbmZpZ1N5bWJvbF0gPSB2YWx1ZXM7XHJcbiAgICAgICAgLy8gd2Uga2VlcCB0aGUgT2JqZWN0IGluc3RhbmNlIChkZWZpbmVkIHZpYSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygpID0+IG5vbiBlbnVtZXJhYmxlKVxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcclxuXHJcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcclxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxyXG4gICAgICogYE5lby5jcmVhdGUoJ05lby5jb21wb25lbnQuQnV0dG9uJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmNvbXBvbmVudC5CdXR0b24gKG5lby1idXR0b24tMSldXCJgXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lICsgJyAoaWQ6JyArIHRoaXMuaWQgKyAnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cclxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcclxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxyXG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XHJcbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xyXG5cclxuQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCIvKipcclxuICogVGhpcyBjbGFzcyBnZXRzIHVzZWQgYnkgY29yZS5CYXNlLCBzbyBpdCBjYW4gbm90IGV4dGVuZCBpdC5cclxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgSWRHZW5lcmF0b3Ige1xyXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXHJcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5JZEdlbmVyYXRvcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ2lkLWdlbmVyYXRvcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYXNlPSduZW8tJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJhc2U6ICduZW8tJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG1lLmlkQ291bnRlciA9IHt9O1xyXG5cclxuICAgICAgICAvLyBhbGlhc1xyXG4gICAgICAgIE5lby5nZXRJZCA9IG1lLmdldElkLmJpbmQobWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxyXG5cclxuICAgIGluaXQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRJZChuYW1lKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XHJcblxyXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcclxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcclxuXHJcbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XHJcblxyXG4gICAgICAgIHJldHVybiBtZS5iYXNlICsgKG5hbWUgPT09ICduZW8nID8gJycgOiBuYW1lICsgJy0nKSArIGNvdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJZEdlbmVyYXRvcik7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIE5lby5jb3JlLkxvZ2dlclxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIExvZ2dlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Mb2dnZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Mb2dnZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG50eXBlOiAnbG9nZ2VyJyxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhpcyBjb25maWcgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgbG9nZ2luZ1xyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGVuYWJsZUxvZ3M6IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV2ZWw6ICdsb2cnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgLy8gYWxpYXNlc1xyXG4gICAgICAgIE5lby5hcHBseUZyb21OcyhOZW8sIHRoaXMsIHtcclxuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGluZm8gICAgOiAnaW5mbycsXHJcbiAgICAgICAgICAgIGxvZyAgICAgOiAnbG9nJyxcclxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXHJcbiAgICAgICAgICAgIHdhcm4gICAgOiAnd2FybidcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgZXJyb3IodmFsdWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGxvZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdsb2cnO1xyXG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqL1xyXG4gICAgaW5mbyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdpbmZvJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGxvZ0Vycm9yKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcclxuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIHdhcm4oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XHJcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgd3JpdGUoLi4uYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZVt0aGlzLmxldmVsXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKExvZ2dlcik7XHJcblxyXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLk9ic2VydmFibGUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1peGluOiB0cnVlXHJcbiAgICB9fVxyXG5cclxuICAgIGluaXRPYnNlcnZhYmxlKGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXHJcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxyXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIG1lLmxpc3RlbmVycyA9IGNvbmZpZy5saXN0ZW5lcnM7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xyXG5cclxuICAgICAgICBtZS5saXN0ZW5lcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKHByb3RvICYmIHByb3RvLmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcclxuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lciAgIDogbWUuYWRkTGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uICAgICAgICAgICAgOiBtZS5vbixcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcclxuICAgICAqL1xyXG4gICAgYWRkTGlzdGVuZXIobmFtZSwgb3B0cywgc2NvcGUsIGV2ZW50SWQsIGRhdGEsIG9yZGVyKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcclxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnc2NvcGUnKSkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIoa2V5LCB2YWx1ZSwgc2NvcGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG9wdHMuc2NvcGU7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcclxuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xyXG4gICAgICAgICAgICBldmVudElkID0gZXZlbnRJZCB8fCBvcHRzLmV2ZW50SWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFkZExpc3RlbmVyIGNhbGw6ICcgKyBuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50Q29uZmlnID0ge1xyXG4gICAgICAgICAgICBmbiAgICA6IGxpc3RlbmVyLFxyXG4gICAgICAgICAgICBzY29wZSA6IHNjb3BlLFxyXG4gICAgICAgICAgICBkYXRhICA6IGRhdGEsXHJcbiAgICAgICAgICAgIGlkICAgIDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZXhpc3RpbmcgPSBtZS5saXN0ZW5lcnMgJiYgbWUubGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nLmZvckVhY2goY2ZnID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOiAnICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnNwbGljZShvcmRlciwgMCwgZXZlbnRDb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqL1xyXG4gICAgZmlyZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxyXG4gICAgICAgICAgICBldmVudENvbmZpZywgZXZlbnRzLCBpLCBsZW47XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50cyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xyXG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZy5mbi5hcHBseShldmVudENvbmZpZy5zY29wZSB8fCBtZSwgZXZlbnRDb25maWcuZGF0YSA/IGFyZ3MuY29uY2F0KGV2ZW50Q29uZmlnLmRhdGEpIDogYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQpIHtcclxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lcnMgICA9IHRoaXMubGlzdGVuZXJzW25hbWVdLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2ggICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBpZHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIG9uKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsaWFzIGZvciByZW1vdmVMaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBldmVudElkXHJcbiAgICAgKi9cclxuICAgIHVuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhPYnNlcnZhYmxlKTtcclxuXHJcbmV4cG9ydCB7T2JzZXJ2YWJsZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcclxuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGRlY2FtZWxSZWdFeD0vKFthLXpdKShbQS1aXSkvZ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlY2FtZWxSZWdFeDogLyhbYS16XSkoW0EtWl0pL2dcclxuICAgIH19XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5VdGlsJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29yZS11dGlsJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnLFxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgc3lsZXMgb2JqZWN0IHdoaWNoIGNhbiB1c2UgY2FtZWxjYXNlIHN5bnRheCBpbnRvIGEgc3R5bGVzIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IFV0aWwuZGVjYW1lbChrZXkpICsgJzonICsgdmFsdWUgKyAnOyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNhcGl0YWxpemUoc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWwuaXNTdHJpbmcoc3RyaW5nKSAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxyXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtcyBhIHN0eWxlcyBzdHJpbmcgaW50byBhIHN0eWxlcyBvYmplY3QgdXNpbmcgY2FtZWxjYXNlIHN5bnRheFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3R5bGVzIHN0cmluZyB0byBwYXJzZVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTdHlsZU9iamVjdChzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJ0cztcclxuXHJcbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXHJcbiAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwuLi5cclxuXHJcbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgvOyg/PVteXFwpXSooPzpcXCh8JCkpL2cpLnJlZHVjZSgob2JqLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IGJ5IHRoZSBmaXJzdCBjb2xvbiBvbmx5XHJcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXHJcbiAgICAgICAgICAgIHBhcnRzID0gZWwuc3BsaXQoKC86KC4rKS8pKS5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUZsb2F0KHgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IG51bSA/IG51bSA6IHgudHJpbSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvLShbYS16XSkvZywgKHN0ciwgbGV0dGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvYmpbcGFydHNbMF1dID0gcGFydHNbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGVtcHR5IEFycmF5LCBPYmplY3Qgb3IgU3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpe1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYW55IGl0ZXJhYmxlIChzdHJpbmdzLCBudW1lcmljIGluZGljZXMgYW5kIGEgbGVuZ3RoIHByb3BlcnR5KSBpbnRvIGEgdHJ1ZSBhcnJheVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9aXRlcmFibGUubGVuZ3RoXSBlbmQgaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRvQXJyYXkoaXRlcmFibGUsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBsZXQgbGVuO1xyXG5cclxuICAgICAgICBpZiAoIWl0ZXJhYmxlIHx8ICEobGVuID0gaXRlcmFibGUubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XHJcblxyXG4vLyBhbGlhc2VzXHJcbk5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcclxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxyXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxyXG4gICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcclxuICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXHJcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxyXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxyXG4gICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxyXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcclxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXHJcbiAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcclxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxyXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXHJcbiAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXHJcbn0sIHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgQmFzZSAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XHJcbmltcG9ydCBMb2dnZXIgICAgICBmcm9tICcuL0xvZ2dlci5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSAgZnJvbSAnLi9PYnNlcnZhYmxlLm1qcyc7XHJcbmltcG9ydCBVdGlsICAgICAgICBmcm9tICcuL1V0aWwubWpzJztcclxuXHJcbmV4cG9ydCB7QmFzZSwgTG9nZ2VyLCBPYnNlcnZhYmxlLCBVdGlsfTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLnV0aWwuQXJyYXlcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgTmVvQXJyYXkgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQXJyYXknXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5BcnJheSdcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb3IgQXJyYXkgb2YgaXRlbXMgdG8gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGQoYXJyLCBpdGVtcykge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcclxuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSwgYnV0IG5vdCBpbiBhcnJheTJcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaWZmZXJlbmNlKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiAhYXJyYXkyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgaW5kZXggb2YgaXRlbSBpcyA+IC0xXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaGFzSXRlbShhcnIsIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gYXJyLmluY2x1ZGVzKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+IGFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIG9mIGFycmF5MSBhcmUgcHJlc2VudCBpbiBhcnJheSAyXHJcbiAgICAgKiBTdXBwb3J0cyBBcnJheXMgY29udGFpbmluZyBPYmplY3RzLCBub3QgQXJyYXlzIGNvbnRhaW5pbmcgQXJyYXlzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VxdWFsKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XHJcbiAgICAgICAgbGV0IGkgICAgPSAwLFxyXG4gICAgICAgICAgICBsZW4gID0gYXJyYXkxLmxlbmd0aCxcclxuICAgICAgICAgICAgbGVuMiA9IGFycmF5Mi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhc09iamVjdCwgaiwgdmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBhcnJheTFbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgaGFzT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBqICAgICAgICAgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgbGVuMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChhcnJheTJbal0pICYmIE5lby51dGlsLk9iamVjdC5pc0VxdWFsKHZhbHVlLCBhcnJheTJbal0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc09iamVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc09iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWFycmF5Mi5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlcyBhbiBpdGVtIGluc2lkZSBhcnIgZnJvbSBmcm9tSW5kZXggdG8gdG9JbmRleFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbW92ZShhcnIsIGZyb21JbmRleCwgdG9JbmRleCkge1xyXG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHRvSW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyci5zcGxpY2UodG9JbmRleCwgMCwgYXJyLnNwbGljZShmcm9tSW5kZXgsIDEpWzBdKTtcclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGZyb20gYW4gYXJyYXkuIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlbW92ZShhcnIsIGl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IGluZGV4O1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyAgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG9nZ2xlKGFyciwgaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0l0ZW0oYXJyLCBpdGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShhcnIsIGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGFyciwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB1bmlvbihhcnJheTEsIGFycmF5Mikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXSxcclxuICAgICAgICAgICAgbWVyZ2UgID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLFxyXG4gICAgICAgICAgICBsZW4gICAgPSBtZXJnZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFzc29jICA9IHt9LFxyXG4gICAgICAgICAgICBpdGVtO1xyXG5cclxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICAgICAgaXRlbSA9IG1lcmdlW2xlbl07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFzc29jW2l0ZW1dKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGFzc29jW2l0ZW1dID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHVuc2hpZnQoYXJyLCBpdGVtcykge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcclxuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIGFyci51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb0FycmF5KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5lb0FycmF5OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBOZW8udXRpbC5TdHlsZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqL1xyXG5jbGFzcyBTdHlsZSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5TdHlsZSdcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlN0eWxlJ1xyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZGVsdGEgb2JqZWN0LCBjb250YWluaW5nIHRoZSBzdHlsZXMgb2YgbmV3U3R5bGUgd2hpY2ggYXJlIG5vdCBpbmNsdWRlZCBvciBkaWZmZXJlbnQgdGhhbiBpbiBvbGRTdHlsZVxyXG4gICAgICogU3R5bGVzIGluY2x1ZGVkIGluIG9sZFN0eWxlIGJ1dCBtaXNzaW5nIGluIG5ld1N0eWxlIHdpbGwgZ2V0IGEgdmFsdWUgb2YgbnVsbFxyXG4gICAgICogc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvc3R5bGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmV3U3R5bGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb2xkU3R5bGVcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0eWxlIGRlbHRhXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb21wYXJlU3R5bGVzKG5ld1N0eWxlLCBvbGRTdHlsZSkge1xyXG4gICAgICAgIGxldCBzdHlsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhuZXdTdHlsZSkpIHtcclxuICAgICAgICAgICAgbmV3U3R5bGUgPSBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0KG5ld1N0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcob2xkU3R5bGUpKSB7XHJcbiAgICAgICAgICAgIG9sZFN0eWxlID0gTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdChvbGRTdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW5ld1N0eWxlICYmICFvbGRTdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKCFvbGRTdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmVvLmNsb25lKG5ld1N0eWxlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFuZXdTdHlsZSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5ld1N0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9sZFN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlKSB8fCBvbGRTdHlsZVtzdHlsZV0gIT09IG5ld1N0eWxlW3N0eWxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBuZXdTdHlsZVtzdHlsZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2xkU3R5bGUpLmZvckVhY2goZnVuY3Rpb24oc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbmV3U3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0eWxlcykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTdHlsZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLnV0aWwuVk5vZGVcclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxyXG4gKi9cclxuY2xhc3MgVk5vZGUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVk5vZGUnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WTm9kZSdcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggdm5vZGUgY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxyXG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXHJcbiAgICAgKiAgICAge09iamVjdH0gdm5vZGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpbmRDaGlsZFZub2RlKHZub2RlLCBvcHRzLCBpbmRleCwgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcclxuICAgICAgICBvcHRzICA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6IG9wdHN9O1xyXG5cclxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXHJcbiAgICAgICAgICAgIGF0dHJNYXRjaCAgPSB0cnVlLFxyXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXHJcbiAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSB0cnVlLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZub2RlLmNoaWxkTm9kZXMgJiYgdm5vZGUuY2hpbGROb2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XHJcblxyXG4gICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKTtcclxuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbYXR0cktleSwgYXR0clZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoYXR0cktleSkgJiYgdm5vZGVba2V5XVthdHRyS2V5XSA9PT0gYXR0clZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygdm5vZGVba2V5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGVpdGhlciBzZWFyY2ggdGhlIHZub2RlIGFycmF5IGZvciBhbGwga2V5cyBvciBjb21wYXJlIGlmIHRoZSBhcnJheXMgYXJlIGVxdWFsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kQ2hpbGRWbm9kZTogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2bm9kZVtrZXldW3N0eWxlS2V5XSA9PT0gc3R5bGVWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxyXG4gICAgICAgICAgICAgICAgdm5vZGUgICAgIDogdm5vZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVk5vZGUuZmluZENoaWxkVm5vZGUodm5vZGUuY2hpbGROb2Rlc1tpXSwgb3B0cywgaSwgdm5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBzdWJDaGlsZC5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGUgICAgIDogc3ViQ2hpbGQudm5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBpZFxyXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBjaGlsZCB2bm9kZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmaW5kQ2hpbGRWbm9kZUJ5SWQodm5vZGUsIGlkKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGlsZE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZmluZENoaWxkVm5vZGVCeUlkKGNoaWxkTm9kZSwgaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXHJcbiAgICAgKiBAcGFyYW0gdm5vZGVcclxuICAgICAqIEBwYXJhbSBbY2hpbGRJZHM9W11dXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHM9W10pIHtcclxuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlICYmIHZub2RlLmNoaWxkTm9kZXMgfHwgW107XHJcblxyXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNoaWxkSWRzID0gVk5vZGUuZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2VzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld0NoaWxkVm5vZGVcclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVwbGFjZUNoaWxkVm5vZGUodm5vZGUsIGlkLCBuZXdDaGlsZFZub2RlKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxyXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcclxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGlsZE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1tpXSA9IG5ld0NoaWxkVm5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFZOb2RlLnJlcGxhY2VDaGlsZFZub2RlKGNoaWxkTm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWTm9kZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWTm9kZTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcclxuaW1wb3J0IFZOb2RlICAgICAgICAgICAgICAgICAgZnJvbSAnLi9WTm9kZS5tanMnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgVk5vZGVVdGlsfSBmcm9tICcuLi91dGlsL1ZOb2RlLm1qcyc7XHJcblxyXG4vKipcclxuICogVGhlIGNlbnRyYWwgY2xhc3MgZm9yIHRoZSBWRG9tIHdvcmtlciB0byBjcmVhdGUgdm5vZGVzICYgZGVsdGEgdXBkYXRlcy5cclxuICogQGNsYXNzIE5lby52ZG9tLkhlbHBlclxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBzaW5nbGV0b25cclxuICovXHJcbmNsYXNzIEhlbHBlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udmRvbS5IZWxwZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8udmRvbS5IZWxwZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3Zkb20taGVscGVyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICd2ZG9tLWhlbHBlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbJ2NyZWF0ZScsICd1cGRhdGUnXX1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbW90ZToge1xyXG4gICAgICAgICAgICBhcHA6IFsnY3JlYXRlJywgJ3VwZGF0ZSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZXR1cm5DaGlsZE5vZGVPdXRlckh0bWw9ZmFsc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm5DaGlsZE5vZGVPdXRlckh0bWw6IGZhbHNlLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaW5nbGV0b246IHRydWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVm9pZCBhdHRyaWJ1dGVzIGluc2lkZSBodG1sIHRhZ3NcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdm9pZEF0dHJpYnV0ZXNcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZvaWRBdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICdjaGVja2VkJyxcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVm9pZCBodG1sIHRhZ3NcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdm9pZEVsZW1lbnRzXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2b2lkRWxlbWVudHM6IFtcclxuICAgICAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICAgICAnYmFzZScsXHJcbiAgICAgICAgICAgICdicicsXHJcbiAgICAgICAgICAgICdjb2wnLFxyXG4gICAgICAgICAgICAnY29tbWFuZCcsXHJcbiAgICAgICAgICAgICdlbWJlZCcsXHJcbiAgICAgICAgICAgICdocicsXHJcbiAgICAgICAgICAgICdpbWcnLFxyXG4gICAgICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgICAgICAna2V5Z2VuJyxcclxuICAgICAgICAgICAgJ2xpbmsnLFxyXG4gICAgICAgICAgICAnbWV0YScsXHJcbiAgICAgICAgICAgICdwYXJhbScsXHJcbiAgICAgICAgICAgICdzb3VyY2UnLFxyXG4gICAgICAgICAgICAndHJhY2snLFxyXG4gICAgICAgICAgICAnd2JyJ1xyXG4gICAgICAgIF1cclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTmVvLnZkb20uVk5vZGUgdHJlZSBmb3IgdGhlIGdpdmVuIHZkb20gdGVtcGxhdGUuXHJcbiAgICAgKiBUaGUgdG9wIGxldmVsIHZub2RlIGNvbnRhaW5zIHRoZSBvdXRlckhUTUwgYXMgYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMudmRvbVxyXG4gICAgICogQHJldHVybnMge05lby52ZG9tLlZOb2RlfVxyXG4gICAgICovXHJcbiAgICBjcmVhdGUob3B0cykge1xyXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGF1dG9Nb3VudCAgID0gb3B0cy5hdXRvTW91bnQgPT09IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmVudElkICAgID0gb3B0cy5wYXJlbnRJZCxcclxuICAgICAgICAgICAgcGFyZW50SW5kZXggPSBvcHRzLnBhcmVudEluZGV4LFxyXG4gICAgICAgICAgICBub2RlO1xyXG5cclxuICAgICAgICBkZWxldGUgb3B0cy5hdXRvTW91bnQ7XHJcbiAgICAgICAgZGVsZXRlIG9wdHMucGFyZW50SWQ7XHJcbiAgICAgICAgZGVsZXRlIG9wdHMucGFyZW50SW5kZXg7XHJcblxyXG4gICAgICAgIG5vZGUgICAgICAgICAgID0gbWUucGFyc2VIZWxwZXIob3B0cyk7XHJcbiAgICAgICAgbm9kZS5vdXRlckhUTUwgPSBtZS5jcmVhdGVTdHJpbmdGcm9tVm5vZGUobm9kZSk7XHJcblxyXG4gICAgICAgIGlmIChhdXRvTW91bnQpIHtcclxuICAgICAgICAgICAgbm9kZS5hdXRvTW91bnQgICA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50SWQgICAgPSBwYXJlbnRJZDtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnRJbmRleCA9IHBhcmVudEluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTmVvLnZkb20uVk5vZGUgdHJlZSBmb3IgdGhlIGdpdmVuIHZkb20gdGVtcGxhdGUgYW5kIGNvbXBhcmVzIHRoZSBuZXcgdm5vZGUgd2l0aCB0aGUgY3VycmVudCBvbmVcclxuICAgICAqIHRvIGNhbGN1bGF0ZSB0aGUgdmRvbSBkZWx0YXMuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMudmRvbVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMudm5vZGVcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShvcHRzKSB7XHJcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5vZGUgICA9IG1lLnBhcnNlSGVscGVyKG9wdHMudmRvbSksXHJcbiAgICAgICAgICAgIGRlbHRhcyA9IG1lLmNyZWF0ZURlbHRhcyh7XHJcbiAgICAgICAgICAgICAgICBuZXdWbm9kZTogbm9kZSxcclxuICAgICAgICAgICAgICAgIG9sZFZub2RlOiBvcHRzLnZub2RlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZWx0YXMgICAgOiBkZWx0YXMsXHJcbiAgICAgICAgICAgIHVwZGF0ZVZkb206IHRydWUsXHJcbiAgICAgICAgICAgIHZub2RlICAgICA6IG5vZGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTdHJpbmdGcm9tVm5vZGUodm5vZGUpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHZub2RlLnZ0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Jvb3QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLmNyZWF0ZVN0cmluZ0Zyb21Wbm9kZSh2bm9kZS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdm5vZGUuaW5uZXJIVE1MID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyh2bm9kZS5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICBjYXNlICd2bm9kZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuY3JlYXRlT3BlblRhZyh2bm9kZSkgKyBtZS5jcmVhdGVUYWdDb250ZW50KHZub2RlKSArIG1lLmNyZWF0ZUNsb3NlVGFnKHZub2RlKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU9wZW5UYWcodm5vZGUpIHtcclxuICAgICAgICBsZXQgc3RyaW5nICAgICA9ICc8JyArIHZub2RlLm5vZGVOYW1lLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdm5vZGUuYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgY2xzICAgICAgICA9IHZub2RlLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgc3R5bGU7XHJcblxyXG4gICAgICAgIGlmICh2bm9kZS5zdHlsZSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IE5lby5jcmVhdGVTdHlsZXModm5vZGUuc3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9ICcgc3R5bGU9XCInICsgc3R5bGUgKyAnXCInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xzKSB7XHJcbiAgICAgICAgICAgIGlmIChOZW8uaXNBcnJheShjbHMpKSB7XHJcbiAgICAgICAgICAgICAgICBjbHMgPSBjbHMuam9pbignICcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xzICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9ICcgY2xhc3M9XCInICsgY2xzICsgJ1wiJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZub2RlLmlkKSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSAnIGlkPVwiJyArIHZub2RlLmlkICsgJ1wiJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52b2lkQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICd0cnVlJykgeyAvLyB2bm9kZSBhdHRyaWJ1dGUgdmFsdWVzIGdldCBjb252ZXJ0ZWQgaW50byBzdHJpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9ICgnICcgKyBrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSAhPT0gJ3JlbW92ZURvbScpIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSAoJyAnICsga2V5ICsgJz1cIicgKyB2YWx1ZSArICdcIicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJpbmcgKyAnPic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVRhZ0NvbnRlbnQodm5vZGUpIHtcclxuICAgICAgICBpZiAodm5vZGUuaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bm9kZS5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyaW5nID0gJycsXHJcbiAgICAgICAgICAgIGxlbiAgICA9IHZub2RlLmNoaWxkTm9kZXMgPyB2bm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGkgICAgICA9IDAsXHJcbiAgICAgICAgICAgIGNoaWxkTm9kZSwgb3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IHZub2RlLmNoaWxkTm9kZXNbaV07XHJcblxyXG4gICAgICAgICAgICBvdXRlckhUTUwgPSB0aGlzLmNyZWF0ZVN0cmluZ0Zyb21Wbm9kZShjaGlsZE5vZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pbm5lckhUTUwgIT09IG91dGVySFRNTCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmV0dXJuQ2hpbGROb2RlT3V0ZXJIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLm91dGVySFRNTCA9IG91dGVySFRNTDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RyaW5nICs9IG91dGVySFRNTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUNsb3NlVGFnKHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudm9pZEVsZW1lbnRzLmluZGV4T2Yodm5vZGUubm9kZU5hbWUpID4gLTEgPyAnJyA6ICc8LycgKyB2bm9kZS5ub2RlTmFtZSArICc+JztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgICogQHJldHVybnMge09iamVjdHxOZW8udmRvbS5WTm9kZXxudWxsfVxyXG4gICAgICovXHJcbiAgICBwYXJzZUhlbHBlcihvcHRzKSB7XHJcbiAgICAgICAgaWYgKG9wdHMucmVtb3ZlRG9tID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRzLnZ0eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgICAgaWYgKCFvcHRzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRzLmlkID0gTmVvLmdldElkKCd2dGV4dCcpOyAvLyBhZGRpbmcgYW4gaWQgdG8gYmUgYWJsZSB0byBmaW5kIHZ0eXBlPSd0ZXh0JyBpdGVtcyBpbnNpZGUgdGhlIHZub2RlIHRyZWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0cy5pbm5lckhUTUwgPSBgPCEtLSAke29wdHMuaWR9IC0tPiR7b3B0cy5odG1sIHx8ICcnfTwhLS0gL25lby12dGV4dCAtLT5gO1xyXG4gICAgICAgICAgICBkZWxldGUgb3B0cy5odG1sO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcclxuICAgICAgICAgICAgbm9kZSA9IHthdHRyaWJ1dGVzOiB7fSwgY2hpbGROb2RlczogW10sIHN0eWxlOiB7fX0sXHJcbiAgICAgICAgICAgIHBvdGVudGlhbE5vZGU7XHJcblxyXG4gICAgICAgIGlmICghb3B0cy50YWcpIHtcclxuICAgICAgICAgICAgb3B0cy50YWcgPSAnZGl2JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaGFzVW5pdCwgbmV3VmFsdWUsIHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYga2V5ICE9PSAnZmxhZycpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdub2RlTmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZS50b1N0cmluZygpOyAvLyBzdXBwb3J0IGZvciBudW1iZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkcmVuJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGlsZE5vZGVzJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTmVvLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucmVtb3ZlRG9tICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0ucmVtb3ZlRG9tOyAvLyBjb3VsZCBiZSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE5vZGUgPSBtZS5wYXJzZUhlbHBlcihpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvdGVudGlhbE5vZGUpIHsgLy8gZG9uJ3QgYWRkIG51bGwgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnB1c2gocG90ZW50aWFsTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IFt2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIShOZW8uaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYXhIZWlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21heFdpZHRoJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5IZWlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbldpZHRoJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1VuaXQgPSB2YWx1ZSAhPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbHVlICsgKGhhc1VuaXQgPyAnJyA6ICdweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IG5vZGUuc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlID0gT2JqZWN0LmFzc2lnbihzdHlsZSwgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlICsgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVk5vZGUobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWcuZGVsdGFzXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLmluZGV4XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm5ld1Zub2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm5ld1Zub2RlUm9vdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vbGRWbm9kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vbGRWbm9kZVJvb3RcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcucGFyZW50SWRcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gZGVsdGFzXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZURlbHRhcyhjb25maWcpIHtcclxuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICAgPSBjb25maWcuZGVsdGFzIHx8IFtdLFxyXG4gICAgICAgICAgICBpbmRleCAgICAgICAgID0gY29uZmlnLmluZGV4LFxyXG4gICAgICAgICAgICBuZXdWbm9kZSAgICAgID0gY29uZmlnLm5ld1Zub2RlLFxyXG4gICAgICAgICAgICBuZXdWbm9kZVJvb3QgID0gY29uZmlnLm5ld1Zub2RlUm9vdCB8fCBuZXdWbm9kZSxcclxuICAgICAgICAgICAgb2xkVm5vZGUgICAgICA9IGNvbmZpZy5vbGRWbm9kZSxcclxuICAgICAgICAgICAgb2xkVm5vZGVSb290ICA9IGNvbmZpZy5vbGRWbm9kZVJvb3QgfHwgb2xkVm5vZGUsXHJcbiAgICAgICAgICAgIHBhcmVudElkICAgICAgPSBjb25maWcucGFyZW50SWQsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMsIGRlbHRhLCB2YWx1ZSwgaSwgaW5kZXhEZWx0YSwga2V5cywgbGVuLCBtb3ZlZE5vZGUsIG1vdmVkT2xkTm9kZSwgc3R5bGVzLCBhZGQsIHJlbW92ZSwgcmV0dXJuVmFsdWUsIHRtcCwgd3JhcHBlZE5vZGU7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGVEZWx0YXMnLCBuZXdWbm9kZSAmJiBuZXdWbm9kZS5pZCwgb2xkVm5vZGUgJiYgb2xkVm5vZGUuaWQsIG5ld1Zub2RlLCBvbGRWbm9kZSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdWbm9kZSAmJiAhb2xkVm5vZGUpIHsgLy8gbmV3IG5vZGUgYXQgdG9wIGxldmVsIG9yIGF0IHRoZSBlbmQgb2YgYSBjaGlsZCBhcnJheVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5zZXJ0Tm9kZScsIG5ld1Zub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ2luc2VydE5vZGUnLFxyXG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiBuZXdWbm9kZS5pZCxcclxuICAgICAgICAgICAgICAgIGluZGV4ICAgIDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvdXRlckhUTUw6IG1lLmNyZWF0ZVN0cmluZ0Zyb21Wbm9kZShuZXdWbm9kZSksXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA6IHBhcmVudElkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld1Zub2RlICYmIG9sZFZub2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3AgbGV2ZWwgcmVtb3ZlZCBub2RlJywgb2xkVm5vZGUuaWQsIG9sZFZub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnLFxyXG4gICAgICAgICAgICAgICAgaWQgICAgOiBvbGRWbm9kZS5pZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobmV3Vm5vZGUgJiYgb2xkVm5vZGUgJiYgbmV3Vm5vZGUuaWQgIT09IG9sZFZub2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlZE5vZGUgICAgPSBtZS5maW5kVm5vZGUobmV3Vm5vZGVSb290LCBvbGRWbm9kZS5pZCwgbmV3Vm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbW92ZWRPbGROb2RlID0gbWUuZmluZFZub2RlKG9sZFZub2RlUm9vdCwgbmV3Vm5vZGUuaWQsIG9sZFZub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdmVkTm9kZScsIG1vdmVkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdmVkT2xkTm9kZScsIG1vdmVkT2xkTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlZE5vZGUgJiYgIW1vdmVkT2xkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXBsYWNlIG5vZGUnLCBvbGRWbm9kZS5pZCwgJygnK25ld1Zub2RlLmlkKycpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVtb3ZlTm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogb2xkVm5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uICAgOiAnaW5zZXJ0Tm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgIDogbmV3Vm5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgIDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGVySFRNTDogbWUuY3JlYXRlU3RyaW5nRnJvbVZub2RlKG5ld1Zub2RlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgOiBwYXJlbnRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlbHRhOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbW92ZWROb2RlICYmIG1vdmVkT2xkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWbm9kZS5pZCA9PT0gbW92ZWRPbGROb2RlLnZub2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGEgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZUJ5SWQob2xkVm5vZGUsIG5ld1Zub2RlLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2bm9kZSByZXBsYWNlZCBhIHBhcmVudCB2bm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZS5nLjogdmRvbS5jblsxXSA9IHZkb20uY25bMV0uY25bMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAncmVwbGFjZUNoaWxkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSWQgIDogb2xkVm5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSWQgICAgOiBuZXdWbm9kZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZub2RlIGdvdCBtb3ZlZCBpbnRvIGEgZGlmZmVyZW50IGhpZ2hlciBsZXZlbCBicmFuY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBpdHMgcGFyZW50IGdvdCByZW1vdmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlLmcuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmRvbS5jblsxXSA9IHZkb20uY25bMl0uY25bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZG9tLmNuLnNwbGljZSgyLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZWRPbGROb2RlRGV0YWlscyA9IFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZShvbGRWbm9kZVJvb3QsIG1vdmVkT2xkTm9kZS52bm9kZS5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGVEZXRhaWxzICAgICA9IFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZShvbGRWbm9kZVJvb3QsIG9sZFZub2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlbHRhID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZWRPbGROb2RlRGV0YWlscy5wYXJlbnROb2RlLmlkID09PSBvbGRWbm9kZURldGFpbHMucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb3RlbnRpYWwgbW92ZSBub2RlJywgaW5kZXgsIG1vdmVkT2xkTm9kZURldGFpbHMuaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Vm5vZGVEZXRhaWxzID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG5ld1Zub2RlUm9vdCwgbmV3Vm5vZGUuaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IGluZGV4ICsgMTsgLy8gKzEgc2luY2UgdGhlIGN1cnJlbnQgaW5kZXggd2lsbCBhbHJlYWR5IGdldCByZW1vdmVkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Zub2RlRGV0YWlscy5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSAgID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IG9sZFZub2RlRGV0YWlscy5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gbW92ZWRPbGROb2RlRGV0YWlscy5pbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0bXBbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZShuZXdWbm9kZURldGFpbHMucGFyZW50Tm9kZSwgdG1wW2ldLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXggKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1vdmVkT2xkTm9kZURldGFpbHMuaW5kZXgsIHRhcmdldEluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWRPbGROb2RlRGV0YWlscy5wYXJlbnROb2RlLmNoaWxkTm9kZXMuc3BsaWNlKG1vdmVkT2xkTm9kZURldGFpbHMuaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgbW92ZSBhIG5vZGUgaW4gY2FzZSBpdHMgcHJldmlvdXMgc2liYmxpbmcgbm9kZXMgd2lsbCBnZXQgcmVtb3ZlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZE9sZE5vZGVEZXRhaWxzLmluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtb3ZlTm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogbW92ZWRPbGROb2RlLnZub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICA6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobW92ZWRPbGROb2RlRGV0YWlscyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICA6IG9sZFZub2RlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlRGVsdGFzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyAgICAgIDogZGVsdGFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Vm5vZGUgICAgOiBuZXdWbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlUm9vdDogbmV3Vm5vZGVSb290LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGUgICAgOiBtb3ZlZE9sZE5vZGUudm5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWbm9kZVJvb3Q6IG9sZFZub2RlUm9vdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkICAgIDogcGFyZW50SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YTogaW5kZXhEZWx0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkIG5vZGUnLCBvbGRWbm9kZS5pZCwgJygnK25ld1Zub2RlLmlkKycpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogb2xkVm5vZGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW1vdmVkT2xkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBub2RlIGluc2lkZSBvZiBhIGNoaWxkIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25ldyBub2RlJywgaW5kZXgsIHBhcmVudElkLCBuZXdWbm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZWROb2RlID0gbW92ZWROb2RlICYmIFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZUJ5SWQobmV3Vm5vZGUsIG9sZFZub2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBwZWROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuIGV4aXN0aW5nIHZub2RlIGdvdCB3cmFwcGVkIGludG8gYSBuZXcgdm5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPT4gd2UgbmVlZCB0byByZW1vdmUgdGhlIG9sZCBvbmUsIHNpbmNlIGl0IHdpbGwgZ2V0IHJlY3JlYXRlZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdmVkTm9kZSByZW1vdmVOb2RlJywgbW92ZWROb2RlLnZub2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBtb3ZlZE5vZGUudm5vZGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ2luc2VydE5vZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICA6IG5ld1Zub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICA6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRlckhUTUw6IG1lLmNyZWF0ZVN0cmluZ0Zyb21Wbm9kZShuZXdWbm9kZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkIDogcGFyZW50SWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YTogd3JhcHBlZE5vZGUgPyAwIDogLTFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGEgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdm5vZGUgZ290IG1vdmVkIGluc2lkZSB0aGUgdm5vZGUgdHJlZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Vm5vZGVEZXRhaWxzID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG5ld1Zub2RlUm9vdCwgbmV3Vm5vZGUuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Vm5vZGVEZXRhaWxzLnBhcmVudE5vZGUuaWQgPT09IG1vdmVkTm9kZS5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Zub2RlRGV0YWlscy5pbmRleCwgbW92ZWROb2RlLmluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWbm9kZURldGFpbHMuaW5kZXggPiBtb3ZlZE5vZGUuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IG5lZWRzIHRlc3RpbmcgPT4gaW5kZXggZ2FwcyA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGEgPSBuZXdWbm9kZURldGFpbHMuaW5kZXggLSBtb3ZlZE5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnbW92ZU5vZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogbW92ZWROb2RlLnZub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgIDogbW92ZWROb2RlLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbW92ZWROb2RlLnBhcmVudE5vZGUuaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlRGVsdGFzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzICAgICAgOiBkZWx0YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlICAgIDogbW92ZWROb2RlLnZub2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWbm9kZVJvb3Q6IG5ld1Zub2RlUm9vdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGUgICAgOiBvbGRWbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGVSb290OiBvbGRWbm9kZVJvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkICAgIDogbW92ZWROb2RlLnBhcmVudE5vZGUuaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1Zub2RlICYmIG9sZFZub2RlICYmIG5ld1Zub2RlLmlkID09PSBvbGRWbm9kZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Zub2RlLnZ0eXBlID09PSAndGV4dCcgJiYgbmV3Vm5vZGUuaW5uZXJIVE1MICE9PSBvbGRWbm9kZS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAndXBkYXRlVnRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogbmV3Vm5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUobmV3Vm5vZGVSb290LCBuZXdWbm9kZS5pZCkucGFyZW50Tm9kZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IG5ld1Zub2RlLmlubmVySFRNTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhuZXdWbm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZFZub2RlKS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1Zub2RlLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2gocHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2F0dHJpYnV0ZXMnKSB7IC8vIGZpbmQgcmVtb3ZlZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRWbm9kZVtwcm9wXSkuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1Zub2RlW3Byb3BdLmhhc093blByb3BlcnR5KGF0dHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlW3Byb3BdW2F0dHJdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3Vm5vZGVbcHJvcF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShvbGRWbm9kZS5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkgJiYgb2xkVm5vZGUuYXR0cmlidXRlc1trZXldID09PSB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgTmVvLmlzRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGVtcHR5IGFycmF5cyAmIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWbm9kZS5hdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTm9kZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgICAgICAgICAgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAgICAgICAgPSBNYXRoLm1heCh2YWx1ZS5sZW5ndGgsIG9sZFZub2RlLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1lLmNyZWF0ZURlbHRhcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgICAgICA6IGRlbHRhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgICAgIDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlICAgIDogdmFsdWVbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWbm9kZVJvb3Q6IG5ld1Zub2RlUm9vdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZub2RlICAgIDogb2xkVm5vZGUuY2hpbGROb2Rlc1tpICsgaW5kZXhEZWx0YV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWbm9kZVJvb3Q6IG9sZFZub2RlUm9vdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkICAgIDogbmV3Vm5vZGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgJiYgcmV0dXJuVmFsdWUuaW5kZXhEZWx0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YSArPSByZXR1cm5WYWx1ZS5pbmRleERlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9kZU5hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG9sZFZub2RlW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhW3Byb3BdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcyA9IE5lby51dGlsLlN0eWxlLmNvbXBhcmVTdHlsZXModmFsdWUsIG9sZFZub2RlLnN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhLnN0eWxlID0gc3R5bGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZub2RlLmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQgICAgPSBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKHZhbHVlLCBvbGRWbm9kZS5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKG9sZFZub2RlLmNsYXNzTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgICA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmxlbmd0aCA+IDAgfHwgcmVtb3ZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEuY2xzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBhZGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRlbHRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YS5pZCA9IG5ld1Zub2RlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZWx0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gdm5vZGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxyXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gcGFyZW50Tm9kZVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XHJcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcclxuICAgICAqICAgICB7TmVvLnZkb20uVk5vZGV9IHZub2RlXHJcbiAgICAgKi9cclxuICAgIGZpbmRWbm9kZSh2bm9kZSwgaWQsIHBhcmVudE5vZGUsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFpbmRleCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSBudWxsLFxyXG4gICAgICAgICAgICBjaGlsZHJlbiwgY2hpbGRWYWx1ZSwgaSwgbGVuO1xyXG5cclxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxyXG4gICAgICAgICAgICAgICAgdm5vZGUgICAgIDogdm5vZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZub2RlLnZ0eXBlICE9PSAndGV4dCcpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZE5vZGVzO1xyXG4gICAgICAgICAgICBpICAgICAgICA9IDA7XHJcbiAgICAgICAgICAgIGxlbiAgICAgID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdGhpcy5maW5kVm5vZGUoY2hpbGRyZW5baV0sIGlkLCB2bm9kZSwgaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkVmFsdWUgJiYgY2hpbGRWYWx1ZS52bm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNoaWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXR1cm5WYWx1ZSAmJiByZXR1cm5WYWx1ZS5wYXJlbnRJZCA9PT0gJ3Jvb3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlLmluZGV4ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVscGVyKTtcclxuXHJcbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSGVscGVyKTtcclxuXHJcbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiLyoqXHJcbiAqIFdyYXBwZXIgY2xhc3MgZm9yIHZub2RlIG9iamVjdHMuIFNlZSB0aGUgdHV0b3JpYWxzIGZvciBmdXJ0aGVyIGluZm9zLlxyXG4gKiBAY2xhc3MgTmVvLnZkb20uVk5vZGVcclxuICovXHJcbmNsYXNzIFZOb2RlIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGF0dHJpYnV0ZXM9W11cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNoaWxkTm9kZXM9W11cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNsYXNzTmFtZT1bXVxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPU5lby5nZXRJZCgndm5vZGUnKVxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlubmVySFRNTFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG5vZGVOYW1lXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGVcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2dHlwZT0ndm5vZGUnXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBjb25maWcuYXR0cmlidXRlcyB8fCBbXSxcclxuICAgICAgICAgICAgY2hpbGROb2RlczogY29uZmlnLmNoaWxkTm9kZXMgfHwgW10sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA6IGNvbmZpZy5jbGFzc05hbWUgIHx8IFtdLFxyXG4gICAgICAgICAgICBpZCAgICAgICAgOiBjb25maWcuaWQgICAgICAgICB8fCBOZW8uZ2V0SWQoJ3Zub2RlJyksXHJcbiAgICAgICAgICAgIGlubmVySFRNTCA6IGNvbmZpZy5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgIG5vZGVOYW1lICA6IGNvbmZpZy5ub2RlTmFtZSxcclxuICAgICAgICAgICAgc3R5bGUgICAgIDogY29uZmlnLnN0eWxlLFxyXG4gICAgICAgICAgICB2dHlwZSAgICAgOiBjb25maWcudnR5cGUgICAgICB8fCAndm5vZGUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8udmRvbScsIHRydWUpO1xyXG5uc1snVk5vZGUnXSA9IFZOb2RlO1xyXG5cclxuZXhwb3J0IHtWTm9kZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29yZUJhc2V9IGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xyXG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xyXG5pbXBvcnQgUmVtb3RlTWV0aG9kQWNjZXNzICAgIGZyb20gJy4vbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBhYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXJcclxuICogQGNsYXNzIE5lby53b3JrZXIuQmFzZVxyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcclxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5Xb3JrZXInXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLldvcmtlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nd29ya2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICd3b3JrZXInLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9W09ic2VydmFibGUsIFJlbW90ZU1ldGhvZEFjY2Vzc11cclxuICAgICAgICAgKi9cclxuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3b3JrZXJJZD1udWxsXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB3b3JrZXJJZDogbnVsbFxyXG4gICAgfX1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUucHJvbWlzZXMgPSB7fTtcclxuXHJcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWUub25NZXNzYWdlLmJpbmQobWUpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIE5lby53b3JrZXJJZCAgICAgID0gbWUud29ya2VySWQ7XHJcbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIgPSBtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxyXG4gICAgICovXHJcbiAgICBvbk1lc3NhZ2UoZSkge1xyXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgZGF0YSAgICA9IGUuZGF0YSxcclxuICAgICAgICAgICAgYWN0aW9uICA9IGRhdGEuYWN0aW9uLFxyXG4gICAgICAgICAgICByZXBseUlkID0gZGF0YS5yZXBseUlkLFxyXG4gICAgICAgICAgICBwcm9taXNlO1xyXG5cclxuICAgICAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdyZXBseScpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXNbJ29uJyArIE5lby5jYXBpdGFsaXplKGFjdGlvbildKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZGF0YSwgZXJyLCBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChkYXRhLmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBlcnIubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcm9taXNlc1tyZXBseUlkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xyXG4gICAgICovXHJcbiAgICBvblBpbmcobXNnKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKG1zZywge1xyXG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqL1xyXG4gICAgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpIHtcclxuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKE5lby5jb25maWcsIG1zZy5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXHJcbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cclxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXHJcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcclxuXHJcbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICByZWplY3QgOiByZWplY3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSwgbWFpbiBvciB2ZG9tIChleGNsdWRpbmcgdGhlIGN1cnJlbnQgd29ya2VyKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cclxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxyXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cclxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xyXG4gICAgICAgIG9wdHMuZGVzdGluYXRpb24gPSBkZXN0O1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xyXG5cclxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XHJcblxyXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcclxuXHJcbi8qKlxyXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cclxuICogWW91IGNhbiBhZGQgb3B0aW9uYWwgcGFyYW1zIGFzIG5lZWRlZC5cclxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxyXG4gKi9cclxuY2xhc3MgTWVzc2FnZSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aW9uXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9yaWdpbj1OZW8ud29ya2VySWRcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgY29uZmlnLmRlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uIHx8ICdtYWluJztcclxuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcclxuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8ud29ya2VyJywgdHJ1ZSk7XHJcbm5zWydNZXNzYWdlJ10gPSBNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHtNZXNzYWdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBOZW8gICAgICAgZnJvbSAnLi4vTmVvLm1qcyc7XHJcbmltcG9ydCBCYXNlICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XHJcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSAnLi4vY29yZS9fZXhwb3J0Lm1qcyc7XHJcbmltcG9ydCBIZWxwZXIgICAgZnJvbSAnLi4vdmRvbS9IZWxwZXIubWpzJztcclxuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XHJcbmltcG9ydCBTdHlsZSAgICAgZnJvbSAnLi4vdXRpbC9TdHlsZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBWZG9tIHdvcmtlciBjb252ZXJ0cyB2ZG9tIHRlbXBsYXRlcyBpbnRvIHZub2RlcywgYXMgd2VsbCBhcyBjcmVhdGluZyBkZWx0YS11cGRhdGVzLlxyXG4gKiBTZWUgdGhlIHR1dG9yaWFscyBmb3IgZnVydGhlciBpbmZvcy5cclxuICogQGNsYXNzIE5lby53b3JrZXIuVkRvbVxyXG4gKiBAZXh0ZW5kcyBOZW8ud29ya2VyLkJhc2VcclxuICogQHNpbmdsZXRvblxyXG4gKi9cclxuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLlZEb20nXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLlZEb20nLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3Zkb20td29ya2VyJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICd2ZG9tLXdvcmtlcicsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdvcmtlcklkPSd2ZG9tJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd29ya2VySWQ6ICd2ZG9tJ1xyXG4gICAgfX1cclxufVxyXG5cclxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVkRvbSk7XHJcblxyXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFZEb20pO1xyXG5cclxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzXHJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcclxuICovXHJcbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3MnXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3MnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLXJlbW90ZS1tZXRob2QtYWNjZXNzJ1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbnR5cGU6ICdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcycsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWl4aW46IHRydWVcclxuICAgIH19XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxyXG4gICAgICogQHBhcmFtIG1ldGhvZFxyXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6IFByb21pc2U8YW55Pn1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcclxuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgb3JpZ2luID0gcmVtb3RlLm9yaWdpbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEsIGJ1ZmZlcikge1xyXG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICA6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIHJlbW90ZUNsYXNzTmFtZTogcmVtb3RlLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXHJcbiAgICAgKi9cclxuICAgIG9uUmVnaXN0ZXJSZW1vdGUocmVtb3RlKSB7XHJcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XHJcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcmVtb3RlLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMgICA9IHJlbW90ZS5tZXRob2RzLFxyXG4gICAgICAgICAgICAgICAgcGtnICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGtnW21ldGhvZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPSBtZS5nZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nKSB7XHJcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdyZW1vdGVyZWdpc3RlcmVkJywgcmVtb3RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXHJcbiAgICAgKi9cclxuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xyXG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxyXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXHJcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xyXG5cclxuICAgICAgICBpZiAoIXBrZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XHJcblxyXG4gICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgLi4ubXNnLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgb3V0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBtZS5yZWplY3QobXNnLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHJlamVjdChtc2csIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIHtcclxuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcclxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcclxuICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVzb2x2ZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXHJcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xyXG5cclxuZXhwb3J0IHtSZW1vdGVNZXRob2RBY2Nlc3MgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==