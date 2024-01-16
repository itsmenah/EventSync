import React from "react";

const CardDetails = () => {
  // Create an array of event objects
  const events = [
    {
      eventName: "Event 1",
      description: "Description 1",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "100",
      ticketPriceINR: "50",
      classification: "Education",
      hostName: "Host 1",
      contactEmailAddress: "host1@example.com",
      locationAddressMeetingLink: "Location 1",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    {
      eventName: "Event 2",
      description: "Description 2",
      bannerPhoto: "No file chosen",
      eventType: "In Person",
      audienceNumber: "150",
      ticketPriceINR: "75",
      classification: "Education",
      hostName: "Host 2",
      contactEmailAddress: "host2@example.com",
      locationAddressMeetingLink: "Location 2",
      privateEvent: true,
    },
    // Add more events as needed
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        backgroundColor: "rgb(224, 242, 254)", // Add this line
      }}
    >
      {events.map((event, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{event.eventName}</h3>
          <p>{event.description}</p>
          <p>Host: {event.hostName}</p>
          <p>Email: {event.contactEmailAddress}</p>
          <p>Location: {event.locationAddressMeetingLink}</p>
          <p>Private Event: {event.privateEvent.toString()}</p>
          <button className="w-full my-5 px-5 py-2 bg-sky-500 hover:bg-sky-400 hover:text-black hover:w-[90%] text-white font-semibold rounded-md">
            See Events
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardDetails;
