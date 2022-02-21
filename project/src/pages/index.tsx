import { GetStaticProps } from "next";
import {
  Contato,
  ExperienciasProfissionais,
  Footer,
  Header,
  Hero,
  MinhasTecnologias,
  Portfolio,
  SobreMim,
} from "../components";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

type Portfolio = {
  slug: string;
  image: string;
  title: string;
  description: string;
  linkDribbble: string;
};
type techs = {
  slug: string;
  icon: string;
  title: string;
  description: string;
};
type job = {
  slug: string;
  logo: string,
  logoDark: string,
  title: string,
  duration: string,
  description: string,
};
interface IHomeProps {
  portfolio: Portfolio[];
  technologys: techs[];
  emprego: job[];
}

export default function Home({ portfolio, technologys, emprego}: IHomeProps) {
  return (
    <>
      <Header />
      <Hero />
      <SobreMim />
      <Portfolio portfolio={portfolio} />
      <MinhasTecnologias techs={technologys}/>
      <ExperienciasProfissionais emprego={emprego}/>
      <Contato />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const responsePortifolio = await prismic.query(
    [Prismic.predicates.at("document.type", "portfolio")],
    {
      fetch: [
        "portfolio.title",
        "portfolio.description",
        "portfolio.preview_do_projeto",
        "portfolio.linkdribbble",
      ],
      pageSize: 100,
    }
  );

  const responseTechnologys = await prismic.query(
    [Prismic.predicates.at("document.type", "technologys")],
    {
      fetch: [
        "technologys.title",
        "technologys.description",
        "technologys.icon",
      ],
      pageSize: 100,
    }
  );

  const responseEmprego = await prismic.query(
    [Prismic.predicates.at("document.type", "job")],
    {
      fetch: [
        "job.title",
        "job.duration",
        "job.description",
        "job.image",
        "job.image_dark",
      ],
      pageSize: 100,
    }
  );

  const portfolio = responsePortifolio.results.map((post) => {
    return {
      slug: post.uid,
      image: post.data.preview_do_projeto.url,
      title: post.data.title[0].text,
      description: post.data.description[0].text,
      linkDribbble: post.data.linkdribbble.url,
    };
  });

  const technologys = responseTechnologys.results.map((tech) => {
    return {
      slug: tech.uid,
      icon: tech.data.icon.url,
      title: tech.data.title[0].text,
      description: tech.data.description,
    };
  });

  const emprego = responseEmprego.results.map((job) => {
    return {
      slug: job.uid,
      logo: job.data.image.url,
      logoDark: job.data.image_dark.url,
      title: job.data.title[0].text,
      duration: job.data.duration[0].text,
      description: job.data.description[0]?.text,
    };
  });

  return {
    props: { portfolio, technologys, emprego },
  };
};
