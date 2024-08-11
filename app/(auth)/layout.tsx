import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import appConstants from "@/config/constants";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect(appConstants.TUTOR_ROUTE);

  return ( <div className="bg-muted h-screen pt-8">
<ClerkProvider>{children}</ClerkProvider>
</div> );
}
