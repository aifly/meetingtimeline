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
				if(!this.isStoped && this.imgList[this.index]){

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