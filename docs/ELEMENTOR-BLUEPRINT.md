# InnTour - Blueprint Elementor Sezioni

## 📐 Mappa Completa Sito

```
┌─────────────────────────────────────────┐
│          HEADER (Sticky)                │
│  [Logo]        [Menu Navigazione]       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     SEZIONE 1: HERO VIDEO               │
│  • Video YouTube background             │
│  • Overlay gradient fusion              │
│  • Titolo + Sottotitolo + CTA           │
│  • Altezza: 100vh                       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     SEZIONE 2: CHI SIAMO                │
│  • Layout 2 colonne (50/50)             │
│  • Testo + Immagine                     │
│  • Background: Bianco                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     SEZIONE 3: SERVIZI                  │
│  • Header centrato                      │
│  • 3 Cards servizi (Icon Box)           │
│  • Background: Grigio chiaro            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     SEZIONE 4: PROGETTI                 │
│  • Header centrato                      │
│  • 3 Project Cards con CTA tour         │
│  • Background: Bianco                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     SEZIONE 5: MACRO-AREE               │
│  • Lista 10 territori                   │
│  • Background: Dark                     │
│  • Testo: Bianco/Giallo                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     SEZIONE 6: CONTATTI                 │
│  • Layout 2 colonne (40/60)             │
│  • Info + Form multi-profilo            │
│  • Background: Gradient soft fusion     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│          FOOTER (4 colonne)             │
│  [Logo+Bio] [Links] [Servizi] [Contatti]│
│  ─────────────────────────────────────  │
│       Footer Bottom - Copyright         │
└─────────────────────────────────────────┘
```

---

## 🎨 SEZIONE 1: HERO VIDEO

### Impostazioni Sezione (Section)

**Layout:**
```
Struttura: 1 Colonna
Larghezza contenuto: Fullwidth
Altezza: Adatta alla schermata (100vh)
Gap tra colonne: Nessuno gap
```

**Stile:**
```css
Background Type: Video
├─ Video YouTube URL: https://www.youtube.com/watch?v=XhB4SonU7Pw
├─ Video Start Time: 0
├─ Video End Time: (vuoto per loop completo)
├─ Play Once: NO
├─ Privacy Mode: SI (per GDPR)

Background Overlay: Attivo
├─ Tipo: Gradiente
├─ Colore 1: rgba(15, 23, 42, 0.75) - Posizione: 0%
├─ Colore 2: rgba(30, 41, 59, 0.6) - Posizione: 50%
├─ Colore 3: rgba(247, 169, 61, 0.3) - Posizione: 100%
├─ Tipo gradiente: Lineare
├─ Angolo: 135deg
```

**Avanzate:**
```
Z-Index: 1
Margine: 0px (tutti i lati)
Padding: 80px (top), 80px (bottom), 0 (left/right)
```

### Widget nella Sezione

#### Widget 1: Heading (Titolo Principale)

**Contenuto:**
```
Titolo: Trasformiamo i Borghi in Destinazioni Digitali
Tag HTML: H1
Link: (nessuno)
```

**Stile:**
```css
Colore testo: #FFFFFF
Tipografia:
├─ Famiglia: Playfair Display
├─ Dimensione: 64px (Desktop), 40px (Tablet), 32px (Mobile)
├─ Peso: 800 (Extra Bold)
├─ Trasformazione: Nessuna
├─ Stile: Normale
├─ Decorazione: Nessuna
├─ Altezza linea: 1.2em
├─ Spaziatura lettere: -0.5px

Ombra testo: Personalizzata
├─ Orizzontale: 0px
├─ Verticale: 2px
├─ Sfocatura: 20px
├─ Colore: rgba(0, 0, 0, 0.5)

Allineamento: Centro
```

**Avanzate:**
```
Margine: 0 0 24px 0 (bottom spacing)
Classe CSS: hero-title fade-in-up
Animazione entrata: Fade In Up
Durata animazione: 1000ms
Ritardo: 200ms
```

---

#### Widget 2: Heading (Sottotitolo)

**Contenuto:**
```
Titolo: INNovation TOUR ism
Tag HTML: H2
```

**Stile:**
```css
Colore testo: #FCD34D
Tipografia:
├─ Famiglia: Playfair Display
├─ Dimensione: 30px (Desktop), 24px (Tablet), 20px (Mobile)
├─ Peso: 600 (Semi Bold)
├─ Altezza linea: 1.3em

Ombra testo:
├─ Verticale: 1px
├─ Sfocatura: 10px
├─ Colore: rgba(0, 0, 0, 0.4)

Allineamento: Centro
```

**Avanzate:**
```
Margine: 0 0 32px 0
Classe CSS: hero-subtitle fade-in-up
Animazione: Fade In Up
Durata: 1000ms
Ritardo: 400ms
```

---

#### Widget 3: Text Editor (Descrizione)

**Contenuto:**
```html
<p style="text-align: center;">Mettiamo la <strong>tecnologia blockchain</strong> e l'<strong>innovazione digitale</strong> al servizio del turismo nelle aree interne italiane. Un ecosistema integrato per Comuni, aziende e residenti.</p>
```

**Stile:**
```css
Colore testo: rgba(255, 255, 255, 0.95)
Tipografia:
├─ Famiglia: Inter
├─ Dimensione: 20px (Desktop), 18px (Tablet), 16px (Mobile)
├─ Peso: 400 (Regular)
├─ Altezza linea: 1.6em

Allineamento: Centro
```

**Avanzate:**
```
Larghezza: Custom → 800px
Margine: 0 auto 48px auto (centrato con margine bottom)
Classe CSS: hero-description fade-in-up
Animazione: Fade In Up
Durata: 1000ms
Ritardo: 600ms
```

---

#### Widget 4: Button (CTA Principale)

**Contenuto:**
```
Testo: Scopri il Progetto
Link: #about (ancora a sezione successiva)
Icona: (opzionale) → Arrow Right
```

**Stile:**
```css
Tipografia:
├─ Famiglia: Inter
├─ Dimensione: 18px
├─ Peso: 600 (Semi Bold)
├─ Trasformazione: Nessuna

Sfondo:
├─ Tipo: Gradiente
├─ Colore 1: #F7A93D (Posizione 0%)
├─ Colore 2: #FFB84D (Posizione 100%)
├─ Tipo: Lineare
├─ Angolo: 120deg

Colore testo: #FFFFFF

Bordo:
├─ Tipo bordo: Nessuno
├─ Raggio bordo: 50px (tutti gli angoli)

Ombra box: Personalizzata
├─ Orizzontale: 0px
├─ Verticale: 10px
├─ Sfocatura: 30px
├─ Diffusione: 0px
├─ Colore: rgba(247, 169, 61, 0.3)

Padding: 16px (top), 16px (bottom), 40px (left), 40px (right)
```

**Hover:**
```css
Sfondo: (stesso gradiente ma più intenso)
├─ Colore 1: #FF9635
├─ Colore 2: #F7A93D

Ombra box:
├─ Verticale: 15px
├─ Sfocatura: 40px
├─ Colore: rgba(247, 169, 61, 0.4)

Trasformazione: translateY(-3px)
Durata transizione: 0.3s
```

**Avanzate:**
```
Allineamento: Centro
Classe CSS: btn-primary fade-in-scale
Animazione: Fade In Up
Durata: 800ms
Ritardo: 800ms
```

---

## 🏢 SEZIONE 2: CHI SIAMO (About)

### Impostazioni Sezione

**Layout:**
```
Struttura: 2 Colonne (50% / 50%)
Larghezza contenuto: Boxed (1200px)
Altezza: Predefinita (min-height: auto)
Allineamento verticale colonne: Centrato
Gap tra colonne: 60px
Direzione colonne: Predefinita (Row)
```

**Stile:**
```css
Background Type: Classico
├─ Colore: #FFFFFF

Padding: 100px (top), 100px (bottom), 20px (left), 20px (right)

Responsive (Tablet):
├─ Direzione colonne: Column (impilate)
├─ Padding: 60px (top/bottom), 20px (left/right)

Responsive (Mobile):
├─ Padding: 40px (top/bottom), 16px (left/right)
```

**Avanzate:**
```
ID CSS: about (per link ancora)
Classe CSS: scroll-reveal
```

### Colonna Sinistra - Widget

#### Widget 1: Text Editor (Badge "CHI SIAMO")

**Contenuto:**
```html
<p><span class="section-badge">CHI SIAMO</span></p>
```

**Stile:**
```css
Colore testo: #F7A93D
Tipografia:
├─ Famiglia: Inter
├─ Dimensione: 14px
├─ Peso: 700 (Bold)
├─ Trasformazione: Uppercase
├─ Spaziatura lettere: 2px

Allineamento: Sinistra
```

**Avanzate:**
```
Margine: 0 0 16px 0
Classe CSS: fade-in-left
```

---

#### Widget 2: Heading (Titolo Sezione)

**Contenuto:**
```
Titolo: Innovazione per le Aree Interne
Tag HTML: H2
```

**Stile:**
```css
Colore testo: #0f172a
Tipografia:
├─ Famiglia: Playfair Display
├─ Dimensione: 48px (Desktop), 36px (Tablet), 28px (Mobile)
├─ Peso: 700 (Bold)
├─ Altezza linea: 1.2em

Allineamento: Sinistra
```

**Avanzate:**
```
Margine: 0 0 24px 0
Classe CSS: fade-in-left
Ritardo animazione: 200ms
```

---

#### Widget 3: Text Editor (Descrizione)

**Contenuto:**
```html
<p>
<strong>InnTour</strong> è la startup che sta rivoluzionando il turismo nelle aree interne italiane attraverso l'innovazione digitale e la blockchain governance.
</p>

<p>
Il nostro progetto <strong>MetaBorghi</strong> crea un ecosistema decentralizzato dove Comuni, aziende turistiche, residenti e visitatori interagiscono attraverso:
</p>

<ul class="custom-list">
    <li>🏛️ <strong>Blockchain Governance</strong> - Gestione trasparente e democratica del territorio</li>
    <li>🪙 <strong>Token $BORGO</strong> - Valuta utility per l'economia locale</li>
    <li>🎨 <strong>NFT Culturali</strong> - Certificazione e valorizzazione patrimonio</li>
    <li>🌐 <strong>Tour Virtuali 360°</strong> - Esperienza immersiva prima della visita</li>
    <li>📱 <strong>App Multipiattaforma</strong> - Tutto a portata di smartphone</li>
</ul>

<p>
Operiamo in <strong>10 macro-aree dell'Appennino</strong>, servendo oltre 1.000 comuni target e 10.000 aziende del settore turistico.
</p>
```

**Stile:**
```css
Colore testo: #334155
Tipografia:
├─ Famiglia: Inter
├─ Dimensione: 18px (Desktop), 16px (Mobile)
├─ Peso: 400 (Regular)
├─ Altezza linea: 1.8em

Colore link: #F7A93D
Colore link hover: #FF9635
```

**CSS Aggiuntivo per la lista (in wordpress-custom.css già incluso):**
```css
.custom-list {
    list-style: none;
    padding-left: 0;
}

.custom-list li {
    padding-left: 0;
    margin-bottom: 12px;
    font-size: 16px;
}
```

**Avanzate:**
```
Margine: 0 0 32px 0
Classe CSS: fade-in-left
Ritardo: 400ms
```

---

### Colonna Destra - Widget

#### Widget 1: Image

**Contenuto:**
```
Immagine: Upload foto borgo italiano / tecnologia / innovazione
Alt Text: Innovazione digitale per borghi italiani
Dimensione: Grande (almeno 800x600px)
```

**Stile:**
```css
Opacità: 1
Filtri CSS:
├─ Brightness: 105%
├─ Contrast: 105%
├─ Saturazione: 110%

Bordo:
├─ Tipo: Nessuno
├─ Raggio bordo: 20px (tutti gli angoli)

Ombra box:
├─ Orizzontale: 0px
├─ Verticale: 20px
├─ Sfocatura: 40px
├─ Diffusione: 0px
├─ Colore: rgba(0, 0, 0, 0.1)

Width: 100%
Height: Auto
```

**Hover:**
```css
Trasformazione: scale(1.02)
Durata transizione: 0.4s
Filtri:
├─ Saturazione: 120%
```

**Avanzate:**
```
Classe CSS: fade-in-right
Ritardo: 600ms
```

---

## 💼 SEZIONE 3: SERVIZI

### Impostazioni Sezione Container

Prima crea una **Sezione interna per l'header** (1 colonna):

**Stile:**
```css
Background: #f8fafc (grigio chiaro)
Padding: 100px (top), 0 (bottom), 20px (left/right)
```

**Widget Header:**

#### Text Editor (Badge)
```
Contenuto: I NOSTRI SERVIZI
Stile: come badge CHI SIAMO
Allineamento: Centro
Classe CSS: section-badge
```

#### Heading (Titolo)
```
Contenuto: Soluzioni Complete per PA e Territorio
Tag: H2
Dimensione: 48px (Desktop), 36px (Tablet), 28px (Mobile)
Colore: #0f172a
Famiglia: Playfair Display
Peso: 700
Allineamento: Centro
Margine bottom: 16px
```

#### Text Editor (Sottotitolo)
```
Contenuto: Dalla digitalizzazione alla blockchain governance, offriamo servizi integrati per valorizzare il territorio
Dimensione: 20px (Desktop), 18px (Mobile)
Colore: #64748b
Allineamento: Centro
Max-width: 700px (in Avanzate → Larghezza)
Margine: 0 auto 80px auto
```

---

### Sezione Cards (3 Colonne)

**Layout:**
```
Struttura: 3 Colonne (33% / 33% / 33%)
Gap: 30px
Direzione: Row
Allineamento verticale: Stretch (altezza uguale)

Responsive (Tablet):
├─ 2 Colonne (50% / 50%)

Responsive (Mobile):
├─ 1 Colonna (100%)
├─ Gap: 20px
```

**Stile:**
```css
Background: #f8fafc
Padding: 0 (top), 100px (bottom), 20px (left/right)
```

---

### Card Servizio 1: Pacchetti PA

**Widget: Icon Box** (se ElementsKit installato) o combina **Icon + Heading + Text**

#### Se usi Icon Box ElementsKit:

**Contenuto:**
```
Icona: eicon-settings (o upload SVG personalizzato 🏛️)
Titolo: Pacchetti per PA
Descrizione: Soluzioni complete per Pubbliche Amministrazioni: digitalizzazione turistica, blockchain governance, gestione territorio. Da €8.000/anno con servizi integrati di marketing, booking e analytics.
Link: (opzionale) → Pagina dettaglio servizio PA
```

**Stile Icon Box:**
```css
Icona:
├─ Dimensione: 48px
├─ Colore primario: #FFFFFF
├─ Background: Gradiente (#F7A93D → #FFB84D)
├─ Padding: 20px
├─ Raggio bordo icona: 16px
├─ Margine bottom: 24px

Titolo:
├─ Colore: #0f172a
├─ Famiglia: Playfair Display
├─ Dimensione: 24px
├─ Peso: 700
├─ Margine bottom: 16px

Descrizione:
├─ Colore: #64748b
├─ Famiglia: Inter
├─ Dimensione: 16px
├─ Peso: 400
├─ Altezza linea: 1.6em

Container Card:
├─ Background: #FFFFFF
├─ Padding: 40px
├─ Raggio bordo: 24px
├─ Bordo: 1px solid #e2e8f0
├─ Ombra: 0 4px 6px rgba(0,0,0,0.1)
```

**Hover Card:**
```css
Trasformazione: translateY(-8px)
Ombra: 0 25px 50px rgba(0,0,0,0.15)
Bordo: 1px solid #F7A93D
Durata: 0.4s
```

**Avanzate:**
```
Classe CSS: service-card fade-in-scale
Ritardo animazione: 200ms
```

---

#### Se NON hai Icon Box, usa widget separati:

**Widget 1: Icon**
```
Icona: Font Awesome / Elementor Icons
Dimensione: 48px
Colore: #FFFFFF
View: Stacked (con background)
Shape: Circle o Square
Background: Gradiente fusion
Padding: 20px
Margine bottom: 24px
Allineamento: Sinistra
```

**Widget 2: Heading**
```
Titolo: Pacchetti per PA
Tag: H3
Dimensione: 24px
Colore: #0f172a
Famiglia: Playfair Display
Peso: 700
Margine bottom: 16px
```

**Widget 3: Text Editor**
```
Contenuto: Soluzioni complete per Pubbliche Amministrazioni...
Colore: #64748b
Dimensione: 16px
Famiglia: Inter
Altezza linea: 1.6em
```

**Per la colonna, vai in Avanzate della Colonna:**
```
Background: #FFFFFF
Padding: 40px (tutti i lati)
Raggio bordo: 24px
Bordo: 1px solid #e2e8f0
Ombra box: 0 4px 6px rgba(0,0,0,0.1)
Classe CSS: service-card
```

---

### Card Servizio 2: Partner Tecnologici

**Contenuto:**
```
Icona: 🏢 (building/partnership icon)
Titolo: Partner Tecnologici
Descrizione: Integrazione con piattaforme di prenotazione (Booking, Airbnb), sistemi di pagamento, tour virtuali 360° (Treedis, Matterport), NFT marketplace e blockchain infrastructure.
```

**Stili:** Identici a Card 1

**Avanzate:**
```
Classe CSS: service-card fade-in-scale
Ritardo: 400ms
```

---

### Card Servizio 3: Ecosistema MetaBorghi

**Contenuto:**
```
Icona: 🌍 (globe/network icon)
Titolo: Ecosistema MetaBorghi
Descrizione: Blockchain governance con voting DAO, token utility $BORGO per economia locale, NFT culturali per certificazione patrimonio, marketplace decentralizzato per turismo esperienziale.
```

**Stili:** Identici a Card 1 e 2

**Avanzate:**
```
Classe CSS: service-card fade-in-scale
Ritardo: 600ms
```

---

## 🏛️ SEZIONE 4: PROGETTI / CASE STUDY

### Impostazioni Sezione

Stessa struttura di Servizi (Header + 3 Colonne Cards)

**Header:**
```
Badge: I NOSTRI PROGETTI
Titolo: Case Study di Successo
Sottotitolo: Dalla realtà aumentata ai musei virtuali, ecco come stiamo trasformando i borghi italiani
Background: #FFFFFF
```

**Cards:**
```
3 Colonne (33% / 33% / 33%)
Gap: 30px
Background: #FFFFFF
Padding: 80px (top/bottom)
```

---

### Project Card 1: Lacedonia AR Hub

Ogni card è composta da:

#### Widget 1: Image (Thumbnail Progetto)

**Contenuto:**
```
Immagine: Screenshot tour virtuale Lacedonia
Alt: Lacedonia AR Hub - Tour Virtuale 360
Dimensione: Full width
Link: https://my.treedis.com/tour/lacedonia-vrcerogn
```

**Stile:**
```css
Width: 100%
Height: 250px
Object-fit: Cover
Raggio bordo: 16px 16px 0 0 (solo top)
Hover: scale(1.05)
Durata: 0.4s
```

---

#### Widget 2: Spacer
```
Altezza: 24px (spazio dopo immagine)
```

---

#### Widget 3: Heading (Titolo Progetto)

**Contenuto:**
```
Titolo: Lacedonia AR Hub
Tag: H3
```

**Stile:**
```css
Colore: #0f172a
Famiglia: Playfair Display
Dimensione: 28px
Peso: 700
Margine bottom: 12px
Allineamento: Sinistra
```

---

#### Widget 4: Text Editor (Descrizione)

**Contenuto:**
```html
<p>Museo multimediale con <strong>ologrammi interattivi</strong>, realtà aumentata e tour virtuale 360° completo. Un'esperienza immersiva che fonde storia e tecnologia.</p>

<ul class="project-features">
    <li>✓ Tour virtuale 360° navigabile</li>
    <li>✓ Ologrammi personaggi storici</li>
    <li>✓ AR experience con smartphone</li>
    <li>✓ Integrazione NFT collezione</li>
</ul>
```

**Stile:**
```css
Colore: #64748b
Dimensione: 16px
Famiglia: Inter
Altezza linea: 1.6em
Margine bottom: 24px
```

---

#### Widget 5: Button (CTA Tour Virtuale)

**Contenuto:**
```
Testo: 🔍 Visita Tour Virtuale 360°
Link: https://my.treedis.com/tour/lacedonia-vrcerogn
Icona: Arrow Right (a destra)
Target: Nuova finestra (_blank)
NoFollow: No
```

**Stile:**
```css
Tipografia:
├─ Dimensione: 16px
├─ Peso: 600

Sfondo: Gradiente fusion (#F7A93D → #FFB84D)
Colore testo: #FFFFFF
Raggio bordo: 50px
Padding: 12px 28px
Width: 100% (pulsante full width)
Allineamento: Centro
Ombra: 0 8px 20px rgba(247, 169, 61, 0.25)

Hover:
├─ Trasformazione: translateY(-2px)
├─ Ombra: 0 12px 30px rgba(247, 169, 61, 0.35)
```

---

**Per tutta la Card (Impostazioni Colonna):**

**Avanzate della Colonna:**
```css
Background: #FFFFFF
Padding: 0 (l'immagine arriva ai bordi)
Raggio bordo: 16px
Bordo: 1px solid #e2e8f0
Ombra: 0 8px 16px rgba(0,0,0,0.08)
Overflow: Hidden (per angoli arrotondati immagine)

Hover (usa Motion Effects o CSS custom):
├─ Trasformazione: translateY(-10px)
├─ Ombra: 0 20px 40px rgba(0,0,0,0.12)
├─ Bordo: 1px solid #F7A93D
```

**Classe CSS:**
```
project-card fade-in-up
```

---

### Project Card 2: MAVI - Museo Virtuale

**Identica struttura, cambia solo:**

```
Titolo: MAVI - Museo Virtuale
Immagine: Screenshot MAVI tour
Descrizione: Primo museo dell'Alta Irpinia completamente digitalizzato con percorsi multimediali, videoinstallazioni e realtà virtuale immersiva.

Features:
✓ Percorso espositivo virtuale
✓ Videoinstallazioni 4K
✓ VR experience immersiva
✓ Biglietteria online integrata

Link tour: https://my.treedis.com/tour/museomavi-zkmvh1jm
```

---

### Project Card 3: Museo Guardia Lombardi

```
Titolo: Museo Guardia Lombardi
Immagine: Screenshot museo
Descrizione: Valorizzazione patrimonio archeologico e culturale attraverso tecnologie digitali, tour 360° e storytelling multimediale.

Features:
✓ Tour archeologico virtuale
✓ Storytelling multimediale
✓ Reperti in 3D navigabili
✓ Timeline storia interattiva

Link tour: https://my.treedis.com/tour/museoguardialombardi-hxajdvkq
```

---

## 🗺️ SEZIONE 5: MACRO-AREE TERRITORIO

### Impostazioni Sezione

**Layout:**
```
Struttura: 2 Colonne (40% / 60%)
Larghezza contenuto: Boxed (1200px)
Gap: 60px
Allineamento verticale: Centrato

Responsive (Mobile):
├─ 1 Colonna
├─ Ordine invertito (mappa prima, testo poi)
```

**Stile:**
```css
Background Type: Classico
├─ Colore: #0f172a (dark)

Padding: 100px (top/bottom), 20px (left/right)

Responsive (Mobile):
├─ Padding: 60px (top/bottom), 16px (left/right)
```

---

### Colonna Sinistra - Testo

#### Widget 1: Text Editor (Badge)
```
Contenuto: IL NOSTRO TERRITORIO
Colore: #FCD34D (accent yellow)
Stile: Badge uppercase come sezioni precedenti
Allineamento: Sinistra
```

#### Widget 2: Heading
```
Titolo: 10 Macro-Aree Appennino
Tag: H2
Colore: #FFFFFF
Dimensione: 48px (Desktop), 36px (Tablet), 28px (Mobile)
Famiglia: Playfair Display
Peso: 700
Margine bottom: 32px
```

#### Widget 3: Text Editor
```html
<p style="color: rgba(255,255,255,0.9); font-size: 18px; line-height: 1.6;">
Operiamo lungo tutta la <strong>dorsale appenninica italiana</strong>, dalla Liguria alla Calabria, includendo le aree montane di Sicilia e Sardegna. Un network di borghi connessi da innovazione e tradizione.
</p>
```

---

### Colonna Destra - Lista Aree

#### Widget: Icon List (ElementsKit) o List standard

**Contenuto:**

```
Elementi lista (10 items):

1. 🏔️ Monti Liguri e Alpi Marittime
2. ⛰️ Appennino Piemontese
3. 🌲 Appennino Tosco-Emiliano
4. 🏛️ Appennino Umbro-Marchigiano
5. 🦅 Appennino Abruzzese e Molisano
6. 🌿 Appennino Campano e Lucano
7. 🌊 Appennino Calabro
8. 🏝️ Monti della Sardegna
9. 🍇 Monti Sicani e Iblei
10. 🏞️ Dorsale Appenninica Centrale
```

**Stile Icon List:**
```css
Icona:
├─ Dimensione: 24px
├─ Colore: #FCD34D
├─ Spaziatura: 16px (distanza da testo)

Testo:
├─ Colore: rgba(255, 255, 255, 0.95)
├─ Famiglia: Inter
├─ Dimensione: 18px (Desktop), 16px (Mobile)
├─ Peso: 500 (Medium)
├─ Altezza linea: 1.6em

Spacing tra elementi: 20px

Hover:
├─ Colore testo: #FCD34D
├─ Trasformazione: translateX(5px)
├─ Durata: 0.3s
```

**Avanzate:**
```
Background (opzionale): rgba(255, 255, 255, 0.05)
Padding: 32px
Raggio bordo: 16px
Bordo: 1px solid rgba(255, 255, 255, 0.1)
Backdrop filter: blur(10px) (effetto glassmorphism)
```

---

## 📞 SEZIONE 6: CONTATTI

### Impostazioni Sezione

**Layout:**
```
Struttura: 2 Colonne (40% / 60%)
Larghezza contenuto: Boxed (1200px)
Gap: 80px
Allineamento verticale: Centrato

Responsive (Tablet/Mobile):
├─ 1 Colonna (100%)
├─ Gap: 40px
```

**Stile:**
```css
Background Type: Gradiente
├─ Colore 1: rgba(247, 169, 61, 0.05) - Posizione 0%
├─ Colore 2: rgba(255, 184, 77, 0.02) - Posizione 100%
├─ Angolo: 135deg

Padding: 100px (top/bottom), 20px (left/right)

Responsive:
├─ Padding: 60px (top/bottom), 16px (left/right)
```

**Avanzate:**
```
ID CSS: contatti
```

---

### Colonna Sinistra - Info Contatti

#### Widget 1: Heading
```
Titolo: Parliamone Insieme
Tag: H2
Colore: #0f172a
Dimensione: 48px (Desktop), 36px (Mobile)
Famiglia: Playfair Display
Peso: 700
Margine bottom: 24px
```

#### Widget 2: Text Editor
```html
<p style="font-size: 18px; color: #64748b; line-height: 1.6;">
Che tu sia una <strong>Pubblica Amministrazione</strong>, un'<strong>azienda turistica</strong>, un <strong>residente</strong> o un <strong>investitore</strong>, siamo pronti ad ascoltarti.
</p>

<p style="font-size: 18px; color: #64748b; line-height: 1.6;">
Compila il form scegliendo il tuo profilo e ti ricontatteremo entro 24 ore.
</p>
```

**Margine bottom:** 40px

---

#### Widget 3: Icon List (Contatti)

**Elementi:**
```
1. 📧 Email
   Testo: info@inntour.it
   Link: mailto:info@inntour.it

2. 📱 Telefono
   Testo: +39 XXX XXXXXXX
   Link: tel:+39XXXXXXXXX

3. 📍 Sede
   Testo: (Inserisci indirizzo se disponibile)
   Link: (Google Maps URL)

4. 🌐 Web
   Testo: www.inntour.it
   Link: https://www.inntour.it
```

**Stile:**
```css
Icona:
├─ Dimensione: 20px
├─ Colore: #F7A93D
├─ Spaziatura: 12px

Testo:
├─ Colore: #0f172a
├─ Dimensione: 16px
├─ Famiglia: Inter
├─ Peso: 500

Link hover:
├─ Colore: #FF9635
├─ Decorazione: Underline

Spacing: 16px tra elementi
```

---

### Colonna Destra - Form Multi-Profilo

#### Metodo A: Con Tabs (ElementsKit)

**Widget: Tabs (ElementsKit)**

**Impostazioni Tabs:**
```
Numero tabs: 4
Layout: Horizontal
Stile: Pills (arrotondati)
Allineamento: Left
```

**Tab 1: PA**
```
Titolo tab: 🏛️ Pubblica Amministrazione
Icon: (opzionale)
```

**Contenuto Tab 1:**

**Widget: Shortcode (Contact Form 7)**
```
[contact-form-7 id="123" title="Form PA"]
```

**Oppure Widget: Form (Elementor Pro)**

**Campi Form PA:**
```
1. Text: Nome Completo (required)
2. Email: Email Istituzionale (required)
3. Text: Comune/Ente
4. Text: Ruolo/Carica
5. Tel: Telefono
6. Select: Popolazione Comune
   - < 1.000 abitanti
   - 1.000 - 5.000
   - 5.000 - 10.000
   - > 10.000
7. Select: Servizio di Interesse
   - Pacchetto Base (€8k/anno)
   - Pacchetto Premium (€12k/anno)
   - Consulenza personalizzata
   - Solo informazioni
8. Textarea: Messaggio
9. Checkbox: Privacy Policy (required)
10. Submit Button: Richiedi Presentazione
```

---

**Tab 2: Azienda**
```
Titolo: 🏢 Azienda Turistica
```

**Campi:**
```
1. Text: Nome Referente
2. Email: Email Aziendale
3. Text: Nome Azienda/Struttura
4. Select: Tipo Attività
   - Hotel/B&B
   - Ristorante/Agriturismo
   - Tour Operator
   - Guida Turistica
   - Artigianato/Produttore Locale
   - Altro
5. Text: Comune/Località
6. Tel: Telefono
7. Select: Interesse
   - Partnership commerciale
   - Integrazione piattaforma
   - Accettazione token $BORGO
   - Info generali
8. Textarea: Messaggio
9. Checkbox: Privacy
10. Submit: Richiedi Informazioni
```

---

**Tab 3: Residente**
```
Titolo: 👤 Residente/Cittadino
```

**Campi:**
```
1. Text: Nome
2. Email: Email
3. Text: Comune di residenza
4. Select: Interesse
   - Entrare nella community MetaBorghi
   - Diventare ambassador locale
   - Proporre iniziativa
   - Segnalare patrimonio da valorizzare
   - Info generali
5. Tel: Telefono (opzionale)
6. Textarea: Messaggio
7. Checkbox: Privacy
8. Submit: Unisciti alla Community
```

---

**Tab 4: Investitore**
```
Titolo: 💼 Investitore
```

**Campi:**
```
1. Text: Nome
2. Email: Email
3. Text: Azienda/Fondo (opzionale)
4. Select: Profilo Investitore
   - Business Angel
   - Venture Capital
   - Family Office
   - Corporate Investor
   - Altro
5. Select: Interesse Investment
   - Equity stake
   - Partnership strategica
   - Co-sviluppo progetto
   - Solo informazioni
6. Tel: Telefono
7. Textarea: Messaggio
8. Checkbox: Privacy
9. Submit: Richiedi Pitch Deck
```

---

**Stile Tabs:**
```css
Tab Navigation:
├─ Background attivo: Gradiente fusion
├─ Colore testo attivo: #FFFFFF
├─ Background inattivo: #f8fafc
├─ Colore testo inattivo: #64748b
├─ Raggio bordo: 12px
├─ Padding: 12px 24px
├─ Hover: Background #e2e8f0

Tab Content:
├─ Background: #FFFFFF
├─ Padding: 40px
├─ Raggio bordo: 16px
├─ Bordo: 1px solid #e2e8f0
├─ Ombra: 0 8px 20px rgba(0,0,0,0.06)
```

---

**Stile Form Fields (tutti i tab):**
```css
Label:
├─ Colore: #0f172a
├─ Dimensione: 14px
├─ Peso: 600
├─ Margine bottom: 8px

Input/Select/Textarea:
├─ Bordo: 1px solid #e2e8f0
├─ Raggio bordo: 8px
├─ Padding: 12px 16px
├─ Dimensione font: 16px
├─ Colore: #0f172a
├─ Background: #FFFFFF

Focus:
├─ Bordo: 2px solid #F7A93D
├─ Ombra: 0 0 0 3px rgba(247, 169, 61, 0.1)
├─ Outline: None

Submit Button:
├─ Background: Gradiente fusion
├─ Colore: #FFFFFF
├─ Padding: 14px 32px
├─ Raggio bordo: 50px
├─ Dimensione font: 16px
├─ Peso: 600
├─ Width: 100%
├─ Ombra: 0 8px 20px rgba(247, 169, 61, 0.25)

Submit Hover:
├─ Trasformazione: translateY(-2px)
├─ Ombra: 0 12px 30px rgba(247, 169, 61, 0.35)
```

---

## 🎯 Tips & Tricks Elementor

### 1. Copiare Stili tra Widget

1. Click destro sul widget con stile desiderato
2. **Copy** → **Copy Style**
3. Click destro sul widget target
4. **Paste** → **Paste Style**

### 2. Salvare Sezioni come Template

1. Click destro sulla sezione completata
2. **Salva come template**
3. Nome: `InnTour - Sezione Hero` (esempio)
4. Riutilizza in altre pagine: **Aggiungi template** (icona cartella)

### 3. Global Colors & Fonts

**Elementor → Site Settings → Global Colors:**

Crea colori globali per coerenza:
```
Primary: #F7A93D (Fusion Orange)
Secondary: #FFB84D (Fusion Yellow)
Text: #0f172a (Dark)
Accent: #FCD34D (Light Yellow)
```

**Global Fonts:**
```
Primary Heading: Playfair Display
Secondary Heading: Inter
Body: Inter
```

Così se cambi il colore primary, si aggiorna ovunque!

### 4. Motion Effects per Animazioni

**Avanzate → Motion Effects:**

**Scrolling Effects:**
- Vertical Scroll: Fade In (0 a 1 di opacità)
- Horizontal Scroll: Translatepossa X (-50px a 0px)
- Transparency: 0 a 1
- Blur: 5px a 0px

**Mouse Effects:**
- Mouse Track: per effetti parallax
- 3D Tilt: per cards interattive

### 5. Responsive Editing

Usa icone responsive in basso (Desktop/Tablet/Mobile):

**Mobile adjustments comuni:**
- Padding sezioni: Ridurre da 100px a 40px
- Font size titoli: Ridurre 30-50%
- Colonne: Da multi-colonna a 1 colonna
- Immagini: Height auto invece di fixed
- Margini: Ridurre spacing

### 6. Navigator Panel

**Visualizza → Navigator** (Ctrl+I):

Pannello struttura completa:
- Più facile selezionare elementi annidati
- Rinomina sezioni per organizzazione
- Drag & drop per riordinare

### 7. Custom CSS per Widget Specifico

**Avanzate → Custom CSS** (ogni widget):

```css
selector {
    /* Stili solo per questo widget */
}

selector:hover {
    /* Hover effects */
}
```

Esempio per card hover complesso:
```css
selector {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

selector:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

selector:hover .elementor-heading-title {
    color: #F7A93D;
}
```

---

## ⚡ Shortcut Tastiera

```
Ctrl + S → Salva bozza
Ctrl + Shift + S → Salva e pubblica
Ctrl + Z → Annulla
Ctrl + Y → Ripristina
Ctrl + D → Duplica elemento selezionato
Ctrl + C → Copia
Ctrl + V → Incolla
Delete → Elimina elemento
Ctrl + I → Apri Navigator
Ctrl + P → Apri Finder (cerca widget/template)
Ctrl + K → Inserisci link
Ctrl + E → Export template
Esc → Esci da editing widget
```

---

**Blueprint completo! Ogni sezione è pronta per essere ricreata in Elementor. 🎨**

Vuoi che continui con altri dettagli o procediamo con il packaging degli assets?
