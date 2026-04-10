const navbar = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-icon");
// console.log(navbar, navBtn);

// ------ nav
const list = navbar.classList;
// console.log(list.contains("nav-close"));

const navEditClass = function () {
  const li = navbar.querySelectorAll(".nav-items");
  const list = navbar.classList;
  if (list.contains("nav-close")) {
    list.remove("nav-close");
    navbar.querySelector(".nav-cal p").innerHTML = "Calander";
    navbar.querySelector(".nav-dash p").innerHTML = "Dashboard";
  } else {
    li.forEach((e) => {
      e.querySelector("p").innerHTML = "";
    });
    list.add("nav-close");
  }
};

navBtn.addEventListener("click", navEditClass);

// ---------- modal window

const modal = document.querySelector(".book-modal");
const modalCloseBtn = modal.querySelector(".modal-close-btn");
const modalCancelBtn = modal.querySelector(".modal-cancel-btn");

const bookAppointbtn = document.querySelector(".book-btn");

const modalToggle = function () {
  //   const isClose = modal.classList.contains(".display-none");
  modal.classList.toggle("display-none");
};

modalCloseBtn.addEventListener("click", modalToggle);
modalCancelBtn.addEventListener("click", modalToggle);
bookAppointbtn.addEventListener("click", modalToggle);

// ---------- cal - dash switch

const practiceDash = document.querySelector(".practice-dash");
const calender = document.querySelector(".main-div");
const navCalBtn = navbar.querySelector(".nav-cal");
const navDashBtn = navbar.querySelector(".nav-dash");

const calActive = function () {
  if (!navCalBtn.classList.contains("nav-items-active")) {
    navCalBtn.classList.add("nav-items-active");
    navDashBtn.classList.remove("nav-items-active");
    practiceDash.classList.add("display-none");
    calender.classList.remove("display-none");
  }
};
const dashActive = function () {
  if (!navDashBtn.classList.contains("nav-items-active")) {
    navDashBtn.classList.add("nav-items-active");
    navCalBtn.classList.remove("nav-items-active");
    practiceDash.classList.remove("display-none");
    calender.classList.add("display-none");
  }
};

navCalBtn.addEventListener("click", calActive);
navDashBtn.addEventListener("click", dashActive);

// ---------- date time
const now = new Date();

const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = Date.now();
const maxNow = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());

const curDate = now.getDate();
const curMonth = monthsList[now.getMonth()];
const curYear = now.getFullYear();
const curDay = now.getDay();

const calDay = document.querySelector(".days");
const calDate = document.querySelector(".dates");
const dateSelectDate = document.querySelector(".date-select-p");

// ---------- listing dates in cal

let oneDateInCal = ``;
// console.log(oneDateInCal);

const startDate = new Date(`${curMonth} 01, ${curYear}`);

// console.log(startDate.setDate(startDate.getDate() - startDate.getDay()));
const calListDate = startDate.getDate();
const calListMonth = monthsList[startDate.getMonth()];
const calListYear = startDate.getFullYear();
calListDay = startDate.getDay();

const listOfDates = function () {
  if (startDate.getDay() != 0) {
    startDate.setDate(startDate.getDate() - startDate.getDay() - 1);
  }
  for (let i = 0; i < 115; i++) {
    startDate.setDate(startDate.getDate() + 1);
    const aDate = startDate.getDate();
    const aMonth = monthsList[startDate.getMonth()];
    const html = `<li class="dates-date" id=${aMonth.toLowerCase()}-${aDate}><p>${aDate == 1 ? `${aMonth.slice(0, 3)} ${aDate}` : aDate}</p></li>`;
    oneDateInCal = oneDateInCal + html;
  }

  calDate.innerHTML = oneDateInCal;
  // console.log(`${calListMonth} ${calListDate}, ${calListYear} ${calListDay}`); // December 29, 2025
};

listOfDates();

// ---------- adding color to cal

calDay.children.item(curDay).classList.add("blue-text"); // setting days color
// calDate.children.item(curDate - 1).classList.add("dates-date-select"); //setting date color
document
  .getElementById(
    `${monthsList[now.getMonth()].toLowerCase()}-${now.getDate()}`,
  )
  .classList.add("dates-date-select");

dateSelectDate.querySelector("p").innerText =
  `${curMonth} ${curDate},${curYear}`;

// console.log(curDay);

// ---- btn in calender
const todayBtn = document.querySelector(".date-select-today");
const monthBtn = document.querySelector(".date-select-dropdown");
const calenderBtn = document.querySelector(".cal-btns");

// console.log(calenderBtn);
// const monthParent = document.querySelector(".date-select-drop");

// monthBtn.innerHTML = () => {};
for (let i = 0; i < 3; i++) {
  const monthNum = now.getMonth() + i;
  const monthName = monthsList[monthNum];
  // console.log(monthNum, monthName);
  monthBtn.insertAdjacentHTML(
    "beforeend",
    `<option value="${monthNum}">${monthName}</option>`,
  );
}

function scrollToV(val, block = "start") {
  document
    .getElementById(`${val}`)
    .scrollIntoView({ behavior: "smooth", block: `${block}` });
}

monthBtn.addEventListener("change", function () {
  const monthNum = monthBtn.value;
  const monthName = monthsList[monthNum || now.getMonth()];
  // console.log(monthName);
  const monthStartDate = new Date(`${monthName} 01, ${curYear}`);
  dateSelectDate.querySelector("p").innerText =
    `${monthName} ${monthStartDate.getDate()},${curYear}`;
  scrollToV(
    `${monthsList[monthStartDate.getMonth()].toLowerCase()}-${monthStartDate.getDate()}`,
  );
});

todayBtn.addEventListener("click", function () {
  dateSelectDate.querySelector("p").innerText =
    `${curMonth} ${curDate},${curYear}`;

  scrollToV(
    `${monthsList[now.getMonth()].toLowerCase()}-${now.getDate()}`,
    "center",
  );
  monthBtn.value = now.getMonth();
});

function calBtnFun(monthname = "April") {
  // console.log(monthname);
  const monthStartDate = new Date(`${monthname} 01, ${curYear}`);
  // console.log(monthStartDate, monthsList.indexOf(monthname));

  try {
    scrollToV(
      `${monthsList[monthStartDate.getMonth()].toLowerCase()}-${monthStartDate.getDate()}`,
    );
    dateSelectDate.querySelector("p").innerText =
      `${monthname} ${now.getDate()},${now.getFullYear()}`;
  } finally {
    return;
  }
}
// calBtnFun();
// console.log(dateSelectDate.querySelector("p").innerText.split(" ")[0]);
let nowMonth;
calenderBtn.addEventListener("click", function (e) {
  const nowM = dateSelectDate.querySelector("p").innerText.split(" ")[0];
  const newD = new Date(`${nowM} 01, ${curYear}`);
  if (
    e.target
      .closest("a")
      .querySelector("ion-icon[name='chevron-forward-outline']")
  ) {
    const nowMonth = newD.getMonth() + 1;
    const monthName = monthsList[nowMonth];
    // console.log(monthName);
    calBtnFun(monthName);
  } else if (
    e.target.closest("a").querySelector("ion-icon[name='chevron-back-outline']")
  ) {
    const nowMonth = newD.getMonth() - 1;
    const monthName = monthsList[nowMonth];
    // console.log(monthsList, monthName, typeof monthName);
    calBtnFun(monthName);
  }
});

// -------- form data - local storage

const modalForm = document.querySelector(".book-modal-form");

const modalFormPatient = document.getElementById("book-patient-name-input");
const modalFormDocter = document.getElementById("book-doctor-name-input");
const modalFormHospital = document.getElementById("book-hospital-name-input");
const modalFormSpecialty = document.getElementById("book-specialty-input");
const modalFormDate = document.getElementById("book-date-input");
const modalFormTime = document.getElementById("book-time-input");
const modalFormReason = document.getElementById("book-reason-input");

// Store current edit userId
let currentEditUserId = null;

// console.log(userId);
function submitForm() {
  modalForm.addEventListener("submit", function (e) {
    let userId = currentEditUserId
      ? currentEditUserId
      : localStorage.length + 1;
    e.preventDefault();
    const formData = {
      patient: modalFormPatient.value,
      doctor: modalFormDocter.value,
      hospital: modalFormHospital.value,
      specialty: modalFormSpecialty.value,
      date: modalFormDate.value,
      time: modalFormTime.value,
      reason: modalFormReason.value,
      userId: userId,
    };
    // console.log("Saving to userId:", userId, "Data:", formData);
    localStorage.setItem(userId, JSON.stringify(formData));
    modalForm.reset();
    modalToggle();
    updateAppointCal();
    practiceDashItems((duplicate = true));
    currentEditUserId = null; // Reset after save
  });
}
submitForm();

// --- date and time minimum value

modalFormDate.setAttribute(
  "min",
  `${curYear}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(curDate).padStart(2, "0")}`,
);
// modalFormTime.setAttribute(
//   "min",
//   `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
// );

// ------ applying local storage data to practice dash and calander

const eachDate = document.querySelector(".dates-date");
// console.log(eachDate);

// localStorage.setItem(
//   1,
//   JSON.stringify({
//     date: "2026-04-16",
//     doctor: "Dr. Santhosh",
//     hospital: "Central Hospital",
//     patient: "Rock",
//     reason: "hi",
//     specialty: "Dermatology",
//     time: "13:55",
//     userId: 1,
//   }),
// );
// localStorage.setItem(
//   2,
//   JSON.stringify({
//     date: "2026-04-10",
//     doctor: "Dr. Ram",
//     hospital: "General Hospital",
//     patient: "Bottom",
//     reason: "hi",
//     specialty: "Dermatology",
//     time: "13:55",
//     userId: 2,
//   }),
// );

// REBUILD calendar from localStorage - single source of truth

function getAppointmentDate() {
  const allData = Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key)),
  );

  return allData;
}

function updateAppointCal() {
  document.querySelectorAll(".date-appoint").forEach((el) => el.remove());

  const allData = getAppointmentDate();

  // for (let key of allKeys) {
  //   const data = JSON.parse(localStorage.getItem(key));
  for (let data of allData) {
    if (!data) continue;

    const { patient, doctor, date, time, userId } = data;
    const monthNum = date.slice(5, 7);
    const dateN = date.slice(8, 10);
    const dateMonthNum =
      monthNum[0] == "0" ? Number(monthNum[1]) : Number(monthNum);
    const dateDayNum = dateN[0] == "0" ? Number(dateN[1]) : Number(dateN);

    const el = document.getElementById(
      `${monthsList[dateMonthNum - 1].toLowerCase()}-${dateDayNum}`,
    );

    if (!el) continue;

    const tempTime = new Date(`1970-01-01T${time}`);
    const tempT = tempTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    el.insertAdjacentHTML(
      "beforeend",
      `
      <div class="date-appoint" id="${userId}">
        <div class="date-appoint-text">
          <ion-icon name="walk-outline"></ion-icon>
          <p>${patient} (${doctor}) ${tempT}</p>
        </div>
        <div class="date-appoint-edit">
          <a>
            <ion-icon name="pencil-outline"></ion-icon>
          </a>
          <a>
            <ion-icon name="trash-outline"></ion-icon>
          </a>
          <ion-icon name="document-text-outline"></ion-icon>
        </div>
      </div>
    `,
    );
  }
}

updateAppointCal();

// --- to practics dash

const practiceDashList = document.querySelector(".practice-dash-items");

function practiceDashItems(duplicate = false, list = null) {
  let outputString = "";
  practiceDashList
    .querySelectorAll(".practice-dash-item")
    .forEach((el) => el.remove());

  // const allKeys = Object.keys(localStorage);
  const allData = list || getAppointmentDate();

  for (let data of allData) {
    if (!data) continue;
    const { patient, doctor, hospital, specialty, date, time, reason } = data;

    // console.log(typeof patient);
    const monthNum = date.slice(5, 7);
    const monthN = monthNum[0] == "0" ? Number(monthNum[1]) : Number(monthNum);
    const dateN = date.slice(8, 10);
    const el = document.getElementById(
      `${monthsList[monthNum - 1].toLowerCase()}-${dateN[0] == 0 ? Number(dateN[1]) : Number(dateN)}`,
    );
    const tempTime = new Date(`1970-01-01T${time}`);
    const tempTime15 = new Date(`1970-01-01T${time}`);
    tempTime15.setMinutes(tempTime15.getMinutes() + 15);
    // console.log(tempTime, tempTime15);
    outputString += `<div class="practice-dash-item" id="${data.userId}">
                <p>${patient}</p>
                <p>${doctor}</p>
                <p>${hospital}</p>
                <p>${specialty}</p>
                <p>${dateN}/${monthNum}/${date.slice(0, 4)}</p>
                <p>${tempTime.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })} - ${tempTime15.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</p>
                <div class="practice-dash-actions">
                  <a><ion-icon name="pencil-outline"></ion-icon></a>
                  <a><ion-icon name="trash-outline"></ion-icon></a>
                </div>
              </div>`;
  }
  // console.log(outputString);
  if (duplicate) practiceDashList.innerHTML = "";
  practiceDashList.insertAdjacentHTML("beforeend", outputString);
}

practiceDashItems();

// --------------- edit appointments

function openModal(obj) {
  if (obj.userId) {
    currentEditUserId = obj.userId;
    // console.log("Edit mode - userId:", obj.userId);
  }

  const { patient, doctor, hospital, specialty, date, time, reason } = obj;
  modalFormPatient.value = patient;
  modalFormDocter.value = doctor;
  modalFormHospital.value = hospital;
  modalFormSpecialty.value = specialty;

  modalFormDate.value = date;
  modalFormTime.value = time;

  modalFormReason.value = reason;
  // console.log("Loaded into modal:", obj);
  modalToggle();
}

// Event delegation for edit btn
practiceDashList.addEventListener("click", function (e) {
  // console.log(e.target.closest("ion-icon[name='pencil-outline']"));
  const pencilIcon = e.target.closest("ion-icon[name='pencil-outline']");
  if (pencilIcon) {
    const parentEl = pencilIcon.closest(".practice-dash-item");
    const obj = JSON.parse(localStorage.getItem(parentEl.id));
    // console.log("Edit clicked:", obj);
    openModal(obj);
  }
});

practiceDashList.addEventListener("click", function (e) {
  // console.log(e.target.closest("ion-icon[name='pencil-outline']"));
  const trashIcon = e.target.closest("ion-icon[name='trash-outline']");
  // console.log(trashIcon);
  if (trashIcon) {
    if (confirm("Are you sure you want to delete this appointment?")) {
      const parentEl = trashIcon.closest(".practice-dash-item");
      console.log(parentEl.id);
      localStorage.removeItem(parentEl.id);
      // openModal(obj);
      practiceDashItems();
    }
  }
});

// --- appoint edit in cal
calDate.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.target.closest("ion-icon[name='pencil-outline']"));
  const pencilIcon = e.target.closest("ion-icon[name='pencil-outline']");
  if (pencilIcon) {
    const parentEl = pencilIcon.closest(".date-appoint");
    const obj = JSON.parse(localStorage.getItem(parentEl.id));

    openModal(obj);
  }
});

calDate.addEventListener("click", function (e) {
  // console.log(e.target.closest("ion-icon[name='trash-outline']"));
  const trashIcon = e.target.closest("ion-icon[name='trash-outline']");
  if (trashIcon) {
    if (confirm("Are you sure you want to delete this appointment?")) {
      const parentEl = trashIcon.closest(".date-appoint");
      localStorage.removeItem(parentEl.id);
      // console.log("Trash clicked:", obj);
      // console.log(parentEl.id);
      updateAppointCal();
    }
  }
});

// ---- fliter appointments in practice dash

const patientFilterInput = document.querySelector(".filter-patient-input");
const doctorFilterInput = document.querySelector(".filter-doctor-input");
const startDateInput = document.querySelector(".start-date");
const endDateInput = document.querySelector(".end-date");
const filterUpdateBtn = document.querySelector(".practice-dash-btn");
const filterClearBtn = document.querySelector(".practice-dash-btn-clear");

function applyFilters() {
  const patientQuery = patientFilterInput.value.trim().toLowerCase();
  const doctorQuery = doctorFilterInput.value.trim().toLowerCase();
  const start = startDateInput.value ? new Date(startDateInput.value) : null;
  const end = endDateInput.value ? new Date(endDateInput.value) : null;

  // console.log(patientQuery,doctorQuery,start,end);
  const filtered = getAppointmentDate().filter((item) => {
    const patientMatch =
      !patientQuery || item.patient.toLowerCase().includes(patientQuery);
    const doctorMatch =
      !doctorQuery || item.doctor.toLowerCase().includes(doctorQuery);

    const itemDate = new Date(item.date);
    const startMatch = !start || itemDate >= start;
    const endMatch = !end || itemDate <= end;

    return patientMatch && doctorMatch && startMatch && endMatch;
  });

  practiceDashItems(true, filtered);
}

filterUpdateBtn.addEventListener("click", applyFilters);

filterClearBtn.addEventListener("click", function () {
  patientFilterInput.value = "";
  doctorFilterInput.value = "";
  startDateInput.value = "";
  endDateInput.value = "";
  practiceDashItems();
});

// ----- live search

let timer;
[patientFilterInput, doctorFilterInput, startDateInput, endDateInput].forEach(
  (el) => {
    el.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(applyFilters, 200);
    });
  },
);
