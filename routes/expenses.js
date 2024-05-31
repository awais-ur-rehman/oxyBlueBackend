const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// API endpoint to fetch expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API endpoint to add a new expense
router.post('/', async (req, res) => {
  const { date, category, amount, comment } = req.body;
  const newExpense = new Expense({ date, category, amount, comment });

  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
