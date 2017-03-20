mainModule.controller('fileList', function($scope){
    $scope.fileList = 
        [
            { id : 1, name : 'file1.jpg' },
            { id : 2, name : 'file2.jpg' },
            { id : 3, name : 'file3.jpg' },
            { id : 4, name : 'file4.jpg' },
            { id : 5, name : 'file5.jpg' },
            { id : 6, name : 'file6.jpg' },
            { id : 7, name : 'file7.jpg' },
            { id : 8, name : 'file8.jpg' },
            { id : 9, name : 'file9.jpg' },
            { id : 10, name : 'file10.jpg' }            
        ];

       $scope.isShowableTag = true;

});