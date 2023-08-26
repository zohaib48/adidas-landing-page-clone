import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


import React from 'react'

const InterestedCards = (props) => {
    const {item}=props;
  return (
    <Card
                key={item.id}
                sx={{
                  minWidth: item.widths,
                  
                  mr: 3,
                  mb: 2,
                  border:"solid",
                  borderWidth:"1px",
                  borderColor:"transparent",
                  "&:hover": {
                    border: "solid",
                    borderWidth: "1px",
                  },
                }}
              >
                <CardMedia
                  component="div"
                 
                  sx={{ position: "relative" ,height:item.heights}}
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
  )
}

export default InterestedCards