// typing animation
let typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Marketing","UI/UX Designer"],
    typeSpeed:100,
    BackSpeed:80,
    loop:true,
})
// Aside menu
const nav = document.querySelector(".nav"),
 navList = nav.querySelectorAll("li"),
 totalNavList = navList.length,
 allSection =document.querySelectorAll(".section"),
 totalSection = allSection.length;

 for(let i=0; i<totalNavList; i++){
    // console.log(navList[i]);
    const a=navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function(){

        // 
        removeBackSection();

        // console.log(this)
        for(let j=0; j<totalNavList;j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // console.log("back-section" + navList[j].querySelector("a"))
                // allSection[j].classList.add("back-section")
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth<1200){
            asideSectionToggleBtn();
        }
    })
 }

 function removeBackSection(){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
 }

 function addBackSection(num){
    allSection[num].classList.add("back-section");
 }

 function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    // target =href[1];
    // console.log(target);
    document.querySelector("#" + target).classList.add("active");
 }

function updateNav(element){
    // console.log(element.getAttribute("href").split("#")[1])
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

 document.querySelector(".hire-me").addEventListener("click" , function(){
    // console.log(this);
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
 })

//  animation of aside menu
const navToggleBtn = document.querySelector(".nav-toggle"),
aside = document.querySelector(".aside");
navToggleBtn.addEventListener("click", ()=>{
    asideSectionToggleBtn();
})
function asideSectionToggleBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0;i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}