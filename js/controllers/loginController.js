app.controller('loginCtrl',function($scope,myfac){
    $scope.send = function(){
        console.log('Inside Send ');

        var uname = $scope.uname;
        var pwd = $scope.pwd;

        var userObj = {
            uname: uname,
            pwd:pwd
        }
        var loginPr = myfac.login(userObj);

        loginPr.then(data=>{
            alert('Login Successful..');
            console.log('Window is',window);
            window.location.href = './main.html';
        }).catch(err=>{
            alert('Invalid Username or password');
            console.log('Error ',err);
        });
    }    
})