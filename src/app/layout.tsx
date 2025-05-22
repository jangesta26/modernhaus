'use client';

import "@/styles/globals.css";
import { poppins } from "@/lib/fonts";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Head from "./head";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // duration of loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head />
      <body className={poppins.className}>
        {loading ? (
          <Loader />
        ) : (
          <DefaultLayout>
            {children}
          </DefaultLayout>
        )}
      </body>
    </html>
  );
}
