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
        //loop over images
            for(let i = 0; i <images.length;i++){
                let lowerCase = searchBox.val().toLowerCase()
            //if searchbox value is equal/matching
                if(
                    images[i].alt.includes(lowerCase) || 
                    anchors[i].dataset.caption.includes(lowerCase)
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