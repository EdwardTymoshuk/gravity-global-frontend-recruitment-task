class Article extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const url = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_'
        this.innerHTML = `
      <div class="main-container_image">
        <img
            srcset="${url}480.jpg 480w,
                     ${url}784.jpg 784w,
                     ${url}1002.jpg 1002w,
                     ${url}1400.jpg 1400w"
            sizes="(max-width: 480px) 480px,
            (max-width: 768px) 784px,
            (max-width: 1440px) 1400px"
            src="${url}1400.jpg"
            alt="Main image with sunrise">
      </div>
      <section class="main-container_aside">
          <header class="main-container_aside_title">Lorem Ipsum</header>
          <p class="main-container_aside_content">Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy
              infrastructures and SaaS platforms, managed via a single app with no hardware required.</p>
          <button class="main-container_aside_button">Button</button>
      </section>
      `
    }
}

customElements.define('reusable-article', Article);