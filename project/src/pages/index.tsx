import type { NextPage } from "next";
import { Footer, Header, Hero } from "../components";
import { HomePage } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage/>
      <Footer/>
    </>
  );
};

export default Home;
