const btn = document.querySelector("#btn");
const click = document.querySelector("#click");
const trigger = document.querySelector("#trigger");

let clickCount = 0;
let triggerCount = 0;

btn.addEventListener("click", () => {
  console.log("clickCount", clickCount);
  console.log("triggerCount", triggerCount);
  clickCount++;
  click.textContent = clickCount;
  updateTrigger();
});

const debounce = (cb, delay) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateTrigger = debounce(() => {
  triggerCount++;
  trigger.textContent = triggerCount;
}, 800);
