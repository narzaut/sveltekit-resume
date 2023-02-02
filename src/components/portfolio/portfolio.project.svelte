<script lang="ts">
  import { FolderIcon, GithubIcon, ExternalLinkIcon } from 'svelte-feather-icons';
  export let tech: Array<string>;
  export let title: string;
  export let description: string;
  export let index: number;
  export let id: string;
  import { fly } from 'svelte/transition';
</script>

<div
  in:fly={{ x: -400, duration: 700, delay: 250 * index }}
  id={`project/${id}`}
  class="text-gray-light hover-text-green-400 hover-press-animation bg-secondary mx-12 flex h-80 w-full cursor-pointer flex-col justify-between rounded p-6 shadow-2xl transition lg:mx-0 lg:w-80"
>
  <div class="project-nav flex h-20 w-full items-center justify-between  ">
    <div class="">
      <FolderIcon class=" text-green-400" size="2.5x" />
    </div>
    <div class="flex gap-3 ">
      <GithubIcon
        class="hover-text-green-400  text-gray-light relative cursor-pointer transition"
        size="1.1x"
      />
      <ExternalLinkIcon
        class="hover-text-green-400 text-gray-light relative bottom-0.5 cursor-pointer transition"
        size="1.2x"
      />
    </div>
  </div>
  <div class=" flex h-full flex-col gap-2 py-4">
    <div>
      <p class=" font-bold  transition ">{title}</p>
    </div>
    <div class="text-gray">
      <p>
        {description}
      </p>
    </div>
  </div>
  <div class="flex gap-4 font-mono text-xs ">
    {#each tech as item}
      <p class="text-gray">{item}</p>
    {/each}
  </div>
</div>
