mainModule.controller('recognizedFile', function($scope){
    $scope.recognizedData = 
    {
            "Labels": [
                {
                    "Confidence": 98.48754119873047,
                    "Name": "Computer"
                },
                {
                    "Confidence": 98.48754119873047,
                    "Name": "Electronics"
                },
                {
                    "Confidence": 98.48754119873047,
                    "Name": "LCD Screen"
                },
                {
                    "Confidence": 98.48754119873047,
                    "Name": "Laptop"
                },
                {
                    "Confidence": 98.48754119873047,
                    "Name": "Pc"
                },
                {
                    "Confidence": 82.1984634399414,
                    "Name": "Monitor"
                },
                {
                    "Confidence": 82.1984634399414,
                    "Name": "Screen"
                }
            ],
            "OrientationCorrection": "ROTATE_0"
        };

    $scope.orderByTableHeader = function(x) {
        $scope.tableHeader = x;
    }    
});