// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

  const likehearts = document.querySelectorAll(".like-glyph");

  likehearts.forEach((hearts) => {
    hearts.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (hearts.textContent === EMPTY_HEART) {
            hearts.textContent = FULL_HEART;
            hearts.classList.add("activated-heart");
          } else {
            hearts.textContent = EMPTY_HEART;
            hearts.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // const modal = document.getElementById("modal");
          let modal = document.querySelector('.hidden')
          const modalMessage = document.getElementById("modal-message");
          modal.classList.remove("hidden");
          modalMessage.textContent = error;

          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
