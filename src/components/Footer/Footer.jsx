const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-black p-10">
      <aside className="w-3/4 border-b">
        <p className="font-bold text-xl">Gadget Heaven</p>
        <p className="pb-5 text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </aside>
      <div className="footer bg-base-100 w-3/4 p-10 pt-0">
        <nav>
          <h6 className="footer-title ">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">COde of Conduct</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
