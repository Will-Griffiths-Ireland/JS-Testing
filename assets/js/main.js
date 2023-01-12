
//function that creates card at click location

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
    let locX = x - 50;
    locX = locX + "px";
    let locY = y - 50;
    locY = locY + "px";
    console.log("trying to create card at " + locX + " " + locY);
    let card = document.createElement('img');
    card.src = "assets/images/full_combined_deck/black_backface_named.webp";
    card.style.position = "fixed";
    card.style.top = locX;
    card.style.left = locY;
    card.style.width = "100px";
    card.classList = "dropIn cardHere"; 

    body.appendChild(card);
    // document.getElementById('sound_test').play();
    playAudio();
    
}

let audioCounter  = 0;

function playAudio(audioName){

    let audioId = "audio" + audioCounter;
    audioCounter += 1;
    let sound = document.createElement('audio');
    sound.src = "assets/audio/test_beep_500ms.mp3";
    sound.id = audioId;
    document.querySelector('body').appendChild(sound);
    document.getElementById(audioId).play();
}

// function that adds a class to the card elements, this causes them to jiggly via css animations



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