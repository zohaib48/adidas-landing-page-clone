import { Box, Grid, Link ,useTheme,useMediaQuery} from '@mui/material'
import Links from "./Links";


import React from 'react'

const CategoryCards = ({item}) => {
    const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
   
  return (
    <Grid
    item
    xs={12}
    sm={6}
    md={3}
    key={item.id}
    sx={{
      minWidth: "auto",
      minHeight: "290px",
    }}
  >
    <Box>
      <img
        src={item.image}
        style={{
          width: "100%", // Fixed width for each box
          height: "290px",
          objectPosition: "center",
          objectFit: "cover",
        }}
        alt=""
      />
    </Box>
    <Box sx={{ textAlign: "center", bottom: 10 }}>
    <Links name={item.name}/>
    </Box>
  </Grid>
  )
}

export default CategoryCards