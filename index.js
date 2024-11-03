const editButton = document.getElementById('btn-edit');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('btn-kembali');
const submitButton = document.getElementById('btn-submit');

const inputNama = document.getElementById('nama');
const inputRole = document.getElementById('role');
const inputAvailability = document.getElementById('availability');
const inputUsia = document.getElementById('usia');
const inputLokasi = document.getElementById('lokasi');
const inputExperience = document.getElementById('experience');
const inputEmail = document.getElementById('email');

const displayNama = document.getElementById('display-nama');
const displayRole = document.getElementById('display-role');
const displayAvailability = document.getElementById('display-availability');
const displayUsia = document.getElementById('display-usia');
const displayLokasi = document.getElementById('display-lokasi');
const displayExperience = document.getElementById('display-experience');
const displayEmail = document.getElementById('display-email');

editButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  inputNama.value = displayNama.textContent;
  inputRole.value = displayRole.textContent;
  inputAvailability.value = displayAvailability.textContent.replace(': ', '');
  inputUsia.value = displayUsia.textContent.replace(': ', '');
  inputLokasi.value = displayLokasi.textContent.replace(': ', '');
  inputExperience.value = displayExperience.textContent.replace(': ', '');
  inputEmail.value = displayEmail.textContent.replace(': ', '');
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

submitButton.addEventListener('click', () => {
  displayNama.textContent = inputNama.value || 'Nama Anda';
  displayRole.textContent = inputRole.value || 'Front End Developer';
  displayAvailability.textContent = `: ${inputAvailability.value || 'Full Time'}`;
  displayUsia.textContent = `: ${inputUsia.value || '19'}`;
  displayLokasi.textContent = `: ${inputLokasi.value || 'Jakarta'}`;
  displayExperience.textContent = `: ${inputExperience.value || '2'}`;
  displayEmail.textContent = `: ${inputEmail.value || 'email@gmail.com'}`;

  modal.classList.add('hidden');
});
