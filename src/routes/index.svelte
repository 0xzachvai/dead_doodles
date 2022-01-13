<script>
	import Content from '$lib/components/layout/Content.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import InvertedButton from '$lib/components/shared/InvertedButton.svelte';

	function connectWallet() {
		showT = true;
		setTimeout(() => {
			showT = false;
		}, 2000);
	}

	let showT = false;
</script>

<Header />

<div class="background-one">
	<Content>
		<div class="section section-title">
			<h1>Undead Doodles</h1>

			<div class="hiding-button">
				<InvertedButton on:click={connectWallet}
					>{showT ? 'COMING SOON!' : 'CONNECT WALLET'}</InvertedButton
				>
			</div>
		</div>
	</Content>
</div>

<div class="background-two">
	<Content>
		<div class="section">
			<h3>A COLLECTION OF 3,333 UNDEAD DOODLE NFTS ON THE ETHEREUM BLOCKCHAIN</h3>
			<div class="nft-row">
				<img src="/deaddoodle.jpeg" />
				<img src="/deaddoodle.jpeg" />
				<img src="/deaddoodle.jpeg" />
			</div>
		</div>
	</Content>
</div>

<div class="background-three">
	<Content>
		<div class="section section-undead">
			<h2>Unleash the Undead</h2>

			<h3 style="color: white">SUPPLY OF 4,000 UNDEAD DOODLES</h3>
			<h3 style="color: white">10 MINTS PER WALLET, FIRST 1,000 ARE FREE</h3>
			<h3 style="color: white">REST ARE SOLD AT 0.015 ETH</h3>
		</div>
	</Content>
</div>

<div class="background-four">
	<div class="section section-roadmap">
		<Content>
			<h2>Roadmap</h2>

			<div>
				<img src="/bone-solid.png" />
				<p style="color: white">UNDEAD DOODLES LAUNCH – 1,000 FREE MINTS, 3,333 TOTAL</p>
			</div>

			<div>
				<img src="/bone.png" />
				<p style="color: white">
					OPENSEA ROYALTY DONATION – WEEKLY ROYALTY DONATION TO DISCORD MEMBER
				</p>
			</div>

			<div>
				<img src="/bone.png" />
				<p style="color: white">INVESTING IN COMMUNITY PROJECTS</p>
			</div>
		</Content>
	</div>
</div>

<div class="section section-team">
	<Content>
		<h2>Undead Team</h2>

		<div class="team-row-one">
			<div class="teammate">
				<img src="/deaddoodle.jpeg" />
				<div>
					<p>ZEEKO</p>
				</div>
			</div>
			<div class="teammate">
				<img src="/deaddoodle.jpeg" />
				<p>MANGNUM</p>
			</div>
			<div class="teammate">
				<img src="/deaddoodle.jpeg" />
				<p>ZAID</p>
			</div>
		</div>

		<div class="team-row-two">
			<div class="teammate">
				<img src="/deaddoodle.jpeg" />
				<div>
					<p>ROSARIO</p>
				</div>
			</div>
			<div class="teammate">
				<img src="/deaddoodle.jpeg" />
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
		background-image: url('background1.jpeg');
		background-position-y: bottom;
	}

	.background-two {
		background-image: url('background2.jpeg');
		background-repeat: repeat-y;
	}

	.background-three {
		background-image: url('background3.jpeg');
		background-position-y: bottom;
	}

	.background-four {
		background-image: url('background4.jpeg');
		background-repeat: repeat-y;
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

			min-width: 256px;
			max-width: 332px; // empirical
			// width: 100%;

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
			max-width: 300px;

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
