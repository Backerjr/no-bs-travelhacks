const CONFLICT_MARKER_PATTERN = /<<<<<<<|=======|>>>>>>>/;
const PLACEHOLDER_PATTERN = /{{|}}|<<<<<<<|=======|>>>>>>>/;

const FALLBACK_CONTENT = (() => {
    if (window.__NBSTHFallbackContent) {
        return window.__NBSTHFallbackContent;
    }

    const content = {
        signatureTagline: 'Luxury Travel | Storytelling | AI-Optimized Experiences™',
        hero: {
            imageUrl:
                'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
            eyebrow: 'Arabian Peninsula Edition',
            title: 'Dubai & Abu Dhabi, orchestrated like a private members-only travel brief.',
            subtitle:
                'Poetic city moments, precise logistics, and insider rituals curated for guests who expect a seamless glow from dawn call to prayer to starlit dunes.',
            highlights: [
                'Photography cues and cultural etiquette for every sacred space.',
                'Comfort-first checklists so the heat never outpaces your style.',
                'Interactive maps and live intel for on-the-go decisions.',
            ],
            tip: 'Ahmed’s Tip: Book dawn transfers—traffic sleeps, and the first call to prayer becomes your soundtrack to the city.',
        },
        experienceHighlights: [
            {
                title: '✨ Dawn at the Sheikh Zayed Grand Mosque',
                detail: 'Glide across the world’s largest hand-knotted carpet as Swarovski constellations shimmer overhead.',
                ahmed_tip: 'Ahmed’s Tip: Slip in 45 minutes before opening to watch sunlight braid through the chandeliers.',
            },
            {
                title: '🌊 Golden Hour at Al Seef Creek',
                detail: 'Breathe in oud-scented breezes while wooden abras crisscross the creek and the spice souk awakens.',
                ahmed_tip: 'Ahmed’s Tip: Order cardamom coffee at XVA Café—the courtyard is the quiet lens you need.',
            },
            {
                title: '🔥 Dunes & Sky at Al Marmoom',
                detail: 'Silk-soft sand, private majlis seating, and chefs plating desert truffle risotto under the Milky Way.',
                ahmed_tip: 'Ahmed’s Tip: Request the star-charting guide—he maps constellations onto your photos.',
            },
        ],
        knowBefore: [
            {
                title: 'Sheikh Zayed Grand Mosque',
                description:
                    'Marvel at the 82 domes, a 5,700 m² hand-tied carpet, and chandeliers dripping with 40 million crystals.',
                reminders: [
                    'Modesty gowns provided—layer silk slips underneath for comfort.',
                    'Marble courtyard can dazzle; polarised sunglasses are essential.',
                ],
                ahmed_tip: 'Ahmed’s Tip: Whisper-quiet rubber soles keep your stride silent for reflection-friendly photos.',
            },
            {
                title: 'Hindu Temple Dubai (Mandir)',
                description:
                    'Hand-carved sandstone stories climb skyward, each frieze narrating a different deity in exquisite detail.',
                reminders: [
                    'Arrive during the 6:30 pm aarti to capture golden light on ivory carvings.',
                    'Carry a lightweight scarf—heads must be covered within sanctums.',
                ],
                ahmed_tip: 'Ahmed’s Tip: Shoot from the southeast corner for carvings layered against the creek’s twilight.',
            },
            {
                title: 'Desert Conservatory Camps',
                description:
                    'Eco-luxury tents with solar-cooled lounges, falconry at dawn, and private astronomers by night.',
                reminders: [
                    'Evenings dip below 18°C from December to February—pack a chic cashmere wrap.',
                    'Reserve dune buggies with sand tyres to reach the silent quarter ridges.',
                ],
                ahmed_tip: 'Ahmed’s Tip: Request the conservationist briefing; it unlocks sunrise access to the protected dunes.',
            },
        ],
        photographyMoments: [
            {
                time: '05:35',
                title: 'Blue Hour Silhouettes',
                description:
                    'Position yourself at the northern colonnade of Sheikh Zayed Grand Mosque for mirror-still reflections.',
                etiquette: 'Tripods are welcome outside prayer times—keep shoulders covered and voices hushed.',
                tip: 'Ahmed’s Tip: Tilt your lens upward to frame the marble latticework against indigo skies.',
            },
            {
                time: '07:20',
                title: 'Golden Creek Glow',
                description: 'Capture abras ferrying commuters across Al Seef Creek as sunlight kisses the wind towers.',
                etiquette: 'Ask permission before photographing vendors; offer to share the final shot.',
                tip: 'Ahmed’s Tip: Switch to portrait mode at XVA Café courtyard to spotlight the arches and lanterns.',
            },
            {
                time: '18:40',
                title: 'Mandir Sunset Reliefs',
                description:
                    'Stand on the southeast terrace of the Hindu Temple Dubai to align carvings with the amber skyline.',
                etiquette: 'No flash inside sanctums—slow your shutter and brace against pillars instead.',
                tip: 'Ahmed’s Tip: Capture a wide shot, then focus on a single carving for a storytelling diptych.',
            },
            {
                time: '20:10',
                title: 'Starlit Dune Trails',
                description: 'Use a low tripod at Al Marmoom for long exposure shots tracing lantern paths to your majlis.',
                etiquette: 'Dim headlamps when guides brief the group—night vision is part of the magic.',
                tip: 'Ahmed’s Tip: Ask the astronomer to laser-point Orion, then paint it lightly into your frame.',
            },
        ],
        essentials: [
            {
                icon: '🔋',
                title: 'Slim Power Bank',
                detail: '10,000 mAh charger with USB-C fast charge keeps cameras and phones alive between transfers.',
            },
            {
                icon: '🕶️',
                title: 'Polarised Sunglasses',
                detail: 'Cuts marble glare at the mosque and doubles as eye-saver during desert golden hour shoots.',
            },
            {
                icon: '🧕',
                title: 'Lightweight Scarf',
                detail: 'Respectful coverage for mosques and temples; doubles as a wrap when evening temps dip.',
            },
            {
                icon: '👟',
                title: 'Quiet-sole Footwear',
                detail: 'Soft, closed shoes that slip off easily—perfect for mosque marble and Mandir corridors.',
            },
            {
                icon: '💧',
                title: 'Refillable Water Bottle',
                detail: 'Insulated, 750ml capacity with filter to top up at hotel lounges and museum stations.',
            },
        ],
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1498496294664-d9372eb521f3?auto=format&fit=crop&w=900&q=80',
                alt: 'Dubai city skyline at sunset',
                caption: 'Golden hour over Downtown Dubai after a late-afternoon city sprint.',
            },
            {
                url: 'https://images.unsplash.com/photo-1533689481468-64a0363f7294?auto=format&fit=crop&w=900&q=80',
                alt: 'Desert safari camp',
                caption: 'Setting up for a desert dinner—booked a month ahead for premium seats.',
            },
            {
                url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
                alt: 'Traveler packing a backpack',
                caption: 'Everything in one 35L pack, keeping luggage fees at zero.',
            },
        ],
        map: {
            embedUrl: 'https://www.google.com/maps/d/embed?mid=1QoSxEo6KQ0i_VreFHhD9n1tFoZT3zhVq&ehbc=2E312F',
            directionsUrl:
                'https://www.google.com/maps/dir/?api=1&origin=Burj+Khalifa&destination=Qasr+Al+Watan&waypoints=Al+Seef%7CSheikh+Zayed+Grand+Mosque%7CArabica+Coffee+Abu+Dhabi',
            description: 'Our custom Google Map layers guided visits, third-wave coffee stops, and discreet rest lounges.',
            note: 'Ahmed’s Tip: Save the map offline before wheels-up—airline Wi-Fi rarely plays nice with My Maps.',
            highlights: [
                {
                    title: 'Sheikh Zayed Grand Mosque',
                    detail: 'Dawn arrival, private guide, and robe fitting handled on-site.',
                    ahmed_tip: 'Ahmed’s Tip: Capture symmetry from the north gate before crowds arrive.',
                },
                {
                    title: 'Al Seef Creek Abra Pier',
                    detail: 'Vintage abra charter plus a restorative detour to Arabian Tea House.',
                    ahmed_tip: 'Ahmed’s Tip: Tap the skipper for a custom sunset loop around the spice souk.',
                },
                {
                    title: '% Arabica Qasr Al Hosn',
                    detail: 'Single-origin coffee break with shaded seating and fast Wi-Fi.',
                    ahmed_tip: 'Ahmed’s Tip: Save the Wi-Fi password offline—it helps when you’re pushing new pins on the map.',
                },
                {
                    title: 'Al Marmoom Desert Conservatory',
                    detail: 'Sunset dune drive, astronomy session, and locally sourced dinner.',
                    ahmed_tip: 'Ahmed’s Tip: Download the stargazing overlay before you lose signal past the reserve gates.',
                },
            ],
        },
        journalFeatures: [
            'Modular daily spreads with sunrise/sunset cues.',
            'Drop zones for instant Polaroid scans.',
            'Reflection prompts for mindful evenings.',
        ],
        insights: [
            {
                title: 'Luxury For Less',
                stat: '18%',
                description:
                    'Couples who prebook signature mosque and desert tours together typically save 18% on chauffeured transfers.',
            },
            {
                title: 'Sunrise Sweet Spot',
                stat: '06:14',
                description:
                    'That’s the average winter sunrise in Abu Dhabi—ideal for those luminous Sheikh Zayed Grand Mosque frames.',
            },
            {
                title: 'Hydration Rule',
                stat: '500ml/hr',
                description: 'Plan for half a litre of water per hour outdoors; our refill strategy keeps you cool without overpacking.',
            },
        ],
        tours: [
            {
                name: 'Sheikh Zayed Grand Mosque Dawn Access',
                description: 'Private imam-led tour with Swarovski chandelier briefing and photography concierge.',
                duration: '3 hours',
                best_time: 'Daily · 06:00',
                price: 420,
            },
            {
                name: 'Mandir & Al Seef Cultural Stroll',
                description: 'Hindu Temple carvings at sunset, abra glide, and cardamom coffee tasting in XVA Café.',
                duration: '5 hours',
                best_time: 'Tue–Sun · 16:00',
                price: 260,
            },
            {
                name: 'Al Marmoom Desert Conservatory Soirée',
                description: 'Solar-cooled majlis, falconry at dusk, gourmet dinner, and astronomer-led stargazing.',
                duration: '7 hours',
                best_time: 'Oct–Apr · 17:00',
                price: 520,
            },
        ],
        weather: {
            dubai: {
                temperature: 32,
                windspeed: 14,
                winddirection: 325,
                weathercode: 2,
                is_day: 1,
                humidity: 48,
                city: 'Dubai',
                city_key: 'dubai',
                source: 'curated',
                notice: 'Live feed paused—serving our last on-ground sensor sweep.',
            },
            'abu-dhabi': {
                temperature: 31,
                windspeed: 18,
                winddirection: 300,
                weathercode: 1,
                is_day: 1,
                humidity: 52,
                city: 'Abu Dhabi',
                city_key: 'abu-dhabi',
                source: 'curated',
                notice: 'Live feed paused—serving our last on-ground sensor sweep.',
            },
        },
    };

    window.__NBSTHFallbackContent = content;
    return content;
})();

function buildFallbackWeather(cityKey) {
    const entry = FALLBACK_CONTENT.weather[cityKey];
    if (!entry) {
        return null;
    }

    const timestamp = new Date();
    const updatedAt = `${timestamp.getDate().toString().padStart(2, '0')} ${timestamp.toLocaleString('en-US', {
        month: 'short',
    })} ${timestamp.getHours().toString().padStart(2, '0')}:${timestamp
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;

    return {
        ...entry,
        updated_at: updatedAt,
    };
}

(() => {
    if (window.__nbsthAppInitialized) {
        return;
    }
    window.__nbsthAppInitialized = true;

    let isStaticMode = window.location.protocol === 'file:' || window.location.origin === 'null';
    let skipApiCalls = Boolean(isStaticMode);

    function purgeConflictMarkers(root = document.body) {
        if (!root) return;
        if (typeof document.createTreeWalker !== 'function' || typeof NodeFilter === 'undefined') {
            return;
        }
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodesToClean = [];

        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (CONFLICT_MARKER_PATTERN.test(node.nodeValue || '')) {
                nodesToClean.push(node);
            }
        }

        nodesToClean.forEach((node) => {
            const parent = node.parentNode;
            if (!parent) return;

            const cleanedValue = (node.nodeValue || '').replace(CONFLICT_MARKER_PATTERN, '').trim();
            if (cleanedValue) {
                node.nodeValue = cleanedValue;
            } else {
                parent.removeChild(node);
            }
        });
    }
    const state = (window.__nbsthState = window.__nbsthState || {
        activeWeatherCity: 'dubai',
        weatherCache: {},
    });

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
    const journalCtaLink = document.querySelector('.journal-card a.button');

    const FALLBACKS = {
        heroImage: FALLBACK_CONTENT.hero.imageUrl,
        mapEmbed: FALLBACK_CONTENT.map.embedUrl,
        mapDirections: FALLBACK_CONTENT.map.directionsUrl,
    };

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

    purgeConflictMarkers();

    if (!isStaticMode) {
        const placeholderAnchors = [
            signatureTagline,
            heroEyebrow,
            heroTitle,
            heroSubtitle,
            heroHighlightsList,
            experiencesGrid,
            knowGrid,
            photoTimeline,
            essentialsList,
            galleryGrid,
            mapDescription,
            mapHighlightsList,
            mapNote,
            journalFeaturesList,
            journalCtaLink,
        ];

        const hasServerPlaceholders = placeholderAnchors.some((element) => hasPlaceholderContent(element));
        if (hasServerPlaceholders) {
            isStaticMode = true;
            skipApiCalls = true;
        }
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

        if (journalCtaLink) {
            const currentHref = (journalCtaLink.getAttribute('href') || '').trim();
            if (!currentHref || PLACEHOLDER_PATTERN.test(currentHref)) {
                journalCtaLink.setAttribute('href', 'journal.html');
                journalCtaLink.removeAttribute('target');
                journalCtaLink.removeAttribute('rel');
            }
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
        if (skipApiCalls) {
            renderInsights(FALLBACK_CONTENT.insights);
            return;
        }
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
        if (skipApiCalls) {
            renderTours(FALLBACK_CONTENT.tours);
            return;
        }
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
        state.activeWeatherCity = cityKey;
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

        if (skipApiCalls) {
            const fallbackPayload = buildFallbackWeather(cityKey) || buildFallbackWeather('dubai');
            if (fallbackPayload) {
                state.weatherCache[cityKey] = fallbackPayload;
                if (!suppressUpdate) {
                    updateWeatherUI(cityKey, fallbackPayload);
                }
                return fallbackPayload;
            }
            if (!suppressUpdate) {
                setWeatherError('Offline mode—check curated cues below.');
            }
            return null;
        }

        try {
            const response = await fetch(`/api/weather?city=${encodeURIComponent(cityKey)}`);
            const payload = await response.json();

            if (!response.ok || payload.error) {
                throw new Error(payload.error || 'Unable to fetch forecast.');
            }

            state.weatherCache[cityKey] = payload;
            if (!suppressUpdate) {
                updateWeatherUI(cityKey, payload);
            }
            return payload;
        } catch (error) {
            if (!suppressUpdate) {
                const fallbackPayload = buildFallbackWeather(cityKey) || buildFallbackWeather('dubai');
                if (fallbackPayload) {
                    state.weatherCache[cityKey] = fallbackPayload;
                    updateWeatherUI(cityKey, fallbackPayload);
                } else {
                    setWeatherError(error.message);
                }
            }
            return null;
        }
    }

    function handleWeatherTabClick(event) {
        const city = event.currentTarget.dataset.forecastCity;
        if (!city || city === state.activeWeatherCity) return;

        if (state.weatherCache[city]) {
            updateWeatherUI(city, state.weatherCache[city]);
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

        if (skipApiCalls) {
            appendMessage(
                "Ahmed’s Tip: I'm offline, so pair the Essentials Kit with dawn mosque slots and sunset Mandir visits for instant wow.",
                'bot'
            );
            return;
        }

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

        fetchWeather(state.activeWeatherCity).then(() => {
            weatherTabs.forEach((tab) => {
                const city = tab.dataset.forecastCity;
                if (city && city !== state.activeWeatherCity) {
                    fetchWeather(city, { showLoader: false, suppressUpdate: true });
                }
            });
        });

        setInterval(() => {
            fetchWeather(state.activeWeatherCity, { showLoader: false });
        }, 15 * 60 * 1000);
    }
})();
