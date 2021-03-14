const main = document.querySelector(".main");
const indicator = document.querySelector(".indicator");
const last = document.querySelector(".last");

const mainFromTop = main.offsetTop;
const mainHeight = main.offsetHeight;
const lastHeight = last.offsetHeight;

function updateIndicator() {
    const scrolledAmountInMain = window.scrollY - mainFromTop;
    const scaler = scrolledAmountInMain / (mainHeight - window.innerHeight);

    if (
        (scrolledAmountInMain / (mainHeight - window.innerHeight)) * 100 >=
        100
    ) {
        indicator.style.width = "100%";
        indicator.style.backgroundColor = `rgb(65, 105, 225)`;
        return;
    } else {
        indicator.style.width = `${Math.floor(scaler * 100)}%`;
        indicator.style.backgroundColor = `rgb(${scaler * 65}, ${
            scaler * 105
        }, ${scaler * 225})`;
    }

    if (scrolledAmountInMain < 0) {
        indicator.style.width = "0%";
    }
}

let scrolling = false;

window.addEventListener("scroll", () => {
    scrolling = true;
});

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        updateIndicator();
    }
}, 100);
