import { Box } from '@mui/material';
import { Cotacao } from 'src/documents/Cotacao';

interface CurrencyExchangeInfoProps {
  cotacoes: { [key: string]: Cotacao };
}
// eslint-disable-next-line
const CurrencyExchangeInfo: React.FC<CurrencyExchangeInfoProps> = ({ cotacoes }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    {Object.values(cotacoes)?.map((cotacao, index) => (
      <Box
        key={cotacao.code}
        sx={{
          color: '#fff',
          fontSize: '14px',
          marginTop: index !== Object.values(cotacoes).length - 1 ? '8px' : '0',
        }}
      >
        {cotacao?.name?.split('/')[0]} ({cotacao.code}){' '}
        <span>
          R${' '}
          {Number(cotacao?.ask)?.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
      </Box>
    ))}
  </Box>
);

export default CurrencyExchangeInfo;
