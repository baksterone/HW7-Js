class Worker{
    constructor(firstName, lastName, surName, age, job, work){
        this.firstName = firstName;
        this.lastName = lastName;
        this.surName = surName;
        this.age = age;
        this.job = job;
        this.work = work;
    }

    set information(value){
        if(value.length == ""){
            alert('Заполните все поля');
            return;
        } else{
            this.firstName = value;
            this.lastName = value;
            this.surName = value;
            this.age = value;
            this.job = value;
            this.work = value;
        }
    }

    get information(){
        return  `
        <div class="firstName"> ${arrWorker[i].firstName} </div>
        <div class="lastName"> ${arrWorker[i].lastName} </div>
        <div class="surName"> ${arrWorker[i].surName} </div>
        <div class="age"> ${arrWorker[i].age} </div>
        <div class="job"> ${arrWorker[i].job} </div>
        <div class="work"> ${arrWorker[i].work} </div>`
    }
}

class JoinJob extends Worker{
    constructor(firstName, lastName, surName, age, job, work, joinJob, salary){
        super(firstName, lastName, surName, age, job, work, joinJob, salary);
        this.joinJob = joinJob;
        this.salary = salary;
        this.type = 'joinJob';
    }
}

class LeaveJob extends Worker{
    constructor(firstName, lastName, surName, age, job, work, leaveJob, jobRange){
        super(firstName, lastName, surName, age, job, work, leaveJob, jobRange);
        this.leaveJob = leaveJob;
        this.jobRange = jobRange;
        this.type = 'leaveJob';
    }
}


let arrWorker = [];

function deleteWorker(i, arrWorker){
    arrWorker.splice(i, 1);
    printInfo(arrWorker);
}

function editWorker(i){
    display('create-worker');
    document.getElementById('firstName').value = arrWorker[i].firstName;
    document.getElementById('lastName').value = arrWorker[i].lastName;
    document.getElementById('surName').value = arrWorker[i].surName;
    document.getElementById('age').value = arrWorker[i].age;
    document.getElementById('job').value = arrWorker[i].job;
    document.getElementById('work').value = arrWorker[i].work;
    document.getElementById('joinJob').value = arrWorker[i].joinJob;
    document.getElementById('salary').value = arrWorker[i].salary;
    document.getElementById('leaveJob').value = arrWorker[i].leaveJob;
    document.getElementById('jobRange').value = arrWorker[i].jobRange;

    deleteWorker(i, arrWorker)
    document.getElementById('mainMenu').style.display = 'none';
}

function printDefaultInfo(i, arrWorker){
    let form = document.getElementById('all-info').getElementsByTagName('form');

    if(arrWorker[i].type == 'joinJob'){
        form[0].innerHTML = `<div class="deatailedInfo">
        <div class="details">
          <div class="firstName"> Имя </div>
          <div class="lastName"> Фамилия </div>
          <div class="surName"> Отчество </div>
          <div class="age"> Возраст </div>
          <div class="job"> Должность </div>
          <div class="work"> Организация </div>
          <div class="joinJob"> Дата принятия </div>
          <div class="salary"> Зарплата </div>
        </div>
        </div>`;
       
          
          form[0].innerHTML += `
          <div class="all-details" id="details${i}">
          <div class="firstName"> ${arrWorker[i].firstName} </div>
          <div class="lastName"> ${arrWorker[i].lastName} </div>
          <div class="surName"> ${arrWorker[i].surName} </div>
          <div class="age"> ${arrWorker[i].age} </div>
          <div class="job"> ${arrWorker[i].job} </div>
          <div class="work"> ${arrWorker[i].work} </div>
          <div class="joinJob"> ${arrWorker[i].joinJob} </div>
          <div class="salary"> ${arrWorker[i].salary} </div>
         </div>
          `
      
          form[0].innerHTML+= `<input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;
    } else if(arrWorker[i].type == 'leaveJob') {
      form[0].innerHTML = `<div class="deatailedInfo">
        <div class="details">
        <div class="firstName"> Имя </div>
        <div class="lastName"> Фамилия </div>
        <div class="surName"> Отчество </div>
        <div class="age"> Возраст </div>
        <div class="job"> Должность </div>
        <div class="work"> Организация </div>
        <div class="leaveJob"> Дата увольнения </div>
        <div class="jobRange"> Стаж </div>
        </div>
        </div>`;
        
          
            form[0].innerHTML += `
            <div class="all-details" id="details${i}">
            <div class="firstName"> ${arrWorker[i].firstName} </div>
            <div class="lastName"> ${arrWorker[i].lastName} </div>
            <div class="surName"> ${arrWorker[i].surName} </div>
            <div class="age"> ${arrWorker[i].age} </div>
            <div class="job"> ${arrWorker[i].job} </div>
            <div class="work"> ${arrWorker[i].work} </div>
            <div class="leaveJob"> ${arrWorker[i].leaveJob} </div>
            <div class="jobRange"> ${arrWorker[i].jobRange} </div>
           </div>
            `
        
        form[0].innerHTML+= `<input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;
  }
      document.getElementById('mainMenu2').addEventListener('click', () =>{
          document.getElementById('all-info').getElementsByTagName('form').innerHTML = "";
          display('information');
      });
}

function printInfo(arrWorker){
    let form = document.getElementById('information').getElementsByTagName('form');
    form[0].innerHTML = '';
    
    for(let i = 0; i < arrWorker.length; i++){
        
        form[0].innerHTML += `<div class="text_description">
        <div class="text-details" id="details${i}">
        <div class="firstName"> ${arrWorker[i].firstName} </div>
        <div class="lastName"> ${arrWorker[i].lastName} </div>
        <div class="surName"> ${arrWorker[i].surName} </div>
        <div class="age"> ${arrWorker[i].age} </div>
        <div class="job"> ${arrWorker[i].job} </div>
        <div class="work"> ${arrWorker[i].work} </div>
       </div>
       <div class="btn">
        <div class="edit" id="edit${i}">Редактировать</div>
        <div class="remove" id="remove${i}">Удалить</div>
        </div>
        </div>`
        
    };
    form[0].innerHTML += `<br>
    <input type="button" id="newCreateWorker" class="buttons" value="Создать работягу">`;

  
    for(let i = 0; i < arrWorker.length; i++){
        let edit = `edit${i}`;
        let remove = `remove${i}`;
        let details = `details${i}`;
        
        
        document.getElementById(edit).style.color = 'blue';
        document.getElementById(remove).style.color = 'red';
        document.getElementById(details).style.color = 'green';
  
        document.getElementById(details).addEventListener('click', () =>{
            printDefaultInfo(i, arrWorker);
            display('all-info');
            
        });
  
        document.getElementById(edit).addEventListener('click', () =>{
          editWorker(i, arrWorker);
        });
  
        document.getElementById(remove).addEventListener('click', () =>{
            if(confirm(`Удаляем работягу ? ${arrWorker[i].firstName}`)){
                deleteWorker(i, arrWorker);
            };
        });
    }
  
    document.getElementById('newCreateWorker').addEventListener('click', () =>{
        display('create-worker');
        document.getElementById('createWorker').style.display="";
    })
  }

function display(visibleId){
    switch(visibleId){
        case  'create-worker':
        document.getElementById('information').style.display = 'none';
        document.getElementById('all-info').style.display = 'none';
        document.getElementById('create-worker').style.display = 'block';
        break;
        case  'all-info':
        document.getElementById('information').style.display = 'none';
        document.getElementById('all-info').style.display = 'block';
        document.getElementById('create-worker').style.display = 'none';
        break;
        case  'information':
        document.getElementById('information').style.display = 'block';
        document.getElementById('all-info').style.display = 'none';
        document.getElementById('create-worker').style.display = 'none';
        break;
        default:
        document.getElementById('information').style.display = 'block';
        document.getElementById('all-info').style.display = 'none';
        document.getElementById('create-worker').style.display = 'none';
        break;
    }
  }

let radio = document.getElementsByName('radio');
function checkRadio(){
  for(let i = 0; i < radio.length; i++){
      if(radio[i].checked){
          return(radio[i].value);
      }
  }
};

for (let i of radio){
    i.addEventListener('click', () => {
      switch(checkRadio()){
        case `JoinJob`:
        document.querySelector('.leaveJob').style.display = 'none';
        document.querySelector('.jobRange').style.display = 'none';
        document.querySelector('.joinJob').style.display = 'block';
        document.querySelector('.salary').style.display = 'block';
        break;
        case `LeaveJob`:
        document.querySelector('.leaveJob').style.display = 'block';
        document.querySelector('.jobRange').style.display = 'block';
        document.querySelector('.joinJob').style.display = 'none';
        document.querySelector('.salary').style.display = 'none';
        break;
      }
    });
  }

  display('information');
  printInfo(arrWorker);

  document.getElementById('createWorker').addEventListener('click', () =>{
    document.getElementById('mainMenu').style.display = '';
    let type = checkRadio();
    let firstName = document.getElementById('firstName').value,
        lastName = document.getElementById('lastName').value,
        surName = document.getElementById('surName').value,
        age = document.getElementById('age').value,
        job = document.getElementById('job').value,
        work = document.getElementById('work').value,
        salary = document.getElementById('salary').value,
        joinJob = document.getElementById('joinJob').value,
        leaveJob = document.getElementById('leaveJob').value,
        jobRange = document.getElementById('jobRange').value;
  
    switch(type){
        case 'JoinJob':
            if(firstName.trim() == '' || lastName.trim() == '' || surName.trim() == '' || age.trim() == ''
            || job.trim() == '' || work.trim() == '' || joinJob.trim() == '' || salary.trim() == ''){
                alert('Заполните все поля');
            } else {
          arrWorker[arrWorker.length] = new JoinJob(firstName, lastName, surName, age, job, work, joinJob, salary);
            printInfo(arrWorker);
            display('information');
            alert('Приняли работягу');
        };
        break;
        case 'LeaveJob':
            if(firstName.trim() == '' || lastName.trim() == '' || surName.trim() == '' || age.trim() == ''
            || job.trim() == '' || work.trim() == '' || leaveJob.trim() == '' || jobRange.trim() == ''){
                alert('Заполните все поля');
            } else {
          arrWorker[arrWorker.length] = new LeaveJob(firstName, lastName, surName, age, job, work, leaveJob, jobRange);
            printInfo(arrWorker);
            display('information');
            alert('Уволили работягу');
            };
        break;
    }
  })
  
  document.getElementById('mainMenu').addEventListener('click', () =>{
    display('information');
  });
