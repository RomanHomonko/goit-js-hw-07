import { galleryItems } from "../js/gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = addGalleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
