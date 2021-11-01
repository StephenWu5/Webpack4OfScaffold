const path = require("path");
//利用require导入了node中path模块,path模块了一些处理文件路径的小工具，由于webpack是基于Node环境下的工具，所以可以直接使用node原生模块path
const SRC_PATH = path.resolve(__dirname, "../src");
//path.resolve()方法可以将路径或者路径片段解析成绝对路径，具体可以结合官方文档进行查看,综合来看，path.resolve()是一个修改和整合文件路径的方法，dirname是directory+name的缩写，故名思义，是文件名的意思。总的来说就是将绝对路径提取出来
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	entry: {
		main: "./src/index.js",
	},
	//入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的
	resolve: {
		extensions: [".vue", ".js"],
		alias: {
			"@": SRC_PATH,
		},
	},
	//Resolve 配置 Webpack 如何寻找模块所对应的文件,extensions:在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。alias: 配置项通过别名来把原导入路径映射成一个新的导入路径。
	module: {
		rules: [
			{
				test: /\.vue$/, //通过loader来预处理文件 允许你打包除了js之外的任何静态资源
				use: "vue-loader",
			},
			{
				test: /\.(js|jsx)?$/,
				use: "babel-loader",
                // use: [
				// 	{
				// 		loader: "babel-loader",
				// 		options: {
				// 			limit: 1000,
				// 		},
				// 	},
				// ],
				//排除node_modules目录下的文件
				exclude: /node_modules/,
				include: SRC_PATH,
			},
			{
				test: /\.(woff|svg|eot|woff2|tff)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
						},
					},
				],
                include: SRC_PATH,
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		//它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
	],
};
