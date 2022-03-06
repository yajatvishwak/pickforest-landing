export const manifest = {
	appDir: "_app",
	assets: new Set(["cam.png","conv1.gif","conv1.mp4","conv2.gif","conv2.mp4","favicon.png","huh.png","logo.svg","mav1.png","mav2.png","nav1.png","nav2.png"]),
	_: {
		mime: {".png":"image/png",".gif":"image/gif",".mp4":"video/mp4",".svg":"image/svg+xml"},
		entry: {"file":"start-b936152a.js","js":["start-b936152a.js","chunks/vendor-57d2e843.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			}
		]
	}
};
