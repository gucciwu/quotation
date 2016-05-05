/**
 * Created by Gucci Wu on 2016-5-4.
 */

//Read json string from file
function readJsonFile(fileURL){
    //input: string
    //output: json

    $.getJSON(fileURL,
        function(data){
            alert(data);

            var dataFormatted;
            dataFormatted = eval(data);

            return dataFormatted;
        }
    )

}

function convertJson2Array(jsonFileURL){
    var jsonData;

    jsonData = readJsonFile(jsonFileURL);
    alert(jsonData);
    return $.parseJSON(jsonData);

}

function buildTimeSharingX(jsonFileURL){
    //build xAxis data for time sharing chart
    //input: array
    //output: array

    var jsonData, stockData;
    stockData = new Array();

    $.getJSON(jsonFileURL,
        function(data){

            jsonData = eval(data);

            for(var i=0;i<jsonData.length-1;i++){
                stockData.push(jsonData[i].time);
            }
            return stockData;
        }
    );
}

function buildTimeSharingY(jsonFileURL){

    var jsonData, stockData;
    stockData = new Array();

    $.getJSON(jsonFileURL,
        function(data){

            jsonData = eval(data);

            for(var i=0;i<jsonData.length-1;i++){
                stockData.push(jsonData[i].price);
            }
            return stockData;
        }
    );
}


