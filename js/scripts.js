$(document).ready(function(){
    //get reference for searchbox
    const searchBox = $("#search");
    const images = $('.main a img');
    const anchors = $(images).parent().parent();
    /*
    As project require us to filter real time
    we need to use event that trigger on every
    keydown
    */
    searchBox.on('keydown', function(){
        let searchToLowerCase = searchBox.val().toLowerCase()
        //loop over images
            for(let i = 0; i <images.length;i++){
            //if searchbox value is equal/matching
                var searchByCaptions = anchors[i].dataset.caption.toLowerCase()
                if(
                    images[i].alt.includes(searchToLowerCase) || 
                    searchByCaptions.includes(searchToLowerCase)
                 ){
                        //then display that images
                        $(anchors[i]).show();
                 }else{
                        //else hide 
                        $(anchors[i]).hide();
                    }
            }
            
    })
})