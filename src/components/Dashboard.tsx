import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Calendar, Shield, Pill, AlertTriangle, Baby, Heart, TrendingUp, Activity, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { HealthProfileData } from './HealthProfileForm';
import { useLanguage } from '../contexts/LanguageContext';

interface DashboardProps {
  selectedLanguage: string;
  userProfile?: HealthProfileData | null;
}

// Extended translations for Dashboard
const dashboardTranslations = {
  english: {
    welcome: 'Welcome Back',
    patientName: 'Priya Sharma',
    dashboard: 'Health Dashboard',
    vaccines: 'Vaccination Record',
    dailyMeds: 'Daily Medications',
    allergies: 'Allergies & Conditions',
    pregnancy: 'Pregnancy Tracker',
    menstrual: 'Menstrual Cycle',
    lastUpdated: 'Last Updated',
    completed: 'Completed',
    nextDose: 'Next Dose',
    morningDose: 'Morning Dose',
    eveningDose: 'Evening Dose',
    noDrugAllergy: 'No Drug Allergies',
    week: 'Week',
    days: 'days',
    cycleDay: 'Cycle Day',
    nextPeriod: 'Next Period',
    noCurrentMedicines: 'NO CURRENT MEDICINES',
    noAllergies: 'NO ALLERGIES',
    diseaseStats: 'Regional Disease Statistics',
    commonDiseases: 'Common Diseases This Month',
    cases: 'Cases',
    trend: 'Trend',
    location: 'Punjab Region'
  },
  hindi: {
    welcome: 'आपका स्वागत है',
    patientName: 'प्रिया शर्मा',
    dashboard: 'स्वास्थ्य डैशबोर्ड',
    vaccines: 'टीकाकरण रिकॉर्ड',
    dailyMeds: 'दैनिक दवाइयां',
    allergies: 'एलर्जी और स्थितियां',
    pregnancy: 'गर्भावस्था ट्रैकर',
    menstrual: 'मासिक धर्म चक्र',
    lastUpdated: 'अंतिम अपडेट',
    completed: 'पूर्ण',
    nextDose: 'अगली खुराक',
    morningDose: 'सुबह की खुराक',
    eveningDose: 'शाम की खुराक',
    noDrugAllergy: 'कोई दवा एलर्जी नहीं',
    week: 'सप्ताह',
    days: 'दिन',
    cycleDay: 'चक्र दिवस',
    nextPeriod: 'अगला पीरियड',
    noCurrentMedicines: 'कोई वर्तमान दवाएं नहीं',
    noAllergies: 'कोई एलर्जी नहीं',
    diseaseStats: 'क्षेत्रीय रोग आंकड़े',
    commonDiseases: 'इस महीने आम बीमारियां',
    cases: 'मामले',
    trend: 'रुझान',
    location: 'पंजाब क्षेत्र'
  },
  punjabi: {
    welcome: 'ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    patientName: 'ਪ੍ਰਿਆ ਸ਼ਰਮਾ',
    dashboard: 'ਸਿਹਤ ਡੈਸ਼ਬੋਰਡ',
    vaccines: 'ਟੀਕਾਕਰਣ ਰਿਕਾਰਡ',
    dailyMeds: 'ਰੋਜ਼ਾਨਾ ਦਵਾਈਆਂ',
    allergies: 'ਐਲਰਜੀ ਅਤੇ ਸਥਿਤੀਆਂ',
    pregnancy: 'ਗਰਭ ਅਵਸਥਾ ਟ੍ਰੈਕਰ',
    menstrual: 'ਮਾਸਿਕ ਚੱਕਰ',
    lastUpdated: 'ਆਖਰੀ ਅਪਡੇਟ',
    completed: 'ਪੂਰਾ',
    nextDose: 'ਅਗਲਾ ਡੋਜ਼',
    morningDose: 'ਸਵੇਰ ਦਾ ਡੋਜ਼',
    eveningDose: 'ਸ਼ਾਮ ਦਾ ਡੋਜ਼',
    noDrugAllergy: 'ਕੋਈ ਦਵਾਈ ਐਲਰਜੀ ਨਹੀਂ',
    week: 'ਹਫ਼ਤਾ',
    days: 'ਦਿਨ',
    cycleDay: 'ਚੱਕਰ ਦਿਨ',
    nextPeriod: 'ਅਗਲਾ ਪੀਰੀਅਡ',
    noCurrentMedicines: 'ਕੋਈ ਮੌਜੂਦਾ ਦਵਾਈਆਂ ਨਹੀਂ',
    noAllergies: 'ਕੋਈ ਐਲਰਜੀ ਨਹੀਂ',
    diseaseStats: 'ਖੇਤਰੀ ਬਿਮਾਰੀ ਦੇ ਅੰਕੜੇ',
    commonDiseases: 'ਇਸ ਮਹੀਨੇ ਆਮ ਬਿਮਾਰੀਆਂ',
    cases: 'ਕੇਸ',
    trend: 'ਰੁਝਾਨ',
    location: 'ਪੰਜਾਬ ਖੇਤਰ'
  },
  tamil: {
    welcome: 'மீண்டும் வருக',
    patientName: 'பிரியா ஷர்மா',
    dashboard: 'சுகாதார டாஷ்போர்டு',
    vaccines: 'தடுப்பூசி பதிவு',
    dailyMeds: 'தினசரி மருந்துகள்',
    allergies: 'ஒவ்வாமை மற்றும் நிலைமைகள்',
    pregnancy: 'கர்ப்பகால கண்காணிப்பு',
    menstrual: 'மாதவிடாய் சுழற்சி',
    lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது',
    completed: 'முடிந்தது',
    nextDose: 'அடுத்த டோஸ்',
    morningDose: 'காலை டோஸ்',
    eveningDose: 'மாலை டோஸ்',
    noDrugAllergy: 'மருந்து ஒவ்வாமை இல்லை',
    week: 'வாரம்',
    days: 'நாட்கள்',
    cycleDay: 'சுழற்சி நாள்',
    nextPeriod: 'அடுத்த பீரியட்',
    noCurrentMedicines: 'தற்போதைய மருந்துகள் இல்லை',
    noAllergies: 'ஒவ்வாமைகள் இல்லை',
    diseaseStats: 'பிராந்திய நோய் புள்ளிவிவரங்கள்',
    commonDiseases: 'இந்த மாதம் பொதுவான நோய்கள்',
    cases: 'வழக்குகள்',
    trend: 'போக்கு',
    location: 'பஞ்சாப் பகுதி'
  },
  telugu: {
    welcome: 'తిరిగి స్వాగతం',
    patientName: 'ప్రియా శర్మ',
    dashboard: 'ఆరోగ్య డాష్‌బోర్డ్',
    vaccines: 'టీకా రికార్డు',
    dailyMeds: 'రోజువారీ మందులు',
    allergies: 'అలెర్జీలు మరియు పరిస్థితులు',
    pregnancy: 'గర్భధారణ ట్రాకర్',
    menstrual: 'మెన్‌స్ట్రువల్ సైకిల్',
    lastUpdated: 'చివరిగా నవీకరించబడింది',
    completed: 'పూర్తయింది',
    nextDose: 'తదుపరి డోస్',
    morningDose: 'ఉదయం డోస్',
    eveningDose: 'సాయంత్రం డోస్',
    noDrugAllergy: 'మందు అలెర్జీ లేదు',
    week: 'వారం',
    days: 'రోజులు',
    cycleDay: 'సైకిల్ రోజు',
    nextPeriod: 'తదుపరి పీరియడ్',
    noCurrentMedicines: 'ప్రస్తుత మందులు లేవు',
    noAllergies: 'అలెర్జీలు లేవు',
    diseaseStats: 'ప్రాంతీయ వ్యాధి గణాంకాలు',
    commonDiseases: 'ఈ నెలలో సాధారణ వ్యాధులు',
    cases: 'కేసులు',
    trend: 'ధోరణి',
    location: 'పంజాబ్ ప్రాంతం'
  },
  bengali: {
    welcome: 'ফিরে আসার জন্য স্বাগতম',
    patientName: 'প্রিয়া শর্মা',
    dashboard: 'স্বাস্থ্য ড্যাশবোর্ড',
    vaccines: 'টিকাকরণ রেকর্ড',
    dailyMeds: 'দৈনিক ওষুধ',
    allergies: 'অ্যালার্জি এবং অবস্থা',
    pregnancy: 'গর্ভাবস্থা ট্র্যাকার',
    menstrual: 'মাসিক চক্র',
    lastUpdated: 'সর্বশেষ আপডেট',
    completed: 'সম্পন্ন',
    nextDose: 'পরবর্তী ডোজ',
    morningDose: 'সকালের ডোজ',
    eveningDose: 'সন্ধ্যার ডোজ',
    noDrugAllergy: 'কোনো ওষুধ অ্যালার্জি নেই',
    week: 'সপ্তাহ',
    days: 'দিন',
    cycleDay: 'চক্র দিবস',
    nextPeriod: 'পরবর্তী পিরিয়ড',
    noCurrentMedicines: 'বর্তমান ওষুধ নেই',
    noAllergies: 'অ্যালার্জি নেই',
    diseaseStats: 'আঞ্চলিক রোগের পরিসংখ্যান',
    commonDiseases: 'এই মাসের সাধারণ রোগ',
    cases: 'মামলা',
    trend: 'প্রবণতা',
    location: 'পাঞ্জাব অঞ্চল'
  },
  marathi: {
    welcome: 'परत स्वागत आहे',
    patientName: 'प्रिया शर्मा',
    dashboard: 'आरोग्य डॅशबोर्ड',
    vaccines: 'लसीकरण नोंद',
    dailyMeds: 'दैनंदिन औषधे',
    allergies: 'ऍलर्जी आणि स्थिती',
    pregnancy: 'गर्भधारणा ट्रॅकर',
    menstrual: 'मासिक पाळी चक्र',
    lastUpdated: 'शेवटचे अपडेट',
    completed: 'पूर्ण झाले',
    nextDose: 'पुढील डोस',
    morningDose: 'सकाळचा डोस',
    eveningDose: 'संध्याकाळचा डोस',
    noDrugAllergy: 'औषध ऍलर्जी नाही',
    week: 'आठवडा',
    days: 'दिवस',
    cycleDay: 'चक्र दिवस',
    nextPeriod: 'पुढील पाळी',
    noCurrentMedicines: 'सध्याची औषधे नाहीत',
    noAllergies: 'ऍलर्जी नाहीत',
    diseaseStats: 'प्रादेशिक रोग आकडेवारी',
    commonDiseases: 'या महिन्यातील सामान्य रोग',
    cases: 'प्रकरणे',
    trend: 'कल',
    location: 'पंजाब प्रदेश'
  },
  gujarati: {
    welcome: 'પાછા સ્વાગત છે',
    patientName: 'પ્રિયા શર્મા',
    dashboard: 'આરોગ્ય ડેશબોર્ડ',
    vaccines: 'રસીકરણ રેકોર્ડ',
    dailyMeds: 'દૈનિક દવાઓ',
    allergies: 'એલર્જી અને પરિસ્થિતિઓ',
    pregnancy: 'ગર્ભાવસ્થા ટ્રેકર',
    menstrual: 'માસિક ચક્ર',
    lastUpdated: 'છેલ્લે અપડેટ',
    completed: 'પૂર્ણ',
    nextDose: 'આગળની ડોઝ',
    morningDose: 'સવારની ડોઝ',
    eveningDose: 'સાંજની ડોઝ',
    noDrugAllergy: 'દવા એલર્જી નથી',
    week: 'અઠવાડિયું',
    days: 'દિવસ',
    cycleDay: 'ચક્ર દિવસ',
    nextPeriod: 'આગળનો પીરિયડ',
    noCurrentMedicines: 'વર્તમાન દવાઓ નથી',
    noAllergies: 'એલર્જી નથી',
    diseaseStats: 'પ્રાદેશિક રોગ આંકડા',
    commonDiseases: 'આ મહિને સામાન્ય રોગો',
    cases: 'કેસો',
    trend: 'વલણ',
    location: 'પંજાબ પ્રદેશ'
  }
};

export function Dashboard({ selectedLanguage, userProfile }: DashboardProps) {
  const dt = dashboardTranslations[selectedLanguage as keyof typeof dashboardTranslations] || dashboardTranslations.english;
  const isFemale = userProfile?.gender === 'female';

  // Disease statistics data
  const diseaseData = [
    { name: 'Dengue', cases: 145, color: '#ef4444', trend: 'up' },
    { name: 'Malaria', cases: 89, color: '#f59e0b', trend: 'down' },
    { name: 'COVID-19', cases: 234, color: '#8b5cf6', trend: 'stable' },
    { name: 'Influenza', cases: 312, color: '#06b6d4', trend: 'up' },
    { name: 'Typhoid', cases: 67, color: '#10b981', trend: 'down' }
  ];

  const trendData = [
    { month: 'Jul', cases: 180 },
    { month: 'Aug', cases: 220 },
    { month: 'Sep', cases: 290 },
    { month: 'Oct', cases: 350 },
    { month: 'Nov', cases: 320 },
    { month: 'Dec', cases: 280 }
  ];

  const COLORS = ['#ef4444', '#f59e0b', '#8b5cf6', '#06b6d4', '#10b981'];

  return (
    <div className="p-2 sm:p-4 space-y-4 sm:space-y-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 shadow-lg text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-2">{dt.welcome}</h1>
            <p className="text-blue-100 text-base sm:text-lg break-words">{userProfile?.fullName || dt.patientName}</p>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{dt.location}</span>
          </div>
        </div>
      </div>

      {/* Disease Statistics Section - Symmetrical Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Disease Bar Chart */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-orange-800 text-base sm:text-lg">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="truncate">{dt.diseaseStats}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-1 sm:px-6">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={diseaseData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 10 }}
                  stroke="#666"
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  stroke="#666"
                  width={30}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="cases" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Disease Distribution Pie Chart - Now Equal Width */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-teal-50 to-cyan-50 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-teal-800 text-base sm:text-lg">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="truncate">{dt.commonDiseases}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Pie Chart */}
              <div className="flex-shrink-0">
                <ResponsiveContainer width={160} height={160}>
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="cases"
                    >
                      {diseaseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        fontSize: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Legend */}
              <div className="flex-1 space-y-2 min-w-0">
                {diseaseData.map((disease, index) => (
                  <div key={disease.name} className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: disease.color }}
                      />
                      <span className="truncate">{disease.name}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="font-medium">{disease.cases}</span>
                      <span className={`text-xs ${
                        disease.trend === 'up' ? 'text-red-500' : 
                        disease.trend === 'down' ? 'text-green-500' : 
                        'text-gray-500'
                      }`}>
                        {disease.trend === 'up' ? '↗' : disease.trend === 'down' ? '↘' : '→'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Vaccination Record */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-green-100 to-emerald-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-green-800 text-base sm:text-lg">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="truncate">{dt.vaccines}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 px-3 sm:px-6">
            {userProfile?.vaccinations && userProfile.vaccinations.length > 0 ? (
              userProfile.vaccinations.slice(0, 3).map((vaccination, index) => (
                <div key={index} className="flex justify-between items-center gap-2">
                  <span className="text-sm truncate flex-1">{vaccination}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs flex-shrink-0">
                    {dt.completed}
                  </Badge>
                </div>
              ))
            ) : (
              <>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm truncate flex-1">COVID-19</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs flex-shrink-0">
                    {dt.completed}
                  </Badge>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm truncate flex-1">Tetanus</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs flex-shrink-0">
                    {dt.completed}
                  </Badge>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm truncate flex-1">Hepatitis B</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs flex-shrink-0">
                    {dt.nextDose}: 12/30
                  </Badge>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Daily Medications */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-100 to-cyan-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-blue-800 text-base sm:text-lg">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="truncate">{dt.dailyMeds}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 px-3 sm:px-6">
            {userProfile?.medications && userProfile.medications.length > 0 ? (
              userProfile.medications.slice(0, 3).map((medication, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-sm truncate flex-1">{medication}</span>
                    <span className="text-xs text-blue-600 font-medium flex-shrink-0">
                      {index % 2 === 0 ? dt.morningDose : dt.eveningDose}
                    </span>
                  </div>
                  <Progress value={Math.random() * 100} className="h-2" />
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <Pill className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 font-semibold text-sm sm:text-lg break-words">{dt.noCurrentMedicines}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 break-words">Add medications to track your daily doses</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Allergies */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-red-100 to-orange-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-red-800 text-base sm:text-lg">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="truncate">{dt.allergies}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="space-y-2">
              {userProfile?.allergies && userProfile.allergies.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="text-xs font-medium">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3 text-xs sm:text-sm text-green-600 font-medium">
                    ✓ {dt.noDrugAllergy}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <AlertTriangle className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-semibold text-sm sm:text-lg break-words">{dt.noAllergies}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 break-words">No known allergies recorded</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Pregnancy Tracker - Only for females */}
        {isFemale && (
          <Card className="shadow-lg border-0 bg-gradient-to-r from-pink-100 to-rose-100 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-pink-800 text-base sm:text-lg">
                <Baby className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="truncate">{dt.pregnancy}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              {userProfile?.isPregnant ? (
                <div className="text-center space-y-3">
                  <div className="text-2xl sm:text-3xl">{userProfile.pregnancyWeeks || '24'}</div>
                  <div className="text-base sm:text-lg">{dt.week}s</div>
                  <Progress value={((parseInt(userProfile.pregnancyWeeks || '24') / 40) * 100)} className="h-3" />
                  <div className="text-xs sm:text-sm text-gray-500 break-words">
                    {dt.lastUpdated}: Dec 26, 2024
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-4 text-sm break-words">
                  Not currently pregnant
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Menstrual Cycle - Only for females and full width if shown */}
        {isFemale && (
          <Card className={`shadow-lg border-0 bg-gradient-to-r from-purple-100 to-violet-100 hover:shadow-xl transition-all duration-300 ${userProfile?.isPregnant ? 'md:col-span-1' : 'md:col-span-2'}`}>
            <CardHeader className="pb-3 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-purple-800 text-base sm:text-lg">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="truncate">{dt.menstrual}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-xl sm:text-2xl text-purple-600">15</div>
                  <div className="text-xs sm:text-sm text-gray-500 break-words">{dt.cycleDay}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl text-blue-600">13</div>
                  <div className="text-xs sm:text-sm text-gray-500 break-words">{dt.nextPeriod} ({dt.days})</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-600 break-words">Cycle Length</div>
                  <div className="text-sm sm:text-lg">{userProfile?.menstrualCycleLength || '28'} {dt.days}</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-600 break-words">Period Length</div>
                  <div className="text-sm sm:text-lg">5 {dt.days}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}