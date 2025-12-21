import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Brain, Thermometer, Activity, AlertTriangle, CheckCircle, Clock, Stethoscope, Leaf, Pill } from 'lucide-react';
import { Progress } from './ui/progress';

interface AiSymptomDetectorProps {
  selectedLanguage: string;
  onConsultDoctor?: () => void;
}

const translations = {
  english: {
    title: 'AI Symptom Detector',
    describeSymptoms: 'Describe Your Symptoms',
    analyzeSymptoms: 'Analyze Symptoms',
    checkSymptoms: 'Check Symptoms',
    commonSymptoms: 'Common Symptoms',
    duration: 'Duration',
    severity: 'Severity',
    bodyPart: 'Body Part Affected',
    additionalInfo: 'Additional Information',
    analyzing: 'Analyzing...',
    results: 'Analysis Results',
    recommendations: 'Recommendations',
    urgency: 'Urgency Level',
    consulDoctor: 'Consult Doctor',
    emergencyCase: 'Emergency Case',
    homeRemediesSection: 'Home Remedies',
    medicinesSection: 'Recommended Medicines',
    medicineDisclaimer: 'Consult a doctor before taking any medication. Dosages may vary based on age and health conditions.',
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    critical: 'Critical',
    hours: 'Hours',
    days: 'Days',
    weeks: 'Weeks',
    months: 'Months',
    fever: 'Fever',
    headache: 'Headache',
    cough: 'Cough',
    bodyAche: 'Body Ache',
    nausea: 'Nausea',
    fatigue: 'Fatigue',
    dizziness: 'Dizziness',
    chestPain: 'Chest Pain',
    shortnessBreath: 'Shortness of Breath',
    abdominalPain: 'Abdominal Pain',
    head: 'Head',
    chest: 'Chest',
    abdomen: 'Abdomen',
    arms: 'Arms',
    legs: 'Legs',
    back: 'Back',
    throat: 'Throat',
    stomach: 'Stomach',
    neck: 'Neck',
    shoulders: 'Shoulders',
    hands: 'Hands',
    feet: 'Feet',
    joints: 'Joints',
    muscles: 'Muscles',
    skin: 'Skin',
    eyes: 'Eyes',
    ears: 'Ears',
    nose: 'Nose',
    mouth: 'Mouth',
    enterSymptoms: 'Describe your symptoms in detail...',
    possibleConditions: 'Possible Conditions',
    confidence: 'Probability',
    symptoms: 'symptoms selected',
    immediateAttention: 'Seek immediate medical attention',
    scheduleAppointment: 'Schedule an appointment within 24-48 hours',
    homeRemedies: 'Try home remedies and monitor symptoms',
    restHydration: 'Rest and stay hydrated',
    disclaimer: 'This is not a medical diagnosis. Always consult healthcare professionals.',
    monitorTemp: 'Monitor temperature regularly',
    avoidContact: 'Avoid contact with others',
    warmHoneyTea: '🍯 Drink warm honey and lemon tea',
    saltWaterGargle: '🌿 Gargle with warm salt water',
    warmSoup: '🍲 Have warm chicken soup or broth',
    steamInhalation: '🛁 Take steam inhalation 2-3 times daily',
    gingerTurmeric: '🧄 Consume ginger and turmeric',
    adequateRest: '💤 Get adequate rest (8+ hours sleep)',
    stayHydrated: '💧 Stay hydrated - drink plenty of fluids',
    onionGarlic: '🧅 Use onion and garlic in meals',
    naturalRemedyNote: '💡 These are natural remedies that may help relieve symptoms. Consult a doctor if symptoms persist or worsen.',
    specificRemedies: 'Specific Remedies',
    generalRemedies: 'General Remedies'
  },
  hindi: {
    title: 'एआई लक्षण डिटेक्टर',
    describeSymptoms: 'अपने लक्षणों का वर्णन करें',
    analyzeSymptoms: 'लक्षणों का विश्लेषण करें',
    checkSymptoms: 'लक्षण जांचें',
    commonSymptoms: 'सामान्य लक्षण',
    duration: 'अवधि',
    severity: 'गंभीरता',
    bodyPart: 'प्रभावित शरीर का हिस्सा',
    additionalInfo: 'अतिरिक्त जानकारी',
    analyzing: 'विश्लेषण कर रहे हैं...',
    results: 'विश्लेषण परिणाम',
    recommendations: 'सिफारिशें',
    urgency: 'तात्कालिकता स्तर',
    consulDoctor: 'डॉक्टर से सलाह लें',
    emergencyCase: 'आपातकालीन मामला',
    homeRemediesSection: 'घरेलू उपचार',
    medicinesSection: 'सुझावित दवाएं',
    medicineDisclaimer: 'कोई भी दवा लेने से पहले डॉक्टर से सलाह लें। खुराक उम्र और स्वास्थ्य स्थितियों के आधार पर भिन्न हो सकती है।',
    mild: 'हल्का',
    moderate: 'मध्यम',
    severe: 'गंभीर',
    low: 'कम',
    medium: 'मध्यम',
    high: 'उच्च',
    critical: 'गंभीर',
    hours: 'घंटे',
    days: 'दिन',
    weeks: 'सप्ताह',
    months: 'महीने',
    fever: 'बुखार',
    headache: 'सिरदर्द',
    cough: 'खांसी',
    bodyAche: 'शरीर दर्द',
    nausea: 'मतली',
    fatigue: 'थकान',
    dizziness: 'चक्कर आना',
    chestPain: 'छाती में दर्द',
    shortnessBreath: 'सांस लेने में कठिनाई',
    abdominalPain: 'पेट दर्द',
    head: 'सिर',
    chest: 'छाती',
    abdomen: 'पेट',
    arms: 'बाहें',
    legs: 'पैर',
    back: 'पीठ',
    throat: 'गला',
    stomach: 'पेट',
    neck: 'गर्दन',
    shoulders: 'कंधे',
    hands: 'हाथ',
    feet: 'पैर',
    joints: 'जोड़',
    muscles: 'मांसपेशियां',
    skin: 'त्वचा',
    eyes: 'आंखें',
    ears: 'कान',
    nose: 'नाक',
    mouth: 'मुंह',
    enterSymptoms: 'अपने लक्षणों का विस्तार से वर्णन करें...',
    possibleConditions: 'संभावित स्थितियां',
    confidence: 'संभावना',
    symptoms: 'लक्षण चुने गए',
    immediateAttention: 'तत्काल चिकित्सा सहायता लें',
    scheduleAppointment: '24-48 घंटों ें अपॉइंटमेंट शेड्यूल करें',
    homeRemedies: 'घरेलू उपचार आजमाएं और लक्षणों पर नजर रखें',
    restHydration: 'आराम करें और पानी पिएं',
    disclaimer: 'यह चिकित्सा निदान नहीं है। हमेशा स्वास्थ्य पेशेवरों से सलाह लें।',
    monitorTemp: 'नियमित रूप से तापमान की जांच करें',
    avoidContact: 'दूसरों के संपर्क से बचें',
    warmHoneyTea: '🍯 गुनगुना शहद और नींबू की चाय पिएं',
    saltWaterGargle: '🌿 गुनगुने नमक के पानी से गरारे करें',
    warmSoup: '🍲 गुनगुना चिकन सूप या शोरबा लें',
    steamInhalation: '🛁 दिन में 2-3 बार भाप लें',
    gingerTurmeric: '🧄 अदरक और हल्दी का सेवन करें',
    adequateRest: '💤 पर्याप्त आराम करें (8+ घंटे की नींद)',
    stayHydrated: '💧 हाइड्रेटेड रहें - खूब तरल पदार्थ पिएं',
    onionGarlic: '🧅 भोजन में प्याज और लहसुन का उपयोग करें',
    naturalRemedyNote: '💡 ये प्राकृतिक उपचार हैं जो लक्षणों को कम करने में मदद कर सकते हैं। यदि लक्षण बने रहते हैं या बिगड़ते हैं तो डॉक्टर से सलाह लें।',
    specificRemedies: 'विशिष्ट उपचार',
    generalRemedies: 'सामान्य उपचार'
  },
  punjabi: {
    title: 'ਏਆਈ ਲੱਛਣ ਡਿਟੈਕਟਰ',
    describeSymptoms: 'ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ',
    analyzeSymptoms: 'ਲੱਛਣਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
    checkSymptoms: 'ਲੱਛਣ ਜਾਂਚੋ',
    commonSymptoms: 'ਆਮ ਲੱਛਣ',
    duration: 'ਅਵਧੀ',
    severity: 'ਗੰਭੀਰਤਾ',
    bodyPart: 'ਸਰੀਰ ਦਾ ਪ੍ਰਭਾਵਿਤ ਹਿੱਸਾ',
    additionalInfo: 'ਵਾਧੂ ਜਾਣਕਾਰੀ',
    analyzing: 'ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਹੇ ਹਾਂ...',
    results: 'ਵਿਸ਼ਲੇਸ਼ਣ ਨਤੀਜੇ',
    recommendations: 'ਸਿਫਾਰਸ਼ਾਂ',
    urgency: 'ਜ਼ਰੂਰੀ ਪੱਧਰ',
    consulDoctor: 'ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ',
    emergencyCase: 'ਐਮਰਜੈਂਸੀ ਕੇਸ',
    homeRemediesSection: 'ਘਰੇਲੂ ਇਲਾਜ',
    medicinesSection: 'ਸੁਝਾਈਆਂ ਦਵਾਈਆਂ',
    medicineDisclaimer: 'ਕੋਈ ਵੀ ਦਵ��ਈ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ। ਖੁਰਾਕ ਉਮਰ ਅਤੇ ਸਿਹਤ ਸਥਿਤੀਆਂ ਦੇ ਆਧਾਰ ਤੇ ਵੱਖਰੀ ਹੋ ਸਕਦੀ ਹੈ।',
    mild: 'ਹਲਕਾ',
    moderate: 'ਮੱਧਮ',
    severe: 'ਗੰਭੀਰ',
    low: 'ਘੱਟ',
    medium: 'ਮੱਧਮ',
    high: 'ਉੱਚ',
    critical: 'ਗੰਭੀਰ',
    hours: 'ਘੰਟੇ',
    days: 'ਦਿਨ',
    weeks: 'ਹਫ਼ਤੇ',
    months: 'ਮਹੀਨੇ',
    fever: 'ਬੁਖਾਰ',
    headache: 'ਸਿਰ ਦਰਦ',
    cough: 'ਖੰਘ',
    bodyAche: 'ਸਰੀਰ ਦਰਦ',
    nausea: 'ਜੀ ਮਿਚਲਾਉਣਾ',
    fatigue: 'ਥਕਾਵਟ',
    dizziness: 'ਚੱਕਰ ਆਉਣਾ',
    chestPain: 'ਸੀਨੇ ਵਿੱਚ ਦਰਦ',
    shortnessBreath: 'ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸਖਲ',
    abdominalPain: 'ਪੇਟ ਦਰਦ',
    head: 'ਸਿਰ',
    chest: 'ਸੀਨਾ',
    abdomen: 'ਪੇਟ',
    arms: 'ਬਾਹਾਂ',
    legs: 'ਲੱਤਾਂ',
    back: 'ਪਿੱਠ',
    throat: 'ਗਲਾ',
    stomach: 'ਪੇਟ',
    neck: 'ਗਰਦਨ',
    shoulders: 'ਮੋਢੇ',
    hands: 'ਹੱਥ',
    feet: 'ਪੈਰ',
    joints: 'ਜੋੜ',
    muscles: 'ਮਾਸਪੇਸ਼ੀਆਂ',
    skin: 'ਚਮੜੀ',
    eyes: 'ਅੱਖਾਂ',
    ears: 'ਕੰਨ',
    nose: 'ਨੱਕ',
    mouth: 'ਮੂੰਹ',
    enterSymptoms: 'ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਿਸਤਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ...',
    possibleConditions: 'ਸੰਭਾਵਿਤ ਸਥਿਤੀਆਂ',
    confidence: 'ਸੰਭਾਵਨਾ',
    symptoms: 'ਲੱਛਣ ਚੁਣੇ ਗਏ',
    immediateAttention: 'ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਲਓ',
    scheduleAppointment: '24-48 ਘੰਟਿਆਂ ਵਿੱਚ ਮੁਲਾਕਾਤ ਕਰਵਾਓ',
    homeRemedies: 'ਘਰੇਲੂ ਇਲਾਜ ਅਜ਼ਮਾਓ ਅਤੇ ਲੱਛਣਾਂ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ',
    restHydration: 'ਆਰਾਮ ਕਰੋ ਅਤੇ ਪਾਣੀ ਪੀਓ',
    disclaimer: 'ਇਹ ਡਾਕਟਰੀ ਨਿਦਾਨ ਨਹੀਂ ਹੈ। ਹਮੇਸ਼ਾ ਸਿਹਤ ਪੇਸ਼ੇਵਰਾਂ ਨਾਲ ਸਲਾਹ ਕਰੋ।',
    monitorTemp: 'ਨਿਯਮਿਤ ਤੌਰ ਤੇ ਤਾਪਮਾਨ ਦੀ ਜਾਂਚ ਕਰੋ',
    avoidContact: 'ਦੂਜਿਆਂ ਨਾਲ ਸੰਪਰਕ ਤੋਂ ਬਚੋ',
    warmHoneyTea: '🍯 ਗਰਮ ਸ਼ਹਿਦ ਅਤੇ ਨਿੰਬੂ ਦੀ ਚਾਹ ਪੀਓ',
    saltWaterGargle: '🌿 ਗਰਮ ਨਮਕ ਦੇ ਪਾਣੀ ਨਾਲ ਗਾਰਗਲ ਕਰੋ',
    warmSoup: '🍲 ਗਰਮ ਚਿਕਨ ਸੂਪ ਜਾਂ ਬਰੋਥ ਲਓ',
    steamInhalation: '🛁 ਦਿਨ ਵਿਚ 2-3 ਵਾਰ ਭਾਫ਼ ਲਓ',
    gingerTurmeric: '🧄 ਅਦਰਕ ਅਤੇ ਹਲਦੀ ਦਾ ਸੇਵਨ ਕਰੋ',
    adequateRest: '💤 ਪੂਰਾ ਆਰਾਮ ਕਰੋ (8+ ਘੰਟੇ ਦੀ ਨੀਂਦ)',
    stayHydrated: '💧 ਹਾਈਡ੍ਰੇਟਿਡ ਰਹੋ - ਬਹੁਤ ਸਾਰੇ ਤਰਲ ਪਦਾਰਥ ਪੀਓ',
    onionGarlic: '🧅 ਖਾਣੇ ਵਿਚ ਪਿਆਜ਼ ਅਤੇ ਲਸਣ ਦਾ ਇਸਤੇਮਾਲ ਕਰੋ',
    naturalRemedyNote: '💡 ਇਹ ਕੁਦਰਤੀ ਇਲਾਜ ਹਨ ਜੋ ਲੱਛਣਾਂ ਨੂੰ ਘਟਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ। ਜੇ ਲੱਛਣ ਬਣੇ ਰਹਿੰਦੇ ਹਨ ਜਾਂ ਬਿਗੜਦੇ ਹਨ ਤਾਂ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।',
    specificRemedies: 'ਖਾਸ ਇਲਾਜ',
    generalRemedies: 'ਆਮ ਇਲਾਜ'
  },
  tamil: {
    title: 'AI அறிகுறி கண்டறிதல்',
    describeSymptoms: 'உங்கள் அறிகுறிகளை விவரிக்கவும்',
    analyzeSymptoms: 'அறிகுறிகளை பகுப்பாய்வு செய்க',
    checkSymptoms: 'அறிகுறிகளை சரிபார்க்கவும்',
    commonSymptoms: 'பொதுவான அறிகுறிகள்',
    duration: 'கால அளவு',
    severity: 'தீவிரம்',
    bodyPart: 'பாதிக்கப்பட்ட உடல் பகுதி',
    additionalInfo: 'கூடுதல் தகவல்',
    analyzing: 'பகுப்பாய்வு செய்கிறது...',
    results: 'பகுப்பாய்வு முடிவுகள்',
    recommendations: 'பரிந்துரைகள்',
    urgency: 'அவசர நிலை',
    consulDoctor: 'மருத்துவரை அணுகவும்',
    emergencyCase: 'அவசர நிலை',
    homeRemediesSection: 'வீட்டு வைத்தியம்',
    medicinesSection: 'பரிந்துரைக்கப்பட்ட மருந்துகள்',
    medicineDisclaimer: 'மருந்து எடுக்கும் முன் மருத்துவரை அணுகவும். வயது மற்றும் உடல்நலத்தைப் பொறுத்து அளவு மாறுபடலாம்.',
    mild: 'லேசான',
    moderate: 'மிதமான',
    severe: 'தீவிரமான',
    low: 'குறைந்த',
    medium: 'நடுத்தர',
    high: 'அதிக',
    critical: 'முக்கியமான',
    hours: 'மணிநேரம்',
    days: 'நாட்கள்',
    weeks: 'வாரங்கள்',
    months: 'மாதங்கள்',
    fever: 'காய்ச்சல்',
    headache: 'தலைவலி',
    cough: 'இருமல்',
    bodyAche: 'உடல் வலி',
    nausea: 'குமட்டல்',
    fatigue: 'சோர்வு',
    dizziness: 'தலைச்சுற்றல்',
    chestPain: 'மார்பு வலி',
    shortnessBreath: 'மூச்சுத் திணறல்',
    abdominalPain: 'வயிற்று வலி',
    head: 'தலை',
    chest: 'மார்பு',
    abdomen: 'வயிறு',
    arms: 'கைகள்',
    legs: 'கால்கள்',
    back: 'முதுகு',
    throat: 'தொண்டை',
    stomach: 'வயிறு',
    neck: 'கழுத்து',
    shoulders: 'தோள்கள்',
    hands: 'கைகள்',
    feet: 'கால்கள்',
    joints: 'மூட்டுகள்',
    muscles: 'தசைகள்',
    skin: 'தோல்',
    eyes: 'கண்கள்',
    ears: 'காதுகள்',
    nose: 'மூக்கு',
    mouth: 'வாய்',
    enterSymptoms: 'உங்கள் அறிகுறிகளை விரிவாக விவரிக்கவும்...',
    possibleConditions: 'சாத்தியமான நிலைகள்',
    confidence: 'நம்பகத்தன்மை',
    symptoms: 'தேர்ந்தெடுக்கப்பட்ட அறிகுறிகள்',
    immediateAttention: 'உடனடி மருத்துவ உதவி பெறவும்',
    scheduleAppointment: '24-48 மணி நேரத்திற்குள் சந்திப்பு பதிவு செய்யவும்',
    homeRemedies: 'வீட்டு வைத்தியம் முயற்சிக்கவும்',
    restHydration: 'ஓய்வு எடுத்து நீர்ச்சத்துடன் இருங்கள்',
    disclaimer: 'இது மருத்துவ நோயறிதல் அல்ல. எப்போதும் மருத்துவ நிபுணர்களை அணுகவும்.',
    monitorTemp: 'வெப்பநிலையை தொடர்ந்து கண்காணிக்கவும்',
    avoidContact: 'மற்றவர்களுடன் தொடர்பை தவிர்க்கவும்',
    warmHoneyTea: '🍯 தேன் எலுமிச்சை தேநீர் குடிக்கவும்',
    saltWaterGargle: '🌿 உப்பு நீரில் வாய் கொப்பளிக்கவும்',
    warmSoup: '🍲 சூடான சூப் குடிக்கவும்',
    steamInhalation: '🛁 நாளொன்றுக்கு 2-3 முறை ஆவி பிடிக்கவும்',
    gingerTurmeric: '🧄 இஞ்சி மஞ்சள் உட்கொள்ளவும்',
    adequateRest: '💤 போதுமான ஓய்வு எடுக்கவும் (8+ மணி நேர தூக்கம்)',
    stayHydrated: '💧 நீர்ச்சத்துடன் இருங்கள் - நிறைய திரவங்கள் குடிக்கவும்',
    onionGarlic: '🧅 உணவில் வெங்காயம் பூண்டு சேர்க்கவும்',
    naturalRemedyNote: '💡 இவை அறிகுறிகளை குறைக்க உதவும் இயற்கை வைத்தியம். அறிகுறிகள் தொடர்ந்தால் மருத்துவரை அணுகவும்.',
    specificRemedies: 'குறிப்பிட்ட வைத்தியம்',
    generalRemedies: 'பொதுவான வைத்தியம்'
  },
  telugu: {
    title: 'AI లక్షణ గుర్తింపు',
    describeSymptoms: 'మీ లక్షణాలను వివరించండి',
    analyzeSymptoms: 'లక్షణాలను విశ్లేషించండి',
    checkSymptoms: 'లక్షణాలను తనిఖీ చేయండి',
    commonSymptoms: 'సాధారణ లక్షణాలు',
    duration: 'వ్యవధి',
    severity: 'తీవ్రత',
    bodyPart: 'ప్రభావిత శరీర భాగం',
    additionalInfo: 'అదనపు సమాచారం',
    analyzing: 'విశ్లేషిస్తోంది...',
    results: 'విశ్లేషణ ఫలితాలు',
    recommendations: 'సిఫార్సులు',
    urgency: 'ఆవశ్యకత స్థాయి',
    consulDoctor: 'వైద్యుని సంప్రదించండి',
    emergencyCase: 'అత్యవసర పరిస్థితి',
    homeRemediesSection: 'ఇంటి చికిత్సలు',
    medicinesSection: 'సిఫార్సు చేయబడిన మందులు',
    medicineDisclaimer: 'మందు తీసుకునే ముందు వైద్యుని సంప్రదించండి. వయస్సు మరియు ఆరోగ్య పరిస్థితుల ఆధారంగా మోతాదు మారవచ్చు.',
    mild: 'తేలికపాటి',
    moderate: 'మితమైన',
    severe: 'తీవ్రమైన',
    low: 'తక్కువ',
    medium: 'మధ్యస్థ',
    high: 'ఎక్కువ',
    critical: 'క్లిష్టమైన',
    hours: 'గంటలు',
    days: 'రోజులు',
    weeks: 'వారాలు',
    months: 'నెలలు',
    fever: 'జ్వరం',
    headache: 'తలనొప్పి',
    cough: 'దగ్గు',
    bodyAche: 'శరీర నొప్పి',
    nausea: 'వాంతి',
    fatigue: 'అలసట',
    dizziness: 'తల తిరగడం',
    chestPain: 'ఛాతీ నొప్పి',
    shortnessBreath: 'శ్వాస తీసుకోవడంలో ఇబ్బంది',
    abdominalPain: 'కడుపు నొప్పి',
    head: 'తల',
    chest: 'ఛాతీ',
    abdomen: 'కడుపు',
    arms: 'చేతులు',
    legs: 'కాళ్ళు',
    back: 'వెనుక భాగం',
    throat: 'గొంతు',
    stomach: 'కడుపు',
    neck: 'మెడ',
    shoulders: 'భుజాలు',
    hands: 'చేతులు',
    feet: 'పాదాలు',
    joints: 'కీళ్ళు',
    muscles: 'కండరాలు',
    skin: 'చర్మం',
    eyes: 'కళ్ళు',
    ears: 'చెవులు',
    nose: 'ముక్కు',
    mouth: 'నోరు',
    enterSymptoms: 'మీ లక్షణాలను వివరంగా వివరించండి...',
    possibleConditions: 'సంభావ్య పరిస్థితులు',
    confidence: 'నమ్మకత్వం',
    symptoms: 'ఎంచుకున్న లక్షణాలు',
    immediateAttention: 'తక్షణ వైద్య సహాయం పొందండి',
    scheduleAppointment: '24-48 గంటల్లో అపాయింట్మెంట్ తీసుకోండి',
    homeRemedies: 'ఇంటి చికిత్సలను ప్రయత్నించండి',
    restHydration: 'విశ్రాంతి తీసుకోండి మరియు నీరు త్రాగండి',
    disclaimer: 'ఇది వైద్య నిర్ధారణ కాదు. ఎల్లప్పుడూ ఆరోగ్య నిపుణులను సంప్రదించండి.',
    monitorTemp: 'ఉష్ణోగ్రతను క్రమంగా పర్యవేక్షించండి',
    avoidContact: 'ఇతరులతో సంప్రదింపులను నివారించండి',
    warmHoneyTea: '🍯 తేనె నిమ్మరసం టీ త్రాగండి',
    saltWaterGargle: '🌿 ఉప్పు నీటితో గార్గిల్ చేయండి',
    warmSoup: '🍲 వేడి సూప్ త్రాగండి',
    steamInhalation: '🛁 రోజుకు 2-3 సార్లు ఆవిరి తీసుకోండి',
    gingerTurmeric: '🧄 అల్లం పసుపు తీసుకోండి',
    adequateRest: '💤 తగినంత విశ్రాంతి తీసుకోండి (8+ గంటల నిద్ర)',
    stayHydrated: '💧 నీటితో ఉండండి - చాలా ద్రవాలు త్రాగండి',
    onionGarlic: '🧅 ఆహారంలో ఉల్లి వెల్లుల్లి వాడండి',
    naturalRemedyNote: '💡 ఇవి లక్షణాలను తగ్గించడంలో సహాయపడే సహజ చికిత్సలు. లక్షణాలు కొనసాగితే వైద్యుని సంప్రదించండి.',
    specificRemedies: 'నిర్దిష్ట చికిత్సలు',
    generalRemedies: 'సాధారణ చికిత్సలు'
  },
  bengali: {
    title: 'AI লক্ষণ শনাক্তকারী',
    describeSymptoms: 'আপনার লক্ষণ বর্ণনা করুন',
    analyzeSymptoms: 'লক্ষণ বিশ্লেষণ করুন',
    checkSymptoms: 'লক্ষণ পরীক্ষা করুন',
    commonSymptoms: 'সাধারণ লক্ষণ',
    duration: 'সময়কাল',
    severity: 'তীব্রতা',
    bodyPart: 'প্রভাবিত শরীরের অংশ',
    additionalInfo: 'অতিরিক্ত তথ্য',
    analyzing: 'বিশ্লেষণ করছে...',
    results: 'বিশ্লেষণের ফলাফল',
    recommendations: 'সুপারিশসমূহ',
    urgency: 'জরুরি স্তর',
    consulDoctor: 'ডাক্তারের পরামর্শ নিন',
    emergencyCase: 'জরুরি ক্ষেত্র',
    homeRemediesSection: 'ঘরোয়া প্রতিকার',
    medicinesSection: 'প্রস্তাবিত ওষুধ',
    medicineDisclaimer: 'কোনো ওষুধ খাওয়ার আগে ডাক্তারের পরামর্শ নিন। বয়স এবং স্বাস্থ্যের অবস্থার উপর ভিত্তি করে ডোজ পরিবর্তিত হতে পারে।',
    mild: 'হালকা',
    moderate: 'মাঝারি',
    severe: 'গুরুতর',
    low: 'কম',
    medium: 'মাঝারি',
    high: 'উচ্চ',
    critical: 'সংকটজনক',
    hours: 'ঘন্টা',
    days: 'দিন',
    weeks: 'সপ্তাহ',
    months: 'মাস',
    fever: 'জ্বর',
    headache: 'মাথাব্যথা',
    cough: 'কাশি',
    bodyAche: 'শরীর ব্যথা',
    nausea: 'বমি বমি ভাব',
    fatigue: 'ক্লান্তি',
    dizziness: 'মাথা ঘোরা',
    chestPain: 'বুকে ব্যথা',
    shortnessBreath: 'শ্বাসকষ্ট',
    abdominalPain: 'পেট ব্যথা',
    head: 'মাথা',
    chest: 'বুক',
    abdomen: 'পেট',
    arms: 'হাত',
    legs: 'পা',
    back: 'পিঠ',
    throat: 'গলা',
    stomach: 'পেট',
    neck: 'ঘাড়',
    shoulders: 'কাঁধ',
    hands: 'হাত',
    feet: 'পা',
    joints: 'জোড়',
    muscles: 'পেশী',
    skin: 'ত্বক',
    eyes: 'চোখ',
    ears: 'কান',
    nose: 'নাক',
    mouth: 'মুখ',
    enterSymptoms: 'আপনার লক্ষণগুলি বিস্তারিত বর্ণনা করুন...',
    possibleConditions: 'সম্ভাব্য অবস্থা',
    confidence: 'সম্ভাবনা',
    symptoms: 'নির্বাচিত লক্ষণ',
    immediateAttention: 'অবিলম্বে চিকিৎসা সহায়তা নিন',
    scheduleAppointment: '24-48 ঘন্টার মধ্যে অ্যাপয়েন্টমেন্ট করুন',
    homeRemedies: 'ঘরোয়া প্রতিকার চেষ্টা করুন',
    restHydration: 'বিশ্রাম নিন এবং জল পান করুন',
    disclaimer: 'এটি চিকিৎসা নির্ণয় নয়। সর্বদা স্বাস্থ্য পেশাদারদের পরামর্শ নিন।',
    monitorTemp: 'নিয়মিত তাপমাত্রা পর্যবেক্ষণ করুন',
    avoidContact: 'অন্যদের সাথে যোগাযোগ এড়িয়ে চলুন',
    warmHoneyTea: '🍯 মধু লেবু চা পান করুন',
    saltWaterGargle: '🌿 লবণ জল দিয়ে গার্গল করুন',
    warmSoup: '🍲 গরম স্যুপ পান করুন',
    steamInhalation: '🛁 দিনে 2-3 বার বাষ্প নিন',
    gingerTurmeric: '🧄 আদা হলুদ গ্রহণ করুন',
    adequateRest: '💤 পর্যাপ্ত বিশ্রাম নিন (8+ ঘন্টা ঘুম)',
    stayHydrated: '💧 হাইড্রেটেড থাকুন - প্রচুর তরল পান করুন',
    onionGarlic: '🧅 খাবারে পেঁয়াজ রসুন ব্যবহার করুন',
    naturalRemedyNote: '💡 এগুলি প্রাকৃতিক প্রতিকার যা লক্ষণ উপশমে সাহায্য করতে পারে। লক্ষণ অব্যাহত থাকলে ডাক্তারের পরামর্শ নিন।',
    specificRemedies: 'নির্দিষ্ট প্রতিকার',
    generalRemedies: 'সাধারণ প্রতিকার'
  },
  marathi: {
    title: 'AI लक्षण शोधक',
    describeSymptoms: 'तुमची लक्षणे वर्णन करा',
    analyzeSymptoms: 'लक्षणांचे विश्लेषण करा',
    checkSymptoms: 'लक्षणे तपासा',
    commonSymptoms: 'सामान्य लक्षणे',
    duration: 'कालावधी',
    severity: 'तीव्रता',
    bodyPart: 'प्रभावित शरीराचा भाग',
    additionalInfo: 'अतिरिक्त माहिती',
    analyzing: 'विश्लेषण करत आहे...',
    results: 'विश्लेषण परिणाम',
    recommendations: 'शिफारसी',
    urgency: 'तातडीचा स्तर',
    consulDoctor: 'डॉक्टरांचा सल्ला घ्या',
    emergencyCase: 'आणीबाणीची परिस्थिती',
    homeRemediesSection: 'घरगुती उपाय',
    medicinesSection: 'शिफारस केलेली औषधे',
    medicineDisclaimer: 'कोणतेही औषध घेण्यापूर्वी डॉक्टरांचा सल्ला घ्या. वय आणि आरोग्य स्थितीनुसार डोस बदलू शकतो.',
    mild: 'सौम्य',
    moderate: 'मध्यम',
    severe: 'गंभीर',
    low: 'कमी',
    medium: 'मध्यम',
    high: 'उच्च',
    critical: 'गंभीर',
    hours: 'तास',
    days: 'दिवस',
    weeks: 'आठवडे',
    months: 'महिने',
    fever: 'ताप',
    headache: 'डोकेदुखी',
    cough: 'खोकला',
    bodyAche: 'शरीर दुखणे',
    nausea: 'मळमळ',
    fatigue: 'थकवा',
    dizziness: 'चक्कर येणे',
    chestPain: 'छातीत दुखणे',
    shortnessBreath: 'श्वास घेण्यास त्रास',
    abdominalPain: 'पोट दुखणे',
    head: 'डोके',
    chest: 'छाती',
    abdomen: 'पोट',
    arms: 'हात',
    legs: 'पाय',
    back: 'पाठ',
    throat: 'घसा',
    stomach: 'पोट',
    neck: 'मान',
    shoulders: 'खांदे',
    hands: 'हात',
    feet: 'पाय',
    joints: 'सांधे',
    muscles: 'स्नायू',
    skin: 'त्वचा',
    eyes: 'डोळे',
    ears: 'कान',
    nose: 'नाक',
    mouth: 'तोंड',
    enterSymptoms: 'तुमची लक्षणे तपशीलवार वर्णन करा...',
    possibleConditions: 'संभाव्य स्थिती',
    confidence: 'संभाव्यता',
    symptoms: 'निवडलेली लक्षणे',
    immediateAttention: 'ताबडतोब वैद्यकीय मदत घ्या',
    scheduleAppointment: '24-48 तासांत भेट घ्या',
    homeRemedies: 'घरगुती उपाय वापरा',
    restHydration: 'आराम करा आणि पाणी प्या',
    disclaimer: 'हे वैद्यकीय निदान नाही. नेहमी आरोग्य व्यावसायिकांचा सल्ला घ्या.',
    monitorTemp: 'नियमितपणे तापमान तपासा',
    avoidContact: 'इतरांशी संपर्क टाळा',
    warmHoneyTea: '🍯 मध लिंबू चहा प्या',
    saltWaterGargle: '🌿 मीठ पाण्याने गार्गल करा',
    warmSoup: '🍲 गरम सूप प्या',
    steamInhalation: '🛁 दिवसातून 2-3 वेळा वाफ घ्या',
    gingerTurmeric: '🧄 आले हळद घ्या',
    adequateRest: '💤 पुरेशी विश्रांती घ्या (8+ तास झोप)',
    stayHydrated: '💧 हायड्रेटेड राहा - भरपूर द्रव प्या',
    onionGarlic: '🧅 अन्नात कांदा लसूण वापरा',
    naturalRemedyNote: '💡 हे नैसर्गिक उपाय आहेत जे लक्षणे कमी करण्यास मदत करू शकतात. लक्षणे कायम राहिल्यास डॉक्टरांचा सल्ला घ्या.',
    specificRemedies: 'विशिष्ट उपाय',
    generalRemedies: 'सामान्य उपाय'
  },
  gujarati: {
    title: 'AI લક્ષણ શોધક',
    describeSymptoms: 'તમારા લક્ષણોનું વર્ણન કરો',
    analyzeSymptoms: 'લક્ષણોનું વિશ્લેષણ કરો',
    checkSymptoms: 'લક્ષણો તપાસો',
    commonSymptoms: 'સામાન્ય લક્ષણો',
    duration: 'સમયગાળો',
    severity: 'તીવ્રતા',
    bodyPart: 'અસરગ્રસ્ત શરીરનો ભાગ',
    additionalInfo: 'વધારાની માહિતી',
    analyzing: 'વિશ્લેષણ કરી રહ્યું છે...',
    results: 'વિશ્લેષણ પરિણામો',
    recommendations: 'ભલામણો',
    urgency: 'તાત્કાલિક સ્તર',
    consulDoctor: 'ડૉક્ટરની સલાહ લો',
    emergencyCase: 'કટોકટીની સ્થિતિ',
    homeRemediesSection: 'ઘરગથ્થુ ઉપચાર',
    medicinesSection: 'ભલામણ કરેલી દવાઓ',
    medicineDisclaimer: 'કોઈપણ દવા લેતા પહેલા ડૉક્ટરની સલાહ લો. ઉંમર અને સ્વાસ્થ્ય સ્થિતિના આધારે માત્રા બદલાઈ શકે છે.',
    mild: 'હળવો',
    moderate: 'મધ્યમ',
    severe: 'ગંભીર',
    low: 'ઓછું',
    medium: 'મધ્યમ',
    high: 'ઊંચું',
    critical: 'ગંભીર',
    hours: 'કલાક',
    days: 'દિવસ',
    weeks: 'અઠવાડિયા',
    months: 'મહિના',
    fever: 'તાવ',
    headache: 'માથાનો દુખાવો',
    cough: 'ખાંસી',
    bodyAche: 'શરીરમાં દુખાવો',
    nausea: 'ઉબકા',
    fatigue: 'થાક',
    dizziness: 'ચક્કર',
    chestPain: 'છાતીમાં દુખાવો',
    shortnessBreath: 'શ્વાસ લેવામાં તકલીફ',
    abdominalPain: 'પેટમાં દુખાવો',
    head: 'માથું',
    chest: 'છાતી',
    abdomen: 'પેટ',
    arms: 'હાથ',
    legs: 'પગ',
    back: 'પીઠ',
    throat: 'ગળું',
    stomach: 'પેટ',
    neck: 'ગરદન',
    shoulders: 'ખભા',
    hands: 'હાથ',
    feet: 'પગ',
    joints: 'સાંધા',
    muscles: 'સ્નાયુઓ',
    skin: 'ત્વચા',
    eyes: 'આંખો',
    ears: 'કાન',
    nose: 'નાક',
    mouth: 'મોં',
    enterSymptoms: 'તમારા લક્ષણોનું વિગતવાર વર્ણન કરો...',
    possibleConditions: 'સંભવિત સ્થિતિઓ',
    confidence: 'સંભાવના',
    symptoms: 'પસંદ કરેલા લક્ષણો',
    immediateAttention: 'તાત્કાલિક તબીબી સહાય લો',
    scheduleAppointment: '24-48 કલાકમાં મુલાકાત લો',
    homeRemedies: 'ઘરગથ્થુ ઉપચાર અજમાવો',
    restHydration: 'આરામ કરો અને પાણી પીઓ',
    disclaimer: 'આ તબીબી નિદાન નથી. હંમેશા સ્વાસ્થ્ય વ્યાવસાયિકોની સલાહ લો.',
    monitorTemp: 'નિયમિતપણે તાપમાન તપાસો',
    avoidContact: 'અન્ય લોકો સાથે સંપર્ક ટાળો',
    warmHoneyTea: '🍯 મધ લીંબુની ચા પીઓ',
    saltWaterGargle: '🌿 મીઠાના પાણીથી ગાર્ગલ કરો',
    warmSoup: '🍲 ગરમ સૂપ પીઓ',
    steamInhalation: '🛁 દિવસમાં 2-3 વખત વરાળ લો',
    gingerTurmeric: '🧄 આદુ હળદર લો',
    adequateRest: '💤 પૂરતો આરામ કરો (8+ કલાક ઊંઘ)',
    stayHydrated: '💧 હાઇડ્રેટેડ રહો - પુષ્કળ પ્રવાહી પીઓ',
    onionGarlic: '🧅 ખોરાકમાં ડુંગળી લસણ વાપરો',
    naturalRemedyNote: '💡 આ કુદરતી ઉપચાર છે જે લક્ષણો ઓછા કરવામાં મદદ કરી શકે છે. લક્ષણો ચાલુ રહે તો ડૉક્ટરની સલાહ લો.',
    specificRemedies: 'ચોક્કસ ઉપચાર',
    generalRemedies: 'સામાન્ય ઉપચાર'
  }
};

export function AiSymptomDetector({ selectedLanguage, onConsultDoctor }: AiSymptomDetectorProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [symptomDescription, setSymptomDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const commonSymptoms = [
    { id: 'fever', name: t.fever, icon: Thermometer },
    { id: 'headache', name: t.headache, icon: Brain },
    { id: 'cough', name: t.cough, icon: Activity },
    { id: 'bodyAche', name: t.bodyAche, icon: Activity },
    { id: 'nausea', name: t.nausea, icon: Activity },
    { id: 'fatigue', name: t.fatigue, icon: Activity },
    { id: 'dizziness', name: t.dizziness, icon: Brain },
    { id: 'chestPain', name: t.chestPain, icon: AlertTriangle },
    { id: 'shortnessBreath', name: t.shortnessBreath, icon: AlertTriangle },
    { id: 'abdominalPain', name: t.abdominalPain, icon: Activity }
  ];

  // Medical conditions database with symptoms mapping
  const getMedicalDatabase = () => {
    const conditions = {
      english: {
        'common_cold': {
          symptoms: ['fever', 'headache', 'cough', 'fatigue', 'bodyAche'],
          name: 'Common Cold',
          confidence: 85,
          urgency: 'low',
          medicines: ['Paracetamol 500mg', 'Cetirizine 10mg', 'Cough Syrup (Dextromethorphan)', 'Vitamin C tablets'],
          remedies: ['🍯 Drink warm honey and lemon tea', '🌿 Gargle with warm salt water', '💤 Get adequate rest (8+ hours sleep)', '💧 Stay hydrated - drink plenty of fluids', '🛁 Take steam inhalation 2-3 times daily'],
          recommendations: ['Rest and stay hydrated', 'Monitor temperature regularly', 'Avoid contact with others']
        },
        'seasonal_flu': {
          symptoms: ['fever', 'headache', 'cough', 'bodyAche', 'fatigue'],
          name: 'Seasonal Influenza',
          confidence: 80,
          urgency: 'medium',
          medicines: ['Tamiflu (Oseltamivir)', 'Paracetamol 650mg', 'Ibuprofen 400mg', 'ORS packets'],
          remedies: ['🍲 Have warm chicken soup or broth', '💤 Get adequate rest (8+ hours sleep)', '💧 Stay hydrated - drink plenty of fluids', '🧄 Consume ginger and turmeric'],
          recommendations: ['Schedule an appointment within 24-48 hours', 'Monitor temperature regularly', 'Avoid contact with others']
        },
        'gastroenteritis': {
          symptoms: ['nausea', 'abdominalPain', 'dizziness', 'fatigue'],
          name: 'Gastroenteritis',
          confidence: 75,
          urgency: 'medium',
          medicines: ['ORS (Oral Rehydration Solution)', 'Ondansetron 4mg', 'Probiotics', 'Loperamide 2mg'],
          remedies: ['🥤 BRAT diet (Banana, Rice, Apple, Toast)', '🧂 Electrolyte solution', '💧 Small frequent water sips', '🌿 Ginger tea for nausea'],
          recommendations: ['Stay hydrated with small frequent sips', 'Avoid dairy and fatty foods', 'Seek medical help if severe dehydration']
        },
        'migraine': {
          symptoms: ['headache', 'nausea', 'dizziness'],
          name: 'Migraine Headache',
          confidence: 85,
          urgency: 'medium',
          medicines: ['Sumatriptan 50mg', 'Paracetamol 1000mg', 'Ibuprofen 600mg', 'Domperidone 10mg'],
          remedies: ['🌑 Rest in dark, quiet room', '❄️ Cold compress on forehead', '💆 Gentle head massage', '☕ Avoid caffeine triggers'],
          recommendations: ['Identify and avoid triggers', 'Maintain regular sleep schedule', 'Consider preventive medication if frequent']
        },
        'hypertension_symptoms': {
          symptoms: ['headache', 'dizziness', 'chestPain'],
          name: 'Hypertension (High Blood Pressure)',
          confidence: 70,
          urgency: 'high',
          medicines: ['Amlodipine 5mg', 'Losartan 50mg', 'Metoprolol 25mg', 'Hydrochlorothiazide 25mg'],
          remedies: ['🧘 Practice deep breathing', '🚶 Light walking', '🧂 Reduce salt intake', '🍌 Eat potassium-rich foods'],
          recommendations: ['Monitor blood pressure regularly', 'Follow low-sodium diet', 'Urgent medical consultation needed']
        },
        'respiratory_infection': {
          symptoms: ['cough', 'shortnessBreath', 'chestPain', 'fever'],
          name: 'Respiratory Tract Infection',
          confidence: 80,
          urgency: 'high',
          medicines: ['Azithromycin 500mg', 'Salbutamol inhaler', 'Prednisolone 10mg', 'Mucinex (Guaifenesin)'],
          remedies: ['🛁 Take steam inhalation 2-3 times daily', '🫁 Breathing exercises', '🍯 Honey with warm water', '🌿 Tulsi (Holy Basil) tea'],
          recommendations: ['Immediate medical attention', 'Avoid smoking and pollutants', 'Complete antibiotic course if prescribed']
        }
      },
      hindi: {
        'common_cold': {
          symptoms: ['fever', 'headache', 'cough', 'fatigue', 'bodyAche'],
          name: 'सामान्य सर्दी',
          confidence: 85,
          urgency: 'low',
          medicines: ['पैरासिटामोल 500mg', 'सेटिरिज़िन 10mg', 'खांसी की दवा (डेक्सट्रोमेथॉर्फ़न)', 'विटामिन सी की गोलियां'],
          remedies: ['🍯 गुनगुना शहद और नींबू की चाय पिएं', '🌿 गुनगुने नमक के पानी से गरारे करें', '💤 पर्याप्त आराम करें (8+ घंटे की नींद)', '💧 हाइड्रेटेड रहें - खूब तरल पदार्थ पिएं', '🛁 दिन में 2-3 बार भाप लें'],
          recommendations: ['आराम करें और पानी पिएं', 'नियमित रूप से तापमान की जांच करें', 'दूसरों के संपर्क से बचें']
        },
        'seasonal_flu': {
          symptoms: ['fever', 'headache', 'cough', 'bodyAche', 'fatigue'],
          name: 'मौसमी फ्लू',
          confidence: 80,
          urgency: 'medium',
          medicines: ['टैमिफ्लू (ओसेल्टामिविर)', 'पैरासिटामोल 650mg', 'आइबुप्रोफेन 400mg', 'ORS पैकेट'],
          remedies: ['🍲 गुनगुना चिकन सूप या शोरबा लें', '💤 पर्याप्त आराम करें (8+ घंटे की नींद)', '💧 हाइड्रेटेड रहें - खूब तरल पदार्थ पिएं', '🧄 अदरक और हल्दी का सेवन करें'],
          recommendations: ['24-48 घंटों में अपॉइंटमेंट शेड्यूल करें', 'नियमित रूप से तापमान की जांच करें', 'दूसरों के संपर्क से बचें']
        },
        'gastroenteritis': {
          symptoms: ['nausea', 'abdominalPain', 'dizziness', 'fatigue'],
          name: 'गैस्ट्रोएंटेराइटिस',
          confidence: 75,
          urgency: 'medium',
          medicines: ['ORS (मौखिक पुनर्जलीकरण समाधान)', 'ओंडानसेट्रॉन 4mg', 'प्रोबायोटिक्स', 'लोपेरामाइड 2mg'],
          remedies: ['🥤 BRAT आहार (केला, चावल, सेब, टोस्ट)', '🧂 इलेक्ट्रोलाइट समाधान', '💧 थोड़ा-थोड़ा पानी पिएं', '🌿 मतली के लिए अदरक की चाय'],
          recommendations: ['थोड़ा-थोड़ा करके हाइड्रेटेड रहें', 'डेयरी और तैलीय भोजन से बचें', 'गंभीर निर्जलीकरण में चिकित्सा सह��यता लें']
        },
        'migraine': {
          symptoms: ['headache', 'nausea', 'dizziness'],
          name: 'माइग्रेन सिरदर्द',
          confidence: 85,
          urgency: 'medium',
          medicines: ['सुमाट्रिप्टान 50mg', 'पैरासिटामोल 1000mg', 'आइबुप्रोफेन 600mg', 'डोम्पेरिडोन 10mg'],
          remedies: ['🌑 अंधेरे, शांत कमरे में आराम करें', '❄️ माथे पर ठंडी पट्टी रखें', '💆 सिर की हल्की मालिश', '☕ कैफीन ट्रिगर से बचें'],
          recommendations: ['ट्रिगर की पहचान करें और उनसे बचें', 'नियमित नींद का समय बनाए रखें', 'बार-बार होने पर रोकथाम की दवा पर विचार करें']
        },
        'hypertension_symptoms': {
          symptoms: ['headache', 'dizziness', 'chestPain'],
          name: 'उच्च रक्तचाप',
          confidence: 70,
          urgency: 'high',
          medicines: ['एम्लोडिपाइन 5mg', 'लोसार्टन 50mg', 'मेटोप्रोलोल 25mg', 'हाइड्रोक्लोरोथियाज़ाइड 25mg'],
          remedies: ['🧘 गहरी सांस लेने का अभ्यास करें', '🚶 हल्की सैर करें', '🧂 नमक का सेवन कम करें', '🍌 पोटेशियम से भरपूर भोजन खाएं'],
          recommendations: ['नियमित रूप से रक्तचाप की निगरानी करें', 'कम नमक वाला आहार लें', 'तत्काल चिकित्सा सलाह की आवश्यकता']
        },
        'respiratory_infection': {
          symptoms: ['cough', 'shortnessBreath', 'chestPain', 'fever'],
          name: 'श्वसन संक्रमण',
          confidence: 80,
          urgency: 'high',
          medicines: ['एज़िथ्रोमाइसिन 500mg', 'सैल्ब्यूटामोल इनहेलर', 'प्रेडनिसोलोन 10mg', 'म्यूसिनेक्स (ग्वाइफेनेसिन)'],
          remedies: ['🛁 दिन में 2-3 बार भाप लें', '🫁 सांस की एक्सरसाइज', '🍯 गुनगुने पानी के साथ शहद', '🌿 तुलसी की चाय'],
          recommendations: ['तत्काल चिकित्सा सहायता', 'धूम्रपान और प्रदूषण से बचें', 'निर्धारित एंटीबायोटिक का पूरा कोर्स करें']
        }
      },
      punjabi: {
        'common_cold': {
          symptoms: ['fever', 'headache', 'cough', 'fatigue', 'bodyAche'],
          name: 'ਆਮ ਜ਼ੁਕਾਮ',
          confidence: 85,
          urgency: 'low',
          medicines: ['ਪੈਰਾਸਿਟਾਮੋਲ 500mg', 'ਸੇਟਿਰਿਜ਼ਿਨ 10mg', 'ਖੰਘ ਦੀ ਦਵਾਈ (ਡੈਕਸਟ੍ਰੋਮੇਥੋਰਫੇਨ)', 'ਵਿਟਾਮਿਨ ਸੀ ਦੀਆਂ ਗੋਲੀਆਂ'],
          remedies: ['🍯 ਗਰਮ ਸ਼ਹਿਦ ਅਤੇ ਨਿੰਬੂ ਦੀ ਚਾਹ ਪੀਓ', '🌿 ਗਰਮ ਨਮਕ ਦੇ ਪਾਣੀ ਨਾਲ ਗਾਰਗਲ ਕਰੋ', '💤 ਪੂਰਾ ਆਰਾਮ ਕਰੋ (8+ ਘੰਟੇ ਦੀ ਨੀਂਦ)', '💧 ਹਾਈਡ੍ਰੇਟਿਡ ਰਹੋ - ਬਹੁਤ ਸਾਰੇ ਤਰਲ ਪਦਾਰਥ ਪੀਓ', '🛁 ਦਿਨ ਵਿਚ 2-3 ਵਾਰ ਭਾਫ਼ ਲਓ'],
          recommendations: ['ਆਰਾਮ ਕਰੋ ਅਤੇ ਪਾਣੀ ਪੀਓ', 'ਨਿਯਮਿਤ ਤੌਰ ਤੇ ਤਾਪਮਾਨ ਦੀ ਜਾਂਚ ਕਰੋ', 'ਦੂਜਿਆਂ ਨਾਲ ਸੰਪਰਕ ਤੋਂ ਬਚੋ']
        },
        'seasonal_flu': {
          symptoms: ['fever', 'headache', 'cough', 'bodyAche', 'fatigue'],
          name: 'ਮੌਸਮੀ ਫਲੂ',
          confidence: 80,
          urgency: 'medium',
          medicines: ['ਟੈਮਿਫਲੂ (ਓਸੇਲਟਾਮਿਵਿਰ)', 'ਪੈਰਾਸਿਟਾਮੋਲ 650mg', 'ਆਈਬੂਪ੍ਰੋਫੇਨ 400mg', 'ORS ਪੈਕੇਟ'],
          remedies: ['🍲 ਗਰਮ ਚਿਕਨ ਸੂਪ ਜਾਂ ਬਰੋਥ ਲਓ', '💤 ਪੂਰਾ ਆਰਾਮ ਕਰੋ (8+ ਘੰਟੇ ਦੀ ਨੀਂਦ)', '💧 ਹਾਈਡ੍ਰੇਟਿਡ ਰਹੋ - ਬਹੁਤ ਸਾਰੇ ਤਰਲ ਪਦਾਰਥ ਪੀਓ', '🧄 ਅਦਰਕ ਅਤੇ ਹਲਦੀ ਦਾ ਸੇਵਨ ਕਰੋ'],
          recommendations: ['24-48 ਘੰਟਿਆਂ ਵਿੱਚ ਮੁਲਾਕਾਤ ਕਰਵਾਓ', 'ਨਿਯਮਿਤ ਤੌਰ ਤੇ ਤਾਪਮਾਨ ਦੀ ਜਾਂਚ ਕਰੋ', 'ਦੂਜਿਆਂ ਨਾਲ ਸੰਪਰਕ ਤੋਂ ਬਚੋ']
        },
        'gastroenteritis': {
          symptoms: ['nausea', 'abdominalPain', 'dizziness', 'fatigue'],
          name: 'ਗੈਸਟ੍ਰੋਏਂਟਰਾਈਟਿਸ',
          confidence: 75,
          urgency: 'medium',
          medicines: ['ORS (ਮੌਖਿਕ ਪੁਨਰ-ਹਾਈਡ੍ਰੇਸ਼ਨ ਸੋਲੂਸ਼ਨ)', 'ਓਂਡਾਨਸੇਟ੍ਰੌਨ 4mg', 'ਪ੍ਰੋਬਾਇਓਟਿਕਸ', 'ਲੋਪੇਰਾਮਾਈਡ 2mg'],
          remedies: ['🥤 BRAT ਖੁਰਾਕ (ਕੇਲਾ, ਚਾਵਲ, ਸੇਬ, ਟੋਸਟ)', '🧂 ਇਲੈਕਟ੍ਰੋਲਾਈਟ ਸੋਲੂਸ਼ਨ', '💧 ਥੋੜ੍ਹਾ-ਥੋੜ੍ਹਾ ਪਾਣੀ ਪੀਓ', '🌿 ਜੀ ਮਿਚਲਾਉਣ ਲਈ ਅਦਰਕ ਦੀ ਚਾਹ'],
          recommendations: ['ਥੋੜ੍ਹਾ-ਥੋੜ੍ਹਾ ਕਰਕੇ ਹਾਈਡ੍ਰੇਟਿਡ ਰਹੋ', 'ਡੇਅਰੀ ਅਤੇ ਤੇਲ ਵਾਲੇ ਭੋਜਨ ਤੋਂ ਬਚੋ', 'ਗੰਭੀਰ ਡੀਹਾਈਡ੍ਰੇਸ਼ਨ ਵਿੱਚ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਲਓ']
        },
        'migraine': {
          symptoms: ['headache', 'nausea', 'dizziness'],
          name: 'ਮਾਈਗ੍ਰੇਨ ਸਿਰ ਦਰਦ',
          confidence: 85,
          urgency: 'medium',
          medicines: ['ਸੁਮਾਟ੍ਰਿਪਟਾਨ 50mg', 'ਪੈਰਾਸਿਟਾਮੋਲ 1000mg', 'ਆਈਬੂਪ੍ਰੋਫੇਨ 600mg', 'ਡੋਮਪੇਰਿਡੋਨ 10mg'],
          remedies: ['🌑 ਹਨੇਰੇ, ਸ਼ਾਂਤ ਕਮਰੇ ਵਿੱਚ ਆਰਾਮ ਕਰੋ', '❄️ ਮੱਥੇ ਤੇ ਠੰਡੀ ਪੱਟੀ ਰੱਖੋ', '💆 ਸਿਰ ਦੀ ਹਲਕੀ ਮਾਲਿਸ਼', '☕ ਕੈਫੀਨ ਟ੍ਰਿਗ�� ਤੋਂ ਬਚੋ'],
          recommendations: ['ਟ੍ਰਿਗਰ ਦੀ ਪਛਾਣ ਕਰੋ ਅਤੇ ਉਨ੍ਹਾਂ ਤੋਂ ਬਚੋ', 'ਨਿਯਮਿਤ ਨੀਂਦ ਦਾ ਸਮਾਂ ਬਣਾਈ ਰੱਖੋ', 'ਵਾਰ-ਵਾਰ ਹੋਣ ਤੇ ਰੋਕਥਾਮ ਦੀ ਦਵਾਈ ਬਾਰੇ ਸੋਚੋ']
        },
        'hypertension_symptoms': {
          symptoms: ['headache', 'dizziness', 'chestPain'],
          name: 'ਉੱਚ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ',
          confidence: 70,
          urgency: 'high',
          medicines: ['ਅਮਲੋਡਿਪਾਈਨ 5mg', 'ਲੋਸਾਰਟਨ 50mg', 'ਮੇਟੋਪ੍ਰੋਲੋਲ 25mg', 'ਹਾਈਡ੍ਰੋਕਲੋਰੋਥਿਆਜ਼ਾਈਡ 25mg'],
          remedies: ['🧘 ਡੂੰਘੀ ਸਾਹ ਲੈਣ ਦਾ ਅਭਿਆਸ ਕਰੋ', '🚶 ਹਲਕੀ ਸੈਰ ਕਰੋ', '🧂 ਲੂਣ ਦਾ ਸੇਵਨ ਘਟਾਓ', '🍌 ਪੋਟਾਸ਼ੀਅਮ ਭਰਪੂਰ ਭੋਜਨ ਖਾਓ'],
          recommendations: ['ਨਿਯਮਿਤ ਤ��ਰ ਤੇ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ', 'ਘੱਟ ਲੂਣ ਵਾਲਾ ਖਾਣਾ ਲਓ', 'ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਲਾਹ ਦੀ ਲੋੜ']
        },
        'respiratory_infection': {
          symptoms: ['cough', 'shortnessBreath', 'chestPain', 'fever'],
          name: 'ਸਾਹ ਦੀ ਨਾਲੀ ਦਾ ਇਨਫੈਕਸ਼ਨ',
          confidence: 80,
          urgency: 'high',
          medicines: ['ਅਜ਼ਿਥ੍ਰੋਮਾਈਸਿਨ 500mg', 'ਸੈਲਬੂਟਾਮੋਲ ਇਨਹੇਲਰ', 'ਪ੍ਰੇਡਨਿਸੋਲੋਨ 10mg', 'ਮਿਊਸਿਨੈਕਸ (ਗੁਆਈਫੇਨੇਸਿਨ)'],
          remedies: ['🛁 ਦਿਨ ਵਿਚ 2-3 ਵਾਰ ਭਾਫ਼ ਲਓ', '🫁 ਸਾਹ ਦੀ ਕਸਰਤ', '🍯 ਗਰਮ ਪਾਣੀ ਨਾਲ ਸ਼ਹਿਦ', '🌿 ਤੁਲਸੀ ਦੀ ਚਾਹ'],
          recommendations: ['ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ', 'ਸਿਗਰਟਨੋਸ਼ੀ ਅਤੇ ਪ੍ਰਦੂਸ਼ਣ ਤੋਂ ਬਚੋ', 'ਦਿੱਤੇ ਗਏ ਐਂਟੀਬਾਇਓਟਿਕ ਦਾ ਪੂਰਾ ਕੋਰਸ ਕਰੋ']
        }
      }
    };

    return conditions[selectedLanguage as keyof typeof conditions] || conditions.english;
  };

  const medicalDatabase = getMedicalDatabase();

  const analyzeSymptoms = () => {
    const possibleConditions = [];
    
    // Calculate matches for each condition
    for (const [key, condition] of Object.entries(medicalDatabase)) {
      const matchingSymptoms = selectedSymptoms.filter(symptom => 
        condition.symptoms.includes(symptom)
      );
      
      if (matchingSymptoms.length > 0) {
        let matchPercentage = (matchingSymptoms.length / condition.symptoms.length) * 100;
        
        // Adjust confidence based on severity and duration
        let confidenceMultiplier = 1;
        if (severity === 'severe') confidenceMultiplier += 0.2;
        if (severity === 'moderate') confidenceMultiplier += 0.1;
        if (duration === 'weeks' || duration === 'months') confidenceMultiplier += 0.15;
        if (duration === 'hours') confidenceMultiplier -= 0.1;
        
        // Boost confidence for exact symptom matches
        if (matchingSymptoms.length >= 3) confidenceMultiplier += 0.15;
        
        const adjustedConfidence = Math.min(matchPercentage * confidenceMultiplier * 0.8 + 20, 95);
        
        possibleConditions.push({
          ...condition,
          confidence: Math.round(adjustedConfidence),
          matchingSymptoms: matchingSymptoms.length,
          exactMatches: matchingSymptoms
        });
      }
    }
    
    // Sort by confidence and number of matching symptoms
    possibleConditions.sort((a, b) => {
      if (b.confidence === a.confidence) {
        return b.matchingSymptoms - a.matchingSymptoms;
      }
      return b.confidence - a.confidence;
    });
    
    return possibleConditions.slice(0, 3);
  };

  const getAnalysisResults = () => {
    const conditions = analyzeSymptoms();
    const topCondition = conditions[0];
    
    if (!topCondition) {
      return {
        possibleConditions: [
          { condition: 'General Health Check', confidence: 50, urgency: 'low', medicines: ['Multivitamin tablets'], remedies: [t.adequateRest, t.stayHydrated] }
        ],
        urgencyLevel: 'low',
        recommendations: [t.restHydration],
        medicines: ['Multivitamin tablets'],
        homeRemedies: [t.adequateRest, t.stayHydrated]
      };
    }
    
    // Determine overall urgency based on highest urgency condition
    const urgencyLevels = conditions.map(c => c.urgency);
    const overallUrgency = urgencyLevels.includes('high') ? 'high' : 
                          urgencyLevels.includes('medium') ? 'medium' : 'low';
    
    return {
      possibleConditions: conditions.map(c => ({
        condition: c.name,
        confidence: c.confidence,
        urgency: c.urgency,
        medicines: c.medicines,
        remedies: c.remedies
      })),
      urgencyLevel: overallUrgency,
      recommendations: topCondition.recommendations,
      medicines: topCondition.medicines,
      homeRemedies: topCondition.remedies
    };
  };

  const analysisResults = showResults ? getAnalysisResults() : null;

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleAnalyze = async () => {
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'low':
        return t.low;
      case 'medium':
        return t.medium;
      case 'high':
        return t.high;
      case 'critical':
        return t.critical;
      default:
        return t.low;
    }
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg">
        <Brain className="w-8 h-8 text-white" />
        <h1 className="text-2xl text-white font-semibold">{t.title}</h1>
      </div>

      {!showResults ? (
        <>
          {/* Common Symptoms */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-100 to-pink-100">
            <CardHeader>
              <CardTitle className="text-purple-800 text-xl">{t.commonSymptoms}</CardTitle>
              <p className="text-sm text-purple-600 font-medium">
                {selectedSymptoms.length} {t.symptoms}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {commonSymptoms.map((symptom) => {
                  const IconComponent = symptom.icon;
                  const isSelected = selectedSymptoms.includes(symptom.id);
                  return (
                    <div
                      key={symptom.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        isSelected
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleSymptomToggle(symptom.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={isSelected}
                          onChange={() => handleSymptomToggle(symptom.id)}
                        />
                        <IconComponent className={`w-4 h-4 ${isSelected ? 'text-purple-600' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isSelected ? 'text-purple-800' : 'text-gray-700'}`}>
                          {symptom.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-100 to-cyan-100">
            <CardHeader>
              <CardTitle className="text-blue-800 text-xl">{t.additionalInfo}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">{t.describeSymptoms}</label>
                <Textarea
                  placeholder={t.enterSymptoms}
                  value={symptomDescription}
                  onChange={(e) => setSymptomDescription(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">{t.duration}</label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.duration} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">1-6 {t.hours}</SelectItem>
                      <SelectItem value="day">1-2 {t.days}</SelectItem>
                      <SelectItem value="days">3-7 {t.days}</SelectItem>
                      <SelectItem value="weeks">1-2 {t.weeks}</SelectItem>
                      <SelectItem value="months">{t.months}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">{t.severity}</label>
                  <Select value={severity} onValueChange={setSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.severity} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">{t.mild}</SelectItem>
                      <SelectItem value="moderate">{t.moderate}</SelectItem>
                      <SelectItem value="severe">{t.severe}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">{t.bodyPart}</label>
                  <Select value={bodyPart} onValueChange={setBodyPart}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.bodyPart} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="head">{t.head}</SelectItem>
                      <SelectItem value="chest">{t.chest}</SelectItem>
                      <SelectItem value="abdomen">{t.abdomen}</SelectItem>
                      <SelectItem value="stomach">{t.stomach}</SelectItem>
                      <SelectItem value="arms">{t.arms}</SelectItem>
                      <SelectItem value="legs">{t.legs}</SelectItem>
                      <SelectItem value="hands">{t.hands}</SelectItem>
                      <SelectItem value="feet">{t.feet}</SelectItem>
                      <SelectItem value="back">{t.back}</SelectItem>
                      <SelectItem value="neck">{t.neck}</SelectItem>
                      <SelectItem value="shoulders">{t.shoulders}</SelectItem>
                      <SelectItem value="throat">{t.throat}</SelectItem>
                      <SelectItem value="joints">{t.joints}</SelectItem>
                      <SelectItem value="muscles">{t.muscles}</SelectItem>
                      <SelectItem value="skin">{t.skin}</SelectItem>
                      <SelectItem value="eyes">{t.eyes}</SelectItem>
                      <SelectItem value="ears">{t.ears}</SelectItem>
                      <SelectItem value="nose">{t.nose}</SelectItem>
                      <SelectItem value="mouth">{t.mouth}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analyze Button */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-indigo-100 to-purple-100">
            <CardContent className="p-6 text-center">
              {analyzing ? (
                <div className="space-y-4">
                  <Brain className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
                  <div>
                    <h3 className="text-lg text-purple-700 mb-2">{t.analyzing}</h3>
                    <Progress value={66} className="w-full max-w-xs mx-auto" />
                    <p className="text-sm text-gray-600 mt-2">AI is analyzing your symptoms...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Stethoscope className="w-12 h-12 text-blue-600 mx-auto" />
                  <Button
                    onClick={handleAnalyze}
                    className="w-full max-w-xs bg-purple-600 hover:bg-purple-700"
                    disabled={selectedSymptoms.length === 0 && !symptomDescription}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    {t.analyzeSymptoms}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* Analysis Results */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-100 to-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 text-xl">
                <CheckCircle className="w-6 h-6" />
                {t.results}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Urgency Level */}
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">{t.urgency}</div>
                <Badge className={`text-lg px-4 py-2 ${getUrgencyColor(analysisResults.urgencyLevel)}`}>
                  {getUrgencyText(analysisResults.urgencyLevel)}
                </Badge>
              </div>

              {/* Possible Conditions */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">{t.possibleConditions}</h4>
                <div className="space-y-4">
                  {analysisResults.possibleConditions.map((condition, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium text-gray-800 text-lg">{condition.condition}</div>
                          <div className="text-sm text-gray-600">
                            {t.confidence}: {condition.confidence}%
                          </div>
                        </div>
                        <Badge className={getUrgencyColor(condition.urgency)}>
                          {getUrgencyText(condition.urgency)}
                        </Badge>
                      </div>
                      
                      {/* Medicines for this condition */}
                      {condition.medicines && condition.medicines.length > 0 && (
                        <div className="mb-3">
                          <h5 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <Pill className="w-4 h-4 text-blue-600" />
                            {t.medicinesSection}
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {condition.medicines.map((medicine, idx) => (
                              <div key={idx} className="text-sm bg-white p-2 rounded border">
                                💊 {medicine}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Remedies for this condition */}
                      {condition.remedies && condition.remedies.length > 0 && (
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-green-600" />
                            {t.specificRemedies}
                          </h5>
                          <div className="grid grid-cols-1 gap-1">
                            {condition.remedies.slice(0, 3).map((remedy, idx) => (
                              <div key={idx} className="text-sm text-gray-600 bg-white p-2 rounded">
                                {remedy}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">{t.recommendations}</h4>
                <div className="space-y-2">
                  {analysisResults.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Home Remedies Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  {t.homeRemediesSection}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {analysisResults.homeRemedies.map((remedy, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 bg-white rounded-md shadow-sm">
                      <span className="text-sm text-gray-700">{remedy}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-green-700 p-2 bg-green-100 rounded-md">
                  {t.naturalRemedyNote}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button className="flex-1 bg-red-600 hover:bg-red-700">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {t.emergencyCase}
                </Button>
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => onConsultDoctor && onConsultDoctor()}
                >
                  <Stethoscope className="w-4 h-4 mr-2" />
                  {t.consulDoctor}
                </Button>
              </div>

              {/* Medicine Disclaimer */}
              <div className="text-xs text-gray-600 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Pill className="w-4 h-4 text-orange-600" />
                  <span className="font-medium text-orange-800">Medicine Safety</span>
                </div>
                {t.medicineDisclaimer}
              </div>

              {/* General Disclaimer */}
              <div className="text-xs text-gray-500 text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
                {t.disclaimer}
              </div>

              {/* New Analysis */}
              <Button
                variant="outline"
                onClick={() => {
                  setShowResults(false);
                  setSelectedSymptoms([]);
                  setSymptomDescription('');
                  setDuration('');
                  setSeverity('');
                  setBodyPart('');
                }}
                className="w-full"
              >
                {t.checkSymptoms} Again
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}