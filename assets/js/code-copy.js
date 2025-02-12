document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach((block) => {
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.classList.add("copy-button");
        block.appendChild(button);

        button.addEventListener("click", function () {
            const code = block.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => {
                    button.innerText = "Copy";
                }, 1500);
            });
        });
    });
});
