import React from 'react'
import {
     Grid,
     Typography,

} from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// export const FooterTitle = styled(Typography)(() => ({
//      textTransform: "uppercase",
//      marginBottom: "1em",
// }));

function Footer() {
     return (
          <Box
               sx={{
                    background: "#333",
                    color: "#fff",
                    p: { xs: 4, md: 10 },
                    pt: 12,
                    pb: 12,
                    fontSize: { xs: '12px', md: '14px' }
               }}
          >
               <Grid container spacing={2} justifyContent="center">
                    <Grid item md={6} lg={4}>
                         <Typography variant="body1" sx={{ textTransform: "uppercase", marginBottom: "1em" }}>About us</Typography>
                         <Typography variant="caption2">
                              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                              incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud.
                         </Typography>
                         <Box
                              sx={{
                                   mt: 4,
                                   color: "#d5d5d5",
                              }}
                         >
                              <FacebookIcon sx={{ mr: 1 }} />
                              <TwitterIcon sx={{ mr: 1 }} />
                              <InstagramIcon />
                         </Box>
                    </Grid>
               </Grid>
          </Box>
     )
}

export default Footer;