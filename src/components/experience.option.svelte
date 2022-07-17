<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  export let handleClick: any;
  export let experience: ExperienceItem;
  export let selected: number;
  let selectedClass: string = 'bg-secondary text-green-400 border-b-2 lg:border-b-0 lg:border-l-2 border-green'
  let hoverClass: string = 'hover-bg-secondary hover-text-green-400'
</script>
<div on:click={() => handleClick(experience)} class={`${hoverClass} border-b-2 lg:border-b-0 lg:border-l-2 border-gray-700 font-mono cursor-pointer lg:pl-3 transition flex items-center justify-center lg:justify-start px-2 lg:px-0 h-12 w-20 min-w-max lg:w-full ${selected == experience.id && selectedClass}`}>
    <button class='text-xs text-center w-24' >
      {experience.business}
    </button>
</div>