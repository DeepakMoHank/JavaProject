const API_URL = "http://localhost:8080/api/items";

function showMessage(elementId, message, isError = false) {
    const msgElement = document.getElementById(elementId);
    msgElement.innerText = message;
    msgElement.style.color = isError ? '#dc3545' : '#28a745';
    msgElement.style.background = isError ? '#f8d7da' : '#d4edda';
    msgElement.style.padding = '12px';
    msgElement.style.borderRadius = '5px';
    msgElement.style.marginTop = '15px';
}


const lostForm = document.getElementById("lostForm");
if (lostForm) {
    lostForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        try {
            const item = {
                name: document.getElementById("name").value,
                location: document.getElementById("location").value,
                description: document.getElementById("description").value,
                status: "lost"
            };
            
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit item');
            }
            
            showMessage("message", "✓ Lost item submitted successfully!");
            lostForm.reset();
            
        } catch (error) {
            console.error('Error:', error);
            showMessage("message", "✗ Error submitting item. Please check if the server is running.", true);
        }
    });
}

// Found Item Form
const foundForm = document.getElementById("foundForm");
if (foundForm) {
    foundForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        try {
            const item = {
                name: document.getElementById("name").value,
                location: document.getElementById("location").value,
                description: document.getElementById("description").value,
                status: "found"
            };
            
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit item');
            }
            
            showMessage("message", "✓ Found item submitted successfully!");
            foundForm.reset();
            
        } catch (error) {
            console.error('Error:', error);
            showMessage("message", "✗ Error submitting item. Please check if the server is running.", true);
        }
    });
}

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {

    searchBtn.addEventListener("click", performSearch);

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    async function performSearch() {
        try {
            const keyword = searchInput.value.trim();
            
            if (!keyword) {
                alert('Please enter a search keyword');
                return;
            }
            
            const res = await fetch(`${API_URL}/search?keyword=${encodeURIComponent(keyword)}`);
            
            if (!res.ok) {
                throw new Error('Search failed');
            }
            
            const items = await res.json();
            const list = document.getElementById("resultList");
            list.innerHTML = "";
            
            if (items.length === 0) {
                list.innerHTML = '<li style="border-left-color: #ffc107;">No items found matching your search.</li>';
                return;
            }
            
            items.forEach(item => {
                const li = document.createElement("li");
                const statusColor = item.status === 'lost' ? '#dc3545' : '#28a745';
                li.innerHTML = `
                    <strong>${item.name}</strong><br>
                    <span style="color: #666;">📍 ${item.location}</span><br>
                    <span style="color: ${statusColor}; font-weight: 600;">Status: ${item.status.toUpperCase()}</span>
                    ${item.description ? `<br><span style="color: #666;">Description: ${item.description}</span>` : ''}
                `;
                list.appendChild(li);
            });
            
        } catch (error) {
            console.error('Error:', error);
            const list = document.getElementById("resultList");
            list.innerHTML = '<li style="border-left-color: #dc3545; color: #dc3545;">Error performing search. Please check if the server is running.</li>';
        }
    }
}