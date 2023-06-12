new Splide(".splide").mount();

const splide = new Splide(".splide", {
  type: "slide",
  // type: "loop",
  perPage: 3,
  focus: "center",
  omitEnd: true,
  autoplay: true,
  trimSpace: true,
  width: "100%",
  // autoWidth: true,
  fixedHeight: "50rem",
  cover: true,
  breakpoints: {
    640: {
      perPage: 1,
      fixedHeight: "40rem",
    },
  },
});

splide.mount();
