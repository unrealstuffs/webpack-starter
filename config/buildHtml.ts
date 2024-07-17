import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/types'
import path from 'path'

export function buildHtml({ paths }: BuildOptions) {
    return [
        new HtmlWebpackPlugin({
            title: 'Webpack starter',
            template: path.resolve(paths.src, 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }),
    ]
}
