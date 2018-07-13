app.controller('aboutctrl', function($scope, myfac){
    $scope.getResponse = function () {
        console.log('Inside Get Response');

        var pr = myfac.getOpeningHours();

        pr.then((response) => {
            $scope.days = response.data;
        }).catch(err => {
            console.log('Inside Controller Catch', err);
            $scope.days = err;
        })
    }

    $scope.time = function(){
        // var value = angular.element(document.querySelector('#timepicker'));
        console.log('value is',$scope.monday);
    }

    $scope.getResponse();
})