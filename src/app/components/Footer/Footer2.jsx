import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Stack } from "@mui/material";

const Footer2 = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#3F485E",
        margin: "0 auto", // لوضعه في المنتصف
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "1173px",
          display: "flex",
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontFamily: "Cairo",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "15.85px",
            textAlign: "center",
            color: "#aaa",
            mt: 5,
          }}
        >
          Copyright © 2024 OurWebsite. All Rights Reserved.
        </Typography>

        <FormControl
          variant="outlined"
          sx={{ minWidth: 140, mt: 3, mb: 3, height: "50px" }}
        >
          <InputLabel id="language-select-label" sx={{ color: "#aaa" }}>
            English
          </InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            label="Language"
            sx={{ color: "white" }}
          ></Select>
        </FormControl>
      </Stack>
    </AppBar>
  );
};

export default Footer2;
