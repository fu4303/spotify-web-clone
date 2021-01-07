import Head from "next/head";
import Login from "../Components/Login/Login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ backgroundColor: "black", height: "100vh" }}>
        <Login />
      </main>
    </div>
  );
}
