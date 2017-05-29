<div class="column
	{{isThreeQuaters ? 'is-three-quarters' : ''}}
	{{isTwoThirds ? 'is-two-thirds' : ''}}
	{{isHalf ? 'is-half' : ''}}
	{{isOneThird ? 'is-one-third' : ''}}
	{{isOneQuarter ? 'is-one-quarter' : ''}}
	{{ classes }}">
</div>

<script>
	export default {
		data() {
			return {
				classes: '',
				//Sizes
				isThreeQuaters: false,
				isTwoThirds: false,
				isHalf: false,
				isOneThird: false,
				isOneQuarter: false
			}
		}
	};
</script>