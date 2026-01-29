// import { addProductToCompare } from "@/components/screens/comapre/Compare";
// import { getApi, postApi } from "@/libs/api_methods";
// import {
//   GET_All_MOBILE_DETAIL,
//   GET_MOBILE_DETAIL,
//   GET_SEO,
// } from "@/routes/routes";
// import toast from "react-hot-toast";

// export const GetProductDetail = async (id) => {
//   const phone = await getApi({
//     url: `${GET_MOBILE_DETAIL}/${id}`,
//   });
//   return phone;
// };
// export const GetProducts = async (credentials) => {
//   const phone = await postApi({
//     url: GET_All_MOBILE_DETAIL,
//     credentials,
//   });
//   return phone;
// };
// export const getSeo = async (credentials) => {
//   const seo = await postApi({
//     url: GET_SEO,
//     credentials,
//   });
//   return seo?.data?.data?.seo;
// };

// export const collectionGetProducts = async (credentials) => {
//   try {
//     const res = await postApi({
//       url: GET_All_MOBILE_DETAIL,
//       credentials,
//     });
//     return res?.data || [];
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     return [];
//   }
// };

// export const handleAddCompare = async (productId) => {
//   const result = await addProductToCompare(productId);
//   if (result.success) {
//     toast.success("Product added To Compare");
//   } else {
//     console.error(result.error);
//     toast.error("Only Three Product limit to compare");
//   }
// };
