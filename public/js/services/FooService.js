angular.module('FooService', []).factory('Foo', ['$http', function($http) {

    return {
        // call to get all nerds
        getall : function(data) {
            return $http.get('/api/jsondb/' + data.name);
        },

        postrecord : function(data) {
            return $http.post('/api/jsondb/' + data.name + '/' + data.id , data);
        },

        createtable : function(data) {
            return $http.post('/api/jsondb/' + data.name);
        },

        deletetable : function(data) {
            var config = {
                method: "DELETE",
                url: '/api/jsondb/deletetable',
                data: data,
                headers: {"Content-Type": "application/json;charset=utf-8"}
            };
            //return $http(config);
            return $http.delete('/api/jsondb/' + data.name);
        },
    };

}]);
