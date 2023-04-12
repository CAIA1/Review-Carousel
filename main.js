//import an array of customer reviews
import { customerReviews } from './reviews.js';

//set the key elements
const headshot = document.getElementById("headshot");
const name = document.getElementById("name");
const role = document.getElementById("role");
const review = document.getElementById("review");

//set the arrow buttons
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

//set the first review
let currentReview = 0;

//display the first review on the page when the page loads
window.addEventListener('load', () => {
    showReview(currentReview);
})

function showReview (currentReview) {
    const reviewItem = customerReviews[currentReview];
    headshot.src = reviewItem.image;
    name.textContent = reviewItem.name;
    role.textContent = reviewItem.role;
    review.textContent = reviewItem.review;
}

arrowRight.addEventListener('click', () => {
    currentReview++
    if (currentReview > customerReviews.length -1) {
        currentReview = 0;
    }
    showReview(currentReview);
})

arrowLeft.addEventListener('click', () => {
    currentReview--;
    if (currentReview < 0) {
        currentReview = customerReviews.length -1;
    }
    showReview(currentReview);
})


