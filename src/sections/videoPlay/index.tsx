/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Box,
    ThemeProvider,
    createTheme,
  } from '@mui/material';

  export default function VideoPlaySection() {
    const theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 1000,
          lg: 1200,
          xl: 1536,
        },
      },
    });
  
    return (
      <ThemeProvider theme={theme}>
        <Box id="home-section" display="flex" justifyContent="center" sx={{  p: 2}}>
        <video autoPlay loop muted style={{ maxWidth: '100%', maxHeight: '100%' }}>
          <source src="src/assets/video/video.mp4" type="video/mp4" />
        
        </video>
        </Box>
      </ThemeProvider>
    );
  }
  