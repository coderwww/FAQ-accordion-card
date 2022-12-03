const accordion = document.querySelector(".accordion");

const handleToggle = event => {
    let currentLi = event.target.parentElement;
    Array.from(accordion.children).forEach(li => {
    if (li != currentLi)
        li.classList.remove('open')
    }) 
    currentLi.classList.toggle('open');
}

accordion.querySelectorAll(".question").forEach(question => {
    question.addEventListener('click', handleToggle);
});