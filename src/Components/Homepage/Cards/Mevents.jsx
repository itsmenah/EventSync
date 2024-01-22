import React, { useState } from "react";
import Footer from "../Footer";

const Mevents = () => {
  const [sortedEvents, setSortedEvents] = useState(null);
  const [sortBy, setSortBy] = useState("eventName");
  const [sortOrder, setSortOrder] = useState("asc");
  
  const events = [
  {
    eventName: "Book Club",
    description: "Join the book club.",
    bannerPhoto: "https://www.brevardschools.org/cms/lib/FL02201431/Centricity/Domain/9133/image_55241764731661451043338.png",
    eventType: "Virtual",
    audienceNumber: "150",
    ticketPriceINR: "75",
    classification: "Recreational",
    hostName: "Akshay",
    contactEmailAddress: "Akshay@hcl.com",
    locationAddressMeetingLink: "See details for info.",
    privateEvent: true,
    dateTime: "Check details",
  },
  {
    eventName: "Historic Lucknow Tour.",
    description: "Join us to explore the historic Lucknow.",
    bannerPhoto: "https://www.fabhotels.com/blog/wp-content/uploads/2018/07/TombofSaadatAliKhan.jpg",
    eventType: "In Person",
    audienceNumber: "150",
    ticketPriceINR: "200",
    classification: "Recreational",
    hostName: "Pankaj Kumar",
    contactEmailAddress: "Pankaj@hcl.com",
    locationAddressMeetingLink: "Gathering at HCL Lucknow SEZ gate 1.",
    privateEvent: true,
    dateTime: "2024-02-10 09:00",
  },
  ];
  const handleSort = (field) => {
    const order = sortOrder === "asc" ? 1 : -1;
    const sorted = [...events].sort((a, b) =>
      a[field] > b[field] ? order : -order
    );
    setSortedEvents(sorted);
    setSortBy(field);
  };

  const handleToggleOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    if (sortedEvents) {
      setSortedEvents([...sortedEvents].reverse());
    }
  };

  const handleResetSort = () => {
    setSortedEvents(null);
    setSortBy("eventName");
    setSortOrder("asc");
  };

  const displayedEvents = sortedEvents || events;

  return (
    <div>
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
          Sort by Date
        </button>
        <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
          Sort by Event Name
        </button>
        <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
          {sortOrder === "asc" ? "Descending Order" : "Ascending Order"}
        </button>
        <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
          Reset Sort
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "rgb(224, 242, 254)",
          padding: "20px",
        }}
      >
        {displayedEvents.map((event, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {/* Rest of the code for the card remains the same */}
            <div style={{ flex: "0 0 150px" }}>
            <img
              src={event.bannerPhoto}
              alt="Event Banner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "1", padding: "15px" }}>
          <h3 style={{ color: "red" }}>{event.eventName}</h3>
            <p>{event.description}</p>
            <p>Host: {event.hostName}</p>
            <p>Email: {event.contactEmailAddress}</p>
            <p>Location: {event.locationAddressMeetingLink}</p>
            <p>Date & Time: {event.dateTime}</p>
            <p>Private Event: {event.privateEvent.toString()}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
                Delete Event
              </button>
              <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
                Reschedule
              </button>
              </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
  <Footer></Footer>
};

export default Mevents;