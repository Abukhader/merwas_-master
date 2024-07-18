// components/Navbar1.js

import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const navbar1Style = {
  width: "198px",
  height: "35px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  marginLeft: "auto", // ينقل Navbar1 إلى اليمين
};

const Navbar1 = () => {
  return (
    <div style={navbar1Style}>
      <Stack direction="row" spacing={2}>
        <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default Navbar1;
