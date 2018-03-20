var imgs = {
	play: './assets/images/play.png',
	cloud: './assets/images/cloud.png',
	timeline: './assets/images/timeline.png',
	floor: './assets/images/floor.png',
	sun: './assets/images/sun.png',
	img1: './assets/images/1-1.png',
	img2: './assets/images/2-1.png',
	img3: './assets/images/3-1-1.png',
	img4: './assets/images/4-1.png',
	img5: './assets/images/5-1-1.png',
	img6: './assets/images/6-1.png',
	img7: './assets/images/7-1.png',
	img8: './assets/images/8-1.png',
	img9: './assets/images/9-1.png',
	img10: './assets/images/10-1.png',
	img11: './assets/images/11-1.png',
	img12: './assets/images/12-1.png',
	img13: './assets/images/13-1.png',
	img14: './assets/images/14-1.png',
	img141: './assets/images/14-1-1.png',
	img15: './assets/images/15-1-1.png',
	img16: './assets/images/16-1.png',
	img17: './assets/images/17-1.png',
	bg:'./assets/images/bg1.jpg',
	title:'./assets/images/title.png',
	logo: './assets/images/logo2.png',
	stop: './assets/images/stop.png',
	teamBg:"./assets/images/team-bg.jpg",
	entry: './assets/images/entry-btn1.png',

}
var arr = [];
for (var attr in imgs) {

	arr.push(imgs[attr]);
}

var imgList =[
	{

		scale:0,
		opacity:1,
		transZ:1,
		img:imgs.img1
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img2
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img3
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img4
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img5
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img6
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img7
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img8
	},{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img9
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img10
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img11
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img12
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img13
	},{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img141
	},
	{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img14
	},{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img15
	},{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img16
	},{
		scale:0,
		opacity:1,
		transZ:0,
		img:imgs.img17
	}
]

var musics = {
	music: {
		src: './assets/music/bg1.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	}
}