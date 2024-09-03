import {
    Box,
    Flex,
    HStack,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import React from 'react';
  
  const Navbar3 = () => {
    const menuItems = [
      {
        title: 'Health Resource Center',
        subcategories: [
          { name: 'All Diseases', link: '#' },
          { name: 'All Medicines', link: '#' },
          { name: 'Medicines by Therapeutic Class', link: '#' },
        ],
      },
      {
        title: 'Vitamins & Nutrition',
        subcategories: [
          { name: 'Multivitamins', link: '#' },
          { name: 'Kids', link: '#' },
          { name: 'Women', link: '#' },
          { name: 'Sports', link: '#' },
          { name: 'Vegetarian', link: '#' },
          { name: 'Omega & Fish Oil', link: '#' },
          { name: 'Fish Oil', link: '#' },
          { name: 'Cod Liver Oil', link: '#' },
          { name: 'Flax Seed Oil', link: '#' },
          { name: 'Calciums ', link: '#' },
          { name: 'Minerals', link: '#' },
          { name: 'Iron', link: '#' },
          { name: 'Vitamin B', link: '#' },
          { name: 'Vitamin C', link: '#' },
        ],
      },
      {
        title: 'Fitness Supplements',
        subcategories: [
          { name: 'Whey Protein', link: '#' },
          { name: 'Fat Burners', link: '#' },
          { name: 'Protein Supplements', link: '#' },
          { name: 'Workout Essentials', link: '#' },
          { name: 'Mass Gainers', link: '#' },
          { name: 'Amino Acids', link: '#' },
          { name: 'Arginine', link: '#' },
          { name: 'BCAA', link: '#' },
          { name: 'Glutathione', link: '#' },
          { name: 'Creatine', link: '#' },
        ],
      },
      {
        title: 'Stomach Care',
        subcategories: [
          { name: 'Constipation', link: '#' },
          { name: 'Acidity', link: '#' },
          { name: 'Pre and Probiotics', link: '#' },
          { name: 'Indigestion', link: '#' },
          { name: 'Diarrhoea', link: '#' },
          { name: 'Bloating', link: '#' },
        ],
      },
      {
        title: 'Feminine Care',
        subcategories: [
          { name: 'Sanitary Pads', link: '#' },
          { name: 'Breast Pumps', link: '#' },
          { name: 'Hair Removal', link: '#' },
          { name: 'Intimate Wash & Wipes', link: '#' },
          { name: 'Toilet Sanitaries', link: '#' },
          { name: 'Menstrual Cup & Tampons', link: '#' },
          { name: 'Tampons', link: '#' },
          { name: 'Menstrual Cups', link: '#' },
        ],
      },
      {
        title: 'Healthy Snacks',
        subcategories: [
          { name: 'Granola & Protein Bars', link: '#' },
          { name: 'Peanut Butter', link: '#' },
          { name: 'Honey', link: '#' },
          { name: 'Dry Fruits & Berries', link: '#' },
          { name: 'Cookies', link: '#' },
        ],
      },
      {
        title: 'Nutritional Drinks',
        subcategories: [
          { name: 'Green Tea & Herbal Tea', link: '#' },
          { name: 'Adult Daily Nutrition', link: '#' },
          { name: 'Kids Nutrition (2-15 Yrs)', link: '#' },
          { name: 'Women Nutrition', link: '#' },
          { name: 'Apple Cider Vinegar', link: '#' },
          { name: 'Diabetes Nutrition', link: '#' },
          { name: 'Specialized Nutrition', link: '#' },
          { name: 'Green Coffee', link: '#' },
        ],
      },
      {
        title: 'Diabetes',
        subcategories: [
          { name: 'Blood Sugar Support', link: '#' },
          { name: 'Healthy Snacks', link: '#' },
          { name: 'Vitamins', link: '#' },
        ],
      },
      {
        title: 'Immunity Boosters',
        subcategories: [
          { name: 'Chyawanparash', link: '#' },
          { name: 'Antioxidant Supplements', link: '#' },
          { name: 'Ayurvedic Supplements', link: '#' },
          { name: 'Herbal Tea', link: '#' },
        ],
      },
    ];
  
    return (
      <Box bg="white" p={1}>
        <Flex align="center" justify="space-between" mx={10}>
          <HStack spacing={5} justifyContent={'space-evenly'}>
            {menuItems.map((item, index) => {
              const { isOpen, onOpen, onClose } = useDisclosure();
              return (
                <Menu 
                  key={index} 
                  isOpen={isOpen} 
                  onClose={onClose} 
                  onOpen={onOpen} 
                  onMouseEnter={onOpen} 
                  onMouseLeave={onClose}
                >
                  <MenuButton as={Link} href="#">
                    <Flex align="center">
                      <Text fontSize={13}>{item.title}</Text>
                      <ChevronDownIcon ml={2} />
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    {item.subcategories.map((subitem, subIndex) => (
                      <MenuItem key={subIndex} as={Link} href={subitem.link} color={'#FF6F61'} fontSize={12}sx={{
                        fontFamily: 'Clear Sans, Helvetica Neue, sans-serif',
                      }}>
                        {subitem.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              );
            })}
          </HStack>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar3;
  