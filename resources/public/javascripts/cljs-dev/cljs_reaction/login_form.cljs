(ns cljs-reaction.login-form
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]
              [cljs-reaction.text-field :as mytextfield :refer (text-field)]
              [cljs-reaction.password-field :as mypassword :refer (password-field)]))

(defn login-form [*title*
                  *user-text*
                  *user-placeholder*
                  *password-text*
                  *password-placeholder*]
    [:div {:class "r-login-form"}
          [:h2 {:class "r-login-title"}
               *title*]
          [text-field *user-text* *user-placeholder*]
          [password-field *password-text* *password-placeholder*]])
