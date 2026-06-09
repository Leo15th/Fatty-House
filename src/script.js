const mobileMenuIconBtn = document.getElementById("mobile-menu-icon-btn");
const mobileMenuIcon = document.getElementById("mobile-menu-icon")
const mobileMenu = document.getElementById("mobile-menu")
const nav = document.querySelector("nav")
const messageForm = document.getElementById("message-form")

window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        nav.classList.add("bg-black/30" , "backdrop-blur-3xl", "border-b", "border-b-white/50")
    }else{
        nav.classList.remove("bg-black/30" , "backdrop-blur-3xl", "border-b", "border-b-white/50")
    }
})

mobileMenuIconBtn.addEventListener("click",()=>{
    mobileMenuIcon.classList.toggle("fa-bars")
    mobileMenuIcon.classList.toggle("fa-x")
    if(mobileMenuIcon.classList.contains("fa-x")){
        mobileMenu.classList.remove("opacity-0","translate-x-full","pointer-events-none")
        mobileMenu.classList.add("opacity-100", "translate-x-0")
    } else {
        mobileMenu.classList.add("opacity-0","translate-x-full", "pointer-events-none")
        mobileMenu.classList.remove("opacity-100", "translate-x-0")
    }
})

messageForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.alert("Send Message Successful!")
    messageForm.reset();
})