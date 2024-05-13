import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

export default function Banner() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        sx={{
          maxWidth: 1200,
          pt: { xs: 3, sm: 9 },
          display: 'flex',
          justifyContent: 'center',

          p: 4,
          borderRadius: '15px',
          marginTop: 4,
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              &lt;/Mód. 01 &gt;{' '}
            </Typography>
            <Typography variant="h3" sx={{ color: '#FFFF47' }}>
              GitHub{' '}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* Acesso Vitalício */}
          <Box>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
              1.1 - Introdução ao GitHub
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white', marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
              1.2 - Colaboração e Gerenciamento de Projetos no GitHub
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
              1.3 - Personalização e Boas Práticas no GitHub
            </Typography>
          </Box>
        </Grid>
        {/** Modulo02 */}
     
        <Grid item xs={12} sm={6} md={6} marginTop={12}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              &lt;/Mód. 02 &gt;{' '}
            </Typography>
            <Typography variant="h3" sx={{ color: '#FFFF47' }}>
            Front-End
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} marginTop={8}>
          {/* Acesso Vitalício */}
          <Box>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            2.1 -  Introdução a Progamação HTML
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            2.2 -  Introdução ao CSS
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            2.3 -  Desenvolvimento web responsivo

            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            2.4 -  Introdução á progamação Javascript
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white', marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            2.5 -  Introdução a API’s e Protocolos HTTP’s

            </Typography>
          </Box>
        </Grid>
          {/** Modulo03 */}
     
          <Grid item xs={12} sm={6} md={6} marginTop={12}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              &lt;/Mód. 03 &gt;{' '}
            </Typography>
            <Typography variant="h3" sx={{ color: '#FFFF47' }}>
             Back-End
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} marginTop={8}>
          {/* Acesso Vitalício */}
          <Box>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            3.1 -  Fundamentos de Desenvolvimento com Node.js
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            3.2 -  Bancos de Dados Relacionais com MySQL e PostgreSQL
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            3.3 -  Implantação e Escalabilidade na Google Cloud Platform
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            3.4 - Pipeline CI/CD com GitHub Actions
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white', marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            3.5 -  Testes unitarios 
            </Typography>
          </Box>
        </Grid>
          {/** Modulo05 */}
     
          <Grid item xs={12} sm={6} md={6} marginTop={12}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              &lt;/Mód. 04 &gt;{' '}
            </Typography>
            <Typography variant="h3" sx={{ color: '#FFFF47' }}>
             Front-End <br />
             Avançado
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} marginTop={8}>
          {/* Acesso Vitalício */}
          <Box>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            4.1 -  Fundamentos do React
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            4.2 - Construção de Interfaces com React
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            4.3 -   Integração de APIs com React
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            4.4 - Aplicações Práticas e Projetos
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white', marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            4.5 -  Testes unitarios 
            </Typography>
          </Box>
        </Grid>
             {/** Modulo05 */}
     
             <Grid item xs={12} sm={6} md={6} marginTop={12}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              &lt;/Mód. 05 &gt;{' '}
            </Typography>
            <Typography variant="h3" sx={{ color: '#FFFF47' }}>
             FullStack
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} marginTop={8} marginBottom={10}>
          {/* Acesso Vitalício */}
          <Box>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            5.1 -  Construção do Backend com Node.js (ou Nest.js)
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            5.2 - Desenvolvimento do Frontend com React
            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            5.3 -  Implementação de Recursos Avançados

            </Typography>
          </Box>
          <Divider
            sx={{ color: 'white',  marginTop: 2, backgroundColor: 'white' }}
          />
          <Box sx={{ marginTop: 3}}>
            <Typography variant="h5" color="white" sx={{ fontWeight: 400 }}>
            5.4 - Projeto FullStack
            </Typography>
          </Box>
        
        </Grid>
      </Grid>
    </Box>
  );
}
