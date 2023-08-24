const about_button = document.querySelector(".second-header");
const menubtn = document.querySelector(".menubtn");
const top_about_wrapper = document.querySelector(".about-top-wrapper");
const mid_about_wrapper = document.querySelector(".about-mid-wrapper");
const bottom_about_wrapper = document.querySelector(".about-bottom-wrapper");
const about_container = document.querySelector(".about-container");
const close_btn_about = document.querySelector(".close-btn-about");
const browse_category = document.querySelector(".browse_category");
const browse_category_after = window.getComputedStyle(browse_category,'::after'); 

menubtn.addEventListener("click",()=>{
    about_container.classList.toggle("active");
    top_about_wrapper.classList.add("animate");
    mid_about_wrapper.classList.add("animate");
    bottom_about_wrapper.classList.add("animate");
})


close_btn_about.addEventListener("click",()=>{
    top_about_wrapper.classList.remove("animate");
    mid_about_wrapper.classList.remove("animate");
    bottom_about_wrapper.classList.remove("animate");
    about_container.classList.remove("active");
})




// browse_category.addEventListener("click",()=>{
//     browse_category.style.setProperty('--browse_after','flex');
// })


// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add("active");
//         }else{
//             entry.target.classList.remove("active");
//         }
//     });
// });

// const hiddenelements = document.querySelectorAll(".active");