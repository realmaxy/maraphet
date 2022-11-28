document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
});
  
document.addEventListener('DOMContentLoaded', () => {
// инициализация слайдера
const slider = new ItcSimpleSlider('.itcss');
// назначим обработчик при нажатии на кнопку .btn-prev
document.querySelector('.btn-prev').onclick = () => {
    // перейдём к предыдущему слайду
    slider.prev();
}
// назначим обработчик при нажатии на кнопку .btn-next
document.querySelector('.btn-next').onclick = () => {
    // перейдём к следующему слайду
    slider.next();
}
});

const slider = new ItcSimpleSlider('.itcss', {
loop: false,
});