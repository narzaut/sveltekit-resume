<script lang="ts">
  import Item from '../shared/tech.item.svelte';
  import { fly } from 'svelte/transition';
  import Achievements from './content.achievements.svelte';
  import Button from '../shared/button.svelte';
  import { StarIcon } from 'svelte-feather-icons';
  import { BookOpenIcon } from 'svelte-feather-icons';
  export let experience: ExperienceItem;
  let selected: 'achievements' | 'description' = 'description';
  type inputE = {
    target: {
      innerText: string;
    };
  };

  const handleClick = (e: inputE) => {
    selected = e.target.innerText.toLowerCase() as 'description' | 'achievements';
  };
</script>

<div in:fly={{ y: -1200, duration: 600 }} class="flex h-full w-full lg:px-4">
  <div class="flex  w-full flex-col gap-2">
    <div class="w-full px-4 ">
      <div class="font-semibold text-gray-light lg:text-xl">
        {experience.role} <span> <span class="text-green-400">@ {experience.business}</span></span>
      </div>
      <div class="font-mono text-base">{experience.date}</div>
    </div>

    <div class="flex w-full">
      {#each ['Description', 'Achievements'] as item, index}
        <Button
          onClick={(e) => handleClick(e)}
          buttonText={item}
          icon={index == 0 ? BookOpenIcon : StarIcon}
          className={`${
            selected == item.toLowerCase() ? 'transition bg-green-pressed' : ''
          } w-1/2 text-sm lg:text-lg rounded-none flex items-center justify-center gap-2 h-14`}
        />
      {/each}
    </div>
    <div class="custom-scrollbar h-full w-full overflow-y-auto px-4 pt-4 lg:pt-0">
      {#if selected == 'description'}
        <div
          class="w-full whitespace-pre-line text-base text-gray-light lg:text-lg"
          in:fly={{ y: -600, duration: 600 }}
        >
          {experience.description.text}
          <div class="flex flex-col items-center justify-center pt-4">
            <div class="flex w-full justify-around ">
              <div class="flex w-full flex-wrap ">
                {#each experience.description.techTools as item, index}
                  <div class="p flex w-1/2 p-1 lg:w-1/3">
                    <Item text={item} />
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/if}
      {#if selected == 'achievements'}
        <div in:fly={{ y: -600, duration: 600 }}>
          <Achievements items={experience.achievements} />
        </div>
      {/if}
    </div>
  </div>
</div>
