class ModalWindow extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="modal-container" id="article-modal" tabindex="-1" role="dialog" aria-labelledby="feedback-btn" aria-hidden="true">
            <div class="modal-content">
                <span class="modal-content_close-button" aria-hidden="true">&times;</span>
                <h1>Alert!</h1>
                <p>You have clicked 0 times to related button.</p>
                <button class="modal-content_open-table-button">Open table</button>
    </div>
</div>
      `
    }
}

customElements.define('reusable-modal', ModalWindow);