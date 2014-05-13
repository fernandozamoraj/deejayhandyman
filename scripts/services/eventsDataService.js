/**
 * Created by fernando on 5/12/2014.
 */
handymanApp.factory('eventsDataService', function(settingsDataService){
    return {

        getAll : function(onDone){
            settingsDataService.getDomainSettings( function(domainSettings){
                var events = [];
                extractItems(domainSettings, 'event', 5, function(list, value){
                        var tokens = value.split('|');
                        list.push({name: tokens[0] || '', location: tokens[1] || '', date: tokens[2] || '' });
                    }, function(list){
                        events = list;
                    }
                );

                onDone(events);
            });
        }
    };
});