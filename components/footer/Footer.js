import { contentFooter } from "./ContentFooter.js";
import { importantLinksFooter } from "./ImportantLinksFooter.js";
import { onlinePhFooter } from "./OnlinePhFooter.js";
import { paymentMethods } from "./PaymentMethods.js";
import { socialLinksFooter } from "./SocialLinksFooter.js";

const footer = document.getElementById("footer");
footer.innerHTML = `<section class="footer py-5 text-white-50">
<div class="container">
  <div class="row justify-content-center">
    ${contentFooter}
    ${importantLinksFooter}
    ${onlinePhFooter}
    ${socialLinksFooter}
    <div class="container">
      <div class="row justify-content-center mt-3">
        ${paymentMethods}
      </div>
    </div>
  </div>
</div>
</section>`;