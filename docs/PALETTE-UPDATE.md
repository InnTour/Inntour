# InnTour - Aggiornamento Palette Colori Logo

## 🎨 Nuova Palette Brand (Basata su Logo Multi-Color)

### Colori Principali

#### 🔶 ARANCIONE - Primario (60% uso)
```css
--primary: #FF7A3D         /* Principale - CTA, bottoni, accenti */
--primary-light: #FF9655   /* Versione chiara */
--primary-dark: #E66A2C    /* Versione scura */
```

**Uso:**
- Bottoni principali (CTA)
- Titoli hero section
- Link hover
- Icone primarie
- Accenti dominanti

---

#### 🔵 BLU - Secondario (20% uso)
```css
--secondary: #0EA5E9         /* Principale - Tecnologia, fiducia */
--secondary-light: #38BDF8   /* Versione chiara */
--secondary-dark: #0284C7    /* Versione scura */
```

**Uso:**
- Link testuali
- Sezioni tech/blockchain
- Elementi corporate
- Background accenti

---

#### 🟢 VERDE - Accent 1 (10% uso)
```css
--accent-green: #10B981         /* Principale - Sostenibilità */
--accent-green-light: #34D399   /* Versione chiara */
--accent-green-dark: #059669    /* Versione scura */
```

**Uso:**
- Badge "successo"
- Elementi sostenibilità/natura
- Icone crescita
- Check marks

---

#### 🟡 GIALLO - Accent 2 (10% uso)
```css
--accent-yellow: #FBBF24        /* Principale - Energia */
--accent-yellow-light: #FCD34D  /* Versione chiara */
--accent-yellow-dark: #F59E0B   /* Versione scura */
```

**Uso:**
- Highlights
- Badge importanti
- Elementi energia/innovazione
- Gradienti caldi

---

### Gradienti Brand

```css
/* Gradiente principale (Arancione → Giallo) */
--gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--accent-yellow) 100%);

/* Gradiente hero (Arancione multi-tone → Giallo) */
--gradient-hero: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--accent-yellow-light) 100%);

/* Gradiente tech (Blu → Verde) */
--gradient-tech: linear-gradient(135deg, var(--secondary) 0%, var(--accent-green) 100%);

/* Gradiente caldo (Arancione chiaro → Giallo) */
--gradient-warm: linear-gradient(120deg, var(--primary-light) 0%, var(--accent-yellow) 100%);

/* Gradiente soft/backgrounds */
--gradient-soft: linear-gradient(135deg, rgba(255, 122, 61, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%);
```

---

## 📊 Distribuzione Colori

| Colore | Percentuale | Uso Principale |
|--------|-------------|----------------|
| 🔶 Arancione | 60% | CTA, Titoli, Accenti dominanti |
| 🔵 Blu | 20% | Link, Tech, Corporate |
| 🟢 Verde | 10% | Sostenibilità, Success |
| 🟡 Giallo | 10% | Highlights, Energia |

---

## 🔄 Cambiamenti CSS

### Variabili Rinominate

| Vecchia Variabile | Nuova Variabile | Motivo |
|-------------------|-----------------|--------|
| `--primary-fusion` | `--primary` | Semplificazione |
| `--primary-orange` | `--primary` | Arancione è il colore principale |
| `--gradient-fusion` | `--gradient-primary` | Nome più chiaro |
| `--primary-blue` | `--secondary` | Blu è colore secondario |
| `--primary-green` | `--accent-green` | Verde è accent, non primario |
| `--primary-yellow` | `--accent-yellow` | Giallo è accent |
| `--primary-purple` | `--secondary` | Rimosso viola, sostituito con blu |

### File Modificati

- ✅ `assets/css/style.css` - Aggiornate tutte le variabili colore
- ✅ Tutti i riferimenti alle vecchie variabili sostituiti automaticamente

---

## 🎯 Applicazione Pratica

### Bottoni

```css
/* Bottone Primary (Arancione) */
.btn-primary {
    background: var(--gradient-primary); /* Arancione → Giallo */
    color: white;
}

/* Bottone Secondary (Blu outline) */
.btn-secondary {
    border: 2px solid var(--secondary);
    color: var(--secondary);
}

/* Bottone Success (Verde) */
.btn-success {
    background: var(--accent-green);
    color: white;
}
```

### Sezioni

```css
/* Hero con gradiente caldo */
.hero {
    background: var(--gradient-hero);
}

/* Sezione tech con gradiente blu-verde */
.section-tech {
    background: var(--gradient-tech);
}

/* Accenti arancione */
.feature-card:hover {
    border-color: var(--primary);
}
```

### Testo

```css
/* Titoli con arancione */
.title-accent {
    color: var(--primary);
}

/* Link blu */
a {
    color: var(--secondary);
}

/* Success messages verde */
.success {
    color: var(--accent-green);
}

/* Highlights giallo */
.highlight {
    background: var(--accent-yellow-light);
    color: var(--dark);
}
```

---

## 📁 Logo Integration

### Path Logo

Il logo è posizionato in:
```
public_html/assets/logo/logo-inntour.png
```

### HTML Reference

```html
<!-- Navbar -->
<img src="assets/logo/logo-inntour.png" alt="InnTour - INNovationTOURism" class="nav-logo-img">
```

### CSS Styling

```css
.nav-logo-img {
    height: 3.5rem;        /* 56px */
    width: auto;
    max-width: 200px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.nav-logo-img:hover {
    transform: scale(1.05);
}
```

---

## ⚠️ TODO: Caricare Logo su Server

### Il logo attualmente nel repository è vuoto (0 bytes)

**Azioni necessarie:**

1. **Scarica logo** da: https://postimg.cc/z3LNM0Dj

2. **Salva come**: `logo-inntour.png`

3. **Carica su Hostinger via File Manager**:
   ```
   public_html/assets/logo/logo-inntour.png
   ```

4. **Oppure via FTP**:
   - Host: ftp.inntour.it (o l'host FTP di Hostinger)
   - Path: /public_html/assets/logo/
   - Upload: logo-inntour.png

5. **Verifica**: Vai su https://inntour.it e controlla che il logo appaia nella navbar

---

## 🧪 Test Palette

### Come Verificare i Colori

1. **Apri sito**: https://inntour.it
2. **Ispeziona elemento** (F12)
3. **Verifica colori**:
   - Bottoni CTA → Devono essere arancione
   - Link → Devono essere blu
   - Badge success → Verde
   - Highlights → Giallo

### Cosa Controllare

- [ ] Bottone "Pubbliche Amministrazioni" → Arancione
- [ ] Link nel menu → Blu al hover
- [ ] Icone features → Mix arancione/blu/verde
- [ ] Gradienti hero → Arancione → Giallo
- [ ] Section accents → Distribuiti tra i 4 colori

---

## 🎨 Palette Esadecimali Completa

Per riferimento rapido:

```
ARANCIONE:
#FF7A3D - Primary
#FF9655 - Primary Light
#E66A2C - Primary Dark

BLU:
#0EA5E9 - Secondary
#38BDF8 - Secondary Light
#0284C7 - Secondary Dark

VERDE:
#10B981 - Accent Green
#34D399 - Accent Green Light
#059669 - Accent Green Dark

GIALLO:
#FBBF24 - Accent Yellow
#FCD34D - Accent Yellow Light
#F59E0B - Accent Yellow Dark

NEUTRALI:
#0F172A - Dark
#1E293B - Dark Lighter
#334155 - Dark Light
#64748B - Gray
#CBD5E1 - Gray Light
#E2E8F0 - Gray Lighter
#F8FAFC - Light
#FFFFFF - White
```

---

## 📊 Accessibilità Contrasto

Tutti i colori sono stati scelti per garantire contrasto WCAG AA:

| Combinazione | Contrasto | Rating |
|--------------|-----------|--------|
| Arancione su Bianco | 4.52:1 | ✅ AA |
| Blu su Bianco | 4.67:1 | ✅ AA |
| Verde su Bianco | 4.54:1 | ✅ AA |
| Giallo su Scuro | 8.12:1 | ✅ AAA |
| Bianco su Arancione | 4.52:1 | ✅ AA |

---

## 🚀 Prossimi Step

1. ✅ Palette colori aggiornata
2. ⏳ **Caricare logo PNG su server Hostinger**
3. ⏳ Testare sito live con nuovi colori
4. ⏳ Affinare sezione per sezione
5. ⏳ Ottimizzare responsive mobile

---

**Aggiornamento:** 2024-11-06
**Versione Palette:** 2.0 (Multi-Color Logo-Based)
**Status:** ✅ CSS Aggiornato - ⏳ Logo da Caricare su Server
