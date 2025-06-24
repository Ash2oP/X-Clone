const postButtons = document.querySelectorAll(".post-buttons-template");

postButtons.forEach((btns) => {
    const postSvgs = btns.querySelectorAll("svg");

    btns.addEventListener("mouseenter", () => {
        postSvgs.forEach((svg) => {
            svg.classList.add("fill-blue-600");
        });
    });

    btns.addEventListener("mouseleave", () => {
        postSvgs.forEach((svg) => {
            svg.classList.remove("fill-blue-600");
        });
    });
});
