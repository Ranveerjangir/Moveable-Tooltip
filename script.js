const home=document.querySelectorAll("h")
console.log(home)
for(let i=0;i<5;i++)
    home[i].onmouseover=()=>{
        console.log("Ranveer")
        home[i].nextElementSibling.style.display="block"

    }
    home[i].onmouseout=()=>{
        home[i].nextElementSibling.style.display="none"
    }
    home[i].onmousemove=(e)=>{
        home[i].nextElementSibling.style.top= ${e.clientY-home[i].getBoundingClientRect()}
     home[i].nextElementSibling.style.top= ${e.clientx-home[i].getBoundingClientRect}
console.log(home[i].getBoundingClientRect().x)
}

