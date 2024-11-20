function next(){
    let givenTime=document.querySelector(".time");
    let givenType=document.querySelector(".type");
    localStorage.setItem("time",givenTime.value);
    let type=givenType.value;
    if(type=="sscCgl"){
        localStorage.setItem("accuracyRequired","80");
        localStorage.setItem("wpmRequired","35");
    }
    else if(type=="bankPO"){
        localStorage.setItem("accuracyRequired","90");
        localStorage.setItem("wpmRequired","22");
    }
    else if(type=="railway"){
        localStorage.setItem("accuracyRequired","92");
        localStorage.setItem("wpmRequired","30");
    }
    localStorage.setItem("type","medium");
    window.location.href="../htmlFiles/index.html";
}

document.querySelector("#options").addEventListener("change",()=>{
    window.location.href=this.value;
})