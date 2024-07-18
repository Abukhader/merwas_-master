// components/Navbar.jsx

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { links } from "./data";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#3F485E" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo Section */}
        <div className="logo">
          <Typography variant="h6" component="div">
            <img
              src="https://s3-alpha-sig.figma.com/img/9d94/5d5a/e27406da6768501a6ef485433913ab3d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4xvF5egH99G9qSnofHjj2vlmv9EqAKrP1aIyvnnOwo4VlGv9twVBaYbmbAcGLz~Y53tShmNaWNU4e5obYhz-tssGZDLbz-ONJczDuH6JIjtL3C8ADaUyHi4x8-ajSD6AEY7zE5cEOkemQoL25MOpX-h4zFCdymZGScCpA-JKDbyCwyLrWJh7SkZwh5r17~MTZheqQra1LfMhnwmO5K98XaX6KXNrznU3ebrLSaiZhAkmPwKO-RE26v8DPqd--U0bO8RdJZ~rs02VP4Eh8eL86h1YX81jbak3RZOHZPunNSw6sKjQYewpLu15oGJXfgJ0cuaEULKbSej3fwghW4AOg__"
              alt="Logo"
              style={{ height: "50px" }}
            />
          </Typography>
        </div>

        {/* Links Section */}
        <div className="links" sx={{ flexGrow: 1, textAlign: "center" }}>
          {links.map((link) => (
            <a key={link.id} href={link.href} passHref>
              <Button
                sx={{
                  color: "#fff",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    backgroundColor: "currentColor",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover": {
                    color: "#EB6B2A",
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
              >
                {link.label}
              </Button>{" "}
            </a>
          ))}
        </div>

        {/* Actions Section */}
        <div className="actions">
          <Button color="inherit" className="language-button">
            Language
          </Button>
          <Button
            sx={{
              border: "1px solid #fff",
              borderRadius: "50px",
              fontSize: "10px",
              mx: 1,
            }}
            color="inherit"
            className="login-button"
          >
            Login
          </Button>
          <Button
            sx={{
              bgcolor: "#fff",
              border: "1px solid #fff",
              borderRadius: "50px",
              color: "#3F485E",
              fontSize: "10px",
            }}
            color="inherit"
            className="register-button"
          >
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
