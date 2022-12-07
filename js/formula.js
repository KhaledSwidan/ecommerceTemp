// brands JSON index.html;https://jsonplaceholder.typicode.com/posts
let mainOffcanvas_2 = new XMLHttpRequest();
let allFormulas = [];

mainOffcanvas_2.open("GET", " http://localhost:3000/formulas");
mainOffcanvas_2.send();

mainOffcanvas_2.addEventListener("readystatechange", () =>
{
  console.log(mainOffcanvas_2.readyState);
  if (mainOffcanvas_2.readyState == 4 && mainOffcanvas_2.status == 200) {
    allFormulas = JSON.parse(mainOffcanvas_2.response);
    addOffcanvasFormulas();
    console.log(allFormulas);
  }
}
);

function addOffcanvasFormulas()
{
  let cartona_2 = ``;

  for (let i = 0; i < allFormulas.length; i++) {
    cartona_2 += `
    <div class="prod product-${allFormulas[i].num} ms-3">
    <button type="button" class="btn btn-info mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal-1">
      ${allFormulas[i].formula_name}
    </button>
    <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel-1"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel-1">${allFormulas[i].formula_name}</h5>
          </div>
          <div class="modal-body">
          ${allFormulas[i].formula_details}
          </div>
          <div class="modal-footer flex-row-reverse justify-content-between">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">اغلاق</button>
            <button type="button" class="btn btn-primary">تحدث لصيدلي</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
  
  document.getElementById("all-products").innerHTML = cartona_2;
}
//===============================================================================================