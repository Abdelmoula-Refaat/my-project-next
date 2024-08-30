import Link from 'next/link';

export default function HomeRedirect() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="text-primary mb-4">Redirecting to Home...</h1>
      <div className="spinner-border text-primary mb-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mb-4">If you are not redirected automatically, click the button below:</p>
      <Link href="/with-sidebar/home" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
}
