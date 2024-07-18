'use client';

import React from 'react'
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react"
import Image from "next/image"
import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";

const PodcastDetails = ({params: { podcastId } } : {
  params: { podcastId: Id<'podcasts'>} }) => {
    // No tengo data en convex
    //const podcast = useQuery(api.podcasts.getPodcastById, {podcastId})

  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">
          Currently Playing
        </h1>
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphone"
          />
        {  <h2 className="text-16 font-bold text-white-1">podcast?.view
            { /* podcast?.views */}            
          </h2>}
        </figure>
      </header>

      <PodcastDetailPlayer />
        <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">podcast.description</p>

    </section>
  )
}

export default PodcastDetails