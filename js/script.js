const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

<<<<<<< HEAD
const showNextImg = () => {
  if (currentImgIndex === THUMBNAILS.length + 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showPrevImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

=======
>>>>>>> fb2c189a6154e1d77becb41240d4418ad0da66a8
THUMBNAILS.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
  });
});

POPUP_CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});

<<<<<<< HEAD
ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPrevImg);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" / e.keyCode === 39) {
    showNextImg();
  }
  if(e.code === "ArrowLeft" / e.keycode === 37) {
    showPrevImg();
=======
ARROW_RIGHT.addEventListener("click", () => {
  if (currentImgIndex === THUMBNAILS.length + 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
});

ARROW_LEFT.addEventListener("click", () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" / e.keyCode === 39) {
>>>>>>> fb2c189a6154e1d77becb41240d4418ad0da66a8
  }
});
