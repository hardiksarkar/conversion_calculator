const _conversionFrom = document.getElementById("conversion_from");
const _conversionTo = document.getElementById("conversion_to");
const input = document.getElementById("input");
const button = document.getElementById("button");
const answer = document.getElementById("answer");

function reverse(n){
    let N=n;
    let rev=0,c;
    while(N>0){
        c=N%10;
        rev=rev*10+c;
        N=Math.floor(N/10);
    }
    return rev;
}

function BinaryToDecimal(n){
    if(!BinaryCheck(n)){
        return -1;
    }
    let N=n;
    let dec=0,c,i=0;
    while(N>0){
        c=N%10;
        dec+=c*Math.pow(2,i);
        i++;
        N=Math.floor(N/10);
    }
    return dec;
}

function BinaryToOctal(n){
    if(!BinaryCheck(n)){
        return -1;
    }
    let value = BinaryToDecimal(n);
    return value.toString(8);
}

function BinaryToHexadecimal(n){
    if(!BinaryCheck(n)){
        return -1;
    }
    let value = BinaryToDecimal(n);
    value = value.toString(16);
    return value.toUpperCase();
}

function OctalToDecimal(n){
    if(!OctalCheck(n)){
        return -1;
    }
    let N=n;
    let oct=0,c,i=0;
    while(N>0){
        c=N%10;
        oct+=c*Math.pow(8,i);
        i++;
        N=Math.floor(N/10);
    }
    return oct;
}

function OctalToBinary(n){
    if(!OctalCheck(n)){
        return -1;
    }
    let value = OctalToDecimal(n);
    return value.toString(2);
}

function OctalToHexadecimal(n){
    if(!OctalCheck(n)){
        return -1;
    }
    let value = OctalToDecimal(n);
    value = value.toString(16);
    return value.toUpperCase();
}

function HexadecimalToDecimal(n){
    if(!HexadecimalCheck(n)){
        return -1;
    }
    n=n.toString();
    let c=n.length-1;
    let sum = 0;
    for(let i=0;i<n.length;i++){
        if(n[i]>='0' && n[i]<='9'){
            sum=sum+((n.charCodeAt(i)-48)*Math.pow(16,c));
            c--;
        }else if(n[i]>='A' && n[i]<='F'){
            sum=sum+((n.charCodeAt(i)-65+10)*Math.pow(16,c));
            c--;
        }else if(n[i]>='a' && n[i]<='f'){
            sum=sum+((n.charCodeAt(i)-97+10)*Math.pow(16,c));
            c--;
        }else{
            return 0;
        }
    }
    return sum;
}

function HexadecimalToBinary(n){
    if(!HexadecimalCheck(n)){
        return -1;
    }
    let value = HexadecimalToDecimal(n);
    return value.toString(2);
}

function HexadecimalToOctal(n){
    if(!HexadecimalCheck(n)){
        return -1;
    }
    let value = HexadecimalToDecimal(n);
    return value.toString(8);
}

function BinaryCheck(n){
    if(n<0){
        return false;
    }
    // let N=n;
    // let c;
    // while(N>0){
    //     c=N%10;
    //     if(c>1){
    //         return false;
    //     }
    //     N=Math.floor(N/10);
    // }
    // return true;
    n = n.toString();
    for(let i=0;i<n.length;i++){
        if(!(n[i]>=0 && n[i]<=1)){
            return false;
        }
    }
    return true;
}

function OctalCheck(n){
    if(n<0){
        return false;
    }
    // let N=n;
    // let c;
    // while(N>0){
    //     c=N%10;
    //     if(c>7){
    //         return false;
    //     }
    //     N=Math.floor(N/10);
    // }
    // return true;
    n = n.toString();
    for(let i=0;i<n.length;i++){
        if(!(n[i]>=0 && n[i]<=7)){
            return false;
        }
    }
    return true;
}

function HexadecimalCheck(n){
    if(n<0){
        return false;
    }
    n = n.toString();
    for(let i=0;i<n.length;i++){
        if(!((n[i]>=0 && n[i]<=9) || (n[i]>='A' && n[i]<='F') || (n[i]>='a' && n[i]<='f'))){
            return false;
        }
    }
    return true;
}

// let _inputVal = input.value;
// let _conversionFromVal = conversionFrom.value;
// let _conversionToVal = conversionTo.value;

const _compare = (_conversionFrom,_conversionTo,input)=>{

    switch (_conversionFrom) {
        case "Decimal-1":
            if(isNaN(input-0)){
                return -1
            }
            let ans = parseInt(input);
            if(_conversionTo == "Decimal-2"){
                return ans;
            }else if(_conversionTo == "Binary-2"){
                return ans.toString(2);
            }else if(_conversionTo == "Octal-2"){
                return ans.toString(8);
            }else{
                return ans.toString(16).toUpperCase();
            }
        case "Binary-1":
            if(_conversionTo == "Decimal-2"){
                return BinaryToDecimal(input);
            }else if(_conversionTo == "Binary-2"){
                if(BinaryCheck(input)){
                    return input;
                    }else{
                        return -1;
                    }
            }else if(_conversionTo == "Octal-2"){
                return BinaryToOctal(input);
            }else{
                return BinaryToHexadecimal(input);
            }
        case "Octal-1":
            if(_conversionTo == "Decimal-2"){
                return OctalToDecimal(input);
            }else if(_conversionTo == "Binary-2"){
                return OctalToBinary(input);
            }else if(_conversionTo == "Octal-2"){
                if(OctalCheck(input)){
                    return input;
                    }else{
                        return -1;
                    }
            }else{
                return OctalToHexadecimal(input);
            }
        case "Hexa-decimal-1":
            if(!HexadecimalCheck(input)){
                return -1;
            }
            if(_conversionTo == "Decimal-2"){
                return HexadecimalToDecimal(input);
            }else if(_conversionTo == "Binary-2"){
                return HexadecimalToBinary(input);
            }else if(_conversionTo == "Octal-2"){
                return HexadecimalToOctal(input);
            }else{
                return input;
            }
    }
};

const getAnswer = ()=>{
    if(_compare(_conversionFrom.value,_conversionTo.value,input.value)!=-1){
       answer.innerHTML = _compare(_conversionFrom.value,_conversionTo.value,input.value);
    }else{
        answer.innerHTML = "Enter Correct Input";
    }
}

button.addEventListener('click',getAnswer);

// button.addEventListener('click',()=>{
//     answer.innerHTML = _conversionTo.value;
// });
// console.log(OctalToDecimal("$#"));
