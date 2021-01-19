const image = document.querySelector(".image");
const quote = document.querySelector(".quote");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const profiles = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    quote: `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    image: "images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`,
    image: "images/image-john.jpg",
  },
];

var i = 0;

function slideRight() {
  i++;
  if (i == profiles.length) {
    i = 0;
  }
  name.innerHTML = profiles[i].name;
  job.innerHTML = profiles[i].job;
  quote.innerHTML = profiles[i].quote;
  image.style.backgroundImage = `url(${profiles[i].image})`;
}

function slideLeft() {
    i--;
    if (i == -1) {
      i = 1;
    }
    name.innerHTML = profiles[i].name;
    job.innerHTML = profiles[i].job;
    quote.innerHTML = profiles[i].quote;
    image.style.backgroundImage = `url(${profiles[i].image})`;
  }

rightBtn.addEventListener('click', slideRight)
leftBtn.addEventListener('click', slideLeft)
