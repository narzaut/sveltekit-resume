<script lang="ts">
  import Item from '../shared/contact.item.svelte';
  export let contactDescription: any;
  import { LinkedinIcon, UserIcon, GithubIcon, AtSignIcon, MapIcon } from 'svelte-feather-icons';
</script>

<div
  class="card border-shadow hover-press-animation flex w-64 select-none flex-col items-center  rounded-lg   shadow-2xl transition  lg:w-80"
>
  <img alt="profile-pic" class="w-full select-none opacity-60" src={'/images/profilepic.webp'} />
  <div class="flex flex-col items-center py-6 lg:items-start lg:py-8 ">
    <div
      class="flex flex-col items-start gap-4 px-4 font-mono  text-sm lg:gap-8 lg:px-6 lg:leading-4"
    >
      <Item Icon={UserIcon} value={contactDescription.name} />
      <Item Icon={MapIcon} value={contactDescription.location} />
      <Item Icon={LinkedinIcon} value={contactDescription.linkedin} />
      <Item Icon={AtSignIcon} value={contactDescription.email} />
      <Item Icon={GithubIcon} value={contactDescription.github} />
    </div>
  </div>
</div>
