import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const imageLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75,
                    },
                },
            },
        ],
        type: 'asset/resource',
    }

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    const underscoreLoader = {
        test: /\.html$/,
        loader: 'underscore-template-loader',
    }

    return [cssLoader, tsLoader, imageLoader, fontsLoader, underscoreLoader]
}
