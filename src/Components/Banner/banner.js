import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/system";
import "./banner.css"
const BannerContainer = styled(Box)(({ matches, theme }) => ({
     display: "flex",
     justifyContent: "center",
     width: "100%",
     height: "100%",
     padding: "0px 0px",
     background: "rgb(230,230,230)",
     [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
     },
}));

const BannerContent = styled(Box)(() => ({
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     maxWidth: 420,
     padding: "30px",

}));

const BannerImage = styled("img")(({ src, theme }) => ({
     src: `url(${src})`,
     // backgroundImage: `url(${src})`,
     // backgroundRepeat: "no-repeat",
     // backgroundPosition: "center",
     width: "500px",
     [theme.breakpoints.down("md")]: {
          width: "350px",
     },
     [theme.breakpoints.down("sm")]: {
          width: "320px",
          height: "300px",
     },
}));

const BannerTitle = styled(Typography)(({ matches, theme }) => ({
     lineHeight: 1.5,
     fontSize: "72px",
     marginBottom: "20px",
     [theme.breakpoints.down('sm')]: {
          fontSize: '42px',
     }
}));

const BannerDescription = styled(Typography)(({ theme }) => ({
     lineHeight: 1.25,
     letterSpacing: 1.25,
     marginBottom: "3em",
     [theme.breakpoints.down("md")]: {
          lineHeight: 1.15,
          letterSpacing: 1.15,
          marginBottom: "1.5em",
     },
}));

function Banner() {

     const theme = useTheme();
     const matches = useMediaQuery(theme.breakpoints.down("md"));

     return (
          <BannerContainer >
               <BannerImage src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJhZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60&h=500" />
               <BannerContent>
                    <Typography variant="h6" sx={{ mt: 9 }}>Huge Collection</Typography>
                    <BannerTitle variant="h2">
                         New Bags
                    </BannerTitle>
                    <BannerDescription variant="subtitle">
                         Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
                         tempor incididunt ut labore et dolore magna
                    </BannerDescription>

                    <button className='button'>SHOP NOW</button>
               </BannerContent>
          </BannerContainer>
     )
}

export default Banner

