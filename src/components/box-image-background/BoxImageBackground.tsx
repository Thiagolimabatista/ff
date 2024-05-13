import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type BackgroundBoxProps = {
  backgroundImage: string;
  children: ReactNode;
};

const BackgroundBox: React.FC<BackgroundBoxProps> = ({ backgroundImage, children }) => (
  <Box
    sx={{
      textAlign: 'center',
      color: '#ffffff',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </Box>
);

export default BackgroundBox;
