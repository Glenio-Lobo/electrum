function init(){
    //window.addEventListener('DOMContentLoaded', lazyLoad);
}

function lazyLoad(){
    const lazyBgImages = document.querySelectorAll('.lazy');

    const lazyObserver = new IntersectionObserver(function(entries){
        console.log(entries);
        entries.forEach( entry => {
            if(entry.isIntersecting) entry.target.style.backgroundImage = `url(${entry.target.dataset.src})`;
        })
    });

    lazyBgImages.forEach( lazyImg => lazyObserver.observe(lazyImg) );
}

init();