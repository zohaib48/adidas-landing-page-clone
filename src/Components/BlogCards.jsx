import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const BlogCards = ({ item }) => {
  console.log(item.id);
  return (
    <Grid
      item
      key={item.id}
      xs={12}
      sm={6}
      md={3}
      sx={{
        pl: 2,
        mb: 2,

        boxShadow: "none",
      }}
    >
      <Card
        sx={{
          height: "100%",
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            width: "auto",
            display: "inline-flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <img
            src={item.image}
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt={item.heading}
          />
          <CardContent
            sx={{
             
            
            }}
          >
            <Box
              sx={{
                width: "100%",
                mt: -5,

                padding: 1,

                bgcolor: "white",
              }}
            >
              <Typography
                gutterBottom
                sx={{  
                  textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow:"hidden",
                WebkitLineClamp: 1,
                

                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow:"hidden",
                  WebkitLineClamp: 3,
                
                  fontSize: "17px",
                  textAlign: "justify",
                }}
                color="black"
              >
                {item.SubHeading}
              </Typography>
            </Box>
          </CardContent>
        </CardMedia>
      </Card>
    </Grid>
  );
};

export default BlogCards;
