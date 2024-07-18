import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CreateIcon from "@mui/icons-material/Create";

export default function Contactus() {
  return (
    <div id="contactus">
      <Container>
        <Box sx={{ textAlign: "center", my: 10 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2, color: "#3F485E" }}
          >
            Contact US
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#aaa", fontSize: "15px", mb: 5 }}
          >
            With lots of unique blocks, you can easily build a page
            <br /> easily without any coding.
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 10, color: "#3F485E" }}
          >
            Get in touch today!
          </Typography>
          <Typography
            variant="h4"
            sx={{ textAlign: "left", mb: 2, color: "#3F485E" }}
          >
            Contact details
          </Typography>

          <Grid
            container
            justifyContent="center"
            sx={{ textAlign: "center", pt: 5, pb: 8 }}
          >
            {/* Contact Details Column 1 */}
            <Grid item xs={12} sm={3}>
              <Stack spacing={2}>
                {/* Location */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOnIcon sx={{ color: "#aaa" }} />
                  <Typography variant="subtitle1">Find Us</Typography>
                </Stack>
                <Typography
                  sx={{ textAlign: "left", pl: 5, color: "#999" }}
                  variant="body1"
                >
                  2301 AMMAN . JORDAN
                </Typography>

                {/* Working Hours */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTimeIcon sx={{ color: "#aaa" }} />
                  <Typography variant="subtitle1">Working Hours</Typography>
                </Stack>
                <Typography
                  sx={{ textAlign: "left", pl: 5, color: "#999" }}
                  variant="body1"
                >
                  Mon-Fri: 8 AM - 5 PM
                  <br />
                  Sat-Sun: 8 AM - 2 PM
                </Typography>

                {/* Social Media */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <ShareIcon sx={{ color: "#aaa" }} />
                  <Typography variant="subtitle1">Follow Us</Typography>{" "}
                </Stack>
                <Stack
                  direction="row"
                  paddingLeft={5}
                  sx={{ cursor: "pointer" }}
                >
                  <FacebookIcon sx={{ color: "#aaa", mx: 1 }} />
                  <TwitterIcon sx={{ color: "#aaa", mx: 1 }} />
                  <InstagramIcon sx={{ color: "#aaa", mx: 1 }} />
                </Stack>
              </Stack>
            </Grid>
            {/* Contact Details Column 2 */}
            <Grid item xs={12} sm={3}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PhoneIcon sx={{ color: "#aaa" }} />
                  <Typography variant="subtitle1">Phone</Typography>
                </Stack>
                <Typography
                  sx={{ textAlign: "left", pl: 5, color: "#999" }}
                  variant="body1"
                >
                  + (06) 111-1111 <br /> + (06) 111-1111
                </Typography>

                {/* Write to Us */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CreateIcon sx={{ color: "#aaa" }} />
                  <Typography variant="subtitle1">Write to Us</Typography>
                </Stack>
                <Typography
                  sx={{ textAlign: "left", pl: 5, color: "#999" }}
                  variant="body1"
                >
                  info@ourwebsite.com
                  <br />
                  courses@ourwebsite.com
                </Typography>
              </Stack>
            </Grid>
            {/* Have a Question Section */}
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography sx={{ color: "#3F485E" }} variant="h4">
                  Have a Question?
                </Typography>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography sx={{ textAlign: "left", color: "#aaa" }}>
                        types
                      </Typography>
                      <Select
                        fullWidth
                        variant="outlined"
                        sx={{ borderRadius: 50 }}
                      >
                        <MenuItem value="">Select Item</MenuItem>
                        <MenuItem value="item1">Item 1</MenuItem>
                        <MenuItem value="item2">Item 2</MenuItem>
                        <MenuItem value="item3">Item 3</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        sx={{ borderRadius: 50 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        sx={{ borderRadius: 50 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Your Message"
                        variant="outlined"
                        sx={{ borderRadius: 50 }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        sx={{
                          borderRadius: "50px",
                          width: "50%",
                          display: "flex",
                          bgcolor: "#3F485E",
                        }}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>

          {/* Google Maps Section */}
          <Box sx={{ mb: 10 }}>
            <iframe
              width="100%"
              height="400"
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6785044.877358717!2d34.57457505427389!3d31.011539104045627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503292b312f7e1d%3A0x80e3773b7c1c0a47!2sJordan!5e0!3m2!1sen!2sjo!4v1625215168791!5m2!1sen!2sjo"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
