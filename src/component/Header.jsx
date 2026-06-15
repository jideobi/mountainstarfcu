export default function Header() {
  return (
    <div className="bg-[rgb(63,45,131)] text-white p-2">
      <div className="max-w-7xl mx-auto flex justify-between px-4 py-2 text-sm">
        <div className="hidden md:block">
          (915) 544-2215 | (888) 843-3207
        </div>

        <div className="flex gap-4 text-[12px]">
          <a href="#">ROUTING: #312080996</a>
          <a href="#">NMLS ID: #1490205</a>
          <a href="#">Español</a>
        </div>
      </div>
    </div>
  );
}