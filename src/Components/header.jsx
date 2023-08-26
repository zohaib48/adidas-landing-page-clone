import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  InputAdornment,
  ListItemIcon,
  TextField,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import flag from "../page/addidas_image/flag.png";
import { makeStyles } from "@mui/styles";
import logo from "../page/addidas_image/addidas.png";
import ClearIcon from "@mui/icons-material/Clear";

const headersData = [
  {
    label: "MEN",
    href: "/listings",
  },
  {
    label: "WOMEN",
    href: "/mentors",
  },
  {
    label: "KIDS",
    href: "/account",
  },
  {
    label: "BACK TO SCHOOL",
    href: "/logout",
  },
  {
    label: "SALE",
    href: "/logout",
  },
  {
    label: "3 STRIPE LIFE",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  drawerContainer: {
    padding: "20px 30px",
  },
}));



export default function Header() {
  const [searchText, setSearchText] = React.useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };

  const { header, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { mobileView, drawerOpen } = state;
  const theme = useTheme();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const Displaydesktop = () => {
    return (
      <AppBar
        sx={{
          height: "90px",
          bgcolor: "white",
          mt: "40px",
          position: "fixed",
          display: "flex",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              cursor: "pointer",
              display: `flex`,
              height: `900px`,

              width: "150px",
              backgroundImage: `url(${logo})`,
              backgroundSize: 250,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              [theme.breakpoints.down("lg")]: {
                width: "0px",
              },
            }}
          ></Box>

          <Box
            sx={{
              ml: 10,
              [theme.breakpoints.down("xl")]: {
                ml: 0,
                mr: 10,
              },
              minWidth: "750px",
            }}
          >
            <Tabs
              onChange={handleChange}
              value={value}
              sx={{
                width: "auto",
                marginBottom: -3,
                color: "black",
                fontSize: "40px",
                "& .MuiTabs-indicator": {
                  backgroundColor: "black",
                },
              }}
              aria-label="secondary tabs example"
            >
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  "&.Mui-selected": { color: "black" },
                  paddingBottom: 0,
                }}
                value="one"
                label="MEN"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  "&.Mui-selected": { color: "black" },
                  paddingBottom: 0,
                }}
                value="two"
                label="WOMEN"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  "&.Mui-selected": { color: "black" },
                  paddingBottom: 0,
                }}
                value="three"
                label="KIDS"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  "&.Mui-selected": { color: "black" },
                  paddingBottom: 0,
                }}
                value="four"
                label="BACK TO SCHOOL"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  "&.Mui-selected": { color: "black" },
                  paddingBottom: 0,
                }}
                value="five"
                label="SALE"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  "&.Mui-selected": { color: "black" },
                  paddingBottom: 0,
                }}
                value="six"
                label="3 STRIPE LIFE"
              />
            </Tabs>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: -3,
              mr: 5,

              position: "relative",
            }}
          >
            <Box
              sx={{
                fontSize: "13px",
                width: "350px ",
                position: "absolute",
                top: -30,
                display: "flex",
                alignItems: "Center",
                justifyContent: "space-between",
              }}
            >
              <Link href="#">help</Link>
              <Link href="#">orders and returns</Link>
              <Link href="#">join adiClub</Link>
              <img style={{ width: 30 }} src={flag}></img>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", width: "auto" }}>
              {" "}
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                placeholder="Search"
                value={searchText}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "lightgray",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {searchText ? (
                        <ClearIcon
                          style={{ cursor: "pointer" }}
                          onClick={handleClear}
                        />
                      ) : (
                        <SearchIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              <ListItemIcon
                sx={{
                  ml: 3,
                  width: "150px",
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PersonIcon
                  sx={{
                    fontSize: 30,
                    color: "black",
                    transition: "color 0.1s", // Corrected property name
                    "&:hover": {
                      color: "red",
                      cursor: "pointer",
                    },
                  }}
                />
                <FavoriteBorderIcon
                  sx={{
                    fontSize: 30,
                    color: "black",
                    transition: "color 0.1s", // Corrected property name
                    "&:hover": {
                      color: "red",
                      cursor: "pointer",
                    },
                  }}
                />
                <RedeemIcon
                  sx={{
                    fontSize: 30,
                    color: "black",
                    transition: "color 0.1s", // Corrected property name
                    "&:hover": {
                      color: "blue",
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItemIcon>{" "}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };

  const Displaymobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <AppBar
        sx={{
          height: "90px",
          bgcolor: "white",
          mt: "40px",
          position: "fixed",
          display: "flex",
        }}
      >
        <Toolbar sx={{ bgcolor: "white", width: "100%" ,display:"flex",}}>
          <IconButton
          sx={{}}
            {...{
              edge: "start",
              color: "black",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon sx={{ fontSize: "40px",}} />
          </IconButton>

          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
  <Box
    sx={{
      display: "flex",
      alignItems: "center", // Vertical center alignment
      height: "90px",
      width: "200px",
      mr:5,
      backgroundImage: `url(${logo})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  ></Box>
</Box>

          
        </Toolbar>
      </AppBar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? Displaymobile() : Displaydesktop()}
      </AppBar>
    </header>
  );
}
