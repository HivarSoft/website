import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/Logo.png" alt="HivarSoft" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
              HivarSoft
            </span>
          </Link>
          <Link href="/privacy"
            className="text-sm text-slate-500 hover:text-purple-600 transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">

          {/* Acceptance */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using any {COMPANY} product or service — including but not limited to
              <strong> Notes AI</strong> (<a href="https://notes-ai.hivarsoft.com" className="text-purple-600 hover:underline">notes-ai.hivarsoft.com</a>)
              and <strong>GitStats</strong> (<a href="https://gitstats.hivarsoft.com" className="text-purple-600 hover:underline">gitstats.hivarsoft.com</a>)
              — you agree to be bound by these Terms of Service and all applicable laws and regulations.
              If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Description of Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {COMPANY} provides software products and services including:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex gap-2"><span className="text-purple-500 mt-1">•</span>
                <span><strong>Notes AI</strong> — A note-taking application with rich text editing, infinite canvas, smart folders, and an AI assistant.</span>
              </li>
              <li className="flex gap-2"><span className="text-purple-500 mt-1">•</span>
                <span><strong>GitStats</strong> — A Git analytics platform that processes repository data to produce engineering metrics, author analytics, and team insights.</span>
              </li>
            </ul>
          </section>

          {/* OAuth */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Third-Party OAuth Authentication</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our services use OAuth 2.0 to allow you to authenticate and connect third-party accounts.
              By authorising an OAuth connection, you grant {COMPANY} permission to access only the scopes
              explicitly requested during the authorisation flow.
            </p>

            <div className="space-y-5">
              {/* Google */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-lg">🔐</span> Google OAuth
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Used for account sign-in and authentication. We request only the minimum required scopes:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">openid</code> — Verify your identity</li>
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">email</code> — Your email address for account identification</li>
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">profile</code> — Your name and profile picture</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">
                  We do not access your Google Drive, Gmail, Calendar, or any other Google services.
                  Access tokens are stored securely and are never shared with third parties.
                  You may revoke access at any time via <a href="https://myaccount.google.com/permissions" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Account Permissions</a>.
                </p>
              </div>

              {/* GitHub */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-lg">🐙</span> GitHub OAuth
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Used in GitStats to import repositories and read Git metadata. We request:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">read:user</code> — Your GitHub username and profile</li>
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">repo</code> (read-only) — Repository list and commit/branch metadata for analytics</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">
                  We do not write to your repositories, create issues, manage secrets, or access your private keys.
                  You may revoke access via <a href="https://github.com/settings/applications" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Authorized Apps</a>.
                </p>
              </div>

              {/* GitLab */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-lg">🦊</span> GitLab OAuth
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Used in GitStats to import GitLab repositories. We request:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">read_user</code> — Your GitLab profile information</li>
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">read_repository</code> — Read-only access to repository commits, branches, and metadata</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">
                  We do not modify your GitLab projects, merge requests, or CI/CD pipelines.
                  You may revoke access via your GitLab profile under Applications.
                </p>
              </div>

              {/* Bitbucket */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-lg">🪣</span> Bitbucket OAuth
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Used in GitStats to import Bitbucket repositories. We request:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">account</code> — Your Bitbucket account information</li>
                  <li>• <code className="bg-slate-200 px-1 rounded text-xs">repositories</code> (read-only) — Repository list, commits, and branch data</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">
                  We do not push code, manage pipelines, or access Bitbucket Deployments.
                  You may revoke access via <a href="https://bitbucket.org/account/settings/app-authorizations/" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Bitbucket App Authorizations</a>.
                </p>
              </div>
            </div>
          </section>

          {/* User obligations */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. User Obligations</h2>
            <p className="text-slate-600 leading-relaxed mb-3">By using our services, you agree to:</p>
            <ul className="space-y-2 text-slate-600">
              {[
                "Provide accurate information when creating an account.",
                "Not use the services for any unlawful, harmful, or abusive purpose.",
                "Not attempt to reverse-engineer, scrape, or interfere with our infrastructure.",
                "Not upload repositories containing malware, illegal content, or data you do not have rights to process.",
                "Comply with the terms of any third-party OAuth provider you connect (Google, GitHub, GitLab, Bitbucket).",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-purple-500 mt-1 shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Data & Privacy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data and Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Your use of our services is also governed by our{" "}
              <Link href="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</Link>,
              which is incorporated by reference into these Terms. We collect and process only the data
              necessary to provide the requested service. We do not sell your personal data.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content, trademarks, logos, and software comprising our services are the property of {" "}
              {COMPANY} or its licensors. Many of our projects are open source and governed by their
              respective open source licenses available on our{" "}
              <a href="https://github.com/HivarSoft" target="_blank" rel="noopener noreferrer"
                className="text-purple-600 hover:underline">GitHub organisation</a>.
              Open source licensing does not grant rights to our trademarks or brand assets.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed">
              Our services are provided <strong>&ldquo;as is&rdquo;</strong> and <strong>&ldquo;as available&rdquo;</strong> without
              warranties of any kind, express or implied. We do not warrant that the service will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, {COMPANY} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages — including loss of profits, data,
              or goodwill — arising out of or in connection with your use of the services.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to any service at our sole
              discretion, with or without notice, for conduct that we believe violates these Terms or is
              harmful to other users, us, or third parties. You may delete your account at any time by
              contacting us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of significant changes by
              updating the &ldquo;Last updated&rdquo; date above. Continued use of our services after changes
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws.
              Any disputes shall be resolved through good-faith negotiation before pursuing formal
              legal proceedings.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p><strong>Company:</strong> {COMPANY}</p>
              <p><strong>Website:</strong>{" "}
                <a href={WEBSITE} className="text-purple-600 hover:underline">{WEBSITE}</a>
              </p>
              <p><strong>Email:</strong>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline">{CONTACT_EMAIL}</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 mt-16 py-8 text-center text-sm text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} {COMPANY}. All rights reserved. &nbsp;·&nbsp;{" "}
          <Link href="/privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link>
          &nbsp;·&nbsp;
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
        </p>
      </footer>
    </div>
  );
}
