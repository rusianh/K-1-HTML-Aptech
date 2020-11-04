if(!window.Node){
  var Node = {ELEMENT_NODE : 1, TEXT_NODE : 3};
}

function checkNode(node, filter){
  return (filter == null || node.nodeType == Node[filter] || node.nodeName.toUpperCase() == filter.toUpperCase());
}

function getChildren(node, filter){
  var result = new Array();
  var children = node.childNodes;
  for(var i = 0; i < children.length; i++){
    if(checkNode(children[i], filter)) result[result.length] = children[i];
  }
  return result;
}

function getChildrenByElement(node){
  return getChildren(node, "ELEMENT_NODE");
}

function getFirstChild(node, filter){
  var child;
  var children = node.childNodes;
  for(var i = 0; i < children.length; i++){
    child = children[i];
    if(checkNode(child, filter)) return child;
  }
  return null;
}

function getFirstChildByText(node){
  return getFirstChild(node, "TEXT_NODE");
}

function getNextSibling(node, filter){
  for(var sibling = node.nextSibling; sibling != null; sibling = sibling.nextSibling){
    if(checkNode(sibling, filter)) return sibling;
  }
  return null;
}
function getNextSiblingByElement(node){
        return getNextSibling(node, "ELEMENT_NODE");
}

// Menu Functions & Properties

var activeMenu = null;

function showMenu() {
  if(activeMenu){
    activeMenu.className = "";
    getNextSiblingByElement(activeMenu).style.display = "none";
  }
  if(this == activeMenu){
    activeMenu = null;
  } else {
    this.className = "active";
    getNextSiblingByElement(this).style.display = "block";
    activeMenu = this;
  }
  return false;
}
var myMenu=new Array{"menu1","menu2","menu3","menu4","menu5"};
function initMenu(){
	
	for (i=0;i<myMenu.length;i++)
	{
		alert(i);
		var x=eval("window.document.all."+myMenu[i]);
		alert(x);
		//x.onclick=showMenu;
		}
/*  var menus, menu, text, a, i;
  menus = getChildrenByElement(document.getElementById("menu"));
  for(i = 0; i < menus.length; i++){
    menu = menus[i];
    text = getFirstChildByText(menu);
    a = document.createElement("a");
    menu.replaceChild(a, text);
    a.appendChild(text);
    a.href = "#";
    a.onclick = showMenu;
    a.onfocus = function(){this.blur()};
	
  }*/
}

window.onload = initMenu;


