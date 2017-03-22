'use strict';

mainModule.controller('fileUploader', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.loadedFile;
        var uploadUrl = "/api/" + file.name;
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);
