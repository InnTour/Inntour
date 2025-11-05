# Guida Completa: Migrazione InnTour a WordPress + Elementor

## 📋 Indice
1. [Preparazione WordPress](#1-preparazione-wordpress)
2. [Importazione Assets](#2-importazione-assets)
3. [Configurazione CSS Personalizzato](#3-configurazione-css-personalizzato)
4. [Creazione Pagine in Elementor](#4-creazione-pagine-in-elementor)
5. [Header e Footer Personalizzati](#5-header-e-footer-personalizzati)
6. [Funzionalità Avanzate](#6-funzionalità-avanzate)

---

## 1. Preparazione WordPress

### 1.1 Plugin Essenziali da Installare

Vai in **Dashboard → Plugin → Aggiungi nuovo** e installa:

**Obbligatori:**
- ✅ **Elementor** (già installato)
- ✅ **ElementsKit** (già installato)
- 🔲 **Elementor Header & Footer Builder** - Per header/footer custom
- 🔲 **Contact Form 7** - Per i form di contatto multi-profilo
- 🔲 **WPForms Lite** (alternativa più user-friendly)

**Consigliati per Funzionalità Future:**
- 🔲 **WooCommerce** - Per e-commerce e prenotazioni
- 🔲 **WooCommerce Bookings** - Sistema prenotazioni tour
- 🔲 **Advanced Custom Fields (ACF)** - Per campi personalizzati progetti
- 🔲 **Yoast SEO** - Ottimizzazione SEO
- 🔲 **Wordfence Security** - Sicurezza

### 1.2 Configurazione Tema

1. Vai in **Aspetto → Temi**
2. Usa un tema compatibile con Elementor (raccomandati):
   - **Hello Elementor** (leggero, fatto apposta per Elementor)
   - **Astra** (molto flessibile)
   - **OceanWP** (ricco di funzionalità)

3. **Consiglio**: Installa **Hello Elementor** perché è il più pulito e lascia tutto il controllo a Elementor

### 1.3 Impostazioni di Base

**Permalink:**
1. Vai in **Impostazioni → Permalink**
2. Seleziona **Nome articolo**
3. Salva

**Home Page:**
1. Vai in **Impostazioni → Lettura**
2. Seleziona **Una pagina statica**
3. Lascia vuoto per ora (lo imposteremo dopo)

---

## 2. Importazione Assets

### 2.1 Upload File tramite File Manager Hostinger

1. **Login Hostinger:**
   - Vai su https://hpanel.hostinger.com
   - Accedi al tuo account
   - Seleziona il tuo hosting Business

2. **Apri File Manager:**
   - Click su **File Manager**
   - Naviga in `public_html/wp-content/uploads/`
   - Crea una cartella chiamata `inntour-assets`

3. **Upload Assets:**
   - Entra nella cartella `inntour-assets`
   - Crea sottocartelle: `logo`, `images`, `icons`
   - Carica i file:
     - **Logo**: `logo-inntour.png` in `/logo/`
     - **Immagini**: Eventuali immagini custom in `/images/`

### 2.2 Upload tramite Media Library WordPress

**Metodo più semplice:**

1. Vai in **Dashboard → Media → Aggiungi nuovo**
2. Trascina e rilascia:
   - Logo InnTour
   - Immagini progetti
   - Icone custom

3. WordPress organizzerà tutto automaticamente in `/wp-content/uploads/ANNO/MESE/`

---

## 3. Configurazione CSS Personalizzato

### 3.1 Importa il CSS Fusion

Ho preparato un file CSS con tutti gli stili personalizzati della palette fusion arancio-giallo.

**Istruzioni:**

1. **Apri il file:** `/home/user/Inntour/wordpress-custom.css`

2. **Copia tutto il contenuto**

3. **Vai in WordPress:**
   - **Aspetto → Personalizza → CSS Aggiuntivo**
   - Incolla tutto il CSS
   - Click **Pubblica**

**Cosa include questo CSS:**
- ✅ Palette colori fusion (#F7A93D, #FF9635, #FFB84D)
- ✅ Gradienti personalizzati
- ✅ Stili bottoni con effetto hover
- ✅ Typography (Playfair Display + Inter)
- ✅ Animazioni fade-in
- ✅ Stili per cards e sezioni
- ✅ Responsive design

### 3.2 Alternative: Plugin CSS

Se preferisci un'interfaccia più user-friendly:

**Opzione A - WP Add Custom CSS:**
1. Installa plugin **WP Add Custom CSS**
2. Vai in **Aspetto → Custom CSS**
3. Incolla il CSS
4. Salva

**Opzione B - Elementor Custom CSS:**
1. Vai in **Elementor → Custom CSS** (se disponibile in Pro)
2. Incolla il CSS

---

## 4. Creazione Pagine in Elementor

### 4.1 Crea la Home Page

1. **Dashboard → Pagine → Aggiungi pagina**
2. Titolo: `Home`
3. Click **Modifica con Elementor**

### 4.2 Struttura Sezioni da Ricreare

Ti guiderò sezione per sezione. Ecco l'elenco completo:

#### **SEZIONE 1: HERO con Video Background**

**Impostazioni Sezione:**
1. Aggiungi nuova sezione (click `+`)
2. Struttura: **1 colonna**
3. **Stile della Sezione:**
   - Layout → Altezza: **Adatta alla schermata** (100vh)
   - Sfondo → Tipo: **Video**
   - Video YouTube URL: `https://www.youtube.com/watch?v=XhB4SonU7Pw`
   - Sovrapposizione sfondo (Background Overlay):
     - Tipo: **Gradiente**
     - Colore 1: `rgba(15, 23, 42, 0.75)` (posizione 0%)
     - Colore 2: `rgba(30, 41, 59, 0.6)` (posizione 50%)
     - Colore 3: `rgba(247, 169, 61, 0.3)` (posizione 100%)
     - Angolo: 135deg

**Widget da Aggiungere nella Sezione:**

1. **Widget: Heading (Titolo Principale)**
   - Contenuto: `Trasformiamo i Borghi in Destinazioni Digitali`
   - Tag HTML: H1
   - Stile:
     - Colore testo: `#FFFFFF`
     - Tipografia: Playfair Display, 64px, Bold (800)
     - Allineamento: Centro
     - Effetti → Ombra testo: Personalizzata (0px, 2px, 20px, rgba(0,0,0,0.5))

2. **Widget: Heading (Sottotitolo)**
   - Contenuto: `INNovation TOUR ism`
   - Tag HTML: H2
   - Stile:
     - Colore testo: `#FCD34D` (accent yellow)
     - Tipografia: Playfair Display, 30px, Semi-Bold (600)
     - Allineamento: Centro

3. **Widget: Text Editor (Descrizione)**
   - Contenuto: `Mettiamo la tecnologia blockchain e l'innovazione digitale al servizio del turismo nelle aree interne italiane. Un ecosistema integrato per Comuni, aziende e residenti.`
   - Stile:
     - Colore: `rgba(255, 255, 255, 0.95)`
     - Tipografia: Inter, 20px, Regular (400)
     - Allineamento: Centro
     - Max-width: 800px (impostalo in Avanzate → Larghezza)

4. **Widget: Button**
   - Testo: `Scopri il Progetto`
   - Link: `#about` (ancora alla sezione successiva)
   - Stile:
     - Tipo sfondo: **Gradiente**
     - Colore 1: `#F7A93D`
     - Colore 2: `#FFB84D`
     - Angolo: 120deg
     - Colore testo: Bianco
     - Tipografia: Inter, 18px, Semi-Bold (600)
     - Padding: 16px 40px
     - Border Radius: 50px (arrotondato)
     - Box Shadow: Custom (0px, 10px, 30px, rgba(247, 169, 61, 0.3))
   - Hover:
     - Trasformazione: Translate Y(-3px)

**Impostazioni Avanzate Sezione Hero:**
- Margini: 0
- Padding: 80px (top/bottom)
- Z-index: 1

---

#### **SEZIONE 2: CHI SIAMO (About)**

**Impostazioni Sezione:**
1. Aggiungi sezione
2. Struttura: **2 colonne** (50%-50%)
3. ID Sezione: `about` (in Avanzate → Attributi CSS ID)
4. Sfondo: Bianco `#FFFFFF`
5. Padding: 100px (top/bottom), 20px (left/right)

**Colonna Sinistra - Widget da aggiungere:**

1. **Widget: Text Editor (Badge/Etichetta)**
   - Contenuto: `CHI SIAMO`
   - Stile:
     - Colore: `#F7A93D`
     - Tipografia: Inter, 14px, Bold (700), Uppercase, Letter Spacing: 2px

2. **Widget: Heading**
   - Contenuto: `Innovazione per le Aree Interne`
   - Tag: H2
   - Stile:
     - Colore: `#0f172a`
     - Tipografia: Playfair Display, 48px, Bold (700)

3. **Widget: Text Editor**
   - Contenuto: (copia dalla sezione About del file HTML originale)
   - Paragrafi sulla missione InnTour, MetaBorghi, tokenizzazione, governance decentralizzata

**Colonna Destra - Widget:**

1. **Widget: Image**
   - Upload un'immagine rappresentativa (borgo italiano, tecnologia, innovazione)
   - Border Radius: 20px
   - Box Shadow: Custom

---

#### **SEZIONE 3: SERVIZI (Services)**

**Impostazioni Sezione:**
1. Struttura: **3 colonne** (33%-33%-33%)
2. Sfondo: Grigio chiaro `#f8fafc`
3. Padding: 100px (top/bottom)

**Header Sezione (occupa tutta la larghezza - aggiungi prima delle colonne):**
Crea una sezione separata sopra con 1 colonna per l'intestazione:

1. **Widget: Text Editor**
   - Contenuto: `I NOSTRI SERVIZI`
   - Classe CSS: `section-subtitle`

2. **Widget: Heading**
   - Contenuto: `Soluzioni Complete per PA e Territorio`
   - H2, centrato

**Colonne Cards Servizi (3 colonne):**

Ogni colonna contiene:

1. **Widget: Icon Box** (usa widget di ElementsKit se disponibile, oppure combina Icon + Heading + Text)
   - **Card 1:**
     - Icona: 🏛️ (o scegli da libreria Elementor)
     - Titolo: `Pacchetti per PA`
     - Descrizione: `Soluzioni complete per Pubbliche Amministrazioni: digitalizzazione turistica, blockchain governance, gestione territorio. Da €8.000/anno.`

   - **Card 2:**
     - Icona: 🏢
     - Titolo: `Partner Tecnologici`
     - Descrizione: `Integrazione con piattaforme di prenotazione, sistemi di pagamento, tour virtuali 360°, NFT e tokenizzazione.`

   - **Card 3:**
     - Icona: 🌍
     - Titolo: `Ecosistema MetaBorghi`
     - Descrizione: `Blockchain governance, token utility $BORGO, NFT culturali, marketplace decentralizzato per il turismo esperienziale.`

**Stile Card (per ogni Icon Box):**
- Sfondo: Bianco
- Padding: 32px
- Border Radius: 24px
- Box Shadow: 0px 4px 6px rgba(0,0,0,0.1)
- Hover:
  - Transform: translateY(-8px)
  - Box Shadow: 0px 25px 50px rgba(0,0,0,0.1)
  - Border: 1px solid `#F7A93D`

---

#### **SEZIONE 4: PROGETTI (Projects/Case Study)**

**Impostazioni Sezione:**
1. Struttura: **3 colonne**
2. Sfondo: Bianco
3. Padding: 100px (top/bottom)

**Header Sezione:**
- Sottotitolo: `I NOSTRI PROGETTI`
- Titolo: `Case Study di Successo`

**3 Colonne - Project Cards:**

**Card 1: Lacedonia AR Hub**
1. **Widget: Image**
   - Upload screenshot tour virtuale Lacedonia
   - Border Radius Top: 16px

2. **Widget: Heading**
   - Contenuto: `Lacedonia AR Hub`
   - H3

3. **Widget: Text Editor**
   - Descrizione progetto con museo virtuale, ologrammi, tour 360°

4. **Widget: Button**
   - Testo: `🔍 Visita Tour Virtuale 360°`
   - Link: `https://my.treedis.com/tour/lacedonia-vrcerogn`
   - Target: Nuova finestra
   - Stile: Bottone fusion gradient

**Card 2: MAVI - Museo Virtuale**
- Stessa struttura della Card 1
- Link tour: `https://my.treedis.com/tour/museomavi-zkmvh1jm`

**Card 3: Museo Guardia Lombardi**
- Stessa struttura
- Link tour: `https://my.treedis.com/tour/museoguardialombardi-hxajdvkq`

**Stile Cards:**
Usa il widget **Flip Box** di ElementsKit per effetto hover più avanzato, oppure:
- Sfondo: Bianco
- Border: 1px solid `#e2e8f0`
- Border Radius: 16px
- Overflow: Hidden
- Hover: translateY(-10px) + shadow

---

#### **SEZIONE 5: MACRO-AREE (Territory)**

**Impostazioni Sezione:**
1. Struttura: **1 colonna**
2. Sfondo: Scuro `#0f172a`
3. Padding: 100px

**Widget da aggiungere:**

1. **Widget: Heading**
   - Contenuto: `10 Macro-Aree Appennino`
   - Colore: Bianco
   - H2, Centrato

2. **Widget: Icon List** (ElementsKit) o **List** standard
   - Lista delle 10 macro-aree:
     ```
     1️⃣ Monti Liguri e Alpi Marittime
     2️⃣ Appennino Piemontese
     3️⃣ Appennino Tosco-Emiliano
     4️⃣ Appennino Umbro-Marchigiano
     5️⃣ Appennino Abruzzese e Molisano
     6️⃣ Appennino Campano e Lucano
     7️⃣ Appennino Calabro
     8️⃣ Monti della Sardegna
     9️⃣ Monti Sicani e Iblei
     🔟 Dorsale Appenninica Centrale
     ```

   - Stile:
     - Colore testo: Bianco/Giallo fusion
     - Font size: 18px
     - Spaziatura tra elementi: 16px

---

#### **SEZIONE 6: CONTATTI (Multi-Profile Form)**

**Impostazioni Sezione:**
1. Struttura: **2 colonne** (40%-60%)
2. Sfondo: Gradiente leggero fusion
3. Padding: 100px

**Colonna Sinistra - Info:**

1. **Widget: Heading**
   - `Parliamone Insieme`
   - H2

2. **Widget: Text Editor**
   - Descrizione CTA per contatto

3. **Widget: Icon List**
   - 📧 Email: info@inntour.it
   - 📱 Telefono: +39 XXX XXXXXXX
   - 📍 Sede: (se disponibile)

**Colonna Destra - Form:**

**Opzione A - Contact Form 7:**

1. Installa **Contact Form 7**
2. Crea 4 form diversi per i 4 profili:
   - Form PA
   - Form Azienda
   - Form Residente
   - Form Investitore

3. Usa **Widget: Tabs** (ElementsKit) per switchare tra i form
   - Tab 1: PA
   - Tab 2: Azienda
   - Tab 3: Residente
   - Tab 4: Investitore

4. In ogni tab inserisci **Widget: Shortcode** con lo shortcode del form

**Opzione B - Elementor Forms (Pro richiesto):**

Usa direttamente il widget **Form** di Elementor Pro con campi condizionali.

**Campi Form Base:**
- Nome
- Email
- Profilo (select: PA, Azienda, Residente, Investitore)
- Comune/Territorio (condizionale per PA)
- Nome Azienda (condizionale per Azienda)
- Messaggio
- Privacy checkbox
- Submit button (stile fusion gradient)

---

## 5. Header e Footer Personalizzati

### 5.1 Installa Header & Footer Builder

1. **Plugin → Aggiungi nuovo**
2. Cerca **Elementor Header & Footer Builder**
3. Installa e attiva

### 5.2 Crea Header Custom

1. **Aspetto → Header Footer Builder → Add New**
2. Tipo: **Header**
3. Nome: `InnTour Header`

**Struttura Header:**

**Sezione Header:**
- Altezza: 80px
- Sfondo: Bianco (trasparente con scroll se vuoi effetto sticky)
- Box Shadow: 0px 2px 10px rgba(0,0,0,0.05)
- Position: Fixed (per sticky header)

**Widget da aggiungere (usa 2 colonne: 30%-70%):**

**Colonna Sinistra:**
1. **Widget: Image** (Logo)
   - Upload `logo-inntour.png`
   - Link: Homepage
   - Dimensione: Auto (max 200px width, 60px height)

**Colonna Destra:**
1. **Widget: Nav Menu**
   - Menu: (crea menu in Aspetto → Menu)
   - Elementi: Home | Chi Siamo | Servizi | Progetti | Territorio | Contatti
   - Allineamento: Destra
   - Stile:
     - Colore link: `#0f172a`
     - Colore hover: `#F7A93D`
     - Tipografia: Inter, 16px, Medium (500)
   - Active link:
     - Background: Gradient fusion
     - Colore testo: Bianco
     - Padding: 8px 20px
     - Border Radius: 50px

**Impostazioni Display:**
- Template: **Entire Site**
- Pubblica

### 5.3 Crea Footer Custom

1. **Header Footer Builder → Add New**
2. Tipo: **Footer**
3. Nome: `InnTour Footer`

**Struttura Footer:**

**Sezione 1 - Footer Main:**
- Struttura: **4 colonne** (25%-25%-25%-25%)
- Sfondo: `#0f172a` (dark)
- Padding: 80px (top/bottom), 20px (left/right)
- Colore testo: Bianco

**Colonna 1 - Brand:**
1. **Widget: Image** (Logo)
   - `logo-inntour.png`
   - Dimensione: 120px width

2. **Widget: Text Editor**
   - Breve descrizione InnTour
   - Colore: `rgba(255,255,255,0.8)`

**Colonna 2 - Link Rapidi:**
1. **Widget: Heading**
   - `Link Rapidi`
   - H4, Colore bianco

2. **Widget: Icon List** o **Custom Menu**
   - Chi Siamo
   - Servizi
   - Progetti
   - Contatti

**Colonna 3 - Servizi:**
1. **Widget: Heading**
   - `Servizi`
   - H4

2. **Widget: Text Editor / List**
   - Pacchetti PA
   - MetaBorghi
   - Tour Virtuali
   - Blockchain Governance

**Colonna 4 - Contatti:**
1. **Widget: Heading**
   - `Contatti`
   - H4

2. **Widget: Icon List**
   - 📧 info@inntour.it
   - 📱 +39 XXX XXX XXXX
   - 🌐 www.inntour.it

**Sezione 2 - Footer Bottom:**
- Struttura: **1 colonna**
- Sfondo: `#1e293b` (dark-lighter)
- Padding: 30px
- Text align: Center

**Widget:**
1. **Text Editor**
   - `© 2024 InnTour - INNovationTOURism. Tutti i diritti riservati. | Privacy Policy | Cookie Policy`
   - Font size: 14px
   - Colore: `rgba(255,255,255,0.6)`

**Impostazioni Display:**
- Template: **Entire Site**
- Pubblica

---

## 6. Funzionalità Avanzate

### 6.1 Sistema Prenotazioni

**Plugin Consigliati:**

**Opzione A - WooCommerce Bookings:**
1. Installa **WooCommerce**
2. Installa **WooCommerce Bookings** (premium, €249/anno)
3. Crea prodotti "Prenotabili":
   - Tour guidato Lacedonia
   - Pacchetto weekend borgo
   - Esperienza enogastronomica

**Opzione B - Booking Calendar (Gratuito):**
1. Installa **Booking Calendar**
2. Configura calendari per ogni esperienza
3. Inserisci shortcode nelle pagine prodotto

### 6.2 E-Commerce (Vendita Pacchetti/Tour)

**Setup WooCommerce:**

1. **WooCommerce → Impostazioni**
   - Valuta: EUR (€)
   - Paese: Italia
   - Metodi pagamento:
     - Bonifico bancario
     - PayPal
     - Stripe (carta di credito)

2. **Crea Categorie Prodotti:**
   - Tour Virtuali
   - Pacchetti Weekend
   - Esperienze
   - Servizi PA

3. **Crea Prodotti:**
   - Tipo: Semplice / Prenotabile
   - Prezzo
   - Galleria immagini
   - Descrizione dettagliata
   - Shortcode booking

### 6.3 Custom Post Types (Progetti/Case Study)

**Plugin: Custom Post Type UI**

1. Installa **Custom Post Type UI**
2. Crea Post Type:
   - Slug: `progetti`
   - Plurale: `Progetti`
   - Singolare: `Progetto`
   - Icona: 🏛️

3. Crea Taxonomy (Categoria):
   - `Tipo Progetto`: Museo, Tour Virtuale, Digitalizzazione, etc.

4. Usa **ACF** per campi custom:
   - Link Tour Virtuale
   - Comune
   - Anno
   - Budget
   - Partner

### 6.4 Multilingua (Opzionale - Futuro)

**Plugin: WPML o Polylang**

1. Lingue target: IT (default), EN, FR, DE
2. Traduci:
   - Pagine principali
   - Menu
   - Footer
   - String plugin

### 6.5 SEO Optimization

**Yoast SEO:**

1. Installa **Yoast SEO**
2. Configura:
   - Titolo sito: `InnTour - Innovazione Digitale per i Borghi Italiani`
   - Meta description
   - Open Graph (social)
   - Schema.org markup

3. Ottimizza ogni pagina:
   - Focus keyword
   - Meta title/description
   - URL slug
   - Alt text immagini

---

## 🎯 Checklist Finale

Prima di andare online, verifica:

- [ ] Logo caricato e visibile in header/footer
- [ ] Tutte le sezioni create in Elementor
- [ ] CSS personalizzato importato
- [ ] Header e Footer custom attivi
- [ ] Menu navigazione configurato
- [ ] Form contatti funzionanti (test invio email)
- [ ] Link tour virtuali testati
- [ ] Responsive design verificato (mobile/tablet/desktop)
- [ ] SSL/HTTPS attivo
- [ ] Performance ottimizzata (plugin cache: WP Rocket o W3 Total Cache)
- [ ] Backup configurato (UpdraftPlus)
- [ ] Google Analytics installato
- [ ] Privacy Policy e Cookie Policy aggiunte

---

## 🆘 Problemi Comuni e Soluzioni

### Problema: Video YouTube non si vede in Elementor

**Soluzione:**
- Verifica URL YouTube (deve essere watch?v= non embed/)
- Abilita "Background Video" in Impostazioni Sezione
- Se continua a non funzionare, usa widget **Video** invece di sfondo sezione

### Problema: CSS personalizzato non viene applicato

**Soluzione:**
- Svuota cache (plugin + browser)
- Verifica che il CSS sia in Aspetto → Personalizza → CSS Aggiuntivo
- Controlla conflitti con tema (usa ispettore browser F12)

### Problema: Header/Footer non appaiono

**Soluzione:**
- Verifica che plugin Header & Footer Builder sia attivo
- Controlla Display Conditions (deve essere "Entire Site")
- Assicurati che il tema supporti header/footer custom

### Problema: Form non invia email

**Soluzione:**
- Verifica email in Impostazioni → Generali
- Installa plugin **WP Mail SMTP** per SMTP affidabile
- Test invio con Contact Form 7 → Email test

---

## 📞 Prossimi Passi

Dopo aver completato questa migrazione, posso aiutarti con:

1. **Ottimizzazione Design**: Raffinare ogni sezione nel dettaglio
2. **Content Creation**: Scrivere testi ottimizzati SEO
3. **Funzionalità Custom**: Sviluppare plugin personalizzati se necessario
4. **Integrazione API**: Collegare sistemi esterni (CRM, booking, etc.)
5. **Marketing Setup**: Newsletter, social integration, lead generation

---

**Buon lavoro con la migrazione! 🚀**

Se hai dubbi su qualsiasi passaggio, chiedi pure. Posso fornirti:
- Screenshot dettagliati
- Video tutorial
- Codice custom aggiuntivo
- Supporto troubleshooting

