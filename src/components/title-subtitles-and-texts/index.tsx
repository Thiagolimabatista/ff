import { Box, Grid, Typography } from '@mui/material';

interface Subtitles {
  content: string;
  title: string;
}
interface TitleSubtitleAndTextProps {
  title: string;
  subtitles: Array<Subtitles>;
}
export default function TitleSubtitlesAndTexts({ title, subtitles }: TitleSubtitleAndTextProps) {
  return (
    <Box
      sx={{
        px: { xs: 0.5, sm: 5 },
        display: 'flex',
        backgroundColor: 'transparent',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: { xs: 3, md: 9 },
          py: { xs: 6, sm: 5 },
          backgroundColor: (t) => t.palette.background.paper,
          maxWidth: 1450,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h2" fontFamily="Flexo">
            {title}
          </Typography>
        </Grid>
        <Grid container xs={12} mb={3}>
          {subtitles.map((item) => (
            <>
              <Grid item xs={12} md={12} mb={3}>
                <Typography variant="h4" fontFamily="Flexo">
                  {item.title}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} mb={3}>
                {item.content}
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
