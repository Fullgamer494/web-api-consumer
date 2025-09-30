const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const API_QUOTES_TARGET = 'https://zenquotes.io';
const API_FBI_TARGET = 'https://api.fbi.gov';
const API_PERSON_TARGET = 'https://randomuser.me';

const app = express();

app.use('/zen', createProxyMiddleware({ 
    target: API_QUOTES_TARGET,
    changeOrigin: true,
    pathRewrite: { '^/zen': '' },
}));

app.use('/fbi', createProxyMiddleware({ 
    target: API_FBI_TARGET,
    changeOrigin: true,
    pathRewrite: { '^/fbi': '' },
}));

app.use('/person', createProxyMiddleware({ 
    target: API_PERSON_TARGET,
    changeOrigin: true,
    pathRewrite: { '^/person': '' },
}));

app.use(express.static('./'));

const port = 3000;

app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});