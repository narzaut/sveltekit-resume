<script lang="ts">
  export let handleClick: any;
  export let experience: ExperienceItem;
  export let selected: number;
  let selectedClass: string =
    'bg-green-pressed text-green-400 border-b-2 lg:border-b-0 lg:border-l-2 border-green';
  let hoverClass: string = 'hover-bg-green-pressed hover-text-green-400';
</script>

<div
  on:keydown={(e) => {
    if (e.key === 'Enter') handleClick(experience);
  }}
  on:click={() => handleClick(experience)}
  class={`${hoverClass} flex h-20  w-full cursor-pointer items-center justify-center border-b-2 border-gray-700 px-2 font-mono transition lg:w-full lg:justify-start lg:border-b-0 lg:border-l-2 lg:px-0 lg:pl-3 ${
    selected == experience.id && selectedClass
  }`}
>
  <button class="w-32 text-center text-base lg:w-full lg:text-start">
    <p class="text-gray-light {selected == experience.id && 'text-green-400'} text-lg font-bold">
      {experience.projectName}
    </p>
    <p class={`${selected == experience.id && 'text-green-400'} hidden pl-2 text-base lg:flex `}>
      {experience.role}
    </p>
  </button>
</div>
