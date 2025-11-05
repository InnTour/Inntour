# Immagini InnTour

Questa directory contiene le immagini del sito web.

## 📐 Linee Guida Immagini

### Dimensioni Raccomandate

| Tipo | Dimensioni | Formato | Peso Max |
|------|------------|---------|----------|
| Hero Background | 1920x1080px | JPG/WebP | 300KB |
| Progetti | 1200x800px | JPG/PNG | 200KB |
| Loghi Partner | 400x400px | PNG | 50KB |
| Gallery | 1200x900px | JPG/WebP | 250KB |
| Icone | 64x64px | SVG/PNG | 10KB |

### Formato Files

- **Preferito**: WebP (migliore compressione)
- **Alternativa**: JPG per foto, PNG per loghi con trasparenza
- **Vettoriali**: SVG per icone e loghi

### Naming Convention

Usa nomi descrittivi in lowercase con trattini:

```
✅ BUONI:
- progetto-lacedonia-hero.jpg
- mavi-museo-tour-virtuale.jpg
- logo-partner-comune-avellino.png

❌ EVITA:
- IMG_1234.jpg
- foto finale.JPG
- image1.png
```

## 🛠 Ottimizzazione Immagini

### Tool Raccomandati

1. **TinyPNG** (Online, gratuito)
   - https://tinypng.com
   - Comprimi JPG e PNG
   - Riduzione ~70% senza perdita qualità visibile

2. **Squoosh** (Online, open-source)
   - https://squoosh.app
   - Converti in WebP
   - Confronto side-by-side

3. **ImageOptim** (Mac App)
   - https://imageoptim.com
   - Batch compression
   - Rimuovi metadata

### Compressione Batch

```bash
# Con imagemagick (CLI)
mogrify -resize 1200x800 -quality 85 *.jpg

# Con WebP
cwebp -q 85 input.jpg -o output.webp
```

## 📁 Struttura Suggerita

```
assets/images/
├── hero/
│   ├── hero-home.jpg
│   └── hero-mobile.jpg
├── progetti/
│   ├── lacedonia/
│   │   ├── lacedonia-1.jpg
│   │   └── lacedonia-2.jpg
│   ├── mavi/
│   │   └── mavi-museo.jpg
│   └── guardia-lombardi/
│       └── guardia-museo.jpg
├── territori/
│   ├── irpinia.jpg
│   ├── daunia.jpg
│   └── ...
├── team/
│   ├── founder-1.jpg
│   └── founder-2.jpg
└── partners/
    ├── logo-comune-1.png
    └── logo-comune-2.png
```

## ✅ Checklist Pre-Upload

Prima di caricare un'immagine:

- [ ] Ridimensionata alla dimensione corretta
- [ ] Compressa (TinyPNG o simile)
- [ ] Peso < limite indicato
- [ ] Nome file descrittivo lowercase
- [ ] Formato appropriato (JPG/PNG/WebP/SVG)
- [ ] Testata in browser (caricamento veloce)

## 🎨 Best Practices

### 1. Responsive Images

Fornisci versioni multiple per dispositivi diversi:

```html
<picture>
    <source srcset="hero-mobile.jpg" media="(max-width: 768px)">
    <source srcset="hero-tablet.jpg" media="(max-width: 1024px)">
    <img src="hero-desktop.jpg" alt="Hero InnTour">
</picture>
```

### 2. Lazy Loading

Aggiungi `loading="lazy"` per immagini below-the-fold:

```html
<img src="progetto.jpg" alt="Progetto" loading="lazy">
```

### 3. Alt Text

Sempre descrittivo e SEO-friendly:

```html
<!-- ✅ BUONO -->
<img src="lacedonia.jpg" alt="Borgo medievale di Lacedonia in Alta Irpinia">

<!-- ❌ EVITA -->
<img src="lacedonia.jpg" alt="Immagine">
```

## 📊 Performance Target

| Metrica | Target |
|---------|--------|
| Peso Totale Immagini Pagina | < 2MB |
| Largest Contentful Paint | < 2.5s |
| First Input Delay | < 100ms |

## 🔍 SEO Images

### File Names

- Usa parole chiave rilevanti
- Separatori con trattini (non underscore)
- Lowercase

### Alt Attributes

- Descrivi il contenuto
- Include parole chiave (naturalmente)
- Max 125 caratteri

### Example

```html
<img
    src="assets/images/progetti/lacedonia-progetto-digitale-turismo.jpg"
    alt="Piattaforma digitale turismo Lacedonia - Progetto InnTour Irpinia"
    width="1200"
    height="800"
    loading="lazy"
>
```

## 🖼️ Immagini Placeholder

Per sviluppo, usa servizi di placeholder:

- **Unsplash Source**: `https://source.unsplash.com/1200x800/?italy,village`
- **Placeholder.com**: `https://via.placeholder.com/1200x800`
- **LoremFlickr**: `https://loremflickr.com/1200/800/italian,village`

## 📞 Supporto

Domande sull'ottimizzazione immagini?

- Email: info@inntour.it
- Vedi anche: [`../docs/CONTENT-UPDATE-GUIDE.md`](../docs/CONTENT-UPDATE-GUIDE.md)

---

**Remember**: Un'immagine ottimizzata = Sito più veloce = Utenti più felici = Più conversioni 🚀
