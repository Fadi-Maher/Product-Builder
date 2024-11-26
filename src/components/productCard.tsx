import { IProduct } from "../interfaces";
import Image from "./image";
import Button from "./ui/button";
// import { txtSlicer } from "../utiles/function";
import { useState } from "react";
import CircleColor from "./circleColor";
 
  
interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openDialog: (id:any) => void;
  
}

const ProductCard = ({ product, setProductEdit , openDialog  }: IProps) => {
  const [showDetails, setShowDetails] = useState(false);
 
  // rendercolors
  const renderProductColor = product.colors.map((color) => {
    return <CircleColor color={color} key={color} />;
  });

  const toggleDescription = () => {
    setShowDetails(!showDetails);
  };

  const handleEditClick = () => {
    setProductEdit(product); 
  };

  const handleRemoveClick = (id:any) => {
    console.log(id)
    // setProductEdit(product)
    openDialog(product.id);  
  };

   


 

  // const deleteProduct = ( ) => {
  //    const updatedProductList = ProductList.filter((item) => item.id !== product.id);
  //   setProducts(updatedProductList);  
  // };
  
  return (
    <div className="border rounded-md p-2 flex flex-col my-2">
      <Image
        ImageUrl={product.imgURL}
        alt="car"
        className="rounded w-52 h-52 m-auto"
      />

      <h3 className="font-bold mt-2">{product.title}</h3>

      <p className="font-medium">
        {showDetails
          ? product.description
          : `${product.description.slice(0, 100)}...`}
      </p>

      <div
        onClick={toggleDescription}
        className="font-bold cursor-pointer text-blue-900 "
      >
        {showDetails ? "Read Less ..." : "Read More ..."}
      </div>

      <div className="  flex gap-2 ">{renderProductColor}</div>

      {/*             
            <div className="flex gap-2 my-2">
                <span className="w-5 h-5 rounded-full cursor-pointer bg-red-700" />
                <span className="w-5 h-5 rounded-full cursor-pointer bg-yellow-700" />
                <span className="w-5 h-5 rounded-full cursor-pointer bg-green-700" />
            </div> */}

      <div className="flex items-center justify-between">
        <span className="text-blue-900 font-bold ">${product.price}</span>
        <Image
          ImageUrl={product.category.imgURL}
          alt="car"
          className="w-5 h-5 rounded-full object-bottom"
        />
      </div>

      <div className="flex justify-between gap-2 my-2">
        <Button onClick={handleEditClick} className=" bg-indigo-600"> EDIT</Button>
        <Button onClick={() =>{handleRemoveClick(product.id)}}  className=" bg-red-600  ">REMOVE</Button>
       </div>  
     
       {/* onDelete={() => removeProductHandler}  */}
    </div>
  );
};

export default ProductCard;
