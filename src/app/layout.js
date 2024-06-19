//import { Inter } from "next/font/google";
//👇 Import Open Sans font
import { Open_Sans, Montserrat } from 'next/font/google'
import classNames from 'classnames';
import classes from './layout.module.css';
import "./globals.css";
import MainHeader from '@/components/header/main-header';


//const inter = Inter({ subsets: ["latin"] });


//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: {
    default: "RBA - NextJS 14 Tutorial",
    template: "%s | NextJS 14 Tutoral"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const htmlClasses = classNames(openSans.variable, montserrat.variable)

  return (
    <html lang="en" className={htmlClasses}>
      <body className={classes.appBody}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
