<script lang="ts">
    import type { ActionData } from "./$types";
  
    export let form: ActionData;
</script>

<div class="page">
    <form method="post">
        <h1>Add Vocaublary</h1>
        {#if form?.missing}<p class="error">Missing field requiered!</p>{/if}
        {#if form?.incorrect}<p class="error">Invalid Input</p>{/if}
        <div class="row center">
            <div class="col-6">
                <input 
                    class="input-group mb-2"
                    placeholder="Vocabulary" 
                    type="text" 
                    name="voc"
                />
                <input 
                    class="input-group mb-2"
                    placeholder="Translation" 
                    type="text" 
                    name="trans"
                />
                <input 
                    class="input-group mb-2"
                    placeholder="Language" 
                    type="text" 
                    name="lang"
                />
                <button class="btn btn-outline-success" type="submit">Add</button>
            </div>
        </div>
    </form>
</div>