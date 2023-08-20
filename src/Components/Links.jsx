import { Link } from '@mui/material';
import React from 'react'

const Links = (props) => {
    const {name} = props;
  return (
    <Link
    underline="always"
    color={"inherit"}
    sx={{
      "&:hover": {
        backgroundColor: "black",
        color: "white", // Change the text color when hovered, if needed
      },
      fontSize: "18px",
      fontWeight:"bold",
      mt: 4,
    }}
    href="#"
  >
    {name}
  </Link>
  )
}

export default Links