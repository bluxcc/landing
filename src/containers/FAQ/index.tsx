const faqItems = [
  {
    question: 'What is Blux?',
    answer:
      'Blux is authentication and wallet infrastructure built for Stellar applications. It lets users sign in with an existing wallet, email, passkey, or social account while giving developers the tools to work with accounts, transactions, assets, and Soroban contracts.',
  },
  {
    question: 'Is Blux a wallet?',
    answer:
      'Not exactly. Blux is infrastructure that lets a dApp connect existing wallets or create an embedded Stellar account for users who don’t already have one.',
  },
  {
    question: 'Do users need an existing Stellar wallet?',
    answer:
      'No. Users can sign in with email, a passkey, or a supported social account, and Blux creates a Stellar account for them. Users who already have a wallet can connect it instead.',
  },
  {
    question: 'Which login methods does Blux support?',
    answer:
      'Blux supports wallet connections, email OTP, passkeys, Google, Apple, Meta, GitHub, X, and Discord. Developers can choose which methods appear and control their order in the login modal.',
  },
  {
    question: 'Which Stellar wallets are supported?',
    answer:
      'Blux supports wallets including Freighter, Rabet, xBull, Albedo, Hana, HOT, Klever, CactusLink, Fordefi, OneKey, Bitget, Ledger, Trezor, and WalletConnect-compatible wallets. Developers can hide unsupported wallets or change their display order based on their app’s requirements.',
  },
  {
    question: 'Is Blux only available for React?',
    answer:
      'No. Blux provides @bluxcc/react for React-based apps and the framework-independent @bluxcc/core package for vanilla JavaScript, TypeScript, and other JavaScript frameworks.\n\nThe core package can also be loaded directly through a CDN.',
  },
  {
    question: 'Can I use Blux through an API?',
    answer:
      'Blux provides a Server API that works with any backend language or framework. It currently supports operations such as listing and searching users, retrieving user information, removing users, and verifying that a wallet belongs to an authenticated user.\n\nFully API-based authentication, account creation, transaction signing, message signing, and Soroban authorization signing are being developed.',
  },
  {
    question: 'Does Blux support Soroban?',
    answer:
      'Yes. Blux supports both classic Stellar operations and Soroban smart contracts. Developers can read contract data, invoke contracts, sign authorization entries, retrieve balances and transactions, perform swaps, and work with Stellar assets through React hooks or core JavaScript functions.',
  },
  {
    question: 'Which Stellar networks does Blux support?',
    answer:
      'Blux includes built-in support for Mainnet, Testnet, Futurenet, Sandbox, and standalone networks. Developers can also configure custom networks and provide their own Horizon and Soroban RPC endpoints.',
  },
  {
    question: 'Can I use my own Stellar RPC infrastructure?',
    answer:
      'Yes. You can configure custom Horizon and Soroban RPC endpoints for each supported network. If no custom transport is provided, Blux uses the default public endpoints.',
  },
  {
    question: 'How customizable is the Blux interface?',
    answer:
      'You can customize colors, fonts, border radius, themes, language, login methods, wallet visibility, and wallet order to match your application.\n\nMore extensive white-label controls, including a fully white-labeled onboarding experience, are in development.',
  },
  {
    question: 'Is Blux custodial or non-custodial?',
    answer:
      'It depends on how the user signs in.\n\nUsers who connect an external wallet remain fully self-custodial. Their private keys stay inside their wallet, and Blux cannot access them.\n\nAccounts created through email, passkey, or social login are currently Blux-managed custodial accounts. Blux handles their encrypted key material and transaction signing infrastructure.',
  },
  {
    question: 'Where are private keys stored?',
    answer:
      'For external wallets, private keys never leave the user’s wallet.\n\nFor accounts created through email, passkeys, or social login, private keys are encrypted and stored through Blux’s managed backend infrastructure. Private keys are never returned through the dashboard or Server API.',
  },
  {
    question: 'What happens if Blux or the dApp shuts down?',
    answer:
      'Users who connected an external wallet are unaffected because they can continue using that wallet elsewhere.\n\nFor Blux-created accounts, we’re building two independent exit paths:\n\n1. Secure private key export, allowing users to import their account into another compatible wallet.\n2. A separate Blux recovery service where users can sign in, find accounts created across different apps, check their balances, withdraw funds, and export their private keys.',
  },
  {
    question: 'What is the difference between an App ID and an App Secret?',
    answer:
      'The App ID identifies your Blux project and is safe to use in frontend configuration.\n\nThe App Secret grants privileged access to the Server API. It must only be stored on a trusted backend and should never appear in frontend code, mobile applications, public repositories, URLs, demos, or application logs.\n\nThe dashboard is also being updated to keep the App Secret redacted by default. If a secret is ever exposed, it should be rotated immediately.',
  },
  {
    question: 'What information can developers see about their users?',
    answer:
      'The Blux Dashboard shows information such as the user’s public address, login method, signup date, latest login, and login activity. Developers can search, filter, block, remove, and export their project’s users.\n\nBlux does not expose private keys or other wallet secrets through the dashboard or Server API.',
  },
  {
    question: 'Can my backend verify that a wallet belongs to a Blux user?',
    answer:
      'Yes. The Server API can verify whether a Stellar address belongs to a user who authenticated through your Blux project.\n\nFor sensitive operations, the verification can be tied to a specific Blux user ID instead of only checking whether the address exists anywhere in the project.',
  },
  {
    question: 'How can I prevent other websites from using my App ID?',
    answer:
      'You can configure Allowed Origins from the Blux Dashboard. This restricts your App ID to approved production, staging, preview, and local-development domains.\n\nBlux also provides allowlists, blocklists, test accounts, and user-management controls. CAPTCHA protection is planned for a future release.',
  },
  {
    question: 'Why can’t some users close the Blux modal?',
    answer:
      'Check whether isPersistent is set to true in your configuration. Persistent modals are intentionally prevented from closing and are mainly intended for controlled onboarding or demo flows.\n\nThe default value is false, so most applications should either omit this option or set it explicitly to false.',
  },
];

const FAQ = () => (
  <div className="min-h-[560px] w-full py-14 tablet:py-10 mobile:py-8">
    <section
      className="mx-auto w-full max-w-[960px]"
      aria-labelledby="faq-heading"
    >
      <h1
        id="faq-heading"
        className="mb-6 text-4xl font-semibold tablet:text-3xl mobile:text-3xl"
      >
        FAQ
      </h1>

      <div>
        {faqItems.map(({ question, answer }, index) => (
          <details
            key={question}
            className="group border-t border-dotted border-[#0D1292] first:border-t-0"
            open={index === 0}
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold marker:content-none mobile:gap-3 mobile:text-base [&::-webkit-details-marker]:hidden">
              <span>{question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 transition-transform duration-200 group-open:rotate-180"
              >
                <img
                  src="/arrow_drop_down.svg"
                  alt=""
                  width="24"
                  height="24"
                  draggable={false}
                />
              </span>
            </summary>
            <p className="max-w-[900px] whitespace-pre-line pb-6 pr-10 text-base leading-7 text-[#0D1292]/90 mobile:pr-0 mobile:text-[15px] mobile:leading-6">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  </div>
);

export default FAQ;
