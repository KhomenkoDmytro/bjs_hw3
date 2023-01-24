let secondNotBiggerThanFirst=true;
let firstUserInput;
let secondUserInput;

while(secondNotBiggerThanFirst){

    let firstUserInputNotInt=true;
    
    while(firstUserInputNotInt){
        firstUserInput=Number(prompt(`Enter m:`, ''));
        if(Number.isInteger(firstUserInput)){
            firstUserInputNotInt=false;
        }
    }

    let secondUserInputNotInt=true;
    
    while(secondUserInputNotInt){
        secondUserInput=Number(prompt(`Enter n`, ''));
        if(Number.isInteger(secondUserInput)){
            secondUserInputNotInt=false;
        }
    }

    if(secondUserInput>firstUserInput){
        secondNotBiggerThanFirst=false;
    }
}


for(let currentNumber=firstUserInput; currentNumber<secondUserInput; currentNumber++){
    let isPrimeNumber=true;
    if(currentNumber<2){
        isPrimeNumber=false;
    }
    for(let i=2; i<=currentNumber/2; i++){
        if(currentNumber%i==0){
            isPrimeNumber=false;
        }
    }
    if(isPrimeNumber){
        console.log(currentNumber);
    }
}