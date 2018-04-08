var request = require('request');

// Simple Example (Request to yahooapis)
// request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
//     if(error) {
//         console.log("SOMETHING WRONG! Error : ", error);
//     }
//     else {
//         if(response.statusCode == 200) {
//             console.log('body:', body); // Print the HTML for the Google homepage.
//         }
//     }
// });

// Error Example :
// request('http://SomeStupidPageForErrorTest.com', function (error, response, body) {
//     if(error) {
//         console.log("SOMETHING WRONG! Error : ", error);
//     }
//     else {
//         if(response.statusCode == 200) {
//             console.log('body:', body); // Print the HTML for the Google homepage.
//         }
//     }
// });

request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log(typeof body);   //It is json but it comes as string.
        var parsedData = JSON.parse(body);  // To parse string as JSON we use JSON.parse()
        console.log("Count   : ", parsedData.query.count);          // Js Object
        console.log("Count   : ", parsedData["query"]["count"]);    // So we can access like that.
        console.log("Lang    : ", parsedData.query.lang);
        console.log("Created : ", parsedData.query.created);
        console.log("Results : ", parsedData.query.results);
    }
});