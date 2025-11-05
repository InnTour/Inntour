# InnTour Website - Deployment Guide

Guida completa al deployment del sito InnTour su diverse piattaforme.

## 📋 Indice

- [Prerequisiti](#prerequisiti)
- [Opzione 1: VPS Hostinger](#opzione-1-vps-hostinger-raccomandato)
- [Opzione 2: Hosting Condiviso](#opzione-2-hosting-condiviso)
- [Opzione 3: WordPress](#opzione-3-wordpress)
- [Opzione 4: Netlify/Vercel](#opzione-4-netlifyvercel-gratuito)
- [Configurazione DNS](#configurazione-dns)
- [SSL/HTTPS](#sslhttps)
- [Backup](#backup)
- [Monitoraggio](#monitoraggio)

---

## 🎯 Prerequisiti

### Files da Preparare

Prima del deployment, assicurati di aver personalizzato:

- [ ] Email: `info@inntour.it` → tua email reale
- [ ] Telefono: `+39 XXX XXX XXXX` → numero reale
- [ ] Indirizzo: "Aree Interne - Italia" → indirizzo completo
- [ ] Social media links nel footer
- [ ] Immagini progetti aggiunte (se disponibili)
- [ ] Form backend configurato

### Tool Necessari

- **FTP Client**: FileZilla (gratuito) o Cyberduck
- **SSH Client**: Terminal (Mac/Linux) o PuTTY (Windows)
- **Text Editor**: VS Code, Sublime Text

---

## Opzione 1: VPS Hostinger (Raccomandato)

### Perché VPS?

✅ **Performance massime** (< 1s load time)
✅ **Controllo totale** su configurazione
✅ **SSL gratuito** con Let's Encrypt
✅ **Scalabilità** per crescita futura
✅ **Costo**: ~€4-8/mese

### Step 1: Accesso VPS

#### Via hPanel (Interfaccia Web)

1. Login su Hostinger: https://hpanel.hostinger.com
2. Vai su **VPS** → Seleziona il tuo VPS
3. Click su **Gestione File** o **Terminal**

#### Via SSH (Raccomandato)

```bash
# Connetti al VPS
ssh root@your-vps-ip

# Inserisci password quando richiesta
```

### Step 2: Setup Ambiente

```bash
# Aggiorna sistema
apt update && apt upgrade -y

# Installa Nginx
apt install nginx -y

# Installa Certbot per SSL
apt install certbot python3-certbot-nginx -y

# Verifica installazione
nginx -v
```

### Step 3: Configurazione Nginx

```bash
# Crea directory sito
mkdir -p /var/www/inntour.it
cd /var/www/inntour.it

# Imposta permissions
chown -R www-data:www-data /var/www/inntour.it
chmod -R 755 /var/www/inntour.it
```

#### Crea Virtual Host

```bash
nano /etc/nginx/sites-available/inntour.it
```

Incolla questa configurazione:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name inntour.it www.inntour.it;
    root /var/www/inntour.it;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    gzip_min_length 1000;

    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Main location
    location / {
        try_files $uri $uri/ =404;
    }

    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
}
```

Salva: `CTRL+X` → `Y` → `ENTER`

#### Attiva il sito

```bash
# Crea symbolic link
ln -s /etc/nginx/sites-available/inntour.it /etc/nginx/sites-enabled/

# Testa configurazione
nginx -t

# Riavvia Nginx
systemctl restart nginx
```

### Step 4: Upload Files

#### Opzione A: Via Git (Migliore)

```bash
# Clona repository (se hai git setup)
cd /var/www/inntour.it
git clone https://github.com/yourusername/inntour-website.git .
```

#### Opzione B: Via SFTP

1. Apri FileZilla
2. Host: `sftp://your-vps-ip`
3. Username: `root`
4. Password: la tua password VPS
5. Porta: `22`
6. Click **Connetti**
7. Naviga a `/var/www/inntour.it`
8. Upload tutti i file dal tuo computer

### Step 5: SSL Certificate (HTTPS)

```bash
# Ottieni certificato SSL gratuito
certbot --nginx -d inntour.it -d www.inntour.it

# Segui le istruzioni:
# 1. Inserisci email
# 2. Accetta Terms of Service
# 3. Scegli opzione 2 (redirect HTTP → HTTPS)

# Auto-rinnovo (già configurato)
certbot renew --dry-run
```

### Step 6: Verifica

Visita: `https://inntour.it`

✅ Sito caricato
✅ HTTPS funzionante (lucchetto verde)
✅ Tutte le sezioni visibili
✅ Form funzionante

---

## Opzione 2: Hosting Condiviso

### Per cPanel (Hostinger, SiteGround, etc.)

#### Step 1: Accesso cPanel

1. Login su cPanel: `https://tuodominio.it/cpanel`
2. Username e password fornite da hosting provider

#### Step 2: File Manager

1. Click su **File Manager**
2. Naviga a `public_html` (o `www` o `htdocs`)
3. **Svuota la directory** (elimina index.html di default)

#### Step 3: Upload Files

**Opzione A: Upload diretto**
1. Click su **Upload** (in alto)
2. Seleziona tutti i file dal tuo computer
3. Attendi completamento upload

**Opzione B: Via FTP**
1. In cPanel, vai su **FTP Accounts**
2. Crea account FTP
3. Usa FileZilla per connettere
4. Upload tutti i file

#### Step 4: Verifica Permissions

1. Seleziona tutti i file
2. Click destro → **Change Permissions**
3. Files: `644`
4. Directories: `755`

#### Step 5: SSL Setup

1. In cPanel, vai su **SSL/TLS Status**
2. Seleziona il tuo dominio
3. Click su **Run AutoSSL**
4. Attendi completamento (2-5 min)

#### Step 6: Force HTTPS (Opzionale)

Crea/modifica `.htaccess` in `public_html`:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Opzione 3: WordPress

### Come Tema Custom

#### Step 1: Prepara Files

```bash
# Crea cartella tema
mkdir inntour-theme
cd inntour-theme

# Crea style.css (richiesto da WordPress)
```

Contenuto `style.css`:

```css
/*
Theme Name: InnTour
Theme URI: https://inntour.it
Author: InnTour Team
Author URI: https://inntour.it
Description: Sito ufficiale InnTour - INNovationTOURism
Version: 1.0.0
License: Proprietary
Text Domain: inntour
*/

/* Include main stylesheet */
@import url('../assets/css/style.css');
```

#### Step 2: Crea Template Files

**index.php**:
```php
<?php
/**
 * Main template file
 * @package InnTour
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Incolla tutto il contenuto del body di index.html qui -->

<?php wp_footer(); ?>
</body>
</html>
```

**functions.php**:
```php
<?php
/**
 * Theme functions
 */

function inntour_enqueue_scripts() {
    // CSS
    wp_enqueue_style('inntour-style', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0');

    // JavaScript
    wp_enqueue_script('inntour-script', get_template_directory_uri() . '/assets/js/script.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'inntour_enqueue_scripts');
```

#### Step 3: Upload a WordPress

1. Comprimi cartella tema: `inntour-theme.zip`
2. WordPress Admin → **Aspetto** → **Temi**
3. Click **Aggiungi Nuovo** → **Carica Tema**
4. Seleziona `inntour-theme.zip`
5. Click **Installa Ora** → **Attiva**

### Come Pagina Custom

1. **Crea Pagina**:
   - WordPress Admin → Pagine → Aggiungi Nuova
   - Titolo: "Home"
   - Editor: Modalità "Codice" o "HTML"

2. **Incolla HTML**:
   - Copia tutto il contenuto `<body>` da `index.html`
   - Incolla nell'editor
   - Pubblica

3. **Imposta come Homepage**:
   - Impostazioni → Lettura
   - "La tua homepage visualizza": **Una pagina statica**
   - Homepage: Seleziona "Home"
   - Salva modifiche

---

## Opzione 4: Netlify/Vercel (Gratuito)

### Netlify (Raccomandato per Static Sites)

#### Via Drag & Drop

1. Vai su https://app.netlify.com/drop
2. Trascina la cartella progetto
3. Attendi deployment (30 secondi)
4. Ottieni URL: `random-name.netlify.app`

#### Via Git (Meglio)

```bash
# Installa Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /path/to/inntour-website
netlify init
netlify deploy --prod
```

#### Custom Domain

1. Netlify Dashboard → **Domain Settings**
2. **Add Custom Domain** → `inntour.it`
3. Aggiorna DNS (vedi sezione DNS)
4. SSL automatico (attivo dopo ~24h)

### Vercel

```bash
# Installa Vercel CLI
npm install -g vercel

# Deploy
cd /path/to/inntour-website
vercel

# Follow prompts
# - Setup: Yes
# - Project name: inntour
# - Directory: ./
```

#### Custom Domain

1. Vercel Dashboard → **Settings** → **Domains**
2. **Add** → `inntour.it`
3. Segui istruzioni DNS

---

## 🌐 Configurazione DNS

### Puntare Dominio al Server

#### Per VPS (esempio IP: 123.45.67.89)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 123.45.67.89 | 3600 |
| A | www | 123.45.67.89 | 3600 |

#### Per Netlify

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 3600 |
| CNAME | www | inntour.netlify.app | 3600 |

#### Per Vercel

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Propagazione DNS**: 1-48 ore (solitamente 2-4 ore)

---

## 🔒 SSL/HTTPS

### Let's Encrypt (Gratuito)

#### VPS/Nginx

```bash
certbot --nginx -d inntour.it -d www.inntour.it
```

#### cPanel/Hosting Condiviso

1. cPanel → **SSL/TLS Status**
2. **Run AutoSSL**

### Force HTTPS Redirect

#### Nginx

Già incluso nella configurazione sopra.

#### Apache (.htaccess)

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 💾 Backup

### VPS

```bash
# Backup manuale
tar -czf inntour-backup-$(date +%Y%m%d).tar.gz /var/www/inntour.it

# Backup automatico (cron job)
crontab -e

# Aggiungi questa riga (backup giornaliero alle 2AM)
0 2 * * * tar -czf /backups/inntour-$(date +\%Y\%m\%d).tar.gz /var/www/inntour.it
```

### cPanel

1. **Backup** (icona in cPanel)
2. **Scarica Backup Home Directory**
3. Conserva localmente

### Netlify/Vercel

- Backup automatico tramite Git
- Ogni push = nuovo deployment
- Rollback disponibile

---

## 📊 Monitoraggio

### Google Analytics

Aggiungi prima di `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. https://search.google.com/search-console
2. **Aggiungi Proprietà** → `inntour.it`
3. Verifica tramite HTML file o DNS
4. Submit sitemap: `https://inntour.it/sitemap.xml`

### Uptime Monitoring

- **UptimeRobot**: https://uptimerobot.com (gratuito)
- **Pingdom**: https://pingdom.com
- **StatusCake**: https://statuscake.com

---

## ✅ Checklist Post-Deployment

- [ ] Sito caricato e raggiungibile
- [ ] HTTPS attivo (lucchetto verde)
- [ ] Tutte le sezioni visualizzate correttamente
- [ ] Form funzionante (test invio)
- [ ] Immagini caricate
- [ ] Link footer funzionanti
- [ ] Mobile responsive verificato
- [ ] Performance > 85 (PageSpeed)
- [ ] Google Analytics attivo
- [ ] Search Console verificato
- [ ] Backup configurato
- [ ] DNS propagato
- [ ] Email/telefono corretti

---

## 🆘 Troubleshooting

### Problema: Sito non raggiungibile

**Causa**: DNS non propagato

**Soluzione**: Attendi 2-48 ore. Verifica DNS:
```bash
dig inntour.it
nslookup inntour.it
```

### Problema: CSS/JS non caricati

**Causa**: Percorsi file errati

**Soluzione**: Verifica percorsi in `index.html`:
```html
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js"></script>
```

### Problema: Form non invia

**Causa**: Backend non configurato

**Soluzione**: Configura Formspree o EmailJS (vedi CONTENT-UPDATE-GUIDE.md)

### Problema: SSL non attivo

**Causa**: Certificato non installato

**Soluzione VPS**:
```bash
certbot --nginx -d inntour.it -d www.inntour.it
```

**Soluzione cPanel**: Run AutoSSL

---

## 📞 Supporto

Problemi con il deployment?

- **Email**: info@inntour.it
- **Documentazione**: Controlla `CONTENT-UPDATE-GUIDE.md`

---

**Buon deployment! 🚀**
