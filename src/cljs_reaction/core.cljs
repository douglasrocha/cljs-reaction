(ns cljs-reaction.core
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]
              [cljs-reaction.title :as reaction-title :refer (title)]
              [cljs-reaction.login-form :as reaction-login-form :refer (login-form)]
              [cljs-reaction.article :as reaction-article :refer (article)]
              [cljs-reaction.radio-button :as reaction-radio-button :refer (radio-button)]
              [cljs-reaction.checkbox :as reaction-checkbox :refer (checkbox)]))

(defn app []
    [:div {:class "reaction-wrapper"}
        [title
            "Clojurescript Reaction"
            "Welcome to the best clojurescript components' library using reagent"]
        [login-form "Please sign in"
                    "Username:"
                    "Username"
                    "Password:"
                    "Password"]
        [article
            [:h1 {} "This is a title for our article header"]
            [:div {}
                  [:p {} "This paragraph is an example of our article's body."]
                  [:p {} "This is a second paragraph to illustrate a full article's body"]]]
        [:div {}
              [radio-button "Radiobutton 1" 1]
              [radio-button "Radiobutton 2" 2]
              [radio-button "Radiobutton 3" 3]
              [radio-button "Radiobutton 4" 4]]
        [:div {}
              [checkbox "Checkbox 1" 1]
              [checkbox "Checkbox 2" 2]
              [checkbox "Checkbox 3" 3]
              [checkbox "Checkbox 4" 4]]])

(reagent/render [app]
    (js/document.querySelector "#cljs-target"))
