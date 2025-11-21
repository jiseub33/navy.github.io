const section = document.querySelector("section.story");

// 각 그룹
const backgroundItems = section.querySelectorAll(".background div");
const titleItems = section.querySelectorAll(".title div");

// 그룹이 같은 div 수를 가지는지 확인
const total = Math.min(backgroundItems.length, titleItems.length);

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const scrollY = -rect.top;
  const sectionHeight = rect.height;

  // 0~1 비율
  let progress = scrollY / (sectionHeight - window.innerHeight);
  progress = Math.min(Math.max(progress, 0), 1);


  let index = Math.floor(progress * total);
  index = Math.min(index, total - 1);

  for (let i = 0; i < total; i++) {
    if (i < index) {
      backgroundItems[i].classList.add("past");
      backgroundItems[i].classList.remove("active");
      titleItems[i].classList.add("past");
      titleItems[i].classList.remove("active");
    } else if (i === index) {
      backgroundItems[i].classList.add("active");
      backgroundItems[i].classList.remove("past");
      titleItems[i].classList.add("active");
      titleItems[i].classList.remove("past");
    } else {
      backgroundItems[i].classList.remove("active", "past");
      titleItems[i].classList.remove("active", "past");
    }
  }
});
