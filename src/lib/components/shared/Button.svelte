<script lang="ts">
	export let color = 'white';
	export let circular = false;
	export let inverted = false;
</script>

<button
	class="{circular ? 'circular' : ''} {inverted ? 'inverted' : ''}"
	on:click
	style="color: {color}"><slot /></button
>

<style lang="scss">
	button {
		cursor: pointer;
		border: 4px solid #92d050;
		border-radius: 16px;

		background: none;
		padding: 12px 16px;

		font-size: 28px;

		&.circular {
			padding: 16px;
			border-radius: 50%;
		}

		&.inverted {
			border: 4px solid #262d37;
			background: #262d37;
		}

		@media screen and (max-width: 720px) {
			font-size: 20px;
			padding: 8px 12px;
		}
	}
</style>
