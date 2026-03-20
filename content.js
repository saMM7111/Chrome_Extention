const imageURL = chrome.runtime.getURL("images/thumbnail1.png");
let observer = null;


function isYouTubeThumbnail(img) {
    return (
        img.src.includes("ytimg.com") ||
        img.src.includes("i.ytimg.com") ||
        (img.srcset && img.srcset.includes("ytimg.com"))
    );
}

function replaceThumbnails() {
    document.querySelectorAll("img").forEach((img) => {


        if (img.dataset.replaced === "true") return;

        if (!isYouTubeThumbnail(img)) return;

        img.src = imageURL;
        img.srcset = imageURL;
        img.dataset.replaced = "true";
    });
}

function start() {
    replaceThumbnails();

    if (observer) observer.disconnect();

    observer = new MutationObserver(() => {
        replaceThumbnails();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

function stop() {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
}


chrome.storage.sync.get({ enabled: true }, (res) => {
    if (res.enabled) start();
});

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "enable") start();
    if (msg.action === "disable") stop();
});