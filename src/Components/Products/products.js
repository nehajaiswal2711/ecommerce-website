import React from 'react'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import products from "./data";
import styled from "@emotion/styled";
export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
     padding: 4,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
}))
export const ProductImage = styled("img")(({ src, theme }) => ({
     src: src,
     width: "50%",
     height: "50%",
     background: "rgb(230,230,230)",
     padding: '10px',
     // [theme.breakpoints.down("md")]: {
     //      width: "80%",
     //      padding: '24px',
     // },
}));

export default function Products() {
     return (
          <Container>
               <Typography variant="h4" sx={{ my: 3, textAlign: "center" }}>
                    Our Products
               </Typography>
               <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    justifyContent="center"
                    sx={{ margin: `20px 4px 10px 4px` }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
               >

                    {products.map((product) => {
                         console.log(product);
                         return <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
                              <ProductMetaWrapper >
                                   <ProductImage src={product.image} />
                                   <Typography variant="h6" lineHeight={2}>
                                        {product.name}
                                   </Typography>
                                   <Typography variant="body1" >
                                        ${product.price}
                                   </Typography>
                              </ProductMetaWrapper>
                         </Grid>
                    })}
               </Grid>
          </Container >
     )
}
