# Assets per WordPress - Guida Caricamento

## 📦 Cosa Caricare su WordPress

Questa guida ti aiuta a identificare e caricare tutti gli assets necessari per il sito InnTour su WordPress.

---

## 1. Logo InnTour

### File da Caricare:
```
assets/logo/logo-inntour.png
```

### Dove Caricarlo:

**Metodo 1 - Media Library (Consigliato):**
1. WordPress Dashboard → **Media → Aggiungi nuovo**
2. Trascina `logo-inntour.png`
3. Dopo upload, **copia l'URL** del file (esempio: `https://tuosito.it/wp-content/uploads/2024/11/logo-inntour.png`)
4. Usa questo URL in:
   - Widget Image in Header Elementor
   - Widget Image in Footer Elementor
   - Aspetto → Personalizza → Identità sito → Logo

**Metodo 2 - File Manager Hostinger:**
1. Hostinger hPanel → File Manager
2. Naviga in `public_html/wp-content/uploads/inntour/`
3. Crea cartella `logo` se non esiste
4. Upload `logo-inntour.png`
5. URL sarà: `https://tuodominio.it/wp-content/uploads/inntour/logo/logo-inntour.png`

### Dove Scaricare il Logo:

**IMPORTANTE**: Il logo originale è disponibile su:
```
https://i.postimg.cc/sfm2MNtt/Logo-2.png
```

**Istruzioni Download:**
1. Vai su https://i.postimg.cc/sfm2MNtt/Logo-2.png
2. Click destro → **Salva immagine con nome**
3. Salva come: `logo-inntour.png`
4. Carica su WordPress come descritto sopra

### Dimensioni Logo:
- **Navbar**: Max 200px larghezza, 60px altezza (auto-resize)
- **Footer**: Max 150px larghezza, 40px altezza
- **Formato**: PNG con sfondo trasparente (preferito)
- **Dimensione file**: Comprimi se > 200KB usando https://tinypng.com

---

## 2. Immagini Sezioni

### Sezione Chi Siamo (About)

**File Necessario:**
```
assets/images/about-innovation.jpg (o .png)
```

**Cosa Rappresenta:**
- Borgo italiano con tecnologia
- Innovazione digitale
- Paesaggio appenninico
- Mix tradizione-modernità

**Dove Trovare Immagini:**

**Opzione A - Stock Photos Gratuite:**
- **Unsplash**: https://unsplash.com/s/photos/italian-village
- **Pexels**: https://www.pexels.com/search/italian%20borgo/
- **Pixabay**: https://pixabay.com/images/search/italian%20town/

**Query di Ricerca Consigliate:**
```
- "italian village technology"
- "borgo italiano"
- "apennines landscape"
- "italian countryside"
- "medieval town italy"
```

**Opzione B - Foto Proprietarie:**
Usa foto dei tuoi progetti reali (Lacedonia, MAVI, Guardia Lombardi)

**Dimensioni Consigliate:**
- Min: 800x600px
- Ottimale: 1200x900px
- Max: 1920x1440px
- Formato: JPG (qualità 85%)
- Peso: < 300KB (comprimi con TinyJPG)

**Dove Caricare:**
```
WordPress → Media → Aggiungi nuovo → Upload immagine
```

Poi usa in Elementor:
```
Sezione About → Colonna Destra → Widget Image → Scegli da Media
```

---

### Sezione Progetti (Case Study)

**File Necessari (3 immagini):**

#### 1. Lacedonia AR Hub
```
assets/images/projects/lacedonia-tour.jpg
```

**Cosa Fare:**
1. Vai su https://my.treedis.com/tour/lacedonia-vrcerogn
2. Fai screenshot del tour (full screen, alta qualità)
3. Crop/Resize a 800x600px
4. Salva come `lacedonia-tour.jpg`
5. Upload in WordPress Media

**Alternativa**: Richiedi immagini promozionali ufficiali a Treedis o al Comune di Lacedonia

---

#### 2. MAVI Museo Virtuale
```
assets/images/projects/mavi-museo.jpg
```

**Fonte:**
- Screenshot da https://my.treedis.com/tour/museomavi-zkmvh1jm
- Foto promozionali MAVI se disponibili

**Dimensioni**: 800x600px

---

#### 3. Museo Guardia Lombardi
```
assets/images/projects/guardia-lombardi.jpg
```

**Fonte:**
- Screenshot da https://my.treedis.com/tour/museoguardialombardi-hxajdvkq
- Foto del museo se disponibili

**Dimensioni**: 800x600px

---

**Caricamento Progetti:**
```
WordPress → Media → Aggiungi nuovo
→ Upload tutte e 3 le immagini insieme
→ In Elementor, assegna a ogni Project Card l'immagine corrispondente
```

---

## 3. Icone e SVG

### Icone Servizi

Per le 3 cards servizi, hai due opzioni:

**Opzione A - Usa Font Awesome (già incluso in Elementor):**

Icone consigliate:
```
Pacchetti PA: fas fa-landmark (edificio governativo)
Partner Tecnologici: fas fa-handshake (partnership)
Ecosistema MetaBorghi: fas fa-globe (globo/rete)
```

In Elementor:
```
Widget Icon Box → Icona → Icon Library → Font Awesome
→ Cerca "landmark" / "handshake" / "globe"
```

**Opzione B - Custom SVG Icons:**

Se hai icone personalizzate:
```
assets/icons/icon-pa.svg
assets/icons/icon-partner.svg
assets/icons/icon-metaborghi.svg
```

Carica in Media Library, poi:
```
Widget Icon Box → Icona → SVG → Upload
```

### Icone Contatti

Per i contatti (email, telefono, sede) usa Font Awesome:
```
Email: fas fa-envelope
Telefono: fas fa-phone
Sede: fas fa-map-marker-alt
Web: fas fa-globe
```

---

## 4. Favicon

**File:**
```
assets/favicon/favicon.ico
```

**Come Crearlo:**

**Opzione A - Da Logo Esistente:**
1. Prendi `logo-inntour.png`
2. Vai su https://favicon.io/favicon-converter/
3. Upload logo → Genera favicon
4. Download package favicon

**Opzione B - WordPress Plugin:**
1. Usa plugin **Favicon by RealFaviconGenerator**
2. Upload logo, genera tutti i formati

**Dove Impostarlo:**
```
WordPress → Aspetto → Personalizza → Identità del sito → Icona del sito
→ Seleziona immagine (min 512x512px)
```

WordPress genera automaticamente tutte le dimensioni favicon.

---

## 5. File CSS Personalizzato

**File:**
```
wordpress-custom.css
```

**Cosa Fare:**

1. **Apri il file** `/home/user/Inntour/wordpress-custom.css` (già creato)

2. **Copia tutto il contenuto**

3. **In WordPress**:
   - Aspetto → Personalizza → CSS Aggiuntivo
   - Incolla tutto
   - Click **Pubblica**

**Cosa Include:**
- Palette colori fusion (variabili CSS)
- Stili bottoni con gradient
- Animazioni fade-in
- Typography (Playfair Display + Inter)
- Responsive design
- Cards hover effects

---

## 6. Fonts (Google Fonts)

**Già inclusi nel CSS personalizzato!**

Il file `wordpress-custom.css` include:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');
```

Quindi **non serve** caricare font separatamente.

Se preferisci gestirli via plugin:
- Installa **Easy Google Fonts**
- Seleziona: Playfair Display (headings) + Inter (body)

---

## 7. Video Background (Hero Section)

**NO FILE DA CARICARE!**

Il video hero è caricato da YouTube:
```
https://www.youtube.com/watch?v=XhB4SonU7Pw
```

In Elementor:
```
Sezione Hero → Stile → Sfondo → Tipo: Video
→ YouTube URL: https://www.youtube.com/watch?v=XhB4SonU7Pw
→ Background Overlay: Attivo (con gradient fusion)
```

**Vantaggi YouTube:**
- ✅ Non occupa spazio server
- ✅ Streaming ottimizzato
- ✅ Nessun problema caricamento lento
- ✅ Gestione automatica mobile (mostra immagine statica)

**Se preferisci video self-hosted:**
1. Scarica video MP4 (max 10MB per performance)
2. Upload in Media Library
3. Usa "Self Hosted" invece di YouTube in Elementor

---

## 📋 Checklist Assets

Prima di iniziare, assicurati di avere tutti questi file pronti:

### Essenziali (Obbligatori)
- [ ] **Logo**: `logo-inntour.png` (scaricato da postimg.cc)
- [ ] **CSS Custom**: Contenuto di `wordpress-custom.css` copiato

### Consigliati (Migliorano molto il design)
- [ ] **About Image**: Foto borgo/innovazione (800x600px min)
- [ ] **Project 1**: Screenshot Lacedonia tour (800x600px)
- [ ] **Project 2**: Screenshot MAVI (800x600px)
- [ ] **Project 3**: Screenshot Guardia Lombardi (800x600px)
- [ ] **Favicon**: 512x512px (dal logo)

### Opzionali (Se hai materiale custom)
- [ ] **Icone SVG personalizzate** (altrimenti usa Font Awesome)
- [ ] **Immagini additional** (gallerie, team, etc.)
- [ ] **Video self-hosted** (alternativa a YouTube)

---

## 🎯 Workflow Caricamento Ottimale

### Step 1: Preparazione Locale
```bash
1. Scarica logo da postimg.cc → Salva come logo-inntour.png
2. Fai screenshot dei 3 tour virtuali → Salva come lacedonia-tour.jpg, mavi-museo.jpg, guardia-lombardi.jpg
3. Cerca/scarica 1 immagine stock borgo italiano → Salva come about-innovation.jpg
4. Comprimi tutte le immagini su https://tinyjpg.com
```

### Step 2: Upload WordPress
```bash
1. Login WordPress Dashboard
2. Media → Aggiungi nuovo
3. Drag & Drop tutti i file insieme:
   - logo-inntour.png
   - lacedonia-tour.jpg
   - mavi-museo.jpg
   - guardia-lombardi.jpg
   - about-innovation.jpg
4. Attendi completamento upload
5. Verifica che ogni file sia visibile in Media Library
```

### Step 3: CSS Personalizzato
```bash
1. Apri file /wordpress-custom.css sul tuo computer
2. Copia tutto (Ctrl+A, Ctrl+C)
3. WordPress → Aspetto → Personalizza
4. CSS Aggiuntivo
5. Incolla (Ctrl+V)
6. Click Pubblica
```

### Step 4: Favicon
```bash
1. Aspetto → Personalizza → Identità del sito
2. Icona del sito → Seleziona immagine
3. Scegli logo-inntour.png (WordPress lo adatta automaticamente)
4. Pubblica
```

### Step 5: Verifica
```bash
1. Vai in Media Library
2. Conta file: Dovresti avere almeno 5 immagini
3. Apri CSS Aggiuntivo: Verifica che il codice ci sia
4. Visita sito in incognito: Verifica favicon visibile
```

---

## 🆘 Troubleshooting Assets

### Problema: "Upload fallito - File troppo grande"

**Causa**: Limit PHP upload size su Hostinger

**Soluzione**:
1. Comprimi immagine con TinyJPG (riduci a < 2MB)
2. Oppure aumenta limit: Hostinger → PHP Configuration → upload_max_filesize → 10M

### Problema: "Logo sfocato su Retina display"

**Causa**: Immagine troppo piccola

**Soluzione**:
1. Usa logo almeno 400x120px (doppia dimensione per Retina)
2. Formato PNG per qualità migliore

### Problema: "CSS non viene applicato"

**Causa**: Cache attiva

**Soluzione**:
1. Svuota cache plugin (se hai WP Rocket, W3 Total Cache, etc.)
2. Ctrl+Shift+R nel browser (hard refresh)
3. Testa in finestra incognito

### Problema: "Icone Font Awesome non si vedono"

**Causa**: Tema blocca Font Awesome

**Soluzione**:
1. Installa plugin **Font Awesome Integration**
2. Oppure usa ElementsKit icons (incluso nel plugin)

### Problema: "Video YouTube non funziona"

**Causa**: URL sbagliato o impostazioni sezione

**Soluzione**:
1. Verifica URL: Deve essere `youtube.com/watch?v=ID` NON `youtube.com/embed/ID`
2. Sezione → Stile → Sfondo → Tipo: **Video** (non Classic)
3. Abilita "Background Overlay" per vedere contenuto sopra video

---

## 📞 Dove Trovare Risorse

### Immagini Stock Gratuite
- **Unsplash**: https://unsplash.com (licenza free, qualità alta)
- **Pexels**: https://www.pexels.com (gratis anche per commerciale)
- **Pixabay**: https://pixabay.com (completamente free)

### Ottimizzazione Immagini
- **TinyJPG**: https://tinyjpg.com (compressione senza perdita qualità)
- **Squoosh**: https://squoosh.app (tool Google)

### Icone
- **Font Awesome**: https://fontawesome.com/icons (cerca "free")
- **Flaticon**: https://www.flaticon.com (SVG gratis con attribuzione)
- **Heroicons**: https://heroicons.com (SVG MIT license)

### Favicon Generator
- **Favicon.io**: https://favicon.io (da logo, testo, emoji)
- **RealFaviconGenerator**: https://realfavicongenerator.net (completo)

### Fonts
- **Google Fonts**: https://fonts.google.com
  - Playfair Display: https://fonts.google.com/specimen/Playfair+Display
  - Inter: https://fonts.google.com/specimen/Inter

---

## ✅ Assets Pronti!

Dopo aver completato questa guida, avrai:
- ✅ Logo caricato e utilizzabile in Header/Footer
- ✅ Immagini progetti per le 3 cards
- ✅ Immagine About per sezione Chi Siamo
- ✅ CSS personalizzato attivo con palette fusion
- ✅ Favicon configurato
- ✅ Video background funzionante

**Prossimo step**: Segui la guida `WORDPRESS-MIGRATION.md` per costruire le sezioni in Elementor! 🚀

