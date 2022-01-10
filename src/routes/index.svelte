<script>
	import Header from '$lib/components/layout/Header.svelte';
	import InvertedButton from '$lib/components/shared/InvertedButton.svelte';

	function connectWallet() {
		// alert('Coming soon!');
		showT = true;
		setTimeout(() => {
			showT = false;
		}, 2000);
	}

	let showT = false;
</script>

<div class="content">
	<Header />

	<div class="section section-title">
		<h1>Undead Doodles</h1>

		<div class="hiding-button">
			<InvertedButton on:click={connectWallet}
				>{showT ? 'COMING SOON!' : 'CONNECT WALLET'}</InvertedButton
			>
		</div>
	</div>

	<div class="section">
		<h3>A COLLECTION OF 3,333 UNDEAD DOODLE NFTS ON THE ETHEREUM BLOCKCHAIN</h3>
		<div class="nft-row">
			<img src="/favicon.png" />
			<img src="/favicon.png" />
			<img src="/favicon.png" />
		</div>
	</div>

	<div class="section section-undead">
		<h2>Free or Paid... Undead</h2>

		<h3>10 PAID MINTS PER WALLET – 3,333 LIMIT</h3>
		<h3>1 FREE MINT PER WALLET – 1,000 LIMIT</h3>

		<div class="tombstone-row">
			<img src="/tombstone.jpeg" />
			<img class="desktop-only" src="/tombstone.jpeg" />
			<img class="desktop-only" src="/tombstone.jpeg" />
		</div>
	</div>

	<div class="section section-roadmap">
		<h2>Roadmap</h2>

		<div>
			<img src="/bone-solid.png" />
			<p>UNDEAD DOODLES LAUNCH – 1,000 FREE MINTS, 3,333 TOTAL</p>
		</div>

		<div>
			<img src="/bone.png" />
			<p>OPENSEA ROYALTY DONATION – WEEKLY ROYALTY DONATION TO DISCORD MEMBER</p>
		</div>

		<div>
			<img src="/bone.png" />
			<p>INVESTING IN COMMUNITY PROJECTS</p>
		</div>
	</div>

	<div class="section section-team">
		<h2>Undead Team</h2>

		<div class="team-row-one">
			<div class="teammate">
				<img src="/favicon.png" />
				<div>
					<p>ZAIN</p>
				</div>
			</div>
			<div class="teammate">
				<img src="/favicon.png" />
				<p>MAG</p>
			</div>
			<div class="teammate">
				<img src="/favicon.png" />
				<p>ZAID</p>
			</div>
		</div>

		<div class="team-row-two">
			<div class="teammate">
				<img src="/favicon.png" />
				<div>
					<p>RAKAN</p>
				</div>
			</div>
			<div class="teammate">
				<img src="/favicon.png" />
				<p>JAD</p>
			</div>
		</div>
	</div>

	<h2>Join the undead <br /> doodle community</h2>
</div>

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

	.content {
		margin: auto;
		max-width: 1200px;
	}

	.desktop-only {
		@media screen and (max-width: 720px) {
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

	.section {
		display: flex;
		flex-direction: column;
		align-items: stretch;

		padding: 0 32px;

		@media screen and (max-width: 720px) {
			padding: 0 24px;
		}
	}

	.section-title {
		align-items: center;
		padding-bottom: 240px;
	}

	.nft-row {
		display: flex;
		flex-flow: row wrap;

		justify-content: space-around;
		margin: 0 -16px;

		img {
			flex-grow: 1;

			min-width: 256px;
			max-width: 356px; // empirical
			// width: 100%;

			border: 3px solid #92d050;
			border-radius: 32px;

			margin: 32px;
		}
	}

	.section-undead {
		margin-top: 32px;

		h2 {
			margin-bottom: 48px;
		}

		h3 {
			margin-top: 0;
			margin-bottom: 32px;
		}
	}

	.tombstone-row {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;

		margin: 0 -16px;

		img {
			flex-grow: 1;
			min-width: 256px;
			width: 100%;
			max-width: 356px; // empirical

			margin: 16px;
		}
	}

	.section-roadmap {
		h2 {
			margin-bottom: 8px;

			@media screen and (max-width: 720px) {
				margin-bottom: 32px;
			}
		}

		div {
			display: flex;
			flex-flow: row wrap;
			align-items: center;

			img {
				width: 200px;
				margin: 0 64px;
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

			margin: 0 -16px;
		}

		.teammate {
			position: relative;

			flex-grow: 1;
			min-width: 280px;

			margin: 32px;

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
