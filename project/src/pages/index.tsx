import type { NextPage } from "next";
import { Footer, Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Footer/>
    </>
  );
};

export default Home;
