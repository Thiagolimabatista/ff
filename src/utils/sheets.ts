import axios from 'axios';
import { newsletterRegistration, NewsletterRegistration } from './mailing';

export const newsLetterSheet = async (data: NewsletterRegistration) => {
  const DATA_SERIALIZED = {
    EMAIL: data.email,
  };
  await axios.post(
    'https://sheet.best/api/sheets/fd6e5fb6-5e14-48f6-8028-cc7bacee2f9d',
    DATA_SERIALIZED
  );
  await newsletterRegistration(data);
};
