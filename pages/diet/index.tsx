// import { useState, useEffect } from "react";
import type { NextPage } from "next";
import {
  Grid,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import foodData, { FoodDataType } from "../../utilities/foods";

const DietChart: NextPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={4}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ margin: "0 auto", padding: 2 }}
        >
          Food Chart
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell align="right">Meals</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {foodData.map((row: FoodDataType) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calorie}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbohydrate}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.meals?.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};
export default DietChart;
