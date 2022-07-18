<script lang='ts'>
  import TechBar from './tech.bar.svelte'
  
  export let data: Array<any> = [
    {
      name: "Node.js & Express.js",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Next.js",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Typescript",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Docker",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Git",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "MongoDB & Mongoose",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "MySQL & PostgreSQL & Sequelize",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "RabbitMQ",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Firebase Admin",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Firebase Cloud Messaging",
      percentage: 65,
      icon: "Icon"
    },
    
    {
      name: "SvelteKit",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Tailwind CSS",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Digital Ocean Droplets",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Digital Ocean Managed Databases System",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Twilio Notifications",
      percentage: 65,
      icon: "Icon"
    },
    {
      name: "Jest & Supertest",
      percentage: 20,
      icon: "Icon"
    },
    {
      name: "tRPC",
      percentage: 15,
      icon: "Icon"
    },
    {
      name: "Redis",
      percentage: 15,
      icon: "Icon"
    },
  ]
  import { fly } from 'svelte/transition';
	import viewport from '../utils/useViewportAction';
  let animate: boolean = false;
  let visibility: string = 'invisible'
  let currentItems: number = 4;


</script>
{#key animate}
  <div 
    in:fly="{{y:400, duration: 3000, delay: 500}}" 
    use:viewport
    on:enterViewport={() => { 
      animate = true
      visibility='visible'
    }}
    id='skillset'
    class={`${visibility} gap-8 w-full  flex justify-center items-center flex-col`}
  >
    <div class='text-gray-light w-full px-6 lg:px-0 lg:w-1/2 rounded   text-xl lg:text-3xl flex items-end gap-2 lg:gap-4 text-center md:text-left lg:text-left  '>
      <span class='text-green-400  text-base lg:text-xl font-mono'> 03.</span> 
      <span class='text-left font-bold'>Skills</span>
      <div class='h-0.5 w-full bg-secondary mb-3.5 '></div>
    </div>
    <div>
      <p class='text-gray text-xs lg:text-sm font-mono italic px-6  lg:whitespace-nowrap'><span class='text-green-400'>*</span> Percentages aren't fully representatives</p>
    </div>
    <div class='w-full px-8 lg:px-0 lg:w-1/3 flex flex-col gap-8'>
      {#each data.slice(0, currentItems) as item, index}
       
        <TechBar id={`${index}`} index={index-currentItems+4} name={item.name} percentage={item.percentage} icon={item.icon}/>
      {/each}
      {#if currentItems < data.length}
      
      <div class="self-center flex  mt-6 bg-transparent w-40 h-12 rounded hover-bg-green-200 transition text-green-400 border text-sm leading-4 font-mono border-green shadow-2xl">
        <a
          on:click={() => {currentItems = currentItems + 4}}
          id="loadmore"
          href={`#techbar/${currentItems-4}`}
          class='w-full h-full flex items-center justify-center'
          >
            Show more
        </a>
      </div>
   
      {/if}
    </div>
  </div>
{/key}
