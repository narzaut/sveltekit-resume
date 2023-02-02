
<script lang="ts">
  import Project from './portfolio.project.svelte'
  import Button from '../shared/button.svelte'
  import { fly  } from 'svelte/transition';
  import viewport from '../../utils/useViewportAction';
  let visibility= 'invisible';
  let animate: boolean = false;
  const projects: Array<any> = [
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: "Weather App",
      description: "A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: "Weather App",
      description: "A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: "Weather App",
      description: "A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: "Weather App",
      description: "A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"
    },{
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: "Weather App",
      description: "A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"
    },
    {
      tech: ['Next.js', 'Node.js', 'Firebase'],
      title: "Weather App",
      description: "A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"
    }
  ]
  let currentItems: number = 3;
</script>
{#key animate}
  <div 
    id="portafolio" 
    class={`${visibility}  w-full  gap-10 flex flex-col   items-center justify-center`}
  >
    <div
      in:fly="{{y:400, duration: 800, delay: 500}}"
      use:viewport
      on:enterViewport={() => { 
        visibility ='visible'
        animate = true
      }} 
      class={`z-20 w-full max-w-7xl flex items-center justify-center flex-col  gap-8`}
    >
        <div class='  text-gray-light  rounded w-92  text-xl lg:text-3xl flex items-end gap-2 lg:gap-4 text-center md:text-left lg:text-left  '>
          <span class='text-green-400  text-base lg:text-xl font-mono'> 04.</span> 
          <span class='text-left whitespace-nowrap font-bold'>Portafolio</span>
          <div class='h-0.5 w-full bg-secondary mb-3.5 '></div>
        </div>
        <div class="  w-full flex-wrap gap-4  text-gray  flex items-center justify-center">
          {#each projects.slice(0, currentItems) as project, index}
            <Project id={`${index}`} index={index-currentItems+3} tech={project.tech} title={project.title} description={project.description}/>
          {/each}
       
          
        
        </div>
        {#if currentItems < projects.length}
            <Button
              className='mt-6'
              onClick={() => {currentItems = currentItems + 3}}
              href={`#project/${currentItems}`}
              id="loadmore"
              buttonText="Show more"
            />
        {/if}
    </div>  
  </div>

{/key}
