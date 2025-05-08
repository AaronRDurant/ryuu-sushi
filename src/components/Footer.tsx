export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Ryuu Sushi Lounge</div>
        <div className="flex gap-4">
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
