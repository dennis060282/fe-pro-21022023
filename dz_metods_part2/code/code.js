const ul = document.querySelector(`ul`),
      [...uls] = document.querySelector(`ul`).children,
      blackColor = () => {
          const ul = document.querySelector(`ul`),
          [...uls] = document.querySelector(`ul`).children;
          uls.forEach((el)=>{
             el.style.color = "black"
          })
      }


const selectFirstChild = () => {
    blackColor(); 
    ul.firstElementChild.style.color = `red`;
}


const selectLastChild = () => {
    blackColor();
    ul.lastElementChild.style.color = `red`;
}


const selectNextNode = () => {
    const [...uls] = document.querySelector(`ul`).children;
    const activeElement = uls.findIndex(i => i.style.color == 'red');
    
    if(activeElement > uls.length-2){
        blackColor();
    }else if(activeElement >= 0){ 
        blackColor();
        uls[activeElement].nextElementSibling.style.color = `red`;
    }
}


const selectPrevNode = () => {
    const [...uls] = document.querySelector(`ul`).children;
    const activeElement = uls.findIndex(i => i.style.color == 'red');
    if(activeElement == 0){
        blackColor();
    }else if(activeElement > 0){ 
        blackColor();
        uls[activeElement].previousElementSibling.style.color = `red`;
    }
}


const createNewChild = () => {
        const li = document.createElement(`li`);
        ul.append(li);
        const [...uls] = document.querySelector(`ul`).children;
        li.innerText = `Element ${uls.length}`;       
}


const removeLastChild = () => {
    const [...uls] = document.querySelector(`ul`).children;
    if(uls.length > 0){
       ul.lastElementChild.remove(); 
    }
}


const createNewChildAtStart = () => {
    const li = document.createElement(`li`);
    ul.prepend(li);
    const [...uls] = document.querySelector(`ul`).children;
    li.innerText = `Element ${uls.length}`;
    let num = 1;
    uls.forEach((el)=>{
        el.innerText = `Element ${num++}`;
     }) 
}
