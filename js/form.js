const url='https://jsonplaceholder.typicode.com/users';
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const modalButton = document.querySelector('.open-modal');
const overlay = document.querySelector('.overlay');
const modalElem = document.querySelector('.modal');

const onInput = (e) => {
  const input = e.target;
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
}

const isEmailValid = (value) => {
  return EMAIL_REGEXP.test(value);
}

const sendRequest = async (email) => {
  const otherParam = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({email}),
    method: "POST",
  };

  try {
    const response = await fetch(url, otherParam);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  sendRequest(data.get('email'));

  modalElem.classList.add('active');
  overlay.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('email-field-form').addEventListener('submit', handleSubmit);

  document.querySelector('.email-input').addEventListener('input', onInput);

  document.querySelector('.content').addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target

    if (target.classList.contains('close')) {
      modalElem.classList.remove('active');
      overlay.classList.remove('active');
    }
  })
});