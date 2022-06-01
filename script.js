const mainGridElem =document.querySelector('#maincontainer');

for (var i = 0; i < 256; i++) {
    const divnode = document.createElement("div");
    divnode.id =  "griditems";
    mainGridElem.appendChild(divnode);
    divnode.innerText = 'hi' + i;
}

divnode = document.querySelectorAll('#griditems');
var divnodearray = Array.from(divnode);
for (var i = 0; i < divnodearray.length; i++) {
    divnodearray[i].addEventListener('mouseover', hover);;
    divnodearray[i].addEventListener ('mouseout',hoverexit)
}
function hover(event) {
    event.target.id= "griditemshover";
}
function hoverexit(event) {
    event.target.id= "griditems";
}


const buttonElem = document.querySelector('button');
buttonElem.addEventListener('click', gridgenerator); 
function gridgenerator(event) {
    mainGridElem.replaceChildren();
    let j = gridnumber();
    for (var i = 0; i < j; i++) {
        const divnode = document.createElement("div");
        divnode.id =  "griditems";
        mainGridElem.appendChild(divnode);
        divnode.innerText = 'hi' + i;
    }
}
function gridnumber(yourchoice) {
    yourchoice = prompt("Choice the number of squares man which is less than 100");

    if (yourchoice > 100) {
        yourchoice = prompt("A number less than 100 is required");
    }
    else if (yourchoice <= 100)
        alert ('Your grid will now be made');
        return yourchoice;
    }
   





