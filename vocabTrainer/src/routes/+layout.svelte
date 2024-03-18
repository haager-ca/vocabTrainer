<script>
	import '../app.scss'
	import favicon from './favicon.png'
	import { page } from '$app/stores';
</script>
<style>
	.layout {
		padding: 0 2rem
	}
	
	.left {
		margin-left: 20px;
		margin-right: 2px
	}
	
	.button {
		margin-right: 5px;
		border: 1px solid black;
		border-radius: 3px;
		padding: 0.5rem 1rem;
		color: black;
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
		<a class="nav-link" class:active={$page.url.pathname === '/home'} href="/home">Home</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" class:active={$page.url.pathname === '/learn'} href="/learn">Learn Vocab</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" class:active={$page.url.pathname === '/statistics'} href="/statistics">Statistics</a>
		</li>
	</ul>
	</div>
	<a class="button" href="/addVoc">Add Vocab</a>
</nav>
<div class="layout">


	<slot />
</div>


