/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-duplicates */
import { Button, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { format, sub } from 'date-fns';
import { useEffect, useState } from 'react';
import { ptBR } from 'date-fns/locale';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { useSnackbar } from 'notistack';
import httpRequest from 'src/utils/httpRequest';
import BinaryDialog from 'src/components/BinaryDialog';
import { useBoolean } from 'src/hooks/use-boolean';
import { useNavigate } from 'react-router';
import { ExchangeRateInterface } from 'src/types/exchange-rate';

export default function ExchangeRate() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const saveModal = useBoolean();
  const successDialog = useBoolean();
  const breadcrumbs = [{ name: 'Painel' }, { name: 'Site' }, { name: 'Câmbio' }];
  const [euro, setEuro] = useState('');
  const [dolar, setDolar] = useState('');
  const [isSubmiting, setLoading] = useState(false);
  const [lastExchangeData, setExchangeData] = useState<ExchangeRateInterface>({
    euro: 0,
    dolar: 0,
    createdAt: '',
  });
  const getExchangeRate = async () => {
    setLoading(true);
    try {
      const response = await httpRequest(`/exchanges`, {}, 'get');
      if (response?.length) {
        setExchangeData(response[0]);
      } else {
        throw new Error('Não encontramos a última atualização da taxa de câmbio');
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
    setLoading(false);
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  let lastUpdateMessage = 'Não encontramos a última atualização';
  if (lastExchangeData?.euro) {
    const date = format(new Date(lastExchangeData.createdAt || ''), 'PPPP', { locale: ptBR });
    // CreateDateColumn in backend has no option for UTC's
    const time = format(
      sub(new Date(lastExchangeData.createdAt || ''), {
        hours: 3,
      }),
      'HH:mm',
      { locale: ptBR }
    );
    lastUpdateMessage = `Última atualização, ${date} às ${time}.`;
  }
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const parsedDolar = parseFloat(dolar.replace(',', '.'));
      const parsedEuro = parseFloat(euro.replace(',', '.'));
      const post = await httpRequest(
        `/exchanges`,
        { euro: parsedEuro, dolar: parsedDolar },
        'post'
      );
      if (Object.keys(post).includes('euro')) {
        saveModal.setValue(false);
        successDialog.setValue(true);
      } else {
        throw new Error('Verifique os valores e tente novamente');
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
    setLoading(false);
  };

  return (
    <Grid
      container
      gap={3}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
    >
      <Grid item xs={11} md={11} mb={2}>
        <Typography variant="h3" fontFamily="Flexo">
          Câmbio
        </Typography>
        <CustomBreadcrumbs links={breadcrumbs} />
      </Grid>
      <Grid container item xs={11} md={11} mb={1} gap={2}>
        <Grid item xs={7} md={11}>
          <Typography variant="subtitle1" fontFamily="Flexo">
            Informações
          </Typography>
        </Grid>
        <Grid item xs={7} md={3}>
          <InputLabel
            sx={{ marginBottom: -1.5, marginLeft: 1 }}
            htmlFor="outlined-adornment-amount"
          >
            Dólar americano (USD)*
          </InputLabel>
          <OutlinedInput
            placeholder="04,9600"
            sx={{ width: '100%', height: 60 }}
            id="outlined-adornment-amount"
            value={dolar}
            onChange={(e) => setDolar(e.target.value)}
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            label="Dólar americano (USD)*////"
          />
        </Grid>
        <Grid item xs={7} md={3}>
          <InputLabel
            sx={{ marginBottom: -1.5, marginLeft: 1 }}
            htmlFor="outlined-adornment-amount"
          >
            Euro (EUR)*
          </InputLabel>
          <OutlinedInput
            value={euro}
            onChange={(e) => setEuro(e.target.value)}
            placeholder="05,3600"
            sx={{ width: '100%', height: 60 }}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            label="Euro (EUR)*"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" fontFamily="Flexo">
            {lastUpdateMessage}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={11}>
        <Grid item xs={3}>
          <Button sx={{ borderColor: '#0063FF', color: '#0063FF' }} variant="outlined">
            Cancelar
          </Button>
          <Button
            onClick={saveModal.onTrue}
            sx={{ marginLeft: 2, backgroundColor: '#0063FF', color: 'white' }}
            variant="contained"
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
      <BinaryDialog
        boldText="As novas taxas serão:"
        text={`Dolar: ${parseFloat(dolar.replace(',', '.') || '0')}   - -    Euro: ${parseFloat(
          euro.replace(',', '.') || '0'
        )}`}
        isOpen={saveModal.value}
        setIsOpen={saveModal.onFalse}
        positiveFn={handleSubmit}
        positiveButtonText="Salvar"
        negativeButtonText="Voltar"
        title="Confirme as taxas pois serão refletidas imediatamente no site!"
        isLoading={isSubmiting}
      />
      <BinaryDialog
        boldText="Taxa de câmbio atualizada com sucesso"
        text=""
        isLoading={isSubmiting}
        isOpen={successDialog.value}
        setIsOpen={successDialog.onFalse}
        positiveFn={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate(`/`);
        }}
        positiveButtonText="ir para página principal"
        negativeButtonText="Voltar"
        title="Salvo com sucesso"
      />
    </Grid>
  );
}
