<script lang="ts">
  import Item from '../shared/contact.item.svelte'
  export let contactDescription: any;
  import { LinkedinIcon, UserIcon, GithubIcon, AtSignIcon, MapIcon } from 'svelte-feather-icons'
</script>

<div class='card w-64 lg:w-80 shadow-2xl border-shadow transition hover-press-animation rounded-lg  items-center   flex flex-col  select-none'>
  <img alt='profile-pic' class='select-none opacity-60 w-full' src={'/images/profilepic.jpg'}/>
  <div class='flex   py-6 lg:py-8 flex-col items-center lg:items-start '>
    <div class='gap-4 lg:gap-8 flex flex-col text-sm items-start  font-mono px-4 lg:px-6 lg:leading-4'>				
      <Item Icon={UserIcon} value={ contactDescription.name }/>
      <Item Icon={MapIcon} value={ contactDescription.location }/>
      <Item Icon={LinkedinIcon} value={ contactDescription.linkedin }/>
      <Item Icon={AtSignIcon} value={ contactDescription.email }/>
      <Item Icon={GithubIcon} value={ contactDescription.github }/>

    </div>
  </div>
</div>