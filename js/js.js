
// brands JSON index.html;https://jsonplaceholder.typicode.com/posts
let mainOffcanvas = new XMLHttpRequest();
let allBrands = [];

mainOffcanvas.open("GET", "http://localhost:3000/brands");
mainOffcanvas.send();

mainOffcanvas.addEventListener("readystatechange", () =>
{
  console.log(mainOffcanvas.readyState);
  if (mainOffcanvas.readyState == 4 && mainOffcanvas.status == 200) {
    allBrands = JSON.parse(mainOffcanvas.response);
    addOffcanvasBrands();
    console.log(allBrands);
  }
}
);



function addOffcanvasBrands()
{
  let cartona = ``;

  for (let i = 0; i < allBrands.length; i++) {
    cartona += `
    <div class="${allBrands[i].char} box boxBrand col-sm-6 col-md-4 col-lg-2 my-3 mx-2" data-work="${allBrands[i].brandName}">

      <button class="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom${allBrands[i].num}" aria-controls="offcanvasBottom${allBrands[i].num}">
      <img class="img-fluid rounded" src="img/${allBrands[i].imgPath}" alt="${allBrands[i].brandName}" style="${allBrands[i].style}">
      </button>

      <div class="offcanvas offcanvas-bottom h-75" data-bs-scroll="true" tabindex="-1" id="offcanvasBottom${allBrands[i].num}"
      aria-labelledby="offcanvasBottom${allBrands[i].num}Label">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel${allBrands[i].num}">منتجات ${allBrands[i].brandName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body small">
        <div class="container">
          <div class="row justify-content-center">
            <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
              </div>
              <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
              </div>
              <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
              </div>
              <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
              </div>
              <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <span class="position-relative new-product"></span>
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
              </div>
              <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <span class="position-relative limited-amount"></span>
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
              </div>
              <div class="con col-sm-6 col-md-3 my-2">
              <div class="card">
                <span class="position-relative sale-price"></span>
                <img src="img/${allBrands[i].imgPath}" class="card-img-top mx-auto img-fluid" alt="${allBrands[i].brandName}">
                <div class="card-body">
                  <h5 class="card-title">${allBrands[i].brandName}</h5>
                  <p class="card-text">${allBrands[i].brandDetails}</p>
                  <p class="card-text"><small class=" ">أخر تحديث ${allBrands[i].updateTime}</small></p>
                  <div class="card-body-options">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                      <p class="fw-bold fs-5">50 EGP</p>
                    </div>
                    <button type="button" class="btn btn-primary rounded-pill">اضافه الى السلة</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      `
  }
  
  document.getElementById("boxBrand").innerHTML = cartona;
  
  // switch index.html;
  let switchLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (let i = 0; i < switchLetter.length; i++){
    let swichBrands = document.querySelectorAll(`.switch-brands li`);
    let gallBoxsBrands = document.querySelectorAll(`.${switchLetter[i]}.box`);
    
    swichBrands.forEach((li) =>
    {
      li.addEventListener("click", function ()
      {
        swichBrands.forEach((li) =>
        {
          li.classList.remove("active");
          this.classList.add("active");
          if (this.classList.contains("active")) {
            this.classList.add("bg-white");
            li.classList.remove("bg-white");
          };
        });
      });
      
      li.addEventListener("click", function ()
      {
        gallBoxsBrands.forEach((gallBoxsBrand) => { gallBoxsBrand.style.display = "none" });
        document.querySelectorAll(this.dataset.sel).forEach((e) => { e.style.display = "block" });
      });
    });
  }
}
//===============================================================================================

// switch MainSection.html;
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
//===============================================================================================

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
//===============================================================================================

// search bar animation navBar;
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};
searchBtn.addEventListener("click", expand);
//===============================================================================================

// start header
// <p class="txt-rotate d-none d-md-block" data-period="2000"
// data-rotate='["المكملات الغذائية", "منتجات العناية الشخصية"]'>
//     <br>
//     العروض والخصومات <i class="fa-solid fa-arrow-left"></i>
//     <a href="#" class="btn btn-primary d-none d-md-block m-3">اضغط هنا</a>
// </p>

class TxtRotate
{
    constructor(el, toRotate, period)
    {
        this.el = el;
        this.toRotate = toRotate;
        this.period = parseInt(period, 10) || 2000;
        this.loopNum = 0;
        this.txt = ``;
        this.isDeleting = false;
        this.tick();
    }
    tick()
    {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        };
        this.el.innerHTML = `<span class="wrap"><i class="fa-solid fa-arrow-down mt-2 pt-1"></i> ${this.txt} </span>`;

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
    }
}
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
// let css = document.createElement("style");
//     css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//     document.body.appendChild(css);
};
// end header typing

// const mainOffcanvas = document.querySelectorAll(`.boxBrand`);

// fetch(`http://localhost:3000/brands`)
//   .then(res => res.json())
//   .then(json => json.map(
//     data =>
//     {
//       console.log(data);
//       mainOffcanvas.forEach(e => e.append(addOffcanvasBrands(data)));
//     }
//   ));