import { FALLBACK_CONTENT, PLACEHOLDER_PATTERN } from './fallback-content.js';

(() => {
    if (window.__nbsthAppInitialized) {
        return;
    }
    window.__nbsthAppInitialized = true;

    const insightsGrid = document.getElementById('insights-grid');
    const toursTableBody = document.querySelector('#tours-table tbody');
    const chatWidget = document.getElementById('chat-widget');
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const weatherCard = document.getElementById('weather-card');
    const weatherCityLabel = document.getElementById('weather-city');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherWind = document.getElementById('weather-wind');
    const weatherHumidity = document.getElementById('weather-humidity');
    const weatherLight = document.getElementById('weather-light');
    const weatherUpdated = document.getElementById('weather-updated');
    const weatherTabs = document.querySelectorAll('[data-forecast-city]');
    const weatherSource = document.getElementById('weather-source');
    const heroSection = document.querySelector('.hero');
    const heroImageForm = document.getElementById('hero-image-form');
    const heroImageInput = document.getElementById('hero-image-url');
    const heroImageReset = document.getElementById('hero-image-reset');
    const mapEmbedFrame = document.querySelector('.map-embed iframe');
    const mapFallbackMessage = document.getElementById('map-fallback-message');
    const mapDirectionsLink = document.getElementById('map-directions-link');
    const signatureTagline = document.querySelector('.signature-banner span');
    const heroEyebrow = document.querySelector('.hero-intro .eyebrow');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroHighlightsList = document.querySelector('.hero-highlights');
    const heroTip = document.querySelector('.hero-tip');
    const experiencesGrid = document.querySelector('.hacks-grid');
    const knowGrid = document.querySelector('.know-grid');
    const photoTimeline = document.querySelector('.photo-timeline');
    const essentialsList = document.querySelector('.essentials-list');
    const galleryGrid = document.querySelector('.gallery-grid');
    const mapDescription = document.querySelector('.map-card p');
    const mapHighlightsList = document.getElementById('map-highlights');
    const mapNote = document.querySelector('.map-note');
    const journalFeaturesList = document.querySelector('.journal-features');

    const FALLBACKS = {
        heroImage: FALLBACK_CONTENT.hero.imageUrl,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=1QoSxEo6KQ0i_VreFHhD9n1tFoZT3zhVq&ehbc=2E312F',
        mapDirections:
            'https://www.google.com/maps/dir/?api=1&origin=Burj+Khalifa&destination=Qasr+Al+Watan&waypoints=Al+Seef%7CSheikh+Zayed+Grand+Mosque%7CArabica+Coffee+Abu+Dhabi',
    };

    let activeWeatherCity = 'dubai';
    const weatherCache = {};
    const HERO_IMAGE_STORAGE_KEY = 'nbsth.heroImage';
    let defaultHeroImage = '';

    function hasPlaceholderContent(element) {
        if (!element) return false;
        const text = element.textContent || '';
        const html = element.innerHTML || '';
        return !text.trim() || PLACEHOLDER_PATTERN.test(text) || PLACEHOLDER_PATTERN.test(html);
    }

    function needsListFallback(element) {
        if (!element) return false;
        if (element.children.length > 0 && !PLACEHOLDER_PATTERN.test(element.innerHTML)) {
            return false;
        }
        return true;
    }

    function populateFallbackContent() {
        if (signatureTagline && hasPlaceholderContent(signatureTagline)) {
            signatureTagline.textContent = FALLBACK_CONTENT.signatureTagline;
        }

        if (heroEyebrow && hasPlaceholderContent(heroEyebrow)) {
            heroEyebrow.textContent = FALLBACK_CONTENT.hero.eyebrow;
        }

        if (heroTitle && hasPlaceholderContent(heroTitle)) {
            heroTitle.textContent = FALLBACK_CONTENT.hero.title;
        }

        if (heroSubtitle && hasPlaceholderContent(heroSubtitle)) {
            heroSubtitle.textContent = FALLBACK_CONTENT.hero.subtitle;
        }

        if (heroTip && hasPlaceholderContent(heroTip)) {
            heroTip.textContent = FALLBACK_CONTENT.hero.tip;
        }

        if (heroHighlightsList && needsListFallback(heroHighlightsList)) {
            heroHighlightsList.innerHTML = '';
            FALLBACK_CONTENT.hero.highlights.forEach((highlight) => {
                const li = document.createElement('li');
                li.textContent = highlight;
                heroHighlightsList.appendChild(li);
            });
        }

        if (experiencesGrid && needsListFallback(experiencesGrid)) {
            experiencesGrid.innerHTML = '';
            FALLBACK_CONTENT.experienceHighlights.forEach((experience) => {
                const article = document.createElement('article');
                article.className = 'hack-card';

                const title = document.createElement('h3');
                title.textContent = experience.title;
                article.appendChild(title);

                const detail = document.createElement('p');
                detail.textContent = experience.detail;
                article.appendChild(detail);

                if (experience.ahmed_tip) {
                    const tip = document.createElement('div');
                    tip.className = 'ahmed-tip';
                    tip.textContent = experience.ahmed_tip;
                    article.appendChild(tip);
                }

                experiencesGrid.appendChild(article);
            });
        }

        if (knowGrid && needsListFallback(knowGrid)) {
            knowGrid.innerHTML = '';
            FALLBACK_CONTENT.knowBefore.forEach((item) => {
                const article = document.createElement('article');
                article.className = 'know-card';

                const title = document.createElement('h3');
                title.textContent = item.title;
                article.appendChild(title);

                const description = document.createElement('p');
                description.textContent = item.description;
                article.appendChild(description);

                const list = document.createElement('ul');
                item.reminders.forEach((reminder) => {
                    const li = document.createElement('li');
                    li.textContent = reminder;
                    list.appendChild(li);
                });
                article.appendChild(list);

                const tip = document.createElement('div');
                tip.className = 'ahmed-tip';
                tip.textContent = item.ahmed_tip;
                article.appendChild(tip);

                knowGrid.appendChild(article);
            });
        }

        if (photoTimeline && needsListFallback(photoTimeline)) {
            photoTimeline.innerHTML = '';
            FALLBACK_CONTENT.photographyMoments.forEach((moment) => {
                const li = document.createElement('li');
                li.className = 'photo-step';

                const time = document.createElement('time');
                time.textContent = moment.time;
                li.appendChild(time);

                const title = document.createElement('h3');
                title.textContent = moment.title;
                li.appendChild(title);

                const description = document.createElement('p');
                description.textContent = moment.description;
                li.appendChild(description);

                const etiquette = document.createElement('p');
                etiquette.innerHTML = `<strong>Etiquette:</strong> ${moment.etiquette}`;
                li.appendChild(etiquette);

                const tip = document.createElement('div');
                tip.className = 'ahmed-tip mini';
                tip.textContent = moment.tip;
                li.appendChild(tip);

                photoTimeline.appendChild(li);
            });
        }

        if (essentialsList && needsListFallback(essentialsList)) {
            essentialsList.innerHTML = '';
            FALLBACK_CONTENT.essentials.forEach((item) => {
                const li = document.createElement('li');
                li.className = 'essential-item';

                const icon = document.createElement('span');
                icon.setAttribute('aria-hidden', 'true');
                icon.textContent = item.icon;
                li.appendChild(icon);

                const title = document.createElement('h3');
                title.textContent = item.title;
                li.appendChild(title);

                const detail = document.createElement('p');
                detail.textContent = item.detail;
                li.appendChild(detail);

                essentialsList.appendChild(li);
            });
        }

        if (galleryGrid && needsListFallback(galleryGrid)) {
            galleryGrid.innerHTML = '';
            FALLBACK_CONTENT.gallery.forEach((item) => {
                const figure = document.createElement('figure');

                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.alt;
                figure.appendChild(img);

                const figcaption = document.createElement('figcaption');
                figcaption.textContent = item.caption;
                figure.appendChild(figcaption);

                galleryGrid.appendChild(figure);
            });
        }

        if (mapDescription && hasPlaceholderContent(mapDescription)) {
            mapDescription.textContent = FALLBACK_CONTENT.map.description;
        }

        if (mapHighlightsList && needsListFallback(mapHighlightsList)) {
            mapHighlightsList.innerHTML = '';
            FALLBACK_CONTENT.map.highlights.forEach((highlight) => {
                const li = document.createElement('li');

                const bullet = document.createElement('span');
                bullet.setAttribute('aria-hidden', 'true');
                bullet.textContent = '•';
                li.appendChild(bullet);

                const wrapper = document.createElement('div');

                const strong = document.createElement('strong');
                strong.textContent = highlight.title;
                wrapper.appendChild(strong);

                const detail = document.createElement('p');
                detail.textContent = highlight.detail;
                wrapper.appendChild(detail);

                if (highlight.ahmed_tip) {
                    const tip = document.createElement('p');
                    tip.className = 'map-highlight-tip';
                    tip.textContent = highlight.ahmed_tip;
                    wrapper.appendChild(tip);
                }

                li.appendChild(wrapper);
                mapHighlightsList.appendChild(li);
            });
        }

        if (mapNote && hasPlaceholderContent(mapNote)) {
            mapNote.textContent = FALLBACK_CONTENT.map.note;
        }

        if (journalFeaturesList && needsListFallback(journalFeaturesList)) {
            journalFeaturesList.innerHTML = '';
            FALLBACK_CONTENT.journalFeatures.forEach((feature) => {
                const li = document.createElement('li');
                li.textContent = feature;
                journalFeaturesList.appendChild(li);
            });
        }
    }

    populateFallbackContent();

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
        if (!heroSection) {
            return;
        }
        const fallbackValue =
            defaultHeroImage && !PLACEHOLDER_PATTERN.test(defaultHeroImage)
                ? defaultHeroImage
                : `url(${JSON.stringify(FALLBACKS.heroImage)})`;
        heroSection.style.setProperty('--hero-image', fallbackValue);
        heroSection.dataset.heroSource = 'default';
        storeHeroImage(null);
    }

    function renderInsights(data) {
        if (!insightsGrid) return;
        insightsGrid.innerHTML = data
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
    }

    function renderTours(data) {
        if (!toursTableBody) return;
        toursTableBody.innerHTML = data
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
    }

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
            if (!response.ok) {
                throw new Error('Unable to load insights');
            }
            const insights = await response.json();
            const data = Array.isArray(insights) && insights.length ? insights : FALLBACK_CONTENT.insights;
            renderInsights(data);
        } catch (error) {
            renderInsights(FALLBACK_CONTENT.insights);
        }
    }

    async function fetchTours() {
        if (!toursTableBody) return;
        try {
            const response = await fetch('/api/tours');
            if (!response.ok) {
                throw new Error('Unable to load tours');
            }
            const tours = await response.json();
            const data = Array.isArray(tours) && tours.length ? tours : FALLBACK_CONTENT.tours;
            renderTours(data);
        } catch (error) {
            renderTours(FALLBACK_CONTENT.tours);
        }
    }

    function setWeatherError(message) {
        if (!weatherCard) return;
        weatherCard.dataset.state = 'error';
        weatherCard.dataset.source = 'error';
        if (weatherTemp) weatherTemp.textContent = '—';
        if (weatherWind) weatherWind.textContent = '—';
        if (weatherHumidity) weatherHumidity.textContent = '—';
        if (weatherLight) weatherLight.textContent = 'Unable to reach forecast';
        if (weatherUpdated) weatherUpdated.textContent = message || 'Check your connection and try again.';
        if (weatherSource) {
            weatherSource.textContent = 'Forecast paused—please retry in a moment.';
            weatherSource.dataset.variant = 'error';
        }
    }

    function updateWeatherUI(cityKey, data) {
        if (!weatherCard) return;
        activeWeatherCity = cityKey;
        weatherCard.dataset.state = 'ready';
        weatherCard.dataset.source = data.source || 'live';

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
        if (weatherSource) {
            weatherSource.textContent = data.notice || '';
            weatherSource.dataset.variant = data.source || 'live';
        }
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

    function openChat() {
        chatWindow.classList.remove('hidden');
        chatWidget.classList.add('open');
        chatInput.focus();
    }

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

    renderInsights(FALLBACK_CONTENT.insights);
    renderTours(FALLBACK_CONTENT.tours);

    fetchInsights();
    fetchTours();

    if (heroSection) {
        heroSection.dataset.heroSource = 'default';

        const inlineDefault = (heroSection.dataset.defaultHero || '').trim();
        const resolvedDefaultUrl =
            inlineDefault && !PLACEHOLDER_PATTERN.test(inlineDefault)
                ? inlineDefault
                : FALLBACKS.heroImage;

        const computedValue = getComputedStyle(heroSection)
            .getPropertyValue('--hero-image')
            .trim();
        const needsFallback = !computedValue || PLACEHOLDER_PATTERN.test(computedValue);

        defaultHeroImage = needsFallback
            ? `url(${JSON.stringify(resolvedDefaultUrl)})`
            : computedValue;

        if (needsFallback) {
            heroSection.style.setProperty('--hero-image', defaultHeroImage);
        }

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

    if (mapEmbedFrame) {
        const defaultEmbed = (mapEmbedFrame.dataset.defaultEmbed || '').trim();
        let currentEmbed = (mapEmbedFrame.getAttribute('src') || '').trim();
        if (!currentEmbed || PLACEHOLDER_PATTERN.test(currentEmbed)) {
            const fallbackEmbed =
                defaultEmbed && !PLACEHOLDER_PATTERN.test(defaultEmbed)
                    ? defaultEmbed
                    : FALLBACKS.mapEmbed;
            mapEmbedFrame.setAttribute('src', fallbackEmbed);
            currentEmbed = fallbackEmbed;
        }

        if (mapFallbackMessage) {
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
    }

    if (mapDirectionsLink) {
        const defaultDirections = (mapDirectionsLink.dataset.defaultDirections || '').trim();
        const currentHref = (mapDirectionsLink.getAttribute('href') || '').trim();
        if (!currentHref || PLACEHOLDER_PATTERN.test(currentHref)) {
            const fallbackDirections =
                defaultDirections && !PLACEHOLDER_PATTERN.test(defaultDirections)
                    ? defaultDirections
                    : FALLBACKS.mapDirections;
            mapDirectionsLink.setAttribute('href', fallbackDirections);
        }
    }

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
})();
