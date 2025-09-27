const API_URL = "http://localhost:8080/api/items";

// Lost Item Form
const lostForm = document.getElementById("lostForm");
if (lostForm) {
    lostForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const item = {
            name: document.getElementById("name").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value,
            status: "lost"
        };
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
        document.getElementById("message").innerText = "Lost item submitted!";
        lostForm.reset();
    });
}

// Found Item Form
const foundForm = document.getElementById("foundForm");
if (foundForm) {
    foundForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const item = {
            name: document.getElementById("name").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value,
            status: "found"
        };
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
        document.getElementById("message").innerText = "Found item submitted!";
        foundForm.reset();
    });
}

// Search Items
const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
    searchBtn.addEventListener("click", async () => {
        const keyword = document.getElementById("searchInput").value;
        const res = await fetch(`${API_URL}/search?keyword=${keyword}`);
        const items = await res.json();
        const list = document.getElementById("resultList");
        list.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.location} (${item.status})`;
            list.appendChild(li);
        });
    });
}
