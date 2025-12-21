import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { 
  User, 
  Edit2, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Heart, 
  Pill, 
  AlertTriangle, 
  Baby, 
  Droplets,
  Video,
  Car,
  History,
  Download,
  Share2,
  Save,
  X
} from 'lucide-react';
import { HealthProfileData } from './HealthProfileForm';

interface ProfilePageProps {
  selectedLanguage: string;
  userProfile: HealthProfileData;
}

const translations = {
  english: {
    title: 'My Profile',
    personalInfo: 'Personal Information',
    healthInfo: 'Health Information',
    medicalHistory: 'Medical History',
    consultationHistory: 'Consultation History',
    transportHistory: 'Transport History',
    editProfile: 'Edit Profile',
    downloadReport: 'Download Health Report',
    shareProfile: 'Share Profile',
    name: 'Name',
    age: 'Age',
    gender: 'Gender',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    bloodGroup: 'Blood Group',
    height: 'Height',
    weight: 'Weight',
    allergies: 'Allergies',
    medications: 'Daily Medications',
    vaccinations: 'Vaccinations',
    pregnancyStatus: 'Pregnancy Status',
    menstrualCycle: 'Menstrual Cycle',
    emergencyContact: 'Emergency Contact',
    lastCycle: 'Last Cycle',
    cycleLength: 'Cycle Length',
    days: 'days',
    weeks: 'weeks',
    none: 'None',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    pregnant: 'Pregnant',
    notPregnant: 'Not Pregnant',
    planning: 'Planning',
    videoConsultation: 'Video Consultation',
    transport: 'Transport',
    completed: 'Completed',
    cancelled: 'Cancelled',
    scheduled: 'Scheduled',
    ambulance: 'Ambulance',
    taxi: 'Taxi',
    auto: 'Auto Rickshaw',
    save: 'Save Changes',
    cancel: 'Cancel',
    editPersonalInfo: 'Edit Personal Information',
    editHealthInfo: 'Edit Health Information',
    profileUpdated: 'Profile updated successfully!',
    enterEmail: 'Enter your email address',
    enterHeight: 'Enter height in cm',
    enterWeight: 'Enter weight in kg',
    enterEmergencyContact: 'Enter emergency contact number'
  },
  hindi: {
    title: 'मेरी प्रोफाइल',
    personalInfo: 'व्यक्तिगत जानकारी',
    healthInfo: 'स्वास्थ्य जानकारी',
    medicalHistory: 'चिकित्सा इतिहास',
    consultationHistory: 'परामर्श इतिहास',
    transportHistory: 'परिवहन इतिहास',
    editProfile: 'प्रोफाइल संपादित करें',
    downloadReport: 'स्वास्थ्य रिपोर्ट डाउनलोड करें',
    shareProfile: 'प्रोफाइल साझा करें',
    name: 'नाम',
    age: 'उम्र',
    gender: 'लिंग',
    phone: 'फोन',
    email: 'ईमेल',
    address: 'पता',
    bloodGroup: 'रक्त समूह',
    height: 'ऊंचाई',
    weight: 'वजन',
    allergies: 'एलर्जी',
    medications: 'दैनिक दवाएं',
    vaccinations: 'टीकाकरण',
    pregnancyStatus: 'गर्भावस्था की स्थिति',
    menstrualCycle: 'मासिक धर्म चक्र',
    emergencyContact: 'आपातकालीन संपर्क',
    lastCycle: 'अंतिम चक्र',
    cycleLength: 'चक्र की लंबाई',
    days: 'दिन',
    weeks: 'सप्ताह',
    none: 'कोई नहीं',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    pregnant: 'गर्भवती',
    notPregnant: 'गर्भवती नहीं',
    planning: 'योजना बना रहे हैं',
    videoConsultation: 'वीडियो परामर्श',
    transport: 'परिवहन',
    completed: 'पूर्ण',
    cancelled: 'रद्द',
    scheduled: 'निर्धारित',
    ambulance: 'एम्बुलेंस',
    taxi: 'टैक्सी',
    auto: 'ऑटो रिक्शा',
    save: 'परिवर्तन सहेजें',
    cancel: 'रद्द करें',
    editPersonalInfo: 'व्यक्तिगत जानकारी संपादित करें',
    editHealthInfo: 'स्वास्थ्य जानकारी संपादित करें',
    profileUpdated: 'प्रोफाइल सफलतापूर्वक अपडेट किया गया!',
    enterEmail: 'अपना ईमेल पता दर्ज करें',
    enterHeight: 'सेमी में ऊंचाई दर्ज करें',
    enterWeight: 'किलो में वजन दर्ज करें',
    enterEmergencyContact: 'आपातकालीन संपर्क नंबर दर्ज करें'
  },
  punjabi: {
    title: 'ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ',
    personalInfo: 'ਨਿੱਜੀ ਜਾਣਕਾਰੀ',
    healthInfo: 'ਸਿਹਤ ਜਾਣਕਾਰੀ',
    medicalHistory: 'ਮੈਡੀਕਲ ਇਤਿਹਾਸ',
    consultationHistory: 'ਸਲਾਹ ਇਤਿਹਾਸ',
    transportHistory: 'ਟਰਾਂਸਪੋਰਟ ਇਤਿਹਾਸ',
    editProfile: 'ਪ੍ਰੋਫਾਈਲ ਸੰਪਾਦਿਤ ਕਰੋ',
    downloadReport: 'ਸਿਹਤ ਰਿਪੋਰਟ ਡਾਊਨਲੋਡ ਕਰੋ',
    shareProfile: 'ਪ੍ਰੋਫਾਈਲ ਸਾਂਝੀ ਕਰੋ',
    name: 'ਨਾਮ',
    age: 'ਉਮਰ',
    gender: 'ਲਿੰਗ',
    phone: 'ਫੋਨ',
    email: 'ਈਮੇਲ',
    address: 'ਪਤਾ',
    bloodGroup: 'ਖੂਨ ਗਰੁੱਪ',
    height: 'ਉਚਾਈ',
    weight: 'ਭਾਰ',
    allergies: 'ਐਲਰਜੀ',
    medications: 'ਰੋਜ਼ਾਨਾ ਦਵਾਈਆਂ',
    vaccinations: 'ਟੀਕਾਕਰਨ',
    pregnancyStatus: 'ਗਰਭ ਅਵਸਥਾ ਸਥਿਤੀ',
    menstrualCycle: 'ਮਾਸਿਕ ਚੱਕਰ',
    emergencyContact: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ',
    lastCycle: 'ਆਖਰੀ ਚੱਕਰ',
    cycleLength: 'ਚੱਕਰ ਦੀ ਲੰਬਾਈ',
    days: 'ਦਿਨ',
    weeks: 'ਹਫ਼ਤੇ',
    none: 'ਕੋਈ ਨਹੀਂ',
    male: 'ਮਰਦ',
    female: 'ਔਰਤ',
    other: 'ਹੋਰ',
    pregnant: 'ਗਰਭਵਤੀ',
    notPregnant: 'ਗਰਭਵਤੀ ਨਹੀਂ',
    planning: 'ਯੋਜਨਾ ਬਣਾ ਰਹੇ ਹਾਂ',
    videoConsultation: 'ਵੀਡੀਓ ਸਲਾਹ',
    transport: 'ਟਰਾਂਸਪੋਰਟ',
    completed: 'ਪੂਰਾ',
    cancelled: 'ਰੱਦ',
    scheduled: 'ਨਿਰਧਾਰਿਤ',
    ambulance: 'ਐਂਮੂਲੈਂਸ',
    taxi: 'ਟੈਕਸੀ',
    auto: 'ਆਟੋ ਰਿਕਸ਼ਾ',
    save: 'ਤਬਦੀਲੀਆਂ ਸੇਵ ਕਰੋ',
    cancel: 'ਰੱਦ ਕਰੋ',
    editPersonalInfo: 'ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਸੰਪਾਦਿਤ ਕਰੋ',
    editHealthInfo: 'ਸਿਹਤ ਜਾਣਕਾਰੀ ਸੰਪਾਦਿਤ ਕਰੋ',
    profileUpdated: 'ਪ੍ਰੋਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ!',
    enterEmail: 'ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਦਰਜ ਕਰੋ',
    enterHeight: 'ਸੈਮੀ ਵਿੱਚ ਉਚਾਈ ਦਰਜ ਕਰੋ',
    enterWeight: 'ਕਿਲੋ ਵਿੱਚ ਭਾਰ ਦਰਜ ਕਰੋ',
    enterEmergencyContact: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ ਨੰਬਰ ਦਰਜ ਕਰੋ'
  }
};

export function ProfilePage({ selectedLanguage, userProfile }: ProfilePageProps) {
  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingHealth, setIsEditingHealth] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  // Mock consultation history
  const consultationHistory = [
    {
      id: 1,
      doctor: 'Dr. Priya Mehta',
      specialty: 'Gynecologist',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'completed',
      type: 'video',
      fee: '₹700'
    },
    {
      id: 2,
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'General Physician',
      date: '2024-01-10',
      time: '10:30 AM',
      status: 'completed',
      type: 'video',
      fee: '₹500'
    },
    {
      id: 3,
      doctor: 'Dr. Amit Singh',
      specialty: 'Pediatrician',
      date: '2024-01-20',
      time: '3:00 PM',
      status: 'scheduled',
      type: 'audio',
      fee: '₹600'
    }
  ];

  // Mock transport history
  const transportHistory = [
    {
      id: 1,
      type: 'ambulance',
      from: 'Home',
      to: 'City Hospital',
      date: '2024-01-12',
      time: '9:15 AM',
      status: 'completed',
      fare: 'Free'
    },
    {
      id: 2,
      type: 'taxi',
      from: 'Apollo Clinic',
      to: 'Home',
      date: '2024-01-08',
      time: '4:30 PM',
      status: 'completed',
      fare: '₹140'
    },
    {
      id: 3,
      type: 'auto',
      from: 'Home',
      to: 'Medical Store',
      date: '2024-01-18',
      time: '11:00 AM',
      status: 'scheduled',
      fare: '₹65'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">{t.completed}</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">{t.cancelled}</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">{t.scheduled}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const downloadHealthReport = () => {
    // Mock download functionality
    alert('Health report download will be implemented');
  };

  const shareProfile = () => {
    // Mock share functionality
    alert('Profile sharing will be implemented');
  };

  const handleSavePersonalInfo = () => {
    // In a real app, this would save to backend
    setIsEditingPersonal(false);
    alert(t.profileUpdated);
  };

  const handleSaveHealthInfo = () => {
    // In a real app, this would save to backend
    setIsEditingHealth(false);
    alert(t.profileUpdated);
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-white">
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-semibold">{t.title}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={downloadHealthReport} className="text-white border-white/30 hover:bg-white/20">
            <Download className="w-4 h-4 mr-2" />
            {t.downloadReport}
          </Button>
          <Button variant="outline" size="sm" onClick={shareProfile} className="text-white border-white/30 hover:bg-white/20">
            <Share2 className="w-4 h-4 mr-2" />
            {t.shareProfile}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-100 to-cyan-100 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-blue-200">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612ef75?w=200&h=200&fit=crop&crop=face" alt={editedProfile.fullName} />
                <AvatarFallback className="text-2xl">{editedProfile.fullName?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-gray-800">{editedProfile.fullName}</CardTitle>
              <p className="text-gray-600">{editedProfile.age} years • {editedProfile.gender}</p>
              
              <Dialog open={isEditingPersonal} onOpenChange={setIsEditingPersonal}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="mt-3">
                    <Edit2 className="w-4 h-4 mr-2" />
                    {t.editProfile}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{t.editPersonalInfo}</DialogTitle>
                    <DialogDescription>
                      Update your personal information including email and emergency contact details.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">{t.email}</label>
                      <Input
                        type="email"
                        placeholder={t.enterEmail}
                        value={editedProfile.email || ''}
                        onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">{t.emergencyContact}</label>
                      <Input
                        type="tel"
                        placeholder={t.enterEmergencyContact}
                        value={editedProfile.emergencyContact || ''}
                        onChange={(e) => setEditedProfile({...editedProfile, emergencyContact: e.target.value})}
                      />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSavePersonalInfo} className="flex-1">
                        <Save className="w-4 h-4 mr-2" />
                        {t.save}
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditingPersonal(false)} className="flex-1">
                        <X className="w-4 h-4 mr-2" />
                        {t.cancel}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{editedProfile.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{editedProfile.email || 'Not provided'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{editedProfile.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm">{editedProfile.bloodGroup}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Health Details */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-100 to-emerald-100 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Heart className="w-5 h-5" />
                {t.healthInfo}
              </CardTitle>
              
              <Dialog open={isEditingHealth} onOpenChange={setIsEditingHealth}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{t.editHealthInfo}</DialogTitle>
                    <DialogDescription>
                      Update your health measurements including height and weight.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">{t.height} (cm)</label>
                      <Input
                        type="number"
                        placeholder={t.enterHeight}
                        value={editedProfile.height || ''}
                        onChange={(e) => setEditedProfile({...editedProfile, height: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">{t.weight} (kg)</label>
                      <Input
                        type="number"
                        placeholder={t.enterWeight}
                        value={editedProfile.weight || ''}
                        onChange={(e) => setEditedProfile({...editedProfile, weight: e.target.value})}
                      />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSaveHealthInfo} className="flex-1">
                        <Save className="w-4 h-4 mr-2" />
                        {t.save}
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditingHealth(false)} className="flex-1">
                        <X className="w-4 h-4 mr-2" />
                        {t.cancel}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">{t.height}</label>
                <p className="font-medium">{editedProfile.height} cm</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">{t.weight}</label>
                <p className="font-medium">{editedProfile.weight} kg</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">{t.emergencyContact}</label>
                <p className="font-medium">{editedProfile.emergencyContact}</p>
              </div>
            </CardContent>
          </Card>

          {/* Medical Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Allergies */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-red-100 to-orange-100 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <AlertTriangle className="w-5 h-5" />
                  {t.allergies}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {editedProfile.allergies && editedProfile.allergies.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {editedProfile.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">{t.none}</p>
                )}
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-100 to-violet-100 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Pill className="w-5 h-5" />
                  {t.medications}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {editedProfile.medications && editedProfile.medications.length > 0 ? (
                  <div className="space-y-2">
                    {editedProfile.medications.map((med, index) => (
                      <div key={index} className="p-2 bg-purple-50 rounded text-sm">
                        {med}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">{t.none}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Vaccinations */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Baby className="w-5 h-5" />
                {t.vaccinations}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {editedProfile.vaccinations && editedProfile.vaccinations.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {editedProfile.vaccinations.map((vaccine, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 text-xs">
                      {vaccine}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">{t.none}</p>
              )}
            </CardContent>
          </Card>

          {/* Pregnancy & Menstrual Info (Female only) */}
          {editedProfile.gender === 'female' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-600">
                    <Baby className="w-5 h-5" />
                    {t.pregnancyStatus}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{editedProfile.pregnancyStatus}</p>
                  {editedProfile.pregnancyWeeks && (
                    <p className="text-sm text-gray-600 mt-1">
                      {editedProfile.pregnancyWeeks} {t.weeks}
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-600">
                    <Droplets className="w-5 h-5" />
                    {t.menstrualCycle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <label className="text-sm text-gray-600">{t.lastCycle}</label>
                    <p className="font-medium">{editedProfile.lastMenstrualPeriod}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">{t.cycleLength}</label>
                    <p className="font-medium">{editedProfile.cycleLength} {t.days}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Consultation History */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-600">
                <Video className="w-5 h-5" />
                {t.consultationHistory}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {consultationHistory.map((consultation) => (
                <div key={consultation.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-800">{consultation.doctor}</h4>
                        {getStatusBadge(consultation.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{consultation.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{consultation.date}</span>
                        <span>{consultation.time}</span>
                        <span className="capitalize">{consultation.type}</span>
                        <span className="font-medium text-green-600">{consultation.fee}</span>
                      </div>
                    </div>
                    {consultation.type === 'video' ? (
                      <Video className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Phone className="w-5 h-5 text-orange-600" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Transport History */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <Car className="w-5 h-5" />
                {t.transportHistory}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {transportHistory.map((transport) => (
                <div key={transport.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-800 capitalize">{t[transport.type as keyof typeof t] || transport.type}</h4>
                        {getStatusBadge(transport.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {transport.from} → {transport.to}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{transport.date}</span>
                        <span>{transport.time}</span>
                        <span className={`font-medium ${transport.fare === 'Free' ? 'text-green-600' : 'text-blue-600'}`}>
                          {transport.fare}
                        </span>
                      </div>
                    </div>
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}