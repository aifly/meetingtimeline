<template>
	<div  class="lt-full zmiti-index-main-ui " :style="{background: 'url('+imgs.index+') no-repeat center center',backgroundSize:'cover'}"  :class="{'show':show}">
		
		<div class="zmiti-entry" @touchend='entry'>
			<img :src="imgs.entry">
		</div>

		<div class="zmiti-logo">
			<img :src="imgs.logo1">
		</div>
		
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import $ from 'jquery';
	import Toast from '../toast/toast';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				toastMsg:'',
				showBtns:false,
				showMasks:false,
				transX:0,
				transY:0,
				index:1,//当前的通道。en
				createImg:'',

			}
		},
		components:{
			 Toast
		},
		
		methods:{

			entry(index){
				var {obserable} = this;
				obserable.trigger({
					type:'showListPage'
				})

			},
			
			toast(msg='提交成功',time=2000){
				this.toastMsg = msg;
				setTimeout(()=>{
					this.toastMsg = '';
				},time)
			},
			
			numstart(){
				//this.num =  1;
			},
			hideMask(){
				this.showMasks = false;
			},
			showMask(){
				this.showMasks = true;
			},
			restart(){
				window.location.href = window.location.href.split('?')[0];
			},
			afterEnter(){
				this.showBtns = true;
			}
			
			
		},
		mounted(){



			


		}
	}
</script>