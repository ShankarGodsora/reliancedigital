import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Box, Flex, Button, IconButton, Drawer, DrawerBody,
  DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure, Image, Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";



const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCartClick = () => {
    if (user) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <Box color="white" position={"sticky"} top={0} zIndex={100}>
      <Box bg="rgb(227,39,41)" >
        <Flex gap={"100px"} w={"80%"} margin={"auto"} justifyContent={"right"}>


          <Flex display={{ base: "none", md: "flex" }} gap={10}>
            <Link to="/orders">Orders</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/resource">Resource Center</Link>
            <Link to="/store">Find a Store</Link>
          </Flex>
        </Flex>

        <Flex align="center" w={"80%"} margin={"auto"}>
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            aria-label="Open Menu"
            mr={4}
          />

          <Flex display={{ base: "none", md: "flex" }} gap={8} m={"auto"} textAlign={"center"} alignItems={"center"} fontWeight={"bold"}>

            <Flex w={"10%"}>
              <Link to="/"  >
                <Image to="/" src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/company/1/applications/645a057875d8c4882b096f7e/application/pictures/free-logo/original/OhLa8p_da-Reliance-Digital.webp" />
              </Link>
            </Flex>


            <Input color={"black"} w={"50%"} borderRadius={"50px"} background={"white"} placeholder="Search Products & Brands" />
            <Link to="/location">Pick your location</Link>
            <Button variant="link" color="white" onClick={handleCartClick}>Cart</Button>
            <Link to="/Wishlist">Wishlist</Link>
            {user ? (
              <Button color={"gray"} size="sm" onClick={logout}>Logout</Button>
            ) : (
              <>
                <Button colorScheme="green" size="sm" mr={2} onClick={() => navigate("/login")}>Login</Button>
                <Button colorScheme="blue" size="sm" onClick={() => navigate("/signup")}>Signup</Button>
              </>
            )}

          </Flex>


        </Flex>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={4} mt={10}>
                <Link to="/" onClick={onClose}>Home</Link>
                <Link to="/orders" onClick={onClose}>Orders</Link>
                <Link to="/contact" onClick={onClose}>Contact Us</Link>
                <Link to="/resource" onClick={onClose}>Resource Center</Link>
                <Link to="/store" onClick={onClose}>Find a Store</Link>
                <Button variant="link" color="blue.500" onClick={() => { handleCartClick(); onClose(); }}>Cart</Button>
                {user ? (
                  <Button colorScheme="rgb(151,151,151)" onClick={() => { logout(); onClose(); }}>Logout</Button>
                ) : (
                  <>
                    <Button colorScheme="green" onClick={() => { navigate("/login"); onClose(); }}>Login</Button>
                    <Button colorScheme="blue" onClick={() => { navigate("/signup"); onClose(); }}>Signup</Button>
                  </>
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </Box>

      <Box w={"100%"} background={"white"} p={4} boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Flex color={"black"} alignItems={"center"} mt={4} m={"auto"} w={"80%"} gap={2}  >
          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/jJc56F0NF-menu_Mobiles.png" />
            <Link to="/Mobiles">Mobiles</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/6kAylQ0cV-menu_Accessories.png" />
            <Link to="/Air_Conditioners">Air Conditioners</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/jDnjGNKzM-Primary-Menu.jpeg" />
            <Link to="/Air_Coolers">Air Coolers</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/mXaE3y_7l-menu_Kitchen-Appliances.png" />
            <Link to="/Refrigerators">Refrigerators</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/ro7KmfkN_-menu_Television.png" />
            <Link to="/Televisions">Televisions</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/MO-msO1GU-menu_Laptop.png" />
            <Link to="/Laptop">Laptop</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/LXuLXjYf5-menu_Earphones.png" />
            <Link to="/Earphones">Earphones</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/TvMZUb1Xg-Primary-Menu.png" />
            <Link to="/Smart_Watches">Smart Watches</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/2DoKFV_Ss-Primary-Menu.jpeg" />
            <Link to="/Tablets">Tablets</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/HAT8U8-9N-Primary-Menu.jpeg" />
            <Link to="/Washing_Machines">Washing Machines</Link>
          </Flex>

          <Flex textAlign={"center"} alignItems={"center"} gap={2} marginRight={30} fontSize={15}>
            <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/34MaVOg_1-menu_All-Categories.png" />
            <Link to="/All_Categories">All Categories</Link>
          </Flex>

        </Flex>
      </Box>
    </Box >

  );
};

export default Navbar;
