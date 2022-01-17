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
					"description": "Identifies the asset to which this NFT represents"
				},
				"description": {
					"type": "string",
					"description": "Describes the asset to which this NFT represents"
				},
				"image": {
					"type": "string",
					"description": "https://undeaddoodles.com/tokens/images/"
				}
			}
		}

	}
}
