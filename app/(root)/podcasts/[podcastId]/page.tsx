'use client';

import React from 'react'
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react"
import Image from "next/image"
import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";
import LoaderSpiner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import EmptyState from "@/components/ui/EmptyState";
import { useUser } from "@clerk/nextjs";

const PodcastDetails = ({ params: { podcastId } }: {
  params: { podcastId: Id<'podcasts'> } }) => {
  // No tengo data en convex
    const { user } = useUser();
  //const podcast = useQuery(api.podcasts.getPodcastById, {podcastId})
  const podcast = {user:{id:'1'}, authorId:'1'}; //BORRAR
  //const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {podcastId})
  const similarPodcasts = [""];

  const isOwner = user?.id === podcast?.authorId;

 // if(!similarPodcasts || !podcastId ) return <LoaderSpiner />
  
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
          <h2 className="text-16 font-bold text-white-1">podcast?.view
            { /* podcast?.views */}
          </h2>

        </figure>
      </header>

      <PodcastDetailPlayer 
        isOwner={isOwner}
        podcastid={podcast._id}
        {...podcast}
      />
      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">podcast.description</p>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-18 font-bold text-white-1'>Transcription</h1>
          <p className='text-16 font-medium text-white-2'>podcast?.voicePrompt</p>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-18 font-bold text-white-1'>Thumbnail Prompt</h1>
          <p className='text-16 font-medium text-white-2'>podcast?.imagePrompt</p>
        </div>
      </div>
      
      <section className='mt-8 flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Similar Podcasts</h1>      
        { similarPodcasts && similarPodcasts.length > 
          0 ? (
            <div className="podcast_grid">
            {similarPodcasts?.map(({_id, podcastTitle, podcastDescription, imageUrl}) => (
              <PodcastCard 
                key={_id}
                imgUrl={imageUrl}
                title={podcastTitle}
                description={podcastDescription}
                podcastId = {_id}
              />
            ))}
        </div>

          ) : (
            <EmptyState
              title="No similar podcast found"
              buttonLink="/discovery"
              buttonText="Discover more podcast"
            />  
          )}

      </section>

    </section>
  )
}

export default PodcastDetails