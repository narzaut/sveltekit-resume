<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';

  export let locale: string | null | undefined;
  export let data: LocaleOption[];
  const dispatch = createEventDispatcher();
  $: showOptions = false;
  $: selectedOption = data.filter((o) => o.locale === locale)[0];

  function toggleOptions() {
    showOptions = !showOptions;
  }

  function selectOption(option: LocaleOption) {
    selectedOption = option;
    showOptions = false;
    dispatch('locale-changed', option.locale);
  }
</script>

<div class="locale-selector select-none border-none">
  <div class="relative text-gray-light">
    <div
      class="flex cursor-pointer items-center justify-center "
      on:click={toggleOptions}
      on:keydown={toggleOptions}
    >
      <img class="h-6 w-6 rounded-full" alt="language flag" src={selectedOption.flag} />
      <span class="ml-2 mt-0.5 font-medium">{selectedOption.name}</span>
    </div>
    {#if showOptions}
      <div
        out:fly={{ y: -30, duration: 200, delay: 0 }}
        in:fly={{ y: -30, duration: 400, delay: 0 }}
        class="options absolute z-10 flex"
        class:hidden={!showOptions}
      >
        {#each data.filter((o) => o !== selectedOption) as option}
          <div
            class="option flex cursor-pointer items-center justify-center pt-2 "
            on:keydown={() => selectOption(option)}
            on:click={() => selectOption(option)}
          >
            <img class="h-6 w-6 rounded-full" alt="language flag" src={option.flag} />
            <span class="ml-2 font-medium">{option.name}</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  /* ... */
</style>
