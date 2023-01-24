let firstUserInputNotInt=true;
let firstUserInput;

while(firstUserInputNotInt){
    firstUserInput=Number(prompt(`Enter m:`, ''));
    if(Number.isInteger(firstUserInput)){
        firstUserInputNotInt=false;
    }
}



if(firstUserInput<5){
    console.log("Sorry, no numbers");
}
else{
    for(let i=0; i<=firstUserInput; i++){
        if(i!=0 && i%5==0){
            console.log(i);
        }
    }
}
