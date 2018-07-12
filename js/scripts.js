$(document).ready(function(){
    //get reference for searchbox
    const searchBox = $("#search");
    const images = $('.main a img');
    const captions = $(images).parent().parent();
    console.log(captions);
    /*
    As project require us to filter real time
    we need to use event that trigger on every
    keydown
    */
    searchBox.on('keydown', function(){
        //loop over images
            for(let i = 0; i <images.length;i++){
            //if searchbox value is equal/matching
                if(images[i].alt.includes(searchBox.val().toLowerCase()) 
                || images[i].alt.includes(searchBox.val().toUpperCase()) 
                || captions[i].dataset.caption.includes(searchBox.val().toLowerCase())
                || captions[i].dataset.caption.includes(searchBox.val().toUpperCase())){
                    //then display that images
                    $(images[i]).show();
                }else{
                    //else hide 
                    $(images[i]).hide();
                }
            }
    })
})