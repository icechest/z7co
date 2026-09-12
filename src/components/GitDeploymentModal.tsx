import React, { useState } from 'react';
import { X, Globe, Copy, Check, Terminal, ShieldCheck, Server, AlertCircle } from 'lucide-react';

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

  const [pushProtocol, setPushProtocol] = useState<'ssh' | 'https'>('ssh');

  const gitPushCommand = pushProtocol === 'ssh'
    ? `git push -u origin main`
    : `git push -u origin main`;

  const hostingConfig = `Production Domain: z7co.com\nBuild Command: npm run build\nBuild Output Directory: dist\nNode.js Version: 22 LTS\nRouting: Single Page Application (SPA)`;
  const cnameRecord = `z7co.com`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F8F6F1] text-[#1F3B3D] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#1F3B3D]/10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1F3B3D]/10 flex items-center justify-between bg-[#F8F6F1]">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#D26B5B]" />
            <h3 className="font-display text-xl font-bold">
              z7co.com Custom Domain & Hosting
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
          
          {/* Production Domain Status */}
          <div className="bg-[#1F3B3D] text-[#F8F6F1] p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase font-bold text-[#5B8266] tracking-wider">
                Production Target
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded-full text-[#E6ECE8]">
                SSL / HTTPS Active
              </span>
            </div>
            <div className="font-display text-2xl text-[#F8F6F1] font-bold tracking-tight">
              https://z7co.com
            </div>
            <div className="mt-2 text-xs text-[#E6ECE8]/70 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5B8266]" />
              <span>Production Apex Domain • CNAME record linked to root</span>
            </div>
          </div>

          {/* Section 1: Push latest updates */}
          <div className="bg-white p-5 rounded-2xl border border-[#1F3B3D]/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-base font-bold text-[#1F3B3D] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#5B8266]" />
                1. Push Latest Changes to Production
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
            <p className="text-xs text-[#1F3B3D]/70 font-light">
              Pushes directly trigger the automated CI builder to build Vite React and update <strong>z7co.com</strong>.
            </p>
          </div>

          {/* Section 2: Hosting Configuration */}
          <div className="bg-white p-5 rounded-2xl border border-[#1F3B3D]/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-base font-bold text-[#1F3B3D] flex items-center gap-2">
                <Server className="w-4 h-4 text-[#D26B5B]" />
                2. Production Hosting Specifications
              </h4>
              <button
                onClick={() => handleCopy(hostingConfig, 'cf')}
                className="flex items-center gap-1 text-xs font-semibold text-[#D26B5B] hover:text-[#b85444]"
              >
                {copiedKey === 'cf' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'cf' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1F3B3D]/80 bg-[#E6ECE8] p-3 rounded-xl font-mono">
              <div>Primary Domain: <strong>z7co.com</strong></div>
              <div>Build Command: <strong>npm run build</strong></div>
              <div>Output Directory: <strong>dist</strong></div>
              <div>Node Runtime: <strong>Node 22 LTS</strong></div>
            </div>
          </div>

          {/* Section 3: CNAME Verification */}
          <div className="bg-white p-5 rounded-2xl border border-[#1F3B3D]/10 space-y-2">
            <h4 className="font-display text-base font-bold text-[#1F3B3D] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5B8266]" />
              3. Apex CNAME Record
            </h4>
            <p className="text-xs text-[#1F3B3D]/70 font-light">
              The committed <code>CNAME</code> file points to <code>z7co.com</code>, ensuring clean SSL resolution and immediate DNS binding.
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
