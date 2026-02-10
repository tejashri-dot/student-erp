import { Box, Typography } from "@mui/material";

const PrincipalMessage = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h5" gutterBottom>
      Message from Principal
    </Typography>
    <Typography color="text.secondary">
      We focus on academic rigor, discipline, and holistic development to
      prepare students for real-world challenges.
    </Typography>
  </Box>
);

export default PrincipalMessage;
