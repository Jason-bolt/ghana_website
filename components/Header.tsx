import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-5">
      <h1 className="text-2xl font-black mt-2">🇬🇭 GHANA 🇬🇭</h1>
      <div className="flex text-sm mt-3 items-center justify-center gap-5">
        <Link href="/#" className="hover:text-yellow-500">The Genesis</Link>
        <Link href="/#anthem" className="hover:text-yellow-500">Anthem</Link>
        <Link href="/#pledge" className="hover:text-yellow-500">Pledge</Link>
        <Link href="/#presidents" className="hover:text-yellow-500">Presidents</Link>
      </div>
    </div>
  );
};

export default Header;
