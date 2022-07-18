<script lang='ts'>
  export let href: string;
  import { ArrowDownCircleIcon } from 'svelte-feather-icons'
  import { fade } from 'svelte/transition';

</script>
<div   in:fade="{{duration: 20, delay: 2600}}" class='absolute right-0 left-0 bottom-0 fadeInDown'>
  <a href={`#${href}`}> 
    <ArrowDownCircleIcon size='2.5x'class="relative bottom-12 lg:bottom-5 text-gray inline animate-bounce cursor-pointer hover-text-green-400 transition-colors"/>
  </a>
</div>