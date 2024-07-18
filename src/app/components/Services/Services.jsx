import { Box, Typography, Stack, Grid, Container } from "@mui/material";
import React from "react";

export default function Services() {
  return (
    <div id="services">
      <Container>
        <Box sx={{ textAlign: "center", mt: 20, mb: 10 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#3F485E" }}
          >
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: "#aaa", fontSize: "15px" }}>
            With lots of unique blocks, you can easily build a page
            <br /> easily without any coding.
          </Typography>
        </Box>
        <Stack
          sx={{
            bgcolor: "#3F485E",
            width: "1100px",
            height: "340px",
            padding: "50px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "0px 0 0 107px",
            mb: 10,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginRight: "-50px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  position: "relative",
                  top: "50px", // تعديل الموقع النسبي لكل صورة
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__"
                  alt="Image 1"
                  style={{
                    width: "200px",
                    height: "230px",
                    zIndex: 100,
                    borderRadius: "8px",
                    position: "relative",
                    top: "-20px",
                    left: "100px",
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__"
                  alt="Image 2"
                  style={{
                    width: "200px",
                    height: "242px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "60px",
                    zIndex: 2,
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__"
                  alt="Image 3"
                  style={{
                    width: "200px",
                    height: "250px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "-10px",
                    right: "45px",
                  }}
                />
              </Box>
            </Grid>

            {/* العمود الأيمن (للنص) */}
            <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
              <Typography
                variant="h5"
                sx={{ color: "#EB6B2A", marginBottom: "1rem" }}
              >
                Coworking Spaces
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", lineHeight: "40px", fontSize: "15px" }}
              >
                Increase Your Productivity in Inspirational Workspaces Our
                coworking spaces are more than just workplaces - they are hubs
                for innovation and collaboration. Choose from diverse options,
                including open workspaces, private offices, and fully-equipped
                meeting rooms. Immerse yourself in a dynamic environment
                designed to stimulate creativity and enhance productivity.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          sx={{
            bgcolor: "#fff",
            width: "1100px",
            height: "340px",
            padding: "50px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "0px 0 0 107px",
            mb: 10,
          }}
        >
          <Grid container>
            {/* العمود الأيمن (للنص) */}
            <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
              <Typography
                variant="h5"
                sx={{ color: "#EB6B2A", marginBottom: "1rem" }}
              >
                Mentoring and Training
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  lineHeight: "40px",
                  fontSize: "15px",
                  mr: 10,
                }}
              >
                Grow with Expert Guidance. Our mentoring and training programs
                are your gateway to professional development. Gain insights and
                guidance from industry experts. Learn how to effectively apply
                your knowledge, navigate challenges, and expand your
                technological project
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ marginRight: "-50px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  position: "relative",
                  top: "50px", // تعديل الموقع النسبي لكل صورة
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__"
                  alt="Image 1"
                  style={{
                    width: "200px",
                    height: "230px",
                    zIndex: 100,
                    borderRadius: "8px",
                    position: "relative",
                    top: "-20px",
                    left: "100px",
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__"
                  alt="Image 2"
                  style={{
                    width: "200px",
                    height: "242px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "60px",
                    zIndex: 2,
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__"
                  alt="Image 3"
                  style={{
                    width: "200px",
                    height: "250px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "-10px",
                    right: "45px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          sx={{
            bgcolor: "#3F485E",
            width: "1100px",
            height: "340px",
            padding: "50px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "0px 107px 0 0",
            mb: 10,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginRight: "-50px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  position: "relative",
                  top: "50px", // تعديل الموقع النسبي لكل صورة
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__"
                  alt="Image 1"
                  style={{
                    width: "200px",
                    height: "230px",
                    zIndex: 100,
                    borderRadius: "8px",
                    position: "relative",
                    top: "-20px",
                    left: "100px",
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__"
                  alt="Image 2"
                  style={{
                    width: "200px",
                    height: "242px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "60px",
                    zIndex: 2,
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__"
                  alt="Image 3"
                  style={{
                    width: "200px",
                    height: "250px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "-10px",
                    right: "45px",
                  }}
                />
              </Box>
            </Grid>

            {/* العمود الأيمن (للنص) */}
            <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
              <Typography
                variant="h5"
                sx={{ color: "#EB6B2A", marginBottom: "1rem" }}
              >
                Coworking Spaces
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", lineHeight: "40px", fontSize: "15px" }}
              >
                Increase Your Productivity in Inspirational Workspaces Our
                coworking spaces are more than just workplaces - they are hubs
                for innovation and collaboration. Choose from diverse options,
                including open workspaces, private offices, and fully-equipped
                meeting rooms. Immerse yourself in a dynamic environment
                designed to stimulate creativity and enhance productivity.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          sx={{
            bgcolor: "#fff",
            width: "1100px",
            height: "340px",
            padding: "50px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "0px 0 0 107px",
            mb: 10,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginRight: "-50px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  position: "relative",
                  top: "50px", // تعديل الموقع النسبي لكل صورة
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__"
                  alt="Image 1"
                  style={{
                    width: "200px",
                    height: "230px",
                    zIndex: 100,
                    borderRadius: "8px",
                    position: "relative",
                    top: "-20px",
                    left: "100px",
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__"
                  alt="Image 2"
                  style={{
                    width: "200px",
                    height: "242px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "60px",
                    zIndex: 2,
                  }}
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__"
                  alt="Image 3"
                  style={{
                    width: "200px",
                    height: "250px",
                    borderRadius: "8px",
                    position: "relative",
                    top: "-10px",
                    right: "45px",
                  }}
                />
              </Box>
            </Grid>

            {/* العمود الأيمن (للنص) */}
            <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
              <Typography
                variant="h5"
                sx={{ color: "#EB6B2A", marginBottom: "1rem" }}
              >
                Coworking Spaces
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#333", lineHeight: "40px", fontSize: "15px" }}
              >
                Increase Your Productivity in Inspirational Workspaces Our
                coworking spaces are more than just workplaces - they are hubs
                for innovation and collaboration. Choose from diverse options,
                including open workspaces, private offices, and fully-equipped
                meeting rooms. Immerse yourself in a dynamic environment
                designed to stimulate creativity and enhance productivity.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
