import React, { useState } from 'react';
import { X, GitBranch, Globe, Copy, Check, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';

interface GitDeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitDeploymentModal: React.FC<GitDeploymentModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gitPushCommand = `git remote add origin git@github.com:icechest/z7co.git\ngit branch -M main\ngit push -u origin main`;
  const cloudflareConfig = `Project Name: z7co\nBuild command: npm run build\nBuild output directory: dist\nNode version: 20\nCustom domain: z7co.com`;
  const cnameRecord = `z7co.com`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F8F6F1] text-[#1F3B3D] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#1F3B3D]/10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1F3B3D]/10 flex items-center justify-between bg-[#F8F6F1]">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#D26B5B]" />
            <h3 className="font-display text-xl font-bold">
              z7co.com Deployment & Git Repository
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1F3B3D]/60 hover:text-[#1F3B3D] rounded-full hover:bg-[#E6ECE8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Target Repo Overview */}
          <div className="bg-[#1F3B3D] text-[#F8F6F1] p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase font-bold text-[#5B8266] tracking-wider">
                Target Repository
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded-full text-[#E6ECE8]">
                Branch: main
              </span>
            </div>
            <div className="font-mono text-sm text-[#F8F6F1] font-semibold break-all">
              git@github.com:icechest/z7co.git
            </div>
            <div className="mt-2 text-xs text-[#E6ECE8]/70 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#D26B5B]" />
              <span>Target Production Domain: <strong>https://z7co.com</strong></span>
            </div>
          </div>

          {/* Section 1: GitHub Pages Instructions */}
          <div className="bg-white p-5 rounded-2xl border border-[#1F3B3D]/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-base font-bold text-[#1F3B3D] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#5B8266]" />
                1. Push to GitHub (icechest/z7co)
              </h4>
              <button
                onClick={() => handleCopy(gitPushCommand, 'git')}
                className="flex items-center gap-1 text-xs font-semibold text-[#D26B5B] hover:text-[#b85444]"
              >
                {copiedKey === 'git' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'git' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="bg-[#1F3B3D] text-[#E6ECE8] p-3 rounded-xl font-mono text-xs overflow-x-auto">
              {gitPushCommand}
            </pre>
          </div>

          {/* Section 2: Cloudflare Pages Setup */}
          <div className="bg-white p-5 rounded-2xl border border-[#1F3B3D]/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-base font-bold text-[#1F3B3D] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D26B5B]" />
                2. Cloudflare Pages & Custom Domain Configuration
              </h4>
              <button
                onClick={() => handleCopy(cloudflareConfig, 'cf')}
                className="flex items-center gap-1 text-xs font-semibold text-[#D26B5B] hover:text-[#b85444]"
              >
                {copiedKey === 'cf' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'cf' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1F3B3D]/80 bg-[#E6ECE8] p-3 rounded-xl font-mono">
              <div>Build Command: <strong>npm run build</strong></div>
              <div>Output Directory: <strong>dist</strong></div>
              <div>Node.js Version: <strong>20+</strong></div>
              <div>Custom Domain: <strong>z7co.com</strong></div>
            </div>
            <p className="text-xs text-[#1F3B3D]/70 font-light">
              In Cloudflare Dashboard &rarr; Pages &rarr; Connect to Git &rarr; Select <code>icechest/z7co</code> &rarr; Add custom domain <code>z7co.com</code> and enable Automatic SSL.
            </p>
          </div>

          {/* Section 3: CNAME File for GitHub Pages */}
          <div className="bg-white p-5 rounded-2xl border border-[#1F3B3D]/10 space-y-2">
            <h4 className="font-display text-base font-bold text-[#1F3B3D] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5B8266]" />
              3. CNAME Record Verification
            </h4>
            <p className="text-xs text-[#1F3B3D]/70 font-light">
              A <code>public/CNAME</code> file with the value <code>z7co.com</code> ensures seamless single-domain SSL resolution on GitHub Pages when DNS points to your repository.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#1F3B3D]/10 bg-[#F8F6F1] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1F3B3D] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
