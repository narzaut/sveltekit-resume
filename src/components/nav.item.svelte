<script lang='ts'>
  export let itemName: string;
  export let href: string;
  export let index: number;
</script>
<a 
  href="{`#${href}`}" 
  class='text-xs whitespace-nowrap inline border-b-2 border-transparent  rounded  text-gray-light hover-text-green-400 transition '
>
  <span class='text-green-400'>0{index+1}.</span>
  {itemName}
</a>  
