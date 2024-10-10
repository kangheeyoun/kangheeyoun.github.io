const updateResult=(ele,txt,bg)=>{
    ele.textContent = txt;
    ele.style.backgroundCorlor=bg;
}

const checkAncwer = (answer)=>{
    const result = document.querySelector("p");
    if(answer==true){
        updateResult(result,"정답입니다","green");
    }else{
        updateResult(result,"틀렸습니다","black");
}
}


document.addEventListener("DOMContentLoaded",()=>{
    const OBtn = document.querySelector(".O");
    const XBtn = document.querySelector(".X");
    OBtn.addEventListener("click",()=>{checkAncwer(true)});
    XBtn.addEventListener("click",()=>{checkAncwer(false)});
});
