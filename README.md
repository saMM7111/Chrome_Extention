# 🎨 Focus Mode — YouTube Thumbnail Replacer

> Because why not.

---

## What is this?

A Chrome Extension I built for fun that messes with YouTube thumbnails. Click the little popup, hit **"Make it Blue!"** and watch the chaos unfold. That's it. That's the project.

It injects a content script into YouTube, swaps out thumbnails with a custom image, and has a cute little popup called **Padai Mode** (படை 💪). No frameworks. No build tools. Just vibes and vanilla JS.

---

## Files in this thing

```
├── manifest.json       # the brain
├── popup.html          # the face
├── popup.js            # the hands
├── content.js          # the one doing the dirty work on YouTube
└── images/
    └── thumbnail1.png  # the chaos agent
```

---

## How to run it

1. Clone the repo
2. Go to `chrome://extensions/`
3. Turn on **Developer Mode**
4. Hit **Load unpacked** → pick the folder
5. Go to YouTube
6. Click the extension icon → hit the button
7. Enjoy

---

## Why?

Wanted to see how Chrome Extensions work. Turns out it's just HTML, JS, and a JSON file. No magic.

Also "Padai Mode" is just a fun name. Don't overthink it. 😄

---

## Known issues

- Probably breaks when YouTube updates their DOM (classic)
- Not on the Chrome Web Store, probably never will be
- The button says "Make it Blue!" and I stand by that

---

Built for fun. No serious business here. 🙂
