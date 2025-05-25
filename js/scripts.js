const cont = document.querySelector(".main-menu")
const btn = document.querySelector(".main-menu__toggle-button > i")
const firstscreen = document.querySelector(".firstscreen__background")
const about = document.querySelector(".about")
const open_main_menu = () => {
    cont.classList.toggle("main-menu_active")
    btn.classList.toggle("fa-bars")
    btn.classList.toggle("fa-xmark")
    document.body.classList.toggle("light-back")
}
document.querySelectorAll(".main-menu__link > a").forEach(elem => {
  elem.addEventListener("click", open_main_menu);
});
const open_about = () => {
    about.classList.toggle("open_about")
}

window.addEventListener("scroll", (event) => {
    const scrollY = window.scrollY;
    const scale = 1 + scrollY / 3000; 
    firstscreen.style.transform = `scale(${scale})`;
})
document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: t => Math.min(1.6, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

  gsap.registerPlugin(ScrollTrigger);

 

  const split = new SplitType(".about__text", {
    types: "lines",
    lineClass: "line"
  });

  gsap.utils.toArray(".about__text .line").forEach((line) => {
    gsap.to(line, {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: line,
        start: "top 90%",
        end: "top 30%",
        scrub: true
      }
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".map__title-line").forEach((line, i) => {
    gsap.to(line, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: ".map",
        start: "top 60%",
        end: "top 30%",
        scrub: true
      }
    });
  });
  gsap.utils.toArray(".coffee__title-line").forEach((line, i) => {
    gsap.to(line, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: ".coffee",
        start: "top 60%",
        end: "top 30%",
        scrub: true
      }
    });
  });
    gsap.utils.toArray(".feedback__title-line").forEach((line, i) => {
    gsap.to(line, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: ".feedback",
        start: "top 60%",
        end: "top 30%",
        scrub: true
      }
    });
  });
  gsap.to(".map__ads", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".map__ads",
      start: "top 95%",
      end: "top 40%",
      scrub: true
    }
  });

  gsap.to(".map__text-of-address", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".map__text-of-address",
      start: "top 95%",
      end: "top 40%",
      scrub: true
    }
  });
  gsap.to(".map__location", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".map__location",
      start: "top 95%",
      end: "top 40%",
      scrub: true
    }
  });

  gsap.utils.toArray(".bubble-items__item").forEach((item, i) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "top 50%",
        scrub: true
      }
    });
  });
 const items = gsap.utils.toArray(".coffee__item");

    // Для каждого элемента создаём ScrollTrigger-анимацию
    items.forEach((item, i) => {
      gsap.to(item, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: i * 0.1,          // небольшой ступенчатый старт
        scrollTrigger: {
          trigger: item,
          start: "top 90%",      // когда верх элемента достигнет 90% высоты экрана
          end:   "top 70%",      // до момента, когда он на 70% экрана
          toggleActions: "play none none reverse",
          // scrub: true         // если хотите синхронизировать с прокруткой
        }
      });
    });const preview = document.createElement("div");
  preview.classList.add("coffee__preview");
  document.body.append(preview);

  // 2. Навешиваем события на все .coffee__item
  document.querySelectorAll(".coffee__item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      const url = item.dataset.preview;
      preview.style.backgroundImage = `url(${url})`;
      gsap.to(preview, {
        autoAlpha: 1,
        scale: 1,
      });
    });

    item.addEventListener("mousemove", e => {
      gsap.to(preview, {
        x: e.pageX + 20,
        y: e.pageY + 20,
        duration: 0.3,
        ease: "power3.out"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(preview, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power3.out"
      });
    });
  });