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
  User,
  Globe
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const stateSchemes = {
  punjab: [
    {
      id: 'pb1',
      state: 'punjab',
      category: 'healthInsurance',
      name: 'Sarbat Sehat Bima Yojana',
      nameHindi: 'सर्बत सेहत बीमा योजना',
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
      id: 'pb2',
      state: 'punjab',
      category: 'maternalHealth',
      name: 'Janani Suraksha Yojana',
      nameHindi: 'जननी सुरक्षा योजना',
      description: 'Cash assistance for institutional delivery',
      benefits: '₹1,400 for rural and ₹1,000 for urban deliveries',
      eligibility: 'Pregnant women below poverty line',
      status: 'active',
      website: 'https://punjab.gov.in/janani-suraksha-yojana',
      helpline: '1800-180-2015',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  maharashtra: [
    {
      id: 'mh1',
      state: 'maharashtra',
      category: 'healthInsurance',
      name: 'Mahatma Jyotiba Phule Jan Arogya Yojana',
      nameHindi: 'महात्मा ज्योतिबा फुले जन आरोग्य योजना',
      nameMarathi: 'महात्मा ज्योतिबा फुले जन आरोग्य योजना',
      description: 'Health insurance scheme for poor families in Maharashtra',
      benefits: '₹1.5 lakh annual health coverage per family',
      eligibility: 'BPL and vulnerable families in Maharashtra',
      status: 'active',
      website: 'https://jeevandayee.gov.in/',
      helpline: '14527',
      icon: Heart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'mh2',
      state: 'maharashtra',
      category: 'maternalHealth',
      name: 'Mazi Kanya Bhagyashree Scheme',
      nameHindi: 'माझी कन्या भाग्यश्री योजना',
      nameMarathi: 'माझी कन्या भाग्यश्री योजना',
      description: 'Financial assistance for girl child birth and education',
      benefits: '₹21,000 for first girl child, ₹42,000 if only girl child',
      eligibility: 'Families with annual income below ₹7.5 lakh',
      status: 'active',
      website: 'https://womenchild.maharashtra.gov.in/',
      helpline: '1800-229-090',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  tamilnadu: [
    {
      id: 'tn1',
      state: 'tamilnadu',
      category: 'healthInsurance',
      name: 'Chief Minister Comprehensive Health Insurance Scheme',
      nameHindi: 'मुख्यमंत्री व्यापक स्वास्थ्य बीमा योजना',
      nameTamil: 'முதலமைச்சர் விரிவான சுகாதார காப்பீட்டு திட்டம்',
      description: 'Comprehensive health insurance for Tamil Nadu families',
      benefits: '₹5 lakh annual coverage for 1,081 procedures',
      eligibility: 'All ration card holders in Tamil Nadu',
      status: 'active',
      website: 'https://www.cmchistn.com/',
      helpline: '1800-425-5091',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'tn2',
      state: 'tamilnadu',
      category: 'maternalHealth',
      name: 'Dr. Muthulakshmi Maternity Benefit Scheme',
      nameHindi: 'डॉ मुथुलक्ष्मी मातृत्व लाभ योजना',
      nameTamil: 'டாக்டர் முத்துலட்சுமி மகப்பேறு உதவித்தொகை திட்டம்',
      description: 'Maternity assistance for pregnant women',
      benefits: '₹18,000 financial assistance during pregnancy',
      eligibility: 'Pregnant women in Tamil Nadu for first two children',
      status: 'active',
      website: 'https://www.tn.gov.in/',
      helpline: '1800-425-9339',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  kerala: [
    {
      id: 'kl1',
      state: 'kerala',
      category: 'healthInsurance',
      name: 'Karunya Arogya Suraksha Padhathi',
      nameHindi: 'करुणा आरोग्य सुरक्षा पद्धति',
      description: 'Health insurance for Below Poverty Line families',
      benefits: '₹2 lakh health coverage for critical illnesses',
      eligibility: 'BPL families in Kerala',
      status: 'active',
      website: 'https://www.kasp.kerala.gov.in/',
      helpline: '0471-2554242',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'kl2',
      state: 'kerala',
      category: 'preventiveCare',
      name: 'Comprehensive Health Insurance Scheme',
      nameHindi: 'व्यापक स्वास्थ्य बीमा योजना',
      description: 'Universal health coverage for all Kerala residents',
      benefits: 'Comprehensive medical coverage and free check-ups',
      eligibility: 'All residents of Kerala',
      status: 'active',
      website: 'https://www.chiak.gov.in/',
      helpline: '1800-425-2255',
      icon: Shield,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ],
  
  gujarat: [
    {
      id: 'gj1',
      state: 'gujarat',
      category: 'healthInsurance',
      name: 'Mukhyamantri Amrutum Yojana',
      nameHindi: 'मुख्यमंत्री अमृतम योजना',
      nameGujarati: 'મુખ્યમંત્રી અમૃતમ યોજના',
      description: 'Health insurance for poor families in Gujarat',
      benefits: '₹3 lakh annual health insurance coverage',
      eligibility: 'BPL families in Gujarat',
      status: 'active',
      website: 'https://mmavya.guj.nic.in/',
      helpline: '1800-233-1022',
      icon: Heart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'gj2',
      state: 'gujarat',
      category: 'maternalHealth',
      name: 'Chiranjeevi Yojana',
      nameHindi: 'चिरंजीवी योजना',
      nameGujarati: 'ચિરંજીવી યોજના',
      description: 'Safe motherhood and child health scheme',
      benefits: 'Free institutional delivery and postnatal care',
      eligibility: 'Pregnant women in Gujarat',
      status: 'active',
      website: 'https://gujhealth.gov.in/',
      helpline: '1800-233-4500',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  karnataka: [
    {
      id: 'ka1',
      state: 'karnataka',
      category: 'healthInsurance',
      name: 'Vajpayee Arogyashree Scheme',
      nameHindi: 'वाजपेयी आरोग्यश्री योजना',
      description: 'Health insurance for BPL families in Karnataka',
      benefits: '₹3 lakh coverage for critical illnesses',
      eligibility: 'BPL card holders in Karnataka',
      status: 'active',
      website: 'https://sast.karnataka.gov.in/',
      helpline: '1800-425-9954',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'ka2',
      state: 'karnataka',
      category: 'maternalHealth',
      name: 'Janani Suraksha Yojana - Karnataka',
      nameHindi: 'जननी सुरक्षा योजना - कर्नाटक',
      description: 'Maternal health cash assistance program',
      benefits: '₹1,400 for rural and ₹1,000 for urban areas',
      eligibility: 'Pregnant women below poverty line',
      status: 'active',
      website: 'https://karunadu.karnataka.gov.in/',
      helpline: '1800-425-9339',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  westbengal: [
    {
      id: 'wb1',
      state: 'westbengal',
      category: 'healthInsurance',
      name: 'Swasthya Sathi Scheme',
      nameHindi: 'स्वास्थ्य साथी योजना',
      nameBengali: 'স্বাস্থ্য সাথী প্রকল্প',
      description: 'Universal health coverage for West Bengal families',
      benefits: '₹5 lakh annual health coverage per family',
      eligibility: 'All residents of West Bengal',
      status: 'active',
      website: 'https://swasthyasathi.gov.in/',
      helpline: '1800-313-1313',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'wb2',
      state: 'westbengal',
      category: 'maternalHealth',
      name: 'Rupashree Prakalpa',
      nameHindi: 'रूपश्री प्रकल्प',
      nameBengali: 'রূপশ্রী প্রকল্প',
      description: 'Financial assistance for marriage of girls from poor families',
      benefits: '₹25,000 financial assistance',
      eligibility: 'Girls from families with annual income below ₹1.5 lakh',
      status: 'active',
      website: 'https://wb.gov.in/',
      helpline: '1800-345-3644',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  uttarpradesh: [
    {
      id: 'up1',
      state: 'uttarpradesh',
      category: 'healthInsurance',
      name: 'Mukhyamantri Jan Arogya Yojana',
      nameHindi: 'मुख्यमंत्री जन आरोग्य योजना',
      description: 'Health insurance for economically weaker sections',
      benefits: '₹5 lakh annual health insurance coverage',
      eligibility: 'Economically weaker sections in UP',
      status: 'active',
      website: 'https://pmjay.gov.in/',
      helpline: '14555',
      icon: Heart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'up2',
      state: 'uttarpradesh',
      category: 'specializedCare',
      name: 'Free Dialysis Scheme',
      nameHindi: 'निःशुल्क डायलिसिस योजना',
      description: 'Free dialysis treatment for kidney patients',
      benefits: 'Free dialysis at government and empaneled hospitals',
      eligibility: 'BPL kidney patients in Uttar Pradesh',
      status: 'active',
      website: 'https://uphealth.up.nic.in/',
      helpline: '1800-180-5145',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ],
  
  telangana: [
    {
      id: 'ts1',
      state: 'telangana',
      category: 'healthInsurance',
      name: 'Aarogyasri Health Care Trust',
      nameHindi: 'आरोग्यश्री स्वास्थ्य देखभाल न्यास',
      nameTelugu: 'ఆరోగ్యశ్రీ ఆరోగ్య సంరక్షణ ట్రస్ట్',
      description: 'Health insurance for poor families in Telangana',
      benefits: '₹5 lakh annual coverage for listed procedures',
      eligibility: 'White ration card holders in Telangana',
      status: 'active',
      website: 'https://aarogyasri.telangana.gov.in/',
      helpline: '104',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'ts2',
      state: 'telangana',
      category: 'maternalHealth',
      name: 'KCR Kit Scheme',
      nameHindi: 'केसीआर किट योजना',
      nameTelugu: 'కెసిఆర్ కిట్ పథకం',
      description: 'Maternity kit for newborns and mothers',
      benefits: 'Kit worth ₹12,000 with baby essentials and clothes',
      eligibility: 'All pregnant women delivering in government hospitals',
      status: 'active',
      website: 'https://www.telangana.gov.in/',
      helpline: '1800-425-0082',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ],
  
  rajasthan: [
    {
      id: 'rj1',
      state: 'rajasthan',
      category: 'healthInsurance',
      name: 'Bhamashah Swasthya Bima Yojana',
      nameHindi: 'भामाशाह स्वास्थ्य बीमा योजना',
      description: 'Cashless health insurance for Rajasthan families',
      benefits: '₹5 lakh annual health insurance coverage',
      eligibility: 'National Food Security Act beneficiary families',
      status: 'active',
      website: 'https://health.rajasthan.gov.in/',
      helpline: '1800-180-6127',
      icon: Heart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'rj2',
      state: 'rajasthan',
      category: 'preventiveCare',
      name: 'Mukhyamantri Nishulk Dawa Yojana',
      nameHindi: 'मुख्यमंत्री निःशुल्क दवा योजना',
      description: 'Free medicines at government hospitals',
      benefits: 'Free essential medicines for all patients',
      eligibility: 'All patients visiting government hospitals',
      status: 'active',
      website: 'https://rajswasthya.nic.in/',
      helpline: '0141-2227201',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ]
};

const indianStates = [
  { id: 'all', name: 'All States', nameHindi: 'सभी राज्य', nameTamil: 'அனைத்து மாநிலங்கள்', nameTelugu: 'అన్ని రాష్ట్రాలు', nameBengali: 'সব রাজ্য', nameMarathi: 'सर्व राज्ये', nameGujarati: 'બધા રાજ્યો' },
  { id: 'punjab', name: 'Punjab', nameHindi: 'पंजाब', nameTamil: 'பஞ்சாப்', nameTelugu: 'పంజాబ్', nameBengali: 'পাঞ্জাব', nameMarathi: 'पंजाब', nameGujarati: 'પંજાબ' },
  { id: 'maharashtra', name: 'Maharashtra', nameHindi: 'महाराष्ट्र', nameTamil: 'மகாராஷ்டிரா', nameTelugu: 'మహారాష్ట్ర', nameBengali: 'মহারাষ্ট্র', nameMarathi: 'महाराष्ट्र', nameGujarati: 'મહારાષ્ટ્ર' },
  { id: 'tamilnadu', name: 'Tamil Nadu', nameHindi: 'तमिलनाडु', nameTamil: 'தமிழ்நாடு', nameTelugu: 'తమిళనాడు', nameBengali: 'তামிலনাড়ু', nameMarathi: 'तमिळनाडू', nameGujarati: 'તમિલનાડુ' },
  { id: 'kerala', name: 'Kerala', nameHindi: 'केरल', nameTamil: 'கேரளா', nameTelugu: 'కేరళ', nameBengali: 'কেরালা', nameMarathi: 'केरळ', nameGujarati: 'કેરળ' },
  { id: 'gujarat', name: 'Gujarat', nameHindi: 'गुजरात', nameTamil: 'குஜરாத்', nameTelugu: 'గుజరాత్', nameBengali: 'গুজরাট', nameMarathi: 'गुजरात', nameGujarati: 'ગુજરાત' },
  { id: 'karnataka', name: 'Karnataka', nameHindi: 'कर्नाटक', nameTamil: 'கர்நாடகா', nameTelugu: 'కర్ణాటక', nameBengali: 'কর্ণাটক', nameMarathi: 'कर्नाटक', nameGujarati: 'કર્ણાટક' },
  { id: 'westbengal', name: 'West Bengal', nameHindi: 'पश्चिम बंगाल', nameTamil: 'மேற்கு வங்காளம்', nameTelugu: 'పశ్చిమ బెంగాల్', nameBengali: 'পশ্চিমবঙ্গ', nameMarathi: 'पश्चिम बंगाल', nameGujarati: 'પશ્ચિમ બંગાળ' },
  { id: 'uttarpradesh', name: 'Uttar Pradesh', nameHindi: 'उत्तर प्रदेश', nameTamil: 'உத்தரப் பிரதேசம்', nameTelugu: 'ఉత్తర ప్రదేశ్', nameBengali: 'উত্তর প্রদেশ', nameMarathi: 'उत्तर प्रदेश', nameGujarati: 'ઉત્તર પ્રદેશ' },
  { id: 'telangana', name: 'Telangana', nameHindi: 'तेलंगाना', nameTamil: 'தெலுங்கானா', nameTelugu: 'తెలంగాణ', nameBengali: 'তেলেঙ্গানা', nameMarathi: 'तेलंगणा', nameGujarati: 'તેલંગાણા' },
  { id: 'rajasthan', name: 'Rajasthan', nameHindi: 'राजस्थान', nameTamil: 'ராஜஸ்தான்', nameTelugu: 'రాజస్థాన్', nameBengali: 'রাজস্থান', nameMarathi: 'राजस्थान', nameGujarati: 'રાજસ્થાન' }
];

export function StateHealthSchemes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedScheme, setSelectedScheme] = useState<any | null>(null);

  const { language, t } = useLanguage();

  // Flatten all schemes
  const allSchemes = Object.values(stateSchemes).flat();

  const categories = [
    { id: 'healthInsurance', name: t.healthInsurance || 'Health Insurance', icon: Heart, color: 'text-red-600' },
    { id: 'maternalHealth', name: t.maternalHealth || 'Maternal Health', icon: Baby, color: 'text-pink-600' },
    { id: 'emergencyServices', name: t.emergencyServices || 'Emergency Services', icon: Activity, color: 'text-blue-600' },
    { id: 'preventiveCare', name: t.preventiveCare || 'Preventive Care', icon: Shield, color: 'text-green-600' },
    { id: 'specializedCare', name: t.specializedCare || 'Specialized Care', icon: Heart, color: 'text-purple-600' }
  ];

  const filteredSchemes = allSchemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'all' || scheme.state === selectedState;
    const matchesCategory = !selectedCategory || scheme.category === selectedCategory;
    return matchesSearch && matchesState && matchesCategory;
  });

  const getSchemeName = (scheme: any) => {
    if (language === 'hindi' && scheme.nameHindi) return scheme.nameHindi;
    if (language === 'tamil' && scheme.nameTamil) return scheme.nameTamil;
    if (language === 'telugu' && scheme.nameTelugu) return scheme.nameTelugu;
    if (language === 'bengali' && scheme.nameBengali) return scheme.nameBengali;
    if (language === 'marathi' && scheme.nameMarathi) return scheme.nameMarathi;
    if (language === 'gujarati' && scheme.nameGujarati) return scheme.nameGujarati;
    return scheme.name;
  };

  const getStateName = (stateObj: any) => {
    if (language === 'hindi' && stateObj.nameHindi) return stateObj.nameHindi;
    if (language === 'tamil' && stateObj.nameTamil) return stateObj.nameTamil;
    if (language === 'telugu' && stateObj.nameTelugu) return stateObj.nameTelugu;
    if (language === 'bengali' && stateObj.nameBengali) return stateObj.nameBengali;
    if (language === 'marathi' && stateObj.nameMarathi) return stateObj.nameMarathi;
    if (language === 'gujarati' && stateObj.nameGujarati) return stateObj.nameGujarati;
    return stateObj.name;
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
          ← {t.back || 'Back'}
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
                  <h3 className="font-semibold text-gray-800 mb-2">{t.benefits || 'Benefits'}</h3>
                  <p className="text-gray-600 break-words">{selectedScheme.benefits}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.eligibility || 'Eligibility'}</h3>
                  <p className="text-gray-600 break-words">{selectedScheme.eligibility}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.status || 'Status'}</h3>
                  <Badge variant={selectedScheme.status === 'active' ? 'default' : 'secondary'}>
                    {selectedScheme.status === 'active' ? (t.active || 'Active') : (t.comingSoon || 'Coming Soon')}
                  </Badge>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t.contact || 'Contact'}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="break-all">{selectedScheme.helpline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">{t.website}</span>
                        <a 
                          href={selectedScheme.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline break-all"
                        >
                          {t.website || 'Website'}
                        </a>
                      </div>
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
                    {t.callNow}
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
        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
        <h1 className="text-lg sm:text-2xl text-gray-800 break-words">
          {language === 'hindi' ? 'राज्य स्वास्थ्य योजनाएं' :
           language === 'tamil' ? 'மாநில சுகாதார திட்டங்கள்' :
           language === 'telugu' ? 'రాష్ట్ర ఆరోగ్య పథకాలు' :
           language === 'bengali' ? 'রাজ্য স্বাস্থ্য প্রকল্প' :
           language === 'marathi' ? 'राज्य आरोग्य योजना' :
           language === 'gujarati' ? 'રાજ્ય આરોગ્ય યોજનાઓ' :
           'State Health Schemes'}
        </h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={t.searchSchemes}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* State Filter */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          {t.selectState}
        </h3>
        <div className="flex flex-wrap gap-2">
          {indianStates.map((state) => (
            <Button
              key={state.id}
              variant={selectedState === state.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedState(state.id)}
              className="text-xs sm:text-sm"
            >
              {getStateName(state)}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className="text-xs sm:text-sm"
        >
          {language === 'hindi' ? 'सभी श्रेणियां' : 'All Categories'}
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
          const stateInfo = indianStates.find(s => s.id === scheme.state);
          return (
            <Card key={scheme.id} className="shadow-sm border-0 hover:shadow-md transition-all duration-200">
              <CardHeader className={`${scheme.bgColor} pb-3 px-3 sm:px-6`}>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {stateInfo ? getStateName(stateInfo) : scheme.state}
                  </Badge>
                </div>
                <CardTitle className={`flex items-center gap-2 ${scheme.color} text-base sm:text-lg`}>
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="break-words text-sm sm:text-base">{getSchemeName(scheme)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <p className="text-gray-600 mb-4 text-sm break-words">{scheme.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs sm:text-sm">
                    <span className="font-medium text-gray-700">{t.benefits || 'Benefits'}: </span>
                    <span className="text-gray-600 break-words">{scheme.benefits}</span>
                  </div>
                  <Badge variant={scheme.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                    {scheme.status === 'active' ? (t.active || 'Active') : (t.comingSoon || 'Coming Soon')}
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 flex-1 text-xs sm:text-sm"
                    onClick={() => setSelectedScheme(scheme)}
                  >
                    {t.view || 'View Details'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-xs sm:text-sm"
                    onClick={() => window.open(scheme.website, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {t.applyNow || 'Apply'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-8">
          <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">
            {t.noSchemesFound}
          </p>
        </div>
      )}
    </div>
  );
}