<script lang="ts">
  import Item from './about.item.svelte'
  import TechItem from './about.tech.item.svelte'
  export let data: any;

</script>

<div id="about" class="bg-primary w-full flex  text-gray-light flex-row justify-center ">

  <div class='w-full lg:w-2/3 flex flex-col items-center lg:items-start md:text-left md:items-start   py-10'>
    <div class='flex items-center lg:items-start  flex-col md:flex-row '>
      <div class=' text-left w-full px-6 gap-6 lg:pr-12 lg:w-4/6  flex flex-col  items-center justify-center '>
        <div class=' rounded w-full  text-xl lg:text-3xl flex items-end gap-2 lg:gap-4 text-center md:text-left lg:text-left  '>
          <span class='text-green-400  text-base lg:text-xl font-mono'> 01.</span> 
          <span class='text-left whitespace-nowrap font-bold'>{data.title}</span>
          <div class='h-0.5 w-full bg-secondary mb-3.5 '></div>
        </div>
        <div class='gap-6 font-medium flex items-center justify-center flex-col lg:items-start'>
  
          <span class='text-sm lg:text-lg  text-gray leading-6 lg:leading-8'>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!}
          </span>

          <span class='text-sm lg:text-lg  text-gray leading-6 lg:leading-8'>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!}
          </span>
          <div class='mb-4 text-sm lg:text-lg'>
            <span class='text-gray '>These are some of the technologies I've been working with: </span>
          </div>

          <div class='flex gap-4 w-full max-w-sm lg:max-w-xl items-center justify-between lg:justify-start lg:gap-16 '>
            <div class='flex flex-col gap-4'>
              <TechItem text={"Typescript"}/>
              <TechItem text={"NodeJS"}/>
              <TechItem text={"Express"}/>
            </div>
            <div class='flex flex-col  gap-4'>
              <TechItem text={"SvelteKit"}/>
              <TechItem text={"NextJS"}/>
              <TechItem text={"Tailwind CSS"}/>
            </div>
            <div class='flex flex-col  gap-4'>
              <TechItem text={"Docker"}/>
              <TechItem text={"Firebase"}/>
              <TechItem text={"RabbitMQ"}/>
            </div>
          </div>
          
        </div>
      </div>
      <div class='flex items-center relative top-16 justify-center lg:w-2/6'>
        <div class='card w-64 lg:w-80 shadow-2xl border-shadow transition hover-press-animation rounded-lg  items-center   flex flex-col  select-none'>
          <img alt='profile-pic' class='select-none opacity-60 w-full' src={'/images/profilepic.jpg'}/>
          <div class='flex  text-center  py-6 flex-col items-center lg:items-start '>
            <p class='gap-4 flex flex-col text-sm  font-mono leading-8 lg:leading-8'>				
              {#each data.contactDescription as item}
                <Item item={ item }/>
              {/each}
              
            </p>
          </div>
        </div>
      </div>
      
      
     
    </div>
    
	</div>
</div>
