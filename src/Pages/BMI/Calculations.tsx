import React from "react";
import { Grid, Card, Box } from "@mui/material";

export default function Calculations({ bmi, ideal, normal }: any) {
  const banglaNumber = (amount: number) => {
    const decimal3 = parseFloat(amount.toFixed(3));
    return decimal3.toLocaleString("bn-BD");
  };

  const healthStatus = () => {
    if (bmi < 18.5) {
      return "ওজন কম";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "ওজন স্বাভাবিক";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "ওজন বেশি";
    } else {
      return "অতিরিক্ত ওজন";
    }
  };

  const healthSuggesion = () => {
    if (bmi < 18.5) {
      return "প্রতিদিনের খাদ্য তালিকায় খাদ্যের পরিমাণ বাড়াতে হবে। নিয়মিত শরীরচর্চা করতে হবে";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "আপনার ওজন স্বাভাবিক রয়েছে";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "একজন অভিজ্ঞ ডায়েটিশিয়ানের পরামর্শ গ্রহণ করুন";
    } else {
      return "অতি দ্রুত অভিজ্ঞ ডায়েটিশিয়ানের পরামর্শ গ্রহণ করুন";
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          <Card variant="outlined" sx={{ padding: 2, margin: 1 }}>
            <h3>আপনার বর্তমান BMI/বিএমআই</h3>
            <h1>{banglaNumber(bmi)}</h1>
            <h5>{healthStatus()}</h5>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined" sx={{ padding: 2, margin: 1 }}>
            <p>
              আদর্শ ওজন: <strong>{banglaNumber(ideal)}</strong>
            </p>
          </Card>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Card variant="outlined" sx={{ padding: 2, margin: 1 }}>
            <p>
              স্বাভাবিক ওজন:{" "}
              <strong>
                {banglaNumber(normal.lower)} থেকে {banglaNumber(normal.upper)}
              </strong>
            </p>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card variant="outlined" sx={{ padding: 2, margin: 1 }}>
            <h3>পরামর্শ</h3>
            <p>{healthSuggesion()}</p>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
