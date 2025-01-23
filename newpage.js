// Tab functionality: Change the displayed text when clicking the bullet points
const referralMessages = [
    "As a CARMA Rewards Club member, I'm able to access V.I.Pet, hundreds of discounts on big name brands and free monthly giveaways. Use my referral code <b>AIXJQX</b> to get 1 bonus entry when you sign-up from just $2.49/month.<br> Visit <a href='#'>carmaRewards.club</a> today.",
    
    "Join the CARMA Rewards Club and unlock amazing discounts. Use referral code <b>BFGY12</b> for a free entry!<br>Sign up now at <a href='#'>carmaRewards.club</a>.",

    "Become a member today with CARMA Rewards Club! Use my code <b>CDFK34</b> to get started and win free giveaways.<br> Check <a href='#'>carmaRewards.club</a> for more details."
];

function changeTab(index) {
    document.getElementById("referralText").innerHTML = referralMessages[index];

    // Remove active class from all tabs and add to the selected one
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    tabs[index].classList.add("active");
}

// Copy text to clipboard functionality
function copyToClipboard() {
    const text = document.getElementById("referralText").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Text copied to clipboard!");
}
