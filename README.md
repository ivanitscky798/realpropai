## 📦 Struttura del progetto

```
realprop_demo_full/
├── frontend/      # React app per dashboard interattiva
│   ├── src/
│   └── package.json
├── backend/       # API Express con dati mock e scraping
│   ├── index.js
│   ├── Dockerfile
│   └── render.yaml
├── .gitignore     # File esclusioni Git
```

---

## 🚀 Deploy

### Frontend su Vercel
1. Carica la cartella `frontend` su GitHub
2. Collega il repo a Vercel (https://vercel.com/import)
3. Imposta build command: `npm run build`
4. Output directory: `build`

### Backend su Render
1. Vai su [render.com](https://render.com/)
2. Clicca "New Web Service"
3. Seleziona il repo e usa il Dockerfile già incluso
4. Porta: `3002`

---

## ⚙️ Scripts utili
Frontend:
```bash
npm install
npm start
```
Backend:
```bash
cd backend
npm install
node index.js
```

---

## 📂 .gitignore consigliato
```
# Node.js
node_modules/
.env
.DS_Store

# Log
logs
*.log
npm-debug.log*

# Build
build/
dist/
coverage/

# Sistema
*.swp
*.tmp
```

---

## 📄 Licenza
© 2025 RealProp AI - Tutti i diritti riservati.
# realpropai
