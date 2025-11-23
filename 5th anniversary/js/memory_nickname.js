const marquees = document.querySelectorAll('.memory-nickname > ul');
const speeds = [1, 1, 1, 1];

marquees.forEach((ul, index) => {
  const speed = speeds[index] || 2;
  const direction = index % 2 === 0 ? 1 : -1;

  ul.innerHTML += ul.innerHTML; // 복제
  const ulWidth = ul.scrollWidth / 2;

  // 초기 위치
  let pos = direction === 1 ? 0 : ulWidth;

  function animate() {
    pos += speed * direction;

    if (direction === 1 && pos >= ulWidth) pos -= ulWidth;   // 왼→오
    if (direction === -1 && pos <= 0) pos += ulWidth;        // 오→왼

    ul.style.transform = `translateX(${-pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});