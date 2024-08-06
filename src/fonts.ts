import {
  Fira_Code,
  Inter,
  Lora,
  Merriweather,
  Montserrat,
  Nunito,
  Oswald,
  Playfair_Display,
  Poppins,
  Quicksand,
  Raleway,
  Roboto_Mono,
  Roboto_Serif,
  Source_Sans_3,
  Ubuntu,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
});

export const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
});

export const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
});

export const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const fontOptions = {
  inter: inter,
  montserrat: montserrat,
  robotoSerif: robotoSerif,
  robotoMono: robotoMono,
  playfairDisplay: playfairDisplay,
  lora: lora,
  oswald: oswald,
  merriweather: merriweather,
  nunito: nunito,
  poppins: poppins,
  firaCode: firaCode,
  quicksand: quicksand,
  raleway: raleway,
  sourceSans3: sourceSans3,
  ubuntu: ubuntu,
};
