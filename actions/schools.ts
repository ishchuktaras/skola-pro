"use server";

import axios from "axios";
import { SchoolProps } from "@/components/dashboard/forms/school/school-admin-form";
import { revalidatePath } from "next/cache";
import { api } from "@/lib/api";
import { School } from "@/types/types";

export async function createSchool(data: SchoolProps) {
  try {
    const response = await api.post("/schools", data);
    revalidatePath("/dashboard/admin/schools");
    return response.data.data as School;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Školu se nepodařilo vytvořit";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getSchoolById(id: string | null | undefined) {
  if (id) {
    try {
      const response = await api.get(`/schools/${id}`);
      const school = response.data;
      console.log(school);
      return school as School;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else {
    const school = {
      id: null,
      name: null,
      logo: null,
      slug: null,
    };
    return school;
  }
}
