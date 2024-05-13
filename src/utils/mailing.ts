// @ts-ignore
import moment from 'moment';

export interface NewsletterRegistration {
  email: string;
}

export async function newsletterRegistration(data: NewsletterRegistration) {
  try {
    await fetch(
      'https://us-central1-ferias-facil-staging.cloudfunctions.net/api/agency-registration',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          sendTo: ['julia.martins@ffoperadora.com.br', 'lucas@lazertur.com.br'],
          TODAY_DATE: moment().format('MMMM DD, YYYY HH:mm'),
        }),
      }
    );
  } catch (err) {
    console.error(err);
  }
}
