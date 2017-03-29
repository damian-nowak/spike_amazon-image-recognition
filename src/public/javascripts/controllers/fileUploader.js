'use strict';
mainModule.controller('fileAdd', ['Upload', '$window', '$scope', '$http', function fileAdd(Upload, $window, $scope, $http) {
    $scope.tmpMessage = false;
    $scope.isShowableTag = true;

    $scope.loadFilesList = function(){
        $http.get('http://localhost:3000/api')
        .then(function (response) {
            $scope.fileList = response.data;     
        });    
    }

    var vm = this;
    vm.submit = function () {
        if (vm.upload_form.file.$valid && vm.file) {
            vm.upload(vm.file);
        }
    }
    
    vm.upload = function (file) {
        $scope.tmpMessage = true;
        Upload.upload({
            url: 'http://localhost:3000/api/upload',
            data: { file: file }
        }).then(function (response) {
            $scope.tmpMessage = false;
            $scope.loadFilesList();
        });
    };

    $scope.loadFilesList();

    $scope.sendFileName = function (fileName) {
        $scope.recognizedData = fileName.file.labels;
    }

    

    $scope.removeFile = function (item) {
        $scope.fileList.splice(item.$index, 1);
        $http.delete('http://localhost:3000/api/' + item.file.fileName);
    }

    $scope.orderByTableHeader = function (x) {
        $scope.tableHeader = x;
    }

    $scope.idChecker = function (file) {
        $scope.fileId = file.$id;
    }

    $scope.isValidId = function (id) {
        if (id.$id == $scope.fileId) {
            return true;
        } else {
            return false;
        }
    }
}]);