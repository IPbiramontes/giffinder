// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
    function giphyURLWithSearchTerm(searchTerm) {
        var searchTerm= $("#searchForGif").val();
        var searchTerm2= $("#searchForGif2").val();
        var newUrl= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
        var newUrl2= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm2 + "&api_key=dc6zaTOxFJmzC";
        return newUrl;
        return newUrl2;
    }

    function appendImageTodisplayGif(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
        $("#displayGif").append('<img src=' + srcURL + '>');
    }

    function callGiphyAPIWithSearchTerm(searchTerm) {
        $.ajax({
            url:giphyURLWithSearchTerm(searchTerm),
            method: "GET",
            success: function(response) {
                var url = response.data[0].images.original.url;
                appendImageTodisplayGif(url);
            },
        }); 
    }

    //A click handler below to call the function when the button is clicked
    $("#searchForGifButton").click(function(){
        var searchTerm = $("#searchForGif").val();
        callGiphyAPIWithSearchTerm(searchTerm);
        console.log(callGiphyAPIWithSearchTerm(searchTerm));
        for(var x=0; x<0; x++){
            var searchTerm = $("#searchForGif").val();
            var searchTerm2 = $("#searchForGif2").val();
            callGiphyAPIWithSearchTerm(searchTerm);
            callGiphyAPIWithSearchTerm(searchTerm2);
        
    }
        
    });
    
    

  
});


// if(searchTerm === null){
//             alert("I am an alert box!");   
// }