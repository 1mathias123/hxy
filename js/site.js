const hxy_to_hxb_multiplier = 1e3;
const hxy_multiplier = 1e8; // ERC20 Decimals
const hxb_multiplier = 1e8; // ERC20 Decimals
const contract_abi = [
  {
    inputs: [
      { internalType: 'address', name: '_hxy', type: 'address' },
      { internalType: 'address', name: '_hxb', type: 'address' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'uint256', name: 'tokens', type: 'uint256' },
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'address', name: 'receiver', type: 'address' },
        ],
        indexed: false,
        internalType: 'struct CrossChainTransfer.TransferGroup',
        name: 'transferGroup',
        type: 'tuple',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'receiver', type: 'address' },
    ],
    name: 'triggerTransfer',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'HXB',
    outputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'HXBCost',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'HXY',
    outputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'nextId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'ready',
    outputs: [
      { internalType: 'bool', name: 'hxy_ready', type: 'bool' },
      { internalType: 'bool', name: 'hxb_ready', type: 'bool' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'transferGroups',
    outputs: [
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'receiver', type: 'address' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
const hxy_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const hxb_abi = hxy_abi;

const contract_address = '0xB05a9Fe7c4C3Ee7F9F3af9da1e3A9e6B99079422';
const hxy_address = '0x42f845F39CcCa0f677E8e02bb8A1B9A9d6f63C42';
const hxb_address = '0x906Ff2F5a7b4b819b0f52F56ea06C6E6b19C4cF7';

// window.addEventListener('load', async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     window.web3 = new Web3(ethereum);
//     try {
//       await ethereum.enable();
//       // Acccounts now exposed
//       web3.eth.sendTransaction({
//         /* ... */
//       });
//     } catch (error) {
//       // User denied account access...
//     }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//     window.web3 = new Web3(web3.currentProvider);
//     // Acccounts always exposed
//     web3.eth.sendTransaction({
//       /* ... */
//     });
//   }
//   // Non-dapp browsers...
//   else {
//     console.log(
//       'Non-Ethereum browser detected. You should consider trying MetaMask!'
//     );
//   }
// });

const setConnected = () => $('#connect-mm span').text('Connected');

(() => {
  $('#connect-mm').click(async () => {
    console.log(window.ethereum);
    if (!window.ethereum) {
      alert('Install/Activate MetaMask');
      return;
    }

    if (window.ethereum.isConnected()) {
      console.log('connected');
      setConnected();
      return;
    } else {
      await window.ethereum.enable();
      setConnected();
      return;
    }
  });

  $('#hxy-input').on('change paste keyup', (val) => {
    $('#hxb-input').val(
      parseFloat($('#hxy-input').val()) * hxy_to_hxb_multiplier
      const hxy_decimals =
      const hxb_decimals =
    );
    return;
  });

  $('#trigger-transfer').click( async () => {
    const receiver = $('#tron-address').val();
    const hxy = parseFloat($('#hxy-input').val());

    if (!receiver || !hxy) {
      alert('Invalid form data');
      return;
    }

    const hxb = hxy * hxy_to_hxb_multiplier;
    const hxy_scaled = hxy * hxy_multiplier;
    const hxb_scaled = hxb * hxb_multiplier:


    const CCT = web3.eth.Contract(contract_abi, contract_address);

    const ready = await CCT.methods.ready(hxy_scaled).call();
    console.log('ready', ready);

    if (true) return; // FIXME

    const HXY = web3.eth.Contract(hxy_abi, hxy_address);
    const HXB = web3.eth.Contract(hxb_abi, hxb_address);

    await HXY.methods.approve(hxy_scaled).send();
    await HXB.methods.approve(hxb_scaled).send();

    // Assuming both were completed
    const transfer = setInterval(() => {

    }, 1000)

    console.log(receiver);
  });
})();
