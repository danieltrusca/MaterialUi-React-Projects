import React from "react";

import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography
        sx={{ color: "#FF2625", fontWeight: "600", fontSize: "26px" }}
      >
        Fitness Club
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: { xs: "40px", lg: "44px" },
          mb: "23px",
          mt: "30px",
        }}
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          fontFamily: "Alegreya",
          lineHeight: "35px",
          mb: "10px",
        }}
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#FF2625", p: "10px" }}
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "200px",
          color: "#FF2625",
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
