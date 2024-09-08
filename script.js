function copyWalletAddress() {
    const walletAddress = document.getElementById("wallet-address");
    const tempInput = document.createElement("input");
    tempInput.value = walletAddress.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Wallet address copied to clipboard!");
}