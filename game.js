            //Declaring Variables
            let wins=0;
            let losses=0;
            let guess = "";
            let guesses = new Array();
            let numbGuess=9;
            
            let wins_ = document.getElementById("wins");
            let losses_ = document.getElementById("losses");
            let guessesLeft_ = document.getElementById("guessesLeft");
            let guessed = document.getElementById("guessed");
            
            let alphabet = "abcdefghijklmnopqrstuvwxyz";
            let letter;
            
            let check;
            let game=true;

            //Generating random letter to guess
            
            letter = alphabet[Math.floor(Math.random()*26)];
           

            //Setting win and lose functions
            function win()
            {
                
                guess = "";
                guesses.length = 0;
                numbGuess = 9;
                wins++;
                wins_.innerHTML = "number of wins: " + wins;
                letter = alphabet[Math.floor(Math.random()*26)];
            }


            function lose()
            {   
                
                guess = "";
                guesses.length = 0;
                numbGuess = 9;
                losses++;
                losses_.innerHTML = "number of losses: " + losses;
                letter = alphabet[Math.floor(Math.random()*26)];
            }

            
            //Setting key functions
                document.onkeyup = function(event) {
                guess = event.key;
                if(guess===letter){win(); game=false;}

                if(game){check=false;
                for(let i=guesses.length; i>=0; i--)
                {if(guesses[i-1]==guess){check=true;}}
                if(check==false){guesses.push(guess);numbGuess--;}
                check=false;
                
                }
                if(numbGuess==0 && game){lose(); game=false;}
                game=true;
                guessesLeft_.innerHTML = "guesses left: " + numbGuess;
                guessed.innerHTML = "guesses so far: " + guesses;
                
                };


                wins_.innerHTML = "number of wins: " + wins;
                losses_.innerHTML = "number of losses: " + losses;
    
                guessesLeft_.innerHTML = "guesses left: " + numbGuess;
                guessed.innerHTML = "guesses so far: " + guesses;