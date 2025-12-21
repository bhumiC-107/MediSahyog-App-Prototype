import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone, Mic, Hash, Volume2, Copy, CheckCircle, Globe, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface UssdIvrAccessProps {
  selectedLanguage: string;
}

const translations = {
  english: {
    title: 'USSD & Voice Access',
    subtitle: 'For users without smartphones',
    ussdCodes: 'USSD Codes',
    ivrSystem: 'Voice (IVR) System',
    howToUse: 'How to Use',
    dialCode: 'Dial Code',
    mainMenu: 'Main Menu',
    healthDashboard: 'Health Dashboard',
    bookDoctor: 'Book Doctor',
    ambulance: 'Emergency',
    medicine: 'Medicine',
    ashaWorker: 'ASHA Worker',
    symptoms: 'Check Symptoms',
    copied: 'Copied!',
    copyCode: 'Copy Code',
    instructions: 'Instructions',
    step1: 'Dial the USSD code from any mobile phone',
    step2: 'Follow the menu options displayed on screen',
    step3: 'Enter your choice number and press send',
    step4: 'Complete your healthcare task',
    voiceStep1: 'Call the IVR number from any phone',
    voiceStep2: 'Listen to voice prompts in your language',
    voiceStep3: 'Press numbers on keypad to navigate',
    voiceStep4: 'Speak your responses when prompted',
    availableLanguages: 'Available Languages',
    workingHours: '24/7 Available',
    tollFree: 'Toll-Free',
    localCharges: 'Local charges apply',
    emergencyOnly: 'Emergency line - 24/7',
    businessHours: 'Business hours: 8 AM - 8 PM',
    menuOptions: 'Menu Options',
    press1: 'Press 1',
    press2: 'Press 2',
    press3: 'Press 3',
    press4: 'Press 4',
    press5: 'Press 5',
    press6: 'Press 6',
    press0: 'Press 0',
    mainMenuReturn: 'Return to main menu',
    exampleUsage: 'Example Usage',
    ussdExample: 'Example: Dial *123*1# for health dashboard',
    ivrExample: 'Example: Call 1800-HEALTH and press 2 for doctor',
    supportedFeatures: 'Supported Features'
  },
  hindi: {
    title: 'यूएसएसडी और आवाज़ पहुंच',
    subtitle: 'स्मार्टफोन न रखने वाले उपयोगकर्ताओं के लिए',
    ussdCodes: 'यूएसएसडी कोड',
    ivrSystem: 'आवाज़ (आईवीआर) सिस्टम',
    howToUse: 'उपयोग कैसे करें',
    dialCode: 'डायल कोड',
    mainMenu: 'मुख्य मेनू',
    healthDashboard: 'स्वास्थ्य डैशबोर्ड',
    bookDoctor: 'डॉक्टर बुक करें',
    ambulance: 'आपातकाल',
    medicine: 'दवाई',
    ashaWorker: 'आशा वर्कर',
    symptoms: 'लक्षण जांचें',
    copied: 'कॉपी हो गया!',
    copyCode: 'कोड कॉपी करें',
    instructions: 'निर्देश',
    step1: 'किसी भी मोबाइल फोन से यूएसएसडी कोड डायल करें',
    step2: 'स्क्रीन पर दिखाए गए मेनू विकल्पों का पालन करें',
    step3: 'अपनी पसंद का नंबर दर्ज करें और भेजें दबाएं',
    step4: 'अपना स्वास्थ्य कार्य पूरा करें',
    voiceStep1: 'किसी भी फोन से आईवीआर नंबर पर कॉल करें',
    voiceStep2: 'अपनी भाषा में आवाज़ संकेत सुनें',
    voiceStep3: 'नेविगेट करने के लिए कीपैड पर नंबर दबाएं',
    voiceStep4: 'संकेत मिलने पर अपना जवाब बोलें',
    availableLanguages: 'उपलब्ध भाषाएं',
    workingHours: '24/7 उपलब्ध',
    tollFree: 'टोल-फ्री',
    localCharges: 'स्थानीय शुल्क लागू',
    emergencyOnly: 'आपातकालीन लाइन - 24/7',
    businessHours: 'व्यापारिक घंटे: सुबह 8 बजे - रात 8 बजे',
    menuOptions: 'मेनू विकल्प',
    press1: '1 दबाएं',
    press2: '2 दबाएं',
    press3: '3 दबाएं',
    press4: '4 दबाएं',
    press5: '5 दबाएं',
    press6: '6 दबाएं',
    press0: '0 दबाएं',
    mainMenuReturn: 'मुख्य मेनू पर वापस जाएं',
    exampleUsage: 'उदाहरण उपयोग',
    ussdExample: 'उदाहरण: स्वास्थ्य डैशबोर्ड के लिए *123*1# डायल करें',
    ivrExample: 'उदाहरण: 1800-HEALTH पर कॉल करें और डॉक्टर के लिए 2 दबाएं',
    supportedFeatures: 'समर्थित सुविधाएं'
  },
  punjabi: {
    title: 'ਯੂਐਸਐਸਡੀ ਅਤੇ ਆਵਾਜ਼ ਪਹੁੰਚ',
    subtitle: 'ਸਮਾਰਟਫੋਨ ਨਾ ਰੱਖਣ ਵਾਲੇ ਉਪਭੋਗਤਾਵਾਂ ਲਈ',
    ussdCodes: 'ਯੂਐਸਐਸਡੀ ਕੋਡ',
    ivrSystem: 'ਆਵਾਜ਼ (IVR) ਸਿਸਟਮ',
    howToUse: 'ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ',
    dialCode: 'ਡਾਇਲ ਕੋਡ',
    mainMenu: 'ਮੁੱਖ ਮੀਨੂ',
    healthDashboard: 'ਸਿਹਤ ਡੈਸ਼ਬੋਰਡ',
    bookDoctor: 'ਡਾਕਟਰ ਬੁੱਕ ਕਰੋ',
    ambulance: 'ਐਮਰਜੈਂਸੀ',
    medicine: 'ਦਵਾਈ',
    ashaWorker: 'ਆਸ਼ਾ ਵਰਕਰ',
    symptoms: 'ਲੱਛਣ ਜਾਂਚੋ',
    copied: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
    copyCode: 'ਕੋਡ ਕਾਪੀ ਕਰੋ',
    instructions: 'ਹਦਾਇਤਾਂ',
    step1: 'ਕਿਸੇ ਵੀ ਮੋਬਾਈਲ ਫੋਨ ਤੋਂ ਯੂਐਸਐਸਡੀ ਕੋਡ ਡਾਇਲ ਕਰੋ',
    step2: 'ਸਕ੍ਰੀਨ ਤੇ ਦਿਖਾਏ ਗਏ ਮੀਨੂ ਵਿਕਲਪਾਂ ਦਾ ਪਾਲਣ ਕਰੋ',
    step3: 'ਆਪਣੀ ਪਸੰਦ ਦਾ ਨੰਬਰ ਦਰਜ ਕਰੋ ਅਤੇ ਭੇਜੋ ਦਬਾਓ',
    step4: 'ਆਪਣਾ ਸਿਹਤ ਕੰਮ ਪੂਰਾ ਕਰੋ',
    voiceStep1: 'ਕਿਸੇ ਵੀ ਫੋਨ ਤੋਂ IVR ਨੰਬਰ ਤੇ ਕਾਲ ਕਰੋ',
    voiceStep2: 'ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਆਵਾਜ਼ ਸੰਕੇਤ ਸੁਣੋ',
    voiceStep3: 'ਨੈਵੀਗੇਟ ਕਰਨ ਲਈ ਕੀਪੈਡ ਤੇ ਨੰਬਰ ਦਬਾਓ',
    voiceStep4: 'ਸੰਕੇਤ ਮਿਲਣ ਤੇ ਆਪਣਾ ਜਵਾਬ ਬੋਲੋ',
    availableLanguages: 'ਉਪਲਬਧ ਭਾਸ਼ਾਵਾਂ',
    workingHours: '24/7 ਉਪਲਬਧ',
    tollFree: 'ਟੋਲ-ਫ੍ਰੀ',
    localCharges: 'ਸਥਾਨਕ ਚਾਰਜ ਲਾਗੂ',
    emergencyOnly: 'ਐਮਰਜੈਂਸੀ ਲਾਈਨ - 24/7',
    businessHours: 'ਕਾਰੋਬਾਰੀ ਘੰਟੇ: ਸਵੇਰੇ 8 ਬਜੇ - ਰਾਤ 8 ਬਜੇ',
    menuOptions: 'ਮੀਨੂ ਵਿਕਲਪ',
    press1: '1 ਦਬਾਓ',
    press2: '2 ਦਬਾਓ',
    press3: '3 ਦਬਾਓ',
    press4: '4 ਦਬਾਓ',
    press5: '5 ਦਬਾਓ',
    press6: '6 ਦਬਾਓ',
    press0: '0 ਦਬਾਓ',
    mainMenuReturn: 'ਮੁੱਖ ਮੀਨੂ ਤੇ ਵਾਪਸ ਜਾਓ',
    exampleUsage: 'ਉਦਾਹਰਣ ਵਰਤੋਂ',
    ussdExample: 'ਉਦਾਹਰਣ: ਸਿਹਤ ਡੈਸ਼ਬੋਰਡ ਲਈ *123*1# ਡਾਇਲ ਕਰੋ',
    ivrExample: 'ਉਦਾਹਰਣ: 1800-HEALTH ਤੇ ਕਾਲ ਕਰੋ ਅਤੇ ਡਾਕਟਰ ਲਈ 2 ਦਬਾਓ',
    supportedFeatures: 'ਸਮਰਥਿਤ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ'
  }
};

export function UssdIvrAccess({ selectedLanguage }: UssdIvrAccessProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const ussdCodes = [
    {
      code: '*123#',
      name: t.mainMenu,
      description: 'Access all MediSahyog services',
      icon: Hash,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      code: '*123*1#',
      name: t.healthDashboard,
      description: 'View your health records',
      icon: Phone,
      color: 'bg-green-100 text-green-800'
    },
    {
      code: '*123*2#',
      name: t.bookDoctor,
      description: 'Book doctor consultation',
      icon: Phone,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      code: '*123*911#',
      name: t.ambulance,
      description: 'Emergency ambulance',
      icon: Phone,
      color: 'bg-red-100 text-red-800'
    },
    {
      code: '*123*3#',
      name: t.medicine,
      description: 'Check medicine availability',
      icon: Phone,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      code: '*123*4#',
      name: t.ashaWorker,
      description: 'Contact ASHA worker',
      icon: Phone,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      code: '*123*5#',
      name: t.symptoms,
      description: 'Basic symptom checker',
      icon: Phone,
      color: 'bg-indigo-100 text-indigo-800'
    }
  ];

  const ivrNumbers = [
    {
      number: '1800-HEALTH',
      displayNumber: '1800-432584',
      name: 'MediSahyog Main Line',
      description: t.workingHours,
      type: t.tollFree,
      typeColor: 'bg-green-100 text-green-800'
    },
    {
      number: '108',
      displayNumber: '108',
      name: 'Emergency Services',
      description: t.emergencyOnly,
      type: 'Emergency',
      typeColor: 'bg-red-100 text-red-800'
    },
    {
      number: '104',
      displayNumber: '104',
      name: 'Health Helpline',
      description: t.businessHours,
      type: t.localCharges,
      typeColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const menuStructure = [
    { option: '1', name: t.healthDashboard, subtext: 'View vaccination, medicine schedule' },
    { option: '2', name: t.bookDoctor, subtext: 'Video/phone consultation booking' },
    { option: '3', name: t.medicine, subtext: 'Medicine stock, nearby pharmacy' },
    { option: '4', name: t.ashaWorker, subtext: 'Contact local ASHA worker' },
    { option: '5', name: t.symptoms, subtext: 'Basic health assessment' },
    { option: '9', name: 'Emergency', subtext: 'Immediate ambulance service' },
    { option: '0', name: t.mainMenuReturn, subtext: 'Go back to previous menu' }
  ];

  const supportedLanguages = [
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <Phone className="w-8 h-8 text-green-600" />
        <div>
          <h1 className="text-2xl text-gray-800">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>
      </div>

      <Tabs defaultValue="ussd" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ussd" className="flex items-center gap-2">
            <Hash className="w-4 h-4" />
            {t.ussdCodes}
          </TabsTrigger>
          <TabsTrigger value="ivr" className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            {t.ivrSystem}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ussd" className="space-y-6">
          {/* USSD Codes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ussdCodes.map((ussd, index) => {
              const IconComponent = ussd.icon;
              return (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-800">{ussd.name}</div>
                          <div className="text-sm text-gray-600">{ussd.description}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="bg-gray-100 px-3 py-2 rounded-lg font-mono text-lg">
                        {ussd.code}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(ussd.code)}
                        className="flex items-center gap-2"
                      >
                        {copiedCode === ussd.code ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {t.copied}
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            {t.copyCode}
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* How to Use USSD */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-blue-700">{t.howToUse} - USSD</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">{t.instructions}</h4>
                  <div className="space-y-2">
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span className="text-sm text-gray-700">{t.step1}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span className="text-sm text-gray-700">{t.step2}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span className="text-sm text-gray-700">{t.step3}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span className="text-sm text-gray-700">{t.step4}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">{t.exampleUsage}</h4>
                  <p className="text-sm text-blue-700">{t.ussdExample}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ivr" className="space-y-6">
          {/* IVR Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ivrNumbers.map((ivr, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <Volume2 className="w-5 h-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{ivr.name}</div>
                      <div className="text-sm text-gray-600">{ivr.description}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-mono text-green-800 mb-1">{ivr.displayNumber}</div>
                      <Badge className={ivr.typeColor}>{ivr.type}</Badge>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(ivr.displayNumber)}
                      className="w-full"
                    >
                      {copiedCode === ivr.displayNumber ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {t.copied}
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          {t.copyCode}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* IVR Menu Structure */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-green-700">{t.menuOptions}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {menuStructure.map((menu, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-medium">
                      {menu.option}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{menu.name}</div>
                      <div className="text-sm text-gray-600">{menu.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How to Use IVR */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-green-700">{t.howToUse} - IVR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">{t.instructions}</h4>
                  <div className="space-y-2">
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span className="text-sm text-gray-700">{t.voiceStep1}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span className="text-sm text-gray-700">{t.voiceStep2}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span className="text-sm text-gray-700">{t.voiceStep3}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span className="text-sm text-gray-700">{t.voiceStep4}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">{t.exampleUsage}</h4>
                  <p className="text-sm text-green-700">{t.ivrExample}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Supported Languages */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Globe className="w-5 h-5" />
            {t.availableLanguages}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {supportedLanguages.map((lang, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-purple-800">{lang.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Supported Features */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Users className="w-5 h-5" />
            {t.supportedFeatures}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">USSD Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Health record access</li>
                <li>• Appointment booking</li>
                <li>• Medicine reminders</li>
                <li>• Emergency services</li>
                <li>• ASHA worker contact</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">IVR Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Voice-guided navigation</li>
                <li>• Multi-language support</li>
                <li>• Speech recognition</li>
                <li>• Call-back requests</li>
                <li>• Emergency routing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}