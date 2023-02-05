<script lang="ts">
  import { fly } from 'svelte/transition';
  import Item from '../shared/tech.item.svelte';

  export let items: any;
</script>

<div class="flex flex-col  gap-4  pt-2 ">
  {#each items as item}
    <div class="">
      <Item text={item} />
    </div>
  {/each}
</div>
