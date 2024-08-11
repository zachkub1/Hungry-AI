import Image from "next/image";
import Link from "next/link";

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
              <Image src="/img/MSAILogo.svg" alt="Medical Student AI" width={40} height={40} />
              <span className="sr-only">Medical Student AI</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/sign-in"
              >
                Login
              </Link>
            </nav>
          </header>
          <main className="flex-1 px-20">   
            <section className="w-full py-10">
            <div>
            <h1 className="text-4xl">Terms of Service</h1>
    <br />
    <section>
        <h2 className="text-2xl">1. Acceptance of Terms</h2>
        <p>
            By accessing and using MedicalStudent.ai, you agree to these Terms of Use. We reserve the right to update these terms at any time, and changes will be effective upon posting on our website.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">2. Services and Content</h2>
        <p>
            MedicalStudent.ai offers learning aids for medical students and doctors. Our website does not host user-generated content.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">3. User Accounts and Eligibility</h2>
        <p>
            While there are no specific eligibility requirements to create an account, our platform is designed primarily for medical education. Users are responsible for maintaining the security of their login information.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">4. Intellectual Property</h2>
        <p>
            The content on MedicalStudent.ai, generated by artificial intelligence, is not owned by any single party. Users are permitted to reuse and redistribute the educational material generated by our AI tools.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">5. User Conduct</h2>
        <p>
            Users are prohibited from asking offensive questions to the AI tools. We strive to maintain a respectful and professional environment.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">6. Disclaimers</h2>
        <p>
            The information provided by MedicalStudent.ai is generated by AI and, while generally accurate, may contain flaws. It is intended for educational purposes only and should not be considered as medical advice. We do not guarantee the availability or uptime of the website.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">7. Limitation of Liability</h2>
        <p>
            MedicalStudent.ai is not liable for the accuracy or reliability of information generated by the AI. Users should use the information at their own risk.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">8. Termination of Use</h2>
        <p>
            User access may be temporarily suspended due to payment failure.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">9. Governing Law</h2>
        <p>
            These Terms of Use are governed by the laws of the United States.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">10. Modifications to Terms</h2>
        <p>
            Users will be informed of any changes to these Terms of Use upon their next visit to the website. Note that we reserve the right to make modifications to the terms of service at our own discretion.
        </p>
    </section>

    <br />
    <section>
        <h2 className="text-2xl">11. Contact Information</h2>
        <p>
            For questions regarding these Terms of Use, please contact us at <a href="mailto:helpyoumatch@gmail.com">helpyoumatch@gmail.com</a>.
        </p>
    </section>
                </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              © 2024 Medical Student AI. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="/tou">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      );
}