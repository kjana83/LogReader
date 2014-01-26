var logReader = angular.module('LogReader',[]);

logReader.controller('LogController', function($scope,logService) {
    $scope.ViewModel = logService;
    $scope.ViewModel.Init();
});

logReader.service('logService', function($http) {
    var viewModel = function() {
        var self = this;
        this.LogData = [];
        this.ReadLogCommand = function() {
            
            $http.get('/log').success(function(data,status) {
                console.log(data);
                self.LogData = angular.fromJson(data);
            });
        };
        this.Init = function() {
            self.ReadLogCommand();
        };
    };

    return new viewModel();
});