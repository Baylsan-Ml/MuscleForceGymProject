/* Changing Members Page Navbar color */
const memberNav=document.querySelector(".memberNav");
const quoteSection=document.querySelector(".quote-section");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= quoteSection.offsetTop){
        memberNav.classList.add('navbar-scroll')
    }else{
        memberNav.classList.remove('navbar-scroll')
    }
})
/* Changing Admin Page Navbar color */

const adminNav=document.querySelector(".AdminNav");
const membersSection=document.querySelector(".Members");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= membersSection.offsetTop){
       adminNav.classList.add('navbar-scroll')
    } else{
        adminNav.classList.remove('navbar-scroll')
    }
})

/* Changing Classes Page Navbar color */
const classesNav=document.querySelector(".classesNav");
const cardioSection=document.querySelector(".Cardio");

window.addEventListener("scroll", ()=>{
    
    if (window.scrollY >= cardioSection.offsetTop){
        classesNav.classList.add('navbar-scroll')
    }else{
        classesNav.classList.remove('navbar-scroll')
    }
})

const HIITscedualeSection=document.querySelector(".HIIT-Sceduale");
window.addEventListener("scroll", ()=>{
    
    if (window.scrollY >= HIITscedualeSection.offsetTop){
        classesNav.classList.remove('navbar-scroll')
    }else{
        classesNav.classList.add('navbar-scroll')
    }
})


/* Add New Class Modal Start*/

const addNewClassBtn=document.querySelector(".add-new-btn");
const addNewClassModal=document.querySelector(".addNewClassModal");
const closeBtn=document.querySelectorAll(".close_btn");
const CloseBtn=document.querySelectorAll(".close-btn");

let modalFlag=false;

const hideModal=()=>{
    addNewClassModal.classList.remove('show');
    modalFlag=false;
}

const showModal=()=>{
    addNewClassModal.classList.add('show');
    modalFlag=true;
}

addNewClassBtn.addEventListener("click", showModal);
closeBtn[0].addEventListener("click", hideModal);
CloseBtn[0].addEventListener("click", hideModal);

/* closing by Keyboard */
document.addEventListener("keydown", ({code})=>{
        if (code == 'Escape'){
            hideModal();
        }
    })
/* Closing by clicking anywhere */
document.addEventListener("click", function(e){
        if(modalFlag == true){
            if(e.target.classList.contains('addNewClassModal')){
                hideModal();
            }      
    }
    })

/* Add New Class Modal End*/


/* Add New Program Modal Start*/
const addNewProgramBtn=document.querySelector(".add-newProgram-btn");
const addNewProgramModal=document.querySelector(".addNewProgramModal");

const hideProgramModal=()=>{
    addNewProgramModal.classList.remove('show');
    modalFlag=false;
}

const showProgramModal=()=>{
    addNewProgramModal.classList.add('show');
    modalFlag=true;
}

addNewProgramBtn.addEventListener("click", showProgramModal);
closeBtn[1].addEventListener("click", hideProgramModal);
CloseBtn[1].addEventListener("click", hideProgramModal);

/* closing by Keyboard */
document.addEventListener("keydown", ({code})=>{
    if(code=='Escape'){
        hideProgramModal();
    }
})

/* Closing by clicking anywhere */
document.addEventListener("click", function(e){
        if(modalFlag == true){
            if(e.target.classList.contains('addNewProgramModal')){
                hideProgramModal();
            }      
    }
    })
/* Add New Program Modal End*/



