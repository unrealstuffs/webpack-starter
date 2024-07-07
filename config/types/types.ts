export interface BuildPaths {
	entry: string | Record<string, string>
	output: string
	src: string
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
	port: number
	paths: BuildPaths
	mode: BuildMode
}
