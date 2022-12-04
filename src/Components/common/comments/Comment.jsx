import React from 'react';
import { Button } from '../button-component/button.component';
import Reply from './Reply';
import Input from '../Inputs/TextInputs/Input';
import user from '../../../Assets/user.png';
import profile from '../../../Assets/profile.png';
import likeFillIcon from '../../../Assets/likee.png';
import likeIcon from '../../../Assets/likesolid.png';
import disLikeFillIcon from '../../../Assets/dislikee.png';
import disLikeIcon from '../../../Assets/dislikesolid.png';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import {
  timeConvert,
  dateConvert,
} from '../../../Core/utils/TimeAndDateConverter';
import { useAddReplyMutation } from '../../../store/comments/commentsSlice';
import { selectCurrentUser } from './../../../store/auth/authSlice';
import { useSelector } from 'react-redux';

const Comment = ({ info }) => {
  const [addReply] = useAddReplyMutation();
  const [answerActive, setAnswerActive] = useState(false);
  const currentUser = useSelector(selectCurrentUser);

  const {
    _id,
    username,
    createDate,
    comment,
    answer,
    likeCount,
    disLikeCount,
    likeCountAdmin,
    disLikeCountAdmin,
  } = info;

  const handleCommentReply = () => {
    setAnswerActive(true);
  };
  const date = dateConvert(createDate);
  return (
    <>
      <div
        className="border-2 dark:border-dark-tertiary bg-slate-100 rounded-lg p-3 mb-3 dark:bg-dark-secondary"
        dir="rtl"
      >
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={user}
              alt=""
              className="w-8 h-8 sm:w-14 sm:h-14 rounded-full ml-3"
            />
            <div className="flex flex-col">
              <p className="text-lg sm:text-xl lg:text-2xl mb-1 dark:text-dark-secondary-title">
                {username}
              </p>
              <div className="flex">
                <p className="text-xs sm:text-sm text-gray-400 ml-4">
                  {`${date.day} ${date.monthTitle} ${date.year}`}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {timeConvert(createDate)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-lg">
            <span className="px-3 w-8 mb-1">
              {likeCount === 0 ? ' ' : likeCount}
            </span>
            <img
              // src={liked ? likeFillIcon : likeIcon}
              src={likeIcon}
              className="w-4 h-4 sm:w-5 sm:h-5 mb-3 cursor-pointer"
              // onClick={() => onLike(id)}
            />
            <span className="px-3 w-8 mb-1">
              {disLikeCount === 0 ? ' ' : disLikeCount}
            </span>
            <img
              // src={disLiked ? disLikeFillIcon : disLikeIcon}
              src={disLikeIcon}
              className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
              // onClick={() => onDisLike(id)}
            />
          </div>
        </div>
        <p className="text-lg lg:text-xl text-gray-400 mt-2 mb-3 mr-8 break-all dark:text-dark-text">
          {comment}
        </p>
        {answerActive ? (
          <Formik
            initialValues={{
              reply: '',
            }}
            onSubmit={(values) => {
              addReply({
                id: _id,
                answer: values.reply,
              });
              setAnswerActive(false);
            }}
          >
            {({ values }) => (
              <Form>
                <div className="md:flex">
                  <Input
                    type="text"
                    name="reply"
                    className="border dark:border-dark-tertiary border-gray-200 duration-150 rounded-md px-3 w-full mb-3 lg:mb-0 md:flex-1 outline-0 focus:input-shadow focus:shadow-purple-300"
                  />
                  <div className="text-left md:flex-none">
                    <Button
                      type="submit"
                      disabled={!values.reply}
                      classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mr-2 cursor-pointer
                      hover:bg-[#7F56DA] hover:text-white transition ease-out duration-200"
                    >
                      ارسال
                    </Button>
                    <Button
                      classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mr-2
                      hover:bg-[#7F56DA] hover:text-white transition ease-out duration-200"
                      onClick={() => setAnswerActive(false)}
                    >
                      انصراف
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          currentUser?.role === 'admin' && (
            <div className="text-left">
              <Button
                classButton="border-2 border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-md rounded-md 
              hover:bg-[#7F56DA] hover:text-white transition ease-out duration-200"
                onClick={handleCommentReply}
              >
                پاسخ
              </Button>
            </div>
          )
        )}
        {answer ? (
          <div
            className="mx-4 sm:mx-10 rounded-lg p-3 my-3"
            dir="rtl"
          >
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src={profile}
                  alt=""
                  className="w-8 h-8 sm:w-14 sm:h-14 rounded-full ml-3"
                />
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl lg:text-2xl mb-1 dark:text-dark-secondary-title">
                    ادمین
                  </p>
                  <div className="flex">
                    <p className="text-xs sm:text-sm text-gray-400 ml-4">
                      {`${date.day} ${date.monthTitle} ${date.year}`}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {timeConvert(createDate)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-lg">
                <span className="px-3 w-8 mb-1">
                  {likeCountAdmin === 0 ? ' ' : likeCountAdmin}
                </span>
                <img
                  // src={liked ? likeFillIcon : likeIcon}
                  src={likeFillIcon}
                  className="w-4 h-4 sm:w-5 sm:h-5 mb-3 cursor-pointer"
                  // onClick={() => onLike(_id)}
                />
                <span className="px-3 w-8 mb-1">
                  {disLikeCountAdmin === 0 ? ' ' : disLikeCountAdmin}
                </span>
                <img
                  // src={disLiked ? disLikeFillIcon : disLikeIcon}
                  src={disLikeIcon}
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                  // onClick={() => onDisLike(_id)}
                />
              </div>
            </div>
            <p className="text-lg lg:text-xl text-gray-400 mt-2 mb-3 mr-8 break-all dark:text-dark-text">
              {answer}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Comment;
