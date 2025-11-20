const section = document.querySelector("section.story");
const steps = document.querySelectorAll(".step");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const scrollY = -rect.top;
  const sectionHeight = rect.height;

  // 0~1 비율
  let progress = scrollY / sectionHeight;
  progress = Math.min(Math.max(progress, 0), 1);

  const total = steps.length;
  const index = Math.floor(progress * total);

  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
});