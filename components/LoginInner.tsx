"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";

export function LoginInner() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      correo: formData.email,
      password: formData.password
    };

    try {
      const response = await fetch("https://epsilon.iny.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log("Login successful with data: ", payload);
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-r from-blue-900 via-inybg to-blue-900">
      <div className="max-w-2xl w-full mx-auto flex flex-col justify-center items-center">
        <img src="/iny.png" className="h-20 w-26 mb-4" alt="INY Logo" />
        <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200 text-center">
          ¡Bienvenido Inner!
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center mx-auto">
          Acá encontrarás todos los beneficios de pertenecer a la comunidad de Inners.
        </p>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>

        <button
          className="Reg-button w-full mt-4 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Iniciar Sesión &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4 mx-auto justify-center">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-white border border-gray-200"
            type="button"
          >
            <img src="/i-google.svg" className="h-4 w-4 text-neutral-800" />
            <span className="text-neutral-700 text-sm">
              Iniciar sesión con Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-blue-600"
            type="button"
          >
            <img src="/i-facebook.svg" className="h-4 w-4 text-white" />
            <span className="text-white text-sm">
              Iniciar sesión con Facebook
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-blue-700"
            type="button"
          >
            <img src="/i-linkedin.svg" className="h-4 w-4 text-white" />
            <span className="text-white text-sm">
              Iniciar sesión con LinkedIn
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
