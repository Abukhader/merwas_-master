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

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "476px",
        backgroundColor: "#3F485E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Toolbar sx={{ flexDirection: "column" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "44.8px",
            textAlign: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Subscribe our newsletter
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "30px",
            textAlign: "center",
            color: "white",
            mb: 5,
          }}
        >
          Your download should start automatically, if not Click here. Should I
          give up, huh?.
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <TextField
            id="email-input"
            label="Enter your email"
            variant="outlined"
            sx={{
              width: "400px",
              height: "60px",
              borderRadius: "65px 0 0 65px",
              border: "none",
              borderBottom: "1px solid white",
              backgroundColor: "#fff",
              color: "white",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "180px",
              height: "60px",
              borderRadius: "0 65px 65px 0",
              backgroundColor: "#858585",
              color: "white",
            }}
          >
            Subscribe
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: 10,
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "white", width: "20px" }}>
            <FacebookIcon />
          </Typography>
          <Typography sx={{ color: "white", width: "20px" }}>
            <InstagramIcon />
          </Typography>
          <Typography sx={{ color: "white", width: "20px" }}>
            <LinkedInIcon />
          </Typography>
          <Typography sx={{ color: "white", width: "20px" }}>
            <TwitterIcon />
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
