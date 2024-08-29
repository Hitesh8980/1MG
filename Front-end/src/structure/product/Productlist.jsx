import React, { useState } from "react";
import { Box, SimpleGrid, Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import ProductCard from "./Productcard";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; 

  const handleNextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(products.length / itemsPerPage) - 1)
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const paginatedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box p={30}>
      <Flex justifyContent="space-between" mb="4">
        <Text fontSize="2xl" fontWeight="bold">
          Products
        </Text>
        <Box>
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            aria-label="Previous Page"
            mr="2"
          />
          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={handleNextPage}
            disabled={(currentPage + 1) * itemsPerPage >= products.length}
            aria-label="Next Page"
          />
        </Box>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
        {paginatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
