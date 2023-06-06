import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online friends
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
