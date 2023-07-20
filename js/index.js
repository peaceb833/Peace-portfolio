
const toggleMenuBtn = document.getElementById('toggle-menu');
const section = document.getElementById('section'); 
const mainMenu = document.getElementById('main-menu');
    toggleMenuBtn.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
       section.classList.toggle('remove')
    });


// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     navLinks.forEach(link => link.classList.remove('active'));
//     this.classList.add('active');
//   });
// });
  // Display the spinner when the page starts loading
  window.addEventListener('beforeunload', () => {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'flex';
  });

  // Hide the spinner when the page finishes loading
  window.addEventListener('load', () => {
    setTimeout(() => {
        const spinner = document.querySelector('.spinner');
        spinner.style.display = 'none';
      }, 10000); // 1 minute in milliseconds
  });

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    



