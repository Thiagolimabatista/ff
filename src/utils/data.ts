import ic_localizacao from 'src/assets/icons/ic_localizacao.png';
import ic_telefone from 'src/assets/icons/ic_telefone.png';
import ic_whatsapp from 'src/assets/icons/ic_whatsapp.png';
import ic_linkedin from 'src/assets/icons/ic_linkedin.png';
import ic_facebook from 'src/assets/icons/ic_facebook.png';
import ic_instagram from 'src/assets/icons/ic_instagram.png';
import background_hero_five from 'src/assets/data/Módulos-ZeroAoFullstackQuizInterativo.jpg';
import background_hero_two from 'src/assets/data/Módulos-ZeroAoFullstackNetflix.jpg';
import background_hero_three from 'src/assets/data/Módulos-ZeroAoFullstackPokedex.jpg';
import background_hero_four from 'src/assets/data/Módulos-ZeroAoFullstackPortfolio.jpg';
import background_hero_six from 'src/assets/data/Módulos-ZeroAoFullstackSpotify_1.jpg';
import background_hero_eight from 'src/assets/data/Módulos-ZeroAoFullstackTwitterX.jpg';
import background_hero_seven from 'src/assets/data/Módulos-ZeroAoFullstackSpotify_2.jpg';
import background_hero_one from 'src/assets/data/Módulos-ZeroAoFullstackMiniPortfólio.jpg';
import carro_img from '../../public/assets/images/options/img_car.png';
import ingresso_img from '../../public/assets/images/options/img_ingresso.png';
import seguro_img from '../../public/assets/images/options/img_seguro.png';
import flag_img from '../../public/assets/images/options/img_flag.png';
import carrousel_rio_de_janeiro_ from '../../public/assets/images/bloqueios/carrousel_rio_de_janeiro.png';
import carrousel_orlando from '../../public/assets/images/bloqueios/carroussel_orlando.png';
import carrousel_turquia from '../../public/assets/images/bloqueios/carroussel_turquia.png';
import carrousel_inglaterra from '../../public/assets/images/bloqueios/carrousel_inglaterra.png';

import background_hero_one_mobile from '../../public/assets/background/mobile-carousel/Cultura.svg';
import background_hero_two_mobile from '../../public/assets/background/mobile-carousel/Atendimento.svg';
import background_hero_three_mobile from '../../public/assets/background/mobile-carousel/Roteiros.svg';
import background_hero_four_mobile from '../../public/assets/background/mobile-carousel/Inovação.svg';

export const contactInfo = [
  {
    icon: ic_whatsapp,
    text: '(34) 99811-6501',
  },
  {
    icon: ic_telefone,
    text: '(34) 3229-0010',
    additionalInfo: 'Atendimento 24h p/ passageiros em trânsito',
  },
  {
    icon: ic_localizacao,
    text: 'Uberlândia MG',
  },
];

export const socialIcons = [
  { icon: ic_facebook, alt: 'Icone do Facebook' },
  { icon: ic_instagram, alt: 'Icone do Instagram' },
  { icon: ic_linkedin, alt: 'Icone do Linkedin' },
];

export const optionsData = [
  { image: ingresso_img, text: 'Ingressos', marginTop: 4 },
  { image: carro_img, text: 'Carros e Transfers', marginTop: 0 },
  { image: seguro_img, text: 'Seguro viagem', marginTop: 3 },
  { image: flag_img, text: 'Guia em viagens internacionais', marginTop: 3 },
];

export const CarrouselDeInfomacaoBloqueio = [
  {
    image: carrousel_rio_de_janeiro_,
    title: 'Rio de Janeiro',
    subtitle: 'Oferta',
    estadia: '10 Dias/9 Noites',
    data: '30/11 à 10/12',
    valor: 'R$7.921,50',
  },
  {
    image: carrousel_orlando,
    title: 'Orlando Mágico',
    subtitle: 'Réveillon',
    estadia: '8 Dias/7 Noites',
    data: '28/12 à 05/01',
    valor: 'R$10.758,00',
  },
  {
    image: carrousel_turquia,
    title: 'Turquia Extra Plus',
    subtitle: 'Voando Turkish',
    estadia: '10 Dias/9 Noites',
    data: '30/11 à 10/12',
    valor: 'R$11.521,78',
  },
  {
    image: carrousel_inglaterra,
    title: 'Inglaterra',
    subtitle: 'Com guia',
    estadia: '10 Dias/9 Noites',
    data: '30/11 à 10/12',
    valor: 'R$8.251,25',
  },
];
export const mobileImages = [
  background_hero_two_mobile,
  background_hero_one_mobile,
  background_hero_four_mobile,
  background_hero_three_mobile,
];
export const images = [
  background_hero_two,
  background_hero_three,
  background_hero_eight,
  background_hero_five,
  background_hero_seven,
  background_hero_four,
  background_hero_six,
  background_hero_one
];

export const aboutDiretores = [
  { image: ingresso_img, name: 'Lucas Bittencourt', cargo: 'CEO' },
  { image: carro_img, name: 'Clovis P', cargo: 'Intern' },
  { image: seguro_img, name: 'Daniela Pajaro', cargo: 'Intern' },
];


export const captions = [
  "Projeto Netflix",
  "Projeto Pokedex",
  "Projeto Twitter",
  "Quiz interativo Firebase",
  "Spotify",
  "Portifólio Parte 1",
  "Ecommerce",
  "Portifólio Final"
];
