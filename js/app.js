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
       fetch(
         "https://job-search4.p.rapidapi.com/simplyhired/search?query=b&page=200",
         {
           method: "GET",
           headers: {
             "x-rapidapi-key":
               "5d394e054dmshdec26f7d82df997p1f3d91jsn559ab944eacf",
             "x-rapidapi-host": "job-search4.p.rapidapi.com",
           },
         }
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
}



//call funcs
 getJobs().then((jobs) => {
   showJobs(jobs);
 });
