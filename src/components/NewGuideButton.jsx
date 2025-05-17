import React from 'react';

function NewGuideButton({ onInsert }) {
    const handleAddGuide = () => {
        const newGuide = {
            title: "Untitled Guide",
            code_snippet: "// Your code here",
            description: "No description yet",
            platform: "Windows" // Or any default value
        };

        fetch('http://localhost/CodeVault/php-api/insert_guide.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGuide),
        })
        .then(res => res.json())
        .then(data => {
            console.log("Guide added:", data);
            if (onInsert) onInsert(); // callback to refresh the list
        })
        .catch(err => {
            console.error("Failed to insert guide:", err);
            alert("Failed to insert guide.");
        });
    };

    return (
        <button className="btn btn-success" onClick={handleAddGuide}>
            Add New Guide
        </button>
    );
}

export default NewGuideButton;
