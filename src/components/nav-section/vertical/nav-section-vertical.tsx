/* eslint-disable array-callback-return */
import { memo } from 'react';

import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';


import { NavProps, NavGroupProps } from '../types';

// ----------------------------------------------------------------------

function NavSectionVertical({ data, slotProps, ...other }: NavProps) {
  return (
    <Stack component="nav" id="nav-section-vertical" {...other}>
      {data.map((group, index) => (
          <Group
            key={group.subheader || index}
            subheader={group.subheader}
            items={group.items}
            slotProps={slotProps}
          />
        ))}
    </Stack>
  );
}

export default memo(NavSectionVertical);

// ----------------------------------------------------------------------

function Group({ subheader,  slotProps }: NavGroupProps) {

  // eslint-disable-next-line consistent-return


  return (
    <Stack sx={{ px: 2 }}>
      {subheader ? (
        <>
          <ListSubheader
            disableGutters
            disableSticky
            sx={{
              fontSize: 11,
              cursor: 'pointer',
              typography: 'overline',
              display: 'inline-flex',
              color: 'text.disabled',
              mb: `${slotProps?.gap || 4}px`,
              p: (theme) => theme.spacing(2, 1, 1, 1.5),
              transition: (theme) =>
                theme.transitions.create(['color'], {
                  duration: theme.transitions.duration.shortest,
                }),
              '&:hover': {
                color: 'text.primary',
              },
              ...slotProps?.subheader,
            }}
          >
            {subheader}
          </ListSubheader>

         <Box>
          Thiago
         </Box>
        </>
      ) : (
        'Thiago'
      )}
    </Stack>
  );
}
