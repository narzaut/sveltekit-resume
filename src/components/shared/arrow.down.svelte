<script lang="ts">
  export let href: string;
  import { ArrowDownCircleIcon } from 'svelte-feather-icons';
  import { fly } from 'svelte/transition';
</script>

<div
  in:fly={{ y: 800, duration: 1200, delay: 2600 }}
  class="absolute right-0 left-0 bottom-0 z-20 "
>
  <a href={`#${href}`} aria-label={`${href}`}>
    <ArrowDownCircleIcon
      size="2.5x"
      class="text-gray hover-text-green-400 relative bottom-4 inline animate-bounce cursor-pointer transition-colors lg:bottom-12 lg:bottom-5"
    />
  </a>
</div>
