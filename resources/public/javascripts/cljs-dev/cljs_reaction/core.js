// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs_reaction.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_reaction.title');
goog.require('cljs_reaction.login_form');
cljs_reaction.core.app = (function cljs_reaction$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.title.title,"Clojurescript Reaction","Welcome to the best clojurescript components' library using reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.login_form.login_form,"Please sign in"], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map