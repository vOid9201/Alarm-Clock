#Alarm 

functonlaities
- created both analog and digital clock
- rendering the alarm list
- triggering the alarm which is activated 
- adding an alarm
- toggling the alarm's state from active to deactiva1te and vice versa
- removing an alarm

data
- alarms : array of objects containing info about alarm {}
           - hour : hours at the current time
           - min : mins at the current time
           - sec : sec at the current time
           - isActive : state of the alarm , default is true
           - id : unique to the alarm

functions

- analog clock functions
- setTime() -> for setting the time and continoulsy changing it 
- setAlarm() -> active alarm will be triggered via this         
- renderAlarmList() -> will display alarm list
- addAlarm() -> adding alarm to the list
- removeAlarm() -> removing the alarm from the list
- setAlarmToggle() -> toggling the state of the alarm
- showNotification() -> is used for giving the notification to the user



!! completed  : ) 