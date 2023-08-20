import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import shoe from "./addidas_image/shoes.avif";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "../Components/header";
import ShopCards from "../Components/ShopCards";
import BlogCards from "../Components/BlogCards";
import PopularItem from "../Components/PopularItem";
import Story from "../Components/Stories";
import FooterItem from "../Components/FooterItem";
import LastFooter from "../Components/LastFooter";
import Hero_button from "../Components/hero_section_Buttons";
import InterestedCards from "../Components/Still_interested_Cards";
import CategoryCards from "../Components/Category_Cards";
import ScrolbarBox from "../Components/Scrolbar";
import Links from "../Components/Links";




const Nike = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isScreenLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        {/**************
                 HEADER
                 **************/}
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
        <Header />

        {/**************
                  HERO SECTION
                 **************/}
        <Box
          sx={{
            mt: "130px",
            height: "calc(100vh - 180px)",
            width: "100%",
            backgroundImage: `url(https://www.asics.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-asics-us-Library/default/dw29ebd128/firstspirit/media/blog_article_images_22521/asics_blog_hero_desktop_runningvstraining_022521.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "end",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              ml: 2,
              [theme.breakpoints.up("sm")]: {
                ml: 20,
              },
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "50px", color: "white" }}
            >
              SUPERSTAR XLG
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
            >
              No expectations, no rules. Tell your story with the Superstar XLG.
            </Typography>

            <Hero_button name={"SHOP WOMEN"} />
            <Hero_button name={"SHOP MEN"} />
          </Box>
        </Box>

        {/**************
                  YEEZY SECTION
                 **************/}

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
            YEEZY
          </Typography>
          <Typography
            sx={{ fontSize: "20px", color: "black", textAlign: "center" }}
          >
            AVAILABLE ON CONFIRMED. DOWNLOAD, REGISTER, PARTICIPATE <br /> A
            PORTION OF THE SALE OF THESE ITEMS WILL BE DONATED IN SUPPORT OF THE
            FIGHT AGAINST <br />
            DISCRIMINATION, HATE, RACISM, AND ANTISEMITISM.{" "}
          </Typography>

          <Links name={"SHOP NOW"} />
          <Links name={"  READ THE PRESS RELEASE"} />
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              color: "black",
              mt: 8,
              ml: 1,
              [theme.breakpoints.up("sm")]: {
                ml: 20,
              },
            }}
          >
            Still Interested?
          </Typography>
        </Box>
        {/**************
                Still Interested?  SLIDER
                 **************/}
        <Box sx={{ mt: 5 }}>
          <ScrolbarBox marginLeft={2}>
            <InterestedCards
              item={{
                id: 1,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/7be716def58143c7b09bef9dfa69f604_9366/Ultraboost_1.0_Shoes_Black_ID9682_01_standard.jpg",
                title: "Samba Classic",
                description: "Performance",
                widths: "400px",
                height: "420px",
              }}
            />

            <InterestedCards
              item={{
                id: 2,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/162d94b2d5e74a1896aa40daae13733f_9366/Ultraboost_1.0_Shoes_Grey_ID9681_01_standard.jpg",
                title: "UltraBoost 1.0 Shoes",
                description: "Sportswear",
                widths: "400px",
                heights: "420px",
              }}
            />
            <InterestedCards
              item={{
                id: 3,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/ac32ca411304417e9f5faf2c0005c887_9366/Ultraboost_1.0_Shoes_White_HQ6172_01_standard.jpg",
                title: "Samba Classic",
                description: "Performance",
                widths: "400px",
                heights: "420px",
              }}
            />
            <InterestedCards
              item={{
                id: 4,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/ac32ca411304417e9f5faf2c0005c887_9366/Ultraboost_1.0_Shoes_White_HQ6172_01_standard.jpg",
                title: "UltraBoost 1.0 Shoes",
                description: "Sportswear",
                widths: "400px",
                heights: "420px",
              }}
            />
            <InterestedCards
              item={{
                id: 5,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/8821e194e24a44c08447af2c0123077a_9366/Ultraboost_1.0_Shoes_Grey_GY7479_01_standard.jpg",
                title: "Samba Classic",
                description: "Performance",
                widths: "400px",
                heights: "420px",
              }}
            />
            <InterestedCards
              item={{
                id: 6,
                image: shoe,
                title: "UltraBoost 1.0 Shoes",
                description: "Sportswear",
                widths: "400px",
                heights: "420px",
              }}
            />
          </ScrolbarBox>
        </Box>

        <>
          {/**************
                CATEGORIES
                 **************/}

          <Grid
            container
            spacing={2}
            sx={{
              mt: 20,

              paddingLeft: 1,
              paddingRight: 1,
              [theme.breakpoints.up("xl")]: {
                paddingLeft: 20,
                paddingRight: 20,
              },
              display: "flex",
            }}
          >
            <CategoryCards item={{ id: 1, name: "SHOES", image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ac32ca411304417e9f5faf2c0005c887_9366/Ultraboost_1.0_Shoes_White_HQ6172_01_standard.jpg" }} />
            <CategoryCards
              item={{
                id: 2,
                name: "CLOTHING",
                image:
                  "https://assets.adidas.com/images/w_940,f_auto,q_auto/d60137ddd39f4e8ab548af2e00b2f8ca_9366/HZ9066_21_model.jpg",
              }}
            />
            <CategoryCards
              item={{
                id: 3,
                name: "BEST SELLERS",
                image:
                  "https://www.adidas.ae/on/demandware.static/-/Sites-adidas-navigation-uae/default/dw5fa4e343/Men_Shoes.png",
              }}
            />
            <CategoryCards
              item={{
                id: 4,
                name: "NEW ARRIVALS",
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/fed2d7dda45047eb8b3d84e3c0a99fc4_9366/Crazy_8_Shoes_Black_IF2448_01_standard.jpg",
              }}
            />
          </Grid>
        </>

        {/**************
                New Arival
                 **************/}
        <Box component={"Trending"} sx={{}}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 10,
              ml: 2,

              [theme.breakpoints.up("xl")]: {
                ml: 20,
                mr: 20,
              },
            }}
          >
            <Grid item xs={12} md={4} lg={3}>
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ArrowRightAltIcon sx={{ fontSize: "60px" }} />
                New Arrivals
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "rgba(0, 0, 0, 0.3)",
                }}
              >
                {" "}
                What's Trending
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "rgba(0, 0, 0, 0.3)",
                }}
              >
                {" "}
                Member Exclusives
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Links name={" View All"} />
            </Grid>
          </Grid>

          <ScrolbarBox>
            <InterestedCards
              item={{
                id: 1,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/87679d1bd55e467d87588258324a90e5_9366/adidas_Stan_Smith_Homer_Simpson_White_IE7564_01_standard.jpg",
                title: "Crazy 8 Shoes",
                description: "Men Orignal",
                widths: "300px",
                heights: "300px",
              }}
            />
            <InterestedCards
              item={{
                id: 2,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/0b7c7cfed42b4359abc8b6856f3741a2_9366/Arsenal_23-24_Third_Jersey_Green_HR6935_HM1.jpg",
                title: "Arsenal 23/24 Third Jersey",
                description: "Men Soccer",
                widths: "300px",
                heights: "300px",
              }}
            />
            <InterestedCards
              item={{
                id: 3,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/162d94b2d5e74a1896aa40daae13733f_9366/Ultraboost_1.0_Shoes_Grey_ID9681_01_standard.jpg",
                title: "Ulra Shoes 1.0",
                description: "Mens Sportswear",
                widths: "300px",
                heights: "300px",
              }}
            />
            <InterestedCards
              item={{
                id: 4,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/8bc17cbdc83646a6b093cb217a850fbd_9366/ULTRA_4DFWD_White_ID1687_HM1.jpg",
                title: "Samba Classic",
                description: "Performance",
                widths: "300px",
                heights: "300px",
              }}
            />
            <InterestedCards
              item={{
                id: 5,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/d3179f9f790e44fdb67b9def85f6a1ec_9366/Arsenal_23-24_Third_Authentic_Jersey_Green_IN1603_HM1.jpg",
                title: "Arsenal 23/24 Third Jersey",
                description: "Mens Sportswear",
                widths: "300px",
                heights: "300px",
              }}
            />
            <InterestedCards
              item={{
                id: 6,
                image:
                  "https://assets.adidas.com/images/w_600,f_auto,q_auto/7be716def58143c7b09bef9dfa69f604_9366/Ultraboost_1.0_Shoes_Black_ID9682_01_standard.jpg",
                title: "Crazy 8 Shoes",
                description: "Performance",
                widths: "300px",
                heights: "300px",
              }}
            />
          </ScrolbarBox>
        </Box>

        {/**************
                New Arival
                 **************/}

        <Grid
          container
          spacing={4}
          sx={{
            mt: 20,
            paddingLeft: isScreenSmall ? 1 : 10,
            paddingRight: isScreenSmall ? 1 : 10,
          }}
        >
          <ShopCards
            item={{
              image:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/originals-fw23-adicolor-tk1-global-launch-glp-kids-tc-v1-1_tcm221-1056616.jpg",
              heading: "ICONIC THEN. ICONIC NOW",
              SubHeading: "Elevate your everyday style with the Samba.",
            }}
          />
          <ShopCards
            item={{
              image:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/ss23-womens-running-onsite-teaser-card_tcm221-1056612.jpg",
              heading: "THE LIGHTEST ULTRABOOST EVER",
              SubHeading:
                "Ultraboost Light, with 30% lighter Boost for ultimate cushioning and comfort.",
            }}
          />
          <ShopCards
            item={{
              image:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/fw23-messi-miami-graphics-collection-tcc_tcm221-1057922.jpg",
              heading: "JUST DROPPED: TRAE 3",
              SubHeading:
                "Engineered with performance technology unlike any shoe on court..",
            }}
          />
          <ShopCards
            item={{
              image:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/hc184-fw23-bts-aug-collegiate-onsite-hp-tcc-product_tcm221-1051392.jpg",
              heading: "BACK TO SCHOOL STYLES",
              SubHeading:
                "Kick-start your fall wardrobe with tees, shorts and sneakers to mix and match.",
            }}
          />
        </Grid>

        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              mt: 10,
              ml: 2,
              [theme.breakpoints.up("sm")]: {
                ml: 20,
              },
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            MORE FROM ADIDAS STORIES
          </Grid>
          <Grid
            item
            container
            mt={5}
            sx={{
              paddingLeft: 0,
              paddingRight: 2,
              [theme.breakpoints.up("md")]: {
                paddingLeft: 10,
                paddingRight: 10,
              },
            }}
          >
            <BlogCards
              item={{
                id: 1,
                image:
                  "https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/soccer-offside-rules-blog-thumbnail-d_221-953959.jpg",
                heading: "WHAT IS A PENALTY KICK IN SOCCER",
                SubHeading:
                  "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adidas.",
              }}
            />

            <BlogCards
              item={{
                id: 2,
                image:
                  "https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/ultraboost-light-size-guide-blog-thumbnail-d_221-992396.jpg",
                heading: "OFFSIDES IN SOCCER: EXPLAINED IN DETAIL",
                SubHeading:
                  "Watching a match? Get the scoop on the rules of the game, starting with the offside soccer rule, explained by adidas.",
              }}
            />
            <BlogCards
              item={{
                id: 3,

                image:
                  "https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/forum-size-guide-blog-thumbnail-d_221-1056582.jpg",
                heading: "THE DEFINITIVE ADIDAS FORUM SIZE",
                SubHeading:
                  "The combination of sport and style, the adidas Forum was made for making a statement no matter where you step. Find your Forum fit using our size guide",
              }}
            />
            <BlogCards
              item={{
                id: 4,
                image:
                  "https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/what-are-soccer-penalty-kicks-blog-thumbnail-d_221-952992.jpg",
                heading: "WHAT IS A PENALTY KICK IN SOCCER",
                SubHeading:
                  "Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adidas.",
              }}
            />
          </Grid>
        </Grid>

        {/**************
              Popular Right Now
                 **************/}
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
          <Box sx={{ maxWidth: "100%", mt: 5 }}>
            <Grid
              container
              rowSpacing={7}
              columnSpacing={{ xs: 5, sm: 5, md: 3 }}
            >
              <PopularItem name={"UltraBoost"} />
              <PopularItem name={"nmd"} />
              <PopularItem name={"Backpacks"} />
              <PopularItem name={"Cheats"} />
              <PopularItem name={"Stan Smith"} />
              <PopularItem name={"Samba"} />
            </Grid>
          </Box>
        </Box>

        {/**************
              STORIES
                 **************/}
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
              flexDirection: isScreenSmall ? "column" : "row",
            }}
          >
            <Story
              item={{
                heading:
                  "Stories, style, and sporting goods at adidas, since 1949",
                description: (
                  <Box>
                    Through sports, we have the power to change lives. Sports
                    keep us fit. They keep us mindful. They bring us together.
                    Athletes inspire us. They help us to get up and get moving.
                    And sporting goods featuring the latest technologies help us
                    beat our personal best. adidas is home to the runner, the
                    basketball player, the soccer kid, the fitness enthusiast,
                    the yogi. And even the weekend hiker looking to escape the
                    city. The 3-Stripes are everywhere and anywhere. In sports.
                    In music. On life’s stages. Before the whistle blows, during
                    the race, and at the finish line. We’re here to support
                    creators. To improve their game. To live their lives. And to
                    change the world. adidas is about more than sportswear and
                    workout clothes. We partner with the best in the industry to
                    co-create. This way we offer our fans the sporting goods,
                    style and clothing that match the athletic needs, while
                    keeping sustainability in mind. We’re here to support
                    creators. Improve their game. Create change. And we think
                    about the impact we have on our world.
                    <br />
                    <br />
                    adidas is about more than sportswear and workout clothes. We
                    partner with the best in the industry to co-create. This way
                    we offer our fans the sporting goods, style and clothing
                    that match the athletic needs, while keeping sustainability
                    in mind. We’re here to support creators. Improve their game.
                    Create change. And we think about the impact we have on our
                    world.
                  </Box>
                ),
              }}
            />

            <Story
              item={{
                heading:
                  "Stories, style, and sporting goods at adidas, since 1949",
                description: (
                  <Box>
                    Through sports, we have the power to change lives. Sports
                    keep us fit. They keep us mindful. They bring us together.
                    Athletes inspire us. They help us to get up and get moving.
                    And sporting goods featuring the latest technologies help us
                    beat our personal best. adidas is home to the runner, the
                    basketball player, the soccer kid, the fitness enthusiast,
                    the yogi. And even the weekend hiker looking to escape the
                    city. The 3-Stripes are everywhere and anywhere. In sports.
                    In music. On life’s stages. Before the whistle blows, during
                    the race, and at the finish line. We’re here to support
                    creators. To improve their game. To live their lives. And to
                    change the world. adidas is about more than sportswear and
                    workout clothes. We partner with the best in the industry to
                    co-create. This way we offer our fans the sporting goods,
                    style and clothing that match the athletic needs, while
                    keeping sustainability in mind. We’re here to support
                    creators. Improve their game. Create change. And we think
                    about the impact we have on our world.
                    <br />
                    <br />
                    adidas is about more than sportswear and workout clothes. We
                    partner with the best in the industry to co-create. This way
                    we offer our fans the sporting goods, style and clothing
                    that match the athletic needs, while keeping sustainability
                    in mind. We’re here to support creators. Improve their game.
                    Create change. And we think about the impact we have on our
                    world.
                  </Box>
                ),
              }}
            />
          </Box>
        </Box>

        {/**************
             PERCENT OFF BANNER
                 **************/}
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
       
        {/**************
           FOOTER
                 **************/}
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
            <FooterItem
              item={{
                name: "PRODUCTS",
                tags: [
                  "Shoes",
                  "Clothing",
                  "Accessories",
                  "Gift Cards",
                  "New Arrival",
                  "Best Seller",
                ],
              }}
            />
            <FooterItem
              item={{
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
              }}
            />
            <FooterItem
              item={{
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
              }}
            />
            <FooterItem
              item={{
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
              }}
            />

            <Box sx={{ ml: 4 }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                {" "}
                <a
                  href="https://www.facebook.com/adidas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon
                    sx={{
                      color: "blue",
                      fontSize: 40,
                      cursor: "pointer",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/adidas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    sx={{
                      color: "red",
                      fontSize: 40,
                      cursor: "pointer",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                </a>
                <a
                  href="https://twitter.com/adidas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon
                    sx={{
                      color: "blue",
                      fontSize: 40,
                      cursor: "pointer",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                </a>
                <a
                  href="https://www.pinterest.com/adidas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PinterestIcon
                    sx={{
                      color: "red",
                      fontSize: 40,
                      cursor: "pointer",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                </a>
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
            <LastFooter name={"Your Privacy Choices"} />
            <LastFooter name={"Privacy policy"} />
            <LastFooter name={"Terms and Conditions"} />
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
