let scrollContainer = document.querySelector(".gallery");
let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");

scrollContainer.addEventListener("wheel", (evt)=>{
  evt.preventDefault();
  scrollContainer.scrollLeft -= evt.deltaY;
  scrollContainer.style.scrollBehavior = "smooth";
})

nextBtn.addEventListener("click", ()=>{
  scrollContainer.scrollLeft += 300;
  scrollContainer.style.scrollBehavior ="smooth";
});


backBtn.addEventListener("click", ()=>{
  scrollContainer.scrollLeft -= 300;
  scrollContainer.style.scrollBehavior ="smooth";
});
