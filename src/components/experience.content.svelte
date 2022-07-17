<script lang="ts">
  export let experience: ExperienceItem;
  import Item from './about.tech.item.svelte'
</script>
<div class='w-full flex px-4'>
  <div class='w-full flex flex-col  gap-2'>
    <div class='text-gray-light font-semibold'>
      {experience.role} <span> <span class='text-green-400'>@ {experience.business}</span></span>
    </div>
    <div class='font-mono text-sm'>
      July - December 2021
    </div>
    <div class='pt-2 flex  flex-col  gap-4 '>
      {#each experience.items as item}
      <div class=''>
        <Item text={item}/>
      </div>
      {/each}
    </div>
  </div>
</div>