import { blog } from "../../data/blog.js";

const finalBlog3 = blog.map(e =>
{
  return (`<div class="col-md-6 col-lg-4 mt-3" key=${e.id}>
      <div class="card bg-white rounded">
        <img src=${e.imgSrc} class="card-img-top rounded-top" alt=${e.title} />
        <div class="card-body py-3 px-2">
          <h5 class="card-title">${e.title}</h5>
          <span class="text-black-50" style="font-size: .7rem">${e.date}</span>
          <p class="card-text text-muted">${e.content}</p>
          <a href="/" class="btn btn-primary">اعرف المزيد</a>
        </div>
      </div>
    </div>`)
});

export const blog3 = `<div class="mainTopics blog-three" id="thirdBlog">
<h2 class="py-4 px-3 my-2 d-flex align-items-center mx-4 rounded">الجلدية والتجميل</h2>
<div class="container">
  <div class="row py-4 justify-content-center mx-4">
    ${finalBlog3}
  </div>
</div>
</div>`;