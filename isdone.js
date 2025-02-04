let isDone = false;
const nums = document.createElement("div");
nums.innerText = 8;
nums.className = "number";
if (isDone) {
  nums.innerText = "hello";
} else {
  nums.innerText = 8;
}
body.appendChild(nums);
