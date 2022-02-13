export default function Layout({ children }) {
  return (
    <div className="flex justify-center">
      <div className="rounded bg-white w-6/6 mt-32 mb-32">{children}</div>
    </div>
  );
}
