# Gioco

**Benvenuto nel gioco di guess number**
Esso è un progettino sull'indovinare il numero fornendo indizi.

## Richieste

- Genera un numero casuale tra 1 e 100
- L’utente inserisce numeri da terminale (usa readline di Node.js)
- Il programma risponde “Troppo alto”, “Troppo basso” o “Hai indovinato!”
- Conta il numero di tentativi e lo mostra a fine gioco
- Permette di giocare più partite senza riavviare il programma 

## Requisiti

- [Node.js](https://nodejs.org/) **v22.x** o superiore
- [npm](https://www.npmjs.com/)

Per verificare la versione:
```bash
node -v
npm -v
```

##  Installation 

```bash
git clone https://github.com/cherrieshx/ssgs-calc.git
cd ssgs-calc
npm install
```

## Running

```bash
cd src
npm start
```

## Testing

```bash
npm test
```
Il progetto ha una pipeline CI che esegue automaticamente il test con coverage, per visualizzare i dettagli si va su Github Actions e si seleziona
l'ultimo workflow eseguito con successo, inoltre si può scaricare il risultato del test sotto nella sezione Artifacts.
