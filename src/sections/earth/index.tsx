import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SPOTIFY from 'src/assets/illustrations/spotify.svg'
import TWITTER from 'src/assets/illustrations/twitter.svg'
import UBER from 'src/assets/illustrations/uber.svg'
import IFOOD from 'src/assets/illustrations/ifood.svg'
import NUBANK from 'src/assets/illustrations/nubank.svg'
import POP from 'src/assets/illustrations/99.svg'

export default function EarthSection() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        sx={{
          maxWidth: 1450,
          pt: { xs: 6, sm: 12 },
          gap: '5px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 10
        }}
      >
        <Grid item xs={12} sm={10} md={12} pb={6} display="flex" justifyContent="center" flexDirection='column' textAlign="center">
          <Typography sx={{ fontSize: { xs: 22, sm: 30, md: 40, lg: 65 }, fontWeight: 600, color: 'white' }}>
            Quanto <strong style={{color: '#FFFF47'}}>GANHA</strong> um <strong style={{color: '#FFFF47'}}>DEV. FULLSTACK?</strong>
          </Typography>
          <Typography sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 20 }, fontWeight: 500, color: 'white'}}>
            VIA: GLASSDOOR.COM.BR (DADOS REFERENTES A SÃO PAULO)
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={10} md={12} pb={6} display="flex" justifyContent="center" gap={15} marginBottom={6}>
          <Box  sx={{ marginTop: '100px' }}>
            <Typography sx={{fontSize: { xs: 22, sm: 30, md: 40, lg: 45 }, fontWeight: 700, color: 'white'}}>R$ 4.200 <strong style={{color : '#0038EA', fontSize: '24px', fontWeight: 800, marginLeft: 20}}>/MÊS</strong></Typography>
            <Typography sx={{fontSize: { xs: 12, sm: 13, lg: 15 }, color: 'white'}}>DESENVOLVEDOR FULL STACK JÚNIOR</Typography>
            <Box sx={{ width: '100%', maxWidth: {xs: '235px', sm: '240px', md: '260px', lg: '295px'} , height: '100%', maxHeight: '56px', backgroundColor: '#7390EB', borderRadius: '10px', marginTop: 2}}/>
          </Box>
          <Box  sx={{ marginTop: '50px' }}> {/* Adiciona margem para criar a escadinha */}
            <Typography sx={{fontSize: { xs: 22, sm: 30, md: 40, lg: 45 }, fontWeight: 700, color: 'white'}}>R$ 6.750 <strong style={{color : '#0038EA', fontSize: '24px', fontWeight: 800, marginLeft: 20}}>/MÊS</strong></Typography>
            <Typography sx={{fontSize: { xs: 12, sm: 13, lg: 15 }, color: 'white'}}>DESENVOLVEDOR FULL STACK PLENO</Typography>
            <Box sx={{ width: '100%', maxWidth: {xs: '235px', sm: '240px', md: '260px', lg: '295px'} , height: '100%', maxHeight: '75px', backgroundColor: '#2D5CED', borderRadius: '10px',  marginTop: 2}}/>
          </Box>
          <Box  > {/* Adiciona margem maior para criar a escadinha */}
            <Typography sx={{fontSize: { xs: 22, sm: 30, md: 40, lg: 45 }, fontWeight: 700, color: 'white'}}>R$ 12.000 <strong style={{color : '#0038EA', fontSize: '24px', fontWeight: 800, marginLeft: 20}}>/MÊS</strong></Typography>
            <Typography sx={{fontSize: { xs: 12, sm: 13, lg: 15 }, color: 'white'}}>DESENVOLVEDOR FULL STACK SÊNIOR</Typography>
            <Box sx={{ width: '100%', maxWidth: {xs: '235px', sm: '240px', md: '260px', lg: '295px'} , height: '100%', maxHeight: '189px', backgroundColor: '#0038EA', borderRadius: '10px',  marginTop: 2}}/>
          </Box>
        </Grid>

        <Typography sx={{ fontSize: { xs: 16, sm: 20, lg: 30 }, fontWeight: 600, color: 'white', marginTop: 10, textAlign: 'center' }}>
          Algumas das empresas que estão contratando desenvolvedores FullStack:
        </Typography>
        
        <Grid container item xs={12} sm={10} md={12} pb={6} display="flex" justifyContent="center" gap={4} marginTop={3}>
          <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: '156px', borderRadius: '15px', p: 2, display: 'flex', justifyContent: 'center' }}>
            <img src={SPOTIFY} alt="Spotify" />
          </Box>
          <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: '156px', borderRadius: '15px', p: 2, display: 'flex', justifyContent: 'center' }}>
            <img src={TWITTER} alt="Spotify"  />
          </Box>
          <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: '156px', borderRadius: '15px', p: 2, display: 'flex', justifyContent: 'center'}}>
            <img src={UBER} alt="Spotify" />
          </Box>
          <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: '156px', borderRadius: '15px', p: 1, display: 'flex', justifyContent: 'center'}}>
            <img src={IFOOD} alt="Spotify" />
          </Box>
          <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: '156px', borderRadius: '15px', p: 1, display: 'flex', justifyContent: 'center'}}>
            <img src={NUBANK} alt="Spotify"  />
          </Box>
          <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: '156px', borderRadius: '15px', p: 1,display: 'flex', justifyContent: 'center'}}>
            <img src={POP} alt="Spotify"  />
          </Box>
        </Grid>

        <Box sx={{ marginTop: 2}}>
          <Typography sx={{ color: '#FFFF47', fontSize: { xs: 20, sm: 25, md: 35, lg: 45 }, fontWeight: 600}}> &lt;/Projetos que você irá fazer no curso:</Typography>
        </Box>
      </Grid>
     
    </Box>
  );
}
