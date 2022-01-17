<script lang="ts">
	import InvertedButton from '$lib/components/shared/InvertedButton.svelte';
	import { onMount } from 'svelte';
	import Nft from '$lib/contracts/nft';

	let tokensMinted = 0;
	let mintAmount = 1;
	let minting = false;
	let minted = false;

	$: mintString = minted ? 'Minted!' : !minting ? `MINT ${mintAmount}` : 'Minting...';

	async function mintToken() {
		minting = true;
		const tx = await Nft.mint(mintAmount);

		await tx.wait();
		minting = false;
		minted = true;

		setTimeout(() => {
			minted = false;
		}, 2000);
	}

	onMount(() => {
		setInterval(async () => {
			tokensMinted = await Nft.getMinted();
		}, 500);
	});
</script>

<div class="container">
	<h3>Tokens minted: {tokensMinted}/4000</h3>
	<br />

	<input class="slider" type="range" min="1" max="19" bind:value={mintAmount} />
	<h2>slide to mint</h2>

	<div class="but">
		<InvertedButton on:click={() => mintToken()}>{mintString}</InvertedButton>
	</div>
</div>

<style lang="scss">
	.container {
		margin-top: -48px;

		display: flex;
		flex-flow: column;
		align-items: center;

		h3 {
			margin: 8px;

			font-size: 56px;

			@media screen and (max-width: 720px) {
				font-size: 32px;
			}
		}

		// .grid {
		// 	display: grid;

		// 	grid-template-columns: repeat(2, 256px);
		// 	grid-template-rows: repeat(2, 1fr);
		// 	gap: 80px 32px;
		// 	justify-items: stretch;
		// 	align-items: stretch;
		// }
	}

	input[type='range'] {
		-webkit-appearance: none; /* Hides the slider so that custom slider can be made */
		width: 100%; /* Specific width is required for Firefox. */
		background: transparent; /* Otherwise white in Chrome */
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	input[type='range']:focus {
		outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
	}

	input[type='range']::-webkit-slider-runnable-track {
		cursor: pointer;

		width: 100%;
		height: 16px;
		border-radius: 8px;

		background: white;
	}

	input[type='range']::-moz-range-track {
		cursor: pointer;

		width: 100%;
		height: 16px;
		border-radius: 8px;

		background: white;
	}

	input[type='range']::-webkit-slider-thumb {
		/* Override default look */
		-webkit-appearance: none;
		appearance: none;

		cursor: pointer;

		margin-top: -8px;
		width: 32px;
		height: 32px;
		border-radius: 16px;

		background: #8ceb27;
	}

	input[type='range']::-moz-range-thumb {
		-webkit-appearance: none;
		appearance: none;

		cursor: pointer;

		margin-top: -8px;
		width: 32px;
		height: 32px;
		border-radius: 16px;

		background: #8ceb27;
	}

	// .but {
	// 	@media screen and (min-width: 720px) {
	// 		margin-top: 80px;
	// 	}
	// }
</style>
