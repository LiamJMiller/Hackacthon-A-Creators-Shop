// image gallery rotations
// const sliderImg = document.getElementsByClassName("slider__imgs");
// const sliderImgClass = "slider__img";

// const slides = [
//   "img1",
//   "img2",
//   "img3",
//   "img4",
//   "img5",
//   "img6",
//   "img7",
//   "img8",
//   "img9",
//   "img10",
//   "img11",
//   "img12",
//   "img13",
//   "img14",
//   "img15",
//   "img16",
//   "img17",
//   "img18",
//   "img19",
//   "img20",
//   "img21",
//   "img22",
//   "img23",
// ];
// console.log(sliderImg);

// function slider() {
//   for (i = 0; i < slides.length; i = i + 1) {
//     // let nextImg =
//     //   (sliderImg.innerHTML = `<img class="slider__img" src="${slides[i]}">`);
//     setInterval(nextImg), 2000;
//   }

//   // sliderImg.innerHTML ="<img class=" + sliderImgClass + " src=" + slides[i] + ">";
// }
// slider();

// // console.log(slider);

// nav link change

const addClickEventHandlers = () => {
  const showRows = document.querySelectorAll(".nav__link");

  showRows.forEach((row) => {
    row.addEventListener("click", (e) => {
      const activeClass = "show--active";

      const previouslyActiveRow = document.querySelector(`.${activeClass}`);

      if (previouslyActiveRow) {
        previouslyActiveRow.classList.remove(activeClass);
      }

      e.currentTarget.classList.add(activeClass);
    });
  });
};

addClickEventHandlers();
