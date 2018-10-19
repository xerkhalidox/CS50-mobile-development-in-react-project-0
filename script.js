const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let isChecked=uncheckedCountSpan.innerHTML;
let tasks=[];


function newTodo() {
  let task=prompt('Enter The Task');
  let counter=itemCountSpan.innerHTML;
  if(task){
    counter++;
    itemCountSpan.innerHTML=counter; 
    tasks.push(task);
 let input=document.createElement("input");
 let btn=document.createElement("button");
 let val=document.createTextNode("Delete");
 btn.addEventListener("click",isDelete);
 btn.appendChild(val);
 input.setAttribute('type','checkbox'); 
 input.setAttribute("checked","");
 input.addEventListener("click",isClicked);
 let li=document.createElement("li");
 list.appendChild(li);
 //if(task){
 let singleTask=document.createTextNode(task);
 li.appendChild(input);
 li.appendChild(singleTask);
 li.appendChild(btn);
 input.checked=false;
 isChecked++;
 uncheckedCountSpan.innerHTML=isChecked;
 
function isClicked(){
if(input.checked==true){
  isChecked--;
  uncheckedCountSpan.innerHTML=isChecked;
}else{
  isChecked++;
  uncheckedCountSpan.innerHTML=isChecked;
}
}
function isDelete(){
  let ul=document.getElementsByTagName("ul");
  ul[0].removeChild(li);
}
}
}