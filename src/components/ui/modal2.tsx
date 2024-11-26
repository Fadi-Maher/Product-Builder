// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { ReactNode } from "react";

// interface Iprops {
//   children: ReactNode;
//   onClose: () => void;
// }

// const Modal2 = ({ children, onClose }: Iprops) => {
//   const validationSchema = Yup.object({
//     productName: Yup.string().required("Product name is required"),
//     description: Yup.string().required("Description is required"),
//     imgUrl: Yup.string().url("Enter a valid URL").required("Image URL is required"),
//     price: Yup.number().positive("Price must be positive").required("Price is required"),
//   });

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10">
//       <div className="w-96 mx-auto p-4 bg-gray-400 shadow-lg rounded-md border relative top-32     ">
//         <h2 className="text-2xl font-semibold text-center mb-4">{children}</h2>

//         <Formik
//           initialValues={{
//             productName: "",
//             description: "",
//             imgUrl: "",
//             price: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             console.log("Form values:", values);
//             onClose();
//           }}
//         >
//           {() => (
//             <Form className="space-y-4">
//               <div>
//                 <label htmlFor="productName" className="block">Product Name</label>
//                 <Field
//                   type="text"
//                   id="productName"
//                   name="productName"
//                   placeholder="Enter product name"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <ErrorMessage name="productName" component="div" className="text-red-600 text-sm" />
//               </div>

//               <div>
//                 <label htmlFor="description" className="block">Description</label>
//                 <Field
//                   type="text"
//                   id="description"
//                   name="description"
//                   placeholder="Enter description"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <ErrorMessage name="description" component="div" className="text-red-600 text-sm" />
//               </div>

//               <div>
//                 <label htmlFor="imgUrl" className="block">Image URL</label>
//                 <Field
//                   type="text"
//                   id="imgUrl"
//                   name="imgUrl"
//                   placeholder="Enter image URL"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <ErrorMessage name="imgUrl" component="div" className="text-red-600 text-sm" />
//               </div>

//               <div>
//                 <label htmlFor="price" className="block">Price</label>
//                 <Field
//                   type="number"
//                   id="price"
//                   name="price"
//                   placeholder="Enter price"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <ErrorMessage name="price" component="div" className="text-red-600 text-sm" />
//               </div>

//               <div className="flex justify-end space-x-2">
//                 <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
//                   Submit
//                 </button>
//                 <button type="button" onClick={onClose} className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
//                   Close
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>

//   );
// };

// export default Modal2;
