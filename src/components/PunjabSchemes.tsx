import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  FileText, 
  Heart, 
  Baby, 
  Shield, 
  Activity,
  Search,
  ExternalLink,
  Phone,
  MapPin,
  Calendar,
  User
} from 'lucide-react';

interface PunjabSchemesProps {
  selectedLanguage: string;
}

const translations = {
  english: {
    title: 'Punjab Health Schemes',
    searchPlaceholder: 'Search health schemes...',
    healthInsurance: 'Health Insurance',
    maternalHealth: 'Maternal Health',
    emergencyServices: 'Emergency Services',
    preventiveCare: 'Preventive Care',
    specializedCare: 'Specialized Care',
    viewDetails: 'View Details',
    applyNow: 'Apply Now',
    eligibility: 'Eligibility',
    benefits: 'Benefits',
    documents: 'Required Documents',
    howToApply: 'How to Apply',
    contact: 'Contact Information',
    deadline: 'Application Deadline',
    status: 'Status',
    active: 'Active',
    comingSoon: 'Coming Soon',
    website: 'Official Website',
    helpline: 'Helpline',
    office: 'Office Address'
  },
  hindi: {
    title: 'पंजाब स्वास्थ्य योजनाएं',
    searchPlaceholder: 'स्वास्थ्य योजनाएं खोजें...',
    healthInsurance: 'स्वास्थ्य बीमा',
    maternalHealth: 'मातृ स्वास्थ्य',
    emergencyServices: 'आपातकालीन सेवाएं',
    preventiveCare: 'निवारक देखभाल',
    specializedCare: 'विशेषज्ञ देखभाल',
    viewDetails: 'विवरण देखें',
    applyNow: 'अभी आवेदन करें',
    eligibility: 'पात्रता',
    benefits: 'लाभ',
    documents: 'आवश्यक दस्तावेज',
    howToApply: 'आवेदन कैसे करें',
    contact: 'संपर्क जानकारी',
    deadline: 'आवेदन की अंतिम तिथि',
    status: 'स्थिति',
    active: 'सक्रिय',
    comingSoon: 'जल्द आ रहा है',
    website: 'आधिकारिक वेबसाइट',
    helpline: 'हेल्पलाइन',
    office: 'कार्यालय का पता'
  },
  punjabi: {
    title: 'ਪੰਜਾਬ ਸਿਹਤ ਸਕੀਮਾਂ',
    searchPlaceholder: 'ਸਿਹਤ ਸਕੀਮਾਂ ਖੋਜੋ...',
    healthInsurance: 'ਸਿਹਤ ਬੀਮਾ',
    maternalHealth: 'ਮਾਤਾ ਸਿਹਤ',
    emergencyServices: 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ',
    preventiveCare: 'ਰੋਕਥਾਮ ਦੇਖਭਾਲ',
    specializedCare: 'ਵਿਸ਼ੇਸ਼ ਦੇਖਭਾਲ',
    viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ',
    applyNow: 'ਹੁਣੇ ਅਪਲਾਈ ਕਰੋ',
    eligibility: 'ਯੋਗਤਾ',
    benefits: 'ਲਾਭ',
    documents: 'ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼',
    howToApply: 'ਅਪਲਾਈ ਕਿਵੇਂ ਕਰੀਏ',
    contact: 'ਸੰਪਰਕ ਜਾਣਕਾਰੀ',
    deadline: 'ਅਪਲਾਈ ਕਰਨ ਦੀ ਆਖਰੀ ਮਿਤੀ',
    status: 'ਸਥਿਤੀ',
    active: 'ਸਰਗਰਮ',
    comingSoon: 'ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ',
    website: 'ਅਧਿਕਾਰਿਕ ਵੈੱਬਸਾਈਟ',
    helpline: 'ਹੈਲਪਲਾਈਨ',
    office: 'ਦਫ਼ਤਰ ਦਾ ਪਤਾ'
  }
};

export function PunjabSchemes({ selectedLanguage }: PunjabSchemesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedScheme, setSelectedScheme] = useState<any | null>(null);

  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const schemes = [
    // Health Insurance Schemes
    {
      id: 1,
      category: 'healthInsurance',
      name: 'Sarbat Sehat Bima Yojana',
      nameHindi: 'सर्बत सेहत बीमा योजना',
      namePunjabi: 'ਸਰਬੱਤ ਸਿਹਤ ਬੀਮਾ ਯੋਜਨਾ',
      description: 'Free health insurance for all families in Punjab',
      benefits: '₹5 lakh annual health coverage for all treatments',
      eligibility: 'All Punjab residents regardless of income',
      status: 'active',
      website: 'https://punjab.gov.in/sarbat-sehat-bima-yojana',
      helpline: '1800-180-2005',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 2,
      category: 'healthInsurance',
      name: 'Mukh Mantri Sehat Bima Yojana',
      nameHindi: 'मुख्यमंत्री सेहत बीमा योजना',
      namePunjabi: 'ਮੁੱਖ ਮੰਤਰੀ ਸਿਹਤ ਬੀਮਾ ਯੋਜਨਾ',
      description: 'Additional health insurance coverage for government employees',
      benefits: '₹3 lakh additional coverage above SSBY',
      eligibility: 'Government employees and pensioners',
      status: 'active',
      website: 'https://punjab.gov.in/mukh-mantri-sehat-bima',
      helpline: '1800-180-2006',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    // Maternal Health Schemes
    {
      id: 3,
      category: 'maternalHealth',
      name: 'Janani Suraksha Yojana',
      nameHindi: 'जननी सुरक्षा योजना',
      namePunjabi: 'ਜਨਨੀ ਸੁਰੱਖਿਆ ਯੋਜਨਾ',
      description: 'Cash assistance for institutional delivery',
      benefits: '₹1,400 for rural and ₹1,000 for urban deliveries',
      eligibility: 'Pregnant women below poverty line',
      status: 'active',
      website: 'https://punjab.gov.in/janani-suraksha-yojana',
      helpline: '1800-180-2015',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      id: 4,
      category: 'maternalHealth',
      name: 'Pradhan Mantri Matru Vandana Yojana',
      nameHindi: 'प्रधान मंत्री मातृ वंदना योजना',
      namePunjabi: 'ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਮਾਤਰੁ ਵੰਦਨਾ ਯੋਜਨਾ',
      description: 'Maternity benefit scheme for pregnant and lactating mothers',
      benefits: '₹5,000 in three installments during pregnancy',
      eligibility: 'Pregnant and lactating mothers for first live birth',
      status: 'active',
      website: 'https://punjab.gov.in/pmmvy',
      helpline: '1800-180-2016',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    // Emergency Services
    {
      id: 5,
      category: 'emergencyServices',
      name: '108 Ambulance Service',
      nameHindi: '108 एम्बुलेंस सेवा',
      namePunjabi: '108 ਐਂਬੂਲੇਂਸ ਸੇਵਾ',
      description: 'Free emergency ambulance service 24/7',
      benefits: 'Free emergency medical transport and first aid',
      eligibility: 'All citizens in medical emergency',
      status: 'active',
      website: 'https://punjab.gov.in/108-ambulance',
      helpline: '108',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 6,
      category: 'emergencyServices',
      name: 'Emergency Medical Services',
      nameHindi: 'आपातकालीन चिकित्सा सेवाएं',
      namePunjabi: 'ਐਮਰਜੈਂਸੀ ਮੈਡੀਕਲ ਸਰਵਿਸਿਜ਼',
      description: 'Emergency medical care at government hospitals',
      benefits: 'Free emergency treatment and stabilization',
      eligibility: 'All emergency patients',
      status: 'active',
      website: 'https://punjab.gov.in/emergency-medical-services',
      helpline: '1800-180-2017',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    // Preventive Care Schemes
    {
      id: 7,
      category: 'preventiveCare',
      name: 'Mission Indradhanush',
      nameHindi: 'मिशन इंद्रधनुष',
      namePunjabi: 'ਮਿਸ਼ਨ ਇੰਦਰਧਨੁਸ਼',
      description: 'Universal immunization program for children',
      benefits: 'Free vaccination for 12 vaccine-preventable diseases',
      eligibility: 'Children under 2 years and pregnant women',
      status: 'active',
      website: 'https://punjab.gov.in/mission-indradhanush',
      helpline: '1800-180-2018',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 8,
      category: 'preventiveCare',
      name: 'National Health Mission',
      nameHindi: 'राष्ट्रीय स्वास्थ्य मिशन',
      namePunjabi: 'ਨੈਸ਼ਨਲ ਹੈਲਥ ਮਿਸ਼ਨ',
      description: 'Comprehensive healthcare delivery system',
      benefits: 'Free primary healthcare services at PHCs and CHCs',
      eligibility: 'All rural and urban poor populations',
      status: 'active',
      website: 'https://punjab.gov.in/national-health-mission',
      helpline: '1800-180-2019',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    // Specialized Care Schemes
    {
      id: 9,
      category: 'specializedCare',
      name: 'Cancer Treatment Scheme',
      nameHindi: 'कैंसर उपचार योजना',
      namePunjabi: 'ਕੈਂਸਰ ਇਲਾਜ ਸਕੀਮ',
      description: 'Free cancer treatment and financial assistance',
      benefits: 'Free treatment up to ₹3 lakh per patient',
      eligibility: 'Cancer patients with family income below ₹2 lakh',
      status: 'active',
      website: 'https://punjab.gov.in/cancer-treatment-scheme',
      helpline: '1800-180-2020',
      icon: Heart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 10,
      category: 'specializedCare',
      name: 'Kidney Treatment Scheme',
      nameHindi: 'किडनी उपचार योजना',
      namePunjabi: 'ਕਿਡਨੀ ਇਲਾਜ ਸਕੀਮ',
      description: 'Financial assistance for kidney disease treatment',
      benefits: 'Free dialysis and transplant support up to ₹2 lakh',
      eligibility: 'Kidney patients with family income below ₹1.5 lakh',
      status: 'active',
      website: 'https://punjab.gov.in/kidney-treatment-scheme',
      helpline: '1800-180-2021',
      icon: Heart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const categories = [
    { id: 'healthInsurance', name: t.healthInsurance, icon: Heart, color: 'text-red-600' },
    { id: 'maternalHealth', name: t.maternalHealth, icon: Baby, color: 'text-pink-600' },
    { id: 'emergencyServices', name: t.emergencyServices, icon: Activity, color: 'text-blue-600' },
    { id: 'preventiveCare', name: t.preventiveCare, icon: Shield, color: 'text-green-600' },
    { id: 'specializedCare', name: t.specializedCare, icon: Heart, color: 'text-purple-600' }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSchemeName = (scheme: any) => {
    if (selectedLanguage === 'hindi') return scheme.nameHindi;
    if (selectedLanguage === 'punjabi') return scheme.namePunjabi;
    return scheme.name;
  };

  if (selectedScheme) {
    return (
      <div className="p-2 sm:p-4 space-y-4 bg-gray-50 min-h-screen">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => setSelectedScheme(null)}
          className="mb-4"
        >
          ← Back to Health Schemes
        </Button>

        {/* Scheme Details */}
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className={`${selectedScheme.bgColor} px-3 sm:px-6`}>
            <CardTitle className={`flex items-center gap-3 ${selectedScheme.color} text-lg sm:text-xl`}>
              <selectedScheme.icon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <span className="break-words">{getSchemeName(selectedScheme)}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.benefits}</h3>
                  <p className="text-gray-600 break-words">{selectedScheme.benefits}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.eligibility}</h3>
                  <p className="text-gray-600 break-words">{selectedScheme.eligibility}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.status}</h3>
                  <Badge variant={selectedScheme.status === 'active' ? 'default' : 'secondary'}>
                    {selectedScheme.status === 'active' ? t.active : t.comingSoon}
                  </Badge>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.contact}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="break-all">{selectedScheme.helpline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <a 
                        href={selectedScheme.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        {t.website}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 flex-1"
                    onClick={() => window.open(selectedScheme.website, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.applyNow}
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(`tel:${selectedScheme.helpline}`, '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Helpline
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-4 space-y-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
        <h1 className="text-lg sm:text-2xl text-gray-800 break-words">{t.title}</h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className="text-xs sm:text-sm"
        >
          All Health Schemes
        </Button>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="text-xs sm:text-sm"
            >
              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </Button>
          );
        })}
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredSchemes.map((scheme) => {
          const IconComponent = scheme.icon;
          return (
            <Card key={scheme.id} className="shadow-sm border-0 hover:shadow-md transition-all duration-200">
              <CardHeader className={`${scheme.bgColor} pb-3 px-3 sm:px-6`}>
                <CardTitle className={`flex items-center gap-2 ${scheme.color} text-base sm:text-lg`}>
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="break-words text-sm sm:text-base">{getSchemeName(scheme)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <p className="text-gray-600 mb-4 text-sm break-words">{scheme.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs sm:text-sm">
                    <span className="font-medium text-gray-700">Benefits: </span>
                    <span className="text-gray-600 break-words">{scheme.benefits}</span>
                  </div>
                  <Badge variant={scheme.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                    {scheme.status === 'active' ? t.active : t.comingSoon}
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 flex-1 text-xs sm:text-sm"
                    onClick={() => setSelectedScheme(scheme)}
                  >
                    {t.viewDetails}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-xs sm:text-sm"
                    onClick={() => window.open(scheme.website, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {t.applyNow}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-8">
          <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No health schemes found matching your search.</p>
        </div>
      )}
    </div>
  );
}