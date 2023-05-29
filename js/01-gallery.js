import { galleryItems } from "../js/gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery-item">
  <a class="gallery-link" href="${item.original}">
    <img class="gallery-image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
  </a>
</div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = addGalleryMarkup;
gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandardAction(evt);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandardAction(evt) {
  evt.preventDefault();
}
