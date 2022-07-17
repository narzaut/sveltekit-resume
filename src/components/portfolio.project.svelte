<script lang="ts">
  import Item from './about.item.svelte'
  import {FolderIcon, GithubIcon, ExternalLinkIcon} from 'svelte-feather-icons'
  export let tech: Array<string>;
  export let title: string;
  export let description: string;
</script>
<div id='project' class='text-gray-light hover-text-green-400 p-6 flex flex-col justify-between cursor-pointer hover-press-animation transition shadow-2xl rounded w-full mx-12 lg:mx-0 lg:w-80 h-80 bg-secondary'>
 
  <div class='project-nav w-full justify-between flex h-20 items-center  '>
    <div class=''>
      <FolderIcon class='ursor-pointer text-green-400' size="2.5x"/>
    </div>
    <div class='flex gap-3 '>
      <GithubIcon class='hover-text-green-400  transition cursor-pointer text-gray-light relative' size='1.1x'/>
      <ExternalLinkIcon class='hover-text-green-400 transition text-gray-light relative bottom-0.5 cursor-pointer' size='1.2x'/>
    </div>
  </div>
  <div class=' h-full py-4 gap-2 flex flex-col'>
    <div>
      <p class=' font-bold  transition '>{title}</p>  
    </div>
    <div class='text-gray'>
      <p>
        {description}
      </p>
    </div>
  </div>
  <div class='flex gap-4 text-xs font-mono '>
    {#each tech as item}
    <p class='text-gray'> {item}</p>
    {/each}
  </div>  
</div>