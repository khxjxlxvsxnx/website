(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Woah babe you just misclicked",
    "It's okay to misclick 2 times babe",
    "But misclicking 3 times BABE!!",
    "Come on babe you got this",
    "I believe in you babygurll, it's the green button you wanna click",
    "I know you wanna click the green button",
    "If you keep clicking red I will cry babe",
    "No fr I will cry",
    "BABE please say yes to your baby boy",
    "🥹🥹",
    "😔😔😔",
    "😔...",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.noButton');
    const yesButton = document.querySelector('.yesButton');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.75}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}