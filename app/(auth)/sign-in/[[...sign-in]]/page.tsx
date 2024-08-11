import appConstants from "@/config/constants";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="bg-green-200 grid place-items-center pt-4 min-h-screen">
      <SignIn fallbackRedirectUrl={appConstants.TUTOR_ROUTE} />
    </main>
  );
}