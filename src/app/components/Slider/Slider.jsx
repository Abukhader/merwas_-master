import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Slider = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "100vh", // استخدام 100vh لجعل الصورة تمتلئ ارتفاع الشاشة بالكامل
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/5daa/8003/6cee5f525bf1c6f1a4c785b5e71c317c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMEDuMHXV~~kYmES8I7YKa7kdlIORQlhoLUYr4Y6pzU1BDo5yQb4NoUu1m-EDqkAWh4ZBnRFf4cxAC2P0Ej2ucoGO-izVnlIt~SZF87Dq3pr4PRXyM2I~ytlp3X3d6ngjw5g9usyah3rfPBJtNE-sgbbqKX0K~zIDbUa-zGPD-wVCTzeqe5-~2MY6X-s2NfZOHnI3aYopyDPMWhCXVickXSMdFvDptzVaLPmOWgLT0tmdcuwkHIueCLDEy1U8uBQxNw4X9MZ95oWCdNngw0GHZshBp64D2P7pcsMOKTbMfbahsgzmBAYgifTXBJnTrPvwVGJ6A9TIfrcBlbkJk0eUA__")',
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dégradé linéaire au-dessus de l'image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(254.87deg, rgba(68, 76, 95, 0.38) 2.07%, #444C5F 68.18%),
                      linear-gradient(0deg, rgba(55, 66, 92, 0.41), rgba(55, 66, 92, 0.41))`,
        }}
      />

      <Toolbar>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: -70,
            width: "746px",
            height: "265px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "76px",
              textAlign: "left",
              color: "white",
            }}
          >
            Welcome to The <span style={{ color: "#EB6B2A" }}>OurWebsite</span>{" "}
            Your Platform for Launching Towards Technological Success!
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Slider;
