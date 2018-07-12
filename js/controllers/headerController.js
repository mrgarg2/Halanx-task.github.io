app.controller('headerCtrl',function($scope,myfac){

    $scope.getStoreDetails = function(){
        var pr = myfac.storeDetails();

        pr.then(response =>{
            $scope.stDetails = response.data;
            console.log('Store Details are', response);
        }).catch(err => $scope.stDetails = err);
    }

    $scope.signOut = function(){
        var pr = myfac.logOut();

        pr.then(response =>{
            alert('Succesfully Sign Out..')
            window.location.href = 'index.html';
        })
    }

    $scope.getStoreDetails();
});