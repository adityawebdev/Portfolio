window.addEventListener("scroll", () => {
  let skill = document.getElementById("skill-section");
  let contentPosition = skill.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    skill.classList.add("active1");
  } else {
    skill.classList.remove("active1");
  }
});
window.addEventListener("scroll", () => {
  let projects = document.getElementById("portfolio");
  let contentPosition = projects.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    projects.classList.add("active");
  } else {
    projects.classList.remove("active");
  }
});
