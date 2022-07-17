<script lang='ts'>
  export let href: string;
</script>
<div class='absolute right-0 left-0 bottom-5 fadeInDown'>
  <a href={`#${href}`}> 
    <i class=" text-gray fas fa-arrow-circle-down text-5xl animate-bounce cursor-pointer hover-text-green-400 transition-colors" />
  </a>
</div>