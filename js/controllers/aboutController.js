app.controller('homectrl',function($scope,myfac){
    
    $scope.monday = 10;

    $scope.getPlotDetails = function(){
        console.log('Inside Get Details');

        var pr = myfac.getplotDetails();

        pr.then(response=>{
            $scope.details = response;
            console.log('response is',response);
            $scope.visitLog = response.data.visits;
            console.log('Visit Log is',$scope.visitLog);
            configChart(response.data.visits);

        }).catch(err=>$scope.details = err);

    }

    $scope.getStoreDetails = function(){
        var pr = myfac.storeDetails();

        pr.then(response =>{
            $scope.stDetails = response.data;
            console.log('Store Details are', response);
        }).catch(err => $scope.stDetails = err);
    }

    $scope.getPlotDetails();
    $scope.getStoreDetails();
})