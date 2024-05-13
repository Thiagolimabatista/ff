import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import DialogAnimate from 'src/components/animate/dialog-animate';
import checkGreen from '../../../public/assets/icons/notification/ic_check.png';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, onClose }) => (
  <DialogAnimate open={open} onClose={onClose}>
    <Box
      sx={{
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img src={checkGreen} alt="check icon" />

      <Typography variant="h5">Bloqueio criado com sucesso!</Typography>

      <Button
        sx={{
          width: '100px',
          height: '45px',
          background: '#0063FF',
          color: 'white',
          marginTop: 4,
        }}
        onClick={onClose}
      >
        Ok
      </Button>
    </Box>
  </DialogAnimate>
);

export default CustomDialog;
