<script>
	import '../app.scss'
	import favicon from './favicon.png'
</script>
<style>
	.layout {
		padding: 0 2rem
	}
	
	.left {
		margin-left: 20px;
		margin-right: 2px
	}
	
	.addVoc {
		margin-right: 5px
	}
</style>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="ml-2 left navbar-brand" href="/home">Vocab Trainer</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
	<ul class="navbar-nav">
		<li class="nav-item">
		<a class="nav-link" href="/home">Home</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="/learn">Learn Vocab</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="/statistics">Statistics</a>
		</li>
	</ul>
	</div>
	<button class="addVoc d-flex btn btn-outline-primary">Add Vocab</button>
</nav>
<div class="layout">


	<slot />
</div>


