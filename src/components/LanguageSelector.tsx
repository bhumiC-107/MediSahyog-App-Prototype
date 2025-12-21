import React from 'react';
import { Globe, Check } from 'lucide-react';
import { Language, useLanguage } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

interface LanguageSelectorProps {
  compact?: boolean;
}

const languageOptions: { value: Language; label: string; nativeLabel: string }[] = [
  { value: 'english', label: 'English', nativeLabel: 'English' },
  { value: 'hindi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { value: 'punjabi', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
  { value: 'tamil', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { value: 'telugu', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { value: 'bengali', label: 'Bengali', nativeLabel: 'বাংলা' },
  { value: 'marathi', label: 'Marathi', nativeLabel: 'मराठी' },
  { value: 'gujarati', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  compact = false,
}) => {
  const { language, setLanguage } = useLanguage();
  const currentLang = languageOptions.find(lang => lang.value === language);

  if (compact) {
    return (
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-white/20 text-white border border-white/30 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-white/50 backdrop-blur-sm"
      >
        {languageOptions.map((lang) => (
          <option key={lang.value} value={lang.value} className="text-black">
            {lang.nativeLabel}
          </option>
        ))}
      </select>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden md:inline">{currentLang?.nativeLabel}</span>
          <span className="md:hidden">{currentLang?.nativeLabel.substring(0, 2)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <p className="text-xs text-gray-500 mb-2 px-2">Select Language / भाषा चुनें</p>
          {languageOptions.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => setLanguage(lang.value)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="font-medium">{lang.nativeLabel}</span>
                <span className="text-xs text-gray-500">({lang.label})</span>
              </span>
              {language === lang.value && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};