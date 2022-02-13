export default function Grid({ children }) {
  return (
    <div className="inline-grid md:grid-cols-3 gap-7 mt-12 px-12 mb-12">
      {children}
    </div>
  );
}
