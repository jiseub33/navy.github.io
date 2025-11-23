const boxes = document.querySelectorAll('.memory > div');

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
  (entries) => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;

    entries.forEach(entry => {
      const el = entry.target;

      if (isScrollingDown) {
        // 🔽 스크롤 내려갈 때: 보이면 active 추가
        if (entry.isIntersecting) {
          el.classList.add('active');
        }
      } else {
        // 🔼 스크롤 올라갈 때: 화면에서 완전히 사라지면 active 제거
        if (!entry.isIntersecting) {
          el.classList.remove('active');
        }
      }
    });
  },
  {
    threshold: 0.7 // 필요하면 조절
  }
);

boxes.forEach(box => observer.observe(box));