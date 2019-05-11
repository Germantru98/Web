'use strict';
function AllToSelected(elem) {
    var list = elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        avList = list.getElementsByClassName("available")[0],
        selList = list.getElementsByClassName("selected")[0],
        children = avList.children,
        i,
        option;

    for (i = 0; i < children.length; i++) {
        option = document.createElement('li');
        option.innerHTML = children[i].innerHTML;
        option.onclick = children[i].onclick;
        option.className = children[i].className;
        option.id = children[i].id;

        selList.appendChild(option);
    }

    avList.innerHTML = "";
}

function AllToAvailable(elem) {
    var list = elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        avList = list.getElementsByClassName("available")[0],
        selList = list.getElementsByClassName("selected")[0],

        children = selList.children,
        i,
        option;

    for (i = 0; i < children.length; i++) {
        option = document.createElement('li');
        option.innerHTML = children[i].innerHTML;
        option.onclick = children[i].onclick;
        option.className = children[i].className;
        option.id = children[i].id;

        avList.appendChild(option);
    }

    selList.innerHTML = "";
}

function ToSelected(elem) {
    var list = elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        avList = list.getElementsByClassName("available")[0],
        selList = list.getElementsByClassName("selected")[0],

        marked = false,

        children = avList.children;

    for (var i = 0; i < children.length; i++) {

        if (children[i].className.indexOf("marked") > -1) {
            children[i].className = children[i].className.replace(/(?:^|\s)marked(?!\S)/, '');
            selList.appendChild(children[i]);
            marked = true;
            i--;
        }
    }

    if (!marked) {
        alert("Ничего не выделено");
    }
}

function ToAvailable(elem) {
    var list = elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        avList = list.getElementsByClassName("available")[0],
        selList = list.getElementsByClassName("selected")[0],

        marked = false,
        children = selList.children,
        i;

    for (i = 0; i < children.length; i++) {

        if (children[i].className.indexOf("marked") > -1) {
            children[i].className = children[i].className.replace(/(?:^|\s)marked(?!\S)/, '');
            avList.appendChild(children[i]);
            marked = true;
            i--;
        }
    }

    if (!marked) {
        alert("Ничего не выделено");
    }
}

function Mark(elem) {
    if (elem.className == null) {
        elem.className = "marked";
    }
    else
        if (elem.className.indexOf("marked") === -1) {
            elem.className += " marked";
        }
        else {
            elem.className = elem.className.replace(/(?:^|\s)marked(?!\S)/, '');
        }
}




