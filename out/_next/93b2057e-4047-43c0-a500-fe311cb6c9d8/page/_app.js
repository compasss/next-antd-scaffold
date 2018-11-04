module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([4],{289:function(e,n,t){e.exports=t(290)},290:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(20),o=t.n(r),a=t(0),i=t.n(a),c=t(291),u=t.n(c),f=t(116),l=t(298),s=t.n(l),p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e){return"@@redux-saga/"+e},v=y("TASK"),h=y("HELPER"),b=y("MATCH"),g=y("CANCEL_PROMISE"),m=y("SAGA_ACTION"),w=y("SELF_CANCELLATION"),O=function(e){return function(){return e}},x=O(!0),_=function(){},j=function(e){return e};function E(e,n,t){if(!n(e))throw L("error","uncaught at check",t),new Error(t)}var k=Object.prototype.hasOwnProperty;function S(e,n){return P.notUndef(e)&&k.call(e,n)}var P={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},string:function(e){return"string"==typeof e},array:Array.isArray,object:function(e){return e&&!P.array(e)&&"object"===(void 0===e?"undefined":d(e))},promise:function(e){return e&&P.func(e.then)},iterator:function(e){return e&&P.func(e.next)&&P.func(e.throw)},iterable:function(e){return e&&P.func(Symbol)?P.func(e[Symbol.iterator]):P.array(e)},task:function(e){return e&&e[v]},observable:function(e){return e&&P.func(e.subscribe)},buffer:function(e){return e&&P.func(e.isEmpty)&&P.func(e.take)&&P.func(e.put)},pattern:function(e){return e&&(P.string(e)||"symbol"===(void 0===e?"undefined":d(e))||P.func(e)||P.array(e))},channel:function(e){return e&&P.func(e.take)&&P.func(e.close)},helper:function(e){return e&&e[h]},stringableFunc:function(e){return P.func(e)&&S(e,"toString")}},C={assign:function(e,n){for(var t in n)S(n,t)&&(e[t]=n[t])}};function A(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}var T={from:function(e){var n=Array(e.length);for(var t in e)S(e,t)&&(n[t]=e[t]);return n}};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=p({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t});return n.promise=t,n}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}(),I=function(e){throw e},D=function(e){return{value:e,done:!0}};function M(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],o={name:t,next:e,throw:n,return:D};return r&&(o[h]=!0),"undefined"!=typeof Symbol&&(o[Symbol.iterator]=function(){return o}),o}function L(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+n+"\n"+(t&&t.stack||t)):console[e](n,t)}function U(e,n){return function(){return e.apply(void 0,arguments)}}var H=function(e,n){return e+" has been deprecated in favor of "+n+", please update your code"},F=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")},G=function(e,n){return(e?e+".":"")+"setContext(props): argument "+n+" is not a plain object"},X=function(e){return function(n){return e(Object.defineProperty(n,m,{value:!0}))}},z="Channel's Buffer overflow!",K=1,B=3,W=4,q={isEmpty:x,put:_,take:_};function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments[1],t=new Array(e),r=0,o=0,a=0,i=function(n){t[o]=n,o=(o+1)%e,r++},c=function(){if(0!=r){var n=t[a];return t[a]=null,r--,a=(a+1)%e,n}},u=function(){for(var e=[];r;)e.push(c());return e};return{isEmpty:function(){return 0==r},put:function(c){if(r<e)i(c);else{var f=void 0;switch(n){case K:throw new Error(z);case B:t[o]=c,a=o=(o+1)%e;break;case W:f=2*e,t=u(),r=t.length,o=t.length,a=0,t.length=f,e=f,i(c)}}},take:c,flush:u}}var V={none:function(){return q},fixed:function(e){return J(e,K)},dropping:function(e){return J(e,2)},sliding:function(e){return J(e,B)},expanding:function(e){return J(e,W)}},Y=[],Q=0;function Z(e){try{ee(),e()}finally{ne()}}function $(e){Y.push(e),Q||(ee(),te())}function ee(){Q++}function ne(){Q--}function te(){ne();for(var e=void 0;!Q&&void 0!==(e=Y.shift());)Z(e)}var re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},oe={type:"@@redux-saga/CHANNEL_END"},ae=function(e){return e&&"@@redux-saga/CHANNEL_END"===e.type};var ie="invalid buffer passed to channel factory function",ce="Saga was provided with an undefined action";function ue(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V.none(),t=arguments[2];arguments.length>2&&E(t,P.func,"Invalid match function passed to eventChannel");var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.fixed(),n=!1,t=[];function r(){if(n&&t.length)throw F("Cannot have a closed channel with pending takers");if(t.length&&!e.isEmpty())throw F("Cannot have pending takers with non empty buffer")}return E(e,P.buffer,ie),{take:function(o){r(),E(o,P.func,"channel.take's callback must be a function"),n&&e.isEmpty()?o(oe):e.isEmpty()?(t.push(o),o.cancel=function(){return A(t,o)}):o(e.take())},put:function(o){if(r(),E(o,P.notUndef,ce),!n){if(!t.length)return e.put(o);for(var a=0;a<t.length;a++){var i=t[a];if(!i[b]||i[b](o))return t.splice(a,1),i(o)}}},flush:function(t){r(),E(t,P.func,"channel.flush' callback must be a function"),n&&e.isEmpty()?t(oe):t(e.flush())},close:function(){if(r(),!n&&(n=!0,t.length)){var e=t;t=[];for(var o=0,a=e.length;o<a;o++)e[o](oe)}},get __takers__(){return t},get __closed__(){return n}}}(n),o=function(){r.__closed__||(a&&a(),r.close())},a=e(function(e){ae(e)?o():t&&!t(e)||r.put(e)});if(r.__closed__&&a(),!P.func(a))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:o}}var fe=y("IO"),le="TAKE",se="PUT",pe="ALL",de="RACE",ye="CALL",ve="CPS",he="FORK",be="JOIN",ge="CANCEL",me="SELECT",we="ACTION_CHANNEL",Oe="CANCELLED",xe="FLUSH",_e="GET_CONTEXT",je="SET_CONTEXT",Ee=function(e,n){var t;return(t={})[fe]=!0,t[e]=n,t};function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&E(arguments[0],P.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),P.pattern(e))return Ee(le,{pattern:e});if(P.channel(e))return Ee(le,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}ke.maybe=function(){var e=ke.apply(void 0,arguments);return e[le].maybe=!0,e};ke.maybe;function Se(e,n){return arguments.length>1?(E(e,P.notUndef,"put(channel, action): argument channel is undefined"),E(e,P.channel,"put(channel, action): argument "+e+" is not a valid channel"),E(n,P.notUndef,"put(channel, action): argument action is undefined")):(E(e,P.notUndef,"put(action): argument action is undefined"),n=e,e=null),Ee(se,{channel:e,action:n})}function Pe(e){return Ee(pe,e)}function Ce(e,n,t){E(n,P.notUndef,e+": argument fn is undefined");var r=null;if(P.array(n)){var o=n;r=o[0],n=o[1]}else if(n.fn){var a=n;r=a.context,n=a.fn}return r&&P.string(n)&&P.func(r[n])&&(n=r[n]),E(n,P.func,e+": argument "+n+" is not a function"),{context:r,fn:n,args:t}}function Ae(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Ee(he,Ce("fork",e,t))}Se.resolve=function(){var e=Se.apply(void 0,arguments);return e[se].resolve=!0,e},Se.sync=U(Se.resolve);var Te=function(e){return function(n){return n&&n[fe]&&n[e]}},Ne={take:Te(le),put:Te(se),all:Te(pe),race:Te(de),call:Te(ye),cps:Te(ve),fork:Te(he),join:Te(be),cancel:Te(ge),select:Te(me),actionChannel:Te(we),cancelled:Te(Oe),flush:Te(xe),getContext:Te(_e),setContext:Te(je)},Re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var De="proc first argument (Saga function result) must be an iterator",Me={toString:function(){return"@@redux-saga/CHANNEL_END"}},Le={toString:function(){return"@@redux-saga/TASK_CANCEL"}},Ue={wildcard:function(){return x},default:function(e){return"symbol"===(void 0===e?"undefined":Ie(e))?function(n){return n.type===e}:function(n){return n.type===String(e)}},array:function(e){return function(n){return e.some(function(e){return He(e)(n)})}},predicate:function(e){return function(n){return e(n)}}};function He(e){return("*"===e?Ue.wildcard:P.array(e)?Ue.array:P.stringableFunc(e)?Ue.default:P.func(e)?Ue.predicate:Ue.default)(e)}var Fe=function(e){return{fn:e}};function Ge(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return _},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:_,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"anonymous",u=arguments[8];E(e,P.iterator,De);var f=U(B,H("[...effects]","all([...effects])")),l=a.sagaMonitor,s=a.logger,p=a.onError,d=s||L,y=function(e){var n=e.sagaStack;!n&&e.stack&&(n=-1!==e.stack.split("\n")[0].indexOf(e.message)?e.stack:"Error: "+e.message+"\n"+e.stack),d("error","uncaught at "+c,n||e.message||e)},h=function(e){var n=ue(function(n){return e(function(e){e[m]?n(e):$(function(){return n(e)})})});return re({},n,{take:function(e,t){arguments.length>1&&(E(t,P.func,"channel.take's matcher argument must be a function"),e[b]=t),n.take(e)}})}(n),O=Object.create(o);I.cancel=_;var x=function(e,n,t,r){var o,a;return t._deferredEnd=null,(o={})[v]=!0,o.id=e,o.name=n,"done",(a={}).done=a.done||{},a.done.get=function(){if(t._deferredEnd)return t._deferredEnd.promise;var e=N();return t._deferredEnd=e,t._isRunning||(t._error?e.reject(t._error):e.resolve(t._result)),e.promise},o.cont=r,o.joiners=[],o.cancel=S,o.isRunning=function(){return t._isRunning},o.isCancelled=function(){return t._isCancelled},o.isAborted=function(){return t._isAborted},o.result=function(){return t._result},o.error=function(){return t._error},o.setContext=function(e){E(e,P.object,G("task",e)),C.assign(O,e)},function(e,n){for(var t in n){var r=n[t];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,t,r)}}(o,a),o}(i,c,e,u),j={name:c,cancel:function(){j.isRunning&&!j.isCancelled&&(j.isCancelled=!0,I(Le))},isRunning:!0},k=function(e,n,t){var r=[],o=void 0,a=!1;function i(e){u(),t(e,!0)}function c(e){r.push(e),e.cont=function(c,u){a||(A(r,e),e.cont=_,u?i(c):(e===n&&(o=c),r.length||(a=!0,t(o))))}}function u(){a||(a=!0,r.forEach(function(e){e.cont=_,e.cancel()}),r=[])}return c(n),{addTask:c,cancelAll:u,abort:i,getTasks:function(){return r},taskNames:function(){return r.map(function(e){return e.name})}}}(0,j,D);function S(){e._isRunning&&!e._isCancelled&&(e._isCancelled=!0,k.cancelAll(),D(Le))}return u&&(u.cancel=S),e._isRunning=!0,I(),x;function I(n,t){if(!j.isRunning)throw new Error("Trying to resume an already finished generator");try{var r=void 0;t?r=e.throw(n):n===Le?(j.isCancelled=!0,I.cancel(),r=P.func(e.return)?e.return(Le):{done:!0,value:Le}):r=n===Me?P.func(e.return)?e.return():{done:!0}:e.next(n),r.done?(j.isMainRunning=!1,j.cont&&j.cont(r.value)):F(r.value,i,"",I)}catch(e){j.isCancelled&&y(e),j.isMainRunning=!1,j.cont(e,!0)}}function D(n,t){e._isRunning=!1,h.close(),t?(n instanceof Error&&Object.defineProperty(n,"sagaStack",{value:"at "+c+" \n "+(n.sagaStack||n.stack),configurable:!0}),x.cont||(n instanceof Error&&p?p(n):y(n)),e._error=n,e._isAborted=!0,e._deferredEnd&&e._deferredEnd.reject(n)):(e._result=n,e._deferredEnd&&e._deferredEnd.resolve(n)),x.cont&&x.cont(n,t),x.joiners.forEach(function(e){return e.cb(n,t)}),x.joiners=null}function F(e,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments[3],u=R();l&&l.effectTriggered({effectId:u,parentEffectId:o,label:a,effect:e});var s=void 0;function p(e,n){s||(s=!0,i.cancel=_,l&&(n?l.effectRejected(u,e):l.effectResolved(u,e)),i(e,n))}p.cancel=_,i.cancel=function(){if(!s){s=!0;try{p.cancel()}catch(e){y(e)}p.cancel=_,l&&l.effectCancelled(u)}};var d=void 0;return P.promise(e)?X(e,p):P.helper(e)?K(Fe(e),u,p):P.iterator(e)?z(e,u,c,p):P.array(e)?f(e,u,p):(d=Ne.take(e))?function(e,n){var t=e.channel,r=e.pattern,o=e.maybe;t=t||h;var a=function(e){return e instanceof Error?n(e,!0):ae(e)&&!o?n(Me):n(e)};try{t.take(a,He(r))}catch(e){return n(e,!0)}n.cancel=a.cancel}(d,p):(d=Ne.put(e))?function(e,n){var r=e.channel,o=e.action,a=e.resolve;$(function(){var e=void 0;try{e=(r?r.put:t)(o)}catch(e){if(r||a)return n(e,!0);y(e)}if(!a||!P.promise(e))return n(e);X(e,n)})}(d,p):(d=Ne.all(e))?B(d,u,p):(d=Ne.race(e))?function(e,n,t){var r=void 0,o=Object.keys(e),a={};o.forEach(function(n){var i=function(a,i){if(!r)if(i)t.cancel(),t(a,!0);else if(!ae(a)&&a!==Me&&a!==Le){var c;t.cancel(),r=!0;var u=((c={})[n]=a,c);t(P.array(e)?[].slice.call(Re({},u,{length:o.length})):u)}};i.cancel=_,a[n]=i}),t.cancel=function(){r||(r=!0,o.forEach(function(e){return a[e].cancel()}))},o.forEach(function(t){r||F(e[t],n,t,a[t])})}(d,u,p):(d=Ne.call(e))?function(e,n,t){var r=e.context,o=e.fn,a=e.args,i=void 0;try{i=o.apply(r,a)}catch(e){return t(e,!0)}return P.promise(i)?X(i,t):P.iterator(i)?z(i,n,o.name,t):t(i)}(d,u,p):(d=Ne.cps(e))?function(e,n){var t=e.context,r=e.fn,o=e.args;try{var a=function(e,t){return P.undef(e)?n(t):n(e,!0)};r.apply(t,o.concat(a)),a.cancel&&(n.cancel=function(){return a.cancel()})}catch(e){return n(e,!0)}}(d,p):(d=Ne.fork(e))?K(d,u,p):(d=Ne.join(e))?function(e,n){if(e.isRunning()){var t={task:x,cb:n};n.cancel=function(){return A(e.joiners,t)},e.joiners.push(t)}else e.isAborted()?n(e.error(),!0):n(e.result())}(d,p):(d=Ne.cancel(e))?function(e,n){e===w&&(e=x);e.isRunning()&&e.cancel();n()}(d,p):(d=Ne.select(e))?function(e,n){var t=e.selector,o=e.args;try{var a=t.apply(void 0,[r()].concat(o));n(a)}catch(e){n(e,!0)}}(d,p):(d=Ne.actionChannel(e))?function(e,t){var r=e.pattern,o=e.buffer,a=He(r);a.pattern=r,t(ue(n,o||V.fixed(),a))}(d,p):(d=Ne.flush(e))?function(e,n){e.flush(n)}(d,p):(d=Ne.cancelled(e))?function(e,n){n(!!j.isCancelled)}(0,p):(d=Ne.getContext(e))?function(e,n){n(O[e])}(d,p):(d=Ne.setContext(e))?function(e,n){C.assign(O,e),n()}(d,p):p(e)}function X(e,n){var t=e[g];P.func(t)?n.cancel=t:P.func(e.abort)&&(n.cancel=function(){return e.abort()}),e.then(n,function(e){return n(e,!0)})}function z(e,o,i,c){Ge(e,n,t,r,O,a,o,i,c)}function K(e,o,i){var c=e.context,u=e.fn,f=e.args,l=e.detached,s=function(e){var n=e.context,t=e.fn,r=e.args;if(P.iterator(t))return t;var o,a,i=void 0,c=void 0;try{i=t.apply(n,r)}catch(e){c=e}return P.iterator(i)?i:M(c?function(){throw c}:(o=void 0,a={done:!1,value:i},function(e){return o?{done:!0,value:e}:(o=!0,a)}))}({context:c,fn:u,args:f});try{ee();var p=Ge(s,n,t,r,O,a,o,u.name,l?null:_);l?i(p):s._isRunning?(k.addTask(p),i(p)):s._error?k.abort(s._error):i(p)}finally{te()}}function B(e,n,t){var r=Object.keys(e);if(!r.length)return t(P.array(e)?[]:{});var o=0,a=void 0,i={},c={};r.forEach(function(n){var u=function(c,u){a||(u||ae(c)||c===Me||c===Le?(t.cancel(),t(c,u)):(i[n]=c,++o===r.length&&(a=!0,t(P.array(e)?T.from(Re({},i,{length:r.length})):i))))};u.cancel=_,c[n]=u}),t.cancel=function(){a||(a=!0,r.forEach(function(e){return c[e].cancel()}))},r.forEach(function(t){return F(e[t],n,t,c[t])})}}var Xe="runSaga(storeInterface, saga, ...args)",ze=Xe+": saga argument must be a Generator function!";var Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.context,t=void 0===n?{}:n,r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["context"]),o=r.sagaMonitor,a=r.logger,i=r.onError;if(P.func(r))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead");if(a&&!P.func(a))throw new Error("`options.logger` passed to the Saga middleware is not a function!");if(i&&!P.func(i))throw new Error("`options.onError` passed to the Saga middleware is not a function!");if(r.emitter&&!P.func(r.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!");function c(e){var n,u=e.getState,f=e.dispatch,l=(n=[],{subscribe:function(e){return n.push(e),function(){return A(n,e)}},emit:function(e){for(var t=n.slice(),r=0,o=t.length;r<o;r++)t[r](e)}});return l.emit=(r.emitter||j)(l.emit),c.run=function(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];var a=void 0;P.iterator(e)?(a=e,e=n):(E(n,P.func,ze),E(a=n.apply(void 0,r),P.iterator,ze));var i=e,c=i.subscribe,u=i.dispatch,f=i.getState,l=i.context,s=i.sagaMonitor,p=i.logger,d=i.onError,y=R();s&&(s.effectTriggered=s.effectTriggered||_,s.effectResolved=s.effectResolved||_,s.effectRejected=s.effectRejected||_,s.effectCancelled=s.effectCancelled||_,s.actionDispatched=s.actionDispatched||_,s.effectTriggered({effectId:y,root:!0,parentEffectId:0,effect:{root:!0,saga:n,args:r}}));var v=Ge(a,c,X(u),f,l,{sagaMonitor:s,logger:p,onError:d},y,n.name);return s&&s.effectResolved(y,v),v}.bind(null,{context:t,subscribe:l.subscribe,dispatch:f,getState:u,sagaMonitor:o,logger:a,onError:i}),function(e){return function(n){o&&o.actionDispatched&&o.actionDispatched(n);var t=e(n);return l.emit(n),t}}}return c.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")},c.setContext=function(e){E(e,P.object,G("sagaMiddleware",e)),C.assign(t,e)},c};function Be(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function We(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Je(e,n){return(Je=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function Ve(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function Ye(e){return function(n){var t=function(t){function r(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),Ve(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}var c,u,f,l,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&Je(e,n)}(r,a["Component"]),c=r,u=[{key:"render",value:function(){return i.a.createElement(n,this.props)}}],f=[{key:"getInitialProps",value:(l=o.a.mark(function t(r){var a,i,c,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.ctx,i=a.isServer,c=a.store,u={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:u=t.sent;case 6:if(!e.async||i){t.next=8;break}return t.abrupt("return",u);case 8:return c.dispatch(oe),t.next=11,c.sagaTask.done;case 11:return i||c.runSagaTask(),t.abrupt("return",u);case 13:case"end":return t.stop()}},t,this)}),s=function(){var e=this,n=arguments;return new Promise(function(t,r){var o=l.apply(e,n);function a(e){Be(o,t,r,a,i,"next",e)}function i(e){Be(o,t,r,a,i,"throw",e)}a(void 0)})},function(e){return s.apply(this,arguments)})}],u&&We(c.prototype,u),f&&We(c,f),r}();return Object.defineProperty(t,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"withReduxSaga(".concat(n.displayName||n.name||"BaseComponent",")")}),t}}var Qe=function(e){var n={async:!1};return"function"==typeof e?Ye(n)(e):Ye(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){qe(e,n,t[n])})}return e}({},n,e))},Ze=t(58),$e=t(59);function en(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){nn(e,n,t[n])})}return e}function nn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var tn={count:0},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn;switch((arguments.length>1?arguments[1]:void 0).type){case $e.e:return en({},e,{count:e.count+1});case $e.a:return en({},e,{count:e.count-1});case $e.f:return en({},e,{count:0});default:return e}},on=Object(Ze.c)({counter:rn});function an(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var cn={list:[]},un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case $e.b:case $e.c:return cn;case $e.d:return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){an(e,n,t[n])})}return e}({},e,{list:r});default:return e}},fn=Object(Ze.c)({list:un}),ln=Object(Ze.c)({home:on,user:fn}),sn=t(117),pn={getUserList:"https://jsonplaceholder.typicode.com/users"},dn=o.a.mark(yn);function yn(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,ke($e.b);case 3:return t.prev=3,t.next=6,fetch(pn.getUserList);case 6:return e=t.sent,t.next=9,e.json();case 9:return n=t.sent,t.next=12,Se(Object(sn.c)(n));case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(3),t.next=18,Se(Object(sn.b)(t.t0));case 18:t.next=0;break;case 20:case"end":return t.stop()}},dn,this,[[3,14]])}var vn=[Ae(yn)];var hn,bn=function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(hn=vn)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(hn)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),gn=o.a.mark(wn);function mn(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function wn(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(mn(bn));case 2:case"end":return e.stop()}},gn,this)}function On(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var xn=Ke(),_n=function(e){return Ze.a.apply(void 0,On(e))};var jn=function(e){var n=Object(Ze.d)(ln,e,_n([xn]));return n.runSagaTask=function(){n.sagaTask=xn.run(wn)},n.runSagaTask(),n},En=t(118),kn=t.n(En),Sn=t(120),Pn=t.n(Sn);function Cn(e){return(Cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function An(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tn(e,n){return!n||"object"!==Cn(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}var Nn=function(e){function n(e){var t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=Tn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));var r=e.title;return t.state={title:r},t}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a["Component"]),t=n,o=[{key:"getDerivedStateFromProps",value:function(e,n){return e.title!==n.title?{title:e.title}:null}}],(r=[{key:"render",value:function(){var e=this.state.title;return i.a.createElement("div",{className:kn.a.dynamic([["3383730238",["#1DA57e"]]])+" header-container"},i.a.createElement(Pn.a,{href:"/"},i.a.createElement("div",{className:kn.a.dynamic([["3383730238",["#1DA57e"]]])+" logo-container"},i.a.createElement("img",{alt:"logo",src:"/static/logo.png",className:kn.a.dynamic([["3383730238",["#1DA57e"]]])+" logo"}),i.a.createElement("span",{className:kn.a.dynamic([["3383730238",["#1DA57e"]]])+" sys-name"},"XXX系统"))),i.a.createElement("h2",{className:kn.a.dynamic([["3383730238",["#1DA57e"]]])},e),i.a.createElement(kn.a,{styleId:"3383730238",css:[".header-container.__jsx-style-dynamic-selector{height:60px;background-color:".concat("#1DA57e",";margin-bottom:10px;}"),"h2.__jsx-style-dynamic-selector{text-align:center;line-height:60px;font-size:1.6rem;font-weight:500;color:#fff;}",".logo-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:15px;left:20px;cursor:pointer;}",".sys-name.__jsx-style-dynamic-selector{display:inline-block;margin-left:10px;font-size:20px;color:#fff;font-weight:600;}",".logo.__jsx-style-dynamic-selector{width:30px;height:30px;}"],dynamic:["#1DA57e"]}))}}])&&An(t.prototype,r),o&&An(t,o),n}(),Rn=(t(331),function(e){var n=e.title,t=e.children;return i.a.createElement(a.Fragment,null,i.a.createElement(kn.a,{styleId:"894143465",css:["*{margin:0;padding:0;}","body{font-family:Helvetica,'Hiragino Sans GB','Microsoft Yahei','微软雅黑',Arial,sans-serif;}",".content-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]}),i.a.createElement(Nn,{title:n}),i.a.createElement("div",{className:"jsx-894143465 content-container"},t))}),In=t(178);function Dn(e){return(Dn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Mn(){return(Mn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ln(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Un(e,n){return!n||"object"!==Dn(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}var Hn=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),Un(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,a,l,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,u.a),t=n,r=[{key:"render",value:function(){var e=this.props,n=e.Component,t=e.pageProps,r=e.store,o=e.router;return i.a.createElement(c.Container,null,i.a.createElement(f.a,{store:r},i.a.createElement(Rn,{title:In.b[o.pathname]},i.a.createElement(n,Mn({},t,{router:o})))))}}],a=[{key:"getInitialProps",value:(l=o.a.mark(function e(n){var t,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.Component,r=n.ctx,a={},!t.getInitialProps){e.next=6;break}return e.next=5,t.getInitialProps({ctx:r});case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}},e,this)}),s=function(){var e=this,n=arguments;return new Promise(function(t,r){var o=l.apply(e,n);function a(e,n){try{var a=o[e](n),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e){return s.apply(this,arguments)})}],r&&Ln(t.prototype,r),a&&Ln(t,a),n}();n.default=s()(jn)(Qe({async:!0})(Hn))},291:function(e,n,t){e.exports=t(292)},292:function(e,n,t){"use strict";var r=t(36),o=t(14);Object.defineProperty(n,"__esModule",{value:!0}),n.createUrl=x,n.Container=n.default=void 0;var a=o(t(20)),i=o(t(71)),c=o(t(293)),u=o(t(47)),f=o(t(55)),l=o(t(21)),s=o(t(22)),p=o(t(56)),d=o(t(57)),y=r(t(0)),v=o(t(4)),h=o(t(169)),b=t(34),g=t(73),m=function(e){function n(){return(0,l.default)(this,n),(0,p.default)(this,(n.__proto__||(0,f.default)(n)).apply(this,arguments))}var t;return(0,d.default)(n,e),(0,s.default)(n,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,g.makePublicRouterInstance)(this.props.router),_containerProps:(0,u.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,n=e.router,t=e.Component,r=e.pageProps,o=x(n);return y.default.createElement(w,null,y.default.createElement(t,(0,c.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(t=(0,i.default)(a.default.mark(function e(n){var t,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,n.router,r=n.ctx,e.next=3,(0,b.loadGetInitialProps)(t,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),n}(y.Component);n.default=m,Object.defineProperty(m,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(m,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:v.default.any,headManager:v.default.object,router:v.default.object}});var w=function(e){function n(){return(0,l.default)(this,n),(0,p.default)(this,(n.__proto__||(0,f.default)(n)).apply(this,arguments))}return(0,d.default)(n,e),(0,s.default)(n,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var n=document.getElementById(e);n&&setTimeout(function(){return n.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,h.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return y.default.createElement(y.default.Fragment,null,e)}}]),n}(y.Component);n.Container=w,Object.defineProperty(w,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:v.default.any}});var O=(0,b.execOnce)(function(){0});function x(e){var n=e.pathname,t=e.asPath,r=e.query;return{get query(){return O(),r},get pathname(){return O(),n},get asPath(){return O(),t},back:function(){O(),e.back()},push:function(n,t){return O(),e.push(n,t)},pushTo:function(n,t){O();var r=t?n:null,o=t||n;return e.push(r,o)},replace:function(n,t){return O(),e.replace(n,t)},replaceTo:function(n,t){O();var r=t?n:null,o=t||n;return e.replace(r,o)}}}},293:function(e,n,t){var r=t(112);function o(){return e.exports=o=r||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}e.exports=o},298:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.setPromise=void 0;var r,o=(r=t(20))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}(t(0));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){s(e,n,t[n])})}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Promise;var p="undefined"==typeof window;n.setPromise=function(e){return e};var d=function(e){var n=e.makeStore,t=e.initialState,r=e.config,o=e.ctx,a=void 0===o?{}:o,i=r.storeKey,c=function(){return n(r.deserializeState(t),l({},a,r,{isServer:p}))};return p?c():(window[i]||(window[i]=c()),window[i])};n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=l({storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},n),function(t){var r,i,l,s;return i=r=function(r){function o(t,r){var a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),a=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,r));var i=t.initialState,c=t.store,u=c&&"dispatch"in c&&"getState"in c;return c=u?c:d({makeStore:e,initialState:i,config:n}),n.debug&&console.log("4. WrappedApp.render",u?"picked up existing one,":"created new store with","initialState",i),a.store=c,a}var i,l,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(o,a.Component),i=o,(l=[{key:"render",value:function(){var e=this.props,n=e.initialProps,r=(e.initialState,e.store,function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["initialProps","initialState","store"]));return a.default.createElement(t,c({},r,n,{store:this.store}))}}])&&u(i.prototype,l),s&&u(i,s),o}(),Object.defineProperty(r,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"withRedux(".concat(t.displayName||t.name||"App",")")}),Object.defineProperty(r,"getInitialProps",{configurable:!0,enumerable:!0,writable:!0,value:(l=o.default.mark(function r(a){var i,c;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(a){r.next=2;break}throw new Error("No app context");case 2:if(a.ctx){r.next=4;break}throw new Error("No page context");case 4:if(i=d({makeStore:e,config:n,ctx:a.ctx}),n.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),a.ctx.store=i,a.ctx.isServer=p,c={},!("getInitialProps"in t)){r.next=13;break}return r.next=12,t.getInitialProps.call(t,a);case 12:c=r.sent;case 13:return n.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),r.abrupt("return",{store:i,isServer:p,initialState:n.serializeState(i.getState()),initialProps:c});case 15:case"end":return r.stop()}},r,this)}),s=function(){var e=this,n=arguments;return new Promise(function(t,r){var o=l.apply(e,n);function a(e,n){try{var a=o[e](n),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e){return s.apply(this,arguments)})}),i}}}},[289]).default}});