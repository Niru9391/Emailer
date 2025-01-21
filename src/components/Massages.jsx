import React, { useEffect, useState } from 'react';
import Massage from './Massage';
import { collection, onSnapshot, orderBy, query, doc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/AppSlice';

export default function Massages() {
  const { emails, searchText } = useSelector((store) => store.appSlice);
 // console.log(emails)
  const [vari, setVari] = useState(emails)
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy('createdAt', "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => {

        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      dispatch(setEmails(allEmails));
      //console.log(allEmails)
    });
    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const filterEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.subject?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setVari(filterEmail);
  }, [searchText, emails]);

  return (
    <div className="p-4">
      {vari && vari?.map((email) => (
        <Massage key={email.id} email={email} />
      ))}

    </div>
  );
}
