import React from 'react';

export default function ViewComments({ post }) {
  return (
    <div className="w-full lg:w-2/3 mx-auto">
      {post.comments.map((comment, index) => (
        <div
          className="bg-white border-t border-gray-200 px-4 py-3 first:pt-0"
          key={index}
        >
          <p className="font-semibold">{comment.displayName}</p>
          <p className="text-gray-600 text-sm">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}