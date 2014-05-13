//these are only cached so that the service only goes out to the cloud db once
//per page refresh instead of once per controller
var cachedDomainSettings;

//service to fetch the data
handymanApp.factory('settingsDataService', function($http){

    //var url = 'http://localhost:3000/clouddb/json/domain/settings?domainName=www.deejayhandyman.com&callback=JSON_CALLBACK';
    var url = 'http://merants.jit.su/clouddb/json/domain/settings?domainName=www.deejayhandyman.com&callback=JSON_CALLBACK';

    //send back the promise instead of sending back the actual data
    return { getDomainSettings : function(callback){

        if(cachedDomainSettings)
            callback(cachedDomainSettings);
        else
            $http.jsonp(url)
                .success(function(data){
                    cachedDomainSettings = data.getDomainSettings;
                    callback(data.domainSettings);
                })
                .error(function(data){
                    callback("request failed");
                });
        }
    };
});