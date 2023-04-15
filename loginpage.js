const ajay = document.querySelector(".ajay");
const body = document.body;

const wrapper = document.querySelector('.wrapper');
const loginpopup = document.querySelector('.btnlogin-popup');
const closebtn = document.querySelector('.icon-close');


const changecolor = () =>
{
    switch(ajay.value)
    {
        case "Default" : body.style.backgroundImage = "url('https://images7.alphacoders.com/531/thumb-1920-531424.jpg')";
            break;
        case "Ironman" : body.style.backgroundImage = "url('https://wallpapers.com/images/featured/ouqxo5w2b59h0042.jpg')";
            break;
         case "Hulk" : body.style.backgroundImage = "url('https://i.pinimg.com/originals/e2/0c/26/e20c260231bc119468aa13ef490d8de8.jpg')";
            break;
         case "Deadpool" : body.style.backgroundImage = "url('https://images3.alphacoders.com/678/thumb-1920-678085.jpg')";
            break;
         case "Captain America" : body.style.backgroundImage = "url('https://www.teahub.io/photos/full/86-868792_captain-america-wallpaper-1080p.jpg')";
            break;
         case "Dr.Strange" : body.style.backgroundImage = "url('https://www.pcclean.io/wp-content/gallery/doctor-strange-hd-wallpapers/Doctor-Strange-2.jpg')";
            break;
         case "Black Panther" : body.style.backgroundImage = "url('https://images.hdqwalls.com/download/black-panther-4k-movie-poster-vi-1440x900.jpg')";
            break;
         case "Spiderman" : body.style.backgroundImage = "url('https://images7.alphacoders.com/116/thumb-1920-1165584.jpg')";
            break;
            
    }       
};


loginpopup.addEventListener('click',()=>{
   
    wrapper.classList.add('active-popup');
    
    
});

closebtn.addEventListener('click',()=>{
    
    wrapper.classList.remove('active-popup');
    
});




