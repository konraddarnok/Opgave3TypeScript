  
let divinput: HTMLInputElement = <HTMLInputElement>document.getElementById("inputString");

let divoutput: HTMLDivElement = <HTMLDivElement>document.getElementById("Content");

let SelectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("toManipulate");

let okbtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("okbtn");

okbtn.addEventListener("click",funcUpperLowerConverter)


function funcUpperLowerConverter(): void {
    console.log("TestBtn");
    let DropDownSelection: string = SelectElement.value;
    let InputUser: string = divinput.value;
    let TextInput = InputUser; 

    if(DropDownSelection === "toUpper") {
    divoutput.innerHTML = String(TextInput).toUpperCase();
    }

    if(DropDownSelection === "toLower"){
    divoutput.innerHTML = String(TextInput).toLowerCase();

    }
 }