import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light text-dark">
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">CodeVault</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow-1 container py-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-primary text-white text-center py-3 mt-auto">
                <div className="container">
                    <small>&copy; {new Date().getFullYear()} CodeVault. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
