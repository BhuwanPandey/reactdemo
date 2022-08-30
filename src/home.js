// import GoogleLogin from 'react-google-login';
// import { GoogleLogin } from '@react-oauth/google'
import {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';



function Home() {




  // useEffect(()=>{

  //   google.accounts.id.initialize(
  //     {
  //       client_id:"70485979635-1mh7ri2d7n0al545k921vp1sr5vk3e2r.apps.googleusercontent.com",
  //       callback:responseGoogle
  //     }
  //   );

  //   google.accounts.id.renderButton(
  //     document.getElementById('singleDiv'),
  //     { theme: 'outline',size:'large'}
  //   );

  // },[]);

  // const onSignIn=(googleUser)=>{
  //   var profile=googleUser.getBasicProfile();
  //   console.log('Id'+profile.getId());

  //   var id_token=googleUser.getAuthReponse().id_token;
  //   console.log(id_token)


  // const responseGoogle=(res)=>{
  //   console.log(res)

// }
const login = useGoogleLogin({
  onSuccess: tokenResponse => console.log(tokenResponse),
});


  return (

    <>
    {/* <div className='App'>
       <div className='g-signin2' data-onsuccess='onSignIn'
       data-theme='dark'>
        google
       </div>
    </div> */}



    {/* <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://127.0.0.1:3000/accounts/google/login/callback/&prompt=consent&response_type=token&client_id=801212936043-3lbc2ludobsijeu1p4okdvkfh9od7lvf.apps.googleusercontent.com&scope=openid%20email%20profile">google</a> */}

   {/* <GoogleLogin
    clientId="801212936043-3lbc2ludobsijeu1p4okdvkfh9od7lvf.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> */}

{/* <GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log(credentialResponse)
    console.log(credentialResponse.credential)
    // var obj = jwt_decode(credentialResponse.credential)
    // console.log(obj, 'obj')
  }}
  onError={() => {
    console.log('Login Failed')
  }}

/> */}

  

  
  <button onClick={() => login()}>
    Sign in with Google 🚀{' '}
  </button>;





    </>
  );
  }

export default Home;
