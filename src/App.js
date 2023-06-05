import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<SettingsIcon />}>
        Settings
      </Button>
      <Button variant="contained" color="primary" size="small">
        Contained
      </Button>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Outlined
      </Button>
      <Typography variant="h1">h1. Heading</Typography>
      <BlueButton>My button</BlueButton>
      <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
