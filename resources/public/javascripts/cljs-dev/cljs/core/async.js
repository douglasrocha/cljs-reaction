// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9662 = [];
var len__7479__auto___9668 = arguments.length;
var i__7480__auto___9669 = (0);
while(true){
if((i__7480__auto___9669 < len__7479__auto___9668)){
args9662.push((arguments[i__7480__auto___9669]));

var G__9670 = (i__7480__auto___9669 + (1));
i__7480__auto___9669 = G__9670;
continue;
} else {
}
break;
}

var G__9664 = args9662.length;
switch (G__9664) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9662.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9665 = (function (f,blockable,meta9666){
this.f = f;
this.blockable = blockable;
this.meta9666 = meta9666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9667,meta9666__$1){
var self__ = this;
var _9667__$1 = this;
return (new cljs.core.async.t_cljs$core$async9665(self__.f,self__.blockable,meta9666__$1));
});

cljs.core.async.t_cljs$core$async9665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9667){
var self__ = this;
var _9667__$1 = this;
return self__.meta9666;
});

cljs.core.async.t_cljs$core$async9665.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9666","meta9666",-718869807,null)], null);
});

cljs.core.async.t_cljs$core$async9665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9665";

cljs.core.async.t_cljs$core$async9665.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async9665");
});

cljs.core.async.__GT_t_cljs$core$async9665 = (function cljs$core$async$__GT_t_cljs$core$async9665(f__$1,blockable__$1,meta9666){
return (new cljs.core.async.t_cljs$core$async9665(f__$1,blockable__$1,meta9666));
});

}

return (new cljs.core.async.t_cljs$core$async9665(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9674 = [];
var len__7479__auto___9677 = arguments.length;
var i__7480__auto___9678 = (0);
while(true){
if((i__7480__auto___9678 < len__7479__auto___9677)){
args9674.push((arguments[i__7480__auto___9678]));

var G__9679 = (i__7480__auto___9678 + (1));
i__7480__auto___9678 = G__9679;
continue;
} else {
}
break;
}

var G__9676 = args9674.length;
switch (G__9676) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9674.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9681 = [];
var len__7479__auto___9684 = arguments.length;
var i__7480__auto___9685 = (0);
while(true){
if((i__7480__auto___9685 < len__7479__auto___9684)){
args9681.push((arguments[i__7480__auto___9685]));

var G__9686 = (i__7480__auto___9685 + (1));
i__7480__auto___9685 = G__9686;
continue;
} else {
}
break;
}

var G__9683 = args9681.length;
switch (G__9683) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9681.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9688 = [];
var len__7479__auto___9691 = arguments.length;
var i__7480__auto___9692 = (0);
while(true){
if((i__7480__auto___9692 < len__7479__auto___9691)){
args9688.push((arguments[i__7480__auto___9692]));

var G__9693 = (i__7480__auto___9692 + (1));
i__7480__auto___9692 = G__9693;
continue;
} else {
}
break;
}

var G__9690 = args9688.length;
switch (G__9690) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9688.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9695 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9695);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9695,ret){
return (function (){
return fn1.call(null,val_9695);
});})(val_9695,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9696 = [];
var len__7479__auto___9699 = arguments.length;
var i__7480__auto___9700 = (0);
while(true){
if((i__7480__auto___9700 < len__7479__auto___9699)){
args9696.push((arguments[i__7480__auto___9700]));

var G__9701 = (i__7480__auto___9700 + (1));
i__7480__auto___9700 = G__9701;
continue;
} else {
}
break;
}

var G__9698 = args9696.length;
switch (G__9698) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9696.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7319__auto___9703 = n;
var x_9704 = (0);
while(true){
if((x_9704 < n__7319__auto___9703)){
(a[x_9704] = (0));

var G__9705 = (x_9704 + (1));
x_9704 = G__9705;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9706 = (i + (1));
i = G__9706;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9710 = (function (alt_flag,flag,meta9711){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9711 = meta9711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9712,meta9711__$1){
var self__ = this;
var _9712__$1 = this;
return (new cljs.core.async.t_cljs$core$async9710(self__.alt_flag,self__.flag,meta9711__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9712){
var self__ = this;
var _9712__$1 = this;
return self__.meta9711;
});})(flag))
;

cljs.core.async.t_cljs$core$async9710.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9710.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9711","meta9711",-759880797,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9710";

cljs.core.async.t_cljs$core$async9710.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async9710");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9710 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9710(alt_flag__$1,flag__$1,meta9711){
return (new cljs.core.async.t_cljs$core$async9710(alt_flag__$1,flag__$1,meta9711));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9710(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9716 = (function (alt_handler,flag,cb,meta9717){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9717 = meta9717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9718,meta9717__$1){
var self__ = this;
var _9718__$1 = this;
return (new cljs.core.async.t_cljs$core$async9716(self__.alt_handler,self__.flag,self__.cb,meta9717__$1));
});

cljs.core.async.t_cljs$core$async9716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9718){
var self__ = this;
var _9718__$1 = this;
return self__.meta9717;
});

cljs.core.async.t_cljs$core$async9716.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9717","meta9717",-1407528773,null)], null);
});

cljs.core.async.t_cljs$core$async9716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9716";

cljs.core.async.t_cljs$core$async9716.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async9716");
});

cljs.core.async.__GT_t_cljs$core$async9716 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9716(alt_handler__$1,flag__$1,cb__$1,meta9717){
return (new cljs.core.async.t_cljs$core$async9716(alt_handler__$1,flag__$1,cb__$1,meta9717));
});

}

return (new cljs.core.async.t_cljs$core$async9716(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9719_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9719_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9720_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6404__auto__ = wport;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9721 = (i + (1));
i = G__9721;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6404__auto__ = ret;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6392__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___9727 = arguments.length;
var i__7480__auto___9728 = (0);
while(true){
if((i__7480__auto___9728 < len__7479__auto___9727)){
args__7486__auto__.push((arguments[i__7480__auto___9728]));

var G__9729 = (i__7480__auto___9728 + (1));
i__7480__auto___9728 = G__9729;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9724){
var map__9725 = p__9724;
var map__9725__$1 = ((((!((map__9725 == null)))?((((map__9725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9725):map__9725);
var opts = map__9725__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9722){
var G__9723 = cljs.core.first.call(null,seq9722);
var seq9722__$1 = cljs.core.next.call(null,seq9722);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9723,seq9722__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9730 = [];
var len__7479__auto___9780 = arguments.length;
var i__7480__auto___9781 = (0);
while(true){
if((i__7480__auto___9781 < len__7479__auto___9780)){
args9730.push((arguments[i__7480__auto___9781]));

var G__9782 = (i__7480__auto___9781 + (1));
i__7480__auto___9781 = G__9782;
continue;
} else {
}
break;
}

var G__9732 = args9730.length;
switch (G__9732) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9730.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9617__auto___9784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___9784){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___9784){
return (function (state_9756){
var state_val_9757 = (state_9756[(1)]);
if((state_val_9757 === (7))){
var inst_9752 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
var statearr_9758_9785 = state_9756__$1;
(statearr_9758_9785[(2)] = inst_9752);

(statearr_9758_9785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (1))){
var state_9756__$1 = state_9756;
var statearr_9759_9786 = state_9756__$1;
(statearr_9759_9786[(2)] = null);

(statearr_9759_9786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (4))){
var inst_9735 = (state_9756[(7)]);
var inst_9735__$1 = (state_9756[(2)]);
var inst_9736 = (inst_9735__$1 == null);
var state_9756__$1 = (function (){var statearr_9760 = state_9756;
(statearr_9760[(7)] = inst_9735__$1);

return statearr_9760;
})();
if(cljs.core.truth_(inst_9736)){
var statearr_9761_9787 = state_9756__$1;
(statearr_9761_9787[(1)] = (5));

} else {
var statearr_9762_9788 = state_9756__$1;
(statearr_9762_9788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (13))){
var state_9756__$1 = state_9756;
var statearr_9763_9789 = state_9756__$1;
(statearr_9763_9789[(2)] = null);

(statearr_9763_9789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (6))){
var inst_9735 = (state_9756[(7)]);
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9756__$1,(11),to,inst_9735);
} else {
if((state_val_9757 === (3))){
var inst_9754 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9756__$1,inst_9754);
} else {
if((state_val_9757 === (12))){
var state_9756__$1 = state_9756;
var statearr_9764_9790 = state_9756__$1;
(statearr_9764_9790[(2)] = null);

(statearr_9764_9790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (2))){
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9756__$1,(4),from);
} else {
if((state_val_9757 === (11))){
var inst_9745 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
if(cljs.core.truth_(inst_9745)){
var statearr_9765_9791 = state_9756__$1;
(statearr_9765_9791[(1)] = (12));

} else {
var statearr_9766_9792 = state_9756__$1;
(statearr_9766_9792[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (9))){
var state_9756__$1 = state_9756;
var statearr_9767_9793 = state_9756__$1;
(statearr_9767_9793[(2)] = null);

(statearr_9767_9793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (5))){
var state_9756__$1 = state_9756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9768_9794 = state_9756__$1;
(statearr_9768_9794[(1)] = (8));

} else {
var statearr_9769_9795 = state_9756__$1;
(statearr_9769_9795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (14))){
var inst_9750 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
var statearr_9770_9796 = state_9756__$1;
(statearr_9770_9796[(2)] = inst_9750);

(statearr_9770_9796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (10))){
var inst_9742 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
var statearr_9771_9797 = state_9756__$1;
(statearr_9771_9797[(2)] = inst_9742);

(statearr_9771_9797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (8))){
var inst_9739 = cljs.core.async.close_BANG_.call(null,to);
var state_9756__$1 = state_9756;
var statearr_9772_9798 = state_9756__$1;
(statearr_9772_9798[(2)] = inst_9739);

(statearr_9772_9798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___9784))
;
return ((function (switch__9505__auto__,c__9617__auto___9784){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_9776 = [null,null,null,null,null,null,null,null];
(statearr_9776[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_9776[(1)] = (1));

return statearr_9776;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_9756){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_9756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e9777){if((e9777 instanceof Object)){
var ex__9509__auto__ = e9777;
var statearr_9778_9799 = state_9756;
(statearr_9778_9799[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9800 = state_9756;
state_9756 = G__9800;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_9756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_9756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___9784))
})();
var state__9619__auto__ = (function (){var statearr_9779 = f__9618__auto__.call(null);
(statearr_9779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___9784);

return statearr_9779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___9784))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9988){
var vec__9989 = p__9988;
var v = cljs.core.nth.call(null,vec__9989,(0),null);
var p = cljs.core.nth.call(null,vec__9989,(1),null);
var job = vec__9989;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9617__auto___10175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___10175,res,vec__9989,v,p,job,jobs,results){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___10175,res,vec__9989,v,p,job,jobs,results){
return (function (state_9996){
var state_val_9997 = (state_9996[(1)]);
if((state_val_9997 === (1))){
var state_9996__$1 = state_9996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9996__$1,(2),res,v);
} else {
if((state_val_9997 === (2))){
var inst_9993 = (state_9996[(2)]);
var inst_9994 = cljs.core.async.close_BANG_.call(null,res);
var state_9996__$1 = (function (){var statearr_9998 = state_9996;
(statearr_9998[(7)] = inst_9993);

return statearr_9998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9996__$1,inst_9994);
} else {
return null;
}
}
});})(c__9617__auto___10175,res,vec__9989,v,p,job,jobs,results))
;
return ((function (switch__9505__auto__,c__9617__auto___10175,res,vec__9989,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0 = (function (){
var statearr_10002 = [null,null,null,null,null,null,null,null];
(statearr_10002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__);

(statearr_10002[(1)] = (1));

return statearr_10002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1 = (function (state_9996){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_9996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10003){if((e10003 instanceof Object)){
var ex__9509__auto__ = e10003;
var statearr_10004_10176 = state_9996;
(statearr_10004_10176[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10177 = state_9996;
state_9996 = G__10177;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = function(state_9996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1.call(this,state_9996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___10175,res,vec__9989,v,p,job,jobs,results))
})();
var state__9619__auto__ = (function (){var statearr_10005 = f__9618__auto__.call(null);
(statearr_10005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___10175);

return statearr_10005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___10175,res,vec__9989,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10006){
var vec__10007 = p__10006;
var v = cljs.core.nth.call(null,vec__10007,(0),null);
var p = cljs.core.nth.call(null,vec__10007,(1),null);
var job = vec__10007;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7319__auto___10178 = n;
var __10179 = (0);
while(true){
if((__10179 < n__7319__auto___10178)){
var G__10010_10180 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10010_10180) {
case "compute":
var c__9617__auto___10182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10179,c__9617__auto___10182,G__10010_10180,n__7319__auto___10178,jobs,results,process,async){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (__10179,c__9617__auto___10182,G__10010_10180,n__7319__auto___10178,jobs,results,process,async){
return (function (state_10023){
var state_val_10024 = (state_10023[(1)]);
if((state_val_10024 === (1))){
var state_10023__$1 = state_10023;
var statearr_10025_10183 = state_10023__$1;
(statearr_10025_10183[(2)] = null);

(statearr_10025_10183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (2))){
var state_10023__$1 = state_10023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10023__$1,(4),jobs);
} else {
if((state_val_10024 === (3))){
var inst_10021 = (state_10023[(2)]);
var state_10023__$1 = state_10023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10023__$1,inst_10021);
} else {
if((state_val_10024 === (4))){
var inst_10013 = (state_10023[(2)]);
var inst_10014 = process.call(null,inst_10013);
var state_10023__$1 = state_10023;
if(cljs.core.truth_(inst_10014)){
var statearr_10026_10184 = state_10023__$1;
(statearr_10026_10184[(1)] = (5));

} else {
var statearr_10027_10185 = state_10023__$1;
(statearr_10027_10185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (5))){
var state_10023__$1 = state_10023;
var statearr_10028_10186 = state_10023__$1;
(statearr_10028_10186[(2)] = null);

(statearr_10028_10186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (6))){
var state_10023__$1 = state_10023;
var statearr_10029_10187 = state_10023__$1;
(statearr_10029_10187[(2)] = null);

(statearr_10029_10187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (7))){
var inst_10019 = (state_10023[(2)]);
var state_10023__$1 = state_10023;
var statearr_10030_10188 = state_10023__$1;
(statearr_10030_10188[(2)] = inst_10019);

(statearr_10030_10188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10179,c__9617__auto___10182,G__10010_10180,n__7319__auto___10178,jobs,results,process,async))
;
return ((function (__10179,switch__9505__auto__,c__9617__auto___10182,G__10010_10180,n__7319__auto___10178,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0 = (function (){
var statearr_10034 = [null,null,null,null,null,null,null];
(statearr_10034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__);

(statearr_10034[(1)] = (1));

return statearr_10034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1 = (function (state_10023){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10035){if((e10035 instanceof Object)){
var ex__9509__auto__ = e10035;
var statearr_10036_10189 = state_10023;
(statearr_10036_10189[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10190 = state_10023;
state_10023 = G__10190;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = function(state_10023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1.call(this,state_10023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__;
})()
;})(__10179,switch__9505__auto__,c__9617__auto___10182,G__10010_10180,n__7319__auto___10178,jobs,results,process,async))
})();
var state__9619__auto__ = (function (){var statearr_10037 = f__9618__auto__.call(null);
(statearr_10037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___10182);

return statearr_10037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(__10179,c__9617__auto___10182,G__10010_10180,n__7319__auto___10178,jobs,results,process,async))
);


break;
case "async":
var c__9617__auto___10191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10179,c__9617__auto___10191,G__10010_10180,n__7319__auto___10178,jobs,results,process,async){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (__10179,c__9617__auto___10191,G__10010_10180,n__7319__auto___10178,jobs,results,process,async){
return (function (state_10050){
var state_val_10051 = (state_10050[(1)]);
if((state_val_10051 === (1))){
var state_10050__$1 = state_10050;
var statearr_10052_10192 = state_10050__$1;
(statearr_10052_10192[(2)] = null);

(statearr_10052_10192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10051 === (2))){
var state_10050__$1 = state_10050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10050__$1,(4),jobs);
} else {
if((state_val_10051 === (3))){
var inst_10048 = (state_10050[(2)]);
var state_10050__$1 = state_10050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10050__$1,inst_10048);
} else {
if((state_val_10051 === (4))){
var inst_10040 = (state_10050[(2)]);
var inst_10041 = async.call(null,inst_10040);
var state_10050__$1 = state_10050;
if(cljs.core.truth_(inst_10041)){
var statearr_10053_10193 = state_10050__$1;
(statearr_10053_10193[(1)] = (5));

} else {
var statearr_10054_10194 = state_10050__$1;
(statearr_10054_10194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10051 === (5))){
var state_10050__$1 = state_10050;
var statearr_10055_10195 = state_10050__$1;
(statearr_10055_10195[(2)] = null);

(statearr_10055_10195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10051 === (6))){
var state_10050__$1 = state_10050;
var statearr_10056_10196 = state_10050__$1;
(statearr_10056_10196[(2)] = null);

(statearr_10056_10196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10051 === (7))){
var inst_10046 = (state_10050[(2)]);
var state_10050__$1 = state_10050;
var statearr_10057_10197 = state_10050__$1;
(statearr_10057_10197[(2)] = inst_10046);

(statearr_10057_10197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10179,c__9617__auto___10191,G__10010_10180,n__7319__auto___10178,jobs,results,process,async))
;
return ((function (__10179,switch__9505__auto__,c__9617__auto___10191,G__10010_10180,n__7319__auto___10178,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0 = (function (){
var statearr_10061 = [null,null,null,null,null,null,null];
(statearr_10061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__);

(statearr_10061[(1)] = (1));

return statearr_10061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1 = (function (state_10050){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10062){if((e10062 instanceof Object)){
var ex__9509__auto__ = e10062;
var statearr_10063_10198 = state_10050;
(statearr_10063_10198[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10199 = state_10050;
state_10050 = G__10199;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = function(state_10050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1.call(this,state_10050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__;
})()
;})(__10179,switch__9505__auto__,c__9617__auto___10191,G__10010_10180,n__7319__auto___10178,jobs,results,process,async))
})();
var state__9619__auto__ = (function (){var statearr_10064 = f__9618__auto__.call(null);
(statearr_10064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___10191);

return statearr_10064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(__10179,c__9617__auto___10191,G__10010_10180,n__7319__auto___10178,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10200 = (__10179 + (1));
__10179 = G__10200;
continue;
} else {
}
break;
}

var c__9617__auto___10201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___10201,jobs,results,process,async){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___10201,jobs,results,process,async){
return (function (state_10086){
var state_val_10087 = (state_10086[(1)]);
if((state_val_10087 === (1))){
var state_10086__$1 = state_10086;
var statearr_10088_10202 = state_10086__$1;
(statearr_10088_10202[(2)] = null);

(statearr_10088_10202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10087 === (2))){
var state_10086__$1 = state_10086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10086__$1,(4),from);
} else {
if((state_val_10087 === (3))){
var inst_10084 = (state_10086[(2)]);
var state_10086__$1 = state_10086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10086__$1,inst_10084);
} else {
if((state_val_10087 === (4))){
var inst_10067 = (state_10086[(7)]);
var inst_10067__$1 = (state_10086[(2)]);
var inst_10068 = (inst_10067__$1 == null);
var state_10086__$1 = (function (){var statearr_10089 = state_10086;
(statearr_10089[(7)] = inst_10067__$1);

return statearr_10089;
})();
if(cljs.core.truth_(inst_10068)){
var statearr_10090_10203 = state_10086__$1;
(statearr_10090_10203[(1)] = (5));

} else {
var statearr_10091_10204 = state_10086__$1;
(statearr_10091_10204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10087 === (5))){
var inst_10070 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10086__$1 = state_10086;
var statearr_10092_10205 = state_10086__$1;
(statearr_10092_10205[(2)] = inst_10070);

(statearr_10092_10205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10087 === (6))){
var inst_10072 = (state_10086[(8)]);
var inst_10067 = (state_10086[(7)]);
var inst_10072__$1 = cljs.core.async.chan.call(null,(1));
var inst_10073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10074 = [inst_10067,inst_10072__$1];
var inst_10075 = (new cljs.core.PersistentVector(null,2,(5),inst_10073,inst_10074,null));
var state_10086__$1 = (function (){var statearr_10093 = state_10086;
(statearr_10093[(8)] = inst_10072__$1);

return statearr_10093;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10086__$1,(8),jobs,inst_10075);
} else {
if((state_val_10087 === (7))){
var inst_10082 = (state_10086[(2)]);
var state_10086__$1 = state_10086;
var statearr_10094_10206 = state_10086__$1;
(statearr_10094_10206[(2)] = inst_10082);

(statearr_10094_10206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10087 === (8))){
var inst_10072 = (state_10086[(8)]);
var inst_10077 = (state_10086[(2)]);
var state_10086__$1 = (function (){var statearr_10095 = state_10086;
(statearr_10095[(9)] = inst_10077);

return statearr_10095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10086__$1,(9),results,inst_10072);
} else {
if((state_val_10087 === (9))){
var inst_10079 = (state_10086[(2)]);
var state_10086__$1 = (function (){var statearr_10096 = state_10086;
(statearr_10096[(10)] = inst_10079);

return statearr_10096;
})();
var statearr_10097_10207 = state_10086__$1;
(statearr_10097_10207[(2)] = null);

(statearr_10097_10207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___10201,jobs,results,process,async))
;
return ((function (switch__9505__auto__,c__9617__auto___10201,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0 = (function (){
var statearr_10101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__);

(statearr_10101[(1)] = (1));

return statearr_10101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1 = (function (state_10086){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10102){if((e10102 instanceof Object)){
var ex__9509__auto__ = e10102;
var statearr_10103_10208 = state_10086;
(statearr_10103_10208[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10209 = state_10086;
state_10086 = G__10209;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = function(state_10086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1.call(this,state_10086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___10201,jobs,results,process,async))
})();
var state__9619__auto__ = (function (){var statearr_10104 = f__9618__auto__.call(null);
(statearr_10104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___10201);

return statearr_10104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___10201,jobs,results,process,async))
);


var c__9617__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto__,jobs,results,process,async){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto__,jobs,results,process,async){
return (function (state_10142){
var state_val_10143 = (state_10142[(1)]);
if((state_val_10143 === (7))){
var inst_10138 = (state_10142[(2)]);
var state_10142__$1 = state_10142;
var statearr_10144_10210 = state_10142__$1;
(statearr_10144_10210[(2)] = inst_10138);

(statearr_10144_10210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (20))){
var state_10142__$1 = state_10142;
var statearr_10145_10211 = state_10142__$1;
(statearr_10145_10211[(2)] = null);

(statearr_10145_10211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (1))){
var state_10142__$1 = state_10142;
var statearr_10146_10212 = state_10142__$1;
(statearr_10146_10212[(2)] = null);

(statearr_10146_10212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (4))){
var inst_10107 = (state_10142[(7)]);
var inst_10107__$1 = (state_10142[(2)]);
var inst_10108 = (inst_10107__$1 == null);
var state_10142__$1 = (function (){var statearr_10147 = state_10142;
(statearr_10147[(7)] = inst_10107__$1);

return statearr_10147;
})();
if(cljs.core.truth_(inst_10108)){
var statearr_10148_10213 = state_10142__$1;
(statearr_10148_10213[(1)] = (5));

} else {
var statearr_10149_10214 = state_10142__$1;
(statearr_10149_10214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (15))){
var inst_10120 = (state_10142[(8)]);
var state_10142__$1 = state_10142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10142__$1,(18),to,inst_10120);
} else {
if((state_val_10143 === (21))){
var inst_10133 = (state_10142[(2)]);
var state_10142__$1 = state_10142;
var statearr_10150_10215 = state_10142__$1;
(statearr_10150_10215[(2)] = inst_10133);

(statearr_10150_10215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (13))){
var inst_10135 = (state_10142[(2)]);
var state_10142__$1 = (function (){var statearr_10151 = state_10142;
(statearr_10151[(9)] = inst_10135);

return statearr_10151;
})();
var statearr_10152_10216 = state_10142__$1;
(statearr_10152_10216[(2)] = null);

(statearr_10152_10216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (6))){
var inst_10107 = (state_10142[(7)]);
var state_10142__$1 = state_10142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10142__$1,(11),inst_10107);
} else {
if((state_val_10143 === (17))){
var inst_10128 = (state_10142[(2)]);
var state_10142__$1 = state_10142;
if(cljs.core.truth_(inst_10128)){
var statearr_10153_10217 = state_10142__$1;
(statearr_10153_10217[(1)] = (19));

} else {
var statearr_10154_10218 = state_10142__$1;
(statearr_10154_10218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (3))){
var inst_10140 = (state_10142[(2)]);
var state_10142__$1 = state_10142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10142__$1,inst_10140);
} else {
if((state_val_10143 === (12))){
var inst_10117 = (state_10142[(10)]);
var state_10142__$1 = state_10142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10142__$1,(14),inst_10117);
} else {
if((state_val_10143 === (2))){
var state_10142__$1 = state_10142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10142__$1,(4),results);
} else {
if((state_val_10143 === (19))){
var state_10142__$1 = state_10142;
var statearr_10155_10219 = state_10142__$1;
(statearr_10155_10219[(2)] = null);

(statearr_10155_10219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (11))){
var inst_10117 = (state_10142[(2)]);
var state_10142__$1 = (function (){var statearr_10156 = state_10142;
(statearr_10156[(10)] = inst_10117);

return statearr_10156;
})();
var statearr_10157_10220 = state_10142__$1;
(statearr_10157_10220[(2)] = null);

(statearr_10157_10220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (9))){
var state_10142__$1 = state_10142;
var statearr_10158_10221 = state_10142__$1;
(statearr_10158_10221[(2)] = null);

(statearr_10158_10221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (5))){
var state_10142__$1 = state_10142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10159_10222 = state_10142__$1;
(statearr_10159_10222[(1)] = (8));

} else {
var statearr_10160_10223 = state_10142__$1;
(statearr_10160_10223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (14))){
var inst_10122 = (state_10142[(11)]);
var inst_10120 = (state_10142[(8)]);
var inst_10120__$1 = (state_10142[(2)]);
var inst_10121 = (inst_10120__$1 == null);
var inst_10122__$1 = cljs.core.not.call(null,inst_10121);
var state_10142__$1 = (function (){var statearr_10161 = state_10142;
(statearr_10161[(11)] = inst_10122__$1);

(statearr_10161[(8)] = inst_10120__$1);

return statearr_10161;
})();
if(inst_10122__$1){
var statearr_10162_10224 = state_10142__$1;
(statearr_10162_10224[(1)] = (15));

} else {
var statearr_10163_10225 = state_10142__$1;
(statearr_10163_10225[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (16))){
var inst_10122 = (state_10142[(11)]);
var state_10142__$1 = state_10142;
var statearr_10164_10226 = state_10142__$1;
(statearr_10164_10226[(2)] = inst_10122);

(statearr_10164_10226[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (10))){
var inst_10114 = (state_10142[(2)]);
var state_10142__$1 = state_10142;
var statearr_10165_10227 = state_10142__$1;
(statearr_10165_10227[(2)] = inst_10114);

(statearr_10165_10227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (18))){
var inst_10125 = (state_10142[(2)]);
var state_10142__$1 = state_10142;
var statearr_10166_10228 = state_10142__$1;
(statearr_10166_10228[(2)] = inst_10125);

(statearr_10166_10228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10143 === (8))){
var inst_10111 = cljs.core.async.close_BANG_.call(null,to);
var state_10142__$1 = state_10142;
var statearr_10167_10229 = state_10142__$1;
(statearr_10167_10229[(2)] = inst_10111);

(statearr_10167_10229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto__,jobs,results,process,async))
;
return ((function (switch__9505__auto__,c__9617__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0 = (function (){
var statearr_10171 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__);

(statearr_10171[(1)] = (1));

return statearr_10171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1 = (function (state_10142){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10172){if((e10172 instanceof Object)){
var ex__9509__auto__ = e10172;
var statearr_10173_10230 = state_10142;
(statearr_10173_10230[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10231 = state_10142;
state_10142 = G__10231;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__ = function(state_10142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1.call(this,state_10142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto__,jobs,results,process,async))
})();
var state__9619__auto__ = (function (){var statearr_10174 = f__9618__auto__.call(null);
(statearr_10174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto__);

return statearr_10174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto__,jobs,results,process,async))
);

return c__9617__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10232 = [];
var len__7479__auto___10235 = arguments.length;
var i__7480__auto___10236 = (0);
while(true){
if((i__7480__auto___10236 < len__7479__auto___10235)){
args10232.push((arguments[i__7480__auto___10236]));

var G__10237 = (i__7480__auto___10236 + (1));
i__7480__auto___10236 = G__10237;
continue;
} else {
}
break;
}

var G__10234 = args10232.length;
switch (G__10234) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10232.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args10239 = [];
var len__7479__auto___10242 = arguments.length;
var i__7480__auto___10243 = (0);
while(true){
if((i__7480__auto___10243 < len__7479__auto___10242)){
args10239.push((arguments[i__7480__auto___10243]));

var G__10244 = (i__7480__auto___10243 + (1));
i__7480__auto___10243 = G__10244;
continue;
} else {
}
break;
}

var G__10241 = args10239.length;
switch (G__10241) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10239.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args10246 = [];
var len__7479__auto___10299 = arguments.length;
var i__7480__auto___10300 = (0);
while(true){
if((i__7480__auto___10300 < len__7479__auto___10299)){
args10246.push((arguments[i__7480__auto___10300]));

var G__10301 = (i__7480__auto___10300 + (1));
i__7480__auto___10300 = G__10301;
continue;
} else {
}
break;
}

var G__10248 = args10246.length;
switch (G__10248) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10246.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9617__auto___10303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___10303,tc,fc){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___10303,tc,fc){
return (function (state_10274){
var state_val_10275 = (state_10274[(1)]);
if((state_val_10275 === (7))){
var inst_10270 = (state_10274[(2)]);
var state_10274__$1 = state_10274;
var statearr_10276_10304 = state_10274__$1;
(statearr_10276_10304[(2)] = inst_10270);

(statearr_10276_10304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (1))){
var state_10274__$1 = state_10274;
var statearr_10277_10305 = state_10274__$1;
(statearr_10277_10305[(2)] = null);

(statearr_10277_10305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (4))){
var inst_10251 = (state_10274[(7)]);
var inst_10251__$1 = (state_10274[(2)]);
var inst_10252 = (inst_10251__$1 == null);
var state_10274__$1 = (function (){var statearr_10278 = state_10274;
(statearr_10278[(7)] = inst_10251__$1);

return statearr_10278;
})();
if(cljs.core.truth_(inst_10252)){
var statearr_10279_10306 = state_10274__$1;
(statearr_10279_10306[(1)] = (5));

} else {
var statearr_10280_10307 = state_10274__$1;
(statearr_10280_10307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (13))){
var state_10274__$1 = state_10274;
var statearr_10281_10308 = state_10274__$1;
(statearr_10281_10308[(2)] = null);

(statearr_10281_10308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (6))){
var inst_10251 = (state_10274[(7)]);
var inst_10257 = p.call(null,inst_10251);
var state_10274__$1 = state_10274;
if(cljs.core.truth_(inst_10257)){
var statearr_10282_10309 = state_10274__$1;
(statearr_10282_10309[(1)] = (9));

} else {
var statearr_10283_10310 = state_10274__$1;
(statearr_10283_10310[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (3))){
var inst_10272 = (state_10274[(2)]);
var state_10274__$1 = state_10274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10274__$1,inst_10272);
} else {
if((state_val_10275 === (12))){
var state_10274__$1 = state_10274;
var statearr_10284_10311 = state_10274__$1;
(statearr_10284_10311[(2)] = null);

(statearr_10284_10311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (2))){
var state_10274__$1 = state_10274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10274__$1,(4),ch);
} else {
if((state_val_10275 === (11))){
var inst_10251 = (state_10274[(7)]);
var inst_10261 = (state_10274[(2)]);
var state_10274__$1 = state_10274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10274__$1,(8),inst_10261,inst_10251);
} else {
if((state_val_10275 === (9))){
var state_10274__$1 = state_10274;
var statearr_10285_10312 = state_10274__$1;
(statearr_10285_10312[(2)] = tc);

(statearr_10285_10312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (5))){
var inst_10254 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10255 = cljs.core.async.close_BANG_.call(null,fc);
var state_10274__$1 = (function (){var statearr_10286 = state_10274;
(statearr_10286[(8)] = inst_10254);

return statearr_10286;
})();
var statearr_10287_10313 = state_10274__$1;
(statearr_10287_10313[(2)] = inst_10255);

(statearr_10287_10313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (14))){
var inst_10268 = (state_10274[(2)]);
var state_10274__$1 = state_10274;
var statearr_10288_10314 = state_10274__$1;
(statearr_10288_10314[(2)] = inst_10268);

(statearr_10288_10314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (10))){
var state_10274__$1 = state_10274;
var statearr_10289_10315 = state_10274__$1;
(statearr_10289_10315[(2)] = fc);

(statearr_10289_10315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10275 === (8))){
var inst_10263 = (state_10274[(2)]);
var state_10274__$1 = state_10274;
if(cljs.core.truth_(inst_10263)){
var statearr_10290_10316 = state_10274__$1;
(statearr_10290_10316[(1)] = (12));

} else {
var statearr_10291_10317 = state_10274__$1;
(statearr_10291_10317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___10303,tc,fc))
;
return ((function (switch__9505__auto__,c__9617__auto___10303,tc,fc){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_10295 = [null,null,null,null,null,null,null,null,null];
(statearr_10295[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_10295[(1)] = (1));

return statearr_10295;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_10274){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10296){if((e10296 instanceof Object)){
var ex__9509__auto__ = e10296;
var statearr_10297_10318 = state_10274;
(statearr_10297_10318[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10319 = state_10274;
state_10274 = G__10319;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_10274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_10274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___10303,tc,fc))
})();
var state__9619__auto__ = (function (){var statearr_10298 = f__9618__auto__.call(null);
(statearr_10298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___10303);

return statearr_10298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___10303,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9617__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto__){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto__){
return (function (state_10383){
var state_val_10384 = (state_10383[(1)]);
if((state_val_10384 === (7))){
var inst_10379 = (state_10383[(2)]);
var state_10383__$1 = state_10383;
var statearr_10385_10406 = state_10383__$1;
(statearr_10385_10406[(2)] = inst_10379);

(statearr_10385_10406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (1))){
var inst_10363 = init;
var state_10383__$1 = (function (){var statearr_10386 = state_10383;
(statearr_10386[(7)] = inst_10363);

return statearr_10386;
})();
var statearr_10387_10407 = state_10383__$1;
(statearr_10387_10407[(2)] = null);

(statearr_10387_10407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (4))){
var inst_10366 = (state_10383[(8)]);
var inst_10366__$1 = (state_10383[(2)]);
var inst_10367 = (inst_10366__$1 == null);
var state_10383__$1 = (function (){var statearr_10388 = state_10383;
(statearr_10388[(8)] = inst_10366__$1);

return statearr_10388;
})();
if(cljs.core.truth_(inst_10367)){
var statearr_10389_10408 = state_10383__$1;
(statearr_10389_10408[(1)] = (5));

} else {
var statearr_10390_10409 = state_10383__$1;
(statearr_10390_10409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (6))){
var inst_10370 = (state_10383[(9)]);
var inst_10363 = (state_10383[(7)]);
var inst_10366 = (state_10383[(8)]);
var inst_10370__$1 = f.call(null,inst_10363,inst_10366);
var inst_10371 = cljs.core.reduced_QMARK_.call(null,inst_10370__$1);
var state_10383__$1 = (function (){var statearr_10391 = state_10383;
(statearr_10391[(9)] = inst_10370__$1);

return statearr_10391;
})();
if(inst_10371){
var statearr_10392_10410 = state_10383__$1;
(statearr_10392_10410[(1)] = (8));

} else {
var statearr_10393_10411 = state_10383__$1;
(statearr_10393_10411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (3))){
var inst_10381 = (state_10383[(2)]);
var state_10383__$1 = state_10383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10383__$1,inst_10381);
} else {
if((state_val_10384 === (2))){
var state_10383__$1 = state_10383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10383__$1,(4),ch);
} else {
if((state_val_10384 === (9))){
var inst_10370 = (state_10383[(9)]);
var inst_10363 = inst_10370;
var state_10383__$1 = (function (){var statearr_10394 = state_10383;
(statearr_10394[(7)] = inst_10363);

return statearr_10394;
})();
var statearr_10395_10412 = state_10383__$1;
(statearr_10395_10412[(2)] = null);

(statearr_10395_10412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (5))){
var inst_10363 = (state_10383[(7)]);
var state_10383__$1 = state_10383;
var statearr_10396_10413 = state_10383__$1;
(statearr_10396_10413[(2)] = inst_10363);

(statearr_10396_10413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (10))){
var inst_10377 = (state_10383[(2)]);
var state_10383__$1 = state_10383;
var statearr_10397_10414 = state_10383__$1;
(statearr_10397_10414[(2)] = inst_10377);

(statearr_10397_10414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10384 === (8))){
var inst_10370 = (state_10383[(9)]);
var inst_10373 = cljs.core.deref.call(null,inst_10370);
var state_10383__$1 = state_10383;
var statearr_10398_10415 = state_10383__$1;
(statearr_10398_10415[(2)] = inst_10373);

(statearr_10398_10415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto__))
;
return ((function (switch__9505__auto__,c__9617__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9506__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9506__auto____0 = (function (){
var statearr_10402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10402[(0)] = cljs$core$async$reduce_$_state_machine__9506__auto__);

(statearr_10402[(1)] = (1));

return statearr_10402;
});
var cljs$core$async$reduce_$_state_machine__9506__auto____1 = (function (state_10383){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10403){if((e10403 instanceof Object)){
var ex__9509__auto__ = e10403;
var statearr_10404_10416 = state_10383;
(statearr_10404_10416[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10417 = state_10383;
state_10383 = G__10417;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9506__auto__ = function(state_10383){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9506__auto____1.call(this,state_10383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9506__auto____0;
cljs$core$async$reduce_$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9506__auto____1;
return cljs$core$async$reduce_$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto__))
})();
var state__9619__auto__ = (function (){var statearr_10405 = f__9618__auto__.call(null);
(statearr_10405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto__);

return statearr_10405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto__))
);

return c__9617__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10418 = [];
var len__7479__auto___10470 = arguments.length;
var i__7480__auto___10471 = (0);
while(true){
if((i__7480__auto___10471 < len__7479__auto___10470)){
args10418.push((arguments[i__7480__auto___10471]));

var G__10472 = (i__7480__auto___10471 + (1));
i__7480__auto___10471 = G__10472;
continue;
} else {
}
break;
}

var G__10420 = args10418.length;
switch (G__10420) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10418.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9617__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto__){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto__){
return (function (state_10445){
var state_val_10446 = (state_10445[(1)]);
if((state_val_10446 === (7))){
var inst_10427 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
var statearr_10447_10474 = state_10445__$1;
(statearr_10447_10474[(2)] = inst_10427);

(statearr_10447_10474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (1))){
var inst_10421 = cljs.core.seq.call(null,coll);
var inst_10422 = inst_10421;
var state_10445__$1 = (function (){var statearr_10448 = state_10445;
(statearr_10448[(7)] = inst_10422);

return statearr_10448;
})();
var statearr_10449_10475 = state_10445__$1;
(statearr_10449_10475[(2)] = null);

(statearr_10449_10475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (4))){
var inst_10422 = (state_10445[(7)]);
var inst_10425 = cljs.core.first.call(null,inst_10422);
var state_10445__$1 = state_10445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10445__$1,(7),ch,inst_10425);
} else {
if((state_val_10446 === (13))){
var inst_10439 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
var statearr_10450_10476 = state_10445__$1;
(statearr_10450_10476[(2)] = inst_10439);

(statearr_10450_10476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (6))){
var inst_10430 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
if(cljs.core.truth_(inst_10430)){
var statearr_10451_10477 = state_10445__$1;
(statearr_10451_10477[(1)] = (8));

} else {
var statearr_10452_10478 = state_10445__$1;
(statearr_10452_10478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (3))){
var inst_10443 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10445__$1,inst_10443);
} else {
if((state_val_10446 === (12))){
var state_10445__$1 = state_10445;
var statearr_10453_10479 = state_10445__$1;
(statearr_10453_10479[(2)] = null);

(statearr_10453_10479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (2))){
var inst_10422 = (state_10445[(7)]);
var state_10445__$1 = state_10445;
if(cljs.core.truth_(inst_10422)){
var statearr_10454_10480 = state_10445__$1;
(statearr_10454_10480[(1)] = (4));

} else {
var statearr_10455_10481 = state_10445__$1;
(statearr_10455_10481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (11))){
var inst_10436 = cljs.core.async.close_BANG_.call(null,ch);
var state_10445__$1 = state_10445;
var statearr_10456_10482 = state_10445__$1;
(statearr_10456_10482[(2)] = inst_10436);

(statearr_10456_10482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (9))){
var state_10445__$1 = state_10445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10457_10483 = state_10445__$1;
(statearr_10457_10483[(1)] = (11));

} else {
var statearr_10458_10484 = state_10445__$1;
(statearr_10458_10484[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (5))){
var inst_10422 = (state_10445[(7)]);
var state_10445__$1 = state_10445;
var statearr_10459_10485 = state_10445__$1;
(statearr_10459_10485[(2)] = inst_10422);

(statearr_10459_10485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (10))){
var inst_10441 = (state_10445[(2)]);
var state_10445__$1 = state_10445;
var statearr_10460_10486 = state_10445__$1;
(statearr_10460_10486[(2)] = inst_10441);

(statearr_10460_10486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10446 === (8))){
var inst_10422 = (state_10445[(7)]);
var inst_10432 = cljs.core.next.call(null,inst_10422);
var inst_10422__$1 = inst_10432;
var state_10445__$1 = (function (){var statearr_10461 = state_10445;
(statearr_10461[(7)] = inst_10422__$1);

return statearr_10461;
})();
var statearr_10462_10487 = state_10445__$1;
(statearr_10462_10487[(2)] = null);

(statearr_10462_10487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto__))
;
return ((function (switch__9505__auto__,c__9617__auto__){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_10466 = [null,null,null,null,null,null,null,null];
(statearr_10466[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_10466[(1)] = (1));

return statearr_10466;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_10445){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10467){if((e10467 instanceof Object)){
var ex__9509__auto__ = e10467;
var statearr_10468_10488 = state_10445;
(statearr_10468_10488[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10489 = state_10445;
state_10445 = G__10489;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_10445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_10445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto__))
})();
var state__9619__auto__ = (function (){var statearr_10469 = f__9618__auto__.call(null);
(statearr_10469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto__);

return statearr_10469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto__))
);

return c__9617__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7067__auto__ = (((_ == null))?null:_);
var m__7068__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,_);
} else {
var m__7068__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7068__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m);
} else {
var m__7068__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10715 = (function (mult,ch,cs,meta10716){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10716 = meta10716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10717,meta10716__$1){
var self__ = this;
var _10717__$1 = this;
return (new cljs.core.async.t_cljs$core$async10715(self__.mult,self__.ch,self__.cs,meta10716__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10717){
var self__ = this;
var _10717__$1 = this;
return self__.meta10716;
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10716","meta10716",27497546,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10715";

cljs.core.async.t_cljs$core$async10715.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async10715");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10715 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10715(mult__$1,ch__$1,cs__$1,meta10716){
return (new cljs.core.async.t_cljs$core$async10715(mult__$1,ch__$1,cs__$1,meta10716));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10715(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9617__auto___10940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___10940,cs,m,dchan,dctr,done){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___10940,cs,m,dchan,dctr,done){
return (function (state_10852){
var state_val_10853 = (state_10852[(1)]);
if((state_val_10853 === (7))){
var inst_10848 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10854_10941 = state_10852__$1;
(statearr_10854_10941[(2)] = inst_10848);

(statearr_10854_10941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (20))){
var inst_10751 = (state_10852[(7)]);
var inst_10763 = cljs.core.first.call(null,inst_10751);
var inst_10764 = cljs.core.nth.call(null,inst_10763,(0),null);
var inst_10765 = cljs.core.nth.call(null,inst_10763,(1),null);
var state_10852__$1 = (function (){var statearr_10855 = state_10852;
(statearr_10855[(8)] = inst_10764);

return statearr_10855;
})();
if(cljs.core.truth_(inst_10765)){
var statearr_10856_10942 = state_10852__$1;
(statearr_10856_10942[(1)] = (22));

} else {
var statearr_10857_10943 = state_10852__$1;
(statearr_10857_10943[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (27))){
var inst_10793 = (state_10852[(9)]);
var inst_10720 = (state_10852[(10)]);
var inst_10800 = (state_10852[(11)]);
var inst_10795 = (state_10852[(12)]);
var inst_10800__$1 = cljs.core._nth.call(null,inst_10793,inst_10795);
var inst_10801 = cljs.core.async.put_BANG_.call(null,inst_10800__$1,inst_10720,done);
var state_10852__$1 = (function (){var statearr_10858 = state_10852;
(statearr_10858[(11)] = inst_10800__$1);

return statearr_10858;
})();
if(cljs.core.truth_(inst_10801)){
var statearr_10859_10944 = state_10852__$1;
(statearr_10859_10944[(1)] = (30));

} else {
var statearr_10860_10945 = state_10852__$1;
(statearr_10860_10945[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (1))){
var state_10852__$1 = state_10852;
var statearr_10861_10946 = state_10852__$1;
(statearr_10861_10946[(2)] = null);

(statearr_10861_10946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (24))){
var inst_10751 = (state_10852[(7)]);
var inst_10770 = (state_10852[(2)]);
var inst_10771 = cljs.core.next.call(null,inst_10751);
var inst_10729 = inst_10771;
var inst_10730 = null;
var inst_10731 = (0);
var inst_10732 = (0);
var state_10852__$1 = (function (){var statearr_10862 = state_10852;
(statearr_10862[(13)] = inst_10731);

(statearr_10862[(14)] = inst_10730);

(statearr_10862[(15)] = inst_10732);

(statearr_10862[(16)] = inst_10770);

(statearr_10862[(17)] = inst_10729);

return statearr_10862;
})();
var statearr_10863_10947 = state_10852__$1;
(statearr_10863_10947[(2)] = null);

(statearr_10863_10947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (39))){
var state_10852__$1 = state_10852;
var statearr_10867_10948 = state_10852__$1;
(statearr_10867_10948[(2)] = null);

(statearr_10867_10948[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (4))){
var inst_10720 = (state_10852[(10)]);
var inst_10720__$1 = (state_10852[(2)]);
var inst_10721 = (inst_10720__$1 == null);
var state_10852__$1 = (function (){var statearr_10868 = state_10852;
(statearr_10868[(10)] = inst_10720__$1);

return statearr_10868;
})();
if(cljs.core.truth_(inst_10721)){
var statearr_10869_10949 = state_10852__$1;
(statearr_10869_10949[(1)] = (5));

} else {
var statearr_10870_10950 = state_10852__$1;
(statearr_10870_10950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (15))){
var inst_10731 = (state_10852[(13)]);
var inst_10730 = (state_10852[(14)]);
var inst_10732 = (state_10852[(15)]);
var inst_10729 = (state_10852[(17)]);
var inst_10747 = (state_10852[(2)]);
var inst_10748 = (inst_10732 + (1));
var tmp10864 = inst_10731;
var tmp10865 = inst_10730;
var tmp10866 = inst_10729;
var inst_10729__$1 = tmp10866;
var inst_10730__$1 = tmp10865;
var inst_10731__$1 = tmp10864;
var inst_10732__$1 = inst_10748;
var state_10852__$1 = (function (){var statearr_10871 = state_10852;
(statearr_10871[(18)] = inst_10747);

(statearr_10871[(13)] = inst_10731__$1);

(statearr_10871[(14)] = inst_10730__$1);

(statearr_10871[(15)] = inst_10732__$1);

(statearr_10871[(17)] = inst_10729__$1);

return statearr_10871;
})();
var statearr_10872_10951 = state_10852__$1;
(statearr_10872_10951[(2)] = null);

(statearr_10872_10951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (21))){
var inst_10774 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10876_10952 = state_10852__$1;
(statearr_10876_10952[(2)] = inst_10774);

(statearr_10876_10952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (31))){
var inst_10800 = (state_10852[(11)]);
var inst_10804 = done.call(null,null);
var inst_10805 = cljs.core.async.untap_STAR_.call(null,m,inst_10800);
var state_10852__$1 = (function (){var statearr_10877 = state_10852;
(statearr_10877[(19)] = inst_10804);

return statearr_10877;
})();
var statearr_10878_10953 = state_10852__$1;
(statearr_10878_10953[(2)] = inst_10805);

(statearr_10878_10953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (32))){
var inst_10793 = (state_10852[(9)]);
var inst_10792 = (state_10852[(20)]);
var inst_10795 = (state_10852[(12)]);
var inst_10794 = (state_10852[(21)]);
var inst_10807 = (state_10852[(2)]);
var inst_10808 = (inst_10795 + (1));
var tmp10873 = inst_10793;
var tmp10874 = inst_10792;
var tmp10875 = inst_10794;
var inst_10792__$1 = tmp10874;
var inst_10793__$1 = tmp10873;
var inst_10794__$1 = tmp10875;
var inst_10795__$1 = inst_10808;
var state_10852__$1 = (function (){var statearr_10879 = state_10852;
(statearr_10879[(9)] = inst_10793__$1);

(statearr_10879[(22)] = inst_10807);

(statearr_10879[(20)] = inst_10792__$1);

(statearr_10879[(12)] = inst_10795__$1);

(statearr_10879[(21)] = inst_10794__$1);

return statearr_10879;
})();
var statearr_10880_10954 = state_10852__$1;
(statearr_10880_10954[(2)] = null);

(statearr_10880_10954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (40))){
var inst_10820 = (state_10852[(23)]);
var inst_10824 = done.call(null,null);
var inst_10825 = cljs.core.async.untap_STAR_.call(null,m,inst_10820);
var state_10852__$1 = (function (){var statearr_10881 = state_10852;
(statearr_10881[(24)] = inst_10824);

return statearr_10881;
})();
var statearr_10882_10955 = state_10852__$1;
(statearr_10882_10955[(2)] = inst_10825);

(statearr_10882_10955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (33))){
var inst_10811 = (state_10852[(25)]);
var inst_10813 = cljs.core.chunked_seq_QMARK_.call(null,inst_10811);
var state_10852__$1 = state_10852;
if(inst_10813){
var statearr_10883_10956 = state_10852__$1;
(statearr_10883_10956[(1)] = (36));

} else {
var statearr_10884_10957 = state_10852__$1;
(statearr_10884_10957[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (13))){
var inst_10741 = (state_10852[(26)]);
var inst_10744 = cljs.core.async.close_BANG_.call(null,inst_10741);
var state_10852__$1 = state_10852;
var statearr_10885_10958 = state_10852__$1;
(statearr_10885_10958[(2)] = inst_10744);

(statearr_10885_10958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (22))){
var inst_10764 = (state_10852[(8)]);
var inst_10767 = cljs.core.async.close_BANG_.call(null,inst_10764);
var state_10852__$1 = state_10852;
var statearr_10886_10959 = state_10852__$1;
(statearr_10886_10959[(2)] = inst_10767);

(statearr_10886_10959[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (36))){
var inst_10811 = (state_10852[(25)]);
var inst_10815 = cljs.core.chunk_first.call(null,inst_10811);
var inst_10816 = cljs.core.chunk_rest.call(null,inst_10811);
var inst_10817 = cljs.core.count.call(null,inst_10815);
var inst_10792 = inst_10816;
var inst_10793 = inst_10815;
var inst_10794 = inst_10817;
var inst_10795 = (0);
var state_10852__$1 = (function (){var statearr_10887 = state_10852;
(statearr_10887[(9)] = inst_10793);

(statearr_10887[(20)] = inst_10792);

(statearr_10887[(12)] = inst_10795);

(statearr_10887[(21)] = inst_10794);

return statearr_10887;
})();
var statearr_10888_10960 = state_10852__$1;
(statearr_10888_10960[(2)] = null);

(statearr_10888_10960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (41))){
var inst_10811 = (state_10852[(25)]);
var inst_10827 = (state_10852[(2)]);
var inst_10828 = cljs.core.next.call(null,inst_10811);
var inst_10792 = inst_10828;
var inst_10793 = null;
var inst_10794 = (0);
var inst_10795 = (0);
var state_10852__$1 = (function (){var statearr_10889 = state_10852;
(statearr_10889[(9)] = inst_10793);

(statearr_10889[(27)] = inst_10827);

(statearr_10889[(20)] = inst_10792);

(statearr_10889[(12)] = inst_10795);

(statearr_10889[(21)] = inst_10794);

return statearr_10889;
})();
var statearr_10890_10961 = state_10852__$1;
(statearr_10890_10961[(2)] = null);

(statearr_10890_10961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (43))){
var state_10852__$1 = state_10852;
var statearr_10891_10962 = state_10852__$1;
(statearr_10891_10962[(2)] = null);

(statearr_10891_10962[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (29))){
var inst_10836 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10892_10963 = state_10852__$1;
(statearr_10892_10963[(2)] = inst_10836);

(statearr_10892_10963[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (44))){
var inst_10845 = (state_10852[(2)]);
var state_10852__$1 = (function (){var statearr_10893 = state_10852;
(statearr_10893[(28)] = inst_10845);

return statearr_10893;
})();
var statearr_10894_10964 = state_10852__$1;
(statearr_10894_10964[(2)] = null);

(statearr_10894_10964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (6))){
var inst_10784 = (state_10852[(29)]);
var inst_10783 = cljs.core.deref.call(null,cs);
var inst_10784__$1 = cljs.core.keys.call(null,inst_10783);
var inst_10785 = cljs.core.count.call(null,inst_10784__$1);
var inst_10786 = cljs.core.reset_BANG_.call(null,dctr,inst_10785);
var inst_10791 = cljs.core.seq.call(null,inst_10784__$1);
var inst_10792 = inst_10791;
var inst_10793 = null;
var inst_10794 = (0);
var inst_10795 = (0);
var state_10852__$1 = (function (){var statearr_10895 = state_10852;
(statearr_10895[(9)] = inst_10793);

(statearr_10895[(30)] = inst_10786);

(statearr_10895[(20)] = inst_10792);

(statearr_10895[(29)] = inst_10784__$1);

(statearr_10895[(12)] = inst_10795);

(statearr_10895[(21)] = inst_10794);

return statearr_10895;
})();
var statearr_10896_10965 = state_10852__$1;
(statearr_10896_10965[(2)] = null);

(statearr_10896_10965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (28))){
var inst_10792 = (state_10852[(20)]);
var inst_10811 = (state_10852[(25)]);
var inst_10811__$1 = cljs.core.seq.call(null,inst_10792);
var state_10852__$1 = (function (){var statearr_10897 = state_10852;
(statearr_10897[(25)] = inst_10811__$1);

return statearr_10897;
})();
if(inst_10811__$1){
var statearr_10898_10966 = state_10852__$1;
(statearr_10898_10966[(1)] = (33));

} else {
var statearr_10899_10967 = state_10852__$1;
(statearr_10899_10967[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (25))){
var inst_10795 = (state_10852[(12)]);
var inst_10794 = (state_10852[(21)]);
var inst_10797 = (inst_10795 < inst_10794);
var inst_10798 = inst_10797;
var state_10852__$1 = state_10852;
if(cljs.core.truth_(inst_10798)){
var statearr_10900_10968 = state_10852__$1;
(statearr_10900_10968[(1)] = (27));

} else {
var statearr_10901_10969 = state_10852__$1;
(statearr_10901_10969[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (34))){
var state_10852__$1 = state_10852;
var statearr_10902_10970 = state_10852__$1;
(statearr_10902_10970[(2)] = null);

(statearr_10902_10970[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (17))){
var state_10852__$1 = state_10852;
var statearr_10903_10971 = state_10852__$1;
(statearr_10903_10971[(2)] = null);

(statearr_10903_10971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (3))){
var inst_10850 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10852__$1,inst_10850);
} else {
if((state_val_10853 === (12))){
var inst_10779 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10904_10972 = state_10852__$1;
(statearr_10904_10972[(2)] = inst_10779);

(statearr_10904_10972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (2))){
var state_10852__$1 = state_10852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10852__$1,(4),ch);
} else {
if((state_val_10853 === (23))){
var state_10852__$1 = state_10852;
var statearr_10905_10973 = state_10852__$1;
(statearr_10905_10973[(2)] = null);

(statearr_10905_10973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (35))){
var inst_10834 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10906_10974 = state_10852__$1;
(statearr_10906_10974[(2)] = inst_10834);

(statearr_10906_10974[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (19))){
var inst_10751 = (state_10852[(7)]);
var inst_10755 = cljs.core.chunk_first.call(null,inst_10751);
var inst_10756 = cljs.core.chunk_rest.call(null,inst_10751);
var inst_10757 = cljs.core.count.call(null,inst_10755);
var inst_10729 = inst_10756;
var inst_10730 = inst_10755;
var inst_10731 = inst_10757;
var inst_10732 = (0);
var state_10852__$1 = (function (){var statearr_10907 = state_10852;
(statearr_10907[(13)] = inst_10731);

(statearr_10907[(14)] = inst_10730);

(statearr_10907[(15)] = inst_10732);

(statearr_10907[(17)] = inst_10729);

return statearr_10907;
})();
var statearr_10908_10975 = state_10852__$1;
(statearr_10908_10975[(2)] = null);

(statearr_10908_10975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (11))){
var inst_10751 = (state_10852[(7)]);
var inst_10729 = (state_10852[(17)]);
var inst_10751__$1 = cljs.core.seq.call(null,inst_10729);
var state_10852__$1 = (function (){var statearr_10909 = state_10852;
(statearr_10909[(7)] = inst_10751__$1);

return statearr_10909;
})();
if(inst_10751__$1){
var statearr_10910_10976 = state_10852__$1;
(statearr_10910_10976[(1)] = (16));

} else {
var statearr_10911_10977 = state_10852__$1;
(statearr_10911_10977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (9))){
var inst_10781 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10912_10978 = state_10852__$1;
(statearr_10912_10978[(2)] = inst_10781);

(statearr_10912_10978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (5))){
var inst_10727 = cljs.core.deref.call(null,cs);
var inst_10728 = cljs.core.seq.call(null,inst_10727);
var inst_10729 = inst_10728;
var inst_10730 = null;
var inst_10731 = (0);
var inst_10732 = (0);
var state_10852__$1 = (function (){var statearr_10913 = state_10852;
(statearr_10913[(13)] = inst_10731);

(statearr_10913[(14)] = inst_10730);

(statearr_10913[(15)] = inst_10732);

(statearr_10913[(17)] = inst_10729);

return statearr_10913;
})();
var statearr_10914_10979 = state_10852__$1;
(statearr_10914_10979[(2)] = null);

(statearr_10914_10979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (14))){
var state_10852__$1 = state_10852;
var statearr_10915_10980 = state_10852__$1;
(statearr_10915_10980[(2)] = null);

(statearr_10915_10980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (45))){
var inst_10842 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10916_10981 = state_10852__$1;
(statearr_10916_10981[(2)] = inst_10842);

(statearr_10916_10981[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (26))){
var inst_10784 = (state_10852[(29)]);
var inst_10838 = (state_10852[(2)]);
var inst_10839 = cljs.core.seq.call(null,inst_10784);
var state_10852__$1 = (function (){var statearr_10917 = state_10852;
(statearr_10917[(31)] = inst_10838);

return statearr_10917;
})();
if(inst_10839){
var statearr_10918_10982 = state_10852__$1;
(statearr_10918_10982[(1)] = (42));

} else {
var statearr_10919_10983 = state_10852__$1;
(statearr_10919_10983[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (16))){
var inst_10751 = (state_10852[(7)]);
var inst_10753 = cljs.core.chunked_seq_QMARK_.call(null,inst_10751);
var state_10852__$1 = state_10852;
if(inst_10753){
var statearr_10920_10984 = state_10852__$1;
(statearr_10920_10984[(1)] = (19));

} else {
var statearr_10921_10985 = state_10852__$1;
(statearr_10921_10985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (38))){
var inst_10831 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10922_10986 = state_10852__$1;
(statearr_10922_10986[(2)] = inst_10831);

(statearr_10922_10986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (30))){
var state_10852__$1 = state_10852;
var statearr_10923_10987 = state_10852__$1;
(statearr_10923_10987[(2)] = null);

(statearr_10923_10987[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (10))){
var inst_10730 = (state_10852[(14)]);
var inst_10732 = (state_10852[(15)]);
var inst_10740 = cljs.core._nth.call(null,inst_10730,inst_10732);
var inst_10741 = cljs.core.nth.call(null,inst_10740,(0),null);
var inst_10742 = cljs.core.nth.call(null,inst_10740,(1),null);
var state_10852__$1 = (function (){var statearr_10924 = state_10852;
(statearr_10924[(26)] = inst_10741);

return statearr_10924;
})();
if(cljs.core.truth_(inst_10742)){
var statearr_10925_10988 = state_10852__$1;
(statearr_10925_10988[(1)] = (13));

} else {
var statearr_10926_10989 = state_10852__$1;
(statearr_10926_10989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (18))){
var inst_10777 = (state_10852[(2)]);
var state_10852__$1 = state_10852;
var statearr_10927_10990 = state_10852__$1;
(statearr_10927_10990[(2)] = inst_10777);

(statearr_10927_10990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (42))){
var state_10852__$1 = state_10852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10852__$1,(45),dchan);
} else {
if((state_val_10853 === (37))){
var inst_10720 = (state_10852[(10)]);
var inst_10820 = (state_10852[(23)]);
var inst_10811 = (state_10852[(25)]);
var inst_10820__$1 = cljs.core.first.call(null,inst_10811);
var inst_10821 = cljs.core.async.put_BANG_.call(null,inst_10820__$1,inst_10720,done);
var state_10852__$1 = (function (){var statearr_10928 = state_10852;
(statearr_10928[(23)] = inst_10820__$1);

return statearr_10928;
})();
if(cljs.core.truth_(inst_10821)){
var statearr_10929_10991 = state_10852__$1;
(statearr_10929_10991[(1)] = (39));

} else {
var statearr_10930_10992 = state_10852__$1;
(statearr_10930_10992[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10853 === (8))){
var inst_10731 = (state_10852[(13)]);
var inst_10732 = (state_10852[(15)]);
var inst_10734 = (inst_10732 < inst_10731);
var inst_10735 = inst_10734;
var state_10852__$1 = state_10852;
if(cljs.core.truth_(inst_10735)){
var statearr_10931_10993 = state_10852__$1;
(statearr_10931_10993[(1)] = (10));

} else {
var statearr_10932_10994 = state_10852__$1;
(statearr_10932_10994[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___10940,cs,m,dchan,dctr,done))
;
return ((function (switch__9505__auto__,c__9617__auto___10940,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9506__auto__ = null;
var cljs$core$async$mult_$_state_machine__9506__auto____0 = (function (){
var statearr_10936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10936[(0)] = cljs$core$async$mult_$_state_machine__9506__auto__);

(statearr_10936[(1)] = (1));

return statearr_10936;
});
var cljs$core$async$mult_$_state_machine__9506__auto____1 = (function (state_10852){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_10852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e10937){if((e10937 instanceof Object)){
var ex__9509__auto__ = e10937;
var statearr_10938_10995 = state_10852;
(statearr_10938_10995[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10996 = state_10852;
state_10852 = G__10996;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9506__auto__ = function(state_10852){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9506__auto____1.call(this,state_10852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9506__auto____0;
cljs$core$async$mult_$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9506__auto____1;
return cljs$core$async$mult_$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___10940,cs,m,dchan,dctr,done))
})();
var state__9619__auto__ = (function (){var statearr_10939 = f__9618__auto__.call(null);
(statearr_10939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___10940);

return statearr_10939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___10940,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10997 = [];
var len__7479__auto___11000 = arguments.length;
var i__7480__auto___11001 = (0);
while(true){
if((i__7480__auto___11001 < len__7479__auto___11000)){
args10997.push((arguments[i__7480__auto___11001]));

var G__11002 = (i__7480__auto___11001 + (1));
i__7480__auto___11001 = G__11002;
continue;
} else {
}
break;
}

var G__10999 = args10997.length;
switch (G__10999) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10997.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m);
} else {
var m__7068__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,state_map);
} else {
var m__7068__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,mode);
} else {
var m__7068__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___11014 = arguments.length;
var i__7480__auto___11015 = (0);
while(true){
if((i__7480__auto___11015 < len__7479__auto___11014)){
args__7486__auto__.push((arguments[i__7480__auto___11015]));

var G__11016 = (i__7480__auto___11015 + (1));
i__7480__auto___11015 = G__11016;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11008){
var map__11009 = p__11008;
var map__11009__$1 = ((((!((map__11009 == null)))?((((map__11009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11009):map__11009);
var opts = map__11009__$1;
var statearr_11011_11017 = state;
(statearr_11011_11017[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11009,map__11009__$1,opts){
return (function (val){
var statearr_11012_11018 = state;
(statearr_11012_11018[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11009,map__11009__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11013_11019 = state;
(statearr_11013_11019[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11004){
var G__11005 = cljs.core.first.call(null,seq11004);
var seq11004__$1 = cljs.core.next.call(null,seq11004);
var G__11006 = cljs.core.first.call(null,seq11004__$1);
var seq11004__$2 = cljs.core.next.call(null,seq11004__$1);
var G__11007 = cljs.core.first.call(null,seq11004__$2);
var seq11004__$3 = cljs.core.next.call(null,seq11004__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11005,G__11006,G__11007,seq11004__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11185 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11186){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11186 = meta11186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11187,meta11186__$1){
var self__ = this;
var _11187__$1 = this;
return (new cljs.core.async.t_cljs$core$async11185(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11186__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11187){
var self__ = this;
var _11187__$1 = this;
return self__.meta11186;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11186","meta11186",-934224895,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11185";

cljs.core.async.t_cljs$core$async11185.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async11185");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11185 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11185(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11186){
return (new cljs.core.async.t_cljs$core$async11185(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11186));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11185(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9617__auto___11350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___11350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___11350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11287){
var state_val_11288 = (state_11287[(1)]);
if((state_val_11288 === (7))){
var inst_11203 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11289_11351 = state_11287__$1;
(statearr_11289_11351[(2)] = inst_11203);

(statearr_11289_11351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (20))){
var inst_11215 = (state_11287[(7)]);
var state_11287__$1 = state_11287;
var statearr_11290_11352 = state_11287__$1;
(statearr_11290_11352[(2)] = inst_11215);

(statearr_11290_11352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (27))){
var state_11287__$1 = state_11287;
var statearr_11291_11353 = state_11287__$1;
(statearr_11291_11353[(2)] = null);

(statearr_11291_11353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (1))){
var inst_11191 = (state_11287[(8)]);
var inst_11191__$1 = calc_state.call(null);
var inst_11193 = (inst_11191__$1 == null);
var inst_11194 = cljs.core.not.call(null,inst_11193);
var state_11287__$1 = (function (){var statearr_11292 = state_11287;
(statearr_11292[(8)] = inst_11191__$1);

return statearr_11292;
})();
if(inst_11194){
var statearr_11293_11354 = state_11287__$1;
(statearr_11293_11354[(1)] = (2));

} else {
var statearr_11294_11355 = state_11287__$1;
(statearr_11294_11355[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (24))){
var inst_11247 = (state_11287[(9)]);
var inst_11261 = (state_11287[(10)]);
var inst_11238 = (state_11287[(11)]);
var inst_11261__$1 = inst_11238.call(null,inst_11247);
var state_11287__$1 = (function (){var statearr_11295 = state_11287;
(statearr_11295[(10)] = inst_11261__$1);

return statearr_11295;
})();
if(cljs.core.truth_(inst_11261__$1)){
var statearr_11296_11356 = state_11287__$1;
(statearr_11296_11356[(1)] = (29));

} else {
var statearr_11297_11357 = state_11287__$1;
(statearr_11297_11357[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (4))){
var inst_11206 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11206)){
var statearr_11298_11358 = state_11287__$1;
(statearr_11298_11358[(1)] = (8));

} else {
var statearr_11299_11359 = state_11287__$1;
(statearr_11299_11359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (15))){
var inst_11232 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11232)){
var statearr_11300_11360 = state_11287__$1;
(statearr_11300_11360[(1)] = (19));

} else {
var statearr_11301_11361 = state_11287__$1;
(statearr_11301_11361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (21))){
var inst_11237 = (state_11287[(12)]);
var inst_11237__$1 = (state_11287[(2)]);
var inst_11238 = cljs.core.get.call(null,inst_11237__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11239 = cljs.core.get.call(null,inst_11237__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11240 = cljs.core.get.call(null,inst_11237__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11287__$1 = (function (){var statearr_11302 = state_11287;
(statearr_11302[(13)] = inst_11239);

(statearr_11302[(11)] = inst_11238);

(statearr_11302[(12)] = inst_11237__$1);

return statearr_11302;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11287__$1,(22),inst_11240);
} else {
if((state_val_11288 === (31))){
var inst_11269 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11269)){
var statearr_11303_11362 = state_11287__$1;
(statearr_11303_11362[(1)] = (32));

} else {
var statearr_11304_11363 = state_11287__$1;
(statearr_11304_11363[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (32))){
var inst_11246 = (state_11287[(14)]);
var state_11287__$1 = state_11287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11287__$1,(35),out,inst_11246);
} else {
if((state_val_11288 === (33))){
var inst_11237 = (state_11287[(12)]);
var inst_11215 = inst_11237;
var state_11287__$1 = (function (){var statearr_11305 = state_11287;
(statearr_11305[(7)] = inst_11215);

return statearr_11305;
})();
var statearr_11306_11364 = state_11287__$1;
(statearr_11306_11364[(2)] = null);

(statearr_11306_11364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (13))){
var inst_11215 = (state_11287[(7)]);
var inst_11222 = inst_11215.cljs$lang$protocol_mask$partition0$;
var inst_11223 = (inst_11222 & (64));
var inst_11224 = inst_11215.cljs$core$ISeq$;
var inst_11225 = (inst_11223) || (inst_11224);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11225)){
var statearr_11307_11365 = state_11287__$1;
(statearr_11307_11365[(1)] = (16));

} else {
var statearr_11308_11366 = state_11287__$1;
(statearr_11308_11366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (22))){
var inst_11247 = (state_11287[(9)]);
var inst_11246 = (state_11287[(14)]);
var inst_11245 = (state_11287[(2)]);
var inst_11246__$1 = cljs.core.nth.call(null,inst_11245,(0),null);
var inst_11247__$1 = cljs.core.nth.call(null,inst_11245,(1),null);
var inst_11248 = (inst_11246__$1 == null);
var inst_11249 = cljs.core._EQ_.call(null,inst_11247__$1,change);
var inst_11250 = (inst_11248) || (inst_11249);
var state_11287__$1 = (function (){var statearr_11309 = state_11287;
(statearr_11309[(9)] = inst_11247__$1);

(statearr_11309[(14)] = inst_11246__$1);

return statearr_11309;
})();
if(cljs.core.truth_(inst_11250)){
var statearr_11310_11367 = state_11287__$1;
(statearr_11310_11367[(1)] = (23));

} else {
var statearr_11311_11368 = state_11287__$1;
(statearr_11311_11368[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (36))){
var inst_11237 = (state_11287[(12)]);
var inst_11215 = inst_11237;
var state_11287__$1 = (function (){var statearr_11312 = state_11287;
(statearr_11312[(7)] = inst_11215);

return statearr_11312;
})();
var statearr_11313_11369 = state_11287__$1;
(statearr_11313_11369[(2)] = null);

(statearr_11313_11369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (29))){
var inst_11261 = (state_11287[(10)]);
var state_11287__$1 = state_11287;
var statearr_11314_11370 = state_11287__$1;
(statearr_11314_11370[(2)] = inst_11261);

(statearr_11314_11370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (6))){
var state_11287__$1 = state_11287;
var statearr_11315_11371 = state_11287__$1;
(statearr_11315_11371[(2)] = false);

(statearr_11315_11371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (28))){
var inst_11257 = (state_11287[(2)]);
var inst_11258 = calc_state.call(null);
var inst_11215 = inst_11258;
var state_11287__$1 = (function (){var statearr_11316 = state_11287;
(statearr_11316[(7)] = inst_11215);

(statearr_11316[(15)] = inst_11257);

return statearr_11316;
})();
var statearr_11317_11372 = state_11287__$1;
(statearr_11317_11372[(2)] = null);

(statearr_11317_11372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (25))){
var inst_11283 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11318_11373 = state_11287__$1;
(statearr_11318_11373[(2)] = inst_11283);

(statearr_11318_11373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (34))){
var inst_11281 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11319_11374 = state_11287__$1;
(statearr_11319_11374[(2)] = inst_11281);

(statearr_11319_11374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (17))){
var state_11287__$1 = state_11287;
var statearr_11320_11375 = state_11287__$1;
(statearr_11320_11375[(2)] = false);

(statearr_11320_11375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (3))){
var state_11287__$1 = state_11287;
var statearr_11321_11376 = state_11287__$1;
(statearr_11321_11376[(2)] = false);

(statearr_11321_11376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (12))){
var inst_11285 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11287__$1,inst_11285);
} else {
if((state_val_11288 === (2))){
var inst_11191 = (state_11287[(8)]);
var inst_11196 = inst_11191.cljs$lang$protocol_mask$partition0$;
var inst_11197 = (inst_11196 & (64));
var inst_11198 = inst_11191.cljs$core$ISeq$;
var inst_11199 = (inst_11197) || (inst_11198);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11199)){
var statearr_11322_11377 = state_11287__$1;
(statearr_11322_11377[(1)] = (5));

} else {
var statearr_11323_11378 = state_11287__$1;
(statearr_11323_11378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (23))){
var inst_11246 = (state_11287[(14)]);
var inst_11252 = (inst_11246 == null);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11252)){
var statearr_11324_11379 = state_11287__$1;
(statearr_11324_11379[(1)] = (26));

} else {
var statearr_11325_11380 = state_11287__$1;
(statearr_11325_11380[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (35))){
var inst_11272 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11272)){
var statearr_11326_11381 = state_11287__$1;
(statearr_11326_11381[(1)] = (36));

} else {
var statearr_11327_11382 = state_11287__$1;
(statearr_11327_11382[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (19))){
var inst_11215 = (state_11287[(7)]);
var inst_11234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11215);
var state_11287__$1 = state_11287;
var statearr_11328_11383 = state_11287__$1;
(statearr_11328_11383[(2)] = inst_11234);

(statearr_11328_11383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (11))){
var inst_11215 = (state_11287[(7)]);
var inst_11219 = (inst_11215 == null);
var inst_11220 = cljs.core.not.call(null,inst_11219);
var state_11287__$1 = state_11287;
if(inst_11220){
var statearr_11329_11384 = state_11287__$1;
(statearr_11329_11384[(1)] = (13));

} else {
var statearr_11330_11385 = state_11287__$1;
(statearr_11330_11385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (9))){
var inst_11191 = (state_11287[(8)]);
var state_11287__$1 = state_11287;
var statearr_11331_11386 = state_11287__$1;
(statearr_11331_11386[(2)] = inst_11191);

(statearr_11331_11386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (5))){
var state_11287__$1 = state_11287;
var statearr_11332_11387 = state_11287__$1;
(statearr_11332_11387[(2)] = true);

(statearr_11332_11387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (14))){
var state_11287__$1 = state_11287;
var statearr_11333_11388 = state_11287__$1;
(statearr_11333_11388[(2)] = false);

(statearr_11333_11388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (26))){
var inst_11247 = (state_11287[(9)]);
var inst_11254 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11247);
var state_11287__$1 = state_11287;
var statearr_11334_11389 = state_11287__$1;
(statearr_11334_11389[(2)] = inst_11254);

(statearr_11334_11389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (16))){
var state_11287__$1 = state_11287;
var statearr_11335_11390 = state_11287__$1;
(statearr_11335_11390[(2)] = true);

(statearr_11335_11390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (38))){
var inst_11277 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11336_11391 = state_11287__$1;
(statearr_11336_11391[(2)] = inst_11277);

(statearr_11336_11391[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (30))){
var inst_11239 = (state_11287[(13)]);
var inst_11247 = (state_11287[(9)]);
var inst_11238 = (state_11287[(11)]);
var inst_11264 = cljs.core.empty_QMARK_.call(null,inst_11238);
var inst_11265 = inst_11239.call(null,inst_11247);
var inst_11266 = cljs.core.not.call(null,inst_11265);
var inst_11267 = (inst_11264) && (inst_11266);
var state_11287__$1 = state_11287;
var statearr_11337_11392 = state_11287__$1;
(statearr_11337_11392[(2)] = inst_11267);

(statearr_11337_11392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (10))){
var inst_11191 = (state_11287[(8)]);
var inst_11211 = (state_11287[(2)]);
var inst_11212 = cljs.core.get.call(null,inst_11211,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11213 = cljs.core.get.call(null,inst_11211,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11214 = cljs.core.get.call(null,inst_11211,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11215 = inst_11191;
var state_11287__$1 = (function (){var statearr_11338 = state_11287;
(statearr_11338[(16)] = inst_11212);

(statearr_11338[(7)] = inst_11215);

(statearr_11338[(17)] = inst_11213);

(statearr_11338[(18)] = inst_11214);

return statearr_11338;
})();
var statearr_11339_11393 = state_11287__$1;
(statearr_11339_11393[(2)] = null);

(statearr_11339_11393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (18))){
var inst_11229 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11340_11394 = state_11287__$1;
(statearr_11340_11394[(2)] = inst_11229);

(statearr_11340_11394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (37))){
var state_11287__$1 = state_11287;
var statearr_11341_11395 = state_11287__$1;
(statearr_11341_11395[(2)] = null);

(statearr_11341_11395[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (8))){
var inst_11191 = (state_11287[(8)]);
var inst_11208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11191);
var state_11287__$1 = state_11287;
var statearr_11342_11396 = state_11287__$1;
(statearr_11342_11396[(2)] = inst_11208);

(statearr_11342_11396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___11350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9505__auto__,c__9617__auto___11350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9506__auto__ = null;
var cljs$core$async$mix_$_state_machine__9506__auto____0 = (function (){
var statearr_11346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11346[(0)] = cljs$core$async$mix_$_state_machine__9506__auto__);

(statearr_11346[(1)] = (1));

return statearr_11346;
});
var cljs$core$async$mix_$_state_machine__9506__auto____1 = (function (state_11287){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_11287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object)){
var ex__9509__auto__ = e11347;
var statearr_11348_11397 = state_11287;
(statearr_11348_11397[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11398 = state_11287;
state_11287 = G__11398;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9506__auto__ = function(state_11287){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9506__auto____1.call(this,state_11287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9506__auto____0;
cljs$core$async$mix_$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9506__auto____1;
return cljs$core$async$mix_$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___11350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9619__auto__ = (function (){var statearr_11349 = f__9618__auto__.call(null);
(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___11350);

return statearr_11349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___11350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7068__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p,v,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11399 = [];
var len__7479__auto___11402 = arguments.length;
var i__7480__auto___11403 = (0);
while(true){
if((i__7480__auto___11403 < len__7479__auto___11402)){
args11399.push((arguments[i__7480__auto___11403]));

var G__11404 = (i__7480__auto___11403 + (1));
i__7480__auto___11403 = G__11404;
continue;
} else {
}
break;
}

var G__11401 = args11399.length;
switch (G__11401) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11399.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p);
} else {
var m__7068__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p,v);
} else {
var m__7068__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11407 = [];
var len__7479__auto___11532 = arguments.length;
var i__7480__auto___11533 = (0);
while(true){
if((i__7480__auto___11533 < len__7479__auto___11532)){
args11407.push((arguments[i__7480__auto___11533]));

var G__11534 = (i__7480__auto___11533 + (1));
i__7480__auto___11533 = G__11534;
continue;
} else {
}
break;
}

var G__11409 = args11407.length;
switch (G__11409) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11407.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6404__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6404__auto__,mults){
return (function (p1__11406_SHARP_){
if(cljs.core.truth_(p1__11406_SHARP_.call(null,topic))){
return p1__11406_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11406_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6404__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11410 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11411){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11411 = meta11411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11412,meta11411__$1){
var self__ = this;
var _11412__$1 = this;
return (new cljs.core.async.t_cljs$core$async11410(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11411__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11412){
var self__ = this;
var _11412__$1 = this;
return self__.meta11411;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11411","meta11411",1911370695,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11410";

cljs.core.async.t_cljs$core$async11410.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async11410");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11410 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11410(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11411){
return (new cljs.core.async.t_cljs$core$async11410(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11411));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11410(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9617__auto___11536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___11536,mults,ensure_mult,p){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___11536,mults,ensure_mult,p){
return (function (state_11484){
var state_val_11485 = (state_11484[(1)]);
if((state_val_11485 === (7))){
var inst_11480 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
var statearr_11486_11537 = state_11484__$1;
(statearr_11486_11537[(2)] = inst_11480);

(statearr_11486_11537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (20))){
var state_11484__$1 = state_11484;
var statearr_11487_11538 = state_11484__$1;
(statearr_11487_11538[(2)] = null);

(statearr_11487_11538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (1))){
var state_11484__$1 = state_11484;
var statearr_11488_11539 = state_11484__$1;
(statearr_11488_11539[(2)] = null);

(statearr_11488_11539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (24))){
var inst_11463 = (state_11484[(7)]);
var inst_11472 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11463);
var state_11484__$1 = state_11484;
var statearr_11489_11540 = state_11484__$1;
(statearr_11489_11540[(2)] = inst_11472);

(statearr_11489_11540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (4))){
var inst_11415 = (state_11484[(8)]);
var inst_11415__$1 = (state_11484[(2)]);
var inst_11416 = (inst_11415__$1 == null);
var state_11484__$1 = (function (){var statearr_11490 = state_11484;
(statearr_11490[(8)] = inst_11415__$1);

return statearr_11490;
})();
if(cljs.core.truth_(inst_11416)){
var statearr_11491_11541 = state_11484__$1;
(statearr_11491_11541[(1)] = (5));

} else {
var statearr_11492_11542 = state_11484__$1;
(statearr_11492_11542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (15))){
var inst_11457 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
var statearr_11493_11543 = state_11484__$1;
(statearr_11493_11543[(2)] = inst_11457);

(statearr_11493_11543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (21))){
var inst_11477 = (state_11484[(2)]);
var state_11484__$1 = (function (){var statearr_11494 = state_11484;
(statearr_11494[(9)] = inst_11477);

return statearr_11494;
})();
var statearr_11495_11544 = state_11484__$1;
(statearr_11495_11544[(2)] = null);

(statearr_11495_11544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (13))){
var inst_11439 = (state_11484[(10)]);
var inst_11441 = cljs.core.chunked_seq_QMARK_.call(null,inst_11439);
var state_11484__$1 = state_11484;
if(inst_11441){
var statearr_11496_11545 = state_11484__$1;
(statearr_11496_11545[(1)] = (16));

} else {
var statearr_11497_11546 = state_11484__$1;
(statearr_11497_11546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (22))){
var inst_11469 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
if(cljs.core.truth_(inst_11469)){
var statearr_11498_11547 = state_11484__$1;
(statearr_11498_11547[(1)] = (23));

} else {
var statearr_11499_11548 = state_11484__$1;
(statearr_11499_11548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (6))){
var inst_11415 = (state_11484[(8)]);
var inst_11465 = (state_11484[(11)]);
var inst_11463 = (state_11484[(7)]);
var inst_11463__$1 = topic_fn.call(null,inst_11415);
var inst_11464 = cljs.core.deref.call(null,mults);
var inst_11465__$1 = cljs.core.get.call(null,inst_11464,inst_11463__$1);
var state_11484__$1 = (function (){var statearr_11500 = state_11484;
(statearr_11500[(11)] = inst_11465__$1);

(statearr_11500[(7)] = inst_11463__$1);

return statearr_11500;
})();
if(cljs.core.truth_(inst_11465__$1)){
var statearr_11501_11549 = state_11484__$1;
(statearr_11501_11549[(1)] = (19));

} else {
var statearr_11502_11550 = state_11484__$1;
(statearr_11502_11550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (25))){
var inst_11474 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
var statearr_11503_11551 = state_11484__$1;
(statearr_11503_11551[(2)] = inst_11474);

(statearr_11503_11551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (17))){
var inst_11439 = (state_11484[(10)]);
var inst_11448 = cljs.core.first.call(null,inst_11439);
var inst_11449 = cljs.core.async.muxch_STAR_.call(null,inst_11448);
var inst_11450 = cljs.core.async.close_BANG_.call(null,inst_11449);
var inst_11451 = cljs.core.next.call(null,inst_11439);
var inst_11425 = inst_11451;
var inst_11426 = null;
var inst_11427 = (0);
var inst_11428 = (0);
var state_11484__$1 = (function (){var statearr_11504 = state_11484;
(statearr_11504[(12)] = inst_11427);

(statearr_11504[(13)] = inst_11450);

(statearr_11504[(14)] = inst_11425);

(statearr_11504[(15)] = inst_11428);

(statearr_11504[(16)] = inst_11426);

return statearr_11504;
})();
var statearr_11505_11552 = state_11484__$1;
(statearr_11505_11552[(2)] = null);

(statearr_11505_11552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (3))){
var inst_11482 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11484__$1,inst_11482);
} else {
if((state_val_11485 === (12))){
var inst_11459 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
var statearr_11506_11553 = state_11484__$1;
(statearr_11506_11553[(2)] = inst_11459);

(statearr_11506_11553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (2))){
var state_11484__$1 = state_11484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11484__$1,(4),ch);
} else {
if((state_val_11485 === (23))){
var state_11484__$1 = state_11484;
var statearr_11507_11554 = state_11484__$1;
(statearr_11507_11554[(2)] = null);

(statearr_11507_11554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (19))){
var inst_11415 = (state_11484[(8)]);
var inst_11465 = (state_11484[(11)]);
var inst_11467 = cljs.core.async.muxch_STAR_.call(null,inst_11465);
var state_11484__$1 = state_11484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11484__$1,(22),inst_11467,inst_11415);
} else {
if((state_val_11485 === (11))){
var inst_11425 = (state_11484[(14)]);
var inst_11439 = (state_11484[(10)]);
var inst_11439__$1 = cljs.core.seq.call(null,inst_11425);
var state_11484__$1 = (function (){var statearr_11508 = state_11484;
(statearr_11508[(10)] = inst_11439__$1);

return statearr_11508;
})();
if(inst_11439__$1){
var statearr_11509_11555 = state_11484__$1;
(statearr_11509_11555[(1)] = (13));

} else {
var statearr_11510_11556 = state_11484__$1;
(statearr_11510_11556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (9))){
var inst_11461 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
var statearr_11511_11557 = state_11484__$1;
(statearr_11511_11557[(2)] = inst_11461);

(statearr_11511_11557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (5))){
var inst_11422 = cljs.core.deref.call(null,mults);
var inst_11423 = cljs.core.vals.call(null,inst_11422);
var inst_11424 = cljs.core.seq.call(null,inst_11423);
var inst_11425 = inst_11424;
var inst_11426 = null;
var inst_11427 = (0);
var inst_11428 = (0);
var state_11484__$1 = (function (){var statearr_11512 = state_11484;
(statearr_11512[(12)] = inst_11427);

(statearr_11512[(14)] = inst_11425);

(statearr_11512[(15)] = inst_11428);

(statearr_11512[(16)] = inst_11426);

return statearr_11512;
})();
var statearr_11513_11558 = state_11484__$1;
(statearr_11513_11558[(2)] = null);

(statearr_11513_11558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (14))){
var state_11484__$1 = state_11484;
var statearr_11517_11559 = state_11484__$1;
(statearr_11517_11559[(2)] = null);

(statearr_11517_11559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (16))){
var inst_11439 = (state_11484[(10)]);
var inst_11443 = cljs.core.chunk_first.call(null,inst_11439);
var inst_11444 = cljs.core.chunk_rest.call(null,inst_11439);
var inst_11445 = cljs.core.count.call(null,inst_11443);
var inst_11425 = inst_11444;
var inst_11426 = inst_11443;
var inst_11427 = inst_11445;
var inst_11428 = (0);
var state_11484__$1 = (function (){var statearr_11518 = state_11484;
(statearr_11518[(12)] = inst_11427);

(statearr_11518[(14)] = inst_11425);

(statearr_11518[(15)] = inst_11428);

(statearr_11518[(16)] = inst_11426);

return statearr_11518;
})();
var statearr_11519_11560 = state_11484__$1;
(statearr_11519_11560[(2)] = null);

(statearr_11519_11560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (10))){
var inst_11427 = (state_11484[(12)]);
var inst_11425 = (state_11484[(14)]);
var inst_11428 = (state_11484[(15)]);
var inst_11426 = (state_11484[(16)]);
var inst_11433 = cljs.core._nth.call(null,inst_11426,inst_11428);
var inst_11434 = cljs.core.async.muxch_STAR_.call(null,inst_11433);
var inst_11435 = cljs.core.async.close_BANG_.call(null,inst_11434);
var inst_11436 = (inst_11428 + (1));
var tmp11514 = inst_11427;
var tmp11515 = inst_11425;
var tmp11516 = inst_11426;
var inst_11425__$1 = tmp11515;
var inst_11426__$1 = tmp11516;
var inst_11427__$1 = tmp11514;
var inst_11428__$1 = inst_11436;
var state_11484__$1 = (function (){var statearr_11520 = state_11484;
(statearr_11520[(12)] = inst_11427__$1);

(statearr_11520[(14)] = inst_11425__$1);

(statearr_11520[(15)] = inst_11428__$1);

(statearr_11520[(17)] = inst_11435);

(statearr_11520[(16)] = inst_11426__$1);

return statearr_11520;
})();
var statearr_11521_11561 = state_11484__$1;
(statearr_11521_11561[(2)] = null);

(statearr_11521_11561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (18))){
var inst_11454 = (state_11484[(2)]);
var state_11484__$1 = state_11484;
var statearr_11522_11562 = state_11484__$1;
(statearr_11522_11562[(2)] = inst_11454);

(statearr_11522_11562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11485 === (8))){
var inst_11427 = (state_11484[(12)]);
var inst_11428 = (state_11484[(15)]);
var inst_11430 = (inst_11428 < inst_11427);
var inst_11431 = inst_11430;
var state_11484__$1 = state_11484;
if(cljs.core.truth_(inst_11431)){
var statearr_11523_11563 = state_11484__$1;
(statearr_11523_11563[(1)] = (10));

} else {
var statearr_11524_11564 = state_11484__$1;
(statearr_11524_11564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___11536,mults,ensure_mult,p))
;
return ((function (switch__9505__auto__,c__9617__auto___11536,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_11528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11528[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_11528[(1)] = (1));

return statearr_11528;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_11484){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_11484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e11529){if((e11529 instanceof Object)){
var ex__9509__auto__ = e11529;
var statearr_11530_11565 = state_11484;
(statearr_11530_11565[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11566 = state_11484;
state_11484 = G__11566;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_11484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_11484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___11536,mults,ensure_mult,p))
})();
var state__9619__auto__ = (function (){var statearr_11531 = f__9618__auto__.call(null);
(statearr_11531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___11536);

return statearr_11531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___11536,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11567 = [];
var len__7479__auto___11570 = arguments.length;
var i__7480__auto___11571 = (0);
while(true){
if((i__7480__auto___11571 < len__7479__auto___11570)){
args11567.push((arguments[i__7480__auto___11571]));

var G__11572 = (i__7480__auto___11571 + (1));
i__7480__auto___11571 = G__11572;
continue;
} else {
}
break;
}

var G__11569 = args11567.length;
switch (G__11569) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11567.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11574 = [];
var len__7479__auto___11577 = arguments.length;
var i__7480__auto___11578 = (0);
while(true){
if((i__7480__auto___11578 < len__7479__auto___11577)){
args11574.push((arguments[i__7480__auto___11578]));

var G__11579 = (i__7480__auto___11578 + (1));
i__7480__auto___11578 = G__11579;
continue;
} else {
}
break;
}

var G__11576 = args11574.length;
switch (G__11576) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11574.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11581 = [];
var len__7479__auto___11652 = arguments.length;
var i__7480__auto___11653 = (0);
while(true){
if((i__7480__auto___11653 < len__7479__auto___11652)){
args11581.push((arguments[i__7480__auto___11653]));

var G__11654 = (i__7480__auto___11653 + (1));
i__7480__auto___11653 = G__11654;
continue;
} else {
}
break;
}

var G__11583 = args11581.length;
switch (G__11583) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11581.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9617__auto___11656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___11656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___11656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11622){
var state_val_11623 = (state_11622[(1)]);
if((state_val_11623 === (7))){
var state_11622__$1 = state_11622;
var statearr_11624_11657 = state_11622__$1;
(statearr_11624_11657[(2)] = null);

(statearr_11624_11657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (1))){
var state_11622__$1 = state_11622;
var statearr_11625_11658 = state_11622__$1;
(statearr_11625_11658[(2)] = null);

(statearr_11625_11658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (4))){
var inst_11586 = (state_11622[(7)]);
var inst_11588 = (inst_11586 < cnt);
var state_11622__$1 = state_11622;
if(cljs.core.truth_(inst_11588)){
var statearr_11626_11659 = state_11622__$1;
(statearr_11626_11659[(1)] = (6));

} else {
var statearr_11627_11660 = state_11622__$1;
(statearr_11627_11660[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (15))){
var inst_11618 = (state_11622[(2)]);
var state_11622__$1 = state_11622;
var statearr_11628_11661 = state_11622__$1;
(statearr_11628_11661[(2)] = inst_11618);

(statearr_11628_11661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (13))){
var inst_11611 = cljs.core.async.close_BANG_.call(null,out);
var state_11622__$1 = state_11622;
var statearr_11629_11662 = state_11622__$1;
(statearr_11629_11662[(2)] = inst_11611);

(statearr_11629_11662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (6))){
var state_11622__$1 = state_11622;
var statearr_11630_11663 = state_11622__$1;
(statearr_11630_11663[(2)] = null);

(statearr_11630_11663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (3))){
var inst_11620 = (state_11622[(2)]);
var state_11622__$1 = state_11622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11622__$1,inst_11620);
} else {
if((state_val_11623 === (12))){
var inst_11608 = (state_11622[(8)]);
var inst_11608__$1 = (state_11622[(2)]);
var inst_11609 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11608__$1);
var state_11622__$1 = (function (){var statearr_11631 = state_11622;
(statearr_11631[(8)] = inst_11608__$1);

return statearr_11631;
})();
if(cljs.core.truth_(inst_11609)){
var statearr_11632_11664 = state_11622__$1;
(statearr_11632_11664[(1)] = (13));

} else {
var statearr_11633_11665 = state_11622__$1;
(statearr_11633_11665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (2))){
var inst_11585 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11586 = (0);
var state_11622__$1 = (function (){var statearr_11634 = state_11622;
(statearr_11634[(9)] = inst_11585);

(statearr_11634[(7)] = inst_11586);

return statearr_11634;
})();
var statearr_11635_11666 = state_11622__$1;
(statearr_11635_11666[(2)] = null);

(statearr_11635_11666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (11))){
var inst_11586 = (state_11622[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11622,(10),Object,null,(9));
var inst_11595 = chs__$1.call(null,inst_11586);
var inst_11596 = done.call(null,inst_11586);
var inst_11597 = cljs.core.async.take_BANG_.call(null,inst_11595,inst_11596);
var state_11622__$1 = state_11622;
var statearr_11636_11667 = state_11622__$1;
(statearr_11636_11667[(2)] = inst_11597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (9))){
var inst_11586 = (state_11622[(7)]);
var inst_11599 = (state_11622[(2)]);
var inst_11600 = (inst_11586 + (1));
var inst_11586__$1 = inst_11600;
var state_11622__$1 = (function (){var statearr_11637 = state_11622;
(statearr_11637[(7)] = inst_11586__$1);

(statearr_11637[(10)] = inst_11599);

return statearr_11637;
})();
var statearr_11638_11668 = state_11622__$1;
(statearr_11638_11668[(2)] = null);

(statearr_11638_11668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (5))){
var inst_11606 = (state_11622[(2)]);
var state_11622__$1 = (function (){var statearr_11639 = state_11622;
(statearr_11639[(11)] = inst_11606);

return statearr_11639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,(12),dchan);
} else {
if((state_val_11623 === (14))){
var inst_11608 = (state_11622[(8)]);
var inst_11613 = cljs.core.apply.call(null,f,inst_11608);
var state_11622__$1 = state_11622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11622__$1,(16),out,inst_11613);
} else {
if((state_val_11623 === (16))){
var inst_11615 = (state_11622[(2)]);
var state_11622__$1 = (function (){var statearr_11640 = state_11622;
(statearr_11640[(12)] = inst_11615);

return statearr_11640;
})();
var statearr_11641_11669 = state_11622__$1;
(statearr_11641_11669[(2)] = null);

(statearr_11641_11669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (10))){
var inst_11590 = (state_11622[(2)]);
var inst_11591 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11622__$1 = (function (){var statearr_11642 = state_11622;
(statearr_11642[(13)] = inst_11590);

return statearr_11642;
})();
var statearr_11643_11670 = state_11622__$1;
(statearr_11643_11670[(2)] = inst_11591);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11623 === (8))){
var inst_11604 = (state_11622[(2)]);
var state_11622__$1 = state_11622;
var statearr_11644_11671 = state_11622__$1;
(statearr_11644_11671[(2)] = inst_11604);

(statearr_11644_11671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___11656,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9505__auto__,c__9617__auto___11656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_11648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11648[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_11648[(1)] = (1));

return statearr_11648;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_11622){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_11622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e11649){if((e11649 instanceof Object)){
var ex__9509__auto__ = e11649;
var statearr_11650_11672 = state_11622;
(statearr_11650_11672[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11673 = state_11622;
state_11622 = G__11673;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_11622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_11622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___11656,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9619__auto__ = (function (){var statearr_11651 = f__9618__auto__.call(null);
(statearr_11651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___11656);

return statearr_11651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___11656,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11675 = [];
var len__7479__auto___11733 = arguments.length;
var i__7480__auto___11734 = (0);
while(true){
if((i__7480__auto___11734 < len__7479__auto___11733)){
args11675.push((arguments[i__7480__auto___11734]));

var G__11735 = (i__7480__auto___11734 + (1));
i__7480__auto___11734 = G__11735;
continue;
} else {
}
break;
}

var G__11677 = args11675.length;
switch (G__11677) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11675.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9617__auto___11737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___11737,out){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___11737,out){
return (function (state_11709){
var state_val_11710 = (state_11709[(1)]);
if((state_val_11710 === (7))){
var inst_11689 = (state_11709[(7)]);
var inst_11688 = (state_11709[(8)]);
var inst_11688__$1 = (state_11709[(2)]);
var inst_11689__$1 = cljs.core.nth.call(null,inst_11688__$1,(0),null);
var inst_11690 = cljs.core.nth.call(null,inst_11688__$1,(1),null);
var inst_11691 = (inst_11689__$1 == null);
var state_11709__$1 = (function (){var statearr_11711 = state_11709;
(statearr_11711[(7)] = inst_11689__$1);

(statearr_11711[(8)] = inst_11688__$1);

(statearr_11711[(9)] = inst_11690);

return statearr_11711;
})();
if(cljs.core.truth_(inst_11691)){
var statearr_11712_11738 = state_11709__$1;
(statearr_11712_11738[(1)] = (8));

} else {
var statearr_11713_11739 = state_11709__$1;
(statearr_11713_11739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (1))){
var inst_11678 = cljs.core.vec.call(null,chs);
var inst_11679 = inst_11678;
var state_11709__$1 = (function (){var statearr_11714 = state_11709;
(statearr_11714[(10)] = inst_11679);

return statearr_11714;
})();
var statearr_11715_11740 = state_11709__$1;
(statearr_11715_11740[(2)] = null);

(statearr_11715_11740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (4))){
var inst_11679 = (state_11709[(10)]);
var state_11709__$1 = state_11709;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11709__$1,(7),inst_11679);
} else {
if((state_val_11710 === (6))){
var inst_11705 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11716_11741 = state_11709__$1;
(statearr_11716_11741[(2)] = inst_11705);

(statearr_11716_11741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (3))){
var inst_11707 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11709__$1,inst_11707);
} else {
if((state_val_11710 === (2))){
var inst_11679 = (state_11709[(10)]);
var inst_11681 = cljs.core.count.call(null,inst_11679);
var inst_11682 = (inst_11681 > (0));
var state_11709__$1 = state_11709;
if(cljs.core.truth_(inst_11682)){
var statearr_11718_11742 = state_11709__$1;
(statearr_11718_11742[(1)] = (4));

} else {
var statearr_11719_11743 = state_11709__$1;
(statearr_11719_11743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (11))){
var inst_11679 = (state_11709[(10)]);
var inst_11698 = (state_11709[(2)]);
var tmp11717 = inst_11679;
var inst_11679__$1 = tmp11717;
var state_11709__$1 = (function (){var statearr_11720 = state_11709;
(statearr_11720[(11)] = inst_11698);

(statearr_11720[(10)] = inst_11679__$1);

return statearr_11720;
})();
var statearr_11721_11744 = state_11709__$1;
(statearr_11721_11744[(2)] = null);

(statearr_11721_11744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (9))){
var inst_11689 = (state_11709[(7)]);
var state_11709__$1 = state_11709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11709__$1,(11),out,inst_11689);
} else {
if((state_val_11710 === (5))){
var inst_11703 = cljs.core.async.close_BANG_.call(null,out);
var state_11709__$1 = state_11709;
var statearr_11722_11745 = state_11709__$1;
(statearr_11722_11745[(2)] = inst_11703);

(statearr_11722_11745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (10))){
var inst_11701 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11723_11746 = state_11709__$1;
(statearr_11723_11746[(2)] = inst_11701);

(statearr_11723_11746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (8))){
var inst_11689 = (state_11709[(7)]);
var inst_11688 = (state_11709[(8)]);
var inst_11690 = (state_11709[(9)]);
var inst_11679 = (state_11709[(10)]);
var inst_11693 = (function (){var cs = inst_11679;
var vec__11684 = inst_11688;
var v = inst_11689;
var c = inst_11690;
return ((function (cs,vec__11684,v,c,inst_11689,inst_11688,inst_11690,inst_11679,state_val_11710,c__9617__auto___11737,out){
return (function (p1__11674_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11674_SHARP_);
});
;})(cs,vec__11684,v,c,inst_11689,inst_11688,inst_11690,inst_11679,state_val_11710,c__9617__auto___11737,out))
})();
var inst_11694 = cljs.core.filterv.call(null,inst_11693,inst_11679);
var inst_11679__$1 = inst_11694;
var state_11709__$1 = (function (){var statearr_11724 = state_11709;
(statearr_11724[(10)] = inst_11679__$1);

return statearr_11724;
})();
var statearr_11725_11747 = state_11709__$1;
(statearr_11725_11747[(2)] = null);

(statearr_11725_11747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___11737,out))
;
return ((function (switch__9505__auto__,c__9617__auto___11737,out){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_11729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11729[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_11729[(1)] = (1));

return statearr_11729;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_11709){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_11709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e11730){if((e11730 instanceof Object)){
var ex__9509__auto__ = e11730;
var statearr_11731_11748 = state_11709;
(statearr_11731_11748[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11749 = state_11709;
state_11709 = G__11749;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_11709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_11709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___11737,out))
})();
var state__9619__auto__ = (function (){var statearr_11732 = f__9618__auto__.call(null);
(statearr_11732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___11737);

return statearr_11732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___11737,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11750 = [];
var len__7479__auto___11799 = arguments.length;
var i__7480__auto___11800 = (0);
while(true){
if((i__7480__auto___11800 < len__7479__auto___11799)){
args11750.push((arguments[i__7480__auto___11800]));

var G__11801 = (i__7480__auto___11800 + (1));
i__7480__auto___11800 = G__11801;
continue;
} else {
}
break;
}

var G__11752 = args11750.length;
switch (G__11752) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11750.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9617__auto___11803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___11803,out){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___11803,out){
return (function (state_11776){
var state_val_11777 = (state_11776[(1)]);
if((state_val_11777 === (7))){
var inst_11758 = (state_11776[(7)]);
var inst_11758__$1 = (state_11776[(2)]);
var inst_11759 = (inst_11758__$1 == null);
var inst_11760 = cljs.core.not.call(null,inst_11759);
var state_11776__$1 = (function (){var statearr_11778 = state_11776;
(statearr_11778[(7)] = inst_11758__$1);

return statearr_11778;
})();
if(inst_11760){
var statearr_11779_11804 = state_11776__$1;
(statearr_11779_11804[(1)] = (8));

} else {
var statearr_11780_11805 = state_11776__$1;
(statearr_11780_11805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (1))){
var inst_11753 = (0);
var state_11776__$1 = (function (){var statearr_11781 = state_11776;
(statearr_11781[(8)] = inst_11753);

return statearr_11781;
})();
var statearr_11782_11806 = state_11776__$1;
(statearr_11782_11806[(2)] = null);

(statearr_11782_11806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (4))){
var state_11776__$1 = state_11776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11776__$1,(7),ch);
} else {
if((state_val_11777 === (6))){
var inst_11771 = (state_11776[(2)]);
var state_11776__$1 = state_11776;
var statearr_11783_11807 = state_11776__$1;
(statearr_11783_11807[(2)] = inst_11771);

(statearr_11783_11807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (3))){
var inst_11773 = (state_11776[(2)]);
var inst_11774 = cljs.core.async.close_BANG_.call(null,out);
var state_11776__$1 = (function (){var statearr_11784 = state_11776;
(statearr_11784[(9)] = inst_11773);

return statearr_11784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11776__$1,inst_11774);
} else {
if((state_val_11777 === (2))){
var inst_11753 = (state_11776[(8)]);
var inst_11755 = (inst_11753 < n);
var state_11776__$1 = state_11776;
if(cljs.core.truth_(inst_11755)){
var statearr_11785_11808 = state_11776__$1;
(statearr_11785_11808[(1)] = (4));

} else {
var statearr_11786_11809 = state_11776__$1;
(statearr_11786_11809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (11))){
var inst_11753 = (state_11776[(8)]);
var inst_11763 = (state_11776[(2)]);
var inst_11764 = (inst_11753 + (1));
var inst_11753__$1 = inst_11764;
var state_11776__$1 = (function (){var statearr_11787 = state_11776;
(statearr_11787[(8)] = inst_11753__$1);

(statearr_11787[(10)] = inst_11763);

return statearr_11787;
})();
var statearr_11788_11810 = state_11776__$1;
(statearr_11788_11810[(2)] = null);

(statearr_11788_11810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (9))){
var state_11776__$1 = state_11776;
var statearr_11789_11811 = state_11776__$1;
(statearr_11789_11811[(2)] = null);

(statearr_11789_11811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (5))){
var state_11776__$1 = state_11776;
var statearr_11790_11812 = state_11776__$1;
(statearr_11790_11812[(2)] = null);

(statearr_11790_11812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (10))){
var inst_11768 = (state_11776[(2)]);
var state_11776__$1 = state_11776;
var statearr_11791_11813 = state_11776__$1;
(statearr_11791_11813[(2)] = inst_11768);

(statearr_11791_11813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11777 === (8))){
var inst_11758 = (state_11776[(7)]);
var state_11776__$1 = state_11776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11776__$1,(11),out,inst_11758);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___11803,out))
;
return ((function (switch__9505__auto__,c__9617__auto___11803,out){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_11795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11795[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_11795[(1)] = (1));

return statearr_11795;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_11776){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_11776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e11796){if((e11796 instanceof Object)){
var ex__9509__auto__ = e11796;
var statearr_11797_11814 = state_11776;
(statearr_11797_11814[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11815 = state_11776;
state_11776 = G__11815;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_11776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_11776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___11803,out))
})();
var state__9619__auto__ = (function (){var statearr_11798 = f__9618__auto__.call(null);
(statearr_11798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___11803);

return statearr_11798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___11803,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11823 = (function (map_LT_,f,ch,meta11824){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11824 = meta11824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11825,meta11824__$1){
var self__ = this;
var _11825__$1 = this;
return (new cljs.core.async.t_cljs$core$async11823(self__.map_LT_,self__.f,self__.ch,meta11824__$1));
});

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11825){
var self__ = this;
var _11825__$1 = this;
return self__.meta11824;
});

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11826 = (function (map_LT_,f,ch,meta11824,_,fn1,meta11827){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11824 = meta11824;
this._ = _;
this.fn1 = fn1;
this.meta11827 = meta11827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11828,meta11827__$1){
var self__ = this;
var _11828__$1 = this;
return (new cljs.core.async.t_cljs$core$async11826(self__.map_LT_,self__.f,self__.ch,self__.meta11824,self__._,self__.fn1,meta11827__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11828){
var self__ = this;
var _11828__$1 = this;
return self__.meta11827;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11826.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11816_SHARP_){
return f1.call(null,(((p1__11816_SHARP_ == null))?null:self__.f.call(null,p1__11816_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11826.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11824","meta11824",-217314951,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11823","cljs.core.async/t_cljs$core$async11823",1707842429,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11827","meta11827",-1946950221,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11826";

cljs.core.async.t_cljs$core$async11826.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async11826");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11826 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11826(map_LT___$1,f__$1,ch__$1,meta11824__$1,___$2,fn1__$1,meta11827){
return (new cljs.core.async.t_cljs$core$async11826(map_LT___$1,f__$1,ch__$1,meta11824__$1,___$2,fn1__$1,meta11827));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11826(self__.map_LT_,self__.f,self__.ch,self__.meta11824,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6392__auto__ = ret;
if(cljs.core.truth_(and__6392__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11824","meta11824",-217314951,null)], null);
});

cljs.core.async.t_cljs$core$async11823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11823";

cljs.core.async.t_cljs$core$async11823.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async11823");
});

cljs.core.async.__GT_t_cljs$core$async11823 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11823(map_LT___$1,f__$1,ch__$1,meta11824){
return (new cljs.core.async.t_cljs$core$async11823(map_LT___$1,f__$1,ch__$1,meta11824));
});

}

return (new cljs.core.async.t_cljs$core$async11823(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11832 = (function (map_GT_,f,ch,meta11833){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11833 = meta11833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11834,meta11833__$1){
var self__ = this;
var _11834__$1 = this;
return (new cljs.core.async.t_cljs$core$async11832(self__.map_GT_,self__.f,self__.ch,meta11833__$1));
});

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11834){
var self__ = this;
var _11834__$1 = this;
return self__.meta11833;
});

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11833","meta11833",-1300638556,null)], null);
});

cljs.core.async.t_cljs$core$async11832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11832";

cljs.core.async.t_cljs$core$async11832.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async11832");
});

cljs.core.async.__GT_t_cljs$core$async11832 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11832(map_GT___$1,f__$1,ch__$1,meta11833){
return (new cljs.core.async.t_cljs$core$async11832(map_GT___$1,f__$1,ch__$1,meta11833));
});

}

return (new cljs.core.async.t_cljs$core$async11832(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11838 = (function (filter_GT_,p,ch,meta11839){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11839 = meta11839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11840,meta11839__$1){
var self__ = this;
var _11840__$1 = this;
return (new cljs.core.async.t_cljs$core$async11838(self__.filter_GT_,self__.p,self__.ch,meta11839__$1));
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11840){
var self__ = this;
var _11840__$1 = this;
return self__.meta11839;
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11839","meta11839",928563470,null)], null);
});

cljs.core.async.t_cljs$core$async11838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11838";

cljs.core.async.t_cljs$core$async11838.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async11838");
});

cljs.core.async.__GT_t_cljs$core$async11838 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11838(filter_GT___$1,p__$1,ch__$1,meta11839){
return (new cljs.core.async.t_cljs$core$async11838(filter_GT___$1,p__$1,ch__$1,meta11839));
});

}

return (new cljs.core.async.t_cljs$core$async11838(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11841 = [];
var len__7479__auto___11885 = arguments.length;
var i__7480__auto___11886 = (0);
while(true){
if((i__7480__auto___11886 < len__7479__auto___11885)){
args11841.push((arguments[i__7480__auto___11886]));

var G__11887 = (i__7480__auto___11886 + (1));
i__7480__auto___11886 = G__11887;
continue;
} else {
}
break;
}

var G__11843 = args11841.length;
switch (G__11843) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11841.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9617__auto___11889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___11889,out){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___11889,out){
return (function (state_11864){
var state_val_11865 = (state_11864[(1)]);
if((state_val_11865 === (7))){
var inst_11860 = (state_11864[(2)]);
var state_11864__$1 = state_11864;
var statearr_11866_11890 = state_11864__$1;
(statearr_11866_11890[(2)] = inst_11860);

(statearr_11866_11890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (1))){
var state_11864__$1 = state_11864;
var statearr_11867_11891 = state_11864__$1;
(statearr_11867_11891[(2)] = null);

(statearr_11867_11891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (4))){
var inst_11846 = (state_11864[(7)]);
var inst_11846__$1 = (state_11864[(2)]);
var inst_11847 = (inst_11846__$1 == null);
var state_11864__$1 = (function (){var statearr_11868 = state_11864;
(statearr_11868[(7)] = inst_11846__$1);

return statearr_11868;
})();
if(cljs.core.truth_(inst_11847)){
var statearr_11869_11892 = state_11864__$1;
(statearr_11869_11892[(1)] = (5));

} else {
var statearr_11870_11893 = state_11864__$1;
(statearr_11870_11893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (6))){
var inst_11846 = (state_11864[(7)]);
var inst_11851 = p.call(null,inst_11846);
var state_11864__$1 = state_11864;
if(cljs.core.truth_(inst_11851)){
var statearr_11871_11894 = state_11864__$1;
(statearr_11871_11894[(1)] = (8));

} else {
var statearr_11872_11895 = state_11864__$1;
(statearr_11872_11895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (3))){
var inst_11862 = (state_11864[(2)]);
var state_11864__$1 = state_11864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11864__$1,inst_11862);
} else {
if((state_val_11865 === (2))){
var state_11864__$1 = state_11864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11864__$1,(4),ch);
} else {
if((state_val_11865 === (11))){
var inst_11854 = (state_11864[(2)]);
var state_11864__$1 = state_11864;
var statearr_11873_11896 = state_11864__$1;
(statearr_11873_11896[(2)] = inst_11854);

(statearr_11873_11896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (9))){
var state_11864__$1 = state_11864;
var statearr_11874_11897 = state_11864__$1;
(statearr_11874_11897[(2)] = null);

(statearr_11874_11897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (5))){
var inst_11849 = cljs.core.async.close_BANG_.call(null,out);
var state_11864__$1 = state_11864;
var statearr_11875_11898 = state_11864__$1;
(statearr_11875_11898[(2)] = inst_11849);

(statearr_11875_11898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (10))){
var inst_11857 = (state_11864[(2)]);
var state_11864__$1 = (function (){var statearr_11876 = state_11864;
(statearr_11876[(8)] = inst_11857);

return statearr_11876;
})();
var statearr_11877_11899 = state_11864__$1;
(statearr_11877_11899[(2)] = null);

(statearr_11877_11899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11865 === (8))){
var inst_11846 = (state_11864[(7)]);
var state_11864__$1 = state_11864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11864__$1,(11),out,inst_11846);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___11889,out))
;
return ((function (switch__9505__auto__,c__9617__auto___11889,out){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_11881 = [null,null,null,null,null,null,null,null,null];
(statearr_11881[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_11881[(1)] = (1));

return statearr_11881;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_11864){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_11864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e11882){if((e11882 instanceof Object)){
var ex__9509__auto__ = e11882;
var statearr_11883_11900 = state_11864;
(statearr_11883_11900[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11901 = state_11864;
state_11864 = G__11901;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_11864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_11864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___11889,out))
})();
var state__9619__auto__ = (function (){var statearr_11884 = f__9618__auto__.call(null);
(statearr_11884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___11889);

return statearr_11884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___11889,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11902 = [];
var len__7479__auto___11905 = arguments.length;
var i__7480__auto___11906 = (0);
while(true){
if((i__7480__auto___11906 < len__7479__auto___11905)){
args11902.push((arguments[i__7480__auto___11906]));

var G__11907 = (i__7480__auto___11906 + (1));
i__7480__auto___11906 = G__11907;
continue;
} else {
}
break;
}

var G__11904 = args11902.length;
switch (G__11904) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11902.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9617__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto__){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto__){
return (function (state_12074){
var state_val_12075 = (state_12074[(1)]);
if((state_val_12075 === (7))){
var inst_12070 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
var statearr_12076_12117 = state_12074__$1;
(statearr_12076_12117[(2)] = inst_12070);

(statearr_12076_12117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (20))){
var inst_12040 = (state_12074[(7)]);
var inst_12051 = (state_12074[(2)]);
var inst_12052 = cljs.core.next.call(null,inst_12040);
var inst_12026 = inst_12052;
var inst_12027 = null;
var inst_12028 = (0);
var inst_12029 = (0);
var state_12074__$1 = (function (){var statearr_12077 = state_12074;
(statearr_12077[(8)] = inst_12026);

(statearr_12077[(9)] = inst_12051);

(statearr_12077[(10)] = inst_12027);

(statearr_12077[(11)] = inst_12029);

(statearr_12077[(12)] = inst_12028);

return statearr_12077;
})();
var statearr_12078_12118 = state_12074__$1;
(statearr_12078_12118[(2)] = null);

(statearr_12078_12118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (1))){
var state_12074__$1 = state_12074;
var statearr_12079_12119 = state_12074__$1;
(statearr_12079_12119[(2)] = null);

(statearr_12079_12119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (4))){
var inst_12015 = (state_12074[(13)]);
var inst_12015__$1 = (state_12074[(2)]);
var inst_12016 = (inst_12015__$1 == null);
var state_12074__$1 = (function (){var statearr_12080 = state_12074;
(statearr_12080[(13)] = inst_12015__$1);

return statearr_12080;
})();
if(cljs.core.truth_(inst_12016)){
var statearr_12081_12120 = state_12074__$1;
(statearr_12081_12120[(1)] = (5));

} else {
var statearr_12082_12121 = state_12074__$1;
(statearr_12082_12121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (15))){
var state_12074__$1 = state_12074;
var statearr_12086_12122 = state_12074__$1;
(statearr_12086_12122[(2)] = null);

(statearr_12086_12122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (21))){
var state_12074__$1 = state_12074;
var statearr_12087_12123 = state_12074__$1;
(statearr_12087_12123[(2)] = null);

(statearr_12087_12123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (13))){
var inst_12026 = (state_12074[(8)]);
var inst_12027 = (state_12074[(10)]);
var inst_12029 = (state_12074[(11)]);
var inst_12028 = (state_12074[(12)]);
var inst_12036 = (state_12074[(2)]);
var inst_12037 = (inst_12029 + (1));
var tmp12083 = inst_12026;
var tmp12084 = inst_12027;
var tmp12085 = inst_12028;
var inst_12026__$1 = tmp12083;
var inst_12027__$1 = tmp12084;
var inst_12028__$1 = tmp12085;
var inst_12029__$1 = inst_12037;
var state_12074__$1 = (function (){var statearr_12088 = state_12074;
(statearr_12088[(14)] = inst_12036);

(statearr_12088[(8)] = inst_12026__$1);

(statearr_12088[(10)] = inst_12027__$1);

(statearr_12088[(11)] = inst_12029__$1);

(statearr_12088[(12)] = inst_12028__$1);

return statearr_12088;
})();
var statearr_12089_12124 = state_12074__$1;
(statearr_12089_12124[(2)] = null);

(statearr_12089_12124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (22))){
var state_12074__$1 = state_12074;
var statearr_12090_12125 = state_12074__$1;
(statearr_12090_12125[(2)] = null);

(statearr_12090_12125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (6))){
var inst_12015 = (state_12074[(13)]);
var inst_12024 = f.call(null,inst_12015);
var inst_12025 = cljs.core.seq.call(null,inst_12024);
var inst_12026 = inst_12025;
var inst_12027 = null;
var inst_12028 = (0);
var inst_12029 = (0);
var state_12074__$1 = (function (){var statearr_12091 = state_12074;
(statearr_12091[(8)] = inst_12026);

(statearr_12091[(10)] = inst_12027);

(statearr_12091[(11)] = inst_12029);

(statearr_12091[(12)] = inst_12028);

return statearr_12091;
})();
var statearr_12092_12126 = state_12074__$1;
(statearr_12092_12126[(2)] = null);

(statearr_12092_12126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (17))){
var inst_12040 = (state_12074[(7)]);
var inst_12044 = cljs.core.chunk_first.call(null,inst_12040);
var inst_12045 = cljs.core.chunk_rest.call(null,inst_12040);
var inst_12046 = cljs.core.count.call(null,inst_12044);
var inst_12026 = inst_12045;
var inst_12027 = inst_12044;
var inst_12028 = inst_12046;
var inst_12029 = (0);
var state_12074__$1 = (function (){var statearr_12093 = state_12074;
(statearr_12093[(8)] = inst_12026);

(statearr_12093[(10)] = inst_12027);

(statearr_12093[(11)] = inst_12029);

(statearr_12093[(12)] = inst_12028);

return statearr_12093;
})();
var statearr_12094_12127 = state_12074__$1;
(statearr_12094_12127[(2)] = null);

(statearr_12094_12127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (3))){
var inst_12072 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12074__$1,inst_12072);
} else {
if((state_val_12075 === (12))){
var inst_12060 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
var statearr_12095_12128 = state_12074__$1;
(statearr_12095_12128[(2)] = inst_12060);

(statearr_12095_12128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (2))){
var state_12074__$1 = state_12074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12074__$1,(4),in$);
} else {
if((state_val_12075 === (23))){
var inst_12068 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
var statearr_12096_12129 = state_12074__$1;
(statearr_12096_12129[(2)] = inst_12068);

(statearr_12096_12129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (19))){
var inst_12055 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
var statearr_12097_12130 = state_12074__$1;
(statearr_12097_12130[(2)] = inst_12055);

(statearr_12097_12130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (11))){
var inst_12026 = (state_12074[(8)]);
var inst_12040 = (state_12074[(7)]);
var inst_12040__$1 = cljs.core.seq.call(null,inst_12026);
var state_12074__$1 = (function (){var statearr_12098 = state_12074;
(statearr_12098[(7)] = inst_12040__$1);

return statearr_12098;
})();
if(inst_12040__$1){
var statearr_12099_12131 = state_12074__$1;
(statearr_12099_12131[(1)] = (14));

} else {
var statearr_12100_12132 = state_12074__$1;
(statearr_12100_12132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (9))){
var inst_12062 = (state_12074[(2)]);
var inst_12063 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12074__$1 = (function (){var statearr_12101 = state_12074;
(statearr_12101[(15)] = inst_12062);

return statearr_12101;
})();
if(cljs.core.truth_(inst_12063)){
var statearr_12102_12133 = state_12074__$1;
(statearr_12102_12133[(1)] = (21));

} else {
var statearr_12103_12134 = state_12074__$1;
(statearr_12103_12134[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (5))){
var inst_12018 = cljs.core.async.close_BANG_.call(null,out);
var state_12074__$1 = state_12074;
var statearr_12104_12135 = state_12074__$1;
(statearr_12104_12135[(2)] = inst_12018);

(statearr_12104_12135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (14))){
var inst_12040 = (state_12074[(7)]);
var inst_12042 = cljs.core.chunked_seq_QMARK_.call(null,inst_12040);
var state_12074__$1 = state_12074;
if(inst_12042){
var statearr_12105_12136 = state_12074__$1;
(statearr_12105_12136[(1)] = (17));

} else {
var statearr_12106_12137 = state_12074__$1;
(statearr_12106_12137[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (16))){
var inst_12058 = (state_12074[(2)]);
var state_12074__$1 = state_12074;
var statearr_12107_12138 = state_12074__$1;
(statearr_12107_12138[(2)] = inst_12058);

(statearr_12107_12138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12075 === (10))){
var inst_12027 = (state_12074[(10)]);
var inst_12029 = (state_12074[(11)]);
var inst_12034 = cljs.core._nth.call(null,inst_12027,inst_12029);
var state_12074__$1 = state_12074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12074__$1,(13),out,inst_12034);
} else {
if((state_val_12075 === (18))){
var inst_12040 = (state_12074[(7)]);
var inst_12049 = cljs.core.first.call(null,inst_12040);
var state_12074__$1 = state_12074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12074__$1,(20),out,inst_12049);
} else {
if((state_val_12075 === (8))){
var inst_12029 = (state_12074[(11)]);
var inst_12028 = (state_12074[(12)]);
var inst_12031 = (inst_12029 < inst_12028);
var inst_12032 = inst_12031;
var state_12074__$1 = state_12074;
if(cljs.core.truth_(inst_12032)){
var statearr_12108_12139 = state_12074__$1;
(statearr_12108_12139[(1)] = (10));

} else {
var statearr_12109_12140 = state_12074__$1;
(statearr_12109_12140[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto__))
;
return ((function (switch__9505__auto__,c__9617__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9506__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9506__auto____0 = (function (){
var statearr_12113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12113[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9506__auto__);

(statearr_12113[(1)] = (1));

return statearr_12113;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9506__auto____1 = (function (state_12074){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_12074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e12114){if((e12114 instanceof Object)){
var ex__9509__auto__ = e12114;
var statearr_12115_12141 = state_12074;
(statearr_12115_12141[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12142 = state_12074;
state_12074 = G__12142;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9506__auto__ = function(state_12074){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9506__auto____1.call(this,state_12074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9506__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9506__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto__))
})();
var state__9619__auto__ = (function (){var statearr_12116 = f__9618__auto__.call(null);
(statearr_12116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto__);

return statearr_12116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto__))
);

return c__9617__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12143 = [];
var len__7479__auto___12146 = arguments.length;
var i__7480__auto___12147 = (0);
while(true){
if((i__7480__auto___12147 < len__7479__auto___12146)){
args12143.push((arguments[i__7480__auto___12147]));

var G__12148 = (i__7480__auto___12147 + (1));
i__7480__auto___12147 = G__12148;
continue;
} else {
}
break;
}

var G__12145 = args12143.length;
switch (G__12145) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12143.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12150 = [];
var len__7479__auto___12153 = arguments.length;
var i__7480__auto___12154 = (0);
while(true){
if((i__7480__auto___12154 < len__7479__auto___12153)){
args12150.push((arguments[i__7480__auto___12154]));

var G__12155 = (i__7480__auto___12154 + (1));
i__7480__auto___12154 = G__12155;
continue;
} else {
}
break;
}

var G__12152 = args12150.length;
switch (G__12152) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12150.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12157 = [];
var len__7479__auto___12208 = arguments.length;
var i__7480__auto___12209 = (0);
while(true){
if((i__7480__auto___12209 < len__7479__auto___12208)){
args12157.push((arguments[i__7480__auto___12209]));

var G__12210 = (i__7480__auto___12209 + (1));
i__7480__auto___12209 = G__12210;
continue;
} else {
}
break;
}

var G__12159 = args12157.length;
switch (G__12159) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12157.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9617__auto___12212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___12212,out){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___12212,out){
return (function (state_12183){
var state_val_12184 = (state_12183[(1)]);
if((state_val_12184 === (7))){
var inst_12178 = (state_12183[(2)]);
var state_12183__$1 = state_12183;
var statearr_12185_12213 = state_12183__$1;
(statearr_12185_12213[(2)] = inst_12178);

(statearr_12185_12213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (1))){
var inst_12160 = null;
var state_12183__$1 = (function (){var statearr_12186 = state_12183;
(statearr_12186[(7)] = inst_12160);

return statearr_12186;
})();
var statearr_12187_12214 = state_12183__$1;
(statearr_12187_12214[(2)] = null);

(statearr_12187_12214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (4))){
var inst_12163 = (state_12183[(8)]);
var inst_12163__$1 = (state_12183[(2)]);
var inst_12164 = (inst_12163__$1 == null);
var inst_12165 = cljs.core.not.call(null,inst_12164);
var state_12183__$1 = (function (){var statearr_12188 = state_12183;
(statearr_12188[(8)] = inst_12163__$1);

return statearr_12188;
})();
if(inst_12165){
var statearr_12189_12215 = state_12183__$1;
(statearr_12189_12215[(1)] = (5));

} else {
var statearr_12190_12216 = state_12183__$1;
(statearr_12190_12216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (6))){
var state_12183__$1 = state_12183;
var statearr_12191_12217 = state_12183__$1;
(statearr_12191_12217[(2)] = null);

(statearr_12191_12217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (3))){
var inst_12180 = (state_12183[(2)]);
var inst_12181 = cljs.core.async.close_BANG_.call(null,out);
var state_12183__$1 = (function (){var statearr_12192 = state_12183;
(statearr_12192[(9)] = inst_12180);

return statearr_12192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12183__$1,inst_12181);
} else {
if((state_val_12184 === (2))){
var state_12183__$1 = state_12183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12183__$1,(4),ch);
} else {
if((state_val_12184 === (11))){
var inst_12163 = (state_12183[(8)]);
var inst_12172 = (state_12183[(2)]);
var inst_12160 = inst_12163;
var state_12183__$1 = (function (){var statearr_12193 = state_12183;
(statearr_12193[(7)] = inst_12160);

(statearr_12193[(10)] = inst_12172);

return statearr_12193;
})();
var statearr_12194_12218 = state_12183__$1;
(statearr_12194_12218[(2)] = null);

(statearr_12194_12218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (9))){
var inst_12163 = (state_12183[(8)]);
var state_12183__$1 = state_12183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12183__$1,(11),out,inst_12163);
} else {
if((state_val_12184 === (5))){
var inst_12160 = (state_12183[(7)]);
var inst_12163 = (state_12183[(8)]);
var inst_12167 = cljs.core._EQ_.call(null,inst_12163,inst_12160);
var state_12183__$1 = state_12183;
if(inst_12167){
var statearr_12196_12219 = state_12183__$1;
(statearr_12196_12219[(1)] = (8));

} else {
var statearr_12197_12220 = state_12183__$1;
(statearr_12197_12220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (10))){
var inst_12175 = (state_12183[(2)]);
var state_12183__$1 = state_12183;
var statearr_12198_12221 = state_12183__$1;
(statearr_12198_12221[(2)] = inst_12175);

(statearr_12198_12221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12184 === (8))){
var inst_12160 = (state_12183[(7)]);
var tmp12195 = inst_12160;
var inst_12160__$1 = tmp12195;
var state_12183__$1 = (function (){var statearr_12199 = state_12183;
(statearr_12199[(7)] = inst_12160__$1);

return statearr_12199;
})();
var statearr_12200_12222 = state_12183__$1;
(statearr_12200_12222[(2)] = null);

(statearr_12200_12222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___12212,out))
;
return ((function (switch__9505__auto__,c__9617__auto___12212,out){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_12204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12204[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_12204[(1)] = (1));

return statearr_12204;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_12183){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_12183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e12205){if((e12205 instanceof Object)){
var ex__9509__auto__ = e12205;
var statearr_12206_12223 = state_12183;
(statearr_12206_12223[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12224 = state_12183;
state_12183 = G__12224;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_12183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_12183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___12212,out))
})();
var state__9619__auto__ = (function (){var statearr_12207 = f__9618__auto__.call(null);
(statearr_12207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___12212);

return statearr_12207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___12212,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12225 = [];
var len__7479__auto___12295 = arguments.length;
var i__7480__auto___12296 = (0);
while(true){
if((i__7480__auto___12296 < len__7479__auto___12295)){
args12225.push((arguments[i__7480__auto___12296]));

var G__12297 = (i__7480__auto___12296 + (1));
i__7480__auto___12296 = G__12297;
continue;
} else {
}
break;
}

var G__12227 = args12225.length;
switch (G__12227) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12225.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9617__auto___12299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___12299,out){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___12299,out){
return (function (state_12265){
var state_val_12266 = (state_12265[(1)]);
if((state_val_12266 === (7))){
var inst_12261 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12267_12300 = state_12265__$1;
(statearr_12267_12300[(2)] = inst_12261);

(statearr_12267_12300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (1))){
var inst_12228 = (new Array(n));
var inst_12229 = inst_12228;
var inst_12230 = (0);
var state_12265__$1 = (function (){var statearr_12268 = state_12265;
(statearr_12268[(7)] = inst_12230);

(statearr_12268[(8)] = inst_12229);

return statearr_12268;
})();
var statearr_12269_12301 = state_12265__$1;
(statearr_12269_12301[(2)] = null);

(statearr_12269_12301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (4))){
var inst_12233 = (state_12265[(9)]);
var inst_12233__$1 = (state_12265[(2)]);
var inst_12234 = (inst_12233__$1 == null);
var inst_12235 = cljs.core.not.call(null,inst_12234);
var state_12265__$1 = (function (){var statearr_12270 = state_12265;
(statearr_12270[(9)] = inst_12233__$1);

return statearr_12270;
})();
if(inst_12235){
var statearr_12271_12302 = state_12265__$1;
(statearr_12271_12302[(1)] = (5));

} else {
var statearr_12272_12303 = state_12265__$1;
(statearr_12272_12303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (15))){
var inst_12255 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12273_12304 = state_12265__$1;
(statearr_12273_12304[(2)] = inst_12255);

(statearr_12273_12304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (13))){
var state_12265__$1 = state_12265;
var statearr_12274_12305 = state_12265__$1;
(statearr_12274_12305[(2)] = null);

(statearr_12274_12305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (6))){
var inst_12230 = (state_12265[(7)]);
var inst_12251 = (inst_12230 > (0));
var state_12265__$1 = state_12265;
if(cljs.core.truth_(inst_12251)){
var statearr_12275_12306 = state_12265__$1;
(statearr_12275_12306[(1)] = (12));

} else {
var statearr_12276_12307 = state_12265__$1;
(statearr_12276_12307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (3))){
var inst_12263 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12265__$1,inst_12263);
} else {
if((state_val_12266 === (12))){
var inst_12229 = (state_12265[(8)]);
var inst_12253 = cljs.core.vec.call(null,inst_12229);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12265__$1,(15),out,inst_12253);
} else {
if((state_val_12266 === (2))){
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12265__$1,(4),ch);
} else {
if((state_val_12266 === (11))){
var inst_12245 = (state_12265[(2)]);
var inst_12246 = (new Array(n));
var inst_12229 = inst_12246;
var inst_12230 = (0);
var state_12265__$1 = (function (){var statearr_12277 = state_12265;
(statearr_12277[(10)] = inst_12245);

(statearr_12277[(7)] = inst_12230);

(statearr_12277[(8)] = inst_12229);

return statearr_12277;
})();
var statearr_12278_12308 = state_12265__$1;
(statearr_12278_12308[(2)] = null);

(statearr_12278_12308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (9))){
var inst_12229 = (state_12265[(8)]);
var inst_12243 = cljs.core.vec.call(null,inst_12229);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12265__$1,(11),out,inst_12243);
} else {
if((state_val_12266 === (5))){
var inst_12233 = (state_12265[(9)]);
var inst_12238 = (state_12265[(11)]);
var inst_12230 = (state_12265[(7)]);
var inst_12229 = (state_12265[(8)]);
var inst_12237 = (inst_12229[inst_12230] = inst_12233);
var inst_12238__$1 = (inst_12230 + (1));
var inst_12239 = (inst_12238__$1 < n);
var state_12265__$1 = (function (){var statearr_12279 = state_12265;
(statearr_12279[(11)] = inst_12238__$1);

(statearr_12279[(12)] = inst_12237);

return statearr_12279;
})();
if(cljs.core.truth_(inst_12239)){
var statearr_12280_12309 = state_12265__$1;
(statearr_12280_12309[(1)] = (8));

} else {
var statearr_12281_12310 = state_12265__$1;
(statearr_12281_12310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (14))){
var inst_12258 = (state_12265[(2)]);
var inst_12259 = cljs.core.async.close_BANG_.call(null,out);
var state_12265__$1 = (function (){var statearr_12283 = state_12265;
(statearr_12283[(13)] = inst_12258);

return statearr_12283;
})();
var statearr_12284_12311 = state_12265__$1;
(statearr_12284_12311[(2)] = inst_12259);

(statearr_12284_12311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (10))){
var inst_12249 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12285_12312 = state_12265__$1;
(statearr_12285_12312[(2)] = inst_12249);

(statearr_12285_12312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (8))){
var inst_12238 = (state_12265[(11)]);
var inst_12229 = (state_12265[(8)]);
var tmp12282 = inst_12229;
var inst_12229__$1 = tmp12282;
var inst_12230 = inst_12238;
var state_12265__$1 = (function (){var statearr_12286 = state_12265;
(statearr_12286[(7)] = inst_12230);

(statearr_12286[(8)] = inst_12229__$1);

return statearr_12286;
})();
var statearr_12287_12313 = state_12265__$1;
(statearr_12287_12313[(2)] = null);

(statearr_12287_12313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___12299,out))
;
return ((function (switch__9505__auto__,c__9617__auto___12299,out){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_12291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12291[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_12291[(1)] = (1));

return statearr_12291;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_12265){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_12265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e12292){if((e12292 instanceof Object)){
var ex__9509__auto__ = e12292;
var statearr_12293_12314 = state_12265;
(statearr_12293_12314[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12315 = state_12265;
state_12265 = G__12315;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___12299,out))
})();
var state__9619__auto__ = (function (){var statearr_12294 = f__9618__auto__.call(null);
(statearr_12294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___12299);

return statearr_12294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___12299,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12316 = [];
var len__7479__auto___12390 = arguments.length;
var i__7480__auto___12391 = (0);
while(true){
if((i__7480__auto___12391 < len__7479__auto___12390)){
args12316.push((arguments[i__7480__auto___12391]));

var G__12392 = (i__7480__auto___12391 + (1));
i__7480__auto___12391 = G__12392;
continue;
} else {
}
break;
}

var G__12318 = args12316.length;
switch (G__12318) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12316.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9617__auto___12394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9617__auto___12394,out){
return (function (){
var f__9618__auto__ = (function (){var switch__9505__auto__ = ((function (c__9617__auto___12394,out){
return (function (state_12360){
var state_val_12361 = (state_12360[(1)]);
if((state_val_12361 === (7))){
var inst_12356 = (state_12360[(2)]);
var state_12360__$1 = state_12360;
var statearr_12362_12395 = state_12360__$1;
(statearr_12362_12395[(2)] = inst_12356);

(statearr_12362_12395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (1))){
var inst_12319 = [];
var inst_12320 = inst_12319;
var inst_12321 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12360__$1 = (function (){var statearr_12363 = state_12360;
(statearr_12363[(7)] = inst_12320);

(statearr_12363[(8)] = inst_12321);

return statearr_12363;
})();
var statearr_12364_12396 = state_12360__$1;
(statearr_12364_12396[(2)] = null);

(statearr_12364_12396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (4))){
var inst_12324 = (state_12360[(9)]);
var inst_12324__$1 = (state_12360[(2)]);
var inst_12325 = (inst_12324__$1 == null);
var inst_12326 = cljs.core.not.call(null,inst_12325);
var state_12360__$1 = (function (){var statearr_12365 = state_12360;
(statearr_12365[(9)] = inst_12324__$1);

return statearr_12365;
})();
if(inst_12326){
var statearr_12366_12397 = state_12360__$1;
(statearr_12366_12397[(1)] = (5));

} else {
var statearr_12367_12398 = state_12360__$1;
(statearr_12367_12398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (15))){
var inst_12350 = (state_12360[(2)]);
var state_12360__$1 = state_12360;
var statearr_12368_12399 = state_12360__$1;
(statearr_12368_12399[(2)] = inst_12350);

(statearr_12368_12399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (13))){
var state_12360__$1 = state_12360;
var statearr_12369_12400 = state_12360__$1;
(statearr_12369_12400[(2)] = null);

(statearr_12369_12400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (6))){
var inst_12320 = (state_12360[(7)]);
var inst_12345 = inst_12320.length;
var inst_12346 = (inst_12345 > (0));
var state_12360__$1 = state_12360;
if(cljs.core.truth_(inst_12346)){
var statearr_12370_12401 = state_12360__$1;
(statearr_12370_12401[(1)] = (12));

} else {
var statearr_12371_12402 = state_12360__$1;
(statearr_12371_12402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (3))){
var inst_12358 = (state_12360[(2)]);
var state_12360__$1 = state_12360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12360__$1,inst_12358);
} else {
if((state_val_12361 === (12))){
var inst_12320 = (state_12360[(7)]);
var inst_12348 = cljs.core.vec.call(null,inst_12320);
var state_12360__$1 = state_12360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12360__$1,(15),out,inst_12348);
} else {
if((state_val_12361 === (2))){
var state_12360__$1 = state_12360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12360__$1,(4),ch);
} else {
if((state_val_12361 === (11))){
var inst_12328 = (state_12360[(10)]);
var inst_12324 = (state_12360[(9)]);
var inst_12338 = (state_12360[(2)]);
var inst_12339 = [];
var inst_12340 = inst_12339.push(inst_12324);
var inst_12320 = inst_12339;
var inst_12321 = inst_12328;
var state_12360__$1 = (function (){var statearr_12372 = state_12360;
(statearr_12372[(11)] = inst_12338);

(statearr_12372[(7)] = inst_12320);

(statearr_12372[(12)] = inst_12340);

(statearr_12372[(8)] = inst_12321);

return statearr_12372;
})();
var statearr_12373_12403 = state_12360__$1;
(statearr_12373_12403[(2)] = null);

(statearr_12373_12403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (9))){
var inst_12320 = (state_12360[(7)]);
var inst_12336 = cljs.core.vec.call(null,inst_12320);
var state_12360__$1 = state_12360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12360__$1,(11),out,inst_12336);
} else {
if((state_val_12361 === (5))){
var inst_12328 = (state_12360[(10)]);
var inst_12324 = (state_12360[(9)]);
var inst_12321 = (state_12360[(8)]);
var inst_12328__$1 = f.call(null,inst_12324);
var inst_12329 = cljs.core._EQ_.call(null,inst_12328__$1,inst_12321);
var inst_12330 = cljs.core.keyword_identical_QMARK_.call(null,inst_12321,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12331 = (inst_12329) || (inst_12330);
var state_12360__$1 = (function (){var statearr_12374 = state_12360;
(statearr_12374[(10)] = inst_12328__$1);

return statearr_12374;
})();
if(cljs.core.truth_(inst_12331)){
var statearr_12375_12404 = state_12360__$1;
(statearr_12375_12404[(1)] = (8));

} else {
var statearr_12376_12405 = state_12360__$1;
(statearr_12376_12405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (14))){
var inst_12353 = (state_12360[(2)]);
var inst_12354 = cljs.core.async.close_BANG_.call(null,out);
var state_12360__$1 = (function (){var statearr_12378 = state_12360;
(statearr_12378[(13)] = inst_12353);

return statearr_12378;
})();
var statearr_12379_12406 = state_12360__$1;
(statearr_12379_12406[(2)] = inst_12354);

(statearr_12379_12406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (10))){
var inst_12343 = (state_12360[(2)]);
var state_12360__$1 = state_12360;
var statearr_12380_12407 = state_12360__$1;
(statearr_12380_12407[(2)] = inst_12343);

(statearr_12380_12407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12361 === (8))){
var inst_12328 = (state_12360[(10)]);
var inst_12320 = (state_12360[(7)]);
var inst_12324 = (state_12360[(9)]);
var inst_12333 = inst_12320.push(inst_12324);
var tmp12377 = inst_12320;
var inst_12320__$1 = tmp12377;
var inst_12321 = inst_12328;
var state_12360__$1 = (function (){var statearr_12381 = state_12360;
(statearr_12381[(14)] = inst_12333);

(statearr_12381[(7)] = inst_12320__$1);

(statearr_12381[(8)] = inst_12321);

return statearr_12381;
})();
var statearr_12382_12408 = state_12360__$1;
(statearr_12382_12408[(2)] = null);

(statearr_12382_12408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9617__auto___12394,out))
;
return ((function (switch__9505__auto__,c__9617__auto___12394,out){
return (function() {
var cljs$core$async$state_machine__9506__auto__ = null;
var cljs$core$async$state_machine__9506__auto____0 = (function (){
var statearr_12386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12386[(0)] = cljs$core$async$state_machine__9506__auto__);

(statearr_12386[(1)] = (1));

return statearr_12386;
});
var cljs$core$async$state_machine__9506__auto____1 = (function (state_12360){
while(true){
var ret_value__9507__auto__ = (function (){try{while(true){
var result__9508__auto__ = switch__9505__auto__.call(null,state_12360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9508__auto__;
}
break;
}
}catch (e12387){if((e12387 instanceof Object)){
var ex__9509__auto__ = e12387;
var statearr_12388_12409 = state_12360;
(statearr_12388_12409[(5)] = ex__9509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12410 = state_12360;
state_12360 = G__12410;
continue;
} else {
return ret_value__9507__auto__;
}
break;
}
});
cljs$core$async$state_machine__9506__auto__ = function(state_12360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9506__auto____1.call(this,state_12360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9506__auto____0;
cljs$core$async$state_machine__9506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9506__auto____1;
return cljs$core$async$state_machine__9506__auto__;
})()
;})(switch__9505__auto__,c__9617__auto___12394,out))
})();
var state__9619__auto__ = (function (){var statearr_12389 = f__9618__auto__.call(null);
(statearr_12389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9617__auto___12394);

return statearr_12389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9619__auto__);
});})(c__9617__auto___12394,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map