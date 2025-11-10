// Решение 2: Простая версия с именованным экспортом
const setWidth = (number) => {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = `${number}%`;
};

const updateProgress = (defaultNumber, delta) => {
  let currentWidth = defaultNumber;
  setWidth(currentWidth);
  
  document.querySelector('.button-increase').addEventListener('click', () => {
    currentWidth = Math.min(100, currentWidth + delta);
    setWidth(currentWidth);
  });
  
  document.querySelector('.button-decrease').addEventListener('click', () => {
    currentWidth = Math.max(0, currentWidth - delta);
    setWidth(currentWidth);
  });
};

export default updateProgress;
