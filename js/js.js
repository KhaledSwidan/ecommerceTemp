let switchNum = ["one", "two", "three", "four", "five"];

for (let i = 0; i < switchNum.length; i++){
    let swichList = document.querySelectorAll(`.switch-${switchNum[i]} li`);
    let gallBoxs = document.querySelectorAll(`.gall-${switchNum[i]} .gallBoxy`);

    swichList.forEach((li) =>
    {
        li.addEventListener("click", function ()
        {
            swichList.forEach((li) =>
            {
                li.classList.remove("active");
                this.classList.add("active");
                if (this.classList.contains("active")) {
                    this.classList.add("bg-white");
                    li.classList.remove("bg-white");
                }
            });
        });
        li.addEventListener("click", function ()
        {
            gallBoxs.forEach((gallBox) => { gallBox.style.display = "none" });
            document.querySelectorAll(this.dataset.sel).forEach((e) => { e.style.display = "block" });
        });
    });
}

// select all bullets;
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
function scrollToSomeWhere(element)
{
    element.forEach((ele) =>
    {
        ele.addEventListener("click", (e) =>
        {
            document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' });
        })
    });
}
scrollToSomeWhere(allBullets);

// search bar animation;
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

// start header 
// <p class="txt-rotate d-none d-md-block" data-period="2000"
// data-rotate='["المكملات الغذائية", "منتجات العناية الشخصية"]'>
//     <br>
//     العروض والخصومات <i class="fa-solid fa-arrow-left"></i>
//     <a href="#" class="btn btn-primary d-none d-md-block m-3">اضغط هنا</a>
// </p>
let TxtRotate = function (el, toRotate, period)
{
    this.el = el;
    this.toRotate = toRotate;
    this.period = parseInt(period, 10) || 2000;
    this.loopNum = 0;
    this.txt = ``;
    this.isDeleting = false;
    this.tick()
};

TxtRotate.prototype.tick = function ()
{
let i = this.loopNum % this.toRotate.length;
let fullTxt = this.toRotate[i];
if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
};
this.el.innerHTML = `<span class="wrap"> ${this.txt} </span>`;

let that = this;
  let delta = 300 - Math.random() * 100;
if (this.isDeleting) { delta /= 2; }
if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
} else if (this.isDeleting && this.txt === ``) {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
}

setTimeout(function ()
{
    that.tick();
}, delta);
};

window.onload = function ()
{
let elements = document.getElementsByClassName(`txt-rotate`);
for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute(`data-rotate`);
    let period = elements[i].getAttribute(`data-period`);
    if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
}
  // INJECT CSS
let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
// end header typing