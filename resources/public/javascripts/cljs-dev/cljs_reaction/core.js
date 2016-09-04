// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs_reaction.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_reaction.title');
goog.require('cljs_reaction.login_form');
goog.require('cljs_reaction.article');
cljs_reaction.core.app = (function cljs_reaction$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"reaction-wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.title.title,"Clojurescript Reaction","Welcome to the best clojurescript components' library using reagent"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.login_form.login_form,"Please sign in","Username:","Username","Password:","Password"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.article.article,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.PersistentArrayMap.EMPTY,"This is a title for our article header"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentArrayMap.EMPTY,"This paragraph is an example of our article's body."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentArrayMap.EMPTY,"This is a second paragraph to illustrate a full article's body"], null)], null)], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_reaction.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map