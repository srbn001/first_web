// nav.js - JavaScript navbar component
document.addEventListener("DOMContentLoaded", function() {
    // Create navbar element
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    
    // Create navbar content
    navbar.innerHTML = `
        <div class="nav-logo">
            <img src="logo.png" alt="Logo" class="nav-logo-img">
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">Monasteries ▼</a>
                <ul class="dropdown-menu" id="monasteryDropdown"></ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">Know Sikkim ▼</a>
                <ul class="dropdown-menu" id="sikkimDropdown">
                    <li><a href="buddhism_history.html">History</a></li>
                    <li><a href="map.html">Map</a></li>
                    <li><a href="reach.html">How to Reach</a></li>
                    <li><a href="adventure.html">Activities</a></li>
                    <li><a href="adventure.html#top-tourist-destinations">Popular Places</a></li>
                    <li><a href="culture.html">Culture</a></li>
                    <li><a href="climate.html">Weather</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">About Us ▼</a>
                <ul class="dropdown-menu" id="aboutDropdown">
                    <li><a href="about.html">About us info</a></li>
                </ul>
            </li>
        </ul>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .navbar {
            width: 100%;
            background: #fff;
            box-shadow: 0 2px 8px #eee;
            display: flex;
            align-items: center;
            padding: 0 32px;
            position: sticky;
            top: 0;
            z-index: 1000;
            justify-content: space-between;
        }
        .nav-logo { 
            display: flex;
            cursor: pointer;
        }
        .nav-logo-img { 
            height: 38px; 
            padding: 10px 0; 
        }
        .nav-links { 
            list-style: none; 
            display: flex; 
            align-items: center; 
            margin: 0; 
            padding: 0; 
        }
        .nav-links > li { 
            margin: 0 16px; 
            position: relative; 
        }
        .nav-links a { 
            text-decoration: none; 
            color: #254e58; 
            font-size: 1.08rem; 
            font-weight: 500; 
            padding: 18px 8px; 
            transition: color 0.2s; 
            display: block;
        }
        .nav-links a:hover { 
            color: #117a8b; 
        }
        .dropdown-menu {
            position: absolute; 
            left: 0; 
            top: 56px;
            background: #fff; 
            min-width: 180px;
            box-shadow: 0 2px 8px #eee;
            border-radius: 8px; 
            display: none;
            z-index: 1000;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        .dropdown-menu.show { 
            display: block; 
        }
        .dropdown-menu li a {
            display: block; 
            padding: 12px 20px;
            color: #254e58; 
            font-size: 1rem; 
            border-bottom: 1px solid #f1f1f1;
        }
        .dropdown-menu li a:hover { 
            background: #f2f5f7; 
            color: #117a8b; 
        }
        @media (max-width: 700px) {
            .navbar { 
                flex-direction: column; 
                padding: 10px;
            }
            .nav-links { 
                flex-direction: column; 
                width: 100%;
            }
            .nav-links > li { 
                margin: 8px 0; 
                width: 100%;
            }
            .dropdown-menu {
                width: 100%;
                position: relative;
                top: 0;
            }
        }
    `;
    
    // Append style to navbar
    navbar.appendChild(style);
    
    // Insert navbar at the beginning of the body
    document.body.insertBefore(navbar, document.body.firstChild);
    
    // Monastery list for dropdown (aligned with script.js)
    const monasteries = [
        { name: "Rumtek Monastery" },
        { name: "Pemayangtse Monastery" },
        { name: "Tashiding Monastery" },
        { name: "Enchey Monastery" },
        { name: "Phodong Monastery" },
        { name: "Ralang Monastery" },
        { name: "Dubdi Monastery" },
        { name: "Lachen Monastery" },
        { name: "Kartok Monastery" },
        { name: "Sanga Choeling Monastery" },
        { name: "Zong Dog Palri Monastery" }
    ];
    
    // Function to populate monastery dropdown
    function populateMonasteryDropdown() {
        const menu = document.getElementById("monasteryDropdown");
        if (!menu) return;
        
        menu.innerHTML = "";
        monasteries.forEach((monastery, idx) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = monastery.name;
            a.onclick = function(e) {
                e.preventDefault();
                showMonasteryDetail(idx);
            };
            li.appendChild(a);
            menu.appendChild(li);
        });
    }
    
    // Function to show monastery detail (compatible with script.js)
    function showMonasteryDetail(idx) {
        // Check if we're on the index.html page
        if (window.location.pathname.endsWith("index.html") || 
            window.location.pathname.endsWith("/")) {
            // If we're already on index.html, use the existing function
            if (typeof window.showMonasteryDetail === 'function') {
                window.showMonasteryDetail(idx);
            }
        } else {
            // If we're on another page, navigate to index.html with a hash parameter
            window.location.href = `index.html#monastery-${idx}`;
        }
    }
    
    // Function to toggle dropdowns
    function toggleDropdown(id) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu.id !== id) menu.classList.remove('show');
        });
        const menu = document.getElementById(id);
        if (menu) menu.classList.toggle('show');
    }
    
    // Add event listeners to dropdown toggles
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            const dropdownId = this.nextElementSibling.id;
            toggleDropdown(dropdownId);
            e.preventDefault();
        });
    });
    
    // Hide open dropdowns if clicked outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
    
    // Add click event to logo to navigate to index.html
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Initialize monastery dropdown
    populateMonasteryDropdown();
    
    // Check for hash parameter on page load (for direct navigation to monasteries)
    if (window.location.hash && window.location.hash.startsWith('#monastery-')) {
        const idx = parseInt(window.location.hash.split('-')[1]);
        if (!isNaN(idx) && idx >= 0 && idx < monasteries.length) {
            // Wait for page to load completely before showing details
            window.addEventListener('load', function() {
                if (typeof window.showMonasteryDetail === 'function') {
                    window.showMonasteryDetail(idx);
                }
            });
        }
    }
});