const about_button = document.querySelector(".second-header");
const menubtn = document.querySelector(".menubtn");
const top_about_wrapper = document.querySelector(".about-top-wrapper");
const mid_about_wrapper = document.querySelector(".about-mid-wrapper");
const bottom_about_wrapper = document.querySelector(".about-bottom-wrapper");
const about_container = document.querySelector(".about-container");
const close_btn_about = document.querySelector(".close-btn-about");
const browse_category = document.querySelector(".browse_category");
const accordian = document.querySelector(".accordion");
const browse_category_after = window.getComputedStyle(browse_category, '::after');

menubtn.addEventListener("click", () => {
  about_container.classList.toggle("active");
  top_about_wrapper.classList.add("animate");
  mid_about_wrapper.classList.add("animate");
  bottom_about_wrapper.classList.add("animate");
  accordian.classList.add("animate");
})


close_btn_about.addEventListener("click", () => {
  top_about_wrapper.classList.remove("animate");
  mid_about_wrapper.classList.remove("animate");
  bottom_about_wrapper.classList.remove("animate");
  about_container.classList.remove("active");
  accordian.classList.remove("animate");
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


const observer = new IntersectionObserver(entries => {

})








// accordian


const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}

const workobserver = document.querySelector('.counter_container');
const observer2 = new IntersectionObserver((entries, observer) => {

  const [entry] = entries;
  console.log(entry);


  if (!entry.isIntersecting) return;

  //counter_number-page4

  const counternum = document.querySelectorAll(".counter-numbers");

  const speed = 5;

  counternum.forEach((curElem) => {
    const updatenum = () => {
      const targetnum = parseInt(curElem.dataset.number);
      // console.log(targetnum);
      const initialnum = parseInt(curElem.innerText);
      // console.log(initialnum);

      const incrementnum = Math.trunc(targetnum / speed);
      // console.log(incrementnum);


      if (initialnum < targetnum) {
        curElem.innerText = `${initialnum + incrementnum}+`;

        setTimeout(updatenum, 130);
      }
    };
    observer.unobserve(workobserver);
    updatenum();
  });

}, {
  root: null,
  threshold: 1,
});

observer2.observe(workobserver);



const product_btn1 = document.getElementById("btn1")
const product_btn2 = document.getElementById("btn2")
const product_btn3 = document.getElementById("btn3")
const product_btn4 = document.getElementById("btn4")
const product_btn5 = document.getElementById("btn5")


// product_btn1.addEventListener("click", ()=>{
//   product_btn1.classList.add("fadeactive");
// })


function fade(){
  document.getElementById("product_container").classList.toggle("fadeactive");
}
function fade2(){
  document.getElementById("product_container").classList.toggle("fadeactive");
}
function fade3(){
  document.getElementById("product_container").classList.toggle("fadeactive");
}
function fade4(){
  document.getElementById("product_container").classList.toggle("fadeactive");
}
function fade5(){
  document.getElementById("product_container").classList.toggle("fadeactive");
}

// loader

// var loader = document.getElementById("loader-container");

// var myinterval = setInterval(loader,5000);

// function loader() {
//   window.addEventListener("load",function(){
//     loader.style.display="none";
//   })
// }






