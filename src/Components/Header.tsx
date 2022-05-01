import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ background: "#EEE" }}>
        <img alt="logo" src="/logo.png" style={{ width: "200px" }} />
      </Toolbar>
    </AppBar>
  );
}
