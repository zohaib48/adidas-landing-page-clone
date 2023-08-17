import * as React from "react";
import logo from "./adidas_pics/adidas.png";
import {
  AppBar,
  Box,
  Button,
  InputAdornment,
  ListItemIcon,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";

import flag from "./adidas_pics/flag.png";
import cover from "./adidas_pics/cover.avif";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import shoe from "./adidas_pics/shoes.avif";
import shoe1 from "./adidas_pics/shoes1.avif";
import shoe2 from "./adidas_pics/shoe2.avif";
import blogPic from "./adidas_pics/blog.avif";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Category = [
  {
    name: "SHOES",
    image: shoe1,
  },
  {
    name: "CLOTHING",
    image: shoe1,
  },
  {
    name: "BEST SELLERS",
    image: shoe1,
  },
  {
    name: "NEW ARRIVALS",
    image: shoe1,
  },
];

const data = [
  {
    id: 1,
    image: shoe,
    title: "Samba Classic",
    description: "Performance",
  },
  {
    id: 1,
    image: shoe,
    title: "Samba Classic",
    description: "Performance",
  },
  {
    id: 1,
    image: shoe,
    title: "Samba Classic",
    description: "Performance",
  },
  {
    id: 1,
    image: shoe,
    title: "Samba Classic",
    description: "Performance",
  },
  {
    id: 1,
    image: shoe,
    title: "Samba Classic",
    description: "Performance",
  },
  {
    id: 1,
    image: shoe,
    title: "Samba Classic",
    description: "Performance",
  },
];

const ShopCards = [
  {
    image: shoe2,
    heading: "ICONIC THEN. ICONIC NOW",
    SubHeading: "Elevate your everyday style with the Samba.",
  },
  {
    image: shoe2,
    heading: "THE LIGHTEST ULTRABOOST EVER",
    SubHeading:
      "Ultraboost Light, with 30% lighter Boost for ultimate cushioning and comfort.",
  },
  {
    image: shoe2,
    heading: "JUST DROPPED: TRAE 3",
    SubHeading:
      "Engineered with performance technology unlike any shoe on court..",
  },
  {
    image: shoe2,
    heading: "BACK TO SCHOOL STYLES",
    SubHeading:
      "Kick-start your fall wardrobe with tees, shorts and sneakers to mix and match.",
  },
];

const blog = [
  {
    image: blogPic,
    heading: "WHAT IS A PENALTY KICK IN SOCCER",
    SubHeading:
      "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adidas.",
  },
  {
    image: blogPic,
    heading: "WHAT IS A PENALTY KICK IN SOCCER",
    SubHeading:
      "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adidas.",
  },
  {
    image: blogPic,
    heading: "WHAT IS A PENALTY KICK IN SOCCER",
    SubHeading:
      "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adidas.",
  },
  {
    image: blogPic,
    heading: "WHAT IS A PENALTY KICK IN SOCCER",
    SubHeading:
      "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adidas.",
  },
];

const Popular = [
  {
    name: "UltraBoost",
  },
  {
    name: "nmd",
  },
  {
    name: "Backpacks",
  },
  {
    name: "Cheats",
  },
  {
    name: "Stan Smith",
  },
  {
    name: "Samba",
  },
];

const FooterItem = [
  {
    name: "PRODUCTS",
    tags: [
      "Shoes",
      "Clothing",
      "Accessories",
      "Gift Cards",
      "New Arrival",
      "Best Seller",
    ],
  },
  {
    name: "SPORTS",
    tags: [
      "Soccer",
      "Running",
      "Basketball",
      "Football",
      "Outdoor",
      "Golf",
      "Baseball",
      "Tennis",
      "Skateboarding",
      "Training",
    ],
  },
  {
    name: "COLLECTION",
    tags: [
      "adicolor",
      "Ultraboost",
      "NMD",
      "Forum",
      "Superstar",
      "Running Shoes",
      "adilette",
      "Stan Smith",
      "adizero",
      "Tiro",
      "Cloudfoam Pure",
    ],
  },
  {
    name: "SUPPORT",
    tags: [
      "Help",
      "Returns & Exchanges",
      "Shipping",
      "Order Tracker",
      "Store Locator",
      "Size Charts",
      "Gift Card Balance",
      "How to Clean Shoes",
      "Running Shoe Finder",
      "Bra Fit Guide",
      "Sports Bra Finder",
      "Breathing for Running",
      "Promotions",
    ],
  },
  {
    name: "COMPANY INFO",
    tags: [
      "About Us",
      "Student Discount",
      "Military & Healthcare Discount",
      "adidas Stories",
      "adidas Apps",
      "Sustainability",
      "adiClub",
      "Affiliates",
      "Press",
      "Careers",
      "California Transparency in Supply Chains Act",
      "Responsible Disclosure",
      "Transparency in Coverage",
      "Country Selector",
    ],
  },
];

const FooterLast = [
  {
    name: "Your Privacy Choices",
  },
  {
    name: "Privacy policy",
  },
  {
    name: "Terms and Conditions",
  },
];

const Nike = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isScreenLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Box>
        <Box
          sx={{
            color: "white",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "black",
            position: "fixed",
            top: 0,
            zIndex: 100,
          }}
        >
          Free Standard SHIPPING & RETURNS
        </Box>
        <AppBar
          sx={{
            height: "90px",
            bgcolor: "white",
            mt: "40px",
            position: "fixed",
            display: "flex",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: `flex`,
                height: `900px`,

                width: "150px",
                backgroundImage: `url(${logo})`,
                backgroundSize: 250,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>

            <Box
              sx={{
                ml: { lg: 10, xl: 30 },
                width: { xs: 0, sm: 0, md: 0, lg: 800 },
              }}
            >
              <Tabs
                onChange={handleChange}
                value={value}
                sx={{
                  marginBottom: -3,
                  color: "black",
                  fontSize: "40px",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "black",
                  },
                }}
                aria-label="secondary tabs example"
              >
                <Tab
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&.Mui-selected": { color: "black" },
                    paddingBottom: 0,
                  }}
                  value="one"
                  label="MEN"
                />
                <Tab
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&.Mui-selected": { color: "black" },
                    paddingBottom: 0,
                  }}
                  value="two"
                  label="WOMEN"
                />
                <Tab
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&.Mui-selected": { color: "black" },
                    paddingBottom: 0,
                  }}
                  value="three"
                  label="KIDS"
                />
                <Tab
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&.Mui-selected": { color: "black" },
                    paddingBottom: 0,
                  }}
                  value="four"
                  label="BACK TO SCHOOL"
                />
                <Tab
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&.Mui-selected": { color: "black" },
                    paddingBottom: 0,
                  }}
                  value="five"
                  label="SALE"
                />
                <Tab
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&.Mui-selected": { color: "black" },
                    paddingBottom: 0,
                  }}
                  value="six"
                  label="3 STRIPE LIFE"
                />
              </Tabs>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: -3,
                mr: 5,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  fontSize: "13px",
                  width: "350px ",
                  position: "absolute",
                  top: -30,
                  display: "flex",
                  alignItems: "Center",
                  justifyContent: "space-between",
                }}
              >
                <Link href="#">help</Link>
                <Link href="#">orders and returns</Link>
                <Link href="#">join adiClub</Link>
                <img style={{ width: 30 }} src={flag}></img>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                {" "}
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  placeholder="Search"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "lightgray", // Change the background color here
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <ListItemIcon
                  sx={{
                    ml: 3,
                    width: "150px",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30 }} />
                  <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                  <RedeemIcon sx={{ fontSize: 30 }} />
                </ListItemIcon>{" "}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            mt: "130px",
            height: "calc(100vh - 180px)",
            width: "100%",
            bgcolor: "blue",
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Box sx={{ ml: 20 }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "50px", color: "white" }}
            >
              SUPERSTAR XLG
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              No expectations, no rules. Tell your story with the Superstar XLG.
            </Typography>

            <Box sx={{ display: "block" }}>
              <Button
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  bgcolor: "white",
                  fontSize: "20px",
                  color: "black",
                  "& .MuiSvgIcon-root": {
                    fontSize: "50px",
                  },
                  "&:hover": {
                    bgcolor: "white",
                    color: "rgba(0, 0, 0, 0.5)",
                  },
                }}
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
              >
                SHOP WOMEN
              </Button>
            </Box>
            <Box sx={{ display: "block" }}>
              <Button
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  bgcolor: "white",
                  fontSize: "20px",
                  color: "black",
                  "& .MuiSvgIcon-root": {
                    fontSize: "50px",
                  },
                  "&:hover": {
                    bgcolor: "white",
                    color: "rgba(0, 0, 0, 0.5)",
                  },
                }}
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
              >
                SHOP MEN
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: `100%`,
            height: "390px",
            backgroundColor: "rgb(237,237,227)",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "30px", color: "black" }}
          >
            YEEZY{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "20px", color: "black", textAlign: "center" }}
          >
            AVAILABLE ON CONFIRMED. DOWNLOAD, REGISTER, PARTICIPATE <br /> A
            PORTION OF THE SALE OF THESE ITEMS WILL BE DONATED IN SUPPORT OF THE
            FIGHT AGAINST <br />
            DISCRIMINATION, HATE, RACISM, AND ANTISEMITISM.{" "}
          </Typography>
          <Link
            underline="always"
            color={"inherit"}
            sx={{
              "&:hover": {
                backgroundColor: "black",
                color: "white", // Change the text color when hovered, if needed
              },
              fontSize: "18px",
              mt: 4,
            }}
            href="#"
          >
            SHOP NOW{" "}
          </Link>

          <Link
            underline="always"
            color={"inherit"}
            sx={{
              "&:hover": {
                backgroundColor: "black",
                color: "white", // Change the text color when hovered, if needed
              },
              fontSize: "18px",
              mt: 4,
            }}
            href="#"
          >
            READ THE PRESS RELEASE
          </Link>
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              color: "black",
              mt: 8,
              pl: 20,
            }}
          >
            Still Interested?
          </Typography>
        </Box>
        {/* SLIDER  */}
        <Box sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              overflowX: "scroll",
              scrollbarWidth: "3px",

              "&::-webkit-scrollbar": {
                height: "12px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#F7F6F6",
                marginLeft: 3,
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "6px",

                "&:hover": {
                  background: "#555",
                },
              },
            }}
          >
            {data.map((item) => (
              <Card
                key={item.id}
                sx={{
                  minWidth: 420,
                  ml: 2,
                  mr: 3,
                  mb: 2,
                  "&:hover": {
                    border: "solid",
                    borderWidth: "1px",
                  },
                }}
              >
                <CardMedia
                  component="div"
                  height="420"
                  sx={{ position: "relative" }}
                >
                  <img
                    src={item.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Box
                    sx={{
                      fontSize: "15px",
                      position: "absolute",
                      top: 20,
                      right: 20,
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Box>
                </CardMedia>
                <CardContent sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      fontSize: "15px",
                      position: "absolute",
                      padding: 1,
                      color: "black",
                      bgcolor: "white",
                      top: -33,
                      left: 10,
                    }}
                  >
                    $90
                  </Box>
                  <Typography gutterBottom sx={{ fontSize: "15px" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "15px" }} color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <>
          <Box
            sx={{
              mt: 20,
              ml: isScreenSmall ? 0 : 20,
              mr: isScreenSmall ? 0 : 20,
              display: "flex",

              flexDirection: isScreenSmall ? "column" : "row", // Set flex direction based on screen size
            }}
          >
            {Category.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  width: "400px", // Fixed width for each box
                  height: "250px",
                  position: "relative",
                  ml: 3,
                  mb: 3, // Add margin-bottom to separate the boxes
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ position: "absolute", bottom: 10 }}>
                  <Link
                    underline="always"
                    color={"inherit"}
                    sx={{
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                      fontSize: "18px",
                      fontWeight: "bold",
                      mt: isScreenSmall ? 4 : 0, // Add margin-top for small screens
                    }}
                    href="#"
                  >
                    {item.name}
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </>

        {/* NEW ARRIVALS */}
        <Box component={"Trending"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 10,
              ml: 20,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowRightAltIcon sx={{ fontSize: "60px" }} />
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  {" "}
                  New Arrivals
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "rgba(0, 0, 0, 0.3)",
                    whiteSpace: "nowrap",
                    ml: 5,
                  }}
                >
                  {" "}
                  What's Trending
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "rgba(0, 0, 0, 0.3)",
                    whiteSpace: "nowrap",
                    ml: 5,
                  }}
                >
                  {" "}
                  Member Exclusives
                </Typography>
              </Box>
            </Box>

            <Box sx={{ ml: 30, mr: 30 }}>
              <Link
                underline="always"
                color={"inherit"}
                sx={{
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    whiteSpace: "nowrap",
                  },
                  fontSize: "23px",
                  mt: 4,
                }}
                href="#"
              >
                View All{" "}
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 10,
              ml: 20,
              display: "flex",
              overflowX: "scroll",
              scrollbarWidth: "3px",
              "&::-webkit-scrollbar": {
                height: "12px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#F7F6F6",
                marginLeft: 3,
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "6px",
                "&:hover": {
                  background: "#555",
                },
              },
            }}
          >
            {data.map((item) => (
              <Card
                key={item.id}
                sx={{
                  minWidth: 300,
                  ml: 1,
                  mr: 3,
                  mb: 2,
                  "&:hover": {
                    border: "solid",
                    borderWidth: "1px",
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ position: "relative", height: "300px" }}
                >
                  <img
                    src={item.image}
                    style={{ width: "100%", height: "100%" }}
                    alt={item.title}
                  />
                  <Box
                    sx={{
                      fontSize: "15px",
                      position: "absolute",
                      top: 20,
                      right: 20,
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Box>
                </CardMedia>
                <CardContent sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      fontSize: "15px",
                      position: "absolute",
                      padding: 1,
                      color: "black",
                      bgcolor: "white",
                      top: -33,
                      left: 10,
                    }}
                  >
                    $90
                  </Box>
                  <Typography gutterBottom sx={{ fontSize: "15px" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "15px" }} color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            mt: 20,
            ml: isScreenLarge ? 0 : 20,
            mr: isScreenLarge ? 0 : 20,
            display: "flex",
          }}
        >
          {ShopCards.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: 397,
                minWidth: 200,
                ml: 1,
                mr: 3,
                mb: 2,
                "&:hover": {
                  border: "solid",
                  borderWidth: "1px",
                },
                flexGrow: 1,
                height: "auto",
              }}
            >
              <CardMedia
                component="div"
                sx={{ position: "relative", width: "100%" }}
              >
                <img
                  src={item.image}
                  style={{ width: "100%", height: "100%" }}
                />
              </CardMedia>
              <CardContent >
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    
                  }}
                >
                  {item.heading}
                </Typography>

                <Box sx={{ position: "relative", minHeight: "100px" }}>
                  <Typography sx={{ fontSize: "15px" }} color="text.secondary">
                    {item.SubHeading}
                  </Typography>

                  <Link
                    underline="always"
                    color={"inherit"}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                     
                      textAlign: "start",
                      
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                    href="#"
                  >
                    SHOP NOW
                  </Link>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            mt: 10,
            ml: isScreenLarge ? 0 : 20,
            mr: isScreenLarge ? 0 : 20,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          MORE FROM ADIDAS STORIES
          <Box sx={{ display: "flex", mt: 5 }}>
            {blog.map((item) => (
              <Card
                key={item.id}
                sx={{
                  minWidth: 350,

                  ml: 1,
                  mr: 3,
                  mb: 2,
                  boxShadow: "none",
                  flexGrow: 1,
                  height: "390px",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    position: "relative",
                    height: "280px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      left: 30,
                      top: -30,
                      bgcolor: "white",
                    }}
                  >
                    {" "}
                    <Typography
                      gutterBottom
                      sx={{
                        fontSize: "19px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        paddingRight: "40px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        textAlign: "justify",
                        paddingRight: "40px",
                      }}
                      color="black"
                    >
                      {item.SubHeading}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* POPULAR RIGHT NOW  */}
        <Box
          sx={{
            mt: 10,
            ml: isScreenLarge ? 0 : 20,
            mr: isScreenLarge ? 0 : 20,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Popular right now
          <Box sx={{ mt: 5 }}>
            <Box sx={{ maxWidth: "100%" }}>
              <Grid
                container
                rowSpacing={7}
                columnSpacing={{ xs: 5, sm: 5, md: 3 }}
                columns={isScreenSmall ? { xs: 3, sm: 5, md: 3 } : undefined}
              >
                {Popular.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.name}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        height: "100%", // Make the box take the full height
                      }}
                    >
                      <Item
                        sx={{
                          flexShrink: 0,
                          textAlign: "left",
                          boxShadow: "none",
                          borderBottom: "3px solid", // Initial border
                          transition: "border-bottom 0.3s",
                          "&:hover": {
                            borderBottom: "10px solid black", // Bold border on hover
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            whiteSpace: "nowrap",
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Item>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* STORIES */}
        <Box
          sx={{
            width: "100%",
            minHeight: "700px",
            bgcolor: "rgb(245,245,229)",
          }}
        >
          <Box
            sx={{
              mt: 10,
              ml: isScreenLarge ? 3 : 20,
              mr: isScreenLarge ? 0 : 20,
              display: "flex",
              flexDirection: isScreenLarge ? "column" : "row",
            }}
          >
            <Box sx={{ minWidth: "500px", height: "100%", mr: 8 }}>
              <Typography
                sx={{
                  lineHeight: "100%",
                  mt: 10,
                  fontSize: "40px",
                  fontWeight: "bold",
                  paddingRight: isScreenLarge ? 10 : "50%",
                  paddingRight: isScreenSmall ? 10 : "50%",
                }}
              >
                Stories, style, and sporting goods at adidas, since 1949
              </Typography>

              <Typography
                sx={{ fontSize: "17px", textAlign: "justify", mt: 5 }}
              >
                Through sports, we have the power to change lives. Sports keep
                us fit. They keep us mindful. They bring us together. Athletes
                inspire us. They help us to get up and get moving. And sporting
                goods featuring the latest technologies help us beat our
                personal best. adidas is home to the runner, the basketball
                player, the soccer kid, the fitness enthusiast, the yogi. And
                even the weekend hiker looking to escape the city. The 3-Stripes
                are everywhere and anywhere. In sports. In music. On life’s
                stages. Before the whistle blows, during the race, and at the
                finish line. We’re here to support creators. To improve their
                game. To live their lives. And to change the world. adidas is
                about more than sportswear and workout clothes. We partner with
                the best in the industry to co-create. This way we offer our
                fans the sporting goods, style and clothing that match the
                athletic needs, while keeping sustainability in mind. We’re here
                to support creators. Improve their game. Create change. And we
                think about the impact we have on our world.
                <br /> <br />
                adidas is about more than sportswear and workout clothes. We
                partner with the best in the industry to co-create. This way we
                offer our fans the sporting goods, style and clothing that match
                the athletic needs, while keeping sustainability in mind. We’re
                here to support creators. Improve their game. Create change. And
                we think about the impact we have on our world.
              </Typography>
            </Box>
            <Box sx={{ minWidth: "500px", height: "100%" }}>
              <Typography
                sx={{
                  lineHeight: "100%",
                  mt: 10,
                  fontSize: "40px",
                  fontWeight: "bold",
                  paddingRight: isScreenLarge ? 10 : "50%",
                  paddingRight: isScreenSmall ? 10 : "50%",
                }}
              >
                Stories, style, and sporting goods at adidas, since 1949
              </Typography>

              <Typography
                sx={{ fontSize: "17px", textAlign: "justify", mt: 5 }}
              >
                Through sports, we have the power to change lives. Sports keep
                us fit. They keep us mindful. They bring us together. Athletes
                inspire us. They help us to get up and get moving. And sporting
                goods featuring the latest technologies help us beat our
                personal best. adidas is home to the runner, the basketball
                player, the soccer kid, the fitness enthusiast, the yogi. And
                even the weekend hiker looking to escape the city. The 3-Stripes
                are everywhere and anywhere. In sports. In music. On life’s
                stages. Before the whistle blows, during the race, and at the
                finish line. We’re here to support creators. To improve their
                game. To live their lives. And to change the world. adidas is
                about more than sportswear and workout clothes. We partner with
                the best in the industry to co-create. This way we offer our
                fans the sporting goods, style and clothing that match the
                athletic needs, while keeping sustainability in mind. We’re here
                to support creators. Improve their game. Create change. And we
                think about the impact we have on our world.
                <br /> <br />
                adidas is about more than sportswear and workout clothes. We
                partner with the best in the industry to co-create. This way we
                offer our fans the sporting goods, style and clothing that match
                the athletic needs, while keeping sustainability in mind. We’re
                here to support creators. Improve their game. Create change. And
                we think about the impact we have on our world.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            minHeight: "150px",
            height: "auto",

            bgcolor: "rgb(237,231,52)",
            display: "Flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isScreenSmall ? "column" : "row",
          }}
        >
          <Typography
            sx={{
              fontSize: isScreenSmall ? "30px" : "40px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            JOIN OUR ADICLUB & GET 15% OFF
          </Typography>

          <Button
            sx={{
              ml: 4,
              fontWeight: "bold",
              bgcolor: "black",
              fontSize: "18px",
              color: "white",
              "& .MuiSvgIcon-root": {
                fontSize: "40px",
              },
              "&:hover": {
                color: "rgba(255, 255, 255, 0.7)",
                bgcolor: "black",
              },
            }}
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
          >
            SIGN UP FOR FREE
          </Button>
        </Box>
        {/* FOOTER */}
        <Box
          sx={{
            width: "100%",
            minHeight: "470px",
            height: "auto",

            bgcolor: "rgb(245,245,229)",
            display: "flex",

            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {FooterItem.map((item, index) => (
              <Box
                sx={{
                  ml: 4,
                  // Allow first 2 boxes to grow, others will fill space on the last row
                  mb: index < 2 ? 0 : 5, // A
                }}
                key={item.name}
              >
                <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  {item.name}
                </Typography>

                {item.tags &&
                  item.tags.map((tag) => (
                    <Box sx={{ display: "block", mt: "10px" }} key={tag}>
                      <Link
                        underline="none"
                        color={"black"}
                        sx={{
                          "&:hover": {
                            textDecoration: "underline",
                          },
                          fontSize: "15px",
                        }}
                        href="#"
                      >
                        {tag}
                      </Link>
                    </Box>
                  ))}
              </Box>
            ))}
            <Box sx={{ ml: 4 }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                {" "}
                <FacebookIcon sx={{ fontSize: 40 }} />
                <InstagramIcon sx={{ fontSize: 40 }} />
                <TwitterIcon sx={{ fontSize: 40 }} />
                <PinterestIcon sx={{ fontSize: 40 }} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            minWidth: "100%",
            minHeight: "150px",
            height: "auto",
            bgcolor: "rgb(40,44,49)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {" "}
            {FooterLast.map((item, index) => (
              <React.Fragment key={item.name}>
                {index !== 0 && ( // Add this condition to avoid adding a divider before the first link
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    sx={{
                      mt: -1,
                      bgcolor: "white",
                      width: "2px",
                      height: "35px",
                      ml: 3,
                    }}
                  />
                )}
                <Link
                  underline="none"
                  color={"white"}
                  sx={{
                    fontSize: "12px",
                    ml: 4,
                  }}
                  href="#"
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ color: "white", position: "absolute", marginTop: 15 }}>
            © 2023 adidas America, Inc.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Nike;
