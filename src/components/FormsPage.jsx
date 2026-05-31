import Logo from "../assets/logo.jpeg";
const FormsPage = () => {
  return (
    <>
      <div className="container mx-auto max-md p-4">
        <div>
          <img src={Logo} alt="logo" className="logo mx-auto" />
          <h1 className="heading">ESTIMATE / INVOICE</h1>
        </div>
        <a href="http://localhost:5173/display">display</a>
        <form action="" className="form_container">
          <h3 className="heading_secondary">Client Information</h3>
          <div className="input_container">
            <div>
              <label for="clientName">Client Name: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>
            <div>
              <label for="clientName">Location: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>
            <div>
              <label for="clientName">Contact: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>
            <div>
              <label for="clientName">Project Title: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>
            <button className="btn"> Add Item</button>
          </div>
        </form>
        <form action="" className="form_container">
          <h3 className="heading_secondary ">Add Material</h3>
          <div className="input_container">
            <div>
              <label for="clientName">Item Description: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>
            <div>
              <label for="clientName">Quantity: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>
            <div>
              <label for="clientName">Unit Price: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>

            <button className="btn"> Add Item</button>
          </div>
        </form>
        {/* WORKMANSHIP  */}
        <form action="" className="form_container">
          <h3 className="heading_secondary">Workmanship / Transport</h3>
          <div className="input_container">
            <div>
              <label for="clientName">Transportation: </label>
              <input
                type="text"
                placeholder="client name"
                name="client_name"
                className="input_field"
              />
            </div>

            <div>
              <label for="workmanship">Workmanship: </label>
              <input
                type="text"
                placeholder="client name"
                name="workmanship"
                className="input_field"
              />
            </div>
            <button className="btn"> Add </button>
          </div>
        </form>
        <div className="footer">
          <p>&copy; 2026 Gams & Lams Painting & Decorating.</p>
          <span>All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
