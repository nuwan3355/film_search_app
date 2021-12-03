import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function NoData({ storeVal }) {
  return (
    <Stack sx={{ width: "70%", margin: "40px auto" }} spacing={2}>
      <Alert
        severity="warning"
        style={{ background: "#ad741d", color: "white" }}
      >
        {`${
          storeVal
            ? `There is no any film's under ${storeVal} `
            : "Please enter the film name"
        }`}
      </Alert>
    </Stack>
  );
}
