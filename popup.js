const btn = document.getElementById("toggleBtn");

chrome.storage.sync.get({ enabled: true }, (res) => {
    btn.textContent = res.enabled ? "Disable" : "Enable";
});

btn.addEventListener("click", () => {
    chrome.storage.sync.get({ enabled: true }, (res) => {
        const newState = !res.enabled;

        chrome.storage.sync.set({ enabled: newState });
        btn.textContent = newState ? "Disable" : "Enable";

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: newState ? "enable" : "disable",
            });
        });
    });
});
