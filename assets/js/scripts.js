var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

window.onload = function () {
    var vue = new Vue({
        el: "#slideshow",
        mounted: function () {
            const refs = this.$refs;
            const switchImage = this.switchImage;
            refs.slideshowImage.src = "/images/home1.jpg";
            refs.slideshowImage.className = "welcome-image fade-in";
            setInterval(function () {
                refs.slideshowImage.className = "welcome-image fade-out";
                setTimeout(function () {
                    switchImage();
                    refs.slideshowImage.className = "welcome-image fade-in";
                }, 300);
            }, 4000);
        },
        data: function () {
            return {
                imageIndex: 0,
                images: [
                    "/images/home1.jpg",
                    "/images/home2.jpg",
                    "/images/home3.jpg",
                    "/images/home4.jpg"
                ]
            };
        },
        methods: {
            switchImage: function () {
                this.imageIndex++;
                this.$refs.slideshowImage.src = this.images[this.imageIndex % 4];
            }
        }
    });
};

