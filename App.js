const sections = document.querySelectorAll("section");
// console.log(sections)
const bubble = document.querySelector(".bubble");
// console.log(bubble)
const gradients = [
  "linear-gradient(to right, #f12711, #f5af19)",
  "linear-gradient(to right, #7F00FF, #E100FF)",
  "linear-gradient(to right, #3494E6, #EC6EAD)",
];
// console.log(gradients)

let options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(callback, options);
// console.log(observer)

function callback(entries) {
  entries.forEach((element) => {
    // console.log(element)
    const className = element.target.className;
    // console.log(className)
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    console.log(activeAnchor)
    const getGradientIndex = element.target.getAttribute("data-index");
    console.log(getGradientIndex);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (element.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradients[getGradientIndex];
    }
    // console.log(directions)
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
