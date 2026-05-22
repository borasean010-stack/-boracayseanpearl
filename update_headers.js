const fs = require('fs');

const newHeader = `    <!-- Navbar -->
    <header id="header" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-transparent py-6">
        <div class="w-full px-8 flex justify-between items-center">
            <a href="index.html" class="z-50 flex items-center gap-3 group">
                <img loading="lazy" src="Pearl Of Sean logo.png" alt="Pearl Of Sean" class="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
                <span id="logo-text" class="text-xl md:text-2xl font-heading font-bold text-white transition-colors duration-300">Pearl Of Sean</span>
            </a>

            <!-- Desktop Nav (Right Side) -->
            <nav class="hidden md:flex items-center gap-8">
                <ul class="flex gap-8">
                    <li><a href="index.html" class="nav-link text-sm font-medium uppercase tracking-wider text-white hover:text-primary transition-colors">Home</a></li>
                    <li><a href="index.html#tours" class="nav-link text-sm font-medium uppercase tracking-wider text-white hover:text-primary transition-colors">Tours</a></li>
                </ul>
            </nav>
        </div>
    </header>`;

const files = ['index.html', 'land-tour.html', 'yacht-tour.html', 'package-tour.html', 'booking.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /<!-- Navbar -->[\s\S]*?<\/header>/;
    if (regex.test(content)) {
        content = content.replace(regex, newHeader);
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});