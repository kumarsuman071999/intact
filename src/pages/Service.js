import React, { useState } from "react";

function Service() {
  const categories = ["Category1", "category2", "category3"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [escalation, setEscalation]=useState(false);

  const handleCheckBoxEscalation=(e)=>{
    setEscalation(e.target.checked);
    
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  

  const handleSubmit = (e) => {
    // Handle submit logic here
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Form saved");
  };

  const handleResolveIncident = () => {
    // Handle resolve incident logic here
    console.log("Incident resolved");
  };

  const handleCreateServiceRequest = () => {
    // Handle create service request logic here
    console.log("Service request created");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="column">
          <label htmlFor="number">Number:</label>
          <input type="text" id="number" name="number" />

          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" name="contact" />

          <label htmlFor="behalf">On behalf of:</label>
          <input type="text" id="behalf" name="behalf" />

          <label htmlFor="phone">Alternate phone:</label>
          <input type="text" id="phone" name="phone" />

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />

          <label htmlFor="category">Category:</label>
          <select
            id="categoryDropdown"
            name="categoryDropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          

          <label htmlFor="configuration">Configuration Item:</label>
          <input type="text" id="configuration" name="configuration" />

          <label htmlFor="business">Business service:</label>
          <input type="text" id="business" name="business" />
        </div>

        <div className="column">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" />

          <label htmlFor="impact">Impact:</label>
          <input type="text" id="impact" name="impact" />

          <label htmlFor="urgency">Urgency:</label>
          <input type="text" id="urgency" name="urgency" />

          <label htmlFor="priority">Priority:</label>
          <input type="text" id="priority" name="priority" />

          <label htmlFor="group">Assignemet group:</label>
          <input type="text" id="group" name="group" />

          <label htmlFor="assignedTo">Assigned to:</label>
          <input type="text" id="assignedTo" name="assignedTo" />

          <label>
            <input
              type="checkbox"
              onChange={handleCheckBoxEscalation}
              checked={escalation}
            />
            Manual escalation sent:
          </label>
          {/* <input type="text" id="escalation" name="escalation" /> */}

          <label htmlFor="bu">Owning BU:</label>
          <input type="text" id="bu" name="bu" />
        </div>
        <div className="row1">
          <button type="button" className="btn" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="btn" onClick={handleSave}>
            Save
          </button>

          <button type="button" className="btn" onClick={handleResolveIncident}>
            Resolve Incident
          </button>
          <button
            type="button"
            className="btn"
            onClick={handleCreateServiceRequest}
          >
            Create Service Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default Service;
