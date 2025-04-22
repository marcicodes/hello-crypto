const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simulate a basic API route for crypto info
app.get('/', (req, res) => {
  res.send('Welcome to crypto-hello-node! 🚀');
});

app.get('/price', (req, res) => {
  res.json({
    symbol: 'BTC',
    price_usd: 68200.42, // mock data
    timestamp: new Date()
  });
});

app.listen(port, () => {
  console.log(`hello-crypto-node running at http://localhost:${port}`);
});
