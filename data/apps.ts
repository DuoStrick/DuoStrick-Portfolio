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
    tagline: "All-format video & music player with equalizer & volume boost. Offline, no ads.",

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
      "The whole game plays offline. No internet, no loading screens, no interruptions.",
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
