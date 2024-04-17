<script>
  import allProjects from "@/data/allProjects"
  import IconExternal from '@/components/icons/external.svelte'
  import IconGithub from "@/components/icons/github.svelte";

  import { fade } from 'svelte/transition';

  let showMore = false;
  export let textShowMore;
  export let textShowLess;

  const orderProjects = (projects) => {
      return projects.sort((a, b) => {
          return b.year - a.year;
      });
  };

  const projects = orderProjects(allProjects);

  const GRID_LIMIT = 4;
  const firstSix = projects.slice(0, GRID_LIMIT)


</script>

<ul class="w-full grid md:grid-cols-2 gap-20 md:gap-8 md:gap-y-20">
{#each  showMore ? projects : firstSix as project}
  <li 
  class="relative"
  in:fade
  >
    <a href={project.link?.link || project.github?.link || "https://github.com/demonjl"} target="_blank" class="absolute top-0 left-0 w-full h-full z-10" aria-label="Ir al projecto"></a>

    <div class="relative aspect-[4/3]">
      <img src={project.imagen} alt={project.name} class="absolute w-full h-full object-cover">
    </div>

    <div class="py-5">
      <h4 class="text-4xl">{project.name}</h4>
    </div>
    <div class="w-full h-[1px] bg-[rgba(28,29,32,0.175)]"></div>
      <div class="pt-5">
        <ul class="text-sm flex items-center flex-wrap gap-4">
          {#each project.builtWith as tecnologia}
            <li class="">{tecnologia.name}</li>
          {/each}
        </ul>

        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center gap-4 group-hover:translate-x-5 group-hover:text-[#b4b5b6] transition-all duration-300 ease-out relative z-10">
            {#if project.link}
              <a href={project.link?.link || "https://github.com/demonjl"} target="_blank" rel="noopener " class="[&>svg]:w-6 [&>svg]:h-6 group/link hover:text-gray-500">
                <svelte:component this={IconExternal} />
              </a>
            {/if}
            {#if project.github}
              <a href={project.github?.link || "https://github.com/demonjl"} target="_blank" rel="noopener " class="[&>svg]:w-6 [&>svg]:h-6 group/link hover:text-gray-500">
                <svelte:component this={IconGithub} />
              </a>
            {/if}
          </div>

          <div>
            <p class="text-base text-black">{project.year}</p>
          </div>

        </div>

      </div>
</li>
{/each}
</ul>

<div class="mt-16 relative grid items-start justify-center group/talk"
in:fade
>
  <div
      class="absolute -inset-0.5 bg-gradient-to-r from-lightest-navy to-green-j rounded-md blur opacity-75 group-hover/talk:opacity-100 transition duration-1000 group-hover/talk:duration-300 animate-tilt"
  >
  </div>
  <button
      id="showMoreBtn"
      class="relative border border-gray-400 rounded-full px-4 py-2 hover:bg-black/5 transition duration-300 ease-out"
      on:click={()=>showMore = !showMore}
      >{showMore ? textShowLess : textShowMore}</button
  >
</div>
