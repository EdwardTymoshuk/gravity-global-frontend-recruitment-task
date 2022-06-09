class Article extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
      <article class="container">
      <section class="container_image">
          <img src="./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg"
              width="505px" height="330px" alt="Main image represents a sea">
      </section>
      <section class="container_aside">
          <header class="container_aside_title">Lorem Ipsum</header>
          <p class="container_aside_content">Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy
              infrastructures and SaaS platforms, managed via a single app with no hardware required.</p>
          <button>Button</button>
      </section>
      </article>
      `
    }
}

customElements.define('reusable-article', Article);