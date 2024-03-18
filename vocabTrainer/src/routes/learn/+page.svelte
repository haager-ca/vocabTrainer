<script lang="ts">
    import Voc from "$lib/Voc.svelte"
    import type { PageData } from "../$types";

    export let data: PageData
</script>

<div>
    <h1>Learn Voc</h1>
    <main>
        {#if data.feed}
            {#each data.feed as voc (voc.id)}
                <Voc {voc} />
            {/each}
        {:else}
            <p>No data available</p>
        {/if}
    </main>
</div>