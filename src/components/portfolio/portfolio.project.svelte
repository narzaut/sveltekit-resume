<script lang="ts">
  import { FolderIcon, GithubIcon, ExternalLinkIcon } from 'svelte-feather-icons';
  import { fly } from 'svelte/transition';

  export let project: PortfolioProjectType;
  export let index: number;
  export let id: string;
</script>

<div
  in:fly={{ x: -400, duration: 700, delay: 250 * index }}
  id={`project/${id}`}
  class="hover-text-green-400 hover-press-animation bg-secondary mx-12 flex h-80 w-full cursor-pointer flex-col justify-between rounded p-6 text-gray-light shadow-2xl transition lg:mx-0 lg:w-80"
>
  <div class="project-nav flex h-20 w-full items-center justify-between  ">
    <div class="">
      <FolderIcon class=" text-green-400" size="2.5x" />
    </div>
    <div class="flex gap-3 ">
      <GithubIcon
        class="hover-text-green-400  relative cursor-pointer text-gray-light transition"
        size="1.1x"
      />
      <ExternalLinkIcon
        class="hover-text-green-400 relative bottom-0.5 cursor-pointer text-gray-light transition"
        size="1.2x"
      />
    </div>
  </div>
  <div class=" flex h-full flex-col gap-2 py-4">
    <div>
      <p class=" font-bold  transition ">{project.title}</p>
    </div>
    <div class="text-gray">
      <p>
        {project.description}
      </p>
    </div>
  </div>
  <div class="flex gap-4 font-mono text-xs ">
    {#each project.tech as item}
      <p class="text-gray">{item}</p>
    {/each}
  </div>
</div>
