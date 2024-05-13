import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface CustomTypographyProps {
  children: ReactNode;
  fontSize?: string;
  fontWeight?: number;
  marginTop?: number;
  marginBottom?: number;
  color?: string;
}

export const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  fontSize,
  fontWeight,
  marginTop,
  marginBottom,
  color,
}) => (
  <Typography
    sx={{
      fontSize: fontSize || { xs: '18px', sm: '26px' },
      fontWeight: fontWeight || 400,
      marginTop: marginTop || 0,
      marginBottom: marginBottom || 0,
      color: color || '',
    }}
  >
    {children}
  </Typography>
);
