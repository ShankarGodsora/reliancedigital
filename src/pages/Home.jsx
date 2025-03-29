import { useState, useEffect } from "react";
import { Box, Image, Text, Button, Grid, Spinner, background } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const [products, setProducts] = useState([]);
    const [earphones, setEarphones] = useState([])
    const [televisions, setTelevisions] = useState([])
    const [air_Conditioners, setAir_Conditioners] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const images = [
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742969275930.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741761739709.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741686479001.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742534018946.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742534018946.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742969275930.jpeg"
    ];

    const productData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/IL3mzfelgo-vivo-v50-494494054-i-1-1200wx1200h.jpeg",
            des: "Vivo V50 5G 128 GB, 8 GB RAM, Rose Red, Mobile Phone",
            price: "34,999.00",

        },
        {
            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/5FrU_sZi1m-redmi-note-14-5g-494493420-i-1-1200wx1200h.jpeg",
            des: "Redmi Note 14 5G 128 GB, 6 GB RAM, Black, Mobile Phone",
            price: "17,999.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/GGw8clTnR8-oppo-reno13-5g-494493571-i-1-1200wx1200h.jpeg",
            des: "Oppo Reno 13 5G 128 GB, 8 GB RAM, Luminous Blue, Mobile Phone",
            price: "37,999.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/9topp_Twvt-redmi-14c-5g-494493873-i-1-1200wx1200h.jpeg",
            des: "Redmi 14C 5G 64 GB, 4 GB RAM, Purple, Mobile Phone",
            price: "9,999.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/OoPTWxG4XT-oppo-f27-494422692-i-1-1200wx1200h.jpeg",
            des: "Oppo F27 5G 128 GB, 8 GB RAM, Amber Orange, Mobile Phone",
            price: "20,999.00",
        },
    ];
    const EarphonesData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/ppdV8xrNza-apple-usb-typec-earpods-494422743-i-1-1200wx1200h.jpeg",
            des: "Apple USB Type C EarPods with mic, Sweat and Water Resistant...",
            price: "1,649.00",

        },
        {

            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/lGPLAmbnKd-boat-nirvana-ion-earbud-494249958-i-1-1200wx1200h.jpeg",
            des: "boAt Nirvana Ion ANC Truly Wireless in-Ear Earbuds with...",
            price: "₹1,899.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/W92n2gD9Lq-realme-tws-anc-buds-494249583-i-1-1200wx1200h.jpeg",
            des: "Realme Buds Air 5 In-ear Wirless Earphone, Upto 38 hrs of...",
            price: "2,299.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/4LdhkM07IA-boat-stone-358-black-speaker-493842115-i-1-1200wx1200h.jpeg",
            des: "boAt Stone 358 Bluetooth Speaker with 10 W RMS Stereo...",
            price: "1,299.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/OrpI8Xzxhf-oneplus-bullets-z2-wireless-earphone-492796790-i-1-1200wx1200h.jpeg",
            des: "OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with...",
            price: "1,599.00",
        },
    ];

    const SmallImages = [
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740996818726.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740996784756.jpeg",
        "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742448360959.jpeg"

    ];

    const TelevisionsData = [
        {
            id: 1,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/KBqsF1dXKa-samsung-65q70d-led-tv-494410282-i-1-1200wx1200h.jpeg",
            des: "Samsung 163 cm (65 Inch) 4K QLED Smart TV...",
            price: "1,04,990.00",

        },
        {

            id: 2,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/yAdAWgjcTy-lg-55-4k-uhd-smart-led-494410559-i-1-1200wx1200h.jpeg",
            des: "LG 139.7 cm (55 inch) 4K Ultra HD TV, Ashed Blue,...",
            price: "₹54,990.00",
        },
        {
            id: 3,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/0W2goLHARb-tcl-43-4k-uhd-smart-google-tv-494410490-i-1-1200wx1200h.jpeg",
            des: "TCL 109.22 cm (43 Inch) Ultra HD (4K) Google TV, 43P755,...",
            price: "24,990.00",
        },
        {
            id: 4,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/v5DnaT_EW4-sony-43-smart-led-tv-494410723-i-1-1200wx1200h.jpeg",
            des: "Sony BRAVIA 2 Series 108 cm (43 inches) 4K Ultra HD Smart...",
            price: "44,631.00",
        },
        {
            id: 5,
            img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/RJQrGlrKn5-tcl-55-qled-smart-google-tv-494410498-i-1-1200wx1200h.jpeg",
            des: "TCL 139.7 cm (55 inch) QLED Smart Google TV, 55C655, Black...",
            price: "40,990.00",
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
    const [currentIndexSmallImage, setCurrentIndexSmallImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setCurrentIndexSmallImage((prevIndex) => (prevIndex + 1) % SmallImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box p={5} bg={"rgb(245,245,245)"} >

            <Box p={3} w={"80%"} m={"auto"}>
                <Image src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1743165792072.jpeg" alt="Sliding Image" w="100%" borderRadius="10px" />
            </Box>

            <Box p={3} w={"80%"} m={"auto"}>
                <Image src={images[currentIndex]} alt="Sliding Image" w="100%" borderRadius="10px" />
            </Box>

            <Box m={"auto"} p={4} w={"80%"} bg={"rgb(195,227,240)"} borderRadius={20}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>Great Deals on Android Smartphones</Text>
                    <Text>Up to Rs.6000 Additional Discount</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>

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

            <Box m={"auto"} p={4} w={"80%"} bg={"rgb(195,227,240)"} borderRadius={20} marginTop={5}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>Upto 80% off on Best Sellers</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>

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

            <Box p={3} w={"80%"} m={"auto"}>
                <Image src={SmallImages[currentIndexSmallImage]} alt="Sliding Image" w="100%" borderRadius="10px" />
            </Box>

            <Box m={"auto"} p={4} w={"80%"} bg={"rgb(195,227,240)"} borderRadius={20} marginTop={5}>
                <Box>
                    <Text fontSize={30} p={2} fontWeight={"bold"}>Great Deals On Electronics</Text>
                </Box>

                <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={3} borderRadius={10}>


                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740660024430.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740660012439.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659884591.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659977519.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742873937232.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741343481982.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659950387.jpeg" />
                    <Image w={"95%"} borderRadius={10} src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740660001600.jpeg" />

                </Grid>

            </Box>

            <Box m={"auto"} p={4} w={"80%"} bg={"rgb(195,227,240)"} borderRadius={20} marginTop={5}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>Best in Televisions</Text>
                    <Text p={2}>Get 12.5% Instant Discount*</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>

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

            <Box m={"auto"} p={4} w={"80%"} bg={"rgb(195,227,240)"} borderRadius={20} marginTop={5}>
                <Box>
                    <Text fontSize={30} fontWeight={"bold"}>Upto 80% off on Best Sellers</Text>
                </Box>
                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>

                        {air_Conditioners.map((air_Conditioner) => (
                            <Box key={air_Conditioner.id} p={5} borderRadius="10px" onClick={() => navigate(`/product/${air_Conditioner.id}`)} cursor="pointer" bg={"white"} textAlign={"center"}>
                                <Image src={air_Conditioner.img} alt="earphone Image" w="100%" />
                                <Text mt={2}>{air_Conditioner.des}</Text>
                                <Text fontWeight="bold">Price: ₹{air_Conditioner.price}</Text>
                            </Box>
                        ))}
                    </Grid>
                )}
            </Box>
        </Box>
    );
};

export default Home;
