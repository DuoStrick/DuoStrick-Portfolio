/**
 * Single source of truth for every published app.
 *
 * Drives the home "Featured Apps" grid, the /apps index, each /apps/[slug]
 * landing page, their SoftwareApplication + FAQPage schema and their OG cards.
 * Copy is taken from each app's own Google Play listing — keep it in step when
 * a listing changes.
 */
import type { AppEntry } from "../lib/types";

export const apps: AppEntry[] = [
  /* ─────────────────────────────────────────────────────── Bunny Puzzle ── */
  {
    id: "bunny-puzzle",
    title: "Bunny Puzzle: Queens Logic",
    shortName: "Bunny Puzzle",
    genre: "Logic Puzzle",
    accent: "green",
    packageName: "com.duostrick.buddypuzzle",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.duostrick.buddypuzzle",
    iconUrl: "/bunny-puzzle-icon.png",
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Puzzle",
    storeUpdated: "2026-11-22",
    containsAds: true,
    postTags: ["bunny-puzzle", "queens-puzzle"],
    tagline: "Queens logic puzzle: one bunny per row, column & colour. Like sudoku, but cuter!",

    description:
      "A cosy queens-style logic puzzle. Place one bunny in every row, every column and every colour region — and never let two bunnies touch. 300 hand-checked puzzles from 4×4 to 10×10, a fresh Daily Challenge, smart hints and no timer. Plays offline.",

    seoTitle: "Bunny Puzzle: Queens Logic — Cosy Queens Puzzle Game for Android",
    seoDescription:
      "A cosy queens logic puzzle for Android: one bunny per row, column and colour region. 300 puzzles, a daily challenge, smart hints. Offline, no timer.",
    schemaDescription:
      "Bunny Puzzle: Queens Logic is a relaxing queens-style logic puzzle game for Android. Place one bunny in every row, every column and every colour region, with no two bunnies touching — even diagonally. Every puzzle has exactly one solution reachable by pure logic. Includes 300 puzzles from 4×4 to 10×10, a Daily Challenge with streaks and monthly gifts, 80 Tightrope bonus levels, hints that explain the next logical step, five themed worlds, collectible avatars and frames, and accessibility options. Plays offline with no sign-in.",

    keywords: [
      "bunny puzzle", "queens puzzle", "queens logic puzzle", "queens game android",
      "star battle puzzle", "logic puzzle game android", "sudoku like puzzle",
      "daily logic puzzle", "brain teaser offline", "cosy puzzle game",
      "relaxing puzzle game", "no timer puzzle game", "offline logic game",
      "colour region puzzle", "deduction puzzle android",
    ],

    intro: [
      "Bunny Puzzle takes the queens puzzle — the one-per-row, one-per-column, one-per-region logic grid that sudoku and star battle fans love — and turns it into something calm. Buddy the bunny keeps you company, there's no timer, and every board has exactly one answer you can reach without guessing.",
      "Start on a friendly 4×4 and work up to 10×10 grids that need real deduction. When you're stuck, a hint explains the next logical step rather than just placing a bunny for you, so you get better as you play.",
    ],

    features: [
      {
        title: "Four rules, one answer",
        body: "The rules fit on a sticky note. Each puzzle is built so pure logic reaches the single solution — no luck, no trial and error.",
        bullets: [
          "One bunny in each row and each column",
          "Exactly one bunny in every colour region",
          "Bunnies never touch, not even diagonally",
          "Auto-mark ✕ clears the squares a bunny rules out",
        ],
      },
      {
        title: "300 puzzles plus bonus levels",
        body: "A steady climb from gentle 4×4 boards to tricky 10×10 grids, with extra modes when you want a twist.",
        bullets: [
          "300 logic puzzles, 4×4 to 10×10",
          "80 Tightrope Bonus levels — one life, one Golden Carrot",
          "Weekly events with Carrot Points",
        ],
      },
      {
        title: "A fresh puzzle every day",
        body: "The Daily Challenge gives you one new brain teaser a day, with a calendar to track it.",
        bullets: [
          "Daily Challenge calendar and streaks",
          "Monthly gifts for showing up",
          "A five-minute brain break that fits any day",
        ],
      },
      {
        title: "Help that teaches",
        body: "Hints explain why a square must hold a bunny, so the technique sticks. Helpers get you moving when a board stalls.",
        bullets: [
          "Smart hints that explain the next step",
          "Bunny, Sweep and Undo helpers",
          "A one-minute hands-on tutorial",
        ],
      },
      {
        title: "Cosy, and yours",
        body: "Five worlds to play in — under the sea, a sunny meadow, a starry night, snowy woods or classic paper — with soft music and sounds.",
        bullets: [
          "Collect carrots, coins and gift boxes",
          "75 frames and 56 animal avatars",
          "Large text, reduce motion and left-handed options",
          "Plays offline — no Wi-Fi, no sign-in",
        ],
      },
    ],

    faq: [
      {
        q: "How do you play Bunny Puzzle?",
        a: "Place one bunny in every row, every column and every colour region of the grid. Two bunnies can never touch, not even diagonally. Each puzzle has exactly one solution, and you can always reach it by logic without guessing.",
      },
      {
        q: "Is Bunny Puzzle the same as the queens puzzle?",
        a: "It uses the same rules as the popular queens logic puzzle — one per row, one per column, one per colour region, none touching — with bunnies in place of queens, a calm no-timer pace and hints that explain each step.",
      },
      {
        q: "Does Bunny Puzzle work offline?",
        a: "Yes. You can play every puzzle, the Daily Challenge and the bonus levels without Wi-Fi or mobile data, and there's no sign-in.",
      },
      {
        q: "What should I do when I'm stuck?",
        a: "Tap Hint. Instead of just giving away a square, the hint points to the region, row or column that forces the next move and explains why. Helpers like Sweep and Undo are there too, and Auto-mark ✕ clears squares that a placed bunny has ruled out.",
      },
      {
        q: "Is Bunny Puzzle free?",
        a: "Yes, Bunny Puzzle is free to download and play on Google Play. It is supported by ads.",
      },
    ],

    screenshots: [
      { src: "/apps/bunny-puzzle/01.jpg", alt: "Bunny Puzzle home screen with Buddy the bunny and the Daily Challenge" },
      { src: "/apps/bunny-puzzle/02.jpg", alt: "Bunny Puzzle board — one bunny in every row, column and colour region" },
      { src: "/apps/bunny-puzzle/03.jpg", alt: "Bunny Puzzle hint explaining the next logical step" },
      { src: "/apps/bunny-puzzle/04.jpg", alt: "Bunny Puzzle level complete screen with carrots and score" },
      { src: "/apps/bunny-puzzle/05.jpg", alt: "Bunny Puzzle Daily Challenge calendar with streaks and monthly gifts" },
      { src: "/apps/bunny-puzzle/06.jpg", alt: "Bunny Puzzle Tightrope Bonus level for the Golden Carrot" },
      { src: "/apps/bunny-puzzle/07.jpg", alt: "Bunny Puzzle background picker with five themed worlds" },
      { src: "/apps/bunny-puzzle/08.jpg", alt: "Bunny Puzzle profile with collectible animal avatars and frames" },
    ],
  },

  /* ──────────────────────────────────────────────────────────── Mediqora ── */
  {
    id: "mediqora",
    title: "Mediqora: Video & Music Player",
    shortName: "Mediqora",
    genre: "Music & Audio",
    accent: "blue",
    packageName: "com.daymark.mediqora",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.daymark.mediqora",
    iconUrl: "/mediqora-icon.png",
    operatingSystem: "Android 8.0+",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Music & Audio",
    storeUpdated: "2026-09-26",
    containsAds: false,
    postTags: ["mediqora", "mediqora-android"],
    tagline: "Play local videos & music. Auto-sorted into series. No ads, no internet needed.",

    description:
      "An offline video and music player that turns the files on your phone into a real library. Mediqora reads filenames and groups them into series, seasons and episodes, remembers where you stopped, and queues up Up Next. No account, no ads — it has no internet permission at all.",

    seoTitle: "Mediqora — Offline Video & Music Player for Android with Series Detection",
    seoDescription:
      "Free offline Android video & music player. Mediqora groups files into series and episodes, resumes where you stopped, and has no internet permission at all.",
    schemaDescription:
      "Mediqora is a free offline video and music player for Android that turns the files on your phone into a real library. It detects series, seasons and episodes from filenames, resumes every item where you left off, and queues the next episode with Up Next. Picture-in-picture, background playback, subtitle and audio track selection, Material You theming — with no ads, no account, and no internet permission at all.",

    keywords: [
      "mediqora", "mediqora app", "mediqora video music player",
      "offline video player android", "local media player android",
      "series detection video player", "episode tracking android",
      "resume playback video player", "up next android player",
      "no ads video player android", "private video player android",
      "music player android offline", "picture in picture video player",
      "material you media player", "sd card video player android",
    ],

    intro: [
      "Most local video players on Android hand you a list of filenames. Mediqora reads them instead — a folder of downloads becomes Show Name → Season 3 → Episode 4, with progress tracked per episode and the next one waiting on the home screen.",
      "It works for movies, TV series, lectures, podcasts and your music collection alike. There is no account, no advertising, and no internet permission in the app at all.",
    ],

    features: [
      {
        title: "A library, not a file browser",
        body: "Drop in a season of episodes and Mediqora parses the filenames to work out the series, the season and the episode number.",
        bullets: [
          "Automatic series and episode detection from filenames",
          "Resume every video and song exactly where you left off",
          "Up Next — the next unwatched episode is one tap away",
          "Autoplay the next episode, or the next file in the folder",
          "Recently added, favorites, and your own collections",
          "Browse by series, video, music, or folder",
          "Fast search across titles, series, folders and artists",
        ],
      },
      {
        title: "A player that gets out of the way",
        body: "Once something is playing the interface should disappear. Mediqora's player is built around gestures and quick controls.",
        bullets: [
          "Swipe to seek, change volume and brightness",
          "Skip 10 seconds forward or back",
          "Playback speed from 0.5× to 2×",
          "Fit, fill or stretch the picture — or pinch to switch",
          "Lock the screen so nothing interrupts playback",
          "Picture-in-picture while you use other apps",
          "Subtitle and audio track selection, with external SRT and VTT files",
          "Volume boost for quiet recordings",
        ],
      },
      {
        title: "Music too",
        body: "The same library and resume logic covers your music, so a long podcast or audiobook chapter picks up exactly where you left it.",
        bullets: [
          "Background playback with lock screen and headset controls",
          "Play queue — add, reorder, play next",
          "Album art, artist and album details",
        ],
      },
      {
        title: "Private by design, not by promise",
        body: "Mediqora does not request internet access, so nothing you watch, search or listen to is able to leave your device. This is structural, not a setting you have to find — there is no code path that could send your viewing habits anywhere.",
        bullets: [
          "No account to create",
          "No ads, no analytics, no tracking",
          "Library, watch history and favorites stay on the phone",
          "Android app backup is switched off",
        ],
      },
      {
        title: "Works with your files",
        body: "Plays the common formats your device supports, including MP4, MKV, WebM, MP3, AAC and FLAC. Open a file from your file manager with “Open with”, or add folders from an SD card using Android's own folder picker.",
      },
    ],

    faq: [
      {
        q: "Why isn't Mediqora grouping my episodes into a series?",
        a: "Mediqora builds series from the information in your filenames, so it needs that information to be present. Keep the season/episode pattern in the name (for example Show.Name.S03E04.1080p.mkv) and keep episodes of the same show together in one folder. Renaming a file down to something like 04.mkv removes the only signal the parser has.",
      },
      {
        q: "What is Up Next?",
        a: "Once Mediqora has grouped a series, Up Next shows the next unwatched episode on the home screen so you can resume a show in one tap. Because progress is tracked per episode, finishing one automatically moves Up Next to the following one. You can also turn on autoplay so the next episode starts on its own.",
      },
      {
        q: "Does Mediqora need an internet connection or an account?",
        a: "Neither. Mediqora does not request the internet permission at all, so nothing you watch, search or listen to is able to leave your device. There is no account to create, no ads, no analytics and no tracking.",
      },
      {
        q: "How do I add media from an SD card?",
        a: "Use Add folder and pick the location with Android's own folder picker — it works for an SD card or any other location your device exposes. Mediqora only asks for access to the videos and music on your device; it does not ask for contacts, location, camera or microphone.",
      },
      {
        q: "Which video and audio formats does Mediqora play?",
        a: "Mediqora plays the common video and audio formats your device supports, including MP4, MKV, WebM, MP3, AAC and FLAC. You can also open a file from your file manager or any other app using Open with.",
      },
    ],

    screenshots: [
      { src: "/apps/mediqora/01.jpg", alt: "Mediqora home screen with Up Next and recently added media" },
      { src: "/apps/mediqora/02.jpg", alt: "Mediqora library browsing videos and music on the device" },
      { src: "/apps/mediqora/03.jpg", alt: "Mediqora series view showing seasons and episodes detected from filenames" },
      { src: "/apps/mediqora/04.jpg", alt: "Mediqora video player with gesture controls and playback options" },
      { src: "/apps/mediqora/05.jpg", alt: "Mediqora settings with dark, light and Material You theming" },
    ],
  },

  /* ─────────────────────────────────────────────────────────── AV Player ── */
  {
    id: "av-player",
    title: "AV Player: Video & MP3 Player",
    shortName: "AV Player",
    genre: "Media Player",
    accent: "green",
    packageName: "com.duostrick.avplayer",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.duostrick.avplayer",
    iconUrl: "/avplayer-icon.png",
    operatingSystem: "Android 8.0+",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Video Player",
    storeUpdated: "2026-08-13",
    containsAds: true,
    postTags: ["av-player", "av-player-android"],
    tagline: "All-format video & music player with equalizer & volume boost. Works offline.",

    description:
      "All-format HD video player and offline MP3 music player for Android. Supports MP4, MKV, AVI, FLAC and more. Features 4K playback, Picture-in-Picture, gesture controls, subtitles, a built-in equalizer and volume booster, and 8 premium themes. Works fully offline.",

    seoTitle: "AV Player — All-Format 4K Video & Offline MP3 Player for Android",
    seoDescription:
      "Free all-format Android video and music player. Plays MP4, MKV, AVI, FLAC with 4K playback, equalizer, volume boost, PiP and gesture controls. Works offline.",
    schemaDescription:
      "AV Player is a free all-format video and offline MP3 music player for Android. It plays MP4, MKV, AVI, MOV, FLV, WMV, 3GP, M4V and WEBM video and MP3, FLAC, WAV, AAC, OGG and M4A audio with hardware-accelerated 4K playback. Features include a built-in equalizer and volume booster, Picture-in-Picture, gesture controls, subtitle support, sleep timer, trash and restore, and eight themes. Works fully offline.",

    keywords: [
      "av player", "av player android", "av player app",
      "all format video player android", "4k video player android",
      "mkv player android", "flac player android", "mp3 player android offline",
      "video player with equalizer", "volume booster video player",
      "picture in picture video player android", "gesture video player",
      "subtitle video player android", "offline media player android",
      "amoled video player theme",
    ],

    intro: [
      "AV Player is a fast, all-in-one video and music player for Android. It plays almost any file you throw at it — MP4, MKV, AVI, MOV, FLV, MP3, FLAC, WAV — with smooth HD and 4K playback, fully offline.",
      "One app replaces your video player, music player, equalizer and volume booster.",
    ],

    features: [
      {
        title: "All-format video playback",
        body: "Hardware-accelerated 4K, Full HD and HD playback that stays smooth even on low-end devices.",
        bullets: [
          "MP4, MKV, AVI, MOV, FLV, WMV, 3GP, M4V and WEBM",
          "Hardware acceleration for 4K and Full HD",
          "Pinch to zoom and resize",
          "Resume from where you left off",
        ],
      },
      {
        title: "Volume booster & equalizer",
        body: "Boost volume beyond the system limit when a video or song is too quiet, and shape your sound with a built-in equalizer — for both music and video playback. A real volume boost for movies, not just music.",
      },
      {
        title: "Offline MP3 music player",
        body: "Turn your phone into a high-quality offline music player with fast library browsing.",
        bullets: [
          "MP3, FLAC, WAV, AAC, OGG and M4A",
          "Background playback",
          "Lock screen controls",
        ],
      },
      {
        title: "Advanced playback controls",
        body: "Everything you need while something is playing, without hunting for tiny buttons.",
        bullets: [
          "Gesture controls for brightness, volume and seek",
          "Picture-in-Picture (PiP) for multitasking",
          "Playback speed from 0.25× to 2×",
          "Subtitle support — SRT, SSA, ASS and VTT",
          "Screen lock and sleep timer",
        ],
      },
      {
        title: "Smart media manager",
        body: "AV Player scans and organises your whole media library.",
        bullets: [
          "Folders shown right on the home screen",
          "Move files to Trash and restore them, or delete permanently",
          "Sort by name, date, size or duration",
          "Quick search across all video and audio",
          "Recently played and recently added",
          "Hide private folders",
        ],
      },
      {
        title: "Clean, modern interface",
        body: "Minimal, premium design with smooth animations and eight themes — Light, Dark, AMOLED Black, Midnight Blue, Sunset Amber, Ocean Deep, Neon Music and Cinematic Dark. Lightweight, with low battery and RAM usage.",
      },
    ],

    faq: [
      {
        q: "How do gesture controls work in AV Player?",
        a: "Swipe up or down on the left half of the screen to adjust brightness. Swipe up or down on the right half to adjust volume. Swipe left or right anywhere on the screen to seek forward or backward. These gestures work in both portrait and landscape modes.",
      },
      {
        q: "Why won't AV Player play my video file?",
        a: "AV Player supports MP4, MKV, AVI, MOV, FLV, WMV, 3GP, M4V, WEBM and TS video formats, and MP3, FLAC, WAV, AAC, OGG and M4A audio formats. If your file doesn't play, try converting it to MP4 or MKV, and make sure the app has permission to access your storage in Android settings.",
      },
      {
        q: "How do I enable Picture-in-Picture (PiP)?",
        a: "While a video is playing, pull down from the top of the video to enter PiP mode, or press your device's Home button. The video shrinks to a floating window you can position anywhere. Android 8.0 (Oreo) or higher is required.",
      },
      {
        q: "How do I hide a folder in AV Player?",
        a: "Long-press any folder in the file browser, then tap Hide folder. The folder disappears from the main library view. To unhide it, go to Settings → Hidden Folders, select the folder and tap Restore.",
      },
      {
        q: "Does the volume booster work for video as well as music?",
        a: "Yes. The volume boost and the equalizer both apply to video playback as well as music, which is what you want for quiet movie dialogue — not just for songs.",
      },
    ],

    screenshots: [
      { src: "/apps/av-player/01.jpg", alt: "AV Player home screen showing recent videos and audio in light and dark themes" },
      { src: "/apps/av-player/02.jpg", alt: "AV Player video playback with gesture controls" },
      { src: "/apps/av-player/03.jpg", alt: "AV Player equalizer and volume booster controls" },
    ],
  },

  /* ──────────────────────────────────────────────────────────── Docqora ── */
  {
    id: "docqora",
    title: "Docqora - PDF Tools Offline",
    shortName: "Docqora",
    genre: "PDF Tools",
    accent: "blue",
    packageName: "com.duostrick.docqora",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.duostrick.docqora",
    iconUrl: "/docqora-icon.png",
    operatingSystem: "Android 8.0+",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Tools",
    storeUpdated: "2026-10-23",
    containsAds: false,
    postTags: ["docqora", "pdf-tools"],
    tagline: "Compress, merge, split, protect & convert PDFs offline. 100% private & free",

    description:
      "Every everyday PDF job in one app — compress, merge, split, organise, password-protect, rotate, and convert to and from images. Docqora does it all on your phone: it has no internet permission, so your documents are never uploaded anywhere.",

    seoTitle: "Docqora — Offline PDF Tools for Android: Compress, Merge, Split",
    seoDescription:
      "Compress, merge, split, organise, protect and convert PDFs on Android without uploading them. Docqora works fully offline. Free, no sign-up, no ads.",
    schemaDescription:
      "Docqora is a free offline PDF toolkit for Android. Compress PDFs, merge several files into one, split by page range, organise pages, add or remove a password, rotate pages, convert images to PDF and export PDF pages as JPG or PNG. All processing happens on the device — the app has no internet permission, so documents are never uploaded. No account, no ads, light and dark themes with Material You colours.",

    keywords: [
      "docqora", "offline pdf tools android", "compress pdf offline",
      "merge pdf android", "split pdf android", "pdf password protect android",
      "image to pdf android", "pdf to jpg android", "rotate pdf pages",
      "organise pdf pages", "private pdf app", "pdf tools no upload",
      "free pdf toolkit android", "reduce pdf size android",
    ],

    intro: [
      "Most free PDF tools are websites: you upload a contract, a payslip or an ID scan to someone else's server and hope it gets deleted. Docqora does the same jobs on your phone instead. It doesn't request the internet permission at all, so a file you open in Docqora has no way to leave the device.",
      "Compress a scan so it fits an upload limit, stitch receipts into one file, pull three pages out of a long report, or lock a document with a password — each tool is one tap from the home screen.",
    ],

    features: [
      {
        title: "Compress and convert",
        body: "Shrink large PDFs for email and upload forms, and move between PDFs and images.",
        bullets: [
          "Compress PDF — light, balanced or strong",
          "Image to PDF from JPG, PNG and more",
          "PDF to Image — export pages as JPG or PNG",
        ],
      },
      {
        title: "Merge, split and organise",
        body: "Build exactly the document you need from the pages you have.",
        bullets: [
          "Merge several PDFs into one, in the order you choose",
          "Split by page ranges, every N pages, or one file per page",
          "Reorder, delete, duplicate or insert pages",
          "Rotate sideways or upside-down scans",
        ],
      },
      {
        title: "Protect",
        body: "Add a password to a confidential PDF, or remove one from a file you own.",
      },
      {
        title: "Private by construction",
        body: "Docqora has no internet permission. Processing happens on your phone, nothing is uploaded, and there is no account to create.",
        bullets: [
          "Works without Wi-Fi or mobile data",
          "No sign-up, no login",
          "No ads",
          "Light, dark and Material You themes",
        ],
      },
    ],

    faq: [
      {
        q: "Does Docqora upload my PDFs?",
        a: "No. Docqora does not request the internet permission, so it cannot upload anything. Every tool — compress, merge, split, protect, convert — runs on your phone.",
      },
      {
        q: "How do I compress a PDF on Android without uploading it?",
        a: "Open Docqora, tap Compress, pick the PDF and choose a strength. The smaller copy is saved on your phone. Because nothing is uploaded, it works the same with no connection at all.",
      },
      {
        q: "Can I merge PDFs in a specific order?",
        a: "Yes. Tap Merge, choose the files, and reorder them before you combine them into a single PDF.",
      },
      {
        q: "Can Docqora remove a password from a PDF?",
        a: "Yes, for files you own and know the password to. Docqora can also add a password to protect a PDF before you share it.",
      },
      {
        q: "Is Docqora free?",
        a: "Yes. Docqora is free on Google Play, with no ads and no sign-up.",
      },
    ],

    screenshots: [
      { src: "/apps/docqora/01.jpg", alt: "Docqora home screen with compress, merge, split, organise, convert and protect tools" },
      { src: "/apps/docqora/02.jpg", alt: "Docqora merging several PDFs into one file" },
      { src: "/apps/docqora/03.jpg", alt: "Docqora split options — by page range, every N pages or one file per page" },
      { src: "/apps/docqora/04.jpg", alt: "Docqora organised PDF saved on the phone, never uploaded" },
      { src: "/apps/docqora/05.jpg", alt: "Docqora in light and dark mode" },
      { src: "/apps/docqora/06.jpg", alt: "Docqora settings for theme, save folder and compression defaults" },
    ],
  },

  /* ─────────────────────────────────────────────────────── ReceiptVault ── */
  {
    id: "receiptvault",
    title: "ReceiptVault: Warranty Tracker",
    shortName: "ReceiptVault",
    genre: "Productivity",
    accent: "green",
    packageName: "com.duostrick.receiptvault",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.duostrick.receiptvault",
    iconUrl: "/receiptvault-icon.png",
    operatingSystem: "Android",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Productivity",
    storeUpdated: "2026-08-10",
    containsAds: false,
    postTags: ["receiptvault", "warranty-tracker"],
    tagline: "Scan receipts, track warranties & bills. OCR + expiry reminders. Offline.",

    description:
      "A warranty tracker and receipt organiser. Snap a bill and on-device OCR fills in the brand, model, date, price and warranty period; ReceiptVault then reminds you 30, 14, 7 and 1 day before the warranty runs out. Works offline, no ads.",

    seoTitle: "ReceiptVault — Warranty Tracker & Receipt Scanner for Android",
    seoDescription:
      "Scan receipts, track warranties and get reminded before they expire. On-device OCR, offline storage and search. ReceiptVault for Android — no ads.",
    schemaDescription:
      "ReceiptVault is a warranty tracker, receipt scanner and bill organiser for Android. Photograph a receipt or warranty card and on-device OCR reads the brand, model, serial number, purchase date, price and warranty period. Reminders fire 30, 14, 7 and 1 day before a warranty, AMC or policy expires. Search every field, filter by active, expiring or expired, and choose from six light and dark themes. Data is stored on the device, with optional encrypted backup.",

    keywords: [
      "receiptvault", "warranty tracker app", "receipt scanner android",
      "warranty reminder app", "bill organiser android", "receipt organizer offline",
      "track appliance warranty", "amc reminder app", "warranty card app",
      "ocr receipt scanner", "expiry reminder app android", "invoice tracker",
    ],

    intro: [
      "The warranty card is in a drawer, the invoice is somewhere in your email, and the fridge has just stopped working. ReceiptVault keeps all of that in one searchable place and tells you before a warranty runs out — while a repair is still free.",
      "Photograph a receipt and on-device text recognition reads the details for you. Add phones, laptops, appliances, vehicle insurance, AMC contracts or document renewals, and let the reminders do the remembering.",
    ],

    features: [
      {
        title: "Snap, and the details fill in",
        body: "On-device OCR reads printed receipts, digital invoices, warranty cards and even handwritten notes — without sending them to a cloud service.",
        bullets: [
          "Brand name and model number",
          "Purchase date and price",
          "Serial number",
          "Warranty period",
        ],
      },
      {
        title: "Reminders before it's too late",
        body: "Reminders fire 30, 14, 7 and 1 day before any warranty, AMC or policy expires — even when the app is closed. Tap one to jump straight to the receipt.",
      },
      {
        title: "Track more than gadgets",
        body: "Anything with a receipt or an expiry date belongs in the vault.",
        bullets: [
          "Electronics — phones, laptops, TVs, earphones",
          "Home appliances — AC, washing machine, fridge, geyser",
          "Vehicle service, insurance and PUC renewals",
          "Health insurance, memberships and document expiries",
          "Online-order invoices",
        ],
      },
      {
        title: "Find any receipt fast",
        body: "Full-text search across product, brand, model, serial number and notes. Filter by active, expiring or expired, and sort by date, price or category.",
      },
      {
        title: "Your data stays with you",
        body: "Receipts are stored on your device and the app works offline. Backup is optional and encrypted.",
        bullets: [
          "No ads",
          "No subscription",
          "Six light and dark themes",
        ],
      },
    ],

    faq: [
      {
        q: "How does ReceiptVault read my receipts?",
        a: "It uses on-device text recognition. Take a photo of a receipt, invoice or warranty card and ReceiptVault fills in the brand, model, serial number, purchase date, price and warranty period for you to confirm.",
      },
      {
        q: "When will ReceiptVault remind me?",
        a: "30, 14, 7 and 1 day before a warranty, AMC or policy expires. Notifications arrive even when the app is closed, and tapping one opens that receipt.",
      },
      {
        q: "Does ReceiptVault work offline?",
        a: "Yes. Your receipts are stored on your device and scanning, search and reminders all work without a connection. Backup is optional.",
      },
      {
        q: "Does ReceiptVault have ads or a subscription?",
        a: "No ads and no subscription. ReceiptVault is free to download; Google Play lists optional in-app purchases.",
      },
    ],

    screenshots: [
      { src: "/apps/receiptvault/01.jpg", alt: "ReceiptVault onboarding — lost receipts cost you money" },
      { src: "/apps/receiptvault/02.jpg", alt: "ReceiptVault home with warranties expiring soon and categories" },
      { src: "/apps/receiptvault/03.jpg", alt: "ReceiptVault warranty reminders 30, 7 and 1 day before expiry" },
      { src: "/apps/receiptvault/04.jpg", alt: "ReceiptVault — private, offline, free to start" },
      { src: "/apps/receiptvault/05.jpg", alt: "ReceiptVault product details with warranty and purchase information" },
      { src: "/apps/receiptvault/06.jpg", alt: "ReceiptVault search with active, expiring and expired filters" },
      { src: "/apps/receiptvault/07.jpg", alt: "ReceiptVault scan receipt, gallery upload or manual entry" },
      { src: "/apps/receiptvault/08.jpg", alt: "ReceiptVault six light and dark themes" },
    ],
  },

  /* ──────────────────────────────────────────────────────── 2048 Offline ── */
  {
    id: "2048-offline",
    title: "2048 Offline: Merge Numbers",
    shortName: "2048 Offline",
    alternateName: "2048 Puzzle Game Offline",
    genre: "Puzzle",
    accent: "amber",
    packageName: "com.duostrick.infinitygrid",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.duostrick.infinitygrid",
    iconUrl: "/2048-icon.png",
    operatingSystem: "Android 8.0+",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Puzzle",
    storeUpdated: "2026-04-05",
    containsAds: true,
    postTags: ["2048", "2048-puzzle-game", "2048-offline", "2048-infinite-grid"],
    tagline: "Offline 2048 puzzle game! Merge numbers on an infinite grid & train your brain.",

    description:
      "Merge numbers, chase bigger tiles and play 2048 offline on an infinite grid. Most 2048 games stop at the 2048 tile — this one does not. Unlock special powers and new boards, climb a global leaderboard, and play with no wifi needed.",

    seoTitle: "2048 Offline: Merge Numbers — Infinite Grid 2048 Puzzle Game for Android",
    seoDescription:
      "Play 2048 offline on an infinite grid. Merge numbers past 2048 to 4096, 8192 and beyond, unlock special powers and climb the leaderboard. No wifi needed.",
    schemaDescription:
      "2048 Offline: Merge Numbers is an infinite twist on the classic 2048 tile-merging number puzzle. The grid never ends, so you can merge past 2048 to 4096, 8192, 16384 and beyond. Includes special powers, unlockable boards, daily and lifetime quests, a global leaderboard with friend challenges, and light and dark themes. Plays completely offline with no internet required.",

    keywords: [
      "2048 offline", "2048 merge numbers", "2048 puzzle game offline",
      "2048 infinite grid", "2048 game android", "number puzzle android",
      "tile merging game", "offline puzzle game no wifi", "brain game android",
      "math puzzle game android", "2048 leaderboard", "2048 strategy",
      "free puzzle game android", "logic game offline",
    ],

    intro: [
      "Swipe to merge matching tiles, build 128, 512, 1024, 2048 — and then keep going. There is no fixed ceiling here: reach 4096, 8192, 16384 and beyond for as long as your strategy holds.",
      "The whole game plays offline. No internet and no loading screens.",
    ],

    features: [
      {
        title: "Infinite 2048 gameplay",
        body: "Most 2048 games stop at the 2048 tile. This one does not. The infinite grid keeps the number merge running, so every session becomes a fresh high score chase instead of a finish line.",
      },
      {
        title: "Offline — no wifi needed",
        body: "Play the whole game offline. A proper offline game for flights, commutes, waiting rooms and low-signal days.",
      },
      {
        title: "Brain game & logic training",
        body: "A simple number puzzle with real depth. Every swipe changes the board, so you plan ahead, keep your biggest tile anchored and think two moves deep.",
      },
      {
        title: "Special powers & new boards",
        body: "Unlock new boards and special powers to rescue a crowded grid and push your high score higher. Merge smarter, not just faster.",
      },
      {
        title: "Leaderboard, quests and themes",
        body: "Something to come back for beyond the next run.",
        bullets: [
          "Global leaderboard and friend challenges",
          "Daily quests and long-term lifetime goals",
          "Light and dark themes",
          "Tune appearance, gameplay and data settings",
        ],
      },
      {
        title: "How to play",
        body: "Easy to pick up, hard to put down.",
        bullets: [
          "Swipe up, down, left or right to slide every tile",
          "Two matching numbers merge into one bigger number",
          "Keep your highest tile in a corner",
          "Leave yourself an escape move before the grid fills",
          "Keep merging — the grid never runs out of numbers",
        ],
      },
    ],

    faq: [
      {
        q: "How do I reach a high tile in 2048 Offline?",
        a: "Use the snake pattern strategy: keep your highest tile in one corner and build descending values in rows that snake back and forth. Swipe mostly in two directions — pick a corner and commit. Merge small tiles before they pile up, and never move your highest tile out of its corner.",
      },
      {
        q: "Does the game require an internet connection?",
        a: "No. 2048 Offline works completely without an internet connection, so you can play anywhere. The global leaderboard syncs when you next connect to Wi-Fi or mobile data.",
      },
      {
        q: "What makes this different from other 2048 games?",
        a: "The grid never ends. Classic 2048 is a finite game that stops at the 2048 tile, while the infinite grid keeps expanding — so the run continues as long as your strategy holds, past 4096, 8192 and 16384.",
      },
      {
        q: "What are special powers for?",
        a: "Special powers and unlockable boards let you rescue a crowded grid rather than losing the run outright, which is what lets a good session keep going long enough to reach the higher tiles.",
      },
    ],

    screenshots: [
      { src: "/apps/2048-offline/01.jpg", alt: "2048 Offline infinite grid gameplay with merged number tiles" },
      { src: "/apps/2048-offline/02.jpg", alt: "2048 Offline board showing high-value tiles" },
      { src: "/apps/2048-offline/03.jpg", alt: "2048 Offline special powers to rescue a crowded grid" },
      { src: "/apps/2048-offline/04.jpg", alt: "2048 Offline global leaderboard and friend challenges" },
      { src: "/apps/2048-offline/05.jpg", alt: "2048 Offline daily and lifetime quests" },
      { src: "/apps/2048-offline/06.jpg", alt: "2048 Offline light and dark themes" },
    ],
  },
];

export function getAllApps(): AppEntry[] {
  return apps;
}

export function getAppById(id: string): AppEntry | null {
  return apps.find((a) => a.id === id) ?? null;
}

/** The app a blog post is about, matched on its tags */
export function getAppForPostTags(tags: string[]): AppEntry | null {
  return apps.find((a) => a.postTags.some((t) => tags.includes(t))) ?? null;
}

export function getAllAppIds(): { slug: string }[] {
  return apps.map((a) => ({ slug: a.id }));
}

export default apps;
