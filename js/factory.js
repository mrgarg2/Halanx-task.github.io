app.factory('myfac', ($http, $q) => {
    var obj = {
        storeDetails() {
            console.log('Inside Store Details');
            var defer = $q.defer();
            var config = {
                headers: {
                    "Authorization": "Basic dGVzdDp0ZXN0"
                }
            };
            
            $http.get('https://api.halanx.com/stores/', config).then(response => {
                console.log('Response is ', response);
                defer.resolve(response);
            }, err => {
                console.log('Error is', err);
                defer.reject(err);
            })

            return defer.promise;
        },

        getplotDetails() {
            console.log('Inside Plot Details')
            var defer = $q.defer();

            var config = {
                headers: {
                    "Authorization": "Basic dGVzdDp0ZXN0"
                }
            };

            $http.get('https://api.halanx.com/stores/dashboard/plots/?visits=true&from_date=2018-01-01&to_date=2018-07-01',config).then((data) => {
                console.log('Opening Hours are', data);
                defer.resolve(data);
            }, err => {
                console.log('Error is', err);
                defer.reject(err);
            });

            return defer.promise;
        },

        getOpeningHours() {
            var defer = $q.defer();

            var config = {
                headers: {
                    "Authorization": "Basic dGVzdDp0ZXN0"
                }
            };

            $http.get('https://api.halanx.com/places/place/17/openinghours/',config).then((data) => {
                console.log('Opening Hours are', data);
                defer.resolve(data);
            }, err => {
                console.log('Error is', err);
                defer.reject(err);
            });

            return defer.promise;
        },

        login(userObj){
            var defer = $q.defer();

            var body = {
                username : userObj.uname,
                password: userObj.pwd
            }
            $http.post('https://api.halanx.com/rest-auth/login/',body).then((data)=>{
                localStorage.key = data.key;
                defer.resolve(data);
            },err=>{
                defer.reject(err);
            });

            return defer.promise;
        },

        logOut(){

            var defer = $q.defer();

            var body = {
                key : localStorage.key
            }

            $http.post('https://api.halanx.com/rest-auth/logout/',body).then((data)=>{
                defer.resolve(data);
            },err=>{
                defer.reject(err);
            });

            return defer.promise;
        }
    }
    return obj;
})