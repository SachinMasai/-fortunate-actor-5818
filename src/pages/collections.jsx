import React, { useEffect } from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionsAPI } from "../redux/collections/collection.actions";
import Navbar from "../Routes/Navbar";
const Collections = () => {
  const collectdata = useSelector((store) => store.collection.collections);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCollectionsAPI());
  }, []);
  return (
    <Box w="90%" margin="auto" justifyContent="center" alignItems="center">
      <Navbar />
      <br />
      <Box
        justifyContent="center"
        gap="6"
        mx="auto"
        mt="20"
        display="flex"
        w="60%"
      >
        <div>VIEW ALL</div>
        <div>DRESSES</div>
        <div>SHIRTS</div>
        <div>TOPS|SWEATERS</div>
        <div>TROUSERS</div>
        <div>SHOES</div>
      </Box>
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} spacing={10}>
        {collectdata.map((post) => (
          <Box justifyContent="center" w="350px">
            <Image
              width="250px"
              height="380px"
              display="block"
              marginLeft="50px"
              src={post.image}
              alt={post.name}
              onClick={() => {
                navigate(`/collections/${post.id}`);
              }}
            />
            <AddIcon />
            <Text>{post.name}</Text>
            <Text>₹ {post.price}</Text>
            <Link to={`/collections/${post.id}`}>More Details</Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Collections;
