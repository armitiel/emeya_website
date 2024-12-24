export interface Treatment {
  id: string;
  date: string;
  type: string;
  description: string;
  notes?: string;
  nextAppointment?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  treatments: Treatment[];
  upcomingAppointments: string[];
}