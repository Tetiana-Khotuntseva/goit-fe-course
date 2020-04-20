("use strict");
import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");

gallery.addEventListener("click", openLightBox);
lightbox.addEventListener("click", handleBtnClick);
lightbox.addEventListener("click", handleBackdropClick);
window.addEventListener("keydown", handleEscPess);

function createGalleryItem(source, dataSource, alternative) {
  const galleryItem = `<li class = "gallery__item"> <a class="gallery__link" href = "${dataSource}">
  <img class = "gallery__image" src="${source}"  data-source="${dataSource}" alt="${alternative}"/>
  </a> </li>`;
  return galleryItem;
}
gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));

function createGallery(arr) {
  return arr.reduce(
    (acc, { preview, original, description }) =>
      acc + createGalleryItem(preview, original, description),
    ""
  );
}

function openLightBox(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  lightbox.classList.add("is-open");
  lightbox.querySelector("img").src = e.target.dataset.source;
}

function closeLightBox() {
  lightbox.classList.remove("is-open");
  lightbox.querySelector("img").src = "";
}

function handleBtnClick(e) {
  if (
    e.target ===
    e.currentTarget.querySelector('button[data-action="close-lightbox"]')
  )
    closeLightBox();
}

function handleBackdropClick(e) {
  if (e.target === e.currentTarget.querySelector(".lightbox__content"))
    closeLightBox();
}

function handleEscPess(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeLightBox(e);
}
