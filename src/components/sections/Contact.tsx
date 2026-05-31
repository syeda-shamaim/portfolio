import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
const FORMSPREE_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';
const isFormConfigured = Boolean(FORMSPREE_ENDPOINT || WEB3FORMS_KEY);

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

async function submitContactForm(form: { name: string; email: string; message: string }) {
  if (WEB3FORMS_KEY) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Portfolio message from ${form.name}`,
        from_name: personalInfo.name,
      }),
    });
    const data = (await res.json()) as { success?: boolean };
    return res.ok && data.success === true;
  }

  if (FORMSPREE_ENDPOINT) {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: `Portfolio message from ${form.name}`,
        _replyto: form.email,
      }),
    });
    return res.ok;
  }

  return false;
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormConfigured) {
      setStatus('not-configured');
      return;
    }

    setStatus('submitting');

    try {
      const sent = await submitContactForm(form);
      if (sent) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <AnimatedSection id="contact" className="bg-black/35">
      <SectionHeading
        subtitle="Get In Touch"
        title="Let's Work Together"
        description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="mb-6 font-display text-xl font-bold text-white">Contact Information</h3>

            <ul className="space-y-5" role="list">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                  <FiMail size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-red hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-gray-500">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-red/30 text-red transition-all hover:-translate-y-1 hover:bg-red hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <Button href={personalInfo.calendly} variant="secondary" className="w-full">
                <FiCalendar size={18} />
                Book a Meeting
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 lg:col-span-3"
          aria-label="Contact form"
        >
          {!isFormConfigured && (
            <div
              className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200"
              role="status"
            >
              Contact form email is not connected yet. Messages will not be delivered until you
              add a Web3Forms or Formspree key. You can email directly at{' '}
              <a href={`mailto:${personalInfo.email}`} className="font-semibold text-red hover:underline">
                {personalInfo.email}
              </a>
              .
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-black-muted px-4 py-3 text-sm text-white transition-colors placeholder:text-gray-600 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-black-muted px-4 py-3 text-sm text-white transition-colors placeholder:text-gray-600 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-black-muted px-4 py-3 text-sm text-white transition-colors placeholder:text-gray-600 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              variant="primary"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <FiSend size={16} />
                </>
              )}
            </Button>
          </div>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red"
              role="status"
            >
              Thank you! Your message has been sent to my inbox.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red-light"
              role="alert"
            >
              Could not send your message. Please try again or email{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-red hover:underline">
                {personalInfo.email}
              </a>
              .
            </motion.p>
          )}
          {status === 'not-configured' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-amber-200"
              role="alert"
            >
              Form email is not set up yet. Please contact {personalInfo.email}.
            </motion.p>
          )}
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
