<script lang="ts">
  export let Icon: any;
  export let value: string = '#';
</script>

<a
  aria-label="wtfa"
  href={value.includes('.com') ? `https://${value}` : null}
  class={`${
    value.includes('.com')
      ? 'hover-text-green-400 cursor-pointer transition'
      : 'cursor-default select-none'
  } flex items-center justify-center gap-2 lg:gap-3`}
>
  <Icon size="1.2x" class="relative bottom-px  text-green-400" />
  {value}
</a>
