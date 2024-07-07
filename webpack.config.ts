import path from 'path'
import webpack from 'webpack'
import { BuildMode, BuildPaths } from './config/types/types'
import { buildWebpack } from './config/buildWebpack'

interface EnvVariables {
	mode?: BuildMode
	port?: number
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: {
			index: path.resolve(__dirname, 'src', 'js', 'index.ts'),
		},
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths,
	})

	return config
}
