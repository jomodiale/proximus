import HeroImage from '../assets/Hero.jpg'
import HeroImage2 from '../assets/Hero2.jpg'
import HeroImage3 from '../assets/Hero3.png'
import { RecommendationType } from './Types/ConfigTypes';

export const NavBarConfig = [
  {
    title: "Personal",
    redirectTo: "/home",
  },
  {
    title: "Business",
    redirectTo: "/",
  },
  {
    title: "Large Companies",
    redirectTo: "/",
  },
  // {
  //   title: "About",
  //   redirectTo: "/",
  // },
];


export const HeaderConfig = [
    {
        title: "Packs",
        redirectTo: "/home",
      },
      {
        title: "Mobile",
        redirectTo: "/",
      },
      {
        title: "Internet",
        redirectTo: "/",
      },
      {
        title: "TV",
        redirectTo: "/",
      },
      {
        title: "Help",
        redirectTo: "/",
      },
      {
        title: "Apps",
        redirectTo: "/",
      }
]


export const HeroConfig = {
    title  : 'iPhone 14',
    description : 'As of €147.93 with subscriptions',
    background : HeroImage2,
    buttonText : 'Let\'s go',
    onClickButtonRedirect : '/search',
    
}


export const MainRecommendationConfig : RecommendationType= {

  title : 'Recommendations',
  description : "Here are your personalized recommendations",
  numberOfResults: 6,
  imageField : 'pic',
  pipeline : 'default',
  id : 'Recommendation'
}

export const VideoRecommendationConfig : RecommendationType  = {

  title : 'Videos',
  description : "Here are your personalized recommendations",
  numberOfResults: 3,
  imageField : 'ytthumbnailurl',
  pipeline : 'YouTube PR',
  id : 'Recommendation'
}


export const EnableAuthentication = false;