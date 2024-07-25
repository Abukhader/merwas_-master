import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const Services = () => {
  const sections = [
    {
      bgcolor: "#3F485E",
      titleColor: "#EB6B2A",
      textColor: "#fff",
      borderRadius: "0px 0 0 107px",
      images: [
        {
          src: "https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__",
          width: "130px",
          height: "170px",
          position: "relative",
          top: { xs: 10, md: 0 },
          left: { xs: 70, md: 10 },
          zIndex: 200,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__",
          width: "120px",
          height: "155px",
          position: "relative",
          top: { xs: -100, md: 110 },
          left: { xs: 10, md: -100 },
          zIndex: 100,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__",
          width: "150px",
          height: "200px",
          position: "relative",
          top: { xs: -400, md: 0 },
          left: { xs: -80, md: -200 },
          zIndex: 0,
        },
      ],
      title: "Coworking Spaces",
      description:
        "Increase Your Productivity in Inspirational Workspaces Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity.",
    },
    {
      bgcolor: "#fff",
      textColor: "#333",
      images: [
        {
          src: "https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__",
          width: "130px",
          height: "170px",
          position: "relative",
          top: { xs: 10, md: 0 },
          left: { xs: 70, md: 10 },
          zIndex: 200,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__",
          width: "120px",
          height: "155px",
          position: "relative",
          top: { xs: -100, md: 110 },
          left: { xs: 10, md: -100 },
          zIndex: 100,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__",
          width: "150px",
          height: "200px",
          position: "relative",
          top: { xs: -400, md: 0 },
          left: { xs: -80, md: -200 },
          zIndex: 0,
        },
      ],
      title: "Startup Offices",
      description:
        "State-of-the-art Facilities Tailored to Startup Needs Our startup offices offer more than just space - they provide the resources and environment that new businesses need to thrive. From flexible leases to advanced IT infrastructure, each office is designed to support growth and innovation. Choose the ideal setting for your team and enjoy the benefits of a professional workspace built for success.",
    },
    {
      bgcolor: "#3F485E",
      titleColor: "#EB6B2A",
      textColor: "#fff",
      borderRadius: "0px 107px 0 0",

      images: [
        {
          src: "https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__",
          width: "130px",
          height: "170px",
          position: "relative",
          top: { xs: 10, md: 0 },
          left: { xs: 70, md: 10 },
          zIndex: 200,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__",
          width: "120px",
          height: "155px",
          position: "relative",
          top: { xs: -100, md: 110 },
          left: { xs: 10, md: -100 },
          zIndex: 100,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__",
          width: "150px",
          height: "200px",
          position: "relative",
          top: { xs: -400, md: 0 },
          left: { xs: -80, md: -200 },
          zIndex: 0,
        },
      ],
      title: "Coworking Spaces",
      description:
        "Increase Your Productivity in Inspirational Workspaces Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity.",
    },
    {
      bgcolor: "#fff",
      textColor: "#333",
      images: [
        {
          src: "https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__",
          width: "130px",
          height: "170px",
          position: "relative",
          top: { xs: 10, md: 0 },
          left: { xs: 70, md: 10 },
          zIndex: 200,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/cfff/c342/6960475951b7d9b9257b737e6a83ad1f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHveF~UD4Caq2TRUiOyVu3qRTHSCvCQWOL8SkCksiPHBPBpOtBpz5TcMxQdSjQYl7iZdqjdpSq9GbC-z-GmATUirUVdBmJp7ro38OluvncgiC3p9CEt2gvRw0NlNCqb7ghPvKpbj~UC2cp9aaWGjotOa3Jkh5pfLJmkqg-YXx2hL6tg8I29svvZyql9bqaS1zPOLoq6dI80IU~5oegrbXKZAkO3L0WvneekvRuL6w5ZbE2-sc58IuKQSg7J77EE~Orr-rKgivNpPkLnJ7CYhEwW7zn1IkEGqWvyrSKaK3pTQycimrzQEbVsKgJzPQo8XG46EMx6AcBUZMNXUd82gyA__",
          width: "120px",
          height: "155px",
          position: "relative",
          top: { xs: -100, md: 110 },
          left: { xs: 10, md: -100 },
          zIndex: 100,
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/e486/20b5/537e3445181bcc3238494eb8a04fd6f8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZX2m16dkO3kgLobkEmiZNlW8AyCLyPkGUq27Do-1~efAQxM~4QAVhZM8Ijw2FTq1RD6sO4dhuqKB9LdqgO8-VUUHs4YsoIi19ih~GqW-nV5yosuYrGsGz-YQbB8z1W4EucvQ2pbB7AI4qhVDhQ2LhmduhdqzXVYYaMjYDD9TVdlZsxr1mW~uqZLj1TqIguMCM~eCGw4WpwehSRQCNAuz1Vy7wanTUokdIkD~jDtOL03ad1HjD5ds6d9Dagx-BNr--qA0C7lmpAwhfqw~wx88DJ0EpquqRnYxOajfcPtPwL2MBMftcqJ9fpoegYoqys2pvNiTa8FmEQyNFhSa2ErZZg__",
          width: "150px",
          height: "200px",
          position: "relative",
          top: { xs: -400, md: 0 },
          left: { xs: -80, md: -200 },
          zIndex: 0,
        },
      ],
      title: "Startup Offices",
      description:
        "State-of-the-art Facilities Tailored to Startup Needs Our startup offices offer more than just space - they provide the resources and environment that new businesses need to thrive. From flexible leases to advanced IT infrastructure, each office is designed to support growth and innovation. Choose the ideal setting for your team and enjoy the benefits of a professional workspace built for success.",
    },
  ];

  return (
    <div id="services">
      <Container maxWidth="lg">
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
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: section.bgcolor,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              py: 6,
              px: 4,
              my: 4,
              borderRadius: section.borderRadius,
            }}
          >
            <Grid container spacing={5} justifyContent="center">
              {section.images.map((image, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      "& img": {
                        width: image.width,
                        height: image.height,
                        position: "relative",
                        top: image.top,
                        left: image.left,
                        zIndex: image.zIndex,
                      },
                    }}
                  >
                    <img
                      src={image.src}
                      style={{ borderRadius: "14px" }}
                      alt={`Service ${index}-${idx}`}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  color: section.titleColor,
                  mt: { xs: -35, md: 2 },
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: section.textColor, mb: 5, mt: 3 }}
              >
                {section.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Services;
