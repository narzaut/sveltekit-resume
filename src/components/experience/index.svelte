<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Content from './experience.content.svelte';
  import ExperienceOption from './experience.option.svelte';
  import viewport from '../../utils/useViewportAction';
  let visibility = 'invisible';
  let animate: boolean = false;

  const experiences: ExperienceItem[] = [
    {
      id: 0,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ],
      date: 'December 2021 - Present'
    },
    {
      id: 1,
      role: 'Fullstack Developer',
      business: 'iTec Labs',
      items: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ],
      date: 'March - December 2021'
    },

    {
      id: 2,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ],
      date: 'December 2021 - Present'
    },
    {
      id: 3,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ],
      date: 'December 2021 - Present'
    },
    {
      id: 4,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ],
      date: 'December 2021 - Present'
    }
  ];
  let currentExperience: ExperienceItem = experiences[0];
  let selected: number = currentExperience.id;

  const handleClick = (value: ExperienceItem) => {
    if (currentExperience !== value) currentExperience = value;
    selected = currentExperience.id;
  };
</script>

{#key animate}
  <div
    id="experience_section"
    class={`${visibility}  bg-primary flex w-full flex-col items-center justify-center gap-8`}
  >
    <div
      in:fly={{ y: 400, duration: 800, delay: 500 }}
      use:viewport
      on:enterViewport={() => {
        visibility = 'visible';
        animate = true;
      }}
      class={`glass  text-gray z-30 flex w-full flex-col gap-8 px-6   lg:w-1/2 lg:px-0 `}
    >
      <div
        class="text-gray-light  flex   items-end gap-2 rounded text-center text-xl md:text-left lg:gap-4 lg:text-left lg:text-3xl  "
      >
        <span class="font-mono  text-base text-green-400 lg:text-2xl"> 02.</span>
        <span class="whitespace-nowrap text-left font-bold">Where I've worked</span>
        <div class="bg-secondary mb-3.5 h-0.5 w-full " />
      </div>
      <div class="  flex flex-col lg:flex-row">
        <div
          class=" scrollbar-thumb scrollbar-track flex w-full flex-row overflow-x-auto lg:w-56 lg:flex-col "
        >
          {#each experiences as experience}
            <ExperienceOption {selected} {handleClick} {experience} />
          {/each}
        </div>
        {#key currentExperience}
          <div
            in:fade
            class="scrollbar-thumb scrollbar-track h-screen max-h-96 w-full overflow-y-auto pt-10 scrollbar-thin lg:pt-0 "
          >
            <Content experience={currentExperience} />
          </div>
        {/key}
      </div>
    </div>
  </div>
{/key}
