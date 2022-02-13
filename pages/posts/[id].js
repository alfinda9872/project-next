import LayoutManga from "../component/Layout_Detail_Manga";
import Detail from "../component/DetailManga";
import Link from "next/link";
import Title from "../component/Title";

export default function Tampil({ postData }) {
  const prew = postData.list;
  return (
    <>
      <Title ket={postData.judul_manga} />
      <LayoutManga alamat={postData.preview}>
        <Link href="/">
          <button className="bg-transparent text-black font-bold absolute ml-3 mt-2 px-2 rounded">
            <img src="/back.png" className="w-5 float-left mr-1 mt-1" />
            <span className="text-lg">Back</span>
          </button>
        </Link>
        <Detail alamat={postData.gambar_manga} preview={postData.preview}>
          <p className="text-2xl font-bold mb-2">{postData.judul_manga}</p>
          <div className="grid md:grid-cols-2">
            <div>
              <p>
                <b>Volume</b> : {postData.volume}
              </p>
              <p>
                <b>Chapter</b> : {postData.chapter}
              </p>
            </div>
            <div>
              <p>
                <b>Author</b> : {postData.author}
              </p>
              <p>
                <b>Tanggal Release</b> : {postData.release}
              </p>
            </div>
          </div>
          <p>
            <b>Deskripsi</b> :
          </p>
          <p className="text-justify">{postData.desk_manga}</p>
          <p className="font-bold mt-2">Preview Chapter : </p>
          <div className="columns-3">
            {prew.map((li, index) => {
              return (
                <img
                  key={index}
                  src={li}
                  className="w-full max-h-56 hover:max-h-screen"
                />
              );
            })}
          </div>
        </Detail>
      </LayoutManga>
    </>
  );
}

async function getAllPostIds() {
  const alamatApi = "http://localhost:3001/data_manga";
  const response = await fetch(alamatApi);
  const allPosts = await response.json();

  const allPostsIds = allPosts.map((tampil) => {
    return { params: { id: tampil.id } };
  });

  return allPostsIds;
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

async function getPostData(id) {
  const alamatApi = `http://localhost:3001/data_manga?id=${id}`;
  const response = await fetch(alamatApi);
  const postData = await response.json();

  return postData;
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData: postData[0],
    },
  };
}
