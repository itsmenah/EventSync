import React, { useState } from "react";
import Footer from "../Footer";

const CardDetails = () => {
  const [sortedEvents, setSortedEvents] = useState(null);
  const [sortBy, setSortBy] = useState("eventName");
  const [sortOrder, setSortOrder] = useState("asc");
  
  const events = [
    {
    eventName: "Pythton classes",
    description: "Learn Python from indnuestry specialists",
    bannerPhoto: "https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    eventType: "Teams Events (Virtual)",
    audienceNumber: "50",
    ticketPriceINR: "0",
    classification: "Education",
    hostName: "Arvind Ghosh",
    contactEmailAddress: "Arvindg@hcl.com",
    locationAddressMeetingLink: "Teams link( See details for more Info )",
    privateEvent: false,
    dateTime: "2024-01-30 14:00",
  },
  {
    eventName: "Zumba",
    description: "Exciting zumba session for mind and body fitness",
    bannerPhoto: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    eventType: "In Person",
    audienceNumber: "10",
    ticketPriceINR: "0",
    classification: "Health and Fitness",
    hostName: "Rahul Saxena",
    contactEmailAddress: "Rahul@hcl.com",
    locationAddressMeetingLink: "SDC tower-2,Lucknow SEZ",
    privateEvent: true,
    dateTime: "2024-01-12 14:00",
  },
  {
    eventName: "International Yoga Festival",
    description: "Join us in person for the world famous annual International Yoga Festival in 2024-- uniting yogis of every culture, colour and creed!",
    bannerPhoto: "https://commondatastorage.googleapis.com/offeringtree.com/production/uploads/graphic/graphic/2f57ae6d-a20b-4b97-a58c-8726d96d5776/half_size_1693502541464_offering_image.jpg?1693502549",
    eventType: "In Person",
    audienceNumber: "100",
    ticketPriceINR: "0",
    classification: "yoga",
    hostName: "HCL HR",
    contactEmailAddress: "Surbhi@hcl.com",
    locationAddressMeetingLink: "HCL SEZ Lucknow",
    privateEvent: false,
    dateTime: "2024-04-08 07:00",
  },
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
  {
    eventName: "Painting Competition.",
    description: "Dwelve in painting with our painting event.",
    bannerPhoto: "https://thumbs.dreamstime.com/z/vector-illustration-kids-painting-competition-poster-30148697.jpg",
    eventType: "In Person",
    audienceNumber: "150",
    ticketPriceINR: "0",
    classification: "Education",
    hostName: "Shivi",
    contactEmailAddress: "Shivi@hcl.com",
    locationAddressMeetingLink: "Indra Dam, Lucknow.",
    privateEvent: true,
    dateTime: "2024-01-28 14:00",
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
                RSVP
              </button>
              <button className="w-full px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black text-white font-semibold rounded-md">
                See Details
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

export default CardDetails;