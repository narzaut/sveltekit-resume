<script lang="ts">
  export let experience: ExperienceItem;
  import Item from '../shared/tech.item.svelte';
  import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -1200, duration: 600 }} class=" flex w-full px-4">
  <div class="flex w-full flex-col  gap-2">
    <div class="text-gray-light font-semibold lg:text-xl">
      {experience.role} <span> <span class="text-green-400">@ {experience.business}</span></span>
    </div>
    <div class="font-mono text-base">July - December 2021</div>
    <div class="flex flex-col  gap-4  pt-2 ">
      {#each experience.items as item}
        <div class="">
          <Item text={item} />
        </div>
      {/each}
    </div>
  </div>
</div>
