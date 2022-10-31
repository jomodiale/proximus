import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const Theme = {
  primaryText : '#5c2d91',
  secondaryText: '#0a0a0a',
  primary : '#5c2d91',
  secondary: '#004990',
  selection : '#7d57a7',
  link: '#5c2d91',
  navbarText: 'rgba(0,0,0,.56)',
  navbar: '#ffffff',
  background: '#E5E5E5',
  button : 'rgba(255,255,255,.24)',
  footer: '#fff',
  resultLink: '#5c2d91',
  excerpt : '#0a0a0a',
  headerIconColor : "grey",
  unselected: 'rgba(92,45,145,.16);'
}

const theme = createTheme({
  palette: {
    mode: 'light',
    text :{
      primary : Theme.primaryText
    },
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Proximus-Regular, Proximus-Bold, Proximus-Extra, Gibson,Noto Sans, Avenir, Helvetica, Arial, sans-serif',
    // Material-UI uses rem units for the font size. This will change the base size for the entire search page
    // More info at https://material-ui.com/customization/typography/#font-size
    fontSize: 16,
    fontWeightRegular : '300',
    fontWeightMedium : '400'
  },
});

export default theme;
