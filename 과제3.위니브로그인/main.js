document.addEventListener('DOMContetnLoaded', () => {

  const checkbox = document.querySelector('.checkbox')
  checkbox.addEventListener('click', () => {
    checkbox.style.color='#fff'
    checkbox.style.backgroundColor='#efb0ed'
    checkbox.style.border='none'
  });
});