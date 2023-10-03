"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {useAddCardsMutation} from "../redux/contactsSlice"
import {Card} from "@prisma/client"
const initialValues:Card = {
  id:0,
  name: "",
  email: "",
  phone: "",
  company: "",
  title: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  company: Yup.string().required("Company is required"),
  title: Yup.string().required("Designation is required"),
});

const DialogDemo: React.FC = () => {
  const [addCard] = useAddCardsMutation();
  const [open, setOpen] = useState(false);
  let handleSubmit = async(value: typeof initialValues,{resetForm}: FormikHelpers<typeof initialValues>) => {
    console.log("handlesubmit is working")
    let obj:Card={
       ...value,id:Math.floor(Math.random()*200)
    }
   
    await addCard(obj)
    resetForm({values:initialValues})
    handleClose()
    
  };
  const handleClose = () => {
    setOpen(false); // Close the dialog
  };
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <Dialog.Trigger asChild>
        <button className="bg-[#6418C3] shadow-blackA text-white  inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px]  p-6 text-[18px]">
          <img src={"user.svg"} alt="" className="w-5 mr-2" />
          New Contacts
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[34px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
          <Dialog.Title className="text-mauve12 m-0 text-[30px] font-bold font-Cairo  text-center leading-10">
            Add New Contact
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 leading-normal text-lg font-Open-Sans text-center color-[#6F6C90]">
            Fill out the below form to add new membe
          </Dialog.Description>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-[85%]  mx-auto  mb-10">
              <div className="mt-[30px]">
                <div className="">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-input mt-[10px]  font-sans p-[5px] w-[99%] rounded-xl shadow-lg bg-white"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              <div className="flex mt-[30px] gap-[10px]">
                <div className="">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="form-input mt-[10px] p-[5px]  rounded-xl shadow-lg bg-white"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="">
                  <label htmlFor="phone" className="block text-gray-700">
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-input mt-[10px] p-[5px]  rounded-xl shadow-lg bg-white"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div className="flex mt-[30px] gap-[10px]">
                <div className="">
                  <label htmlFor="company" className="block text-gray-700">
                    Company Name
                  </label>
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    className="form-input mt-[10px] p-[5px] rounded-xl shadow-lg bg-white"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="">
                  <label htmlFor="designation" className="block text-gray-700">
                    Designation
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="form-input mt-[10px] p-[5px] rounded-xl shadow-lg bg-white"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              {/* Add similar Field components for email, phoneNumber, company, and designation */}
              
              <div className="flex justify-center gap-[50px] mt-[40px]">
              
                <button
                  type="submit"
                  className="bg-[#6418C3] hover:bg-blue-600 text-white font-bold  rounded-md py-[10px] px-[35px]"
                >
                  Save
                </button>
                
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="bg-white font-bold  rounded-md py-[10px] px-[35px] text-[#6418C3] border-solid border border-[#6418C3]"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </Form>
          </Formik>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
