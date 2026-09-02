import React from 'react';
import { 
  ArrowUp, 
  Instagram, 
  Linkedin, 
  FileText, 
  Youtube, 
  Mail, 
  ExternalLink,
  TreePine,
  Sparkles,
  Lock
} from 'lucide-react';
import { UserProfile, PortfolioMode } from '../types';

interface FooterProps {
  profile: UserProfile;
  currentMode?: PortfolioMode;
  onOpenUnlockModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  profile,
  currentMode = 'public',
  onOpenUnlockModal 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white text-zinc-900 border-t border-pink-200 relative overflow-hidden">
      
      {/* Moodboard Quote Ribbon Bar */}
      <div className="bg-pink-50/70 border-b border-pink-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <span className="text-2xl text-pink-600 font-serif">“</span>
            <p className="font-editorial text-sm sm:text-base italic text-zinc-700 max-w-3xl leading-snug">
              {profile.heroQuote}
            </p>
          </div>

          <div className="shrink-0">
            <span className="font-script text-3xl font-bold text-pink-600 tracking-wide">
              {profile.name}
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
                RS.
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-zinc-900">{profile.name}</h3>
                <p className="text-xs text-zinc-500">Journalist & Communications Professional</p>
              </div>
            </div>
            
            <p className="text-xs text-zinc-600 max-w-md leading-relaxed font-sans">
              Curated portfolio documenting field reportage, The Lit Scroll academic journalism, Substack essays, and strategic communications.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-zinc-600 hover:text-pink-600 border border-pink-200 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-zinc-600 hover:text-[#0A66C2] border border-pink-200 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-zinc-600 hover:text-[#FF6719] border border-pink-200 transition-colors"
                title="Substack"
              >
                <FileText className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-zinc-600 hover:text-emerald-600 border border-pink-200 transition-colors"
                title="Linktree"
              >
                <TreePine className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-zinc-600 hover:text-red-600 border border-pink-200 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-700">
              Sections
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li><a href="#hero" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-pink-600 transition-colors">Featured Works</a></li>
              <li><a href="#journalism" className="hover:text-pink-600 transition-colors">The Hans India Bylines</a></li>
              <li><a href="#the-lit-scroll" className="hover:text-pink-600 transition-colors">The Lit Scroll (Group E)</a></li>
              <li><a href="#substack" className="hover:text-pink-600 transition-colors">Substack Publications</a></li>
              <li><a href="#about" className="hover:text-pink-600 transition-colors">About & Experience</a></li>
              <li><a href="#testimonials" className="hover:text-pink-600 transition-colors">Recommendations & Feedback</a></li>
              <li><a href="#contact" className="hover:text-pink-600 transition-colors">Contact & Connect</a></li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-700">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 text-zinc-800 font-medium hover:border-pink-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-600" />
                </div>
              </a>
              <a
                href={`mailto:${profile.contact.email1}`}
                className="block p-3 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 text-zinc-800 font-medium hover:border-pink-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span>Direct Email</span>
                  <Mail className="w-3.5 h-3.5 text-pink-600" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 border-t border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-3 flex-wrap">
            <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved &bull; IIMC Dhenkanal.</span>
            
            {onOpenUnlockModal && (
              <button
                id="footer-admin-login-btn"
                onClick={onOpenUnlockModal}
                className="text-zinc-500 hover:text-pink-600 transition-colors flex items-center gap-1 cursor-pointer"
                title={currentMode === 'editor' ? "Ruchita's Admin Active" : "Owner / Admin Login"}
              >
                <Lock className="w-3 h-3 text-pink-600" />
                <span>{currentMode === 'editor' ? "Studio Active" : "Admin Login"}</span>
              </button>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-zinc-700 hover:text-pink-700 border border-pink-200 transition-all flex items-center gap-1.5 font-bold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
