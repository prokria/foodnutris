import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function InfoForm({
  handleFeet,
  handleInch,
  handleWeight,
  feet,
  inch,
  weight,
}: any) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>উচ্চতা:</strong>
                </td>
                <td>
                  <TextField
                    required
                    id="feet"
                    name="feet"
                    label="ফুট"
                    value={feet}
                    fullWidth
                    autoComplete="feet"
                    onChange={handleFeet}
                  />
                </td>
                <td>
                  <TextField
                    required
                    id="inch"
                    name="inch"
                    value={inch}
                    label="ইঞ্চি"
                    fullWidth
                    autoComplete="inch"
                    onChange={handleInch}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>ওজন:</strong>
                </td>
                <td>
                  <TextField
                    required
                    id="weight"
                    name="weight"
                    value={weight}
                    label="ওজন"
                    fullWidth
                    autoComplete="weight"
                    onChange={handleWeight}
                    sx={{ marginTop: 3 }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </>
  );
}
