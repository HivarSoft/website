import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, OAuthBox, LegalHeader, LegalFooter } from "@/components/legal/LegalLayout";

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
      <LegalHeader opposite="Terms of Service" oppositeHref="/terms" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-600 mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10">

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">1. Overview</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, store, and share information when you
              use our products — including <strong>Notes AI</strong> and <strong>GitStats</strong> — and
              when you connect third-party services via OAuth (Google, GitHub, GitLab, Bitbucket).
            </p>
            <p className="text-slate-600 leading-relaxed mt-3 text-sm sm:text-base">
              We follow the principle of <strong>data minimisation</strong> — we only collect what is
              strictly necessary to provide the service you requested.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-2">2.1 Account Information</h3>
            <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
              When you sign up or sign in via OAuth, we receive basic profile information including
              your name, email address, and profile picture — used solely to create and manage your account.
            </p>

            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-3">2.2 OAuth Data — By Provider</h3>
            <div className="space-y-3">
              <OAuthBox
                emoji="🔐" title="Google"
                intro="We receive the following data from Google upon authorisation:"
                scopes={[
                  { code: "openid",  desc: "Verify your identity" },
                  { code: "email",   desc: "Your email address for account identification" },
                  { code: "profile", desc: "Your name and profile picture" },
                ]}
                notAccessed="What we do NOT access: Gmail, Google Drive, Google Calendar, Contacts, or any other Google service data."
              />
              <OAuthBox
                emoji="🐙" title="GitHub"
                intro="For GitStats users who connect GitHub:"
                scopes={[
                  { code: "read:user", desc: "GitHub username, avatar, and public profile" },
                  { code: "repo (read-only)", desc: "Repository names, commit history, branch names, author metadata, and file statistics" },
                ]}
                notAccessed="What we do NOT access: repository secrets, GitHub Actions, Issues, Pull Request content, billing information, or SSH keys."
              />
              <OAuthBox
                emoji="🦊" title="GitLab"
                intro="For GitStats users who connect GitLab:"
                scopes={[
                  { code: "read_user",       desc: "GitLab username, email, and avatar" },
                  { code: "read_repository", desc: "Commit logs, branch names, and contributor metadata" },
                ]}
                notAccessed="What we do NOT access: Merge Requests, CI/CD pipelines, container registry, or deployment keys."
              />
              <OAuthBox
                emoji="🪣" title="Bitbucket"
                intro="For GitStats users who connect Bitbucket:"
                scopes={[
                  { code: "account",      desc: "Bitbucket account username and avatar" },
                  { code: "repositories", desc: "Repository list, commits, branches, and file history (read-only)" },
                ]}
                notAccessed="What we do NOT access: Bitbucket Pipelines, Deployments, Jira integrations, or team billing data."
              />
            </div>

            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-2 mt-6">2.3 Usage Data</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may collect anonymous usage data such as page views and feature interactions to improve
              our products. This data is aggregated and cannot identify individual users.
            </p>

            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-2 mt-4">2.4 User-Generated Content</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For Notes AI, the notes and files you create are stored securely and associated with
              your account. This content is private to you and never shared without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <BulletList items={[
              "To create and authenticate your account.",
              "To provide and improve our services (e.g., generate Git analytics, serve your notes).",
              "To communicate with you about your account or service updates.",
              "To detect and prevent fraud, abuse, or security incidents.",
              "To comply with legal obligations.",
            ]} />
            <p className="text-slate-600 leading-relaxed mt-4 text-sm sm:text-base">
              <strong>We do not sell, rent, or trade your personal data to third parties for marketing purposes.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">4. Data Storage and Security</h2>
            <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">
              Your data is stored on secure servers with industry-standard protections, including:
            </p>
            <BulletList items={[
              "HTTPS encryption for all data in transit.",
              "Encrypted storage for OAuth access tokens.",
              "Access controls limiting data access to authorised personnel only.",
              "Regular security reviews of our codebase and infrastructure.",
            ]} />
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">5. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We retain your account data for as long as your account is active. Git repository data
              imported for analytics is processed in-session and not permanently stored beyond your
              dashboard. Upon account deletion, your personal data is removed within 30 days, except
              where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">You have the right to:</p>
            <BulletList items={[
              "Access the personal data we hold about you.",
              "Request correction of inaccurate data.",
              "Request deletion of your account and associated data.",
              "Withdraw OAuth consent at any time via your provider's app authorisation settings.",
              "Object to or restrict certain processing of your data.",
              "Lodge a complaint with a data protection authority.",
            ]} />
            <p className="text-slate-600 leading-relaxed mt-4 text-sm sm:text-base">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">7. Revoking OAuth Access</h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              You can revoke our access to your connected accounts at any time:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { provider: "Google",    url: "https://myaccount.google.com/permissions" },
                { provider: "GitHub",    url: "https://github.com/settings/applications" },
                { provider: "GitLab",    url: "https://gitlab.com/-/profile/applications" },
                { provider: "Bitbucket", url: "https://bitbucket.org/account/settings/app-authorizations/" },
              ].map((p) => (
                <a key={p.provider} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 hover:border-purple-200 hover:bg-purple-50 transition-all group">
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-purple-700 transition-colors">{p.provider}</span>
                  <span className="text-xs text-slate-400">Revoke →</span>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">8. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We use essential cookies to maintain your authenticated session. We do not use
              third-party advertising cookies or cross-site tracking.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">9. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our services may rely on trusted third-party infrastructure providers bound by data
              processing agreements. We do not integrate advertising networks or sell data to data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">10. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our services are not directed to children under 13. If you believe a child has provided
              us with personal data, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">11. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may update this Privacy Policy from time to time. Material changes will be reflected
              in the &ldquo;Last updated&rdquo; date. Continued use of our services constitutes acceptance.
            </p>
          </section>

          <section className="bg-purple-50 rounded-2xl p-5 sm:p-6 border border-purple-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              If you have questions or requests regarding this Privacy Policy, please contact us:
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

      <LegalFooter company={COMPANY} current="Privacy Policy" opposite="Terms of Service" oppositeHref="/terms" />
    </div>
  );
}
