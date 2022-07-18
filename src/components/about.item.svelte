<script lang="ts">
  export let Icon: any;
  export let value: any;
</script>

	
<div>
  <a href={value.includes('.com') ? `https://${value}` : null} class={`${value.includes('.com') ? 'hover-text-green-400 transition' : ''} flex items-center justify-center gap-2`}>
    <Icon size='1x' class='text-green-400'/>
    { value }
	</a>
</div>

