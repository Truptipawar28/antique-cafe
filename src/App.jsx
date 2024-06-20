import About from "./About";
import "./App.css";
import HeroSection from "./HeroSection";
import Menu from "./Menu";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

function App() {
  const nav = ["Intro", "Menu", "About", "Contact"];
  const hero = [
    {
      heading: "Antique Cafe",
      headingpara: "your daily energy booster",
      para: `This is a coffee shop template named Antique Cafe which is a parallax HTML5 template with a good responsiveness. Feel free to use this layout for your cafe. If you have any question, please`,
      button: "Let's explore...",
    },
  ];

  const menu = [
    {
      img: "../src/assets/img/menu-item-1.jpg",
      menuHeading: "Hot Cappuccino",
      small: "S $8.50",
      large: "L $10.50",
    },

    {
      img: "../src/assets/img/menu-item-2.jpg",
      menuHeading: "Hot Americano",
      small: "S $9.50",
      large: "L $12.50",
    },

    {
      img: "../src/assets/img/menu-item-3.jpg",
      menuHeading: "Hot Latte #FC6",
      small: "S $9.50 ",
      large: "L $12.50",
    },

    {
      img: "../src/assets/img/menu-item-4.jpg",
      menuHeading: "Hot Chocolate",
      small: " M $11.75",
      large: "L $14.75",
    },
  ];

  const icedMenu = [
    {
      img: "../src/assets/img/menu-item-5.jpg",
      menuHeading: "Iced Cappuccino",
      small: "S $8.50",
      large: "L $10.50",
    },

    {
      img: "../src/assets/img/menu-item-6.jpg",
      menuHeading: "Iced Americano",
      small: "S $8.50",
      large: "L $10.50",
    },

    {
      img: "../src/assets/img/menu-item-7.jpg",
      menuHeading: "  Iced Milky Latte",
      small: "Small $14",
      large: "Large $18",
    },

    {
      img: "../src/assets/img/menu-item-8.jpg",
      menuHeading: "Iced Mocha",
      small: "Small $10",
      large: "L $10.50",
    },
  ];

  const about = [
    {
      aboutheading: "About our cafe",
      aboutcontent: "Images are taken from Pexels, a great stock photo website. This template used Tailwind CSS. You may modify Antique Cafe template in any way you prefer and use it for your website.",

      aboutcontent1: "If you wish to support us, please make a little donation via PayPal. That would be very helpful. Another way is to tell your friends about Tooplate website. Thank you.",
      contactbutton: "  Contact"
    }
  ]

  const contactUs = [
    {
      contactUsHeading: "Contact Us",
      contactUsContent: "Praesent tellus magna, consectetur sit amet volutpat eu, pulvinar vitae sem. Sed ultrices. bg white 80% alpha. btn #066",
      contactUsTel: "Tel: ",
      contactUsEmail: "Email: info@company.com",
      mapBtn: " Open Maps"
    }
  ]

  return (
    <>
      <Navbar navContent={nav} />
      <HeroSection heroContent={hero} />
      <Menu menuContent={menu} icedmenuContent={icedMenu} />
      <About aboutContent={about}/>
      <ContactUs contactUsContent={contactUs} />
    </>
  );
}

export default App;
