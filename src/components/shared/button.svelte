<script lang="ts">
  export let onClick: any | null = null;
  export let className: string = '';
  export let buttonText: string;
  export let href: string | null = null;
  export let icon: any | null = null;
  export let id: string | null = null;
</script>

<div
  class={`${className} hover-bg-green-pressed border-green flex h-12 cursor-pointer select-none self-center rounded border text-center font-mono text-sm font-bold leading-normal text-green-400 shadow-2xl transition  `}
>
  <a
    on:click={onClick}
    {href}
    aria-label={`${href}`}
    {id}
    class="z-10 flex h-full w-full items-center justify-center p-4"
  >
    {#if icon}
      <div class="flex h-full w-12 items-center justify-center">
        <svelte:component this={icon} class="z-0" />
      </div>
    {/if}
    {buttonText}
  </a>
</div>
