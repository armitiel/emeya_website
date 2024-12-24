import React from 'react';
import { Clock, FileText } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { MysticCard } from '../../../components/ui/MysticCard';

const TreatmentHistory = () => {
  const { language } = useLanguage();

  const t = language === 'pl' ? {
    title: 'Historia zabiegów',
    noTreatments: 'Brak historii zabiegów',
    type: 'Rodzaj zabiegu',
    date: 'Data',
    notes: 'Notatki',
    viewDetails: 'Zobacz szczegóły'
  } : {
    title: 'Treatment History',
    noTreatments: 'No treatment history',
    type: 'Treatment type',
    date: 'Date',
    notes: 'Notes',
    viewDetails: 'View details'
  };

  // Mock data - replace with actual data from context/API
  const treatments = [
    {
      id: '1',
      type: 'Terapia holistyczna',
      date: '2024-03-15',
      notes: 'Pierwsza sesja terapeutyczna'
    },
    {
      id: '2',
      type: 'Masaż energetyczny',
      date: '2024-03-01',
      notes: 'Zabieg oczyszczający'
    }
  ];

  return (
    <MysticCard className="p-6 bg-white">
      <h3 className="text-xl font-heading text-primary mb-6">{t.title}</h3>

      {treatments.length === 0 ? (
        <p className="text-gray-500 text-center py-8">{t.noTreatments}</p>
      ) : (
        <div className="space-y-4">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="border border-gray-100 rounded-lg p-4 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{treatment.type}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(treatment.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <FileText className="w-4 h-4 mr-1" />
                    {treatment.notes}
                  </div>
                </div>
                <button className="text-sm text-primary hover:text-primary-dark">
                  {t.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </MysticCard>
  );
};

export default TreatmentHistory;