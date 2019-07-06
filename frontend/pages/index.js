import Head from 'next/head';
import Items from '../components/Items';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <Head>
        <meta name="title" content="EuroSport" />
        <meta
          name="description"
          content="Izrada i prodaja profesionalnih sprava za vežbanje. Opremite vašu teretanu spravama vrhunskog kvaliteta, po povoljnim cenama."
        />
        <meta
          name="keywords"
          content="Bodybilding, ,Trening, gym, sprave, sprave za vezbanje, sprave za teretanu, teretana, oprema za teretanu, tegovi, bucice, bench press"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div>
        <Items />
        <Footer />
      </div>
    </>
  );
};

export default Home;
