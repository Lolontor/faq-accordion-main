const accordion = document.querySelectorAll(".accordion-div");
accordion.forEach((accord) => {
    accord.onclick = ()=>{
        accord.classList.toggle('active');    
    }
    
});