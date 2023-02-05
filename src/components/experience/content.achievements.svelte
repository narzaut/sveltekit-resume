<script lang="ts">
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
