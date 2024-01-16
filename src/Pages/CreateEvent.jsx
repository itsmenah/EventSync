import React from 'react';
import Footer from "../Components/Homepage/Footer";

const EventForm = () => {
  return (
    <div className="bg-base-900">
      <div className="container mx-auto text-blue-500 text-center py-4">
        <h1 className="text-4xl font-bold">Enter the below details to create Event.</h1>
      </div>

      <div className="container mx-auto py-4">
        <div className="max-w-2xl mx-auto bg-base-100 p-6 rounded-md shadow-xl">
          <form className="form-inline">
            {/* Event Name */}
            <div className="form-group mb-4">
              <label htmlFor="eventName" className="text-blue-500">Event Name</label>
              <input type="text" className="form-control border-2 rounded-md p-2 w-full" id="eventName" placeholder="Enter Event Name" required />
            </div>

            {/* Description */}
            <div className="form-group mb-4">
              <label htmlFor="description" className="text-blue-500">Description</label>
              <textarea className="form-control border-2 rounded-md p-2 w-full" id="description" rows="5" placeholder="Enter Description" required></textarea>
            </div>

            {/* Banner Photo */}
            <div className="form-group mb-4">
              <label htmlFor="bannerPhoto" className="text-blue-500">Banner Photo</label>
              <input type="file" className="form-control-file" id="bannerPhoto" accept="image/*" />
            </div>

            {/* Event Type */}
            <div className="form-group mb-4">
              <label htmlFor="eventType" className="text-blue-500">Event Type</label>
              <select className="form-control border-2 rounded-md p-2 w-full" id="eventType" required>
                <option value="InPerson">In Person</option>
                <option value="Virtual">Virtual</option>
              </select>
            </div>

            {/* Expected Number of Audience */}
            <div className="form-group mb-4">
              <label htmlFor="audienceNumber" className="text-blue-500">Expected Number of Audience</label>
              <input type="number" className="form-control border-2 rounded-md p-2 w-full" id="audienceNumber" placeholder="Enter Audience Number" required />
            </div>

            {/* Ticket Price */}
            <div className="form-group mb-4">
              <label htmlFor="ticketPrice" className="text-blue-500">Ticket Price (INR)</label>
              <input type="number" className="form-control border-2 rounded-md p-2 w-full" id="ticketPrice" placeholder="Enter Ticket Price" required />
            </div>

            {/* Classification */}
            <div className="form-group mb-4">
              <label htmlFor="classification" className="text-blue-500">Classification</label>
              <select className="form-control border-2 rounded-md p-2 w-full" id="classification" required>
                <option value="Education">Education</option>
                <option value="Recreational">Recreational</option>
                <option value="Fest">Fest</option>
                <option value="Seminars">Seminars</option>
                <option value="HealthAndFitness">Health and Fitness</option>
                <option value="MentalHealth">Mental Health</option>
              </select>
            </div>

            {/* Host Name */}
            <div className="form-group mb-4">
              <label htmlFor="hostName" className="text-blue-500">Host Name</label>
              <input type="text" className="form-control border-2 rounded-md p-2 w-full" id="hostName" placeholder="Enter Host Name" required />
            </div>

            {/* Contact Email Address */}
            <div className="form-group mb-4">
              <label htmlFor="contactEmail" className="text-blue-500">Contact Email Address</label>
              <input type="email" className="form-control border-2 rounded-md p-2 w-full" id="contactEmail" placeholder="Enter Email Address" required />
            </div>

            {/* Location/Address/Meeting Link */}
            <div className="form-group mb-4">
              <label htmlFor="eventLocation" className="text-blue-500">Location/Address/Meeting Link</label>
              <input type="text" className="form-control border-2 rounded-md p-2 w-full" id="eventLocation" placeholder="Enter Location/Address/Meeting Link" required />
            </div>

            {/* Is it a Private Event */}
            <div className="form-group mb-4">
              <label htmlFor="privateEvent" className="text-blue-500">Is it a Private Event?</label>
              <select className="form-control border-2 rounded-md p-2 w-full" id="privateEvent" required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto bg-sky-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default EventForm;
