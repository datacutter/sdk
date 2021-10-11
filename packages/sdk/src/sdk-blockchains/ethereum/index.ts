import {IRaribleSdk} from "../../domain";
import {EthereumWallet} from "@rarible/sdk-wallet/src";
import {createRaribleSdk} from "@rarible/protocol-ethereum-sdk";
import {Mint} from "./mint";

export function createEthereumSdk(wallet: EthereumWallet): IRaribleSdk {
	const sdk = createRaribleSdk(wallet.ethereum, wallet.network)

	return {
		nft: {
			mint: new Mint(sdk)
		}
	}
}
