export const productValidation = (product: {
  title: string;
  description: string;
  imgURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imgURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imgURL: "",
    price: "",
  };
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "product title must have 10 character min";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 800
  ) {
    errors.description = "description must have min 10 character ";
  }
  if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp)$/.test(product.imgURL)) {
    errors.imgURL = "imgURL must be a valid image URL (e.g., .jpg, .png, .gif)";
  }
  if (
    !product.price.trim() ||
    isNaN(Number(product.price)) ||
    product.price.length > 80
  ) {
    errors.price = "price must be a number";
  }
  return errors;
};
