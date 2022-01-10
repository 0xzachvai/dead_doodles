<script lang="ts">
	export let circular = false;
</script>

<button class={circular ? 'circular' : ''} on:click><slot /></button>

<style lang="scss">
	button {
		cursor: pointer;
		border: 4px solid #92d050;
		border-radius: 16px;

		background: none;
		padding: 12px 16px;

		font-size: 32px;

		&.circular {
			padding: 16px;
			border-radius: 50%;
		}

		@media screen and (max-width: 720px) {
			font-size: 20px;
		}
	}
</style>
