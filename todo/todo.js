function addItem(){

    alert("addItem 함수가 호출되었습니다")


    list = document.getElementById('todolist');
    todo = document.getElementById('item');

    let listitem = document.createElement('li');

    listitem.className = 'list-grope-item list-grope-item-action list-grope-item list-group-item-warning';

    listitem.innerText = todo.value;
    list.appendChild(listitem);
}