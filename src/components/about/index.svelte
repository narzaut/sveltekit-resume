<script lang="ts">
    import AboutCard from './about.card.svelte'
    import TechItem from '../shared/tech.item.svelte'
    import { fly } from 'svelte/transition';
    import viewport from '../../utils/useViewportAction';
    import { json } from '../../lib/i18n';
    $: data = $json('about') as {
        title: string;
        description: string;
        contactDescription: {
            name: string;
            location: string;
            linkedin: string;
            email: string;
            github: string;
            phoneNumber: string;
        }
    };
    let animate: boolean = false;
    let visibility: string = 'invisible'
</script>

{#key animate}
  <div 
    
    id="about" 
    class={`${visibility}  bg-primary flex w-full  text-gray-light flex-row justify-center `}
  >
    <div class={`flex w-full lg:w-2/3 max-w-7xl flex-col items-center lg:items-start md:text-left md:items-start`}>
      <div 
        in:fly="{{y:400, duration: 800, delay: 500}}" 
        use:viewport
        on:enterViewport={() => { 
          animate = true
          visibility='visible'
        }}
        class='glass z-30 flex items-center lg:items-start  flex-col gap-20 md:gap-0 md:flex-row '
      >
          <div class=' text-left w-full px-6 gap-6 lg:pr-12 lg:w-4/6  flex flex-col  items-center justify-center '>
            <div class=' rounded w-full  text-xl lg:text-3xl flex items-end gap-2 lg:gap-4 text-center md:text-left lg:text-left  '>
              <span class='text-green-400  text-base lg:text-xl font-mono'> 01.</span> 
              <span class='text-left whitespace-nowrap font-bold'>{data.title}</span>
              <div class='h-0.5 w-full bg-secondary mb-3.5 '></div>
            </div>
            <div class='gap-6 font-medium flex items-center justify-center flex-col lg:items-start'>
              <span style="white-space: pre-line"  class='text-sm lg:text-lg  text-gray leading-6 lg:leading-8'>
                {data.description}
              </span>
              <div class='mb-4 text-sm lg:text-lg'>
                <span class='text-gray '>These are some of the technologies I've been working with: </span>
              </div>
              <div class='flex gap-4 w-full max-w-sm lg:max-w-xl items-center justify-between lg:justify-start lg:gap-16 '>
                <div class='flex flex-col gap-4'>
                  <TechItem text={"Typescript"}/>
                  <TechItem text={"NodeJS"}/>
                  <TechItem text={"Express"}/>
                </div>
                <div class='flex flex-col  gap-4'>
                  <TechItem text={"SvelteKit"}/>
                  <TechItem text={"NextJS"}/>
                  <TechItem text={"Tailwind CSS"}/>
                </div>
                <div class='flex flex-col  gap-4'>
                  <TechItem text={"Docker"}/>
                  <TechItem text={"Firebase"}/>
                  <TechItem text={"RabbitMQ"}/>
                </div>
              </div>
            </div>
          </div>
          <div class=' flex items-center relative  justify-center lg:w-2/6'>
            <AboutCard contactDescription={data.contactDescription}/>
          </div>
      </div>
  	</div>
  </div>
{/key}

