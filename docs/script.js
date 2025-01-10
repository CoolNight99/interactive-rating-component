const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const emptyRatingWarning = document.querySelector(".empty-rating-warning");

const selectedRatingSpan = document.querySelector("selected-rating");

const main = document.querySelector("main");

ratingBtns.forEach((button) => {
    button.addEventListener("click", () => {
        ratingBtns.forEach((btn) => {
            btn.style.backgroundColor = "#404145";
            btn.style.color = "#ACA395";

            btn.addEventListener("mouseover", () => {
                btn.style.backgroundColor = "#fb7413";
                btn.style.color = "#252d36";
            });

            btn.addEventListener("mouseout", () => {
                btn.style.backgroundColor = "#404145";
                btn.style.color = "#ACA395";
            });
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "white";
            button.style.color = "#372F25";
        });

        button.style.backgroundColor = "white";
        button.style.color = "#372F25";
        button.classList.add("clicked");
        emptyRatingWarning.style.display = "none";
        const selectedRating = button.innerText;

        localStorage.setItem("selectedRating", selectedRating);
    });
});

submitBtn.addEventListener("click", () => {
    const noneClicked = ![...ratingBtns].some((button) => button.classList.contains("clicked"));

    if (noneClicked) {
        emptyRatingWarning.style.display = "inline";
    }

    else {
        emptyRatingWarning.style.display = "none";
        
        main.innerHTML =
        `<div class="thank-you-card">
            <img class="thank-you-img" src="./images/illustration-thank-you.svg" alt="thank you image">
            <div class="selected-rating-div">You selected ${localStorage.getItem('selectedRating')} out of 5</div>
            <h1>Thank you!</h1>
            <p class="thank-you-msg">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>`
    }
});