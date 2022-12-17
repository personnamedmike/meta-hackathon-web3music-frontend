import Head from "next/head";
import HottestSongs from "../HottestSongs";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <HottestSongs />
      </div>
    </>
  );
};

export default Home;
