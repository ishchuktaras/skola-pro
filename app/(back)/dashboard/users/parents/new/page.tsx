
import ParentForm from "@/components/dashboard/forms/users/parent-form";
import { Card, CardContent } from "@/components/ui/card";

interface AdmissionTabsProps {
  searchParams: Promise<{ tab?: string }>;
}

export default async function AdmissionTabs({
  searchParams,
}: AdmissionTabsProps) {
  const params = await searchParams;
  const tab = params.tab || "single";

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card className="border-t-2 border-purple-500">
        <CardContent className="p-6">
          <ParentForm />
        </CardContent>
      </Card>
    </div>
  );
}
