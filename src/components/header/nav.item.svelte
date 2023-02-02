<script lang="ts">
  import { fly } from 'svelte/transition';
  export let itemName: string;
  export let href: string;
  export let index: number;
</script>

<a
  in:fly={{ x: 400, duration: 900, delay: index * 250 }}
  href={`#${href}`}
  aria-label={`${href}`}
  class="text-gray-light hover-text-green-400 inline whitespace-nowrap  rounded  text-sm transition lg:text-base "
>
  <span class="text-green-400">0{index + 1}.</span>
  {itemName}
</a>
