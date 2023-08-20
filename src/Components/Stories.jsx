import { Box, Typography } from "@mui/material";
import React from "react";

const Story = ({ item }) => {
  return (
    <Box sx={{ minWidth: "auto", height: "100%", mr: 4 }}>
      <Typography
        sx={{
          lineHeight: "100%",
          mt: 10,
          fontSize: "40px",
          fontWeight: "bold",
          paddingRight: "40%",
        }}
      >
        {item.heading}
      </Typography>

      <Typography
        sx={{ fontSize: "17px", textAlign: "justify", mt: 5, paddingBottom: 6 }}
      >
        {item.description}
      </Typography>
    </Box>
  );
};

export default Story;
