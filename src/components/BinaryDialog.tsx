import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface BinaryDialogProps {
  positiveFn: () => void;
  positiveButtonText: string;
  negativeButtonText: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  text: string;
  boldText: string;
  isLoading: boolean;
}

export default function BinaryDialog({
  isOpen,
  setIsOpen,
  positiveFn,
  positiveButtonText,
  negativeButtonText,
  title = '',
  text = '',
  boldText = '',
  isLoading,
}: BinaryDialogProps) {
  return (
    <Dialog fullWidth maxWidth="sm" open={isOpen} onClose={setIsOpen}>
      <DialogTitle sx={{ fontFamily: 'Flexo' }}>{title} </DialogTitle>
      <DialogContent dividers sx={{ pt: 1, pb: 0, border: 'none' }}>
        <Typography variant="h5" sx={{ fontFamily: 'Flexo' }}>
          {boldText}
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Flexo' }}>
          {text}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)} variant="outlined" sx={{ fontFamily: 'Flexo' }}>
          {negativeButtonText}
        </Button>
        <LoadingButton
          loading={isLoading}
          sx={{
            fontFamily: 'Flexo',
            backgroundColor: '#0063FF',
            color: 'white',
            '&:hover': { backgroundColor: '#0063FF', color: 'white' },
          }}
          onClick={positiveFn}
        >
          {positiveButtonText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
