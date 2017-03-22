'use strict';

mainModule.controller('fileList', function($scope, $http){
    $http.get('http://localhost:3000/api')
    .then(function (response) {
        $scope.fileList = response.data;
    });

    $scope.sendFileName = function(fileName){
        $scope.recognizedData = fileName.file.labels;
    }

    $scope.removeFile = function(item){
        $scope.fileList.splice(item.$index,1)
        $http.delete('http://localhost:3000/api/'+item.file.fileName);
    }

    $scope.orderByTableHeader = function(x) {
        $scope.tableHeader = x;
    }

    $scope.idChecker = function(file){
        $scope.fileId = file.$id;
    }

    $scope.isValidId = function(id){
        if(id.$id == $scope.fileId){
            return true;
        } else {
            return false;
        }
    }
});