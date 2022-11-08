let alarms = [];
let switchOnImgPath = "img/switch-on.PNG";
let switchOffImgPath = "img/switch-off.PNG";
let deleteImgPath = "img/delete.PNG";

/*related to the clock*/

function setTime(){
    let id = setInterval( ()=>{
        let curr = new Date();
        let hr = curr.getHours();
        let mi = curr.getMinutes();
        let se = curr.getSeconds();
        if(hr < 10)
            hr = "0" + hr;
        if(mi < 10)
            mi = "0" + mi;
        if(se < 10)
            se = "0" + se;
        $('#hr').text(hr);
        $('#mi').text(mi);
        $('#se').text(se);
    }, 1000);
}

setTime();

/*all stuff related to the alarm list and its functioning */


/*will set any alarm active and will show the message when is triggered*/
function setAlarm(alrm){
    let curr = new Date();
    let remainingTime = ((alrm.hour - curr.getHours())*3600 + (alrm.min - curr.getMinutes())*60 + (alrm.sec - curr.getSeconds()));
    if(remainingTime < 0)
        remainingTime = 86400 + remainingTime;
    // console.log(remainingTime);
    let t = setInterval(()=>{
        remainingTime -- ;
        if(alrm.isActive && remainingTime === 0){
            showNotification("Alarm Tiggered !");
            setAlarmToggle(alrm.id);
            clearInterval(t);
            return ;
        }
    },1000);

}


/*will render the alarm list*/
function renderAlarmList(){

    $('ul').html("");

    for(let i = 0 ; i < alarms.length ; i ++){
        const listItem = document.createElement('li');
        listItem.classList.add('alarm-items');

        const spanItem = document.createElement('span');
        spanItem.classList.add('timer');
        spanItem.textContent = (alarms[i].hour + " : " + alarms[i].min + " : " + alarms[i].sec);

        const imgItem1 = document.createElement('img');
        imgItem1.classList.add('img-container');
        imgItem1.setAttribute("data-id" , alarms[i].id);
        imgItem1.setAttribute("data-switch" , "1");

        if(alarms[i].isActive){
            imgItem1.setAttribute("src" , switchOnImgPath);
            setAlarm(alarms[i]);
        }
        else
            imgItem1.setAttribute("src" , switchOffImgPath);

        const imgItem2 = document.createElement('img');
        imgItem2.setAttribute("src" , deleteImgPath);
        imgItem2.classList.add('img-container');
        imgItem2.classList.add('del');
        imgItem2.setAttribute("data-id" , alarms[i].id);
        imgItem2.setAttribute("data-switch" , "2");

        const divItem1 = document.createElement('div')
        divItem1.classList.add('alarm-buttons');

        const divItem2 = document.createElement('div');
        divItem2.classList.add('alarm-buttons');

        divItem1.appendChild(imgItem1);
        divItem2.appendChild(imgItem2);
        listItem.appendChild(spanItem);
        listItem.appendChild(divItem1);
        listItem.appendChild(divItem2);

        document.querySelector('ul').appendChild(listItem);

    }

    $('.img-container').click(function(event){
        if(event.target.getAttribute('data-switch') == "1")
            setAlarmToggle(event.target.getAttribute('data-id'));
        else
            removeAlarm(event.target.getAttribute('data-id'));
    });
    
    
}

/*will activate or deactivate any alarm*/
function setAlarmToggle(id){
    for(let i = 0 ; i < alarms.length ; i ++){
        if(alarms[i].id === id)
            alarms[i].isActive = !(alarms[i].isActive);
        else
            alarms[i].isActive = false;
    }

    renderAlarmList();
}

/*adding alarm to the alarm list */

function addAlarm(hour , min , sec){
    if(hour < 10)
        hour =  "0" + hour;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;
    let alrm = {
        hour : hour,
        min : min,
        sec : sec,
        isActive : false,
        id : Date.now().toString()
    }
    alarms.push(alrm);
    setAlarmToggle(alrm.id);
    showNotification("Alarm Added Successfully and is currently active");
}

/*deleting an alarm */
function removeAlarm(id){
    let newalarms = [];
    for(let i = 0 ; i < alarms.length ; i ++){
        if(id == alarms[i].id){
            if(alarms[i].isActive)
                setAlarmToggle(alarms[i].id);
        }
        else{
            newalarms.push(alarms[i]);
        }
    }
    alarms = newalarms;
    renderAlarmList();
    showNotification("Alarm deleted successfully");
    
}


/*show the alert messages*/
function showNotification(text){
    alert(text);
}

/*event handler on the ADD alarm button*/
$('#add').click(()=>{
    let alarmHr = parseInt($('#inHr').val());
    let alarmMin = parseInt($('#inMin').val());
    let alarmSec = parseInt($('#inSec').val());

    if(alarmHr < 24 && alarmMin < 61 && alarmSec < 61 && alarmHr >= 0 && alarmMin >= 0 && alarmSec >= 0)
        addAlarm(alarmHr , alarmMin , alarmSec);
    else
        showNotification("Format of Time entered is wrong!");
    $('.textbox').val("");
});
