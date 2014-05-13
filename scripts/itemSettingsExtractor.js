function extractItems(domainSettings, keyWordPrefix, maxItems, pushCallBack, doneCallback){
    var list = [];
    if(domainSettings && domainSettings.length && domainSettings.length > 0){
        var count = 0;
        for(var i = 0;i< domainSettings.length; i++){
            if(domainSettings[i].key.indexOf(keyWordPrefix) === 0){
                count++;
                var value = domainSettings[i].value;

                //skip any events that are blank
                if(!value || value.length < 1)
                    continue;

                pushCallBack(list, value);
            }
            if(maxItems > 0 && count >= maxItems)
                break;
        }
    }

    doneCallback(list);
}