import React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";

const Blog = () => {
  return (
    <div id="home">
      <Container>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "76px",
            textAlign: "center",
            padding: "50px 0",
            color: "#3F485E",
          }}
        >
          At The OurWebsite, we are dedicated to helping you excel in the world
          of technology. <br /> Our services are specifically designed to meet
          your needs.
        </Typography>
        <Grid container spacing={3}>
          {/* First row */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponent
              title="Coworking Spaces"
              description="Inspiring Work Environments Designed for Technological Innovation"
              buttonText="Learn more"
              imageUrl="https://s3-alpha-sig.figma.com/img/fe6c/31ca/c7f4dade870d5760990a94a8285645df?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lb0Yl4-VCsOW53-aUyFLM8zG1smwnlmnQehawLa6edBhCv04ANI6G5mp7q9ArXAP40UL9YB-W~fIL0ooFQrgPkXgH92rgTSt4r-lP5WsoeG6O7iy0VkZZiyMGh0rPhIQutYGkLwpQ26m4mJU~IY8qeZcLgn~aCjcmBPuL4NzbR4PYgDP36nbxK7JSs5Mmbqoy1DP6EY66H-m6BSqtWJMFD7w6T7TwgR874nlW0x4u9m4~SvqpDCwP6YICUCCo4F28cq4dflkFGSXQ4CxfLla1YouFMJlFnPn7yfkppNXzdOJaJG1cC2cL-qZvop6b0z4hxUf-PFv8S84UJr1KzYPFA__"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponent
              title="Mentoring and Training"
              description="Gain Insights from Industry Experts to Boost Your Success"
              buttonText="Learn more"
              imageUrl="https://s3-alpha-sig.figma.com/img/6260/0f0f/c515fca4f90b4bc41145569fc36bfed2?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WmYwZUSadVJtyXMHVw0EQatozIjVI0WIqnYfu6upiKch0EpAsFEtZ1d6bM58qkEiy5YTh-YA-f0B21eiALAs~Rpr~DwjOBowmUe3rRl~E84955~8VGt9W3ik3-eqz4dF2ImvrzMsWzKAYqg5dWhSSXDpTQw3f0RPY3cjf34oL3jIR3Fbp5V7mzV0Jn9GqIgQxeHhbpssl8ES9crKp5~7OsnVcCbhjomKP1wqSBK9p9J1hP84e3RqVTJxc0P-qlxXimqhvGhGyOJSf~gDp4djU5Jm0WKdqMp~dlYc-0FExOly-LvHGBsUS3KWiOs8m3Nl1wlWbWKHncwQq~UHGwAkRA__"
            />
          </Grid>
          {/* Second row */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponent
              title="Access to Funding and Markets"
              description="Unlock Financing Opportunities and Expand Your Impact"
              buttonText="Learn more"
              imageUrl="https://s3-alpha-sig.figma.com/img/bd99/aa3c/7ce8ee899a9e00308845b1ccbdd6758a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScIOAQraVU3a1oLo90QWap2pkE3l0F4Uyx9ndtYwTyx4OgtDUM~9uq4yY~VminWY~RyqcMYgg0BbBy0beHHOEZ~8QYTxPqbpFZ0cBxBDmcPXzunEX40AAU9bzsBe6Q4TRaYBR1a-rpKSWYgCDpUz6GemSE9ETrSNJp5nB43sG9R0lWKYcb6TPYgmEht3vFCD42tLSNqIlDdQHDpJYUksL3XuED-ggoFENMhdCkDGianSR3~ZNrjAHu3mX0nC0MUOHQsmhy1zSZNYYfSZysca-ZQ~evyV2j-jzHJVzuepfpC8y7hquug6oVEm9GFDaYbXtDWx6XmlHgtH2DTpkwgEaA__"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponent
              title="Networking Opportunities"
              description="Connect with like-minded technology enthusiasts and industry leaders"
              buttonText="Learn more"
              imageUrl="https://s3-alpha-sig.figma.com/img/d76c/e0c7/e692139852f6e075179c1aa1678dd8a8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxMsQngihrPnyG-yT~FuP60-OLOZUhQRhFBUqf43Rzbxki28KC5DW91mfl5nplvTMHFzFSL5I11tFQvOaxAhirfJuO0AhEmgjIaiPYPAzApmjRw0VpHVN6BqJognorBL~2-shsZhjyrcl1t85rwkOkSZW4x7TcXyay0X8~uOvuRl~n5p0Nn4R~5Ebrd0rvSeyJ63p5pXm4To3f0H5EiuFsm0WkhGuzGK5j0H7HbQ8C-sxUUUmhkEvboiIdG2t~BwrlXxYkflv4lnlcSQnvpEJoM4HUv73OA43akAgTQRJcrBsgC2uV1n4gEwRSdonq5xyqIunz1k5VgAwpWs~26c8w__"
            />
          </Grid>

          {/* Third row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div
              style={{
                width: "1150px",
                height: "400px",
                backgroundColor: "#3F485E",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                padding: "20px",
                boxSizing: "border-box",
                marginTop: "100px",
                marginBottom: "30px",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/ae71/7e47/18fc87724b4f30b657f51d91072ed833?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBEaufPJ7hx1FH36Ku2fbs-fV~4SjZrj17P3BVCrj5k06okCSeywCmce5y0KRVsB40oQnPuk6S1Uiy9tyfqMntYlWZSoX9XwHnsLzQL-BTqvYcIuY9vvwbg7jni7sxlVrWInfNqekNwtGZ9c3HjDd2MIlIDodj3BpLasYi1o7vjk-JsS3O3QA-in5x3gqxS2Z2ylXBJQlY0XifPU9uxNEIqICL6ro4gMRDvh5xt-Vz3kiWQbCGI~PwdbHT46Rv5eoS448ydtViT2hX2v4bnRqYJbMU8uMEWLHRQ7GoP0vn1F7yup4TIV9r6HfGKISgHJohBCzbDCPEqi~ySfXkLCRw__"
                alt="Additional Image"
                style={{
                  width: "405px",
                  height: "300px",
                  borderRadius: "20px",
                  marginRight: "30px",
                }}
              />
              <div>
                <Typography
                  sx={{
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "46px",
                    textAlign: "left",
                    marginBottom: "20px",
                    color: "#eee",
                    mx: 5,
                  }}
                >
                  <span style={{ color: "#EE8E00" }}>OurWebsite</span> Your
                  Gateway to Technological Excellence Get a quick glimpse into
                  the dynamic environment at The OurWebsite and the benefits
                  that await you
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const CardComponent = ({ title, description, buttonText, imageUrl }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "548px",
        height: "499px",
        borderRadius: "25px",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(180deg, #3F485E 0%, rgba(217, 217, 217, 30%) 100%)`,
          borderRadius: "25px",
          zIndex: 0,
        }}
      />
      <img
        src={imageUrl}
        alt="card image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "25px",
          zIndex: 1,
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "200px",
          left: "30px",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "145px",
          left: "30px",
          color: "#fff",
          fontSize: "16px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "45px",
          left: "30px",
          color: "#fff",
          fontSize: "16px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {buttonText}
        <span style={{ marginLeft: "5px" }}>&#8594;</span>
      </Typography>
    </Card>
  );
};

export default Blog;
