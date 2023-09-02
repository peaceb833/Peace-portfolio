window.addEventListener('load', function () {
  // Select the loading element
  var loadingElement = document.getElementById('loading');

  // Function to hide the loading element
  function hideLoading() {
    loadingElement.style.display = 'none';
  }

  // Set a 5-second delay and then hide the loading element
  setTimeout(hideLoading, 5000);
});

const toggleMenuBtn = document.getElementById('toggle-menu');
const section = document.getElementById('section'); 
const mainMenu = document.getElementById('main-menu');
    toggleMenuBtn.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
       section.classList.toggle('remove')
    });

    
  // Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
     const input = document.querySelector('input');
    const fullName = document.querySelector('input[name="FullName"]');
    const email = document.querySelector('input[name="Email"]');
    const phoneNumber = document.querySelector('input[name="PhoneNumber"]');
    const message = document.querySelector('textarea[name="message"]');

    if (fullName.value === '' || email.value === '' || phoneNumber.value === '' || message.value === '') {
        event.preventDefault();
        input.classList.add('red')
    }
});
// Parallax scrolling effect
window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax');
  parallax.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

// Scroll progress indicator
window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  scrollIndicator.style.width = `${scrolled}%`;
});




// window.addEventListener('scroll', () => {
//   const header = document.querySelector('header');
//   if (window.scrollY > 100) {
//       header.classList.add('sticky');
//   } else {
//       header.classList.remove('sticky');
//   }
// });


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
    



