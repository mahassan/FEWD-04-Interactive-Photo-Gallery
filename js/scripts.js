$(document).ready(function(){
    //get reference for searchbox
    let searchBox = $("#search");
    let images = $('.main a img');
    
    function picCollection(){
        for(let i = 0; i <images.length;i++){
            console.log(images[i].alt);
        }
    }

    /*
    As project require us to filter real time
    we need to use event that trigger on every
    keypress
    */
    searchBox.on('keypress', function(){
        //loop over searchbox
        for(i = 0; i <searchBox.length;i++){
            //if searchbox value is equal/matching
            //the what is the list of photos
           if(searchBox.val() === picCollection){
               //show only which matches and hide others
               images.hide();
                // if(searchBox.val() !== '01'){
                //     images.hide()
                // }
           }else{

               //else show all if nothing matches
           }
        }
    })

    //picCollection()
    //console.log(images.attr("alt"));
})