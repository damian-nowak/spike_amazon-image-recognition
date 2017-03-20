mainModule.controller('fileList', function($scope, $http){
    $http.get('http://localhost:3000/api').then(function (response) {
        $scope.fileList = response.data;
    });

    $scope.isShowableTag = true;
});