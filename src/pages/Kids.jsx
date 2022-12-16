import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getKidsAPI } from "../redux/kids/kids.actions";
import Navbar from "../Routes/Navbar";
const Kids = () => {
  const kidData = useSelector((store) => store.kids.kids);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKidsAPI());
  }, []);
  return (
    <Box w="90%" margin="auto" justifyContent="center" alignItems="center">
      <Navbar />
      <Spacer />
      <br />
      {/* <Box
        justifyContent="center"
        gap="6"
        mx="auto"
        mt="4"
        display="flex"
        w="60%"
      >
        <div>VIEW ALL</div>
        <div>DRESSES</div>
        <div>SHIRTS</div>
        <div>TOPS|SWEATERS</div>
        <div>TROUSERS</div>
        <div>SHOES</div>
      </Box> */}
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} spacing={10}>
        {kidData.map((post) => (
          <ProductCard
            key={post.id}
            name={post.name}
            image={post.image}
            price={post.price}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Kids;
