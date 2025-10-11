const insightsGrid = document.getElementById('insights-grid');
const toursTableBody = document.querySelector('#tours-table tbody');
const chatWidget = document.getElementById('chat-widget');
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u
 main
const weatherCard = document.getElementById('weather-card');
const weatherCityLabel = document.getElementById('weather-city');
const weatherTemp = document.getElementById('weather-temp');
const weatherWind = document.getElementById('weather-wind');
const weatherHumidity = document.getElementById('weather-humidity');
const weatherLight = document.getElementById('weather-light');
const weatherUpdated = document.getElementById('weather-updated');
const weatherTabs = document.querySelectorAll('[data-forecast-city]');
 codex/add-data-and-images-to-project-h2royc
const weatherSource = document.getElementById('weather-source');
const heroSection = document.querySelector('.hero');
const heroImageForm = document.getElementById('hero-image-form');
const heroImageInput = document.getElementById('hero-image-url');
const heroImageReset = document.getElementById('hero-image-reset');
const mapEmbedFrame = document.querySelector('.map-embed iframe');
const mapFallbackMessage = document.getElementById('map-fallback-message');

let activeWeatherCity = 'dubai';
const weatherCache = {};
const HERO_IMAGE_STORAGE_KEY = 'nbsth.heroImage';
let defaultHeroImage = '';

function getStoredHeroImage() {
    try {
        return window.localStorage.getItem(HERO_IMAGE_STORAGE_KEY);
    } catch (error) {
        return null;
    }
}

function storeHeroImage(url) {
    try {
        if (url) {
            window.localStorage.setItem(HERO_IMAGE_STORAGE_KEY, url);
        } else {
            window.localStorage.removeItem(HERO_IMAGE_STORAGE_KEY);
        }
    } catch (error) {
        // Storage might be unavailable (e.g., private mode). Silently ignore.
    }
}

function applyHeroImage(url, { persist = true } = {}) {
    if (!heroSection || !url) {
        return;
    }

    const safeUrl = JSON.stringify(url);
    heroSection.style.setProperty('--hero-image', `url(${safeUrl})`);
    heroSection.dataset.heroSource = 'custom';

    if (persist) {
        storeHeroImage(url);
    }
}

function resetHeroImage() {
    if (!heroSection || !defaultHeroImage) {
        return;
    }
    heroSection.style.setProperty('--hero-image', defaultHeroImage);
    heroSection.dataset.heroSource = 'default';
    storeHeroImage(null);
}

const photoTimeline = document.getElementById('photography-guide');
const essentialsList = document.getElementById('essentials-list');
const mapHighlightsList = document.getElementById('map-highlights');

let activeWeatherCity = 'dubai';
const weatherCache = {};

const photographyMoments = [
    {
        time: '05:35',
        title: 'Blue Hour Silhouettes',
        description: 'Position yourself at the northern colonnade of Sheikh Zayed Grand Mosque for mirror-still reflections.',
        etiquette: 'Tripods are welcome outside prayer times—keep shoulders covered and voices hushed.',
        tip: 'Ahmed’s Tip: Tilt your lens upward to frame the marble latticework against indigo skies.'
    },
    {
        time: '07:20',
        title: 'Golden Creek Glow',
        description: 'Capture abras ferrying commuters across Al Seef Creek as sunlight kisses the wind towers.',
        etiquette: 'Ask permission before photographing vendors; offer to share the final shot.',
        tip: 'Ahmed’s Tip: Switch to portrait mode at XVA Café courtyard to spotlight the arches and lanterns.'
    },
    {
        time: '18:40',
        title: 'Mandir Sunset Reliefs',
        description: 'Stand on the southeast terrace of the Hindu Temple Dubai to align carvings with the amber skyline.',
        etiquette: 'No flash inside sanctums—slow your shutter and brace against pillars instead.',
        tip: 'Ahmed’s Tip: Capture a wide shot, then focus on a single carving for a storytelling diptych.'
    },
    {
        time: '20:10',
        title: 'Starlit Dune Trails',
        description: 'Use a low tripod at Al Marmoom for long exposure shots tracing lantern paths to your majlis.',
        etiquette: 'Dim headlamps when guides brief the group—night vision is part of the magic.',
        tip: 'Ahmed’s Tip: Ask the astronomer to laser-point Orion, then paint it lightly into your frame.'
    }
];

const essentialsKit = [
    {
        icon: '🔋',
        title: 'Slim Power Bank',
        detail: '10,000 mAh charger with USB-C fast charge keeps cameras and phones alive between transfers.'
    },
    {
        icon: '🕶️',
        title: 'Polarised Sunglasses',
        detail: 'Cuts marble glare at the mosque and doubles as eye-saver during desert golden hour shoots.'
    },
    {
        icon: '🧕',
        title: 'Lightweight Scarf',
        detail: 'Respectful coverage for mosques and temples; doubles as a wrap when evening temps dip.'
    },
    {
        icon: '👟',
        title: 'Quiet-sole Footwear',
        detail: 'Soft, closed shoes that slip off easily—perfect for mosque marble and Mandir corridors.'
    },
    {
        icon: '💧',
        title: 'Refillable Water Bottle',
        detail: 'Insulated, 750ml capacity with filter to top up at hotel lounges and museum stations.'
    }
];

const mapHighlights = [
    {
        icon: '🕌',
        title: 'Sheikh Zayed Grand Mosque',
        detail: 'Dawn arrival, private guide, and robe fitting handled on-site.',
        tip: 'Ahmed’s Tip: Capture symmetry from the north gate before crowds arrive.'
    },
    {
        icon: '🛶',
        title: 'Al Seef Creek Abra Pier',
        detail: 'Vintage abra charter plus a restorative detour to Arabian Tea House.',
        tip: 'Ahmed’s Tip: Tap the skipper for a custom sunset loop around the spice souk.'
    },
    {
        icon: '☕',
        title: '% Arabica Qasr Al Hosn',
        detail: 'Single-origin coffee break with shaded seating and fast Wi-Fi.',
        tip: 'Ahmed’s Tip: Save the Wi-Fi password offline—it helps when you’re pushing new pins on the map.'
    },
    {
        icon: '🌅',
        title: 'Al Marmoom Desert Conservatory',
        detail: 'Sunset dune drive, astronomy session, and locally sourced dinner.',
        tip: 'Ahmed’s Tip: Download the stargazing overlay before you lose signal past the reserve gates.'
    }
];

const weatherCodes = {
    0: 'Clear skies',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Rime fog',
    51: 'Light drizzle',
    53: 'Drizzle',
    55: 'Dense drizzle',
    61: 'Light rain',
    63: 'Rain showers',
    65: 'Heavy rain',
    71: 'Snowfall',
    80: 'Rain showers',
    95: 'Thunderstorms'
};

async function fetchInsights() {
    if (!insightsGrid) return;
    try {
        const response = await fetch('/api/insights');
        const insights = await response.json();

        insightsGrid.innerHTML = insights
            .map(
                (insight) => `
                <article class="insight-card">
                    <span class="insight-stat">${insight.stat}</span>
                    <h3>${insight.title}</h3>
                    <p>${insight.description}</p>
                </article>
            `
            )
            .join('');
    } catch (error) {
        insightsGrid.innerHTML = '<p class="error">We\'ll load the data-backed hacks in a moment.</p>';
    }
}

async function fetchTours() {
    if (!toursTableBody) return;
    try {
        const response = await fetch('/api/tours');
        const tours = await response.json();


 codex/add-data-and-images-to-project-kepdua
const weatherTemp = document.getElementById('weather-temp');
const weatherWind = document.getElementById('weather-wind');
const weatherLight = document.getElementById('weather-light');
const weatherUpdated = document.getElementById('weather-updated');
const photoTimeline = document.getElementById('photography-guide');
const essentialsList = document.getElementById('essentials-list');
const mapHighlightsList = document.getElementById('map-highlights');

const photographyMoments = [
    {
        time: '05:35',
        title: 'Blue Hour Silhouettes',
        description: 'Position yourself at the northern colonnade of Sheikh Zayed Grand Mosque for mirror-still reflections.',
        etiquette: 'Tripods are welcome outside prayer times—keep shoulders covered and voices hushed.',
        tip: 'Ahmed’s Tip: Tilt your lens upward to frame the marble latticework against indigo skies.'
    },
    {
        time: '07:20',
        title: 'Golden Creek Glow',
        description: 'Capture abras ferrying commuters across Al Seef Creek as sunlight kisses the wind towers.',
        etiquette: 'Ask permission before photographing vendors; offer to share the final shot.',
        tip: 'Ahmed’s Tip: Switch to portrait mode at XVA Café courtyard to spotlight the arches and lanterns.'
    },
    {
        time: '18:40',
        title: 'Mandir Sunset Reliefs',
        description: 'Stand on the southeast terrace of the Hindu Temple Dubai to align carvings with the amber skyline.',
        etiquette: 'No flash inside sanctums—slow your shutter and brace against pillars instead.',
        tip: 'Ahmed’s Tip: Capture a wide shot, then focus on a single carving for a storytelling diptych.'
    },
    {
        time: '20:10',
        title: 'Starlit Dune Trails',
        description: 'Use a low tripod at Al Marmoom for long exposure shots tracing lantern paths to your majlis.',
        etiquette: 'Dim headlamps when guides brief the group—night vision is part of the magic.',
        tip: 'Ahmed’s Tip: Ask the astronomer to laser-point Orion, then paint it lightly into your frame.'
    }
];

const essentialsKit = [
    {
        icon: '🔋',
        title: 'Slim Power Bank',
        detail: '10,000 mAh charger with USB-C fast charge keeps cameras and phones alive between transfers.'
    },
    {
        icon: '🕶️',
        title: 'Polarised Sunglasses',
        detail: 'Cuts marble glare at the mosque and doubles as eye-saver during desert golden hour shoots.'
    },
    {
        icon: '🧕',
        title: 'Lightweight Scarf',
        detail: 'Respectful coverage for mosques and temples; doubles as a wrap when evening temps dip.'
    },
    {
        icon: '👟',
        title: 'Quiet-sole Footwear',
        detail: 'Soft, closed shoes that slip off easily—perfect for mosque marble and Mandir corridors.'
    },
    {
        icon: '💧',
        title: 'Refillable Water Bottle',
        detail: 'Insulated, 750ml capacity with filter to top up at hotel lounges and museum stations.'
    }
];

const mapHighlights = [
    {
        icon: '🕌',
        title: 'Sheikh Zayed Grand Mosque',
        detail: 'Dawn arrival, private guide, and robe fitting handled on-site.'
    },
    {
        icon: '🛶',
        title: 'Al Seef Creek Abra Pier',
        detail: 'Vintage abra charter plus a restorative detour to Arabian Tea House.'
    },
    {
        icon: '☕',
        title: '% Arabica Qasr Al Hosn',
        detail: 'Single-origin coffee break with shaded seating and fast Wi-Fi.'
    },
    {
        icon: '🌅',
        title: 'Al Marmoom Desert Conservatory',
        detail: 'Sunset dune drive, astronomy session, and locally sourced dinner.'
    }
];
 main

const weatherCodes = {
    0: 'Clear skies',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Rime fog',
    51: 'Light drizzle',
    53: 'Drizzle',
    55: 'Dense drizzle',
    61: 'Light rain',
    63: 'Rain showers',
    65: 'Heavy rain',
    71: 'Snowfall',
    80: 'Rain showers',
    95: 'Thunderstorms'
};

async function fetchInsights() {
    if (!insightsGrid) return;
    try {
        const response = await fetch('/api/insights');
        const insights = await response.json();

        insightsGrid.innerHTML = insights
            .map(
                (insight) => `
                <article class="insight-card">
                    <span class="insight-stat">${insight.stat}</span>
                    <h3>${insight.title}</h3>
                    <p>${insight.description}</p>
                </article>
            `
            )
            .join('');
    } catch (error) {
        insightsGrid.innerHTML = '<p class="error">We\'ll load the data-backed hacks in a moment.</p>';
    }
}

async function fetchTours() {
    if (!toursTableBody) return;
    try {
        const response = await fetch('/api/tours');
        const tours = await response.json();

 codex/add-data-and-images-to-project-h2royc

 main
 main
        toursTableBody.innerHTML = tours
            .map(
                (tour) => `
                <tr>
                    <td>
                        <strong>${tour.name}</strong>
                        <span class="tour-description">${tour.description}</span>
                    </td>
                    <td>${tour.duration}</td>
                    <td>${tour.best_time}</td>
                    <td>${tour.price}</td>
                </tr>
            `
            )
            .join('');
    } catch (error) {
        toursTableBody.innerHTML = '<tr><td colspan="4" class="error">Tour data is taking a break. Try again soon.</td></tr>';
    }
}

 codex/add-data-and-images-to-project-h2royc
function setWeatherError(message) {
    if (!weatherCard) return;
    weatherCard.dataset.state = 'error';
    weatherCard.dataset.source = 'error';

function renderPhotographyGuide() {
    if (!photoTimeline) return;
    photoTimeline.innerHTML = photographyMoments
        .map(
            (moment) => `
            <li class="photo-step">
                <time>${moment.time}</time>
                <h3>${moment.title}</h3>
                <p>${moment.description}</p>
                <p><strong>Etiquette:</strong> ${moment.etiquette}</p>
                <div class="ahmed-tip mini">${moment.tip}</div>
            </li>
        `
        )
        .join('');
}

function renderEssentials() {
    if (!essentialsList) return;
    essentialsList.innerHTML = essentialsKit
        .map(
            (item) => `
            <li class="essential-item">
                <span aria-hidden="true">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.detail}</p>
            </li>
        `
        )
        .join('');
}

function renderMapHighlights() {
    if (!mapHighlightsList) return;
    mapHighlightsList.innerHTML = mapHighlights
        .map(
            (point) => `
            <li>
                <span aria-hidden="true">${point.icon}</span>
                <div>
                    <strong>${point.title}</strong>
                    <p>${point.detail}</p>
 codex/add-data-and-images-to-project-vu2r5u
                    <p class="map-highlight-tip">${point.tip}</p>

 main
                </div>
            </li>
        `
        )
        .join('');
}

 codex/add-data-and-images-to-project-vu2r5u
function setWeatherError(message) {
    if (!weatherCard) return;
    weatherCard.dataset.state = 'error';
 main
    if (weatherTemp) weatherTemp.textContent = '—';
    if (weatherWind) weatherWind.textContent = '—';
    if (weatherHumidity) weatherHumidity.textContent = '—';
    if (weatherLight) weatherLight.textContent = 'Unable to reach forecast';
    if (weatherUpdated) weatherUpdated.textContent = message || 'Check your connection and try again.';
 codex/add-data-and-images-to-project-h2royc
    if (weatherSource) {
        weatherSource.textContent = 'Forecast paused—please retry in a moment.';
        weatherSource.dataset.variant = 'error';
    }

 main
}

function updateWeatherUI(cityKey, data) {
    if (!weatherCard) return;
    activeWeatherCity = cityKey;
    weatherCard.dataset.state = 'ready';
 codex/add-data-and-images-to-project-h2royc
    weatherCard.dataset.source = data.source || 'live';

 main

    weatherTabs.forEach((tab) => {
        const isActive = tab.dataset.forecastCity === cityKey;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
    });

    const roundedTemp = typeof data.temperature === 'number' ? Math.round(data.temperature) : null;
    const roundedWind = typeof data.windspeed === 'number' ? Math.round(data.windspeed) : null;
    const roundedHumidity = typeof data.humidity === 'number' ? Math.round(data.humidity) : null;

    if (weatherCityLabel) weatherCityLabel.textContent = data.city || cityKey;
    if (weatherTemp) weatherTemp.textContent = roundedTemp !== null ? `${roundedTemp}°C` : '—';
    if (weatherWind) weatherWind.textContent = roundedWind !== null ? `${roundedWind} km/h` : 'Calm';
    if (weatherHumidity) weatherHumidity.textContent = roundedHumidity !== null ? `${roundedHumidity}%` : '—';

    const summary = weatherCodes[data.weathercode] || 'Desert calm';
    const lightState = data.is_day ? 'Daylight glow' : 'Moonlit hush';
    if (weatherLight) weatherLight.textContent = `${summary} · ${lightState}`;
    if (weatherUpdated) {
        weatherUpdated.textContent = data.updated_at
            ? `Updated ${data.updated_at} GST`
            : 'Live satellite sync';
    }
 codex/add-data-and-images-to-project-h2royc
    if (weatherSource) {
        weatherSource.textContent = data.notice || '';
        weatherSource.dataset.variant = data.source || 'live';
    }

 main
}

async function fetchWeather(cityKey, { showLoader = true, suppressUpdate = false } = {}) {
    if (!weatherCard) return null;

    if (showLoader && !suppressUpdate) {
        weatherCard.dataset.state = 'loading';
        if (weatherTemp) weatherTemp.textContent = '—';
        if (weatherWind) weatherWind.textContent = 'Updating…';
        if (weatherHumidity) weatherHumidity.textContent = '—';
        if (weatherLight) weatherLight.textContent = 'Calibrating sensors…';
        if (weatherUpdated) weatherUpdated.textContent = 'Refreshing desert outlook…';
    }

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(cityKey)}`);
        const payload = await response.json();

        if (!response.ok || payload.error) {
            throw new Error(payload.error || 'Unable to fetch forecast.');
        }

        weatherCache[cityKey] = payload;
        if (!suppressUpdate) {
            updateWeatherUI(cityKey, payload);
        }
        return payload;
    } catch (error) {
        if (!suppressUpdate) {
            setWeatherError(error.message);
        }
        return null;
    }
}
 codex/add-data-and-images-to-project-h2royc

function handleWeatherTabClick(event) {
    const city = event.currentTarget.dataset.forecastCity;
    if (!city || city === activeWeatherCity) return;

    if (weatherCache[city]) {
        updateWeatherUI(city, weatherCache[city]);
    } else {
        fetchWeather(city);
    }
}

function appendMessage(content, sender = 'bot') {
    const message = document.createElement('div');
    message.classList.add('chat-message', sender);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleChatSubmit(event) {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;

    appendMessage(question, 'user');
    chatInput.value = '';



function handleWeatherTabClick(event) {
    const city = event.currentTarget.dataset.forecastCity;
    if (!city || city === activeWeatherCity) return;

    if (weatherCache[city]) {
        updateWeatherUI(city, weatherCache[city]);
    } else {
        fetchWeather(city);

async function fetchWeather() {
    if (!weatherTemp || !weatherWind || !weatherLight || !weatherUpdated) return;

    try {
        const response = await fetch('/api/weather');
        const data = await response.json();

        if (data.error) {
            weatherTemp.textContent = '—';
            weatherWind.textContent = 'Service pause';
            weatherLight.textContent = 'Check shortly';
            weatherUpdated.textContent = data.error;
            return;
        }

        const roundedTemp = typeof data.temperature === 'number' ? Math.round(data.temperature) : null;
        const roundedWind = typeof data.windspeed === 'number' ? Math.round(data.windspeed) : null;
        weatherTemp.textContent = roundedTemp !== null ? `${roundedTemp}°C` : '—';
        weatherWind.textContent = roundedWind !== null ? `${roundedWind} km/h` : 'Calm';

        const code = data.weathercode;
        const summary = weatherCodes[code] || 'Desert calm';
        const lightState = data.is_day ? 'Daylight glow' : 'Moonlit hush';
        weatherLight.textContent = `${summary} · ${lightState}`;
        weatherUpdated.textContent = data.updated_at
            ? `Updated ${data.updated_at} GST`
            : 'Live satellite sync';
    } catch (error) {
        weatherTemp.textContent = '—';
        weatherWind.textContent = '—';
        weatherLight.textContent = 'Unable to reach forecast';
        weatherUpdated.textContent = 'Reconnect to refresh the desert outlook.';
    }
}

function appendMessage(content, sender = 'bot') {
    const message = document.createElement('div');
    message.classList.add('chat-message', sender);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleChatSubmit(event) {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;

    appendMessage(question, 'user');
    chatInput.value = '';



async function fetchInsights() {
    if (!insightsGrid) return;
    try {
        const response = await fetch('/api/insights');
        const insights = await response.json();

        insightsGrid.innerHTML = insights
            .map(
                (insight) => `
                <article class="insight-card">
                    <span class="insight-stat">${insight.stat}</span>
                    <h3>${insight.title}</h3>
                    <p>${insight.description}</p>
                </article>
            `
            )
            .join('');
    } catch (error) {
        insightsGrid.innerHTML = '<p class="error">We\'ll load the data-backed hacks in a moment.</p>';
    }
}

async function fetchTours() {
    if (!toursTableBody) return;
    try {
        const response = await fetch('/api/tours');
        const tours = await response.json();

        toursTableBody.innerHTML = tours
            .map(
                (tour) => `
                <tr>
                    <td>
                        <strong>${tour.name}</strong>
                        <span class="tour-description">${tour.description}</span>
                    </td>
                    <td>${tour.duration}</td>
                    <td>${tour.best_time}</td>
                    <td>${tour.price}</td>
                </tr>
            `
            )
            .join('');
    } catch (error) {
        toursTableBody.innerHTML = '<tr><td colspan="4" class="error">Tour data is taking a break. Try again soon.</td></tr>';
 main
    }
}

function appendMessage(content, sender = 'bot') {
    const message = document.createElement('div');
    message.classList.add('chat-message', sender);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleChatSubmit(event) {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;

    appendMessage(question, 'user');
    chatInput.value = '';

 codex/add-data-and-images-to-project-vu2r5u

 main
 main
 main
    try {
        const response = await fetch('/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question }),
        });
        const data = await response.json();
        appendMessage(data.answer || 'I\'ll have more intel soon.', 'bot');
    } catch (error) {
        appendMessage('The connection dropped—give it another go in a few seconds.', 'bot');
    }
}
 codex/add-data-and-images-to-project-h2royc

function openChat() {
    chatWindow.classList.remove('hidden');
    chatWidget.classList.add('open');
    chatInput.focus();
}



function openChat() {
    chatWindow.classList.remove('hidden');
    chatWidget.classList.add('open');
    chatInput.focus();
}

 main
function closeChat() {
    chatWindow.classList.add('hidden');
    chatWidget.classList.remove('open');
}

if (chatToggle) {
    chatToggle.addEventListener('click', () => {
        if (chatWindow.classList.contains('hidden')) {
            openChat();
        } else {
            closeChat();
        }
    });
}

if (chatClose) {
    chatClose.addEventListener('click', closeChat);
}

if (chatForm) {
    chatForm.addEventListener('submit', handleChatSubmit);
}

 codex/add-data-and-images-to-project-h2royc
fetchInsights();
fetchTours();

if (heroSection) {
    heroSection.dataset.heroSource = 'default';
    defaultHeroImage = getComputedStyle(heroSection).getPropertyValue('--hero-image').trim();
    const storedHero = getStoredHeroImage();
    if (storedHero) {
        applyHeroImage(storedHero, { persist: false });
        if (heroImageInput) {
            heroImageInput.value = storedHero;
        }
    }
}

if (heroImageForm) {
    heroImageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newUrl = heroImageInput ? heroImageInput.value.trim() : '';
        if (!newUrl) return;
        applyHeroImage(newUrl);
    });
}

if (heroImageReset) {
    heroImageReset.addEventListener('click', (event) => {
        event.preventDefault();
        resetHeroImage();
        if (heroImageInput) {
            heroImageInput.value = '';
        }
    });
}

if (mapEmbedFrame && mapFallbackMessage) {
    let mapLoaded = false;
    const showFallback = () => {
        if (!mapLoaded) {
            mapFallbackMessage.hidden = false;
            mapFallbackMessage.classList.add('visible');
        }
    };

    mapEmbedFrame.addEventListener('load', () => {
        mapLoaded = true;
        mapFallbackMessage.hidden = true;
        mapFallbackMessage.classList.remove('visible');
    });

    mapEmbedFrame.addEventListener('error', showFallback);

    window.setTimeout(showFallback, 4500);
}


 codex/add-data-and-images-to-project-vu2r5u

 codex/add-data-and-images-to-project-kepdua
 main
renderPhotographyGuide();
renderEssentials();
renderMapHighlights();
fetchInsights();
fetchTours();

 codex/add-data-and-images-to-project-vu2r5u
 main
if (weatherCard) {
    weatherTabs.forEach((tab) => {
        tab.addEventListener('click', handleWeatherTabClick);
    });

    fetchWeather(activeWeatherCity).then(() => {
        weatherTabs.forEach((tab) => {
            const city = tab.dataset.forecastCity;
            if (city && city !== activeWeatherCity) {
                fetchWeather(city, { showLoader: false, suppressUpdate: true });
            }
        });
    });

    setInterval(() => {
        fetchWeather(activeWeatherCity, { showLoader: false });
    }, 15 * 60 * 1000);
}
 codex/add-data-and-images-to-project-h2royc


if (weatherTemp) {
    fetchWeather();
    setInterval(fetchWeather, 30 * 60 * 1000);
}

fetchInsights();
fetchTours();
 main
 main
 main
