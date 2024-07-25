"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { links } from "./data";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openActionsDrawer, setOpenActionsDrawer] = useState(false);

  // Use media queries to determine screen size
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:1000px)");

  // Toggle drawer functions
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);
  const handleActionsDrawerOpen = () => setOpenActionsDrawer(true);
  const handleActionsDrawerClose = () => setOpenActionsDrawer(false);

  // Handle logo click to reload the page
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#3F485E" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isSmallScreen ? "row" : "row",
          }}
        >
          {/* Logo Section */}
          <div
            className="logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <Typography variant="h6" component="div">
              <img
                src="https://s3-alpha-sig.figma.com/img/9d94/5d5a/e27406da6768501a6ef485433913ab3d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4xvF5egH99G9qSnofHjj2vlmv9EqAKrP1aIyvnnOwo4VlGv9twVBaYbmbAcGLz~Y53tShmNaWNU4e5obYhz-tssGZDLbz-ONJczDuH6JIjtL3C8ADaUyHi4x8-ajSD6AEY7zE5cEOkemQoL25MOpX-h4zFCdymZGScCpA-JKDbyCwyLrWJh7SkZwh5r17~MTZheqQra1LfMhnwmO5K98XaX6KXNrznU3ebrLSaiZhAkmPwKO-RE26v8DPqd--U0bO8RdJZ~rs02VP4Eh8eL86h1YX81jbak3RZOHZPunNSw6sKjQYewpLu15oGJXfgJ0cuaEULKbSej3fwghW4AOg__"
                alt="Logo"
                style={{ height: "50px", marginTop: 2 }}
              />
            </Typography>
          </div>

          {/* Links Section */}
          {!isSmallScreen && !isMediumScreen ? (
            <div
              className="links"
              sx={{
                flexGrow: 1,
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                  </Button>
                </a>
              ))}
            </div>
          ) : (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                sx={{
                  display: isMediumScreen || isSmallScreen ? "block" : "none",
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="more"
                onClick={handleActionsDrawerOpen}
                sx={{
                  display: isMediumScreen || isSmallScreen ? "block" : "none",
                }}
              >
                <MoreVertIcon />
              </IconButton>
            </>
          )}

          {/* Actions Section (visible on large screens only) */}
          {!isSmallScreen && !isMediumScreen && (
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
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view with links */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "#3F485E",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
          }}
        >
          {links.map((link) => (
            <Button
              key={link.id}
              href={link.href}
              sx={{
                color: "#fff",
                textAlign: "left",
                mb: 2,
                "&:hover": {
                  color: "#EB6B2A",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </Drawer>

      {/* Drawer for mobile view with actions */}
      <Drawer
        anchor="bottom"
        open={openActionsDrawer}
        onClose={handleActionsDrawerClose}
        sx={{
          height: "auto",
          "& .MuiDrawer-paper": {
            height: "auto",
            boxSizing: "border-box",
            backgroundColor: "#3F485E",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            alignItems: "center",
          }}
        >
          <Button
            color="inherit"
            className="language-button"
            sx={{
              mb: 2,
              width: "100%",
              textAlign: "center",
            }}
          >
            Language
          </Button>
          <Button
            sx={{
              border: "1px solid #fff",
              borderRadius: "50px",
              fontSize: "10px",
              width: "100%",
              textAlign: "center",
              mb: 2,
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
              width: "100%",
              textAlign: "center",
            }}
            color="inherit"
            className="register-button"
          >
            Register
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
