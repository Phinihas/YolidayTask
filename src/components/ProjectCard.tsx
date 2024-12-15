import React from 'react';

interface ProjectCardProps {
  title: string;
  subject: string;
  author: string;
  image: string;
}

export default function ProjectCard({ title, subject, author, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-600">{subject}</p>
            <p className="text-xs text-gray-500">Oleh {author}</p>
          </div>
          <button className="bg-[#E85C3F] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#d54e35]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}