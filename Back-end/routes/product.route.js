const express = require('express');
const Product = require('../models/product.model');
const authenticateToken = require('../middleware/auth.miidleware');
const router =express.Router();

// to add a product
router.post('/add-pro', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.sendStatus(403); 

  try {
      const { name, brand, rating, reviewsCount,category, highlights, description, mainImage, additionalImages } = req.body;

      if (!name || !brand || !description || !mainImage) {
          return res.status(400).json({ message: 'Name, brand, description, and main image are required' });
      }
      console.log("Request Body:", req.body);

      const product = new Product({
          name,
          brand,
          rating: rating || 0, 
          reviewsCount: reviewsCount || 0, 
          category,
          highlights: highlights || [], 
          description,
          mainImage,
          additionalImages: additionalImages || [] 
      });
      await product.save();

      res.status(201).json(product);
  } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ message: error.message });
  }
});

// Route to get products with optional sorting, filtering, and pagination
router.get('/view-pro', async (req, res) => {
    try {
        const { sortBy, order = 'asc', filterBy, filterValue, page = 1, limit = 10 } = req.query;

        const query = {};
        if (filterBy && filterValue) {
            query[filterBy] = filterValue;
        }

        const sort = {};
        if (sortBy) {
            sort[sortBy] = order === 'desc' ? -1 : 1;
        }

        const products = await Product.find(query)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const totalProducts = await Product.countDocuments(query);

        res.json({
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: Number(page),
            products
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

// to get a single product by id
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    try {
        const product = await Product.findByIdAndUpdate(id)
        if(!product) return res.sendStatus(404);
        res.json(product)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// to update a product
router.put('/:id', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
  
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) return res.sendStatus(404);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// to delete a product
router.delete('/:id', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
  
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) return res.sendStatus(404);
      res.json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;

