<script lang="ts">
  import Item from '../shared/contact.item.svelte';
  import { fly } from 'svelte/transition';
  import {
    ArrowUpCircleIcon,
    GithubIcon,
    AtSignIcon,
    LinkedinIcon,
    MessageSquareIcon
  } from 'svelte-feather-icons';
  import Button from '../shared/button.svelte';
  export let data: FooterType;
  import viewport from '../../utils/useViewportAction';
  let animate: boolean = false;
  let visibility: string = 'invisible';
</script>

{#key animate}
  <footer
    id="footer_section"
    aria-label="Footer Section"
    class="glass z-20 mt-12 flex w-1/2 flex-col items-center  self-center py-4 text-sm text-gray-300"
    use:viewport
    on:enterViewport={() => {
      animate = true;
      visibility = 'visible';
    }}
  >
    <div class=" relative flex h-200 ">
      <a
        in:fly={{ y: 600, duration: 900, delay: innerWidth > 600 ? 1100 : 400 }}
        href="#home_section"
        aria-label="Home section"
        class=" transition-color hover-bg-green-pressed absolute left-1/2 right-1/2 flex h-12 w-12 animate-bounce cursor-pointer  rounded-full opacity-80 transition  "
      >
        <ArrowUpCircleIcon class="h-full w-full text-green-400" />
      </a>
      <div class="flex  flex-col items-center justify-center pb-4 text-center  ">
        <div class="flex w-full flex-col items-center justify-center gap-6 font-mono lg:w-2/3 ">
          <p
            in:fly={{ y: 600, duration: 900, delay: innerWidth > 600 ? 1300 : 600 }}
            class="pl-1 font-mono text-base text-green-400 lg:text-base"
          >
            5. {data.contact.introduction}
          </p>
          <h1
            in:fly={{ y: 600, duration: 900, delay: innerWidth > 600 ? 1500 : 800 }}
            class=" text-2xl font-black text-gray-light  lg:text-4xl"
          >
            {data.contact.title}
          </h1>
          <h2
            in:fly={{ y: 600, duration: 900, delay: innerWidth > 600 ? 1800 : 1100 }}
            class="text-gray text-xl font-bold  leading-loose"
          >
            {data.contact.text}
          </h2>

          <div
            in:fly={{ y: 600, duration: 900, delay: innerWidth > 600 ? 2100 : 1400 }}
            class="pt-8"
          >
            <Button
              href={data.contact.button.link}
              icon={MessageSquareIcon}
              buttonText={data.contact.button.text}
              className="flex items-center justify-center lg:w-40 lg:h-18 gap-2 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      {#each data.credits as credit}
        <div>
          {credit.text}
          <span class="font-mono italic text-green-400"> {credit.by} </span>
        </div>
      {/each}
    </div>
  </footer>
{/key}
