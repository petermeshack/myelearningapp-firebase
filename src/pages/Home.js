import { Auth } from "../components/auth";
import {db, auth} from '../config/firebase';
import { getDocs, collection} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { UnitsGrid } from "../components/UnitsGrid";

export function Home(){
    const [unitList,setUnitList] = useState([]);
    const unitCollectionRef = collection(db, "Units");
    const [currentUserEmail, setCurrentUserEmail] = useState(null);



    const getUnitList = async()=>{
        //read data from database
        //set the unitl list = data
        try{
        const data = await getDocs(unitCollectionRef);
        const filteredData = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
        console.log(filteredData);
        setUnitList(filteredData);
        }catch(err){
          console.log(err);
          //M.toast({ html: 'Error!'+ err, classes: 'rounded red'});
        }
    
      };

      useEffect(() => {
        setCurrentUserEmail(auth.currentUser?.email);
        // Listener for changes in authentication state
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            // User is signed in, get the email
            setCurrentUserEmail(user.email);
          } else {
            // User is signed out, reset the email
            setCurrentUserEmail(null);
          }
        });
    
        // Clean up the listener when component unmounts
        return () => unsubscribe();
      }, []); 
    
      useEffect(() => {
    
        getUnitList();
      },);  


    return(<>
          <Auth auths={auth.currentUser} useremail={currentUserEmail}/>
    
      <div className="row">
        <div className="col s12 m12 l12">
        {unitList.map((item)=>(<UnitsGrid units={item}/>))}
        </div>
      </div>
    </>);
}