import Head from "next/head";

export default function Title(props) {
  return (
    <Head>
      <title>{props.ket}</title>
      <meta name="description" content="Mangan Project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
