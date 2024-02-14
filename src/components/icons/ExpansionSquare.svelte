<script>
    // Exporting props allows you to pass values to them from parent components
    export let className = ''; // Default class if none is provided
</script>

<svg xmlns="http://www.w3.org/2000/svg" 
    class= {className}
    viewBox="0 0 24 24">
	<rect
		width="18"
		height="18"
		x="3"
		y="3"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		rx="2"
	/>
</svg>
