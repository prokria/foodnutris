import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { MEALS } from "../../utilities/constants";
import { FoodDataType } from "../../utilities/foods";
type DietCalculationPropsType = {
  breakfast: FoodDataType[];
  msnacks: FoodDataType[];
  lunch: FoodDataType[];
  asnacks: FoodDataType[];
  bsnacks: FoodDataType[];
  dinner: FoodDataType[];
};
export default function DietCalculation({
  breakfast,
  msnacks,
  lunch,
  asnacks,
  dinner,
  bsnacks,
}: DietCalculationPropsType) {
  const itemSum = (
    mealItems: FoodDataType[],
    identifier: "calorie" | "carbohydrate" | "fat" | "protein" | "fiber"
  ) => {
    if (mealItems.length === 0) {
      return 0;
    }
    const total = mealItems.reduce((accumulator, currentValue) => {
      if (currentValue.hasOwnProperty(identifier)) {
        const value = currentValue[identifier] * currentValue.serve;
        if (!isNaN(value)) {
          return accumulator + value;
        }
      }
      return accumulator;
    }, 0);

    return total;
  };
  const totalValue = (
    identifier: "calorie" | "carbohydrate" | "fat" | "protein" | "fiber"
  ) => {
    let bfTotal = 0;
    if (breakfast.length) {
      bfTotal = breakfast.reduce((accumulator, currentValue) => {
        if (currentValue.hasOwnProperty(identifier)) {
          const value = currentValue[identifier] * currentValue.serve;
          if (!isNaN(value)) {
            return accumulator + value;
          }
        }
        return accumulator;
      }, 0);
    }
    let msTotal = 0;
    if (msnacks.length) {
      msTotal = msnacks.reduce((accumulator, currentValue) => {
        if (currentValue.hasOwnProperty(identifier)) {
          const value = currentValue[identifier] * currentValue.serve;
          if (!isNaN(value)) {
            return accumulator + value;
          }
        }
        return accumulator;
      }, 0);
    }
    let lnTotal = 0;
    if (lunch.length) {
      lnTotal = lunch.reduce((accumulator, currentValue) => {
        if (currentValue.hasOwnProperty(identifier)) {
          const value = currentValue[identifier] * currentValue.serve;
          if (!isNaN(value)) {
            return accumulator + value;
          }
        }
        return accumulator;
      }, 0);
    }
    let asTotal = 0;
    if (asnacks.length) {
      asTotal = asnacks.reduce((accumulator, currentValue) => {
        if (currentValue.hasOwnProperty(identifier)) {
          const value = currentValue[identifier] * currentValue.serve;
          if (!isNaN(value)) {
            return accumulator + value;
          }
        }
        return accumulator;
      }, 0);
    }

    let dnTotal = 0;
    if (dinner.length) {
      dnTotal = dinner.reduce((accumulator, currentValue) => {
        if (currentValue.hasOwnProperty(identifier)) {
          const value = currentValue[identifier] * currentValue.serve;
          if (!isNaN(value)) {
            return accumulator + value;
          }
        }
        return accumulator;
      }, 0);
    }

    let bsTotal = 0;
    if (bsnacks.length) {
      bsTotal = bsnacks.reduce((accumulator, currentValue) => {
        if (currentValue.hasOwnProperty(identifier)) {
          const value = currentValue[identifier] * currentValue.serve;
          if (!isNaN(value)) {
            return accumulator + value;
          }
        }
        return accumulator;
      }, 0);
    }

    return bfTotal + msTotal + lnTotal + asTotal + dnTotal + bsTotal;
  };
  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        sx={{ marginTop: 5, padding: 2, textAlign: "center" }}
      >
        Calculations
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ fontWeight: 600 }}>
            <TableRow>
              <TableCell>Meal</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Fiber&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{MEALS.breakFast}</TableCell>
              <TableCell align="right">
                {itemSum(breakfast, "calorie")}
              </TableCell>
              <TableCell align="right">{itemSum(breakfast, "fat")}</TableCell>
              <TableCell align="right">
                {itemSum(breakfast, "carbohydrate")}
              </TableCell>
              <TableCell align="right">
                {itemSum(breakfast, "protein")}
              </TableCell>
              <TableCell align="right">{itemSum(breakfast, "fiber")}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{MEALS.morningSnacks}</TableCell>
              <TableCell align="right">{itemSum(msnacks, "calorie")}</TableCell>
              <TableCell align="right">{itemSum(msnacks, "fat")}</TableCell>
              <TableCell align="right">
                {itemSum(msnacks, "carbohydrate")}
              </TableCell>
              <TableCell align="right">{itemSum(msnacks, "protein")}</TableCell>
              <TableCell align="right">{itemSum(msnacks, "fiber")}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{MEALS.lunch}</TableCell>
              <TableCell align="right">{itemSum(lunch, "calorie")}</TableCell>
              <TableCell align="right">{itemSum(lunch, "fat")}</TableCell>
              <TableCell align="right">
                {itemSum(lunch, "carbohydrate")}
              </TableCell>
              <TableCell align="right">{itemSum(lunch, "protein")}</TableCell>
              <TableCell align="right">{itemSum(lunch, "fiber")}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{MEALS.afternoonSnacks}</TableCell>
              <TableCell align="right">{itemSum(asnacks, "calorie")}</TableCell>
              <TableCell align="right">{itemSum(asnacks, "fat")}</TableCell>
              <TableCell align="right">
                {itemSum(asnacks, "carbohydrate")}
              </TableCell>
              <TableCell align="right">{itemSum(asnacks, "protein")}</TableCell>
              <TableCell align="right">{itemSum(asnacks, "fiber")}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{MEALS.dinner}</TableCell>
              <TableCell align="right">{itemSum(dinner, "calorie")}</TableCell>
              <TableCell align="right">{itemSum(dinner, "fat")}</TableCell>
              <TableCell align="right">
                {itemSum(dinner, "carbohydrate")}
              </TableCell>
              <TableCell align="right">{itemSum(dinner, "protein")}</TableCell>
              <TableCell align="right">{itemSum(dinner, "fiber")}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{MEALS.bedSnacks}</TableCell>
              <TableCell align="right">{itemSum(bsnacks, "calorie")}</TableCell>
              <TableCell align="right">{itemSum(bsnacks, "fat")}</TableCell>
              <TableCell align="right">
                {itemSum(bsnacks, "carbohydrate")}
              </TableCell>
              <TableCell align="right">{itemSum(bsnacks, "protein")}</TableCell>
              <TableCell align="right">{itemSum(bsnacks, "fiber")}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Total
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" fontWeight="bold">
                  {totalValue("calorie")}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" fontWeight="bold">
                  {totalValue("fat")}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" fontWeight="bold">
                  {totalValue("carbohydrate")}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" fontWeight="bold">
                  {totalValue("protein")}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" fontWeight="bold">
                  {totalValue("fiber")}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
