import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Download } from "@mui/icons-material";

export default function DownloadBtn() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<Download />}>
        Download
      </Button>
    </Stack>
  );
}
