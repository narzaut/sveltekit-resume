<script lang="ts">
  import { fly } from 'svelte/transition';
  import Button from '../shared/button.svelte';
  import { DownloadIcon } from 'svelte-feather-icons';
  export let data: HeaderType;

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class=" flex h-full w-full flex-col items-center ">
  <div
    class=" fadeIn z-30 flex  h-full w-full flex-grow items-center justify-center px-6 text-left md:w-2/3   lg:w-3/4 "
  >
    <div class=" z-30 flex flex-col justify-between lg:flex-row  ">
      <div class="flex w-full flex-col justify-center gap-4 lg:w-3/5 ">
        <p
          in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1100 : 400 }}
          class="pl-1 font-mono text-xl text-green-400 lg:text-2xl"
        >
          {data.introduction}
        </p>
        <h1
          in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1300 : 600 }}
          class=" text-4xl font-black text-gray-light  md:text-5xl lg:text-7xl"
        >
          {data.name}
        </h1>
        <h2
          in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1500 : 800 }}
          class="text-gray text-3xl font-bold md:text-4xl lg:text-6xl"
        >
          {data.title}
        </h2>
        <div in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1700 : 1000 }}>
          <p class="z-30  w-full text-base leading-relaxed  text-gray-light lg:text-2xl">
            {data.description}
          </p>
        </div>
        <div
          in:fly={{ x: -200, duration: 900, delay: innerWidth > 600 ? 1900 : 1200 }}
          class="pt-8"
        >
          <Button
            href={data.button.link}
            icon={DownloadIcon}
            buttonText={data.button.text}
            className="flex items-center justify-center w-44 h-18 lg:w-48 lg:h-20 px-6 text-lg"
          />
        </div>
      </div>
      <div
        in:fly={{ x: 600, duration: 1500, delay: 1700 }}
        class="levitate mt-40 hidden h-full w-1/3  lg:mt-12 lg:flex lg:pl-20"
      >
        <img class="scale-120 lg:scale-200" height="448" src="/images/hero1.png" alt="" />
      </div>
    </div>
  </div>
</div>
