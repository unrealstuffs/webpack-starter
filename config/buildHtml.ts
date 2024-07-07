import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/types'
import path from 'path'

export function buildHtml({ paths }: BuildOptions) {
	return [
		new HtmlWebpackPlugin({
			template: path.resolve(paths.src, 'templates/template.html'),
			filename: 'index.html',
			chunks: ['index'],
		}),
	]
}
