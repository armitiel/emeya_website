import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { MysticCard } from '../../../components/ui/MysticCard';
import Button from '../../../components/ui/Button';

const UpcomingAppointments = () => {
  const { language } = useLanguage();

  const t = language === 'pl' ? {
    title: 'Nadchodzące wizyty',
    noAppointments: 'Brak zaplanowanych wizyt',
    book: 'Umów wizytę',
    cancel: 'Anuluj',
    reschedule: 'Zmień termin'
  } : {
    title: 'Upcoming Appointments',
    noAppointments: 'No upcoming appointments',
    book: 'Book Appointment',
    cancel: 'Cancel',
    reschedule: 'Reschedule'
  };

  // Mock data - replace with actual data from context/API
  const appointments = [
    {
      id: '1',
      type: 'Terapia holistyczna',
      date: '2024-03-20',
      time: '14:00'
    }
  ];

  return (
    <MysticCard className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading text-primary">{t.title}</h3>
        <Button variant="primary" className="text-sm">
          {t.book}
        </Button>
      </div>

      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center py-8">{t.noAppointments}</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border border-gray-100 rounded-lg p-4 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{appointment.type}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(appointment.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {appointment.time}
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="text-sm text-primary hover:text-primary-dark">
                    {t.reschedule}
                  </button>
                  <button className="text-sm text-red-600 hover:text-red-700">
                    {t.cancel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </MysticCard>
  );
};

export default UpcomingAppointments;