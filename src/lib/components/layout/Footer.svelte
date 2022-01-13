<script>
	import Button from '../shared/Button.svelte';

	let showComingSoon = false;

	function joinDiscord() {
		showComingSoon = true;
		setTimeout(() => {
			showComingSoon = false;
		}, 2000);
	}
</script>

<div class="container">
	<div class="content">
		<h2>Join the undead community</h2>
		<h4>contract coming soon</h4>

		<div class="row">
			<Button inverted={true} on:click={joinDiscord}
				>{showComingSoon ? 'COMING SOON!' : 'JOIN OUR DISCORD'}</Button
			>

			<div style="width: 16px;" />

			<div class="icons">
				<button
					on:click={() => {
						alert('Coming soon!');
						// open('https://twitter.com', 'blank');
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

			img {
				width: 28px;
				height: 28px;
			}
		}
	}
</style>
