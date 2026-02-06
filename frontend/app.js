import { showConnect } from "@stacks/connect";
import { makeContractCall } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

document.getElementById("connect").onclick = () => {
  showConnect({
    appDetails: {
      name: "Stacks Donation DApp",
      icon: window.location.origin + "/logo.png",
    },
  });
};

document.getElementById("donate").onclick = async () => {
  alert("Next step: wire real donate tx after contract deploy");
};
  
