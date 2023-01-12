
//function that creates card at click location
window.ontouchstart
window.onclick = function(e)
{
    console.log("clicked ");
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
    console.log( document.elementFromPoint(e.clientX, e.clientY));
    
    placeCard(e.clientY, e.clientX);
}

function placeCard(x,y){
    let body = document.querySelector('body');
    let locX = x - 100;
    locX = locX + "px";
    let locY = y - 100;
    locY = locY + "px";
    console.log("trying to create card at " + locX + " " + locY);
    let card = document.createElement('img');
    let randSelect = Math.floor(Math.random() * 7);
    if(randSelect == 1)
    {
        card.src = "assets/images/full_combined_deck/black_backface_named.webp";
    }
    else if(randSelect == 2)
    {
        card.src = "assets/images/full_combined_deck/red_backface_named.webp";
    }
    else if(randSelect == 3)
    {
        card.src = "assets/images/full_combined_deck/green_backface_named.webp";
    }
    else if(randSelect == 4)
    {
        card.src = "assets/images/full_combined_deck/purple_backface_named.webp";
    }
    else if(randSelect == 5)
    {
        card.src = "assets/images/full_combined_deck/blue_backface_named.webp";
    }
    else if(randSelect == 6)
    {
        card.src = "assets/images/full_combined_deck/brown_backface_named.webp";
    }
    else if(randSelect == 7)
    {
        card.src = "assets/images/full_combined_deck/orange_backface_named.webp";
    }
    else
    {
        card.src = "assets/images/full_combined_deck/white_backface_named.webp";
    }
    card.style.position = "fixed";
    card.style.top = locX;
    card.style.left = locY;
    card.style.width = "200px";
    card.style.zIndex = 50;
    card.classList = "dropIn cardHere"; 

    body.appendChild(card);
    // document.getElementById('sound_test').play();
    //having the audio element in the html and reusing it leads to blocking
    //creating a function that creates a new audio element allows them to overlap
    playAudio();
    
}

//global variable to track audio clips generated and create unique IDs
let audioCounter  = 0;

function playAudio(audioName){

    let audioId = "audio" + audioCounter;
    audioCounter += 1;
    let sound = document.createElement('audio');
    sound.src = "assets/audio/test_beep_700ms.mp3";
    sound.id = audioId;
    document.querySelector('body').appendChild(sound);
    document.getElementById(audioId).play();
}


//function to build deck of cards in an array of objects

const cardFaceData = () => [
    {name: "NAME IT",
    imgSrc: "ASSET LOCATION",
    category: "??",
    color: "??"},
    {name: "POOBEAM",
    imgSrc: "ASSET LOCATION",
    category: "??",
    color: "??"},
    {name: "NAME IT",
    imgSrc: "ASSET LOCATION",
    category: "??",
    color: "??"}
];

let tempDeck = cardFaceData();

console.log(tempDeck);

function cardJiggle(e){
    console.log("add jiggle");
    e.target.classList.add("jigglyPoo");
    let targMe = e.target;
    console.log(targMe);
    
    const myTimeout = setTimeout(myGreeting, 1500);
    function myGreeting(){
        console.log("remove jiggle");
        targMe.classList.remove("jigglyPoo");
        
    }

    // let card = document.getElementsByClassName("card");
    // for(let i = 0;i < card.length; i++){
    //     card[i].classList.add("jigglyPoo");
    // }
    // this.classList.add("jigglyPoo");
    // console.log(event.target.classList);
    // console.log(cardFaceData());
    
    
}