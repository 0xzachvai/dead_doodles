<script>
	import Content from '$lib/components/layout/Content.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import MintSection from '$lib/components/MintSection.svelte';
	import InvertedButton from '$lib/components/shared/InvertedButton.svelte';
	import Nft from '$lib/contracts/nft';

	let connected = false;

	async function connectWallet() {
		await Nft.connectWallet();
		connected = true;
	}
</script>

<Header />

<div class="background-one">
	<Content>
		<div class="section section-title">
			<h1>Undead Doodles</h1>

			{#if !connected}
				<InvertedButton on:click={connectWallet}>CONNECT WALLET</InvertedButton>
			{:else}
				<MintSection />
			{/if}
		</div>
	</Content>
</div>

<div class="background-two">
	<Content>
		<div class="section">
			<h3>A COLLECTION OF 4,000 UNDEAD DOODLE NFTS ON THE ETHEREUM BLOCKCHAIN</h3>
			<div class="nft-row">
				<img src="/nfts/nft1.jpeg" />
				<img src="/nfts/nft6.jpeg" />
				<img src="/nfts/nft9.jpeg" />
			</div>
		</div>
	</Content>
</div>

<div class="background-three">
	<Content>
		<div class="section section-undead">
			<h2>Unleash the Undead</h2>

			<h3 style="color: white">SUPPLY OF 4,000 UNDEAD DOODLES</h3>
			<h3 style="color: white">20 MINTS PER TRANSACTION, FIRST 1,000 ARE FREE</h3>
			<h3 style="color: white">REST ARE SOLD AT 0.023 ETH</h3>
		</div>
	</Content>
</div>

<div class="background-four">
	<div class="section section-roadmap">
		<Content>
			<h2>Roadmap</h2>

			<div>
				<img src="/bone-solid.png" />
				<p style="color: white">UNDEAD DOODLES LAUNCH – 1,000 FREE MINTS, 4,000 TOTAL</p>
			</div>

			<div>
				<img src="/bone.png" />
				<p style="color: white">
					OPENSEA ROYALTY DISTRIBUTION – WEEKLY ROYALTY DISTRIBUTION TO UNDEAD HOLDERS
				</p>
			</div>

			<div>
				<img src="/bone.png" />
				<p style="color: white">INVESTING IN COMMUNITY PROJECTS</p>
			</div>

			<div>
				<img src="/bone.png" />
				<p style="color: white">More utility to be announced based off of community polls</p>
			</div>

			<div>
				<img src="/bone.png" />
				<p style="color: white">A percentage of our earnings will be donated to the Doodle Bank</p>
			</div>
		</Content>
	</div>
</div>

<div class="section section-team">
	<Content>
		<h2>Undead Team</h2>

		<div class="team-row-one">
			<div class="teammate">
				<img src="/nfts/nft5.jpeg" />
				<p>ZOOZ</p>
			</div>
			<div class="teammate">
				<img src="/nfts/nft11.jpeg" />
				<p>Minccino</p>
			</div>
			<div class="teammate">
				<img src="/nfts/nft8.jpeg" />
				<p>ZAH</p>
			</div>
		</div>

		<div class="team-row-two">
			<div class="teammate">
				<img src="/nfts/nft12.jpeg" />
				<p>ROSARIO</p>
			</div>
			<div class="teammate">
				<img src="/nfts/nft10.jpeg" />
				<p>CASHAWI</p>
			</div>
		</div>
	</Content>
</div>

<Footer />

<style lang="scss">
	@font-face {
		font-family: 'Franxurter';
		src: url('/fonts/FranxurterTotallyFat-X3G4Z.ttf') format('truetype');
	}

	:global(body) {
		margin: 0;
		background: #262d37;

		text-align: center;
	}

	:global(*) {
		color: #92d050;
		font-family: 'Franxurter', Helvetica, sans-serif;
		text-transform: uppercase;
	}

	:global(h1, h2, h3, p) {
		line-height: 1.25;
	}

	.desktop-only {
		@media screen and (max-width: 720px) {
			display: none;
		}
	}

	.mobile-only {
		@media screen and (min-width: 720px) {
			display: none;
		}
	}

	h1 {
		font-size: 140px;

		@media screen and (max-width: 720px) {
			font-size: 72px;
		}
	}

	h2 {
		font-size: 104px;

		@media screen and (max-width: 720px) {
			font-size: 52px;
		}
	}

	h3 {
		font-size: 56px;

		@media screen and (max-width: 720px) {
			font-size: 32px;
		}
	}

	.background-one {
		background-image: url('/background1.jpeg');
		background-position-y: bottom;
		background-size: cover;
		background-repeat: no-repeat;

		@media screen and (max-width: 720px) {
			background-size: contain;
		}
	}

	.background-two {
		background-image: url('/background2.jpeg');
		background-repeat: repeat-y;
		background-size: cover;

		border-bottom: 4px solid #8ceb27;

		@media screen and (max-width: 720px) {
			background-size: contain;
		}
	}

	.background-three {
		background-image: url('/background3.jpeg');
		background-position: bottom;
		background-repeat: no-repeat;
		background-size: cover;

		@media screen and (max-width: 720px) {
			background-size: contain;
		}
	}

	.background-four {
		background-image: url('/background4.jpeg');
		background-repeat: repeat-y;
		background-size: cover;

		@media screen and (max-width: 720px) {
			background-size: contain;
		}
	}

	.section {
		display: flex;
		flex-direction: column;
		align-items: stretch;

		min-height: 95vh;

		@media screen and (max-width: 720px) {
			padding: 0 24px;
		}
	}

	.section-title {
		align-items: center;
		height: calc(100vh - 129px);

		position: relative;

		h1 {
			margin-top: 48px;
		}

		img {
			position: absolute;
			bottom: 30vh;

			height: 25vh;

			&.left {
				left: 10vw;
			}

			&.right {
				right: 10vw;
			}

			@media screen and (max-width: 720px) {
				height: 18vh;

				&.left {
					left: 2vw;
				}

				&.right {
					right: 2vw;
				}
			}
		}
	}

	.nft-row {
		display: flex;
		flex-flow: row wrap;

		justify-content: space-around;
		margin: 0 -16px;
		margin-top: 32px;

		img {
			flex-grow: 1;

			min-width: 240px;
			max-width: 300px;

			margin: 32px;

			@media screen and (max-width: 720px) {
				max-width: 80vw;
			}

			border: 3px solid #92d050;
			border-radius: 32px;

			margin: 32px 16px;
		}
	}

	.section-undead {
		h2 {
			// margin-top: 16px;
			margin-bottom: 48px;
		}

		h3 {
			margin-top: 0;
			margin-bottom: 32px;
		}
	}

	.section-roadmap {
		h2 {
			color: #262d37;
			margin-bottom: 8px;

			@media screen and (max-width: 720px) {
				margin-bottom: 32px;
			}
		}

		div {
			display: flex;
			align-items: center;

			@media screen and (max-width: 720px) {
				flex-flow: row wrap;
				justify-content: center;
			}

			img {
				width: 200px;
				margin: 0 64px;

				@media screen and (max-width: 720px) {
					width: 50%;
				}
			}

			p {
				font-size: 40px;
				text-align: start;

				@media screen and (max-width: 720px) {
					font-size: 24px;
					text-align: center;
				}
			}
		}
	}

	.section-team {
		h2 {
			margin-bottom: 16px;
		}

		.team-row-one {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;

			margin: 0 -16px;
		}

		.team-row-two {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			padding: 0 calc(33% / 2);

			@media screen and (max-width: 720px) {
				padding: 0;
			}

			margin: 0 -16px;
		}

		.teammate {
			position: relative;

			flex-grow: 1;
			min-width: 240px;
			max-width: 300px;

			margin: 32px;

			@media screen and (max-width: 720px) {
				margin: 32px 16px;
			}

			img {
				width: 100%;

				border: 3px solid #92d050;
				border-radius: 32px;
			}

			p {
				position: absolute;
				bottom: 7px;
				left: 3px;
				right: 3px;

				border-radius: 29px;

				text-align: center;
				width: fit-content;
				background: #262d37;

				margin: 0;
				padding: 4px 0;

				width: calc(100%);

				font-size: 56px;
			}
		}
	}
</style>
