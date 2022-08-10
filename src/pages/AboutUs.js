import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Sect1 from "../components/Sect1";
import Sect2 from "../components/Sect2";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Fixed from "../fixed";
import { useTranslation } from "react-i18next"; 

const AboutUs = ({ user }) => {
  const { t } = useTranslation();


  React.useEffect(() => {
    document.title = `${t("nav1")} | COOL BARBER`
  }, [t])
  if (!user) {
    return <div>Loading....</div>;
  }
//JSX
  return (
    <div>
      <Nav user={user}/>
      <Header />
      <Sect1 />
      <Sect2 />
      <Aside />
      <Footer />
      <Fixed />
    </div>
  );
};

export default AboutUs;
