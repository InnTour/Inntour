# Link Tour Virtuali - Riferimento Rapido per Elementor

## 🎯 I 3 Link Corretti da Usare

Copia e incolla questi link esatti in Elementor per i bottoni della sezione Progetti.

---

## 1️⃣ Lacedonia AR Hub

**URL da inserire in Elementor:**
```
https://my.treedis.com/tour/lacedonia-vrcerogn
```

**Configurazione Button Elementor:**
- Widget: Button
- Testo: `🔍 Visita Tour Virtuale 360°`
- Link URL: `https://my.treedis.com/tour/lacedonia-vrcerogn`
- Apri in nuova finestra: **NO** ❌
- Nofollow: NO

**Avanzate → Attributi CSS Personalizzati:**
```
data-modal-title|Lacedonia AR Hub - Tour Virtuale 360°
```

**Titolo che appare nel modal:** "Lacedonia AR Hub - Tour Virtuale 360°"

---

## 2️⃣ MAVI Museo Virtuale

**URL da inserire in Elementor:**
```
https://my.treedis.com/tour/mavi-museo-antropologico-visivo-irpino-e639d163
```

**Configurazione Button Elementor:**
- Widget: Button
- Testo: `🔍 Visita Tour Virtuale 360°`
- Link URL: `https://my.treedis.com/tour/mavi-museo-antropologico-visivo-irpino-e639d163`
- Apri in nuova finestra: **NO** ❌
- Nofollow: NO

**Avanzate → Attributi CSS Personalizzati:**
```
data-modal-title|MAVI Museo Virtuale - Tour 360°
```

**Titolo che appare nel modal:** "MAVI Museo Virtuale - Tour 360°"

---

## 3️⃣ Museo Guardia Lombardi

**URL da inserire in Elementor:**
```
https://www.museoguardialombardi.it/
```

**Configurazione Button Elementor:**
- Widget: Button
- Testo: `🌐 Visita Sito Museo` (oppure `🔍 Esplora Museo Virtuale`)
- Link URL: `https://www.museoguardialombardi.it/`
- Apri in nuova finestra: **NO** ❌
- Nofollow: NO

**Avanzate → Attributi CSS Personalizzati:**
```
data-modal-title|Museo Guardia Lombardi - Sito Ufficiale
```

**Titolo che appare nel modal:** "Museo Guardia Lombardi - Sito Ufficiale"

**Nota:** Questo link apre il sito ufficiale del museo (che include tour virtuale integrato)

---

## ⚡ Procedura Rapida in Elementor

### Per ogni Card Progetto (totale 3):

1. **Apri Elementor:**
   - Dashboard → Pagine → Home → Modifica con Elementor

2. **Vai alla Sezione Progetti:**
   - Scroll alla sezione "I Nostri Progetti"

3. **Seleziona Card:**
   - Click sulla card del progetto (es. Card Lacedonia)

4. **Trova il Button Widget:**
   - Click sul widget Button "Visita Tour Virtuale"

5. **Tab Contenuto → Link:**
   - **URL:** Incolla il link corretto (vedi sopra)
   - **Apri in nuova finestra:** Disattiva (toggle OFF)
   - **Nofollow:** Disattiva

6. **Tab Avanzate:**
   - Scroll a "Attributi CSS Personalizzati"
   - Click su "+ Aggiungi elemento"
   - **Chiave:** `data-modal-title`
   - **Valore:** (copia da sopra, es. `Lacedonia AR Hub - Tour Virtuale 360°`)

7. **Salva:**
   - Click "Aggiorna" in basso

8. **Ripeti per le altre 2 cards**

---

## ✅ Checklist Verifica

Dopo aver configurato tutti e 3 i link:

- [ ] **Card 1 - Lacedonia:**
  - [ ] URL: `https://my.treedis.com/tour/lacedonia-vrcerogn`
  - [ ] Apri in nuova finestra: NO
  - [ ] Attributo data-modal-title aggiunto

- [ ] **Card 2 - MAVI:**
  - [ ] URL: `https://my.treedis.com/tour/mavi-museo-antropologico-visivo-irpino-e639d163`
  - [ ] Apri in nuova finestra: NO
  - [ ] Attributo data-modal-title aggiunto

- [ ] **Card 3 - Guardia Lombardi:**
  - [ ] URL: `https://www.museoguardialombardi.it/`
  - [ ] Apri in nuova finestra: NO
  - [ ] Attributo data-modal-title aggiunto

- [ ] **Pubblicato in Elementor**
- [ ] **Cache svuotata** (se hai plugin cache)

---

## 🧪 Test Funzionamento

1. **Vai sul sito** (frontend, non editor Elementor)

2. **Scroll alla sezione Progetti**

3. **Test Card Lacedonia:**
   - Click su "Visita Tour Virtuale 360°"
   - Si apre modal popup? ✅
   - Titolo header: "Lacedonia AR Hub - Tour Virtuale 360°"? ✅
   - Tour carica correttamente? ✅
   - URL browser rimane `inntour.it`? ✅
   - Click X → si chiude? ✅

4. **Test Card MAVI:**
   - Stessi controlli della Card Lacedonia
   - Tour Treedis MAVI carica? ✅

5. **Test Card Guardia Lombardi:**
   - Stessi controlli
   - Sito museo carica? ✅

6. **Test Responsive:**
   - Desktop: Modal 65% schermo ✅
   - Tablet: Modal 85% schermo ✅
   - Mobile: Modal 95% schermo ✅

---

## 🚨 Cosa NON Fare

❌ **NON abilitare "Apri in nuova finestra"**
- Il sistema modal si basa sull'intercettazione click
- Se abiliti target="_blank", link si apre in nuova scheda invece che in modal

❌ **NON usare link diversi da questi**
- Ho già testato e verificato questi 3 link
- Link diversi potrebbero non funzionare o essere obsoleti

❌ **NON saltare l'attributo data-modal-title**
- Senza questo attributo, il titolo modal sarà generico
- Con l'attributo, ogni modal ha il titolo specifico del museo

---

## 💡 Suggerimenti Testo Bottoni

Puoi personalizzare il testo dei bottoni:

**Per Lacedonia e MAVI (tour Treedis):**
- `🔍 Visita Tour Virtuale 360°` (consigliato)
- `👁️ Esplora in 3D`
- `🎯 Inizia Tour Virtuale`
- `🌐 Tour Interattivo 360°`

**Per Guardia Lombardi (sito museo):**
- `🌐 Visita Sito Museo` (consigliato)
- `🏛️ Scopri il Museo`
- `📍 Sito Ufficiale`
- `🔍 Esplora Collezione`

L'emoji è opzionale ma rende il button più accattivante! 😊

---

## 🎨 Personalizzazioni Opzionali

### Cambiare icona button

In Elementor, widget Button:
- Tab Contenuto → Button
- Icona: Scegli icona personalizzata
- Posizione icona: Prima o Dopo testo

**Icone consigliate:**
- Font Awesome: `fas fa-external-link-alt`
- Font Awesome: `fas fa-eye`
- Font Awesome: `fas fa-vr-cardboard`
- Elementor Icons: `eicon-preview-medium`

### Cambiare colore button

- Tab Stile → Button
- Background Type: Gradiente
- Colore 1: `#F7A93D` (fusion orange)
- Colore 2: `#FFB84D` (fusion yellow)

(Già incluso nel CSS globale, ma puoi personalizzare per singolo button)

---

## 📞 Supporto

Se dopo aver configurato i link:

**Link non si apre in modal ma in nuova scheda:**
- Verifica che JS inntour-modal.js sia installato
- Console (F12) deve mostrare "✓ InnTour Modal System attivo"
- Verifica che "Apri in nuova finestra" sia disattivato

**Modal si apre ma resta bianco:**
- Verifica URL è corretto (copia-incolla esatto da sopra)
- Apri URL direttamente nel browser per testare
- Controlla Console (F12) per errori JavaScript

**Titolo modal generico invece che specifico:**
- Verifica attributo CSS personalizzato aggiunto correttamente
- Formato: `data-modal-title|Titolo Qui` (separatore pipe `|`)

---

## ✅ Link Pronti!

Hai tutti e 3 i link verificati e pronti per essere usati in Elementor.

**Tempo stimato configurazione:** 5-10 minuti (tutti e 3 i button)

Buon lavoro! 🚀
