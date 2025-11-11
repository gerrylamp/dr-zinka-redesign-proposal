const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/img/Primary-Logo_new.png"
              alt="Dr. Zrinka"
              className="h-10 w-10"
            />
            <div>
              <div className="font-serif text-lg font-semibold uppercase">Dr. Zrinka</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Academy</div>
            </div>
            {/* <img fetchpriority="high" width="80" height="80" src="https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new.png" class="custom-logo" alt="Dr.Zrinka Academy Logo" decoding="async" srcset="https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new.png 500w, https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new-300x215.png 300w, https://dr-zrinka.com/wp-content/uploads/2024/10/Primary-Logo_new-150x108.png 150w" sizes="(max-width: 500px) 100vw, 500px"></img> */}
            {/* <a href="https://dr-zrinka.com/impressum/" className="text-[#ffae9a] text-[14px]">Impressum</a> */}
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Dr. Zrinka Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
