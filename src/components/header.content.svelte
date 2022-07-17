
<script lang='ts'>
  export let title: string;
  export let description: string;
</script>
<div class=' flex flex-col items-center h-full'>
  <div class=' w-full md:w-2/3 lg:w-2/3  flex items-start justify-start text-left  px-10 absolute top-1/2  transform  -translate-y-1/2 fadeIn '>
    <div class='flex flex-col gap-4 '>
      <p class="text-green-400 font-mono pl-1">Hi, my name is</p>
      <h1 class=' text-gray-light font-black text-4xl  md:text-5xl lg:text-7xl'>
        {title}.
      </h1>
      <h2 class= 'text-4xl md:text-5xl lg:text-6xl text-gray font-bold'>I build things for the web</h2>
      <div>
        <p class=' text-md lg:text-xl text-gray w-full lg:w-2/3'>
          {description}
        </p>  
      </div>
      <div class='pt-4'>
        <button class='font-mono rounded hover-bg-green-200 transition border-green py-4 px-5 bg-transparent text-green-400 border'>Check out my course !</button>
      </div>
    </div>	
  </div>
</div>