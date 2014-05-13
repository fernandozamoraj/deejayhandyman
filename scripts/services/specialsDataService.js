handymanApp.factory('specialsDataService', function(settingsDataService){
    return {

        getAll : function(onDone){
            settingsDataService.getDomainSettings( function(domainSettings){
                var specials = [];
                extractItems(domainSettings, 'special', 5,
                    function(list, value){
                        list.push({content : value});
                    }, function(list){
                        specials = list;
                    }
                );

                onDone(specials);
            });
        }
    };
});