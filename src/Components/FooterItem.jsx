import { Box, Link, Typography,useTheme } from '@mui/material'
import React from 'react'






const FooterItem = ({item}) => {
  const theme =useTheme();
  return (
    <Box
    sx={{
      ml: 4,
      mb:4,
      [theme.breakpoints.down("sm")]:{
        mt:5
      }
      // Allow first 2 boxes to grow, others will fill space on the last row
      
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
  )
}

export default FooterItem