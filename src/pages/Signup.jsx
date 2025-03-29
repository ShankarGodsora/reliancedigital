import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box, Input, Button, VStack, Heading, Flex, Image, Text } from "@chakra-ui/react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = () => {
    signup(username, password);
    navigate("/login");
  };

  return (
    <Flex w="50%" mx="auto" mt={10}  borderRadius={"5%"} lineHeight={"25px"}boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}  >
      <Box w="40%" bg={"rgb(231,235,248)"} m={"auto"} p={"5%"} borderLeftRadius={"5%"}>
        <Flex gap={4} mb={4} >
          <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/organization/60b75618d9b9b8ffabe828a3/theme/assets/bag.d5573d21495b8fbe7fef6ee9ee9106dd.svg" />
          <Text fontWeight={"500"}>Manage Your Orders</Text>
        </Flex>
        <Text mt={3}>Keep track of your orders, deliveries, and returns under My Orders section.</Text>

        <Flex gap={4} mt={4}>
          <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/organization/60b75618d9b9b8ffabe828a3/theme/assets/loginInstaDeliveryIcon.f08ed250935add83911dcd000be7d06d.svg" />
          <Text fontWeight={"500"}>Multiple Finance Options</Text>
        </Flex>
        <Text mt={3}>Pay flexibly with multiple payment options and save more with No Cost EMI and Cashback offers.</Text>

        <Flex gap={4} mt={4}>
          <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/organization/60b75618d9b9b8ffabe828a3/theme/assets/loginInstaDeliveryIcon.f08ed250935add83911dcd000be7d06d.svg" />
          <Text fontWeight={"500"}>ROne Loyalty Points</Text>
        </Flex>
        <Text mt={3}>Earn ROne loyalty points on every purchase and redeem those across Reliance Retail formats.</Text>
      </Box>

      <Flex w={"60%"}  p={8} borderRightRadius={"5%"} bg={"rgb(245,245,245)"} >
        <Box mt={"10%"} alignItems={"center"}>
          <Heading mb={4}>Register</Heading>
          <Text fontWeight={"bold"}>Please Make Your Account ...</Text>
          <VStack spacing={3} >
            <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <Button colorScheme="blue" onClick={handleSignup} w="100%">Signup</Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Signup;
