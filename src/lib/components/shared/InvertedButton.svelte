<button on:click><slot /></button>

<style lang="scss">
	button {
		transition: all 0.3s;

		cursor: pointer;
		width: fit-content;

		border: 4px solid #262d37;
		border-radius: 16px;

		background: #92d050;
		padding: 12px 16px;

		font-size: 32px;

		&.circular {
			padding: 16px;
			border-radius: 50%;
		}

		color: #262d37;
		font-size: 48px;

		// specific to index
		margin-top: -56px;

		@media screen and (max-width: 720px) {
			margin-top: 32px;
			font-size: 32px;
		}
	}
</style>
