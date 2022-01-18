<script>
	import Button from '../shared/Button.svelte';
	import Content from './Content.svelte';

	function joinDiscord() {
		open('https://discord.gg/undeaddoodles', 'blank');
	}
</script>

<Content>
	<header>
		<div class="desktop-only">
			<Button on:click={joinDiscord}>JOIN OUR DISCORD</Button>
		</div>

		<div class="mobile-only">
			<Button on:click={joinDiscord}>JOIN DISCORD</Button>
		</div>

		<div class="icons">
			<button
				on:click={() => {
					open('https://opensea.io/collection/undeaddoodles', 'blank');
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
		</div>
	</header>
</Content>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 32px 16px;
	}

	.icons {
		display: flex;
		align-items: center;
	}

	button {
		cursor: pointer;
		background: none;

		border: 4px solid #92d050;
		border-radius: 50%;
		padding-top: 6px;

		width: 56px;
		height: 56px;

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

	.desktop-only {
		@media screen and (max-width: 719px) {
			display: none;
		}
	}

	.mobile-only {
		@media screen and (min-width: 720px) {
			display: none;
		}
	}
</style>
