import { useState, useEffect } from "react";
import { Box, Image, Text, Grid, Spinner, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Mobiles = () => {
    const [products, setProducts] = useState([]);
    const [earphones, setEarphones] = useState([])
    const [televisions, setTelevisions] = useState([])
    const [air_Conditioners, setAir_Conditioners] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const images = [
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742981107533.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1743080472928.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742973133184.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1743080647170.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742973024443.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742973102006.jpeg"

    ];

    const productData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/JGoIRXQrOT-oppo-k12x-5g-494422233-i-1-1200wx1200h.jpeg",
            des: "Oppo K12x 5G 128 GB, 6 GB RAM, Breeze Blue, Mobile Phone",
            price: "12,999.00",

        },
        {
            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/wXeuuGWgXB-vivo-t3-lite-5g-494421927-i-1-1200wx1200h.jpeg",
            des: "Vivo T3 Lite 5G 128 GB, 6 GB RAM, Green, Mobile Phone",
            price: "11,499.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/kT6CXr2BbZ-realme-narzo-n65-494422939-i-1-1200wx1200h.jpeg",
            des: "Realme Narzo N65 5G 128 GB, 6 GB RAM, Amber Gold, Mobile Phone",
            price: "12,499.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/Y-KzoALpHS-op-nord-ce4-lite-494421625-i-1-1200wx1200h.jpeg", des: "Redmi 14C 5G 64 GB, 4 GB RAM, Purple, Mobile Phone",
            des: "OnePlus Nord CE4 Lite 5G 128 GB, 8 GB RAM, Super Silver, Mobile Phone",
            price: "17,999.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/ywrh0rg7E4-google-pixel-7-494422654-i-1-1200wx1200h.jpeg",
            des: "Google Pixel 7 128 GB, 8 GB RAM, Lemongrass, Mobile",
            price: "28,999.00",
        },
    ];
    const EarphonesData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/JBw9NvTija-oppo-reno13-5g-494493573-i-1-1200wx1200h.jpeg",
            des: "Oppo Reno 13 5G 256 GB, 8 GB RAM, Luminous Blue, Mobile Phone",
            price: "39,999.00",

        },
        {
            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/7KFiWbzRN3-vivo-t3-5g-blue-mobile-phone-494353021-i-1-1200wx1200h.jpeg",
            des: "Vivo T3 5G 256 GB, 8 GB RAM, Cosmic Blue, Mobile Phone",
            price: "20,499.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/41sWCugQb9-apple-iphone-15-plus-128-gb-black-493839324-i-1-1200wx1200h.jpeg",
            des: "Apple iPhone 15 Plus 128 GB, Black",
            price: "74,990.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/3O0KFVJBAr-oneplus-nord-ce4-mobile-phone-494352991-i-1-1200wx1200h.jpeg",
            des: "OnePlus Nord CE4 8 GB RAM, 128 GB, Celadon Marble, Mobile...",
            price: "22,990.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/JCM0VGgdcV-redmi-14c-5g-494493755-i-1-1200wx1200h.jpeg",
            des: "Redmi 14C 5G 128 GB, 4 GB RAM, Purple, Mobile Phone",
            price: "10,990.00",
        },
    ];


    const TelevisionsData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/rgwxHkD_n--jiobharat-j1-581107398-i-1-1200wx1200h.jpeg",
            des: "JioBharat J1 4G Keypad Phone with JioTV, JioCinema, Jio Chat,...",
            price: "1,799.00",

        },
        {
            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/DRV-UaGYKm-jiobharatbharat-v3-581107375-i-1-1200wx1200h.jpeg",
            des: "JioBharat V3 4G Keypad Phone with JioTV, JioCinema, JioSaavn,...",
            price: "799.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/DD-5dkTytf-jiobharatbharat-v3-581107374-i-1-1200wx1200h.jpeg",
            des: "JioBharat V3 4G Keypad Phone with JioTV, JioCinema, JioSaavn,...",
            price: "799.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IaYYuuO2jm-jiobharatbharat-v4-581107377-i-1-1200wx1200h.jpeg",
            des: "JioBharat V4 4G Keypad Phone with JioTV, JioCinema, JioSaavn,...",
            price: "1,099.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/ONe8FRj86b-jiobharatbharat-v4-581107376-i-1-1200wx1200h.jpeg",
            des: "JioBharat V4 4G Keypad Phone with JioTV, JioCinema, JioSaavn,...",
            price: "1,090.00",
        },
    ];

    const Air_ConditionersData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/pfxwgkHdZG-bluestar-sac-581110331-i-1-1200wx1200h.jpeg",
            des: "BLUESTAR 1.5 Ton 3 Star 5 in 1 convertible Inverter Split AC -...",
            price: "34,490.00",

        },
        {
            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/LwyJcCi4fk-bluestar-sac-1t-581110659-i-1-1200wx1200h.jpeg",
            des: "Bluestar 1 Ton 3 Star 5 in 1 Convertible Inverter Split...",
            price: "34,990.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/Xwn8wlHJB0-voltas-sac-581110354-i-1-1200wx1200h.jpeg",
            des: "Voltas 1.5 Ton 5 Star 5-in-1 Convertible Inverter Split AC,...",
            price: "45,990.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/wSrVTNSLaG-bluestar-sac-15t-581110653-i-1-1200wx1200h.jpeg",
            des: "Bluestar 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC,...",
            price: "46.990.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/0Dl1WycffO-voltas-sac-581110348-i-1-1200wx1200h.jpeg",
            des: "Voltas 1.5 Ton 3 Star 4-in-1 Convertible Inverter Split AC,...",
            price: "37,990.00",
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setProducts(productData);
            setEarphones(EarphonesData);
            setTelevisions(TelevisionsData)
            setAir_Conditioners(Air_ConditionersData)
            setLoading(false);
        }, 1000);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box p={5} bg={"rgb(245,245,245)"} >

            <Box p={3} w={"80%"} m={"auto"}>
                <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1743080384927.jpeg" w="100%" borderRadius="10px" />
            </Box>

            <Box p={3} w={"80%"} m={"auto"}>
                <Image src={images[currentIndex]} alt="Sliding Image" w="100%" borderRadius="10px" />
            </Box>

            <Box w={"80%"} m={"auto"} p={4} >
                <Text fontSize={18} fontWeight={"bold"} >Latest Mobiles</Text>
                <Flex>
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740476424217.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740476991628.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740477011840.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740477053591.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740477070713.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740477098042.jpeg" />
                    <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740476970077.jpeg" />
                </Flex>

            </Box>

            <Box p={4} boxShadow={" rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>Best Selling Smartphones</Text>
                    <Text textAlign={"right"} fontWeight={"bold"}>View All</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} w={"80%"} gap={6}>

                        {products.map((product) => (
                            <Box key={product.id} p={5} borderRadius="10px" onClick={() => navigate(`/product/${product.id}`)} cursor="pointer" bg={"white"} textAlign={"center"}>
                                <Image src={product.img} alt="Product Image" w="100%" />
                                <Text mt={2}>{product.des}</Text>
                                <Text fontWeight="bold">Price: ₹{product.price}</Text>

                            </Box>
                        ))}
                    </Grid>
                )}

            </Box>


            <Box p={4} mt={5} boxShadow={" rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>5G Smartphones</Text>
                    <Text textAlign={"right"} fontWeight={"bold"}>View All</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6} w={"80%"}>

                        {earphones.map((earphone) => (
                            <Box key={earphone.id} p={5} borderRadius="10px" onClick={() => navigate(`/product/${earphone.id}`)} cursor="pointer" bg={"white"} textAlign={"center"}>
                                <Image src={earphone.img} alt="earphone Image" w="100%" />
                                <Text mt={2}>{earphone.des}</Text>
                                <Text fontWeight="bold">Price: ₹{earphone.price}</Text>
                            </Box>
                        ))}
                    </Grid>
                )}

            </Box>

            <Box p={4} mt={4} boxShadow={" rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>Best of Jio Phones</Text>
                    <Text textAlign={"right"} fontWeight={"bold"}>View All</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6} w={"80%"}>

                        {televisions.map((television) => (
                            <Box key={television.id} p={5} borderRadius="10px" onClick={() => navigate(`/product/${television.id}`)} cursor="pointer" bg={"white"} textAlign={"center"}>
                                <Image src={television.img} alt="earphone Image" w="100%" />
                                <Text mt={2}>{television.des}</Text>
                                <Text fontWeight="bold">Price: ₹{television.price}</Text>
                            </Box>
                        ))}
                    </Grid>
                )}
            </Box>

            <Box p={4} mt={4} bg={"rgb(245,245,245)"} w={"100%"} boxShadow={" rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}>
                <Grid templateColumns={{ base: "1fr", md: "repeat(7, 1fr)" }} gap={3} w={"80%"}>
                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620527.jpeg" />
                        <Text mt={4} textAlign={"center"}>Apple</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620540.jpeg" />
                        <Text mt={4} textAlign={"center"}>Google</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620547.jpeg" />
                        <Text mt={4} textAlign={"center"}>OnePlus</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620554.jpeg" />
                        <Text mt={4} textAlign={"center"}>POCO</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620562.jpeg" />
                        <Text mt={4} textAlign={"center"}>OPPO</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620573.jpeg" />
                        <Text mt={4} textAlign={"center"}>Realme</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733394620589.jpeg" />
                        <Text mt={4} textAlign={"center"}>Xiaomi</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733400670770.jpeg" />
                        <Text mt={4} textAlign={"center"}>Samsung</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733400707078.jpeg" />
                        <Text mt={4} textAlign={"center"}>Itel</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733400744458.jpeg" />
                        <Text mt={4} textAlign={"center"}>Tecno</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733400794693.jpeg" />
                        <Text mt={4} textAlign={"center"}>Nokia</Text>
                    </Box>

                    <Box >
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733400834202.jpeg" />
                        <Text mt={4} textAlign={"center"}>Motorola</Text>
                    </Box>

                    <Box>
                        <Image m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"100%"} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1733899636169.jpeg" />
                        <Text mt={4} textAlign={"center"}>Vivo</Text>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default Mobiles;
