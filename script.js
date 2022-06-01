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

console.log (buttonElem);


