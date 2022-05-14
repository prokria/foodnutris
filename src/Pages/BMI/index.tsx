import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Calculations from "./Calculations";
import InfoForm from "./Form";
import { Box } from "@mui/material";

const steps = ["আপনার তথ্য", "আপনার শাররীক অবস্থা"];

export default function BmiCalculator() {
  const [activeStep, setActiveStep] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [ideal, setIdeal] = useState(0);
  const [normal, setNormal] = useState({ lower: 0, upper: 0 });
  const [required, setRequired] = useState(false);

  const findBMI = (pWeight: number, pHeight: number) =>
    pWeight / (pHeight * pHeight);

  const findIBW = (pHeight: number) => 21.7 * (pHeight * pHeight);

  const findEBW = (pHeight: number) => {
    const upper = 24.9 * (pHeight * pHeight);
    const lower = 18.5 * (pHeight * pHeight);
    return { lower: lower, upper: upper };
  };

  const calculateBMI = () => {
    if (feet && inch && weight) {
      setRequired(false);
      const height = (feet * 12 + inch) / 39.37;
      setBmi(findBMI(weight, height));
      setIdeal(findIBW(height));
      setNormal(findEBW(height));
      setActiveStep(activeStep + 1);
    } else {
      setRequired(true);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Paper sx={{ padding: 5, margin: 3, minHeight: "40vh" }}>
      <Typography variant="h4" align="center">
        আপনার বিএমআই/BMI পরিমাপ করুন
      </Typography>
      <Stepper
        activeStep={activeStep}
        sx={{ padding: 3, width: "50%", margin: "0 auto" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ padding: 5, width: "60%", margin: "0 auto" }}>
        {activeStep === 0 ? (
          <InfoForm
            handleFeet={(event: any) => setFeet(event.target.value)}
            handleInch={(event: any) => setInch(event.target.value)}
            handleWeight={(event: any) => setWeight(event.target.value)}
            feet={feet}
            inch={inch}
            weight={weight}
          />
        ) : (
          <Calculations bmi={bmi} ideal={ideal} normal={normal} />
        )}
        {required && (
          <Typography variant="h6" align="center" color="error" marginY={3}>
            উপরের সবগুলো তথ্য সঠিকভাবে পূরণ করুন
          </Typography>
        )}
        <Box sx={{ margin: 2, textAlign: "center" }}>
          {activeStep === 0 && (
            <Button variant="contained" color="primary" onClick={calculateBMI}>
              পরিমাপ করুন
            </Button>
          )}
          {activeStep !== 0 && (
            <Button onClick={handleBack} color="primary" variant="contained">
              ফিরে যান
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
