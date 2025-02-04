let btn = document.createElement("button");
btn.innerText = "click me";
btn.onclick = log;

function log() {
  if (btn.style.backgroundColor == "") {
    btn.style = "background:red";
  } else {
    btn.style = "background: '' ";
  }
  btn.style = "background:green";
  console.log("btn clicked...");
}
body.appendChild(btn);
