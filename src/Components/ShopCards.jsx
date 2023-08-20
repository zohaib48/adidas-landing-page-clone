import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Links from "./Links";
import React from "react";

const ShopCards = (props) => {
  const { item } = props;
  return (
    <Grid item xs={12} sm={6} md={3} key={item.id}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardMedia>
          <img
            src={item.image}
            alt="Product"
            style={{
              height: "500px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </CardMedia>
        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
              {item.heading}
            </Typography>
            <Typography variant="body2" sx={{ mb: 4 }} color="text.secondary">
              {item.SubHeading}
            </Typography>
          </Box>
          <Box style={{ textAlign: "start", marginTop: "auto" }}>
            <Links name={"SHOP NOW"} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ShopCards;
