
var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAll = document.getElementById('removeAll')
removeAll.addEventListener('click',removeAllItems)


// Ading Task
function addItem(){

    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if(item === ''){
        alert('Enter a task')
        return false
    }else{
        li = document.createElement('li')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')

        var label = document.createElement('label')

        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])

        setTimeout(() =>{
          li.className = 'visual'
        },1)
        
        input.value = ''
    }
}

// removing task

function removeItem(){
    li = ul.children
    for (let i=0;i<li.length;i++){
       while (li[i] && li[i].children[0].checked){
          ul.removeChild(li[i])
        }    
    }
}

// Removing All the tasks
function removeAllItems(){
    li = ul.children
    for (let i=0;i<li.length;i++){
       while (li[i]){
          ul.removeChild(li[i])
        }    
    }
}