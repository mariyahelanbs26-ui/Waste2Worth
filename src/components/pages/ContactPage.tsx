import React, { useState } from 'react';
import { PageId, ContactSubmission } from '../../types';
import { Mail, Phone, MapPin, Send, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onFormSubmit: (data: ContactSubmission) => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onFormSubmit, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setError('Please provide a subject for your message.');
      return;
    }
    if (!message.trim() || message.length < 5) {
      setError('Please write a message with at least 5 characters.');
      return;
    }

    const submission: ContactSubmission = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    onFormSubmit(submission);
  };

  const handlePreFillSample = () => {
    setName('Priya Sharma');
    setEmail('priya.sharma@campus.edu');
    setSubject('Campus Wet & Dry Bin Setup Suggestion');
    setMessage('We would love to set up dual-bin color-coded recycling bins near the computer science laboratory. How can students coordinate with the Waste2Worth initiative?');
    setError('');
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Have an idea to improve campus waste management or need help recycling? Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Send a Message</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill in the form below. Once submitted, you will be taken to our confirmation page.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Verma"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Recycling drive feedback / Question"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your feedback, question, or suggestions here..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handlePreFillSample}
                  className="text-xs text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200 transition cursor-pointer"
                >
                  Quick Fill Sample Feedback Form
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details (Sample/Demo info) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Project Contact Details</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sample / demo institutional contact information for this project.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Official Email
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      contact@waste2worth.edu
                    </p>
                    <p className="text-xs text-slate-500">
                      support@waste2worth.org
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-slate-500">
                      (Toll-Free Campus Eco Helpdesk)
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Campus Location
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      Department of Computer Applications
                    </p>
                    <p className="text-xs text-slate-500">
                      Green Campus Road, University Tech Wing, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tip Box */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
              <span className="font-bold text-emerald-900 block">🌿 Student Note:</span>
              <p className="leading-relaxed">
                This project form simulates real-time data submission in client storage without exposing external APIs, fully suitable for college evaluations and mini-project viva demonstrations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
