import { z } from "zod";

export const formSchema = z.object({
    productname: z.string().min(2, {
      message: "Product Name must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "description must be at least 2 characters.",
    }),
    category: z.string().min(1, { message: "Please select a category." }),
  
    price: z.string().min(1, {message: "Please enter a price"})
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Price must be a valid positive number." })
    .transform((value) => parseFloat(value))
    
  });
  
  export const requireFields = {
      productname: false,
      description:false,
      category: false,
      price: false,
  }
  
  export const Categories = [
      { value: 'phone', label: 'Phone' },
      { value: 'cloths', label: 'Cloths' },
      { value: 'shoes', label: 'Shoes' },
    ];

    export const defaultValues = {
        productname: "",
        description:"",
        category: "",
        price: "",
    }