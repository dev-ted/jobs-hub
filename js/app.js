const cta_menu = document.querySelector(".header__container__cta");

const menu_icon = document.querySelector(".header__container__menuIcon");
const icon = document.querySelector(".icon");
const header = document.querySelector(".header");
const cta_login = document.querySelector(
  ".header__container__cta__login__button"
);
const cta_register = document.querySelector(
  ".header__container__cta__register__button"
);
const jobsCount = document.querySelector(".jobs__results__count");

let jobsCon = document.querySelector(".jobs__container");
let dataHtml = " ";
let dataCount = " ";

let isOPen = false;


menu_icon.addEventListener("click", () => {
  if (!isOPen) {
    icon.classList.add("fa-times");
    cta_menu.classList.add("active");

    isOPen = true;
  } else {
    icon.classList.remove("fa-times");
    cta_menu.classList.remove("active");
    isOPen = false;
  }
});
window.onscroll = () => {
  const top = window.scrollY;

  if (top > 90) {
    header.classList.add("header-bg");
    cta_login.classList.add("bg");
    cta_register.classList.add("bg");
  } else {
    header.classList.remove("header-bg");
    cta_login.classList.remove("bg");
    cta_register.classList.remove("bg");
  }
};

//get jobs

function getJobs() {
       return fetch(
         "../data/data.json"
       )
         .then((res) => res.json())
         .then((jobs) => {
           console.log(jobs);
           return jobs;
         })
         .catch((err) => console.log(err));
        
}

//show jobs

function showJobs(jobs) {
        console.log(jobs);
        dataCount += `<span>Showing  ${jobs.length} jobs</span>`;
        jobsCount.innerHTML = dataCount;

        jobs.forEach(job => {
                console.log("jobs>>>>", job.company);
                
                dataHtml += `  <div class="jobs__container__card">
                                <div class="jobs__container__card__top">
                                        <img src="${job.logo}"
                                                alt="" class="jobs__container__card__img">
                                        <i class="fa fa-ellipsis-v"></i>
                                </div>
                                <div class="jobs__container__card__role">
                                        <span>${job.roleName}</span>
                                </div>
                                <div class="jobs__container__card__description">
                                        <p>
                                                ${job.requirements.content}


                                        </p>
                                </div>
                                <div class="jobs__container__card__cta">
                                        <a href="${job.applicationLink}" target = "_blank" class="jobs__container__card__cta__link">Apply Now</a>
                                </div>
                       

                </div>`;
        })

        jobsCon.innerHTML = dataHtml;
        
        
}



//call funcs
getJobs().then(jobsData => {
        showJobs(jobsData);
});