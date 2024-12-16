document.querySelectorAll('.stages__accordion-item').forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    btn.addEventListener('click', () => {
        item.classList.toggle('open');
    })
})

document.addEventListener('DOMContentLoaded', function () {
    Inputmask({
        mask: "+7 999 999 99 99", // Маска для номера телефона
        placeholder: "", // Убираем плейсхолдер
        showMaskOnFocus: false, // Скрываем маску при фокусе
        showMaskOnHover: false // Скрываем маску при наведении
    }).mask(document.getElementById('phone-input'));
});