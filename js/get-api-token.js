$(document).ready(function () {

    $.ajax({
        url: "https://webpac.sutherlandshire.nsw.gov.au:443/iii/sierra-api/v6/token/",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic [API KEY + SECRET (BASE64)]")
            //generate the auth header by Base64 the Sierra API Key/Secret
        }, 
        success: function (data) {
            console.log(data);
            //process the JSON data etc
        },
        error: function (response) {
            console.log(response);
        }
    });

    $.get("http://webpac.sutherlandshire.nsw.gov.au/feeds/newbiographies.xml", function (data) {
        console.log(data);
    });
    
});