# 🎨 Focus Mode — YouTube Thumbnail Replacer Chrome Extension

> A Chrome Extension (Manifest V3) that replaces YouTube thumbnails and applies a custom visual mode directly in the browser — built to learn how Chrome Extensions work from the ground up.

---

## 🧭 About This Project

**Padai Mode** is a lightweight Chrome Extension that runs on YouTube, replacing video thumbnails with a custom image and toggling a "blue mode" on the page via a popup. The name *Padai* (படை) reflects a personal touch — this was a hands-on project to understand browser extension architecture, content scripts, and the Chrome Extension APIs without any frameworks or build tools.

---

## ✨ Features

- 🖼️ **Thumbnail Replacement** — Swaps YouTube video thumbnails with a custom image (`thumbnail1.png`) using a content script injected into the page
- 🔵 **"Make it Blue!" Toggle** — A popup button that triggers a visual transformation on the active YouTube tab
- 💾 **State Persistence** — Uses `chrome.storage` to remember toggle state across page reloads
- ⚡ **Manifest V3** — Built on the latest Chrome Extension platform standard

---

## 🧠 What I Learned

### 📄 Manifest V3 & Extension Structure
- How `manifest.json` is the single source of truth for a Chrome Extension — it declares permissions, scripts, icons, and popup behaviour
- The key difference between **Manifest V2 and V3**: background service workers replace persistent background pages, stricter CSP, and `web_accessible_resources` now requires explicit match patterns
- How to declare `content_scripts` with `matches` patterns to target specific URLs like `*://*.youtube.com/*`
- How `web_accessible_resources` works — any file the content script needs to inject (like an image) must be explicitly declared here or the browser blocks it

### 📜 Content Scripts
- How content scripts run **inside the context of a web page** but are **isolated from the page's own JavaScript** (separate JS world)
- How to use `document.querySelectorAll()` to find and manipulate DOM elements on a live website like YouTube
- How to replace `src` attributes of `<img>` elements to swap thumbnails dynamically
- Why timing matters: using `run_at: "document_idle"` ensures the DOM is fully loaded before the script runs
- How YouTube's dynamic rendering (it's a Single Page App) requires `MutationObserver` to detect new thumbnails as the user navigates

### 🪟 Popup UI (popup.html + popup.js)
- How the popup is just a regular HTML page that lives inside the extension — no special APIs needed for the UI itself
- How `popup.js` communicates with the active tab by sending messages via `chrome.tabs.sendMessage()`
- The difference between the **popup context** and the **content script context** — they are separate JS environments that talk via message passing
- How to style a minimal, functional popup with plain CSS (fixed width, button states, hover effects)

### 💬 Message Passing
- How Chrome Extensions use a **message passing** system to communicate between the popup, content scripts, and background
- Using `chrome.runtime.sendMessage()` from the popup and `chrome.runtime.onMessage.addListener()` in the content script to coordinate actions
- Why you can't directly call content script functions from the popup — the messaging API is the bridge

### 💾 chrome.storage API
- How `chrome.storage.local` differs from `localStorage` — it's accessible across the popup, background, and content scripts, whereas `localStorage` is scoped to a single page context
- How to `get` and `set` values asynchronously with callbacks
- Using storage to persist the enabled/disabled toggle state so the extension "remembers" its mode across YouTube page navigations

### 🔐 Permissions Model
- How Chrome Extensions follow a **least-privilege** model — you must explicitly declare what your extension can access
- Why `tabs` permission is needed to query and send messages to the active tab
- How to understand what each permission exposes and why unnecessary permissions get extensions rejected from the Chrome Web Store

### 🗂️ Project File Structure
- How a Chrome Extension has no build step — it's just files loaded directly by the browser
- The role of each file:
  - `manifest.json` — configuration and wiring
  - `popup.html` — the clickable toolbar UI
  - `popup.js` — popup logic and tab communication
  - `content.js` — DOM manipulation on the target page
  - `images/` — assets made accessible to the content script

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript (Vanilla) | Popup logic & content script |
| HTML / CSS | Popup UI |
| Chrome Extensions API (MV3) | tabs, storage, runtime messaging |
| JSON | Extension manifest configuration |

---

## 📁 Project Structure

```
Chrome_Extention/
├── manifest.json       # Extension config — permissions, scripts, popup
├── popup.html          # Toolbar popup UI ("Padai mode")
├── popup.js            # Popup button logic & tab messaging
├── content.js          # Injected into YouTube — DOM manipulation
└── images/
    └── thumbnail1.png  # Replacement thumbnail image
```

---

## 🚀 How to Install & Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/saMM7111/Chrome_Extention.git
   ```

2. **Open Chrome and go to Extensions**
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** (toggle in the top right)

4. **Click "Load unpacked"** and select the cloned folder

5. **Navigate to YouTube** — the extension will automatically activate

6. **Click the extension icon** in the toolbar to open the Padai Mode popup and hit **"Make it Blue!"**

---

## 💡 Key Takeaways

- **Extensions are just files** — no framework, no bundler required to get started. The browser is the runtime.
- **Content scripts are sandboxed** — they can touch the DOM but not the page's JS variables. Message passing is the only bridge.
- **Manifest V3 is stricter for good reason** — the new model reduces the attack surface of extensions significantly.
- **YouTube is a SPA** — thumbnail replacement on a dynamically rendered page requires observing DOM mutations, not just running once on load.
- **`chrome.storage` > `localStorage`** — for extensions, always use `chrome.storage` so state is shared across all extension contexts.

---

## 📄 License

This project is open source. Feel free to fork and experiment.
