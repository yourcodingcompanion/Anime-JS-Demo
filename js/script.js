window.onload = function () {
    document.getElementById('swap-btn').addEventListener('click', function(){
        if(this.classList.contains("swap-btn")){
            this.className = 'invert-swap-btn';
            anime({
                targets: '.left-half',
                left: ['0', '50vw'],
                zIndex: 2,
                opacity: ['0.3', '1'],
                rotate: ['0deg', '360deg'],
                scale: ['0.5', '1'],
                easing: 'easeInOutQuad',
            });
            anime({
                targets: '.right-half',
                right: ['0', '50vw'],
                zIndex: 2,
                opacity: ['0.3', '1'],
                rotate: ['0deg', '360deg'],
                scale: ['0.5', '1'],
                easing: 'easeInOutQuad',
            });
        }
        else if(this.classList.contains("invert-swap-btn")){
            this.className = 'swap-btn';
            anime({
                targets: '.right-half',
                right: ['50vw', '0'],
                zIndex: 2,
                opacity: ['0.3', '1'],
                rotate: ['360deg', '0deg'],
                scale: ['0.5', '1'],
                easing: 'easeInOutQuad',
            });
            anime({
                targets: '.left-half',
                left: ['50vw', '0'],
                zIndex: 2,
                opacity: ['0.3', '1'],
                rotate: ['360deg', '0deg'],
                scale: ['0.5', '1'],
                easing: 'easeInOutQuad',
            });
        }
    });
}