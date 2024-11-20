function next(){
    let givenTime=document.querySelector(".time");
    let givenType=document.querySelector(".type");
    localStorage.setItem("time",givenTime.value);
    localStorage.setItem("type",givenType.value);
    window.location.href="../htmlFiles/index.html";
}

document.querySelector("#options").addEventListener("change",()=>{
    window.location.href=this.value;
})