angular.module('JsonCtrl', []).controller('JsonController', function($scope, Json) {
    $scope.table = {};
    $scope.alerts = [];

    $scope.createTable = function() {
        Json.createtable($scope.table).
            success(function(data, status, headers, config) {
            console.log("success create");
            addAlert('success', data);
        }).
            error(function(data, status, headers, config) {
            console.log(data);
            addAlert('danger', data);
        });
    };

    $scope.deleteTable = function() {
        console.log($scope.table);
        Json.deletetable($scope.table).
            success(function(data, status, headers, config) {
            console.log("successful delete");
            addAlert('success', data);
        }).
            error(function(data, status, headers, config) {
            console.log(data);
            addAlert('danger', data);
        });
    };

    $scope.postRecord = function() {
        Json.postrecord($scope.table).
            success(function(data, status, headers, config) {
            console.log("success create record");
            addAlert('success', data);
        }).
            error(function(data, status, headers, config) {
            console.log(data);
            addAlert('danger', data);
        });
    };

    $scope.scanTable = function() {
        Json.getall($scope.table).
            success(function(data, status, headers, config) {
            console.log("success scan");
            var message = "";
            for (var record in data) {
                message += data[record] + "<br>";
            }
            console.log(message);
            addAlert('success', message);
        }).
            error(function(data, status, headers, config) {
            console.log(data);
            addAlert('danger', data);
        });
    };

    addAlert = function(type, message) {
        message = '<p>' + message + '</p>';
        $scope.alerts.unshift({type: type, msg: message});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});
