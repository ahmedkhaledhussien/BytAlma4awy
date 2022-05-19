window.onload = function () {
  const menuToggler = document.querySelector(".menu-toggler");
  const navLinks = document.querySelector(".nav-links");

  menuToggler.onclick = function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("menu-activating");
  };

  const inputs = document.querySelectorAll("input");
  inputs.forEach((e) => {
    e.oninput = (ele) => {
      if (!ele.target.validity.valid) {
        validation(ele.target, e.getAttribute("errorMessage"));
      }
    };
  });

  function validation(element, message) {
    message = message.replace(/-br-/gi, "\n");
    element.setCustomValidity("");
    element.oninvalid = () => element.setCustomValidity(message);
  }
};
