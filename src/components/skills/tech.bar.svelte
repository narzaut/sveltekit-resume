<script lang="ts">
  import { onMount } from 'svelte';
  export let name: string;
  export let percentage: number;
  export let icon: string;
  export let index: number;
  import { fly } from 'svelte/transition';
  export let id: string;
  $: percent = 0;
  const multiplier: number = 0.4;

  const animation = async () => {
    for (let i = 0; i < percentage / multiplier; i++) {
      await (async () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve((percent = percent + multiplier)), 1);
        });
      })();
    }
  };

  onMount(() => animation());
</script>

<div id={`techbar/${id}`} in:fly={{ x: -1000, duration: 800, delay: 150 * index }} class="w-full">
  <p class="text-gray py-1 text-center font-mono text-base font-semibold lg:text-lg">{name}</p>
  <div class="bg-secondary h-10 w-full rounded ">
    <div
      class="from-lighter-green to-green border-green flex h-full items-center rounded border-l-4 bg-gradient-to-r pl-2"
      style="{`width: ${percent - multiplier}%`};"
    >
      <i class={`${icon} pr-2 text-xl`} />
    </div>
  </div>
</div>
