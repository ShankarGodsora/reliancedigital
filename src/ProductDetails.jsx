import { useParams, useNavigate } from "react-router-dom";
import { Box, Image, Text, Button, Flex, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const productData = [
    {
        id: 1,
        img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg",
        des: "Vivo V50 5G 128 GB, 8 GB RAM, Rose Red, Mobile Phone",
        price: "34,999.00",

    },
    {
        id: 2,
        img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg",
        des: "Vivo V50 5G 128 GB, 8 GB RAM, Rose Red, Mobile Phone",
        price: "34,999.00",
    },
    {
        id: 3,
        img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg",
        des: "Vivo V50 5G 128 GB, 8 GB RAM, Rose Red, Mobile Phone",
        price: "34,999.00",
    },
    {
        id: 4,
        img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg",
        des: "Vivo V50 5G 128 GB, 8 GB RAM, Rose Red, Mobile Phone",
        price: "34,999.00",
    },
    {
        id: 5,
        img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg",
        des: "Vivo V50 5G 128 GB, 8 GB RAM, Rose Red, Mobile Phone",
        price: "34,999.00",
    }
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = productData.find(p => p.id === Number(id));
        setProduct(foundProduct);
    }, [id]);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    };

    const handleBuyNow = () => {
        alert("Proceeding to checkout...");
    };

    if (!product) {
        return <Text fontSize="xl" color="red">Product not found!</Text>;
    }
    return (
        <Flex p={5} w={"80%"} m="auto" boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"} >
            <Box w={"25%"} position={"fixed"} top={"25%"} p={5} borderRadius={15} boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"} >
                <Image src={product.img} alt="Product Image" w="100%" m="auto" />
                <Flex justifyContent={"space-evenly"}>
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:75/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:75/j4YP_sUWZa-vivo-v50-494494054-i-2-1200wx1200h.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:75/661UPxjgvV-vivo-v50-494494054-i-3-1200wx1200h.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:75/0q3ipv0XAj-vivo-v50-494494054-i-4-1200wx1200h.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:75/hTnnLLuAWp-vivo-v50-494494054-i-5-1200wx1200h.jpeg" />
                </Flex>
            </Box>
            <Box w={"75%"} ml={"35%"} p={5} borderRadius={15} boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}>
                <Text fontSize="xl" fontWeight="bold">{product.des}</Text>
                <Text fontSize="lg" fontWeight={"bold"}>{product.price}</Text>
                <Text fontSize="lg" fontWeight={"bold"}>Delivery Related</Text>
                <Input type="number" w={"30%"} borderRadius={"10px"} placeholder="Enter/Detect Pincode" /> <Button>Apply</Button>
                <Text>Please enter a pincode.</Text>
                <hr />
                <Button mt={4} colorScheme="blue" borderRadius={80} onClick={handleAddToCart}>
                    Add to Cart
                </Button>
                <Button mt={4} colorScheme="green" ml={2} borderRadius={80} onClick={handleBuyNow}>
                    Buy Now
                </Button>

                <Button mt={4} colorScheme="gray" ml={2} borderRadius={80} onClick={() => navigate("/Mobiles")}>
                    Go Back
                </Button>

                <Text fontWeight={"bold"} mt={4} >Key Features</Text>
                <UnorderedList>
                    <ListItem>Storage: 8 GB RAM, 128 GB Internal Memory</ListItem>
                    <ListItem>Display: 17.19 cm (6.77 inch), 2392 × 1080 Resolution, AMOLED FHD+</ListItem>
                    <ListItem>Rear Camera: 50 MP Main Camera, 50 MP</ListItem>
                    <ListItem>Front Camera: 50 MP</ListItem>
                </UnorderedList>

                <Text fontWeight={"bold"} mt={4}>Description</Text>
                <Image src="https://www.reliancedigital.in/akamai/images/products/Vivov50_20.jpg" />
                <Text textAlign={"center"} mt={4}>* This Vivo V50 5G image is for illustration purpose only. Actual image may vary.</Text>
            </Box>
        </Flex>
    );
};

export default ProductDetails;
