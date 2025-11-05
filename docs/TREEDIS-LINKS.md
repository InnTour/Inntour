# Link Tour Virtuali Treedis - Configurazione

## 🎯 Link Corretti Tour Virtuali

Questo documento contiene i link corretti ai tour virtuali Treedis da utilizzare nei bottoni della sezione Progetti.

---

## ✅ LINK CONFERMATO

### 1. Lacedonia AR Hub

**URL Corretto:**
```
https://my.treedis.com/tour/lacedonia-vrcerogn
```

**Titolo Modal:** `Lacedonia AR Hub - Tour Virtuale 360°`

**Stato:** ✅ Verificato e funzionante

**Dove Usarlo:**
- Sezione: Progetti (Card 1)
- Widget: Button "Visita Tour Virtuale 360°"
- Elementor: Link URL (senza target="_blank")

---

## ❌ LINK DA CORREGGERE

### 2. MAVI Museo Virtuale

**URL Vecchio (ERRATO):**
```
https://my.treedis.com/tour/museomavi-zkmvh1jm
```

**URL Nuovo (CORRETTO):**
```
[DA FORNIRE - URL CORRETTO MAVI]
```

**Titolo Modal:** `MAVI Museo Virtuale - Tour 360°`

**Stato:** ⏳ In attesa URL corretto

**Note:**
- Verificare con il cliente il link corretto
- Testare il nuovo link prima di inserirlo in produzione
- Aggiornare sia in documentazione che in Elementor

---

### 3. Museo Guardia Lombardi

**URL Vecchio (ERRATO):**
```
https://my.treedis.com/tour/museoguardialombardi-hxajdvkq
```

**URL Nuovo (CORRETTO):**
```
[DA FORNIRE - URL CORRETTO GUARDIA LOMBARDI]
```

**Titolo Modal:** `Museo Guardia Lombardi - Tour 360°`

**Stato:** ⏳ In attesa URL corretto

**Note:**
- Verificare con il cliente il link corretto
- Controllare se il museo ha cambiato piattaforma o URL
- Testare accessibilità del link

---

## 📝 Come Trovare i Link Corretti

### Opzione 1: Chiedere al Cliente

**Domande da fare:**
```
1. Quali sono i link corretti dei tour virtuali di:
   - MAVI Museo Virtuale
   - Museo Guardia Lombardi

2. I tour sono ancora ospitati su Treedis o su altra piattaforma?

3. I tour sono pubblicamente accessibili o servono credenziali?
```

### Opzione 2: Verificare sul Sito Ufficiale

**Siti da Controllare:**
- Sito ufficiale MAVI
- Sito Comune di Guardia Lombardi
- Canali social dei musei
- Piattaforma Treedis (cerca per nome museo)

### Opzione 3: Contattare Treedis

Se i musei usano Treedis:
- Email supporto: support@treedis.com
- Chiedere URL pubblici dei tour per MAVI e Guardia Lombardi

---

## 🔧 Come Aggiornare i Link in WordPress

Una volta ottenuti i link corretti:

### STEP 1: Aggiorna in Elementor

1. **Vai in:** WordPress Dashboard → Pagine → Home → Modifica con Elementor

2. **Sezione Progetti:**
   - Scroll alla sezione "I Nostri Progetti"
   - Identifica le 3 project cards

3. **Card MAVI (Card 2):**
   - Click sul widget **Button** "Visita Tour Virtuale 360°"
   - Tab **Contenuto** → Link
   - **URL:** Incolla il nuovo link MAVI
   - **Apri in nuova finestra:** NO (disattivato)
   - Tab **Avanzate** → Attributi CSS personalizzati:
     ```
     data-modal-title|MAVI Museo Virtuale - Tour 360°
     ```

4. **Card Guardia Lombardi (Card 3):**
   - Stessi passaggi della Card 2
   - URL: Nuovo link Guardia Lombardi
   - Attributo: `data-modal-title|Museo Guardia Lombardi - Tour 360°`

5. **Salva e Pubblica**

### STEP 2: Testa i Link

1. **Vai sul sito** (frontend)
2. **Scroll a sezione Progetti**
3. **Click su ogni bottone tour:**
   - Verifica che si apra modal popup
   - Verifica che tour carichi correttamente
   - Verifica titolo corretto in header modal

4. **Test chiusura:**
   - X button
   - ESC key
   - Click fuori modal

---

## 🧪 Test Link Prima di Usarli

Prima di inserire i nuovi link in produzione:

### Checklist Verifica URL:

- [ ] URL è accessibile (apre pagina, non errore 404)
- [ ] Tour virtuale carica correttamente
- [ ] Non serve login/password per accedere
- [ ] HTTPS (non HTTP) per sicurezza
- [ ] URL è stabile (non temporaneo o di test)
- [ ] Treedis o piattaforma simile permette embedding in iframe
- [ ] Nessun header X-Frame-Options che blocchi iframe

### Come Testare:

**Test 1 - Browser Diretto:**
```
1. Copia URL nuovo
2. Incolla in barra browser
3. Premi Enter
4. Verifica tour carica
```

**Test 2 - Iframe Test:**
```html
1. Apri console browser (F12)
2. Tab Console
3. Incolla questo codice (sostituisci URL):

var modal = document.createElement('div');
modal.innerHTML = '<iframe src="URL_DA_TESTARE" style="width:800px;height:600px;border:1px solid #ccc;"></iframe>';
document.body.appendChild(modal);

4. Se vedi tour → OK
5. Se vedi errore "X-Frame-Options" → NON utilizzabile in iframe
```

**Test 3 - Modal System:**
```javascript
1. Vai sul sito inntour.it (con modal system installato)
2. Apri console (F12)
3. Digita:

InnTour.modal.open('URL_DA_TESTARE', 'Test Tour');

4. Se modal si apre e tour carica → OK
```

---

## 📋 Template Aggiornamento Documentazione

Quando ottieni i link corretti, aggiorna questi file:

### File da Aggiornare:

1. **TREEDIS-LINKS.md** (questo file)
   - Sostituisci `[DA FORNIRE]` con URL reale
   - Cambia stato da ⏳ a ✅

2. **WORDPRESS-MIGRATION.md**
   - Sezione 4.4: Creazione Pagine → Sezione Progetti
   - Aggiorna URL nelle istruzioni Card 2 e Card 3

3. **ELEMENTOR-BLUEPRINT.md**
   - Sezione: SEZIONE 4: PROGETTI
   - Aggiorna URL nei Widget Button per Card 2 e 3

4. **ASSETS-README.md**
   - Sezione: Sezione Progetti (Case Study)
   - Aggiorna link tour nelle istruzioni screenshot

---

## 🔄 Storia Modifiche

### 2024-11-05 - Iniziale
- ✅ Lacedonia: Link confermato funzionante
- ⏳ MAVI: In attesa URL corretto dal cliente
- ⏳ Guardia Lombardi: In attesa URL corretto dal cliente

### [DATA] - Aggiornamento MAVI
```
Vecchio: https://my.treedis.com/tour/museomavi-zkmvh1jm
Nuovo: [URL FORNITO]
Motivo: [Spiegazione cambio URL]
Aggiornato da: [Nome]
```

### [DATA] - Aggiornamento Guardia Lombardi
```
Vecchio: https://my.treedis.com/tour/museoguardialombardi-hxajdvkq
Nuovo: [URL FORNITO]
Motivo: [Spiegazione cambio URL]
Aggiornato da: [Nome]
```

---

## 📞 Contatti Riferimento

### Per Questioni Tour Virtuali:

**Treedis:**
- Website: https://www.treedis.com
- Email: support@treedis.com
- Telefono: [se disponibile]

**MAVI Museo:**
- Website: [se disponibile]
- Email: [se disponibile]
- Social: [se disponibile]

**Comune Guardia Lombardi:**
- Website: [se disponibile]
- Email: [se disponibile]
- Telefono: [se disponibile]

---

## 🚨 Nota Importante

**NON utilizzare link con `target="_blank"` o che aprono nuove schede!**

Il sistema modal è configurato per:
- Intercettare tutti i link contenenti `treedis.com`
- Aprirli automaticamente in popup 65% schermo
- Mantenere utente su inntour.it

**Requisiti per ogni link:**
- ✅ URL completo (https://...)
- ✅ Accessibile pubblicamente
- ✅ Nessun `target="_blank"` in Elementor
- ✅ Attributo `data-modal-title` per titolo custom
- ✅ Testato prima di pubblicare

---

## ✅ Quando Completato

Una volta ottenuti e testati i link corretti:

- [ ] Link MAVI aggiornato in Elementor
- [ ] Link Guardia Lombardi aggiornato in Elementor
- [ ] Entrambi i link testati (apertura modal + caricamento tour)
- [ ] Documentazione aggiornata (4 file)
- [ ] Cliente informato del cambio
- [ ] Git commit con messaggio: "fix: Update Treedis links for MAVI and Guardia Lombardi museums"
- [ ] Verifica funzionamento in produzione

---

**Ultimo Aggiornamento:** 2024-11-05
**Prossima Revisione:** Quando cliente fornisce link corretti
**Responsabile:** Claude Code Development Team
