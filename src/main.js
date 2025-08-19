const scrollBtn = document.querySelector(".btn--cta");

scrollBtn.addEventListener("click", () => {
  //   console.log("click");
  setTimeout(() => {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }, 1);
});
