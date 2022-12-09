import { carouselHome } from "./CarouselHome.js";
import { adHome } from "./AdHome.js";

const mainHome = document.getElementById("mainHome");
mainHome.innerHTML = `<header class="headCar position-relative d-flex flex-column">
${carouselHome}
<div class="container">
${adHome}
</div>
</header>`;