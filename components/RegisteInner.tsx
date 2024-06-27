"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";

export function RegisteInner() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    rut: "",
    age: "",
    occupation: "",
    region: "",
    comuna: "",
    street: "",
    houseNumber: "",
    source: "",
    otherSource: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      primer_nombre: userData.firstname,
      apellido: userData.lastname,
      correo: userData.email,
      rut: userData.rut,
      edad: parseInt(userData.age),
      password: userData.password,
      actividad_u_oficio: userData.occupation,
      region: userData.region,
      comuna: userData.comuna,
      calle: userData.street,
      numero: userData.houseNumber,
      como_supo_de_iny: userData.source !== "Otro" ? userData.source : userData.otherSource
    };

    try {
      const response = await fetch("https://epsilon.iny.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log("Form submitted successfully with data: ", payload);
      } else {
        console.error("Failed to submit form");

      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-r from-blue-900 via-inybg to-blue-900 flex justify-center items-center">
      <div className="max-w-2xl w-full mx-auto flex flex-col justify-center items-center">
        <img src="/iny.png" className="h-20 w-26 mb-4" alt="INY Logo" />
        <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200 text-center">
          ¡Convierte en Inner!
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center mx-auto">
          Bienvenido al registro de inners en donde podrás acceder a los mejores beneficios.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Primer nombre</Label>
              <Input
                id="firstname"
                value={userData.firstname}
                onChange={handleChange}
                placeholder="Nombre"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Apellido</Label>
              <Input
                id="lastname"
                value={userData.lastname}
                onChange={handleChange}
                placeholder="Apellido"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="rut">RUT</Label>
              <Input
                id="rut"
                value={userData.rut}
                onChange={handleChange}
                placeholder="Número de RUT con dígito verificador"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="age">Edad</Label>
              <Input
                id="age"
                value={userData.age}
                onChange={handleChange}
                placeholder="Edad"
                type="number"
                min="18"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="occupation">Actividad u oficio</Label>
              <Input
                id="occupation"
                value={userData.occupation}
                onChange={handleChange}
                placeholder="Actividad u oficio"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="region">Región</Label>
              <Input
                id="region"
                value={userData.region}
                onChange={handleChange}
                placeholder="Región"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="comuna">Comuna</Label>
              <Input
                id="comuna"
                value={userData.comuna}
                onChange={handleChange}
                placeholder="Comuna"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="street">Calle</Label>
              <Input
                id="street"
                value={userData.street}
                onChange={handleChange}
                placeholder="Calle o pasaje"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="houseNumber">Número</Label>
              <Input
                id="houseNumber"
                value={userData.houseNumber}
                onChange={handleChange}
                placeholder="Número de vivienda"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="source">¿Cómo supiste acerca de INY?</Label>
              <select
                id="source"
                value={userData.source}
                onChange={handleChange}
                className="input"
              >
                <option value="">Selecciona una opción</option>
                <option value="Facebook">Facebook</option>
                <option value="Amigo/conocido">Amigo/conocido</option>
                <option value="Buscador">Buscador</option>
                <option value="Radio/TV">Radio/TV</option>
                <option value="Otro">Otro</option>
              </select>
            </LabelInputContainer>
          </div>
          {userData.source === "Otro" && (
            <LabelInputContainer className="mb-4">
              <Label htmlFor="otherSource">Si eligió otro, favor indicar</Label>
              <Input
                id="otherSource"
                value={userData.otherSource}
                onChange={handleChange}
                placeholder="Por favor indique"
                type="text"
              />
            </LabelInputContainer>
          )}
          <LabelInputContainer>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              type="password"
            />
          </LabelInputContainer>

          <button
            className="Reg-button w-full mt-4 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Registrarte &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
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
