let number1 = document.querySelector('#number1') as HTMLInputElement;
let number2 = document.querySelector('#number2') as HTMLInputElement;

function calculate(): void {
   
    console.log(add(+number1.value,+number2.value));
    
}

function add(n1:number, n2:number) {
    return n1 + n2;
}