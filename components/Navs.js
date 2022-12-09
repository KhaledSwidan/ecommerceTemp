import { sideNavbar } from "./SideNavbar.js";

const nav = document.getElementById("main-nav");
nav.innerHTML = `
<nav class="navbar topnav pt-0">
  <div class="container d-flex justify-content-center w-100 py-2 px-5 position-relative border-bottom">
  <a class="navbar-brand d-flex flex-row-reverse justify-content-center align-items-center" href="/">
    <img src="../img/site-logo.webp" class="w-25 ps-1" alt="" />
    أسم الصيدلية|
  </a>
  <div class="contSetting d-flex">
    <div class="contact d-flex align-items-center">
      <address class="mb-0 text-center">عنوان الادارة / الاسكندرية - مصر</address>
      <a href="tel:123456789" class='text-white pe-1'>03/578499111</a>
    </div>
  </div>
</div>
<div class="container">
${sideNavbar}
</div>
</nav>`