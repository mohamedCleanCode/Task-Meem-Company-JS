const plans = document.querySelectorAll(".plans li"),
  spans = document.querySelectorAll(".plans span");
let times = 0;

setInterval(() => {
  if (times === 8) {
    times = 0;
    spans.forEach((span) => {
      span.classList.remove("done");
    });
  }
  plans.forEach((plan) => {
    plan.classList.remove("plan");
  });
  plans[times].classList.add("plan");
  spans[times].classList.add("done");
  times++;
}, 5000);
