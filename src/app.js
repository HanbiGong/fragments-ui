import { signIn, getUser } from './auth';
import { getUserFragments } from './api'; // import API function

async function init() {
  const userSection = document.querySelector('#user');
  const loginBtn = document.querySelector('#login');

  loginBtn.onclick = () => {
    signIn(); // click login button
  };

  const user = await getUser();
  if (!user) return;

  // show user info
  userSection.hidden = false;
  userSection.querySelector('.username').innerText = user.username;
  loginBtn.disabled = true;

  // call fragments API after login
  const userFragments = await getUserFragments(user);
  console.log('Fragments received:', userFragments);

  // TODO: show fragments in HTML later
}

addEventListener('DOMContentLoaded', init); // run init when page loads
