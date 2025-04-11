import React, { useState } from "react";
import hexx from "../Img/hex.jpeg"; // Correct import syntax for the background image

const MyTicketsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tickets = [
    {
      ticketNumber: "ISW-15302-D0V7X4",
      subject: "Failed Payment Notification Push",
      dateCreated: "10 Oct, 2024 - 09:27AM",
      status: "Resolved",
      reason: "Information Provided",
      resolvedOn: "10 Oct, 2024 - 09:57AM",
    },
    {
      ticketNumber: "ISW-15301-Y7Y5F9",
      subject: "Failed Payment Notification Push",
      dateCreated: "10 Oct, 2024 - 09:26AM",
      status: "Resolved",
      reason: "Information Provided",
      resolvedOn: "10 Oct, 2024 - 09:58AM",
    },
  ];

  const filteredTickets = tickets.filter((ticket) =>
    ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logo}>Interswitch</div>
        <div style={styles.navLinks}>
          <a href="#new-ticket" style={styles.link}>
            New Ticket
          </a>
          <a href="#all-my-tickets" style={styles.link}>
            All My Tickets
          </a>
          <a href="#tickets-participant" style={styles.link}>
            Tickets I'm a Participant
          </a>
          <a href="#all-organization-tickets" style={styles.link}>
            All Organization Tickets
          </a>
        </div>
      </div>

      {/* Header */}
      <div style={styles.mainHeader}>
        <h1>My Tickets</h1>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Search Bar */}
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button style={styles.exportButton}>Export (.xlsx)</button>
        </div>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ticket Number</th>
              <th style={styles.th}>Subject</th>
              <th style={styles.th}>Date Created</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Reason</th>
              <th style={styles.th}>Resolved On</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket, index) => (
              <tr key={index}>
                <td style={styles.td}>{ticket.ticketNumber}</td>
                <td style={styles.td}>{ticket.subject}</td>
                <td style={styles.td}>{ticket.dateCreated}</td>
                <td style={styles.td}>
                  <span style={styles.status}>{ticket.status}</span>
                </td>
                <td style={styles.td}>{ticket.reason}</td>
                <td style={styles.td}>{ticket.resolvedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2024 Interswitch. All rights reserved.
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    minHeight: "100vh",
    width: "100vw",
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    width: "100%",
    borderBottom: "1px solid #ddd",
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
  mainHeader: {
    backgroundImage: `url(${hexx})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
    width: "100%",
  },
  content: {
    flex: "1",
    padding: "20px",
    width: "100%",
    boxSizing: "border-box",
  },
  searchBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchInput: {
    width: "300px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  exportButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left",
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #ddd",
    padding: "12px",
  },
  status: {
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "white",
    backgroundColor: "#28a745",
  },
  footer: {
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    borderTop: "1px solid #ddd",
  },
};

export default MyTicketsPage;
