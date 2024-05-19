const h2 = document.querySelector("h2");

const texts = ["web developer","freelancer","frontend developer","software engineer"];

let wordIndex = 0;
let characterIndex = 0;

function updateText(){
    let word = texts[wordIndex];
    h2.innerText = "i am a " + word.slice(0,characterIndex);
    characterIndex++;

    if(characterIndex > word.length){
        characterIndex = 0;
        wordIndex++;

        if(wordIndex >= texts.length){
            characterIndex = 0;
            wordIndex = 0;
        }

        setTimeout(updateText,1000);
    }
    else{
        setTimeout(updateText,100);
    }
}

updateText();