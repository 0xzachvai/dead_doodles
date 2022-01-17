/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const { id } = params

	return {
		body: {
			"title": "Undead Doodles",
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"description": "Undead Doodles"
				},
				"description": {
					"type": "string",
					"description": "The Undead Doodles is a collection of 4,000 NFTs minted on the Ethereum Blockchain. Each Undead Doodle NFT is hand-drawn and generated using a combination of traits."
				},
				"image": {
					"type": "string",
					"description": "https://undeaddoodles.com/nfts/preview.gif"
				}
			}
		}

	}
}
