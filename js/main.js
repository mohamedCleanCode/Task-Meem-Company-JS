const desc = [
  "في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  "في هذه المرحلة يتم قبول المشاركين بناء علي الضوابط والشروط المذكورة",
  "في هذه المرحلة يتم تقديم برامج تدريبية وتأهيلية للمشاركين بموجز 7 حقائب تطويريه لتمنية المهارات المعرفيه لدي المشاركين",
  "في هذه المرحبة يتم تقديم تدريب الكتروني تفاعلي لكيفية اعداد دراسة الجدوي للمشاركين",
  "في هذه المرحلة يتم استقطاب متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو والتوسع وزيادة مبيعات المشاركين السنوية ومتابعتها",
  "في هذه المرحلة يتم تقديم منتج تمويلي بالاضافة الي متابعة كافة الاعمال بحيث توجهيهم بكيفية الصرف",
  "في هذه المرحلة يتم تمكين وتطوير مشاريع المشاركين من خلال مختصين في تطوير الاعمال وتنمية المبيعات لدي المشاركين",
  "في هذه المرحلة يتم دعم مشاريع المشاركين من خلال ربطهم بجهات تصدير وربطهم بمنافذ بيع دولية وتصدير مشاريعهم كقصص نجاح لبرنامج تجسير",
];
const plans = document.querySelectorAll(".plans li"),
  spans = document.querySelectorAll(".plans span"),
  text = document.querySelector(".plan-text .text"),
  counter = document.querySelector(".plan-text .odometer");
let times = 0;

const handleClick = (e) => {
  plans.forEach((plan) => {
    plan.classList.remove("plan");
  });
  e.target.classList.add("plan");
  const index = Array.from(plans).findIndex((plan) => plan === e.target);
  console.log(index);
  times = index + 1;
  setTimeout(() => {
    text.style.opacity = "1";
    text.innerHTML = desc[times - 1];
  }, 1000);
  counter.innerHTML = times;
};

plans.forEach((plan) => {
  plan.addEventListener("click", handleClick);
});

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
  text.style.opacity = "0";
  setTimeout(() => {
    text.style.opacity = "1";
    text.innerHTML = desc[times - 1];
  }, 1000);
  counter.innerHTML = (times + 1).toString().padStart(2, 0);
  times++;
}, 5000);
