import Swiper from "swiper/bundle";
console.log(123);
const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);

    if (callback) {
      callback(swiper);
    }
  };

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  };

  breakpoint.addEventListener("change", checker);
  checker();
};

const someFunc = (instance) => {
  if (instance) {
    instance.on("slideChange", function (e) {
      console.log("*** mySwiper.activeIndex", instance.activeIndex);
    });
  }
};

resizableSwiper(
  "(max-width: 768px)",
  ".advantages__list",
  {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 2,
    pagination: {
      el: ".advantages__list-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".advantages__list-next",
      prevEl: ".advantages__list-prev",
    },
  },
  someFunc,
);
resizableSwiper(
  "(max-width: 610px)",
  ".advantages__list",
  {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 1,
    pagination: {
      el: ".advantages__list-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".advantages__list-next",
      prevEl: ".advantages__list-prev",
    },
  },
  someFunc,
);
resizableSwiper(
  "(max-width: 768px)",
  ".buffbeer-slider",
  {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 2,
    pagination: {
      el: ".buffbeer-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".buffbeer-slider-next",
      prevEl: ".buffbeer-slider-prev",
    },
  },
  someFunc,
);
resizableSwiper(
  "(max-width: 610px)",
  ".buffbeer-slider",
  {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 1,
    pagination: {
      el: ".buffbeer-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".buffbeer-slider-next",
      prevEl: ".buffbeer-slider-prev",
    },
  },
  someFunc,
);
