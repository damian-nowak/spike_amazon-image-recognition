describe('Test for fileAdd Controller', function () {
    beforeEach(angular.mock.module("mainModule"));

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope;
        $controller('fileAdd', { $scope: scope });
    }));


    it('it should return false for var tmpMesage', function () {
        expect(scope.tmpMessage).toBeDefined();
    });

    it('it should return true when fileId = 1', function(){
        scope.idChecker = 1;
        expect(scope.isValidId(1)).toBe(true);
    });

    it('it should return json with list of files from http resource', function(){
        expect(scope.fileList).not.toBeDefined(scope.loadFilesList());
        scope.loadFilesList();
        expect(scope.fileList).toBe(scope.loadFilesList());
    });


});