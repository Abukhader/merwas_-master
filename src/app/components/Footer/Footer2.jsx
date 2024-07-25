"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useMediaQuery } from "@mui/material";

const Footer2 = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#3F485E",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: isSmallScreen ? 2 : 3, // Adjust padding for different screen sizes
        px: 2,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1173px",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: isSmallScreen ? "center" : "left",
        }}
      >
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontFamily: "Cairo",
            fontSize: isSmallScreen ? "12px" : "13px",
            fontWeight: 400,
            lineHeight: isSmallScreen ? "14px" : "15.85px",
            color: "#aaa",
            mb: isSmallScreen ? 2 : 0,
          }}
        >
          Copyright © 2024 OurWebsite. All Rights Reserved.
        </Typography>

        <FormControl
          variant="outlined"
          sx={{
            minWidth: isSmallScreen ? "100%" : 140,
            mt: isSmallScreen ? 2 : 0,
            mb: isSmallScreen ? 2 : 0,
            height: "50px",
          }}
        >
          <InputLabel id="language-select-label" sx={{ color: "#aaa" }}>
            English
          </InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            label="Language"
            sx={{ color: "white" }}
          >
            {/* Add MenuItems here if needed */}
            <MenuItem value={10}>عربي</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Footer2;
