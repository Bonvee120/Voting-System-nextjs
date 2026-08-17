const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-center px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Africa Plan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;