<script lang="ts">
  import AboutCard from './about.card.svelte';
  import { fly } from 'svelte/transition';
  import viewport from '../../utils/useViewportAction';
  export let data: AboutType;
  let animate: boolean = false;
  let visibility: string = 'invisible';
</script>

{#key animate}
  <div
    id="about_section"
    aria-label="About section"
    class={`${visibility}  bg-primary flex w-full  flex-row justify-center text-gray-light `}
  >
    <div
      class={`flex w-full max-w-7xl flex-col items-center md:items-start md:text-left lg:w-2/3 lg:items-start`}
    >
      <div
        in:fly={{ y: 400, duration: 800, delay: 500 }}
        use:viewport
        on:enterViewport={() => {
          animate = true;
          visibility = 'visible';
        }}
        class="glass z-30 flex flex-col items-center  gap-20 md:flex-row md:gap-0 lg:items-start "
      >
        <div
          class=" flex w-full flex-col items-center justify-center gap-6  px-6 text-left  lg:w-4/6 lg:pr-12 "
        >
          <div
            class=" flex w-full  items-end gap-2 rounded text-center text-xl md:text-left lg:gap-4 lg:text-left lg:text-3xl  "
          >
            <span class="font-mono  text-base text-green-400 lg:text-2xl"> 01.</span>
            <span class="whitespace-nowrap text-left text-3xl">{data.title}</span>
            <div class="bg-secondary mb-3.5 h-0.5 w-full " />
          </div>
          <div class="flex flex-col items-center justify-center gap-6 font-medium lg:items-start">
            <span
              style="white-space: pre-line"
              class="text-sm leading-6  text-gray-light lg:text-lg lg:leading-8"
            >
              {data.description}
            </span>
          </div>
        </div>
        <div class=" relative flex items-center  justify-center lg:w-2/6">
          <AboutCard contactDescription={data.contactDescription} />
        </div>
      </div>
    </div>
  </div>
{/key}
