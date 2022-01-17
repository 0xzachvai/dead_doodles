<script>
	import Button from '../shared/Button.svelte';

	function joinDiscord() {
		open('https://discord.gg/undeaddoodles', 'blank');
	}
</script>

<div class="container">
	<div class="content">
		<h2>Join the undead community</h2>
		<h4>0x7Ce3CcAb165Ff4553810723eA275F8B3d4f36ccc</h4>

		<div class="row">
			<div class="desktop-only">
				<Button inverted={true} on:click={joinDiscord}>JOIN OUR DISCORD</Button>
			</div>

			<div class="mobile-only">
				<Button inverted={true} on:click={joinDiscord}>JOIN DISCORD</Button>
			</div>

			<div style="width: 16px;" />

			<div class="icons">
				<button
					on:click={() => {
						open('https://opensea.io/collection/undeaddoodles?tab=activity', 'blank');
					}}
				>
					<img src="/icons/opensea.png" width="24px" />
				</button>

				<div style="width: 16px;" />

				<button
					on:click={() => {
						open('https://twitter.com/undeaddoodles', 'blank');
					}}
				>
					<img src="/icons/twitter.svg" width="24px" />
				</button>
				<!-- <Button circular={true}><img src="/icons/twitter.svg" width="48px" height="48px" /></Button> -->
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		background: #92d050;
		margin-top: 32px;
		padding-bottom: 32px;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			max-width: 1280px;
			margin: auto;
		}

		.row {
			display: flex;
			flex-flow: row wrap;
		}
	}

	h2 {
		color: #262d37;
		font-size: 82px;

		margin: 32px;
		margin-bottom: 0;

		@media screen and (max-width: 720px) {
			font-size: 44px;
		}
	}

	h4 {
		color: #262d37;
		font-size: 48px;
		margin-top: 16px;

		@media screen and (max-width: 720px) {
			font-size: 26px;
		}
	}

	.icons {
		display: flex;
		align-items: center;

		button {
			cursor: pointer;
			background: none;

			background: #262d37;

			border: none;
			border-radius: 50%;
			padding-top: 6px;

			width: 60px;
			height: 60px;

			@media screen and (max-width: 720px) {
				width: 48px;
				height: 48px;
			}

			img {
				width: 28px;
				height: 28px;

				@media screen and (max-width: 720px) {
					width: 20px;
					height: 20px;
				}
			}
		}
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
</style>
