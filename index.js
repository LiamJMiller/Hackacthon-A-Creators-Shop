// nav link change
// const addClickEventHandlers = () => {
//   const showRows = document.querySelectorAll(".nav__link");

//   showRows.forEach((row) => {
//     row.addEventListener("click", (e) => {
//       const activeClass = "show--active";

//       const previouslyActiveRow = document.querySelector(`.${activeClass}`);

//       if (previouslyActiveRow) {
//         previouslyActiveRow.classList.remove(activeClass);
//       }

//       e.currentTarget.classList.add(activeClass);
//     });
//   });
// };
// addClickEventHandlers();

// document.addEventListener("DOMContentLoaded", function () {
//   var splide = new Splide(".splide");
//   splide.mount();
// });

new Splide(".splide").mount();

const splide = new Splide(".splide", {
  type: "slide",
  perPage: 3,
  focus: "center",
  omitEnd: true,
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

// /|\
//  |
//dom the html for this once page issue is fixed
