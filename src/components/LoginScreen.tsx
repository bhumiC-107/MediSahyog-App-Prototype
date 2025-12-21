import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import mediSahyogLogo from 'figma:asset/65e52f7c74560831ba07006a4cb391a4ed2a5ef3.png';

interface LoginScreenProps {
  onLogin: () => void;
  selectedLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const translations = {
  english: {
    appName: 'MediSahyog',
    tagline: 'Your Complete Healthcare Companion',
    selectLanguage: 'Select Language',
    phoneNumber: 'Phone Number',
    enterPhone: 'Enter your phone number',
    sendOTP: 'Send OTP',
    enterOTP: 'Enter OTP',
    otpSent: 'OTP sent to your phone',
    verify: 'Verify & Login',
    resendOTP: 'Resend OTP',
    emergencyAccess: 'Emergency Access',
    noSmartphone: 'No Smartphone? Use USSD/Voice',
    dialCode: 'Dial Code',
    callNumber: 'Call Number',
    mainMenu: 'Main Menu',
    emergency: 'Emergency',
    callNow: 'Call Now',
    invalidPhone: 'Please enter a valid 10-digit Indian mobile number',
    invalidOtp: 'Please enter a valid 6-digit OTP'
  },
  hindi: {
    appName: 'हेल्थपिंड',
    tagline: 'आपका पूर्ण स्वास्थ्य साथी',
    selectLanguage: 'भाषा चुनें',
    phoneNumber: 'फोन नंबर',
    enterPhone: 'अपना फोन नंबर दर्ज करें',
    sendOTP: 'OTP भेजें',
    enterOTP: 'OTP दर्ज करें',
    otpSent: 'आपके फोन पर OTP भेजा गया',
    verify: 'सत्यापित करें और लॉगिन करें',
    resendOTP: 'OTP पुनः भेजें',
    emergencyAccess: 'आपातकालीन पहुंच',
    noSmartphone: 'स्मार्टफोन नहीं है? USSD/Voice का उपयोग करें',
    dialCode: 'डायल कोड',
    callNumber: 'कॉल नंबर',
    mainMenu: 'मुख्य मेनू',
    emergency: 'आपातकाल',
    callNow: 'अभी कॉल करें',
    invalidPhone: 'कृपया 10 अंकों का वैध भारतीय मोबाइल नंबर दर्ज करें',
    invalidOtp: 'कृपया 6 अंकों का वैध OTP दर्ज करें'
  },
  punjabi: {
    appName: 'ਹੈਲਥਪਿੰਡ',
    tagline: 'ਤੁਹਾਡਾ ਪੂਰਾ ਸਿਹਤ ਸਾਥੀ',
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    phoneNumber: 'ਫੋਨ ਨੰਬਰ',
    enterPhone: 'ਆਪਣਾ ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    sendOTP: 'OTP ਭੇਜੋ',
    enterOTP: 'OTP ਦਰਜ ਕਰੋ',
    otpSent: 'ਤੁਹਾਡੇ ਫੋਨ ਤੇ OTP ਭੇਜਿਆ ਗਿਆ',
    verify: 'ਪੁਸ਼ਟੀ ਕਰੋ ਅਤੇ ਲੌਗਇਨ ਕਰੋ',
    resendOTP: 'OTP ਦੁਬਾਰਾ ਭੇਜੋ',
    emergencyAccess: 'ਐਮਰਜੈਂਸੀ ਪਹੁੰਚ',
    noSmartphone: 'ਸਮਾਰਟਫੋਨ ਨਹੀਂ ਹੈ? USSD/Voice ਵਰਤੋ',
    dialCode: 'ਡਾਇਲ ਕੋਡ',
    callNumber: 'ਕਾਲ ਨੰਬਰ',
    mainMenu: 'ਮੁੱਖ ਮੀਨੂ',
    emergency: 'ਐਮਰਜੈਂਸੀ',
    callNow: 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    invalidPhone: 'ਕਿਰਪਾ ਕਰਕੇ 10 ਅੰਕਾਂ ਦਾ ਵੈਧ ਭਾਰਤੀ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    invalidOtp: 'ਕਿਰਪਾ ਕਰਕੇ 6 ਅੰਕਾਂ ਦਾ ਵੈਧ OTP ਦਰਜ ਕਰੋ'
  },
  tamil: {
    appName: 'ஹெல்த்பிண்ட்',
    tagline: 'உங்கள் முழுமையான சுகாதார துணை',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    phoneNumber: 'தொலைபேசி எண்',
    enterPhone: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
    sendOTP: 'OTP அனுப்பு',
    enterOTP: 'OTPஐ உள்ளிடவும்',
    otpSent: 'உங்கள் தொலைபேசிக்கு OTP அனுப்பப்பட்டது',
    verify: 'சரிபார்த்து உள்நுழைக',
    resendOTP: 'OTP மீண்டும் அனுப்பு',
    emergencyAccess: 'அவசர அணுகல்',
    noSmartphone: 'ஸ்மார்ட்ஃபோன் இல்லையா? USSD/குரல் பயன்படுத்தவும்',
    dialCode: 'டயல் குறியீடு',
    callNumber: 'அழைப்பு எண்',
    mainMenu: 'முதன்மை பட்டி',
    emergency: 'அவசரநிலை',
    callNow: 'இப்போது அழைக்கவும்',
    invalidPhone: '10 இலக்க சரியான இந்திய மொபைல் எண்ணை உள்ளிடவும்',
    invalidOtp: '6 இலக்க சரியான OTPஐ உள்ளிடவும்'
  },
  telugu: {
    appName: 'హెల్త్‌పిండ్',
    tagline: 'మీ పూర్తి ఆరోగ్య సహచరుడు',
    selectLanguage: 'భాషను ఎంచుకోండి',
    phoneNumber: 'ఫోన్ నంబర్',
    enterPhone: 'మీ ఫోన్ నంబర్‌ను నమోదు చేయండి',
    sendOTP: 'OTP పంపండి',
    enterOTP: 'OTPని నమోదు చేయండి',
    otpSent: 'మీ ఫోన్‌కు OTP పంపబడింది',
    verify: 'ధృవీకరించి లాగిన్ చేయండి',
    resendOTP: 'OTPని మళ్లీ పంపండి',
    emergencyAccess: 'అత్యవసర యాక్సెస్',
    noSmartphone: 'స్మార్ట్‌ఫోన్ లేదా? USSD/వాయిస్ ఉపయోగించండి',
    dialCode: 'డయల్ కోడ్',
    callNumber: 'కాల్ నంబర్',
    mainMenu: 'ప్రధాన మెనూ',
    emergency: 'అత్యవసరం',
    callNow: 'ఇప్పుడు కాల్ చేయండి',
    invalidPhone: '10 అంకెల చెల్లుబాటు అయ్యే భారతీయ మొబైల్ నంబర్‌ను నమోదు చేయండి',
    invalidOtp: '6 అంకెల చెల్లుబాటు అయ్యే OTPని నమోదు చేయండి'
  },
  bengali: {
    appName: 'হেলথপিন্ড',
    tagline: 'আপনার সম্পূর্ণ স্বাস্থ্যসেবা সঙ্গী',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    phoneNumber: 'ফোন নম্বর',
    enterPhone: 'আপনার ফোন নম্বর লিখুন',
    sendOTP: 'OTP পাঠান',
    enterOTP: 'OTP লিখুন',
    otpSent: 'আপনার ফোনে OTP পাঠানো হয়েছে',
    verify: 'যাচাই করুন এবং লগইন করুন',
    resendOTP: 'OTP পুনরায় পাঠান',
    emergencyAccess: 'জরুরি অ্যাক্সেস',
    noSmartphone: 'স্মার্টফোন নেই? USSD/ভয়েস ব্যবহার করুন',
    dialCode: 'ডায়াল কোড',
    callNumber: 'কল নম্বর',
    mainMenu: 'প্রধান মেনু',
    emergency: 'জরুরি',
    callNow: 'এখনই কল করুন',
    invalidPhone: '১০ অঙ্কের বৈধ ভারতীয় মোবাইল নম্বর লিখুন',
    invalidOtp: '৬ অঙ্কের বৈধ OTP লিখুন'
  },
  marathi: {
    appName: 'हेल्थपिंड',
    tagline: 'तुमचा संपूर्ण आरोग्य सहचर',
    selectLanguage: 'भाषा निवडा',
    phoneNumber: 'फोन नंबर',
    enterPhone: 'तुमचा फोन नंबर टाका',
    sendOTP: 'OTP पाठवा',
    enterOTP: 'OTP टाका',
    otpSent: 'तुमच्या फोनवर OTP पाठवला',
    verify: 'सत्यापित करा आणि लॉगिन करा',
    resendOTP: 'OTP पुन्हा पाठवा',
    emergencyAccess: 'आपत्कालीन प्रवेश',
    noSmartphone: 'स्मार्टफोन नाही? USSD/आवाज वापरा',
    dialCode: 'डायल कोड',
    callNumber: 'कॉल नंबर',
    mainMenu: 'मुख्य मेनू',
    emergency: 'आपत्कालीन',
    callNow: 'आता कॉल करा',
    invalidPhone: '१० अंकांचा वैध भारतीय मोबाइल नंबर टाका',
    invalidOtp: '६ अंकांचा वैध OTP टाका'
  },
  gujarati: {
    appName: 'હેલ્થપિંડ',
    tagline: 'તમારો સંપૂર્ણ આરોગ્ય સાથી',
    selectLanguage: 'ભાષા પસંદ કરો',
    phoneNumber: 'ફોન નંબર',
    enterPhone: 'તમારો ફોન નંબર દાખલ કરો',
    sendOTP: 'OTP મોકલો',
    enterOTP: 'OTP દાખલ કરો',
    otpSent: 'તમારા ફોન પર OTP મોકલ્યો',
    verify: 'ચકાસો અને લૉગિન કરો',
    resendOTP: 'OTP ફરીથી મોકલો',
    emergencyAccess: 'કટોકટી પ્રવેશ',
    noSmartphone: 'સ્માર્ટફોન નથી? USSD/અવાજ વાપરો',
    dialCode: 'ડાયલ કોડ',
    callNumber: 'કૉલ નંબર',
    mainMenu: 'મુખ્ય મેનુ',
    emergency: 'કટોકટી',
    callNow: 'હમણાં કૉલ કરો',
    invalidPhone: '૧૦ અંકનો માન્ય ભારતીય મોબાઇલ નંબર દાખલ કરો',
    invalidOtp: '૬ અંકનો માન્ય OTP દાખલ કરો'
  }
};

export function LoginScreen({ onLogin, selectedLanguage, onLanguageChange }: LoginScreenProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [otpError, setOtpError] = useState('');

  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const validateIndianPhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it's exactly 10 digits and starts with 6, 7, 8, or 9 (Indian mobile number format)
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(cleanPhone);
  };

  const validateOTP = (otp: string): boolean => {
    // Check if it's exactly 6 digits
    const otpRegex = /^\d{6}$/;
    return otpRegex.test(otp);
  };

  const handlePhoneChange = (value: string) => {
    // Allow only digits and limit to 10 characters
    const cleanValue = value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(cleanValue);
    setPhoneError('');
  };

  const handleOtpChange = (value: string) => {
    // Allow only digits and limit to 6 characters
    const cleanValue = value.replace(/\D/g, '').slice(0, 6);
    setOtp(cleanValue);
    setOtpError('');
  };

  const handleSendOTP = () => {
    if (!validateIndianPhoneNumber(phoneNumber)) {
      setPhoneError(t.invalidPhone);
      return;
    }
    setPhoneError('');
    setStep('otp');
  };

  const handleVerifyOTP = () => {
    if (!validateOTP(otp)) {
      setOtpError(t.invalidOtp);
      return;
    }
    setOtpError('');
    onLogin();
  };



  const emergencyOptions = [
    {
      type: 'ussd',
      code: '*123#',
      name: t.mainMenu,
      description: 'Access all MediSahyog services'
    },
    {
      type: 'ussd',
      code: '*123*911#',
      name: t.emergency,
      description: 'Emergency ambulance service'
    },
    {
      type: 'voice',
      code: '108',
      name: t.emergency,
      description: 'Emergency helpline - 24/7'
    },
    {
      type: 'voice',
      code: '1800-432584',
      name: 'MediSahyog',
      description: 'Main health helpline'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-start sm:items-center justify-center p-2 sm:p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full max-w-md space-y-4 sm:space-y-6 relative z-10 mt-4 sm:mt-0">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto shadow-2xl border border-white/30">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-inner overflow-hidden">
              <img 
                src={mediSahyogLogo} 
                alt="MediSahyog Logo" 
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-white mb-2 font-bold drop-shadow-lg">{t.appName}</h1>
            <p className="text-white/90 text-lg font-medium">{t.tagline}</p>
          </div>
        </div>

        {/* Language Selector */}
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl">
          <CardContent className="p-6">
            <Select value={selectedLanguage} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-full h-12 border-2 border-purple-200 focus:border-purple-500 transition-all duration-200">
                <SelectValue placeholder={t.selectLanguage} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">🇮🇳 English</SelectItem>
                <SelectItem value="hindi">🇮🇳 हिंदी</SelectItem>
                <SelectItem value="punjabi">🇮🇳 ਪੰਜਾਬੀ</SelectItem>
                <SelectItem value="tamil">🇮🇳 தமிழ்</SelectItem>
                <SelectItem value="telugu">🇮🇳 తెలుగు</SelectItem>
                <SelectItem value="bengali">🇮🇳 বাংলা</SelectItem>
                <SelectItem value="marathi">🇮🇳 मराठी</SelectItem>
                <SelectItem value="gujarati">🇮🇳 ગુજરાતી</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Login Form */}
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-gray-800 text-xl">
              {step === 'phone' ? t.phoneNumber : t.enterOTP}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {step === 'phone' ? (
              <>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <Input
                    type="tel"
                    placeholder={t.enterPhone}
                    value={phoneNumber}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`pl-12 h-14 text-lg border-2 transition-all duration-200 ${
                      phoneError 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-purple-200 focus:border-purple-500'
                    }`}
                    maxLength={10}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    +91
                  </div>
                </div>
                {phoneError && (
                  <p className="text-red-500 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    {phoneError}
                  </p>
                )}
                <Button 
                  onClick={handleSendOTP}
                  className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                  disabled={phoneNumber.length !== 10}
                >
                  {t.sendOTP}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    {t.otpSent}
                  </div>
                  <div className="text-lg font-semibold text-purple-600">
                    +91 {phoneNumber}
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => handleOtpChange(e.target.value)}
                    className={`text-center text-2xl tracking-widest h-16 border-2 transition-all duration-200 ${
                      otpError 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-green-200 focus:border-green-500'
                    }`}
                    maxLength={6}
                  />
                </div>
                {otpError && (
                  <p className="text-red-500 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    {otpError}
                  </p>
                )}
                <Button 
                  onClick={handleVerifyOTP}
                  className="w-full h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                  disabled={otp.length !== 6}
                >
                  <CheckCircle className="mr-2 w-5 h-5" />
                  {t.verify}
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => {
                    setStep('phone');
                    setOtp('');
                    setOtpError('');
                  }}
                  className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 h-12"
                >
                  {t.resendOTP}
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        {/* Emergency Access for Non-Smartphone Users */}
        <Card className="shadow-2xl border-0 bg-gradient-to-r from-orange-100/95 to-amber-100/95 backdrop-blur-xl border border-orange-200/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-center text-orange-800 flex items-center justify-center gap-2 text-lg">
              <AlertTriangle className="w-6 h-6" />
              {t.emergencyAccess}
            </CardTitle>
            <p className="text-center text-sm text-orange-700 font-medium">{t.noSmartphone}</p>
          </CardHeader>
          <CardContent className="space-y-3 px-3 sm:px-6">
            <div className="grid grid-cols-1 gap-3">
              {emergencyOptions.map((option, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-white rounded-lg border border-orange-200">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded uppercase font-medium whitespace-nowrap">
                        {option.type === 'ussd' ? t.dialCode : t.callNumber}
                      </span>
                      <span className="font-medium text-gray-800 truncate">{option.name}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2 break-words">{option.description}</div>
                    <div className="font-mono text-base sm:text-lg text-orange-800 break-all">{option.code}</div>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <Button
                      size="sm"
                      onClick={() => window.open(`tel:${option.code}`, '_self')}
                      className="bg-green-600 hover:bg-green-700 text-white min-w-[100px]"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      {t.callNow}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-center text-orange-600 pt-2 border-t border-orange-200">
              These services work on any mobile phone, including basic phones without internet
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}