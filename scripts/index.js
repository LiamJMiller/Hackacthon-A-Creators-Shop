new Splide(".splide").mount();

const splide = new Splide(".splide", {
  type: "slide",
  perPage: 3,
  focus: "center",
  omitEnd: true,
  autoplay: true,
  trimSpace: true,
  width: "100%",
  fixedHeight: "40rem",
  cover: true,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
});

splide.mount();
