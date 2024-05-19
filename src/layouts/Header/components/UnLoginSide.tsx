"use client";
import React, { useState } from "react";
import { PrimaryButton } from "../../../components/Button/PrimaryButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "../header.module.scss";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { GoogleLoginButton } from "@/components/Button/GoogleLoginButton";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username must be fill in the blank.",
  }),
  password: z.string().min(1, {
    message: "Password must be fill in the blank.",
  }),
});

export default function UnLoginSide() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex justify-end gap-x-2">
      <PrimaryButton text="Get app" className="bg-slate-200 hidden xl:block" />

      <Dialog>
        <DialogTrigger>
          <PrimaryButton text="Log in" className="bg-orange-600 text-white" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className={styles.DialogHeader}>
            <DialogTitle className={styles.DialogDialogTitle}>
              Log In
            </DialogTitle>
            <GoogleLoginButton className="!mt-5 !py-7" />
            <div className="text-2xl !mt-5 flex justify-center">HOẶC</div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 !mt-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className="py-7"
                          placeholder="Email or username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          className="py-7"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem>
                  <Link
                    href="https://www.reddit.com/"
                    className="text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </FormItem>
                <Button
                  disabled={!form.formState.isValid}
                  type="submit"
                  className={styles.DialogFormBtn}
                >
                  Log In
                </Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
