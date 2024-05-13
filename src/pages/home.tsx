import { Helmet } from 'react-helmet-async';
import Banner from 'src/sections/banner/Banner';
import Newsletter from 'src/sections/newsletter/Newsletter';
import OptionClient from 'src/sections/optionclient/Optionclient';
import SectionTwoCarrousel from 'src/sections/section-two-carrousel/SectionTwoCarroussel';
import ServicesSection from 'src/sections/services';
import EarthSection from 'src/sections/earth';
import { Box } from '@mui/material';
import VideoPlaySection from 'src/sections/videoPlay';

// ----------------------------------------------------------------------

export default function HomePage() {


  return (
    <Box sx={{backgroundColor: 'black'}}>
      <Helmet>
        <title> Maximum Agency</title>
      </Helmet>
      <VideoPlaySection />
      <ServicesSection />
      <EarthSection />
      <SectionTwoCarrousel />
      <OptionClient />
      <Newsletter />
      <Box sx={{backgroundColor: '#0038EA'}}>
        <Banner />
      </Box>
      
    </Box>
  );
}
