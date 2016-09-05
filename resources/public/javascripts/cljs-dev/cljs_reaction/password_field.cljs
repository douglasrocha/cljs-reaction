(ns cljs-reaction.password-field
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn password-field [*label* *placeholder*]
    [:div {:class "r-text-field"}
          [:label {:class "r-lbl-textfield"}
                  *label*]
          [:input {:class "r-text-textfield"
                   :placeholder *placeholder*
                   :type :password}
                  nil]])
