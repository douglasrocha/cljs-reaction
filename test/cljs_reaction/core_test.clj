(ns cljs-reaction.core-test
  (:require [clojure.test :refer :all]
            [cljs-reaction.core :refer :all]))

(deftest article-test
    (testing "Article: Nil case render problem"
             (is (= [article nil nil]
                    [:article {:class "r-article"}
                              [:header {:class "r-article-header"}
                                       nil]
                              nil])))
