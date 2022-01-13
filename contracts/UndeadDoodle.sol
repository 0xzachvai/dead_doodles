// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract UndeadDoodle is ERC721, ERC721Enumerable {
	uint256 constant FREE_SUPPLY = 1000;
	uint256 constant MAX_SUPPLY = 4000;

	address constant owner = 0x6de102DaFe252Dab158EEbac2Bd2819d562D6929;

	uint256 id = 0;

	constructor() ERC721('Undead Doodles', 'UDD') {}

	function _baseURI() internal pure override returns (string memory) {
		return 'https://deaddoodles.com/tokens/';
	}

	function mint() external payable {
		require(id < MAX_SUPPLY, 'All tokens have been minted.');
		require(id < FREE_SUPPLY || msg.value > 0, 'All free tokens have been minted.');

		_safeMint(msg.sender, id);
		payable(owner).transfer(msg.value);
		id++;
	}

	// The following overrides required.

	function _beforeTokenTransfer(
		address from,
		address to,
		uint256 tokenId
	) internal override(ERC721, ERC721Enumerable) {
		super._beforeTokenTransfer(from, to, tokenId);
	}

	function supportsInterface(bytes4 interfaceId)
		public
		view
		override(ERC721, ERC721Enumerable)
		returns (bool)
	{
		return super.supportsInterface(interfaceId);
	}
}
