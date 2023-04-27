const api_url = 'http://localhost:7000/api/v1/';
const headerToken = sessionStorage.getItem('token');
const userEmail = sessionStorage.getItem('userEmail');
const memberType = sessionStorage.getItem('memberType'); 
const user = sessionStorage.getItem('user'); 

export {api_url, headerToken, userEmail, memberType, user};
