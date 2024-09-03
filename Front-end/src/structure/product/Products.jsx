import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Select, Text, VStack, Button, HStack } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ProductCard from './ProductCard'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    setLoading(true);
    
    const apiUrl = 'https://onemg-1.onrender.com/product/view-pro';
  
    const params = {
      filterBy: 'category',
      filterValue: category === 'all' ? '' : category,
      sortBy,
      order,
      page,
      limit: 17,
    };
  
    
    try {
      const response = await axios.get(apiUrl, { params });
  
      const requestUrl = `${apiUrl}?${new URLSearchParams(params).toString()}`;
      
  
      if (response.data && response.data.products) {
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } else {
        console.warn('Unexpected API Response Format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error.response || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, sortBy, order, page]);


  return (
    <div>
      <Navbar />
      <Box p={5}>
        <VStack spacing={5} mb={5} align="start">
          <HStack spacing={4}>
            <Select onChange={(e) => setCategory(e.target.value)} value={category} style={{
          fontFamily: 'Clear Sans, Helvetica Neue, sans-serif',
          color: '#FF6F61',
          fontSize: '12px',
        }}>
              <option value="all">All Categories</option>
              <option value="Dental Care">Dental Care</option>
              <option value="Health Care">Health Care</option>
              <option value="Skin Care">Skin Care</option>
              <option value="Hair Care">Hair Care</option>
              <option value="Sexual Wellness">Sexual Wellness</option>
              <option value="Feminine Care">Feminine Care</option>
              <option value="Vitamins">Vitamins</option>
              <option value="Fitness Supplements">Supplements</option>
            </Select>

            <Select onChange={(e) => setSortBy(e.target.value)} value={sortBy} style={{
          fontFamily: 'Clear Sans, Helvetica Neue, sans-serif',
          color: '#FF6F61',
          fontSize: '12px',
        }}>
              <option value="name" >Name</option>
              <option value="price">Price</option>
            </Select>
          </HStack>

          <HStack spacing={4} mt={4}>
            <Button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
              Previous
            </Button>
            <Text>Page {page} of {totalPages}</Text>
            <Button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
              Next
            </Button>
          </HStack>
        </VStack>

        {loading ? (
          <Text>Loading products...</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <Text>No products available</Text>
            )}
          </SimpleGrid>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default Products;
