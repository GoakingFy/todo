const iput_txt = document.querySelector(".inp_txt")
const plus = document.querySelector(".icon-tabler-plus")

const arrTODO = [];

const container = document.querySelector(".container_todo")
loadDataTodo();
plus.addEventListener("click" , ()=>{
    arrTODO.push( iput_txt.value)
    localStorage.setItem('todo',arrTODO)
    let newTODO = document.createElement("DIV")
    container.appendChild(newTODO)
  
    newTODO.innerHTML = `
    <div class="article_todo ">
    <p class="p_article">${iput_txt.value}</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="9 11 12 14 20 6" />
        <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
      </svg>
  </div>
    `
    

    iput_txt.value = '' ;  
    console.log(arrTODO)
})



    container.addEventListener("click" , e=>{
        
        if(e.target.classList.contains("icon-tabler-checkbox")){
       
                    let parent = e.target.closest(".article_todo")
                 
                  let todoContent = parent.firstChild.nextSibling.textContent
                  eliminarEArr(todoContent);
                  parent.style.animation = "delete .6s linear"
                  console.log(parent)
                  setInterval(()=>{
                    parent.classList.add("complete")
                  },550)
                 
                   
                    
            }
        }
        
    )
    

function eliminarEArr(e){
   
        let indexArr = arrTODO.indexOf(e)
        arrTODO.splice(indexArr,1)
        localStorage.setItem('todo',arrTODO)
        console.log(arrTODO)
}

function loadDataTodo(){
   
    let dataTodo = localStorage.getItem("todo")
    console.log(dataTodo)
    if(dataTodo != null){
        let arrData = dataTodo.split(",")
        console.log(arrData)
        for(let i = 0;i<arrData.length;i++){
            if(arrData[i] != ""){
                let newTODO = document.createElement("DIV")
                container.appendChild(newTODO)
              
                newTODO.innerHTML = `
                <div class="article_todo ">
                <p class="p_article">${arrData[i]}</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="9 11 12 14 20 6" />
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                  </svg>
              </div>
                `
            }
         
        }
    }else{
        console.log("Todavia no se ha escrito nada!!")
    }
   
}
