
// variable declarations
var myBody = document.getElementById("body");
var button = myBody.getElementsByTagName('input');
var num_button = myBody.getElementsByClassName('number');
var monitor = myBody.getElementsByTagName('input')[0];
var adder = myBody.getElementsByClassName('add')[0];
var subtracter = myBody.getElementsByClassName('sub')[0];
var result = document.getElementsByTagName('h1')[1];
var clear =  myBody.getElementsByClassName('clear')[0];
var equals = myBody.getElementsByClassName('equals')[0];
var multiply = myBody.getElementsByClassName('multiply')[0];
var divide = myBody.getElementsByClassName('divide')[0];
let total = 0;
let prvPosition = 0;
let lastOperation;


// event listeners
for (x=0; x < num_button.length; x++) {
    num_button[x].addEventListener("click", updateMonitor)
}

for (x=1; x < button.length; x++) {
    button[x].addEventListener("click", changeClass)
}

adder.addEventListener("click" , Addition);
subtracter.addEventListener("click", Subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);
clear.addEventListener("click", clearAll);
equals.addEventListener("click", equalsTo);

    


// functions

function updateMonitor(){
    monitor.value += this.value;                    //function to send button text to monitor
}

function changeClass(){                             //function to change button color by changing its class
    for (x=1; x<button.length; x++) {
        button[x].classList.remove("btn2");
    }
    this.classList.add("btn2");
}

// addition function
function Addition(){
    var valueBefore=0;

        if(prvPosition === 0){  
            valueBefore = get_monitor_value_for_first_time(valueBefore);
            total=Number(valueBefore);
            result.innerText=total;
            prvPosition=monitor.value.indexOf('+');
            lastOperation='+';
            }

        else{

            valueBefore = get_monitor_value_for_other_times(valueBefore);
            valueBefore=Number(valueBefore);
            total=Operation(total,valueBefore);
            result.innerText=total;
            prvPosition=monitor.value.indexOf('+', (prvPosition+1));
            lastOperation='+';   
        }
    }

    // Subtraction function

function Subtraction(){
    var valueBefore=0;

        if(prvPosition === 0){  
            valueBefore = get_monitor_value_for_first_time(valueBefore);
            total=Number(valueBefore);
            result.innerText=total;
            prvPosition=monitor.value.indexOf('-');
            lastOperation='-';
            }

        else{ 
            valueBefore = get_monitor_value_for_other_times(valueBefore);
            valueBefore=Number(valueBefore);
            total=Operation(total,valueBefore);
            result.innerText=total;
            prvPosition=monitor.value.indexOf('-', (prvPosition+1));
            lastOperation='-';
            }
    }


// multiplication function

function multiplication(){
    var valueBefore=0;

    if(prvPosition === 0){  
        valueBefore = get_monitor_value_for_first_time(valueBefore);
        total=Number(valueBefore);
        result.innerText=total;
        prvPosition=monitor.value.indexOf('X');
        lastOperation='X';
        }

    else{ 
        valueBefore = get_monitor_value_for_other_times(valueBefore);
        valueBefore=Number(valueBefore);
        total=Operation(total,valueBefore);
        result.innerText=total;
        prvPosition=monitor.value.indexOf('X', (prvPosition+1));
        lastOperation='X';
        }

}

// division function
function division(){
    var valueBefore=0;

        if(prvPosition === 0){  
            valueBefore = get_monitor_value_for_first_time(valueBefore);
            total=Number(valueBefore);
            result.innerText=total;
            prvPosition=monitor.value.indexOf('/');
            lastOperation='/';
            }

        else{

            valueBefore = get_monitor_value_for_other_times(valueBefore);
            valueBefore=Number(valueBefore);
            total=Operation(total,valueBefore);
            result.innerText=total;
            prvPosition=monitor.value.indexOf('/', (prvPosition+1));
            lastOperation='/';   
        }
    }





// function to choose correct Operation to be carried out
function Operation(total, valueBefore){
    if(lastOperation==='+'){
        total +=Number(valueBefore);
    }
    else if(lastOperation==='-'){
        total -=Number(valueBefore);
    } 
    else if(lastOperation==='X'){
        total *=Number(valueBefore);
    } 
    else if(lastOperation==='/'){
        total /=Number(valueBefore);
    }
    return total;
}

// function to get value from the monitor for the first time
function get_monitor_value_for_first_time(valueBefore){
    for(x=0; x<monitor.value.length-1; x++){
        valueBefore += monitor.value[x];
    }
    return valueBefore;  
} 

// function to get value from the monitor for other times
function get_monitor_value_for_other_times(valueBefore){
    for(x=prvPosition+1; x<monitor.value.length-1; x++){
        valueBefore += monitor.value[x];
    }
    return valueBefore;  
} 

// clear all data
function clearAll()
{
     total = 0;
     prvPosition = 0;
     lastOperation=null;
     result.innerText=total;
     monitor.value='';
}

// function that evaluates solution when '=' is clicked 
function equalsTo(){
    var valueBefore=0;

    if(prvPosition === 0){
        for(x=0; x<monitor.value.length; x++){
            valueBefore += monitor.value[x];
        }
        total = Number(valueBefore);
        result.innerText = total;
        monitor.value = total;
  }

  else{
    for(x = prvPosition+1; x<monitor.value.length; x++){
        valueBefore += monitor.value[x];
        valueBefore=Number(valueBefore);
        var evaluate=Operation(total,valueBefore);
        result.innerText=evaluate;
    }
  }
    //total=Operation(total,valueBefore);  
}