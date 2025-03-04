/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */

export default function Spinner() {
  return (
    <>
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="loading-spinner-text">Loading</span>
        </div>
      </div>
    </>
  );
}
