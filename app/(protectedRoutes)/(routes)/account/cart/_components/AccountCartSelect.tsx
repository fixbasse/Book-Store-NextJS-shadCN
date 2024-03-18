"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

import AccoutCartSidebar from "./AccountCartSidebar"
import AccountCartOrder from "./AccountCartOrder"
import { cartData } from "@/data"


const FormSchema = z.object({
  cartData: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

// interface AccountCartSelectProps {
//   cartData: cartDataType
// }

export function AccountCartSelect() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cartData: ["1", "2"],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-4">

          <div className="bg-background p-4 rounded-md lg:w-[70%]">
            <FormField
              control={form.control}
              name="cartData"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Select</FormLabel>
                  </div>
                  
                  {cartData.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="cartData"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                onSubmit={form.handleSubmit(onSubmit)}
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
          </div>


          <section className="flex flex-col gap-4 lg:w-[30%]">
            <aside className='bg-background p-4 rounded-md' >
              <AccoutCartSidebar />
            </aside>

            <aside className="bg-background p-4 rounded-md">
              <AccountCartOrder />
            </aside>
          </section>
        </div>

      </form>
    </Form>
  )
}
