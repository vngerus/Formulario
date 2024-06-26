"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import Button from "@/shared/Button";

export function DataUser() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    region: "",
    comuna: "",
    street: "",
    houseNumber: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data: ", userData);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-r from-blue-900 via-inybg to-blue-900">
      <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
        Registro
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Bienvenido al registro
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Primer nombre</Label>
            <Input
              id="firstname"
              value={userData.firstname}
              onChange={handleChange}
              placeholder="nombre"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Apellido</Label>
            <Input
              id="lastname"
              value={userData.lastname}
              onChange={handleChange}
              placeholder="apellido"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="region">Región</Label>
          <Input
            id="region"
            value={userData.region}
            onChange={handleChange}
            placeholder="región"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="comuna">Comuna</Label>
          <Input
            id="comuna"
            value={userData.comuna}
            onChange={handleChange}
            placeholder="comuna"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="street">Calle</Label>
          <Input
            id="street"
            value={userData.street}
            onChange={handleChange}
            placeholder="calle"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="houseNumber">Número de vivienda</Label>
          <Input
            id="houseNumber"
            value={userData.houseNumber}
            onChange={handleChange}
            placeholder="número de vivienda"
            type="text"
          />
        </LabelInputContainer>

        <button
          className="Reg-button w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
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
