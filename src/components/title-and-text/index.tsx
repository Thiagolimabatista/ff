import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface TitleAndTextProps {
  title: string;
  text: string;
}
export default function TitleAndText({ title, text }: TitleAndTextProps) {
  return (
    <Box sx={{ width: '100%', mt: { xs: 6, md: 0 } }}>
      <Grid container>
        <Grid item xs={12} mb={3}>
          <Typography variant="h2" fontFamily="Flexo">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {text}
        </Grid>
      </Grid>
    </Box>
  );
}
