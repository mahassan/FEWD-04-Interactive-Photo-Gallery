$(document).ready(function(){
    //get reference for searchbox
    const searchBox = $("#search");
    const images = $('.main a img');
    const captions = $(images).parent().parent();
    
    // function picCollection(){
    //     for(let i = 0; i <images.length;i++){
    //         console.log(images[i].alt);
    //     }
    // }

    /*
    As project require us to filter real time
    we need to use event that trigger on every
    keypress
    */
    searchBox.on('keydown', function(){
        //loop over images
            for(let i = 0; i <images.length;i++){
            //if searchbox value is equal/matching
                if(images[i].alt.includes(searchBox.val()) || captions[i].dataset.title.includes(searchBox.val())){
                    $(images[i]).show();
                }else{
                    $(images[i]).hide();
                }
            }
    })
    console.log();
})