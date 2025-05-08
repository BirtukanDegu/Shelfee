/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";

export const AuthorDetailsPreview: React.FC<AuthorDetails> = ({
  authorName,
  nationality,
  gender,
  penName,
  authorPhoto,
  website,
  activeYears,
}) => (
  <div>
    <p className="text-[11px] text-neutral-400 font-semibold uppercase pb-3.5">
      Author Details
    </p>
    <div className="h-10 mb-3">
      {authorPhoto ? (
        <img src={authorPhoto} alt="Company Logo" className="h-10 rounded-md" />
      ) : (
        <div className="rounded-full bg-neutral-100 h-10 w-10 animate-pulse" />
      )}
    </div>
    {authorName ? (
      <p className="text-2xl font-medium">{authorName}</p>
    ) : (
      <div className="rounded-md bg-neutral-100 h-5 w-5/6  animate-pulse mb-4" />
    )}
    {penName ? (
      <p className="text-neutral-500/90 text-sm mb-3">Pen Name: {penName}</p>
    ) : (
      <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-2" />
    )}
    <div className="text-xs text-neutral-500/80">
      {gender || nationality ? (
        <p>
          {gender}, {nationality}
        </p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
      )}
      {activeYears ? (
        <p className="mb-1">Active Years: {activeYears}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
      )}
      {website && <p>Website: <Link href={website} target="blank" className="text-brand-blue">{website}</Link></p>}
    </div>
  </div>
);
