const articleButton=document.querySelector(".container_aside_button"),modal=document.querySelector(".modal-window"),closeButton=document.querySelector(".close-button"),modalContentP=document.querySelector(".modal-container p"),resetButtonEl=document.querySelector(".reset-button");let clicksCount=localStorage.getItem("clicksCount")?localStorage.getItem("clicksCount"):0;const setClicksCount=()=>{clicksCount++,localStorage.setItem("clicksCount",clicksCount)},getClicksCount=()=>{return localStorage.getItem("clicksCount")},resetClicksCount=()=>{localStorage.removeItem("clicksCount"),window.location.reload()},displayClicksCount=()=>{modalContentP.innerHTML=`You have clicked ${getClicksCount()} times to related button.`},toggleModal=()=>{modal.classList.toggle("show-modal")},windowOnClick=e=>{e.target===modal&&toggleModal()},modalContent=(articleButton.addEventListener("click",()=>{setClicksCount(),displayClicksCount(),toggleModal(),5<getClicksCount()?resetButton&&resetButton.classList.add("visible"):resetButton&&resetButton.classList.remove("visible")}),closeButton.addEventListener("click",toggleModal),window.addEventListener("click",windowOnClick),document.querySelector(".modal-container_content")),resetButton=document.createElement("button");resetButton.classList.add("reset-button"),resetButton.innerHTML="Reset",resetButton.addEventListener("click",()=>resetClicksCount()),modalContent.appendChild(resetButton);class Article extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
      <article>
      <div class="container_image">
          <img src="./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg"
              width="505px" height="330px" alt="Main image represents a sea">
      </div>
      <section class="container_aside">
          <header class="container_aside_title">Lorem Ipsum</header>
          <p class="container_aside_content">Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy
              infrastructures and SaaS platforms, managed via a single app with no hardware required.</p>
          <button class="container_aside_button">Button</button>
      </section>
      </article>
      `}}customElements.define("reusable-article",Article);class ModalWindow extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
        <div class="modal-container" id="article-modal" tabindex="-1" role="dialog" aria-labelledby="feedback-btn" aria-hidden="true">
            <div class="modal-container_content">
                <span class="close-button" aria-hidden="true">&times;</span>
                <h1>Alert!</h1>
                <p>You have clicked 0 times to related button.</p>
    </div>
</div>
      `}}customElements.define("reusable-modal",ModalWindow);