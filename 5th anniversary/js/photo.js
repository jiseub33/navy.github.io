const items = document.querySelectorAll('.gallery .item');
const thumbnails = document.querySelectorAll('.gallery .item img');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// 라이트박스 열기
function showLightbox() {
  lightbox.style.display = 'flex';
  lightboxImg.src = thumbnails[currentIndex].src;

  // 스크롤 막기
  document.body.style.overflow = 'hidden';

  updateButtons();
}

// 버튼 활성/비활성 처리
function updateButtons() {
  prevBtn.style.opacity = currentIndex === 0 ? 0.3 : 1;
  prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";

  nextBtn.style.opacity = currentIndex === thumbnails.length - 1 ? 0.3 : 1;
  nextBtn.style.pointerEvents = currentIndex === thumbnails.length - 1 ? "none" : "auto";
}

// 라이트박스 닫기
function hideLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
}

// 이미지 클릭
thumbnails.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

// 닫기 버튼
closeBtn.addEventListener('click', hideLightbox);

// 이전 버튼 (루프 없음)
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showLightbox();
  }
});

// 다음 버튼 (루프 없음)
nextBtn.addEventListener('click', () => {
  if (currentIndex < thumbnails.length - 1) {
    currentIndex++;
    showLightbox();
  }
});
