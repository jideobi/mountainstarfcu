export default function MobileMenu({ open }) {
  if (!open) return null;

  return (
    <div className="bg-white border-t">

      <div className="flex flex-col">

        <a className="p-4 border-b">Home</a>

        <a className="p-4 border-b">About</a>

        <a className="p-4 border-b">Services</a>

        <a className="p-4 border-b">Loans</a>

      </div>

    </div>
  );
}