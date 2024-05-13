import { useRef, useState } from 'react';

import { Box, useTheme, useMediaQuery, Grid, Typography } from '@mui/material';

type ImageTextProps = {
  image: string;
  title: string;
  subtitle: string;
  backgroundSize: '100%' | 'auto';
};
export default function ImageHoverText({
  image,
  title,
  subtitle,
  backgroundSize = '100%',
}: ImageTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev: boolean) => !prev);
  };

  return (
    <Box
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        borderRadius: 5,
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          p: 5,
          backgroundImage: `url('${image}')`,
          backgroundSize,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: 5,
          ...(checked && {
            transform: 'scale(1.03)',
            filter: 'brightness(60%)',
            transition: (t) => t.transitions.create('transform'),
          }),
        }}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          py: { xs: 3, sm: 0 },
          px: 3,
          display: 'flex',
          height: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
            fontSize: { xs: 22, sm: 30, md: 25, lg: 30 },
            color: 'white',
            fontFamily: 'Flexo',
            position: 'relative',
            top: { xs: 22, sm: 30, lg: 60 },
            ...((downMd || checked) && {
              textShadow: '1px 1px 2px black',
              transform: downSm
                ? `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.4}%)`
                : `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.85}%)`,
              transition: (t) => t.transitions.create('transform'),
            }),
          }}
        >
          {title}
        </Typography>
        {!downSm && (
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
              fontSize: 18,
              fontFamily: 'Flexo',
              color: 'white',
              opacity: 0,
              ...((downMd || checked) && {
                textShadow: '1px 2px 2px black',
                transform: downSm
                  ? `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.3}%)`
                  : `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.2}%)`,
                transition: (t) => t.transitions.create('transform'),
                opacity: 1,
              }),
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

/**
 *    <Box
      ref={containerRef}
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        p: 3,
        backgroundImage: `url('${image}')`,
        backgroundSize,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: 5,
        ...(checked && {
          transform: 'scale(1.03)',
          filter: 'brightness(90%)',
          transition: (t) => t.transitions.create('transform'),
        }),
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: 'flex',
          height: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
            fontSize: { xs: 22, sm: 30, lg: 35 },
            color: 'white',
            fontFamily:'Flexo',
            position: 'relative',
            top: { xs: 22, sm: 30, lg: 60 },
            ...((downMd || checked) && {
              textShadow: '1px 1px 2px black',
              transform: downSm
                ? `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.3}%)`
                : `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.7}%)`,
              transition: (t) => t.transitions.create('transform'),
            }),
          }}
        >
          {title}
        </Typography>
        {!downSm && (
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
              fontSize: 18,
              fontFamily:'Flexo',
              color: 'white',
              opacity: 0,
              ...((downMd || checked) && {
                textShadow: '1px 2px 2px black',
                transform: downSm
                  ? `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.3}%)`
                  : `translate(0px,-${(containerRef.current?.offsetHeight || 110) * 0.2}%)`,
                transition: (t) => t.transitions.create('transform'),
                opacity: 1,
              }),
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Grid>
    </Box>
 */
