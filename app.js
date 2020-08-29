loadEvents();

function loadEvents(){
  document.querySelector('form').addEventListener('submit', submit)
}

function submit(event){
  event.preventDefault()
  const input = document.querySelector('input')
  if(input.value !== '') addTodo(input.value)
  input.value = ''
}

function addTodo(value){
  let ul = document.querySelector('ul')
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">X</span><input type="checkbox"> <label>${value}</label>`
  ul.appendChild(li)
}

{/* 
<li>
  <span class="delete">X</span><input type="checkbox"> <label>React</label>
</li> */}