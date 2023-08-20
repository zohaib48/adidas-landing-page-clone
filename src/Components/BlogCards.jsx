import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const BlogCards = ({item}) => {
  
    console.log(item.id)
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
      flexGrow: 1,
    }}
  >
    <Card>
      <CardMedia
        component="div"
        sx={{
          width: "auto",
          overflow: "hidden",
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
        <CardContent sx={{ position: "relative" }}>
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
                fontSize: "19px",
                fontWeight: "bold",
              }}
            >
              {item.heading}
            </Typography>
            <Typography
              sx={{
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
  )
}

export default BlogCards