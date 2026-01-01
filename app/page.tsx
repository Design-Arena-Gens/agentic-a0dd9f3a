type Step = {
  id: number;
  title: string;
  description: string;
  helper?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const desktopSteps: Step[] = [
  {
    id: 1,
    title: 'Locate the attachment control',
    description:
      'Look for a paperclip, “Upload”, or “Attach” button near the chat input. It is usually beside the message box or inside a plus (+) menu.',
    helper: 'If you do not see the control, hover over icons—many expand to reveal the upload option.'
  },
  {
    id: 2,
    title: 'Select your document',
    description:
      'Click the attachment control and choose “Document” or “File” from the menu. When the file picker opens, highlight the file you want to share and confirm.',
    helper: 'Most platforms accept PDF, DOCX, TXT, and image formats. Keep the file size under the stated limit.'
  },
  {
    id: 3,
    title: 'Review the preview (if available)',
    description:
      'Many chat tools show a preview or filename once the document is attached. Double-check that the correct file appears and remove it if you selected the wrong one.',
    helper: 'If the preview loads slowly, wait a moment—the upload happens in the background.'
  },
  {
    id: 4,
    title: 'Send your message',
    description:
      'Add any context in the message box and press Send/Enter. The document will travel with the message and appear in the conversation history.'
  }
];

const mobileSteps: Step[] = [
  {
    id: 1,
    title: 'Tap the add or paperclip icon',
    description:
      'On phones and tablets, the upload control is often a “+” or paperclip icon next to the message field.'
  },
  {
    id: 2,
    title: 'Choose the document source',
    description:
      'Select whether the file comes from your device, cloud storage, or camera. Pick the document you want to share and confirm.',
    helper: 'Grant the app storage permissions if prompted so it can access your files.'
  },
  {
    id: 3,
    title: 'Wait for the upload indicator',
    description:
      'Stay on the screen until you see the file name or a check mark—leaving early can cancel the upload on some apps.'
  },
  {
    id: 4,
    title: 'Send the message',
    description:
      'Type a short note explaining what is in the document and tap the send icon.'
  }
];

const faqs: FAQ[] = [
  {
    question: 'I do not see an attachment button—what now?',
    answer:
      'Some chat providers hide uploads for security or account-tier reasons. Check the help menu, upgrade plan details, or contact support to confirm whether file sharing is enabled.'
  },
  {
    question: 'What file size can I upload?',
    answer:
      'Typical limits range from 10 MB to 50 MB. If your file is larger, compress it (ZIP or PDF optimization) or split it into smaller sections before attaching.'
  },
  {
    question: 'Which formats are safest to share?',
    answer:
      'PDF is the most universally supported option. For editable content, DOCX and spreadsheets are common. Avoid executable files—they are often blocked for security.'
  },
  {
    question: 'How do I retract a document after sending?',
    answer:
      'Most platforms do not allow removing an attachment once it has been delivered. If privacy is a concern, delete the message immediately if the platform supports message deletion and notify the recipient.'
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Need to share a file?</p>
          <h1 className="hero__title">Attach a document to this conversation</h1>
          <p className="hero__subtitle">
            Follow these quick steps to upload and send documents securely from your current device.
          </p>
        </div>
        <div className="hero__card">
          <p className="hero__card-title">Quick checklist</p>
          <ul>
            <li>Confirm the document is final</li>
            <li>Verify the file type and size limits</li>
            <li>Remove sensitive metadata if necessary</li>
            <li>Keep the chat window open until the upload finishes</li>
          </ul>
        </div>
      </section>

      <section className="steps">
        <article className="steps__column">
          <h2>Desktop or laptop</h2>
          <p className="steps__intro">
            Use these steps for Windows, macOS, Linux, or web browsers on a larger screen.
          </p>
          <ol className="steps__list">
            {desktopSteps.map((step) => (
              <li key={step.id} className="steps__item">
                <div className="steps__badge">{step.id}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.helper ? <p className="steps__helper">{step.helper}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="steps__column">
          <h2>Phone or tablet</h2>
          <p className="steps__intro">
            Mobile interfaces differ slightly, so follow this checklist to avoid losing your upload.
          </p>
          <ol className="steps__list">
            {mobileSteps.map((step) => (
              <li key={step.id} className="steps__item">
                <div className="steps__badge">{step.id}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.helper ? <p className="steps__helper">{step.helper}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="troubleshooting">
        <div className="troubleshooting__panel">
          <h2>No upload option available?</h2>
          <p>
            If the paperclip or upload button is missing altogether, the workspace owner may have disabled
            file sharing. Share a link to a cloud document instead, or ask an administrator to enable
            attachments.
          </p>
        </div>

        <div className="troubleshooting__panel">
          <h2>Upload failing repeatedly?</h2>
          <ul>
            <li>Refresh the page or restart the app to clear stale sessions.</li>
            <li>Check your connection—slow or spotty networks can interrupt uploads.</li>
            <li>Rename files to remove spaces or special characters that some systems reject.</li>
            <li>Try converting the document to PDF for broad compatibility.</li>
          </ul>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently asked questions</h2>
        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq__item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Ready to attach your document?</h2>
          <p>
            Prepare your file, locate the upload control beside this chat box, and share any context the
            recipient needs. If the button is still missing, capture a screenshot and send it so support can
            diagnose the issue.
          </p>
        </div>
      </section>
    </main>
  );
}
