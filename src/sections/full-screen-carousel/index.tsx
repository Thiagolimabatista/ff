import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Box, Fade, Grid } from '@mui/material';
import Iconify from 'src/components/iconify';

interface CarouselProps {
  setCarousel: Dispatch<SetStateAction<boolean>>;
  images: string[] | any;
  currentImage?: number;
}

export default function FullScreenCarousel({
  images,
  currentImage = 0,
  setCarousel,
}: CarouselProps) {
  const [slider, setSlide] = useState(true);
  const [image, setCarouselImage] = useState(currentImage);

  useEffect(() => {
    setCarouselImage(currentImage);
  }, [currentImage]);

  const handleCarousel = (action: string) => {
    const firulaTimeout = 300; // miliseconds
    setSlide(false);
    switch (action) {
      case 'previous':
        setTimeout(() => {
          setSlide(true);
          setCarouselImage((state) => (state === 0 ? images.length - 1 : state - 1));
        }, firulaTimeout);
        break;
      case 'next':
        setTimeout(() => {
          setSlide(true);
          setCarouselImage((state) => (state === images.length - 1 ? 0 : state + 1));
        }, firulaTimeout);
        break;
      default:
        break;
    }
  };

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        onClick={() => {
          setCarousel(false);
        }}
        sx={{
          width: { xs: '32px', md: '50px' },
          height: { xs: '32px', md: '50px' },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.grey[700],
          opacity: 1,
          position: 'fixed',
          top: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&: hover': {
            transform: 'scale(1.3)',
            cursor: 'pointer',
            transition: (t) => t.transitions.create('transform'),
          },
        }}
      >
        <Iconify
          sx={{
            width: { xs: '22px', md: '40px' },
            height: { xs: '22px', md: '40px' },
            color: 'white',
          }}
          icon="fontisto:close"
        />
      </Box>
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        sx={{
          maxWidth: 1280,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Fade timeout={500} in={slider}>
          <Box
            sx={{
              padding: 3,
              width: '100%',
              height: '100vh',
              backgroundImage: `url(${images[image]})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: '32px', md: '50px' },
                height: { xs: '32px', md: '50px' },
                borderRadius: '50%',
                backgroundColor: (theme) => theme.palette.grey[700],
                opacity: 0.7,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&: hover': {
                  transform: 'scale(1.3)',
                  cursor: 'pointer',
                  transition: (t) => t.transitions.create('transform'),
                },
              }}
            >
              <Iconify
                sx={{
                  width: { xs: '22px', md: '40px' },
                  height: { xs: '22px', md: '40px' },
                  color: 'white',
                }}
                onClick={() => {
                  handleCarousel('previous');
                }}
                icon="fluent:chevron-left-12-filled"
              />
            </Box>
            <Box
              sx={{
                width: { xs: '32px', md: '50px' },
                height: { xs: '32px', md: '50px' },
                borderRadius: '50%',
                backgroundColor: (theme) => theme.palette.grey[700],
                opacity: 0.7,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&: hover': {
                  transform: 'scale(1.3)',
                  cursor: 'pointer',
                  transition: (t) => t.transitions.create('transform'),
                },
              }}
            >
              <Iconify
                sx={{
                  width: { xs: '22px', md: '40px' },
                  height: { xs: '22px', md: '40px' },
                  color: 'white',
                }}
                onClick={() => {
                  handleCarousel('next');
                }}
                icon="fluent:chevron-right-12-filled"
              />
            </Box>
          </Box>
        </Fade>
      </Grid>
    </Grid>
  );
}
