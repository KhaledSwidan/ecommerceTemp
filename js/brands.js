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