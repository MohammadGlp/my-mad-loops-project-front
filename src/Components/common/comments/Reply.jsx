import React, { useState, useRef } from 'react';
import user from '../../../Assets/user.png';
import likeFillIcon from '../../../Assets/likee.png';
import likeIcon from '../../../Assets/likesolid.png';
import disLikeFillIcon from '../../../Assets/dislikee.png';
import disLikeIcon from '../../../Assets/dislikesolid.png';
import Like from '../Like/Like';
const Reply = ({ info, onDisLike, onLike }) => {
  const {
    id,
    refId,
    userName,
    date,
    time,
    body,
    liked,
    disLiked,
    likeCount,
    disLikeCount,
  } = info;

  return (
    <>
      <div className="mx-4 sm:mx-10 rounded-lg p-3 my-3" dir="rtl">
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={user}
              alt=""
              className="w-8 h-8 sm:w-14 sm:h-14 rounded-full ml-3"
            />
            <div className="flex flex-col">
              <p className="text-lg sm:text-xl lg:text-2xl mb-1 dark:text-dark-secondary-title">
                {userName}
              </p>
              <div className="flex">
                <p className="text-xs sm:text-sm text-gray-400 ml-4">
                  {date}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {time}
                </p>
              </div>
            </div>
          </div>
          <Like
            id={id}
            liked={liked}
            disLiked={disLiked}
            likeCount={likeCount}
            disLikeCount={disLikeCount}
            onDisLike={onDisLike}
            onLike={onLike}
          />
        </div>
        <p className="text-lg lg:text-xl text-gray-400 mt-2 mb-3 mr-8 break-all dark:text-dark-text">
          {body}
        </p>
      </div>
    </>
  );
};

export default Reply;
