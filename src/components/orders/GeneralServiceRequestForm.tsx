import React, { useState, useEffect } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  serviceType: z.string().min(1, {
    message: "Please select a service type.",
  }),
  budget: z.string().optional(),
  serviceDetails: z.string().min(10, {
    message: "Service details must be at least 10 characters.",
  }),
})

const serviceOptions = [
  { value: "digital-marketing", label: "Digital Marketing", labelAr: "التسويق الرقمي" },
  { value: "content-creation", label: "Content Creation", labelAr: "إنشاء المحتوى" },
  { value: "seo", label: "SEO", labelAr: "تحسين محركات البحث" },
  { value: "social-media", label: "Social Media Management", labelAr: "إدارة وسائل التواصل الاجتماعي" },
  { value: "web-development", label: "Web Development", labelAr: "تطوير الويب" },
];

const servicePackages = {
  "digital-marketing": [
    { value: "basic", label: "Basic Package - 1,500 ريال/شهرياً", labelAr: "الباقة الأساسية - 1,500 ريال/شهرياً" },
    { value: "advanced", label: "Advanced Package - 3,000 ريال/شهرياً", labelAr: "الباقة المتقدمة - 3,000 ريال/شهرياً" },
    { value: "professional", label: "Professional Package - 5,000 ريال/شهرياً", labelAr: "الباقة الاحترافية - 5,000 ريال/شهرياً" },
  ],
  "content-creation": [
    { value: "content-creation-basic", label: "Basic - Price for Content Creation", labelAr: "أساسي - سعر إنشاء المحتوى" },
    { value: "content-creation-advanced", label: "Advanced - Price for Content Creation", labelAr: "متقدم - سعر إنشاء المحتوى" },
  ],
  "seo": [
    { value: "seo-basic", label: "Basic - Price for SEO", labelAr: "أساسي - سعر تحسين محركات البحث" },
    { value: "seo-advanced", label: "Advanced - Price for SEO", labelAr: "متقدم - سعر تحسين محركات البحث" },
  ],
  "social-media": [
    { value: "social-media-basic", label: "Basic - Price for Social Media", labelAr: "أساسي - سعر إدارة وسائل التواصل الاجتماعي" },
    { value: "social-media-advanced", label: "Advanced - Price for Social Media", labelAr: "متقدم - سعر إدارة وسائل التواصل الاجتماعي" },
  ],
  "web-development": [
    { value: "web-dev-basic", label: "Basic - Price for Web Development", labelAr: "أساسي - سعر تطوير الويب" },
    { value: "web-dev-advanced", label: "Advanced - Price for Web Development", labelAr: "متقدم - سعر تطوير الويب" },
  ],
};


const GeneralServiceRequestForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [budgetOptions, setBudgetOptions] = useState([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      serviceType: "",
      budget: "",
      serviceDetails: "",
    },
  })

  useEffect(() => {
    if (selectedService) {
      setBudgetOptions(servicePackages[selectedService] || []);
    } else {
      setBudgetOptions([]);
    }
  }, [selectedService]);

  const languageDir = document.documentElement.dir;
  const isArabic = languageDir === 'rtl';


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isArabic ? "طلب خدمة عام" : "General Service Request"}</CardTitle>
        <CardDescription>{isArabic ? "يرجى ملء النموذج أدناه لطلب الخدمة." : "Please fill out the form below to request a service."}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isArabic ? "رقم الهاتف" : "Phone Number"}</FormLabel>
                  <FormControl>
                    <Input placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"} type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isArabic ? "نوع الخدمة" : "Service Type"}</FormLabel>
                  <Select onValueChange={(value) => {field.onChange(value); setSelectedService(value); form.setValue("budget", "");}} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={isArabic ? "اختر نوع الخدمة" : "Select a service type"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {isArabic ? service.labelAr : service.label}
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
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isArabic ? "ميزانية الخدمة" : "Service Budget"}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={budgetOptions.length === 0}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={isArabic ? "اختر ميزانية" : "Select a budget"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {budgetOptions.map((budget) => (
                        <SelectItem key={budget.value} value={budget.value}>
                          {isArabic ? budget.labelAr : budget.label}
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
              name="serviceDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isArabic ? "تفاصيل طلب الخدمة" : "Service Request Details"}</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the service you need" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{isArabic ? "أرسل الطلب" : "Submit Request"}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default GeneralServiceRequestForm;