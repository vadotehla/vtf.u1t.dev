document.addEventListener("DOMContentLoaded", () => {
  const LinkElements = document.getElementsByClassName("link");

  for (const elem of LinkElements) {
    if (elem instanceof HTMLElement) {
      let href = "/";
      if (elem.hasAttribute("href")) href = elem.getAttribute("href");
      elem.addEventListener("click", () => window.open(href, "_self"));
    }
  }
});
