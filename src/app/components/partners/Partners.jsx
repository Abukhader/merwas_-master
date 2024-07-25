import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import React from "react";

export default function Partners() {
  const partnerImage =
    "https://s3-alpha-sig.figma.com/img/0ad4/54a1/bd3a5fdf17e4e842d1f6720c7a2e5040?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=co4Th8N9l4zsYgwfl1Pz8KcVjDrP1k1bYwQGc9jmxXP~uZBrOr7edAGd9GDJlG8l41j8et7jwoT83CS6Lhe3afOtmwtRyMKjhdxpnAhXecO6sEQjYn502wXQoJE7PxI73ptX1rdFTLTitFI1HfBD-4HH93B9xW3aUEMHTvXUoa9KHbiVQ1JOAuhkmIyxjj473ltABVek2jy96PM9nK0ZETXZRdvCohCBND8LF~y98dmOixIUGb5fTC6AqDLM56UsPg5M9KpeWVQyOy0GMSmjSBEy0xUNcCBJn2oUE7fjia8wMX0iNp1Db-in4L5xo1OGe-EZr7OikJ8G1kc1~Tc6hQ__";
  const partnerDescription = `Agreement between xyz and ourwebsite`;

  return (
    <div
      id="partners"
      style={{
        background:
          "linear-gradient(151.81deg, #3F485E 24.5%, #49536B 53.53%, #535E78 82.55%)",
        padding: "40px 0",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
        >
          Partners
        </Typography>
        <Typography variant="body1" sx={{ color: "#aaa", fontSize: "15px" }}>
          With lots of unique blocks, you can easily build a page
          <br /> easily without any coding.
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 15 }}>
        {/* بطاقة 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 2 }}>
          <Card
            sx={{
              margin: { xs: "0 auto", md: 0 },
              maxWidth: 300,
              borderRadius: "25px",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={partnerImage}
              alt="Partner 1"
              sx={{ objectFit: "contain" }}
            />
            <Divider sx={{ width: "50%", margin: "0 auto" }} />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", mt: 2, mb: 2 }}
                variant="body1"
                color="text.secondary"
              >
                {partnerDescription}
              </Typography>
            </CardContent>
            <Divider
              sx={{
                bgcolor: "#EB6B2A",
                height: "4px",
                width: "75%",
                margin: "0 auto",
                borderRadius: "50px 50px 0 0",
              }}
            />
          </Card>
        </Grid>

        {/* بطاقة 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 2 }}>
          <Card
            sx={{
              margin: { xs: "0 auto", md: 0 },
              maxWidth: 300,
              borderRadius: "25px",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={partnerImage}
              alt="Partner 2"
              sx={{ objectFit: "contain" }}
            />
            <Divider sx={{ width: "50%", margin: "0 auto" }} />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", mt: 2, mb: 2 }}
                variant="body1"
                color="text.secondary"
              >
                {partnerDescription}
              </Typography>
            </CardContent>
            <Divider
              sx={{
                bgcolor: "#EB6B2A",
                height: "4px",
                width: "75%",
                margin: "0 auto",
                borderRadius: "50px 50px 0 0",
              }}
            />
          </Card>
        </Grid>

        {/* بطاقة 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 2 }}>
          <Card
            sx={{
              margin: { xs: "0 auto", md: 0 },
              maxWidth: 300,
              borderRadius: "25px",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={partnerImage}
              alt="Partner 3"
              sx={{ objectFit: "contain" }}
            />
            <Divider sx={{ width: "50%", margin: "0 auto" }} />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", mt: 2, mb: 2 }}
                variant="body1"
                color="text.secondary"
              >
                {partnerDescription}
              </Typography>
            </CardContent>
            <Divider
              sx={{
                bgcolor: "#EB6B2A",
                height: "4px",
                width: "75%",
                margin: "0 auto",
                borderRadius: "50px 50px 0 0",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
