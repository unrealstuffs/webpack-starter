import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'
import path from 'path'
import { buildOptimization } from './buildOptimization'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options
	const isDev = mode === 'development'

	return {
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: 'js/[name].[contenthash].js',
			clean: true,
			assetModuleFilename: pathData => {
				const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/')
				return `${filepath}/[name][ext]`
			},
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		optimization: buildOptimization(),
		resolve: buildResolvers(),
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
