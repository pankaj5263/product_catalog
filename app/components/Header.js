import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-green-200 text-green shadow-md">
      <Link href="/">
        <span className="text-2xl font-bold cursor-pointer">Catalog</span>
      </Link>
      <Link href="/add-products">
        <Button variant="outline" className=" bg-white hover:bg-blue-100 transition">
          Add Products
        </Button>
      </Link>
    </header>
  );
}

export default Header;
