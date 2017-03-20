'use strict';
var mainModule = angular.module('mainModule',[]);

mainModule.filter('bestConfidence',function(){
    var highConfidence = 90;
    return function(param){
        if(param >= highConfidence){
            return param;
        }
    }
});