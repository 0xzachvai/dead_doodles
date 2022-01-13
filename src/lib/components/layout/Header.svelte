<script>
	import Button from '../shared/Button.svelte';
	import Content from './Content.svelte';

	let showComingSoon = false;

	function joinDiscord() {
		showComingSoon = true;
		setTimeout(() => {
			showComingSoon = false;
		}, 2000);
	}
</script>

<Content>
	<header>
		<Button on:click={joinDiscord}>{showComingSoon ? 'COMING SOON!' : 'JOIN OUR DISCORD'}</Button>

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

		width: 60px;
		height: 60px;

		img {
			width: 28px;
			height: 28px;
		}
	}
</style>
