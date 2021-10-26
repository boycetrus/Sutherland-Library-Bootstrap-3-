$(document).ready(function() {

  // gDocId and postTitle are entered as part of the page template because the values for the
  // Google spreadsheet ID and post title are taken from the page metadata in the CMS 
  var API_KEY = ""; // [INSERT GOOGLE SHEETS API KEY HERE]
  var DOC_ID = "1oXeAey3ltefipz9H4puuTjIybzU3VxSJeiIeoK8Ln2o";
  var RANGE = "Live";
  var jsonSource = "https://sheets.googleapis.com/v4/spreadsheets/" + DOC_ID + "/values/" + RANGE + "?key=" + API_KEY;
  var $element = $("#loans tbody");
    
    //fetch the json feed
    $.getJSON( jsonSource, function() {
      console.log("JSON request successful");
    })
  
    .done(function(data) { 
      console.log(data);
      if (data.values.length < 2) {
        // if the json request is successful but there are no items
        $("<p class='text-danger'>JSON request succeeded but no data returned.</p>").prependTo($);
      } else {
        var $language, $branch, $retDate, $subject, $titleList, $titleListURL, $docLink;
        var rows = data.values;
        var numberOfRows = rows.length, i;

        // loop through each row of the spreadsheet but skip row 1 (i=0) as it contains the column headings
        for (i = 1; i < numberOfRows; i++) {
          var row = rows[i];
          var fields = row.length, k;
          for (k = 0; k < fields; k++) {
            // Assign the values from each column to a variable
            $language = row[0];
            $titleList = row[1];
            $titleListURL = row[2];
            $branch = row[3];
            $retDate = row[4];
            $subject = row[5];
            if ($titleListURL !== "") {
              $docLink = "<a href='" + $titleListURL + "' target='_blank'>" + $titleList + "</a>";
            } else {
              $docLink = $titleList;
            }

          }
          // create the html for each row and append it to table#loans
          $("<tr><td>" + $language + 
              "</td><td>" + $branch + 
              "</td><td>" + $docLink + 
              "</td><td>" + $retDate + 
              "</td><td>" + $subject + 
              "</td></tr>").appendTo($element);
        }
      }
    })
    
    .fail(function() {
      console.log("JSON request fail");
    })
    
    .error(function() {
      console.log("JSON request error");
    });
  
});