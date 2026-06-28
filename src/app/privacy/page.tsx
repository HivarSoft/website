import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — HivarSoft",
  description:
    "Privacy Policy for HivarSoft products. Explains how we collect, use, and protect your data when using OAuth with Google, GitHub, GitLab, and Bitbucket.",
  alternates: { canonical: "https://hivarsoft.com/privacy" },
};

const LAST_UPDATED = "June 28, 2025";
const CONTACT_EMAIL = "hitesh.k.83080@gmail.com";
const COMPANY = "HivarSoft";
const WEBSITE = "https://hivarsoft.com";

export default function PrivacyPolicy() {
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
          <Link href="/terms"
            className="text-sm text-slate-500 hover:text-purple-600 transition-colors">
            Terms of Service →
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">

          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Overview</h2>
            <p className="text-slate-600 leading-relaxed">
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, store, and share information when you
              use our products — including <strong>Notes AI</strong> and <strong>GitStats</strong> — and
              when you connect third-party services via OAuth (Google, GitHub, GitLab, Bitbucket).
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              We follow the principle of <strong>data minimisation</strong> — we only collect what is
              strictly necessary to provide the service you requested.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>

            <h3 className="text-base font-semibold text-slate-800 mb-2 mt-5">2.1 Account Information</h3>
            <p className="text-slate-600 leading-relaxed">
              When you sign up or sign in via OAuth, we receive basic profile information from the
              provider you choose, including your name, email address, and profile picture.
              We use this information solely to create and manage your account.
            </p>

            <h3 className="text-base font-semibold text-slate-800 mb-2 mt-5">2.2 OAuth Data — By Provider</h3>
            <div className="space-y-4 mt-3">

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span>🔐</span> Google
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  We receive the following data from Google upon authorisation:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Name, email address, and profile picture (<code className="bg-slate-200 px-1 rounded text-xs">openid</code>, <code className="bg-slate-200 px-1 rounded text-xs">email</code>, <code className="bg-slate-200 px-1 rounded text-xs">profile</code> scopes)</li>
                  <li>• A unique Google user identifier used to link your account</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3 font-medium">
                  What we do NOT access: Gmail, Google Drive, Google Calendar, Contacts, or any other Google service data.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span>🐙</span> GitHub
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  For GitStats users who connect GitHub:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• GitHub username, avatar, and public profile information</li>
                  <li>• Repository names, commit history, branch names, author metadata, and file statistics (read-only)</li>
                  <li>• This data is processed to generate analytics and is not stored beyond the session or dashboard cache</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3 font-medium">
                  What we do NOT access: repository secrets, GitHub Actions, Issues, Pull Request content, billing information, or SSH keys.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span>🦊</span> GitLab
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  For GitStats users who connect GitLab:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• GitLab username, email, and avatar (<code className="bg-slate-200 px-1 rounded text-xs">read_user</code> scope)</li>
                  <li>• Commit logs, branch names, and contributor metadata (<code className="bg-slate-200 px-1 rounded text-xs">read_repository</code> scope)</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3 font-medium">
                  What we do NOT access: Merge Requests, CI/CD pipelines, container registry, or deployment keys.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span>🪣</span> Bitbucket
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  For GitStats users who connect Bitbucket:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Bitbucket account username and avatar (<code className="bg-slate-200 px-1 rounded text-xs">account</code> scope)</li>
                  <li>• Repository list, commits, branches, and file history (<code className="bg-slate-200 px-1 rounded text-xs">repositories</code> read scope)</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3 font-medium">
                  What we do NOT access: Bitbucket Pipelines, Deployments, Jira integrations, or team billing data.
                </p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-slate-800 mb-2 mt-5">2.3 Usage Data</h3>
            <p className="text-slate-600 leading-relaxed">
              We may collect anonymous usage data such as page views, feature interactions, and
              performance metrics to improve our products. This data is aggregated and cannot be used
              to identify individual users.
            </p>

            <h3 className="text-base font-semibold text-slate-800 mb-2 mt-5">2.4 User-Generated Content</h3>
            <p className="text-slate-600 leading-relaxed">
              For Notes AI, the notes, drawings, and files you create are stored securely and
              associated with your account. This content is private to you and is never shared with
              other users or third parties without your explicit consent.
            </p>
          </section>

          {/* How We Use It */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-slate-600">
              {[
                "To create and authenticate your account.",
                "To provide and improve our services (e.g., generate Git analytics, serve your notes).",
                "To communicate with you about your account or service updates.",
                "To detect and prevent fraud, abuse, or security incidents.",
                "To comply with legal obligations.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-purple-500 mt-1 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>We do not sell, rent, or trade your personal data to third parties for marketing purposes.</strong>
            </p>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Storage and Security</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Your data is stored on secure servers. We implement industry-standard technical and
              organisational measures to protect your information against unauthorised access,
              disclosure, alteration, or destruction, including:
            </p>
            <ul className="space-y-2 text-slate-600">
              {[
                "HTTPS encryption for all data in transit.",
                "Encrypted storage for OAuth access tokens.",
                "Access controls limiting data access to authorised personnel only.",
                "Regular security reviews of our codebase and infrastructure.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-purple-500 mt-1 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your account data for as long as your account is active or as needed to
              provide you with services. Git repository data imported for analytics purposes is
              processed in-session and is not permanently stored beyond your dashboard.
              Upon account deletion, your personal data is removed within 30 days, except where
              retention is required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2 text-slate-600">
              {[
                "Access the personal data we hold about you.",
                "Request correction of inaccurate data.",
                "Request deletion of your account and associated data.",
                "Withdraw OAuth consent at any time via your provider's app authorisation settings.",
                "Object to or restrict certain processing of your data.",
                "Lodge a complaint with a data protection authority.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-purple-500 mt-0 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          {/* Revoking OAuth */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Revoking OAuth Access</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You can revoke our access to your connected accounts at any time:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { provider: "Google",    url: "https://myaccount.google.com/permissions",                       label: "Google Account Permissions" },
                { provider: "GitHub",    url: "https://github.com/settings/applications",                       label: "GitHub Authorized Apps" },
                { provider: "GitLab",    url: "https://gitlab.com/-/profile/applications",                      label: "GitLab Applications" },
                { provider: "Bitbucket", url: "https://bitbucket.org/account/settings/app-authorizations/",     label: "Bitbucket App Authorizations" },
              ].map((p) => (
                <a key={p.provider} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 hover:border-purple-200 hover:bg-purple-50 transition-all group">
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-purple-700 transition-colors">{p.provider}</span>
                  <span className="text-xs text-slate-400 ml-auto">Revoke →</span>
                </a>
              ))}
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed">
              We use essential cookies to maintain your authenticated session. We do not use
              third-party advertising cookies or cross-site tracking. You can control cookies
              through your browser settings, though disabling essential cookies may affect
              service functionality.
            </p>
          </section>

          {/* Third Party */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Our services may rely on trusted third-party infrastructure providers (e.g., cloud
              hosting). These providers are bound by data processing agreements and are not permitted
              to use your data for their own purposes. We do not integrate third-party advertising
              networks or sell data to data brokers.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our services are not directed to children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided us
              with personal data, please contact us and we will promptly delete it.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by updating the &ldquo;Last updated&rdquo; date at the top of this page.
              Your continued use of our services after any changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or your
              personal data, please contact us:
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
          <Link href="/terms" className="hover:text-purple-600 transition-colors">Terms of Service</Link>
          &nbsp;·&nbsp;
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
        </p>
      </footer>
    </div>
  );
}
