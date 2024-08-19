import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky pt-3">
        <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
          <span>Menu</span>
        </h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/login" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              <i className="bi bi-info-circle"></i> About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              <i className="bi bi-envelope"></i> Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              <i className="bi bi-journal"></i> Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
