<script lang="ts">
  import { fly } from 'svelte/transition';
  import {
    ArrowUpCircleIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    SendIcon
  } from 'svelte-feather-icons';
  import Button from '../shared/button.svelte';
  export let data: FooterType;
  export let aboutData: AboutType;
  import viewport from '../../utils/useViewportAction';
  let animate: boolean = false;
  let visibility: string = 'invisible';
</script>

{#key animate}
  <footer
    id="footer_section"
    aria-label="Footer Section"
    class="glass z-20 mt-20 flex w-full flex-col items-center  self-center py-4 text-sm text-gray-300"
    use:viewport
    on:enterViewport={() => {
      animate = true;
      visibility = 'visible';
    }}
  >
    <div
      class="relative mb-32 flex h-120 w-full flex-col justify-end px-8 lg:h-96 lg:w-1/2 lg:px-0"
    >
      <div class="flex flex-col items-center justify-end pb-4  text-center">
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
            class="text-gray text-lg font-bold leading-loose  lg:text-xl"
          >
            {data.contact.text}
          </h2>

          <div
            in:fly={{ y: 600, duration: 900, delay: innerWidth > 600 ? 2100 : 1400 }}
            class="flex gap-8 pt-8"
          >
            <a
              class="hover-press-animation hover-bg-green-pressed bg-secondary  border-green flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 transition hover:shadow-2xl"
              href={`https://${aboutData.contactDescription.linkedin}`}
            >
              <LinkedinIcon class=" h-10 w-10  text-green-400" />
            </a>
            <a
              class="hover-press-animation hover-bg-green-pressed bg-secondary border-green flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 transition hover:shadow-2xl"
              href={`mailto:${aboutData.contactDescription.email}`}
            >
              <MailIcon class=" h-10 w-10  text-green-400" />
            </a>
            <a
              class="hover-press-animation hover-bg-green-pressed bg-secondary  border-green flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 transition hover:shadow-2xl"
              href={aboutData.contactDescription.telegram}
            >
              <SendIcon class=" mr-1.5 mt-1 h-10 w-10 text-green-400" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full " in:fly={{ y: 600, duration: 700, delay: 2100 }}>
      {#each data.credits as credit}
        <div class="w-full text-center">
          {credit.text}
          <span class="font-mono italic text-green-400"> {credit.by} </span>
        </div>
      {/each}
    </div>
  </footer>
{/key}
