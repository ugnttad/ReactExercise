import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function BookingForm() {
  return (
    <div className="mx-auto" style={{ maxWidth: "800px" }}>
      <form>
        <div className="row mb-3">
          <div className="col-md-4 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name *"
              name="name"
              required
            />
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email *"
              name="email"
              required
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              name="dateService"
              required
            >
              <option value="">Select a Service *</option>
              <option value="lunch">Lunch (12:00 - 15:00)</option>
              <option value="dinner">Dinner (18:00 - 22:00)</option>
              <option value="weekend-brunch">
                Weekend Brunch (10:00 - 14:00)
              </option>
              <option value="late-night">Late Night (22:00 - 01:00)</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Please write your requests..."
            name="message"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning px-4 py-2 fw-bold">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
