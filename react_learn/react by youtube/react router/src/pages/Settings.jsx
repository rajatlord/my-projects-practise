import { useLocation } from "react-router-dom";

function Settings() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const danger = searchParams.get('danger');

  return (
    <>
      {danger === "true" && <h1>⚠️ You are in danger mode</h1>}
      <h2>Settings Page</h2>
    </>
  );
}

export default Settings;
