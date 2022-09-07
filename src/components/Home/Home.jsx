import React, { useState } from "react";
import {
  About,
  Aplications,
  ContactUs,
  Footer,
  Header,
  Hero,
  Security,
  Services,
  Sidebar,
} from "./components/index";

import { aboutObj, aplications, heroObj, security, services } from "./Data";

const Home = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const show = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const themeChange = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <>
      <Header isOpen={show} />
      <Sidebar
        toggle={sidebarIsOpen}
        isOpen={show}
        toggleTheme={theme}
        isTheme={themeChange}
      />
      <Hero {...heroObj} />
      <About {...aboutObj} />
      <Security {...security} />
      <Services {...services} />
      <Aplications {...aplications} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
