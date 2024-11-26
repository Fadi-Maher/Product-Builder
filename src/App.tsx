import ProductCard from "./components/productCard";
import { ProductList } from "./data";
import Modal from "./components/ui/modal";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Button from "./components/ui/button";
import { formInputsLists } from "./data";
// import { div } from "framer-motion/client";
// import Modal2 from "./components/ui/modal2";
import Input from "./components/ui/input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
// import { object } from "yup";
import ErrorMsg from "./components/errorMsg";
import { colors } from "./data";
import CircleColor from "./components/circleColor";
import { v4 as uuid } from "uuid";
import Category from "./components/ui/select";
import { categories } from "./data";
 import DeleteDialog from "./components/deleteDialog";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

// import { input } from "framer-motion/client";
// import { Description } from "@headlessui/react";

function App() {

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(ProductList);  
    }
  }, []);






  
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imgURL: "",
    price: "",
    category: {
      name: "",
      imgURL: "",
    },
    colors: [],
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(null);
   const [isEditOpen, setIsEditOpen] = useState(false);
  const [productEdit, setProductEdit] = useState<IProduct>({
    title: "",
    description: "",
    imgURL: "",
    price: "",
    category: {
      name: "",
      imgURL: "",
    },
    colors: [],
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[2]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);


  function onchangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Validate form inputs
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imgURL: product.imgURL,
      price: product.price,
    });

    const hasErrorMsg = Object.values(errors).some((value) => value !== "");
    if (hasErrorMsg) {
      setErrors(errors);
      return;
    }

    // Update the products array
    setProducts((prev) => {
      const updatedProducts = prev.map((p) =>
        p.id === productEdit.id
          ? { ...p, ...product, colors: tempColors, category: selectedCategory }
          : p
      );

      // Save the updated product list to localStorage
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      
      toast("The product has been Edited!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return updatedProducts;
    });

    // Reset the form and other states after the update
    setProduct({
      title: "",
      description: "",
      imgURL: "",
      price: "",
      category: {
        name: "",
        imgURL: "",
      },
      colors: [],
    });

    setTempColors([]);
    setIsEditOpen(false);
  };


  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Validate product
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imgURL: product.imgURL,
      price: product.price,
    });

    // Check if there are errors
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    // Add product to the products state
    const newProduct = {
      ...product,
      id: uuid(),
      colors: tempColors,
      category: selectedCategory,
    };

    setProducts((prev) => {
      const updatedProducts = [newProduct, ...prev];

      // Save the updated products list to localStorage
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      
      toast("The product has been added!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return updatedProducts;
    });

    // Clear form fields and reset states
    setProduct({
      title: "",
      description: "",
      imgURL: "",
      price: "",
      category: {
        name: "",
        imgURL: "",
      },
      colors: [],
    });

    setTempColors([]);
    closeModal();
  };

  
  const onCancel = () => {
    console.log("canceled");
    setProduct({
      title: "",
      description: "",
      imgURL: "",
      price: "",
      category: {
        name: "",
        imgURL: "",
      },
      colors: [],
    });
    closeModal();
  };

  // const [modal2Show, setModal2Show] = useState(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = (product: IProduct) => {
    setProductEdit(product);
    setProduct({
      ...product,
      title: product.title,
      description: product.description,
      imgURL: product.imgURL,
      category: { ...product.category },
      price: product.price,
    });
    setTempColors(product.colors);
    setIsEditOpen(true);
  };

  const closeEditModal = () => setIsEditOpen(false);

  const openDialogModal = (id: string) => {
    setProductIdToDelete(id)
    console.log(id)
    setIsDialogOpen(true);
  };
  const closeDialogModal = () => {
    setIsDialogOpen(false);
  };




  const renderProductList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductEdit={openEditModal}
      openDialog={() => openDialogModal(product.id)}  // Pass product id to openDialogModal
       
    />
  ));

  const renderFormInputList = formInputsLists.map((input) => (
    <div className="flex flex-col w-auto" key={input.id}>
      <label className="font-semibold" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onchangeHandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  const renderProductColor = colors.map((color) => {
    return (
      <CircleColor
        color={color}
        key={color}
        onClick={() => {
          if (tempColors.includes(color)) {
            setTempColors((prev) => prev.filter((item) => item !== color));
            return;
          }
          setTempColors((prev) => [...prev, color]);
        }}
      />
    );
  });


  // const openDialog = () => {
  //   setIsDialogOpen(true);
  //   console.log("Opening dialog")
  // };


  const removeProductHandler = () => {
    if (productIdToDelete) {
      console.log("You want to delete product with id:", productIdToDelete);

     
      const filtered = products.filter((product) => product.id !== productIdToDelete);

  
      setProducts(filtered);

 
      localStorage.setItem("products", JSON.stringify(filtered));

      // Display a toast notification for the successful deletion
      toast("The product has been deleted!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
     
      setIsDialogOpen(false);
    }
  };

     

  return (
    <main className="  mx-auto w-3/4 md:w-3/4 lg:w-3/4 ">
      {/* 
      <Button onClick={() => setModal2Show(true)}
        className="bg-indigo-600 text-white p-2 rounded mt-10">
        Add newwww Product
      </Button>


      {modal2Show && (

        <Modal2 onClose={() => setModal2Show(false)}>
          <div>add new product</div>
        </Modal2>

      )} */}

      <Button
        onClick={openModal}
        className="bg-indigo-600 text-white p-2 rounded"
      >
        Add Product
      </Button>
      {/* add  model*/}
      <Modal 
        isOpen={isModalOpen}
        closeModal={closeModal}
        title="Add New Product"
      >
        <form className="space-y-3 " onSubmit={submitHandler}>
          {renderFormInputList}

          <Category
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          <div className="flex items-center space-x-2">
            {renderProductColor}
          </div>

          <div className="flex items-center flex-wrap space-x-1">
            {tempColors.map((color) => (
              <span
                className="p-1 rounded"
                style={{ backgroundColor: color }}
                key={color}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex flex-1 gap-2">
            <Button className="bg-indigo-900 p-2 rounded  ">submit</Button>
            <Button className="bg-red-900 p-2 rounded " onClick={onCancel}>
              cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Product Modal */}
      {isEditOpen && (
        <Modal
          isOpen={isEditOpen}
          closeModal={closeEditModal}
          title="Edit Product"
        >
          <form className="space-y-3" onSubmit={submitEditHandler}>
            {renderFormInputList}

            <Category
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />

            <div className="flex items-center space-x-2">
              {renderProductColor}
            </div>

            <div className="flex items-center flex-wrap space-x-1">
              {tempColors.map((color) => (
                <span
                  className="p-1 rounded"
                  style={{ backgroundColor: color }}
                  key={color}
                >
                  {color}
                </span>
              ))}
            </div>

            <div className="flex flex-1 gap-2">
              <Button className="bg-indigo-900 p-2 rounded">Submit</Button>
              <Button className="bg-red-900 p-2 rounded" onClick={onCancel}> Cancel </Button>
            </div>
          </form>
        </Modal>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-3">
        {renderProductList}
      </div>



     {/* delete dialog */}
     {isDialogOpen && <DeleteDialog onClose={closeDialogModal} onDelete={removeProductHandler}/> }

          
                   
      <ToastContainer/>
            

    </main>
  );
}

export default App;
