"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundColor: "#3F485E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: isSmallScreen ? 4 : 6, // Adjust padding for small screens
        px: 2, // Adjust horizontal padding
      }}
    >
      <Toolbar sx={{ flexDirection: "column", width: "100%", maxWidth: 1200 }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: { xs: "24px", sm: "30px", md: "35px" }, // Responsive font size
            fontWeight: 700,
            lineHeight: { xs: "36px", sm: "44px" }, // Responsive line height
            textAlign: "center",
            color: "white",
            mb: 2,
          }}
        >
          Subscribe to our newsletter
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            fontWeight: 400,
            lineHeight: { xs: "24px", sm: "30px" }, // Responsive line height
            textAlign: "center",
            color: "white",
            mb: 4,
          }}
        >
          Your download should start automatically, if not click here. Should I
          give up, huh?.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isSmallScreen ? "-1px" : "0px",
            mb: 4,
          }}
        >
          <TextField
            id="email-input"
            label="Enter your email"
            variant="outlined"
            sx={{
              width: isSmallScreen ? "100%" : "400px",
              height: "60px",
              borderRadius: "65px 0 0 65px",
              border: "none",
              backgroundColor: "#fff",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              height: "60px",
              borderRadius: "0 65px 65px 0",
              backgroundColor: "#858585",
              color: "white",
              width: isSmallScreen ? "100%" : "180px",
            }}
          >
            Subscribe
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: isSmallScreen ? "15px" : "30px",
            marginTop: isSmallScreen ? "10px" : "20px",
            cursor: "pointer",
          }}
        >
          <FacebookIcon
            sx={{ color: "white", fontSize: isSmallScreen ? "20px" : "24px" }}
          />
          <InstagramIcon
            sx={{ color: "white", fontSize: isSmallScreen ? "20px" : "24px" }}
          />
          <LinkedInIcon
            sx={{ color: "white", fontSize: isSmallScreen ? "20px" : "24px" }}
          />
          <TwitterIcon
            sx={{ color: "white", fontSize: isSmallScreen ? "20px" : "24px" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
