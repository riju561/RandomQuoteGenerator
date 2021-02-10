const express = require('express')
const Quote = require('../models/model.js')
const router = new express.Router()

router.post('/quotes', async (req, res) => {
    const quote = new Quote(req.body)
    try {
        await quote.save()
        res.status(201).send(quote)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/quotes', async (req, res) => {
    try {
        const quotes = await Quote.find({})
        let rand = Math.floor((Math.random() * (quotes.length - 1)) + 1);
        res.send(quotes[rand]);
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router