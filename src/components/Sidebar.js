import Link from 'next/link';
import { FaSignInAlt, FaInfoCircle, FaEnvelope, FaBlog ,FaPlus } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar shadow-sm">
      <div className="position-sticky pt-3">
        <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-3 text-muted">
          <span>Menu</span>
        </h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/with-sidebar/login" className="nav-link">
              <FaSignInAlt className="me-2" /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/with-sidebar/about" className="nav-link">
              <FaInfoCircle className="me-2" /> About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/without-sidebar/contact" className="nav-link">
              <FaEnvelope className="me-2" /> Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/with-sidebar/blog" className="nav-link">
              <FaBlog className="me-2" /> Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/with-sidebar/addPost" className="nav-link">
              <FaPlus className="me-2" /> Add Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

