handymanApp.controller('specialsController', function eventController($scope, specialsDataService){

    specialsDataService.getAll(function(specials){
        $scope.specials = specials;
    });
});