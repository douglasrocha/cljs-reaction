(ns cljs-reaction.core
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]
              [cljs-reaction.title :as reaction-title :refer (title)]
              [cljs-reaction.login-form :as reaction-login-form :refer (login-form)]))

(defn app []
    [:div {}
        [title
            "Clojurescript Reaction"
            "Welcome to the best clojurescript components' library using reagent"]
        [login-form "Please sign in"
                    "Username:"
                    "Username"
                    "Password:"
                    "Password"]])

(reagent/render [app]
    (js/document.querySelector "#cljs-target"))
