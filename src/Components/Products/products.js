import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import products from "./data";
import styled from "@emotion/styled";

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: src,
  width: "100%", // Changed width to 100% for responsiveness
  height: "auto", // Maintain aspect ratio
  background: "rgb(230,230,230)",
  padding: "10px",
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
      >
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductMetaWrapper>
              <ProductImage src={product.image} />
              <Typography variant="h6" lineHeight={2}>
                {product.name}
              </Typography>
              <Typography variant="body1">${product.price}</Typography>
            </ProductMetaWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
