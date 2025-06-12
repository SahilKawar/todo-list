let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delBtn");
    ul.append(item);
    item.append(del);
    inp.value = "";//to set placeholder to empty after adding tasks 
});
ul.addEventListener("click",function(event){ //to select the event
    if(event.target.nodeName = "Button"){  // to select the target and in dir we find property nodeName so that we get what's triggerd it
        let listItem = event.target.parentElement; // to select the parentName - this is event delegation
        listItem.remove();
        console.log("deleted");
    }
});