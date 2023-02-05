<script lang="ts">
  import Button from '../shared/button.svelte';
  import { MonitorIcon, SettingsIcon, DatabaseIcon, ArchiveIcon } from 'svelte-feather-icons';
  import { fly } from 'svelte/transition';
  import viewport from '../../utils/useViewportAction';
  export let data: SkillsType;
  let animate: boolean = false;
  let visibility: string = 'invisible';
  type SelectOptions = 'front' | 'back' | 'infra';
  let selected: SelectOptions = 'back';
  let current = data[selected];

  type inputE = {
    target: {
      innerText: string;
    };
  };

  const handleClick = (e: inputE) => {
    selected = e.target.innerText.toLowerCase() as SelectOptions;
    switch (selected) {
      case 'front':
        current = data.front;
        break;
      case 'back':
        current = data.back;
        break;
      case 'infra':
        current = data.infra;
        break;
    }
  };
</script>

{#key animate}
  <div id="skillset_section" class={`flex w-full  flex-col items-center justify-center gap-8`}>
    <div
      in:fly={{ y: 400, duration: 800, delay: 500 }}
      use:viewport
      on:enterViewport={() => {
        visibility = 'visible';
        animate = true;
      }}
      class="glass z-20 flex w-full flex-col items-center justify-center gap-10 lg:w-1/2"
    >
      <div
        class="flex w-full items-end gap-2 rounded   px-6 text-center text-xl text-gray-light md:text-left lg:gap-4 lg:px-12 lg:text-left lg:text-3xl  "
      >
        <span class="font-mono  text-base text-green-400 lg:text-2xl"> 02.</span>
        <span class="text-left text-3xl">Skills</span>
        <div class="bg-secondary mb-3.5 h-0.5 w-full " />
      </div>
      <div class="flex w-full   ">
        {#each ['Front', 'Back', 'Infra'] as item, index}
          <Button
            onClick={(e) => handleClick(e)}
            buttonText={item}
            icon={index == 0 ? MonitorIcon : index == 1 ? DatabaseIcon : SettingsIcon}
            className={`${
              selected == item.toLowerCase() ? 'transition bg-green-pressed' : ''
            } w-1/3 text-sm lg:text-xl rounded-none h-14 items-center justify-center gap-1`}
          />
        {/each}
      </div>
      <div class="flex w-full flex-wrap items-center justify-center px-2 lg:px-0">
        {#key current}
          {#each current as item, index}
            <div
              in:fly={{ x: -600, duration: 800, delay: 75 * index }}
              class="hover-text-green-400 hover-press-animation flex w-1/3 cursor-pointer items-center justify-center font-mono  font-bold text-gray-light transition lg:w-1/4 "
            >
              <div class="mx-2 flex h-40  flex-col items-center justify-start lg:mx-0 lg:my-4 ">
                <div class=" items-start justify-start text-center">
                  <p class="text-base lg:text-xl ">{item.name}</p>
                </div>
                <img class="flex w-28 scale-65" src={`/images/logos/${item.icon}`} alt="" />
              </div>
            </div>
          {/each}
        {/key}
      </div>
    </div>
  </div>
{/key}
