<script lang='ts'>
  export let href: string;
  import { ArrowDownCircleIcon } from 'svelte-feather-icons'
  import { fly } from 'svelte/transition';

</script>
<div in:fly="{{y: 800, duration: 1200, delay: 2600}}" class='z-20 absolute right-0 left-0 bottom-0 '>
  <a href={`#${href}`}> 
    <ArrowDownCircleIcon size='2.5x'class="relative bottom-12 lg:bottom-5 animate-bounce text-gray inline cursor-pointer hover-text-green-400 transition-colors"/>
  </a>
</div>