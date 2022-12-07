/* hero */

const heroSwiper = new Swiper('.hero__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-pagination',
    prevEl: '.swiper-pagination',
  },
  scrollbar: {
    hide: true,
  }
});

/* offers */

const offersSlider = new Swiper('.offers__swiper', {
  slidesPerView: "auto",
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".offers__next",
    prevEl: ".offers__prev",
    disabledClass: "offers__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1150: {
      slidesPerView: "auto",
      grid: {
        rows: 1
      }
    }
  }
});

/* useful */

const usefulSlider = new Swiper('.useful__swiper', {
  slidesPerView: "auto",
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".useful__next",
    prevEl: ".useful__prev",
    disabledClass: "useful__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1150: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    }
  }
});

/* catalog */

const catalogSlider = new Swiper('.catalog__swiper', {
  slidesPerView: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".catalog__next",
    prevEl: ".catalog__prev",
    disabledClass: "catalog__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1150: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    }
  }
});

/* product */

const productSlider = new Swiper('.product__swiper', {
  grid: {
    rows: 1
  },
  navigation: {
    nextEl: ".product__next",
    prevEl: ".product__prev",
    disabledClass: "product__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      grid: {
        rows: 1
      }
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 78
    },
    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 78
    }
  }
});

/* similar */

const similarSlider = new Swiper('.similar__swiper', {
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".similar__next",
    prevEl: ".similar__prev",
    disabledClass: "similar__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 16
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1150: {
      slidesPerView: 4,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    }
  }
});