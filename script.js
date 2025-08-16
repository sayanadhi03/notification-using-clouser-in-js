function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white font-bold"
        : "bg-gray-100 text-black font-bold"
    }  px-6 py-3 rounded shadow-lg pointer-events-none ${config.duration}`;

    document.querySelector(".parent").appendChild(div);

    if (config.positionX !== "left" || config.positionY !== "top") {
      document.querySelector(
        ".parent"
      ).className += ` ${
        config.positionX === "right" ? "right-5" : "left-5"
      } ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
    }
    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "light",
  duration: "3",
});

toaster("Download Complete!");
setTimeout(() => {
  toaster("Sayan accepted your request");
}, 2000);
