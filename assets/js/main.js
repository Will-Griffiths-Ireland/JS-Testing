//Purely just testing things out


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

function cardJiggle(){
    console.log("add jiggle");
    event.target.classList.add("jigglyPoo");
    let targMe = event.target;
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