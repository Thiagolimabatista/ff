import React from 'react';
import { RHFTextField } from 'src/components/hook-form';

interface CustomTextFieldProps {
  name: string;
  label?: string;
  width?: string | { xs?: string; md?: string };
  onChange: (name: string, value: any) => void;
  type?: string;
  placeholder?: string;
  value?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  width = '342px',
  type,
  placeholder,
  onChange,
  value,
}) => (
  <RHFTextField
    name={name}
    sx={{ width }}
    label={label}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(name, e.target.value)}
  />
);

export default CustomTextField;
