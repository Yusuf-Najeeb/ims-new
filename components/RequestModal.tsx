"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import DatePicker from "@/components/datePicker";
import { FileUploadInput } from "@/components/fileUploadInput";

const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(2, "Address must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  followUpCall: z.string().min(2, "Please select a service type"),
  serviceType: z.string().min(2, "Please select a service type"),
  description: z.string().min(2, "Description must be at least 2 characters"),
  appointmentDate: z.date(),
  contactTime: z.date(),
  comments: z.string().optional(),
  files: z.array(
    z
      .any()
      .refine((file) => file instanceof File, "Expected a File object")
      .refine(
        (file) => file.size <= MAX_FILE_SIZE,
        "File size should be less than 30MB"
      )
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, .png, .webp, .pdf, .doc and .docx files are accepted."
      )
  ),
});

type FormSchema = z.infer<typeof formSchema>;

const services = [
  { type: "electrical", name: " Electrical Installations" },
  { type: "solar", name: "Solar System Installation" },
  { type: "sound", name: "Sound System Installation" },
  { type: "maintenance", name: "Maintenance (All Kinds)" },
  { type: "others", name: "Other (Please specify)" },
];

interface DialogProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

export default function ServiceModal({ open, onClose }: DialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      followUpCall: "",
      serviceType: "",
      description: "",
      appointmentDate: new Date(),
      contactTime: new Date(),
      comments: "",
      files: [],
    },
  });

  async function onSubmit(data: FormSchema) {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    // Here you would typically send the data to your server
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    setIsSubmitting(false);
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Request</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Info */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+234 2342 2334" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Where your project is..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Which city is your project located..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Province</FormLabel>
                      <FormControl>
                        <Input placeholder="Tell us your state" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.name} value={service.type}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe the Issue or Service</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Service details */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="appointmentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Appointment Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          date={format(field.value, "PPP")}
                          setDate={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="followUpCall"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Available for Follow-up call?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="State your availability" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="maybe">Maybe</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="contactTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Best Time to Contact You</FormLabel>
                      <FormControl>
                        <DatePicker
                          date={format(field.value, "PPP")}
                          setDate={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="You can add any additional comments"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => <FileUploadInput field={field} />}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="sm:w-[20%] bg-[#F0A500] hover:bg-[#F0A500]/80 text-[#111837] transition"
              >
                {isSubmitting ? "Please wait..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
