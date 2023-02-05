<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Content from './experience.content.svelte';
  import ExperienceOption from './experience.option.svelte';
  import viewport from '../../utils/useViewportAction';

  export let data: WorkType;
  let visibility = 'invisible';
  let animate: boolean = false;
  $: experiences = data.projects as ExperienceItem[];
  $: selected = experiences[0].id;

  const handleClick = (value: ExperienceItem) => {
    if (selected !== value.id) selected = value.id;
  };
</script>

{#key animate}
  <div
    id="experience_section"
    class={`${visibility}  bg-primary flex w-full flex-col items-center justify-center gap-8 `}
  >
    <div
      in:fly={{ y: 400, duration: 800, delay: 500 }}
      use:viewport
      on:enterViewport={() => {
        visibility = 'visible';
        animate = true;
      }}
      class={`glass  text-gray z-30 flex w-full flex-col gap-8   lg:w-3/5 lg:px-0 `}
    >
      <div
        class="flex items-end  gap-2   rounded px-2 text-center text-xl text-gray-light md:text-left lg:gap-4 lg:text-left lg:text-3xl  "
      >
        <span class="font-mono  text-base text-green-400 lg:text-2xl"> 03.</span>
        <span class="whitespace-nowrap text-left text-3xl">{data.title}</span>
        <div class="bg-secondary mb-3.5 h-0.5 w-full " />
      </div>
      <div class="  flex flex-col lg:flex-row">
        <div class="flex w-full flex-row overflow-x-auto lg:w-80 lg:flex-col ">
          {#each experiences as experience}
            <ExperienceOption {selected} {handleClick} {experience} />
          {/each}
        </div>
        {#key experiences[selected]}
          <div in:fade class="h-120 w-full  pt-4 lg:pt-0 ">
            <Content experience={experiences[selected]} />
          </div>
        {/key}
      </div>
    </div>
  </div>
{/key}
