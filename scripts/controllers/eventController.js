handymanApp.controller('eventController', function eventController($scope, eventsDataService){
    eventsDataService.getAll(function(events){
        $scope.events = events;

    });
});