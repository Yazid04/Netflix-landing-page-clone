const questionPart = document.querySelectorAll(".question-part");
const icon = document.querySelector(".btn");


window.addEventListener("resize", removingicons);
window.addEventListener("load", pageLoad);


function pageLoad() {
    removingicons();
}


function removingicons() {
    let width = window.innerWidth;
    if (width < 450) {
        icon.firstElementChild.remove();
    }
}


function questionsLogic() {
  const questions = questionPart.forEach(question => {
    question.addEventListener("click", () => {
        //closing the tab if new tab is clicked on
        questionPart.forEach(item => {
            if (item !== question) {
                item.parentElement.classList.remove("show-answer")
            }
        })
          //console.log(question.parentElement);
          question.parentElement.classList.toggle("show-answer");
      })
  })
}

questionsLogic();
