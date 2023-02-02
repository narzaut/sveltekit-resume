<script lang="ts">
  import Project from './portfolio.project.svelte';
  import Button from '../shared/button.svelte';
  import { fly } from 'svelte/transition';
  import viewport from '../../utils/useViewportAction';
  let visibility = 'invisible';
  let animate: boolean = false;
  const projects: Array<any> = [
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: 'Weather App',
      description:
        'A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS'
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: 'Weather App',
      description:
        'A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS'
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: 'Weather App',
      description:
        'A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS'
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: 'Weather App',
      description:
        'A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS'
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: 'Weather App',
      description:
        'A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS'
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: 'Weather App',
      description:
        'A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS'
    }
  ];
  let currentItems: number = 3;
</script>

{#key animate}
  <div
    id="portafolio"
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
        class="  text-gray-light  w-92 flex  items-end gap-2 rounded text-center text-xl md:text-left lg:gap-4 lg:text-left lg:text-3xl  "
      >
        <span class="font-mono  text-base text-green-400 lg:text-xl"> 04.</span>
        <span class="whitespace-nowrap text-left font-bold">Portafolio</span>
        <div class="bg-secondary mb-3.5 h-0.5 w-full " />
      </div>
      <div class="  text-gray flex w-full  flex-wrap  items-center justify-center gap-4">
        {#each projects.slice(0, currentItems) as project, index}
          <Project
            id={`${index}`}
            index={index - currentItems + 3}
            tech={project.tech}
            title={project.title}
            description={project.description}
          />
        {/each}
      </div>
      {#if currentItems < projects.length}
        <Button
          className="mt-6"
          onClick={() => {
            currentItems = currentItems + 3;
          }}
          href={`#project_section/${currentItems}`}
          id="loadmore"
          buttonText="Show more"
        />
      {/if}
    </div>
  </div>
{/key}
