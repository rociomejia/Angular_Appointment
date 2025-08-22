import { Component } from '@angular/core';
import { Appointment} from './models/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   newAppointmentTitle : string= "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []

  addAppointment()
  {
     if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) 
    {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment)

      this.newAppointmentDate=new Date();
      this.newAppointmentTitle="";

      localStorage.setItem("appointments",JSON.stringify(this.appointments))    
    }
  }
  
  deleteAppointment(index: number){
      this.appointments.splice(index,1)
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
}
