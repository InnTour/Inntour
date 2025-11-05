/**
 * InnTour Modal System
 *
 * Gestisce l'apertura di link esterni (Treedis tours) in modal/popup 65% schermo
 * invece di aprirli in nuove schede, mantenendo l'utente sempre su inntour.it
 *
 * INSTALLAZIONE:
 * 1. WordPress → Plugin → Aggiungi nuovo → "Simple Custom CSS and JS"
 * 2. Installa e attiva
 * 3. Aspetto → Custom CSS & JS → Add Custom JS
 * 4. Copia tutto questo file
 * 5. Posizione: Footer
 * 6. Salva
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURAZIONE
    // ============================================

    const CONFIG = {
        // Selettori per link che devono aprirsi in modal
        externalLinkSelectors: [
            'a[href*="treedis.com"]',
            'a[href*="museoguardialombardi.it"]',
            'a[href*="virtualtour"]',
            'a[data-modal="true"]'
        ],

        // Dimensioni modal (personalizzabili)
        modalWidth: '65vw',
        modalHeight: '80vh',

        // Animazione
        animationDuration: 300,

        // Debug mode
        debug: false
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    function log(...args) {
        if (CONFIG.debug) {
            console.log('[InnTour Modal]', ...args);
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ============================================
    // MODAL HTML CREATION
    // ============================================

    function createModalHTML() {
        const modalHTML = `
            <div class="inntour-modal-overlay" id="inntourModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div class="inntour-modal">
                    <div class="inntour-modal-header">
                        <h2 class="inntour-modal-title" id="modalTitle">Tour Virtuale 360°</h2>
                        <button class="inntour-modal-close" aria-label="Chiudi finestra" id="modalClose">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div class="inntour-modal-body">
                        <div class="inntour-modal-loading">
                            <div class="inntour-modal-spinner"></div>
                            <p class="inntour-modal-loading-text">Caricamento tour virtuale...</p>
                        </div>
                        <iframe
                            class="inntour-modal-iframe"
                            id="modalIframe"
                            title="Tour Virtuale 360°"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            referrerpolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>
            </div>
        `;

        const div = document.createElement('div');
        div.innerHTML = modalHTML;
        document.body.appendChild(div.firstElementChild);
        log('Modal HTML created and inserted');
    }

    // ============================================
    // MODAL CONTROLLER
    // ============================================

    class InnTourModal {
        constructor() {
            this.overlay = null;
            this.modal = null;
            this.iframe = null;
            this.closeBtn = null;
            this.title = null;
            this.loading = null;
            this.isOpen = false;

            this.init();
        }

        init() {
            // Crea HTML modal se non esiste
            if (!document.getElementById('inntourModal')) {
                createModalHTML();
            }

            // Ottieni riferimenti elementi
            this.overlay = document.getElementById('inntourModal');
            this.modal = this.overlay.querySelector('.inntour-modal');
            this.iframe = document.getElementById('modalIframe');
            this.closeBtn = document.getElementById('modalClose');
            this.title = document.getElementById('modalTitle');
            this.loading = this.overlay.querySelector('.inntour-modal-loading');

            // Setup event listeners
            this.setupEventListeners();

            log('Modal initialized');
        }

        setupEventListeners() {
            // Click sul bottone chiudi
            this.closeBtn.addEventListener('click', () => this.close());

            // Click sull'overlay (fuori dal modal) per chiudere
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });

            // ESC key per chiudere
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });

            // Quando iframe finisce di caricare, nascondi loading
            this.iframe.addEventListener('load', () => {
                this.hideLoading();
            });

            log('Event listeners attached');
        }

        open(url, title = 'Tour Virtuale 360°') {
            log('Opening modal with URL:', url);

            // Imposta titolo
            this.title.textContent = title;

            // Mostra loading
            this.showLoading();

            // Imposta URL iframe
            this.iframe.src = url;

            // Mostra modal
            requestAnimationFrame(() => {
                this.overlay.classList.add('active');
                document.body.classList.add('inntour-modal-open');
                this.isOpen = true;

                // Focus sul bottone chiudi per accessibilità
                setTimeout(() => {
                    this.closeBtn.focus();
                }, CONFIG.animationDuration);
            });
        }

        close() {
            log('Closing modal');

            this.overlay.classList.remove('active');
            document.body.classList.remove('inntour-modal-open');
            this.isOpen = false;

            // Svuota iframe dopo animazione chiusura
            setTimeout(() => {
                this.iframe.src = '';
                this.showLoading(); // Reset per prossima apertura
            }, CONFIG.animationDuration);
        }

        showLoading() {
            this.loading.style.display = 'flex';
            this.iframe.style.opacity = '0';
        }

        hideLoading() {
            this.loading.style.display = 'none';
            this.iframe.style.opacity = '1';
            log('Content loaded');
        }
    }

    // ============================================
    // LINK INTERCEPTOR
    // ============================================

    function setupLinkInterceptor(modalInstance) {
        log('Setting up link interceptor');

        // Seleziona tutti i link esterni configurati
        const selector = CONFIG.externalLinkSelectors.join(', ');

        function attachToLinks() {
            const links = document.querySelectorAll(selector);

            links.forEach(link => {
                // Skip se già processato
                if (link.hasAttribute('data-modal-processed')) {
                    return;
                }

                // Marca come processato
                link.setAttribute('data-modal-processed', 'true');

                // Aggiungi attributo per CSS indicator
                link.setAttribute('data-modal-url', 'true');

                // Event listener
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    const url = this.href;
                    let title = 'Tour Virtuale 360°';

                    // Estrai titolo da data attribute o testo link
                    if (this.hasAttribute('data-modal-title')) {
                        title = this.getAttribute('data-modal-title');
                    } else if (this.textContent.trim()) {
                        title = this.textContent.trim();
                    }

                    // Determina titolo specifico in base all'URL
                    if (url.includes('lacedonia')) {
                        title = 'Lacedonia AR Hub - Tour Virtuale 360°';
                    } else if (url.includes('mavi') || url.includes('museomavi')) {
                        title = 'MAVI Museo Virtuale - Tour 360°';
                    } else if (url.includes('guardia') || url.includes('guardialombardi')) {
                        title = 'Museo Guardia Lombardi - Tour 360°';
                    }

                    log('Link clicked:', url, 'Title:', title);
                    modalInstance.open(url, title);
                });

                log('Link attached:', link.href);
            });

            log(`Processed ${links.length} links`);
        }

        // Attach iniziale
        attachToLinks();

        // Re-attach quando nuovo contenuto viene caricato (Elementor, AJAX, etc.)
        // MutationObserver per Elementor e contenuti dinamici
        const observer = new MutationObserver(function(mutations) {
            let shouldReattach = false;

            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    shouldReattach = true;
                }
            });

            if (shouldReattach) {
                log('New content detected, reattaching links');
                attachToLinks();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        log('MutationObserver active for dynamic content');
    }

    // ============================================
    // HELPER: Aggiungi attributi modal ai link
    // ============================================

    /**
     * Helper function per aggiungere manualmente link che devono aprirsi in modal
     * Può essere chiamata da console o da altri script:
     *
     * InnTour.addModalLink('https://tour.example.com', 'Titolo Custom');
     */
    window.InnTour = window.InnTour || {};
    window.InnTour.addModalLink = function(selector, title) {
        const links = document.querySelectorAll(selector);
        links.forEach(link => {
            link.setAttribute('data-modal', 'true');
            if (title) {
                link.setAttribute('data-modal-title', title);
            }
        });
        log(`Added modal attribute to ${links.length} links`);
    };

    // ============================================
    // INIT ON DOM READY
    // ============================================

    function init() {
        log('Initializing InnTour Modal System');

        // Crea istanza modal
        const modalInstance = new InnTourModal();

        // Setup link interceptor
        setupLinkInterceptor(modalInstance);

        // Esponi istanza globalmente per debug/custom usage
        window.InnTour = window.InnTour || {};
        window.InnTour.modal = modalInstance;

        log('InnTour Modal System ready');

        // Notifica console
        console.log('%c✓ InnTour Modal System attivo', 'color: #F7A93D; font-weight: bold; font-size: 14px;');
        console.log('%cLink esterni (Treedis) si apriranno in popup 65% schermo', 'color: #64748b;');
    }

    // Avvia quando DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Avvia anche su window.load per sicurezza (Elementor a volte carica dopo)
    window.addEventListener('load', function() {
        // Re-setup dopo 1 secondo (per Elementor)
        setTimeout(() => {
            if (window.InnTour && window.InnTour.modal) {
                setupLinkInterceptor(window.InnTour.modal);
            }
        }, 1000);
    });

})();

/**
 * ============================================
 * ISTRUZIONI USO AVANZATO
 * ============================================
 *
 * 1. APRIRE LINK SPECIFICO IN MODAL DA CODICE:
 *
 *    window.InnTour.modal.open('https://my.treedis.com/tour/...', 'Titolo');
 *
 * 2. AGGIUNGERE ATTRIBUTO MODAL A LINK ESISTENTE:
 *
 *    InnTour.addModalLink('a[href*="miosito.com"]', 'Titolo Custom');
 *
 * 3. APRIRE MODAL DA BUTTON CUSTOM:
 *
 *    <button onclick="InnTour.modal.open('URL', 'Titolo')">Apri Tour</button>
 *
 * 4. CHIUDERE MODAL PROGRAMMATICAMENTE:
 *
 *    window.InnTour.modal.close();
 *
 * 5. VERIFICARE SE MODAL È APERTO:
 *
 *    window.InnTour.modal.isOpen // true/false
 *
 * 6. DEBUG MODE (mostra log console):
 *
 *    Cambia CONFIG.debug = true all'inizio del file
 *
 * ============================================
 */
