function xbtnclick(e){
    pnode = e.target.parentNode;                 //
    list = document.getElementById('todolist')   //
    list.removeChild(pnode)                      //쓴버튼 지우는 
}

function addItem(){
    console.log('addItem 함수 호출됨');

    todo = document.getElementById('item')
    list = document.getElementById('todolist')

    listitem = document.createElement('li') //이것이 있어야만 버튼을 눌렀을 때 뭐라도 뜬다
    listitem.innerText = todo.value   //텍스트를 생성해서 보여준다
    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';   // 정리된css

   //삭제 버튼 추가
    xbtn = document.createElement('button')
    xbtn.innerHTML ="&times"  
    //지우기,x버튼 등 글씨 바꾸기 가능한 함수 ,, "&times" 우리말로 곱하기 영어x보다 정확함

    //onclick 지원방법 1 - 함수 적용
    //xbtn.onclick = xbtnclick;

    //onclick 지원방법 2 - 익명 함수 적용
    // xbtn.onclick = function(e){
    //     pnode = e.target.parentNode             
    //     list.removeChild(pnode)        
    // }

    //onclick 지원방법 3 - 화살표 함수 적용
    xbtn.onclick = (e)=>{
        pnode = e.target.parentNode
        list.removeChild(pnode)
    }
     xbtn.className = 'close'

     listitem.appendChild(xbtn)
    
  //완료버튼을 만들고 할일 리스트에 추가
  dbtn = document.createElement('button')
  dbtn.innerHTML ="&#33"  
  
  dbtn.onclick = (e)=>{
      pnode = e.target.parentNode
      pnode.style.textDecoration = "line-through"
  }
  
  dbtn.className = 'close'
  
  
  listitem.appendChild(dbtn)

  list.appendChild(listitem)

  todo.value = ""  //
  todo.focus()    //빈칸 enter 누른 후 쓰인것이 지워지는 편리성
}
   

 