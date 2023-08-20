import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button } from '@mui/material';


const Hero_button = (props) => {
    
    
  return (
    <Box sx={{ display: "block" }}>
    <Button
      sx={{
        mt: 2,
        fontWeight: "bold",
        bgcolor: "black",
        fontSize: "20px",
        color: "white",
        transition: "color bgcolor 0.6s", 
        "& .MuiSvgIcon-root": {
          fontSize: "50px",
        },
        "&:hover": {
          bgcolor: "white",
          color:"black"
       
        },
      }}
      variant="contained"
      endIcon={<ArrowRightAltIcon />}
    >
      {props.name}
    </Button>
  </Box>
  )
}

export default Hero_button