
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="mt-20 w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Context & Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Got a project?</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              I'm always looking for interesting collaborations or technical discussions. 
              Whether it's a quick question or a full-scale build, my inbox is open.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            <div className="p-5 rounded-2xl border border-zinc-900 bg-zinc-900/20">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-mono mb-2">Direct Channel</span>
              <a href="mailto:attayaarka76p@gmail.com" className="text-zinc-200 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-4">
                attayaarka76p@gmail.com
              </a>
            </div>
            <div className="p-5 rounded-2xl border border-zinc-900 bg-zinc-900/20">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-mono mb-2">Social Feed</span>
              <a href="https://instagram.com/sum.rov" target="_blank" rel="noreferrer" className="text-zinc-200 hover:text-white transition-colors">
                @sum.rov
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="flex-[1.5] w-full bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 shadow-sm">
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Message Dispatched</h4>
              <p className="text-zinc-500 max-w-xs mx-auto">Thanks for reaching out! I'll review your transmission and get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white border-b border-zinc-800 hover:border-zinc-500 transition-all pb-1"
              >
                Send Another One
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border border-zinc-800 rounded-2xl py-4 px-5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all"
                    placeholder="Who are you?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border border-zinc-800 rounded-2xl py-4 px-5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all"
                    placeholder="Where can I reply?"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Message Content</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#050505] border border-zinc-800 rounded-2xl py-4 px-5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all resize-none"
                  placeholder="Tell me what's on your mind..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-zinc-100 text-black font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-white active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Transmitting...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="mt-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-900"></div>
        <p className="text-[10px] text-zinc-800 font-mono uppercase tracking-[0.4em]">Node Connection Secured</p>
        <div className="h-px flex-1 bg-zinc-900"></div>
      </div>
    </div>
  );
};

export default ContactForm;
