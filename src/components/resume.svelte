
<script lang="ts">
  import ResumeItem from './resume.item.svelte'
  export let data: any;
</script>
<div class='bg-gray-100 flex  items-center justify-center	'>
  <div id='resume' class='py-20 lg:w-3/5 md:px-8  text-gray-700 flex flex-col items-center justify-center  '>
    <ResumeItem data = {data.education}/>
    
  </div>
</div>

