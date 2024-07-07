import webpack, { Configuration } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import { buildHtml } from './buildHtml'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const { mode, paths } = options
	const isDev = mode === 'development'
	const isProd = mode === 'production'

	const plugins: Configuration['plugins'] = [
		...buildHtml(options),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(paths.src, 'assets', 'images', 'favicon'),
					to: path.resolve(paths.output, 'assets', 'images', 'favicon'),
				},
			],
		}),
	]

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin())
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		)
	}

	return plugins
}
