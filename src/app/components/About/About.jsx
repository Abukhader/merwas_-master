import { Container, Typography, Box, Stack, Grid } from "@mui/material";
import React from "react";
import {
  Visibility,
  EmojiObjects,
  FlightTakeoff,
  Rocket,
} from "@mui/icons-material"; // استيراد الأيقونات المطلوبة

export default function About() {
  return (
    <div id="about">
      <Container>
        <Box sx={{ textAlign: "center", my: 10, color: "#3F485E" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ color: "#aaa", fontSize: "15px" }}>
            With lots of unique blocks, you can easily build a page
            <br /> easily without any coding.
          </Typography>
        </Box>
        <Grid container sx={{ my: 10 }} spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant="h4"
                sx={{
                  color: "#EB6B2A",
                  fontWeight: "bold",
                  textAlign: { xs: "center" },
                }}
              >
                Our Website
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#555",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                We offer more than just a workspace
              </Typography>

              <Grid container spacing={2}>
                {/* الفقرة الأولى */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",

                      width: "100%",
                    }}
                  >
                    <Rocket
                      sx={{
                        fontSize: 30,
                        color: "#EB6B2A",
                        mx: 1,
                      }}
                    />
                    <Stack spacing={1}>
                      <Typography variant="h6">
                        Fostering Collaboration
                      </Typography>
                      <Typography variant="body2">
                        Encouraging synergy among different entities in the
                        technology ecosystem, including startups, freelancers,
                        companies, academia, and government
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>

                {/* الفقرة الثانية */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <EmojiObjects
                      sx={{ fontSize: 30, color: "#EB6B2A", mx: 1 }}
                    />
                    <Stack spacing={1}>
                      <Typography variant="h6">Promoting Innovation</Typography>
                      <Typography variant="body2">
                        By providing support and guidance/training, the center
                        aims to cultivate an environment where new ideas and
                        innovative solutions can thrive
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>

                {/* الفقرة الثالثة */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <FlightTakeoff
                      sx={{ fontSize: 30, color: "#EB6B2A", mx: 1 }}
                    />
                    <Stack spacing={1}>
                      <Typography variant="h6">Mission Statement</Typography>
                      <Typography variant="body2">
                        A technological revolution in East Amman through
                        fostering innovation, collaboration, education, and
                        community growth
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>

                {/* الفقرة الرابعة */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Visibility
                      sx={{ fontSize: 30, color: "#EB6B2A", mx: 1 }}
                    />
                    <Stack spacing={1}>
                      <Typography variant="h6">Vision Statement</Typography>
                      <Typography variant="body2">
                        Establishing a leading technological hub as a catalyst
                        for technological advancement and social development in
                        East Amman
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                mt: { xs: 4, md: 0 },
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/ba1d/7e5e/ed479fe21b9364e79219bc118326c555?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O75nIpU6jJkV240tzD3Q4ng8ITgnlhFuTgiFqO4PRd2ERcK1FYvhrlSfcT4folppWbE0uHFC1PxWBhV2THqJjEP9JM6S7g8oPGgocrL1EEHc7hEGLCZLbR8L57Ogj6aCRyyndQ99wWBSEXBCvozzcxvTY4C76Y-T6Td4igthq7Y6sMzk5GZ2W-7855dAXgYAsK4tZ-VE0PZIQ2SNd1XbXdilQ1gcDSzZrDLGF20FL~S29UDDyglbI4U5nejYukoAht0ABKp6PNZ031zzi4rhCcBhWSjy71jZJFd2syk59Q5xbYJgifELBEsM8cY-IULoAflGiG1~IUJRI22b-o4qWQ__"
                alt="About Us"
                style={{
                  width: "100%",
                  maxWidth: "470px",
                  height: "75vh",
                  borderRadius: "20px",
                  marginTop: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
