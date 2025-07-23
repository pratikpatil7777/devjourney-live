interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <header className="bg-brand dark:bg-brand-dark py-3 text-white shadow">
    <div className="mx-auto max-w-5xl px-4">
      <h1 className="text-lg font-semibold tracking-wide">{title}</h1>
    </div>
  </header>
);

export default Navbar;
