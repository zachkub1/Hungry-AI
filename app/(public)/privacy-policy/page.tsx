import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                    <h1 className="text-4xl">Privacy Policy</h1>
                    <br />
                    <section>
                        <h2 className="text-2xl">1. Introduction</h2>
                        <p>
                            MedicalStudent.ai is committed to protecting the privacy and security of our users. This Privacy Policy outlines how we handle your personal information in alignment with legal standards and best practices. Our website provides educational AI tools tailored for medical doctors and students.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">2. Information Collection</h2>
                        <p>
                            We collect personal data such as names, email addresses, and profile images through Google OAuth when you sign in to our service. This information is used to create and manage your user account. For payment processing, we utilize Stripe, which may collect additional payment-related information. Additionally, we use cookies to enhance your browsing experience and gather analytics data.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">3. Use of Collected Information</h2>
                        <p>
                            The data collected is primarily used for setting up and managing user accounts, personalized user experience, and for our internal marketing purposes. We do not use your data for automated decision-making or profiling.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">4. Data Sharing and Third-Party Involvement</h2>
                        <p>
                            We share necessary user data with Stripe solely for transaction processing. No personal data obtained from Google services is shared with other third parties, except as required by law or as necessary for providing the services you have requested.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">5. Data Security Measures</h2>
                        <p>
                            We prioritize the security of your personal information. Our website employs SSL encryption, and we adhere to secure data storage practices. We have had no incidents of data breaches to date.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">6. User Rights and Choices</h2>
                        <p>
                            You can access, modify, or request deletion of your data at any time by emailing us at info@helpyoumatch.com. This includes any data collected via Google OAuth.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">7. International Data Transfer and Storage</h2>
                        <p>
                            Hosted by Vercel, MedicalStudent.ai complies with applicable laws and Google&apos;s requirements regarding international data transfer and storage.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">8. Cookies and Tracking Technologies</h2>
                        <p>
                            Our website uses cookies to improve your experience. You have the option to opt-out of cookie usage.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">9. Policy Updates</h2>
                        <p>
                            We may update this policy as necessary, particularly to remain compliant with Google&apos;s policies and relevant laws. Significant changes will be communicated through our website or via email.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">10. Contact Information</h2>
                        <p>
                            For privacy-related concerns or questions, contact us at helpyoumatch@gmail.com.
                        </p>
                    </section>

                    <br />
                    <section>
                        <h2 className="text-2xl">Additional Compliance with Google Policies</h2>
                        <p>
                            We adhere to Google&apos;s API Services User Data Policy, including the Limited Use requirements. The information received from Google APIs will be used in accordance with Google&apos;s policies and will not be used for advertising purposes. We conduct regular audits to ensure compliance with these policies and applicable data protection laws.
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