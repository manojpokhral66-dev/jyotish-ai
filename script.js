// --- ADMIN CONTENT STRUCTURE (Easily Editable) --- //

// 1. Daily Rashiphal Data
const rashiData = [
    { id: "mesh", name: "Mesh (Aries)", planet: "Mars", color: "Red", number: 9, prediction: "High energy day. Focus on pending tasks and avoid arguments.", advice: "Chant Hanuman Chalisa." },
    { id: "vrishabh", name: "Vrishabh (Taurus)", planet: "Venus", color: "White", number: 6, prediction: "Financial gains are indicated. Spend quality time with family.", advice: "Offer white flowers to Goddess Lakshmi." },
    { id: "mithun", name: "Mithun (Gemini)", planet: "Mercury", color: "Green", number: 5, prediction: "Communication is your strength today. Great day for networking.", advice: "Feed green grass to cows." },
    { id: "kark", name: "Kark (Cancer)", planet: "Moon", color: "Silver", number: 2, prediction: "Emotions may run high. Practice meditation to stay grounded.", advice: "Offer milk to a Shivling." },
    { id: "singh", name: "Singh (Leo)", planet: "Sun", color: "Gold", number: 1, prediction: "Leadership opportunities will arise. Step up with confidence.", advice: "Offer water to the Sun God in the morning." },
    { id: "kanya", name: "Kanya (Virgo)", planet: "Mercury", color: "Green", number: 5, prediction: "Attention to detail brings success at work today.", advice: "Donate educational materials to children." },
    { id: "tula", name: "Tula (Libra)", planet: "Venus", color: "Pink", number: 6, prediction: "Balance in relationships is key today. Avoid making hasty decisions.", advice: "Use a mild perfume today." },
    { id: "vrischik", name: "Vrischik (Scorpio)", planet: "Mars", color: "Dark Red", number: 9, prediction: "Intuition is strong. Trust your gut feelings in financial matters.", advice: "Light a ghee lamp in the evening." },
    { id: "dhanu", name: "Dhanu (Sagittarius)", planet: "Jupiter", color: "Yellow", number: 3, prediction: "Favorable day for learning and spiritual pursuits.", advice: "Apply a turmeric or saffron tilak." },
    { id: "makar", name: "Makar (Capricorn)", planet: "Saturn", color: "Black/Blue", number: 8, prediction: "Hard work pays off. Keep pushing towards your long-term goals.", advice: "Help an elderly person." },
    { id: "kumbh", name: "Kumbh (Aquarius)", planet: "Saturn", color: "Navy Blue", number: 8, prediction: "Social connections bring new ideas. Stay open-minded.", advice: "Donate to a charitable cause." },
    { id: "meen", name: "Meen (Pisces)", planet: "Jupiter", color: "Yellow", number: 3, prediction: "Creative energy is high. Engage in artistic or imaginative work.", advice: "Spend time near water or in meditation." }
];

// 2. Astrology Forecast Updates
const updatesData = [
    { date: "March 15, 2026", title: "Jupiter Transits to Gemini", content: "Expect increased focus on communication and learning globally." },
    { date: "April 4, 2026", title: "Lunar Eclipse Alert", content: "A time for emotional release. Avoid starting new ventures on this day." },
    { date: "April 20, 2026", title: "Mercury Retrograde Begins", content: "Back up your data and double-check all communications." }
];

// 3. Blog Posts
const blogData = [
    { title: "Understanding Rahu Mahadasha", author: "Astrologer Ved", date: "March 1, 2026", excerpt: "Rahu represents illusions and material desires. Learn how to navigate its 18-year cycle..." },
    { title: "The 27 Nakshatras Explained", author: "Astro Scholar", date: "Feb 28, 2026", excerpt: "Beyond the 12 signs, the 27 lunar mansions provide deeper psychological insights..." },
    { title: "Simple Remedies for Saturn", author: "Astrologer Ved", date: "Feb 20, 2026", excerpt: "Saturn is a strict teacher, but performing these simple acts of karma can ease its transit..." }
];

// 4. Learning Section Data
const learnData = [
    { title: "Graha (Planets)", desc: "The 9 heavenly bodies (Navagraha) that influence human life, including the Sun, Moon, and shadow nodes Rahu/Ketu." },
    { title: "Rashi (Zodiac)", desc: "The 12 constellations the sun passes through. Your Rashi determines your core personality and traits." },
    { title: "Nakshatra", desc: "The 27 lunar mansions. The Nakshatra occupied by the Moon at birth determines your Dasha sequence." },
    { title: "Dasha System", desc: "The planetary periods that dictate when specific life events promised in the birth chart will manifest." }
];

// 5. Chatbot Knowledge Base
const chatKnowledge = {
    "saturn": "Saturn (Shani) represents karma, discipline, and hard work. Its transit brings lessons in patience.",
    "rahu": "Rahu is the North Node of the Moon. A Rahu Mahadasha brings sudden changes, worldly desires, and unconventional paths.",
    "aries": "Mesh (Aries) today indicates high energy. Focus on your tasks and avoid conflicts. Mars is your ruling planet.",
    "mesh": "Mesh (Aries) today indicates high energy. Focus on your tasks and avoid conflicts.",
    "dasha": "The Dasha system is a predictive tool based on the Moon's placement at birth. It shows which planet's energy is currently dominating your life.",
    "eclipse": "Eclipses (Grahans) are seen as times of transformation. It is generally advised to meditate and avoid starting new material projects.",
    "hi": "Namaste! I am your Jyotish assistant. Ask me about planets, rashis, or today's horoscope.",
    "hello": "Namaste! How can I help you with Vedic astrology today?",
    "default": "I am a basic Vedic Astrology assistant. I can answer simple questions about planets (e.g., Saturn, Rahu), rashis (e.g., Aries), or general terms (Dasha, Eclipse)."
};


// --- INITIALIZATION & RENDERING --- //

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-date").innerText = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    renderRashis();
    renderDashboard();
    renderUpdates();
    renderBlogs();
    renderLearn();
});

function renderRashis() {
    const container = document.getElementById("rashi-grid");
    rashiData.forEach(rashi => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${rashi.name}</h3>
            <p>Ruler: ${rashi.planet}</p>
        `;
        card.onclick = () => openModal(rashi);
        container.appendChild(card);
    });
}

function renderDashboard() {
    const container = document.getElementById("dashboard-list");
    rashiData.forEach(rashi => {
        const item = document.createElement("div");
        item.className = "dashboard-item";
        item.innerHTML = `
            <h3>${rashi.name}</h3>
            <p><strong>Prediction:</strong> ${rashi.prediction}</p>
            <p><em>Lucky Number: ${rashi.number} | Lucky Color: ${rashi.color}</em></p>
            <p><strong>Advice:</strong> ${rashi.advice}</p>
        `;
        container.appendChild(item);
    });
}

function renderUpdates() {
    const container = document.getElementById("updates-feed");
    updatesData.forEach(update => {
        const div = document.createElement("div");
        div.className = "update-item";
        div.innerHTML = `
            <div class="update-date">${update.date}</div>
            <h3>${update.title}</h3>
            <p>${update.content}</p>
        `;
        container.appendChild(div);
    });
}

function renderBlogs() {
    const container = document.getElementById("blog-grid");
    blogData.forEach(blog => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${blog.title}</h3>
            <p style="font-size:0.8rem; color:gray;">By ${blog.author} | ${blog.date}</p>
            <p style="margin-top:10px;">${blog.excerpt}</p>
        `;
        container.appendChild(card);
    });
}

function renderLearn() {
    const container = document.getElementById("learn-grid");
    learnData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

// --- MODAL LOGIC --- //
function openModal(rashi) {
    document.getElementById("modal-title").innerText = rashi.name;
    document.getElementById("modal-planet").innerText = rashi.planet;
    document.getElementById("modal-color").innerText = rashi.color;
    document.getElementById("modal-number").innerText = rashi.number;
    document.getElementById("modal-prediction").innerText = rashi.prediction;
    document.getElementById("modal-advice").innerText = rashi.advice;
    document.getElementById("rashi-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("rashi-modal").classList.add("hidden");
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("rashi-modal");
    if (event.target == modal) {
        closeModal();
    }
}


// --- CHATBOT LOGIC --- //
function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.classList.toggle("hidden");
}

function handleChatEnter(event) {
    if (event.key === "Enter") sendMessage();
}

function sendMessage() {
    const inputField = document.getElementById("chat-input");
    const userText = inputField.value.trim().toLowerCase();
    if (!userText) return;

    appendMessage(inputField.value, "user");
    inputField.value = "";

    // Simple delay for realistic feel
    setTimeout(() => {
        let botResponse = chatKnowledge["default"];
        
        // Check for keywords in user input
        for (const keyword in chatKnowledge) {
            if (userText.includes(keyword) && keyword !== "default") {
                botResponse = chatKnowledge[keyword];
                break;
            }
        }
        appendMessage(botResponse, "bot");
    }, 600);
}

function appendMessage(text, sender) {
    const chatOutput = document.getElementById("chat-output");
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;
    msgDiv.innerText = text;
    chatOutput.appendChild(msgDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
