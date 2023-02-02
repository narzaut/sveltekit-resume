
<script lang="ts">
    export let onClick: any | null = null;
    export let className: string = '';
    export let buttonText: string;
    export let href: string | null = null;
    export let id: string | null = null;
</script>

<div class={`p-4 text-center font-bold  leading-normal select-none cursor-pointer self-center flex w-40 h-12 rounded hover-bg-green-200 transition text-green-400 border text-sm font-mono border-green shadow-2xl  ${className} `}>
    <a
      on:click={onClick}
      href={href}
      id={id}
      class='w-full h-full flex items-center justify-center'
      >
        { buttonText }
    </a>
</div>