export default function Detail({ children, alamat }) {
  return (
    <div className="inline-grid md:grid-cols-2 mt-12 px-12 mb-12">
      <div className="max-w-lg max-h-sm mr-6">
        <img src={alamat} className="rounded-lg w-full" />
      </div>
      <div className="max-w-lg max-h-sm">
        <p>{children}</p>
      </div>
    </div>
  );
}
