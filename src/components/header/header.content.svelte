<script lang="ts">
  import { fly } from 'svelte/transition';
  import Button from '../shared/button.svelte';
  import { json } from '../../lib/i18n';
  $: innerWidth = 0;
  $: data = $json('header') as {
    name: string;
    title: string;
    description: string;
    introduction: string;
    button: {
      text: string;
      link: string;
    };
  };
</script>

<svelte:window bind:innerWidth />
<div class=" flex h-full flex-col items-center ">
  <div
    class=" fadeIn absolute top-1/2 z-30  flex w-full -translate-y-1/2 transform  items-start justify-start px-10  text-left  md:w-2/3 lg:w-2/3 "
  >
    <div class=" z-30 flex flex-col gap-4 ">
      <p
        in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1100 : 400 }}
        class="pl-1 font-mono text-green-400"
      >
        {data.introduction}
      </p>
      <h1
        in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1300 : 600 }}
        class=" text-gray-light text-4xl font-black  md:text-5xl lg:text-7xl"
      >
        {data.name}
      </h1>
      <h2
        in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1500 : 800 }}
        class="text-gray text-3xl font-bold md:text-4xl lg:text-5xl"
      >
        {data.title}
      </h2>
      <div in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1700 : 1000 }}>
        <p class="text-md z-30 w-full text-gray-400 lg:w-3/5 lg:text-xl ">
          {data.description}
        </p>
      </div>
      <div in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1900 : 1200 }} class="pt-4">
        <Button href={data.button.link} buttonText={data.button.text} className="text-lg h-20" />
      </div>
    </div>
  </div>
</div>
