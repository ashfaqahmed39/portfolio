var typed= new Typed(".text", {
    strings: ["SQA Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

// Toggle "Learn more" expandable content for services
document.addEventListener('DOMContentLoaded', function(){
    const buttons = Array.from(document.querySelectorAll('.learn-more'));
    const allContents = Array.from(document.querySelectorAll('.more-content'));
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e){
            e.preventDefault();
            const anyHidden = allContents.some(el => !el.classList.contains('show'));
            if(anyHidden){
                allContents.forEach(el => { el.classList.add('show'); el.setAttribute('aria-hidden','false'); });
                buttons.forEach(b => b.textContent = 'Show less');
            } else {
                allContents.forEach(el => { el.classList.remove('show'); el.setAttribute('aria-hidden','true'); });
                buttons.forEach(b => b.textContent = 'Learn more');
            }
        });
    });
});