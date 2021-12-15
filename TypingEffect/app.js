//script to add phrases to our "text" id element
const textDisplay=document.getElementById("text");
const phrases=["Hello, my name is King.","Welcome.", "Bye!"];
let i=0;
let j=0;
let currentPhrase=[];
let isDeleting=false;
let isEnd=false;


function loop(){    //nested loop to print out each letter 
    
    isEnd = false;      //set bool value to false at the beginning of array
    textDisplay.innerHTML=currentPhrase.join('');   // add/append characters without separating commas

    if(i < phrases.length){
       
        if(!isDeleting && j < phrases[i].length){  //add characters to exhaustion
            currentPhrase.push(phrases[i][j]);
            /*
            console.log(j);
            console.log(phrases[i][j]);
            */
            j++;
            textDisplay.innerHTML=currentPhrase.join(''); //redisplay word (solves the lagging issue)
            
        }

        if(isDeleting && j<= phrases[i].length){    //remove characters till empty
            currentPhrase.pop(phrases[i][j]);   //decrease/remove letters
            j--;    //decrement j
            textDisplay.innerHTML=currentPhrase.join('');  //redisplay word (solves the lagging issue)
        }
        
        if(j == phrases[i].length){     //start deleting if all characters are exhausted
            isEnd = true;   //bool indicating end of words
            isDeleting=true;    
        }

        if (j === 0){   //if all characters deleted
            currentPhrase=[];   //start from scratch
            isDeleting=false;   //stop deleting
            i++;    //move onto next word

            if (i == phrases.length){   //if all words are exhausted
                i=0;    //set "cursor" to beginning of array
            }
        }

       
    }

    const spedUp = Math.random()*(80-50)+50;   //random value between 50 and 80
    const normalSpeed = Math.random()*(300-200)+200; //random value between 200 and 300
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;  //if it is end of word, then linger on the last letter for 2000 milliseconds. Else if deleting, use spedUp time. Else, go at normal speed.
    setTimeout(loop,time);
}

loop();

//upto 9th minute- https://www.youtube.com/watch?v=mULM6KcF_mo
