import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import NewGuideButton from "../components/NewGuideButton"

function renderCodeBlock(code) {
    return code.split('\n').map((line, index) => (
        <div key={index} className="d-flex align-items-center justify-content-between bg-light p-2 rounded mb-1">
            <code className="text-dark mb-0">{line}</code>
            <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => navigator.clipboard.writeText(line)}
                title="Copy line"
            >
                📋
            </button>
        </div>
    ));
}

function LandPage() {
    const [guides, setGuides] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`http://localhost/CodeVault/php-api/get_guides.php`)
            .then(res => res.json())
            .then(data => setGuides(data))
            .catch(err => console.error("Failed to load guides:", err));
    }, []);

    const filteredGuides = guides.filter(guide =>
        guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="text-center mb-1">🚀 Project Setup Guide</h1>
                        <p className="text-center text-muted">Your personal cheatsheet for setting up projects like React, Django, and more.</p>
                    </div>
                    <div className="d-flex gap-2">
                        <input
                            type="text"
                            placeholder="Search guides..."
                            className="form-control"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <NewGuideButton onInsert={() => {
                            // Refresh the guides after insertion
                            fetch(`http://localhost/CodeVault/php-api/get_guides.php`)
                                .then(res => res.json())
                                .then(data => setGuides(data));
                        }} />

                    </div>
                </div>

                {filteredGuides.map((guide) => (
                    <div key={guide.id} className="card mb-4">
                        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                            {guide.title}
                            <div>
                                {/* <button className="btn btn-sm btn-outline-light me-2">📄 Read</button>
                                <button className="btn btn-sm btn-outline-light me-2">📝 Edit</button>
                                <button className="btn btn-sm btn-danger">🗑 Delete</button> */}
                            </div>
                        </div>
                        <div className="card-body">
                            {guide.platform === 'Windows' && (
                                <div className="alert alert-info mb-3">
                                    ⚠️ This setup guide is only for <strong>Windows</strong>.
                                </div>
                            )}
                            {renderCodeBlock(guide.code_snippet)}
                            <p className="mt-3 mb-0 text-muted">{guide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default LandPage;
