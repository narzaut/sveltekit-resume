<script lang="ts">
  export let onClick: any | null = null;
  export let className: string = '';
  export let buttonText: string;
  export let href: string | null = null;
  export let id: string | null = null;
</script>

<div
  class={`hover-bg-green-200 border-green flex h-12 w-40  cursor-pointer select-none self-center rounded border p-4 text-center font-mono text-sm font-bold leading-normal text-green-400 shadow-2xl transition  ${className} `}
>
  <a
    on:click={onClick}
    {href}
    aria-label={`${href}`}
    {id}
    class="flex h-full w-full items-center justify-center"
  >
    {buttonText}
  </a>
</div>
