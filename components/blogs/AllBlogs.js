import { blog0 } from "./Blog0.js";
import { blog1 } from "./Blog1.js";
import { blog2 } from "./Blog2.js";
import { blog3 } from "./Blog3.js";
import { blog4 } from "./Blog4.js";
import { blogNav } from "./BlogNav.js";

const allBlogs = document.getElementById("blogs");
allBlogs.innerHTML = `<section class="blog py-5" id="blog">
<div class="container py-4">
<div class="mainTitle position-relative d-flex flex-column align-items-start mb-4">
<img class="rotatImg mb-4" src="../../img/title.webp" alt="" />
<div class="mainTitleDiv text-end rounded p-3">
  <h2>المقالات الطبية</h2>
  <p class="text-muted fs-5">تعرف على اخر المقالات الطبية والمواضيع المتعلقة بالصحة والأدوية
  ومستحضرات التجميل</p>
</div>
</div>
  ${blogNav}
  ${blog0}
  ${blog1}
  ${blog2}
  ${blog3}
  ${blog4}
</div>
</section>`;