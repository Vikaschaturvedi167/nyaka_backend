// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/AuthMiddleware');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../Controllers/ProductController');
const mongoose = require('mongoose');


// router.param('id', (req, res, next, id) => {
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ message: 'Invalid product ID' });
//     }
//     next();
// });

router.use(authMiddleware);

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
