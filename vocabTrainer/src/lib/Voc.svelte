<script lang="ts">
	import type { PageData } from '../../.svelte-kit/types/src/routes/$types'
	export let voc: PageData;
  </script>
  

  <div class="post">
    <h2>{voc.voc}</h2>
  </div>
  
  <style>
    div {
      color: inherit;
      padding: 2rem;
    }
    .post {
      background: white;
      transition: box-shadow 0.1s ease-in;
    }
  
    .post:hover {
      box-shadow: 1px 1px 3px #aaa;
      cursor: pointer;
    }
  
    .post,
    .post {
      margin-top: 2rem;
    }
  </style>
  