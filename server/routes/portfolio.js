const express = require('express');
const router = express.Router();
const { getApiInfo, healthCheck, getPortfolioData } = require('../controllers/portfolioController');

router.get('/', getApiInfo);
router.get('/health', healthCheck);
router.get('/portfolio', getPortfolioData);

module.exports = router;
