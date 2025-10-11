diff --git a/app/content.py b/app/content.py
new file mode 100644
index 0000000000000000000000000000000000000000..099b57966ea24235870591489a75f3e585ac6cee
--- /dev/null
+++ b/app/content.py
@@ -0,0 +1,237 @@
+"""Centralized content for the luxury travel brief."""
+from __future__ import annotations
+
+from dataclasses import dataclass
+from typing import List, Sequence
+
+
+@dataclass(frozen=True)
+class Highlight:
+    title: str
+    detail: str
+    ahmed_tip: str | None = None
+
+
+@dataclass(frozen=True)
+class KnowBefore:
+    title: str
+    description: str
+    reminders: Sequence[str]
+    ahmed_tip: str
+
+
+@dataclass(frozen=True)
+class PhotoMoment:
+    time: str
+    title: str
+    description: str
+    etiquette: str
+    tip: str
+
+
+@dataclass(frozen=True)
+class EssentialItem:
+    icon: str
+    title: str
+    detail: str
+
+
+@dataclass(frozen=True)
+class GalleryImage:
+    url: str
+    alt: str
+    caption: str
+
+
+SIGNATURE_TAGLINE = "Luxury Travel | Storytelling | AI-Optimized Experiences™"
+
+HERO_CONTENT = {
+    "image_url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
+    "eyebrow": "Arabian Peninsula Edition",
+    "title": "Dubai & Abu Dhabi, orchestrated like a private members-only travel brief.",
+    "subtitle": (
+        "Poetic city moments, precise logistics, and insider rituals curated for guests "
+        "who expect a seamless glow from dawn call to prayer to starlit dunes."
+    ),
+    "highlights": [
+        "Photography cues and cultural etiquette for every sacred space.",
+        "Comfort-first checklists so the heat never outpaces your style.",
+        "Interactive maps and live intel for on-the-go decisions.",
+    ],
+    "tip": "Ahmed’s Tip: Book dawn transfers—traffic sleeps, and the first call to prayer becomes your soundtrack to the city.",
+}
+
+EXPERIENCE_HIGHLIGHTS: List[Highlight] = [
+    Highlight(
+        title="✨ Dawn at the Sheikh Zayed Grand Mosque",
+        detail="Glide across the world’s largest hand-knotted carpet as Swarovski constellations shimmer overhead.",
+        ahmed_tip="Ahmed’s Tip: Slip in 45 minutes before opening to watch sunlight braid through the chandeliers.",
+    ),
+    Highlight(
+        title="🌊 Golden Hour at Al Seef Creek",
+        detail="Breathe in oud-scented breezes while wooden abras crisscross the creek and the spice souk awakens.",
+        ahmed_tip="Ahmed’s Tip: Order cardamom coffee at XVA Café—the courtyard is the quiet lens you need.",
+    ),
+    Highlight(
+        title="🔥 Dunes & Sky at Al Marmoom",
+        detail="Silk-soft sand, private majlis seating, and chefs plating desert truffle risotto under the Milky Way.",
+        ahmed_tip="Ahmed’s Tip: Request the star-charting guide—he maps constellations onto your photos.",
+    ),
+]
+
+KNOW_BEFORE_ENTRIES: List[KnowBefore] = [
+    KnowBefore(
+        title="Sheikh Zayed Grand Mosque",
+        description="Marvel at the 82 domes, a 5,700 m² hand-tied carpet, and chandeliers dripping with 40 million crystals.",
+        reminders=[
+            "Modesty gowns provided—layer silk slips underneath for comfort.",
+            "Marble courtyard can dazzle; polarised sunglasses are essential.",
+        ],
+        ahmed_tip="Ahmed’s Tip: Whisper-quiet rubber soles keep your stride silent for reflection-friendly photos.",
+    ),
+    KnowBefore(
+        title="Hindu Temple Dubai (Mandir)",
+        description="Hand-carved sandstone stories climb skyward, each frieze narrating a different deity in exquisite detail.",
+        reminders=[
+            "Arrive during the 6:30 pm aarti to capture golden light on ivory carvings.",
+            "Carry a lightweight scarf—heads must be covered within sanctums.",
+        ],
+        ahmed_tip="Ahmed’s Tip: Shoot from the southeast corner for carvings layered against the creek’s twilight.",
+    ),
+    KnowBefore(
+        title="Desert Conservatory Camps",
+        description="Eco-luxury tents with solar-cooled lounges, falconry at dawn, and private astronomers by night.",
+        reminders=[
+            "Evenings dip below 18°C from December to February—pack a chic cashmere wrap.",
+            "Reserve dune buggies with sand tyres to reach the silent quarter ridges.",
+        ],
+        ahmed_tip="Ahmed’s Tip: Request the conservationist briefing; it unlocks sunrise access to the protected dunes.",
+    ),
+]
+
+PHOTOGRAPHY_MOMENTS: List[PhotoMoment] = [
+    PhotoMoment(
+        time="05:35",
+        title="Blue Hour Silhouettes",
+        description="Position yourself at the northern colonnade of Sheikh Zayed Grand Mosque for mirror-still reflections.",
+        etiquette="Tripods are welcome outside prayer times—keep shoulders covered and voices hushed.",
+        tip="Ahmed’s Tip: Tilt your lens upward to frame the marble latticework against indigo skies.",
+    ),
+    PhotoMoment(
+        time="07:20",
+        title="Golden Creek Glow",
+        description="Capture abras ferrying commuters across Al Seef Creek as sunlight kisses the wind towers.",
+        etiquette="Ask permission before photographing vendors; offer to share the final shot.",
+        tip="Ahmed’s Tip: Switch to portrait mode at XVA Café courtyard to spotlight the arches and lanterns.",
+    ),
+    PhotoMoment(
+        time="18:40",
+        title="Mandir Sunset Reliefs",
+        description="Stand on the southeast terrace of the Hindu Temple Dubai to align carvings with the amber skyline.",
+        etiquette="No flash inside sanctums—slow your shutter and brace against pillars instead.",
+        tip="Ahmed’s Tip: Capture a wide shot, then focus on a single carving for a storytelling diptych.",
+    ),
+    PhotoMoment(
+        time="20:10",
+        title="Starlit Dune Trails",
+        description="Use a low tripod at Al Marmoom for long exposure shots tracing lantern paths to your majlis.",
+        etiquette="Dim headlamps when guides brief the group—night vision is part of the magic.",
+        tip="Ahmed’s Tip: Ask the astronomer to laser-point Orion, then paint it lightly into your frame.",
+    ),
+]
+
+ESSENTIALS_KIT: List[EssentialItem] = [
+    EssentialItem(
+        icon="🔋",
+        title="Slim Power Bank",
+        detail="10,000 mAh charger with USB-C fast charge keeps cameras and phones alive between transfers.",
+    ),
+    EssentialItem(
+        icon="🕶️",
+        title="Polarised Sunglasses",
+        detail="Cuts marble glare at the mosque and doubles as eye-saver during desert golden hour shoots.",
+    ),
+    EssentialItem(
+        icon="🧕",
+        title="Lightweight Scarf",
+        detail="Respectful coverage for mosques and temples; doubles as a wrap when evening temps dip.",
+    ),
+    EssentialItem(
+        icon="👟",
+        title="Quiet-sole Footwear",
+        detail="Soft, closed shoes that slip off easily—perfect for mosque marble and Mandir corridors.",
+    ),
+    EssentialItem(
+        icon="💧",
+        title="Refillable Water Bottle",
+        detail="Insulated, 750ml capacity with filter to top up at hotel lounges and museum stations.",
+    ),
+]
+
+GALLERY_IMAGES: List[GalleryImage] = [
+    GalleryImage(
+        url="https://images.unsplash.com/photo-1498496294664-d9372eb521f3?auto=format&fit=crop&w=900&q=80",
+        alt="Dubai city skyline at sunset",
+        caption="Golden hour over Downtown Dubai after a late-afternoon city sprint.",
+    ),
+    GalleryImage(
+        url="https://images.unsplash.com/photo-1533689481468-64a0363f7294?auto=format&fit=crop&w=900&q=80",
+        alt="Desert safari camp",
+        caption="Setting up for a desert dinner—booked a month ahead for premium seats.",
+    ),
+    GalleryImage(
+        url="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
+        alt="Traveler packing a backpack",
+        caption="Everything in one 35L pack, keeping luggage fees at zero.",
+    ),
+]
+
+MAP_CONTENT = {
+    "embed_url": "https://www.google.com/maps/d/embed?mid=1QoSxEo6KQ0i_VreFHhD9n1tFoZT3zhVq&ehbc=2E312F",
+    "description": "Our custom Google Map layers guided visits, third-wave coffee stops, and discreet rest lounges.",
+    "directions_url": (
+        "https://www.google.com/maps/dir/?api=1&origin=Burj+Khalifa&destination=Qasr+Al+Watan"
+        "&waypoints=Al+Seef%7CSheikh+Zayed+Grand+Mosque%7CArabica+Coffee+Abu+Dhabi"
+    ),
+    "note": "Ahmed’s Tip: Save the map offline before wheels-up—airline Wi-Fi rarely plays nice with My Maps.",
+    "highlights": [
+        Highlight(
+            title="Sheikh Zayed Grand Mosque",
+            detail="Dawn arrival, private guide, and robe fitting handled on-site.",
+            ahmed_tip="Ahmed’s Tip: Capture symmetry from the north gate before crowds arrive.",
+        ),
+        Highlight(
+            title="Al Seef Creek Abra Pier",
+            detail="Vintage abra charter plus a restorative detour to Arabian Tea House.",
+            ahmed_tip="Ahmed’s Tip: Tap the skipper for a custom sunset loop around the spice souk.",
+        ),
+        Highlight(
+            title="% Arabica Qasr Al Hosn",
+            detail="Single-origin coffee break with shaded seating and fast Wi-Fi.",
+            ahmed_tip="Ahmed’s Tip: Save the Wi-Fi password offline—it helps when you’re pushing new pins on the map.",
+        ),
+        Highlight(
+            title="Al Marmoom Desert Conservatory",
+            detail="Sunset dune drive, astronomy session, and locally sourced dinner.",
+            ahmed_tip="Ahmed’s Tip: Download the stargazing overlay before you lose signal past the reserve gates.",
+        ),
+    ],
+}
+
+JOURNAL_FEATURES = [
+    "Modular daily spreads with sunrise/sunset cues.",
+    "Drop zones for instant Polaroid scans.",
+    "Reflection prompts for mindful evenings.",
+]
+
+__all__ = [
+    "SIGNATURE_TAGLINE",
+    "HERO_CONTENT",
+    "EXPERIENCE_HIGHLIGHTS",
+    "KNOW_BEFORE_ENTRIES",
+    "PHOTOGRAPHY_MOMENTS",
+    "ESSENTIALS_KIT",
+    "GALLERY_IMAGES",
+    "MAP_CONTENT",
+    "JOURNAL_FEATURES",
+]
