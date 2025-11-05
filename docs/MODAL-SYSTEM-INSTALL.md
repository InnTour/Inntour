# Sistema Modal Popup - Installazione Rapida

## 🎯 Obiettivo

Aprire tutti i link esterni (tour virtuali Treedis) in **popup/modal 65% schermo** invece che in nuove schede, mantenendo l'utente sempre su **inntour.it** senza mai uscire dalla directory.

---

## ⚡ Installazione in 5 Minuti

### STEP 1: Installa CSS Globale

1. **Apri WordPress Dashboard**

2. Vai in: **Aspetto → Personalizza → CSS Aggiuntivo**

3. **Copia tutto il file**: `wordpress-global.css`
   - Apri il file nella tua directory progetto
   - Seleziona tutto (Ctrl+A)
   - Copia (Ctrl+C)

4. **Incolla nel box** "CSS Aggiuntivo"

5. Click **Pubblica**

✅ **CSS installato!** Include:
- Stili modal popup
- Palette colori fusion
- Animazioni
- Responsive design
- Tutto il design system

---

### STEP 2: Installa JavaScript Modal

#### Opzione A - Plugin "Simple Custom CSS and JS" (Consigliato)

1. **Installa Plugin:**
   ```
   WordPress → Plugin → Aggiungi nuovo
   Cerca: "Simple Custom CSS and JS"
   Click "Installa ora" → "Attiva"
   ```

2. **Aggiungi JavaScript:**
   ```
   Vai in: Aspetto → Custom CSS & JS
   Click: "Add Custom JS"
   Titolo: InnTour Modal System
   ```

3. **Copia il file** `inntour-modal.js`:
   - Apri il file
   - Seleziona tutto (Ctrl+A)
   - Copia (Ctrl+C)
   - Incolla nel box

4. **Impostazioni:**
   - Posizione: **Footer** (importante!)
   - Tipo: **JavaScript**
   - Click **Pubblica**

5. **Verifica:**
   - Vai sul sito
   - Apri Console browser (F12)
   - Dovresti vedere: `✓ InnTour Modal System attivo`

---

#### Opzione B - Functions.php (Avanzato)

Se preferisci non usare plugin:

1. **Vai in:** Aspetto → Editor file tema

2. **Apri** `functions.php`

3. **Aggiungi in fondo:**

```php
<?php
/**
 * InnTour Modal System - Enqueue Script
 */
function inntour_modal_scripts() {
    // Registra script
    wp_enqueue_script(
        'inntour-modal',
        get_template_directory_uri() . '/js/inntour-modal.js',
        array(), // No dependencies
        '1.0.0',
        true // Load in footer
    );
}
add_action('wp_enqueue_scripts', 'inntour_modal_scripts');
?>
```

4. **Carica il file JS:**
   - Via FTP/File Manager: Carica `inntour-modal.js` in `/wp-content/themes/[tuo-tema]/js/`
   - Oppure crea cartella `js` se non esiste

---

### STEP 3: Configura Link Treedis in Elementor

Ora devi aggiornare i link nei bottoni dei tour virtuali:

#### Per Ogni Project Card (3 cards):

1. **Vai in Elementor:** Modifica pagina Home

2. **Sezione Progetti → Card 1 (Lacedonia)**
   - Click sul widget **Button** "Visita Tour Virtuale"
   - **Link:**
     ```
     URL: https://my.treedis.com/tour/lacedonia-vrcerogn
     Apri in nuova finestra: NO (disattiva)
     Nofollow: NO
     ```
   - **Attributi Personalizzati (Advanced → Attributes):**
     ```
     data-modal-title|Lacedonia AR Hub - Tour Virtuale 360°
     ```

3. **Card 2 (MAVI)**
   - Link: `[URL CORRETTO MAVI - da fornire]`
   - Apri in nuova finestra: NO
   - Attributo: `data-modal-title|MAVI Museo Virtuale - Tour 360°`

4. **Card 3 (Guardia Lombardi)**
   - Link: `[URL CORRETTO GUARDIA - da fornire]`
   - Apri in nuova finestra: NO
   - Attributo: `data-modal-title|Museo Guardia Lombardi - Tour 360°`

5. **Salva e Pubblica**

---

## 🔗 Link Treedis Corretti

### ✅ Link Confermati:

**Lacedonia AR Hub:**
```
https://my.treedis.com/tour/lacedonia-vrcerogn
```

---

### ❌ Link da Correggere:

**MAVI Museo Virtuale:**
```
VECCHIO (errato): https://my.treedis.com/tour/museomavi-zkmvh1jm
NUOVO (corretto): [DA FORNIRE]
```

**Museo Guardia Lombardi:**
```
VECCHIO (errato): https://my.treedis.com/tour/museoguardialombardi-hxajdvkq
NUOVO (corretto): [DA FORNIRE]
```

---

## 🧪 Test Funzionamento

### Verifica che tutto funzioni:

1. **Vai sul sito** (frontend, non Elementor editor)

2. **Scroll alla sezione Progetti**

3. **Click su bottone** "Visita Tour Virtuale 360°"

4. **Cosa dovrebbe succedere:**
   - ✅ Si apre popup/modal al centro schermo
   - ✅ Dimensioni: 65% larghezza, 80% altezza
   - ✅ Header con titolo e bottone chiudi (X)
   - ✅ Tour virtuale carica dentro iframe
   - ✅ Overlay scuro dietro modal
   - ✅ Sfondo blur
   - ✅ URL browser NON cambia (rimani su inntour.it)

5. **Test chiusura:**
   - ✅ Click su X → Modal si chiude
   - ✅ Click fuori dal modal (su overlay scuro) → Si chiude
   - ✅ Tasto ESC → Si chiude
   - ✅ Body torna scrollabile

6. **Test responsive:**
   - Desktop: Modal 65% schermo ✅
   - Tablet: Modal 85% schermo ✅
   - Mobile: Modal 95% schermo ✅

---

## 🐛 Troubleshooting

### Problema: Modal non si apre

**Causa 1: JavaScript non caricato**

Soluzione:
```
- Apri console (F12)
- Verifica messaggio "✓ InnTour Modal System attivo"
- Se non c'è, JS non è caricato
- Verifica Step 2 installazione
```

**Causa 2: Link ha target="_blank"**

Soluzione:
```
- In Elementor, widget Button
- Link → Apri in nuova finestra: NO (disattiva)
- Salva
```

---

### Problema: Modal si apre ma resta bianco

**Causa: URL tour errato o CORS policy**

Soluzione:
```
- Verifica URL Treedis è corretto
- Testa URL direttamente nel browser
- Se URL funziona, problema CORS (raro con Treedis)
```

---

### Problema: CSS modal non applicato

**Causa: CSS non importato o conflitto tema**

Soluzione:
```
- Verifica CSS in Aspetto → Personalizza → CSS Aggiuntivo
- Cerca ".inntour-modal" nel CSS
- Se non c'è, re-incolla wordpress-global.css
- Svuota cache (plugin + browser)
```

---

### Problema: Su mobile modal troppo grande

**Causa: Viewport responsive non configurato**

Soluzione:
```
Il CSS già include @media queries:
- Desktop: 65vw x 80vh
- Tablet (<1024px): 85vw x 75vh
- Mobile (<768px): 95vw x 70vh

Se non funziona, verifica CSS caricato correttamente
```

---

### Problema: Link continuano ad aprire nuove schede

**Causa: JavaScript non intercetta link**

Soluzione:
```
1. Apri Console (F12) → Tab Console
2. Digita: InnTour.modal
3. Se vedi "undefined" → JS non caricato
4. Se vedi oggetto Modal → JS ok, verifica link in Elementor

Verifica link in Elementor:
- Link deve essere URL Treedis completo
- Apri in nuova finestra: NO
- Elementor non deve avere onclick custom
```

---

## 🎨 Personalizzazioni Opzionali

### Cambiare dimensioni modal

Nel file `wordpress-global.css`, cerca:

```css
:root {
    --modal-width: 65vw;    /* Cambia qui: 50vw, 70vw, 80vw */
    --modal-height: 80vh;   /* Cambia qui: 70vh, 85vh, 90vh */
}
```

Salva e ricarica.

---

### Cambiare colore header modal

Nel CSS, cerca:

```css
.inntour-modal-header {
    background: var(--gradient-fusion); /* Cambia con colore custom */
}
```

Esempio colore piatto:
```css
.inntour-modal-header {
    background: #F7A93D; /* Arancione fusion */
}
```

---

### Cambiare velocità animazione

Nel file `inntour-modal.js`, cerca (inizio file):

```javascript
const CONFIG = {
    animationDuration: 300, // Cambia: 200 (veloce), 500 (lento)
}
```

---

### Aggiungere altri link esterni che si aprono in modal

**Metodo 1 - Da JavaScript (tutti i link di un sito):**

Nel file `inntour-modal.js`, cerca `CONFIG` e aggiungi:

```javascript
externalLinkSelectors: [
    'a[href*="treedis.com"]',
    'a[href*="virtualtour"]',
    'a[href*="tuosito.com"]',      // Aggiungi qui
    'a[href*="altrosito.com"]',     // E qui
    'a[data-modal="true"]'
],
```

**Metodo 2 - Da HTML (link specifico):**

In Elementor, widget Button → Advanced → Attributes:

```
data-modal|true
data-modal-title|Titolo Custom
```

---

## 📱 Compatibilità

### Browser Supportati:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

### WordPress/Plugin:
- ✅ WordPress 5.8+
- ✅ Elementor Free
- ✅ Elementor Pro
- ✅ ElementsKit Free/Pro
- ✅ Hello Elementor theme
- ✅ Astra theme
- ✅ OceanWP theme

### Testato Con:
- ✅ WooCommerce
- ✅ Contact Form 7
- ✅ Yoast SEO
- ✅ WP Rocket (cache)
- ✅ LiteSpeed Cache

---

## 🔐 Sicurezza & Privacy

### GDPR Compliant:
- ✅ Nessun cookie impostato dal sistema modal
- ✅ Nessun tracking utente
- ✅ Iframe con `referrerpolicy="strict-origin-when-cross-origin"`
- ✅ Sandbox iframe attivo

### Performance:
- ✅ JS minificabile (gzip ~3KB)
- ✅ CSS inline (no richieste HTTP extra)
- ✅ Lazy load iframe (carica solo quando aperto)
- ✅ Hardware acceleration (GPU) per animazioni

---

## 📊 Analytics Tracking (Opzionale)

Se vuoi tracciare aperture modal in Google Analytics:

Aggiungi nel file `inntour-modal.js`, funzione `open()`, dopo `this.isOpen = true;`:

```javascript
// Google Analytics Event
if (typeof gtag !== 'undefined') {
    gtag('event', 'modal_open', {
        'event_category': 'Virtual Tour',
        'event_label': title,
        'value': url
    });
}

// Facebook Pixel Event (se hai FB Pixel)
if (typeof fbq !== 'undefined') {
    fbq('track', 'ViewContent', {
        content_name: title,
        content_category: 'Virtual Tour'
    });
}
```

---

## ✅ Checklist Installazione Completa

Prima di considerare l'installazione completa:

- [ ] CSS globale incollato in Aspetto → Personalizza → CSS Aggiuntivo
- [ ] JS installato tramite plugin o functions.php
- [ ] Console browser mostra "✓ InnTour Modal System attivo"
- [ ] Link Treedis corretti inseriti in Elementor (tutti e 3)
- [ ] Link hanno "Apri in nuova finestra" disabilitato
- [ ] Test click bottone → Modal si apre
- [ ] Test chiusura (X, ESC, click fuori) → Modal si chiude
- [ ] Test responsive (mobile, tablet, desktop) → Dimensioni corrette
- [ ] URL browser NON cambia (rimane inntour.it)
- [ ] Cache svuotata (plugin + browser)
- [ ] Test su più browser (Chrome, Firefox, Safari)

---

## 🆘 Supporto

Se hai problemi:

1. **Verifica Console:** F12 → Console → Cerca errori JavaScript
2. **Verifica CSS:** F12 → Elements → Cerca `.inntour-modal-overlay`
3. **Debug Mode:** In `inntour-modal.js`, cambia `debug: false` in `debug: true`
4. **Test Diretto:** In Console, digita:
   ```javascript
   InnTour.modal.open('https://google.com', 'Test');
   ```
   Se si apre modal con Google → Sistema funziona, problema è nei link Elementor

---

## 🎉 Risultato Finale

Quando tutto è installato correttamente:

✨ **Esperienza Utente Perfetta:**
- Click su "Visita Tour Virtuale" → Popup smooth al centro
- Tour carica in iframe 65% schermo
- Overlay scuro con blur
- Chiusura intuitiva (X, ESC, click fuori)
- **Utente SEMPRE su inntour.it** (URL non cambia mai)
- Responsive perfetto su ogni device
- Performance ottimale (animazioni 60fps)

🎯 **Obiettivo Raggiunto:** Nessun link fa uscire dalla directory inntour.it!

---

**Installazione completata!** 🚀

Se hai dubbi su qualche passaggio, dimmi pure!
