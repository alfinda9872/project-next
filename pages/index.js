import Link from "next/link";
import Layout from "../pages/component/Layout_Halaman";
import Grid from "../pages/component/MangaGrid";
import Title from "./component/Title";

export default function Home({ externalPostData }) {
  return (
    <div>
      <Title ket="Project Next Manga" />

      <Layout>
        <h1 className="text-center text-3xl">
          <i className="text-red-500 font-bold">Manga</i>
          <b className="text-blue-600">Info</b>
        </h1>
        <div className="flex justify-center">
          <div className="border-b-4 border-blue-600 w-3/6 mt-3"></div>
        </div>
        <Grid>
          {externalPostData.map((data, index) => {
            return (
              <div key={index}>
                <p className="text-2xl font-bold py-1">{data.judul_manga}</p>
                <img
                  src={data.gambar_manga}
                  className="rounded-lg max-h-64 w-full py-2"
                />
                <p className="py-1">{data.release}</p>
                <p>By : {data.author}</p>
                <Link href={`/posts/${data.id}`}>
                  <a className="text-lg text-sky-700">Selengkapnya...</a>
                </Link>
              </div>
            );
          })}
        </Grid>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const alamatApi =
    "https://my-json-server.typicode.com/alfinda9872/manga/data_manga";
  const response = await fetch(alamatApi);
  const data = await response.json();

  return {
    props: {
      externalPostData: data,
    },
  };
}
