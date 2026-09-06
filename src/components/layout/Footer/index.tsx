const Footer = () => {
  return (
    <footer className="bg-primary/8 px-responsive py-4 border-t flex justify-between items-center">
      <p className="text-xs sm:text-sm">© 2026 Adency. All rights reserved.</p>

      <div className="w-max flex items-end gap-1.5">
        <span className="block h-5 w-1.5 rounded-2xl bg-primary/60 rotate-20" />
        <span className="block h-9 w-1.5 rounded-2xl bg-accent/60 rotate-20 relative -right-0.5" />
        <span className="block h-5 w-1.5 rounded-2xl bg-primary/60 rotate-20" />
      </div>
    </footer>
  );
};

export default Footer;
