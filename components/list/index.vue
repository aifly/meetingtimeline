<template>
	<transition name='main'>
		<div @touchstart='pauseAnimate' @touchend='playAnimate'  class="lt-full zmiti-list-main-ui " :style="{background: 'url('+imgs.bg+') no-repeat center top',backgroundSize:'cover'}"  v-show='show' ref='page'>
			<div class="zmiti-floor">
				<img :src="imgs.floor" />
			</div>
			<div class="zmiti-cloud">
				<img :src="imgs.cloud">
			</div>
			<div class="zmiti-cloud zmiti-cloud1">
				<img :src="imgs.cloud">
			</div>
			
			<div class="zmiti-cloud zmiti-cloud3">
				<img :src="imgs.cloud">
			</div>

			<div class="zmiti-timeline2">
				<img :src="imgs.timeline">
			</div>

			<div class="zmiti-timeline">
				<img :src="imgs.timeline">
			</div>

			<div class="zmiti-timeline1">
				<img :src="imgs.timeline">
			</div>

			<div v-for='img in imgList' class="zmiti-img" :style="{opacity:img.opacity,WebkitTransform:'scale('+img.scale+') translateZ('+img.transZ+'px)'}">
				<img :src="img.img">
			</div>

			<div class="zmiti-info">
				<img :src="imgs.stop">
			</div>


			<transition name='title'>
				<div class="zmiti-title" v-if='showTitle'>
					<img :src="imgs.title">
				</div>
			</transition>
			
			<div @touchend='beginAnimate' class="zmiti-entry" v-if='showTitle'>
				<img :src="imgs.entry">
			</div>

			<div class="zmiti-sun">
				<img :src="imgs.sun">
			</div>

			<div class="zmiti-team-btn" @touchend='showTeam = true'>制作团队</div>

			<div class="zmiti-cotyright" hidden="">
				<img :src="imgs.logo">
				<span>新华社新媒体中心</span>
			</div>

			<transition name='team'>
				<div v-if='showTeam' :style='{background:"#fff url("+imgs.teamBg+") no-repeat center top",backgroundSize:"cover"}' class="zmiti-team-main-ui lt-full" @touchend='showTeam = false'>
					<div class="zmiti-team-main">
						<h1>
							<div>制作团队</div>
						</h1>
						<section><span>出品人：</span><span>陈凯星</span><span>冯瑛冰</span></section>
						<section><span>监制：</span><span>马书平</span></section>	
						<section><span>策划：</span><span>葛素表</span><span>陈知春</span><span>于卫亚</span><span>曹建礼</span><span style='opacity:0'>上</span><span style='opacity:0'>李代祥</span><span>李代祥</span><span>周年钧</span><span>何莉</span></section>
						<section><span>统筹：</span><span>齐慧杰</span><span>徐蕊</span><span>周年均</span></section>
						<section><span>编辑：</span>浦超</span><span>邱冰清</span><span>王绥翊</span><span>姜子炜</span><span>叶心可</span><span style='opacity:0'>黄南希</span><span>黄南希</span><span>徐祥达</span></section>
						<section><span>制作：</span><span>马发展</span></section>
						<section><span>技术支持：</span><span>麟腾传媒</span></section>
						<section  style="margin-top: 20px" class="zmiti-copyright"><span>新华社新媒体中心、新华社云南分社、</span></section>
						<section><span>新华社江苏分社</span></section>

							
						<div class="zmiti-back">返回</div>
					</div>
				</div>
			</transition>
		</div>

		
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import $ from 'jquery';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				showTeam:false,
				show:false,
				index:-1,
				imgList:window.imgList,
				isStoped:false,
				viewW:window.innerWidth,
				showTitle:true,
				viewH:window.innerHeight,
			}
		},
		components:{
		},
		
		methods:{
			pauseAnimate(){
				this.isStoped = true;
				//this.index =0;
			},

			playAnimate(){

				this.isStoped = false;
			},
			beginAnimate(){
				this.showTitle = false;
				setTimeout(()=>{
					this.index = 0;
					this.isStoped = false;
				},1000)
			}

			
		},
		mounted(){
			
			var {obserable} = this;

			var zmitiRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;


		    var  render =()=>{
				zmitiRequestAnimationFrame(render);
				if(!this.isStoped && this.imgList[this.index] && !this.showTeam){

					this.imgList[this.index].scale +=0.01;

				



					if(this.imgList[this.index].scale>=1.4 && !this.imgList[this.index].stoped){
						this.imgList[this.index].stoped = true;
						this.isStoped = true;
						setTimeout(()=>{
							this.isStoped = false;
						},2000)
					}

					if(this.imgList[this.index].scale>=1.5){
						this.imgList[this.index].scale = 1.5;

						///this.imgList[this.index].opacity -=.005;
						
						this.imgList[this.index].transZ += 15;
						if(this.imgList[this.index].transZ>1000){
							this.imgList[this.index].scale = 0;
							this.imgList[this.index].stoped = false;
							this.imgList[this.index].opacity = 1;
							this.imgList[this.index].transZ = .1;
							this.index++;
							this.index %= this.imgList.length;
						}
					}
				}
			}

			render()

			obserable.on('showListPage',(data)=>{

				this.show = true;

			
				/*this.isStoped = false;
				this.index =0;*/
			})

			obserable.trigger({
				type:'showListPage'
			})
			/*



*/
		



		}
	}
</script>