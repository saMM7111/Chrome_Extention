# 🎨 Focus Mode — YouTube Thumbnail Replacer

A fun little Chrome Extension that messes around with YouTube. Built just for the heck of it. 😄

---

## What does it do?

- Injects itself into YouTube and **replaces video thumbnails** with a custom image
- Has a popup called **Padai Mode** (படை) with a green button that says **"Make it Blue!"**
- Clicking the button triggers a visual change on the active YouTube tab
- Remembers its state using `chrome.storage` so it doesn't forget what you did

---

## Files

| File | What it does |
|---|---|
| `manifest.json` | The config — tells Chrome what the extension is and what it can do |
| `popup.html` | The little UI that pops up when you click the extension icon |
| `popup.js` | Handles the button click and talks to the content script |
| `content.js` | Runs inside YouTube and does the actual DOM magic |
| `images/thumbnail1.png` | The replacement thumbnail |

---

## How to load it

1. Clone / download this repo
2. Open Chrome → go to `chrome://extensions/`
3. Toggle on **Developer Mode** (top right)
4. Click **Load unpacked** → select this folder
5. Go to YouTube, click the extension icon, hit the button

That's it!

---

## Tech

Just plain HTML, CSS, and vanilla JavaScript. No libraries, no build step, no nonsense. Chrome Extension Manifest V3.

---

## Why?

Wanted to see how Chrome Extensions actually work. Turns out they're just files — a JSON config, some JS, and an HTML popup. Pretty cool once it clicks. Built this for fun, not for the Chrome Web Store. 🙂
