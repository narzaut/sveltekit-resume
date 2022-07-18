<script lang='ts'>
  export let itemName: string;
  import { fly,fade } from 'svelte/transition';

  export let href: string;
  export let index: number;
</script>
<a 
  in:fade="{{duration: 500, delay: index * 300}}"
  href="{`#${href}`}" 
  class='text-xs whitespace-nowrap inline border-b-2 border-transparent  rounded  text-gray-light hover-text-green-400 transition '
>
  <span class='text-green-400'>0{index+1}.</span>
  {itemName}
</a>  
