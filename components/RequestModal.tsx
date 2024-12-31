import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogProps {
  open: boolean;
  onClose: (open: boolean) => void;
}
export default function RequestModal({ open, onClose }: DialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    serviceType: "",
    description: "",
    appointmentDate: "",
    appointmentTime: "",
    availability: "",
    comments: "",
    files: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log("Form submitted:", formData);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Request Form</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white shadow-md rounded-lg space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Name */}
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="address"
              >
                Street Address
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="state"
              >
                State/Province
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Type of Service Needed */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="serviceType"
            >
              Type of Service Needed
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md"
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="electricalInstallations">
                Electrical Installations
              </option>
              <option value="solarSystemInstallation">
                Solar System Installation
              </option>
              <option value="soundSystemInstallation">
                Sound System Installation
              </option>
              <option value="securitySystems">Security Systems</option>
              <option value="electricalMaintenance">
                Electrical Maintenance
              </option>
              <option value="other">Other (Please specify)</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="description"
            >
              Description of Issue or Request
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-md"
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Preferred Appointment Date and Time */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="appointmentDate"
              >
                Preferred Appointment Date
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="appointmentTime"
              >
                Preferred Appointment Time
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="time"
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Availability */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="availability"
            >
              Availability for Follow-up Call
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional Comments */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="comments"
            >
              Additional Comments
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-md"
              id="comments"
              name="comments"
              rows={4}
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Upload Photos or Documents */}
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="files">
              Upload Photos or Documents (Optional)
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="file"
              id="files"
              name="files"
              onChange={handleFileChange}
              multiple
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            type="submit"
          >
            Submit Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
