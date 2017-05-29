<div class="container {{isFluid ? 'is-fluid' : ''}} {{classes}}">{{yield}}</div>

<script>
	export default {
		data() {
			return {
				classes: '',
				isFluid: false
			}
		}
	};
</script>