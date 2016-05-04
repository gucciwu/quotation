/**
 * Created by Gucci Wu on 2016-5-4.
 */

//Read json string from file
function readJsonFile(fileURL){

    $.getJSON(fileURL,
        function(data){
            return data;
        }
    )

}

function convertJson2Array(jsonFileURL){
    var jsonData, arrayData;

    jsonData = readJsonFile(jsonFileURL);
    arrayData = parseJSON(jsonData);

}


