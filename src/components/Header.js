import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
   useEffect(() => {
      window.gapi.load("client:auth2", () => {
         window.gapi.client.init({
            clientId:
               "322118605766-kru9lmpnusinsfpttamc4p81qtpm054k.apps.googleusercontent.com",
            scope: "email",
         });
      });
   }, []);

   //  Using then
   //  useEffect(() => {
   //     window.gapi
   //        .load("client:auth2")
   //        .then(() => {
   //           window.gapi.client.init({
   //              clientId:
   //                 "322118605766-kru9lmpnusinsfpttamc4p81qtpm054k.apps.googleusercontent.com",
   //              scope: "email",
   //           });
   //        })
   //        .catch((err) => {
   //           console.log(err);
   //        });
   //  }, []);

   // Using async
   //  const loadApi = async () => {
   //     const client = await window.gapi.load("client:auth2");
   //     window.gapi.client.init({
   //        clientId:
   //           "322118605766-kru9lmpnusinsfpttamc4p81qtpm054k.apps.googleusercontent.com",
   //        scope: "email",
   //     });
   //  };

   //  useEffect(() => {
   //     loadApi();
   //  }, []);
   return (
      <div>
         <nav>
            <ul>
               <Link to="/">
                  <li>Home</li>
               </Link>
               <li>Login</li>
               <GoogleAuth />
            </ul>
         </nav>
      </div>
   );
};

export default Header;
