import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PopularItem = ({ name }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid item xs={12} sm={6} md={4} key={name}>
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
            {name}
          </Typography>
        </Item>
      </Box>
    </Grid>
  );
};

export default PopularItem;
