

<script lang='ts'>
  import { fade } from 'svelte/transition';
  import Content from './experience.content.svelte';
  import ExperienceOption from './experience.option.svelte'

  const experiences: ExperienceItem[] = [
    {
      id: 0,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: ['Developed and shipped highly interactive web applications for Apple Music using Ember.js','Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',"Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'],
      date: 'December 2021 - Present'
    },
    {
      id: 1,
      role: 'Fullstack Developer',
      business: 'iTec Labs',
      items: ['Developed and shipped highly interactive web applications for Apple Music using Ember.js','Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',"Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'],
      date: 'March - December 2021'
    },
    
    {
      id: 2,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: ['Developed and shipped highly interactive web applications for Apple Music using Ember.js','Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',"Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'],
      date: 'December 2021 - Present'
    },
    {
      id: 3,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: ['Developed and shipped highly interactive web applications for Apple Music using Ember.js','Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',"Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'],
      date: 'December 2021 - Present'
    },
    {
      id: 4,
      role: 'Backend Developer',
      business: 'Simple Comercio',
      items: ['Developed and shipped highly interactive web applications for Apple Music using Ember.js','Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',"Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'],
      date: 'December 2021 - Present'
    }
  ]
  let currentExperience: ExperienceItem = experiences[0];
  let selected: number = currentExperience.id;
  
  const handleClick = (value: ExperienceItem) => {
    if (currentExperience !== value)
      currentExperience = value
    selected = currentExperience.id
  }
</script>

<div class='flex items-center gap-8 flex-col justify-center w-full'>
 
  <div class='w-full px-6 lg:px-0 lg:w-2/5 gap-8 h-80 flex flex-col text-gray '>
    <div class='text-gray-light  rounded   text-xl lg:text-3xl flex items-end gap-2 lg:gap-4 text-center md:text-left lg:text-left  '>
      <span class='text-green-400  text-base lg:text-xl font-mono'> 03.</span> 
      <span class='text-left whitespace-nowrap font-bold'>Where I've worked</span>
      <div class='h-0.5 w-full bg-secondary mb-3.5 '></div>
    </div>
    <div class='flex flex-col lg:flex-row'>
      <div class='w-full overflow-x-auto scrollbar-thumb scrollbar-track scrollbar-thumb-red-200 scrollbar-track-red-600 lg:w-48 flex flex-row lg:flex-col '>
        {#each experiences as experience}
          <ExperienceOption selected={selected} handleClick={handleClick} experience={experience}/>
        {/each}
      </div>
      
      {#key currentExperience}
        <div in:fade class='pt-10 lg:pt-0 scrollbar-thin scrollbar-thumb scrollbar-track max-h-96 overflow-y-auto w-full  h-full '>
          <Content experience={currentExperience}/>
        </div>
      {/key}
    </div>

   
  </div>
</div>