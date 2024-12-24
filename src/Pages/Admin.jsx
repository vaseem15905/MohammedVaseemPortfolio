import React, { useEffect, useState } from 'react';
import { db } from '../Configuration/firebaseConfig'; // Adjust the path based on your file structure
import { collection, onSnapshot } from 'firebase/firestore'; // Import Firestore methods

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // Toggle popup visibility
  const [selectedContact, setSelectedContact] = useState(null); // Store selected contact

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contacts'), (snapshot) => {
      const contactsData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const timestamp = new Date(data.timestamp.seconds * 1000).toLocaleString(); // Format timestamp
        return { id: doc.id, timestamp, ...data };
      });
      setContacts(contactsData);
      setLoading(false); // End loading
    });

    return () => {
      unsubscribe(); // Clean up the listener on unmount
    };
  }, []);

  const handleRowClick = (contact) => {
    setSelectedContact(contact); // Set the clicked contact's details
    setShowPopup(true); // Show the popup
  };

  if (loading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <div className="text-white text-center p-4 bg-transparent md:p-14 mt-10">
      <h1 className="mb-8 md:mb-24 text-2xl md:text-4xl bg-transparent text-cyan-300 font-bold">Contact Details</h1>

      <div className="flex flex-col items-center mb-4">
        <p className="text-3xl mb-4 text-white">Total Contacts: {contacts.length}</p>
      </div>

      <div className="overflow-x-auto bg-transparent">
        <table className="min-w-full border bg-transparent border-gray-700 rounded">
          <thead>
            <tr className="text-left bg-gray-800 bg-transparent text-cyan-300">
              <th className="p-2 md:p-4 border-b border-gray-600">#</th> {/* Numbering column */}
              <th className="p-2 md:p-4 border-b border-gray-600">Name</th>
              <th className="p-2 md:p-4 border-b border-gray-600">Email</th>
              <th className="p-2 md:p-4 border-b border-gray-600">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact.id}
                className="border-b border-gray-600 bg-transparent cursor-pointer"
                onClick={() => handleRowClick(contact)} // Open popup on row click
              >
                <td className="p-4 text-center bg-transparent">{index + 1}</td> {/* Row number */}
                <td className="p-2 md:p-4 bg-transparent">{contact.name}</td>
                <td className="p-2 md:p-4 bg-transparent">{contact.email}</td>
                <td className="p-2 md:p-4 bg-transparent">{contact.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for displaying contact details */}
      {showPopup && selectedContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-r from-slate-600 to bg-slate-500 p-4 rounded shadow-lg">
            <h2 className="text-xl text-white mb-4">Contact Details</h2>
            <p className="text-white mb-2"><strong>Name:</strong> {selectedContact.name}</p>
            <p className="text-white mb-2"><strong>Email:</strong> {selectedContact.email}</p>
            <p className="text-white mb-2"><strong>Subject:</strong> {selectedContact.subject}</p>
            <p className="text-white mb-2"><strong>Message:</strong> {selectedContact.message}</p>
            <p className="text-white mb-4"><strong>Timestamp:</strong> {selectedContact.timestamp}</p>
            <button
              className="bg-cyan-400 text-white py-2 px-4 rounded"
              onClick={() => setShowPopup(false)} // Close the popup
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
