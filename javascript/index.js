const darkModeBtn = document.getElementById("modeBtn")
darkModeBtn.addEventListener("click",()=>{
  console.log("change mode")
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    element.classList.toggle("dark-mode")
    // element.classList.toggle("light-mode")
  })
})
