<script>
	import Button from '../shared/Button.svelte';

	function joinDiscord() {
		alert('Discord coming soon!');
	}
</script>

<header>
	<Button on:click={joinDiscord}>JOIN OUR DISCORD</Button>

	<div class="icons">
		<button
			on:click={() => {
				open('https://twitter.com', 'blank');
			}}
		>
			<img src="/icons/twitter.svg" width="24px" />
		</button>
		<!-- <Button circular={true}><img src="/icons/twitter.svg" width="48px" height="48px" /></Button> -->
		<!-- <div style="width: 32px;" />
		<Button circular={true}><img src="/icons/twitter.svg" width="24px" /></Button> -->
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 32px;
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
		padding-top: 8px;

		width: 69px;
		height: 69px;

		img {
			width: 36px;
			height: 36px;
		}
	}
</style>
