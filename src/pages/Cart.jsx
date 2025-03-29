import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Image, Text, Button, Grid } from "@chakra-ui/react";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }
  }, [user, navigate]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box p={4}>
    <Text fontSize="2xl" mb={4} textAlign={"center"}>Your Cart</Text>
    {cart.length === 0 ? (
      <Text textAlign={"center"}>No items in cart.</Text>
    ) : (
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={2} >
        {cart.map((product) => (
          <Box key={product.id} p={4}  boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"} borderRadius="10px" w={"50%"} >
            <Image src={product.img} alt="Product Image" w="100%" />
            <Text>{product.des}</Text>
            <Text fontWeight="bold">Price: ₹{product.price}</Text>
            <Button mt={2} colorScheme="red" onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
          </Box>
        ))}
      </Grid>
    )}
  </Box>








  );
};

export default Cart;
