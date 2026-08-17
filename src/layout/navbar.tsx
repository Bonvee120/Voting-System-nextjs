import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#7C2D12] text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Africa Plan Foundation"
            width={150}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <div className="text-sm font-semibold tracking-wide sm:text-base">
          VOTING HOH COHORT PORTAL
        </div>
      </div>
    </header>
  );
};

export default Navbar;