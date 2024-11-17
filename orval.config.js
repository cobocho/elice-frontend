module.exports = {
	backend: {
		input: {
			target: 'https://qkewybjsseagatzq.tunnel-pt.elice.io/openapi.json',
		},
		output: {
			baseurl: 'https://qkewybjsseagatzq.tunnel-pt.elice.io',
			target: 'src/services/api.ts',
			client: 'react-query',
			httpClient: 'axios',
			mode: 'tags-split',
			schemes: 'src/services/model',
			override: {
				mutator: {
					path: 'src/utils/axios.ts',
					name: 'customInstance',
				},
			},
		},
	},
};
