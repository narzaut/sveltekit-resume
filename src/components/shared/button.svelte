<script lang="ts">
  export let onClick: any | null = null;
  export let className: string = '';
  export let buttonText: string;
  export let href: string | null = null;
  export let icon: any | null = null;
  export let id: string | null = null;
</script>

<a
  on:click={onClick}
  {href}
  aria-label={`${href}`}
  {id}
  class={`${className} hover-bg-green-pressed border-green  flex h-full w-full cursor-pointer select-none items-center justify-center  rounded border  text-center font-mono text-sm font-bold leading-normal text-green-400 shadow-2xl transition  `}
>
  {#if icon}
    <div class="flex ">
      <svelte:component this={icon} class="h-6 w-6 md:h-8 md:w-8" />
    </div>
  {/if}
  {buttonText}
</a>
