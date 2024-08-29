import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Button,
    HStack,
    VStack,
    chakra,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
  
  const Body4 = () => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'gray.200');
  
    return (
      <Box bg={bgColor} color={textColor} p={8} rounded="md">
        <Flex justifyContent="space-between" alignItems="center">
          
        </Flex>
        <Text fontSize={'18.4px'}  fontWeight={600} mt={8} mb={4} >
          Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare
          Platform
        </Text>
        <Text fontSize={'18.4px'}  fontWeight={600}mb={4}>
          We Bring Care to Health.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          Tata 1mg is India's leading digital healthcare platform. From doctor consultations on
          chat to online pharmacy and lab tests at home: we have it all covered for you. Having
          delivered over 25 million orders in 1000+ cities till date, we are on a mission to
          bring "care" to "health" to give you a flawless healthcare experience.
        </Text>
        <Text fontSize={'18.4px'}  fontWeight={600} mt={8} mb={4}>
          Tata 1mg: Your Favourite Online Pharmacy!
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          Tata 1mg is India's leading online chemist with over 2 lakh medicines available at
          the best prices. We are your one-stop destination for other healthcare products
          as well, such as over the counter pharmaceuticals, healthcare devices and
          homeopathy and ayurveda medicines.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          With Tata 1mg, you can buy medicines online and get them delivered at your
          doorstep anywhere in India! But, is ordering medicines online a difficult
          process? Not at all! Simply search for the products you want to buy, add to cart
          and checkout. Now all you need to do is sit back as we get your order delivered
          to you.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          In case you need assistance, just give us a call and we will help you complete
          your order.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          And there is more! At Tata 1mg, you can buy health products and medicines
          online at best discounts.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          Now, isn't that easy? Why go all the way to the medicine store and wait in
          line, when you have Tata 1mg Pharmacy at your service.
        </Text>
        <Text fontSize={'18.4px'}  fontWeight={600} mt={8} mb={4}>
          The Feathers in Our Cap
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          At Tata 1mg, our goal is to make healthcare understandable, accessible and
          affordable in India. We set out on our journey in 2015, and have come a long
          way since then. Along the way, we have been conferred with prestigious titles
          like BML Munjal Award for &#39;Business Excellence through Learning and
          Development&#39;, Best Online Pharmacy in India Award and Top 50 venture in
          The Smart CEO-Startup50 India. We have been selected as the only company
          from across the globe for SD#3 "Health & Well Being for all" by Unreasonable
          group, US State Department. In 2019 alone we received three awards
          including the BMW Simply Unstoppable Award.
        </Text>
        <Text fontSize={'18.4px'}  fontWeight={600} mt={8} mb={4}>
          The Services We Offer
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          Tata 1mg is India's leading digital healthcare platform, where you can buy
          medicines online with discount. Buy medicine online in Delhi, Mumbai,
          Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad,
          Lucknow and around a 1000 more cities. Besides delivering your online
          medicine order at your doorstep, we provide accurate, authoritative &
          trustworthy information on medicines and help people use their medicines
          effectively and safely.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
          We also facilitate lab tests at home. You can avail over 2,000 tests and get
          tested by 120+ top and verified labs at the best prices. Need to consult a
          doctor? On our platform, you can talk to over 20 kinds of specialists in just a
          few clicks.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
        Customer centricity is the core of our values. Our team of highly trained and experienced doctors, 
        phlebotomists and pharmacists looks into each order to give you a fulfilling experience.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
        We’ve made healthcare accessible to millions by giving them quality care at affordable prices.
         Customer centricity is the core of our values. Our team of highly trained and experienced doctors, 
         phlebotomists and pharmacists looks into each order to give you a fulfilling experience.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
        Visit our online medical store now, and avail online medicine purchase at a discount.
        </Text>
        <Text fontSize="16px" mb={4} fontWeight={400} color={'#7c7c7c'}>
        Stay Healthy!
        </Text>
      </Box>
    );
  };
  
  export default Body4;
  