<script lang="ts">
  import TechBar from './tech.bar.svelte';
  import Button from '../shared/button.svelte';

  export let data: Array<any> = [
    {
      name: 'Node.js & Express.js',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Next.js',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Typescript',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Docker',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Git',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'MongoDB & Mongoose',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'MySQL & PostgreSQL & Sequelize',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'RabbitMQ',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Firebase Admin',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Firebase Cloud Messaging',
      percentage: 65,
      icon: 'Icon'
    },

    {
      name: 'SvelteKit',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Tailwind CSS',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Digital Ocean Droplets',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Digital Ocean Managed Databases System',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Twilio Notifications',
      percentage: 65,
      icon: 'Icon'
    },
    {
      name: 'Jest & Supertest',
      percentage: 20,
      icon: 'Icon'
    },
    {
      name: 'tRPC',
      percentage: 15,
      icon: 'Icon'
    },
    {
      name: 'Redis',
      percentage: 15,
      icon: 'Icon'
    }
  ];
  import { fly } from 'svelte/transition';
  import viewport from '../../utils/useViewportAction';
  let animate: boolean = false;
  let visibility: string = 'invisible';
  $: currentItems = 4;
</script>

{#key animate}
  <div
    id="skillset_section"
    class={`${visibility} flex w-full  flex-col items-center justify-center gap-8`}
  >
    <div
      in:fly={{ y: 400, duration: 800, delay: 500 }}
      use:viewport
      on:enterViewport={() => {
        animate = true;
        visibility = 'visible';
      }}
      class="glass z-20 flex w-full flex-col items-center justify-center lg:w-1/2"
    >
      <div
        class="text-gray-light flex w-full items-end gap-2   rounded px-6 text-center text-xl md:text-left lg:gap-4 lg:px-12 lg:text-left lg:text-3xl  "
      >
        <span class="font-mono  text-base text-green-400 lg:text-xl"> 03.</span>
        <span class="text-left font-bold">Skills</span>
        <div class="bg-secondary mb-3.5 h-0.5 w-full " />
      </div>
      <div>
        <p class="text-gray px-6 font-mono text-xs italic lg:whitespace-nowrap  lg:text-sm">
          <span class="text-green-400">*</span> Percentages aren't fully representatives
        </p>
      </div>
      <div class="flex w-full flex-col gap-6 px-8 lg:w-1/2 lg:px-0 lg:pt-8">
        {#each data.slice(0, currentItems) as item, index}
          <TechBar
            id={`${index}`}
            index={index - currentItems + 4}
            name={item.name}
            percentage={item.percentage}
            icon={item.icon}
          />
        {/each}
        {#if currentItems < data.length}
          <Button
            className="mt-6"
            id="loadmore"
            onClick={() => {
              currentItems = currentItems + 4;
            }}
            href={`#techbar/${currentItems - 7}`}
            buttonText="Show more"
          />
        {/if}
      </div>
    </div>
  </div>
{/key}
