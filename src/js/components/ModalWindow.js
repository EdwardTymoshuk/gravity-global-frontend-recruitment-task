class ModalWindow extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="modal-container" id="article-modal" tabindex="-1" role="dialog" aria-labelledby="feedback-btn" aria-hidden="true">
            <div class="modal-container_content">
                <span class="close-button" aria-hidden="true">&times;</span>
                <h1>Alert!</h1>
                <p>You have clicked 0 times to related button.</p>
    </div>
</div>
      `
    }
}

customElements.define('reusable-modal', ModalWindow);