import React from 'react'
import { styled } from "@mui/material/styles";

import { Typography } from '@mui/material'

function Landing() {
  return (
    <div>
        
        <GradientText
          variant="h1"
          fontFamily="Josefin Sans, sans-serif"
          fontSize={{ xs: "4rem", md: "5rem" }}
        >
          William Zhong
        </GradientText>
    </div>
  )
}

const GradientText = styled(Typography)({
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundImage: "linear-gradient(to left, #d26038, #0950a0)",
    animation: "gradient 10s ease infinite",
    backgroundSize: "400% 400%",
    fontWeight: 700,
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0% 50%"
      },
      "50%": {
        backgroundPosition: "100% 50%"
      },
      "100%": {
        backgroundPosition: "0% 50%"
      }
    }
  })

export default Landing