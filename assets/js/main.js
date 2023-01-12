//scatterCards(5);
//dealPlayerCards(7);

//attach a listener to the body to capture click
document.querySelector('body').addEventListener("contextmenu", placeCard);


//function to test filling the screen with cards

function scatterCards(cardCount){
    console.log("trying to scatter " + cardCount + " cards");
    let windowX = window.innerWidth;
    let windowY = window.innerHeight;
    
    for(let i = 0; i < cardCount; i++){

        //generate radom card size
        cardWidth = randomNumber(100,300);

        let body = document.querySelector('body');
        let locX = Math.floor(Math.random() * windowX);
        locX = (locX - cardWidth)  + "px";
        let locY = Math.floor(Math.random() * windowY);
        locY = locY + "px";
        console.log("trying to create card at " + locX + " " + locY);
        let card = document.createElement('img');

    //Generate a random number between 1-7 to select which backface to add

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
    card.style.animationDelay = randomNumber(1000,10000) + "ms"; 
    card.style.top = locY;
    card.style.left = locX;
    card.style.width = cardWidth  + "px"; 
    card.style.zIndex = 10;
    card.classList = "dropIn cardHere";
    // card.addEventListener("click", function(){console.log("Card already here")}); 

    body.appendChild(card);

    }


}

//build players deck and lay them out on the screen

function dealPlayerCards(cardCount){

    let playerDeck = buildCardObjectArray("high","named");

    for(let i = 0; i < cardCount; i++){

        let body = document.querySelector('body');

        //work out placement of cards based on how many are being dealt
        let leftPosition = (100 / cardCount) * i;

        let card = document.createElement('img');

    
    card.src = playerDeck[i].faceImgSrc;
    card.style.position = "absolute";
    card.style.animationDelay = 500 + (i * 100) + "ms"; 
    card.style.bottom = "5vh";
    card.style.left = leftPosition + "vw" ;
    card.style.width = (100 / cardCount) + "vw";
    card.style.zIndex = 50;
    card.classList = "dropIn cardHere";
    card.addEventListener("mouseover", cardJiggle);
    card.addEventListener("mouseout", cardJiggleRemove); 
    body.appendChild(card);

    }

}


function placeCard(e){
    e.preventDefault();
    //checking to see if user is clicking on existing card(img) and escaping function
    if(e.target.localName == "img"){
        console.log("Card already here");
        console.log(e.target.localName);
        return;
    }
    console.log(e);
    let body = document.querySelector('body');
    let locX = e.clientY - 100;
    locX = locX + "px";
    let locY = e.clientX - 100;
    locY = locY + "px";
    console.log("trying to create card at " + locX + " " + locY);
    let card = document.createElement('img');

    //Generate a random number between 1-7 to select which backface to add

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
    // card.addEventListener("click", function(){console.log("Card already here")}); 

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


//This function builds an object array. It takes an input which dictates what path to take for the image
//There will be 3 quality levels - low (mobile) - Medium - High (max original res)
//backFaceType input is a setting that controls is the cards have the games name on them

function buildCardObjectArray(imageQuality, backFaceType){
    
    let pathSet;

    if(imageQuality == "low"){
        //set image to low path
        pathSet = "./lowQuality/";
    }
    else if(imageQuality == "medium"){
        //set image to medium path
        pathSet = "./mediumQuality/";
    }
    else if(imageQuality == "high"){
        //set image to medium path
        pathSet = "./assets/images/full_combined_deck/";
    }
    else{
        console.log("function buildCardObjectArray() Error Invalid imageQuality - " 
        + imageQuality + " - . Exiting.")
        return;
    }

    let backFaceNaming;

    if(backFaceType == "named"){
        //set image to medium path
        backFaceNaming = "_named";
    }
    else if(backFaceType == "unnamed"){
        //set image to medium path
        backFaceNaming = "";
    }
    else{
        console.log("function buildCardObjectArray() Invalid backFaceType - " 
        + backFaceType + " - . Exiting.")
        return;
    }
    
    let cardObjectArray = [
    {name: "astronaut",
    faceImgSrc: pathSet + "black_astronaut.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "flying_saucer",
    faceImgSrc: pathSet + "black_flying_saucer.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "moon",
    faceImgSrc: pathSet + "black_moon.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "rocket",
    faceImgSrc: pathSet + "black_rocket.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "satellite",
    faceImgSrc: pathSet + "black_satellite.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "solar_system",
    faceImgSrc: pathSet + "black_solar_system.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "stars",
    faceImgSrc: pathSet + "black_stars.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"},
    {name: "telescope",
    faceImgSrc: pathSet + "black_telescope.webp",
    backImgSrc: pathSet + "black_backface" + backFaceNaming + ".webp",
    category: "space",
    color: "black"}
    ];

    return cardObjectArray;
}


let tempDeck = buildCardObjectArray('low',"named");

console.log(tempDeck);

function cardJiggle(e){
    e.target.style.animationDelay = "0ms"; 
    e.target.classList.add("jigglyPoo");   
}

function cardJiggleRemove(e){
    let targMe = e.target;
    const myTimeout = setTimeout(removeClass, 1500);
    function removeClass(){
        console.log("remove jiggle");
        targMe.classList.remove("jigglyPoo");
        targMe.classList.remove("dropIn");   
    } 
}

//simple function to return a random number within a range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function burnCards(){
    cardsToBurn = document.getElementsByClassName('cardHere');

    for (card of cardsToBurn)
    {
        card.classList.add('burnUp');
    }
}