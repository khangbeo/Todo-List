export default function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All Rights Reserved.</p>
      </div>
    </footer>
  );
}
