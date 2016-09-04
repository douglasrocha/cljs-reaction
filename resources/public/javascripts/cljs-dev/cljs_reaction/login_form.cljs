(ns cljs-reaction.login-form
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn login-form [*title*]
    [:div {:class "r-login-form"}
          [:h2 {:class "r-login-title"}
               *title*]
          [:label {:class "r-lbl-username"}
                  "Username:"]
          [:input {:type :text
                   :placeholder "Email address"
                   :class "r-input-username"}
                  nil]
          [:label {:class "r-lbl-password"}
                  "Password:"]
          [:input {:type :password
                   :placeholder "Password"
                   :class "r-input-password"}
                  nil]])
