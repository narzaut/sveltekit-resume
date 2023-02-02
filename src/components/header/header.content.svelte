
<script lang='ts'>

    import { fly } from 'svelte/transition';
    import Button from '../shared/button.svelte';
    import { json } from '../../lib/i18n';
    $: innerWidth = 0
    $: data = $json('header') as { 
        name: string, 
        title: string, 
        description: string, 
        introduction: string,
        button: {
            text: string,
            link: string
        }
    };
</script>

<svelte:window bind:innerWidth />
<div class=' flex flex-col items-center h-full '>

  <div class=' z-30 w-full md:w-2/3 lg:w-2/3  flex items-start justify-start text-left  px-10 absolute top-1/2  transform  -translate-y-1/2 fadeIn '>
    <div class=' z-30 flex flex-col gap-4 '>
      <p in:fly="{{x: -200, duration: 900, delay: innerWidth > 600 ? 1100 : 400}}" class="text-green-400 font-mono pl-1">{ data.introduction }</p>
      <h1 in:fly="{{x: -200, duration: 900, delay: innerWidth > 600 ? 1300 : 600}}" class=' text-gray-light font-black text-5xl  md:text-5xl lg:text-8xl'>
        {data.name}

      </h1>
      <h2 in:fly="{{x: -200,duration: 900, delay: innerWidth > 600 ? 1500 : 800}}" class= 'text-4xl md:text-5xl lg:text-6xl text-gray font-bold'>{data.title}</h2>
      <div in:fly="{{x: -200, duration: 900, delay: innerWidth > 600 ? 1700 : 1000}}">
        <p class=' z-30 text-md lg:text-2xl text-gray w-full lg:w-2/3'>
          {data.description}
        </p>  
      </div>
      <div in:fly="{{x:-200, duration: 900, delay: innerWidth > 600 ? 1900 : 1200}}" class='pt-4'>
        <Button href={data.button.link} buttonText={data.button.text} className='text-lg h-20'/>
      </div>
    </div>	
  </div>
</div>