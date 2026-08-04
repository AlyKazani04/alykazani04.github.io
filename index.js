console.log('Is this working?');

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-content");
const closeBtn = document.getElementsByClassName("close")[0];

const images = document.querySelectorAll(".project-img");

images.forEach((img) => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}