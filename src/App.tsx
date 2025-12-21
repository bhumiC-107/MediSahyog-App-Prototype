import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { HealthProfileForm, HealthProfileData } from './components/HealthProfileForm';
import { Dashboard } from './components/Dashboard';
import { VideoConsultation } from './components/VideoConsultation';
import { TransportBooking } from './components/TransportBooking';
import { MedicineStock } from './components/MedicineStock';
import { AshaWorker } from './components/AshaWorker';
import { AiSymptomDetector } from './components/AiSymptomDetector';
import { ProfilePage } from './components/ProfilePage';
import { PunjabSchemes } from './components/PunjabSchemes';
import { StateHealthSchemes } from './components/StateHealthSchemes';
import { LanguageProvider, useLanguage, Language } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { MultilingualBanner } from './components/MultilingualBanner';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { 
  Home, 
  Video, 
  Car, 
  Pill, 
  Heart, 
  Brain, 
  Menu, 
  X, 
  Globe,
  User,
  LogOut,
  FileText
} from 'lucide-react';
import mediSahyogLogo from 'figma:asset/65e52f7c74560831ba07006a4cb391a4ed2a5ef3.png';

type Screen = 'dashboard' | 'video' | 'transport' | 'medicine' | 'asha' | 'ai' | 'schemes' | 'profile';

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);
  const [userProfileData, setUserProfileData] = useState<HealthProfileData | null>(null);
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { id: 'dashboard' as Screen, name: t.dashboard, icon: Home, color: 'text-blue-600' },
    { id: 'video' as Screen, name: t.videoConsultation, icon: Video, color: 'text-green-600' },
    { id: 'ai' as Screen, name: t.aiDetector, icon: Brain, color: 'text-indigo-600' },
    { id: 'asha' as Screen, name: t.ashaWorker, icon: Heart, color: 'text-pink-600' },
    { id: 'medicine' as Screen, name: t.medicine, icon: Pill, color: 'text-purple-600' },
    { id: 'transport' as Screen, name: t.transport, icon: Car, color: 'text-orange-600' },
    { id: 'schemes' as Screen, name: t.schemes, icon: FileText, color: 'text-teal-600' }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleProfileComplete = (profileData: HealthProfileData) => {
    setUserProfileData(profileData);
    setHasCompletedProfile(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setHasCompletedProfile(false);
    setUserProfileData(null);
    setCurrentScreen('dashboard');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard selectedLanguage={language} userProfile={userProfileData} />;
      case 'video':
        return <VideoConsultation selectedLanguage={language} />;
      case 'transport':
        return <TransportBooking selectedLanguage={language} />;
      case 'medicine':
        return <MedicineStock selectedLanguage={language} />;
      case 'asha':
        return <AshaWorker selectedLanguage={language} />;
      case 'ai':
        return <AiSymptomDetector 
          selectedLanguage={language} 
          onConsultDoctor={() => setCurrentScreen('video')}
        />;
      case 'schemes':
        return <StateHealthSchemes />;
      case 'profile':
        return userProfileData ? <ProfilePage selectedLanguage={language} userProfile={userProfileData} /> : <Dashboard selectedLanguage={language} userProfile={userProfileData} />;
      default:
        return <Dashboard selectedLanguage={language} userProfile={userProfileData} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <LoginScreen
        onLogin={handleLogin}
        selectedLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang as Language)}
      />
    );
  }

  if (!hasCompletedProfile) {
    return (
      <HealthProfileForm
        selectedLanguage={language}
        onComplete={handleProfileComplete}
      />
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Multilingual Feature Banner */}
      <MultilingualBanner />
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full">
        {/* Desktop Sidebar */}
        <div className="flex flex-col w-64 bg-white shadow-xl backdrop-blur-sm bg-white/90">
          {/* Header */}
          <div className="p-6 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
                <img 
                  src={mediSahyogLogo} 
                  alt="MediSahyog Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h1 className="text-xl font-semibold">{t.appName}</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t space-y-2">
            <button 
              onClick={() => setCurrentScreen('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentScreen === 'profile'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User className="w-5 h-5" />
              <span>{t.profile}</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <LogOut className="w-5 h-5" />
              <span>{t.logout}</span>
            </button>
          </div>
        </div>

        {/* Desktop Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl text-gray-800">
                {navigationItems.find(item => item.id === currentScreen)?.name}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <LanguageSelector />
              
              {/* User Avatar */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-auto">
            {renderScreen()}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col h-full">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-md overflow-hidden bg-white">
              <img 
                src={mediSahyogLogo} 
                alt="MediSahyog Logo" 
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <h1 className="text-xl text-white font-semibold">{t.appName}</h1>
          </div>
          
          {/* Language Selector for Mobile */}
          <LanguageSelector compact />
        </div>

        {/* Mobile Screen Content */}
        <div className="flex-1 overflow-auto pb-20">
          {renderScreen()}
        </div>

        {/* Mobile Bottom Navigation - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-1 py-2 shadow-2xl">
          <div className="flex justify-around items-center">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-all duration-200 min-w-0 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 transform scale-105' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium truncate max-w-[60px]">{item.name.split(' ')[0]}</span>
                </button>
              );
            })}
            {/* Profile Tab */}
            <button
              onClick={() => setCurrentScreen('profile')}
              className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-all duration-200 min-w-0 ${
                currentScreen === 'profile'
                  ? 'text-blue-600 bg-blue-50 transform scale-105'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <User className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-medium truncate max-w-[60px]">{t.profile}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}