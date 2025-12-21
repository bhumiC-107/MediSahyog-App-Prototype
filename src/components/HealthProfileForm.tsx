import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { User, Heart, Shield, Pill, AlertTriangle, Baby } from 'lucide-react';

interface HealthProfileFormProps {
  selectedLanguage: string;
  onComplete: (profileData: HealthProfileData) => void;
}

export interface HealthProfileData {
  gender: 'male' | 'female' | 'other';
  age: string;
  medications: string[];
  allergies: string[];
  vaccinations: string[];
  isPregnant: boolean;
  pregnancyWeeks?: string;
  menstrualCycleLength?: string;
  lastPeriodDate?: string;
  chronicConditions: string[];
}

const translations = {
  english: {
    title: 'Health Profile Setup',
    subtitle: 'Help us personalize your healthcare experience',
    step: 'Step',
    of: 'of',
    next: 'Next',
    previous: 'Previous',
    complete: 'Complete Setup',
    
    // Step 1: Basic Information
    basicInfo: 'Basic Information',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    age: 'Age (years)',
    
    // Step 2: Medications
    currentMeds: 'Current Medications',
    medsDesc: 'Please list any medications you are currently taking',
    addMedication: 'Add Medication',
    medicationName: 'Medication Name',
    noMedications: 'I am not taking any medications',
    
    // Step 3: Allergies
    allergiesTitle: 'Allergies & Conditions',
    allergiesDesc: 'Please list any allergies or chronic conditions',
    addAllergy: 'Add Allergy',
    allergyName: 'Allergy/Condition',
    noAllergies: 'I have no known allergies',
    
    // Step 4: Vaccinations
    vaccinationsTitle: 'Vaccination History',
    vaccinationsDesc: 'Please list your recent vaccinations',
    addVaccination: 'Add Vaccination',
    vaccinationName: 'Vaccination Name',
    
    // Step 5: Pregnancy (Female only)
    pregnancyTitle: 'Pregnancy Information',
    currentlyPregnant: 'Are you currently pregnant?',
    yes: 'Yes',
    no: 'No',
    pregnancyWeeks: 'How many weeks pregnant are you?',
    
    // Step 6: Menstrual Cycle (Female only)
    menstrualTitle: 'Menstrual Cycle Information',
    cycleLength: 'Average cycle length (days)',
    lastPeriod: 'Date of last period (DD/MM/YYYY)',
    
    // Common
    optional: 'Optional',
    required: 'Required'
  },
  hindi: {
    title: 'स्वास्थ्य प्रोफाइल सेटअप',
    subtitle: 'अपने स्वास्थ्य सेवा अनुभव को व्यक्तिगत बनाने में हमारी मदद करें',
    step: 'चरण',
    of: 'का',
    next: 'अगला',
    previous: 'पिछला',
    complete: 'सेटअप पूरा करें',
    
    basicInfo: 'बुनियादी जानकारी',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    age: 'उम्र (वर्ष)',
    
    currentMeds: 'वर्तमान दवाइयां',
    medsDesc: 'कृपया उन दवाओं की सूची बनाएं जो आप वर्तमान में ले रहे हैं',
    addMedication: 'दवा जोड़ें',
    medicationName: 'दवा का नाम',
    noMedications: 'मैं कोई दवा नहीं ले रहा/रही हूं',
    
    allergiesTitle: 'एलर्जी और स्थितियां',
    allergiesDesc: 'कृपया किसी भी एलर्जी या पुरानी स्थिति की सूची बनाएं',
    addAllergy: 'एलर्जी जोड़ें',
    allergyName: 'एलर्जी/स्थिति',
    noAllergies: 'मुझे कोई ज्ञात एलर्जी नहीं है',
    
    vaccinationsTitle: 'टीकाकरण इतिहास',
    vaccinationsDesc: 'कृपया अपने हाल के टीकाकरण की सूची बनाएं',
    addVaccination: 'टीकाकरण जोड़ें',
    vaccinationName: 'टीकाकरण का नाम',
    
    pregnancyTitle: 'गर्भावस्था की जानकारी',
    currentlyPregnant: 'क्या आप वर्तमान में गर्भवती हैं?',
    yes: 'हां',
    no: 'नहीं',
    pregnancyWeeks: 'आप कितने सप्ताह की गर्भवती हैं?',
    
    menstrualTitle: 'मासिक धर्म चक्र की जानकारी',
    cycleLength: 'औसत चक्र की लंबाई (दिन)',
    lastPeriod: 'अंतिम पीरियड की तारीख (DD/MM/YYYY)',
    
    optional: 'वैकल्पिक',
    required: 'आवश्यक'
  },
  punjabi: {
    title: 'ਸਿਹਤ ਪ੍ਰੋਫਾਈਲ ਸੈਟਅਪ',
    subtitle: 'ਆਪਣੇ ਸਿਹਤ ਸੇਵਾ ਅਨੁਭਵ ਨੂੰ ਵਿਅਕਤੀਗਤ ਬਣਾਉਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ',
    step: 'ਕਦਮ',
    of: 'ਦਾ',
    next: 'ਅਗਲਾ',
    previous: 'ਪਿਛਲਾ',
    complete: 'ਸੈਟਅਪ ਪੂਰਾ ਕਰੋ',
    
    basicInfo: 'ਬੁਨਿਆਦੀ ਜਾਣਕਾਰੀ',
    gender: 'ਲਿੰਗ',
    male: 'ਪੁਰਸ਼',
    female: 'ਔਰਤ',
    other: 'ਹੋਰ',
    age: 'ਉਮਰ (ਸਾਲ)',
    
    currentMeds: 'ਮੌਜੂਦਾ ਦਵਾਈਆਂ',
    medsDesc: 'ਕਿਰਪਾ ਕਰਕੇ ਉਨ੍ਹਾਂ ਦਵਾਈਆਂ ਦੀ ਸੂਚੀ ਬਣਾਓ ਜੋ ਤੁਸੀਂ ਇਸ ਸਮੇਂ ਲੈ ਰਹੇ ਹੋ',
    addMedication: 'ਦਵਾਈ ਜੋੜੋ',
    medicationName: 'ਦਵਾਈ ਦਾ ਨਾਮ',
    noMedications: 'ਮੈਂ ਕੋਈ ਦਵਾਈ ਨਹੀਂ ਲੈ ਰਿਹਾ/ਰਹੀ',
    
    allergiesTitle: 'ਐਲਰਜੀ ਅਤੇ ਸਥਿਤੀਆਂ',
    allergiesDesc: 'ਕਿਰਪਾ ਕਰਕੇ ਕਿਸੇ ਵੀ ਐਲਰਜੀ ਜਾਂ ਪੁਰਾਣੀ ਸਥਿਤੀ ਦੀ ਸੂਚੀ ਬਣਾਓ',
    addAllergy: 'ਐਲਰਜੀ ਜੋੜੋ',
    allergyName: 'ਐਲਰਜੀ/ਸਥਿਤੀ',
    noAllergies: 'ਮੈਨੂੰ ਕੋਈ ਜਾਣੀ ਐਲਰਜੀ ਨਹੀਂ ਹੈ',
    
    vaccinationsTitle: 'ਟੀਕਾਕਰਣ ਇਤਿਹਾਸ',
    vaccinationsDesc: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਹਾਲ ਹੀ ਦੇ ਟੀਕਾਕਰਣ ਦੀ ਸੂਚੀ ਬਣਾਓ',
    addVaccination: 'ਟੀਕਾਕਰਣ ਜੋੜੋ',
    vaccinationName: 'ਟੀਕਾਕਰਣ ਦਾ ਨਾਮ',
    
    pregnancyTitle: 'ਗਰਭ ਅਵਸਥਾ ਦੀ ਜਾਣਕਾਰੀ',
    currentlyPregnant: 'ਕੀ ਤੁਸੀਂ ਇਸ ਸਮੇਂ ਗਰਭਵਤੀ ਹੋ?',
    yes: 'ਹਾਂ',
    no: 'ਨਹੀਂ',
    pregnancyWeeks: 'ਤੁਸੀਂ ਕਿੰਨੇ ਹਫ਼ਤੇ ਦੀ ਗਰਭਵਤੀ ਹੋ?',
    
    menstrualTitle: 'ਮਾਸਿਕ ਚੱਕਰ ਦੀ ਜਾਣਕਾਰੀ',
    cycleLength: 'ਔਸਤ ਚੱਕਰ ਦੀ ਲੰਬਾਈ (ਦਿਨ)',
    lastPeriod: 'ਆਖਰੀ ਪੀਰੀਅਡ ਦੀ ਤਾਰੀਖ (DD/MM/YYYY)',
    
    optional: 'ਵਿਕਲਪਿਕ',
    required: 'ਲੋੜੀਂਦਾ'
  }
};

export function HealthProfileForm({ selectedLanguage, onComplete }: HealthProfileFormProps) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState<HealthProfileData>({
    gender: 'female',
    age: '',
    medications: [],
    allergies: [],
    vaccinations: [],
    isPregnant: false,
    chronicConditions: []
  });

  const [tempInputs, setTempInputs] = useState({
    medication: '',
    allergy: '',
    vaccination: '',
    customAllergy: '',
    customVaccination: ''
  });

  // Predefined options
  const commonAllergies = [
    'Peanuts', 'Tree nuts', 'Shellfish', 'Fish', 'Milk', 'Eggs', 'Soy', 'Wheat',
    'Dust mites', 'Pollen', 'Pet dander', 'Latex', 'Penicillin', 'Aspirin'
  ];

  const commonVaccinations = [
    'COVID-19', 'Influenza (Flu)', 'Tetanus', 'Hepatitis A', 'Hepatitis B', 
    'Measles', 'Mumps', 'Rubella (MMR)', 'Polio', 'Varicella (Chickenpox)',
    'HPV', 'Pneumonia', 'Meningitis', 'Typhoid'
  ];

  const age = parseInt(profileData.age) || 0;
  const isFemaleOver20 = profileData.gender === 'female' && age >= 20;
  const totalSteps = profileData.gender === 'female' ? (isFemaleOver20 ? 6 : 5) : 4;

  const addItem = (type: 'medications' | 'allergies' | 'vaccinations', value: string) => {
    if (value.trim()) {
      setProfileData(prev => ({
        ...prev,
        [type]: [...prev[type], value.trim()]
      }));
      setTempInputs(prev => ({ ...prev, [type.slice(0, -1)]: '' }));
    }
  };

  const removeItem = (type: 'medications' | 'allergies' | 'vaccinations', index: number) => {
    setProfileData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(profileData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl text-gray-800">{t.basicInfo}</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-gray-700">{t.gender} *</Label>
                <RadioGroup
                  value={profileData.gender}
                  onValueChange={(value) => setProfileData(prev => ({ 
                    ...prev, 
                    gender: value as 'male' | 'female' | 'other' 
                  }))}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">{t.male}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">{t.female}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">{t.other}</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="age" className="text-gray-700">{t.age} *</Label>
                <Input
                  id="age"
                  type="number"
                  value={profileData.age}
                  onChange={(e) => setProfileData(prev => ({ ...prev, age: e.target.value }))}
                  className="mt-1"
                  placeholder="25"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Pill className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl text-gray-800">{t.currentMeds}</h3>
            </div>
            
            <p className="text-gray-600">{t.medsDesc}</p>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={tempInputs.medication}
                  onChange={(e) => setTempInputs(prev => ({ ...prev, medication: e.target.value }))}
                  placeholder={t.medicationName}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addItem('medications', tempInputs.medication);
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={() => addItem('medications', tempInputs.medication)}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {t.addMedication}
                </Button>
              </div>
              
              {profileData.medications.length > 0 && (
                <div className="space-y-2">
                  {profileData.medications.map((med, index) => (
                    <div key={index} className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
                      <span>{med}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem('medications', index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl text-gray-800">{t.allergiesTitle}</h3>
            </div>
            
            <p className="text-gray-600">{t.allergiesDesc}</p>
            
            <div className="space-y-4">
              {/* Predefined Allergies */}
              <div>
                <Label className="text-gray-700 mb-3 block">Common Allergies:</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonAllergies.map((allergy) => (
                    <div key={allergy} className="flex items-center space-x-2">
                      <Checkbox
                        id={`allergy-${allergy}`}
                        checked={profileData.allergies.includes(allergy)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setProfileData(prev => ({
                              ...prev,
                              allergies: [...prev.allergies, allergy]
                            }));
                          } else {
                            removeItem('allergies', profileData.allergies.indexOf(allergy));
                          }
                        }}
                      />
                      <Label htmlFor={`allergy-${allergy}`} className="text-sm">
                        {allergy}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Allergy Input */}
              <div>
                <Label className="text-gray-700 mb-2 block">Other Allergy:</Label>
                <div className="flex gap-2">
                  <Input
                    value={tempInputs.customAllergy}
                    onChange={(e) => setTempInputs(prev => ({ ...prev, customAllergy: e.target.value }))}
                    placeholder={t.allergyName}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addItem('allergies', tempInputs.customAllergy);
                        setTempInputs(prev => ({ ...prev, customAllergy: '' }));
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      addItem('allergies', tempInputs.customAllergy);
                      setTempInputs(prev => ({ ...prev, customAllergy: '' }));
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {t.addAllergy}
                  </Button>
                </div>
              </div>
              
              {/* Selected Allergies */}
              {profileData.allergies.length > 0 && (
                <div>
                  <Label className="text-gray-700 mb-2 block">Selected Allergies:</Label>
                  <div className="space-y-2">
                    {profileData.allergies.map((allergy, index) => (
                      <div key={index} className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
                        <span>{allergy}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem('allergies', index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="text-xl text-gray-800">{t.vaccinationsTitle}</h3>
            </div>
            
            <p className="text-gray-600">{t.vaccinationsDesc}</p>
            
            <div className="space-y-4">
              {/* Predefined Vaccinations */}
              <div>
                <Label className="text-gray-700 mb-3 block">Common Vaccinations:</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonVaccinations.map((vaccination) => (
                    <div key={vaccination} className="flex items-center space-x-2">
                      <Checkbox
                        id={`vaccination-${vaccination}`}
                        checked={profileData.vaccinations.includes(vaccination)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setProfileData(prev => ({
                              ...prev,
                              vaccinations: [...prev.vaccinations, vaccination]
                            }));
                          } else {
                            removeItem('vaccinations', profileData.vaccinations.indexOf(vaccination));
                          }
                        }}
                      />
                      <Label htmlFor={`vaccination-${vaccination}`} className="text-sm">
                        {vaccination}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Vaccination Input */}
              <div>
                <Label className="text-gray-700 mb-2 block">Other Vaccination:</Label>
                <div className="flex gap-2">
                  <Input
                    value={tempInputs.customVaccination}
                    onChange={(e) => setTempInputs(prev => ({ ...prev, customVaccination: e.target.value }))}
                    placeholder={t.vaccinationName}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addItem('vaccinations', tempInputs.customVaccination);
                        setTempInputs(prev => ({ ...prev, customVaccination: '' }));
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      addItem('vaccinations', tempInputs.customVaccination);
                      setTempInputs(prev => ({ ...prev, customVaccination: '' }));
                    }}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {t.addVaccination}
                  </Button>
                </div>
              </div>
              
              {/* Selected Vaccinations */}
              {profileData.vaccinations.length > 0 && (
                <div>
                  <Label className="text-gray-700 mb-2 block">Selected Vaccinations:</Label>
                  <div className="space-y-2">
                    {profileData.vaccinations.map((vaccination, index) => (
                      <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                        <span>{vaccination}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem('vaccinations', index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 5:
        if (profileData.gender === 'female' && isFemaleOver20) {
          return (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Baby className="w-6 h-6 text-pink-600" />
                <h3 className="text-xl text-gray-800">{t.pregnancyTitle}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-700">{t.currentlyPregnant}</Label>
                  <RadioGroup
                    value={profileData.isPregnant ? 'yes' : 'no'}
                    onValueChange={(value) => setProfileData(prev => ({ 
                      ...prev, 
                      isPregnant: value === 'yes' 
                    }))}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="pregnant-yes" />
                      <Label htmlFor="pregnant-yes">{t.yes}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="pregnant-no" />
                      <Label htmlFor="pregnant-no">{t.no}</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {profileData.isPregnant && (
                  <div>
                    <Label htmlFor="pregnancy-weeks" className="text-gray-700">{t.pregnancyWeeks}</Label>
                    <Input
                      id="pregnancy-weeks"
                      type="number"
                      value={profileData.pregnancyWeeks || ''}
                      onChange={(e) => setProfileData(prev => ({ ...prev, pregnancyWeeks: e.target.value }))}
                      className="mt-1"
                      placeholder="12"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }
        return null;

      case 6:
        if (profileData.gender === 'female' && isFemaleOver20) {
          return (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl text-gray-800">{t.menstrualTitle}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cycle-length" className="text-gray-700">{t.cycleLength} ({t.optional})</Label>
                  <Input
                    id="cycle-length"
                    type="number"
                    value={profileData.menstrualCycleLength || ''}
                    onChange={(e) => setProfileData(prev => ({ ...prev, menstrualCycleLength: e.target.value }))}
                    className="mt-1"
                    placeholder="28"
                  />
                </div>
                
                <div>
                  <Label htmlFor="last-period" className="text-gray-700">{t.lastPeriod} ({t.optional})</Label>
                  <Input
                    id="last-period"
                    type="text"
                    value={profileData.lastPeriodDate || ''}
                    onChange={(e) => setProfileData(prev => ({ ...prev, lastPeriodDate: e.target.value }))}
                    className="mt-1"
                    placeholder="15/12/2024"
                  />
                </div>
              </div>
            </div>
          );
        } else if (profileData.gender === 'female' && !isFemaleOver20) {
          // For females under 20, show menstrual cycle info only
          return (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl text-gray-800">{t.menstrualTitle}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cycle-length" className="text-gray-700">{t.cycleLength} ({t.optional})</Label>
                  <Input
                    id="cycle-length"
                    type="number"
                    value={profileData.menstrualCycleLength || ''}
                    onChange={(e) => setProfileData(prev => ({ ...prev, menstrualCycleLength: e.target.value }))}
                    className="mt-1"
                    placeholder="28"
                  />
                </div>
                
                <div>
                  <Label htmlFor="last-period" className="text-gray-700">{t.lastPeriod} ({t.optional})</Label>
                  <Input
                    id="last-period"
                    type="text"
                    value={profileData.lastPeriodDate || ''}
                    onChange={(e) => setProfileData(prev => ({ ...prev, lastPeriodDate: e.target.value }))}
                    className="mt-1"
                    placeholder="15/12/2024"
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-800">{t.title}</CardTitle>
          <p className="text-gray-600">{t.subtitle}</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>{t.step} {currentStep} {t.of} {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          </div>
        </CardHeader>
        
        <CardContent>
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              {t.previous}
            </Button>
            
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentStep === totalSteps ? t.complete : t.next}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}