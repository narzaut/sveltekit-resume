


<script lang='ts'>
  import { onMount } from 'svelte';
  export let name: string;
  export let percentage: number;
  export let icon: string;
  export let index: number;
  import { fly } from 'svelte/transition';
  export let id: string;
  $: percent = 0
  const multiplier: number = 0.4
  
  const animation = async () => {
    for (let i=0; i < percentage/multiplier; i++){
      await (async () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(percent = percent + multiplier), 1)
        })
      })()
    }
  }
  
  onMount(() => animation())
</script>

<div id={`techbar/${id}`} in:fly={{x:-200, duration:1200, delay:200 * index}} class=''>
  <p class='py-1 text-sm lg:text-lg text-gray font-mono font-semibold'>{name}</p>
  <div class='w-full h-10 rounded bg-secondary '>
    <div class='h-full flex items-center pl-2 rounded bg-gradient-to-r from-lighter-green to-green border-l-4 border-green' style={`width: ${percent-multiplier}%`}; >
      <i class={`${icon} pr-2 text-xl`}/>
    </div>
  </div>
</div>
