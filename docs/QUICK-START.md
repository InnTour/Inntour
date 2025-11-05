# 🚀 InnTour Website - Quick Start Guide

Guida rapida per avviare il sito InnTour in 5 minuti.

## ⚡ Start in 3 Passi

### 1. Download & Apri

```bash
# Se hai il repository
git clone https://github.com/yourusername/inntour-website.git
cd inntour-website

# Apri index.html nel browser
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### 2. Personalizza Dati Essenziali

Apri `index.html` e cerca/sostituisci:

| Trova | Sostituisci Con |
|-------|-----------------|
| `info@inntour.it` | La tua email |
| `+39 XXX XXX XXXX` | Il tuo telefono |
| `Aree Interne - Italia` | Il tuo indirizzo |

### 3. Test Locale

```bash
# Con Python (già installato su Mac/Linux)
python -m http.server 8000

# Con Node.js
npx http-server -p 8000

# Poi visita: http://localhost:8000
```

✅ **Fatto!** Il sito è funzionante localmente.

---

## 🎯 Prossimi Passi

### A. Aggiungi Immagini (5 min)

1. Salva immagini progetti in `assets/images/`
2. Comprimi immagini su https://tinypng.com
3. Aggiorna riferimenti in `index.html`:

```html
<!-- Esempio -->
<div class="project-image">
    <img src="assets/images/lacedonia-project.jpg" alt="Progetto Lacedonia">
</div>
```

### B. Configura Form Email (10 min)

#### Opzione Facile: Formspree

1. Vai su https://formspree.io
2. Registrati (gratuito)
3. Crea nuovo form
4. Copia Form ID
5. Aggiorna in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- resto del form -->
</form>
```

#### Opzione Avanzata: EmailJS

Vedi [`CONTENT-UPDATE-GUIDE.md`](CONTENT-UPDATE-GUIDE.md) per setup completo.

### C. Deploy Online (20 min)

#### Deploy Facile: Netlify Drop

1. Vai su https://app.netlify.com/drop
2. Trascina cartella progetto
3. Ottieni URL live in 30 secondi!

#### Deploy Professionale: VPS

Segui [`DEPLOYMENT-GUIDE.md`](DEPLOYMENT-GUIDE.md) per setup completo.

---

## 📂 Struttura Files Chiave

```
inntour-website/
├── index.html          ← Contenuti e struttura
├── assets/
│   ├── css/
│   │   └── style.css   ← Design e colori
│   ├── js/
│   │   └── script.js   ← Funzionalità interattive
│   └── images/         ← Le tue immagini
└── docs/               ← Guide e documentazione
```

### Cosa Modificare Dove

| Cosa Vuoi Cambiare | File | Cerca |
|--------------------|------|-------|
| Testo sezioni | `index.html` | Nome sezione |
| Colori | `assets/css/style.css` | `:root { --primary-...` |
| Email/Telefono | `index.html` | `info@inntour.it` |
| Logo | `assets/logo/` | Sostituisci file |
| Comportamenti | `assets/js/script.js` | Funzione specifica |

---

## ✅ Checklist Personalizzazione Minima

Prima del lancio, assicurati di aver fatto:

- [ ] ✏️ Email aggiornata
- [ ] ☎️ Telefono aggiornato
- [ ] 📍 Indirizzo aggiornato
- [ ] 🔗 Link social media footer
- [ ] 📧 Form email configurato
- [ ] 🖼️ Almeno 1 immagine progetto
- [ ] 🧪 Test su mobile (apri da smartphone)
- [ ] 🌐 Test invio form

---

## 🎨 Personalizzazioni Comuni

### Cambiare Colori Principali

Apri `assets/css/style.css`, trova:

```css
:root {
    --primary-orange: #F59E0B;  ← Arancione
    --primary-green: #10B981;   ← Verde
    --primary-blue: #3B82F6;    ← Blu
    --primary-yellow: #EAB308;  ← Giallo
}
```

Sostituisci con i tuoi colori hex.

### Cambiare Font

Sostituisci link Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">
```

Aggiorna variabili in `style.css`:

```css
:root {
    --font-display: 'TuoFontDisplay', serif;
    --font-body: 'TuoFontBody', sans-serif;
}
```

### Nascondere/Mostrare Sezioni

Commenta in `index.html`:

```html
<!-- Nascondi sezione MetaBorghi temporaneamente
<section id="metaborghi" class="section section-metaborghi">
    ...
</section>
-->
```

---

## 🐛 Troubleshooting Rapido

### Problema: CSS non applicato

**Soluzione**: Controlla percorso file in `index.html`:
```html
<link rel="stylesheet" href="assets/css/style.css">
```
Deve essere **relativo** alla posizione di `index.html`.

### Problema: Form non invia

**Soluzione**: Devi configurare backend. Usa Formspree (vedi sopra) per soluzione rapida.

### Problema: Sito lento

**Soluzione**: Comprimi immagini su https://tinypng.com
- Target: < 200KB per immagine
- Formato raccomandato: JPG o WebP

### Problema: Non si vede su mobile

**Soluzione**: Verifica meta viewport in `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 📚 Risorse Utili

### Tool Gratuiti

- **Comprimi Immagini**: https://tinypng.com
- **Test Performance**: https://pagespeed.web.dev
- **Test Mobile**: https://search.google.com/test/mobile-friendly
- **Colori Palette**: https://coolors.co
- **Form Backend**: https://formspree.io

### Guide Complete

- **Deployment**: [`DEPLOYMENT-GUIDE.md`](DEPLOYMENT-GUIDE.md)
- **Personalizzazione**: [`CONTENT-UPDATE-GUIDE.md`](CONTENT-UPDATE-GUIDE.md)
- **Documentazione**: [`../README.md`](../README.md)

---

## 🎯 Roadmap Suggerita

### Oggi (2 ore)

1. ✅ Personalizza email/telefono
2. ✅ Configura form Formspree
3. ✅ Deploy su Netlify (test gratuito)

### Questa Settimana

4. ✅ Aggiungi immagini progetti
5. ✅ Test su tutti i dispositivi
6. ✅ Setup Google Analytics

### Prossime 2 Settimane

7. ✅ Acquista dominio (inntour.it)
8. ✅ Deploy su VPS o hosting professionale
9. ✅ Configura email professionale
10. ✅ Submit a Google Search Console

---

## 💬 Hai Bisogno di Aiuto?

### FAQ Comuni

**Q: Posso usare su WordPress?**
A: Sì! Vedi [`DEPLOYMENT-GUIDE.md`](DEPLOYMENT-GUIDE.md) sezione WordPress.

**Q: Come aggiungo Google Analytics?**
A: Copia tracking code prima di `</head>` in `index.html`.

**Q: Quanto costa hostare il sito?**
A:
- Gratuito: Netlify/Vercel
- Base: €3-5/mese hosting condiviso
- Pro: €5-10/mese VPS

**Q: È SEO-friendly?**
A: Sì! Già ottimizzato con meta tags, semantic HTML, performance.

### Contatti

- **Email**: info@inntour.it
- **Documentazione**: Vedi cartella `docs/`

---

## ✨ Tips Bonus

### Performance

```bash
# Test velocità sito
https://pagespeed.web.dev

# Target: > 90 desktop, > 85 mobile
```

### SEO

```html
<!-- Aggiungi in index.html <head> -->
<meta name="description" content="InnTour - Digitalizzazione Aree Interne">
<meta name="keywords" content="aree interne, borghi, turismo, digitalizzazione">
```

### Sicurezza

- ✅ Sempre usa HTTPS (SSL certificate)
- ✅ Aggiorna email form validation
- ✅ Non committare password in Git

---

**Pronto a Lanciare! 🚀**

Segui questi passi e sarai online in meno di 2 ore.

Per domande: info@inntour.it

---

© 2025 InnTour - INNovationTOURism
