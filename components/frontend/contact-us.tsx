"use client";

import {
  Mail,
  Phone,
  MapPin,
  LogIn,
  Send,
  PenLine,
  PhoneCall,
  School,
  PanelsTopLeft,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import PasswordInput from "../FormInputs/PasswordInput";
import SubmitButton from "../FormInputs/SubmitButton";
import TextArea from "../FormInputs/TextAreaInput";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Consultation Card */}
          <Card className="bg-[#1B5E20] text-white">
            <CardHeader>
              <h2 className="text-2xl font-semibold">
                Schedule a Consultation with Our Experts
              </h2>
              <p className="text-gray-100">
                Discuss your agricultural needs and explore tailored solutions
                with our sales team.
              </p>
            </CardHeader>
            <CardContent>
              <Button
                variant="secondary"
                className="bg-white text-[#1B5E20] hover:bg-gray-100"
              >
                Book your Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="bg-[#B4E33D]">
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-800">
                Contact Our Team
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-800">
                  <Mail className="h-5 w-5" />
                  <h3 className="font-semibold">Email Us</h3>
                </div>
                <div className="space-y-1 ml-7">
                  <p>info@agrikkom.co.ug</p>
                  <p>sales@agrikkom.co.ug</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-800">
                  <Phone className="h-5 w-5" />
                  <h3 className="font-semibold">Call Us</h3>
                </div>
                <div className="space-y-1 ml-7">
                  <p>+256 743 529 455</p>
                  <p>+256 758 289 019</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-800">
                  <MapPin className="h-5 w-5" />
                  <h3 className="font-semibold">Visit Us</h3>
                </div>
                <p className="ml-7">
                  Plot 3426, Kikulu Zone, Kyanja, Kampala, Uganda
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Přihlaste se, abyste zapojili svou školu
            </h3>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Křestní jméno"
                  register={register}
                  name="name"
                  errors={errors}
                  placeholder="Např. Karel"
                  icon={PenLine}
                />
                <TextInput
                  label="Příjmení"
                  register={register}
                  name="name"
                  errors={errors}
                  placeholder="Např. Novotný"
                  icon={PenLine}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Např. novotny@gmail.com"
                  icon={Mail}
                />
                <TextInput
                  label="Telefon"
                  register={register}
                  name="phone"
                  errors={errors}
                  placeholder="Např. "
                  icon={PhoneCall}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Název školy"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Např. Gymnázium Jihlava"
                  icon={School}
                />
                <TextInput
                  label="Země"
                  register={register}
                  name="country"
                  errors={errors}
                  placeholder="Např. "
                  icon={PhoneCall}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Školní web/stránka na sociálních sítích"
                  register={register}
                  name="schoolPage"
                  errors={errors}
                  placeholder="Např. http://www.gymnaziumjihlava.cz/"
                  icon={PanelsTopLeft}
                />
                <TextInput
                  label="Počet studentů"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="Např. 300"
                  icon={User}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Svou roli v organizaci"
                  register={register}
                  name="role"
                  errors={errors}
                  placeholder="role"
                  icon={User}
                />
                <TextInput
                  label="Zájem o produkt (Které funkce potřebujete?)"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="Např. "
                  icon={User}
                />
              </div>
              <TextInput
                label="Jak jste se o nás dozvěděli?"
                register={register}
                name="students"
                errors={errors}
                placeholder="Např."
                icon={User}
              />

              <SubmitButton
                buttonIcon={Send}
                title="Odeslat"
                loading={isLoading}
                loadingTitle="Odesílání, prosím čekejte..."
              />
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
