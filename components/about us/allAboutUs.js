import { firstContent } from "./AboutUs1.js";
import { secondContent } from "./AboutUs2.js";
import { thirdContent } from "./AboutUs3.js";
import { forthContent } from "./AboutUs4.js";
import { fifthContent } from "./AboutUs5.js";
import { sixthContent } from "./AboutUs6.js";
import { seventhContent } from "./AboutUs7.js";

const allAboutUs = document.getElementById("aboutUs");
allAboutUs.innerHTML = `<section class="aboutUs text-center py-5">
<div class="container">
<div class="mainTitle position-relative d-flex flex-column align-items-start mb-4">
<img class="rotatImg mb-4" src="../../img/title.webp" alt="" />
<div class="mainTitleDiv text-end rounded p-3">
  <h2>تعرف علينا</h2>
  <p class="text-muted fs-5">تسوق واختار العلامة التجارية المضلة لك وتعرف على أحدث المنتجات والعروض والخصومات</p>
</div>
</div>
  <div class="row pt-4 mt-3 justify-content-center">
  ${firstContent}
  ${secondContent}
  ${thirdContent}
  ${forthContent}
  ${fifthContent}
  ${sixthContent}
  ${seventhContent}
  </div>
  </div>
</section>`;