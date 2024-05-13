/* eslint-disable perfectionist/sort-imports */
import 'src/utils/highlight';

import ReactQuill from 'react-quill';

import { alpha } from '@mui/material/styles';

import { EditorProps } from './types';
import { StyledEditor } from './styles';
import { formats } from './toolbar';

// ----------------------------------------------------------------------

export default function Editor({ error, simple = false, helperText, sx, ...other }: EditorProps) {
  const toolbarOptions = [
    ['bold', 'italic', 'underline'], // toggled buttons
    [{ link: true }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ];
  const modules = {
    toolbar: toolbarOptions,

    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <StyledEditor
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
            '& .ql-editor': {
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            },
          }),
          ...sx,
        }}
      >
        <ReactQuill
          modules={modules}
          formats={formats}
          placeholder="Adicione a descrição do circuito..."
          {...other}
        />
      </StyledEditor>

      {helperText && helperText}
    </>
  );
}
