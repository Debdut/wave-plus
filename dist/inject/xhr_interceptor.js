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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/inject/xhr_interceptor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/xhook/dist/xhook.js":
/*!******************************************!*\
  !*** ./node_modules/xhook/dist/xhook.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// XHook - v1.4.9 - https://github.com/jpillora/xhook\n// Jaime Pillora <dev@jpillora.com> - MIT Copyright 2018\n(function(undefined) {\nvar AFTER, BEFORE, COMMON_EVENTS, EventEmitter, FETCH, FIRE, FormData, NativeFetch, NativeFormData, NativeXMLHttp, OFF, ON, READY_STATE, UPLOAD_EVENTS, WINDOW, XHookFetchRequest, XHookFormData, XHookHttpRequest, XMLHTTP, convertHeaders, depricatedProp, document, fakeEvent, mergeObjects, msie, nullify, proxyEvents, slice, useragent, xhook, _base,\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nWINDOW = null;\n\nif (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {\n  WINDOW = self;\n} else if (typeof global !== 'undefined') {\n  WINDOW = global;\n} else {\n  WINDOW = window;\n}\n\ndocument = WINDOW.document;\n\nBEFORE = 'before';\n\nAFTER = 'after';\n\nREADY_STATE = 'readyState';\n\nON = 'addEventListener';\n\nOFF = 'removeEventListener';\n\nFIRE = 'dispatchEvent';\n\nXMLHTTP = 'XMLHttpRequest';\n\nFETCH = 'fetch';\n\nFormData = 'FormData';\n\nUPLOAD_EVENTS = ['load', 'loadend', 'loadstart'];\n\nCOMMON_EVENTS = ['progress', 'abort', 'error', 'timeout'];\n\nuseragent = typeof navigator !== 'undefined' && navigator['useragent'] ? navigator.userAgent : '';\n\nmsie = parseInt((/msie (\\d+)/.exec(useragent.toLowerCase()) || [])[1]);\n\nif (isNaN(msie)) {\n  msie = parseInt((/trident\\/.*; rv:(\\d+)/.exec(useragent.toLowerCase()) || [])[1]);\n}\n\n(_base = Array.prototype).indexOf || (_base.indexOf = function(item) {\n  var i, x, _i, _len;\n  for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {\n    x = this[i];\n    if (x === item) {\n      return i;\n    }\n  }\n  return -1;\n});\n\nslice = function(o, n) {\n  return Array.prototype.slice.call(o, n);\n};\n\ndepricatedProp = function(p) {\n  return p === \"returnValue\" || p === \"totalSize\" || p === \"position\";\n};\n\nmergeObjects = function(src, dst) {\n  var k, v;\n  for (k in src) {\n    v = src[k];\n    if (depricatedProp(k)) {\n      continue;\n    }\n    try {\n      dst[k] = src[k];\n    } catch (_error) {}\n  }\n  return dst;\n};\n\nnullify = function(res) {\n  if (res === void 0) {\n    return null;\n  }\n  return res;\n};\n\nproxyEvents = function(events, src, dst) {\n  var event, p, _i, _len;\n  p = function(event) {\n    return function(e) {\n      var clone, k, val;\n      clone = {};\n      for (k in e) {\n        if (depricatedProp(k)) {\n          continue;\n        }\n        val = e[k];\n        clone[k] = val === src ? dst : val;\n      }\n      return dst[FIRE](event, clone);\n    };\n  };\n  for (_i = 0, _len = events.length; _i < _len; _i++) {\n    event = events[_i];\n    if (dst._has(event)) {\n      src[\"on\" + event] = p(event);\n    }\n  }\n};\n\nfakeEvent = function(type) {\n  var msieEventObject;\n  if (document && (document.createEventObject != null)) {\n    msieEventObject = document.createEventObject();\n    msieEventObject.type = type;\n    return msieEventObject;\n  } else {\n    try {\n      return new Event(type);\n    } catch (_error) {\n      return {\n        type: type\n      };\n    }\n  }\n};\n\nEventEmitter = function(nodeStyle) {\n  var emitter, events, listeners;\n  events = {};\n  listeners = function(event) {\n    return events[event] || [];\n  };\n  emitter = {};\n  emitter[ON] = function(event, callback, i) {\n    events[event] = listeners(event);\n    if (events[event].indexOf(callback) >= 0) {\n      return;\n    }\n    i = i === undefined ? events[event].length : i;\n    events[event].splice(i, 0, callback);\n  };\n  emitter[OFF] = function(event, callback) {\n    var i;\n    if (event === undefined) {\n      events = {};\n      return;\n    }\n    if (callback === undefined) {\n      events[event] = [];\n    }\n    i = listeners(event).indexOf(callback);\n    if (i === -1) {\n      return;\n    }\n    listeners(event).splice(i, 1);\n  };\n  emitter[FIRE] = function() {\n    var args, event, i, legacylistener, listener, _i, _len, _ref;\n    args = slice(arguments);\n    event = args.shift();\n    if (!nodeStyle) {\n      args[0] = mergeObjects(args[0], fakeEvent(event));\n    }\n    legacylistener = emitter[\"on\" + event];\n    if (legacylistener) {\n      legacylistener.apply(emitter, args);\n    }\n    _ref = listeners(event).concat(listeners(\"*\"));\n    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {\n      listener = _ref[i];\n      listener.apply(emitter, args);\n    }\n  };\n  emitter._has = function(event) {\n    return !!(events[event] || emitter[\"on\" + event]);\n  };\n  if (nodeStyle) {\n    emitter.listeners = function(event) {\n      return slice(listeners(event));\n    };\n    emitter.on = emitter[ON];\n    emitter.off = emitter[OFF];\n    emitter.fire = emitter[FIRE];\n    emitter.once = function(e, fn) {\n      var fire;\n      fire = function() {\n        emitter.off(e, fire);\n        return fn.apply(null, arguments);\n      };\n      return emitter.on(e, fire);\n    };\n    emitter.destroy = function() {\n      return events = {};\n    };\n  }\n  return emitter;\n};\n\nxhook = EventEmitter(true);\n\nxhook.EventEmitter = EventEmitter;\n\nxhook[BEFORE] = function(handler, i) {\n  if (handler.length < 1 || handler.length > 2) {\n    throw \"invalid hook\";\n  }\n  return xhook[ON](BEFORE, handler, i);\n};\n\nxhook[AFTER] = function(handler, i) {\n  if (handler.length < 2 || handler.length > 3) {\n    throw \"invalid hook\";\n  }\n  return xhook[ON](AFTER, handler, i);\n};\n\nxhook.enable = function() {\n  WINDOW[XMLHTTP] = XHookHttpRequest;\n  if (typeof XHookFetchRequest === \"function\") {\n    WINDOW[FETCH] = XHookFetchRequest;\n  }\n  if (NativeFormData) {\n    WINDOW[FormData] = XHookFormData;\n  }\n};\n\nxhook.disable = function() {\n  WINDOW[XMLHTTP] = xhook[XMLHTTP];\n  WINDOW[FETCH] = xhook[FETCH];\n  if (NativeFormData) {\n    WINDOW[FormData] = NativeFormData;\n  }\n};\n\nconvertHeaders = xhook.headers = function(h, dest) {\n  var header, headers, k, name, v, value, _i, _len, _ref;\n  if (dest == null) {\n    dest = {};\n  }\n  switch (typeof h) {\n    case \"object\":\n      headers = [];\n      for (k in h) {\n        v = h[k];\n        name = k.toLowerCase();\n        headers.push(\"\" + name + \":\\t\" + v);\n      }\n      return headers.join('\\n') + '\\n';\n    case \"string\":\n      headers = h.split('\\n');\n      for (_i = 0, _len = headers.length; _i < _len; _i++) {\n        header = headers[_i];\n        if (/([^:]+):\\s*(.+)/.test(header)) {\n          name = (_ref = RegExp.$1) != null ? _ref.toLowerCase() : void 0;\n          value = RegExp.$2;\n          if (dest[name] == null) {\n            dest[name] = value;\n          }\n        }\n      }\n      return dest;\n  }\n};\n\nNativeFormData = WINDOW[FormData];\n\nXHookFormData = function(form) {\n  var entries;\n  this.fd = form ? new NativeFormData(form) : new NativeFormData();\n  this.form = form;\n  entries = [];\n  Object.defineProperty(this, 'entries', {\n    get: function() {\n      var fentries;\n      fentries = !form ? [] : slice(form.querySelectorAll(\"input,select\")).filter(function(e) {\n        var _ref;\n        return ((_ref = e.type) !== 'checkbox' && _ref !== 'radio') || e.checked;\n      }).map(function(e) {\n        return [e.name, e.type === \"file\" ? e.files : e.value];\n      });\n      return fentries.concat(entries);\n    }\n  });\n  this.append = (function(_this) {\n    return function() {\n      var args;\n      args = slice(arguments);\n      entries.push(args);\n      return _this.fd.append.apply(_this.fd, args);\n    };\n  })(this);\n};\n\nif (NativeFormData) {\n  xhook[FormData] = NativeFormData;\n  WINDOW[FormData] = XHookFormData;\n}\n\nNativeXMLHttp = WINDOW[XMLHTTP];\n\nxhook[XMLHTTP] = NativeXMLHttp;\n\nXHookHttpRequest = WINDOW[XMLHTTP] = function() {\n  var ABORTED, currentState, emitFinal, emitReadyState, event, facade, hasError, hasErrorHandler, readBody, readHead, request, response, setReadyState, status, transiting, writeBody, writeHead, xhr, _i, _len, _ref;\n  ABORTED = -1;\n  xhr = new xhook[XMLHTTP]();\n  request = {};\n  status = null;\n  hasError = void 0;\n  transiting = void 0;\n  response = void 0;\n  readHead = function() {\n    var key, name, val, _ref;\n    response.status = status || xhr.status;\n    if (!(status === ABORTED && msie < 10)) {\n      response.statusText = xhr.statusText;\n    }\n    if (status !== ABORTED) {\n      _ref = convertHeaders(xhr.getAllResponseHeaders());\n      for (key in _ref) {\n        val = _ref[key];\n        if (!response.headers[key]) {\n          name = key.toLowerCase();\n          response.headers[name] = val;\n        }\n      }\n    }\n  };\n  readBody = function() {\n    if (!xhr.responseType || xhr.responseType === \"text\") {\n      response.text = xhr.responseText;\n      response.data = xhr.responseText;\n      try {\n        response.xml = xhr.responseXML;\n      } catch (_error) {\n\n      }\n    } else if (xhr.responseType === \"document\") {\n      response.xml = xhr.responseXML;\n      response.data = xhr.responseXML;\n    } else {\n      response.data = xhr.response;\n    }\n    if (\"responseURL\" in xhr) {\n      response.finalUrl = xhr.responseURL;\n    }\n  };\n  writeHead = function() {\n    facade.status = response.status;\n    facade.statusText = response.statusText;\n  };\n  writeBody = function() {\n    if ('text' in response) {\n      facade.responseText = response.text;\n    }\n    if ('xml' in response) {\n      facade.responseXML = response.xml;\n    }\n    if ('data' in response) {\n      facade.response = response.data;\n    }\n    if ('finalUrl' in response) {\n      facade.responseURL = response.finalUrl;\n    }\n  };\n  emitReadyState = function(n) {\n    while (n > currentState && currentState < 4) {\n      facade[READY_STATE] = ++currentState;\n      if (currentState === 1) {\n        facade[FIRE](\"loadstart\", {});\n      }\n      if (currentState === 2) {\n        writeHead();\n      }\n      if (currentState === 4) {\n        writeHead();\n        writeBody();\n      }\n      facade[FIRE](\"readystatechange\", {});\n      if (currentState === 4) {\n        if (request.async === false) {\n          emitFinal();\n        } else {\n          setTimeout(emitFinal, 0);\n        }\n      }\n    }\n  };\n  emitFinal = function() {\n    if (!hasError) {\n      facade[FIRE](\"load\", {});\n    }\n    facade[FIRE](\"loadend\", {});\n    if (hasError) {\n      facade[READY_STATE] = 0;\n    }\n  };\n  currentState = 0;\n  setReadyState = function(n) {\n    var hooks, process;\n    if (n !== 4) {\n      emitReadyState(n);\n      return;\n    }\n    hooks = xhook.listeners(AFTER);\n    process = function() {\n      var hook;\n      if (!hooks.length) {\n        return emitReadyState(4);\n      }\n      hook = hooks.shift();\n      if (hook.length === 2) {\n        hook(request, response);\n        return process();\n      } else if (hook.length === 3 && request.async) {\n        return hook(request, response, process);\n      } else {\n        return process();\n      }\n    };\n    process();\n  };\n  facade = request.xhr = EventEmitter();\n  xhr.onreadystatechange = function(event) {\n    try {\n      if (xhr[READY_STATE] === 2) {\n        readHead();\n      }\n    } catch (_error) {}\n    if (xhr[READY_STATE] === 4) {\n      transiting = false;\n      readHead();\n      readBody();\n    }\n    setReadyState(xhr[READY_STATE]);\n  };\n  hasErrorHandler = function() {\n    hasError = true;\n  };\n  facade[ON]('error', hasErrorHandler);\n  facade[ON]('timeout', hasErrorHandler);\n  facade[ON]('abort', hasErrorHandler);\n  facade[ON]('progress', function() {\n    if (currentState < 3) {\n      setReadyState(3);\n    } else {\n      facade[FIRE](\"readystatechange\", {});\n    }\n  });\n  if ('withCredentials' in xhr || xhook.addWithCredentials) {\n    facade.withCredentials = false;\n  }\n  facade.status = 0;\n  _ref = COMMON_EVENTS.concat(UPLOAD_EVENTS);\n  for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n    event = _ref[_i];\n    facade[\"on\" + event] = null;\n  }\n  facade.open = function(method, url, async, user, pass) {\n    currentState = 0;\n    hasError = false;\n    transiting = false;\n    request.headers = {};\n    request.headerNames = {};\n    request.status = 0;\n    response = {};\n    response.headers = {};\n    request.method = method;\n    request.url = url;\n    request.async = async !== false;\n    request.user = user;\n    request.pass = pass;\n    setReadyState(1);\n  };\n  facade.send = function(body) {\n    var hooks, k, modk, process, send, _j, _len1, _ref1;\n    _ref1 = ['type', 'timeout', 'withCredentials'];\n    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n      k = _ref1[_j];\n      modk = k === \"type\" ? \"responseType\" : k;\n      if (modk in facade) {\n        request[k] = facade[modk];\n      }\n    }\n    request.body = body;\n    send = function() {\n      var header, value, _k, _len2, _ref2, _ref3;\n      proxyEvents(COMMON_EVENTS, xhr, facade);\n      if (facade.upload) {\n        proxyEvents(COMMON_EVENTS.concat(UPLOAD_EVENTS), xhr.upload, facade.upload);\n      }\n      transiting = true;\n      xhr.open(request.method, request.url, request.async, request.user, request.pass);\n      _ref2 = ['type', 'timeout', 'withCredentials'];\n      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {\n        k = _ref2[_k];\n        modk = k === \"type\" ? \"responseType\" : k;\n        if (k in request) {\n          xhr[modk] = request[k];\n        }\n      }\n      _ref3 = request.headers;\n      for (header in _ref3) {\n        value = _ref3[header];\n        if (header) {\n          xhr.setRequestHeader(header, value);\n        }\n      }\n      if (request.body instanceof XHookFormData) {\n        request.body = request.body.fd;\n      }\n      xhr.send(request.body);\n    };\n    hooks = xhook.listeners(BEFORE);\n    process = function() {\n      var done, hook;\n      if (!hooks.length) {\n        return send();\n      }\n      done = function(userResponse) {\n        if (typeof userResponse === 'object' && (typeof userResponse.status === 'number' || typeof response.status === 'number')) {\n          mergeObjects(userResponse, response);\n          if (__indexOf.call(userResponse, 'data') < 0) {\n            userResponse.data = userResponse.response || userResponse.text;\n          }\n          setReadyState(4);\n          return;\n        }\n        process();\n      };\n      done.head = function(userResponse) {\n        mergeObjects(userResponse, response);\n        return setReadyState(2);\n      };\n      done.progress = function(userResponse) {\n        mergeObjects(userResponse, response);\n        return setReadyState(3);\n      };\n      hook = hooks.shift();\n      if (hook.length === 1) {\n        return done(hook(request));\n      } else if (hook.length === 2 && request.async) {\n        return hook(request, done);\n      } else {\n        return done();\n      }\n    };\n    process();\n  };\n  facade.abort = function() {\n    status = ABORTED;\n    if (transiting) {\n      xhr.abort();\n    } else {\n      facade[FIRE]('abort', {});\n    }\n  };\n  facade.setRequestHeader = function(header, value) {\n    var lName, name;\n    lName = header != null ? header.toLowerCase() : void 0;\n    name = request.headerNames[lName] = request.headerNames[lName] || header;\n    if (request.headers[name]) {\n      value = request.headers[name] + ', ' + value;\n    }\n    request.headers[name] = value;\n  };\n  facade.getResponseHeader = function(header) {\n    var name;\n    name = header != null ? header.toLowerCase() : void 0;\n    return nullify(response.headers[name]);\n  };\n  facade.getAllResponseHeaders = function() {\n    return nullify(convertHeaders(response.headers));\n  };\n  if (xhr.overrideMimeType) {\n    facade.overrideMimeType = function() {\n      return xhr.overrideMimeType.apply(xhr, arguments);\n    };\n  }\n  if (xhr.upload) {\n    facade.upload = request.upload = EventEmitter();\n  }\n  facade.UNSENT = 0;\n  facade.OPENED = 1;\n  facade.HEADERS_RECEIVED = 2;\n  facade.LOADING = 3;\n  facade.DONE = 4;\n  facade.response = '';\n  facade.responseText = '';\n  facade.responseXML = null;\n  facade.readyState = 0;\n  facade.statusText = '';\n  return facade;\n};\n\nif (typeof WINDOW[FETCH] === \"function\") {\n  NativeFetch = WINDOW[FETCH];\n  xhook[FETCH] = NativeFetch;\n  XHookFetchRequest = WINDOW[FETCH] = function(url, options) {\n    var afterHooks, beforeHooks, request;\n    if (options == null) {\n      options = {\n        headers: {}\n      };\n    }\n    options.url = url;\n    request = null;\n    beforeHooks = xhook.listeners(BEFORE);\n    afterHooks = xhook.listeners(AFTER);\n    return new Promise(function(resolve, reject) {\n      var done, getRequest, processAfter, processBefore, send;\n      getRequest = function() {\n        if (options.body instanceof XHookFormData) {\n          options.body = options.body.fd;\n        }\n        if (options.headers) {\n          options.headers = new Headers(options.headers);\n        }\n        if (!request) {\n          request = new Request(options.url, options);\n        }\n        return mergeObjects(options, request);\n      };\n      processAfter = function(response) {\n        var hook;\n        if (!afterHooks.length) {\n          return resolve(response);\n        }\n        hook = afterHooks.shift();\n        if (hook.length === 2) {\n          hook(getRequest(), response);\n          return processAfter(response);\n        } else if (hook.length === 3) {\n          return hook(getRequest(), response, processAfter);\n        } else {\n          return processAfter(response);\n        }\n      };\n      done = function(userResponse) {\n        var response;\n        if (userResponse !== void 0) {\n          response = new Response(userResponse.body || userResponse.text, userResponse);\n          resolve(response);\n          processAfter(response);\n          return;\n        }\n        processBefore();\n      };\n      processBefore = function() {\n        var hook;\n        if (!beforeHooks.length) {\n          send();\n          return;\n        }\n        hook = beforeHooks.shift();\n        if (hook.length === 1) {\n          return done(hook(options));\n        } else if (hook.length === 2) {\n          return hook(getRequest(), done);\n        }\n      };\n      send = function() {\n        return NativeFetch(getRequest()).then(function(response) {\n          return processAfter(response);\n        })[\"catch\"](function(err) {\n          processAfter(err);\n          return reject(err);\n        });\n      };\n      processBefore();\n    });\n  };\n}\n\nXHookHttpRequest.UNSENT = 0;\n\nXHookHttpRequest.OPENED = 1;\n\nXHookHttpRequest.HEADERS_RECEIVED = 2;\n\nXHookHttpRequest.LOADING = 3;\n\nXHookHttpRequest.DONE = 4;\n\nif (true) {\n  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n    return xhook;\n  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {}\n\n}.call(this));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/xhook/dist/xhook.js?");

/***/ }),

/***/ "./src/inject/xhr_interceptor/api.js":
/*!*******************************************!*\
  !*** ./src/inject/xhr_interceptor/api.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MATCHES = [{\n  type: 'invoiceAdd',\n  re: new RegExp('/invoices/$')\n}];\nvar auth = 'wave-plus-z728-hs62';\n\nvar WaveAPI =\n/*#__PURE__*/\nfunction () {\n  function WaveAPI(request, response) {\n    _classCallCheck(this, WaveAPI);\n\n    this.request = request;\n    this.response = response;\n\n    if (this.classify()) {\n      this.action();\n    }\n  }\n\n  _createClass(WaveAPI, [{\n    key: \"classify\",\n    value: function classify() {\n      for (var i = 0; i < MATCHES.length; i++) {\n        var match = MATCHES[i];\n\n        if (match.re.test(this.request.url)) {\n          this.type = match.type;\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"action\",\n    value: function action() {\n      this[this.type]();\n    }\n  }, {\n    key: \"invoiceAdd\",\n    value: function invoiceAdd() {\n      console.log('[Invoice Added]');\n      var invoice = JSON.parse(this.response.data); // Message Passing for non CORS\n      // window.postMessage({auth, type: 'invoiceAdd', invoice}, '*')\n    }\n  }]);\n\n  return WaveAPI;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveAPI);\n\n//# sourceURL=webpack:///./src/inject/xhr_interceptor/api.js?");

/***/ }),

/***/ "./src/inject/xhr_interceptor/index.js":
/*!*********************************************!*\
  !*** ./src/inject/xhr_interceptor/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xhook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xhook */ \"./node_modules/xhook/dist/xhook.js\");\n/* harmony import */ var xhook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xhook__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/inject/xhr_interceptor/api.js\");\n\n // Injected Message\n\nconsole.log('[XHR Interceptor Script Injected]');\nvar API_URL = \"https://api.waveapps.com\"; // List of URL segments to be matched\n\nvar URLRegularExpressions = ['/invoices/$'];\nxhook__WEBPACK_IMPORTED_MODULE_0___default.a.after(function (request, response) {\n  if (isMatchedURL(request.url)) {\n    var api = new _api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](request, response);\n  }\n}); // Tests if url parameter matches any of urls in URLRegularExpressions\n\nfunction isMatchedURL(url) {\n  if (!url.includes(API_URL)) {\n    return false;\n  }\n\n  for (var index = 0; index < URLRegularExpressions.length; index++) {\n    var re = new RegExp(URLRegularExpressions[index]);\n\n    if (re.test(url)) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack:///./src/inject/xhr_interceptor/index.js?");

/***/ })

/******/ });