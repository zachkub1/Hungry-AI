import appConstants from "@/config/constants";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="bg-green-200 grid place-items-center pt-4 min-h-screen">
      <SignUp fallbackRedirectUrl={appConstants.TUTOR_ROUTE} />
    </main>
  );
}