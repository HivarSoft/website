import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, OAuthBox, LegalHeader, LegalFooter } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — HivarSoft",
  description:
    "Terms of Service for HivarSoft products including Notes AI and GitStats. Governs use of OAuth integrations with Google, GitHub, GitLab, and Bitbucket.",
  alternates: { canonical: "https://hivarsoft.com/terms" },
};

const LAST_UPDATED = "June 28, 2025";
const CONTACT_EMAIL = "hitesh.k.83080@gmail.com";
const COMPANY = "HivarSoft";
const WEBSITE = "https://hivarsoft.com";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <LegalHeader opposite="Privacy Policy" oppositeHref="/privacy" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-600 mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10">

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By accessing or using any {COMPANY} product or service — including{" "}
              <strong>Notes AI</strong> (<a href="https://notes-ai.hivarsoft.com" className="text-purple-600 hover:underline break-all">notes-ai.hivarsoft.com</a>)
              and <strong>GitStats</strong> (<a href="https://gitstats.hivarsoft.com" className="text-purple-600 hover:underline break-all">gitstats.hivarsoft.com</a>)
              — you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">2. Description of Services</h2>
            <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">
              {COMPANY} provides software products and services including:
            </p>
            <BulletList items={[
              "Notes AI — A note-taking application with rich text editing, infinite canvas, smart folders, and an AI assistant.",
              "GitStats — A Git analytics platform that processes repository data to produce engineering metrics, author analytics, and team insights.",
            ]} />
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">3. Third-Party OAuth Authentication</h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              Our services use OAuth 2.0 for authentication and third-party integrations. By authorising
              an OAuth connection, you grant {COMPANY} permission to access only the scopes explicitly
              requested during the authorisation flow.
            </p>
            <div className="space-y-3">
              <OAuthBox
                emoji="🔐" title="Google OAuth"
                intro="Used for account sign-in and authentication. We request only:"
                scopes={[
                  { code: "openid",  desc: "Verify your identity" },
                  { code: "email",   desc: "Your email address for account identification" },
                  { code: "profile", desc: "Your name and profile picture" },
                ]}
                notAccessed="We do not access Google Drive, Gmail, Calendar, or any other Google services. You may revoke access via Google Account Permissions."
              />
              <OAuthBox
                emoji="🐙" title="GitHub OAuth"
                intro="Used in GitStats to import repositories and read Git metadata:"
                scopes={[
                  { code: "read:user",       desc: "Your GitHub username and profile" },
                  { code: "repo (read-only)", desc: "Repository list and commit/branch metadata for analytics" },
                ]}
                notAccessed="We do not write to your repositories, create issues, manage secrets, or access private keys. Revoke via GitHub Authorized Apps."
              />
              <OAuthBox
                emoji="🦊" title="GitLab OAuth"
                intro="Used in GitStats to import GitLab repositories:"
                scopes={[
                  { code: "read_user",       desc: "Your GitLab profile information" },
                  { code: "read_repository", desc: "Read-only access to repository commits, branches, and metadata" },
                ]}
                notAccessed="We do not modify your GitLab projects, merge requests, or CI/CD pipelines. Revoke via GitLab profile Applications."
              />
              <OAuthBox
                emoji="🪣" title="Bitbucket OAuth"
                intro="Used in GitStats to import Bitbucket repositories:"
                scopes={[
                  { code: "account",      desc: "Your Bitbucket account information" },
                  { code: "repositories", desc: "Repository list, commits, and branch data (read-only)" },
                ]}
                notAccessed="We do not push code, manage pipelines, or access Bitbucket Deployments. Revoke via Bitbucket App Authorizations."
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">4. User Obligations</h2>
            <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">By using our services, you agree to:</p>
            <BulletList items={[
              "Provide accurate information when creating an account.",
              "Not use the services for any unlawful, harmful, or abusive purpose.",
              "Not attempt to reverse-engineer, scrape, or interfere with our infrastructure.",
              "Not upload repositories containing malware, illegal content, or data you do not have rights to process.",
              "Comply with the terms of any third-party OAuth provider you connect (Google, GitHub, GitLab, Bitbucket).",
            ]} />
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">5. Data and Privacy</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Your use of our services is also governed by our{" "}
              <Link href="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</Link>,
              incorporated by reference into these Terms. We collect and process only the data
              necessary to provide the requested service. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              All content, trademarks, logos, and software comprising our services are the property of{" "}
              {COMPANY} or its licensors. Some projects are open source and governed by their respective
              licenses on our{" "}
              <a href="https://github.com/HivarSoft" target="_blank" rel="noopener noreferrer"
                className="text-purple-600 hover:underline">GitHub organisation</a>.
              Open source licensing does not grant rights to our trademarks or brand assets.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">7. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our services are provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
              <strong>&ldquo;as available&rdquo;</strong> without warranties of any kind, express or implied.
              We do not warrant that the service will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To the maximum extent permitted by law, {COMPANY} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or in connection
              with your use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">9. Termination</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We reserve the right to suspend or terminate your access for conduct that violates these
              Terms. You may delete your account at any time by contacting{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline break-all">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may update these Terms from time to time. Continued use of our services after changes
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              These Terms shall be governed by applicable laws. Any disputes shall be resolved through
              good-faith negotiation before pursuing formal legal proceedings.
            </p>
          </section>

          <section className="bg-purple-50 rounded-2xl p-5 sm:p-6 border border-purple-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-slate-700">
              <p><strong>Company:</strong> {COMPANY}</p>
              <p><strong>Website:</strong>{" "}
                <a href={WEBSITE} className="text-purple-600 hover:underline break-all">{WEBSITE}</a>
              </p>
              <p><strong>Email:</strong>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline break-all">{CONTACT_EMAIL}</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <LegalFooter company={COMPANY} current="Terms of Service" opposite="Privacy Policy" oppositeHref="/privacy" />
    </div>
  );
}
