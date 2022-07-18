
<script lang="ts">
  import Project from './portfolio.project.svelte'
  import { fly  } from 'svelte/transition';
	import viewport from '../utils/useViewportAction';
  let visibility= 'invisible';
  let animate: boolean = false;

</script>
{#key animate}
  <div 
    in:fly="{{y:400, duration: 3000, delay: 500}}"
    use:viewport
    on:enterViewport={() => { 
      visibility ='visible'
      animate = true
    }}
    id="portafolio" 
    class={`${visibility} w-full  gap-10 flex flex-col bg-primary items-center justify-center`}
  >
    <div class={`w-full max-w-7xl flex items-center justify-center flex-col  gap-8`}>
      <div class='text-gray-light  rounded w-92  text-xl lg:text-3xl flex items-end gap-2 lg:gap-4 text-center md:text-left lg:text-left  '>
        <span class='text-green-400  text-base lg:text-xl font-mono'> 02.</span> 
        <span class='text-left whitespace-nowrap font-bold'>Portafolio</span>
        <div class='h-0.5 w-full bg-secondary mb-3.5 '></div>
      </div>
      <div class="w-full flex-wrap gap-4  text-gray  flex items-center justify-center">
        <Project tech={['Next.js', 'Node.js', 'Firebase']} title={"TITLE"} description={"A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"}/>
        <Project tech={['Next.js', 'Node.js', 'Firebase']} title={"TITLE"} description={"A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"}/>
        <Project tech={['Next.js', 'Node.js', 'Firebase']} title={"TITLE"} description={"A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"}/>
        <Project tech={['Next.js', 'Node.js', 'Firebase']} title={"TITLE"} description={"A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"}/>
        <Project tech={['Next.js', 'Node.js', 'Firebase']} title={"TITLE"} description={"A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"}/>
        <Project tech={['Next.js', 'Node.js', 'Firebase']} title={"TITLE"} description={"A single page web app for helping me choose where to travel built with Next.js, Firebase, and Tailwind CSS"}/>
      
      </div>
    
    </div>  
  </div>

{/key}
