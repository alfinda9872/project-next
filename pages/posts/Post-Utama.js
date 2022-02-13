export default function PostUtama() {
  return (
    <>
      {["naruto", "onepiece", "inuyasha"].map((manga, index) => {
        return (
          <>
            <h1 className="text-3xl bold" key={index}>
              {manga}
            </h1>
            <img src="/naru.jpg" />
            <p>volume : 10</p>
            <p>release date : </p>
            <p>author : </p>
          </>
        );
      })}
    </>
  );
}
