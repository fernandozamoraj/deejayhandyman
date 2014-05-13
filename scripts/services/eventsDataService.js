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
                        list.push({name: tokens[0] || '', location: tokens[1] || '', date: tokens[2] || '', sequence: getSortableDate(tokens[2])});
                    }, function(list){
                        events = list;
                    }
                );

                onDone(events);
            });
        }
    };


    //e.g. convert date from November 12, 2014 to 20141112 (YYYYMMDD) for sorting purposes
    function getSortableDate(simpleDateString){

        var newString = '';

        if(!simpleDateString)
            return ' ';

        var tokens = simpleDateString.split(' ');

        newString += tokens[2] || '2013';
        newString += getMonth(tokens[0]);
        newString += getDay(tokens[1]);

        return newString;
    }

    function getDay(day){

        if(!day)
            return 00;
        switch(day)
        {
            case '1,': case '1': return '01,';
            case '2,': case '2': return '02,';
            case '3,': case '3': return '03,';
            case '4,': case '4': return '04,';
            case '5,': case '5': return '05,';
            case '6,': case '6': return '06,';
            case '7,': case '7': return '07,';
            case '8,': case '8': return '08,';
            case '9,': case '9': return '09,';
        }

        return day;

    }

    function getMonth(month){
        if(!month)
            return '00';
        switch(month)
        {
            case 'January':   case 'Jan': return '01';
            case 'February':  case 'Feb': return '02';
            case 'March':     case 'Mar': return '03';
            case 'April':     case 'Apr': return '04';
            case 'May':                   return '05';
            case 'June':      case 'Jun': return '06';
            case 'July':      case 'Jul': return '07';
            case 'August':    case 'Aug': return '08';
            case 'September': case 'Sep': return '09';
            case 'October':   case 'Oct': return '10';
            case 'November':  case 'Nov': return '11';
            case 'December':  case 'Dec': return '12';
        }

        return '00';
    }
});