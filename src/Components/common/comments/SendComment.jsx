import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Textarea from '../Inputs/TextareaInputs/Textarea';
import Input from '../Inputs/TextInputs/Input';
import profile from '../../../Assets/user.png';
import { useAddNewCommentMutation } from '../../../store/comments/commentsSlice';
import { selectCurrentUser } from './../../../store/auth/authSlice';
import { useSelector } from 'react-redux';
const SendComment = ({ onCommentActive, courseId }) => {
  const [addNewComment] = useAddNewCommentMutation();
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  return (
    <>
      <img
        src={profile}
        className="w-16 h-16 rounded-full ml-3 mb-2 md:mb-0"
      />
      <div className="grow">
        <Formik
          initialValues={{
            name: '',
            email: '',
            body: '',
          }}
          validationSchema={
            currentUser
              ? Yup.object({
                  body: Yup.string().required(
                    'لطفا نظر خود را بیان کنید'
                  ),
                })
              : Yup.object({
                  name: Yup.string().required(
                    'لطفا نام خود را وارد کنید'
                  ),
                  email: Yup.string()
                    .email('الگوی وارد شده صحیح نمی باشد')
                    .required('لطفا فیلد ایمیل را پر کنید')
                    .matches(
                      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      'دامنه ایمیل را به درستی وارد کنید'
                    ),
                  body: Yup.string().required(
                    'لطفا نظر خود را بیان کنید'
                  ),
                })
          }
          onSubmit={(values) => {
            console.log(values);
            addNewComment({
              postId: courseId,
              email: currentUser ? currentUser.email : values.email,
              username: currentUser
                ? currentUser.fullName
                : values.name,
              comment: values.body,
            });
            onCommentActive(false);
          }}
        >
          <Form>
            <div className="bg-slate-100 text-base md:text-xl text-gray-400 rounded-lg dark:bg-dark-secondary">
              {currentUser ? null : (
                <div className="flex w-full border dark:border-dark-tertiary rounded-tl-xl rounded-tr-xl">
                  <div className="w-1/2 p-2 md:p-4 border-l dark:border-dark-tertiary">
                    <Input
                      className="bg-transparent w-full outline-none border-b-2 mb-2 dark:border-dark-tertiary dark:focus:border-b-lite-purple duration-300"
                      type="text"
                      name="name"
                      label="نام:"
                    />
                  </div>
                  <div className="w-1/2 p-2 md:p-4">
                    <Input
                      className="bg-transparent w-full outline-none border-b-2 mb-2 dark:border-dark-tertiary dark:focus:border-b-lite-purple duration-300 dark:selection:bg-red-600"
                      type="text"
                      name="email"
                      label="ایمیل:"
                    />
                  </div>
                </div>
              )}
              <div
                className={` border-r border-l border-b dark:border-dark-tertiary p-4 ${
                  currentUser &&
                  'border-t rounded-tl-lg rounded-tr-lg'
                }`}
              >
                <Textarea
                  className="grow min-h-fit max-h-72 bg-transparent outline-none block w-[100%]"
                  name="body"
                  label="متن نظر:"
                />
              </div>
              <div className="border-r border-l border-b rounded-bl-lg dark:border-dark-tertiary rounded-br-lg bg-lite-purple text-center text-white overflow-hidden">
                <button className="w-full py-2" type="submit">
                  ارسال نظر
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SendComment;
