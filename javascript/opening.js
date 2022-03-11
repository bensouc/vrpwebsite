const home = document.getElementById("home");
const left_panel = document.getElementById("left-panel");
const right_panel = document.getElementById("right-panel");
const hidden_logo = document.getElementById("hidden-logo");
const vertical_logo = document.getElementById("vertical-logo");
const site = document.getElementById("site")
const panels = document.getElementById("panels")
const delay = ms => new Promise(res => setTimeout(res, ms));
console.log("connected");


home.addEventListener("click", (event) => {
  console.log("connexion");
  hidden_logo.classList.add("d-none")
  // vertical_logo.classList.add('upscale')
  left_panel.classList.add("moved-left")
  right_panel.classList.add("moved-right")

  reveal_site()
});

const reveal_site = async () => {
  await delay(200);
  site.classList.remove("site-inactive")
  site.classList.add("site-active");
}
