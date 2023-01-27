function getComp(){
    let va = Math.floor(Math.random() *(4-1)) +1;
    
    if(va === 1){
        return 'rock';
    }
    else if(va === 2){
        return 'paper';
    }
    else if(va === 3){
        return 'scissor';
    } 
}

function playRound(playerC,compC){
    if((playerC === 'rock' && compC === 'scissor') || (playerC === 'paper' && compC === 'rock') || (playerC === 'scissor' && compC === 'paper')){
        return ("you win");
    }

    else if((playerC === 'rock' && compC === 'paper') || (playerC === 'paper' && compC === 'scissor') || (playerC === 'scissor' && compC === 'rock')){
        return ("you lose");
    }

    else if(playerC === compC){
        return('tie');
    }
}


function game(){
    let count =0;
    for(let i =0;i<5;i++){
        playerC = prompt("Enter yr choice");
        compC = getComp();
        let ze = playRound(playerC,compC);
        if(ze === 'you win'){
            count++;
            console.log("u won round: ",i);
        }
        else if(ze === 'you lose'){
            console.log("u lost round: ",i);
        }
        else if(ze === 'tie'){
            console.log("u tied round: ",i);
        }
    }

    if(count >= 3){
        console.log('you won the game')
    }
    else{
        console.log('you lost');
    }
}

game();