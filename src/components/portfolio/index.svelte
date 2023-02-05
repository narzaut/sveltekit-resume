<script lang="ts">
  import Project from './portfolio.project.svelte';
  import Button from '../shared/button.svelte';
  import { fly } from 'svelte/transition';
  import viewport from '../../utils/useViewportAction';

  export let data: PortfolioType;
  let visibility = 'invisible';
  let animate: boolean = false;
  let currentItems: number = 3;
</script>

{#key animate}
  <div
    id="portfolio_section"
    class={`${visibility}  flex  w-full flex-col items-center   justify-center gap-10`}
  >
    <div
      in:fly={{ y: 400, duration: 800, delay: 500 }}
      use:viewport
      on:enterViewport={() => {
        visibility = 'visible';
        animate = true;
      }}
      class={`z-20 flex w-full max-w-7xl flex-col items-center justify-center  gap-8`}
    >
      <div
        class="  w-92  flex items-end  gap-2 rounded text-center text-xl text-gray-light md:text-left lg:gap-4 lg:text-left lg:text-3xl  "
      >
        <span class="font-mono  text-base text-green-400 lg:text-xl"> 04.</span>
        <span class="whitespace-nowrap text-left font-bold">Portafolio</span>
        <div class="bg-secondary mb-3.5 h-0.5 w-full " />
      </div>
      <div class="  text-gray flex w-full  flex-wrap  items-center justify-center gap-4">
        {#each data.projects.slice(0, currentItems) as project, index}
          <Project id={`${index}`} index={index - currentItems + 3} {project} />
        {/each}
      </div>
      {#if currentItems < data.projects.length}
        <Button
          className="mt-6 flex items-center justify-center gap-2 h-16 w-40"
          onClick={() => {
            currentItems = currentItems + 3;
          }}
          href={`#project/${currentItems}`}
          id="loadmore"
          buttonText="Show more"
        />
      {/if}
    </div>
  </div>
{/key}
