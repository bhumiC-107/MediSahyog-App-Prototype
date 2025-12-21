import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Car, MapPin, Clock, Phone, Navigation, Ambulance } from 'lucide-react';

interface TransportBookingProps {
  selectedLanguage: string;
}

const translations = {
  english: {
    title: 'Transport Booking',
    emergencyAmbulance: 'Emergency Ambulance',
    regularTransport: 'Regular Transport',
    bookNow: 'Book Now',
    callNow: 'Call Now',
    fromLocation: 'From Location',
    toLocation: 'To Location',
    selectVehicle: 'Select Vehicle Type',
    scheduledRides: 'Scheduled Rides',
    availableVehicles: 'Available Vehicles',
    estimatedTime: 'Estimated Time',
    distance: 'Distance',
    fare: 'Fare',
    auto: 'Auto Rickshaw',
    taxi: 'Taxi',
    ambulance: 'Ambulance',
    wheelchair: 'Wheelchair Accessible',
    emergency: 'Emergency',
    scheduled: 'Scheduled',
    hospital: 'Hospital',
    clinic: 'Clinic',
    pharmacy: 'Pharmacy',
    minutes: 'min',
    away: 'away'
  },
  hindi: {
    title: 'परिवहन बुकिंग',
    emergencyAmbulance: 'आपातकालीन एम्बुलेंस',
    regularTransport: 'नियमित परिवहन',
    bookNow: 'अभी बुक करें',
    callNow: 'अभी कॉल करें',
    fromLocation: 'कहाँ से',
    toLocation: 'कहाँ तक',
    selectVehicle: 'वाहन प्रकार चुनें',
    scheduledRides: 'निर्धारित यात्राएं',
    availableVehicles: 'उपलब्ध वाहन',
    estimatedTime: 'अनुमानित समय',
    distance: 'दूरी',
    fare: 'किराया',
    auto: 'ऑटो रिक्शा',
    taxi: 'टैक्सी',
    ambulance: 'एम्बुलेंस',
    wheelchair: 'व्हीलचेयर सुलभ',
    emergency: 'आपातकाल',
    scheduled: 'निर्धारित',
    hospital: 'अस्पताल',
    clinic: 'क्लिनिक',
    pharmacy: 'फार्मेसी',
    minutes: 'मिनट',
    away: 'दूर'
  },
  punjabi: {
    title: 'ਟਰਾਂਸਪੋਰਟ ਬੁੱਕਿੰਗ',
    emergencyAmbulance: 'ਐਮਰਜੈਂਸੀ ਐਂਬੂਲੈਂਸ',
    regularTransport: 'ਨਿਯਮਿਤ ਟਰਾਂਸਪੋਰਟ',
    bookNow: 'ਹੁਣੇ ਬੁੱਕ ਕਰੋ',
    callNow: 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    fromLocation: 'ਕਿੱਥੋਂ',
    toLocation: 'ਕਿੱਥੇ',
    selectVehicle: 'ਵਾਹਨ ਕਿਸਮ ਚੁਣੋ',
    scheduledRides: 'ਨਿਰਧਾਰਿਤ ਸਵਾਰੀਆਂ',
    availableVehicles: 'ਉਪਲਬਧ ਵਾਹਨ',
    estimatedTime: 'ਅਨੁਮਾਨਿਤ ਸਮਾਂ',
    distance: 'ਦੂਰੀ',
    fare: 'ਕਿਰਾਇਆ',
    auto: 'ਆਟੋ ਰਿਕਸ਼ਾ',
    taxi: 'ਟੈਕਸੀ',
    ambulance: 'ਐਂਬੂਲੈਂਸ',
    wheelchair: 'ਵ੍ਹੀਲਚੇਅਰ ਪਹੁੰਚਯੋਗ',
    emergency: 'ਐਮਰਜੈਂਸੀ',
    scheduled: 'ਨਿਰਧਾਰਿਤ',
    hospital: 'ਹਸਪਤਾਲ',
    clinic: 'ਕਲੀਨਿਕ',
    pharmacy: 'ਫਾਰਮੇਸੀ',
    minutes: 'ਮਿੰਟ',
    away: 'ਦੂਰ'
  }
};

export function TransportBooking({ selectedLanguage }: TransportBookingProps) {
  const [bookingType, setBookingType] = useState<'emergency' | 'regular'>('regular');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const vehicleTypes = [
    {
      type: 'auto',
      name: t.auto,
      fare: '₹50-80',
      time: '5-8 min',
      icon: Car,
      available: true
    },
    {
      type: 'taxi',
      name: t.taxi,
      fare: '₹120-150',
      time: '3-5 min',
      icon: Car,
      available: true
    },
    {
      type: 'ambulance',
      name: t.ambulance,
      fare: 'Free',
      time: '2-4 min',
      icon: Ambulance,
      available: true,
      features: [t.wheelchair, t.emergency]
    }
  ];

  const scheduledRides = [
    {
      from: 'Home',
      to: 'City Hospital',
      date: 'Today',
      time: '3:00 PM',
      vehicle: t.taxi,
      status: t.scheduled
    },
    {
      from: 'Apollo Clinic',
      to: 'Home',
      date: 'Tomorrow',
      time: '11:00 AM',
      vehicle: t.auto,
      status: t.scheduled
    }
  ];

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <Car className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl text-gray-800">{t.title}</h1>
      </div>

      {/* Emergency Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-sm border-red-200">
          <CardContent className="p-6 text-center">
            <Ambulance className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg text-red-700 mb-2">{t.emergencyAmbulance}</h3>
            <p className="text-sm text-gray-600 mb-4">Available 24/7</p>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              {t.callNow}
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-green-200">
          <CardContent className="p-6 text-center">
            <Car className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg text-green-700 mb-2">{t.regularTransport}</h3>
            <p className="text-sm text-gray-600 mb-4">{t.estimatedTime}: 5-10 {t.minutes}</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Navigation className="w-4 h-4 mr-2" />
              {t.bookNow}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Booking Form */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-blue-700">Book Transportation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">{t.fromLocation}</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                <Input
                  placeholder="Current location"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-600">{t.toLocation}</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />
                <Input
                  placeholder="Destination"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">{t.selectVehicle}</label>
            <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
              <SelectTrigger>
                <SelectValue placeholder={t.selectVehicle} />
              </SelectTrigger>
              <SelectContent>
                {vehicleTypes.map((vehicle) => (
                  <SelectItem key={vehicle.type} value={vehicle.type}>
                    {vehicle.name}{vehicle.type !== 'ambulance' ? ` - ${vehicle.fare}` : ' - Free Emergency Service'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Available Vehicles */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-green-700">{t.availableVehicles}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {vehicleTypes.map((vehicle) => {
            const IconComponent = vehicle.icon;
            return (
              <div key={vehicle.type} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-800">{vehicle.name}</div>
                    <div className="text-sm text-gray-600">
                      {vehicle.time} • {vehicle.type === 'ambulance' ? (
                        <span className="text-green-600 font-medium">{vehicle.fare}</span>
                      ) : (
                        vehicle.fare
                      )}
                    </div>
                    {vehicle.features && (
                      <div className="flex gap-2 mt-1">
                        {vehicle.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className={`${
                    vehicle.type === 'ambulance' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {t.bookNow}
                </Button>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Scheduled Rides */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Clock className="w-5 h-5" />
            {t.scheduledRides}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {scheduledRides.map((ride, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-800">
                  {ride.from} → {ride.to}
                </div>
                <div className="text-sm text-gray-600">
                  {ride.date} at {ride.time} • {ride.vehicle}
                </div>
              </div>
              <Badge className="bg-purple-100 text-purple-800">
                {ride.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}