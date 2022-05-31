// selects thing in html, makes node, add id to node for styling, appends node to html
const mainGridElem =document.querySelector('#maincontainer');

for (var i=0; i < 256; i++) {
    const divnode = document.createElement("div");
    divnode.id =  "griditems";
    mainGridElem.appendChild(divnode);
    divnode.innerText = 'hi';
}

divnode.addEventListener("mouseover", hover());


// add functions that looks into dom for the his and then if you hover does hover()





function hover() {
    divnode.id =griditemshovered;
}