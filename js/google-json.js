$(document).ready(function() {

  var jsonSource = "https://spreadsheets.google.com/feeds/list/1oXeAey3ltefipz9H4puuTjIybzU3VxSJeiIeoK8Ln2o/od6/public/values?alt=json";
    
    //fetch the json feed
    $.getJSON( jsonSource, function() {
      console.log("JSON request successful");
    })
  
    .done(function(data) { 
      if (data.feed.entry.length > 0) {
        $.each( data.feed.entry, function( i, item ) {
          var $language = item.gsx$language.$t;
          var $branch = item.gsx$branchlocation.$t;
          var $retDate = item.gsx$returndate.$t;
          var $subject = item.gsx$weaskedfor.$t;
          var $titleList = item.gsx$titlelistdocument.$t;
          var $titleListURL = item.gsx$titlelisturl.$t;
          var $docLink;
          if ($titleListURL !== "") {
            $docLink = "<a href='" + $titleListURL + "' target='_blank'>" + $titleList + "</a>";
          } else {
            $docLink = $titleList;
          }
          
          $("<tr><td>" + $language + 
              "</td><td>" + $branch + 
              //"</td><td>" + $titleListURL + 
              "</td><td>" + $docLink + 
              "</td><td>" + $retDate + 
              "</td><td>" + $subject + 
              "</td></tr>").appendTo("#loans");
        });
      } else {
        // if the json request is successful but there are no items
        console.log("JSON request succeeded but no data returned");
      }
    })
    
    .fail(function() {
      console.log("JSON request fail");
    })
    
    .error(function() {
      console.log("JSON request error");
    });
  
});