import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Iconify from '../iconify';

interface CarouselProps {
  images: string[] | any;
  captions?: string[];
  currentImage?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, captions, currentImage = 0 }) => {

  const [image, setCarouselImage] = useState(currentImage);

  useEffect(() => {
    setCarouselImage(currentImage);
  }, [currentImage]);

  const handleCarousel = (action: string) => {
    switch (action) {
      case 'previous':
        setTimeout(() => {
          setCarouselImage((state) => (state === 0 ? images.length - 1 : state - 1));
        }, 300);
        break;
      case 'next':
        setTimeout(() => {
          setCarouselImage((state) => (state === images.length - 1 ? 0 : state + 1));
        }, 300);
        break;
      default:
        break;
    }
  };

  const renderImages = () => {
    const totalImages = images.length;
    let startIndex = image % totalImages;
    if (startIndex < 0) startIndex += totalImages;
    const indexes = [startIndex, (startIndex + 1) % totalImages, (startIndex + 2) % totalImages];
    return indexes.map((index: number) => (
      <Box key={index} sx={{ position: 'relative', width: '100%', maxWidth: '300px', height: '100%', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 2,
        }}
      />
      {captions && captions[index] && (
       <Box
       sx={{
         position: 'absolute',
         width: '100%',
         textAlign: 'center',
         padding: 1,
         borderRadius: '0 0 2px 2px',
         bottom: '50%',
         transform: 'translateY(50%)',
         background: 'linear-gradient(to bottom, white, blue)', // Aplica um degradê de branco para azul
         WebkitBackgroundClip: 'text', // Permite que o degradê seja aplicado ao texto
         WebkitTextFillColor: 'transparent', // Faz com que a cor do texto seja transparente para permitir a aplicação do degradê
       }}
     >
       <Typography variant='h3' sx={{ fontWeight: '600'}}>{captions[index]}</Typography>
     </Box>
      )}
    </Box>
    ));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ paddingTop: { xs: 6, sm: 4 } }}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 1270,
            padding: 3,
            width: '100%',
            height: { xs: '28vw', md: '36vw', sm: '28vw' },
            maxHeight: 500,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
                '&:hover': {
                  transform: 'scale(1.3)',
                  cursor: 'pointer',
                  transition: (t) => t.transitions.create('transform'),
                },
              }}
              onClick={() => {
                handleCarousel('previous');
              }}
            >
              <Iconify
                sx={{
                  width: { xs: '22px', md: '40px' },
                  height: { xs: '22px', md: '40px' },
                  color: 'white',
                }}
                icon="fluent:chevron-left-12-filled"
              />
            </Box>
          </Box>
          {renderImages()}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
                '&:hover': {
                  transform: 'scale(1.3)',
                  cursor: 'pointer',
                  transition: (t) => t.transitions.create('transform'),
                },
              }}
              onClick={() => {
                handleCarousel('next');
              }}
            >
              <Iconify
                sx={{
                  width: { xs: '22px', md: '40px' },
                  height: { xs: '22px', md: '40px' },
                  color: 'white',
                }}
                icon="fluent:chevron-right-12-filled"
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Carousel;
