"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { redirect } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Categories,
  requireFields,
  formSchema,
  defaultValues,
} from "../add-products/config";
import { FullPageLoader } from "./FullPageLoader";
import { usePost } from "@/hooks/usePost";
import { apiDic } from "@/lib/apiDic";
import { ErrorMessage } from "./ErrorMessage";
import { isDisabled } from "@/utils/utils";

export default function ProfileForm() {
  const { postData, loading, error } = usePost(apiDic.products);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(values) {
    try {
      await postData(values);
      redirect("");
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="w-1/3 m-auto mt-10">
      {error && <ErrorMessage message={"this is error messgae"} />}
      <Label className="text-lg">Add Product</Label>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="productname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>

                    <SelectContent>
                      {Categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Price</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min={0} placeholder="Price" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isDisabled(requireFields, form.formState.dirtyFields)}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
