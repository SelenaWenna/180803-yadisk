<template lang="pug">
	svg(:width="width" :height="height" :fill="iconColor")
		use(:xlink:href="href")
</template>

<script type="text/javascript">
import folderBookmark from "../assets/svg/icon-folder.svg";
import iconArrowLeft from "../assets/svg/icon-arrow_left.svg";

	export default {
		props: {
			iconName: {
      type: String,
      default: 'box'
    	},
	    width: {
	      type: [Number, String],
	      default: 18
	    },
	    height: {
	      type: [Number, String],
	      default: 18
	    },
	    iconColor: {
	      type: String,
	      //default: 'currentColor'
	    }
    },
		data() {
			return {
			}
		},
		computed: {
			href() {
				return `/static/images/sprite.svg#${this.iconName}`
			}
		}
	}
</script>
