import CustomerHeader from "./Components/CustomerHeader";
import Sidebar from "./Components/Sidebar";
import "./customer-admin.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Sidebar />

          <div className="content-area">
            <CustomerHeader />
            <main className="main-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
