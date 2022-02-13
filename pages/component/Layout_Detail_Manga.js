export default function LayoutManga({ children, alamat }) {
  return (
    <div
      className="bg-fixed bg-cover"
      style={{ backgroundImage: `url(${alamat})` }}
    >
      <div className="flex justify-center">
        <div className="rounded bg-white w-6/6 mt-32 mb-32">{children}</div>
      </div>
    </div>
  );
}
