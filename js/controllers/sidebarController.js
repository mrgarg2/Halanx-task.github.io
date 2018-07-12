app.controller('sidebarCtrl',function($scope){

    $scope.showSidebar = false;
    
    $scope.open = function(){
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';

        $scope.showSidebar = true;
    }

    $scope.close = function w3_close() {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";

        $scope.showSidebar = false;
    }


})