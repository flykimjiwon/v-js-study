const items = document.querySelector('.items')
const input = document.querySelector('.footer_input')
const addBtn = document.querySelector('.footer_button')

function onAdd(){
    //1.사용자가 입력한 텍스트 받아오기
    //2.새로운 아이템을 만들기 (텍스트 + 삭제버튼추가)
    //3. items 컨테이너안에 새로 만든 아이템 추가

    //새로 추가된 아이템으로 이동,스크롤링

    //4. 인풋을 초기화하기(텍스트) 그리고 포커스
    
    const text = input.value;
    //console.log(text)
    if(text ===''){
        input.focus()
        return;
    }


    const item = createItem(text);
    items.appendChild(item)

    item.scrollIntoView() //{block:'center'} 해줘도되고 여튼 수고

    input.value = ''
    input.focus()
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row')

    const item = document.createElement('div')
    item.setAttribute('class','item')

    const item_name = document.createElement('span')
    item_name.setAttribute('class','item_name')
    item_name.innerText = text;

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','item_delete')
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemRow)
    })

    const itemDivider = document.createElement('div')
    itemDivider.setAttribute('class','item_divider')

    item.appendChild(item_name)
    item.appendChild(deleteBtn)

    itemRow.appendChild(item)
    itemRow.appendChild(itemDivider)

    return itemRow;


}

addBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress',event=>{
    if(event.key ==='Enter'){
        onAdd();
    }
})