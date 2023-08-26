import {  Divider, Link } from "@mui/material";
import React from "react";


const LastFooter = ({ name }) => {
  return (
 
      <React.Fragment key={name}>
  
  <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              mt: -1,
              bgcolor: "white",
              width: "2px",
              height: "35px",
              ml: 2,
            }}
          />
     
        <Link
          underline="none"
          color={"white"}
          sx={{
            fontSize: "12px",
            ml: 2,
          }}
          href="#"
        >
          {name}
        </Link>
        <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              mt: -1,
              bgcolor: "white",
              width: "2px",
              height: "35px",
              ml: 3,
            }}
          />
      </React.Fragment>

  );
};

export default LastFooter;
